// Tests for the Private Job Finder: data quality, matching, salary display rules,
// skills gap, learning suggestions. All people are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  PJ_EDUCATION, PJ_SKILLS, PJ_CATEGORIES, PJ_EMP_TYPES, PJ_WORK_MODES, PJ_SHIFTS, PJ_CERTS
} from "../data/pj-options.js";
import { ROLES } from "../data/private-roles.js";
import { SALARIES } from "../data/salary.js";
import { COMPANIES, COMPANY_TYPES, INDUSTRIES, VERIFY_TOOLS, REVIEW_SITES } from "../data/companies.js";
import { EXTRA_LEARNING } from "../data/learning-extra.js";
import { ALL_SKILLS } from "../data/options.js";
import {
  normalizePJ, validatePJ, evaluateRole, matchRoles, salaryView, salaryVsMin, companiesForRole,
  searchLinks, gapAnalysis, recommendLearning, skillsToLearn, allLearning, feederRoles, LEARNING_PATHS
} from "../js/pj-model.js";

const TODAY = "2026-10-23";
const has = (list, key) => list.some((m) => m.key === key);

function person(changes = {}) {
  const base = {
    state: "UP", city: "Kanpur", locationPref: "near-home",
    edu: { level: "class12" }, skills: ["computer-basics", "communication"], experience: "fresher",
    prefs: { cats: ["office", "customer-support"] }
  };
  return { ...base, ...changes, edu: { ...base.edu, ...(changes.edu || {}) }, prefs: { ...base.prefs, ...(changes.prefs || {}) } };
}

// ---------- Data quality ----------
test("options: unique ids and both languages", () => {
  for (const list of [PJ_EDUCATION, PJ_SKILLS, PJ_CATEGORIES, PJ_EMP_TYPES, PJ_WORK_MODES, PJ_SHIFTS, PJ_CERTS]) {
    assert.equal(new Set(list.map((x) => x.id)).size, list.length);
    list.forEach((x) => assert.ok(x.en && x.hi, x.id));
  }
  const courseSkills = new Set(ALL_SKILLS.map((s) => s.id));
  PJ_SKILLS.forEach((s) => {
    assert.ok(["course", "practice", "licence"].includes(s.learn), s.id);
    s.courseSkills.forEach((c) => assert.ok(courseSkills.has(c), `${s.id} → ${c}`));
  });
});

test("roles: complete, bilingual, links resolve, no salary numbers in text", () => {
  const skills = new Set(PJ_SKILLS.map((s) => s.id));
  const cats = new Set(PJ_CATEGORIES.map((s) => s.id));
  const roleIds = new Set(ROLES.map((r) => r.id));
  const salaryIds = new Set(SALARIES.map((s) => s.id));
  const certs = new Set(PJ_CERTS.map((s) => s.id));
  const levels = new Set(PJ_EDUCATION.map((s) => s.id));
  assert.equal(roleIds.size, ROLES.length);
  assert.ok(ROLES.length >= 25);
  for (const r of ROLES) {
    for (const f of ["title", "does", "eduNote"]) assert.ok(r[f].en && r[f].hi, `${r.id}.${f}`);
    r.cats.forEach((c) => assert.ok(cats.has(c), `${r.id} cat ${c}`));
    [...r.required, ...r.helpful].forEach((s) => assert.ok(skills.has(s), `${r.id} skill ${s}`));
    r.next.forEach((n) => assert.ok(roleIds.has(n), `${r.id} next ${n}`));
    if (r.salary) assert.ok(salaryIds.has(r.salary), `${r.id} salary ${r.salary}`);
    if (r.formal) {
      assert.ok(r.formal.note.en && r.formal.note.hi);
      (r.formal.anyCert || []).forEach((c) => assert.ok(certs.has(c), c));
      (r.formal.anyEdu || []).forEach((e) => assert.ok(levels.has(e), e));
    }
    assert.ok(r.eduRank === null || (r.eduRank >= 0 && r.eduRank <= 6));
    assert.ok(!/₹|\bRs\b|lakh|guarantee/i.test(JSON.stringify(r)), `${r.id}: no money or promises in role text`);
    assert.ok(r.search && r.modes.length && r.shifts.length && r.types.length);
  }
});

