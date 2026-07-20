# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status: Deployable Static Site

This repo is the public-facing institute website for **معهد الهدي النبوي للعلوم الشرعية** — a pure static site (5 HTML pages + `styles.css` + `404.html`) at the **repository root**, design "Direction D — Mixture (Iwan × Mihrab)". The stack decision is settled (2026-06-11): plain static HTML, **no framework, no build step** — do not introduce a bundler or scaffold Next.js/Astro/etc. without the user asking.

- Preview locally with `python3 -m http.server`; deploy by serving the repo root (see `README.md`).
- Fonts are **self-hosted** in `assets/fonts/` (Almarai + El Messiri woff2 + `fonts.css`). Do not reintroduce the Google Fonts CDN.
- Design tokens live in the `:root` block of `styles.css` (night-teal + muted gold). The older `design-drafts/` (and its `tokens.css`) were removed 2026-06-11; this palette is now the working brand on the web, pending reconciliation with the branding team's final identity (due 2026-07-08).
- Older planning material lives in `docs/` (`docs/website-plan.md`), which is excluded from indexing via `robots.txt`.

## Authoritative Source

**`docs/website-plan.md`** is the original spec, but it is **partially out of date (as of 2026-06-11)**. Still authoritative for: site map, vision/mission/objectives copy (verbatim from النظام الداخلي — do not paraphrase), and phased rollout (المرحلة الأولى = الرئيسية + عن المعهد + البرنامج + القبول + تواصل; news and student portal later).

Superseded — the **live site pages at the repo root win** over the plan for:

