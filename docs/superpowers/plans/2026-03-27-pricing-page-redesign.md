# Pricing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `pricing.astro` to add asymmetric elevated Pro card, tier color accents (emerald/cyan/violet), horizontal bar chart competitor comparison, price crossfade animation, and bold-statement Free Tier section — all within the existing Network Precision design language.

**Architecture:** Single-file rewrite of `src/pages/pricing.astro`. The page already has the correct frontmatter (data fetching, node graph generation, competitor data). Changes are to the HTML template (sections 2, 3, 5), the `<style>` block (price animation CSS), and the `<script>` block (crossfade logic). No new components or files.

**Tech Stack:** Astro, Tailwind CSS, Lucide icons, Keystatic CMS data, CSS transitions

**Spec:** `docs/superpowers/specs/2026-03-27-pricing-page-redesign-design.md`

---

### Task 1: Add price crossfade CSS and asymmetric card scaling

**Files:**
- Modify: `src/pages/pricing.astro` — `<style>` block (lines 734-769) and pricing cards section (lines 208-351)

The current price toggle uses `display: hidden` with no transition. Add CSS crossfade and make the Pro card asymmetrically larger.

- [ ] **Step 1: Add price crossfade CSS to the `<style>` block**

Add these rules after the existing `.billing-inactive:hover` block (after line 750):

```css
/* Price crossfade animation */
.price-monthly,
.price-annual,
.price-perpetual {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}
.price-monthly.hidden,
.price-annual.hidden,
.price-perpetual.hidden {
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  position: absolute;
}
.price-monthly:not(.hidden),
.price-annual:not(.hidden),
.price-perpetual:not(.hidden) {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Make the price container `relative` for absolute positioning of hidden states**

On line 237, change the price container div from:
```html
<div class="mt-6 h-20" data-tier={tier.id}>
```
to:
```html
<div class="mt-6 h-20 relative" data-tier={tier.id}>
```

- [ ] **Step 3: Add asymmetric scaling to pricing card classes**

On lines 214-220, change the pricing card container from the current ternary to include tier-specific styling. Replace the card `<div>` opening:

```astro
<div
  class={`relative rounded-2xl p-8 transition-all duration-300 hover-lift ${
    tier.highlighted
      ? 'pricing-card-pro border border-[#22d3ee]/40 bg-[#22d3ee]/[0.04] shadow-xl shadow-[#22d3ee]/10'
      : tier.id === 'starter'
        ? 'pricing-card-free glass-card'
        : 'pricing-card-agency glass-card'
  }`}
>
```

Add to the `<style>` block:

```css
/* Asymmetric card sizing */
.pricing-card-pro {
  transform: scale(1.05);
  z-index: 10;
}
@media (max-width: 1023px) {
  .pricing-card-pro {
    transform: none;
  }
}
```

- [ ] **Step 4: Add tier-colored checkmarks to feature lists**

On lines 293-296, replace the checkmark styling to use tier colors. Change:

```astro
<div class={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tier.highlighted ? 'bg-[#22d3ee]/15' : 'bg-slate-800/80'}`}>
  <Check class={`h-3 w-3 ${tier.highlighted ? 'text-[#22d3ee]' : 'text-slate-400'}`} />
</div>
```

to:

```astro
<div class={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
  tier.id === 'starter' ? 'bg-emerald-500/15' :
  tier.highlighted ? 'bg-[#22d3ee]/15' :
  'bg-[#a78bfa]/15'
}`}>
  <Check class={`h-3 w-3 ${
    tier.id === 'starter' ? 'text-emerald-400' :
    tier.highlighted ? 'text-[#22d3ee]' :
    'text-[#a78bfa]'
  }`} />
</div>
```

- [ ] **Step 5: Add tier-colored CTA for Agency card**

On line 320, the Agency card CTA uses the same ghost style as Free. Change the paid CTA ternary to also check for Agency violet:

```astro
class={`checkout-btn w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-200 ${
  tier.highlighted
    ? 'bg-[#22d3ee] text-slate-900 hover:bg-[#67e8f9] shadow-lg shadow-[#22d3ee]/20 hover:shadow-[#22d3ee]/30'
    : 'border border-[#a78bfa]/30 bg-[#a78bfa]/[0.06] text-white hover:bg-[#a78bfa]/10 hover:border-[#a78bfa]/50'
}`}
```

- [ ] **Step 6: Color the Free card CTA with emerald border**

On lines 307-313, change the Free CTA from plain ghost to emerald-tinted:

```astro
<a
  href="/download"
  class="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] px-6 py-3 font-semibold text-white hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all"
