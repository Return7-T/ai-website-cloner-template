# Daswell.com — Design Tokens

Source: getComputedStyle extraction across home + 2 product pages (Sept 2024 snapshot).
WordPress + Kadence theme. Font is a system Arial stack — NO web font to load.

## Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand red | `#f51f1f` rgb(245,31,31) | logo text, accents, links, active states |
| Hero CTA red | `rgba(196,0,0,0.7)` | hero overlay buttons |
| Dark red (hover) | `#c40000` rgb(196,0,0) | button hover |
| Foreground | `#000000` | body text, headings |
| Muted text | `rgba(0,0,0,0.6)` | secondary text |
| Off-white | `#f8f9fa` rgb(248,249,250) | page bg, gray section bg, button text |
| White | `#ffffff` | cards, header bg |
| Footer dark | `rgba(22,22,22,0.9)` | footer bg |
| Gray 119 | `#777777` | misc muted |
| Black CTA | `#000000` | header "Get a Quote" button bg |

## Typography
- **Family:** `Arial, Helvetica, sans-serif` (system — no @font-face)
- **Base body:** 17px / line-height 34px / weight 400
- **H2 section title:** 28px / 42px / weight 700 / text-align center / text-transform capitalize / margin 0 0 14px
- **H3 card title:** 20px / 30px / weight 700 / center / capitalize / margin-top 5px
- **Nav links:** 17px / 34px / weight 400
- **Header CTA button text:** 14.4px / 23.04px / letter-spacing 0.5px / capitalize
- **Hero button text:** 26.4px / 42.24px

## Spacing / Layout
- **Global content max-width:** 1500px (`--global-content-width`)
- **Inner section max-width:** ~1290px typical Kadence row, content padded 24px
- **Header height:** 109px, sticky on scroll
- **Header inner padding:** 24px
- **Section vertical rhythm:** rows ~ padding 40-60px top/bottom

## Buttons
- **Header "Get a Quote":** bg #000, color #f8f9fa, padding 5.76px 14.4px, radius 3px, font 14.4px, transition 0.3s ease-in-out, capitalize, letter-spacing 0.5px
- **Hero buttons:** bg rgba(196,0,0,0.7), color #f8f9fa, padding 10.56px 26.4px, radius 3px, font 26.4px
- **Generic CTA radius:** 3px

## Transitions
- Buttons: `0.3s ease-in-out`
- Card titles / hover: `0.3s cubic-bezier(0.17, 0.67, 0.35, 0.95)`

## Border radius
- Buttons: 3px
- Cards: ~6-8px (verify per component)

## Favicon
- `/seo/cropped-8011448-32x32.jpg` (32), `-192x192.jpg`, apple `-180x180.jpg`
