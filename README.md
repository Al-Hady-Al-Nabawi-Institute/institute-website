# الموقع الرسمي — معهد الهدي النبوي للعلوم الشرعية

Public website for **Al-Hady Al-Nabawi Institute** (Aleppo). Pure static site — Arabic, RTL, no build step, no framework.

## Structure

```
index.html        الرئيسية
about.html        عن المعهد
program.html      البرنامج الأكاديمي
admissions.html   القبول والتسجيل
contact.html      تواصل معنا
404.html          صفحة الخطأ (GitHub Pages picks it up automatically)
styles.css        the single stylesheet (design tokens in :root)
robots.txt
assets/           logo, favicon, self-hosted fonts (assets/fonts/)
docs/             planning documents (not part of the deployed site)
```

## Local preview

No tooling needed:

```sh
python3 -m http.server 8080
# open http://localhost:8080
```

## Deployment

Serve the repository root with any static host (nginx, GitHub Pages, Netlify, …). There is nothing to build. If the host supports it, exclude `docs/` and `CLAUDE.md` from publishing; `robots.txt` already disallows `/docs/`.

Pending before/at launch (domain not yet decided):

- [ ] Set the canonical domain, then add `sitemap.xml` and the `Sitemap:` line in `robots.txt`
- [ ] Add absolute `og:image` URLs (a TBD comment marks the spot in each page's `<head>`)
- [ ] Fill in phone/email placeholders (`يُحدَّد لاحقاً`) once official channels exist
- [ ] Flip "التسجيل يُفتَح قريباً" messaging when admissions actually open

## Fonts

Almarai (300/400/700/800) and El Messiri (400–700) are self-hosted in `assets/fonts/` (woff2, subset per script, licensed under the SIL Open Font License). No external font CDN is used.

## Content rules

Editorial and factual constraints (curriculum source of truth, in-person admissions, TBD placeholders) are documented in `CLAUDE.md`.
