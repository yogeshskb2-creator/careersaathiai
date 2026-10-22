// Tests for the Government Job Explorer data and the Scheme Finder rules.
// All people here are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import { RECRUITMENT_SOURCES, RECRUITMENT_CATEGORIES } from "../data/recruitment.js";
import { SCHEMES, SCHEME_CATEGORIES, MYSCHEME } from "../data/schemes.js";
import { matchSchemes, evaluateScheme } from "../js/scheme-match.js";
import { emptyProfile } from "../js/profile-model.js";
import { STATES } from "../data/options.js";

function person(changes = {}) {
  const p = emptyProfile();
  p.ageRange = "22-25"; p.state = "UP"; p.preferredLocation = "home-state"; p.employmentStatus = "unemployed";
  p.education.level = "graduation";
  return Object.assign(p, changes);
}
const scheme = (id) => SCHEMES.find((s) => s.id === id);
const keys = (list) => list.map((m) => m.key);

// ---------- Recruitment sources ----------
test("recruitment sources: valid, official-looking https links, both languages, no vacancy claims", () => {
  const cats = new Set(RECRUITMENT_CATEGORIES.map((c) => c.id));
  const states = new Set(STATES.map((s) => s.id));
  const ids = new Set();
  for (const s of RECRUITMENT_SOURCES) {
    assert.ok(!ids.has(s.id), `duplicate ${s.id}`); ids.add(s.id);
    assert.ok(cats.has(s.category), `${s.id} category`);
    assert.ok(s.url.startsWith("https://"), `${s.id} https`);
    assert.match(new URL(s.url).hostname, /(\.gov\.in|\.nic\.in|\.bank\.in|ibps\.in|rbi\.org\.in)$/, `${s.id} must be an official domain`);
    assert.ok(s.name.en && s.name.hi && s.covers.en && s.covers.hi, `${s.id} text`);
    assert.match(s.checked, /^\d{4}-\d{2}-\d{2}$/);
    if (s.state) assert.ok(states.has(s.state), `${s.id} state`);
    assert.ok(!/last date|apply by|\bvacancies?\b.*\d|₹/i.test(JSON.stringify(s)), `${s.id}: no dates, counts or fees`);
  }
});

test("every recruitment category the spec asks for has at least one source", () => {
  for (const c of ["central", "railway", "banking", "state", "teaching", "technical", "apprenticeship"]) {
    assert.ok(RECRUITMENT_SOURCES.some((s) => s.category === c), c);
  }
});

// ---------- Scheme records ----------
test("scheme records have every required field in both languages", () => {
  const cats = new Set(SCHEME_CATEGORIES.map((c) => c.id));
  for (const s of SCHEMES) {
    assert.ok(cats.has(s.category), `${s.id} category`);
    for (const f of ["name", "purpose", "audience", "ministry", "checkedFrom"]) {
      assert.ok(s[f].en && s[f].hi, `${s.id}.${f}`);
    }
    for (const f of ["eligibility", "benefits", "howToApply"]) {
      assert.ok(Array.isArray(s[f]) && s[f].length, `${s.id}.${f}`);
      s[f].forEach((x) => assert.ok(x.en && x.hi, `${s.id}.${f} text`));
    }
    assert.ok(s.officialUrl.startsWith("https://"), `${s.id} url`);
    assert.match(s.checked, /^\d{4}-\d{2}-\d{2}$/, `${s.id} checked`);
    const text = JSON.stringify(s).toLowerCase();
    assert.ok(!/guarantee(d)? (job|loan|placement)|you are eligible|100%/.test(text), `${s.id}: no promises`);
  }
  assert.ok(MYSCHEME.url.startsWith("https://www.myscheme.gov.in"));
});

test("every scheme category the spec asks for is covered", () => {
  for (const c of ["training", "employment", "apprenticeship", "entrepreneurship", "finance"]) {
    assert.ok(SCHEMES.some((s) => s.category === c), c);
  }
});

// ---------- Scheme matching: never "eligible", always "verify" ----------
test("every result tells the user the department/bank decides", () => {
  for (const r of matchSchemes(person({ goals: ["business"] }), SCHEMES)) {
    assert.ok(keys(r.checks).includes("sch.check.final"), r.schemeId);
    assert.ok(!("eligible" in r), "no eligibility verdict field");
  }
});

test("business goal surfaces Mudra and PMEGP; job-only goal does not", () => {
  const biz = matchSchemes(person({ goals: ["business"] }), SCHEMES).filter((r) => r.worthALook).map((r) => r.schemeId);
  assert.ok(biz.includes("mudra") && biz.includes("pmegp"), biz.join());
  const job = matchSchemes(person({ goals: ["govt-job"] }), SCHEMES).filter((r) => r.worthALook);
  assert.deepEqual(job, []);
});

test("PMEGP and Stand-Up India are not suggested to under-18s", () => {
  const p = person({ ageRange: "under18", goals: ["business"] });
  assert.equal(evaluateScheme(scheme("pmegp"), p).worthALook, false);
  assert.ok(keys(evaluateScheme(scheme("pmegp"), p).checks).includes("sch.check.ageOut"));
});

test("Stand-Up India: women or SC/ST fit; unknown group → asked to check; others not suggested", () => {
  const p = person({ goals: ["business"] });
  const unknown = evaluateScheme(scheme("standup-india"), p);
  assert.ok(keys(unknown.checks).includes("sch.check.group"));

  p.eligibility.gender = "female";
  assert.equal(evaluateScheme(scheme("standup-india"), p).worthALook, true);

  const q = person({ goals: ["business"] });
  q.eligibility.gender = "male"; q.eligibility.category = "general";
  const no = evaluateScheme(scheme("standup-india"), q);
  assert.equal(no.worthALook, false);
  assert.ok(keys(no.checks).includes("sch.check.groupNo"));
});

test("PM Internship: exact age decides when given, otherwise the age range", () => {
  const p = person({ goals: ["internship"] });
  assert.equal(evaluateScheme(scheme("pm-internship"), p).worthALook, true);
  assert.ok(keys(evaluateScheme(scheme("pm-internship"), p).checks).includes("sch.check.ageExact"));
  p.eligibility.exactAge = 26;
  assert.equal(evaluateScheme(scheme("pm-internship"), p).worthALook, false);
  p.eligibility.exactAge = 23;
  assert.equal(evaluateScheme(scheme("pm-internship"), p).worthALook, true);
});

test("PM Vishwakarma needs a listed trade skill (tailoring)", () => {
  assert.equal(evaluateScheme(scheme("pm-vishwakarma"), person({ goals: ["business"] })).worthALook, false);
  assert.equal(evaluateScheme(scheme("pm-vishwakarma"), person({ goals: ["business"], skills: ["tailoring"] })).worthALook, true);
});

test("NATS fits diploma/graduates wanting apprenticeship, not Class 10", () => {
  const ok = evaluateScheme(scheme("nats"), person({ goals: ["apprenticeship"] }));
  assert.ok(keys(ok.reasons).includes("sch.why.edu"));
  const p = person({ goals: ["apprenticeship"] });
  p.education.level = "class10";
  assert.ok(keys(evaluateScheme(scheme("nats"), p).checks).includes("sch.check.edu"));
});

test("empty or junk profiles return all schemes without crashing", () => {
  for (const p of [null, undefined, {}, emptyProfile(), "x"]) {
    const out = matchSchemes(p, SCHEMES);
    assert.equal(out.length, SCHEMES.length);
    assert.ok(out.every((r) => r.worthALook === false));
  }
  assert.deepEqual(matchSchemes(person(), null), []);
});
