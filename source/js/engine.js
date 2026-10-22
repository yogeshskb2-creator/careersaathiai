// CareerSaathi matching engine — simple, open rules. No AI API, no percentages.
//
// matchCareers(profile, careers) returns:
//   { ready, matches: [...], futurePaths: [...], missingInfo: [...] }
//
// Every explanation is a message { key, vars } so the page can show it in
// English or Hindi. vars may hold skill ids, goal ids or an education level id.
// This file has no browser code, so it can be tested with Node.

import { normalizeProfile } from "./profile-model.js";

export const FIT = { STRONG: "strong", POSSIBLE: "possible", UPSKILL: "upskill" };

export const STATUS = {
  POTENTIAL: "potential",     // general career match
  UNVERIFIED: "unverified",   // govt path, or rules not fully recorded
  ELIGIBLE: "eligible",       // all RECORDED criteria pass on a source-checked record
  VACANCY: "vacancy"          // verified active vacancy — never produced in v1 (no live data)
};

const FIT_ORDER = { strong: 0, possible: 1, upskill: 2 };
const msg = (key, vars = {}) => ({ key, vars });

/** All qualification levels the person has (highest + extra ones). */
export function userLevels(profile) {
  const levels = [profile.education.level, ...profile.additionalQualifications.map((q) => q.level)];
  return [...new Set(levels.filter(Boolean))];
}

/** Step 1: qualification check → "meets" | "any" | "not-met" | "unknown" */
export function checkQualification(career, profile) {
  if (career.education === "any") return { result: "any", level: "" };
  if (career.education === null || career.education === undefined) return { result: "unknown", level: "" };
  const levels = userLevels(profile);
  if (!levels.length) return { result: "unknown", level: "" };
  const hit = levels.find((l) => career.education.includes(l));
  if (hit) return { result: "meets", level: hit };
  // "other" is too vague to say no — treat as unknown.
  if (levels.every((l) => l === "other")) return { result: "unknown", level: "" };
  return { result: "not-met", level: "" };
}

/** Step 2: skills check → what they have, what is missing. */
export function checkSkills(career, profile) {
  const mine = new Set(profile.skills);
  const have = career.requiredSkills.filter((s) => mine.has(s));
  const missing = career.requiredSkills.filter((s) => !mine.has(s));
  const optionalHave = career.optionalSkills.filter((s) => mine.has(s));
  const ratio = career.requiredSkills.length ? have.length / career.requiredSkills.length : 1;
  return { have, missing, optionalHave, ratio };
}

/** Step 3: experience → "not-needed" | "meets" | "short" | "unknown" */
export function checkExperience(career, profile) {
  const need = career.minYearsExperience || 0;
  if (need === 0) return "not-needed";
  const ex = profile.experience;
  if (ex.skipped || !ex.type) return "unknown";
  const years = ex.type === "experienced" && Number.isInteger(ex.years) ? ex.years : 0;
  return years >= need ? "meets" : "short";
}

/** Step 4: preferences → which goals match, and any location conflict. */
export function checkPreferences(career, profile) {
  const goals = career.goals.filter((g) => profile.goals.includes(g));
  const remoteOnly = profile.preferredLocation === "remote";
  return {
    goals,
    noGoalsGiven: profile.goals.length === 0,
    locationConflict: remoteOnly && !career.remoteFriendly
  };
}

