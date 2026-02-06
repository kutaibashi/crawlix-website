# Keystatic CMS Implementation

## Overview

Keystatic CMS has been integrated into the Crawlix marketing website to provide a visual admin interface for managing content. Content is stored as JSON/YAML/Markdoc files in the repository.

---

## What Was Done

### 1. Dependencies Installed

```bash
npm install @keystatic/core @keystatic/astro @astrojs/react @astrojs/markdoc @astrojs/node
```

### 2. Configuration Files Created

| File | Purpose |
|------|---------|
| `keystatic.config.ts` | Defines all collections, singletons, and field schemas |
| `src/lib/keystatic.ts` | Reader API utilities and TypeScript types |
| `src/content.config.ts` | Astro content collections configuration |
| `.env.example` | Environment variables for GitHub storage mode |
| `astro.config.mjs` | Updated with React, Markdoc, Keystatic, and Node adapter |

### 3. Collections Created

| Collection | Path | Format | Description |
|------------|------|--------|-------------|
| `blogPosts` | `src/content/blog/*` | Markdoc | Blog posts with rich content |
| `authors` | `src/content/authors/*` | JSON | Team member profiles |
| `releases` | `src/content/releases/*` | JSON | Changelog entries |
| `pricingTiers` | `src/content/pricing/*` | JSON | Free, Pro, Agency tiers |
| `featureCategories` | `src/content/features/*` | JSON | 11 SEO check categories |
| `faqs` | `src/content/faqs/*` | JSON | FAQ entries by category |
| `integrations` | `src/content/integrations/*` | JSON | Available integrations |
| `competitors` | `src/content/competitors/*` | JSON | Competitor profiles |
| `comparisons` | `src/content/comparisons/*` | JSON | Detailed comparison data |
| `blogCategories` | `src/content/blog-categories/*` | JSON | Blog category definitions |

### 4. Singletons Created

| Singleton | Path | Description |
|-----------|------|-------------|
| `navigation` | `src/content/singletons/navigation.json` | Main nav + footer links |
| `siteSettings` | `src/content/singletons/site-settings.json` | Site name, tagline, social links |
| `homepage` | `src/content/singletons/homepage.json` | Hero content, capabilities, workflow |

### 5. Content Files Created

```
src/content/
├── authors/
│   └── crawlix-team.json
├── blog/
│   └── complete-guide-to-seo-checks/
│       ├── index.yaml
│       └── content.mdoc
├── blog-categories/
│   ├── tutorials.json
│   ├── product-updates.json
│   ├── seo-guides.json
│   ├── technical.json
│   └── case-studies.json
├── competitors/
│   ├── screaming-frog.json
│   ├── sitebulb.json
│   ├── semrush.json
│   └── ahrefs.json
├── faqs/
│   ├── annual-vs-perpetual.json
│   ├── try-before-buying.json
│   ├── html-page-count.json
│   ├── data-storage.json
│   ├── license-expiry.json
│   ├── refunds.json
│   ├── device-activations.json
│   └── discounts.json
├── features/
│   ├── technical.json
│   ├── onpage.json
│   ├── content.json
│   ├── links.json
│   ├── images.json
│   ├── performance.json
│   ├── structured.json
│   ├── security.json
│   ├── accessibility.json
│   ├── international.json
│   └── ai.json
├── integrations/
│   ├── google-analytics.json
│   ├── search-console.json
│   ├── pagespeed.json
│   ├── csv-export.json
│   ├── looker-studio.json
│   └── slack.json
├── pricing/
│   ├── starter.json
│   ├── professional.json
│   └── enterprise.json
├── releases/
│   ├── 1-0-0.json
│   ├── 1-1-0.json
│   ├── 1-2-0.json
│   ├── 1-3-0.json
│   └── 1-4-0.json
└── singletons/
    ├── homepage.json
    ├── navigation.json
    └── site-settings.json
```

### 6. Pages Migrated to Keystatic

| Page | Changes |
|------|---------|
| `src/pages/index.astro` | Fetches pricing from Keystatic, passes to Pricing component |
| `src/pages/pricing.astro` | Uses `getPricingTiers()` and `getFAQs()` |
| `src/pages/features.astro` | Uses `getFeatureCategories()`, `getHomepage()`, `getTotalSeoChecks()` |
| `src/pages/changelog.astro` | Uses `getReleases()` |
| `src/components/layout/Header.astro` | Uses `getNavigation()` with fallback |
| `src/components/layout/Footer.astro` | Uses `getNavigation()` with fallback |
| `src/components/home/Pricing.astro` | Accepts props or falls back to data file |

