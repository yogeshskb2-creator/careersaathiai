// 30-day career action plan. Pure function — tested in Node.
//
// buildPlan(profile, { matches, gaps, courses, schemes }) →
//   { weeks: [{ id, days, titleKey, tasks: [{ id, key, vars }] }] }
// Tasks are messages (i18n key + vars) so the page can show English or Hindi.
// The plan adapts to the person's goals; it never promises a job or benefit,
// and it never invents dates — it tells people to read official notices.

import { normalizeProfile } from "./profile-model.js";

const task = (id, key, vars = {}) => ({ id, key, vars });

// Which goal drives the plan most. Order = priority when several are chosen.
const GOAL_PRIORITY = ["govt-job", "apprenticeship", "internship", "private-job", "remote",
  "business", "career-change", "skill-development", "higher-education"];

export function primaryGoals(profile) {
  return GOAL_PRIORITY.filter((g) => profile.goals.includes(g)).slice(0, 2);
}

export function buildPlan(rawProfile, ctx = {}) {
  const p = normalizeProfile(rawProfile);
  const matches = Array.isArray(ctx.matches) ? ctx.matches : [];
  const gaps = Array.isArray(ctx.gaps) ? ctx.gaps : [];
  const courses = Array.isArray(ctx.courses) ? ctx.courses : [];
  const schemes = Array.isArray(ctx.schemes) ? ctx.schemes : [];
  const goals = primaryGoals(p);
  const has = (g) => goals.includes(g);

  const topCareers = matches.slice(0, 3).map((m) => m.careerId);
  const topGovt = matches.find((m) => m.career?.sector === "government");
  const firstGap = gaps[0]?.skill || "";
  const secondGap = gaps[1]?.skill || "";
  // A course is only suggested for a skill it actually teaches.
  const firstCourse = courses.find((c) => Array.isArray(c.covers) && c.covers.includes(firstGap))?.courseId || "";
  const firstScheme = schemes.find((s) => s.worthALook)?.schemeId || "";

  const w1 = [], w2 = [], w3 = [], w4 = [];

  // ---------- Week 1: decide and get organised ----------
  if (!p.goals.length || !p.education.level) w1.push(task("w1-profile", "plan.completeProfile"));
  if (topCareers.length) w1.push(task("w1-shortlist", "plan.shortlist", { careers: topCareers }));
  else w1.push(task("w1-explore", "plan.exploreCareers"));
  if (has("govt-job")) {
    w1.push(topGovt
      ? task("w1-govt-notice", "plan.govt.readNotice", { career: topGovt.careerId })
      : task("w1-govt-notice", "plan.govt.readNoticeAny"));
    w1.push(task("w1-govt-docs", "plan.govt.documents"));
  }
  if (has("private-job") || has("remote") || has("career-change")) {
    w1.push(task("w1-resume", "plan.private.resume"));
    w1.push(task("w1-ncs", "plan.private.ncs"));
  }
  if (has("apprenticeship")) w1.push(task("w1-appr", "plan.appr.register"));
  if (has("internship")) w1.push(task("w1-intern", "plan.intern.portal"));
  if (has("business")) w1.push(task("w1-biz-idea", "plan.biz.idea"));
  if (has("higher-education")) w1.push(task("w1-higher", "plan.higher.shortlist"));

  // ---------- Week 2: start learning ----------
  if (firstCourse) w2.push(task("w2-course", "plan.startCourse", { course: firstCourse, skill: firstGap }));
  else if (firstGap) w2.push(task("w2-practise", "plan.practiseSkill", { skill: firstGap }));
  if (firstGap) w2.push(task("w2-daily", "plan.dailyHour", { skill: firstGap }));
  if (has("govt-job")) {
    w2.push(task("w2-syllabus", "plan.govt.syllabus"));
    w2.push(task("w2-timetable", "plan.govt.timetable"));
  }
  if (has("private-job") || has("remote") || has("career-change")) w2.push(task("w2-portfolio", "plan.private.proof"));
  if (has("business")) {
    w2.push(task("w2-customers", "plan.biz.customers"));
    if (firstScheme) w2.push(task("w2-scheme", "plan.biz.scheme", { scheme: firstScheme }));
  }
  if (has("apprenticeship") || has("internship")) w2.push(task("w2-search", "plan.appr.search"));

  // ---------- Week 3: practise and apply ----------
  if (secondGap) w3.push(task("w3-second", "plan.secondSkill", { skill: secondGap }));
  if (has("govt-job")) w3.push(task("w3-mock", "plan.govt.mock"));
  if (has("private-job") || has("remote") || has("career-change")) w3.push(task("w3-apply", "plan.private.apply"));
  if (has("apprenticeship") || has("internship")) w3.push(task("w3-appr-apply", "plan.appr.apply"));
  if (has("business")) {
    w3.push(task("w3-costs", "plan.biz.costs"));
    w3.push(task("w3-docs", "plan.biz.documents"));
  }
  if (has("higher-education")) w3.push(task("w3-higher", "plan.higher.dates"));

  // ---------- Week 4 (days 22–30): act and review ----------
  if (has("govt-job")) w4.push(task("w4-govt-apply", "plan.govt.apply"));
  if (has("private-job") || has("remote") || has("career-change")) w4.push(task("w4-interview", "plan.private.interview"));
  if (has("business")) w4.push(task("w4-start", "plan.biz.start"));
  if (has("apprenticeship") || has("internship")) w4.push(task("w4-follow", "plan.appr.follow"));
  w4.push(task("w4-review", "plan.review"));
  w4.push(task("w4-safe", "plan.safety"));

  // Guarantee every week has something useful, even for an empty profile.
  if (!w2.length) w2.push(task("w2-generic", "plan.learnBasics"));
  if (!w3.length) w3.push(task("w3-generic", "plan.practiseGeneric"));

  return {
    goals,
    weeks: [
      { id: "w1", days: "1–7", titleKey: "plan.week1", tasks: w1 },
      { id: "w2", days: "8–14", titleKey: "plan.week2", tasks: w2 },
      { id: "w3", days: "15–21", titleKey: "plan.week3", tasks: w3 },
      { id: "w4", days: "22–30", titleKey: "plan.week4", tasks: w4 }
    ]
  };
}

/** All task ids in a plan (used to clean up old ticks). */
export function taskIds(plan) {
  return plan.weeks.flatMap((w) => w.tasks.map((t) => t.id));
}

/** Progress as whole tasks done out of total — no fake precision. */
export function progress(plan, doneIds) {
  const ids = taskIds(plan);
  const done = ids.filter((id) => doneIds.includes(id)).length;
  return { done, total: ids.length };
}
