# Daswell.com — Behaviors

Site type: WordPress + Kadence theme marketing site. Mostly static content with a
few interactions. No smooth-scroll library (Lenis/Locomotive) detected — native scroll.

## Header (sticky)
- Class `header-desktop-sticky header-tablet-sticky header-mobile-sticky` → Kadence Pro JS sticky.
- Initial: white background, height ~109px, logo 240×42, top nav row + utility row.
- On scroll: header sticks to top (`position: fixed/sticky`, top 0), stays white with subtle shadow.
- **Clone approach:** `position: sticky; top: 0; z-index: 50` with white bg + `box-shadow` after scroll>20px (small JS scroll listener toggling a class). Transition 0.3s.

## Hero
- **It is a `<video>`**, not an image. `src=/videos/2026/01/banners.mp4`, autoplay, loop, muted, playsInline.
- 1440×800 desktop, `object-fit: cover`, full-bleed (alignfull).
- Overlay: heading "DASWELL, Your Partner for Construction Equipment & Powder Processing" + 2 red CTA buttons ("Construction Equipment", "Powder Processing" / "View Construction", "View Powder").
- Button bg `rgba(196,0,0,0.7)`, radius 3px.

## Navigation mega-menu
- Top nav items with dropdown submenus (Cases, Construction Machinery, Powder Processing, Crusher, News have children). Hover/click to open.
- **Clone approach:** hover-triggered dropdown menus (desktop), off-canvas hamburger (mobile).

## Card hover (category / product cards)
- Card titles use transition `0.3s cubic-bezier(0.17,0.67,0.35,0.95)`, cursor pointer.
- Typical Kadence behavior: image zoom (scale 1.05) on hover, title color → red. (Apply subtle scale + red title on hover; transition 0.3s.)

## Sections (home, top→bottom)
1. Hero video + CTAs
2. Construction Equipment — 6 product cards (image + title), "View Construction" link
3. Powder Processing — 6 product cards, "View Powder" link
4. Global Success Stories — gray bg #f8f9fa, 5 case cards + "View All Cases"
5. Why Choose Daswell (feature list) + Daswell Global Branches (image grid)
6. Request a Quote contact form
7. Footer (dark)

## Responsive
- Desktop 1440: multi-column grids (cards 3-up typical).
- Tablet 768: grids reduce to 2-up; nav collapses toward hamburger.
- Mobile 390: single column stack; hamburger menu; hero text smaller.
- Breakpoints: Kadence default ~1024 (tablet), ~767 (mobile).

## Footer
- Dark `rgba(22,22,22,0.9)`, text #f8f9fa.
- Link columns (Construction Machinery / Crushing & Screening / Powder Processing / About Us / Cases / Become Distributor / WhatsApp / Email).
- Copyright: "© 2009-2026 @ Daswell Group co., Ltd".
