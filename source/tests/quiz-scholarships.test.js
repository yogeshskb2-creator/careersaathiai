// Tests for the interest quiz and the scholarship data. People are fictional.
import { test } from "node:test";
import assert from "node:assert/strict";
import { QUIZ_AREAS, QUESTIONS, ANSWERS } from "../data/quiz.js";
import { scoreQuiz, cleanAnswers, careersForAreas, MAX_PER_AREA } from "../js/quiz-model.js";
import { CAREERS } from "../data/careers.js";
import { ALL_SKILLS } from "../data/options.js";
import { SCHOLARSHIPS, SCHOLARSHIP_CATEGORIES, NSP_PORTAL } from "../data/scholarships.js";
import { matchSchemes, evaluateScheme } from "../js/scheme-match.js";
import { emptyProfile } from "../js/profile-model.js";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const all = (v) => Object.fromEntries(QUESTIONS.map((q) => [q.id, v]));

// ---------- Quiz data ----------
test("quiz: 6 areas, 4 questions each, unique ids, both languages, never the same area twice in a row", () => {
  assert.equal(QUIZ_AREAS.length, 6);
  for (const a of QUIZ_AREAS) assert.equal(QUESTIONS.filter((q) => q.area === a.id).length, 4, a.id);
  assert.equal(new Set(QUESTIONS.map((q) => q.id)).size, QUESTIONS.length);
  QUESTIONS.forEach((q) => assert.ok(q.text.en && q.text.hi, q.id));
  for (let i = 1; i < QUESTIONS.length; i++) assert.notEqual(QUESTIONS[i].area, QUESTIONS[i - 1].area, `q${i + 1}`);
  assert.equal(MAX_PER_AREA, 4 * Math.max(...ANSWERS.map((a) => a.value)));
});

test("quiz areas link to real careers, skills and guide pages", () => {
  const careers = new Set(CAREERS.map((c) => c.id));
  const skills = new Set(ALL_SKILLS.map((s) => s.id));
  for (const a of QUIZ_AREAS) {
    assert.ok(a.name.en && a.name.hi && a.about.en && a.about.hi, a.id);
    a.careers.forEach((c) => assert.ok(careers.has(c), `${a.id}: ${c}`));
    a.skills.forEach((s) => assert.ok(skills.has(s), `${a.id}: ${s}`));
    assert.ok(existsSync(join(root, a.guide)), `${a.id}: ${a.guide}`);
  }
});

// ---------- Scoring ----------
test("scoring adds points per area and finds the top area", () => {
  const ans = all(0);
  QUESTIONS.filter((q) => q.area === "organise").forEach((q) => { ans[q.id] = 2; });
  const r = scoreQuiz(ans);
  assert.equal(r.scores.organise, 8);
  assert.deepEqual(r.top, ["organise"]);
  assert.ok(r.complete && r.clear);
});

test("areas within 1 point of the best are also shown (max 3)", () => {
  const ans = all(0);
  QUESTIONS.filter((q) => q.area === "hands").forEach((q) => { ans[q.id] = 2; });               // 8
  QUESTIONS.filter((q) => q.area === "help").forEach((q, i) => { ans[q.id] = i === 0 ? 1 : 2; }); // 7
  QUESTIONS.filter((q) => q.area === "lead").forEach((q) => { ans[q.id] = 1; });                // 4
  assert.deepEqual(scoreQuiz(ans).top, ["hands", "help"]);
  assert.equal(scoreQuiz(all(2)).top.length, 3, "a full tie is capped at 3");
});

test("all 'No' gives no result instead of a fake one", () => {
  const r = scoreQuiz(all(0));
  assert.equal(r.clear, false);
  assert.deepEqual(r.top, []);
});

test("incomplete, empty and junk answers never crash", () => {
  assert.equal(scoreQuiz({}).answered, 0);
  assert.equal(scoreQuiz({ q1: 2 }).complete, false);
  assert.equal(scoreQuiz(null).answered, 0);
  assert.deepEqual(cleanAnswers({ q1: 2, q2: "x", q3: 7, zz: 1 }), { q1: 2 });
  assert.deepEqual(cleanAnswers("junk"), {});
});

