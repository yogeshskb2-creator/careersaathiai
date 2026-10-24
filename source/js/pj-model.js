// Private Job Finder — pure logic (no page code), tested in Node.
//
// What it does honestly:
// - Compares the person's profile with GENERAL role requirements (data/private-roles.js).
// - It does not search live vacancies (this site has no server). Instead it builds
//   search links to real job portals and lists companies whose business commonly
//   needs that role — clearly saying no vacancy was verified.
// - Every result is a message { key, vars } so the page can show English or Hindi.

import {
  PJ_EDUCATION, PJ_SKILLS, PJ_EXPERIENCE, PJ_CATEGORIES, PJ_EMP_TYPES, PJ_WORK_MODES,
  PJ_SHIFTS, PJ_AVAILABILITY, PJ_EMPLOYER_TYPES, PJ_LOCATION_PREF, PJ_RADIUS, PJ_LANGUAGES,
  PJ_STREAMS, PJ_STUDY_STATUS, PJ_INSTITUTION, PJ_CERTS
} from "../data/pj-options.js";
import { ROLES } from "../data/private-roles.js";
import { SALARIES } from "../data/salary.js";
import { COMPANIES } from "../data/companies.js";
import { COURSES } from "../data/courses.js";
import { EXTRA_LEARNING } from "../data/learning-extra.js";

const msg = (key, vars = {}) => ({ key, vars });
const ids = (list) => new Set(list.map((x) => x.id));
const pick = (v, list) => (typeof v === "string" && ids(list).has(v) ? v : "");
const pickMany = (v, list) => {
  const ok = ids(list);
  return Array.isArray(v) ? [...new Set(v.filter((x) => typeof x === "string" && ok.has(x)))] : [];
};
const yn = (v) => (v === "yes" || v === "no" ? v : "");
const text = (v, max = 120) => (typeof v === "string" ? v.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max) : "");

export const CATEGORY_ORDER = ["strong", "good", "entry", "training", "growth"];
export const MIN_PROFILES = 40;
export const MAX_SALARY_AGE_DAYS = 730;
export const MAX_RANGE_RATIO = 8;

/** Turns anything (old storage, junk) into a clean, complete profile. */
export function normalizePJ(raw) {
  const r = raw && typeof raw === "object" ? raw : {};
  const e = r.edu && typeof r.edu === "object" ? r.edu : {};
  const pr = r.prefs && typeof r.prefs === "object" ? r.prefs : {};
  const en = r.env && typeof r.env === "object" ? r.env : {};
  const year = Number.parseInt(e.year, 10);
  const min = Number(pr.minSalary);
  return {
    name: text(r.name, 60),
    state: typeof r.state === "string" ? r.state.slice(0, 4) : "",
    district: text(r.district, 60),
    city: text(r.city, 60),
    pin: typeof r.pin === "string" ? r.pin.replace(/\s/g, "").slice(0, 6) : "",
    locationPref: pick(r.locationPref, PJ_LOCATION_PREF),
    relocate: yn(r.relocate),
    radius: pick(r.radius, PJ_RADIUS),
    language: pick(r.language, PJ_LANGUAGES),
    edu: {
      level: pick(e.level, PJ_EDUCATION),
      stream: pick(e.stream, PJ_STREAMS),
      course: text(e.course, 80),
      year: Number.isFinite(year) ? year : null,
      status: pick(e.status, PJ_STUDY_STATUS),
      institution: pick(e.institution, PJ_INSTITUTION),
      certs: pickMany(e.certs, PJ_CERTS),
      subjects: text(e.subjects, 120)
    },
    skills: pickMany(r.skills, PJ_SKILLS),
    customSkills: text(r.customSkills, 160),
    experience: pick(r.experience, PJ_EXPERIENCE),
    pastRoles: text(r.pastRoles, 160),
    industries: text(r.industries, 120),
    internship: yn(r.internship),
    prefs: {
      cats: pickMany(pr.cats, PJ_CATEGORIES),
      targetRole: typeof pr.targetRole === "string" && ROLES.some((x) => x.id === pr.targetRole) ? pr.targetRole : "",
      title: text(pr.title, 80),
      industry: text(pr.industry, 80),
      types: pickMany(pr.types, PJ_EMP_TYPES),
      mode: pick(pr.mode, PJ_WORK_MODES),
      shift: pick(pr.shift, PJ_SHIFTS),
      minSalary: Number.isFinite(min) && min > 0 ? Math.round(min) : null,
      availability: pick(pr.availability, PJ_AVAILABILITY),
      travel: yn(pr.travel)
    },
    env: {
      employerTypes: pickMany(en.employerTypes, PJ_EMPLOYER_TYPES),
      smartphone: yn(en.smartphone),
      computer: yn(en.computer),
      internet: yn(en.internet),
      training: yn(en.training),
      certification: yn(en.certification)
    }
  };
}

