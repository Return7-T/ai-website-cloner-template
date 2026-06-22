---
target: homepage
total_score: 25
p0_count: 0
p1_count: 2
timestamp: 2026-06-22T07-17-28Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hero video loading; external link indicators |
| 2 | Match System / Real World | 4 | Domain-appropriate terminology throughout |
| 3 | User Control and Freedom | 3 | Sticky nav, FAQ toggle; no undo on form |
| 4 | Consistency and Standards | 3 | Section pattern consistent; component style drift |
| 5 | Error Prevention | 2 | No email/phone format validation |
| 6 | Recognition Rather Than Recall | 3 | Nav labels good; no homepage breadcrumb |
| 7 | Flexibility and Efficiency | 1 | Marketing site; no search shortcuts |
| 8 | Aesthetic and Minimalist Design | 3 | Clean overall; divider overused |
| 9 | Error Recovery | 2 | Submit OK; no network error state |
| 10 | Help and Documentation | 1 | No inline help, contact form only |
| **Total** | | **25/40** | **Acceptable** |

## Anti-Patterns Verdict

**AI-generated:** No. No gradient text, no glassmorphism, no hero-metric templates, no numbered section markers, no uppercase tracked eyebrows. Real equipment imagery and case studies reinforce authenticity.

**Detector scan:** Clean — 17 files scanned, 0 findings.

## Overall Impression

Professional, honest, substantial — a strong foundation. The new Bright Industrial Blue is a meaningful improvement over the deep navy. The typographic signature (17/34px body) is the site's best-kept secret. Primary opportunity: raise interaction depth to match visual quality.

## What's Working

1. **Signature line-height** (17/34px) — exceptional readability for B2B product copy
2. **Card hover interaction** — layered timing (image 0.4s, title 0.3s) feels deliberate
3. **Color layering** — white cards on cool off-white creates clear hierarchy without shadows

## Priority Issues

- **[P1] Form lacks field-level validation and error states** — browser-default tooltips, no network error handling, false success state on failure
- **[P1] External links lack navigation indicators** — daswell.com links open same-tab, users feel tricked
- **[P2] Repetitive section structure** — H2 + divider + content pattern repeats 7+ times on homepage
- **[P2] Product page numbered badges feel inconsistent** — circular badges don't match 3px radius language
- **[P2] Hero video has no loading feedback** — black flash on slow connections before video appears
- **[P3] FeatureBlock bullet dots too small (6px)** — nearly invisible next to long description text
- **[P3] Container width inconsistency** — 1290px vs 1500px max-width jumps between sections

## Persona Red Flags

- **Jordan (First-Timer):** daswell.com external links have no indicator
- **Riley (Stress Tester):** Disable JS → hero video is black screen; form submit offline → false success state
- **Casey (Mobile):** 7 form fields feel long on mobile; spec table needs horizontal scroll
