<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app/
    [locale]/      # Locale-prefixed routes (/en, /zh)
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  data/
    *.ts            # English (default) content
    zh/             # Chinese content mirrors
    get-content.ts  # Locale-aware content accessors
  i18n/             # Locales, path helpers, UI dictionaries
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## Internationalization (i18n) — REQUIRED for every content change
- **Locales:** `en` (default), `zh`. Routes are `/en/...` and `/zh/...` (proxy redirects bare paths).
- **When changing any user-visible text, UI string, nav label, product copy, or form label:** update **all locales** in the same change — English under `src/data/*.ts` / `src/i18n/dictionaries.ts`, Chinese under `src/data/zh/*` and the `zh` dictionary.
- **Internal links** in data stay locale-agnostic (e.g. `/concrete-pumps/...`). Use `localizeHref(href, locale)` from `src/i18n/path.ts` when rendering. Never hardcode `/en` or `/zh` in content files.
- **New pages** go under `src/app/[locale]/...` and must load content via `get*Content(locale)` / `getDictionary(locale)`.
- **Language switcher** lives in the site header (desktop + mobile). Keep it on every local page shell.

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.
- **Always ship content changes in every supported locale** (currently en + zh).

@docs/research/INSPECTION_GUIDE.md
