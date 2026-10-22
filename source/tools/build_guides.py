"""
Build the Career Guide pages from simple content files.

Each guide lives in  content/guides/<slug>.html  and starts with a small header:

    title: Career options after ITI
    description: One sentence for search results.
    lang: en                      (en or hi)
    pair: iti-ke-baad-career      (slug of the same guide in the other language)
    reviewed: 2026-10-22          (date you last checked the facts)
    summary: One or two sentences shown on the guides list.
    ---
    <p>Article HTML…</p>

Running   python tools/build_guides.py   creates:
    guide-<slug>.html   one page per guide (static HTML — readable by search engines)
    guides.html         the list of all guides
Only Python's standard library is used.
"""
import html
import os
import re
import sys
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "content", "guides")

MONTHS_HI = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"]
MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

TEXT = {
    "en": {
        "all": "All guides", "reviewed": "Last reviewed", "other": "हिंदी में पढ़ें",
        "toolsT": "Use our free tools",
        "tools": [("profile.html", "Fill your career profile"), ("recommendations.html", "See career suggestions"),
                  ("jobs.html", "Official recruitment websites"), ("schemes.html", "Scheme Finder"), ("courses.html", "Free courses")],
        "disc": "This guide is general information, not official advice. Rules, fees and dates change — always read the latest official notification or scheme page before you apply. CareerSaathi AI is not a government website.",
    },
    "hi": {
        "all": "सभी गाइड", "reviewed": "पिछली जाँच", "other": "Read in English",
        "toolsT": "हमारे मुफ़्त टूल इस्तेमाल करें",
        "tools": [("profile.html", "अपनी करियर प्रोफ़ाइल भरें"), ("recommendations.html", "करियर सुझाव देखें"),
                  ("jobs.html", "आधिकारिक भर्ती वेबसाइटें"), ("schemes.html", "योजना खोजें"), ("courses.html", "मुफ़्त कोर्स")],
        "disc": "यह गाइड सामान्य जानकारी है, आधिकारिक सलाह नहीं। नियम, फ़ीस और तारीख़ें बदलती हैं — आवेदन से पहले हमेशा नई आधिकारिक सूचना या योजना पेज पढ़ें। करियरसाथी AI सरकारी वेबसाइट नहीं है।",
    },
}


def nice_date(iso, lang):
    y, m, d = (int(x) for x in iso.split("-"))
    months = MONTHS_HI if lang == "hi" else MONTHS_EN
    return f"{d} {months[m - 1]} {y}"


def parse(path):
    raw = open(path, encoding="utf8").read()
    if "\n---\n" not in raw:
        sys.exit(f"{path}: missing '---' line after the header")
    head, body = raw.split("\n---\n", 1)
    meta = {}
    for line in head.strip().splitlines():
        key, _, value = line.partition(":")
        meta[key.strip()] = value.strip()
    for need in ("title", "description", "lang", "pair", "reviewed", "summary"):
        if not meta.get(need):
            sys.exit(f"{path}: header needs '{need}:'")
    if meta["lang"] not in ("en", "hi"):
        sys.exit(f"{path}: lang must be en or hi")
    date.fromisoformat(meta["reviewed"])
    # Every outside link opens safely in a new tab.
    body = re.sub(r'<a href="(https://[^"]+)">', r'<a href="\1" target="_blank" rel="noopener noreferrer">', body)
    meta["body"] = body.strip()
    meta["slug"] = os.path.splitext(os.path.basename(path))[0]
    return meta


HEAD = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <meta name="theme-color" content="#0e5560">
  <link rel="alternate" hreflang="{lang}" href="guide-{slug}.html">
  <link rel="alternate" hreflang="{pair_lang}" href="guide-{pair}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&display=swap">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body data-page="guides">
  <div id="site-header"></div>
"""

FOOT = """  <div id="site-footer"></div>
  <script type="module" src="js/layout.js"></script>