/** Evaluates one career. Returns null if it is not relevant at all. */
export function evaluateCareer(career, rawProfile) {
  const profile = normalizeProfile(rawProfile);
  const qual = checkQualification(career, profile);
  const skills = checkSkills(career, profile);
  const exp = checkExperience(career, profile);
  const pref = checkPreferences(career, profile);
  const isGovt = career.sector === "government";

  // Relevant only if it fits a goal, or the person already has related skills.
  const goalMatch = pref.goals.length > 0;
  const skillOverlap = skills.have.length + skills.optionalHave.length > 0;
  if (!goalMatch && !skillOverlap) return null;

  // A path needing skills the person has none of is only shown if they
  // said they want to learn new skills or change career.
  const wantsToLearn = profile.goals.includes("skill-development") || profile.goals.includes("career-change");
  if (career.requiredSkills.length > 0 && !skillOverlap && !wantsToLearn) return null;

  // Fit level (words, not percentages)
  const noSkillRule = career.requiredSkills.length === 0;
  const blocked = exp === "short" || pref.locationConflict;
  let fit;
  if (noSkillRule) {
    // Exam/merit-based paths: a goal match alone is only "partial";
    // related extra skills make it "good".
    fit = goalMatch && skills.optionalHave.length > 0 && !blocked ? FIT.STRONG : FIT.POSSIBLE;
  } else if ((goalMatch || pref.noGoalsGiven) && skills.ratio >= 2 / 3 && !blocked) {
    fit = FIT.STRONG;
  } else if (skills.ratio >= 1 / 3 && (goalMatch || skills.ratio >= 2 / 3)) {
    fit = FIT.POSSIBLE;
  } else {
    fit = FIT.UPSKILL;
  }
  // For sorting: paths where the person already has the required skills come first.
  const sortScore = noSkillRule ? (skills.optionalHave.length ? 0.6 : 0.5) : skills.ratio;

  // Status label
  const allRecordedPass =
    (qual.result === "meets" || qual.result === "any") && skills.missing.length === 0 && exp !== "short";
  let status;
  if (career.verification?.status === "source-checked" && allRecordedPass) status = STATUS.ELIGIBLE;
  else if (isGovt || qual.result === "unknown") status = STATUS.UNVERIFIED;
  else status = STATUS.POTENTIAL;

  // ---- "Why we suggested this" ----
  const reasons = [];
  if (goalMatch) reasons.push(msg("why.goal", { goals: pref.goals }));
  if (qual.result === "meets") reasons.push(msg("why.qualMeets", { level: qual.level }));
  if (qual.result === "any") reasons.push(msg("why.qualAny"));
  if (skills.have.length) reasons.push(msg("why.skillsHave", { skills: skills.have }));
  if (skills.optionalHave.length) reasons.push(msg("why.optionalHave", { skills: skills.optionalHave }));
  if (career.requiredSkills.length === 0) reasons.push(msg("why.noSkillNeeded"));
  if (exp === "meets") reasons.push(msg("why.expMeets"));
  if (career.remoteFriendly && profile.preferredLocation === "remote") reasons.push(msg("why.remote"));

  // ---- "Things to check" ----
  const checks = [];
  if (qual.result === "unknown") {
    checks.push(msg(userLevels(profile).length ? "check.qualVaries" : "check.qualMissing"));
  }
  if (exp === "short") checks.push(msg("check.expShort", { n: career.minYearsExperience }));
  if (exp === "unknown") checks.push(msg("check.expUnknown", { n: career.minYearsExperience }));
  if (pref.locationConflict) checks.push(msg("check.location"));
  if (isGovt) {
    checks.push(msg("check.govtAge"));
    const cat = profile.eligibility.category;
    if (["obc", "sc", "st", "ews"].includes(cat) || profile.eligibility.pwd === "yes" || profile.eligibility.exServiceman === "yes") {
      checks.push(msg("check.relaxation"));
    }
  }
  if (career.verification?.status !== "source-checked") checks.push(msg("check.demo"));

  // ---- "What to do next" ----
  const next = [];
  if (skills.missing.length) next.push(msg("next.learn", { skills: skills.missing }));
  if (isGovt) next.push(msg("next.govt"));
  else if (career.sector === "apprenticeship") next.push(msg("next.apprentice"));
  else if (career.sector === "self") next.push(msg("next.self"));
  else next.push(msg("next.private"));
  if (career.preferred) next.push(msg("next.preferred"));

  return {
    careerId: career.id,
    career,
    fit,
    status,
    qualification: qual.result,
    skillsHave: skills.have,
    missingSkills: skills.missing,
    matchedGoals: pref.goals,
    reasons,
    checks,
    next,
    _sort: [FIT_ORDER[fit], -sortScore, -pref.goals.length, -skills.optionalHave.length]
  };
}

/** Main entry point. Never throws, even for an empty or broken profile. */
export function matchCareers(rawProfile, careers, { futureLimit = 5 } = {}) {
  const profile = normalizeProfile(rawProfile);

  const missingInfo = [];
  if (!profile.education.level) missingInfo.push("education");
  if (!profile.goals.length) missingInfo.push("goals");
  if (!profile.skills.length) missingInfo.push("skills");
  const ready = Boolean(profile.education.level || profile.goals.length || profile.skills.length);

  if (!ready || !Array.isArray(careers)) return { ready: false, matches: [], futurePaths: [], missingInfo };

  const matches = [];
  const futurePaths = [];
  for (const career of careers) {
    let result;
    try {
      result = evaluateCareer(career, profile);
    } catch {
      continue; // one bad record must not break the whole page
    }
    if (!result) continue;
    if (result.qualification === "not-met") {
      if (result.matchedGoals.length) futurePaths.push(result);
    } else {
      matches.push(result);
    }
  }

  const bySort = (a, b) => {
    for (let i = 0; i < a._sort.length; i++) if (a._sort[i] !== b._sort[i]) return a._sort[i] - b._sort[i];
    return a.careerId.localeCompare(b.careerId);
  };
  matches.sort(bySort);
  futurePaths.sort(bySort);

  return { ready: true, matches, futurePaths: futurePaths.slice(0, futureLimit), missingInfo };
}
