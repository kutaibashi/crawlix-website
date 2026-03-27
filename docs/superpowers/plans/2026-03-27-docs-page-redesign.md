# Docs Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the `/docs` page with accurate content, editorial design matching ComparisonLayout.astro, and 3 new documentation sections.

**Architecture:** Two-file change — update `src/data/docs.ts` (content fixes, new sections, remove unused exports) then rewrite `src/pages/docs/index.astro` (5-section editorial layout with no client-side JS). Data file changes first since the page depends on it.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, `@lucide/astro` (only `ChevronRight`, `Download`, `ArrowRight`)

**Spec:** `docs/superpowers/specs/2026-03-27-docs-page-redesign-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/data/docs.ts` | Modify | Content data: doc sections, FAQs, popular topics, crawler defaults |
| `src/pages/docs/index.astro` | Rewrite | Page layout: hero, popular topics, browse grid, quick reference, FAQ |

---

### Task 1: Update docs.ts — Fix content accuracy and add new sections

**Files:**
- Modify: `src/data/docs.ts`

- [ ] **Step 1: Update SEO Checks section title**

In `docSections`, change the SEO Checks entry:

```typescript
// Line ~138: change title
title: 'SEO Checks (100+)',
// Line ~139: change description
description: 'All technical, content, and accessibility audits',
```

- [ ] **Step 2: Add Log Analysis section**

Add after the Troubleshooting section (last entry in `docSections` array):

```typescript
{
  id: 'log-analysis',
  title: 'Log Analysis',
  description: 'Parse server logs for SEO insights and bot activity',
  icon: 'BarChart',
  articles: [
    {
      title: 'Importing Server Logs',
      slug: 'log-analysis/importing',
      description: 'Upload Apache Combined, Nginx, Cloudflare JSON formats with auto-detection.',
    },
    {
      title: 'Bot Detection & Analysis',
      slug: 'log-analysis/bot-detection',
      description: 'Classify crawlers (Googlebot, Bingbot, AI bots) and analyze traffic breakdown.',
    },
    {
      title: 'URL Hit Aggregation',
      slug: 'log-analysis/url-hits',
      description: 'Per-URL stats: total hits, bot vs human, status code distribution.',
    },
    {
      title: 'Log Analysis Dashboard',
      slug: 'log-analysis/dashboard',
      description: 'Views and filtering in the desktop app.',
    },
  ],
},
```

- [ ] **Step 3: Add Browser Extension section**

```typescript
{
  id: 'browser-extension',
  title: 'Browser Extension',
  description: 'Quick Audit: instant page analysis from your browser',
  icon: 'Zap',
  articles: [
    {
      title: 'Installing Quick Audit',
      slug: 'browser-extension/install',
      description: 'Chrome extension setup and permissions.',
    },
    {
      title: 'Instant Page Analysis',
      slug: 'browser-extension/analysis',
      description: 'On-page SEO checks, meta tags, schema detection, and link counts.',
    },
    {
      title: 'Syncing with Desktop',
      slug: 'browser-extension/sync',
      description: 'Send Quick Audit results to Crawlix Desktop via localhost API.',
    },
  ],
},
```

- [ ] **Step 4: Add Mobile Crawling section**

```typescript
{
  id: 'mobile-crawling',
  title: 'Mobile Crawling',
  description: 'Viewport emulation, tap targets, and mobile usability',
  icon: 'Gauge',
  articles: [
    {
      title: 'Enabling Mobile Crawling',
      slug: 'mobile-crawling/enable',
      description: 'Viewport emulation (iPhone 14, Pixel 8), touch events, and mobile user agents.',
      badge: 'pro' as const,
    },
    {
      title: 'Mobile Usability Scoring',
      slug: 'mobile-crawling/usability',
      description: 'Tap target size, font readability, content viewport fit, and horizontal scroll detection.',
      badge: 'pro' as const,
    },
    {
      title: 'Network Throttling',
      slug: 'mobile-crawling/throttling',
      description: '3G/4G simulation for realistic mobile performance testing.',
      badge: 'pro' as const,
    },
    {
      title: 'Desktop vs Mobile Comparison',
      slug: 'mobile-crawling/comparison',
      description: 'Content diff between desktop and mobile rendering.',
      badge: 'pro' as const,
    },
  ],
},
```

- [ ] **Step 5: Fix FAQ content**

Update the `docsFaqs` array:

1. In the SEO checks FAQ (index 3), change `'97+ checks'` → `'100+ checks'` and `'Crawlix runs 97+ checks'` → `'Crawlix runs 100+ checks'`.

2. Replace the device limits FAQ (index 4) answer:
```typescript
answer: 'Free tier: 1 device. Pro: 3 devices. Agency: 5 devices. You can deactivate old devices to free up slots. If you need to transfer your license, contact support@crawlix.app.',
```

- [ ] **Step 6: Update quickStartSteps**