- **The curriculum.** The plan's 3-semester tables (§3.2) reflect the old curriculum. Updated per the draft: فقه ٣ = أحكام الزواج والطلاق (د. أسامة حموي), التزكية في الفصول الثلاثة = موعظة القلوب (د. إبراهيم شاشو), and تفسير ١ includes تيسير الكريم الرحمن (السعدي).
- **The application flow.** Applications are **in-person only** at the institute (no electronic application form). The plan's "نموذج التقديم الإلكتروني" step is obsolete.
- **First cohort framing:** الدورة الأولى ١٤٤٨هـ / ٢٠٢٦. Registration window is confirmed: in-person, **١١–١٦ تموز (July)**, daily **٩:٠٠ص–١٢:٠٠ظ** (2026-07-04, from the official "فتح باب التسجيل" carousel — supersedes the earlier ١٠:٠٠ص–٤:٠٠م figure from 2026-07-02). Study starts **٣١ تموز (31 July) 2026** (a Friday — the male students' class day). Surface the specific dates, not vague "قريباً" language — but until 11 July arrives, copy must not read as "مفتوح الآن".

When user direction and any document here disagree, the user wins; record the change in this file.

**Copy decisions (2026-07-05, from user notes):**

- Study-days fact chips say **«أيّامُ الدوام»**, not «أيّام الدراسة».
- Homepage ticker: separator between phrases is **«ـ» (tatweel)**, not «·»; the «مجلس علمي من العلماء المتمكنين» phrase was replaced with **«كادرٌ تدريسيٌّ متمكّنٌ ومؤهّل»** (ticker only — the faculty/المجلس العلمي sections elsewhere are unchanged).
- Homepage «لمن هذا البرنامج» personas: all chips removed (the last one, «تزكية», was dropped 2026-07-06 — persona cards carry no `pmeta` chips at all); third persona heading is **«كلُّ راغبٍ في طلبِ العلمِ الشرعيّ»**.
- Program page: weekly hours written out as **«ساعة بالأسبوع»** (no «سا/أسب» abbreviation); the «من كتب المنهج» book-list section was deleted — its key sentence («منهج يجمع بين كتب العلماء المتقدّمين وما كتبه المعاصرون من المتمكّنين في أبوابهم») now opens the intro paragraph before the semester tables.
- Admissions banner: **«مقعد الدراسة»**, not «مقعد الدرس».

## Hard Constraints

- **Arabic only, RTL.** Set `<html lang="ar" dir="rtl">`. All copy, labels, errors, and placeholders in Arabic. No English toggle unless the user asks.
- **Western digits only (1234567890).** User decision 2026-07-05: all numerals site-wide use Western/Latin digits, never Arabic-Indic (٠١٢٣٤٥٦٧٨٩) — including dates, times, section numbers, and © year. Do not reintroduce Arabic-Indic digits in new copy.
- **Mobile-first.** The plan flags explicitly that most visitors will arrive on phones — prioritize mobile layout over desktop.
- **Performance matters.** Keep the bundle light; no heavy JS frameworks for what is mostly static content. The plan calls out fast load times as a requirement.
- **Free-of-charge is a conversion message.** Surface "الدراسة مجانية" prominently on the homepage and admissions page — the plan calls this out repeatedly as the headline selling point.
- **For non-full-time students ("لغير المتفرغين").** Treat this as a second headline message alongside the free-of-charge point.

## Pending Decisions (Don't Guess)

Several facts are still undecided. Do **not** fabricate values for:

- Exact daily class hours (start/end times of the Friday/Saturday session)
- Admission test details beyond its format (the test is كتابي وشفهي; dates/content TBD)
- Student housing (السكن)
- Email

**Confirmed (no longer TBD):** the physical address is جامع الصحابي الجليل خالد بن الوليد — الحمدانية، مدخل الحي الرابع، حلب (the Google Maps embed points to the correct mosque). Registration entrances (2026-07-04): men at معهد القرآن للذكور via الباب الشمالي, women at معهد الإناث via الباب الغربي (the women's venue was renamed from «حرم النساء» to «معهد الإناث» on 2026-07-12 and unified across the site, the posters, and the carousel). Graduation certificate (updated 2026-07-06): شهادة مصدّقة من مديرية الأوقاف (previously worded «صادرة عن وزارة الأوقاف»). Required documents (2026-07-04): صورة الهوية ×٢, صورة شخصية حديثة ملوّنة ×٢, صورة مصدّقة عن المؤهل العلمي. Seats are limited (المقاعد محدودة) — usable as urgency copy. Hosting/domain: **Netlify, canonical https://alhady-nb.org** (apex) — wired into sitemap.xml, robots.txt, and the og:url/og:image/canonical tags on every page (2026-06-11). Study days: **الجمعة for male students, السبت for female students** — one class day per week, which is the actual reason the program is pitched as "لغير المتفرغين" (2026-07-02). Admission window for الدورة الأولى ١٤٤٨هـ: in-person registration **١١–١٦ تموز (July) 2026**, daily ١٠:٠٠ص–٤:٠٠م (2026-07-02). Official Facebook page: https://www.facebook.com/alhady.nb — linked in the footer of every page and as a contact card on `contact.html` (2026-07-02). Phone numbers (2026-07-20): **+963960674088 للذكور، +963953357842 للإناث**, calling hours 10:00ص–4:00م — shown in the footer of every page and on the `contact.html` phone card, always as `tel:` links with `dir="ltr"`, displayed grouped «+963 960 674 088». Analytics: **Google Analytics 4, Measurement ID `G-DB0C8439XN`** (2026-07-05) — lives only in `assets/analytics.js` (loaded by all 6 pages; do not inline gtag snippets into the pages). The script no-ops off-domain so localhost/Netlify previews don't pollute stats, and fires a custom `cta_click` event for `a.btn`/`a.nav-cta` clicks.

If a page needs one of these, leave a visible placeholder (e.g., `<!-- TBD: أوقات الدراسة -->`) and flag it to the user rather than inventing plausible-looking data.

## Relationship to the Workspace

This website is separate from `../admission-system/` (Next.js admissions app). Applications are **in-person only** (decision 2026-06-11): the website must **not** link to an online application form or re-implement one. The admission-system remains an internal tool; its public URL does not belong on this site.

Root workspace guidance lives in `../CLAUDE.md`. The Arabic source documents (النظام الداخلي، ملخص الموقع) in the workspace root are requirement inputs — if extracting content from the `.docx` files, use `python-docx` (preserves tables) rather than `textutil`.