export function emptyPJ() { return normalizePJ({}); }

/**
 * Checks the form. Returns [{ field, key }] — empty when everything is fine.
 * step: which form step to check (1–5), or 0 for all.
 */
export function validatePJ(raw, step = 0, now = new Date()) {
  const p = normalizePJ(raw);
  const r = raw && typeof raw === "object" ? raw : {};
  const errs = [];
  const want = (s) => step === 0 || step === s;
  if (want(1)) {
    if (!p.state) errs.push({ field: "state", key: "pj.err.state" });
    if (r.pin && !/^[1-9]\d{5}$/.test(String(r.pin).replace(/\s/g, ""))) errs.push({ field: "pin", key: "pj.err.pin" });
    if (!p.locationPref) errs.push({ field: "locationPref", key: "pj.err.locationPref" });
  }
  if (want(2)) {
    if (!p.edu.level) errs.push({ field: "level", key: "pj.err.level" });
    const y = r.edu && r.edu.year;
    if (y !== undefined && y !== null && y !== "") {
      const n = Number(y);
      if (!Number.isInteger(n) || n < 1960 || n > now.getFullYear() + 6) errs.push({ field: "year", key: "pj.err.year" });
    }
  }
  if (want(3)) {
    if (!p.experience) errs.push({ field: "experience", key: "pj.err.experience" });
  }
  if (want(4)) {
    if (!p.prefs.cats.length && !p.prefs.targetRole) errs.push({ field: "cats", key: "pj.err.cats" });
    const m = r.prefs && r.prefs.minSalary;
    if (m !== undefined && m !== null && m !== "") {
      const n = Number(m);
      if (!Number.isFinite(n) || n < 0 || n > 1000000) errs.push({ field: "minSalary", key: "pj.err.minSalary" });
    }
  }
  return errs;
}

// ---------- helpers ----------
export function eduRank(level) {
  const item = PJ_EDUCATION.find((x) => x.id === level);
  return item ? item.rank : null;
}
export function expYears(id) {
  const item = PJ_EXPERIENCE.find((x) => x.id === id);
  return item ? item.years : 0;
}
export function skillLearn(id) {
  return PJ_SKILLS.find((x) => x.id === id)?.learn || "practice";
}
export function roleById(id) { return ROLES.find((r) => r.id === id) || null; }

function formalMet(role, p) {
  if (!role.formal) return true;
  const certs = role.formal.anyCert || [];
  const edus = role.formal.anyEdu || [];
  return certs.some((c) => p.edu.certs.includes(c)) || edus.includes(p.edu.level);
}

function modeFits(role, p) {
  if (p.locationPref === "remote") return role.modes.includes("remote");
  const m = p.prefs.mode;
  if (!m || m === "any") return true;
  if (m === "hybrid") return role.modes.includes("hybrid") || role.modes.includes("remote");
  return role.modes.includes(m);
}
function shiftFits(role, p) {
  const s = p.prefs.shift;
  return !s || s === "flexible" || role.shifts.includes(s) || role.shifts.includes("flexible");
}
function typeFits(role, p) {
  return !p.prefs.types.length || p.prefs.types.some((t) => role.types.includes(t));
}

