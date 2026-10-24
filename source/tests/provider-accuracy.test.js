// Regression tests for the course/skill → provider accuracy fix (24 Oct 2026).
// Root cause that these tests guard against:
//   1. Provider records claimed skills we had never confirmed (for example PMKVY
//      "digital marketing", SWAYAM "accounting", NPTEL English "customer service").
//   2. The Private Job Finder linked skills through RELATED skills (data entry →
//      typing/Excel courses, mechanical work → repair courses, communication →
//      customer-service courses), so a provider appeared for a skill it does not teach.
import { test } from "node:test";
import assert from "node:assert/strict";
import { COURSES } from "../data/courses.js";
import { EXTRA_LEARNING } from "../data/learning-extra.js";
import { PJ_SKILLS } from "../data/pj-options.js";
import { ALL_SKILLS } from "../data/options.js";
import { coursesForSkill, recommendCourses, evaluateCourse, verifiedSkills } from "../js/course-match.js";
import { CAREERS } from "../data/careers.js";
import { emptyProfile } from "../js/profile-model.js";
import { recommendLearning, allLearning, courseToPJSkills, gapAnalysis, skillsToLearn } from "../js/pj-model.js";

const ids = (list) => list.map((x) => x.id);
const pj = (changes = {}) => ({ state: "UP", locationPref: "near-home", edu: { level: "class12" }, experience: "fresher", skills: [], prefs: { cats: ["office"] }, ...changes });

// Test 1 — a course a provider demonstrably offers → that provider is shown.
test("T1: verified offering shows the correct provider", () => {
  assert.ok(ids(coursesForSkill("webdev", COURSES)).includes("freecodecamp-web"));
  assert.ok(ids(coursesForSkill("ccc", COURSES)).includes("nielit-ccc"));
  assert.ok(ids(coursesForSkill("electrician", COURSES)).includes("iti-cts"));
  const r = recommendLearning(["digital-marketing"], pj());
  assert.ok(ids(r.items).includes("hubspot-academy"));
  assert.ok(ids(r.items).includes("swayam-digital-marketing"));
});

// Test 2 — a provider that does not offer the course is not shown for it.
test("T2: providers are not shown for courses they do not offer", () => {
  assert.ok(!ids(coursesForSkill("accounting", COURSES)).includes("freecodecamp-web"));
  assert.ok(!ids(coursesForSkill("digital-marketing", COURSES)).includes("pmkvy-training"), "PMKVY digital marketing was never confirmed");
  assert.ok(!ids(coursesForSkill("accounting", COURSES)).includes("swayam-accounting"), "no SWAYAM accounting course found in current lists");
  assert.ok(!ids(coursesForSkill("customer-service", COURSES)).includes("nptel-english"), "Speaking Effectively is not a customer-service course");
  for (const skill of ALL_SKILLS.map((s) => s.id)) {
    coursesForSkill(skill, COURSES).forEach((c) => assert.ok(verifiedSkills(c).includes(skill), `${c.id} shown for ${skill}`));
  }
});

// Test 3 — a skill is linked to a provider only through reliable data.
test("T3: every provider–skill link has evidence", () => {
  for (const c of COURSES) {
    if (c.skills.length) assert.ok(c.evidence && c.evidence.url.startsWith("https://"), `${c.id} has no evidence`);
  }
  for (const o of allLearning()) {
    o.skills.forEach((s) => assert.ok(PJ_SKILLS.some((p) => p.id === s), `${o.id}: ${s}`));
    if (o.source === "courses") {
      const course = COURSES.find((c) => c.id === o.id);
      assert.deepEqual(o.skills, courseToPJSkills(course.skills), `${o.id}: only verified skills are mapped`);
    }
  }
  const r = recommendLearning(["repair"], pj());
  r.items.forEach((o) => assert.ok(o.covers.includes("repair")));
  assert.deepEqual(ids(r.items).sort(), ["iti-cts", "rseti"]);
});

// Test 4 — a skill with no verified provider → honest empty result.
test("T4: skills with no verified provider give an empty result, not filler", () => {
  for (const skill of ["dca", "sales", "customer-service", "cooking"]) {
    assert.deepEqual(coursesForSkill(skill, COURSES), [], skill);
  }
  for (const skill of ["hr", "inventory", "data-entry", "communication", "retail-ops", "hospitality", "healthcare", "team-lead", "manufacturing", "mechanical"]) {
    const r = recommendLearning([skill], pj());
    assert.deepEqual(r.items, [], skill);
    assert.deepEqual(r.missing, [skill], skill);
    Object.values(r.picks).forEach((v) => assert.equal(v, null, `${skill}: no "best" pick without a verified option`));
    r.general.forEach((o) => assert.equal(o.skills.length, 0, "general options never claim the skill"));
  }
});

