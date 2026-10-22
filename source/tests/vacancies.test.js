// Tests for open recruitments: date logic, matching and data quality. People are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import { VACANCIES, LIST_UPDATED } from "../data/vacancies.js";
import { CAREERS } from "../data/careers.js";
import { STATES, EDUCATION_LEVELS } from "../data/options.js";
import { emptyProfile } from "../js/profile-model.js";
import {
  vacancyStatus, daysBetween, todayISO, matchVacancy, listVacancies, openMatches, ageInDays, isActive
} from "../js/vacancy-match.js";

const V = (o = {}) => ({
  id: "t", title: { en: "T", hi: "टी" }, org: { en: "O", hi: "ओ" }, posts: { en: "P", hi: "प" },
  category: "railway", state: null, opens: "2026-10-08", closes: "2026-11-06", closesTime: null,
  education: ["graduation"], educationNote: null, age: null, experienceYears: 0,
  applyUrl: "https://www.rrbapply.gov.in/", careerIds: [], verification: "official-notice",
  checkedOn: "2026-10-22", checkedFrom: { en: "x", hi: "x" }, ...o
});
function person(changes = {}) {
  const p = emptyProfile();
  p.ageRange = "22-25"; p.state = "UP"; p.preferredLocation = "home-state"; p.employmentStatus = "unemployed";
  p.education.level = "graduation"; p.goals = ["govt-job"];
  return Object.assign(p, changes);
}
const keys = (l) => l.map((m) => m.key);

// ---------- Dates ----------
test("status follows today's date: upcoming, open, closing soon, last day, closed", () => {
  const v = V();
  assert.equal(vacancyStatus(v, "2026-10-07").status, "upcoming");
  assert.equal(vacancyStatus(v, "2026-10-08").status, "open");
  assert.equal(vacancyStatus(v, "2026-10-22").status, "open");
  assert.equal(vacancyStatus(v, "2026-10-22").daysLeft, 15);
  assert.equal(vacancyStatus(v, "2026-10-31").status, "closing-soon");
  assert.equal(vacancyStatus(v, "2026-11-06").daysLeft, 0, "last day still open");
  assert.equal(vacancyStatus(v, "2026-11-06").status, "closing-soon");
  assert.equal(vacancyStatus(v, "2026-11-07").status, "closed");
});

test("day counting works across months and years", () => {
  assert.equal(daysBetween("2026-12-30", "2027-01-02"), 3);
  assert.equal(daysBetween("2026-10-22", "2026-10-22"), 0);
  assert.equal(todayISO(new Date(2026, 9, 5)), "2026-10-05");
  assert.equal(ageInDays("2026-07-01", "2026-10-22"), 113);
  assert.equal(ageInDays("2026-12-01", "2026-10-22"), 0, "future date never negative");
});

test("closed vacancies disappear by themselves as days pass", () => {
  const list = [V({ id: "a", closes: "2026-10-27" }), V({ id: "b" })];
  assert.equal(listVacancies(list, person(), "2026-10-22").length, 2);
  assert.deepEqual(listVacancies(list, person(), "2026-10-28").map((r) => r.vacancy.id), ["b"]);
  assert.deepEqual(listVacancies(list, person(), "2026-11-07"), []);
});

// ---------- Verified label ----------
test("'verified active vacancy' only for official-notice records that are open today", () => {
  assert.equal(matchVacancy(V(), person(), "2026-10-22").verifiedActive, true);
  assert.equal(matchVacancy(V({ verification: "news-reports" }), person(), "2026-10-22").verifiedActive, false);
  assert.equal(matchVacancy(V(), person(), "2026-10-01").verifiedActive, false, "not yet open");
  assert.ok(keys(matchVacancy(V({ verification: "news-reports" }), person(), "2026-10-22").checks).includes("vac.check.reported"));
});

// ---------- Matching ----------
test("qualification: graduate fits a graduate post; Class 12 does not", () => {
  assert.equal(matchVacancy(V(), person(), "2026-10-22").fit, "fits-recorded");
  const p = person(); p.education.level = "class12";
  const r = matchVacancy(V(), p, "2026-10-22");
  assert.equal(r.fit, "not-met");
  assert.equal(r.relevant, false);
});

test("posts with mixed rules ask the person to check instead of guessing", () => {
  const r = matchVacancy(V({ education: null }), person(), "2026-10-22");
  assert.equal(r.fit, "check");
  assert.ok(keys(r.checks).includes("vac.check.edu"));
});

