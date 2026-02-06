// Changelog data - All features are real from the Crawlix codebase

export type ChangeType = 'feature' | 'improvement' | 'fix' | 'breaking';

export interface Change {
  type: ChangeType;
  title: string;
  description?: string;
  badge?: string; // e.g., "Pro", "Agency"
}

export interface Release {
  version: string;
  date: string; // ISO date
  title: string;
  summary: string;
  type: 'major' | 'minor' | 'patch';
  changes: Change[];
  highlights?: string[]; // Key features to emphasize
}

// Real releases based on actual implemented features
export const releases: Release[] = [
  {
    version: '1.4.0',
    date: '2026-02-01',
    title: 'Compliance & Enterprise Features',
    summary: 'EU/USA regulatory compliance, team management, and enterprise-grade licensing.',
    type: 'major',
    highlights: [
      'GDPR & CCPA compliance ready',
      'Team management for Agency tier',
      'Perpetual license option',
    ],
    changes: [
      {
        type: 'feature',
        title: 'EU/USA Regulatory Compliance',
        description: 'Built-in GDPR and CCPA compliance mechanisms. All data stays local on your machine—nothing is ever uploaded to external servers.',
      },
      {
        type: 'feature',
        title: 'Team Management',
        description: 'Agency tier now supports up to 5 team seats with configuration sharing across team members.',
        badge: 'Agency',
      },
      {
        type: 'feature',
        title: 'Perpetual License Option',
        description: 'New one-time purchase option: $249 for Pro, $699 for Agency. Includes 1 year of updates.',
      },
      {
        type: 'feature',
        title: 'Configuration Sharing',
        description: 'Export and import crawl configurations. Share settings with team members or across devices.',
        badge: 'Agency',
      },
      {
        type: 'improvement',
        title: 'Hardware-Locked Licenses',
        description: 'Licenses are now tied to machine fingerprint for improved security. Manage activations from your account.',
      },
      {
        type: 'improvement',
        title: 'License Validation',
        description: 'Ed25519 signature verification for license keys with offline support and grace period.',
      },
    ],
  },
  {
    version: '1.3.0',
    date: '2026-01-15',
    title: 'Desktop App & White-Label Reports',
    summary: 'Native desktop application with professional PDF/Excel exports and white-label branding.',
    type: 'major',
    highlights: [
      'Native Windows, macOS, Linux apps',
      'White-label PDF reports',
      'Scheduled crawls automation',
    ],
    changes: [
      {
        type: 'feature',
        title: 'Native Desktop Application',
        description: 'Electron-based desktop app for Windows (64-bit), macOS (Intel & Apple Silicon), and Linux (.deb, .AppImage).',
      },
      {
        type: 'feature',
        title: 'PDF Export with White-Label',
        description: 'Generate professional PDF reports with your logo, colors, and branding. Remove "Powered by Crawlix" on Agency tier.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'Excel Export',
        description: 'Formatted .xlsx spreadsheets with multiple sheets, styling, and white-label support.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'Interactive HTML Reports',
        description: 'Shareable HTML reports with filtering, sorting, and data visualization.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'Scheduled Crawls',
        description: 'Automate crawls on daily, weekly, or monthly schedules. Configure specific times and custom settings per schedule.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'Native Notifications',
        description: 'Desktop notifications for crawl completion, issue alerts, and scheduled crawl reminders.',
      },
      {
        type: 'feature',
        title: 'White-Label Branding',
        description: 'Custom company name, logo (Base64), primary/secondary/accent colors, and custom fonts for reports.',
        badge: 'Agency',
      },
      {
        type: 'feature',
        title: 'Three-Tier Licensing',
        description: 'Free (100 pages), Pro (50K pages, $149/yr), and Agency (unlimited, $399/yr) tiers with Lemon Squeezy integration.',
      },
      {
        type: 'improvement',
        title: 'Dark/Light Theme',
        description: 'System theme detection with manual override. Theme persists across sessions.',
      },
      {
        type: 'improvement',
        title: 'Auto-Updater',
        description: 'Automatic app updates with notification and one-click install.',
      },
    ],
  },
  {
    version: '1.2.0',
    date: '2025-12-20',
    title: 'Google Integrations & AI Analysis',
    summary: 'Connect Google Analytics, Search Console, and PageSpeed Insights. Plus AI search readiness checks.',
    type: 'major',
    highlights: [
      'Google Analytics 4 integration',
      'Search Console integration',
      'AI crawler analysis for 13 bots',
    ],
    changes: [
      {
        type: 'feature',
        title: 'Google Analytics 4 Integration',
        description: 'OAuth connection to GA4. Sync sessions, pageviews, bounce rates, engagement metrics, and traffic sources for the last 30 days.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'Google Search Console Integration',
        description: 'Sync search performance data: impressions, clicks, CTR, average position, and top queries per page.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'PageSpeed Insights Integration',
        description: 'Batch fetch Core Web Vitals, performance scores, and optimization opportunities from Google PSI API.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'Orphan Pages Analysis',
        description: 'Combine crawl data with GA/GSC to find pages with traffic but no internal links. Prioritize by traffic value.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'AI Search Readiness Analysis',
        description: 'Analyze robots.txt for 13 AI crawlers: GPTBot, Google-Extended, ClaudeBot, Bytespider, and more. Get optimization recommendations.',
      },
      {
        type: 'feature',
        title: 'Crawl Comparison',
        description: 'Side-by-side comparison of crawl results. Track improvements and regressions over time.',
        badge: 'Pro',
      },
      {
        type: 'feature',
        title: 'Advanced Filter Builder',
        description: 'Multi-field filtering with regex support. Save and reuse filter presets.',
      },
      {
        type: 'feature',
        title: '31 Specialized Views',
        description: 'New views: AI Analysis, Orphan Pages, Compare, Scheduled Crawls, and more. Total of 31 dedicated analysis views.',
      },
      {
        type: 'improvement',
        title: 'Command Palette',
        description: 'Press Cmd/Ctrl+K to quickly navigate views, run crawl commands, and search across the app.',
      },
      {
        type: 'improvement',
        title: 'Keyboard Shortcuts',
        description: '20+ keyboard shortcuts for navigation (Cmd+1-9), crawl control (Cmd+N/P/R), and data operations.',
      },
    ],
  },
  {
    version: '1.1.0',
    date: '2025-11-15',
    title: 'JavaScript Rendering & Core Web Vitals',
    summary: 'Full JavaScript rendering support, Core Web Vitals measurement, and mobile-first crawling.',
    type: 'major',
    highlights: [
      'JavaScript rendering engine',
      'Core Web Vitals (LCP, CLS, INP)',
      'Custom data extraction',
    ],
    changes: [
      {
        type: 'feature',
        title: 'JavaScript Rendering Engine',
        description: 'Puppeteer-based rendering with configurable wait strategies: load, DOMContentLoaded, networkidle0/2, and custom selectors.',
      },
      {
        type: 'feature',
        title: 'Core Web Vitals Measurement',
        description: 'Measure LCP, CLS, INP, FCP, TTFB, TBT, TTI, and Speed Index using Chrome DevTools Protocol. Includes pass/fail ratings per Google thresholds.',
      },
      {
        type: 'feature',
        title: 'Mobile-First Crawling',
        description: 'Mobile device emulation with 7+ pre-configured devices. Touch target analysis, viewport validation, and mobile usability scoring.',
      },
      {
        type: 'feature',
        title: 'Resource Blocking',
        description: 'Block images, fonts, stylesheets, or specific scripts (analytics, ads) during JS rendering for faster crawls.',
      },
      {
        type: 'feature',
        title: 'Lazy Loading Detection',
        description: 'Detect scroll-based lazy loading and infinite scroll. Configurable scroll behavior for complete page capture.',
      },
      {
        type: 'feature',
        title: 'Custom Data Extraction',
        description: 'Extract any data using CSS selectors, XPath, regex, JSON-LD, or meta tags. Apply transforms (trim, regex replace, etc.) and validation rules.',
      },
      {
        type: 'feature',
        title: 'Extraction Templates',
        description: 'Pre-built templates for e-commerce (price, SKU), blogs (author, date), and contact pages. Create and share custom templates.',
      },
      {
        type: 'feature',
        title: 'Screenshot Capture',
        description: 'Capture viewport or full-page screenshots during crawl. Useful for visual regression and documentation.',
      },
      {
        type: 'feature',
        title: 'Console & Error Capture',
        description: 'Capture JavaScript console messages (log, warn, error) and runtime errors during rendering.',
      },
      {
        type: 'improvement',
        title: 'Site Structure Visualization',
        description: 'Force graph, hierarchy tree, sunburst chart, and directory treemap visualizations for site structure analysis.',
      },
    ],
  },
  {
    version: '1.0.0',
    date: '2025-10-01',
    title: 'Initial Release',
    summary: 'Crawlix launches with 97+ SEO checks, high-performance crawling, and privacy-first architecture.',
    type: 'major',
    highlights: [
      '97+ automated SEO checks',
      '10x faster than v1 engine',
      '100% local data storage',
    ],
    changes: [
      {
        type: 'feature',
        title: 'High-Performance Crawler Engine',
        description: 'CrawlerV2 with HTTP/2 multiplexing, connection pooling, Bloom filter deduplication, and batch database writes. 10x throughput improvement.',
      },
      {
        type: 'feature',
        title: '97+ SEO Checks',
        description: 'Comprehensive analysis across 9 categories: Technical SEO, On-Page, Content Quality, Links, Images, Structured Data, Security, Accessibility, and International SEO.',
      },
      {
        type: 'feature',
        title: 'Technical SEO Analysis',
        description: '20+ checks: status codes, soft 404 detection, canonicals, redirect chains, HTTPS, URL structure, and crawl depth.',
      },
      {
        type: 'feature',
        title: 'On-Page SEO Analysis',
        description: '25+ checks: title tags, meta descriptions, heading hierarchy (H1-H6), Open Graph, and Twitter Cards.',
      },
      {
        type: 'feature',
        title: 'Content Quality Analysis',
        description: '15+ checks: word count, readability scoring (Flesch/Arabic), duplicate detection, keyword stuffing, and thin content.',
      },
      {
        type: 'feature',
        title: 'Accessibility Audit (WCAG)',
        description: '10+ checks aligned with WCAG 2.1: alt text, form labels, button names, skip links, duplicate IDs, and more.',
      },
      {
        type: 'feature',
        title: 'Security Header Validation',
        description: 'Check for HSTS, CSP, X-Frame-Options, X-Content-Type-Options, and mixed content issues.',
      },
      {
        type: 'feature',
        title: 'Structured Data Validation',
        description: 'JSON-LD parsing and validation. Detect Article, Product, Organization, BreadcrumbList, and FAQ schemas.',
      },
      {
        type: 'feature',
        title: 'Robots.txt & Sitemap Parsing',
        description: 'Respect crawl rules, auto-discover URLs from sitemaps, and validate sitemap accuracy.',
      },
      {
        type: 'feature',
        title: 'Local SQLite Database',
        description: 'All crawl data stored locally in SQLite. Your data never leaves your machine. Export anytime.',
      },
      {
        type: 'feature',
        title: 'CSV & JSON Export',
        description: 'Export pages, issues, links, and resources to CSV or JSON for further analysis.',
      },
      {
        type: 'feature',
        title: 'Checkpoint & Resume',
        description: 'Pause crawls and resume later. Automatic checkpoints every 30 seconds.',
      },
      {
        type: 'improvement',
        title: 'Memory-Efficient Streaming',
        description: 'URL frontier with configurable size (default 100K URLs). Bloom filter prevents duplicate crawling with O(1) lookups.',
      },
      {
        type: 'improvement',
        title: 'Per-Domain Politeness',
        description: 'Configurable crawl delay (default 350ms) per domain. Respects robots.txt Crawl-delay directive.',
      },
    ],
  },
];

