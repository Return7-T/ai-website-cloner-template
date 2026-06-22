@AGENTS.md

# Design Context

## Surface
- **Register:** Brand (marketing) — KEWAN construction equipment website
- **Users:** Construction professionals, contractors, equipment buyers globally
- **Purpose:** Showcase machinery, demonstrate reliability via real case studies, generate qualified leads

## Brand
- **Personality:** Professional · Reliable · Global
- **Creative North Star:** "Solid & Substantial"
- **Style:** Clean & Professional — cool-toned neutrals, system Arial stack, 3px radius signature
- **Anti-references:** Avoid cheap/rough templates, SaaS clichés, outdated 2000s industrial sites
- **Palette:** Bright Industrial Blue (oklch(0.43 0.15 260)) — shifted from deep navy (#0f2b52) to a cleaner, brighter blue. Brand-dark: oklch(0.33 0.13 260). Cool-toned neutral system (off-white oklch(0.95 0.012 255), border oklch(0.9 0.015 258)).

## Design Principles
1. Trust through precision — every pixel conveys competence
2. Substance over flash — real equipment, real data, no decoration for its own sake
3. Depth on demand — progressive disclosure from landing → product detail → quote
4. Global reach, local relevance — real teams in real locations
5. Bold but not brash — industrial strength without aggression

## Files
- `PRODUCT.md` — strategic design document (register, users, brand, principles)
- `DESIGN.md` — visual system documentation (tokens, typography, elevation, components, rules)
- `.impeccable/design.json` — sidecar for live panel (component HTML/CSS, tonal ramps, narrative)
- `.impeccable/live/config.json` — live mode pre-configured for Next.js App Router
