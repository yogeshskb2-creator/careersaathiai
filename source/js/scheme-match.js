// Decides which schemes are "worth a look" for a profile.
// It NEVER says a person is eligible — it only points out which recorded
// conditions seem to fit and which must be confirmed with the department.

import { normalizeProfile } from "./profile-model.js";
import { userLevels } from "./engine.js";

const msg = (key, vars = {}) => ({ key, vars });

export function evaluateScheme(scheme, rawProfile) {
  const p = normalizeProfile(rawProfile);
  const h = scheme.hints || {};
  const reasons = [];
  const checks = [];
  let blocked = false; // a recorded condition clearly does not fit

  // Goals
  const goals = (h.goals || []).filter((g) => p.goals.includes(g));
  if (goals.length) reasons.push(msg("sch.why.goal", { goals }));
  const goalOk = !h.goals || goals.length > 0;

  // Current status (e.g. unemployed / student)
  if (h.employment && h.employment.includes(p.employmentStatus)) reasons.push(msg("sch.why.status"));

  // Education
  if (h.education) {
    const levels = userLevels(p);
    const hit = levels.find((l) => h.education.includes(l));
    if (hit) reasons.push(msg("sch.why.edu", { level: hit }));
    else if (levels.length) checks.push(msg("sch.check.edu"));
  }

  // Age: exact age (if given) beats the age range
  const age = p.eligibility.exactAge;
  if (h.exactAge && Number.isInteger(age)) {
    const [min, max] = h.exactAge;
    if (age >= min && age <= max) reasons.push(msg("sch.why.age"));
    else { checks.push(msg("sch.check.ageOut")); blocked = true; }
  } else if (h.ageRanges && p.ageRange) {
    if (h.ageRanges.includes(p.ageRange)) reasons.push(msg("sch.why.ageRange"));
    else { checks.push(msg("sch.check.ageOut")); blocked = true; }
    if (h.exactAge) checks.push(msg("sch.check.ageExact", { min: h.exactAge[0], max: h.exactAge[1] }));
  }
  if (h.notAgeRanges && h.notAgeRanges.includes(p.ageRange)) { checks.push(msg("sch.check.ageOut")); blocked = true; }

  // Special groups (e.g. SC/ST and/or women)
  if (h.genderOrCategory) {
    const { gender = [], category = [] } = h.genderOrCategory;
    const g = p.eligibility.gender;
    const c = p.eligibility.category;
    const fits = gender.includes(g) || category.includes(c);
    // Only the dimensions this scheme uses count. Blocked only when every one of them is known.
    const isKnown = (v) => Boolean(v) && v !== "prefer-not";
    const known = (gender.length === 0 || isKnown(g)) && (category.length === 0 || isKnown(c));
    if (fits) reasons.push(msg("sch.why.group"));
    else if (!known) checks.push(msg("sch.check.group"));
    else { checks.push(msg("sch.check.groupNo")); blocked = true; }
  }

  // Persons with disability (PwD)
  if (h.pwd) {
    const v = p.eligibility.pwd;
    if (v === "yes") reasons.push(msg("sch.why.pwd"));
    else if (v === "no") { checks.push(msg("sch.check.pwdNo")); blocked = true; }
    else checks.push(msg("sch.check.pwd"));
  }

  // Skills / trade
  if (h.skills) {
    const skills = h.skills.filter((s) => p.skills.includes(s));
    if (skills.length) reasons.push(msg("sch.why.skill", { skills }));
    else if (h.requireSkill) blocked = true;
  }

  checks.push(msg("sch.check.final"));

  return {
    schemeId: scheme.id,
    scheme,
    worthALook: goalOk && !blocked && reasons.length > 0,
    reasons,
    checks
  };
}

/** Returns every scheme; ones worth a look come first. Never throws. */
export function matchSchemes(rawProfile, schemes) {
  if (!Array.isArray(schemes)) return [];
  const out = [];
  for (const s of schemes) {
    try { out.push(evaluateScheme(s, rawProfile)); } catch { /* skip a broken record */ }
  }
  return out.sort((a, b) => (b.worthALook - a.worthALook) || (b.reasons.length - a.reasons.length));
}
