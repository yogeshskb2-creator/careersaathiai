// Calendar reminders — pure functions, tested in Node.
// Builds standard .ics files (work with Google Calendar, Apple Calendar, Outlook and
// most phone calendars) and Google Calendar "add event" links.
// Everything is made on the visitor's device — nothing is sent anywhere.

const PRODID = "-//CareerSaathi AI//Reminders//EN";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Escapes text for an .ics field (RFC 5545 §3.3.11). */
export function icsEscape(text) {
  return String(text ?? "")
    .replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,")
    .replace(/\r\n|\r|\n/g, "\\n");
}

/** Splits long lines at 75 bytes, as the .ics standard asks (UTF-8 safe). */
export function foldLine(line) {
  const enc = new TextEncoder();
  if (enc.encode(line).length <= 75) return line;
  const parts = [];
  let cur = "", size = 0, limit = 75;
  for (const ch of line) {
    const n = enc.encode(ch).length;
    if (size + n > limit) { parts.push(cur); cur = ""; size = 0; limit = 74; } // continuation lines start with a space
    cur += ch; size += n;
  }
  parts.push(cur);
  return parts.join("\r\n ");
}

/** "2026-11-06" → "20261106"; adds days safely in UTC. */
export function icsDate(iso, plusDays = 0) {
  if (!DATE_RE.test(String(iso))) throw new Error(`Bad date: ${iso}`);
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) throw new Error(`Bad date: ${iso}`);
  d.setUTCDate(d.getUTCDate() + plusDays);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

/** Adds days to a YYYY-MM-DD date and returns YYYY-MM-DD. */
export function addDays(iso, n) {
  const s = icsDate(iso, n);
  return `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6)}`;
}

function stamp(now) {
  return now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/**
 * events: [{ uid, date: "YYYY-MM-DD", title, description?, url?, alarms?: ["-P2D", "-PT15H"] }]
 * All-day events. Alarm triggers are relative to the start of that day (00:00), so
 * "-PT15H" = 9 am the day before and "PT9H" = 9 am on the day.
 */
export function buildICS(events, { now = new Date(), calName = "CareerSaathi AI" } = {}) {
  if (!Array.isArray(events) || !events.length) throw new Error("No events");
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", `PRODID:${PRODID}`, "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    `X-WR-CALNAME:${icsEscape(calName)}`];
  for (const e of events) {
    if (!e || !e.uid || !e.title) throw new Error("Event needs uid and title");
    lines.push("BEGIN:VEVENT",
      `UID:${icsEscape(e.uid)}@careersaathiai`,
      `DTSTAMP:${stamp(now)}`,
      `DTSTART;VALUE=DATE:${icsDate(e.date)}`,
      `DTEND;VALUE=DATE:${icsDate(e.date, 1)}`,
      `SUMMARY:${icsEscape(e.title)}`);
    if (e.description) lines.push(`DESCRIPTION:${icsEscape(e.description)}`);
    if (e.url) lines.push(`URL:${icsEscape(e.url)}`);
    lines.push("TRANSP:TRANSPARENT");
    for (const trig of e.alarms || []) {
      if (!/^-?P(T?\d+[DHM])+$/.test(trig)) throw new Error(`Bad alarm: ${trig}`);
      lines.push("BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${icsEscape(e.title)}`, `TRIGGER:${trig}`, "END:VALARM");
    }
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.map(foldLine).join("\r\n") + "\r\n";
}

/** Google Calendar "add event" link for one all-day event. */
export function googleCalendarUrl({ title, date, details = "" }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${icsDate(date)}/${icsDate(date, 1)}`,
    details
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/** Safe file name: "rrb-ntpc-last-date.ics". */
export function icsFileName(base) {
  const slug = String(base || "reminder").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  return `${slug || "reminder"}.ics`;
}

/** Reminder for a recruitment's last date: 3 days before and 9 am the day before. */
export function deadlineEvent(v, { title, description }) {
  return { uid: `deadline-${v.id}-${v.closes}`, date: v.closes, title, description, url: v.applyUrl, alarms: ["-P3D", "-PT15H"] };
}

/** Reminder for the day a recruitment opens: 9 am that day. */
export function openingEvent(v, { title, description }) {
  return { uid: `opens-${v.id}-${v.opens}`, date: v.opens, title, description, url: v.applyUrl, alarms: ["PT9H"] };
}

/** One event at the start of each plan week (start = today), with a 9 am alert. */
export function planEvents(weeks, startISO) {
  const offsets = [0, 7, 14, 21];
  return weeks.slice(0, 4).map((w, i) => ({
    uid: `plan-${w.id}-${startISO}`, date: addDays(startISO, offsets[i]),
    title: w.title, description: w.description, alarms: ["PT9H"]
  }));
}
