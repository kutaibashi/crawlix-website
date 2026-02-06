// Comparison data for competitor pages - All data is real and verified

export interface Competitor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  logo: string; // Lucide icon name
  founded?: string;
  headquarters?: string;
}

export interface PricingComparison {
  crawlix: string;
  competitor: string;
  notes?: string;
}

export interface FeatureComparison {
  feature: string;
  category: string;
  crawlix: boolean | string;
  competitor: boolean | string;
  winner?: 'crawlix' | 'competitor' | 'tie';
  note?: string;
}

export interface ComparisonData {
  competitor: Competitor;
  headline: string;
  subheadline: string;
  summaryPoints: {
    title: string;
    crawlix: string;
    competitor: string;
    winner: 'crawlix' | 'competitor' | 'tie';
  }[];
  pricing: PricingComparison;
  features: FeatureComparison[];
  crawlixAdvantages: {
    title: string;
    description: string;
    icon: string;
  }[];
  competitorStrengths: {
    title: string;
    description: string;
  }[];
  bestFor: {
    crawlix: string[];
    competitor: string[];
  };
  migrationSteps?: string[];
}

// Competitor definitions with real data
export const competitors: Record<string, Competitor> = {
  'screaming-frog': {
    id: 'screaming-frog',
    name: 'Screaming Frog',
    tagline: 'SEO Spider',
    description: 'A desktop website crawler used by SEO professionals for technical audits.',
    website: 'screamingfrog.co.uk',
    logo: 'Bug',
    founded: '2010',
    headquarters: 'UK',
  },
  'sitebulb': {
    id: 'sitebulb',
    name: 'Sitebulb',
    tagline: 'Website Auditing Tool',
    description: 'A desktop and cloud SEO auditing tool known for visual reports and prioritized hints.',
    website: 'sitebulb.com',
    logo: 'Lightbulb',
    founded: '2017',
    headquarters: 'UK',
  },
  'semrush': {
    id: 'semrush',
    name: 'Semrush',
    tagline: 'Site Audit Tool',
    description: 'An all-in-one marketing platform with site audit capabilities as part of a larger SEO suite.',
    website: 'semrush.com',
    logo: 'BarChart3',
    founded: '2008',
    headquarters: 'USA',
  },
  'ahrefs': {
    id: 'ahrefs',
    name: 'Ahrefs',
    tagline: 'Site Audit',
    description: 'A comprehensive SEO toolset known for backlink analysis, with site audit features.',
    website: 'ahrefs.com',
    logo: 'Link',
    founded: '2010',
    headquarters: 'Singapore',
  },
};

// Feature categories
export const featureCategories = [
  'Pricing & Licensing',
  'Crawl Capabilities',
  'SEO Analysis',
  'Data & Privacy',
  'Exports & Reports',
  'Integrations',
  'Platform & Support',
];

