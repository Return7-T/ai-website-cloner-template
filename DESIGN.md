---
name: KEWAN Built for Construction
description: Industrial B2B construction equipment brand site — Clean & Professional with a bright industrial blue anchor
colors:
  primary: "oklch(0.43 0.15 260)"
  primary-hover: "oklch(0.33 0.13 260)"
  primary-foreground: "#ffffff"
  secondary: "oklch(0.38 0.11 262)"
  secondary-foreground: "#ffffff"
  muted-bg: "oklch(0.95 0.012 255)"
  muted-foreground: "rgba(26,26,26,0.7)"
  offwhite: "oklch(0.95 0.012 255)"
  foreground: "#1a1a1a"
  background: "#ffffff"
  border: "oklch(0.9 0.015 258)"
  footer-bg: "oklch(0.43 0.15 260)"
  hero-cta: "oklch(0.43 0.15 260 / 0.86)"
  destructive: "oklch(0.577 0.245 27.325)"
  tonal-10: "oklch(0.2 0.10 260)"
  tonal-20: "oklch(0.3 0.12 260)"
  tonal-30: "oklch(0.4 0.14 260)"
  tonal-40: "oklch(0.5 0.13 260)"
  tonal-50: "oklch(0.6 0.11 260)"
  tonal-60: "oklch(0.7 0.08 260)"
  tonal-70: "oklch(0.8 0.05 260)"
  tonal-80: "oklch(0.9 0.025 260)"
typography:
  display:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  heading:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 42px
    textTransform: capitalize
    textAlign: center
  title:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 30px
    textTransform: capitalize
    textAlign: center
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 34px
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "14.4px"
    fontWeight: 500
    letterSpacing: "0.5px"
rounded:
  sm: "3px"
  md: "6px"
  lg: "8px"
spacing:
  section: "64px"
  container: "24px"
  card: "20px"
  grid-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.sm}"
    padding: "10.56px 26.4px"
    fontFamily: "{typography.body.fontFamily}"
    fontSize: "26px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "10.56px 26.4px"
  card-default:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
    shadowStrategy: "ambient-low"
  input-field:
    backgroundColor: "{colors.offwhite}"
    borderColor: "{colors.border}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "52px"
  input-field-focus:
    borderColor: "{colors.primary}"
  nav-link:
    textColor: "{colors.foreground}"
    hoverTextColor: "{colors.primary}"
    fontWeight: 400
    fontSize: "15px"
  footer-link:
    textColor: "rgba(248,249,250,0.9)"
    hoverTextColor: "#ffffff"
    fontSize: "15px"
---

# Design System: KEWAN Built for Construction

## 1. Overview

**Creative North Star: "Solid & Substantial"**

KEWAN's visual system is engineered for clarity and trust — a clean, professional industrial aesthetic that lets the equipment speak for itself. Every layout decision prioritizes legibility, every color choice reinforces competence, and every component feels deliberately placed, never decorative.

This is not a flashy brand. There are no gradients, no glassmorphism, no floating CTAs. The system rejects the tropes of SaaS landing pages and the clutter of outdated industrial sites in equal measure. What remains is purposeful, well-spaced, substantive: the design equivalent of well-maintained heavy machinery.

