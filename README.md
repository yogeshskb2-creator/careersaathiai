# CareerSaathi AI

**Your Education. Your Skills. Your Opportunities.** · आपकी योग्यता से आपके रोज़गार तक।

Free, private, rule-based career guidance website for India, in English and simple Hindi.
No login, no server, no database — everything a visitor types stays in their own browser.

**Live site:** https://yogeshskb2-creator.github.io/careersaathiai/

## What's in this repository

- **Top level** (`*.html`, `css/`, `js/bundle-*.js`): the published website (GitHub Pages serves this).
- **`source/`**: the full project — readable source code (`js/`, `data/`), 119 automatic tests,
  product spec and deployment guide.

## Making changes

1. Edit files in `source/js/` or `source/data/`.
2. In `source/`, run the tests: `npm test`
3. Rebuild the website: `python tools/build_standalone.py`
4. Copy everything from `source/standalone/` to the top level of this repository and commit.

See `source/README.md` for full details.
