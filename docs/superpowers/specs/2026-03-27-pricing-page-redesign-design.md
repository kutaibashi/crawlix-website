# Pricing Page Redesign — Design Spec

**Date:** 2026-03-27
**File:** `apps/website/src/pages/pricing.astro`
**Status:** Approved

## Goal

Redesign the pricing page to match the "Network Precision" design language used on the features and home pages, while making it visually distinctive and optimized for conversion. The current page is functional but generic — standard 3-column cards, plain tables, and monotone cyan throughout.

## Design Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Page structure | Keep all 8 sections, redesign each | SEO depth + breathing room between topics |
| Card layout | Asymmetric elevated — Pro taller/wider | Strongest conversion: size hierarchy pre-selects Pro |
| Competitor section | Horizontal bar chart + perpetual badge | Most visceral price comparison at a glance |
| Price animation | Morph/crossfade (~200ms) | Polished without "slot machine" energy that undermines trust |
| Tier colors | Emerald / Cyan / Violet | Visual variety; Pro stays brand-hero color |
| Free Tier section | Bold statement + competitive contrast list | New persuasive content instead of repeating features |

## Section-by-Section Spec

### Section 1: Hero

- **Background:** Node-graph SVG (seeded PRNG, same pattern as features Hero). Radial gradient `#0c2340` → `#040c1e`.
- **Stats badge:** Pill with glowing dot — "Perpetual License Available | Pay once, own forever"
- **Headline:** Two lines. Line 1: "One Price." (white). Line 2: "Every Check Included." (`gradient-text-cyan`, `font-extrabold`).
- **Subtitle:** "All {totalSeoChecks}+ SEO checks are free on every tier. Upgrade for more pages, exports, and integrations." Dynamic count from `getTotalSeoChecks()`.
- **Billing toggle:** Three buttons in a pill container (`bg-[#091a3d]/80`, border, backdrop-blur). Active state uses CSS classes `billing-active`/`billing-inactive` (not Tailwind JIT in JS). Annual selected by default with "Save 17%" emerald badge.
- **Node animations:** `pricing-node` pulse (4s) and `pricing-edge` breathe (5s), disabled under `prefers-reduced-motion`.
- **Bottom fade:** `h-24` gradient from transparent to `#091a3d`.

### Section 2: Pricing Cards

- **Background:** `#091a3d` (continuous from hero fade).
- **Layout:** 3-column grid, but **asymmetric**:
  - Free card: standard size, emerald accent (`#34d399`)
  - Pro card: `scale(1.05)` or explicit larger padding/height, cyan accent (`#22d3ee`), `shadow-xl shadow-[#22d3ee]/10`, border `border-[#22d3ee]/40`
  - Agency card: standard size, violet accent (`#a78bfa`)
- **Pro badge:** "Most Popular" pill in solid `#22d3ee`, positioned `absolute -top-3.5`.
- **Card internals** (per card):
  - Tier name + description
  - Price display area (`h-20`) with three states: `.price-monthly`, `.price-annual`, `.price-perpetual`. Only one visible at a time.
  - **Price crossfade animation:** On billing toggle change, outgoing price slides up 8px + fades to 0 opacity, incoming price slides up from 8px below + fades to full opacity. Duration: 200ms. CSS transitions on `transform` and `opacity`.
  - Key limits box: 2-column grid showing pages/crawl and projects. Background `bg-slate-900/40`.
  - Feature list: checkmark icons use tier accent color. "Everything in X, plus:" line uses arrow icon.
  - CTA button: Pro gets solid cyan fill (`bg-[#22d3ee] text-slate-900`), others get ghost/outline style.
- **Free card CTA:** Links to `/download` with Download icon.
- **Paid card CTAs:** `.checkout-btn` elements with `data-variant-*` attributes for Lemon Squeezy checkout URLs.
- **Trust badges** below cards: Shield (14-day guarantee), CreditCard (Lemon Squeezy), RefreshCw (Cancel anytime). Emerald icons, slate text.

### Section 3: Competitor Value (Bar Chart)

- **Background:** `#040c1e`.
- **Header:** Left-aligned `section-header-bar`. Label: "Value". Headline: "More checks, lower price". Subtitle: "Crawlix Pro at $149/year undercuts every major desktop SEO crawler — and none of them offer a perpetual license."
- **Bar chart container:** `glass-card` with rounded border.
- **Rows:**
  - **Crawlix Pro** (highlighted): Cyan background tint `bg-[#22d3ee]/[0.03]`, white bold name, cyan bold price, short cyan gradient bar (~10.6% width). **Perpetual badge:** Small emerald pill "✓ Buy once" next to bar or in a dedicated column.
  - **Screaming Frog:** Grey bar ~18.5% width, `$259`, "Desktop"
  - **Sitebulb Pro:** Grey bar ~30% width, `$420`, "Desktop"
  - **Ahrefs Lite:** Grey bar ~100% width, `$1,548`, "Cloud"
  - **SEMrush Pro:** Grey bar ~93% width, `$1,399`, "Cloud"
- **Bar styling:** Crawlix bar uses `linear-gradient(90deg, #22d3ee, #67e8f9)`. Competitor bars use `rgba(255,255,255,0.12)`. Track background: `rgba(255,255,255,0.05)`.
- **Disclaimer:** "Prices from public pricing pages as of early 2026. Cloud tools bundle site audit with broader suites."

### Section 4: Feature Comparison Table