In step 4, change `'97+ SEO checks'` → `'100+ SEO checks'`.

- [ ] **Step 7: Update popularTopics**

Remove the `icon` field from all entries. Update titles:
```typescript
export const popularTopics = [
  { title: 'Your First Crawl', slug: 'getting-started/first-crawl' },
  { title: 'JavaScript Rendering', slug: 'js-rendering/enable', badge: 'pro' as const },
  { title: 'Core Web Vitals', slug: 'core-web-vitals/overview' },
  { title: 'PDF Reports', slug: 'exports/pdf', badge: 'pro' as const },
  { title: 'Custom Extraction', slug: 'extraction/methods' },
  { title: 'Google Analytics', slug: 'integrations/google-analytics', badge: 'pro' as const },
];
```

- [ ] **Step 8: Remove dashboardViews export**

Delete the `dashboardViews` array (lines ~643-651). No other file imports it.

- [ ] **Step 9: Verify the build**

Run: `npx astro check` or `npm run build` from the `apps/website` directory.
Expected: no TypeScript errors from `docs.ts` changes.

- [ ] **Step 10: Commit**

```bash
git add src/data/docs.ts
git commit -m "fix(docs): update content accuracy, add log analysis/extension/mobile sections"
```

---

### Task 2: Rewrite docs/index.astro — Editorial layout

**Files:**
- Rewrite: `src/pages/docs/index.astro`

**Reference:** `src/layouts/ComparisonLayout.astro` lines 87-200 for editorial section patterns (py-14, border-t, max-w-5xl, table styling).

- [ ] **Step 1: Write the complete page**

Replace the entire contents of `src/pages/docs/index.astro` with the following. The page has 5 sections, no client-side JS, and follows the ComparisonLayout editorial patterns.

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/layout/Header.astro';
import Footer from '../../components/layout/Footer.astro';
import { ChevronRight, Download, ArrowRight } from '@lucide/astro';
import {
  docSections,
  popularTopics,
  docsFaqs,
  crawlerDefaults,
} from '../../data/docs';

const totalArticles = docSections.reduce((acc, s) => acc + s.articles.length, 0);

export const prerender = true;
---

<BaseLayout
  title="Documentation - Crawlix SEO Crawler"
  description="Learn how to use Crawlix with comprehensive documentation covering 100+ SEO checks, Core Web Vitals, custom extraction, and more."
