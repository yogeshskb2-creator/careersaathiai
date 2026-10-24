// Course & Skill Explorer: courses for the person's skill gaps, plus browse-by-skill.

import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { loadProfile } from "./profile-store.js";
import { recommendCourses, coursesForSkill, evaluateCourse } from "./course-match.js";
import { COURSES, PROVIDER_TYPES, SKILL_INDIA } from "../data/courses.js";
import { CAREERS } from "../data/careers.js";
import { ALL_SKILLS, SKILL_GROUPS, labelOf } from "../data/options.js";
import { normalizeProfile } from "./profile-model.js";
import { esc, formatDate, extLink, hostOf } from "./ui.js";
import { ageInDays, todayISO, STALE_DAYS } from "./vacancy-match.js";

const root = document.getElementById("courses-app");
const state = { profile: null, rec: null, skill: "", freeOnly: false };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");
const skillName = (id) => labelOf(ALL_SKILLS, id, L());
const careerName = (id) => { const c = CAREERS.find((x) => x.id === id); return c ? txt(c.title) : ""; };

function say(m) {
  const v = m.vars || {};
  const vars = {};
  if (v.skills) vars.skills = v.skills.map(skillName).join(", ");
  if (v.careers) vars.careers = v.careers.slice(0, 3).map(careerName).filter(Boolean).join(", ");
  return tt(m.key, vars);
}

// Warn when facts are older than STALE_DAYS (worked out from today's date).
function staleNote(checked) {
  const age = ageInDays(checked, todayISO());
  return age > STALE_DAYS ? `<p class="alert alert--warn small">${esc(tt("stale.warn", { n: age }))}</p>` : "";
}

function fact(labelKey, value) {
  const shown = value ? esc(value) : `<span class="muted">${esc(tt("courses.notVerified"))}</span>`;
  return `<div class="review-row"><dt>${esc(tt(labelKey))}</dt><dd>${shown}</dd></div>`;
}

