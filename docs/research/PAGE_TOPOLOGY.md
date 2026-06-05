# Daswell.com — Page Topology

Three pages. Shared chrome: **Header** (sticky) + **Footer** (dark) + **Request a Quote** form
appear on all pages. WordPress/Kadence; content max-width 1500px.

## Shared chrome
- **Header** (sticky, white, 109px): logo left; top utility row (locations, search, Get a Quote, WhatsApp); main nav row with mega-menu dropdowns. Mobile: hamburger → off-canvas.
- **Contact form** ("Request a Quote"): appears above footer site-wide. Fields: Name, Email*, Phone/WhatsApp, Country, Company Name, Product, Message*. Submit "Send A Message".
- **Footer** (dark rgba(22,22,22,0.9)): link columns + copyright "© 2009-2026 @ Daswell Group co., Ltd".

## Page 1: Home (`/`)
Layout: single scroll column, full-bleed hero, contained sections.
1. **Hero** — full-bleed `<video>` (banners.mp4), overlay heading + 2 red CTA buttons. ~800px.
2. **Construction Equipment** — H2 center; 6 cards (image+title, link); "View Construction" button. Grid 3-up.
3. **Powder Processing** — H2 center; 6 cards; "View Powder" button. Grid 3-up.
4. **Global Success Stories** — gray bg #f8f9fa; H2 + "View All Cases"; 5 case cards (image + title + year). 
5. **Why Choose Daswell** — feature list (icon + title + text, ~6 items) AND **Daswell Global Branches** — image grid of branch photos.
6. Contact form (shared).
7. Footer (shared).

Interaction model: all **static** except hero video autoplay, sticky header, hover zoom on cards, mega-menu dropdowns.

## Pages 2 & 3: Product template (`/concrete-pumps/concrete-mixer-pump/`, `/concrete-pumps/trailer-concrete-pump/`)
SAME template, different data. Layout: contained content column ~max 1290px.
1. **Breadcrumb** — Home » Concrete Pumps » <Product>.
2. **Product hero/intro** — H1 + lead paragraphs + key specs (capacity, power) + product image + CTA buttons (Message, Send Email, PDF Download).
3. **Feature section(s)** — H2 + paragraphs + grouped components list (Power/Hydraulic, Mixing/Delivery, Control/Safety) with images.
4. **5 Reasons** — H2 + numbered/bulleted reasons list.
5. **Buying considerations** — H2 + bulleted list, related product cards (Concrete Trailer Pump / Boom Pump / Mixer Pump).
6. **Support & Service** — H2 + 2 columns (pre-purchase / after-sale) bulleted lists.
7. **FAQ** — H2 + Q&A (accordion).
8. **Technical Data** — H2 + spec table (Parameter/Unit/models).
9. **Projects** — H2 "Daswell Concrete Machinery Projects" + case cards grid.
10. **Blogs** — H2 + blog cards grid.
11. Contact form (shared).
12. Footer (shared).

Interaction model: static + FAQ accordion + hover on cards + sticky header.

## Build strategy
- Shared: `SiteHeader`, `SiteFooter`, `RequestQuote`, `icons.tsx`.
- Home: `HeroVideo`, `ProductCategoryGrid` (reused for Construction + Powder), `SuccessStories`, `WhyChoose`, `GlobalBranches`.
- Product: one `ProductPage` template + per-product data file in `src/data/`. Subcomponents: `ProductIntro`, `FeatureBlock`, `SpecTable`, `FaqAccordion`, `RelatedProducts`, `ProjectGrid`, `BlogGrid`.
- Routing: `app/page.tsx` (home), `app/concrete-pumps/[product]/page.tsx` (dynamic, generateStaticParams for the 2 slugs) OR two static routes. Use dynamic segment with data lookup.
