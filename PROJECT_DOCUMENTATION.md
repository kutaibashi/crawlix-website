# Project Documentation: Crawlix Marketing Website

> **Astro Static Site Architecture, Data Modeling & SEO Implementation**

---

## Table of Contents

1. [System Architecture](#1-system-architecture)
2. [Data Modeling](#2-data-modeling)
3. [Global Configuration](#3-global-configuration)
4. [Dynamic Logic](#4-dynamic-logic)
5. [Dynamic Sitemap Implementation](#5-dynamic-sitemap-implementation)
6. [Redirect Management System](#6-redirect-management-system)
7. [Validation Checklist](#7-validation-checklist)

---

## 1. System Architecture

### 1.1 Overview

The Crawlix marketing website is built using **Astro 5.17.1**, a modern static site generator optimized for content-driven websites. The architecture follows a data-driven approach where TypeScript data files serve as the single source of truth for all dynamic content.

```
┌─────────────────────────────────────────────────────────────────┐
│                      BUILD PROCESS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TypeScript Data Files ──► Astro Pages ──► Static HTML/CSS/JS   │
│  (src/data/*.ts)           (src/pages/)    (dist/)              │
│                                                                  │
│  MDX Content Files ──────► Astro Layouts ──► Rendered Pages     │
│  (src/content/)            (src/layouts/)                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Astro | 5.17.1 | Static site generation with islands architecture |
| Styling | Tailwind CSS | 4.1.18 | Utility-first CSS framework |
| Content | MDX | 4.3.13 | Markdown with JSX component support |
| Icons | Lucide Astro | 0.563.0 | SVG icon library (43+ icons used) |
| SEO | @astrojs/sitemap | 3.7.0 | Automatic sitemap generation |
| Build | Vite | (bundled) | Development server and build tooling |
| Language | TypeScript | strict | Type-safe data modeling |

### 1.3 Directory Structure

```
apps/website/
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── home/            # Homepage-specific sections (7 components)
│   │   ├── layout/          # Header, Footer
│   │   └── ui/              # Button, Card primitives
│   ├── content/             # MDX content collections
│   │   ├── blog/            # Blog posts (.mdx)
│   │   └── docs/            # Documentation articles (.mdx)
│   ├── data/                # TypeScript data files (8 files)
│   │   ├── features.ts      # 134 SEO checks across 11 categories
│   │   ├── pricing.ts       # 3 tiers with feature comparison
│   │   ├── blog.ts          # Blog posts metadata & helpers
│   │   ├── docs.ts          # Documentation structure (13 sections)
│   │   ├── changelog.ts     # Release history (5 versions)
│   │   ├── integrations.ts  # 13 integrations (7 active, 6 coming)
│   │   ├── comparisons.ts   # 4 competitor comparisons
│   │   └── navigation.ts    # Site navigation structure
│   ├── layouts/             # Page templates (4 layouts)
│   │   ├── BaseLayout.astro # Root layout with meta tags
│   │   ├── BlogLayout.astro # Blog post template
│   │   ├── ComparisonLayout.astro # Competitor comparison
│   │   └── LegalLayout.astro # Legal documents
│   ├── pages/               # File-based routing (24+ pages)
│   │   ├── blog/            # Blog listing & posts
│   │   ├── compare/         # Competitor comparisons (5 pages)
│   │   ├── docs/            # Documentation hub
│   │   ├── legal/           # Legal pages (5 pages)
│   │   └── security/        # Security disclosure
│   └── styles/
│       └── global.css       # Tailwind v4 + custom utilities
├── public/                  # Static assets
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   └── images/
│       └── og-image.png     # Open Graph default image
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

### 1.4 Data Flow Architecture

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   Data Layer     │────►│  Template Layer  │────►│   Output Layer   │
│  (src/data/*.ts) │     │  (src/layouts/)  │     │     (dist/)      │
└──────────────────┘     └──────────────────┘     └──────────────────┘
        │                         │                        │
        ▼                         ▼                        ▼
 • Type interfaces        • BaseLayout.astro       • index.html
 • Static data arrays     • BlogLayout.astro       • features/index.html
 • Helper functions       • ComparisonLayout.astro • pricing/index.html
 • Computed values        • LegalLayout.astro      • sitemap.xml
```

---

## 2. Data Modeling

### 2.1 Features Data (`src/data/features.ts`)

**Purpose:** Defines the 134 SEO checks organized into 11 categories, workflow steps, export formats, and integrations.

#### Interfaces

```typescript
interface Feature {
  title: string;       // Feature name
  description: string; // Detailed description
  icon?: string;       // Optional Lucide icon name
}

interface FeatureCategory {
  id: string;          // URL-safe identifier
  name: string;        // Display name
  description: string; // Category overview
  icon: string;        // Lucide icon name
  color: string;       // Tailwind color (sky, violet, emerald, etc.)
  checkCount: number;  // Number of checks in category
  features: Feature[]; // Array of individual features
}
```

#### Exported Data

| Export | Type | Description |
|--------|------|-------------|
| `featureCategories` | `FeatureCategory[]` | 11 categories with 134 total checks |
| `totalSeoChecks` | `number` | Computed: 134 |
| `workflowSteps` | `WorkflowStep[]` | 4-step user workflow |
| `keyCapabilities` | `Capability[]` | 6 key selling points |
| `exportFormats` | `ExportFormat[]` | 5 export types (PDF, CSV, JSON, Excel, HTML) |
| `integrations` | `Integration[]` | 3 primary integrations (GA4, GSC, PageSpeed) |

#### Category Definitions

| ID | Name | Checks | Color | Icon |
|----|------|--------|-------|------|
| `technical-seo` | Technical SEO | 20 | sky | Settings |
| `on-page-seo` | On-Page SEO | 25 | violet | FileText |
| `content-quality` | Content Quality | 15 | emerald | Edit3 |
| `link-analysis` | Link Analysis | 15 | amber | Link |
| `image-optimization` | Image Optimization | 10 | rose | Image |
| `performance` | Performance & Core Web Vitals | 12 | cyan | Zap |
| `structured-data` | Structured Data | 6 | indigo | Code |
| `security` | Security | 10 | orange | Shield |
| `accessibility` | Accessibility | 10 | pink | Accessibility |
| `international-seo` | International SEO | 5 | teal | Globe |
| `ai-search` | AI Search Readiness | 6 | purple | Bot |

---

### 2.2 Pricing Data (`src/data/pricing.ts`)

**Purpose:** Defines pricing tiers, feature limits, and comparison tables for the pricing page.

#### Interfaces

```typescript
interface PricingTier {
  name: string;           // Tier display name
  id: string;             // URL-safe identifier
  price: {
    annual: number;       // Yearly subscription price
    perpetual: number;    // One-time purchase price
  };
  description: string;    // Tier tagline
  features: string[];     // Included features list
  limits: {
    pages: number | 'unlimited';
    projects: number | 'unlimited';
    seats?: number;
  };
  cta: {
    text: string;
    href: string;
  };
  highlighted?: boolean;  // Featured tier flag
}

interface FeatureComparisonRow {
  feature: string;        // Feature name
  category: string;       // Feature category
  free: boolean | string; // Free tier value
  pro: boolean | string;  // Pro tier value
  agency: boolean | string; // Agency tier value
}
```

#### Tier Definitions

| Tier | Annual | Perpetual | Pages | Projects | Seats |
|------|--------|-----------|-------|----------|-------|
| Free | $0 | $0 | 100 | 1 | 1 |
| Pro | $149/yr | $249 | 50,000 | 20 | 1 |
| Agency | $399/yr | $699 | Unlimited | Unlimited | 5 |

#### Exported Data

| Export | Type | Description |
|--------|------|-------------|
| `pricingTiers` | `PricingTier[]` | 3 tier definitions |
| `featureComparison` | `FeatureComparisonRow[]` | 30+ feature comparison rows |
| `featureCategories` | `string[]` | 8 comparison categories |
| `pricingFaqs` | `FAQ[]` | 9 pricing FAQ entries |
| `competitorPricing` | `object` | Competitor price references |

---

### 2.3 Blog Data (`src/data/blog.ts`)

**Purpose:** Manages blog post metadata, authors, categories, and helper functions.

#### Interfaces

```typescript
interface Author {
  id: string;          // Unique identifier
  name: string;        // Display name
  role: string;        // Job title
  bio: string;         // Short biography
  avatar: string;      // Avatar image path
  twitter?: string;    // Twitter handle
  linkedin?: string;   // LinkedIn URL
}

interface BlogCategory {
  id: string;          // Category slug
  name: string;        // Display name
  description: string; // Category description
  color: string;       // Tailwind color class
}

interface BlogPost {
  slug: string;        // URL slug
  title: string;       // Post title (max 60 chars for SEO)
  description: string; // Meta description (max 160 chars)
  excerpt: string;     // Preview text
  publishedAt: string; // ISO date string
  updatedAt?: string;  // Last update date
  author: string;      // Author ID reference
  category: string;    // Category ID reference
  tags: string[];      // Tag array
  readingTime: number; // Estimated minutes
  featured?: boolean;  // Homepage feature flag
}
```

#### Categories

| ID | Name | Color |
|----|------|-------|
| `tutorials` | Tutorials | sky |
| `product-updates` | Product Updates | emerald |
| `seo-guides` | SEO Guides | violet |
| `technical` | Technical | amber |
| `case-studies` | Case Studies | rose |

#### Helper Functions

```typescript
getAuthor(id: string): Author | undefined
getCategory(id: string): BlogCategory | undefined
getCategoryColor(id: string): string
formatDate(date: string): string  // "January 15, 2026"
getRelatedPosts(currentSlug: string, limit?: number): BlogPost[]
```

---

### 2.4 Documentation Data (`src/data/docs.ts`)

**Purpose:** Structures documentation content into 13 sections with 75+ articles.

#### Interfaces

```typescript
interface DocArticle {
  title: string;       // Article title
  slug: string;        // URL slug
  description: string; // Article summary
  badge?: 'new' | 'updated' | 'pro' | 'agency'; // Access/status badge
}

interface DocSection {
  id: string;          // Section identifier
  title: string;       // Section name
  description: string; // Section overview
  icon: string;        // Lucide icon name
  articles: DocArticle[];
}
```

#### Section Structure

| Section | Articles | Badge Requirements |
|---------|----------|-------------------|
| Getting Started | 5 | None |
| Crawl Configuration | 6 | None |
| SEO Checks (97+) | 9 | None |
| JavaScript Rendering | 6 | Pro |
| Core Web Vitals | 5 | None |
| Custom Extraction | 6 | None |
| Integrations | 4 | None |
| Exports & Reports | 5 | None |
| White-Label Branding | 4 | Agency |
| Scheduled Crawls | 4 | Pro |
| AI Search Readiness | 3 | None |
| Licensing | 5 | None |
| Data & Privacy | 4 | None |
| Troubleshooting | 5 | None |

#### Additional Exports

```typescript
popularTopics: Topic[]           // 6 featured topics for homepage
docsFaqs: FAQ[]                  // 8 documentation FAQs
crawlerDefaults: CrawlConfig     // Default crawler settings
aiCrawlers: AICrawler[]          // 12 AI bots analyzed
dashboardViews: DashboardView[]  // 31 app views documented
```

---

### 2.5 Changelog Data (`src/data/changelog.ts`)

**Purpose:** Tracks release history with semantic versioning.

#### Interfaces

```typescript
type ChangeType = 'feature' | 'improvement' | 'fix' | 'breaking';

interface Change {
  type: ChangeType;
  title: string;
  description: string;
  badge?: 'pro' | 'agency';
}

interface Release {
  version: string;      // Semver (e.g., "1.4.0")
  date: string;         // ISO date
  title: string;        // Release name
  summary: string;      // Release overview
  type: 'major' | 'minor' | 'patch';
  changes: Change[];
  highlights?: string[];
}
```

#### Release History

| Version | Date | Title | Type |
|---------|------|-------|------|
| 1.4.0 | 2026-02-01 | Compliance & Enterprise | Minor |
| 1.3.0 | 2026-01-15 | Desktop App & White-Label | Minor |
| 1.2.0 | 2025-12-20 | Google Integrations & AI Analysis | Minor |
| 1.1.0 | 2025-11-15 | JavaScript Rendering & Core Web Vitals | Minor |
| 1.0.0 | 2025-10-01 | Initial Release | Major |

#### Helper Functions

```typescript
formatDate(date: string): string
getChangeTypeColor(type: ChangeType): string  // Returns Tailwind color
getChangeTypeLabel(type: ChangeType): string  // Returns display label
getAllChangeTypes(): ChangeType[]
```

---

### 2.6 Integrations Data (`src/data/integrations.ts`)

**Purpose:** Defines available and upcoming integrations.

#### Interfaces

```typescript
interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;          // Lucide icon name
  category: string;      // Category ID reference
  status: 'available' | 'coming-soon';
  tier: 'free' | 'pro' | 'agency';
  features: string[];
}

interface IntegrationCategory {
  id: string;
  name: string;
  description: string;
}
```

#### Integration Categories

| Category | Description | Integrations |
|----------|-------------|--------------|
| analytics | Analytics & Traffic | Google Analytics 4 |
| search | Search Performance | Google Search Console |
| performance | Performance & Speed | PageSpeed Insights |
| export | Data Export | CSV, Excel, JSON, HTML |
| coming-soon | Coming Soon | Looker Studio, Sheets, Slack, API |

#### Helper Functions

```typescript
getIntegrationsByCategory(categoryId: string): Integration[]
getFeaturedIntegrations(): Integration[]
getAvailableIntegrations(): Integration[]
getComingSoonIntegrations(): Integration[]
```

---

### 2.7 Comparisons Data (`src/data/comparisons.ts`)

**Purpose:** Competitor comparison data for 4 major SEO tools.

#### Interfaces

```typescript
interface Competitor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  logo: string;  // Lucide icon
}

interface ComparisonData {
  competitor: Competitor;
  headline: string;
  subheadline: string;
  summaryPoints: SummaryPoint[];  // 5 key differentiators
  pricing: {
    crawlix: PricingInfo;
    competitor: PricingInfo;
  };
  features: FeatureComparison[];  // 26-34 features per comparison
  advantages: Advantage[];        // 6+ Crawlix advantages
  competitorStrengths: string[];  // Honest competitor benefits
  bestFor: BestForItem[];         // Use case recommendations
  migrationSteps: MigrationStep[];
}
```

#### Competitor Definitions

| Competitor | Starting Price | Feature Count |
|------------|----------------|---------------|
| Screaming Frog | $259/year | 34 comparisons |
| Sitebulb | $162/year | 26 comparisons |
| Semrush | $1,400+/year | 30 comparisons |
| Ahrefs | $348+/year | 28 comparisons |

---

### 2.8 Navigation Data (`src/data/navigation.ts`)

**Purpose:** Centralized site navigation configuration.

#### Interfaces

```typescript
interface NavItem {
  name: string;
  href: string;
}

interface Navigation {
  main: NavItem[];
  footer: {
    product: NavItem[];
    resources: NavItem[];
    company: NavItem[];
    legal: NavItem[];
  };
}
```

#### Navigation Structure

**Main Navigation:**
- Features → `/features`
- Pricing → `/pricing`
- Compare → `/compare`
- Docs → `/docs`
- Blog → `/blog`

**Footer Navigation:**
| Product | Resources | Company | Legal |
|---------|-----------|---------|-------|
| Features | Documentation | About | Privacy Policy |
| Pricing | Blog | Contact | Terms of Service |
| Compare | Tutorials | Security | EULA |
| Download | API Reference | | Cookie Policy |
| Changelog | | | Accessibility |

---

## 3. Global Configuration

### 3.1 Astro Configuration (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crawlix.app',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
});
```

| Setting | Value | Purpose |
|---------|-------|---------|
| `site` | `https://crawlix.app` | Canonical domain for sitemap & meta |
| `vite.plugins` | `[tailwindcss()]` | Tailwind CSS v4 integration |
| `integrations` | `[mdx(), sitemap()]` | MDX content + auto sitemap |

### 3.2 TypeScript Configuration (`tsconfig.json`)

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

**Configuration Details:**
- Extends Astro's strict TypeScript preset
- Enables strict null checks and type safety
- Includes Astro-specific type definitions
- Excludes build output from type checking

### 3.3 Tailwind CSS Configuration (`src/styles/global.css`)

```css
@import "tailwindcss";

@theme {
  /* Color System */
  --color-primary-*: /* Sky blue (#2ea3f2) */
  --color-navy-*: /* Navy backgrounds (#091a3d, #0e2655) */
  --color-success-*: /* Emerald */
  --color-warning-*: /* Amber */
  --color-error-*: /* Coral */

  /* Typography */
  --font-brand: 'Space Grotesk', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

#### Custom Utility Classes

| Class | Purpose |
|-------|---------|
| `.animate-on-scroll` | Fade-up animation triggered by scroll |
| `.stagger-children` | Sequential child animations (100ms delay) |
| `.glass-card` | Glassmorphism effect with backdrop blur |
| `.gradient-text` | Primary gradient text fill |
| `.gradient-text-blue` | Blue gradient text fill |
| `.gradient-border` | Animated gradient border |
| `.hover-lift` | Lift effect on hover (-4px translateY) |
| `.glow-blue` | Blue glow shadow effect |
| `.skip-link` | Accessible skip-to-content link |
| `.float` | 6-second floating animation |
| `.shimmer` | Shimmer overlay effect |
| `.glow-pulse` | Pulsing glow animation |

### 3.4 Base Layout SEO (`src/layouts/BaseLayout.astro`)

```astro
---
interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
}

const {
  title = 'Crawlix - Privacy-First Desktop SEO Crawler',
  description = 'Crawlix - The privacy-first SEO crawler with 100+ checks...',
  canonical = Astro.url.href,
  image = '/images/og-image.png',
  noindex = false,
} = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={new URL(image, Astro.site)} />
    <meta property="og:site_name" content="Crawlix" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={new URL(image, Astro.site)} />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

    {noindex && <meta name="robots" content="noindex, nofollow" />}
  </head>
  <body class="bg-[#091a3d] text-slate-100">
    <slot name="header"><Header /></slot>
    <main id="main-content">
      <slot />
    </main>
    <slot name="footer"><Footer /></slot>
  </body>
</html>
```

---

## 4. Dynamic Logic

### 4.1 Metadata Generation

#### Page-Level Meta Tags

Each page passes custom metadata to `BaseLayout`:

```astro
---
// Example: /src/pages/features.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="SEO Features - 134 Checks | Crawlix"
  description="Discover 134 SEO checks across 11 categories..."
>
  <!-- Page content -->
</BaseLayout>
```

#### Blog Post Metadata

```astro
---
// Example: /src/layouts/BlogLayout.astro
const {
  title,
  description,
  publishedAt,
  author: authorId,
  category: categoryId
} = Astro.props;

const author = getAuthor(authorId);
const category = getCategory(categoryId);
---

<BaseLayout
  title={`${title} | Crawlix Blog`}
  description={description}
>
  <article>
    <header>
      <span class={getCategoryColor(categoryId)}>{category.name}</span>
      <h1>{title}</h1>
      <div class="meta">
        <span>{author.name}</span>
        <time datetime={publishedAt}>{formatDate(publishedAt)}</time>
      </div>
    </header>
    <slot />
  </article>
</BaseLayout>
```

### 4.2 Dynamic Routes

#### Blog Posts (`/blog/[slug].astro`)

```astro
---
import { blogPosts } from '../../data/blog';

export function getStaticPaths() {
  return blogPosts.map(post => ({
    params: { slug: post.slug },
    props: { post }
  }));
}

const { post } = Astro.props;
---
```

#### Comparison Pages (`/compare/[competitor].astro`)

```astro
---
import { allComparisons } from '../../data/comparisons';

export function getStaticPaths() {
  return Object.keys(allComparisons).map(key => ({
    params: { competitor: key },
    props: { data: allComparisons[key] }
  }));
}
---
```

### 4.3 Computed Values

```typescript
// src/data/features.ts
export const totalSeoChecks = featureCategories.reduce(
  (sum, cat) => sum + cat.checkCount,
  0
);  // Result: 134

// src/data/changelog.ts
export const changelogStats = {
  totalReleases: releases.length,
  totalFeatures: releases.reduce(
    (sum, r) => sum + r.changes.filter(c => c.type === 'feature').length,
    0
  ),
  // ...
};
```

### 4.4 Scroll Animations

```javascript
// Added to pages requiring animations
<script>
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
</script>
```

---

## 5. Dynamic Sitemap Implementation

### 5.1 Configuration

The sitemap is automatically generated by `@astrojs/sitemap`:

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://crawlix.app',
  integrations: [sitemap()]
});
```

### 5.2 Generated Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url><loc>https://crawlix.app/</loc></url>
  <url><loc>https://crawlix.app/features/</loc></url>
  <url><loc>https://crawlix.app/pricing/</loc></url>
  <url><loc>https://crawlix.app/download/</loc></url>

  <!-- Compare Pages -->
  <url><loc>https://crawlix.app/compare/</loc></url>
  <url><loc>https://crawlix.app/compare/screaming-frog/</loc></url>
  <url><loc>https://crawlix.app/compare/sitebulb/</loc></url>
  <url><loc>https://crawlix.app/compare/semrush/</loc></url>
  <url><loc>https://crawlix.app/compare/ahrefs/</loc></url>

  <!-- Content Pages -->
  <url><loc>https://crawlix.app/blog/</loc></url>
  <url><loc>https://crawlix.app/docs/</loc></url>
  <url><loc>https://crawlix.app/changelog/</loc></url>

  <!-- Dynamic Blog Posts -->
  <url><loc>https://crawlix.app/blog/complete-guide-to-97-seo-checks/</loc></url>
  <!-- ... additional posts ... -->

  <!-- Legal Pages -->
  <url><loc>https://crawlix.app/legal/privacy/</loc></url>
  <url><loc>https://crawlix.app/legal/terms/</loc></url>
  <url><loc>https://crawlix.app/legal/eula/</loc></url>
  <url><loc>https://crawlix.app/legal/cookies/</loc></url>
  <url><loc>https://crawlix.app/legal/accessibility/</loc></url>
</urlset>
```

### 5.3 Sitemap Exclusions

To exclude pages from the sitemap:

```astro
---
// Page with noindex
---
<BaseLayout noindex={true}>
  <!-- Content won't appear in sitemap -->
</BaseLayout>
```

### 5.4 Custom Sitemap Options

```javascript
// Extended configuration (if needed)
sitemap({
  filter: (page) => !page.includes('/admin/'),
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
  serialize: (item) => ({
    ...item,
    changefreq: item.url.includes('/blog/') ? 'weekly' : 'monthly'
  })
})
```

---

## 6. Redirect Management System

### 6.1 Static Redirects

For static hosting (Netlify, Vercel), create `public/_redirects`:

```
# Netlify redirect format
/sf                   /compare/screaming-frog    301
/screamingfrog        /compare/screaming-frog    301
/sitebulb             /compare/sitebulb          301
/vs-screaming-frog    /compare/screaming-frog    301
/vs-sitebulb          /compare/sitebulb          301

# Legacy URLs
/documentation        /docs                       301
/help                 /docs                       301
/support              /contact                    301

# Short URLs
/github               https://github.com/crawlix 302
/twitter              https://twitter.com/crawlix 302
```

### 6.2 Astro Redirects Configuration

```javascript
// astro.config.mjs
export default defineConfig({
  redirects: {
    '/sf': '/compare/screaming-frog',
    '/documentation': '/docs',
    '/help': '/docs',
    '/support': '/contact'
  }
});
```

### 6.3 Programmatic Redirects

```astro
---
// src/pages/old-page.astro
return Astro.redirect('/new-page', 301);
---
```

---

## 7. Validation Checklist

### 7.1 SEO Validation

| Check | Status | Notes |
|-------|--------|-------|
| Unique title tags on all pages | ✅ | Max 60 characters |
| Meta descriptions on all pages | ✅ | Max 160 characters |
| Canonical URLs configured | ✅ | Via BaseLayout |
| Open Graph tags present | ✅ | All required properties |
| Twitter Card tags present | ✅ | summary_large_image |
| Sitemap.xml generated | ✅ | @astrojs/sitemap |
| robots.txt configured | ⚠️ | Default Astro behavior |
| Structured data (JSON-LD) | 🔲 | Not yet implemented |
| Hreflang tags | N/A | Single language site |
| 301 redirects for old URLs | ⚠️ | Configure as needed |

### 7.2 Accessibility Validation

| Check | Status | Notes |
|-------|--------|-------|
| Skip link present | ✅ | In BaseLayout |
| Semantic HTML structure | ✅ | Proper heading hierarchy |
| Focus states visible | ✅ | Tailwind focus-visible |
| Alt text on images | ⚠️ | Verify on all images |
| Color contrast ratios | ✅ | Navy + sky theme passes |
| Keyboard navigation | ✅ | Tab order logical |
| ARIA labels where needed | ⚠️ | Review interactive elements |
| Reduced motion support | ✅ | `prefers-reduced-motion` |

### 7.3 Performance Validation

| Check | Status | Notes |
|-------|--------|-------|
| Static HTML generation | ✅ | Astro default |
| CSS optimized/purged | ✅ | Tailwind v4 automatic |
| Images optimized | ⚠️ | Consider @astrojs/image |
| Fonts preloaded | ⚠️ | Add preload hints |
| No render-blocking JS | ✅ | Minimal client JS |
| Lazy loading images | ⚠️ | Add `loading="lazy"` |
| Core Web Vitals targets | ⚠️ | Test with Lighthouse |

### 7.4 Content Validation

| Check | Status | Notes |
|-------|--------|-------|
| All data files have TypeScript types | ✅ | Strict mode enabled |
| No placeholder content | ✅ | Real data only |
| Dates in ISO format | ✅ | YYYY-MM-DD |
| URLs are absolute where needed | ✅ | site config used |
| External links have `rel` attributes | ⚠️ | Add `noopener noreferrer` |
| Internal links use relative paths | ✅ | Consistent navigation |

### 7.5 Build Validation

```bash
# Run these commands before deployment
npm run build          # Verify no build errors
npm run preview        # Test production build locally
```

| Build Check | Command | Expected Result |
|-------------|---------|-----------------|
| TypeScript compilation | `npm run build` | No type errors |
| Page generation | `npm run build` | 24+ pages generated |
| Sitemap generation | Check `dist/sitemap.xml` | All pages included |
| Asset optimization | Check `dist/_astro/` | CSS/JS minified |

---

## Appendix A: Page Inventory

| Route | Template | Data Source |
|-------|----------|-------------|
| `/` | Homepage | features.ts, pricing.ts |
| `/features` | BaseLayout | features.ts |
| `/pricing` | BaseLayout | pricing.ts |
| `/download` | BaseLayout | - |
| `/about` | BaseLayout | - |
| `/contact` | BaseLayout | - |
| `/changelog` | BaseLayout | changelog.ts |
| `/integrations` | BaseLayout | integrations.ts |
| `/use-cases` | BaseLayout | - |
| `/compare` | BaseLayout | comparisons.ts |
| `/compare/screaming-frog` | ComparisonLayout | comparisons.ts |
| `/compare/sitebulb` | ComparisonLayout | comparisons.ts |
| `/compare/semrush` | ComparisonLayout | comparisons.ts |
| `/compare/ahrefs` | ComparisonLayout | comparisons.ts |
| `/blog` | BaseLayout | blog.ts |
| `/blog/[slug]` | BlogLayout | blog.ts + MDX |
| `/docs` | BaseLayout | docs.ts |
| `/legal/privacy` | LegalLayout | - |
| `/legal/terms` | LegalLayout | - |
| `/legal/eula` | LegalLayout | - |
| `/legal/cookies` | LegalLayout | - |
| `/legal/accessibility` | LegalLayout | - |
| `/security/vulnerability-disclosure` | BaseLayout | - |
| `/404` | BaseLayout | - |

---

## Appendix B: Icon Reference

Icons used from `@lucide/astro`:

| Category | Icons |
|----------|-------|
| Navigation | Menu, X, ChevronDown, ChevronRight, ArrowRight |
| Features | Settings, FileText, Edit3, Link, Image, Zap, Code, Shield, Accessibility, Globe, Bot |
| Actions | Download, ExternalLink, Copy, Check, Search |
| Social | Twitter, Linkedin, Github |
| Status | AlertCircle, CheckCircle, Info, Clock |
| Misc | Spider (logo), Star, Users, Building2, Sparkles |

---

## Appendix C: Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Navy 950 | `#091a3d` | Primary background |
| Navy 900 | `#0e2655` | Card backgrounds |
| Navy 800 | `#0a1d42` | Secondary backgrounds |
| Sky 400 | `#38bdf8` | Primary accent |
| Sky 500 | `#2ea3f2` | Links, CTAs |
| Slate 100 | `#f1f5f9` | Body text |
| Slate 400 | `#94a3b8` | Secondary text |
| Emerald 500 | `#10b981` | Success states |
| Amber 500 | `#f59e0b` | Warning states |
| Rose 500 | `#f43f5e` | Error states |

---

*Document Version: 1.0*
*Last Updated: February 2026*
*Maintained by: Crawlix Team*
