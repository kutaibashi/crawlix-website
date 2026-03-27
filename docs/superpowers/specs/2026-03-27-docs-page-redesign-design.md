# Docs Page Redesign — Design Spec

**Date:** 2026-03-27
**Scope:** Full rewrite of `/docs` page — content accuracy audit, design alignment with editorial style, missing feature coverage.

---

## Goals

1. **Content accuracy** — fix incorrect claims, update numbers, verify all features against codebase
2. **Design alignment** — match the clean editorial style established by comparison pages
3. **Feature coverage** — add missing doc sections for Log Analysis, Browser Extension, Mobile Crawling
4. **Remove dead patterns** — no glass cards, icon containers, connector lines, decorative pills, node-graph backgrounds

## Design Principles

Follow the editorial style from `ComparisonLayout.astro` (the individual comparison pages like `/compare/screaming-frog`), **not** `compare/index.astro` (which still uses node-graph backgrounds and glass cards). The individual comparison pages are the reference:

- `max-w-5xl` container width (not `max-w-7xl`)
- `py-14` section padding
- `border-t border-slate-800/30` section dividers
- Left-aligned content (not centered)
- Deep navy background `#040c1e` — wrap all content in `<div style="background: #040c1e;">` for continuous background (matching ComparisonLayout.astro line 33)
- Cyan `#22d3ee` as brand accent (all CTAs use this, not `bg-sky-600`)
- Green `#34d399` for positive values
- No glass cards (`backdrop-blur`, `bg-[#0e2655]/50`)
- No icon containers (colored square with icon inside)
- No identical card grids
- No decorative elements (dot grids, connector lines, node graphs)
- Simple tables, text lists, clean typography

## Files Changed

- `src/pages/docs/index.astro` — full rewrite
- `src/data/docs.ts` — content updates + new sections

## Page Structure (5 sections)

### Section 1: Hero

- Background: `radial-gradient(ellipse 60% 50% at 50% 40%, #0c2340, #040c1e)`
- `max-w-5xl`, left-aligned
- Breadcrumb: `Home > Docs` in `text-sm text-slate-600`
- Title: "Crawlix Documentation" — `text-3xl sm:text-4xl lg:text-5xl font-bold text-white`
- No gradient text effect — plain white
- Subtitle: "Everything you need to master website auditing. From your first crawl to advanced automation and integrations." — `text-lg text-slate-400`
- Stats line: `{articleCount}+ articles · {sectionCount} topics · 100+ SEO checks` — dynamically calculated from `docSections` data. **Note:** actual count in `seo-analyzer-v2.ts` is 102 checks, so "100+" is accurate. The comparison pages incorrectly claim "134+" — that's a separate fix outside this spec's scope.
- CTA button: "Download Crawlix" in cyan `bg-[#22d3ee] text-slate-900 hover:bg-[#67e8f9]`
- **Removed:** search bar, pill badge ("Documentation"), node-graph background

### Section 2: Popular Topics

- `py-14`, `max-w-5xl`, `border-t border-slate-800/30`
- Label: "Popular" — `text-sm font-medium text-slate-500 uppercase tracking-wide`
- Single row of 6 inline text links separated by ` · ` midots
- Link style: `text-cyan-400 hover:text-white transition-colors`
- Pro features get `(Pro)` suffix in `text-slate-600`
- Topics: Your First Crawl · JavaScript Rendering (Pro) · Core Web Vitals · PDF Reports (Pro) · Custom Extraction · Google Analytics (Pro)
- **Removed:** icon containers, colored badges, 6-column grid

### Section 3: Browse by Topic

- `py-14`, `max-w-5xl`, `border-t border-slate-800/30`
- Heading: "Browse by Topic" — `text-2xl font-bold text-white`
- Two-column text grid: `grid md:grid-cols-2 gap-x-12`
- Each topic row:
  - Title: `font-semibold text-white` + article count in `text-slate-500` (e.g., "SEO Checks (100+) · 9 articles")
  - Description: `text-sm text-slate-400 mt-1`
  - Divider: `border-t border-slate-800/30` below each row, `py-4` vertical spacing
  - Pro/Agency indicator: inline `(Pro)` in `text-violet-400` or `(Agency)` in `text-amber-400` after title
- No icons, no card backgrounds, no hover effects on containers
- Collapses to single column on mobile
- Links to topic slug (e.g., `/docs/getting-started`)

**Content: 17 topic sections (3 new)**

Existing (14, with fixes):
1. Getting Started — 5 articles (installation, first crawl, dashboard, shortcuts)
2. Crawl Configuration — 6 articles (settings, scope, performance, user agents, filtering)
3. SEO Checks (100+) — 9 articles (was "97+", actual count is 102 in `seo-analyzer-v2.ts`)
4. JavaScript Rendering — 6 articles (Pro)
5. Core Web Vitals — 5 articles
6. Custom Extraction — 6 articles
7. Integrations — 4 articles (Pro)
8. Exports & Reports — 5 articles
9. White-Label Branding — 4 articles (Agency)
10. Scheduled Crawls — 4 articles (Pro)
11. AI Search Readiness — 3 articles
12. Licensing — 5 articles
13. Data & Privacy — 4 articles
14. Troubleshooting — 5 articles

New sections (3):

15. **Log Analysis** — 4 articles. Source: `packages/log-parser/src/parser.ts`
    - "Importing Server Logs" — upload Apache Combined, Nginx, Cloudflare JSON formats; auto-detection
    - "Bot Detection & Analysis" — classify crawlers (Googlebot, Bingbot, AI bots), traffic breakdown
    - "URL Hit Aggregation" — per-URL stats: total hits, bot vs human, status code distribution
    - "Log Analysis Dashboard" — views and filtering in the desktop app