### 7. All Pages Prerendered

Added `export const prerender = true;` to all 23 pages for static generation.

### 8. GitHub Storage Support

Configured dual storage mode in `keystatic.config.ts`:
- **Local mode** (default): Content stored in filesystem
- **GitHub mode**: Content stored in GitHub repository

---

## What's Left To Do

### High Priority

1. **Migrate Remaining Blog Posts**
   - Create Markdoc content files for all 6 blog posts
   - Currently only 1 sample post exists
   - Location: `src/content/blog/`

2. **Migrate Comparison Data**
   - Create JSON files for all 4 competitor comparisons
   - Currently only competitor profiles exist, not full comparison data
   - Location: `src/content/comparisons/`

3. **Migrate Docs Content**
   - Create MDX files for documentation articles
   - Currently no docs content in Keystatic
   - Location: `src/content/docs/`

4. **Update Blog Pages**
   - `src/pages/blog/index.astro` - Fetch from Keystatic
   - `src/pages/blog/[slug].astro` - Create dynamic route using Keystatic

### Medium Priority

5. **Migrate Integrations Page**
   - Update `src/pages/integrations.astro` to use `reader.collections.integrations`
   - Currently uses TypeScript data file

6. **Migrate Compare Pages**
   - Update comparison pages to fetch from Keystatic
   - `src/pages/compare/index.astro`
   - `src/pages/compare/[competitor].astro`

7. **Migrate Docs Page**
   - Update `src/pages/docs/index.astro` to use Keystatic
   - Currently uses `src/data/docs.ts`

### Low Priority

8. **Add More Field Types**
   - Image fields with upload support
   - Rich text components for blog posts
   - Relationship fields between collections

9. **GitHub OAuth Setup**
   - Create GitHub OAuth App
   - Configure environment variables
   - Test cloud editing workflow

10. **Admin UI Customization**
    - Add custom branding to admin dashboard
    - Configure user permissions (if needed)

---

## How to Access Admin UI

### Development

```bash
npm run dev
# Visit http://localhost:4321/keystatic
```

### Production (with GitHub mode)

1. Set environment variables:
   ```
   KEYSTATIC_STORAGE=github
   GITHUB_REPO_OWNER=your-org
   GITHUB_REPO_NAME=seo-crawler
   KEYSTATIC_GITHUB_CLIENT_ID=xxx
   KEYSTATIC_GITHUB_CLIENT_SECRET=xxx
   KEYSTATIC_SECRET=xxx
   ```

2. Deploy the application
3. Visit `https://your-domain.com/keystatic`

---

## Reader API Reference

```typescript
import {
  getPricingTiers,
  getFeatureCategories,
  getFAQs,
  getReleases,
  getAuthors,
  getBlogCategories,
  getBlogPosts,
  getBlogPost,
  getCompetitors,
  getNavigation,
  getSiteSettings,
  getHomepage,
  getTotalSeoChecks,
} from '../lib/keystatic';

// Examples
const tiers = await getPricingTiers();
const faqs = await getFAQs('pricing'); // Filter by category
const releases = await getReleases(); // Sorted by date
const totalChecks = await getTotalSeoChecks(); // Computed value
```

---

## File Structure

```
apps/website/
├── keystatic.config.ts          # Schema definitions
├── astro.config.mjs             # Astro + Keystatic config
├── .env.example                 # Environment variables template
├── src/
│   ├── content/                 # Keystatic content files
│   ├── content.config.ts        # Astro content collections
│   ├── lib/
│   │   └── keystatic.ts         # Reader API utilities
│   ├── data/                    # Legacy TypeScript data (fallback)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro     # Uses Keystatic navigation
│   │   │   └── Footer.astro     # Uses Keystatic navigation
│   │   └── home/
│   │       └── Pricing.astro    # Accepts Keystatic props
│   └── pages/
│       ├── index.astro          # Migrated
│       ├── pricing.astro        # Migrated
│       ├── features.astro       # Migrated
│       └── changelog.astro      # Migrated
```

---

## Notes

- **Backward Compatibility**: Components fall back to TypeScript data files if Keystatic data is unavailable
- **Type Safety**: Full TypeScript types exported from `src/lib/keystatic.ts`
- **Prerendering**: All pages use `export const prerender = true` for static generation
- **Large Chunk Warning**: The Keystatic admin UI (~2.7MB) causes a Vite warning but is only loaded on `/keystatic` routes

---

*Last Updated: February 2026*
