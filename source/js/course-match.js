// Course suggestions from skill gaps. Pure functions, tested in Node.
//
// recommendCourses(profile, careers, courses) →
//   { ready, gaps: [{ skill, careers: [ids] }], items: [...], uncovered: [skill ids] }
// The learning budget never hides a course — it only changes the order and
// adds a note, so people still see options they might need (e.g. a licence).

import { normalizeProfile } from "./profile-model.js";
import { matchCareers } from "./engine.js";

const msg = (key, vars = {}) => ({ key, vars });
// Verified costs rank above unverified ones.
const COST_RANK = { free: 0, "free-exam-fee": 1, fee: 2, null: 3 };
const PROVIDER_RANK = { government: 0, institute: 1, nonprofit: 2, other: 3 };

/** Skills missing from the person's top career matches, most needed first. */
export function skillGaps(profile, careers, { topN = 8 } = {}) {
  const { matches } = matchCareers(profile, careers);
  const map = new Map();
  // Exam-only paths have no skill gaps, so look at the top careers that need skills.
  for (const m of matches.filter((x) => x.missingSkills.length).slice(0, topN)) {
    for (const s of m.missingSkills) {
      if (!map.has(s)) map.set(s, []);
      map.get(s).push(m.careerId);
    }
  }
  return [...map.entries()]
    .map(([skill, ids]) => ({ skill, careers: ids }))
    .sort((a, b) => b.careers.length - a.careers.length);
}

function costFits(cost, budget) {
  if (!budget || budget === "any") return true;
  if (budget === "free") return cost === "free" || cost === "free-exam-fee";
  if (budget === "low") return cost !== null; // known cost; "fee" may be low — user decides
  return true;
}

export function evaluateCourse(course, profile, gapSkills) {
  const covers = course.skills.filter((s) => gapSkills.includes(s));
  const already = course.skills.filter((s) => profile.skills.includes(s));
  const reasons = [];
  const checks = [];

  if (covers.length) reasons.push(msg("course.why.gap", { skills: covers }));
  if (course.relatedCareers?.length) reasons.push(msg("course.why.careers", { careers: course.relatedCareers }));
  if (course.cost === "free") reasons.push(msg("course.why.free"));

  if (course.cost === null || course.cost === undefined) checks.push(msg("course.check.costUnknown"));
  else if (!costFits(course.cost, profile.learningBudget)) checks.push(msg("course.check.budget"));
  if (course.cost === "free-exam-fee") checks.push(msg("course.check.examFee"));
  if (!course.duration) checks.push(msg("course.check.durationUnknown"));
  if (already.length && !covers.length) checks.push(msg("course.check.already", { skills: already }));
  checks.push(msg("course.check.noJob"));

  return {
    courseId: course.id,
    course,
    covers,
    reasons,
    checks,
    budgetFit: course.cost !== null && course.cost !== undefined && costFits(course.cost, profile.learningBudget)
  };
}

export function recommendCourses(rawProfile, careers, courses) {
  const profile = normalizeProfile(rawProfile);
  const ready = Boolean(profile.education.level || profile.goals.length || profile.skills.length);
  if (!ready || !Array.isArray(courses)) return { ready: false, gaps: [], items: [], uncovered: [] };

  const gaps = skillGaps(profile, careers || []);
  const gapSkills = gaps.map((g) => g.skill);
  const items = [];
  for (const course of courses) {
    try {
      const r = evaluateCourse(course, profile, gapSkills);
      if (r.covers.length) items.push(r);
    } catch { /* skip a broken record */ }
  }
  // Most useful first: covers more of the most-needed gaps, fits budget, cheaper, government.
  const gapWeight = (r) => r.covers.reduce((sum, s) => sum + (gaps.find((g) => g.skill === s)?.careers.length || 0), 0);
  items.sort((a, b) =>
    (gapWeight(b) - gapWeight(a)) ||
    (Number(b.budgetFit) - Number(a.budgetFit)) ||
    ((COST_RANK[a.course.cost] ?? 3) - (COST_RANK[b.course.cost] ?? 3)) ||
    ((PROVIDER_RANK[a.course.providerType] ?? 3) - (PROVIDER_RANK[b.course.providerType] ?? 3)));

  const coveredSkills = new Set(items.flatMap((r) => r.covers));
  const uncovered = gapSkills.filter((s) => !coveredSkills.has(s));
  return { ready: true, gaps, items, uncovered };
}

/** Courses that teach one skill (for the "browse by skill" view). */
export function coursesForSkill(skill, courses) {
  if (!Array.isArray(courses)) return [];
  return courses
    .filter((c) => !skill || c.skills.includes(skill))
    .sort((a, b) => ((COST_RANK[a.cost] ?? 3) - (COST_RANK[b.cost] ?? 3)) ||
      ((PROVIDER_RANK[a.providerType] ?? 3) - (PROVIDER_RANK[b.providerType] ?? 3)));
}
