// Tests for the profile rules. All people here are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  emptyProfile, normalizeProfile, validateStep, validateAll, firstInvalidStep,
  addCustomSkill, cleanText, setPath, getPath, STEPS, LIMITS
} from "../js/profile-model.js";
import { ALL_LISTS } from "../data/options.js";

const NOW = new Date("2026-10-22T10:00:00+05:30");

function validProfile() {
  const p = emptyProfile();
  p.ageRange = "22-25"; p.state = "UP"; p.preferredLocation = "home-state"; p.employmentStatus = "unemployed";
  p.education.level = "graduation"; p.education.passingYear = 2024;
  p.skills = ["excel", "tally"];
  p.experience.type = "fresher";
  p.goals = ["govt-job"];
  return p;
}

// ---------- Option lists ----------
test("every option list has unique ids and both languages", () => {
  for (const [name, list] of Object.entries(ALL_LISTS)) {
    const ids = list.map((x) => x.id);
    assert.equal(new Set(ids).size, ids.length, `${name} has duplicate ids`);
    for (const item of list) {
      assert.ok(item.en && item.hi, `${name}.${item.id} needs en and hi labels`);
    }
  }
  assert.equal(ALL_LISTS.STATES.length, 36, "28 states + 8 UTs");
});

// ---------- Empty / incomplete profiles never crash ----------
test("normalizeProfile survives junk input", () => {
  for (const junk of [null, undefined, 42, "text", [], { education: "x", skills: "y", goals: null }]) {
    const p = normalizeProfile(junk);
    assert.deepEqual(Object.keys(p).sort(), Object.keys(emptyProfile()).sort());
  }
});

test("validation works on an empty profile and lists required fields", () => {
  const e = validateStep("basic", emptyProfile(), NOW);
  assert.deepEqual(Object.keys(e).sort(), ["ageRange", "employmentStatus", "preferredLocation", "state"]);
  assert.equal(validateStep("basic", null, NOW).state, "err.required");
  assert.equal(firstInvalidStep(emptyProfile(), NOW), 0);
});

test("a complete profile is valid on every step", () => {
  assert.deepEqual(validateAll(validProfile(), NOW), {});
  assert.equal(firstInvalidStep(validProfile(), NOW), -1);
});

// ---------- Invalid inputs ----------
test("name is optional but must be letters only", () => {
  const p = validProfile();
  p.name = ""; assert.equal(validateStep("basic", p, NOW).name, undefined);
  p.name = "Ritu Kumari"; assert.equal(validateStep("basic", p, NOW).name, undefined);
  p.name = "रितु कुमारी"; assert.equal(validateStep("basic", p, NOW).name, undefined);
  p.name = "Ritu123"; assert.equal(validateStep("basic", p, NOW).name, "err.nameChars");
});

test("passing year must be realistic", () => {
  const p = validProfile();
  for (const bad of [1900, 2040, 2024.5, NaN]) {
    p.education.passingYear = bad;
    assert.equal(validateStep("education", p, NOW)["education.passingYear"], "err.year", `year ${bad}`);
  }
  p.education.passingYear = 2028; // expected result (+2 years allowed)
  assert.deepEqual(validateStep("education", p, NOW), {});
  p.education.passingYear = null; // optional
  assert.deepEqual(validateStep("education", p, NOW), {});
});

test("additional qualifications need a level", () => {
  const p = validProfile();
  p.additionalQualifications = [{ level: "", specialization: "", passingYear: null }];
  assert.equal(validateStep("education", p, NOW)["additionalQualifications.0.level"], "err.required");
});

test("experience: fresher ok, experienced needs valid years, skip allowed", () => {
  const p = validProfile();
  p.experience.type = "experienced";
  assert.equal(validateStep("experience", p, NOW)["experience.years"], "err.required");
  p.experience.years = -1; assert.equal(validateStep("experience", p, NOW)["experience.years"], "err.years");
  p.experience.years = 80; assert.equal(validateStep("experience", p, NOW)["experience.years"], "err.years");
  p.experience.years = 4;  assert.deepEqual(validateStep("experience", p, NOW), {});

  const skipped = emptyProfile();
  skipped.experience.skipped = true;
  assert.deepEqual(validateStep("experience", skipped, NOW), {});
});

test("at least one goal is required", () => {
  const p = validProfile();
  p.goals = [];
  assert.equal(validateStep("goals", p, NOW).goals, "err.goalsRequired");
});

test("eligibility step is fully optional, but age must be sensible", () => {
  const p = validProfile();
  assert.deepEqual(validateStep("eligibility", p, NOW), {});
  p.eligibility.exactAge = 9;  assert.equal(validateStep("eligibility", p, NOW)["eligibility.exactAge"], "err.age");
  p.eligibility.exactAge = 24; assert.deepEqual(validateStep("eligibility", p, NOW), {});
});

test("unknown choices and over-long text are cleaned", () => {
  const p = normalizeProfile({
    state: "Atlantis", ageRange: "22-25", skills: ["excel", "hacking", "excel"],
    goals: ["govt-job", "bribe"], name: "  A   B  ", district: "x".repeat(500),
    eligibility: { category: "made-up" }
  });
  assert.equal(p.state, "");
  assert.deepEqual(p.skills, ["excel"]);
  assert.deepEqual(p.goals, ["govt-job"]);
  assert.equal(p.name, "A B");
  assert.equal(p.district.length, LIMITS.district);
  assert.equal(p.eligibility.category, "");
});

test("cleanText removes HTML brackets", () => {
  assert.equal(cleanText("<script>alert(1)</script>"), "script alert(1) /script");
});

// ---------- Custom skills ----------
test("custom skills: add, reject duplicates, empty and too long", () => {
  let p = emptyProfile();
  let r = addCustomSkill(p, "  Mehndi design ");
  assert.equal(r.error, ""); p = r.profile;
  assert.deepEqual(p.customSkills, ["Mehndi design"]);
  assert.equal(addCustomSkill(p, "mehndi DESIGN").error, "err.skillDup");
  assert.equal(addCustomSkill(p, "Tally").error, "err.skillDup", "already in the built-in list");
  assert.equal(addCustomSkill(p, "   ").error, "err.skillEmpty");
  assert.equal(addCustomSkill(p, "x".repeat(41)).error, "err.skillLong");
});

test("custom skills stop at the maximum", () => {
  let p = emptyProfile();
  for (let i = 0; i < LIMITS.customSkillsMax; i++) p = addCustomSkill(p, `Skill ${i}`).profile;
  assert.equal(addCustomSkill(p, "One more").error, "err.skillMax");
});

// ---------- Paths ----------
test("setPath/getPath work and block prototype tricks", () => {
  const p = emptyProfile();
  setPath(p, "education.level", "iti");
  assert.equal(getPath(p, "education.level"), "iti");
  setPath(p, "__proto__.hacked", true);
  assert.equal({}.hacked, undefined);
  setPath(p, "nothing.here", 1); // invalid path is ignored, no crash
  assert.equal(p.nothing, undefined);
});

test("step list is in the agreed order", () => {
  assert.deepEqual(STEPS, ["basic", "education", "skills", "experience", "goals", "eligibility", "review"]);
});
