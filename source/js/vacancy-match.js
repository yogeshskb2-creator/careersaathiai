// Open-recruitment logic. Pure functions — tested in Node.
//
// Everything is worked out from TODAY'S date on the visitor's device:
//   upcoming (not open yet) · open · closing soon (≤ 7 days) · closed
// "Verified active vacancy" is used ONLY for records checked against the
// official notice AND open today. Everything else says "confirm officially".

import { normalizeProfile } from "./profile-model.js";
import { userLevels } from "./engine.js";

export const CLOSING_SOON_DAYS = 7;
export const STALE_DAYS = 90;          // scheme/course facts older than this get a warning
export const STALE_LIST_DAYS = 14;     // the vacancy list itself should be refreshed weekly

const msg = (key, vars = {}) => ({ key, vars });

/** Today's date as "YYYY-MM-DD" in the visitor's own time zone. */
export function todayISO(now = new Date()) {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Whole days from date a to date b ("YYYY-MM-DD"), ignoring time zones. */
export function daysBetween(a, b) {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000);
}

/** "upcoming" | "open" | "closing-soon" | "closed", plus day counts. */
export function vacancyStatus(v, today) {
  if (today < v.opens) return { status: "upcoming", daysToOpen: daysBetween(today, v.opens), daysLeft: daysBetween(today, v.closes) };
  if (today > v.closes) return { status: "closed", daysLeft: -1 };
  const daysLeft = daysBetween(today, v.closes); // 0 = last day today
  return { status: daysLeft <= CLOSING_SOON_DAYS ? "closing-soon" : "open", daysLeft };
}

export const isActive = (s) => s === "open" || s === "closing-soon";

/** How old a "checked" date is, in days (never negative). */
export function ageInDays(checkedISO, today) {
  return Math.max(0, daysBetween(checkedISO, today));
}

/** Compares one vacancy with a profile. Never says "eligible" — only what fits and what to check. */
export function matchVacancy(v, rawProfile, today) {
  const p = normalizeProfile(rawProfile);
  const st = vacancyStatus(v, today);
  const reasons = [];
  const checks = [];
  let fit = "check"; // "fits-recorded" | "check" | "not-met"

  // Qualification
  const levels = userLevels(p);
  let eduOk = null;
  if (Array.isArray(v.education)) {
    if (!levels.length) eduOk = null;
    else if (levels.some((l) => v.education.includes(l))) eduOk = true;
    else if (levels.every((l) => l === "other")) eduOk = null;
    else eduOk = false;
  }
  if (eduOk === true) reasons.push(msg("vac.why.edu", { level: levels.find((l) => v.education.includes(l)) }));
  if (eduOk === false) checks.push(msg("vac.check.eduNo"));
  if (eduOk === null) checks.push(msg("vac.check.edu"));

  // Goal
  if (p.goals.includes("govt-job")) reasons.push(msg("vac.why.goal"));

  // Age — we only know an exact age if the person chose to give it.
  const age = p.eligibility.exactAge;
  if (v.age && Number.isInteger(age)) {
    if (v.age.min && age < v.age.min) checks.push(msg("vac.check.ageYoung", { min: v.age.min }));
    else if (v.age.maxGeneral && age > v.age.maxGeneral) {
      const reserved = ["obc", "sc", "st", "ews"].includes(p.eligibility.category) ||
        p.eligibility.pwd === "yes" || p.eligibility.exServiceman === "yes";
      checks.push(msg(reserved ? "vac.check.ageRelax" : "vac.check.ageOld", { max: v.age.maxGeneral }));
    }
  }
  if (v.age) checks.push(msg("vac.check.ageDate", { date: v.age.asOn }));

  // Experience
  if (v.experienceYears > 0) checks.push(msg("vac.check.exp", { n: v.experienceYears }));

  // State-level recruitment
  if (v.state) {
    if (p.state === v.state) reasons.push(msg("vac.why.state"));
    else checks.push(msg("vac.check.state"));
  }

  // Source quality
  if (v.verification !== "official-notice") checks.push(msg("vac.check.reported"));
  checks.push(msg("vac.check.notice"));

  if (eduOk === false) fit = "not-met";
  else if (eduOk === true && !(v.state && p.state !== v.state)) fit = "fits-recorded";

  const verifiedActive = v.verification === "official-notice" && isActive(st.status);
  const relevant = fit !== "not-met" && (p.goals.includes("govt-job") || eduOk === true);

  return { vacancy: v, ...st, fit, relevant, verifiedActive, reasons, checks };
}

/**
 * All vacancies that are not closed, with match info.
 * Order: relevant for this person first, then clear matches before "check" ones,
 * then open/closing-soon before upcoming, then the soonest closing date.
 */
export function listVacancies(vacancies, rawProfile, today) {
  if (!Array.isArray(vacancies)) return [];
  const out = [];
  for (const v of vacancies) {
    try {
      const r = matchVacancy(v, rawProfile, today);
      if (r.status !== "closed") out.push(r);
    } catch { /* skip a broken record */ }
  }
  const rank = { "closing-soon": 0, open: 1, upcoming: 2 };
  const fitRank = { "fits-recorded": 0, check: 1, "not-met": 2 };
  return out.sort((a, b) =>
    (Number(b.relevant) - Number(a.relevant)) ||
    (fitRank[a.fit] - fitRank[b.fit]) ||
    (rank[a.status] - rank[b.status]) ||
    (a.vacancy.closes < b.vacancy.closes ? -1 : a.vacancy.closes > b.vacancy.closes ? 1 : 0));
}

/** Open (not upcoming) vacancies that match the profile — for dashboard & recommendations. */
export function openMatches(vacancies, rawProfile, today) {
  return listVacancies(vacancies, rawProfile, today).filter((r) => r.relevant && isActive(r.status));
}
