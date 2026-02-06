// Integrations data - All integrations are real from the Crawlix codebase

export type IntegrationStatus = 'available' | 'coming-soon';
export type IntegrationTier = 'free' | 'pro' | 'agency';

export interface Integration {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  logo: string; // Icon name from lucide
  category: string;
  status: IntegrationStatus;
  tier: IntegrationTier;
  features: string[];
  setupTime?: string;
  docsLink?: string;
}

export interface IntegrationCategory {
  id: string;
  name: string;
  description: string;
}

// Integration categories
export const integrationCategories: IntegrationCategory[] = [
  {
    id: 'analytics',
    name: 'Analytics & Traffic',
    description: 'Connect traffic and user behavior data',
  },
  {
    id: 'search',
    name: 'Search Performance',
    description: 'Search rankings and indexation data',
  },
  {
    id: 'performance',
    name: 'Performance & Speed',
    description: 'Core Web Vitals and page speed metrics',
  },
  {
    id: 'export',
    name: 'Data Export',
    description: 'Export crawl data to other tools',
  },
  {
    id: 'coming-soon',
    name: 'Coming Soon',
    description: 'Integrations in development',
  },
];

// All integrations - REAL from Crawlix codebase
export const integrations: Integration[] = [
  // Analytics & Traffic
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    description: 'Sync traffic data, user metrics, and engagement signals with your crawl results.',
    longDescription: 'Connect your GA4 property via OAuth to enrich crawl data with real traffic metrics. See which pages drive traffic, identify orphan pages with visitors but no internal links, and prioritize fixes based on actual user impact.',
    logo: 'BarChart3',
    category: 'analytics',
    status: 'available',
    tier: 'pro',
    features: [
      'Sessions, pageviews, unique visitors',
      'Bounce rate and engagement metrics',
      'Traffic source breakdown (organic, direct, referral)',
      'Average time on page',
      'New vs returning users',
      '30-day rolling data sync',
      'Orphan page detection with traffic',
    ],
    setupTime: '2 minutes',
    docsLink: '/docs/integrations/google-analytics',
  },
  // Search Performance
  {
    id: 'search-console',
    name: 'Google Search Console',
    description: 'Import search performance data, indexation status, and top queries per page.',
    longDescription: 'Connect GSC to see how your pages perform in Google Search. View impressions, clicks, CTR, and average position alongside crawl data. Identify indexed pages with no internal links and pages ranking but not linked internally.',
    logo: 'Search',
    category: 'search',
    status: 'available',
    tier: 'pro',
    features: [
      'Impressions, clicks, CTR, position',
      'Top search queries per page',
      'Device breakdown (desktop, mobile, tablet)',
      'Country-level performance data',
      'Index status tracking',
      'Orphan indexed pages detection',
      'Sitemap discovery from GSC',
    ],
    setupTime: '2 minutes',
    docsLink: '/docs/integrations/search-console',
  },
  // Performance & Speed
  {
    id: 'pagespeed-insights',
    name: 'PageSpeed Insights',
    description: 'Fetch Core Web Vitals and performance scores directly from Google PSI API.',
    longDescription: 'Automatically fetch PageSpeed Insights data for crawled pages. Get LCP, CLS, INP scores along with performance, accessibility, best practices, and SEO audit results. Batch process pages for site-wide performance analysis.',
    logo: 'Gauge',
    category: 'performance',
    status: 'available',
    tier: 'pro',
    features: [
      'Core Web Vitals (LCP, CLS, INP)',
      'Performance score (0-100)',
      'Accessibility score',
      'Best practices score',
      'SEO audit score',
      'Opportunities and diagnostics',
      'Batch fetching for multiple pages',
    ],
    setupTime: '1 minute',
    docsLink: '/docs/integrations/pagespeed-insights',
  },
  // Data Export
  {
    id: 'csv-export',
    name: 'CSV Export',
    description: 'Export pages, issues, links, and resources to CSV for spreadsheet analysis.',
    logo: 'FileSpreadsheet',
    category: 'export',
    status: 'available',
    tier: 'free',
    features: [
      'Export all crawl data tables',
      'Custom column selection',
      'Filtered export support',
      'UTF-8 encoding',
    ],
    setupTime: 'Instant',
  },
  {
    id: 'excel-export',
    name: 'Excel Export',
    description: 'Generate formatted .xlsx spreadsheets with multiple sheets and styling.',
    logo: 'Table',
    category: 'export',
    status: 'available',
    tier: 'pro',
    features: [
      'Multiple sheets by data type',
      'Formatted headers and styling',
      'Auto-column width',
      'White-label support (Agency)',
    ],
    setupTime: 'Instant',
    docsLink: '/docs/exports/excel',
  },
  {
    id: 'pdf-export',
    name: 'PDF Reports',
    description: 'Professional PDF reports with executive summary, charts, and recommendations.',
    logo: 'FileText',
    category: 'export',
    status: 'available',
    tier: 'pro',
    features: [
      'Executive summary',
      'Issue breakdown by category',
      'Visual charts and graphs',
      'White-label branding (Agency)',
      'Custom logo and colors',
    ],
    setupTime: 'Instant',
    docsLink: '/docs/exports/pdf',
  },
  {
    id: 'json-export',
    name: 'JSON Export',
    description: 'Export raw crawl data in JSON format for custom integrations and analysis.',
    logo: 'Braces',
    category: 'export',
    status: 'available',
    tier: 'free',
    features: [
      'Full data structure export',
      'API-ready format',
      'Nested relationships preserved',
    ],
    setupTime: 'Instant',
  },
  {
    id: 'html-reports',
    name: 'Interactive HTML Reports',
    description: 'Shareable HTML reports with filtering, sorting, and data visualization.',
    logo: 'Globe',
    category: 'export',
    status: 'available',
    tier: 'pro',
    features: [
      'Interactive data tables',
      'Client-side filtering and sorting',
      'No server required to view',
      'White-label support (Agency)',
    ],
    setupTime: 'Instant',
    docsLink: '/docs/exports/html',
  },
  // Coming Soon
  {
    id: 'looker-studio',
    name: 'Looker Studio',
    description: 'Connect crawl data to Google Looker Studio for custom dashboards.',
    logo: 'LayoutDashboard',
    category: 'coming-soon',
    status: 'coming-soon',
    tier: 'pro',
    features: [
      'Direct data connection',
      'Custom dashboard templates',
      'Scheduled data refresh',
    ],
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    description: 'Sync crawl data directly to Google Sheets for collaborative analysis.',
    logo: 'Sheet',
    category: 'coming-soon',
    status: 'coming-soon',
    tier: 'pro',
    features: [
      'One-click sync to Sheets',
      'Scheduled updates',
      'Template sheets included',
    ],
  },
  {
    id: 'slack-notifications',
    name: 'Slack Notifications',
    description: 'Get crawl completion and issue alerts directly in your Slack channels.',
    logo: 'MessageSquare',
    category: 'coming-soon',
    status: 'coming-soon',
    tier: 'pro',
    features: [
      'Crawl completion alerts',
      'Issue threshold notifications',
      'Scheduled crawl reminders',
    ],
  },
  {
    id: 'api-access',
    name: 'REST API',
    description: 'Programmatic access to crawl data for custom integrations and automation.',
    logo: 'Code',
    category: 'coming-soon',
    status: 'coming-soon',
    tier: 'agency',
    features: [
      'Full CRUD operations',
      'Webhook support',
      'Rate-limited access',
      'API key authentication',
    ],
  },
];

// Helper functions
export function getIntegrationsByCategory(categoryId: string): Integration[] {
  if (categoryId === 'coming-soon') {
    return integrations.filter(i => i.status === 'coming-soon');
  }
  return integrations.filter(i => i.category === categoryId && i.status === 'available');
}

export function getFeaturedIntegrations(): Integration[] {
  return integrations.filter(i =>
    ['google-analytics', 'search-console', 'pagespeed-insights'].includes(i.id)
  );
}

export function getAvailableIntegrations(): Integration[] {
  return integrations.filter(i => i.status === 'available');
}

export function getComingSoonIntegrations(): Integration[] {
  return integrations.filter(i => i.status === 'coming-soon');
}

// Stats
export const integrationStats = {
  total: integrations.length,
  available: integrations.filter(i => i.status === 'available').length,
  comingSoon: integrations.filter(i => i.status === 'coming-soon').length,
  freeIntegrations: integrations.filter(i => i.tier === 'free').length,
};
