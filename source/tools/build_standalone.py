"""
Build a "standalone" copy of CareerSaathi AI that works by double-clicking
index.html (no local server needed).

Why: the normal site uses JavaScript modules (import/export). Browsers block
modules on file:// pages. This script joins each page's modules into ONE normal
script file (js/bundle-<page>.js), so the site runs from a plain folder.

Usage (from the project folder):
    python tools/build_standalone.py            -> creates  standalone/
It only uses Python's standard library. It supports the simple import/export
forms used in this project and stops with an error on anything else.
"""
import hashlib
import os
import re
import shutil
import sys

# ---------------------------------------------------------------------------
# SETTINGS — change these two lines when you buy your own domain / join AdSense
# ---------------------------------------------------------------------------
SITE_URL = "https://yogeshskb2-creator.github.io/careersaathiai/"   # must end with /
ADSENSE_PUB_ID = ""   # e.g. "pub-1234567890123456" after AdSense approval (creates ads.txt)
# ---------------------------------------------------------------------------

import subprocess
from datetime import date
from html import escape, unescape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "standalone")
# Personal tool pages are left out of the sitemap (they show nothing until a profile is filled).
NOT_IN_SITEMAP = {"dashboard"}

IMPORT_RE = re.compile(r'^import\s*\{([^}]*)\}\s*from\s*"([^"]+)";\s*$', re.M | re.S)
EXPORT_FN_RE = re.compile(r'^export\s+((?:async\s+)?function)\s+(\w+)', re.M)
EXPORT_CONST_RE = re.compile(r'^export\s+const\s+(\w+)', re.M)


def rel(path):
    return os.path.relpath(path, ROOT).replace(os.sep, "/")


def load_module(path, modules, order):
    key = rel(path)
    if key in modules:
        return key
    src = open(path, encoding="utf8").read()
    modules[key] = None  # mark as in progress (cycle guard)
    deps = []

    def replace_import(m):
        names = [n.strip() for n in m.group(1).replace("\n", " ").split(",") if n.strip()]
        for n in names:
            if " as " in n:
                sys.exit(f"{key}: 'as' imports are not supported by this simple bundler")
        dep_path = os.path.normpath(os.path.join(os.path.dirname(path), m.group(2)))
        dep_key = load_module(dep_path, modules, order)
        deps.append(dep_key)
        return f'const {{ {", ".join(names)} }} = __mods["{dep_key}"];'

    body = IMPORT_RE.sub(replace_import, src)
    if re.search(r'^\s*(import|export)\s', body, re.M):
        bad = re.search(r'^\s*(import|export)\s.*$', body, re.M).group(0)
        if not (EXPORT_FN_RE.search(bad) or EXPORT_CONST_RE.search(bad)):
            sys.exit(f"{key}: unsupported line: {bad}")
    exported = [m[1] for m in EXPORT_FN_RE.findall(body)] + EXPORT_CONST_RE.findall(body)
    body = EXPORT_FN_RE.sub(r'\1 \2', body)
    body = EXPORT_CONST_RE.sub(r'const \1', body)
    if re.search(r'^\s*(import|export)\s', body, re.M):
        sys.exit(f"{key}: an import/export was not converted")

    modules[key] = (
        f'// ===== {key} =====\n'
        f'__mods["{key}"] = (function () {{\n{body}\n'
        f'return {{ {", ".join(exported)} }};\n}})();\n'
    )
    order.append(key)
    return key


def bundle(entries):
    modules, order = {}, []
    for e in entries:
        load_module(os.path.join(ROOT, e), modules, order)
    parts = [modules[k] for k in order]
    return ('/* CareerSaathi AI — bundled by tools/build_standalone.py. Edit the files in js/ and data/, then rebuild. */\n'
            '(function () {\n"use strict";\nconst __mods = {};\n' + "\n".join(parts) + '\n})();\n')


def seo_tags(page, html):
    """Canonical address + basic social-sharing tags for one page."""
    url = SITE_URL + ("" if page == "index" else f"{page}.html")
    title = re.search(r"<title[^>]*>(.*?)</title>", html, re.S)
    desc = re.search(r'<meta name="description" content="([^"]*)"', html)
    title = unescape(title.group(1).strip()) if title else "CareerSaathi AI"
    desc = unescape(desc.group(1)) if desc else ""
    is_hindi = re.search(r'<article[^>]*lang="hi"', html) is not None
    return (f'  <link rel="canonical" href="{url}">\n'
            f'  <meta property="og:type" content="{"article" if page.startswith("guide-") else "website"}">\n'
            f'  <meta property="og:site_name" content="CareerSaathi AI">\n'
            f'  <meta property="og:title" content="{escape(title)}">\n'
            f'  <meta property="og:description" content="{escape(desc)}">\n'
            f'  <meta property="og:url" content="{url}">\n'
            f'  <meta property="og:locale" content="{"hi_IN" if is_hindi else "en_IN"}">\n'
            f'  <meta name="twitter:card" content="summary">\n')


