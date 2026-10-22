// Tests for the matching engine and the career dataset. All people are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  matchCareers, evaluateCareer, checkQualification, checkSkills, checkExperience, checkPreferences,
  FIT, STATUS
} from "../js/engine.js";
import { emptyProfile } from "../js/profile-model.js";
import { CAREERS, SECTORS } from "../data/careers.js";
import { SOURCES } from "../data/sources.js";
import { ALL_SKILLS, GOALS, EDUCATION_LEVELS } from "../data/options.js";

// ---------- Fixtures ----------
function person(changes = {}) {
  const p = emptyProfile();
  p.ageRange = "22-25"; p.state = "UP"; p.preferredLocation = "home-state"; p.employmentStatus = "unemployed";
  p.education.level = "graduation";
  p.experience.type = "fresher";
  return Object.assign(p, changes);
}

const base = {
  id: "test-job", sector: "private", title: { en: "Test", hi: "टेस्ट" }, summary: { en: "", hi: "" },
  education: ["class12", "graduation"], requiredSkills: ["excel", "tally", "accounting"], optionalSkills: ["typing"],
  minYearsExperience: 0, goals: ["private-job"], remoteFriendly: false, sources: ["ncs"],
  preferred: null, verification: { status: "demo", checkedOn: null }
};
const career = (o = {}) => ({ ...base, ...o });
const keys = (list) => list.map((m) => m.key);

// ---------- 1. Qualification matching ----------
test("qualification: meets, not met, any, varies, and missing", () => {
  assert.equal(checkQualification(career(), person()).result, "meets");
  assert.equal(checkQualification(career(), person({ education: { ...emptyProfile().education, level: "class10" } })).result, "not-met");
  assert.equal(checkQualification(career({ education: "any" }), person()).result, "any");
  assert.equal(checkQualification(career({ education: null }), person()).result, "unknown");
  assert.equal(checkQualification(career(), emptyProfile()).result, "unknown");
});

test("qualification: an additional qualification can satisfy the rule", () => {
  const p = person({ education: { ...emptyProfile().education, level: "class10" } });
  p.additionalQualifications = [{ level: "class12", specialization: "", passingYear: 2022 }];
  assert.equal(checkQualification(career(), p).result, "meets");
});

test("qualification: diploma is NOT assumed equal to Class 12 unless recorded", () => {
  const p = person({ education: { ...emptyProfile().education, level: "diploma" } });
  assert.equal(checkQualification(career(), p).result, "not-met");
});

// ---------- 2. Skills matching ----------
test("skills: lists what you have and what is missing", () => {
  const s = checkSkills(career(), person({ skills: ["excel", "typing"] }));
  assert.deepEqual(s.have, ["excel"]);
  assert.deepEqual(s.missing, ["tally", "accounting"]);
  assert.deepEqual(s.optionalHave, ["typing"]);
});

test("fit level follows the share of required skills", () => {
  const strong = evaluateCareer(career(), person({ goals: ["private-job"], skills: ["excel", "tally"] }));
  const possible = evaluateCareer(career(), person({ goals: ["private-job"], skills: ["excel"] }));
  const upskill = evaluateCareer(career(), person({ goals: ["private-job", "skill-development"], skills: [] }));
  assert.equal(strong.fit, FIT.STRONG);
  assert.equal(possible.fit, FIT.POSSIBLE);
  assert.equal(upskill.fit, FIT.UPSKILL);
  assert.ok(keys(upskill.next).includes("next.learn"));
});

test("a path needing skills you have none of is hidden unless you want to learn", () => {
  assert.equal(evaluateCareer(career(), person({ goals: ["private-job"], skills: ["driving"] })), null);
  assert.ok(evaluateCareer(career(), person({ goals: ["private-job", "career-change"], skills: [] })));
});

test("exam-based paths with no required skill are 'partial' unless related skills exist", () => {
  const exam = career({ sector: "government", requiredSkills: [], optionalSkills: ["typing"], goals: ["govt-job"] });
  assert.equal(evaluateCareer(exam, person({ goals: ["govt-job"] })).fit, FIT.POSSIBLE);
  assert.equal(evaluateCareer(exam, person({ goals: ["govt-job"], skills: ["typing"] })).fit, FIT.STRONG);
});

