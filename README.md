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

Target: **Netlify**, canonical domain **https://alhady-nb.org** (apex; `www` redirects). `netlify.toml` copies only the deployable files into `dist/` (so `docs/`, `CLAUDE.md`, `README.md` are not published) and sets long-lived cache headers for the fonts. Connect the GitHub repo in Netlify and every push to `main` deploys; PRs get preview deploys.

DNS cutover (GoDaddy, after the Netlify site exists): remove the bare-domain Forwarding (drops the two GoDaddy forwarding A records), add `A @ → 75.2.60.5` (Netlify LB) and point the `www` CNAME at the Netlify site; leave `portal`/`auth`/Brevo records untouched. Netlify then provisions Let's Encrypt TLS automatically. Record the change in `institute-platform-infra/dns/records.md`.

Pending before/at launch:

- [x] Canonical domain wired: `sitemap.xml`, `robots.txt` Sitemap line, `og:url`/`og:image`/canonical tags (2026-06-11)
- [ ] SSO portal-entry link (بوابة الطالب → auth.alhady-nb.org) once the portal login flow is ready for students
- [ ] Fill in phone/email placeholders (`يُحدَّد لاحقاً`) once official channels exist
- [ ] Flip "التسجيل يُفتَح قريباً" messaging when admissions actually open

## Fonts

Almarai (300/400/700/800) and El Messiri (400–700) are self-hosted in `assets/fonts/` (woff2, subset per script, licensed under the SIL Open Font License). No external font CDN is used.

## Content rules

Editorial and factual constraints (curriculum source of truth, in-person admissions, TBD placeholders) are documented in `CLAUDE.md`.