def main():
    if not SITE_URL.endswith("/"):
        sys.exit("SITE_URL must end with /")
    # Guides are generated from content/guides first, so they are always up to date.
    subprocess.run([sys.executable, os.path.join(ROOT, "tools", "build_guides.py")], check=True)

    if os.path.exists(OUT):
        shutil.rmtree(OUT)
    os.makedirs(os.path.join(OUT, "js"))
    shutil.copytree(os.path.join(ROOT, "css"), os.path.join(OUT, "css"))
    open(os.path.join(OUT, ".nojekyll"), "w").close()

    def ver(rel):
        return hashlib.sha1(open(os.path.join(OUT, rel), "rb").read()).hexdigest()[:8]

    # The chat assistant is a separate bundle, loaded only when a visitor opens it,
    # so normal pages stay small. layout.js refers to "js/chat-entry.js"; in the
    # built site that name is swapped for the versioned bundle.
    chat_js = bundle(["js/chat-entry.js"])
    open(os.path.join(OUT, "js/bundle-chat.js"), "w", encoding="utf8").write(chat_js)
    chat_ref = f'"js/bundle-chat.js?v={ver("js/bundle-chat.js")}"'
    print(f"bundle js/bundle-chat.js  ({len(chat_js)//1024} KB, loaded on demand)")

    pages = sorted(f[:-5] for f in os.listdir(ROOT) if f.endswith(".html"))
    script_re = re.compile(r'\s*<script type="module" src="([^"]+)"></script>')
    built = {}  # same set of scripts → one shared bundle file
    for page in pages:
        html = open(os.path.join(ROOT, f"{page}.html"), encoding="utf8").read()
        entries = script_re.findall(html)
        if not entries:
            sys.exit(f"{page}.html has no module scripts")
        key = tuple(entries)
        if key not in built:
            last = os.path.splitext(os.path.basename(entries[-1]))[0]
            bundle_name = f"js/bundle-{last}.js"
            js = bundle(entries).replace('"js/chat-entry.js"', chat_ref)
            open(os.path.join(OUT, bundle_name), "w", encoding="utf8").write(js)
            built[key] = bundle_name
            print(f"bundle {bundle_name}  ({len(js)//1024} KB)")
        bundle_name = built[key]
        first = True

        def swap(m):
            nonlocal first
            if first:
                first = False
                return f'\n  <script src="{bundle_name}?v={ver(bundle_name)}" defer></script>'
            return ""

        html = script_re.sub(swap, html)
        # Version tags make browsers load fresh files after every update (no stale cache).
        html = html.replace('href="css/styles.css"', f'href="css/styles.css?v={ver("css/styles.css")}"')
        html = html.replace("</head>", seo_tags(page, html) + "</head>", 1)
        open(os.path.join(OUT, f"{page}.html"), "w", encoding="utf8").write(html)
    print(f"built {len(pages)} pages")

    # sitemap.xml and robots.txt (search engines)
    today = date.today().isoformat()
    urls = []
    for page in pages:
        if page in NOT_IN_SITEMAP:
            continue
        loc = SITE_URL + ("" if page == "index" else f"{page}.html")
        urls.append(f"  <url><loc>{loc}</loc><lastmod>{today}</lastmod></url>")
    open(os.path.join(OUT, "sitemap.xml"), "w", encoding="utf8").write(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(urls) + "\n</urlset>\n")
    open(os.path.join(OUT, "robots.txt"), "w", encoding="utf8").write(
        f"User-agent: *\nAllow: /\n\nSitemap: {SITE_URL}sitemap.xml\n")
    print(f"sitemap.xml ({len(urls)} pages) and robots.txt written for {SITE_URL}")

    # ads.txt — only after AdSense approval
    if ADSENSE_PUB_ID:
        if not re.fullmatch(r"pub-\d{10,20}", ADSENSE_PUB_ID):
            sys.exit("ADSENSE_PUB_ID should look like pub-1234567890123456")
        open(os.path.join(OUT, "ads.txt"), "w").write(f"google.com, {ADSENSE_PUB_ID}, DIRECT, f08c47fec0942fa0\n")
        print("ads.txt written")
    print(f"\nDone. Open {os.path.join('standalone', 'index.html')} by double-clicking it.")


if __name__ == "__main__":
    main()
