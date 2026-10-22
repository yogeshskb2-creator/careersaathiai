// Tests for calendar reminders (.ics + Google links) and the 10th/12th roadmap data.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  icsEscape, foldLine, icsDate, addDays, buildICS, googleCalendarUrl, icsFileName,
  deadlineEvent, openingEvent, planEvents
} from "../js/calendar.js";
import { VACANCIES } from "../data/vacancies.js";
import { STAGES, PATHS } from "../data/roadmap.js";
import { QUIZ_AREAS } from "../data/quiz.js";
import { CAREERS } from "../data/careers.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const NOW = new Date("2026-10-22T10:00:00Z");

// ---------- Calendar ----------
test("dates: format, add days across months and leap years, reject junk", () => {
  assert.equal(icsDate("2026-11-06"), "20261106");
  assert.equal(icsDate("2026-12-31", 1), "20270101");
  assert.equal(addDays("2028-02-28", 1), "2028-02-29");
  assert.equal(addDays("2026-10-22", 21), "2026-11-12");
  assert.throws(() => icsDate("6/11/2026"));
  assert.throws(() => icsDate(""));
});

test("text is escaped and long lines are folded at 75 bytes (Hindi-safe)", () => {
  assert.equal(icsEscape("a,b;c\\d\ne"), "a\\,b\\;c\\\\d\\ne");
  const hindi = "आख़िरी तारीख़: ".repeat(10);
  const folded = foldLine("SUMMARY:" + hindi);
  const enc = new TextEncoder();
  folded.split("\r\n").forEach((l) => assert.ok(enc.encode(l).length <= 75, l));
  assert.equal(folded.replace(/\r\n /g, ""), "SUMMARY:" + hindi, "unfolding gives back the same text");
});

test("a deadline .ics is valid: one all-day event, end = next day, two alarms before", () => {
  const v = VACANCIES[0];
  const ics = buildICS([deadlineEvent(v, { title: "Last date: test", description: "Check, the notice; please" })], { now: NOW });
  assert.ok(ics.startsWith("BEGIN:VCALENDAR\r\n") && ics.endsWith("END:VCALENDAR\r\n"));
  const flat = ics.replace(/\r\n /g, "");
  assert.match(flat, new RegExp(`DTSTART;VALUE=DATE:${v.closes.replace(/-/g, "")}`));
  assert.match(flat, new RegExp(`DTEND;VALUE=DATE:${icsDate(v.closes, 1)}`));
  assert.equal((flat.match(/BEGIN:VEVENT/g) || []).length, 1);
  assert.equal((flat.match(/BEGIN:VALARM/g) || []).length, 2);
  assert.match(flat, /TRIGGER:-P3D/);
  assert.match(flat, /TRIGGER:-PT15H/);
  assert.match(flat, /DTSTAMP:20261022T100000Z/);
  assert.match(flat, /DESCRIPTION:Check\\, the notice\\; please/);
  assert.match(flat, /URL:https:\/\//);
  assert.ok(!/[^\r]\n/.test(ics), "CRLF line endings only");
});

test("opening reminder uses the opening date and a 9 am alarm", () => {
  const v = { id: "x", opens: "2026-11-02", closes: "2026-12-01", applyUrl: "https://example.gov.in/" };
  const flat = buildICS([openingEvent(v, { title: "Opens" })], { now: NOW }).replace(/\r\n /g, "");
  assert.match(flat, /DTSTART;VALUE=DATE:20261102/);
  assert.match(flat, /TRIGGER:PT9H/);
});

test("plan reminders: 4 weekly events from today", () => {
  const weeks = ["w1", "w2", "w3", "w4"].map((id) => ({ id, title: `Week ${id}`, description: "• task" }));
  const ev = planEvents(weeks, "2026-10-22");
  assert.deepEqual(ev.map((e) => e.date), ["2026-10-22", "2026-10-29", "2026-11-05", "2026-11-12"]);
  const flat = buildICS(ev, { now: NOW });
  assert.equal((flat.match(/BEGIN:VEVENT/g) || []).length, 4);
  assert.equal(new Set(ev.map((e) => e.uid)).size, 4, "unique UIDs");
});

test("bad input is refused instead of making a broken file", () => {
  assert.throws(() => buildICS([]));
  assert.throws(() => buildICS([{ uid: "a", date: "2026-10-22" }]));
  assert.throws(() => buildICS([{ uid: "a", title: "t", date: "2026-10-22", alarms: ["9am"] }]));
});

test("Google Calendar link: https, all-day dates, text encoded", () => {
  const url = new URL(googleCalendarUrl({ title: "Last date: RRB & SSC", date: "2026-11-06", details: "आवेदन" }));
  assert.equal(url.protocol, "https:");
  assert.equal(url.hostname, "calendar.google.com");
  assert.equal(url.searchParams.get("action"), "TEMPLATE");
  assert.equal(url.searchParams.get("dates"), "20261106/20261107");
  assert.equal(url.searchParams.get("text"), "Last date: RRB & SSC");
  assert.equal(url.searchParams.get("details"), "आवेदन");
});

test("file names are safe", () => {
  assert.equal(icsFileName("RRB NTPC / Last date!"), "rrb-ntpc-last-date.ics");
  assert.equal(icsFileName(""), "reminder.ics");
});

test("every listed vacancy makes a valid reminder", () => {
  for (const v of VACANCIES) {
    assert.doesNotThrow(() => buildICS([deadlineEvent(v, { title: "t" }), openingEvent(v, { title: "o" })], { now: NOW }), v.id);
  }
});

// ---------- Roadmap ----------
test("roadmap: both stages have paths; every path is complete in both languages", () => {
  const areas = new Set(QUIZ_AREAS.map((a) => a.id));
  const careers = new Set(CAREERS.map((c) => c.id));
  const ids = new Set();
  for (const s of STAGES) assert.ok(PATHS.filter((p) => p.stage === s.id).length >= 4, s.id);
  for (const p of PATHS) {
    assert.ok(!ids.has(p.id), `duplicate ${p.id}`); ids.add(p.id);
    assert.ok(STAGES.some((s) => s.id === p.stage), p.id);
    for (const f of ["name", "duration", "what", "goodFor", "leadsTo", "tip"]) assert.ok(p[f].en && p[f].hi, `${p.id}.${f}`);
    p.areas.forEach((a) => assert.ok(areas.has(a), `${p.id}: area ${a}`));
    p.careers.forEach((c) => assert.ok(careers.has(c), `${p.id}: career ${c}`));
    assert.ok(p.links.length >= 1, p.id);
    p.links.forEach((l) => { assert.ok(l.url.startsWith("https://"), l.url); assert.ok(l.label.en && l.label.hi); });
    for (const f of ["page", "guide"]) if (p[f]) assert.ok(existsSync(join(root, p[f])), `${p.id}: ${p[f]}`);
  }
});

test("roadmap never states fees, salaries or promises", () => {
  const all = JSON.stringify(PATHS);
  assert.ok(!/₹|\bRs\.?\s?\d|salary|guarantee|100%|वेतन|गारंटी/i.test(all));
});
