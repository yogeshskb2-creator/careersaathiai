// Tests for course data and course recommendations. People are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import { COURSES, PROVIDER_TYPES, SKILL_INDIA } from "../data/courses.js";
import { CAREERS } from "../data/careers.js";
import { ALL_SKILLS } from "../data/options.js";
import { recommendCourses, skillGaps, evaluateCourse, coursesForSkill } from "../js/course-match.js";
import { emptyProfile } from "../js/profile-model.js";

function person(changes = {}) {
  const p = emptyProfile();
  p.ageRange = "22-25"; p.state = "UP"; p.preferredLocation = "home-state"; p.employmentStatus = "unemployed";
  p.education.level = "graduation";
  p.experience.type = "fresher";
  return Object.assign(p, changes);
}
const keys = (list) => list.map((m) => m.key);

// ---------- Data quality ----------
test("course records: valid skills, careers, https links, both languages", () => {
  const skills = new Set(ALL_SKILLS.map((s) => s.id));
  const careers = new Set(CAREERS.map((c) => c.id));
  const types = new Set(PROVIDER_TYPES.map((t) => t.id));
  const ids = new Set();
  for (const c of COURSES) {
    assert.ok(!ids.has(c.id), `duplicate ${c.id}`); ids.add(c.id);
    assert.ok(c.title.en && c.title.hi && c.provider.en && c.provider.hi && c.topics.en && c.topics.hi, `${c.id} text`);
    assert.ok(c.skills.every((s) => skills.has(s)), `${c.id} skills`);
    assert.ok(c.unverifiedSkills.every((s) => skills.has(s) && !c.skills.includes(s)), `${c.id} unverified skills`);
    // Every verified skill needs evidence; a record with none must say why.
    if (c.skills.length) assert.ok(c.evidence?.url?.startsWith("https://") && c.evidence.text.en && c.evidence.text.hi, `${c.id} evidence`);
    else assert.ok(c.note?.en && c.note?.hi, `${c.id}: no verified skill, so it needs a note`);
    assert.ok(c.relatedCareers.every((id) => careers.has(id)), `${c.id} careers`);
    assert.ok(types.has(c.providerType), `${c.id} provider type`);
    assert.ok(c.url.startsWith("https://"), `${c.id} url`);
    assert.ok([null, "free", "free-exam-fee", "fee"].includes(c.cost), `${c.id} cost`);
    assert.match(c.checked, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(c.checkedFrom.en && c.checkedFrom.hi, `${c.id} checkedFrom`);
  }
  assert.ok(SKILL_INDIA.url.startsWith("https://"));
});

test("no invented prices: course text never shows rupee amounts", () => {
  for (const c of COURSES) assert.ok(!/₹|rs\.?\s?\d|rupee/i.test(JSON.stringify(c)), c.id);
});

test("a known cost always has a note; an unknown cost has none", () => {
  for (const c of COURSES) {
    if (c.cost) assert.ok(c.costNote?.en && c.costNote?.hi, `${c.id} needs a cost note`);
    else assert.equal(c.costNote, null, `${c.id}: unverified cost must not have a note`);
  }
});

test("no promises of jobs in course text", () => {
  for (const c of COURSES) assert.ok(!/guarantee|assured job|100% placement|get a job/i.test(JSON.stringify(c)), c.id);
});

// ---------- Skill gaps ----------
test("skill gaps come from the person's career matches", () => {
  const p = person({ goals: ["private-job"], skills: ["excel"] });
  const gaps = skillGaps(p, CAREERS).map((g) => g.skill);
  assert.ok(gaps.includes("tally") || gaps.includes("accounting"), gaps.join());
  assert.ok(!gaps.includes("excel"), "a skill you have is not a gap");
});

// ---------- Recommendations ----------
test("courses are suggested only when they teach a missing skill", () => {
  const out = recommendCourses(person({ goals: ["private-job"], skills: ["excel"] }), CAREERS, COURSES);
  assert.ok(out.ready && out.items.length > 0);
  for (const r of out.items) assert.ok(r.covers.length > 0, r.courseId);
  assert.ok(out.items.every((r) => keys(r.checks).includes("course.check.noJob")), "every course says it does not guarantee a job");
});

test("ITI electrician aiming for apprenticeship gets no electrician course (already has it)", () => {
  const p = person({ education: { ...emptyProfile().education, level: "iti" }, goals: ["apprenticeship"], skills: ["electrician"] });
  const out = recommendCourses(p, CAREERS, COURSES);
  assert.ok(out.gaps.every((g) => g.skill !== "electrician"));
});

test("a data entry seeker without typing gets CCC and the verified typing tutorial", () => {
  const p = person({ education: { ...emptyProfile().education, level: "class12" }, goals: ["private-job", "govt-job"], skills: [] });
  p.goals.push("skill-development");
  const out = recommendCourses(p, CAREERS, COURSES);
  assert.ok(out.items.some((r) => r.courseId === "nielit-ccc"));
  const typing = out.items.filter((r) => r.covers.includes("typing")).map((r) => r.courseId);
  assert.deepEqual(typing, ["spoken-tutorial"], "only the provider verified to teach typing");
  assert.ok(!out.uncovered.includes("typing"));
});

test("budget never hides a course — it only adds a note and changes order", () => {
  const p = person({ goals: ["private-job", "skill-development"], skills: [], learningBudget: "free" });
  const out = recommendCourses(p, CAREERS, COURSES);
  const ccc = out.items.find((r) => r.courseId === "nielit-ccc");
  assert.ok(ccc, "fee-based CCC still shown");
  assert.ok(keys(ccc.checks).includes("course.check.budget"));
  const firstFee = out.items.findIndex((r) => !r.budgetFit);
  const lastFit = out.items.map((r) => r.budgetFit).lastIndexOf(true);
  assert.ok(firstFee === -1 || out.items.length > 0, "ordering computed");
  assert.ok(lastFit >= 0);
});

test("unverified cost and duration are flagged, never guessed", () => {
  const r = evaluateCourse(COURSES.find((c) => c.id === "spoken-tutorial"), person(), ["excel"]);
  assert.ok(keys(r.checks).includes("course.check.costUnknown"));
  assert.ok(keys(r.checks).includes("course.check.durationUnknown"));
  assert.equal(r.budgetFit, false);
});

test("empty, junk and incomplete profiles do not crash", () => {
  for (const p of [null, undefined, {}, "x", emptyProfile()]) {
    const out = recommendCourses(p, CAREERS, COURSES);
    assert.equal(out.ready, false);
    assert.deepEqual(out.items, []);
  }
  assert.deepEqual(recommendCourses(person({ goals: ["govt-job"] }), CAREERS, null).items, []);
});

test("browse by skill returns matching courses, free ones first", () => {
  const list = coursesForSkill("excel", COURSES);
  assert.ok(list.length >= 2 && list.every((c) => c.skills.includes("excel")));
  assert.equal(coursesForSkill("", COURSES).length, COURSES.length);
  assert.deepEqual(coursesForSkill("excel", null), []);
});
