# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Next.js Turbopack)
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Next.js 16 App Router site for HSE Solutions (industrial safety consulting). Spanish-language content.

**Routing** — `src/app/` uses file-system routing: `/`, `/acerca`, `/servicios`, `/contacto`, `/privacidad`, `/terminos`. Each route has its own `page.tsx` + `page.module.css`.

**Component layers:**
- `src/components/sections/` — full-width page sections (Hero, ServicesGrid, IndustriesGrid, etc.) composed inside pages
- `src/components/` — reusable UI primitives (Button, ServiceCard, Tabs, Timeline, etc.)
- Each component lives in its own folder with a co-located `.module.css`

**Data** — static content lives in `src/data/*.ts` (services, industries, showcase items, site metadata). Pages import from these files rather than embedding data inline. `src/data/site.ts` exports `SITE` and `NAV` constants used across layout, header, and footer.

**Styling** — CSS Modules per component. Global tokens (colors, fonts, spacing) in `src/app/globals.css`. Fonts: Poppins (headings, `--font-poppins`) and Lato (body, `--font-lato`) loaded via `next/font/google`.

**Animations** — Framer Motion for entrance animations on section components.

**Client boundary pattern** — Server components delegate interactive subtrees to a `*Client.tsx` sibling ("use client"). State lives in the client wrapper, not inside individual leaf components. Example: `ShowcaseGrid.tsx` → `ShowcaseGridClient.tsx`.

**Modals** — Use `ReactDOM.createPortal` to `document.body`. Guard with `useSyncExternalStore` (not `useState` + `useEffect`) for SSR-safe mounting — avoids the `react-hooks/set-state-in-effect` ESLint error.

**Icons** — FontAwesome (solid + brands) via `@fortawesome/react-fontawesome`. Auto-CSS injection is disabled; styles are imported manually in `layout.tsx`.

**Images** — `next/image` with remote patterns for `images.unsplash.com` and `picsum.photos`. Local assets in `public/`.

**Third-party widgets in tabs** — When a widget (e.g. Calendly) lives inside a tab panel, use a `"use client"` component with `useEffect` to call the widget's JS init function on mount. Load the external script with `<Script strategy="lazyOnload" onLoad={...} />` as fallback for first load.

**Tab ↔ URL sync** — Use `useRouter`, `usePathname`, `useSearchParams` + `router.replace(..., { scroll: false })` to reflect active tab in a `?tab=<id>` param. Validate the param against known tab ids before using it.