test("ranking: a job where you have every required skill comes before exam-only paths", () => {
  const p = person({ goals: ["govt-job", "private-job"], skills: ["tally", "accounting", "excel"] });
  const ids = matchCareers(p, CAREERS).matches.map((m) => m.careerId);
  assert.equal(ids[0], "accounts-assistant", ids.slice(0, 5).join());
});

// ---------- 3. Experience matching ----------
test("experience: not needed, meets, short, unknown when skipped", () => {
  const senior = career({ minYearsExperience: 3 });
  assert.equal(checkExperience(career(), person()), "not-needed");
  assert.equal(checkExperience(senior, person({ experience: { ...emptyProfile().experience, type: "experienced", years: 5 } })), "meets");
  assert.equal(checkExperience(senior, person()), "short");
  assert.equal(checkExperience(senior, person({ experience: { ...emptyProfile().experience, skipped: true } })), "unknown");
  const r = evaluateCareer(senior, person({ goals: ["private-job"], skills: ["excel", "tally", "accounting"] }));
  assert.notEqual(r.fit, FIT.STRONG, "short experience cannot be a strong fit");
  assert.ok(keys(r.checks).includes("check.expShort"));
});

// ---------- 4. Preference filtering ----------
test("preferences: careers unrelated to goals and skills are left out", () => {
  const r = evaluateCareer(career({ goals: ["govt-job"] }), person({ goals: ["business"], skills: ["driving"] }));
  assert.equal(r, null);
});

test("preferences: remote-only users are warned about on-site jobs", () => {
  const p = person({ goals: ["private-job"], skills: ["excel", "tally", "accounting"], preferredLocation: "remote" });
  assert.equal(checkPreferences(career(), p).locationConflict, true);
  const r = evaluateCareer(career(), p);
  assert.notEqual(r.fit, FIT.STRONG);
  assert.ok(keys(r.checks).includes("check.location"));
  assert.equal(evaluateCareer(career({ remoteFriendly: true }), p).fit, FIT.STRONG);
});

test("matchCareers puts careers with an unmet qualification into future paths", () => {
  const p = person({ education: { ...emptyProfile().education, level: "class10" }, goals: ["govt-job"] });
  const out = matchCareers(p, CAREERS);
  assert.ok(out.matches.some((m) => m.careerId === "ssc-mts"));
  assert.ok(!out.matches.some((m) => m.careerId === "ssc-cgl"));
  assert.ok(out.futurePaths.some((m) => m.careerId === "ssc-cgl"));
});

// ---------- Government eligibility uncertainty ----------
test("government demo records are always 'eligibility not yet verified'", () => {
  const out = matchCareers(person({ goals: ["govt-job"], skills: ["basic-computer", "typing"] }), CAREERS);
  const govt = out.matches.filter((m) => m.career.sector === "government");
  assert.ok(govt.length > 3);
  for (const m of govt) {
    assert.equal(m.status, STATUS.UNVERIFIED, m.careerId);
    assert.ok(keys(m.checks).includes("check.govtAge"), m.careerId);
  }
});

test("'eligible' only appears for source-checked records where every recorded rule passes", () => {
  const checked = career({ verification: { status: "source-checked", checkedOn: "2026-10-22" } });
  const pass = person({ goals: ["private-job"], skills: ["excel", "tally", "accounting"] });
  assert.equal(evaluateCareer(checked, pass).status, STATUS.ELIGIBLE);
  assert.equal(evaluateCareer(checked, person({ goals: ["private-job"], skills: ["excel"] })).status, STATUS.POTENTIAL);
  assert.equal(evaluateCareer(career(), pass).status, STATUS.POTENTIAL, "demo record never says eligible");
});

test("'verified active vacancy' is never produced (no live data in v1)", () => {
  const out = matchCareers(person({ goals: GOALS.map((g) => g.id), skills: ALL_SKILLS.map((s) => s.id) }), CAREERS);
  assert.ok(out.matches.length > 20);
  assert.ok(out.matches.every((m) => m.status !== STATUS.VACANCY));
});