/** One role compared with one profile. */
export function evaluateRole(role, rawProfile) {
  const p = normalizePJ(rawProfile);
  const userRank = eduRank(p.edu.level);
  const eduOk = role.eduRank === null || userRank === null || userRank >= role.eduRank;
  const formalOk = formalMet(role, p);
  const have = role.required.filter((s) => p.skills.includes(s));
  const missing = role.required.filter((s) => !p.skills.includes(s));
  const helpfulHave = role.helpful.filter((s) => p.skills.includes(s));
  const years = expYears(p.experience);
  const expOk = years >= role.expYears;
  const isTarget = p.prefs.targetRole === role.id;
  const prefCat = isTarget || role.cats.some((c) => p.prefs.cats.includes(c));
  const fits = { mode: modeFits(role, p), shift: shiftFits(role, p), type: typeFits(role, p) };
  const prefsOk = fits.mode && fits.shift && fits.type;

  let category;
  if (!eduOk || !formalOk) category = "training";
  else if (!expOk) category = "growth";
  else if (missing.length === 0) category = prefCat && prefsOk ? "strong" : "good";
  else if (missing.length === 1 && role.expYears === 0 && years < 1) category = "entry";
  else if (missing.length <= 3) category = "training";
  else category = null;

  const reasons = [];
  if (role.eduRank !== null && eduOk && userRank !== null) reasons.push(msg("pj.why.edu"));
  if (role.eduRank === null) reasons.push(msg("pj.why.noEdu"));
  if (role.formal && formalOk) reasons.push(msg("pj.why.formal"));
  if (have.length) reasons.push(msg("pj.why.skills", { skills: have }));
  if (helpfulHave.length) reasons.push(msg("pj.why.helpful", { skills: helpfulHave }));
  if (role.expYears === 0) reasons.push(msg("pj.why.fresher"));
  else if (expOk) reasons.push(msg("pj.why.exp", { n: role.expYears }));
  if (prefCat) reasons.push(msg(isTarget ? "pj.why.target" : "pj.why.cat"));
  if (p.locationPref === "remote" && role.modes.includes("remote")) reasons.push(msg("pj.why.remote"));

  const gaps = [];
  if (!eduOk) gaps.push(msg("pj.gap.edu", { rank: role.eduRank }));
  if (!formalOk) gaps.push(msg("pj.gap.formal", { role: role.id }));
  if (missing.length) gaps.push(msg("pj.gap.skills", { skills: missing }));
  if (!expOk) gaps.push(msg("pj.gap.exp", { n: role.expYears }));
  if (!fits.mode) gaps.push(msg("pj.gap.mode"));
  if (!fits.shift) gaps.push(msg("pj.gap.shift"));
  if (!fits.type) gaps.push(msg("pj.gap.type"));

  return { roleId: role.id, role, category, eduOk, formalOk, expOk, have, missing, helpfulHave, prefCat, isTarget, fits, reasons, gaps };
}

/**
 * All roles worth showing, best first.
 * Shown when: it is the person's target, OR it is in a chosen category, OR it is
 * a strong/good/entry fit anyway (so people discover options they did not think of).
 */
export function matchRoles(rawProfile, roles = ROLES) {
  const p = normalizePJ(rawProfile);
  const out = [];
  for (const role of roles) {
    const r = evaluateRole(role, p);
    if (!r.category) { if (r.isTarget) out.push({ ...r, category: "training" }); continue; }
    if (p.locationPref === "remote" && !role.modes.includes("remote") && !r.isTarget) continue;
    const discover = ["strong", "good", "entry"].includes(r.category);
    if (r.prefCat || discover) out.push(r);
  }
  const rank = (c) => CATEGORY_ORDER.indexOf(c);
  return out.sort((a, b) =>
    rank(a.category) - rank(b.category) ||
    Number(b.isTarget) - Number(a.isTarget) ||
    Number(b.prefCat) - Number(a.prefCat) ||
    a.missing.length - b.missing.length ||
    b.have.length - a.have.length ||
    a.role.id.localeCompare(b.role.id));
}