function card(course, result) {
  const type = PROVIDER_TYPES.find((p) => p.id === course.providerType);
  // Show the provider's own wording if we have it; otherwise the short label.
  const costText = course.cost ? (txt(course.costNote) || tt(`courses.costLabel.${course.cost}`)) : "";
  const r = result || evaluateCourse(course, state.profile || normalizeProfile(null), []);
  return `
  <article class="card rec-card course-card" aria-labelledby="co-${course.id}${result ? "-r" : ""}">
    <div class="rec-top">
      <span class="sector">${esc(txt(type))}</span>
      ${course.cost === "free" ? `<span class="fit fit--strong">${esc(tt("courses.costLabel.free"))}</span>` : ""}
      ${course.cost === "free-exam-fee" ? `<span class="fit fit--possible">${esc(tt("courses.cost.free"))}</span>` : ""}
    </div>
    <h3 id="co-${course.id}${result ? "-r" : ""}">${esc(txt(course.title))}</h3>
    <p class="muted">${esc(txt(course.topics))}</p>
    ${course.skills.length
      ? `<p class="small teaches-t"><strong>${esc(tt("courses.teachesT"))}</strong></p>
         <ul class="chip-list skill-chips">${course.skills.map((s) => `<li class="chip chip--skill">${esc(skillName(s))}</li>`).join("")}</ul>`
      : `<p class="alert alert--info small">${esc(tt("courses.generalOnly"))}</p>`}
    ${course.unverifiedSkills?.length ? `<p class="small muted">${esc(tt("courses.unverifiedSkills", { skills: course.unverifiedSkills.map(skillName).join(", ") }))}</p>` : ""}

    ${result ? `<h4>${esc(tt("courses.why"))}</h4>
      <ul class="list-check compact">${result.reasons.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>` : ""}

    <dl class="facts">
      ${fact("courses.provider", txt(course.provider))}
      ${fact("courses.mode", tt(`courses.mode.${course.mode}`))}
      ${fact("courses.cost", costText)}
      ${fact("courses.duration", txt(course.duration))}
      ${fact("courses.certificate", txt(course.certificate))}
      ${course.prerequisites ? fact("courses.prereq", txt(course.prerequisites)) : ""}
    </dl>

    ${course.searchTip ? `<p class="tip"><strong>${esc(tt("courses.howToFind"))}:</strong> ${esc(txt(course.searchTip))}</p>` : ""}
    ${course.note ? `<p class="alert alert--warn small">${esc(txt(course.note))}</p>` : ""}
    ${staleNote(course.checked)}

    <details class="rec-more"${result ? " open" : ""}>
      <summary>${esc(tt("courses.check"))}</summary>
      <ul class="list-warn compact">${r.checks.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>
    </details>

    <p class="source-host">${esc(hostOf(course.url))}</p>
    <p>${extLink(course.url, tt("courses.open"), tt("rec.newTab"), "btn btn-primary btn-small")}</p>
    ${course.evidence ? `<p class="muted small">${esc(tt("courses.evidence", { date: formatDate(course.evidence.checked, L()) }))} ${esc(txt(course.evidence.text))} ${extLink(course.evidence.url, hostOf(course.evidence.url), tt("rec.newTab"))}</p>` : ""}
    <p class="muted small">${esc(tt("courses.checkedFrom", { date: formatDate(course.checked, L()), source: txt(course.checkedFrom) }))}</p>
  </article>`;
}

function forYouSection() {
  if (!state.profile) return `<p class="alert alert--info"><a href="profile.html">${esc(tt("courses.noProfile"))}</a></p>`;
  const rec = state.rec;
  if (!rec.ready || !rec.gaps.length) return `<p class="alert alert--info">${esc(tt("courses.noGaps"))}</p>`;

  const gapChips = rec.gaps.map((g) => `
    <li><button type="button" class="chip chip--gap chip-btn" data-skill="${esc(g.skill)}">
      ${esc(skillName(g.skill))} <span class="count">${g.careers.length}</span></button></li>`).join("");
  return `
  <section aria-labelledby="gaps-title" class="card gaps-card">
    <h2 id="gaps-title">${esc(tt("courses.gapsT"))}</h2>
    <p class="muted">${esc(tt("courses.gapsD"))}</p>
    <ul class="chip-list">${gapChips}</ul>
  </section>
  ${rec.uncovered.length ? `<p class="alert alert--info">${esc(tt("courses.uncovered", { skills: rec.uncovered.map(skillName).join(", ") }))}</p>` : ""}
  ${rec.items.length ? `
  <section aria-labelledby="foryou-title">
    <h2 id="foryou-title">${esc(tt("courses.forYouT"))}</h2>
    <div class="rec-grid">${rec.items.map((r) => card(r.course, r)).join("")}</div>
  </section>` : ""}`;
}

function browseControls() {
  const options = SKILL_GROUPS.map((g) => `
    <optgroup label="${esc(txt(g))}">
      ${g.skills.map((s) => `<option value="${esc(s.id)}"${state.skill === s.id ? " selected" : ""}>${esc(txt(s))}</option>`).join("")}
    </optgroup>`).join("");
  return `
  <section aria-labelledby="browse-title" id="browse">
    <h2 id="browse-title">${esc(tt("courses.browseT"))}</h2>
    <div class="browse-controls">
      <div class="field">
        <label for="skill-filter">${esc(tt("courses.skillFilter"))}</label>
        <select id="skill-filter"><option value="">${esc(tt("courses.anySkill"))}</option>${options}</select>
      </div>
      <div class="filter-bar" role="group" aria-label="${esc(tt("courses.costFilter"))}">
        <button type="button" class="filter-btn" data-free="false" aria-pressed="${!state.freeOnly}">${esc(tt("courses.cost.all"))}</button>
        <button type="button" class="filter-btn" data-free="true" aria-pressed="${state.freeOnly}">${esc(tt("courses.cost.free"))}</button>
      </div>
    </div>
    <div id="browse-results"></div>
  </section>`;
}

function renderBrowse() {
  const box = document.getElementById("browse-results");
  if (!box) return;
  const list = coursesForSkill(state.skill, COURSES)
    .filter((c) => !state.freeOnly || c.cost === "free" || c.cost === "free-exam-fee");
  box.innerHTML = `
    <p class="muted" id="browse-count" aria-live="polite">${esc(tt("courses.count", { n: list.length }))}</p>
    ${list.length ? `<div class="rec-grid">${list.map((c) => card(c, null)).join("")}</div>`
      : `<div class="alert alert--info" role="status"><p><strong>${esc(tt(state.skill ? "courses.noVerified" : "courses.emptyFilter"))}</strong></p><p class="small">${esc(tt("courses.noVerifiedHint"))}</p></div>`}`;
}

function sidhCard() {
  return `
  <section class="card myscheme-card" aria-labelledby="sidh-title">
    <h2 id="sidh-title">${esc(tt("courses.sidhT"))}</h2>
    <p class="muted">${esc(txt(SKILL_INDIA.text))}</p>
    ${extLink(SKILL_INDIA.url, tt("courses.sidhBtn"), tt("rec.newTab"), "btn btn-primary")}
  </section>`;
}

function render() {
  root.setAttribute("aria-busy", "false");
  root.innerHTML = forYouSection() + browseControls() + sidhCard();
  renderBrowse();
}

function chooseSkill(skill, scroll) {
  state.skill = skill;
  const select = document.getElementById("skill-filter");
  if (select) select.value = skill;
  renderBrowse();
  if (scroll) {
    document.getElementById("browse")?.scrollIntoView({ block: "start" });
    select?.focus({ preventScroll: true });
  }
}

function init() {
  if (!root) return;
  state.profile = loadProfile()?.profile || null;
  state.rec = state.profile ? recommendCourses(state.profile, CAREERS, COURSES) : null;
  const fromUrl = new URLSearchParams(location.search).get("skill") || "";
  if (ALL_SKILLS.some((s) => s.id === fromUrl)) state.skill = fromUrl;

  root.addEventListener("change", (e) => {
    if (e.target.id === "skill-filter") chooseSkill(e.target.value, false);
  });
  root.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-skill]");
    if (chip) { chooseSkill(chip.dataset.skill, true); return; }
    const free = e.target.closest("[data-free]");
    if (free) {
      state.freeOnly = free.dataset.free === "true";
      root.querySelectorAll("[data-free]").forEach((b) => b.setAttribute("aria-pressed", String(b === free)));
      renderBrowse();
    }
  });
  document.addEventListener("cs:langchange", () => render());
  render();
  if (fromUrl && state.skill) {
    document.getElementById("browse")?.scrollIntoView({ block: "start" });
    document.getElementById("skill-filter")?.focus({ preventScroll: true });
  }
}

try {
  init();
} catch (err) {
  console.error(err);
  if (root) root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
}