>
```

- [ ] **Step 7: Build and verify**

Run: `npx astro build 2>&1 | tail -5`
Expected: `[build] Complete!` with no errors

- [ ] **Step 8: Commit**

```bash
git add src/pages/pricing.astro
git commit -m "feat(pricing): add asymmetric Pro card, tier colors, price crossfade"
```

---

### Task 2: Replace competitor table with horizontal bar chart

**Files:**
- Modify: `src/pages/pricing.astro` — competitor section (lines 353-411)

Replace the `<table>` in the competitor section with a horizontal bar chart where bar widths are derived from price ratios.

- [ ] **Step 1: Compute max price in frontmatter**

In the frontmatter (after the `competitors` array, around line 99), add:

```typescript
const maxCompetitorPrice = Math.max(...competitors.map(c => c.price));
```

- [ ] **Step 2: Replace competitor table with bar chart**

Replace the entire competitor section content (from the `<div class="overflow-hidden rounded-2xl...">` through its closing `</div>`, lines 369-405) with:

```astro
<div class="rounded-2xl border border-slate-800/60 glass-card p-6 sm:p-8">
  <div class="space-y-4">
    {/* Crawlix row — highlighted */}
    <div class="flex items-center gap-4 p-3 rounded-xl bg-[#22d3ee]/[0.04] border border-[#22d3ee]/15">
      <div class="w-28 sm:w-36 shrink-0">
        <div class="text-sm font-semibold text-white">Crawlix Pro</div>
        <div class="flex items-center gap-1.5 mt-0.5">
          <span class="text-xs font-bold text-[#22d3ee]">$149/yr</span>
          <span class="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">✓ Buy once</span>
        </div>
      </div>
      <div class="flex-1 h-6 bg-slate-900/40 rounded overflow-hidden">
        <div
          class="h-full rounded"
          style={`width: ${(149 / maxCompetitorPrice * 100).toFixed(1)}%; background: linear-gradient(90deg, #22d3ee, #67e8f9);`}
        ></div>
      </div>
    </div>

    {/* Competitor rows */}
    {competitors.map((c) => (
      <div class="flex items-center gap-4 p-3">
        <div class="w-28 sm:w-36 shrink-0">
          <div class="text-sm text-slate-400">{c.name}</div>
          <div class="text-xs text-slate-600 mt-0.5">${c.price.toLocaleString()}/yr · {c.type}</div>
        </div>
        <div class="flex-1 h-5 bg-slate-900/40 rounded overflow-hidden">
          <div
            class="h-full rounded bg-white/[0.08]"
            style={`width: ${(c.price / maxCompetitorPrice * 100).toFixed(1)}%;`}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>
```

- [ ] **Step 3: Build and verify**

Run: `npx astro build 2>&1 | tail -5`
Expected: `[build] Complete!`

- [ ] **Step 4: Commit**

```bash
git add src/pages/pricing.astro
git commit -m "feat(pricing): replace competitor table with horizontal bar chart"
```

---

### Task 3: Rewrite Free Tier section with bold statement + contrast list

**Files:**
- Modify: `src/pages/pricing.astro` — Free Tier highlight section (lines 496-547)

Replace the current feature-grid Free Tier section with the bold manifesto + "what others charge for" competitive contrast layout.

- [ ] **Step 1: Replace the Free Tier section content**

Replace everything inside the `<section>` for Free Tier highlight (lines 499-546) with:

```astro
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 md:p-12">
    <div class="grid gap-10 md:grid-cols-2 items-center">
      <div>
        <div class="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400 mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Free forever
        </div>
        <h2 class="text-2xl font-bold text-white md:text-3xl leading-tight">
          No feature gates.<br />No check limits.<br />No upgrade nags.
        </h2>
        <p class="mt-4 text-slate-400 leading-relaxed">
          Competitors lock analysis behind paid tiers. We give you every check for free — upgrade only when you need more pages.
        </p>
        <div class="mt-8">
          <a href="/download" class="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-semibold text-white hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
            <Download class="h-5 w-5" />
            Download Free
            <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div>
        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">What others charge for</div>
        <div class="space-y-3">
          {[
            { label: 'JavaScript rendering', detail: 'Full Chromium engine' },
            { label: 'Core Web Vitals', detail: 'LCP, CLS, INP, FCP, TTFB' },
            { label: 'AI readiness audit', detail: '13 AI crawler checks' },
            { label: 'Accessibility audit', detail: 'WCAG 2.1 AA checks' },
            { label: 'Schema validation', detail: 'JSON-LD, microdata, OG' },
            { label: 'Duplicate detection', detail: 'SHA-256 content hashing' },
          ].map(({ label, detail }) => (
            <div class="flex items-center justify-between py-2 border-b border-slate-800/30 last:border-0">
              <div class="flex items-center gap-3">
                <Check class="h-4 w-4 text-emerald-400 shrink-0" />
                <span class="text-sm text-slate-300">{label}</span>
              </div>
              <span class="text-xs text-emerald-400/70 hidden sm:block">free on Crawlix</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Build and verify**

Run: `npx astro build 2>&1 | tail -5`
Expected: `[build] Complete!`

- [ ] **Step 3: Commit**

```bash
git add src/pages/pricing.astro
git commit -m "feat(pricing): rewrite Free Tier section with bold statement and contrast list"
```

---

### Task 4: Add tier colors to feature comparison table headers

**Files:**
- Modify: `src/pages/pricing.astro` — feature comparison table headers (lines 431-437)

- [ ] **Step 1: Update column header colors**

On line 434, change the Free column header from `text-slate-400` to emerald:
```astro
<th class="py-5 px-6 text-center text-sm font-semibold text-[#34d399] min-w-[120px]">Free</th>
```

On line 436, change the Agency column header from `text-slate-400` to violet:
```astro
<th class="py-5 px-6 text-center text-sm font-semibold text-[#a78bfa] min-w-[120px]">Agency</th>
```

Pro (line 435) already uses `text-[#22d3ee]` — no change needed.

- [ ] **Step 2: Build and verify**

Run: `npx astro build 2>&1 | tail -5`
Expected: `[build] Complete!`

- [ ] **Step 3: Commit**

```bash
git add src/pages/pricing.astro
git commit -m "style(pricing): add tier accent colors to comparison table headers"
```

---

### Task 5: Update billing toggle script for crossfade animation

**Files:**
- Modify: `src/pages/pricing.astro` — `<script>` block (lines 771-859)

The current toggle uses `.hidden` class to show/hide prices. The CSS from Task 1 handles the animation, but we need to ensure the transition works by adding/removing `.hidden` with a slight delay for the incoming element so CSS can transition.

- [ ] **Step 1: Update the price toggle logic**

Replace the price toggle block (lines 817-820):

```typescript
// Toggle prices
monthlyPrices.forEach(el => el.classList.toggle('hidden', billing !== 'monthly'));
annualPrices.forEach(el => el.classList.toggle('hidden', billing !== 'annual'));
perpetualPrices.forEach(el => el.classList.toggle('hidden', billing !== 'perpetual'));
```

with:

```typescript
// Crossfade prices — hide outgoing immediately, reveal incoming after a frame
const allPrices = [
  { els: monthlyPrices, key: 'monthly' },
  { els: annualPrices, key: 'annual' },
  { els: perpetualPrices, key: 'perpetual' },
];
allPrices.forEach(({ els, key }) => {
  if (key !== billing) {
    els.forEach(el => el.classList.add('hidden'));
  }
});
requestAnimationFrame(() => {
  allPrices.forEach(({ els, key }) => {
    if (key === billing) {
      els.forEach(el => el.classList.remove('hidden'));
    }
  });
});
```

- [ ] **Step 2: Build and verify**

Run: `npx astro build 2>&1 | tail -5`
Expected: `[build] Complete!`

- [ ] **Step 3: Verify in dev server**

Run: `npx astro dev` and open `http://localhost:4321/pricing`. Click billing toggle buttons and verify:
1. Price numbers crossfade smoothly (slide up + fade)
2. Pro card is visually larger than Free/Agency on desktop
3. Competitor bar chart shows Crawlix's small cyan bar vs long grey bars
4. Free Tier section shows "No feature gates" manifesto
5. Feature table headers show emerald/cyan/violet colors

- [ ] **Step 4: Commit**

```bash
git add src/pages/pricing.astro
git commit -m "feat(pricing): add crossfade transition to billing toggle"
```

---

### Task 6: Final review and squash commit

**Files:**
- Modify: `src/pages/pricing.astro` — review only

- [ ] **Step 1: Full build verification**

Run: `npx astro build 2>&1 | tail -10`
Expected: Clean build with no warnings related to pricing page

- [ ] **Step 2: Review the complete page for consistency**

Read through the full `pricing.astro` and verify:
- All 8 sections use `section-header-bar` where specified (sections 3, 4, 5, 6, 7 — NOT hero or cards which are centered, NOT CTA which is centered)
- Tier colors are consistent: emerald for Free, cyan for Pro, violet for Agency
- No hardcoded check counts (all use `{totalSeoChecks}`)
- All checkout links have `data-variant-*` attributes
- `prefers-reduced-motion` disables all animations
- `aria-hidden="true"` on decorative SVGs

- [ ] **Step 3: Fix any issues found in review**

Address any inconsistencies found in step 2.

- [ ] **Step 4: Final commit if any fixes were made**

```bash
git add src/pages/pricing.astro
git commit -m "fix(pricing): address review feedback on redesigned page"
```
