// Builds the shared header + footer on every page and runs the
// English/Hindi language switch. Each page only needs:
//   <body data-page="home">  <div id="site-header"></div> ... <div id="site-footer"></div>
//   <script type="module" src="js/layout.js"></script>

import { t, normalizeLang } from "./i18n.js";
import { getItem, setItem } from "./storage.js";

// Pages in the menu. Set `ready: true` when a page is built —
// unfinished pages stay hidden so visitors never hit a broken link.
export const NAV_ITEMS = [
  { id: "home",            href: "index.html",           key: "nav.home",            ready: true },
  { id: "profile",         href: "profile.html",         key: "nav.profile",         ready: true },
  { id: "recommendations", href: "recommendations.html", key: "nav.recommendations", ready: true },
  { id: "jobs",            href: "jobs.html",            key: "nav.jobs",            ready: true },
  { id: "schemes",         href: "schemes.html",         key: "nav.schemes",         ready: true },
  { id: "dashboard",       href: "dashboard.html",       key: "nav.dashboard",       ready: true }
];

// Shown in the footer ("Explore more") to keep the top menu short.
export const FOOTER_ITEMS = [
  { id: "quiz",            href: "quiz.html",            key: "nav.quiz",            ready: true },
  { id: "scholarships",    href: "scholarships.html",    key: "nav.scholarships",    ready: true },
  { id: "roadmap",         href: "roadmap.html",         key: "nav.roadmap",         ready: true },
  { id: "courses",         href: "courses.html",         key: "nav.courses",         ready: true },
  { id: "guides",          href: "guides.html",          key: "nav.guides",          ready: true },
  { id: "private-jobs",    href: "private-jobs.html",    key: "nav.privateJobs",     ready: true }
];

let currentLang = normalizeLang(getItem("lang"));

export function getLang() {
  return currentLang;
}

function buildHeader(pageId) {
  const links = NAV_ITEMS.filter((item) => item.ready)
    .map((item) => {
      const current = item.id === pageId ? ' aria-current="page"' : "";
      return `<li><a href="${item.href}" data-i18n="${item.key}"${current}></a></li>`;
    })
    .join("");

  return `
  <a class="skip-link" href="#main" data-i18n="skip"></a>
  <header class="site-header">
    <div class="container header-row">
      <a class="brand" href="index.html" aria-label="CareerSaathi AI — Home">
        <svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
          <rect width="40" height="40" rx="10" fill="var(--c-brand)"/>
          <path d="M11 27 L20 12 L29 27" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="20" cy="29" r="2.6" fill="var(--c-accent-bright)"/>
        </svg>
        <span class="brand-text" data-i18n="brand.name"></span>
      </a>

      <div class="header-actions">
        <div class="lang-switch" role="group" data-i18n-attr="aria-label:lang.label">
          <button type="button" data-lang="en" lang="en">EN</button>
          <button type="button" data-lang="hi" lang="hi">हिंदी</button>
        </div>
        <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="site-nav">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span data-i18n="nav.menu"></span>
        </button>
      </div>

      <nav id="site-nav" class="site-nav" data-i18n-attr="aria-label:nav.label">
        <ul>${links}</ul>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-brand" data-i18n="brand.name"></p>
        <p class="footer-tagline" data-i18n="brand.tagline"></p>
      </div>
      <div>
        <p data-i18n="footer.note"></p>
        <p><strong data-i18n="footer.verify"></strong></p>
      </div>
      <nav aria-labelledby="footer-explore-t">
        <p class="footer-head" id="footer-explore-t" data-i18n="footer.explore"></p>
        <ul class="footer-links">
          ${FOOTER_ITEMS.map((i) => `<li><a href="${i.href}" data-i18n="${i.key}"></a></li>`).join("")}
        </ul>
      </nav>
      <ul class="footer-links">
        <li><a href="about.html" data-i18n="nav.about"></a></li>
        <li><a href="about.html#disclaimer" data-i18n="footer.disclaimer"></a></li>
        <li><a href="privacy.html" data-i18n="footer.privacy"></a></li>
        <li><a href="terms.html" data-i18n="footer.terms"></a></li>
        <li><a href="contact.html" data-i18n="footer.contact"></a></li>
      </ul>
    </div>
    <div class="container footer-base">
      <span>© ${year} CareerSaathi AI</span>
      <span data-i18n="footer.demo"></span>
    </div>
  </footer>`;
}

/** Puts the right language text into every element marked with data-i18n. */
export function applyTranslations(lang, root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n, lang);
  });
  // Format: data-i18n-attr="aria-label:key; placeholder:key2"
  root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key, lang));
    });
  });
}

export function setLang(lang) {
  currentLang = normalizeLang(lang);
  setItem("lang", currentLang);
  document.documentElement.lang = currentLang;
  applyTranslations(currentLang);
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });
  // Other scripts can listen for this to re-render their own content.
  document.dispatchEvent(new CustomEvent("cs:langchange", { detail: { lang: currentLang } }));
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  // Escape closes the mobile menu and returns focus to the button.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      close();
      toggle.focus();
    }
  });
}

// ---------- Chat assistant launcher ----------
// Only a small button is part of every page. The assistant itself is loaded the
// first time someone opens it, so pages stay fast for everyone else.
const CHAT_SCRIPT = "js/chat-entry.js";
let chatLoading = false;

function setupChatLauncher() {
  if (document.getElementById("cs-launch")) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.id = "cs-launch";
  btn.className = "cs-launch no-print";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "cs-panel");
  btn.innerHTML = '<span class="cs-launch-icon" aria-hidden="true">💬</span><span class="cs-launch-text" data-i18n="chat.launch"></span>';
  btn.querySelector(".cs-launch-text").textContent = t("chat.launch", currentLang);
  btn.addEventListener("click", openChatFromLauncher);
  document.body.appendChild(btn);
}

function openChatFromLauncher() {
  if (window.CareerSaathiChat) { window.CareerSaathiChat.toggle(); return; }
  if (chatLoading) return;
  chatLoading = true;
  const btn = document.getElementById("cs-launch");
  btn?.setAttribute("aria-busy", "true");
  const bundled = Boolean(document.querySelector('script[src*="js/bundle-"]'));
  const s = document.createElement("script");
  if (!bundled) s.type = "module";
  s.src = CHAT_SCRIPT;
  s.onload = () => {
    chatLoading = false;
    btn?.removeAttribute("aria-busy");
    if (window.CareerSaathiChat) { window.CareerSaathiChat.init(getLang); window.CareerSaathiChat.open(); }
  };
  s.onerror = () => {
    chatLoading = false;
    btn?.removeAttribute("aria-busy");
    s.remove();
    if (btn) btn.title = t("chat.loadFail", currentLang);
    window.alert(t("chat.loadFail", currentLang));
  };
  document.body.appendChild(s);
}

function init() {
  const pageId = document.body.dataset.page || "";
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = buildHeader(pageId);
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  setupMenu();
  setLang(currentLang);
  setupChatLauncher();
  document.body.classList.add("is-ready");
}

init();