test("salary records: copied fields are sane and have a source url and date", () => {
  for (const s of SALARIES) {
    assert.ok(s.p10 > 0 && s.p90 > s.p10, s.id);
    assert.ok(s.avg >= s.p10 && s.avg <= s.p90, s.id);
    assert.ok(Number.isInteger(s.profiles) && s.profiles > 0, s.id);
    assert.match(s.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(s.url.startsWith("https://www.payscale.com/research/IN/"), s.id);
  }
});

test("companies: no fake verification, sources present, valid links", () => {
  const types = new Set(COMPANY_TYPES.map((t) => t.id));
  const inds = new Set(INDUSTRIES.map((t) => t.id));
  const cats = new Set(PJ_CATEGORIES.map((s) => s.id));
  assert.equal(new Set(COMPANIES.map((c) => c.id)).size, COMPANIES.length);
  assert.ok(COMPANIES.length >= 20);
  for (const c of COMPANIES) {
    assert.ok(types.has(c.type) && inds.has(c.industry), c.id);
    assert.ok(c.business.en && c.business.hi, c.id);
    assert.ok(c.website.startsWith("https://"), c.id);
    assert.ok(c.sources.length >= 1 && c.sources.every((u) => u.startsWith("https://")), c.id);
    assert.ok(c.sources.some((u) => u.includes("wikipedia.org")), `${c.id}: facts need a source`);
    if (c.careers.checked) {
      assert.ok(c.careers.url.startsWith("https://"), c.id);
      assert.ok(c.sources.includes(c.careers.url), `${c.id}: checked careers page is listed as a source`);
    } else assert.equal(c.careers.url, null, `${c.id}: unchecked careers links are not shown`);
    c.cats.forEach((x) => assert.ok(cats.has(x), `${c.id} cat ${x}`));
    const all = JSON.stringify(c);
    assert.ok(!/rating|stars|"verified"|hiring now|guarantee/i.test(all), `${c.id}: no ratings or hiring claims`);
    assert.ok(!c.logo, "no logos without permission");
  }
  [...VERIFY_TOOLS, ...REVIEW_SITES].forEach((t) => assert.ok(t.url.startsWith("https://")));
  assert.ok(VERIFY_TOOLS.filter((t) => t.id !== "cyber").every((t) => /\.gov\.in\/$/.test(t.url)));
});

test("extra learning: honest cost labels, no prices or ratings", () => {
  const skills = new Set(PJ_SKILLS.map((s) => s.id));
  for (const o of EXTRA_LEARNING) {
    assert.ok(o.title.en && o.title.hi && o.about.en && o.about.hi, o.id);
    assert.ok(o.url.startsWith("https://"), o.id);
    assert.ok([null, "free", "fee"].includes(o.cost), o.id);
    if (o.cost) assert.ok(o.costNote && o.costNote.en && o.costNote.hi, `${o.id}: cost needs an explanation`);
    assert.ok([null, "recognised", "provider"].includes(o.cert), o.id);
    o.skills.forEach((s) => assert.ok(skills.has(s), `${o.id}: ${s}`));
    assert.ok(!/₹|\$|rating|placement rate|guarantee/i.test(JSON.stringify(o)), o.id);
  }
  // Paid platforms are never labelled as government-recognised.
  EXTRA_LEARNING.filter((o) => o.cost === "fee").forEach((o) => assert.notEqual(o.cert, "recognised", o.id));
});

// ---------- Form ----------
test("normalize keeps only known values and strips html", () => {
  const p = normalizePJ({ name: "<b>Asha</b>", skills: ["typing", "hacking"], edu: { level: "phd" }, prefs: { cats: ["retail", "x"], minSalary: "-5" } });
  assert.equal(p.name, "bAsha/b");
  assert.deepEqual(p.skills, ["typing"]);
  assert.equal(p.edu.level, "");
  assert.deepEqual(p.prefs.cats, ["retail"]);
  assert.equal(p.prefs.minSalary, null);
  for (const junk of [null, undefined, "x", 5, []]) assert.doesNotThrow(() => normalizePJ(junk));
});

test("validation: required fields, PIN, year and salary limits", () => {
  const now = new Date("2026-10-23T10:00:00Z");
  assert.deepEqual(validatePJ(person(), 0, now), []);
  const errs = validatePJ({ pin: "012345", edu: { year: 1900 }, prefs: { minSalary: "abc" } }, 0, now).map((e) => e.key);
  for (const k of ["pj.err.state", "pj.err.pin", "pj.err.locationPref", "pj.err.level", "pj.err.year", "pj.err.experience", "pj.err.cats", "pj.err.minSalary"]) {
    assert.ok(errs.includes(k), k);
  }
  assert.deepEqual(validatePJ(person({ pin: "208001" }), 1, now), []);
  assert.equal(validatePJ({}, 2, now).length, 1, "step check only looks at that step");
  // Optional things really are optional.
  assert.deepEqual(validatePJ(person({ name: "", city: "", pin: "" }), 0, now), []);
});

// ---------- Matching ----------
test("Class 12 fresher with basic computer and communication: office/support roles fit", () => {
  const res = matchRoles(person());
  const byId = Object.fromEntries(res.map((r) => [r.roleId, r]));
  assert.equal(byId["customer-support"].category, "strong");
  assert.equal(byId["office-assistant"].category, "strong");
  assert.ok(byId["data-entry-operator"], "related role shown");
  assert.equal(byId["data-entry-operator"].category, "entry", "one missing skill for a fresher = entry-level");
  assert.ok(!byId["store-manager"], "unrelated, unreachable roles are not listed");
  assert.equal(res[0].category, "strong", "strongest first");
});

test("lower education is never a silent rejection", () => {
  const r = evaluateRole(ROLES.find((x) => x.id === "accounts-assistant"), person({ skills: ["accounting", "ms-office"] }));
  assert.equal(r.category, "training");
  assert.ok(has(r.gaps, "pj.gap.edu"));
  const list = matchRoles(person({ prefs: { cats: ["accounts"] }, skills: ["accounting", "ms-office"] }));
  assert.ok(list.some((x) => x.roleId === "accounts-assistant"), "still shown with what is needed");
});

test("no formal education: practical roles still appear", () => {
  const res = matchRoles(person({ edu: { level: "none" }, skills: ["communication"], prefs: { cats: ["warehouse", "delivery"] } }));
  const ids = res.map((r) => r.roleId);
  assert.ok(ids.includes("warehouse-associate"));
  const w = res.find((r) => r.roleId === "warehouse-associate");
  assert.ok(["strong", "good"].includes(w.category));
});

test("licence rules: a driving job without a licence needs training, with one it fits", () => {
  const d = ROLES.find((x) => x.id === "delivery-executive");
  const without = evaluateRole(d, person({ skills: ["driving"], prefs: { cats: ["delivery"] } }));
  assert.equal(without.formalOk, false);
  assert.equal(without.category, "training");
  const withL = evaluateRole(d, person({ skills: ["driving"], edu: { certs: ["licence-lmv"] }, prefs: { cats: ["delivery"] } }));
  assert.equal(withL.category, "strong");
});

test("experience: senior roles become 'career growth', not hidden", () => {
  const p = person({ skills: ["retail-ops", "team-lead", "inventory", "sales", "ms-office"], edu: { level: "graduation" }, experience: "lt1", prefs: { cats: ["store-manager"] } });
  const r = matchRoles(p).find((x) => x.roleId === "store-manager");
  assert.equal(r.category, "growth");
  assert.ok(has(r.gaps, "pj.gap.exp"));
  const exp = matchRoles({ ...p, experience: "y5" }).find((x) => x.roleId === "store-manager");
  assert.equal(exp.category, "strong");
});

test("work-from-home only: on-site roles are left out", () => {
  const res = matchRoles(person({ locationPref: "remote", prefs: { cats: ["office", "customer-support", "data-entry"] } }));
  assert.ok(res.length > 0);
  res.forEach((r) => assert.ok(r.role.modes.includes("remote") || r.isTarget, r.roleId));
});

test("shift and job-type mismatches are flagged, not hidden", () => {
  const r = evaluateRole(ROLES.find((x) => x.id === "office-assistant"), person({ prefs: { shift: "night", types: ["freelance"] } }));
  assert.ok(has(r.gaps, "pj.gap.shift") && has(r.gaps, "pj.gap.type"));
  assert.equal(r.category, "good", "still a fit on skills, but not strong");
});

test("target role is always shown even when far away", () => {
  const res = matchRoles(person({ prefs: { cats: ["retail"], targetRole: "software-developer" } }));
  assert.ok(res.some((r) => r.roleId === "software-developer" && r.isTarget));
});

test("empty and junk profiles do not crash", () => {
  for (const p of [null, {}, "x", normalizePJ({})]) assert.doesNotThrow(() => matchRoles(p));
});

// ---------- Salary ----------
test("salary is shown only when the data is strong enough", () => {
  const ok = salaryView("customer-service", TODAY);
  assert.equal(ok.show, true);
  assert.equal(ok.low, 16000);   // 194000 / 12 ≈ 16167 → nearest 500
  assert.equal(ok.high, 50500);  // 604000 / 12 ≈ 50333 → nearest 500
  assert.ok(ok.low < ok.avg && ok.avg < ok.high);
  assert.equal(salaryView("receptionist", TODAY).reason, "few");      // 37 profiles
  assert.equal(salaryView("teacher", TODAY).reason, "old");           // updated 2023
  assert.equal(salaryView("delivery-driver", TODAY).reason, "wide");  // 99k–2m
  assert.equal(salaryView(null, TODAY).reason, "none");
  assert.equal(salaryView("office-assistant", TODAY).limited, true);  // 89 profiles
  // Data gets too old with time — worked out from today's date.
  assert.equal(salaryView("sales-executive", "2027-04-01").reason, "old");
});

test("expected salary compared honestly", () => {
  const v = salaryView("customer-service", TODAY);
  assert.equal(salaryVsMin(v, 60000), "above");
  assert.equal(salaryVsMin(v, 20000), "within");
  assert.equal(salaryVsMin(v, 8000), "below");
  assert.equal(salaryVsMin(salaryView("teacher", TODAY), 20000), null);
  assert.equal(salaryVsMin(v, null), null);
});

// ---------- Companies and search ----------
test("companies for a role share its category; search links are encoded", () => {
  const role = ROLES.find((r) => r.id === "customer-support");
  const list = companiesForRole(role);
  assert.ok(list.length >= 5);
  list.forEach((c) => assert.ok(c.cats.some((x) => role.cats.includes(x))));
  const s = searchLinks(role, person({ city: "Kanpur & Co" }), "Uttar Pradesh");
  assert.equal(s.place, "Kanpur & Co");
  const indeed = s.links.find((l) => l.id === "indeed").url;
  assert.ok(indeed.includes("l=Kanpur%20%26%20Co") && indeed.includes("q=customer%20support%20executive"));
  assert.equal(searchLinks(role, person({ locationPref: "remote" })).place, "Remote");
  assert.equal(searchLinks(role, person({ locationPref: "state", city: "" }), "Bihar").place, "Bihar");
  s.links.forEach((l) => assert.ok(l.url.startsWith("https://")));
});

// ---------- Gap analysis ----------
test("gap: Class 12 with basic computer → Digital Marketing Executive (illustrative case)", () => {
  const g = gapAnalysis(person({ skills: ["computer-basics"], prefs: { targetRole: "digital-marketing-executive" } }), "digital-marketing-executive", TODAY);
  assert.deepEqual(g.missingCourse, ["digital-marketing"]);
  assert.equal(g.ready, false);
  const keys = g.steps.map((s) => s.key);
  assert.ok(keys.includes("pj.step.course"));
  assert.ok(keys.includes("pj.step.portfolio"), "digital roles need a portfolio");
  assert.equal(keys[keys.length - 1], "pj.step.apply");
  assert.ok(g.salary.show);
});

test("gap separates course skills, practice, licences and formal qualifications", () => {
  const g = gapAnalysis(person({ skills: [] }), "store-manager", TODAY);
  assert.ok(g.missingPractice.includes("team-lead") && g.missingPractice.includes("retail-ops"));
  assert.ok(g.missingCourse.includes("ms-office"));
  assert.ok(g.eduGap, "graduation usually asked");
  assert.equal(g.expGap, 4);
  const keys = g.steps.map((s) => s.key);
  assert.ok(keys.includes("pj.step.edu") && keys.includes("pj.step.practice") && keys.includes("pj.step.stepping"));

  const t = gapAnalysis(person({ edu: { level: "graduation" }, skills: ["teaching", "communication"] }), "private-teacher", TODAY);
  assert.equal(t.formalOk, false);
  assert.ok(t.steps.some((s) => s.key === "pj.step.formal"), "B.Ed/TET cannot be replaced by a short course");
});

test("stepping-stone roles come from the role ladder", () => {
  assert.deepEqual(feederRoles("store-manager").map((r) => r.id), ["store-supervisor"]);
  const g = gapAnalysis(person({ skills: ["communication", "retail-ops"], experience: "lt1" }), "store-supervisor", TODAY);
  const step = g.steps.find((s) => s.key === "pj.step.stepping");
  assert.ok(step && step.vars.roles.includes("retail-sales-associate"));
});

test("unknown role gives null, not a crash", () => {
  assert.equal(gapAnalysis(person(), "astronaut", TODAY), null);
});

// ---------- Learning ----------
test("learning: relevant options first, best-of picks exist, paths filter", () => {
  const p = person({ skills: ["computer-basics"] });
  const g = gapAnalysis(p, "digital-marketing-executive", TODAY);
  const r = recommendLearning(skillsToLearn(g), p, "all", g.missingCourse);
  assert.ok(r.items.length >= 3);
  assert.ok(r.items[0].covers.includes("digital-marketing"));
  assert.notEqual(r.items[0].cost, "fee", "with equal relevance, free/government options come before paid ones");
  assert.ok(r.picks.free, "a free option exists");
  r.items.forEach((o) => assert.ok(o.covers.length > 0 || o.beginner));
  const paid = recommendLearning(skillsToLearn(g), p, "paid").items;
  paid.forEach((o) => assert.equal(o.cost, "fee"));
  const free = recommendLearning(skillsToLearn(g), p, "free").items;
  free.forEach((o) => assert.ok(o.cost === "free" || o.cost === "free-exam-fee"));
  for (const path of LEARNING_PATHS) assert.doesNotThrow(() => recommendLearning(["typing"], p, path));
});

test("learning: no internet pushes offline options up; JSS only for Class 12 or below", () => {
  const p = person({ edu: { level: "class10" }, env: { internet: "no" } });
  const r = recommendLearning(["repair"], p);
  assert.notEqual(r.items[0].mode, "online");
  assert.ok(allLearning().some((o) => o.id === "jss"));
  const grad = recommendLearning(["repair"], person({ edu: { level: "graduation" } })).items.map((o) => o.id);
  assert.ok(!grad.includes("jss"));
});

test("every option in the combined list has a url and a title in both languages", () => {
  for (const o of allLearning()) {
    assert.ok(o.url.startsWith("https://"), o.id);
    assert.ok(o.title.en && o.title.hi, o.id);
  }
});
