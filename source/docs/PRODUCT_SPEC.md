# CareerSaathi AI — Product Specification (Phase 1 & 2)

**Tagline:** Your Education. Your Skills. Your Opportunities.
**Hindi tagline:** आपकी योग्यता से आपके रोज़गार तक। (Aapki Yogyata Se Aapke Rozgaar Tak.)
**Version:** 1.0 prototype (Milestones 1–6 complete) · Spec written and updated 22 Oct 2026

---

## 1. What we are building (in one paragraph)

A free, India-focused career guidance website. A visitor fills a short
profile (no login, no real name needed). The site compares that profile
with a small, hand-checked dataset of careers, government recruitment
sources, schemes and courses, then shows **explainable** suggestions and
a 30-day action plan. Everything runs **inside the visitor's browser** —
there is no server, no database and no paid AI API in version 1.

---

## 2. User personas

| # | Persona | Situation | What they need most |
|---|---------|-----------|---------------------|
| 1 | **Ritu, 17, Class 12 pass (Bihar)** | First job or further study? | Simple options by qualification, govt exam sources, free courses |
| 2 | **Arjun, 20, ITI Electrician (UP)** | Wants a stable job | Apprenticeships, technical recruitment sources, licence/skill gaps |
| 3 | **Sana, 23, B.Com fresher (Maharashtra)** | Unemployed 1 year | Private + govt options, Tally/Excel gaps, interview-ready plan |
| 4 | **Vikram, 31, working in retail sales** | Wants a career change | Transferable skills, short courses, remote options |
| 5 | **Kamla, 38, tailor, Class 8 education** | Wants more income | Self-employment schemes, skill programmes, no jargon, Hindi UI |
| 6 | **Imran, 26, Diploma holder, wants own business** | Aspiring entrepreneur | Entrepreneurship and business-finance scheme discovery |
| 7 | **Neha, 28, MCA, working professional** | Wants growth / higher studies | Skill-gap analysis, advanced courses, remote work |

Design implications: Hindi-first readability, large tap targets, low data
usage, works on cheap Android phones, no jargon, never asks for documents.

---

## 3. Core user journey

```
Homepage ─► Profile Form (6 short steps, skippable parts)
        ─► Career Analysis (runs instantly in the browser)
        ─► Personalized Dashboard
             ├─ Career matches (with "why")
             ├─ Govt recruitment sources
             ├─ Skill gap analysis
             ├─ Recommended courses
             ├─ Scheme discovery
             └─ 30-day action plan
```

Visitors can also skip the form and browse the Job Explorer, Scheme Finder
and Course Explorer directly.

---

## 4. Page structure

| File | Page | Milestone |
|------|------|-----------|
| `index.html` | Homepage | **1 (done)** |
| `about.html` | About & Disclaimer | **1 (done)** |
| `privacy.html` | Privacy Information | **1 (done)** |
| `profile.html` | Career Profile Form (multi-step) | **2 (done)** |
| `recommendations.html` | Career Recommendations | **3 (done)** |
| `jobs.html` | Government Job Explorer | **4 (done)** |
| `schemes.html` | Government Scheme Finder | **4 (done)** |
| `courses.html` | Course & Skill Explorer | **5 (done)** |
| `dashboard.html` | Personalized Dashboard + 30-day plan | **6 (done)** |

Every page shares: skip link, header, language switch (EN / हिंदी),
responsive menu, footer with disclaimer link.

---

## 5. Main features (v1)

1. Bilingual interface (English + simple Hindi), remembered per device.
2. Multi-step profile form, mobile-first, with validation.
3. Rule-based career matching with plain-language explanations.
4. Clear status labels (see §7) — never "you will get this job".
5. Government recruitment **source** directory (not live vacancies).
6. Scheme discovery with "verify with department" notes.
7. Course suggestions tied to the user's skill gaps; free first.
8. Dashboard with a 30-day plan that changes with the career goal.
9. Print / save-as-PDF of the plan (browser print — free).
10. "Delete my data" button that wipes everything stored on the device.