test("category / PwD / ex-serviceman answers add an age-relaxation reminder", () => {
  const p = person({ goals: ["govt-job"] });
  p.eligibility.category = "obc";
  const m = matchCareers(p, CAREERS).matches.find((x) => x.careerId === "ssc-mts");
  assert.ok(keys(m.checks).includes("check.relaxation"));
});

test("rules that vary by state are shown as 'verify', not as eligible or rejected", () => {
  const m = matchCareers(person({ goals: ["govt-job"] }), CAREERS).matches.find((x) => x.careerId === "state-police");
  assert.equal(m.qualification, "unknown");
  assert.ok(keys(m.checks).includes("check.qualVaries"));
});

// ---------- Empty / invalid input ----------
test("empty, null and junk profiles do not crash", () => {
  for (const p of [emptyProfile(), null, undefined, {}, "x", { skills: "excel" }]) {
    const out = matchCareers(p, CAREERS);
    assert.equal(out.ready, false);
    assert.deepEqual(out.matches, []);
  }
  assert.deepEqual(matchCareers(person({ goals: ["govt-job"] }), null).matches, []);
});

test("a broken career record is skipped instead of breaking the list", () => {
  const out = matchCareers(person({ goals: ["private-job"], skills: ["excel"] }), [{ id: "broken" }, career()]);
  assert.deepEqual(out.matches.map((m) => m.careerId), ["test-job"]);
});

test("every match explains itself", () => {
  const out = matchCareers(person({ goals: ["private-job", "govt-job"], skills: ["excel", "typing"] }), CAREERS);
  for (const m of out.matches) {
    assert.ok(m.reasons.length > 0, `${m.careerId} has no reason`);
    assert.ok(m.next.length > 0, `${m.careerId} has no next step`);
  }
});

test("persona: ITI electrician wanting an apprenticeship gets relevant suggestions first", () => {
  const p = person({ education: { ...emptyProfile().education, level: "iti" }, goals: ["apprenticeship"], skills: ["electrician"] });
  const ids = matchCareers(p, CAREERS).matches.slice(0, 3).map((m) => m.careerId);
  assert.ok(ids.includes("electrician") && ids.includes("trade-apprentice"), ids.join());
});

// ---------- Dataset quality ----------
test("career dataset: required fields, valid ids, safe sources, no invented numbers", () => {
  const skillIds = new Set(ALL_SKILLS.map((s) => s.id));
  const goalIds = new Set(GOALS.map((g) => g.id));
  const levelIds = new Set(EDUCATION_LEVELS.map((l) => l.id));
  const sectorIds = new Set(SECTORS.map((s) => s.id));
  const seen = new Set();

  assert.ok(CAREERS.length >= 30, "at least 30 careers");
  for (const c of CAREERS) {
    assert.ok(!seen.has(c.id), `duplicate id ${c.id}`); seen.add(c.id);
    assert.ok(c.title.en && c.title.hi && c.summary.en && c.summary.hi, `${c.id} needs EN+HI text`);
    assert.ok(sectorIds.has(c.sector), `${c.id} sector`);
    assert.ok(c.education === "any" || c.education === null || (Array.isArray(c.education) && c.education.every((l) => levelIds.has(l))), `${c.id} education`);
    for (const s of [...c.requiredSkills, ...c.optionalSkills]) assert.ok(skillIds.has(s), `${c.id}: unknown skill ${s}`);
    assert.ok(c.goals.length && c.goals.every((g) => goalIds.has(g)), `${c.id} goals`);
    assert.ok(c.sources.length && c.sources.every((s) => SOURCES[s]), `${c.id} sources`);
    assert.ok(["demo", "source-checked"].includes(c.verification.status), `${c.id} verification`);
    const text = JSON.stringify(c);
    assert.ok(!/salary|₹|lakh|vacanc(y|ies) open|last date/i.test(text), `${c.id} must not contain salary or vacancy claims`);
  }
});

test("all source links are https and have a checked date", () => {
  for (const [id, s] of Object.entries(SOURCES)) {
    assert.ok(s.url.startsWith("https://"), id);
    assert.match(s.checked, /^\d{4}-\d{2}-\d{2}$/, id);
    assert.ok(s.en && s.hi, id);
  }
});