// ---------- Salary ----------
function daysBetween(a, b) {
  return Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86400000);
}
const round500 = (n) => Math.round(n / 500) * 500;

/**
 * Decides whether a salary record is good enough to show, and converts it to
 * approximate monthly base pay. Never invents a number.
 */
export function salaryView(salaryId, todayISO) {
  const rec = SALARIES.find((s) => s.id === salaryId);
  if (!rec) return { show: false, reason: "none" };
  const base = { rec, profiles: rec.profiles, updated: rec.updated, url: rec.url };
  if (daysBetween(rec.updated, todayISO) > MAX_SALARY_AGE_DAYS) return { ...base, show: false, reason: "old" };
  if (rec.profiles < MIN_PROFILES) return { ...base, show: false, reason: "few" };
  if (rec.p90 / rec.p10 > MAX_RANGE_RATIO) return { ...base, show: false, reason: "wide" };
  return {
    ...base, show: true,
    low: round500(rec.p10 / 12), high: round500(rec.p90 / 12), avg: round500(rec.avg / 12),
    annualLow: rec.p10, annualHigh: rec.p90, limited: rec.profiles < 100
  };
}

/** How the person's minimum expected salary compares with a shown range. */
export function salaryVsMin(view, minMonthly) {
  if (!view || !view.show || !minMonthly) return null;
  if (minMonthly > view.high) return "above";
  if (minMonthly < view.low) return "below";
  return "within";
}

// ---------- Companies and search links ----------
export function companiesForRole(role, companies = COMPANIES) {
  return companies.filter((c) => c.cats.some((x) => role.cats.includes(x)));
}

/** Where to search live openings for a role. Links only — nothing is fetched. */
export function searchLinks(role, rawProfile, stateName = "") {
  const p = normalizePJ(rawProfile);
  let place = p.city || p.district || stateName || "India";
  if (p.locationPref === "remote") place = "Remote";
  else if (p.locationPref === "india") place = "India";
  else if (p.locationPref === "state" && stateName) place = stateName;
  const q = encodeURIComponent(role.search);
  const l = encodeURIComponent(place);
  const links = [
    { id: "ncs", url: "https://www.ncs.gov.in/", official: true },
    { id: "indeed", url: `https://in.indeed.com/jobs?q=${q}&l=${l}`, official: false },
    { id: "linkedin", url: `https://www.linkedin.com/jobs/search/?keywords=${q}&location=${l}`, official: false }
  ];
  if (p.prefs.types.includes("apprenticeship") || role.types.includes("apprenticeship")) {
    links.push({ id: "apprenticeship", url: "https://www.apprenticeshipindia.gov.in/", official: true });
  }
  return { place, links };
}

// ---------- Skills gap and improvement plan ----------
export function feederRoles(targetId, roles = ROLES) {
  return roles.filter((r) => r.next.includes(targetId));
}