>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <Header slot="header" />

  <div style="background: #040c1e;">

    <!-- Hero -->
    <section class="relative pt-32 pb-12 overflow-hidden" style="background: radial-gradient(ellipse 60% 50% at 50% 40%, #0c2340, #040c1e);">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <a href="/" class="hover:text-slate-400 transition-colors">Home</a>
          <ChevronRight class="h-3 w-3" />
          <span class="text-slate-400">Docs</span>
        </nav>

        <div class="max-w-2xl">
          <h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-[1.15]">
            Crawlix Documentation
          </h1>
          <p class="mt-4 text-lg text-slate-400">
            Everything you need to master website auditing. From your first crawl to advanced automation and integrations.
          </p>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <span><span class="text-white font-medium">{totalArticles}+</span> articles</span>
          <span><span class="text-white font-medium">{docSections.length}</span> topics</span>
          <span><span class="text-white font-medium">100+</span> SEO checks</span>
        </div>

        <div class="mt-8">
          <a href="/download" class="inline-flex items-center gap-2 rounded-lg bg-[#22d3ee] px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#67e8f9] transition-colors">
            <Download class="h-4 w-4" />
            Download Crawlix
          </a>
        </div>
      </div>
    </section>

    <!-- Popular Topics -->
    <section class="py-14 border-t border-slate-800/30">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">Popular</p>
        <div class="flex flex-wrap gap-x-1 gap-y-2 text-sm">
          {popularTopics.map((topic, i) => (
            <>
              {i > 0 && <span class="text-slate-700 mx-1">&middot;</span>}
              <a href={`/docs/${topic.slug}`} class="text-cyan-400 hover:text-white transition-colors">
                {topic.title}
              </a>
              {topic.badge === 'pro' && <span class="text-slate-600 text-xs ml-0.5">(Pro)</span>}
            </>
          ))}
        </div>
      </div>
    </section>

    <!-- Browse by Topic -->
    <section class="py-14 border-t border-slate-800/30" id="main-content">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-white mb-8">Browse by Topic</h2>

        <div class="grid md:grid-cols-2 gap-x-12">
          {docSections.map((section) => {
            const hasPro = section.articles.some(a => a.badge === 'pro');
            const hasAgency = section.articles.some(a => a.badge === 'agency');

            return (
              <a href={`/docs/${section.id}`} class="block py-4 border-t border-slate-800/30 group">
                <div class="flex items-baseline gap-2">
                  <h3 class="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {section.title}
                  </h3>
                  {hasPro && !hasAgency && <span class="text-xs text-violet-400">(Pro)</span>}
                  {hasAgency && <span class="text-xs text-amber-400">(Agency)</span>}
                  <span class="text-xs text-slate-500 ml-auto">{section.articles.length} articles</span>
                </div>
                <p class="text-sm text-slate-400 mt-1">{section.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>

    <!-- Quick Reference -->
    <section class="py-14 border-t border-slate-800/30">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-white mb-1">Quick Reference</h2>
        <p class="text-slate-400 mb-8">Default crawler settings</p>

        <table class="w-full text-sm max-w-lg">
          <tbody>
            <!-- Page Limits -->
            <tr>
              <td colspan="2" class="pt-2 pb-2 text-slate-300 font-medium border-b border-slate-800/30">Page Limits</td>
            </tr>
            <tr class="border-b border-slate-800/20">
              <td class="py-2 text-slate-400">Free tier</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.maxPages.free}</td>
            </tr>
            <tr class="border-b border-slate-800/20">
              <td class="py-2 text-slate-400">Pro tier</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.maxPages.pro.toLocaleString()}</td>
            </tr>
            <tr class="border-b border-slate-800/30">
              <td class="py-2 text-slate-400">Agency tier</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.maxPages.agency}</td>
            </tr>

            <!-- Crawl Settings -->
            <tr>
              <td colspan="2" class="pt-6 pb-2 text-slate-300 font-medium border-b border-slate-800/30">Crawl Settings</td>
            </tr>
            <tr class="border-b border-slate-800/20">
              <td class="py-2 text-slate-400">Max depth</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.maxDepth}</td>
            </tr>
            <tr class="border-b border-slate-800/20">
              <td class="py-2 text-slate-400">Concurrent workers</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.concurrentWorkers}</td>
            </tr>
            <tr class="border-b border-slate-800/30">
              <td class="py-2 text-slate-400">Crawl delay</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.crawlDelay}ms</td>
            </tr>

            <!-- Performance -->
            <tr>
              <td colspan="2" class="pt-6 pb-2 text-slate-300 font-medium border-b border-slate-800/30">Performance</td>
            </tr>
            <tr class="border-b border-slate-800/20">
              <td class="py-2 text-slate-400">Timeout</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.timeout / 1000}s</td>
            </tr>
            <tr class="border-b border-slate-800/20">
              <td class="py-2 text-slate-400">Batch size</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.batchSize}</td>
            </tr>
            <tr class="border-b border-slate-800/30">
              <td class="py-2 text-slate-400">Max memory</td>
              <td class="py-2 text-right font-mono text-white">{crawlerDefaults.maxMemoryMB}MB</td>
            </tr>

            <!-- User Agent -->
            <tr>
              <td colspan="2" class="pt-6 pb-2 text-slate-300 font-medium border-b border-slate-800/30">User Agent</td>
            </tr>
            <tr>
              <td colspan="2" class="py-2">
                <code class="text-xs text-slate-300 break-all">{crawlerDefaults.userAgent}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-14 border-t border-slate-800/30">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>

        <div class="max-w-3xl">
          {docsFaqs.map((faq) => (
            <details class="group border-t border-slate-800/30">
              <summary class="flex items-center justify-between cursor-pointer py-5 text-white font-medium hover:text-cyan-400 transition-colors">
                <span>{faq.question}</span>
                <ChevronRight class="h-4 w-4 text-slate-600 shrink-0 ml-4 transition-transform group-open:rotate-90" />
              </summary>
              <div class="pb-5 -mt-1">
                <p class="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

  </div>

  <Footer slot="footer" />
</BaseLayout>

<style>
  details summary::-webkit-details-marker {
    display: none;
  }

  details[open] summary {
    border-bottom: 1px solid rgb(30 41 59 / 0.3);
  }
</style>
```

- [ ] **Step 2: Verify the build**

Run from `apps/website`:
```bash
npm run build
```

Expected: Build succeeds, no TypeScript errors, no missing imports.

- [ ] **Step 3: Preview and visual check**

Run: `npm run dev` and open `http://localhost:4321/docs`

Visual checklist:
- [ ] Hero: left-aligned, breadcrumb, no search bar, no gradient text
- [ ] Popular Topics: single row of cyan text links with midot separators
- [ ] Browse by Topic: two-column text grid, no cards, no icons, border-t dividers
- [ ] Quick Reference: simple table, no glass card wrapper
- [ ] FAQ: accordion with border-t dividers, no numbered badges, no card backgrounds
- [ ] Background: continuous `#040c1e` navy, no section color changes
- [ ] CTA button: cyan `#22d3ee`, not sky-600
- [ ] Mobile responsive: single column on small screens
- [ ] No JavaScript errors in console
- [ ] Footer renders correctly below the dark background wrapper

- [ ] **Step 4: Commit**

```bash
git add src/pages/docs/index.astro
git commit -m "feat(docs): rewrite docs page with editorial design and accurate content"
```