16. **Browser Extension** — 3 articles. Source: `apps/extension/`
    - "Installing Quick Audit" — Chrome extension setup and permissions
    - "Instant Page Analysis" — on-page SEO checks, meta tags, schema detection, link counts
    - "Syncing with Desktop" — send Quick Audit results to Crawlix Desktop via localhost API (port 3321)

17. **Mobile Crawling** — 4 articles (Pro). Source: `packages/crawler/src/mobile-crawler.ts`
    - "Enabling Mobile Crawling" — viewport emulation (iPhone 14, Pixel 8), touch events, mobile user agents
    - "Mobile Usability Scoring" — tap target size, font readability, content viewport fit, horizontal scroll
    - "Network Throttling" — 3G/4G simulation for realistic mobile performance testing
    - "Desktop vs Mobile Comparison" — content diff between desktop and mobile rendering

### Section 4: Quick Reference — Default Settings

- `py-14`, `max-w-5xl`, `border-t border-slate-800/30`
- Heading: "Quick Reference" — `text-2xl font-bold text-white`
- Subtitle: "Default crawler settings" — `text-slate-400 mt-1`
- Simple `<table>` with no wrapper card
- Two columns: setting name (`text-slate-400`) | value (`font-mono text-white text-right`)
- Row dividers: `border-b border-slate-800/30`
- Group subheadings: `text-slate-300 font-medium` rows spanning full width
- Groups: Page Limits, Crawl Settings, Performance, User Agent
- Data sourced from `crawlerDefaults` in `docs.ts`
- **Removed:** glass card wrapper, 4-column grid layout, icon

### Section 5: FAQ

- `py-14`, `max-w-5xl`, `border-t border-slate-800/30`
- Heading: "Frequently Asked Questions" — `text-2xl font-bold text-white`
- `<details>` accordion elements
- Each question separated by `border-t border-slate-800/30` (not card borders)
- No background color on items
- Summary: `text-white font-medium`, chevron rotates on open
- Answer: `text-slate-400 leading-relaxed`
- **Removed:** numbered badges, category pills, `bg-[#0e2655]/50` backgrounds
- **No help CTA section** — footer has contact/download links

**FAQ content fixes:**
- "97+ checks" → "100+ checks"
- Device limits: "Each license is permanently bound to one device" → "Free: 1 device. Pro: 3 devices. Agency: 5 devices. Deactivate old devices to free slots."
- No "cancel anytime" or "money-back guarantee" — use "14-day refund policy" only if referencing refunds
- Keep pricing accurate: $149/yr Pro, $399/yr Agency annual; $249 Pro, $699 Agency perpetual

## Removed Elements

| Element | Reason |
|---------|--------|
| Search bar + client-side JS (17 hardcoded items) | Links to non-existent pages, misleading UX |
| Quick Start section (5-card row with connector lines) | Redundant with Getting Started topic section |
| "30+ Analysis Views" pill badge wall | Decorative, no navigation value |
| Help CTA gradient card | Footer already has contact/download |
| `gradient-text-blue` CSS | Replaced by plain white title |
| Icon containers in topic grid | AI cliché pattern |
| Glass card backgrounds | Not editorial style |
| Scroll animation JS (IntersectionObserver) | Unnecessary decoration |
| Client-side search JS + Cmd+K keyboard shortcut | Search bar removed |
| `sectionColors` array | No longer used (no colored card headers) |
| `badgeStyles` object | Replaced by inline text suffixes |
| `dashboardViews` export usage | Section removed |
| `iconMap` and icon imports | No icons in topic list |

## Data File Changes (docs.ts)

- Add `logAnalysis` section with 4 articles (titles/slugs defined in Section 3 above)
- Add `browserExtension` section with 3 articles (titles/slugs defined above)
- Add `mobileCrawling` section with 4 articles (titles/slugs defined above)
- Update SEO Checks title: "97+" → "100+"
- Fix FAQ device limits answer
- Fix FAQ SEO checks count
- Update `quickStartSteps` step 4 from "97+" to "100+" (export kept since removal is out of scope — only used on this page but may be referenced by future pages)
- Remove `dashboardViews` export (no longer used on page)
- Remove `popularTopics` icon field (no longer rendered)
- Update `popularTopics` titles to match Section 2: "Your First Crawl", "JavaScript Rendering", "Core Web Vitals", "PDF Reports", "Custom Extraction", "Google Analytics"
- Keep `crawlerDefaults`, `aiCrawlers`

## Style Block

Keep:
- `details summary::-webkit-details-marker { display: none; }` — hides native marker for custom chevron
- `details[open] summary` border style — visual feedback on open state

Remove:
- `.gradient-text-blue` — no longer used
- `#docs-search:focus + kbd` — search bar removed

The FAQ chevron rotation uses Tailwind's `group-open:rotate-90` on the chevron icon, with `group` class on the `<details>` element. No custom CSS needed for this.

## Script Block

Remove the entire `<script>` block:
- IntersectionObserver scroll animations — removed
- Cmd+K keyboard shortcut — search bar removed
- Client-side search functionality — search bar removed
- Click-outside and Escape handlers — search bar removed

The new page has no client-side JavaScript. `<details>` accordion is native HTML.

## Accessibility

- Skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>`
- `id="main-content"` on Browse by Topic section
- Semantic HTML: `<nav>` for breadcrumb, `<section>` for each block, `<table>` for reference, `<details>` for FAQ
- `prefers-reduced-motion`: no animations to worry about (all scroll animations removed)
- Keyboard: `<details>` elements natively keyboard-accessible

## SEO

- Title: "Documentation - Crawlix SEO Crawler"
- Description: "Learn how to use Crawlix with comprehensive documentation covering 100+ SEO checks, Core Web Vitals, custom extraction, and more."
- Structured breadcrumb in markup
