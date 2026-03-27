# Comparison Pages Redesign & Content Audit

## Overview

Audit and redesign the pricing comparison pages (`/compare/*`) to fix content accuracy issues and apply the "Network Precision" design language established in the pricing page redesign.

## Content Accuracy Fixes

### Critical Fixes (comparisons.ts)

1. **Platform claims**: All Crawlix platform references change from "Windows, macOS, Linux" to "Windows, Linux" with "(macOS coming soon)" where appropriate.

2. **Sitebulb pricing**: Show both tiers transparently — "Starting at $162/yr (Lite, 10K pages) / $420/yr (Pro, 500K pages)". Savings anchored against Pro tier ($271/yr).

3. **Semrush "No Project Limits"**: Replace with "More Projects Per Dollar" — "Pro: 20 projects for $149/yr. Semrush Pro: 5 projects for $1,400/yr."

4. **"14-day money-back guarantee"** → "14-day refund policy" on all marketing surfaces.

5. **"API access: Coming soon"**: Remove unverified claim. Show as `false`/No.

6. **Ahrefs quick table**: Show "$348/yr (Starter)" as starting price consistently.

7. **SEO checks count**: Keep "134+" hardcoded with sync comment.

## Design: Compare Index Page (compare/index.astro)

### Hero
- Node-graph SVG background (seeded PRNG, seed different from pricing page)
- `gradient-text-cyan` animated heading (replacing `gradient-text-blue`)
- All `sky-*` colors → brand cyan `#22d3ee`
- Three stat cards: emerald/cyan/violet tier accents
- Deep navy gradient: `from-[#040c1e] to-[#091a3d]`

### Comparison Cards
- Glass card treatment: `backdrop-filter: blur(16px) saturate(180%)`, translucent navy bg
- Cyan border glow on hover
- Parallax tilt effect on hover (CSS perspective + rotateX/Y, 2-3deg)
- Dot-grid background behind section

### Quick Comparison Table
- Glass card wrapper
- Crawlix row: left-border cyan accent, brighter glass background (visual anchor)
- Fixed Sitebulb price: "$162/yr (Lite)"
- Sticky left column on mobile

### "Why Our Comparisons Are Different"
- Converted from 3-card grid → single horizontal strip with 3 concise points
- Left-aligned section header with cyan bar
- Less visual weight, more trust

### CTA
- Glass card with gradient border
- Node cluster decorations on sides
- No unverified claims

### Network Connectors
- One vertical `network-line` between hero → cards
- One between cards → table
- No more than two total

## Design: Comparison Layout (ComparisonLayout.astro)

Applied to all 4 competitor pages (Screaming Frog, Sitebulb, Semrush, Ahrefs).

### Hero
- Node-graph SVG background (unique seed per layout render)
- `gradient-text-cyan` headline
- Summary cards → glass cards
- Fix "14-day money-back guarantee" → "14-day refund policy"
- Fix platform claims

### Pricing Comparison
- Left-aligned header with cyan bar
- Crawlix card: glass card, cyan border, left-border accent
- Competitor card: muted glass card
- Dot-grid background

### Advantages Section
- Glass cards with emerald accent
- Stagger animation on scroll (50ms delays)

### Feature Comparison Table
- Glass card wrapper
- Cyan column header for Crawlix
- Emerald tint on Crawlix-winning cells
- Sticky first column on mobile

### Competitor Strengths
- Neutral muted glass cards (no color accent)
- Left-aligned header with cyan bar

### Best For Section
- Crawlix: glass card + cyan border + node-dot decorations
- Competitor: muted glass card
- Dot-grid background

### Migration Steps
- Node-dot styled step numbers
- Vertical network-line connector between steps

### Final CTA
- Matches pricing page CTA style
- Glass card with gradient border, side node clusters

### Other Comparisons Nav
- Glass pill buttons, cyan glow on hover

### Network Connectors
- One between hero → pricing
- One between advantages → feature table

## Animation & Accessibility
- All animations respect `prefers-reduced-motion`
- `stagger-children` pattern from pricing page (50ms delays)
- Intersection Observer for scroll-triggered animations
- Skip link maintained
- WCAG 2.2 focus states

## Files Modified
1. `src/data/comparisons.ts` — content accuracy fixes
2. `src/pages/compare/index.astro` — full redesign
3. `src/layouts/ComparisonLayout.astro` — full redesign