</body>
</html>
"""


def article_page(g, by_slug):
    T = TEXT[g["lang"]]
    pair = by_slug.get(g["pair"])
    if not pair:
        sys.exit(f"{g['slug']}: pair '{g['pair']}' not found")
    tools = "".join(f'<li><a href="{href}">{html.escape(label)}</a></li>' for href, label in T["tools"])
    return HEAD.format(title=html.escape(g["title"]) + " — CareerSaathi AI", description=html.escape(g["description"]),
                       lang=g["lang"], slug=g["slug"], pair=g["pair"], pair_lang=pair["lang"]) + f"""
  <main id="main" tabindex="-1">
    <article class="container guide" lang="{g['lang']}">
      <nav class="guide-crumbs" aria-label="Breadcrumb"><a href="guides.html">← {T['all']}</a></nav>
      <header class="guide-head">
        <h1>{html.escape(g['title'])}</h1>
        <p class="guide-meta">
          <span>{T['reviewed']}: <time datetime="{g['reviewed']}">{nice_date(g['reviewed'], g['lang'])}</time></span>
          <a href="guide-{g['pair']}.html" lang="{pair['lang']}" hreflang="{pair['lang']}">{T['other']}</a>
        </p>
        <p class="lead">{html.escape(g['summary'])}</p>
      </header>
      <div class="guide-body">
{g['body']}
      </div>
      <aside class="card guide-tools" aria-label="{html.escape(T['toolsT'])}">
        <h2>{T['toolsT']}</h2>
        <ul>{tools}</ul>
      </aside>
      <p class="alert alert--warn guide-disc">{T['disc']}</p>
    </article>
  </main>
""" + FOOT


def index_page(guides, by_slug):
    english = [g for g in guides if g["lang"] == "en"]
    cards = []
    for g in english:
        hi = by_slug[g["pair"]]
        cards.append(f"""
        <article class="card guide-card">
          <h2><a href="guide-{g['slug']}.html">{html.escape(g['title'])}</a></h2>
          <p class="guide-card-hi" lang="hi"><a href="guide-{hi['slug']}.html">{html.escape(hi['title'])}</a></p>
          <p class="muted">{html.escape(g['summary'])}</p>
          <p class="guide-card-links">
            <a class="btn btn-secondary btn-small" href="guide-{g['slug']}.html" data-i18n="guides.readEn">Read in English</a>
            <a class="btn btn-secondary btn-small" href="guide-{hi['slug']}.html" lang="hi" data-i18n="guides.readHi">हिंदी में पढ़ें</a>
          </p>
        </article>""")
    head = HEAD.replace('  <link rel="alternate" hreflang="{lang}" href="guide-{slug}.html">\n  <link rel="alternate" hreflang="{pair_lang}" href="guide-{pair}.html">\n', "")
    head = head.replace("<title>{title}</title>", '<title data-i18n="guides.title">{title}</title>')
    return head.format(title="Career Guides — CareerSaathi AI",
                       description="Simple career guides in English and Hindi on jobs after ITI, CCC, free skill training, apprenticeships, business loans and avoiding job scams.") + f"""
  <main id="main" tabindex="-1">
    <div class="container page-head">
      <h1 data-i18n="guides.h1">Career guides</h1>
      <p class="lead" data-i18n="guides.lead">Simple guides on jobs, skills and government schemes, written from official sources. Every guide is available in English and Hindi.</p>
      <p class="alert alert--info" data-i18n="guides.note">Rules, fees and dates change. Each guide lists its official sources — always check them before you apply.</p>
    </div>
    <div class="container">
      <div class="rec-grid">{''.join(cards)}
      </div>
    </div>
  </main>
""" + FOOT


def main():
    files = sorted(f for f in os.listdir(SRC) if f.endswith(".html"))
    guides = [parse(os.path.join(SRC, f)) for f in files]
    by_slug = {g["slug"]: g for g in guides}
    for g in guides:
        if by_slug.get(g["pair"], {}).get("pair") != g["slug"]:
            sys.exit(f"{g['slug']}: its pair must point back to it")
    for old in os.listdir(ROOT):
        if old.startswith("guide-") and old.endswith(".html"):
            os.remove(os.path.join(ROOT, old))
    for g in guides:
        open(os.path.join(ROOT, f"guide-{g['slug']}.html"), "w", encoding="utf8").write(article_page(g, by_slug))
    open(os.path.join(ROOT, "guides.html"), "w", encoding="utf8").write(index_page(guides, by_slug))
    print(f"built {len(guides)} guide pages + guides.html")


if __name__ == "__main__":
    main()