export function gapAnalysis(rawProfile, roleId, todayISO = "2026-10-23") {
  const p = normalizePJ(rawProfile);
  const role = roleById(roleId);
  if (!role) return null;
  const ev = evaluateRole(role, p);
  const missingCourse = ev.missing.filter((s) => skillLearn(s) === "course");
  const missingPractice = ev.missing.filter((s) => skillLearn(s) === "practice");
  const missingLicence = ev.missing.filter((s) => skillLearn(s) === "licence");
  const improve = role.helpful.filter((s) => !p.skills.includes(s));
  const years = expYears(p.experience);
  const expGap = Math.max(0, role.expYears - years);
  const userRank = eduRank(p.edu.level);
  const eduGap = role.eduRank !== null && userRank !== null && userRank < role.eduRank;

  const steps = [];
  if (missingCourse.length) steps.push(msg("pj.step.course", { skills: missingCourse }));
  if (!ev.formalOk || missingLicence.length) steps.push(msg("pj.step.formal", ev.formalOk ? { skills: missingLicence } : { role: role.id, skills: missingLicence }));
  if (missingPractice.length) steps.push(msg("pj.step.practice", { skills: missingPractice }));
  if (eduGap) steps.push(msg("pj.step.edu", { rank: role.eduRank }));
  if (improve.length) steps.push(msg("pj.step.improve", { skills: improve.slice(0, 3) }));
  const portfolio = ["digital-marketing", "graphic-design", "programming"].some((s) => role.required.includes(s));
  steps.push(msg(portfolio ? "pj.step.portfolio" : "pj.step.proof"));
  const feeders = feederRoles(role.id).map((r) => evaluateRole(r, p))
    .filter((r) => ["strong", "good", "entry"].includes(r.category));
  if (expGap > 0 || feeders.length) steps.push(msg("pj.step.stepping", { roles: feeders.map((f) => f.roleId), n: expGap }));
  steps.push(msg("pj.step.apply"));

  return {
    role, evaluation: ev, category: ev.category || "training",
    current: { level: p.edu.level, skills: p.skills, experience: p.experience },
    have: [...ev.have, ...ev.helpfulHave],
    missingCourse, missingPractice, missingLicence, improve,
    formalOk: ev.formalOk, eduGap, expGap, steps,
    salary: salaryView(role.salary, todayISO),
    ready: ev.category === "strong" || ev.category === "good"
  };
}

// ---------- Learning options ----------
// Government/statutory certificates (NIELIT, NCVT/ITI, PMKVY/NSQF, driving licence, NCTE-recognised training).
const RECOGNISED_COURSES = ["nielit-ccc", "nielit-olevel", "iti-cts", "pmkvy-training", "sarathi-licence", "ncte-teacher"];
const PRACTICAL_COURSES = ["iti-cts", "pmkvy-training"];

/**
 * Existing course skills (data/courses.js) → Private Job Finder skills.
 * Uses only the exact equivalents listed in PJ_SKILLS.courseSkills, and only the
 * course's VERIFIED skills are passed in — so no provider is linked to a skill
 * through a similar name, a shared category or an unconfirmed claim.
 */
export function courseToPJSkills(courseSkills) {
  const list = Array.isArray(courseSkills) ? courseSkills : [];
  return PJ_SKILLS.filter((s) => s.courseSkills.some((c) => list.includes(c))).map((s) => s.id);
}

/** Both course lists in one shape. Broken records are skipped, not guessed. */
export function allLearning() {
  const fromCourses = COURSES.filter((c) => c && c.id && c.title && c.url).map((c) => {
    const verified = Array.isArray(c.skills) ? c.skills : [];
    return {
      id: c.id, source: "courses", title: c.title, provider: c.provider, url: c.url,
      about: c.topics, costNote: c.costNote, duration: c.duration, eligibility: c.prerequisites,
      searchTip: c.searchTip, checkedFrom: c.checkedFrom, checked: c.checked, note: c.note || null,
      evidence: c.evidence || null, courseSkills: verified,
      unverifiedCourseSkills: Array.isArray(c.unverifiedSkills) ? c.unverifiedSkills : [],
      mode: c.mode === "in-person" ? "offline" : c.mode,
      cost: c.cost, govt: c.providerType === "government" || c.providerType === "institute",
      cert: RECOGNISED_COURSES.includes(c.id) ? "recognised" : (c.certificate ? "provider" : null),
      practical: PRACTICAL_COURSES.includes(c.id), beginner: !c.minEducation, eduMax: null,
      skills: courseToPJSkills(verified), kind: c.providerType === "government" ? "govt" : "free-online"
    };
  });
  const extra = EXTRA_LEARNING.filter((x) => x && x.id && x.url).map((x) => ({ ...x, source: "extra", skills: Array.isArray(x.skills) ? x.skills : [] }));
  return [...fromCourses, ...extra];
}