---

## 6. Data models (stored as plain JavaScript data files)

```text
UserProfile            (lives only in the visitor's browser)
  name?               string, optional, never required
  ageRange            "under18" | "18-21" | "22-25" | "26-30" | "31-40" | "41+"
  state, district?    string
  preferredLocation   "home-district" | "home-state" | "anywhere-india" | "remote"
  language            "en" | "hi"
  employmentStatus    "student" | "unemployed" | "employed" | "self-employed"
  education[]         { level, stream?, specialization?, passingYear?, certificates[] }
  skills[]            string ids + custom strings
  experience          { type: "fresher"|"experienced", years?, title?, industry?, freelance? }
  goals[]             "govt-job" | "private-job" | "remote" | "internship" |
                      "apprenticeship" | "career-change" | "higher-education" |
                      "skill-development" | "business"

Career
  id, title{en,hi}, sector
  minEducation[]       accepted qualification levels
  preferredQualifications[]
  requiredSkills[], optionalSkills[]
  experience           { minYears, note }
  goalsServed[]        which goals this career fits
  locationNote{en,hi}
  courseIds[]
  sources[]            { label, url }
  verification         { status: "demo"|"source-checked", lastVerified }

RecruitmentSource      (Govt Job Explorer)
  id, category, name, url, whatItCovers{en,hi}, lastVerified

Scheme
  id, name, category, purpose, targetAudience, eligibilitySummary,
  benefitsSummary, howToApply, officialUrl, lastVerified, verificationNote

Course
  id, title, provider, skillsTaught[], prerequisites[],
  duration? (only if verified), cost? ("free"|"paid"|null = unverified),
  certificate? (only if verified), relatedCareers[], url, lastVerified

MatchResult            (computed, never stored on a server)
  careerId, status, fitLevel, reasons[], missingSkills[],
  uncertainties[], nextSteps[]
```

Rule: a field we have not verified is stored as `null` and shown as
"Not verified — check official source". We never fill gaps with guesses.

---

## 7. Recommendation logic (transparent rules, no AI API)

For each career in the dataset:

1. **Qualification check** — Is the user's highest qualification in the
   career's accepted list? → `meets` / `does-not-meet` / `unknown` (no data).
2. **Skill comparison** — Count required skills the user has; list the
   missing ones. Optional skills add a bonus reason.
3. **Experience check** — Compare years with `minYears`.
4. **Preference check** — Does the career serve at least one selected goal?
   Does the location preference conflict (e.g. "remote only")?
5. **Fit level** (words, not percentages):
   - **Strong fit** — qualification met, ≥ 2/3 required skills, goal matches
   - **Possible fit** — qualification met, some skills missing
   - **Reachable with upskilling** — qualification met, most skills missing
   - Hidden — qualification not met (shown in a separate "future paths" list)
6. **Status label** shown on every card:
   - 🟦 *Potentially suitable career* — general career match
   - 🟨 *Eligibility not yet verified* — govt roles where we lack full rules
   - 🟩 *Eligible based on available recorded criteria* — all recorded rules pass
   - ✅ *Verified active vacancy* — **not used in v1** (no live data source)
7. **Explanation** — every card lists "Why we suggested this" and
   "What to do next", built from the rule results above.

The engine is one pure function `matchCareers(profile, careers)` so an AI
API can be added later as an optional extra layer without rewriting it.

---

## 8. Privacy considerations (privacy-by-design)

- No registration, no login, no server — profile is processed in the browser.
- Saved only in the browser's `localStorage`, and only if the user ticks
  "Remember my profile on this device". One-click delete.
- Never asks for: Aadhaar, PAN, bank details, phone, email, passwords,
  caste certificate numbers, photos.
- Category / PwD / ex-serviceman questions (needed for some govt age
  relaxations) are **optional**, explained, and skippable.
- No analytics, no cookies, no third-party trackers in v1.
- Only external request: Google Fonts (can be removed for full offline use).
- All demo data is labelled "Demo data". Test files use fictional people.
- We do not share anything with employers — there is nothing to share.