// Test 5 — similar names or related skills are never matched.
test("T5: similar or related skills are not treated as the same skill", () => {
  const map = Object.fromEntries(PJ_SKILLS.map((s) => [s.id, s.courseSkills]));
  assert.deepEqual(map["data-entry"], [], "data entry ≠ typing/spreadsheets");
  assert.deepEqual(map.communication, [], "communication ≠ customer service");
  assert.deepEqual(map.mechanical, [], "mechanical ≠ repair");
  assert.deepEqual(map["retail-ops"], [], "shop work ≠ sales course");
  assert.deepEqual(map.hospitality, [], "hospitality ≠ cooking");
  // A course's skill name must be shown in its own words: a spreadsheet course is
  // labelled "Spreadsheets", not "MS Office".
  const r = recommendLearning(["ms-office"], pj());
  const st = r.items.find((o) => o.id === "spoken-tutorial");
  assert.deepEqual(st.teaches, { vocab: "course", ids: ["excel"] });
  assert.match(ALL_SKILLS.find((s) => s.id === "excel").en, /Spreadsheets/);
});

// Test 6 — missing, outdated or unverifiable info is never shown as confirmed.
test("T6: unverified claims are kept apart and never used for matching", () => {
  const pmkvy = COURSES.find((c) => c.id === "pmkvy-training");
  assert.deepEqual(pmkvy.skills, []);
  assert.ok(pmkvy.unverifiedSkills.length > 0 && pmkvy.note.en);
  for (const c of COURSES) {
    for (const s of c.unverifiedSkills) {
      assert.ok(!ids(coursesForSkill(s, COURSES)).includes(c.id), `${c.id} matched on unconfirmed ${s}`);
      assert.deepEqual(evaluateCourse(c, emptyProfile(), [s]).covers, [], `${c.id} covers unconfirmed ${s}`);
    }
  }
  // Platforms whose pages could not be read in detail are only "general".
  for (const id of ["coursera", "udemy", "microsoft-learn", "skill-india-digital"]) {
    assert.deepEqual(EXTRA_LEARNING.find((x) => x.id === id).skills, [], id);
  }
});

// Test 7 — failed / incomplete data is handled safely (no external API exists;
// the closest equivalent is a broken or partial record in the data files).
test("T7: broken or partial records are skipped, never guessed", () => {
  const broken = [null, {}, { id: "x" }, { id: "y", title: { en: "Y" }, skills: null }, { id: "z", title: { en: "Z" }, skills: "excel" }];
  assert.deepEqual(coursesForSkill("excel", broken), []);
  assert.deepEqual(verifiedSkills({ skills: "excel" }), []);
  assert.doesNotThrow(() => recommendCourses({ goals: ["private-job"], education: { level: "class12" } }, CAREERS, [...COURSES, ...broken]));
  assert.doesNotThrow(() => recommendLearning(null, null, "nonsense"));
  assert.deepEqual(recommendLearning(null, null).items, []);
});

// Consistency: the Courses page and the Skill Development page use the same
// verified provider list, so they agree on who teaches what.
test("consistency: both pages agree on providers for a skill", () => {
  const coursePage = ids(coursesForSkill("tally", COURSES));
  assert.deepEqual(coursePage, ["tally-education"]);
  const sd = recommendLearning(["accounting"], pj()).items.map((o) => o.id).sort();
  const cp = ids(coursesForSkill("accounting", COURSES)).sort();
  assert.deepEqual(sd, cp);
});

// Test 8 — refresh / revisit gives the same result (pure functions, no hidden state).
test("T8: results are stable across repeated calls", () => {
  const p = pj({ skills: ["computer-basics"] });
  const g = gapAnalysis(p, "digital-marketing-executive", "2026-10-24");
  const a = recommendLearning(skillsToLearn(g), p, "all", g.missingCourse);
  const b = recommendLearning(skillsToLearn(g), JSON.parse(JSON.stringify(p)), "all", g.missingCourse);
  assert.deepEqual(ids(a.items), ids(b.items));
  assert.deepEqual(a.picks, b.picks);
  assert.deepEqual(ids(coursesForSkill("programming", COURSES)), ids(coursesForSkill("programming", COURSES)));
});

// Edge cases: invalid ids, duplicate mappings, empty input.
test("edge cases: invalid skill ids, duplicates, empty input", () => {
  assert.deepEqual(coursesForSkill("not-a-skill", COURSES), []);
  assert.deepEqual(recommendLearning(["not-a-skill"], pj()).items, []);
  for (const c of COURSES) assert.equal(new Set(c.skills).size, c.skills.length, `${c.id} duplicate skills`);
  for (const s of PJ_SKILLS) assert.equal(new Set(s.courseSkills).size, s.courseSkills.length, `${s.id} duplicate mapping`);
  assert.equal(new Set(allLearning().map((o) => o.id)).size, allLearning().length, "duplicate provider ids");
  assert.equal(recommendLearning([], pj()).items.length, 0);
});
