export interface PricingTier {
  name: string;
  id: string;
  priceMonthly: number | null;
  priceAnnual: number;
  pricePerpetual: number | null;
  description: string;
  features: string[];
  limits: {
    pages: string;
    projects: string;
    scheduledCrawls: string;
    extractions: string;
    devices: string;
  };
  highlighted?: boolean;
  cta: string;
  ctaLink: string;
  badge?: string;
  // Lemon Squeezy variant IDs
  variantIds?: {
    monthly?: string;
    yearly?: string;
    perpetual?: string;
  };
}

// Lemon Squeezy configuration
export const lemonSqueezyConfig = {
  storeId: '286803',
  storeUrl: 'https://crawlix.lemonsqueezy.com',
  // Variant IDs from your Lemon Squeezy dashboard
  variants: {
    proMonthly: '813115',
    proYearly: '813135',
    proPerpetual: '813139',
    agencyMonthly: '813142',
    agencyYearly: '813149',
    agencyPerpetual: '813154',
  },
};

// Generate checkout URL for Lemon Squeezy
export function getCheckoutUrl(variantId: string, options?: { email?: string; discountCode?: string }): string {
  const baseUrl = `https://crawlix.lemonsqueezy.com/checkout/buy/${variantId}`;
  const params = new URLSearchParams();

  params.set('embed', '0'); // Full page checkout for website
  params.set('dark', '1');

  if (options?.email) {
    params.set('checkout[email]', options.email);
  }
  if (options?.discountCode) {
    params.set('checkout[discount_code]', options.discountCode);
  }

  return `${baseUrl}?${params.toString()}`;
}

// Pricing data based on actual licensing system (types.ts)
export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'starter',
    priceMonthly: null,
    priceAnnual: 0,
    pricePerpetual: null,
    description: 'Full analysis power to evaluate Crawlix',
    limits: {
      pages: '100',
      projects: '1',
      scheduledCrawls: '0',
      extractions: '5',
      devices: '1',
    },
    features: [
      '97+ SEO checks',
      'Core Web Vitals analysis',
      'JavaScript rendering',
      'AI search readiness checks',
      'Accessibility audit',
      'Schema validation',
      'Duplicate detection',
      'CSV export',
    ],
    cta: 'Download Free',
    ctaLink: '/download',
  },
  {
    name: 'Pro',
    id: 'professional',
    priceMonthly: 15,
    priceAnnual: 149,
    pricePerpetual: 249,
    description: 'For freelancers and consultants',
    limits: {
      pages: '50,000',
      projects: '20',
      scheduledCrawls: '5',
      extractions: '15',
      devices: '1',
    },
    features: [
      'Everything in Free, plus:',
      'PDF & Excel exports',
      'Interactive HTML reports',
      'Google Analytics integration',
      'Search Console integration',
      'PageSpeed Insights data',
      'Scheduled crawls',
      'Crawl comparison',
      'Email support',
    ],
    highlighted: true,
    cta: 'Get Pro',
    ctaLink: '/pricing#pro',
    badge: 'Most Popular',
    variantIds: {
      monthly: lemonSqueezyConfig.variants.proMonthly,
      yearly: lemonSqueezyConfig.variants.proYearly,
      perpetual: lemonSqueezyConfig.variants.proPerpetual,
    },
  },
  {
    name: 'Agency',
    id: 'enterprise',
    priceMonthly: 45,
    priceAnnual: 399,
    pricePerpetual: 699,
    description: 'For agencies and teams',
    limits: {
      pages: 'Unlimited',
      projects: 'Unlimited',
      scheduledCrawls: 'Unlimited',
      extractions: 'Unlimited',
      devices: '5',
    },
    features: [
      'Everything in Pro, plus:',
      'White-label PDF reports',
      'Custom logo & colors',
      'Remove "Powered by" branding',
      '5 team seats',
      'Config sharing',
      'Priority support',
      'Onboarding call',
    ],
    cta: 'Get Agency',
    ctaLink: '/pricing#agency',
    variantIds: {
      monthly: lemonSqueezyConfig.variants.agencyMonthly,
      yearly: lemonSqueezyConfig.variants.agencyYearly,
      perpetual: lemonSqueezyConfig.variants.agencyPerpetual,
    },
  },
];