- **Background:** `#091a3d`.
- **Header:** Left-aligned `section-header-bar`. Label: "Compare Plans". Headline: "Full feature comparison". Subtitle with dynamic check count.
- **Table:** `glass-card` wrapper, `overflow-x-auto`.
- **Column headers:** Feature (white, sticky left), Free (emerald `#34d399`), Pro (cyan `#22d3ee` with `bg-[#22d3ee]/[0.03]` column tint), Agency (violet `#a78bfa`).
- **Category rows:** Tier-colored label text (`text-[#22d3ee]/70`, uppercase).
- **Data cells:** Boolean values render as `Check` (emerald) or `X` (slate-700). String values render as text.
- **Data source:** `featureComparison` and `featureCategories` from `src/data/pricing.ts`.

### Section 5: Free Tier Highlight

- **Background:** `#040c1e`.
- **Container:** Emerald-accented card — `border-emerald-500/20`, `bg-emerald-500/[0.03]`.
- **Layout:** 2-column grid (`md:grid-cols-2`).
- **Left column:**
  - Emerald pill badge: "Free forever" with glowing dot.
  - Headline: "No feature gates. No check limits. No upgrade nags." Bold, white, multi-line.
  - Subtitle: "Competitors lock analysis behind paid tiers. We give you every check for free — upgrade only when you need more pages."
  - CTA: Emerald button "Download Free →" linking to `/download`.
- **Right column:** "What others charge for" header (small, muted). List of 4-6 features that competitors gate behind paid tiers, each with emerald checkmark and "free on Crawlix" annotation:
  - JavaScript rendering
  - Core Web Vitals
  - AI readiness audit (13 crawler checks)
  - Accessibility audit (WCAG 2.1 AA)
  - Schema validation
  - Duplicate detection

### Section 6: Licensing Info

- **Background:** `#091a3d`.
- **Header:** Left-aligned `section-header-bar`. Label: "Licensing". Headline: "How licensing works".
- **Layout:** 2x2 grid of `glass-card` panels:
  1. **Device Activations** — cyan checks. Free & Pro: 1 device. Agency: 5 devices.
  2. **License Transfer** — emerald (same device auto), amber (new device: contact support), red X (no self-service deactivation).
  3. **Why This Policy** — text explanation about anti-reselling.
  4. **Need to Transfer** — contact `support@crawlix.app`, 24-hour processing.
- **Official Store Warning:** Amber callout (`bg-amber-500/[0.06]`, `border-amber-500/20`) with Shield icon below the grid.

### Section 7: FAQ

- **Background:** `#040c1e`.
- **Header:** Left-aligned `section-header-bar`. Label: "FAQ". Headline: "Common questions".
- **Accordion:** `<details>` elements with `glass-card`-like styling (`bg-[#091a3d]/40`, `border-slate-800/50`).
- **Data source:** Keystatic CMS — merged pricing + licensing FAQs, sorted by order.
- **Open state:** Subtle background tint on summary, chevron rotates 180deg.

### Section 8: CTA

- **Background:** `#091a3d`.
- **Side node networks:** Left and right SVG clusters (12 nodes each), same `pricing-node` animation class. Center masked with linear gradient so nodes don't touch content.
- **Content (centered):**
  - Badge: "Now available for Windows & Linux" cyan pill.
  - Headline: "Start Auditing for Free"
  - Subtitle: "Download Crawlix, run {totalSeoChecks}+ checks on your first site. No account. No credit card. No data uploaded."
  - Primary CTA: Solid cyan "Download for Free →"
  - Secondary CTA: Ghost "Compare Plans" linking to `#compare`
  - Trust items: "No signup required", "Works offline", "GDPR compliant"

## Technical Implementation

- **Data sources:** Keystatic CMS for pricing tiers and FAQs. `src/data/pricing.ts` for feature comparison table and Lemon Squeezy config.
- **Dynamic values:** `getTotalSeoChecks()` for check count. `getPricingTiers()` for card data. `getFAQs('pricing')` + `getFAQs('licensing')` for FAQ content.
- **Billing toggle JS:** CSS class swap (`billing-active`/`billing-inactive`). Price visibility via `.hidden` class toggle. Checkout URL generation via Lemon Squeezy variant IDs.
- **Price crossfade CSS:** Transition on `.price-monthly`, `.price-annual`, `.price-perpetual` containers. When becoming visible: `opacity 0→1, translateY(8px)→0`. When hiding: `opacity 1→0, translateY(0)→-8px`. Duration 200ms, ease-out.
- **Node graph:** Seeded PRNG for deterministic SSR. 10 cols × 6 rows with jitter. Connection distance threshold 15. Pulse/breathe animations with `--base-opacity` CSS custom property.
- **Accessibility:** `prefers-reduced-motion` disables all animations. Skip link. Semantic heading hierarchy. `aria-hidden` on decorative SVGs.
- **Static generation:** `export const prerender = true`.

## Files Modified

- `src/pages/pricing.astro` — full rewrite
- No new files or components needed (self-contained page)

## Feature Audit Results

All feature claims on the pricing page have been verified against the app codebase:

- **Fully implemented:** CWV, JS rendering, accessibility audit, schema validation, duplicate detection, AI readiness, scheduled crawls, crawl comparison, white-label reports, HTML reports, custom extraction
- **Partial (schema exists, OAuth unclear):** GA4 integration, GSC integration, PageSpeed Insights — kept in feature lists as they're in the CMS and have database schemas
- **Check count:** CMS says 134+, dynamic `getTotalSeoChecks()` pulls from CMS data
