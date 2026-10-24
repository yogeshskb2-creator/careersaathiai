# CareerSaathi AI (prototype)

**Your Education. Your Skills. Your Opportunities.** · आपकी योग्यता से आपके रोज़गार तक।

Free, private, rule-based career guidance website for India, in English and simple Hindi.
Plain HTML + CSS + JavaScript. No server, no database, no paid API, no login.
Everything a visitor types is processed inside their own browser.

## What's inside

| Page | What it does |
|------|--------------|
| `index.html` | Homepage |
| `profile.html` | 6-step Career Profile form (no login, name optional) |
| `quiz.html` | Career Interest Quiz — 24 questions, 6 interest areas, result linked to careers, skills and guides |
| `recommendations.html` | Explainable career suggestions with fit level and status labels |
| `jobs.html` | Government Job Explorer — 22 official recruitment websites |
| `schemes.html` | Government Scheme Finder — 9 schemes from official pages |
| `scholarships.html` | Scholarship Finder — 6 government scholarships (NMMSS, CSSS, Pragati, Saksham, Post-Matric SC, PM YASASVI) |
| `roadmap.html` | "What after 10th / 12th?" — 11 paths with usual duration, who it suits and official links |
| `courses.html` | Course & Skill Explorer — 14 free/official learning options |
| `dashboard.html` | Personal dashboard + 30-day action plan (print / save as PDF / add to calendar) |
| (all recruitment cards) | "Add to calendar" reminders: `.ics` file made on the device + Google Calendar link |
| `private-jobs.html` | Private Job Finder (footer link): 5-step form + review, role matching (28 roles), salary ranges with source rules, 22-company directory with verification status, skills gap & plan, job-scam safety |
| `skill-development.html` | Courses & Skill Development: learning options for the target role (free/paid, online/offline, government, certificates, practical) |
| `about.html` | About, label meanings and disclaimer |
| `privacy.html` | Privacy information + "delete my saved data" |

## Folder structure

```
careersaathi/
├── *.html                9 pages (see table above)
├── css/styles.css        Design system + all page styles (mobile-first, print styles)
├── data/
│   ├── options.js        Choice lists (states, education, skills, goals…) in EN + HI
│   ├── careers.js        36 career records (demo data, no salaries/vacancies)
│   ├── sources.js        Official websites linked from career cards
│   ├── recruitment.js    22 official recruitment websites, by category
│   ├── schemes.js        9 schemes summarised from official pages
│   └── courses.js        14 learning options (unverified cost/duration = null)
├── js/
│   ├── i18n.js           All English + Hindi interface text
│   ├── layout.js         Shared header, footer, menu, language switch
│   ├── storage.js        Safe browser-storage helpers
│   ├── profile-model.js  Profile shape + validation rules        (tested)
│   ├── profile-store.js  Saving / loading the profile in the browser
│   ├── engine.js         Career matching rules                    (tested)
│   ├── scheme-match.js   "Worth a look" rules for schemes         (tested)
│   ├── course-match.js   Skill gaps → course suggestions          (tested)
│   ├── plan.js           30-day action plan builder               (tested)
│   ├── ui.js             Shared helpers (safe text, dates, links)
│   └── profile-form.js, recommendations.js, jobs.js, schemes.js,
│       courses.js, dashboard.js, privacy.js   ← draw each page
├── tests/                119 automatic checks (Node built-in test runner)
├── docs/PRODUCT_SPEC.md  Product specification (Phase 1 + 2)
├── docs/DEPLOY.md        How to put the site online for free
└── package.json          Two shortcut commands: start, test
```

## Easiest: open by double-click (no server)

Open the **standalone** folder and double-click `index.html`. That copy has each page's
JavaScript joined into one normal script, so browsers allow it from a plain folder.
After changing anything in `js/` or `data/`, rebuild it with:

```
python tools/build_standalone.py
```

## Run it on your computer (free)

1. Install **Python 3** (python.org) and **Node.js LTS** (nodejs.org). Both free.
2. Unzip this folder and open a terminal inside it.
3. Start the local web server:
   ```
   python -m http.server 8000
   ```
   (On Mac/Linux use `python3`.)
4. Open **http://localhost:8000** in your browser.
5. Stop the server with `Ctrl + C`.

Why a server? The JavaScript files use "modules", which browsers refuse to
load when you double-click an HTML file. The tiny Python server fixes that.

**Test on your phone:** connect phone and computer to the same Wi-Fi, run the server with
`python -m http.server 8000 --bind 0.0.0.0`, find your computer's IP address
(Windows: `ipconfig`, Mac: System Settings → Wi-Fi → Details), and open
`http://THAT-IP:8000` on the phone.

## Run the tests