// Detailed feature comparison based on actual TIER_FEATURES from types.ts
export const featureComparison = [
  // Limits
  { category: 'Limits', feature: 'HTML pages per crawl', free: '100', pro: '50,000', agency: 'Unlimited' },
  { category: 'Limits', feature: 'Saved projects', free: '1', pro: '20', agency: 'Unlimited' },
  { category: 'Limits', feature: 'Scheduled crawls', free: '—', pro: '5', agency: 'Unlimited' },
  { category: 'Limits', feature: 'Custom extraction rules', free: '5', pro: '15', agency: 'Unlimited' },
  { category: 'Limits', feature: 'Device activations', free: '1', pro: '1', agency: '5' },
  { category: 'Limits', feature: 'Concurrent connections', free: '2', pro: '5', agency: '10' },

  // Analysis Features (all free - the hook)
  { category: 'Analysis', feature: '97+ SEO checks', free: true, pro: true, agency: true },
  { category: 'Analysis', feature: 'Core Web Vitals', free: true, pro: true, agency: true },
  { category: 'Analysis', feature: 'JavaScript rendering', free: true, pro: true, agency: true },
  { category: 'Analysis', feature: 'AI search readiness', free: true, pro: true, agency: true },
  { category: 'Analysis', feature: 'Accessibility audit', free: true, pro: true, agency: true },
  { category: 'Analysis', feature: 'Schema validation', free: true, pro: true, agency: true },
  { category: 'Analysis', feature: 'Duplicate detection', free: true, pro: true, agency: true },
  { category: 'Analysis', feature: 'Custom user agents', free: true, pro: true, agency: true },

  // Export Features
  { category: 'Export', feature: 'CSV export', free: true, pro: true, agency: true },
  { category: 'Export', feature: 'JSON export', free: true, pro: true, agency: true },
  { category: 'Export', feature: 'PDF reports', free: false, pro: true, agency: true },
  { category: 'Export', feature: 'Excel export', free: false, pro: true, agency: true },
  { category: 'Export', feature: 'Interactive HTML reports', free: false, pro: true, agency: true },

  // Integrations
  { category: 'Integrations', feature: 'Google Analytics 4', free: false, pro: true, agency: true },
  { category: 'Integrations', feature: 'Google Search Console', free: false, pro: true, agency: true },
  { category: 'Integrations', feature: 'PageSpeed Insights', free: false, pro: true, agency: true },

  // Workflow
  { category: 'Workflow', feature: 'Scheduled crawls', free: false, pro: true, agency: true },
  { category: 'Workflow', feature: 'Crawl comparison', free: false, pro: true, agency: true },

  // White-label & Branding
  { category: 'Branding', feature: 'White-label PDF reports', free: false, pro: false, agency: true },
  { category: 'Branding', feature: 'Custom logo', free: false, pro: false, agency: true },
  { category: 'Branding', feature: 'Custom brand colors', free: false, pro: false, agency: true },
  { category: 'Branding', feature: 'Remove "Powered by" branding', free: false, pro: false, agency: true },

  // Team Features
  { category: 'Team', feature: 'Team seats', free: '1', pro: '1', agency: '5' },
  { category: 'Team', feature: 'Config sharing', free: false, pro: false, agency: true },

  // Support
  { category: 'Support', feature: 'Community support', free: true, pro: true, agency: true },
  { category: 'Support', feature: 'Email support', free: false, pro: true, agency: true },
  { category: 'Support', feature: 'Priority support', free: false, pro: false, agency: true },
  { category: 'Support', feature: 'Onboarding call', free: false, pro: false, agency: true },
];

// Group features by category for display
export const featureCategories = [
  'Limits',
  'Analysis',
  'Export',
  'Integrations',
  'Workflow',
  'Branding',
  'Team',
  'Support',
];

// FAQs
export const pricingFaqs = [
  {
    question: "What billing options do you offer?",
    answer: "We offer three options: Monthly subscriptions ($15/mo for Pro, $45/mo for Agency) for flexibility, Annual subscriptions ($149/yr for Pro, $399/yr for Agency) saving 17-26%, and Perpetual licenses ($249 for Pro, $699 for Agency) for one-time purchase with 1 year of updates included.",
  },
  {
    question: 'Can I try Crawlix before buying?',
    answer: "Yes! The Free tier lets you crawl up to 100 pages per project with no time limit. It includes all 97+ SEO checks, Core Web Vitals, JavaScript rendering, and more. You can use it forever to evaluate if Crawlix fits your needs.",
  },
  {
    question: 'What counts as an "HTML page"?',
    answer: "Only pages with content-type text/html count toward your limit. CSS files, JavaScript files, images, PDFs, and other resources don't count. A 100-page site with 500 total resources only uses 100 of your page quota.",
  },
  {
    question: 'What happens when my annual license expires?',
    answer: "If you don't renew, you'll be downgraded to the Free tier. You won't lose any data, but feature limits will apply (100 pages/crawl, no PDF export, etc.). You can renew anytime to regain full access.",
  },
  {
    question: 'Can I switch between tiers?',
    answer: "Yes, you can upgrade at any time. When upgrading, you'll pay the prorated difference. Downgrades take effect at the end of your current billing period.",
  },
  {
    question: 'Do you offer refunds?',
    answer: "Yes, we offer a 14-day money-back guarantee for first-time purchases. Contact support@crawlix.app within 14 days for a full refund. Your license will be revoked and the same device cannot be used for future purchases. EU customers: by activating your license, you waive your 14-day withdrawal right for digital content.",
  },
  {
    question: 'How do device activations work?',
    answer: "Each license is permanently bound to your device using hardware fingerprinting. Free and Pro allow 1 device, Agency allows 5 devices. Reactivation on the same device (after OS reinstall) is automatic. To transfer to a new device, contact support@crawlix.app.",
  },
  {
    question: 'Is my data stored in the cloud?',
    answer: "No. Crawlix is a desktop application that stores all data locally on your machine in a SQLite database. Your crawl data is never uploaded to any server. You maintain complete data ownership and privacy.",
  },
  {
    question: 'Do you offer discounts for students or nonprofits?',
    answer: "Yes! Contact us at support@crawlix.app with proof of student status or nonprofit registration for special pricing.",
  },
];

// Competitor comparison for reference
export const competitorPricing = {
  screamingFrog: {
    name: 'Screaming Frog',
    price: '£199/year (~$250)',
    pages: 'Unlimited',
    note: 'Single tier, no perpetual option',
  },
  sitebulb: {
    name: 'Sitebulb',
    price: 'From £99/year (~$125)',
    pages: '10K-500K depending on tier',
    note: 'Windows only, no perpetual option',
  },
};
