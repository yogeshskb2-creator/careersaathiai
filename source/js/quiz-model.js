// Interest quiz scoring. Pure functions — tested in Node.
import { QUIZ_AREAS, QUESTIONS } from "../data/quiz.js";

export const MAX_PER_AREA = 8; // 4 questions × 2 points

/**
 * answers: { q1: 2, q2: 0, ... } (missing = not answered)
 * Returns { scores: {area: n}, answered, total, complete, top: [area ids], clear: boolean }
 * top = up to 3 areas within 1 point of the best score (ties keep the fixed area order).
 * clear = false when nothing scored, so we never pretend to have a result.
 */
export function scoreQuiz(answers = {}) {
  const scores = Object.fromEntries(QUIZ_AREAS.map((a) => [a.id, 0]));
  let answered = 0;
  for (const q of QUESTIONS) {
    const v = answers && answers[q.id];
    if (v === 0 || v === 1 || v === 2) {
      scores[q.area] += v;
      answered += 1;
    }
  }
  const best = Math.max(...Object.values(scores));
  const top = best > 0
    ? QUIZ_AREAS.map((a) => a.id)
      .filter((id) => scores[id] >= best - 1 && scores[id] > 0)
      .sort((a, b) => scores[b] - scores[a])
      .slice(0, 3)
    : [];
  return { scores, answered, total: QUESTIONS.length, complete: answered === QUESTIONS.length, top, clear: top.length > 0 };
}

/** Cleans saved answers (from storage) so broken data never crashes the page. */
export function cleanAnswers(raw) {
  const out = {};
  if (!raw || typeof raw !== "object") return out;
  for (const q of QUESTIONS) {
    const v = raw[q.id];
    if (v === 0 || v === 1 || v === 2) out[q.id] = v;
  }
  return out;
}

/** Career ids linked to the top interest areas (no duplicates, in area order). */
export function careersForAreas(areaIds) {
  const ids = [];
  for (const id of areaIds) {
    const area = QUIZ_AREAS.find((a) => a.id === id);
    if (area) area.careers.forEach((c) => { if (!ids.includes(c)) ids.push(c); });
  }
  return ids;
}
