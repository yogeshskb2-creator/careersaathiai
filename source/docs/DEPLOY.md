# Putting CareerSaathi AI online for free (GitHub Pages)

CareerSaathi AI is a "static" website: just HTML, CSS and JavaScript files.
There is no server or database, so it can be hosted free on GitHub Pages.
Visitors' profiles still stay only in their own browser after it goes online.

## Before you publish — checklist

- [ ] Run `npm test` → `# fail 0`.
- [ ] Open every page on your phone using the local server (see README) and click through it once.
- [ ] Re-check the official pages behind the schemes and courses, and update the `checked` dates
      in `data/schemes.js`, `data/courses.js`, `data/recruitment.js` and `data/sources.js`.
- [ ] Career records are still marked "demo". That is fine for a prototype; the site says so clearly.

## Steps (no Git knowledge needed)

1. Create a free account at https://github.com.
2. Click **+** (top right) → **New repository**.
   - Name: `careersaathi` (any name is fine).
   - Choose **Public**. GitHub Free only offers Pages for public repositories,
     which means anyone can read the code. That is safe: the code contains no passwords or keys.
   - Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Open the unzipped `careersaathi` folder on your computer, select **everything inside it**
   (index.html, css, js, data, docs, tests, …) and drag it into the browser window.
   Wait for the upload to finish, then click **Commit changes**.
5. Go to **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)** → **Save**.
6. Wait 1–3 minutes and refresh. The page shows your site address, usually
   `https://YOUR-USERNAME.github.io/careersaathi/`.

To update the site later: open the repository, click **Add file → Upload files**, upload the
changed files (same folder names), and commit. The site updates in a few minutes.

## GitHub Pages limits (from GitHub's documentation, checked 22 Oct 2026)

- Published site: up to **1 GB** (this project is well under 1 MB).
- Bandwidth: a *soft* limit of **100 GB per month**.
- Builds: a *soft* limit of **10 per hour**.
- **Not allowed:** running an online business, commercial transactions, or handling sensitive
  data such as passwords or card numbers. CareerSaathi AI does none of these.
- Free hosting rules can change at any time. Re-read GitHub's Pages documentation before relying
  on it. Because this site is plain files, you can move it to another static host in minutes.

## Other free static hosts

Netlify and Cloudflare Pages also host static sites and have free plans. Their limits and terms
change, so read their current free-plan pages before choosing. No code changes are needed —
upload the same folder.

## Optional: works fully offline

The only outside file the site loads is the Mukta font from Google Fonts. If it cannot load,
the site uses the phone's own font. To remove that outside request completely, delete the three
`fonts.googleapis.com` / `fonts.gstatic.com` lines from each HTML file's `<head>`, and remove the
Google Fonts sentence from the privacy page text in `js/i18n.js`.