// Screaming Frog comparison data
export const screamingFrogComparison: ComparisonData = {
  competitor: competitors['screaming-frog'],
  headline: 'Crawlix vs Screaming Frog',
  subheadline: 'Modern privacy-first crawler vs the industry veteran',
  summaryPoints: [
    {
      title: 'Starting Price',
      crawlix: 'Free forever (100 pages)',
      competitor: 'Free (500 URLs limit)',
      winner: 'tie',
    },
    {
      title: 'Paid License',
      crawlix: '$149/year (50K pages)',
      competitor: '$259/year (unlimited)',
      winner: 'crawlix',
    },
    {
      title: 'Perpetual License',
      crawlix: 'Yes ($249 one-time)',
      competitor: 'No (subscription only)',
      winner: 'crawlix',
    },
    {
      title: 'Platform Support',
      crawlix: 'Windows, macOS, Linux',
      competitor: 'Windows, macOS, Linux',
      winner: 'tie',
    },
    {
      title: 'AI Crawler Analysis',
      crawlix: 'Yes (13 AI bots)',
      competitor: 'No',
      winner: 'crawlix',
    },
  ],
  pricing: {
    crawlix: '$0 (Free) / $149 (Pro) / $399 (Agency) per year',
    competitor: '$259/year per license (free version limited to 500 URLs)',
    notes: 'Crawlix offers perpetual licenses; Screaming Frog is subscription-only',
  },
  features: [
    // Pricing & Licensing
    { feature: 'Free tier', category: 'Pricing & Licensing', crawlix: '100 pages', competitor: '500 URLs', winner: 'competitor' },
    { feature: 'Paid license price', category: 'Pricing & Licensing', crawlix: '$149/year', competitor: '$259/year', winner: 'crawlix' },
    { feature: 'Perpetual license option', category: 'Pricing & Licensing', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Team discounts', category: 'Pricing & Licensing', crawlix: 'Agency tier (5 seats)', competitor: 'Bulk discount (5+ licenses)', winner: 'tie' },

    // Crawl Capabilities
    { feature: 'Max pages (paid)', category: 'Crawl Capabilities', crawlix: '50K (Pro) / Unlimited (Agency)', competitor: 'Unlimited', winner: 'competitor' },
    { feature: 'JavaScript rendering', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Concurrent connections', category: 'Crawl Capabilities', crawlix: 'Up to 10', competitor: 'Configurable', winner: 'tie' },
    { feature: 'Custom extraction', category: 'Crawl Capabilities', crawlix: 'CSS, XPath, Regex', competitor: 'CSS, XPath, Regex', winner: 'tie' },
    { feature: 'Scheduled crawls', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Forms authentication', category: 'Crawl Capabilities', crawlix: false, competitor: true, winner: 'competitor' },

    // SEO Analysis
    { feature: 'SEO checks', category: 'SEO Analysis', crawlix: '134+', competitor: '~100', winner: 'crawlix' },
    { feature: 'Core Web Vitals', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Accessibility audit (WCAG)', category: 'SEO Analysis', crawlix: true, competitor: 'Limited', winner: 'crawlix' },
    { feature: 'AI crawler analysis', category: 'SEO Analysis', crawlix: '13 AI bots', competitor: false, winner: 'crawlix' },
    { feature: 'Structured data validation', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Duplicate content detection', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Readability scoring', category: 'SEO Analysis', crawlix: true, competitor: false, winner: 'crawlix' },

    // Data & Privacy
    { feature: 'Data storage', category: 'Data & Privacy', crawlix: '100% local (SQLite)', competitor: '100% local', winner: 'tie' },
    { feature: 'Works offline', category: 'Data & Privacy', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'No account required', category: 'Data & Privacy', crawlix: 'Free tier', competitor: 'Free tier', winner: 'tie' },

    // Exports & Reports
    { feature: 'CSV export', category: 'Exports & Reports', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Excel export', category: 'Exports & Reports', crawlix: 'Pro+', competitor: true, winner: 'competitor' },
    { feature: 'PDF reports', category: 'Exports & Reports', crawlix: 'Pro+', competitor: false, winner: 'crawlix' },
    { feature: 'White-label reports', category: 'Exports & Reports', crawlix: 'Agency', competitor: false, winner: 'crawlix' },
    { feature: 'Interactive HTML reports', category: 'Exports & Reports', crawlix: 'Pro+', competitor: false, winner: 'crawlix' },

    // Integrations
    { feature: 'Google Analytics', category: 'Integrations', crawlix: 'Pro+', competitor: true, winner: 'tie' },
    { feature: 'Google Search Console', category: 'Integrations', crawlix: 'Pro+', competitor: true, winner: 'tie' },
    { feature: 'PageSpeed Insights', category: 'Integrations', crawlix: 'Pro+', competitor: true, winner: 'tie' },
    { feature: 'Ahrefs/Majestic', category: 'Integrations', crawlix: false, competitor: true, winner: 'competitor' },

    // Platform & Support
    { feature: 'Windows', category: 'Platform & Support', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'macOS', category: 'Platform & Support', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Linux', category: 'Platform & Support', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Modern UI/UX', category: 'Platform & Support', crawlix: true, competitor: 'Traditional', winner: 'crawlix', note: 'Subjective' },
  ],
  crawlixAdvantages: [
    {
      title: 'Lower Price',
      description: 'Save $110/year with Crawlix Pro vs Screaming Frog license. Plus, perpetual license option.',
      icon: 'PiggyBank',
    },
    {
      title: 'AI Search Readiness',
      description: 'Unique analysis of 13 AI crawlers (GPTBot, ClaudeBot, etc.) - a feature Screaming Frog lacks.',
      icon: 'Bot',
    },
    {
      title: 'Professional Reports',
      description: 'PDF and interactive HTML reports for clients. Screaming Frog only exports raw data.',
      icon: 'FileText',
    },
    {
      title: 'White-Label Branding',
      description: 'Agency tier includes custom branding for client deliverables. Not available in Screaming Frog.',
      icon: 'Palette',
    },
    {
      title: 'Modern Interface',
      description: 'Clean, intuitive UI built with modern web technologies. Easier learning curve.',
      icon: 'Sparkles',
    },
    {
      title: 'Perpetual License',
      description: 'Pay once, own forever. Screaming Frog requires annual subscription.',
      icon: 'Key',
    },
  ],
  competitorStrengths: [
    {
      title: 'Unlimited Crawl Size',
      description: 'Screaming Frog has no page limit on paid licenses, while Crawlix Pro is capped at 50K.',
    },
    {
      title: 'More Integrations',
      description: 'Integrates with Ahrefs, Majestic, and Moz for backlink data.',
    },
    {
      title: 'Forms Authentication',
      description: 'Can crawl behind login walls with forms-based authentication.',
    },
    {
      title: 'Industry Standard',
      description: 'Widely used since 2010 with extensive documentation and community resources.',
    },
  ],
  bestFor: {
    crawlix: [
      'SEO professionals wanting modern UI and AI analysis',
      'Agencies needing white-label PDF reports',
      'Budget-conscious teams (save $110/year)',
      'Anyone wanting to own their software outright',
      'Teams focused on accessibility and AI readiness',
    ],
    competitor: [
      'Enterprise sites needing unlimited crawl capacity',
      'Technical SEOs requiring Ahrefs/Majestic integration',
      'Teams needing forms-based authentication crawling',
      'Organizations already invested in the Screaming Frog ecosystem',
    ],
  },
  migrationSteps: [
    'Download Crawlix and install on your machine',
    'Import your existing crawl configurations (URL lists, rules)',
    'Run your first crawl - same local data storage model',
    'Export reports in your preferred format (PDF, Excel, HTML)',
    'Optional: Activate Pro/Agency license for advanced features',
  ],
};

// Sitebulb comparison data
export const sitebulbComparison: ComparisonData = {
  competitor: competitors['sitebulb'],
  headline: 'Crawlix vs Sitebulb',
  subheadline: 'Full-featured SEO crawler at a fraction of the cost',
  summaryPoints: [
    {
      title: 'Annual Cost',
      crawlix: '$149/year (Pro)',
      competitor: '$420/year (Pro)',
      winner: 'crawlix',
    },
    {
      title: 'Free Tier',
      crawlix: 'Yes (100 pages)',
      competitor: 'Trial only',
      winner: 'crawlix',
    },
    {
      title: 'Platform Support',
      crawlix: 'Windows, macOS, Linux',
      competitor: 'Windows only (Desktop)',
      winner: 'crawlix',
    },
    {
      title: 'SEO Checks',
      crawlix: '134+',
      competitor: '300+',
      winner: 'competitor',
    },
    {
      title: 'Cloud Version',
      crawlix: 'No (desktop only)',
      competitor: 'Yes (additional cost)',
      winner: 'competitor',
    },
  ],
  pricing: {
    crawlix: '$0 (Free) / $149 (Pro) / $399 (Agency) per year',
    competitor: '$162/year (Lite, 10K pages) / $420/year (Pro, 500K pages)',
    notes: 'Crawlix is 65% cheaper than Sitebulb Pro. Sitebulb has no free tier.',
  },
  features: [
    // Pricing & Licensing
    { feature: 'Free tier', category: 'Pricing & Licensing', crawlix: 'Yes (100 pages)', competitor: 'Trial only', winner: 'crawlix' },
    { feature: 'Entry price', category: 'Pricing & Licensing', crawlix: '$149/year', competitor: '$162/year', winner: 'crawlix' },
    { feature: 'Professional tier', category: 'Pricing & Licensing', crawlix: '$149/year (50K pages)', competitor: '$420/year (500K pages)', winner: 'crawlix' },
    { feature: 'Perpetual license', category: 'Pricing & Licensing', crawlix: true, competitor: false, winner: 'crawlix' },

    // Crawl Capabilities
    { feature: 'Max pages (entry tier)', category: 'Crawl Capabilities', crawlix: '50,000', competitor: '10,000', winner: 'crawlix' },
    { feature: 'JavaScript rendering', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Scheduled crawls', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Cloud crawling', category: 'Crawl Capabilities', crawlix: false, competitor: 'Yes (extra cost)', winner: 'competitor' },

    // SEO Analysis
    { feature: 'SEO checks', category: 'SEO Analysis', crawlix: '134+', competitor: '300+', winner: 'competitor' },
    { feature: 'Issue prioritization', category: 'SEO Analysis', crawlix: 'Error/Warning/Notice', competitor: 'Hints system', winner: 'tie' },
    { feature: 'Core Web Vitals', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'AI crawler analysis', category: 'SEO Analysis', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Accessibility audit', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Content analysis', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },

    // Data & Privacy
    { feature: 'Local data storage', category: 'Data & Privacy', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'No cloud upload', category: 'Data & Privacy', crawlix: true, competitor: 'Desktop version only', winner: 'crawlix' },

    // Exports & Reports
    { feature: 'PDF reports', category: 'Exports & Reports', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'White-label reports', category: 'Exports & Reports', crawlix: 'Agency tier', competitor: true, winner: 'tie' },
    { feature: 'Visual crawl maps', category: 'Exports & Reports', crawlix: false, competitor: true, winner: 'competitor' },

    // Platform & Support
    { feature: 'Windows', category: 'Platform & Support', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'macOS', category: 'Platform & Support', crawlix: true, competitor: 'Cloud only', winner: 'crawlix' },
    { feature: 'Linux', category: 'Platform & Support', crawlix: true, competitor: false, winner: 'crawlix' },
  ],
  crawlixAdvantages: [
    {
      title: '65% Lower Cost',
      description: 'Crawlix Pro costs $149/year vs Sitebulb Pro at $420/year. Save $271 annually.',
      icon: 'PiggyBank',
    },
    {
      title: 'Cross-Platform Desktop',
      description: 'Native support for Windows, macOS, and Linux. Sitebulb Desktop is Windows-only.',
      icon: 'Monitor',
    },
    {
      title: 'Free Tier Available',
      description: 'Crawlix offers a permanent free tier. Sitebulb only offers a trial.',
      icon: 'Gift',
    },
    {
      title: '5x More Pages Per Dollar',
      description: 'Crawlix Pro: 50K pages for $149. Sitebulb Lite: 10K pages for $162.',
      icon: 'TrendingUp',
    },
    {
      title: 'AI Crawler Analysis',
      description: 'Analyze how AI bots access your site. Not available in Sitebulb.',
      icon: 'Bot',
    },
    {
      title: 'Perpetual License',
      description: 'Pay once, use forever. Sitebulb requires ongoing subscription.',
      icon: 'Key',
    },
  ],
  competitorStrengths: [
    {
      title: 'More SEO Checks',
      description: 'Sitebulb offers 300+ checks compared to Crawlix\'s 134+.',
    },
    {
      title: 'Cloud Version',
      description: 'Sitebulb Cloud enables team collaboration and scheduled crawls from the cloud.',
    },
    {
      title: 'Visual Crawl Maps',
      description: 'Interactive site visualizations showing internal linking structure.',
    },
    {
      title: 'Prioritized Hints',
      description: 'Award-winning hints system helps prioritize issues effectively.',
    },
  ],
  bestFor: {
    crawlix: [
      'Budget-conscious SEO professionals',
      'macOS and Linux users',
      'Teams wanting a free tier to evaluate',
      'Anyone wanting perpetual licensing',
      'SEOs focused on AI search readiness',
    ],
    competitor: [
      'Teams needing cloud collaboration',
      'Agencies wanting visual site maps',
      'Users who prioritize depth of checks over cost',
      'Windows-only environments',
    ],
  },
};

// Semrush comparison data
export const semrushComparison: ComparisonData = {
  competitor: competitors['semrush'],
  headline: 'Crawlix vs Semrush Site Audit',
  subheadline: 'Dedicated crawler vs all-in-one marketing platform',
  summaryPoints: [
    {
      title: 'Annual Cost (Site Audit)',
      crawlix: '$149/year',
      competitor: '$1,400+/year (Pro plan)',
      winner: 'crawlix',
    },
    {
      title: 'Data Location',
      crawlix: 'Local (your machine)',
      competitor: 'Cloud (Semrush servers)',
      winner: 'crawlix',
    },
    {
      title: 'Focus',
      crawlix: 'Site auditing specialist',
      competitor: 'All-in-one SEO suite',
      winner: 'tie',
    },
    {
      title: 'Additional Tools',
      crawlix: 'Site audit only',
      competitor: '40+ marketing tools',
      winner: 'competitor',
    },
    {
      title: 'Pages per Crawl',
      crawlix: '50K (Pro)',
      competitor: '100K (Pro)',
      winner: 'competitor',
    },
  ],
  pricing: {
    crawlix: '$0 (Free) / $149 (Pro) / $399 (Agency) per year',
    competitor: '$1,400/year (Pro) / $2,500/year (Guru) / $5,000/year (Business)',
    notes: 'Semrush includes 40+ tools. Crawlix is 90% cheaper if you only need site audits.',
  },
  features: [
    // Pricing & Licensing
    { feature: 'Site audit starting price', category: 'Pricing & Licensing', crawlix: '$0 (free tier)', competitor: '$1,400/year', winner: 'crawlix' },
    { feature: 'Perpetual license', category: 'Pricing & Licensing', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Additional marketing tools', category: 'Pricing & Licensing', crawlix: false, competitor: '40+ tools', winner: 'competitor' },

    // Crawl Capabilities
    { feature: 'Pages per crawl', category: 'Crawl Capabilities', crawlix: '50K (Pro)', competitor: '100K (Pro)', winner: 'competitor' },
    { feature: 'JavaScript rendering', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Scheduled crawls', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Crawl anywhere', category: 'Crawl Capabilities', crawlix: 'Desktop only', competitor: 'Cloud (any device)', winner: 'competitor' },

    // SEO Analysis
    { feature: 'Site audit checks', category: 'SEO Analysis', crawlix: '134+', competitor: '140+', winner: 'tie' },
    { feature: 'Core Web Vitals', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'AI crawler analysis', category: 'SEO Analysis', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Keyword tracking', category: 'SEO Analysis', crawlix: false, competitor: true, winner: 'competitor' },
    { feature: 'Backlink analysis', category: 'SEO Analysis', crawlix: false, competitor: true, winner: 'competitor' },
    { feature: 'Competitor analysis', category: 'SEO Analysis', crawlix: false, competitor: true, winner: 'competitor' },

    // Data & Privacy
    { feature: 'Data storage', category: 'Data & Privacy', crawlix: '100% local', competitor: 'Cloud', winner: 'crawlix' },
    { feature: 'Works offline', category: 'Data & Privacy', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'GDPR compliance', category: 'Data & Privacy', crawlix: 'Data never leaves machine', competitor: 'DPA available', winner: 'crawlix' },

    // Exports & Reports
    { feature: 'PDF reports', category: 'Exports & Reports', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'White-label reports', category: 'Exports & Reports', crawlix: 'Agency tier', competitor: 'Business tier', winner: 'tie' },
    { feature: 'API access', category: 'Exports & Reports', crawlix: 'Coming soon', competitor: 'Business tier', winner: 'competitor' },

    // Platform & Support
    { feature: 'Desktop app', category: 'Platform & Support', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Web app', category: 'Platform & Support', crawlix: false, competitor: true, winner: 'competitor' },
    { feature: 'Mobile access', category: 'Platform & Support', crawlix: false, competitor: true, winner: 'competitor' },
  ],
  crawlixAdvantages: [
    {
      title: '90% Lower Cost',
      description: 'Crawlix Pro is $149/year. Semrush Pro is $1,400/year. Save $1,251 annually.',
      icon: 'PiggyBank',
    },
    {
      title: 'Complete Data Privacy',
      description: 'Your crawl data stays on your machine. Semrush stores everything in their cloud.',
      icon: 'Shield',
    },
    {
      title: 'Works Offline',
      description: 'Analyze previous crawls without internet. Semrush requires constant connectivity.',
      icon: 'WifiOff',
    },
    {
      title: 'AI Search Readiness',
      description: 'Analyze how GPTBot, ClaudeBot, and other AI crawlers access your site.',
      icon: 'Bot',
    },
    {
      title: 'Perpetual License',
      description: 'Pay once with our perpetual option. Semrush is subscription-only.',
      icon: 'Key',
    },
    {
      title: 'No Project Limits',
      description: 'Crawlix has no project limits. Semrush Pro limits you to 5 projects.',
      icon: 'Infinity',
    },
  ],
  competitorStrengths: [
    {
      title: 'All-in-One Platform',
      description: '40+ marketing tools including keyword research, rank tracking, and backlink analysis.',
    },
    {
      title: 'Cloud Access',
      description: 'Access from any device, anywhere. Share reports with team members easily.',
    },
    {
      title: 'Competitive Intelligence',
      description: 'Analyze competitor keywords, backlinks, and advertising strategies.',
    },
    {
      title: 'Historical Data',
      description: 'Access to historical ranking and traffic data for trend analysis.',
    },
  ],
  bestFor: {
    crawlix: [
      'Teams focused primarily on technical SEO audits',
      'Organizations with strict data privacy requirements',
      'Budget-conscious professionals',
      'Users who don\'t need keyword tracking or backlink tools',
      'Offline or air-gapped environments',
    ],
    competitor: [
      'Marketing teams needing an all-in-one solution',
      'Agencies requiring competitive analysis',
      'Teams that need cloud-based collaboration',
      'Users who want keyword tracking integrated with audits',
    ],
  },
};

// Ahrefs comparison data
export const ahrefsComparison: ComparisonData = {
  competitor: competitors['ahrefs'],
  headline: 'Crawlix vs Ahrefs Site Audit',
  subheadline: 'Privacy-first auditing vs backlink-focused SEO suite',
  summaryPoints: [
    {
      title: 'Annual Cost (Site Audit)',
      crawlix: '$149/year',
      competitor: '$1,548/year (Lite)',
      winner: 'crawlix',
    },
    {
      title: 'Data Location',
      crawlix: 'Local (your machine)',
      competitor: 'Cloud (Ahrefs servers)',
      winner: 'crawlix',
    },
    {
      title: 'Backlink Analysis',
      crawlix: 'Not included',
      competitor: 'Industry-leading',
      winner: 'competitor',
    },
    {
      title: 'Free Tier',
      crawlix: 'Yes (100 pages)',
      competitor: 'Limited (verified sites)',
      winner: 'crawlix',
    },
    {
      title: 'AI Crawler Analysis',
      crawlix: 'Yes (13 bots)',
      competitor: 'No',
      winner: 'crawlix',
    },
  ],
  pricing: {
    crawlix: '$0 (Free) / $149 (Pro) / $399 (Agency) per year',
    competitor: '$348/year (Starter) / $1,548/year (Lite) / $2,988/year (Standard)',
    notes: 'Ahrefs is primarily a backlink tool. Crawlix is 90% cheaper for site audits alone.',
  },
  features: [
    // Pricing & Licensing
    { feature: 'Site audit starting price', category: 'Pricing & Licensing', crawlix: '$0 (free tier)', competitor: '$348/year (Starter)', winner: 'crawlix' },
    { feature: 'Full features price', category: 'Pricing & Licensing', crawlix: '$149/year', competitor: '$1,548/year', winner: 'crawlix' },
    { feature: 'Perpetual license', category: 'Pricing & Licensing', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Credit-based limits', category: 'Pricing & Licensing', crawlix: false, competitor: true, winner: 'crawlix' },

    // Crawl Capabilities
    { feature: 'Free crawl credits/month', category: 'Crawl Capabilities', crawlix: '100 pages', competitor: '5,000 per verified project', winner: 'competitor' },
    { feature: 'JavaScript rendering', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Scheduled crawls', category: 'Crawl Capabilities', crawlix: true, competitor: true, winner: 'tie' },

    // SEO Analysis
    { feature: 'Site audit checks', category: 'SEO Analysis', crawlix: '134+', competitor: '100+', winner: 'crawlix' },
    { feature: 'Core Web Vitals', category: 'SEO Analysis', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'AI crawler analysis', category: 'SEO Analysis', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Backlink analysis', category: 'SEO Analysis', crawlix: false, competitor: 'Industry-leading', winner: 'competitor' },
    { feature: 'Keyword research', category: 'SEO Analysis', crawlix: false, competitor: true, winner: 'competitor' },
    { feature: 'Rank tracking', category: 'SEO Analysis', crawlix: false, competitor: true, winner: 'competitor' },
    { feature: 'Accessibility audit', category: 'SEO Analysis', crawlix: true, competitor: 'Basic', winner: 'crawlix' },

    // Data & Privacy
    { feature: 'Data storage', category: 'Data & Privacy', crawlix: '100% local', competitor: 'Cloud', winner: 'crawlix' },
    { feature: 'Works offline', category: 'Data & Privacy', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'No account required', category: 'Data & Privacy', crawlix: 'Free tier', competitor: false, winner: 'crawlix' },

    // Exports & Reports
    { feature: 'PDF reports', category: 'Exports & Reports', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'White-label reports', category: 'Exports & Reports', crawlix: 'Agency tier', competitor: false, winner: 'crawlix' },
    { feature: 'CSV export', category: 'Exports & Reports', crawlix: true, competitor: true, winner: 'tie' },

    // Platform & Support
    { feature: 'Desktop app', category: 'Platform & Support', crawlix: true, competitor: false, winner: 'crawlix' },
    { feature: 'Web app', category: 'Platform & Support', crawlix: false, competitor: true, winner: 'competitor' },
  ],
  crawlixAdvantages: [
    {
      title: '90% Lower Cost',
      description: 'Crawlix Pro is $149/year. Ahrefs Lite is $1,548/year. Massive savings.',
      icon: 'PiggyBank',
    },
    {
      title: 'No Credit System',
      description: 'Simple page limits, not confusing credits. Know exactly what you get.',
      icon: 'Calculator',
    },
    {
      title: 'Complete Privacy',
      description: 'All data stays on your machine. No cloud uploads ever.',
      icon: 'Shield',
    },
    {
      title: 'Better Reporting',
      description: 'PDF and white-label reports. Ahrefs only offers CSV exports for audits.',
      icon: 'FileText',
    },
    {
      title: 'AI Search Readiness',
      description: 'Analyze GPTBot, ClaudeBot, and 11 other AI crawler access patterns.',
      icon: 'Bot',
    },
    {
      title: 'Works Offline',
      description: 'Review crawl data without internet. Ahrefs requires connectivity.',
      icon: 'WifiOff',
    },
  ],
  competitorStrengths: [
    {
      title: 'Industry-Leading Backlinks',
      description: 'Ahrefs has the largest backlink index in the industry.',
    },
    {
      title: 'Keyword Research',
      description: 'Comprehensive keyword data with accurate search volumes.',
    },
    {
      title: 'Competitive Analysis',
      description: 'Deep insights into competitor organic traffic and keywords.',
    },
    {
      title: 'Content Explorer',
      description: 'Find top-performing content across the web.',
    },
  ],
  bestFor: {
    crawlix: [
      'Technical SEO specialists focused on site health',
      'Privacy-conscious organizations',
      'Budget-limited teams needing site audits',
      'Agencies needing white-label reports',
      'Users who don\'t need backlink analysis',
    ],
    competitor: [
      'Link builders and outreach teams',
      'Agencies needing competitive backlink analysis',
      'Content marketers researching topics',
      'Teams needing keyword research integrated with audits',
    ],
  },
};

// Helper to get comparison data by competitor ID
export function getComparisonData(competitorId: string): ComparisonData | null {
  switch (competitorId) {
    case 'screaming-frog':
      return screamingFrogComparison;
    case 'sitebulb':
      return sitebulbComparison;
    case 'semrush':
      return semrushComparison;
    case 'ahrefs':
      return ahrefsComparison;
    default:
      return null;
  }
}

// All comparison data for listing
export const allComparisons = [
  screamingFrogComparison,
  sitebulbComparison,
  semrushComparison,
  ahrefsComparison,
];
