export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  checkCount: number;
  features: Feature[];
}

// Real feature categories based on actual SEO analyzer implementation
export const featureCategories: FeatureCategory[] = [
  {
    id: 'technical',
    name: 'Technical SEO',
    description: 'Find and fix technical issues that hurt rankings',
    icon: 'Wrench',
    color: 'sky',
    checkCount: 20,
    features: [
      { title: 'HTTP Status Validation', description: 'Detect 4xx, 5xx errors and track response codes' },
      { title: 'Redirect Chain Detection', description: 'Find redirect loops and chains over 3 hops' },
      { title: 'Canonical Tag Validation', description: 'Check for missing, multiple, or invalid canonicals' },
      { title: 'Meta Robots Analysis', description: 'Audit noindex, nofollow, and X-Robots-Tag headers' },
      { title: 'URL Structure Checks', description: 'Validate path length, uppercase, underscores, encoding' },
      { title: 'HTTPS Enforcement', description: 'Verify secure protocol usage across all pages' },
      { title: 'Pagination Validation', description: 'Check rel=next/prev implementation' },
      { title: 'DOCTYPE & Charset', description: 'Validate HTML document structure' },
      { title: 'Viewport Meta Tag', description: 'Ensure mobile responsiveness is enabled' },
      { title: 'Crawl Depth Analysis', description: 'Identify pages too deep in site structure' },
    ],
  },
  {
    id: 'onpage',
    name: 'On-Page SEO',
    description: 'Optimize page elements for search engines',
    icon: 'FileText',
    color: 'violet',
    checkCount: 25,
    features: [
      { title: 'Title Tag Optimization', description: 'Validate presence, length (50-60 chars), uniqueness' },
      { title: 'Meta Description Audit', description: 'Check length (120-160 chars) and duplicates' },
      { title: 'H1 Tag Validation', description: 'Ensure single, optimized H1 per page' },
      { title: 'Heading Hierarchy', description: 'Analyze H2-H6 structure and sequence' },
      { title: 'Open Graph Tags', description: 'Validate og:title, og:description, og:image' },
      { title: 'Twitter Card Tags', description: 'Check Twitter meta tag implementation' },
      { title: 'Favicon Detection', description: 'Verify favicon is present and accessible' },
      { title: 'Multiple Title Detection', description: 'Flag pages with duplicate title tags' },
      { title: 'Generic Title Detection', description: 'Find "Untitled", "Home", placeholder titles' },
      { title: 'H1 vs Title Comparison', description: 'Compare heading and title tag alignment' },
    ],
  },
  {
    id: 'content',
    name: 'Content Quality',
    description: 'Analyze content for users and search engines',
    icon: 'BookOpen',
    color: 'emerald',
    checkCount: 15,
    features: [
      { title: 'Word Count Analysis', description: 'Detect thin content (<100 words) and short pages' },
      { title: 'Duplicate Content Detection', description: 'Find duplicate pages via content hashing' },
      { title: 'Readability Scoring', description: 'Flesch Reading Ease for English content' },
      { title: 'Keyword Stuffing Detection', description: 'Flag excessive keyword usage (>5%)' },
      { title: 'Placeholder Text Detection', description: 'Find Lorem Ipsum and test content' },
      { title: 'Text-to-HTML Ratio', description: 'Identify pages with low content ratio (<10%)' },
      { title: 'Hidden Text Detection', description: 'Find display:none and visibility:hidden text' },
      { title: 'Paragraph Structure', description: 'Analyze paragraph usage and length' },
      { title: 'Bold Tag Overuse', description: 'Flag excessive <strong> tag usage (>20)' },
      { title: 'Content Language Detection', description: 'Auto-detect page language' },
    ],
  },
  {
    id: 'links',
    name: 'Link Analysis',
    description: 'Audit internal and external link structure',
    icon: 'Link',
    color: 'amber',
    checkCount: 15,
    features: [
      { title: 'Broken Link Detection', description: 'Find internal and external broken links' },
      { title: 'Internal Link Count', description: 'Flag pages with too few (<3) or too many (>100) links' },
      { title: 'Anchor Text Analysis', description: 'Detect empty and generic anchor text' },
      { title: 'Noopener/Noreferrer', description: 'Check external links for security attributes' },
      { title: 'Nofollow Usage', description: 'Analyze nofollow distribution on internal links' },
      { title: 'Orphan Page Detection', description: 'Find pages not linked from other pages' },
      { title: 'Link Depth Analysis', description: 'Measure clicks from homepage to each page' },
      { title: 'External Link Inventory', description: 'List all outbound links by domain' },
      { title: 'JavaScript Link Detection', description: 'Find links using javascript:void' },
      { title: 'Empty Href Detection', description: 'Flag links with empty or # href values' },
    ],
  },
  {
    id: 'images',
    name: 'Image Optimization',
    description: 'Ensure images are optimized for SEO and performance',
    icon: 'Image',
    color: 'rose',
    checkCount: 10,
    features: [
      { title: 'Missing Alt Text', description: 'Find images without alt attributes' },
      { title: 'Alt Text Length', description: 'Flag overly long alt text (>125 chars)' },
      { title: 'Missing Dimensions', description: 'Detect images without width/height (CLS impact)' },
      { title: 'Generic Filenames', description: 'Find img1.jpg, image_001.png patterns' },
      { title: 'Lazy Loading', description: 'Check for loading="lazy" on below-fold images' },
      { title: 'Image File Size', description: 'Identify oversized images affecting performance' },
      { title: 'Image Format Analysis', description: 'Recommend modern formats (WebP, AVIF)' },
      { title: 'Decorative Image Check', description: 'Validate empty alt on decorative images' },
    ],
  },
  {
    id: 'performance',
    name: 'Performance & Core Web Vitals',
    description: 'Measure speed and user experience metrics',
    icon: 'Gauge',
    color: 'cyan',
    checkCount: 12,
    features: [
      { title: 'Largest Contentful Paint (LCP)', description: 'Loading performance (target <2.5s)' },
      { title: 'Cumulative Layout Shift (CLS)', description: 'Visual stability (target <0.1)' },
      { title: 'Interaction to Next Paint (INP)', description: 'Interactivity (target <200ms)' },
      { title: 'First Contentful Paint (FCP)', description: 'Initial render time (target <1.8s)' },
      { title: 'Time to First Byte (TTFB)', description: 'Server response time (target <600ms)' },
      { title: 'Total Blocking Time (TBT)', description: 'Main thread blocking (target <200ms)' },
      { title: 'Resource Size Analysis', description: 'Track HTML, CSS, JS, image bytes' },
      { title: 'Request Count', description: 'Total HTTP requests per page' },
      { title: 'Compression Check', description: 'Verify gzip/brotli compression' },
      { title: 'Cache Header Validation', description: 'Check cache-control headers' },
    ],
  },
  {
    id: 'structured',
    name: 'Structured Data',
    description: 'Validate Schema.org markup and rich results',
    icon: 'Code',
    color: 'indigo',
    checkCount: 6,
    features: [
      { title: 'JSON-LD Detection', description: 'Find and parse Schema.org JSON-LD' },
      { title: 'Schema Validation', description: 'Check for valid @context and @type' },
      { title: 'Required Schema Types', description: 'Recommend Article, BlogPosting schemas' },
      { title: 'Breadcrumb Schema', description: 'Validate breadcrumb markup' },
      { title: 'FAQ Schema', description: 'Check FAQ page structured data' },
      { title: 'Schema Type Inventory', description: 'List all schema types found on site' },
    ],
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Check security headers and HTTPS implementation',
    icon: 'Shield',
    color: 'orange',
    checkCount: 10,
    features: [
      { title: 'HTTPS Enforcement', description: 'Verify all pages use secure protocol' },
      { title: 'Mixed Content Detection', description: 'Find HTTP resources on HTTPS pages' },
      { title: 'Security Headers', description: 'Check HSTS, X-Frame-Options, CSP headers' },
      { title: 'Insecure Forms', description: 'Flag forms submitting over HTTP' },
      { title: 'External Script Analysis', description: 'Audit third-party script sources' },
      { title: 'Autocomplete Security', description: 'Check sensitive field autocomplete settings' },
      { title: 'X-Content-Type-Options', description: 'Verify nosniff header presence' },
      { title: 'Content-Security-Policy', description: 'Check CSP header implementation' },
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    description: 'WCAG 2.1 AA compliance checks',
    icon: 'Accessibility',
    color: 'pink',
    checkCount: 10,
    features: [
      { title: 'Skip Navigation Links', description: 'Check for skip-to-content links' },
      { title: 'Form Label Validation', description: 'Ensure all inputs have associated labels' },
      { title: 'Button Accessible Names', description: 'Verify buttons have accessible text' },
      { title: 'ARIA Landmark Roles', description: 'Check for duplicate landmark roles' },
      { title: 'Tabindex Validation', description: 'Flag tabindex values greater than 0' },
      { title: 'New Window Warning', description: 'Check links opening in new tabs' },
      { title: 'Color Contrast', description: 'Validate text contrast ratios' },
      { title: 'Keyboard Navigation', description: 'Ensure all interactive elements are focusable' },
    ],
  },
  {
    id: 'international',
    name: 'International SEO',
    description: 'Validate hreflang and language targeting',
    icon: 'Globe',
    color: 'teal',
    checkCount: 5,
    features: [
      { title: 'Hreflang Validation', description: 'Check hreflang tag implementation' },
      { title: 'x-default Presence', description: 'Verify x-default hreflang exists' },
      { title: 'Self-Referencing Hreflang', description: 'Ensure pages reference themselves' },
      { title: 'Language Code Format', description: 'Validate BCP 47 language codes' },
      { title: 'Content-Language Header', description: 'Check header and meta consistency' },
    ],
  },
  {
    id: 'ai',
    name: 'AI Search Readiness',
    description: 'Prepare for AI crawlers and LLM search',
    icon: 'Bot',
    color: 'purple',
    checkCount: 6,
    features: [
      { title: 'GPTBot Access', description: 'Check if GPTBot is blocked in robots.txt' },
      { title: 'Claude-Bot Access', description: 'Check if Claude-Bot (Anthropic) is blocked' },
      { title: 'Google-Extended Access', description: 'Check Google AI crawler access' },
      { title: 'llms.txt Validation', description: 'Verify llms.txt file presence and format' },
      { title: 'AI Summary Readiness', description: 'Analyze content structure for AI extraction' },
      { title: 'Semantic HTML Usage', description: 'Check semantic markup for AI understanding' },
    ],
  },
];

// Calculate total checks
export const totalSeoChecks = featureCategories.reduce((sum, cat) => sum + cat.checkCount, 0);

// Workflow steps for How It Works section
export const workflowSteps = [
  {
    step: 1,
    title: 'Enter URL',
    description: 'Paste any website URL. Crawlix maps the entire site structure automatically.',
  },
  {
    step: 2,
    title: 'Crawl & Analyze',
    description: 'Our engine crawls every page, running 97+ SEO checks in parallel.',
  },
  {
    step: 3,
    title: 'Review Issues',
    description: 'See issues organized by priority. Filter by type, page, or severity.',
  },
  {
    step: 4,
    title: 'Export Reports',
    description: 'Generate PDF reports with your branding. Share with clients or stakeholders.',
  },
];

// Key capabilities for hero section
export const keyCapabilities = [
  {
    title: '97+ SEO Checks',
    description: 'Comprehensive audits across 11 categories: technical, content, performance, and more.',
    icon: 'Search',
    stat: '97+',
    statLabel: 'checks',
  },
  {
    title: 'Core Web Vitals',
    description: 'Measure LCP, CLS, INP, FCP, TTFB and other performance metrics per page.',
    icon: 'Gauge',
    stat: '10',
    statLabel: 'metrics',
  },
  {
    title: 'JavaScript Rendering',
    description: 'Full Chromium-based rendering for JavaScript-heavy sites and SPAs.',
    icon: 'Code',
    stat: '100%',
    statLabel: 'JS support',
  },
  {
    title: '100% Local',
    description: 'All data stays on your machine. No cloud uploads, no tracking, no data risks.',
    icon: 'Shield',
    stat: '0',
    statLabel: 'data uploaded',
  },
  {
    title: 'White-Label Reports',
    description: 'Branded PDF reports with your logo, colors, and contact information.',
    icon: 'FileText',
    stat: '5',
    statLabel: 'export formats',
  },
  {
    title: 'Cross-Platform',
    description: 'Native apps for Windows, macOS, and Linux. Works offline.',
    icon: 'Monitor',
    stat: '3',
    statLabel: 'platforms',
  },
];

// Export formats
export const exportFormats = [
  { name: 'PDF', description: 'Professional reports for clients', icon: 'FileText' },
  { name: 'CSV', description: 'Spreadsheet-compatible data', icon: 'Table' },
  { name: 'JSON', description: 'Machine-readable format', icon: 'Braces' },
  { name: 'Excel', description: 'Native Excel workbooks', icon: 'FileSpreadsheet' },
  { name: 'HTML', description: 'Interactive web reports', icon: 'Globe' },
];

// Integrations (Pro+ tiers)
export const integrations = [
  { name: 'Google Analytics 4', description: 'Import traffic and behavior data', icon: 'BarChart3' },
  { name: 'Google Search Console', description: 'Clicks, impressions, rankings', icon: 'Search' },
  { name: 'PageSpeed Insights', description: 'CrUX field data and Lighthouse scores', icon: 'Zap' },
];