test("age: only checked when an exact age was given; reserved categories get a relaxation note", () => {
  const v = V({ age: { min: 18, maxGeneral: 30, asOn: "2027-01-01", note: { en: "", hi: "" } } });
  assert.ok(!keys(matchVacancy(v, person(), "2026-10-22").checks).includes("vac.check.ageOld"));
  const p = person(); p.eligibility.exactAge = 32;
  assert.ok(keys(matchVacancy(v, p, "2026-10-22").checks).includes("vac.check.ageOld"));
  p.eligibility.category = "obc";
  assert.ok(keys(matchVacancy(v, p, "2026-10-22").checks).includes("vac.check.ageRelax"));
  const young = person(); young.eligibility.exactAge = 16;
  assert.ok(keys(matchVacancy(v, young, "2026-10-22").checks).includes("vac.check.ageYoung"));
});

test("state recruitment: same state is a reason, other states must check local rules", () => {
  const v = V({ state: "AP" });
  assert.ok(keys(matchVacancy(v, person({ state: "AP" }), "2026-10-22").reasons).includes("vac.why.state"));
  const other = matchVacancy(v, person(), "2026-10-22");
  assert.ok(keys(other.checks).includes("vac.check.state"));
  assert.equal(other.fit, "check");
});

test("experience requirement is shown", () => {
  assert.ok(keys(matchVacancy(V({ experienceYears: 2 }), person(), "2026-10-22").checks).includes("vac.check.exp"));
});

test("matches come first, then the soonest closing", () => {
  const list = [V({ id: "late", closes: "2026-11-30" }), V({ id: "soon", closes: "2026-10-25" }),
    V({ id: "noMatch", education: ["iti"], closes: "2026-10-23" })];
  const p = person(); p.goals = [];
  assert.deepEqual(listVacancies(list, p, "2026-10-22").map((r) => r.vacancy.id), ["soon", "late", "noMatch"]);
});

test("clear matches come before 'check' ones (e.g. another state's recruitment)", () => {
  const list = [V({ id: "otherState", state: "AP", closes: "2026-10-27" }), V({ id: "clear", closes: "2026-11-06" })];
  assert.deepEqual(listVacancies(list, person(), "2026-10-22").map((r) => r.vacancy.id), ["clear", "otherState"]);
});

test("openMatches leaves out upcoming and non-matching vacancies", () => {
  const list = [V({ id: "open" }), V({ id: "future", opens: "2026-11-01", closes: "2026-11-30" }), V({ id: "iti", education: ["iti"] })];
  assert.deepEqual(openMatches(list, person(), "2026-10-22").map((r) => r.vacancy.id), ["open"]);
});

test("empty or junk profiles and data never crash", () => {
  for (const p of [null, undefined, {}, "x", emptyProfile()]) {
    const out = listVacancies(VACANCIES, p, "2026-10-22");
    assert.ok(Array.isArray(out));
  }
  assert.deepEqual(listVacancies(null, person(), "2026-10-22"), []);
  assert.deepEqual(listVacancies([{ id: "broken" }, V()], person(), "2026-10-22").map((r) => r.vacancy.id), ["t"]);
});

// ---------- Real data quality ----------
test("vacancy records: valid dates, official https links, both languages, honest verification", () => {
  const careers = new Set(CAREERS.map((c) => c.id));
  const states = new Set(STATES.map((s) => s.id));
  const levels = new Set(EDUCATION_LEVELS.map((l) => l.id));
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  assert.match(LIST_UPDATED, iso);
  const ids = new Set();
  for (const v of VACANCIES) {
    assert.ok(!ids.has(v.id), `duplicate ${v.id}`); ids.add(v.id);
    for (const f of ["title", "org", "posts", "checkedFrom"]) assert.ok(v[f].en && v[f].hi, `${v.id}.${f}`);
    assert.match(v.opens, iso); assert.match(v.closes, iso); assert.match(v.checkedOn, iso);
    assert.ok(v.opens <= v.closes, `${v.id}: opens after closing`);
    assert.ok(v.applyUrl.startsWith("https://"), `${v.id} url`);
    assert.match(new URL(v.applyUrl).hostname, /\.gov\.in$|\.nic\.in$/, `${v.id}: apply link must be an official .gov.in/.nic.in site`);
    assert.ok(["official-notice", "news-reports"].includes(v.verification), `${v.id} verification`);
    if (v.state) assert.ok(states.has(v.state), `${v.id} state`);
    if (v.education) assert.ok(v.education.every((l) => levels.has(l)), `${v.id} education`);
    if (v.educationNote) assert.ok(v.educationNote.en && v.educationNote.hi);
    if (v.age) assert.ok(v.age.note.en && v.age.note.hi && iso.test(v.age.asOn), `${v.id} age`);
    v.careerIds.forEach((c) => assert.ok(careers.has(c), `${v.id}: unknown career ${c}`));
  }
});

test("on the day the list was made, every record is open or upcoming (no stale entries)", () => {
  for (const v of VACANCIES) {
    const s = vacancyStatus(v, LIST_UPDATED).status;
    assert.ok(s !== "closed", `${v.id} was already closed on ${LIST_UPDATED}`);
  }
  assert.ok(VACANCIES.some((v) => isActive(vacancyStatus(v, LIST_UPDATED).status)));
});
