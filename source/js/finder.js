// Shared "finder" page used by the Scheme Finder and the Scholarship Finder:
// summaries from official pages, plus "worth a look" hints from the saved profile.
// It never says "eligible".

import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { loadProfile } from "./profile-store.js";
import { matchSchemes } from "./scheme-match.js";
import { ALL_SKILLS, GOALS, EDUCATION_LEVELS, labelOf } from "../data/options.js";
import { esc, formatDate, extLink, hostOf } from "./ui.js";
import { ageInDays, todayISO, STALE_DAYS } from "./vacancy-match.js";

let root = null;
let cfg = null; // { items, categories, portal, keys }
const state = { profile: null, results: [], category: "all" };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");
const listOf = (list, ids) => ids.map((id) => labelOf(list, id, L())).filter(Boolean).join(", ");

function say(m) {
  const v = m.vars || {};
  const vars = { ...v };
  if (v.goals) vars.goals = listOf(GOALS, v.goals);
  if (v.skills) vars.skills = listOf(ALL_SKILLS, v.skills);
  if (v.level) vars.level = labelOf(EDUCATION_LEVELS, v.level, L());
  return tt(m.key, vars);
}

// Warn when facts are older than STALE_DAYS (worked out from today's date).
function staleNote(checked) {
  const age = ageInDays(checked, todayISO());
  return age > STALE_DAYS ? `<p class="alert alert--warn small">${esc(tt("stale.warn", { n: age }))}</p>` : "";
}

function list(items, cls = "compact") {
  return `<ul class="${cls}">${items.map((x) => `<li>${esc(txt(x))}</li>`).join("")}</ul>`;
}

function card(r, showFit) {
  const s = r.scheme;
  const cat = cfg.categories.find((c) => c.id === s.category);
  const fitHtml = showFit && r.worthALook ? `
    <h4>${esc(tt("schemes.why"))}</h4>
    <ul class="list-check compact">${r.reasons.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>` : "";
  const checks = state.profile ? r.checks : r.checks.filter((m) => m.key === "sch.check.final");

  return `
  <article class="card rec-card scheme-card" aria-labelledby="s-${s.id}">
    <div class="rec-top">
      <span class="sector">${esc(txt(cat))}</span>
      ${showFit && r.worthALook ? `<span class="fit fit--strong">${esc(tt("schemes.badge"))}</span>` : ""}
    </div>
    <h3 id="s-${s.id}">${esc(txt(s.name))}</h3>
    <p class="muted small"><strong>${esc(tt("schemes.ministry"))}:</strong> ${esc(txt(s.ministry))}</p>
    <p><strong>${esc(tt("schemes.purpose"))}:</strong> ${esc(txt(s.purpose))}</p>
    <p><strong>${esc(tt("schemes.audience"))}:</strong> ${esc(txt(s.audience))}</p>
    ${fitHtml}
    <h4>${esc(tt("schemes.check"))}</h4>
    <ul class="list-warn compact">${checks.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>
    ${s.note ? `<p class="alert alert--warn small"><strong>${esc(tt("schemes.important"))}</strong> ${esc(txt(s.note))}</p>` : ""}
    ${staleNote(s.checked)}

    <details class="rec-more">
      <summary>${esc(tt("schemes.details"))}</summary>
      <h4>${esc(tt("schemes.eligibility"))}</h4>${list(s.eligibility)}
      <h4>${esc(tt("schemes.benefits"))}</h4>${list(s.benefits)}
      <h4>${esc(tt("schemes.apply"))}</h4>${list(s.howToApply, "compact numbered")}
    </details>

    <h4>${esc(tt("schemes.official"))}</h4>
    <p>${extLink(s.officialUrl, hostOf(s.officialUrl), tt("rec.newTab"))}</p>
    <p class="muted small">${esc(tt("schemes.readFrom", { date: formatDate(s.checked, L()), source: txt(s.checkedFrom) }))}</p>
  </article>`;
}

function render() {
  root.setAttribute("aria-busy", "false");
  const counts = {};
  cfg.items.forEach((s) => { counts[s.category] = (counts[s.category] || 0) + 1; });
  const K = cfg.keys;
  const filterButtons = [{ id: "all", label: tt("schemes.allCats"), n: cfg.items.length },
    ...cfg.categories.map((c) => ({ id: c.id, label: txt(c), n: counts[c.id] || 0 }))]
    .map((b) => `<button type="button" class="filter-btn" data-cat="${b.id}" aria-pressed="${state.category === b.id}"${b.n ? "" : " disabled"}>
      ${esc(b.label)} <span class="count">${b.n}</span></button>`).join("");

  const inCat = (r) => state.category === "all" || r.scheme.category === state.category;
  const worth = state.profile ? state.results.filter((r) => r.worthALook && inCat(r)) : [];
  const others = state.results.filter((r) => !worth.includes(r) && inCat(r));

  let intro;
  if (!state.profile) intro = `<p class="alert alert--info"><a href="profile.html">${esc(tt(K.noProfile))}</a></p>`;
  else if (!state.results.some((r) => r.worthALook)) intro = `<p class="alert alert--info">${esc(tt(K.noWorth))}</p>`;
  else intro = "";

  root.innerHTML = `
    <section class="card myscheme-card" aria-labelledby="mys-title">
      <h2 id="mys-title">${esc(tt(K.portalT))}</h2>
      <p class="muted">${esc(txt(cfg.portal.text))}</p>
      ${extLink(cfg.portal.url, tt(K.portalBtn), tt("rec.newTab"), "btn btn-primary")}
    </section>
    ${intro}
    <div class="filter-bar filter-bar--wrap" role="group" aria-label="${esc(tt("schemes.filterLabel"))}">${filterButtons}</div>
    ${worth.length ? `
      <section aria-labelledby="worth-title">
        <h2 id="worth-title">${esc(tt(K.worth))}</h2>
        <p class="muted">${esc(tt(K.worthD))}</p>
        <div class="rec-grid">${worth.map((r) => card(r, true)).join("")}</div>
      </section>` : ""}
    ${others.length ? `
      <section aria-labelledby="others-title">
        <h2 id="others-title">${esc(tt(worth.length ? K.others : K.all))}</h2>
        <div class="rec-grid">${others.map((r) => card(r, false)).join("")}</div>
      </section>` : ""}`;
}

/**
 * Starts a finder page.
 * @param {{ rootId: string, items: object[], categories: object[], portal: object, keys: object }} config
 */
export function startFinder(config) {
  cfg = config;
  root = document.getElementById(config.rootId);
  if (!root) return;
  try {
    state.profile = loadProfile()?.profile || null;
    state.results = matchSchemes(state.profile, cfg.items);
    root.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cat]");
      if (!btn) return;
      state.category = btn.dataset.cat;
      render();
      root.querySelector(`[data-cat="${state.category}"]`)?.focus();
    });
    document.addEventListener("cs:langchange", () => render());
    render();
  } catch (err) {
    console.error(err);
    root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
  }
}