---

## 9. Free development strategy

| Need | Free choice | Why |
|------|-------------|-----|
| Code | Plain HTML + CSS + JavaScript | No build tools, easiest to learn |
| Editor | VS Code (free) | Beginner friendly |
| Local server | `python -m http.server` (or `npx serve`) | Already free; needed for JS modules |
| Data | `.js` data files in `/data` | No database needed |
| Tests | Node.js built-in test runner (`node --test`) | Zero dependencies |
| Hosting (later) | GitHub Pages / Netlify / Cloudflare Pages free tiers | Static site, no server |
| Version control | Git + GitHub free | Backup + free hosting |

**Hosting caution:** free tiers have bandwidth/build limits and their terms
can change at any time. Because the site is plain static files, it can be
moved between hosts in minutes — no lock-in.

**Python's role:** v1 needs Python only to run the local server. Later,
optional Python scripts can help check that official URLs still open
(link checker) — run by you, not by visitors.

---

## 10. Technical limitations (honest list)

- **No live vacancies.** We list official recruitment *sources*, not open
  posts. Users must verify vacancies on the official site.
- **Small dataset.** v1 ships ~25–40 careers, ~15 sources, ~10–15 schemes,
  ~20–30 courses. Quality over quantity.
- **Rules are only as good as the data.** Govt eligibility (age limits,
  relaxations, physical standards) changes per notification; v1 shows
  "Eligibility not yet verified" rather than guessing.
- **No AI chat in v1.** Recommendations are rule-based and explainable.
- **Data stays on one device.** Switching phones means filling the form again.
- **Hindi translations** are written in simple Hindi; regional languages later.
- **Scraping is not used.** Data is entered by hand from official pages.

---

# Phase 2 — Interface design

## Visual direction

Calm, trustworthy, "government-portal clarity without the clutter".
Deep teal for trust, a warm saffron accent used sparingly for highlights,
warm off-white background so long Hindi text is comfortable to read.

| Token | Value | Use |
|-------|-------|-----|
| `--c-brand` | `#0E5560` deep teal | Primary buttons, links, header accents |
| `--c-brand-ink` | `#083A42` | Hover / pressed |
| `--c-accent` | `#D9661F` saffron | Badges, highlights (never body text on white) |
| `--c-bg` | `#F7F5F0` | Page background |
| `--c-surface` | `#FFFFFF` | Cards |
| `--c-text` | `#1C1E21` | Body text (contrast ≈ 16:1) |
| `--c-muted` | `#55595F` | Secondary text (contrast ≈ 7:1) |
| Status colours | blue / amber / green | Status labels — always paired with text + icon |

**Typography:** *Mukta* (Google Fonts, free) — designed for both Latin and
Devanagari, so English and Hindi look like one family. System-font fallback.
Base size 17px, line height 1.6 (Devanagari needs extra room).

## Components (in `css/styles.css`)

Buttons (primary, secondary, ghost, disabled) · Cards · Badges/status pills ·
Alerts (info, warning, error) · Empty state · Loading state (spinner +
skeleton, respects reduced-motion) · Form fields with labels, hints and
error text · Responsive grid · Header with collapsible mobile menu ·
Language switch · Footer.

## Accessibility rules

- Every page: `lang` attribute (switches to `hi`), skip link, one `<h1>`,
  landmarks (`header`, `nav`, `main`, `footer`).
- Visible focus ring on everything; full keyboard use; menu toggle exposes
  `aria-expanded`; language buttons expose `aria-pressed`.
- Minimum tap target 44×44px; text contrast ≥ 4.5:1.
- Colour is never the only signal (status pills include words + icon).
- Animations disabled under `prefers-reduced-motion`.

## Bilingual approach

All interface text lives in `js/i18n.js` as `{ en: {...}, hi: {...} }`.
HTML elements carry `data-i18n="key"`. Switching language swaps text
instantly without reloading. A test checks every English key has a Hindi
translation, so nothing is ever left untranslated.
