// "Add to calendar" buttons. The .ics file is made on this device and downloaded
// directly — no account, nothing sent to us.
import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { esc, formatDate } from "./ui.js";
import { VACANCIES } from "../data/vacancies.js";
import { buildICS, googleCalendarUrl, icsFileName, deadlineEvent, openingEvent } from "./calendar.js";

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");

/** Starts a download of an .ics file. Returns true if the browser allowed it. */
export function downloadICS(events, base) {
  try {
    const blob = new Blob([buildICS(events, { calName: "CareerSaathi AI" })], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = icsFileName(base);
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    return true;
  } catch {
    return false;
  }
}

function vacTexts(v, kind) {
  const title = txt(v.title);
  const vars = { title, org: txt(v.org), url: v.applyUrl, date: formatDate(kind === "open" ? v.opens : v.closes, L()) };
  return {
    title: tt(kind === "open" ? "cal.openTitle" : "cal.lastTitle", vars),
    description: tt(kind === "open" ? "cal.openDesc" : "cal.lastDesc", vars)
  };
}

/** Buttons shown on an open or upcoming recruitment card. */
export function vacancyCalendarButtons(r) {
  const v = r.vacancy;
  if (r.status === "closed") return "";
  const last = vacTexts(v, "last");
  const g = googleCalendarUrl({ date: v.closes, title: last.title, details: last.description });
  return `
    <div class="cal-row no-print">
      <span class="cal-label"><span aria-hidden="true">🔔</span> ${esc(tt("cal.remind"))}</span>
      ${r.status === "upcoming" ? `<button type="button" class="btn btn-ghost btn-small" data-cal="open" data-vac="${esc(v.id)}">${esc(tt("cal.openBtn"))}</button>` : ""}
      <button type="button" class="btn btn-ghost btn-small" data-cal="last" data-vac="${esc(v.id)}">${esc(tt("cal.lastBtn"))}</button>
      <a class="btn btn-ghost btn-small" href="${esc(g)}" target="_blank" rel="noopener noreferrer">${esc(tt("cal.google"))}<span class="visually-hidden"> (${esc(tt("rec.newTab"))})</span></a>
    </div>`;
}

let installed = false;
/** One click handler for every page (event delegation). Safe to call many times. */
export function installCalendarHandler() {
  if (installed) return;
  installed = true;
  document.addEventListener("click", (e) => {
    const btn = e.target.closest && e.target.closest("button[data-cal][data-vac]");
    if (!btn) return;
    const v = VACANCIES.find((x) => x.id === btn.dataset.vac);
    if (!v) return;
    const kind = btn.dataset.cal === "open" ? "open" : "last";
    const ev = kind === "open" ? openingEvent(v, vacTexts(v, "open")) : deadlineEvent(v, vacTexts(v, "last"));
    const ok = downloadICS([ev], `${v.id}-${kind === "open" ? "opens" : "last-date"}`);
    announce(ok ? tt("cal.done") : tt("cal.fail"), btn);
  });
}

function announce(message, near) {
  let live = document.getElementById("cal-live");
  if (!live) {
    live = document.createElement("p");
    live.id = "cal-live";
    live.className = "visually-hidden";
    live.setAttribute("aria-live", "polite");
    document.body.appendChild(live);
  }
  live.textContent = message;
  const row = near.closest(".cal-row");
  if (row) {
    let note = row.querySelector(".cal-note");
    if (!note) { note = document.createElement("span"); note.className = "cal-note small"; row.appendChild(note); }
    note.textContent = message;
  }
}