test("careersForAreas joins careers without duplicates", () => {
  const ids = careersForAreas(["create", "lead"]);
  assert.equal(ids.filter((x) => x === "tailoring-business").length, 1);
  assert.deepEqual(careersForAreas(["nope"]), []);
});

// ---------- Scholarships ----------
function student(changes = {}) {
  const p = emptyProfile();
  p.ageRange = "18-21"; p.state = "UP"; p.preferredLocation = "home-state"; p.employmentStatus = "student";
  p.education.level = "class12"; p.goals = ["higher-education"];
  return Object.assign(p, changes);
}
const keys = (l) => l.map((m) => m.key);
const sch = (id) => SCHOLARSHIPS.find((s) => s.id === id);

test("scholarship records: fields in both languages, https links, valid categories", () => {
  const cats = new Set(SCHOLARSHIP_CATEGORIES.map((c) => c.id));
  for (const s of SCHOLARSHIPS) {
    assert.ok(cats.has(s.category), s.id);
    for (const f of ["name", "purpose", "audience", "ministry", "checkedFrom"]) assert.ok(s[f].en && s[f].hi, `${s.id}.${f}`);
    for (const f of ["eligibility", "benefits", "howToApply"]) s[f].forEach((x) => assert.ok(x.en && x.hi, `${s.id}.${f}`));
    assert.ok(s.officialUrl.startsWith("https://"), s.id);
    assert.match(new URL(s.officialUrl).hostname, /\.gov\.in$/, `${s.id}: official .gov.in link`);
    assert.ok(!/guarantee|assured|100%/i.test(JSON.stringify(s)), `${s.id}: no promises`);
  }
  assert.ok(NSP_PORTAL.url.startsWith("https://scholarships.gov.in"));
});

test("every scholarship reminds that income and final eligibility must be confirmed", () => {
  for (const s of SCHOLARSHIPS) {
    const r = evaluateScheme(s, student());
    assert.ok(keys(r.checks).includes("sch.check.final"), s.id);
  }
  // The income condition is part of every record's published conditions.
  for (const s of SCHOLARSHIPS) assert.ok(/income|आय/i.test(JSON.stringify(s.eligibility)), `${s.id} lists the income limit`);
});

test("Class 12 student wanting higher education sees the Central Sector Scheme", () => {
  const worth = matchSchemes(student(), SCHOLARSHIPS).filter((r) => r.worthALook).map((r) => r.schemeId);
  assert.ok(worth.includes("csss"), worth.join());
});

test("Pragati only for girls; Saksham only with disability; SC and OBC schemes by category", () => {
  const girl = student(); girl.eligibility.gender = "female";
  assert.equal(evaluateScheme(sch("aicte-pragati"), girl).worthALook, true);
  const boy = student(); boy.eligibility.gender = "male";
  assert.equal(evaluateScheme(sch("aicte-pragati"), boy).worthALook, false);

  const pwd = student(); pwd.eligibility.pwd = "yes";
  assert.equal(evaluateScheme(sch("aicte-saksham"), pwd).worthALook, true);
  const unknown = evaluateScheme(sch("aicte-saksham"), student());
  assert.ok(keys(unknown.checks).includes("sch.check.pwd"), "not told → asked to check, not assumed");
  const noPwd = student(); noPwd.eligibility.pwd = "no";
  assert.equal(evaluateScheme(sch("aicte-saksham"), noPwd).worthALook, false);

  const sc = student(); sc.eligibility.category = "sc";
  assert.equal(evaluateScheme(sch("post-matric-sc"), sc).worthALook, true);
  const obc9 = student({ education: { ...emptyProfile().education, level: "class10" } }); obc9.eligibility.category = "obc";
  assert.equal(evaluateScheme(sch("pm-yasasvi-top-school"), obc9).worthALook, true);
});

test("scholarships with junk profiles do not crash", () => {
  for (const p of [null, {}, "x", emptyProfile()]) assert.equal(matchSchemes(p, SCHOLARSHIPS).length, SCHOLARSHIPS.length);
});
