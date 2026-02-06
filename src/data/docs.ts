// Documentation data - All information is from the actual Crawlix codebase

export interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  articles: DocArticle[];
}

export interface DocArticle {
  title: string;
  slug: string;
  description: string;
  badge?: 'new' | 'updated' | 'pro' | 'agency';
}

export interface QuickStart {
  step: number;
  title: string;
  description: string;
  code?: string;
  link?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

// Quick start guide - actual first steps
export const quickStartSteps: QuickStart[] = [
  {
    step: 1,
    title: 'Download Crawlix',
    description: 'Get the installer for your operating system. Available for Windows (64-bit), macOS (Intel & Apple Silicon), and Linux (.deb, .AppImage).',
    link: '/download',
  },
  {
    step: 2,
    title: 'Enter a URL',
    description: 'Launch Crawlix and paste any website URL in the start field. The crawler will automatically discover and map the entire site structure.',
  },
  {
    step: 3,
    title: 'Configure your crawl',
    description: 'Adjust settings like max pages (100 free, 50K pro), crawl depth, JavaScript rendering, and resource blocking.',
  },
  {
    step: 4,
    title: 'Start crawling',
    description: 'Click "Start Crawl" and watch real-time progress. Crawlix runs 97+ SEO checks on every page in parallel.',
  },
  {
    step: 5,
    title: 'Review issues',
    description: 'Browse issues by category (technical, content, accessibility, security) and filter by severity. Export to CSV, Excel, or PDF.',
  },
];

// Documentation sections with real features from codebase
export const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Installation, first crawl, and basic navigation',
    icon: 'Rocket',
    articles: [
      {
        title: 'System Requirements',
        slug: 'getting-started/system-requirements',
        description: 'Minimum specs: Windows 10+, macOS 10.15+, or Ubuntu 20.04+. 4GB RAM (8GB recommended), 500MB disk space.',
      },
      {
        title: 'Installation Guide',
        slug: 'getting-started/installation',
        description: 'Step-by-step installation for Windows (.exe), macOS (.dmg), and Linux (.deb, .AppImage).',
      },
      {
        title: 'Your First Crawl',
        slug: 'getting-started/first-crawl',
        description: 'Enter a URL, configure basic settings, and run your first website audit.',
      },
      {
        title: 'Understanding the Dashboard',
        slug: 'getting-started/dashboard',
        description: 'Navigate the 30+ views including Pages, Issues, Core Web Vitals, and Site Structure.',
      },
      {
        title: 'Keyboard Shortcuts',
        slug: 'getting-started/keyboard-shortcuts',
        description: 'Command palette (Cmd/Ctrl+K), quick navigation, and productivity shortcuts.',
      },
    ],
  },
  {
    id: 'crawl-configuration',
    title: 'Crawl Configuration',
    description: 'Customize crawl settings, scope, and performance',
    icon: 'Settings',
    articles: [
      {
        title: 'Basic Settings',
        slug: 'configuration/basic-settings',
        description: 'Max pages, crawl depth (default 10), concurrent workers (1-20), and request timeout.',
      },
      {
        title: 'Crawl Scope',
        slug: 'configuration/crawl-scope',
        description: 'Include/exclude patterns (regex), subdomains, external links, and robots.txt compliance.',
      },
      {
        title: 'Performance Tuning',
        slug: 'configuration/performance',
        description: 'Concurrent workers, crawl delay (default 350ms), memory limits, and batch sizes.',
      },
      {
        title: 'User Agents',
        slug: 'configuration/user-agents',
        description: 'Default Crawlix user agent and custom user agent configuration (Pro feature).',
        badge: 'pro',
      },
      {
        title: 'URL Filtering',
        slug: 'configuration/url-filtering',
        description: 'Include/exclude patterns, skip query parameters, and follow nofollow links.',
      },
      {
        title: 'Saved Configurations',
        slug: 'configuration/saved-configs',
        description: 'Save crawl configurations per website for consistent audits.',
      },
    ],
  },
  {
    id: 'seo-checks',
    title: 'SEO Checks (97+)',
    description: 'All technical, content, and accessibility audits',
    icon: 'Search',
    articles: [
      {
        title: 'Technical SEO (20+ checks)',
        slug: 'seo-checks/technical',
        description: 'Status codes, canonicals, redirects, HTTPS, URL structure, viewport, and crawl depth.',
      },
      {
        title: 'On-Page SEO (25+ checks)',
        slug: 'seo-checks/on-page',
        description: 'Title tags, meta descriptions, heading hierarchy (H1-H6), Open Graph, and Twitter Cards.',
      },
      {
        title: 'Content Quality (15+ checks)',
        slug: 'seo-checks/content',
        description: 'Word count, readability scoring (Flesch/Arabic), keyword stuffing, and thin content.',
      },
      {
        title: 'Link Analysis (15+ checks)',
        slug: 'seo-checks/links',
        description: 'Internal/external links, broken links, anchor text quality, and nofollow distribution.',
      },
      {
        title: 'Image Optimization (10+ checks)',
        slug: 'seo-checks/images',
        description: 'Alt text, dimensions, lazy loading, file sizes, and generic filenames.',
      },
      {
        title: 'Structured Data (10+ checks)',
        slug: 'seo-checks/structured-data',
        description: 'JSON-LD validation, schema types, breadcrumbs, and missing structured data.',
      },
      {
        title: 'Security Checks (10+ checks)',
        slug: 'seo-checks/security',
        description: 'Mixed content, security headers (HSTS, CSP, X-Frame-Options), and form security.',
      },
      {
        title: 'Accessibility (WCAG)',
        slug: 'seo-checks/accessibility',
        description: '10+ WCAG checks: alt text, form labels, button names, skip links, and tabindex.',
      },
      {
        title: 'International SEO',
        slug: 'seo-checks/international',
        description: 'Hreflang validation, x-default, self-referencing, and language codes.',
      },
    ],
  },
  {
    id: 'javascript-rendering',
    title: 'JavaScript Rendering',
    description: 'Crawl JavaScript-heavy SPAs and dynamic content',
    icon: 'Code',
    articles: [
      {
        title: 'Enabling JS Rendering',
        slug: 'js-rendering/enable',
        description: 'Toggle JavaScript rendering and configure Puppeteer-based browser engine.',
        badge: 'pro',
      },
      {
        title: 'Wait Strategies',
        slug: 'js-rendering/wait-strategies',
        description: 'Load, DOMContentLoaded, networkidle0/2, and custom wait conditions.',
        badge: 'pro',
      },
      {
        title: 'Resource Blocking',
        slug: 'js-rendering/resource-blocking',
        description: 'Block images, fonts, stylesheets, and specific scripts (analytics, ads) for speed.',
        badge: 'pro',
      },
      {
        title: 'Lazy Loading Detection',
        slug: 'js-rendering/lazy-loading',
        description: 'Scroll-based detection, infinite scroll handling, and configurable scroll behavior.',
        badge: 'pro',
      },
      {
        title: 'Mobile Simulation',
        slug: 'js-rendering/mobile',
        description: 'Viewport settings, device scale factor, and mobile-specific rendering.',
        badge: 'pro',
      },
      {
        title: 'Debugging JS Issues',
        slug: 'js-rendering/debugging',
        description: 'Console capture, JS error logging, network request analysis, and screenshots.',
        badge: 'pro',
      },
    ],
  },
  {
    id: 'core-web-vitals',
    title: 'Core Web Vitals',
    description: 'Measure LCP, CLS, INP, and performance metrics',
    icon: 'Gauge',
    articles: [
      {
        title: 'Understanding CWV',
        slug: 'core-web-vitals/overview',
        description: 'LCP (≤2.5s), CLS (≤0.1), INP (≤200ms) - Google\'s ranking signals explained.',
      },
      {
        title: 'Measuring with Crawlix',
        slug: 'core-web-vitals/measuring',
        description: 'Chrome DevTools Protocol metrics: LCP, CLS, FCP, TTFB, TBT, TTI, and Speed Index.',
      },
      {
        title: 'Resource Breakdown',
        slug: 'core-web-vitals/resources',
        description: 'Analyze bytes by type: HTML, CSS, JavaScript, images, fonts, and total requests.',
      },
      {
        title: 'Historical Tracking',
        slug: 'core-web-vitals/history',
        description: 'Track CWV changes over time with cwv_history storage.',
      },
      {
        title: 'PageSpeed Insights Integration',
        slug: 'core-web-vitals/pagespeed',
        description: 'Sync lab and field data from Google PageSpeed Insights API.',
        badge: 'pro',
      },
    ],
  },
  {
    id: 'custom-extraction',
    title: 'Custom Extraction',
    description: 'Extract custom data from any webpage',
    icon: 'FileCode',
    articles: [
      {
        title: 'Extraction Methods',
        slug: 'extraction/methods',
        description: 'CSS selectors, XPath, regex, JSON-LD, meta tags, Open Graph, and attributes.',
      },
      {
        title: 'Creating Rules',
        slug: 'extraction/creating-rules',
        description: 'Define extraction targets: text, HTML, attributes, or full element.',
      },
      {
        title: 'Data Transforms',
        slug: 'extraction/transforms',
        description: 'Apply transforms: trim, lowercase, regex_replace, prefix/suffix, and number extraction.',
      },
      {
        title: 'Validation Rules',
        slug: 'extraction/validation',
        description: 'Required fields, regex validation, min/max length, and type checking.',
      },
      {
        title: 'Templates & Presets',
        slug: 'extraction/templates',
        description: 'Reusable templates for ecommerce, blogs, contact pages, and custom sites.',
      },
      {
        title: 'Sharing Rules',
        slug: 'extraction/sharing',
        description: 'Make extraction rules public for community sharing.',
        badge: 'agency',
      },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect Google Analytics, Search Console, and more',
    icon: 'Plug',
    articles: [
      {
        title: 'Google Analytics 4',
        slug: 'integrations/google-analytics',
        description: 'OAuth connection, traffic metrics, engagement data, and traffic source breakdown.',
        badge: 'pro',
      },
      {
        title: 'Google Search Console',
        slug: 'integrations/search-console',
        description: 'Search performance (impressions, clicks, CTR, position), index status, and queries.',
        badge: 'pro',
      },
      {
        title: 'PageSpeed Insights',
        slug: 'integrations/pagespeed-insights',
        description: 'Core Web Vitals data, performance ratings, and resource analysis.',
        badge: 'pro',
      },
      {
        title: 'Orphan Pages Analysis',
        slug: 'integrations/orphan-pages',
        description: 'Combine GA, GSC, and crawl data to find unlinked pages with traffic value.',
        badge: 'pro',
      },
    ],
  },
  {
    id: 'exports-reports',
    title: 'Exports & Reports',
    description: 'Export data and generate professional reports',
    icon: 'Download',
    articles: [
      {
        title: 'CSV Export',
        slug: 'exports/csv',
        description: 'Export pages, issues, links, and resources as CSV for spreadsheet analysis.',
      },
      {
        title: 'Excel Export',
        slug: 'exports/excel',
        description: 'Formatted .xlsx spreadsheets with multiple sheets and styling.',
        badge: 'pro',
      },
      {
        title: 'PDF Reports',
        slug: 'exports/pdf',
        description: 'Professional PDF reports with executive summary, issue breakdown, and recommendations.',
        badge: 'pro',
      },
      {
        title: 'Interactive HTML',
        slug: 'exports/html',
        description: 'Shareable HTML reports with filtering, sorting, and data visualization.',
        badge: 'pro',
      },
      {
        title: 'API Export',
        slug: 'exports/api',
        description: 'Direct API access to crawl data for custom integrations.',
        badge: 'agency',
      },
    ],
  },
  {
    id: 'white-label',
    title: 'White-Label Branding',
    description: 'Customize reports with your agency branding',
    icon: 'Palette',
    articles: [
      {
        title: 'Setting Up Your Brand',
        slug: 'white-label/setup',
        description: 'Configure company name, logo (Base64), and contact information.',
        badge: 'agency',
      },
      {
        title: 'Custom Colors',
        slug: 'white-label/colors',
        description: 'Set primary, secondary, and accent colors for PDF reports.',
        badge: 'agency',
      },
      {
        title: 'Custom Fonts',
        slug: 'white-label/fonts',
        description: 'Choose header and body fonts for professional consistency.',
        badge: 'agency',
      },
      {
        title: 'Removing "Powered by"',
        slug: 'white-label/powered-by',
        description: 'Hide Crawlix branding for fully white-labeled client deliverables.',
        badge: 'agency',
      },
    ],
  },
  {
    id: 'scheduled-crawls',
    title: 'Scheduled Crawls',
    description: 'Automate regular website audits',
    icon: 'Clock',
    articles: [
      {
        title: 'Creating Schedules',
        slug: 'scheduling/create',
        description: 'Set up daily, weekly, or monthly automated crawls.',
        badge: 'pro',
      },
      {
        title: 'Schedule Configuration',
        slug: 'scheduling/configuration',
        description: 'Custom crawl settings per schedule, time selection, and enable/disable toggle.',
        badge: 'pro',
      },
      {
        title: 'Managing Schedules',
        slug: 'scheduling/manage',
        description: 'View, edit, delete schedules. Track last run and next scheduled time.',
        badge: 'pro',
      },
      {
        title: 'Crawl Comparison',
        slug: 'scheduling/comparison',
        description: 'Compare crawl results over time to track SEO progress.',
        badge: 'pro',
      },
    ],
  },
  {
    id: 'ai-readiness',
    title: 'AI Search Readiness',
    description: 'Optimize for AI crawlers and LLMs',
    icon: 'Bot',
    articles: [
      {
        title: 'AI Crawler Analysis',
        slug: 'ai-readiness/analysis',
        description: 'Check robots.txt blocking for 13 AI crawlers: GPTBot, Google-Extended, ClaudeBot, and more.',
      },
      {
        title: 'AI Bot Detection',
        slug: 'ai-readiness/detection',
        description: 'Identify which AI models can access your content: OpenAI, Google, Anthropic, ByteDance.',
      },
      {
        title: 'Optimization Tips',
        slug: 'ai-readiness/optimization',
        description: 'Robots.txt recommendations for AI crawler access control.',
      },
    ],
  },
  {
    id: 'licensing',
    title: 'Licensing',
    description: 'License activation, tiers, and device management',
    icon: 'Key',
    articles: [
      {
        title: 'Tier Comparison',
        slug: 'licensing/tiers',
        description: 'Free (100 pages), Pro (50K pages, $149/yr), Agency (unlimited, $399/yr).',
      },
      {
        title: 'License Activation',
        slug: 'licensing/activation',
        description: 'Enter your license key, hardware fingerprinting, and online validation.',
      },
      {
        title: 'Managing Devices',
        slug: 'licensing/devices',
        description: 'Max activations: Free (1), Pro (3), Agency (5). Deactivate to free slots.',
      },
      {
        title: 'Annual vs Perpetual',
        slug: 'licensing/license-types',
        description: 'Subscription includes updates. Perpetual is one-time with 1 year of updates.',
      },
      {
        title: 'Team Management',
        slug: 'licensing/teams',
        description: 'Invite team members, share configurations, and manage seats.',
        badge: 'agency',
      },
    ],
  },
  {
    id: 'data-storage',
    title: 'Data & Privacy',
    description: 'How Crawlix stores and protects your data',
    icon: 'Database',
    articles: [
      {
        title: 'Local Storage',
        slug: 'data/local-storage',
        description: 'All data stored in local SQLite database. Nothing uploaded to servers.',
      },
      {
        title: 'Database Schema',
        slug: 'data/schema',
        description: '20+ tables: crawl_sessions, pages, links, resources, issues, and more.',
      },
      {
        title: 'Data Retention',
        slug: 'data/retention',
        description: 'Configure auto-cleanup policies for old crawl data.',
      },
      {
        title: 'Backup & Restore',
        slug: 'data/backup',
        description: 'Export and import crawl sessions for backup.',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    icon: 'LifeBuoy',
    articles: [
      {
        title: 'Crawl Errors',
        slug: 'troubleshooting/crawl-errors',
        description: 'Timeout issues, connection failures, blocked requests, and memory limits.',
      },
      {
        title: 'JavaScript Rendering Issues',
        slug: 'troubleshooting/js-rendering',
        description: 'Pages not rendering, infinite loops, resource blocking conflicts.',
      },
      {
        title: 'Integration Problems',
        slug: 'troubleshooting/integrations',
        description: 'OAuth failures, sync errors, and API rate limits.',
      },
      {
        title: 'License Issues',
        slug: 'troubleshooting/license',
        description: 'Activation failures, device limits, and license validation.',
      },
      {
        title: 'Performance Optimization',
        slug: 'troubleshooting/performance',
        description: 'Slow crawls, high memory usage, and large site strategies.',
      },
    ],
  },
];

// Popular/featured topics for quick access
export const popularTopics = [
  { title: 'Your First Crawl', slug: 'getting-started/first-crawl', icon: 'Play' },
  { title: 'JavaScript Rendering', slug: 'js-rendering/enable', icon: 'Code', badge: 'pro' as const },
  { title: 'Core Web Vitals', slug: 'core-web-vitals/overview', icon: 'Gauge' },
  { title: 'Export PDF Reports', slug: 'exports/pdf', icon: 'FileText', badge: 'pro' as const },
  { title: 'Custom Extraction', slug: 'extraction/methods', icon: 'FileCode' },
  { title: 'Connect Google Analytics', slug: 'integrations/google-analytics', icon: 'BarChart', badge: 'pro' as const },
];

// FAQ for documentation - real answers
export const docsFaqs: FAQ[] = [
  {
    question: 'How many pages can I crawl?',
    answer: 'Free tier: 100 HTML pages per crawl. Pro tier: 50,000 pages. Agency tier: Unlimited. Note: Only text/html pages count - CSS, JS, images, and other resources don\'t count toward your limit.',
    category: 'Limits',
  },
  {
    question: 'Does Crawlix work with JavaScript websites?',
    answer: 'Yes! Crawlix includes a full Puppeteer-based browser engine for JavaScript rendering (Pro feature). Configure wait strategies (networkidle, selector), block resources for speed, and detect lazy-loaded content.',
    category: 'Features',
  },
  {
    question: 'Where is my crawl data stored?',
    answer: 'All data is stored locally in a SQLite database on your machine. Crawlix never uploads your crawl data to any server. You have complete data ownership and privacy.',
    category: 'Privacy',
  },
  {
    question: 'What SEO checks does Crawlix perform?',
    answer: 'Crawlix runs 97+ checks across 9 categories: Technical SEO (status codes, canonicals, redirects), On-Page (titles, meta, headings), Content (readability, word count), Links, Images, Structured Data, Security, Accessibility (WCAG), and International SEO (hreflang).',
    category: 'Features',
  },
  {
    question: 'Can I use Crawlix on multiple computers?',
    answer: 'Each license is permanently bound to one device (Free and Pro tiers). Agency tier allows 5 devices for team use. If you need to transfer your license to a new device, contact support@crawlix.app.',
    category: 'Licensing',
  },
  {
    question: 'How do I connect Google Analytics?',
    answer: 'Go to Settings > Integrations > Google Analytics 4. Click "Connect" to authorize via OAuth. Crawlix will sync sessions, pageviews, bounce rates, and traffic sources for the last 30 days (Pro feature).',
    category: 'Integrations',
  },
  {
    question: 'What\'s the difference between annual and perpetual licenses?',
    answer: 'Annual licenses ($149/yr Pro, $399/yr Agency) include continuous updates during subscription. Perpetual licenses ($249 Pro, $699 Agency) are one-time purchases with 1 year of updates included.',
    category: 'Licensing',
  },
  {
    question: 'How do I crawl large websites efficiently?',
    answer: 'Increase concurrent workers (up to 20), set appropriate crawl delays (350ms+ recommended), use include/exclude patterns to focus on important sections, and consider blocking unnecessary resources during JS rendering.',
    category: 'Performance',
  },
];

// Crawler default configuration - actual defaults from codebase
export const crawlerDefaults = {
  maxPages: { free: 100, pro: 50000, agency: 'Unlimited' },
  maxDepth: 10,
  concurrentWorkers: 5,
  crawlDelay: 350, // ms
  timeout: 30000, // ms
  batchSize: 50,
  checkpointInterval: 30000, // ms
  maxMemoryMB: 2048,
  userAgent: 'Crawlix/2.0 (compatible; SEO Crawler; +https://crawlix.io/bot)',
};

// AI crawlers analyzed
export const aiCrawlers = [
  { name: 'GPTBot', company: 'OpenAI' },
  { name: 'Google-Extended', company: 'Google (Gemini)' },
  { name: 'anthropic-ai', company: 'Anthropic' },
  { name: 'ClaudeBot', company: 'Anthropic' },
  { name: 'CCBot', company: 'Common Crawl' },
  { name: 'Bytespider', company: 'ByteDance (TikTok)' },
  { name: 'Amazonbot', company: 'Amazon' },
  { name: 'FacebookBot', company: 'Meta' },
  { name: 'Applebot-Extended', company: 'Apple' },
  { name: 'PerplexityBot', company: 'Perplexity AI' },
  { name: 'YouBot', company: 'You.com' },
  { name: 'cohere-ai', company: 'Cohere' },
];

// View names in the app
export const dashboardViews = [
  'Dashboard', 'Pages', 'Issues', 'Core Web Vitals', 'Images', 'Links',
  'Internal Links', 'Accessibility', 'Security', 'Schema', 'Content',
  'Redirect Chains', 'Canonicals', 'Hreflang', 'Duplicates', 'Crawl Depth',
  'Sitemap Validation', 'Site Structure', 'Orphan Pages', 'Indexability',
  'Mobile', 'Resources', 'Compare', 'Export', 'Extraction', 'Scheduled Crawls',
  'Saved Websites', 'Log Analysis', 'Crawl History', 'Settings', 'AI Analysis',
];
