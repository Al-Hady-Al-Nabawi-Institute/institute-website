# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status: Planning Only — No Code Yet

This directory holds the plan for the public-facing institute website for **معهد الهدي النبوي للعلوم الشرعية**. No framework has been chosen, nothing has been scaffolded, and no `package.json` / build system exists. The stack itself is a pending decision (see the "القرارات المعلّقة" table at the end of `website-plan.md`).

Do **not** invent build/test/lint commands — there is nothing to build yet. When asked to "start" the website, first confirm the stack with the user; don't unilaterally scaffold Next.js/Astro/etc.

## Authoritative Source

**`website-plan.md`** (at the root of this directory) is the spec. It is the source of truth for:

- Site map and page structure (الرئيسية، عن المعهد، البرنامج الأكاديمي، القبول، الأخبار، تواصل معنا)
- Exact Arabic copy for vision/mission/objectives and all section content — **copy it verbatim, do not paraphrase or retranslate**. The Arabic wording comes from the institute's النظام الداخلي.
- The full 3-semester curriculum tables (courses, weekly hours, textbooks) — reproduce these exactly as tables.
- Admission requirements, required documents, and application steps — these are regulatory, not stylistic; do not simplify.
- Phased rollout: المرحلة الأولى = الرئيسية + عن المعهد + البرنامج + القبول + تواصل. News and student portal come later.

When `website-plan.md` and this file disagree, the plan wins. When user direction and the plan disagree, ask.

## Hard Constraints

- **Arabic only, RTL.** Set `<html lang="ar" dir="rtl">`. All copy, labels, errors, and placeholders in Arabic. No English toggle unless the user asks.
- **Mobile-first.** The plan flags explicitly that most visitors will arrive on phones — prioritize mobile layout over desktop.
- **Performance matters.** Keep the bundle light; no heavy JS frameworks for what is mostly static content. The plan calls out fast load times as a requirement.
- **Free-of-charge is a conversion message.** Surface "الدراسة مجانية" prominently on the homepage and admissions page — the plan calls this out repeatedly as the headline selling point.
- **For non-full-time students ("لغير المتفرغين").** Treat this as a second headline message alongside the free-of-charge point.

## Pending Decisions (Don't Guess)

Several facts in the plan are marked "يُحدّد لاحقاً". Do **not** fabricate values for:

- Study days/hours (أوقات الدراسة)
- Admission test details (تفاصيل اختبار القبول)
- Graduation certificate details (الشهادة الممنوحة)
- Student housing (السكن)
- Social media handles, phone, email, physical address
- Domain name and hosting

If a page needs one of these, leave a visible placeholder (e.g., `<!-- TBD: أوقات الدراسة -->`) and flag it to the user rather than inventing plausible-looking data.

## Relationship to the Workspace

This website is separate from `../admission-system/` (Next.js admissions app). The admissions page here should **link out to** the admission system's public application URL — it should not re-implement the application form. Confirm the destination URL with the user before hard-coding it.

Root workspace guidance lives in `../CLAUDE.md`. The Arabic source documents (النظام الداخلي، ملخص الموقع) in the workspace root are requirement inputs — if extracting content from the `.docx` files, use `python-docx` (preserves tables) rather than `textutil`.
