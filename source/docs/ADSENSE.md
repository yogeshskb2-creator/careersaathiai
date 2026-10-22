# Getting CareerSaathi AI ready for Google AdSense

Checked against Google's AdSense help pages on 22 October 2026. Google's rules change —
re-read the official pages before applying.

## Already done in the website

- [x] Original website and code, with About, Disclaimer, Privacy and Terms pages
- [x] **Contact page** (`contact.html`) with support@careersaathiai.in
- [x] **Privacy page has an Advertising section** with the points Google asks publishers to cover:
      third-party vendors (including Google) use cookies; how Google uses advertising cookies;
      opt-out links (Google Ads Settings, aboutads.info); the ad network used
- [x] **Terms of Use** page, including an advertising note
- [x] **Career Guides**: 6 original guides, each in English and Hindi (12 pages), written from
      official sources, as plain HTML so search engines can read them
- [x] `sitemap.xml`, `robots.txt`, canonical and social-sharing tags on every page
- [x] Mobile-friendly, fast, no broken links (checked by `npm test`)

## Still to do (only you can do these)

1. **Buy the domain `careersaathiai.in`** and connect it to GitHub Pages (see the custom-domain
   steps). AdSense's `ads.txt` file must sit at the root of your domain, which a
   `github.io/careersaathiai/` address cannot provide.
2. **Set up the support email** `support@careersaathiai.in` with your domain/email provider.
   Until then, emails to this address will bounce.
3. **After the domain works**, open `tools/build_standalone.py` and change
   `SITE_URL = "https://careersaathiai.in/"`, then rebuild. This updates the sitemap,
   robots.txt and canonical tags in one go.
4. **Add the site to Google Search Console** and submit `sitemap.xml`.
5. **Write more guides.** Aim for 20–30 good, original guides over time (Google asks for
   "high-quality, original" content that attracts an audience). Add a file to
   `content/guides/` — the header format is explained in `tools/build_guides.py`.
6. **Check the 36 career records** against official notifications and change them from
   `demo` to `source-checked` (see the main README).
7. **Consider hosting.** GitHub's terms say Pages is not meant for running an online business;
   if you depend on ad income, a host whose terms clearly allow ads is safer.
8. **Apply** at adsense.google.com (you must be 18 or older).

## After approval

1. Put your publisher ID in `tools/build_standalone.py`: `ADSENSE_PUB_ID = "pub-…"` and rebuild —
   this creates `ads.txt` automatically.
2. Add the AdSense code Google gives you to the pages.
3. **Where NOT to place ads:** next to form buttons (Next/Save), next to "Visit official website"
   or "Apply" buttons, or anywhere an ad could look like a government link.
4. If you get visitors from the EEA, UK or Switzerland, follow Google's consent-message
   requirements shown in your AdSense account.

## Official references

- AdSense eligibility: https://support.google.com/adsense/answer/9724
- Required privacy-policy content: https://support.google.com/adsense/answer/1348695
- Adding a site: https://support.google.com/adsense/answer/12169212