The bright industrial blue (oklch(0.43 0.15 260)) anchors the brand with authority without heaviness — a deliberate shift from the previous deep navy (#0f2b52) based on user feedback that it felt too dark.

### Key Characteristics:
- **Clean & Professional** — generous white space, simple grid layouts, minimal adornment
- **Substance-forward** — real product imagery, actual spec data, genuine case studies
- **Approachable industrial** — 3px radius on controls (neither sharp nor pill-soft), system sans-serif for universal readability
- **Depth-on-demand** — flat at rest, gentle shadows on hover and elevated states
- **Global without being generic** — real photos of real teams in real locations

## 2. Colors

The palette revolves around a single blue anchor (primary), supported by a clean neutral system and muted accents. Warmth is absent by design: this is an industrial B2B brand, not a hospitality or consumer site.

### Primary
- **Industrial Blue** (oklch(0.43 0.15 260)): Primary brand color for buttons, key CTAs, the header logo area, accent links, year badges on case cards, the footer background, and brand signature elements. A bright, clean blue that conveys confidence without heaviness. Shifted from the previous deep navy (#0f2b52) which read as too dark.

### Secondary
- **Steel Blue** (oklch(0.38 0.11 262)): Secondary surfaces — alternate buttons (WhatsApp CTA, hero secondary link), the dual-color section divider, hover states. Sits one step down from primary in both lightness and chroma.

### Neutral
- **White** (#ffffff): Page background, card surfaces, header background.
- **Off-White** (oklch(0.95 0.012 255)): Muted section backgrounds (Success Stories, Quote form), input field backgrounds. A cool-tinted light gray, slightly shifted toward the brand blue hue.
- **Near-Black** (#1a1a1a): Body text, primary headings.
- **Muted Text** (rgba(26,26,26,0.7)): Secondary descriptions, feature body copy.
- **Border** (oklch(0.9 0.015 258)): Input borders, card borders, subtle dividers. Cool-toned light blue-gray, harmonized with the primary blue hue.

### Feedback
- **Destructive** (oklch(0.577 0.245 27.325)): Error states, validation messages. A medium-saturation red.

### Named Rules

**The One Blue Rule.** The brand has one color anchor. Secondary and muted are tints and shades of the same hue family, not competing colors. The blue owns 100% of branded surfaces — no second accent color competes for attention.

**The No-Warmth Default.** Neutrals tilt cool (blue-gray, not cream or beige). This is intentional: warmth in an industrial context reads as unearned. When the brand needs warmth, it comes from imagery (people, job sites, real concrete) not from background tones.

## 3. Typography

**Display & Body Font:** Arial, Helvetica, sans-serif (system stack — no web font loaded)

The site uses one system sans-serif for everything. This is a deliberate choice for a global industrial brand: no font-loading delay, perfect rendering on any device, and maximum legibility across languages and regions. The site communicates through content and spacing, not through typeface novelty.

### Hierarchy
- **Display** (700, clamp(1.5rem, 5vw, 2.5rem), 1.2): Hero headings. Large, bold, commanding. `text-wrap: balance` applied for even line lengths.
- **Heading / H2** (700, 28px, 42px): Section titles. Always center-aligned, title-case, with the colored divider below. `text-wrap: balance`.
- **Title / H3** (700, 20px, 30px): Card titles. Center-aligned on product cards, left-aligned on case study cards. Title-case. Transitions to brand blue on card hover.
- **Body** (400, 17px, 34px): All paragraph content. Generous line-height (2×) provides readability for the longer product descriptions.
- **Label / Small** (500, 14.4px, letter-spacing 0.5px): Header CTA buttons, small UI labels.

### Named Rules
**The One-Family Rule.** One typeface, used across all roles. Hierarchy is carried by weight (400/500/700), size, and spacing — not by font switching. This is a constraint that reinforces the brand's industrial straightforwardness.

**The 34px Line-Height Rule.** Body copy at 17px with 34px line-height (2×) is the site's most distinctive typographic signature. The generous leading gives long product descriptions room to breathe and sets KEWAN apart from denser industrial sites.

## 4. Elevation

The system is predominantly flat. Depth is communicated through background tone layering (white surfaces on off-white section backgrounds), not through shadows. Shadows are reserved for interactive feedback (hover states) and floating UI (dropdown menus, modal overlay).

**Flat-by-default, shadow-on-demand.**

### Shadow Vocabulary
- **Ambient low** (`box-shadow: 0 1px 3px rgba(0,0,0,0.08)`): Card default state. The faintest shadow separates cards from the page without calling attention.
- **Elevated** (`box-shadow: 0 4px 16px rgba(0,0,0,0.12)`): Card hover, dropdown menus. A clear but restrained lift that signals interactivity.
- **Header base** (`box-shadow: 0 1px 3px rgba(0,0,0,0.08)`): Sticky header at rest.
- **Header scrolled** (`box-shadow: 0 4px 12px rgba(0,0,0,0.1)`): Sticky header after scroll, providing subtle separation from page content.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to interaction (hover, scroll). The page reads as calm and substantive until the user engages with it.

## 5. Components

### Buttons

KEWAN uses two button styles. The shadcn/ui Button component (rounded-lg at 8px) is available for internal/app uses. The site's marketing pages use a 3px-radius branded button.

- **Shape:** Gently rounded — 3px radius (`--radius: 0.1875rem`) for marketing CTAs, 8px (rounded-lg) for the shadcn/ui Button component.
- **Primary (Hero CTA):** Background `--brand` (oklch(0.43 0.15 260)) at 86% opacity for hero overlays (var(--hero-cta)), white text, 10.56/26.4px padding, 26px font size. Hover: darken to `--brand-dark` (oklch(0.33 0.13 260)) via 0.3s ease-in-out opacity transition.
- **Secondary (WhatsApp, outline):** Background `--secondary` (oklch(0.38 0.11 262)), white text, same 3px radius. Hover: opacity 90%.
- **Ghost/Link (nav, inline):** No background, brand-blue text on hover. The section-level "View All" links use `bg-brand` with an arrow icon.
- **Header CTA:** Background `--brand` (oklch(0.43 0.15 260)), white text, 5.76/14.4px padding, 3px radius, 14.4px / letter-spacing 0.5px. Compact for the header row.

### Cards

Used for product categories and case studies. Cards are a deliberate last-resort layout pattern — used only where the grid of images + titles is the clearest affordance for scanning equipment offerings.

- **Shape:** 6px rounded (rounded-md), overflow-hidden on the image container.
- **Background:** White (#ffffff).
- **Shadow strategy:** Default `shadow-sm` (ambient low), hover `shadow-lg` (elevated), transition duration 300ms.
- **Image:** 16:9 aspect ratio, `object-fit: cover`. On hover, image scales to 1.06× with 0.4s `cubic-bezier(0.17, 0.67, 0.35, 0.95)`.
- **Title treatment:** H3 (20px/30px, bold, capitalize). On hover, title transitions to `--brand` (oklch(0.43 0.15 260)) in 0.3s with the same bezier curve.
- **Case study variant:** Horizontal card (image left, text right on desktop, stacked on mobile). Year badge overlay top-left in brand blue.

### Inputs / Fields

Used in the Request a Quote form (site-wide, above footer).

- **Style:** Cool-tone border (`--border: oklch(0.9 0.015 258)`) on off-white background (`--offwhite: oklch(0.95 0.012 255)`), 3px radius, 52px height for single-line fields.
- **Text:** 16px body text, `--foreground` (#1a1a1a) when filled, placeholder inherits default muted.
- **Focus:** Border shifts to `--brand` (oklch(0.43 0.15 260)), outline removed.
- **Textarea:** Same treatment, 5 rows, 12px padding.
- **Submit button:** Full-width (sm:col-span-2), 52px height, `--brand` background, white text, hover shifts to `--brand-dark`.
- **Success state:** Post-submission, the form collapses to a centered thank-you message in brand blue.

### Navigation (SiteHeader)

The header is the most interactive component on the site.

- **Structure:** Sticky top bar (white, 109px) with logo left, navigation right, CTA buttons far right. Mobile: hamburger icon → off-canvas drawer.
- **Logo:** Height 48px, auto-width, object-contain.
- **Nav links:** 15px font, 400 weight, black text. Hover → brand blue. Desktop shown as inline items with dropdown chevrons; mobile rendered as `<details>` accordion items.
- **Dropdown menus:** Hover-triggered on desktop (invisible → visible with translate-y + opacity, 200ms transition), 260px min-width, white bg, shadow-elevated. Child links: 14px, black/80 text, hover → brand blue on off-white bg.
- **Mobile menu:** Full-viewport overlay (black/50 backdrop), 85% width drawer from right, scrollable. Logo + close button at top, accordion nav items, CTA buttons at bottom. z-index 100.
- **Scroll behavior:** `position: sticky; top: 0`. Default shadow: shadow-sm. After 20px scroll: shadow-md transition.
- **CTA buttons:** "Get a Quote" (bg-brand) and "WhatsApp" (bg-secondary), both rounded-[3px], 14.4px font, medium weight.

### Footer (SiteFooter)

- **Background:** `--footer` (oklch(0.43 0.15 260) / brand blue), text in off-white.
- **Layout:** 3-column responsive grid (collapses to 2 → 1). Link lists with icons (WhatsApp → MessageCircle, Email → Mail, others → CheckCircle2).
- **Copyright bar:** Top-border white/15, flex row, copyright text + privacy link at right.

### Section Divider

A distinctive element: two 3px-high colored bars (brand-dark + secondary) filling 144px total width, centered. Appears below every H2 section title.

### Hero

Full-bleed video background (16:9 area, 68vh min 460px / 800px desktop). Overlay gradient at 25% black for text contrast. Heading bottom-left aligned, CTA buttons below. Video auto-plays muted.

## 6. Do's and Don'ts

### Do:
- **Do** use the 3px radius on all marketing CTAs, inputs, and interactive elements. It's the site's tactile signature.
- **Do** use the cool-toned neutral system (off-white oklch(0.95 0.012 255) backgrounds, oklch(0.9 0.015 258) borders). Keep backgrounds cool, not warm.
- **Do** center all H2 section titles with the colored divider below. This is the site's section rhythm.
- **Do** use real product and project imagery. No stock photography, no abstract visuals.
- **Do** use the 34px line-height on body copy. It's expensive (2× the font size) but it's the site's signature readability choice.
- **Do** apply the image zoom + title color transition on card hover (0.4s cubic-bezier curve).
- **Do** use `text-wrap: balance` on H1–H3 for even line lengths.

### Don't:
- **Don't** use gradient text (`background-clip: text` with a gradient). Decorative and never appropriate for an industrial brand.
- **Don't** use glassmorphism, blurs, or "glass card" effects. This is heavy equipment, not a nightclub.
- **Don't** add a second accent color. The brand owns its blue; no competing accent.
- **Don't** use card grids as the default layout. Cards are for product grids only — the Why Choose section uses a flat feature list.
- **Don't** use side-stripe borders (border-left/right >1px as an accent). Use the colored section divider instead.
- **Don't** use small uppercase tracked "eyebrow" text above section headings. No "ABOUT" or "PRODUCTS" kickers.
- **Don't** use numbered section markers (01 / 02 / 03) as scaffolding.
- **Don't** use warm-toned backgrounds (cream, sand, beige). KEWAN's neutral system is cool-toned intentionally.
- **Don't** let body text drop below 4.5:1 contrast ratio against its background. The muted text at 70% opacity on white passes, but nothing lighter.
- **Don't** use hero-metric templates (big number + small label + gradient accent). That's a SaaS cliché, not industrial branding.
- **Don't** ship a section with no motion at all — but also don't gate content visibility behind a reveal animation. Entrance transitions enhance, they don't enable.