// Helper functions
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getChangeTypeColor(type: ChangeType): { bg: string; text: string; border: string } {
  switch (type) {
    case 'feature':
      return { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' };
    case 'improvement':
      return { bg: 'bg-sky-500/20', text: 'text-sky-400', border: 'border-sky-500/30' };
    case 'fix':
      return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' };
    case 'breaking':
      return { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' };
    default:
      return { bg: 'bg-slate-500/20', text: 'text-slate-400', border: 'border-slate-500/30' };
  }
}

export function getChangeTypeLabel(type: ChangeType): string {
  switch (type) {
    case 'feature':
      return 'New';
    case 'improvement':
      return 'Improved';
    case 'fix':
      return 'Fixed';
    case 'breaking':
      return 'Breaking';
    default:
      return type;
  }
}

export function getChangeTypeIcon(type: ChangeType): string {
  switch (type) {
    case 'feature':
      return '✨';
    case 'improvement':
      return '⚡';
    case 'fix':
      return '🐛';
    case 'breaking':
      return '⚠️';
    default:
      return '•';
  }
}

// Get all unique change types for filtering
export function getAllChangeTypes(): ChangeType[] {
  const types = new Set<ChangeType>();
  releases.forEach(r => r.changes.forEach(c => types.add(c.type)));
  return Array.from(types);
}

// Stats
export const changelogStats = {
  totalReleases: releases.length,
  totalFeatures: releases.reduce((acc, r) => acc + r.changes.filter(c => c.type === 'feature').length, 0),
  totalImprovements: releases.reduce((acc, r) => acc + r.changes.filter(c => c.type === 'improvement').length, 0),
  latestVersion: releases[0].version,
  latestDate: releases[0].date,
};
