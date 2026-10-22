// Tests for the 30-day action plan. People here are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildPlan, primaryGoals, progress, taskIds } from "../js/plan.js";
import { emptyProfile } from "../js/profile-model.js";
import { matchCareers } from "../js/engine.js";
import { recommendCourses } from "../js/course-match.js";
import { matchSchemes } from "../js/scheme-match.js";
import { CAREERS } from "../data/careers.js";
import { COURSES } from "../data/courses.js";
import { SCHEMES } from "../data/schemes.js";
import { translations } from "../js/i18n.js";

function person(changes = {}) {
  const p = emptyProfile();
  p.ageRange = "22-25"; p.state = "UP"; p.preferredLocation = "home-state"; p.employmentStatus = "unemployed";
  p.education.level = "graduation"; p.experience.type = "fresher";
  return Object.assign(p, changes);
}
function fullPlan(p) {
  const matches = matchCareers(p, CAREERS).matches;
  const rec = recommendCourses(p, CAREERS, COURSES);
  return buildPlan(p, { matches, gaps: rec.gaps, courses: rec.items, schemes: matchSchemes(p, SCHEMES) });
}
const keysOf = (plan) => plan.weeks.flatMap((w) => w.tasks.map((t) => t.key));

test("plan always has 4 weeks covering days 1–30, each with at least one task", () => {
  for (const p of [person({ goals: ["govt-job"] }), emptyProfile(), null, {}]) {
    const plan = buildPlan(p);
    assert.deepEqual(plan.weeks.map((w) => w.days), ["1–7", "8–14", "15–21", "22–30"]);
    plan.weeks.forEach((w) => assert.ok(w.tasks.length > 0, w.id));
  }
});

test("empty profile asks the person to complete the profile", () => {
  assert.ok(keysOf(buildPlan(emptyProfile())).includes("plan.completeProfile"));
});

test("government-job plan: read the official notice, syllabus, mock tests, apply only on the official site", () => {
  const keys = keysOf(fullPlan(person({ goals: ["govt-job"] })));
  for (const k of ["plan.govt.readNotice", "plan.govt.syllabus", "plan.govt.mock", "plan.govt.apply"]) assert.ok(keys.includes(k), k);
  assert.ok(!keys.includes("plan.biz.idea"));
});

test("business plan differs from a job plan and includes a scheme step when one fits", () => {
  const p = person({ goals: ["business"], skills: ["tailoring"] });
  p.eligibility.gender = "female";
  const keys = keysOf(fullPlan(p));
  for (const k of ["plan.biz.idea", "plan.biz.customers", "plan.biz.costs", "plan.biz.start", "plan.biz.scheme"]) assert.ok(keys.includes(k), k);
  assert.ok(!keys.includes("plan.govt.readNotice"));
});

test("private-job plan has resume, applications and interview practice", () => {
  const keys = keysOf(fullPlan(person({ goals: ["private-job"], skills: ["excel"] })));
  for (const k of ["plan.private.resume", "plan.private.apply", "plan.private.interview"]) assert.ok(keys.includes(k), k);
});

test("apprenticeship plan registers, searches, applies and follows up", () => {
  const p = person({ goals: ["apprenticeship"], skills: ["electrician"] });
  p.education.level = "iti";
  const keys = keysOf(fullPlan(p));
  for (const k of ["plan.appr.register", "plan.appr.search", "plan.appr.apply", "plan.appr.follow"]) assert.ok(keys.includes(k), k);
});

test("skill gaps and courses flow into the plan", () => {
  const plan = fullPlan(person({ goals: ["private-job"], skills: ["excel"] }));
  const learn = plan.weeks[1].tasks.find((t) => t.key === "plan.startCourse" || t.key === "plan.practiseSkill");
  assert.ok(learn, "week 2 has a learning task");
  assert.ok(learn.vars.skill || learn.vars.course);
});

test("the suggested course always teaches the skill it is paired with", () => {
  const goalsList = [["private-job"], ["govt-job", "business"], ["apprenticeship"], ["career-change", "remote"]];
  for (const goals of goalsList) {
    const p = person({ goals, skills: ["excel"] });
    const rec = recommendCourses(p, CAREERS, COURSES);
    const plan = buildPlan(p, { matches: matchCareers(p, CAREERS).matches, gaps: rec.gaps, courses: rec.items });
    for (const t of plan.weeks.flatMap((w) => w.tasks).filter((x) => x.key === "plan.startCourse")) {
      const course = COURSES.find((c) => c.id === t.vars.course);
      assert.ok(course.skills.includes(t.vars.skill), `${t.vars.course} does not teach ${t.vars.skill}`);
    }
  }
});

test("every plan ends with review and a scam-safety reminder", () => {
  for (const goals of [["govt-job"], ["business"], ["private-job"], []]) {
    const keys = keysOf(buildPlan(person({ goals })));
    assert.ok(keys.includes("plan.review") && keys.includes("plan.safety"), goals.join());
  }
});

test("task ids are unique and every task has English and Hindi text", () => {
  const all = [["govt-job", "business"], ["private-job", "apprenticeship"], ["internship", "higher-education"], ["remote", "career-change"]];
  for (const goals of all) {
    const plan = fullPlan(person({ goals, skills: ["excel"] }));
    const ids = taskIds(plan);
    assert.equal(new Set(ids).size, ids.length, "unique ids");
    for (const k of keysOf(plan)) {
      assert.ok(translations.en[k], `missing English text for ${k}`);
      assert.ok(translations.hi[k], `missing Hindi text for ${k}`);
    }
  }
});

test("primary goals follow a fixed priority and keep at most two", () => {
  assert.deepEqual(primaryGoals(person({ goals: ["business", "skill-development", "govt-job"] })), ["govt-job", "business"]);
});

test("progress counts whole tasks and ignores unknown ids", () => {
  const plan = buildPlan(person({ goals: ["govt-job"] }));
  const ids = taskIds(plan);
  assert.deepEqual(progress(plan, [ids[0], "not-a-task"]), { done: 1, total: ids.length });
  assert.deepEqual(progress(plan, []), { done: 0, total: ids.length });
});