export const LEARNING_PATHS = ["all", "free", "paid", "offline", "online", "govt", "certificate", "practical"];

function inPath(o, path) {
  switch (path) {
    case "free": return o.cost === "free" || o.cost === "free-exam-fee";
    case "paid": return o.cost === "fee";
    case "offline": return o.mode === "offline" || o.mode === "both";
    case "online": return o.mode === "online" || o.mode === "both";
    case "govt": return o.govt;
    case "certificate": return o.cert === "recognised" || o.cert === "provider";
    case "practical": return o.practical;
    default: return true;
  }
}

/** What a matched option teaches, in its own words (course skill ids or PJ skill ids). */
function teachesFor(o, covers) {
  if (o.source === "courses") {
    const ids = o.courseSkills.filter((cs) => PJ_SKILLS.some((p) => covers.includes(p.id) && p.courseSkills.includes(cs)));
    return { vocab: "course", ids };
  }
  return { vocab: "pj", ids: covers };
}

/**
 * Learning options for the skills a person needs.
 *  items   — options with a VERIFIED offering of at least one needed skill, best first.
 *  general — portals and programmes with no verified skill (places to search
 *            yourself); they are never presented as teaching the skill.
 *  missing — needed skills that no verified option teaches (the page says so).
 *  picks   — "best of" choices, taken only from verified items.
 */
export function recommendLearning(skills, rawProfile, path = "all", primary = skills) {
  const p = normalizePJ(rawProfile);
  const want = new Set(Array.isArray(skills) ? skills : []);
  const main = new Set(Array.isArray(primary) ? primary : []);
  const rank = eduRank(p.edu.level);
  const low = rank !== null && rank <= 3;
  const all = allLearning().filter((o) => o.eduMax === null || o.eduMax === undefined || (rank !== null && rank <= o.eduMax));
  const scored = all
    .map((o) => {
      const covers = o.skills.filter((s) => want.has(s));
      // Skills the job really needs count most; nice-to-have skills count a little.
      let score = covers.filter((x) => main.has(x)).length * 10 + covers.filter((x) => !main.has(x)).length * 3;
      if (o.cost === "fee") score -= 2;
      if (o.govt) score += 3;
      if (o.cost === "free" || o.cost === "free-exam-fee") score += 3;
      if (o.cert === "recognised") score += 2;
      if (o.practical) score += 2;
      if (low && o.beginner) score += 2;
      if (p.env.internet === "no" && o.mode === "online") score -= 6;
      return { ...o, covers, score, teaches: teachesFor(o, covers) };
    });
  const items = scored
    .filter((o) => o.covers.length > 0 && inPath(o, path))
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  const general = scored
    .filter((o) => o.skills.length === 0 && inPath(o, path))
    .sort((a, b) => Number(b.govt) - Number(a.govt) || Number(low && b.beginner) - Number(low && a.beginner) || a.id.localeCompare(b.id));
  const taught = new Set(scored.flatMap((o) => o.covers));
  const missing = [...want].filter((s) => !taught.has(s));

  const best = (fn) => items.find(fn)?.id || null;
  const picks = {
    free: best((o) => o.cost === "free" || o.cost === "free-exam-fee"),
    govt: best((o) => o.govt),
    practical: best((o) => o.practical),
    certificate: best((o) => o.cert === "recognised") || best((o) => o.cert === "provider"),
    offline: best((o) => o.mode === "offline"),
    beginner: best((o) => o.beginner)
  };
  return { items, general, missing, picks };
}

/** Skills to learn for a target role (required first, then helpful). */
export function skillsToLearn(gap) {
  if (!gap) return [];
  return [...new Set([...gap.missingCourse, ...gap.missingLicence, ...gap.missingPractice, ...gap.improve])];
}