```
npm test
```

You should see `# pass 119` and `# fail 0`. The tests cover qualification, skills,
experience and preference matching; empty and invalid inputs; government eligibility
uncertainty; schemes; course suggestions; the 30-day plan; every page's structure;
translations; and safe external links.

## Test it by hand (5-minute tour)

1. **Language:** click **हिंदी** / **EN** — all text switches; refresh — your choice is remembered.
2. **Profile:** press Next on an empty step — an error list appears. Fill the steps, refresh
   halfway — answers stay. Skip steps D and F. Tick "Remember", save.
3. **Dashboard:** click "Open my dashboard". Check all six sections. Tick a few plan tasks,
   refresh — ticks stay. Click "Print or save as PDF".
4. **Recommendations:** each card shows why it was suggested, skills to build (tap one to
   jump to courses), things to check and official links.
5. **Govt Jobs:** search "bank"; your state's commission appears first.
6. **Schemes:** "Worth a look" shows reasons and "Please confirm" points — never "eligible".
7. **Courses:** tap a skill gap; try "Free to learn".
8. **Keyboard:** press Tab from the top of any page — "Skip to main content" appears first.
9. **Privacy:** Delete my profile (profile page) or Delete my saved data (privacy page).
10. **Phone width:** make the window narrow — the Menu button appears; nothing scrolls sideways.

## Put it online

See **docs/DEPLOY.md** — free hosting on GitHub Pages, step by step, with current limits.

## Updating open recruitments (every week, ~5 minutes)

The "Open right now" list lives in `data/vacancies.js`. The website works out
**open / closing soon / opens soon / closed** from *today's date on the visitor's device*,
so closed recruitments disappear by themselves — but new ones must be added by hand.

1. Open `data/vacancies.js` (on GitHub: open the file → pencil icon to edit).
2. Delete records whose last date has passed.
3. Add new ones by copying an existing record. Dates are `YYYY-MM-DD`.
   - `verification: "official-notice"` only if you read the official notice yourself —
     only these get the **"Verified active vacancy"** label.
   - Otherwise use `"news-reports"`; the site then says "confirm officially".
   - `applyUrl` must be the official `.gov.in` / `.nic.in` website.
4. Change `LIST_UPDATED` to today's date. (After 14 days without an update the site
   warns visitors that the list may be old.)
5. Run `npm test`, then `python tools/build_standalone.py`, and upload.

Scheme and course facts also carry a `checked` date; after 90 days the site shows
"may have changed" on those cards — a reminder to re-check them.

## Course and skill providers: the evidence rule

- A provider is linked to a skill ONLY when `skills` in `data/courses.js` lists it, and every
  record with skills has `evidence` (the page where we saw the course, and the date).
- Claims we could not confirm go in `unverifiedSkills`: they are shown as "not confirmed" and are
  never used to match. A record with no verified skills needs a `note` and is shown only as a
  general place to search.
- The Private Job Finder maps its skills to course skills only through exact equivalents
  (`courseSkills` in `data/pj-options.js`). Related skills are never used as stand-ins.
- When nothing verified exists, the site says "No verified provider is currently available".
- `tests/provider-accuracy.test.js` enforces all of this — run `npm test` after every data change.

## Updating Private Job Finder data

- `data/salary.js` — PayScale India figures (copy avg, 10th–90th percentile, profiles, "last updated"). The site hides a figure automatically when it has fewer than 40 profiles, is more than 2 years old, or the range is too wide.
- `data/companies.js` — facts from Wikipedia infoboxes; set `careers.checked: true` only after opening the careers page yourself. Never add ratings, logos or "hiring now".
- `data/private-roles.js` and `data/learning-extra.js` — general role requirements and learning options; `npm test` checks them.
- Limitation: there is no live vacancy feed (static site, no server). The page links to NCS, Indeed and LinkedIn searches instead.

## Keeping official information honest

- Scheme, course and recruitment details change. Every record has a `checked` date.
  Re-check each official page at least every 3 months; update the text and the date,
  or remove the record if it has ended.
- Never add salaries, vacancy numbers, last dates, fees or age limits.
- Career records stay `status: "demo"` until you check the official notification yourself;
  then set `status: "source-checked"` and `checkedOn: "YYYY-MM-DD"`.
- Only link to official websites. Run `npm test` after every change — it catches missing
  translations, broken ids, unsafe links and forbidden claims.

## Ideas for later

- Check career records against official notifications and mark them "source-checked".
- More states' recruitment bodies and state schemes.
- Verified free courses for typing and Tally.
- More languages (the i18n file is ready for them).
- Optional AI explanations: the engine is a plain function (`matchCareers`), so an AI layer
  can be added later on top of it — the site must keep working without it.
