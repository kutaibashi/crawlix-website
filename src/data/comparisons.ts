// Comparison data for competitor pages - All data is real and verified
// NOTE: SEO check count (134+) should stay in sync with seo-analyzer-v2.ts

export interface Competitor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  logo: string; // Lucide icon name (fallback)
  logoImage: string; // Path to competitor logo image
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
  verdict: {
    title: string;
    summary: string;
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
    logoImage: '/images/competitors/screaming-frog.png',
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
    logoImage: '/images/competitors/sitebulb.svg',
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
    logoImage: '/images/competitors/semrush.png',
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
    logoImage: '/images/competitors/ahrefs.png',
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
  subheadline: 'Same local-first approach. $110/year less. With AI analysis, client reports, and a perpetual license.',
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
      crawlix: 'Windows, Linux',
      competitor: 'Windows, macOS, Linux',
      winner: 'competitor',
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
    { feature: 'Accessibility audit', category: 'SEO Analysis', crawlix: true, competitor: 'Limited', winner: 'crawlix' },
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
    { feature: 'macOS', category: 'Platform & Support', crawlix: 'Coming soon', competitor: true, winner: 'competitor' },
    { feature: 'Linux', category: 'Platform & Support', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'Modern UI/UX', category: 'Platform & Support', crawlix: true, competitor: 'Traditional', winner: 'crawlix', note: 'Subjective' },
  ],
  crawlixAdvantages: [
    {
      title: '$110/Year Savings',
      description: 'Crawlix Pro is $149/year vs $259 for Screaming Frog. That\'s $110 back in your budget — or pay $249 once with a perpetual license.',
      icon: 'PiggyBank',
    },
    {
      title: 'AI Search Readiness',
      description: 'See exactly how GPTBot, ClaudeBot, and 11 other AI crawlers interact with your site. Screaming Frog has no equivalent.',
      icon: 'Bot',
    },
    {
      title: 'Client-Ready Reports',
      description: 'Export branded PDF and interactive HTML reports directly. Screaming Frog outputs raw spreadsheets that need manual formatting.',
      icon: 'FileText',
    },
    {
      title: 'White-Label Deliverables',
      description: 'Agency tier lets you replace Crawlix branding with your own logo and colors on every report. Not possible with Screaming Frog.',
      icon: 'Palette',
    },
    {
      title: 'Modern, Learnable UI',
      description: 'Built with modern web technologies — a visual dashboard you can navigate intuitively, not a Java spreadsheet grid.',
      icon: 'Sparkles',
    },
    {
      title: 'Own It Forever',
      description: 'The $249 perpetual license lets you use Crawlix indefinitely with one year of updates. Screaming Frog is subscription-only — stop paying, stop crawling.',
      icon: 'Key',
    },
  ],
  competitorStrengths: [
    {
      title: 'No Page Limit',
      description: 'Screaming Frog\'s paid license crawls unlimited pages. Crawlix Pro caps at 50K (Agency is unlimited).',
    },
    {
      title: 'Backlink Integrations',
      description: 'Pulls data from Ahrefs, Majestic, and Moz directly inside crawl results — useful if you already subscribe to those tools.',
    },
    {
      title: 'Forms-Based Authentication',
      description: 'Can log in to gated content and crawl behind login walls. Crawlix doesn\'t support this yet.',
    },
    {
      title: '15 Years of Ecosystem',
      description: 'Since 2010 — massive community, thousands of tutorials, and most SEO teams already know how to use it.',
    },
  ],
  bestFor: {
    crawlix: [
      'Agencies who need to deliver branded PDF reports to clients',
      'SEOs tracking how AI search engines crawl their sites',
      'Freelancers and small teams watching their software budget',
      'Anyone who wants to pay once instead of subscribing forever',
      'Teams running WCAG accessibility audits alongside SEO',
    ],
    competitor: [
      'Enterprise sites with millions of pages that need unlimited crawls',
      'Technical SEOs who rely on Ahrefs/Majestic data inside their crawler',
      'Teams crawling behind authentication walls',
      'Organizations with existing Screaming Frog workflows and training',
    ],
  },
  verdict: {
    title: 'The Bottom Line',
    summary: 'If you need unlimited crawl capacity or backlink integrations, Screaming Frog is hard to beat. For everything else — price, reports, AI readiness, perpetual ownership — Crawlix delivers more for $110 less per year.',
  },
  migrationSteps: [
    'Download Crawlix — runs on the same Windows and Linux machines as Screaming Frog',
    'Paste your URL list or sitemap URL to start your first crawl',
    'Results are stored locally in SQLite, just like Screaming Frog\'s local-first model',
    'Export a client-ready PDF or interactive HTML report (something SF can\'t do)',
    'Activate a Pro or Agency license when you\'re ready for more pages and integrations',
  ],
};

// Sitebulb comparison data
export const sitebulbComparison: ComparisonData = {
  competitor: competitors['sitebulb'],
  headline: 'Crawlix vs Sitebulb',
  subheadline: '5x more pages per dollar. Linux support. Free forever — not just a trial.',
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
      crawlix: 'Windows, Linux',
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
    notes: 'Sitebulb starts at $162/yr (Lite, 10K pages). Crawlix Pro is 65% cheaper than Sitebulb Pro. No free tier from Sitebulb.',
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
    { feature: 'PDF reports', category: 'Exports & Reports', crawlix: 'Pro+', competitor: true, winner: 'tie' },
    { feature: 'White-label reports', category: 'Exports & Reports', crawlix: 'Agency tier', competitor: true, winner: 'tie' },
    { feature: 'Visual crawl maps', category: 'Exports & Reports', crawlix: false, competitor: true, winner: 'competitor' },

    // Platform & Support
    { feature: 'Windows', category: 'Platform & Support', crawlix: true, competitor: true, winner: 'tie' },
    { feature: 'macOS', category: 'Platform & Support', crawlix: 'Coming soon', competitor: 'Cloud only', winner: 'competitor' },
    { feature: 'Linux', category: 'Platform & Support', crawlix: true, competitor: false, winner: 'crawlix' },
  ],
  crawlixAdvantages: [
    {
      title: '$271/Year Savings',
      description: 'Crawlix Pro: $149/year. Sitebulb Pro: $420/year. That\'s $271 back every year — or pay $249 once with a perpetual license.',
      icon: 'PiggyBank',
    },
    {
      title: 'Runs on Linux',
      description: 'Sitebulb Desktop is Windows-only. Crawlix runs natively on both Windows and Linux. macOS support coming soon.',
      icon: 'Monitor',
    },
    {
      title: 'Free Forever, Not Just a Trial',
      description: 'Crawlix\'s free tier never expires — crawl 100 pages with full analysis power, indefinitely. Sitebulb\'s trial has a time limit.',
      icon: 'Gift',
    },
    {
      title: '5x More Pages Per Dollar',
      description: 'Crawlix Pro gives you 50,000 pages for $149. Sitebulb Lite gives you 10,000 pages for $162. Do the math.',
      icon: 'TrendingUp',
    },
    {
      title: 'AI Crawler Analysis',
      description: 'See how GPTBot, ClaudeBot, and 11 other AI crawlers interact with your site. Sitebulb doesn\'t track AI bot access.',
      icon: 'Bot',
    },
    {
      title: 'Pay Once, Own Forever',
      description: 'Our $249 perpetual license means no more renewals. Sitebulb requires an active subscription to use the software.',
      icon: 'Key',
    },
  ],
  competitorStrengths: [
    {
      title: 'Deeper Check Library',
      description: 'Sitebulb runs 300+ individual checks compared to Crawlix\'s 134+. If check quantity matters more than cost, Sitebulb has more.',
    },
    {
      title: 'Cloud Collaboration',
      description: 'Sitebulb Cloud lets team members share projects and schedule crawls from any browser — useful for distributed teams.',
    },
    {
      title: 'Visual Site Architecture',
      description: 'Interactive crawl maps that visualize your internal linking structure. Helpful for spotting orphan pages and link equity flow.',
    },
    {
      title: 'Prioritized Hints System',
      description: 'Sitebulb\'s award-winning hints surface the most impactful issues first, with clear explanations of why each issue matters.',
    },
  ],
  bestFor: {
    crawlix: [
      'SEO professionals who want 5x more pages per dollar',
      'Linux users (Sitebulb Desktop doesn\'t run on Linux)',
      'Freelancers who want a permanent free tier to evaluate clients',
      'Teams that want to stop paying annual subscriptions',
      'SEOs who need AI crawler visibility alongside technical audits',
    ],
    competitor: [
      'Distributed teams that need cloud-based collaboration',
      'Agencies that rely on visual site architecture maps',
      'SEOs who want the widest possible check library, regardless of cost',
      'Windows-only shops already trained on Sitebulb\'s workflow',
    ],
  },
  verdict: {
    title: 'The Bottom Line',
    summary: 'Sitebulb has more checks and a cloud version. Crawlix has a lower price, more pages per dollar, Linux support, a permanent free tier, and a perpetual license. If you\'re choosing on value, Crawlix wins. If you need cloud collaboration or visual crawl maps, Sitebulb is worth the premium.',
  },
  migrationSteps: [
    'Download Crawlix for free — available on Windows and Linux (Sitebulb Desktop is Windows-only)',
    'Enter your site URL or paste a sitemap — Crawlix will auto-discover pages the same way Sitebulb does',
    'Run your first crawl — 134+ checks run automatically, similar to Sitebulb\'s hints system',
    'Compare results — Crawlix categorizes issues as Errors, Warnings, and Notices',
    'Export a PDF or HTML report when you\'re ready (something Sitebulb Lite doesn\'t include)',
  ],
};

// Semrush comparison data
export const semrushComparison: ComparisonData = {
  competitor: competitors['semrush'],
  headline: 'Crawlix vs Semrush Site Audit',
  subheadline: 'If you only need site audits, Crawlix does it for 90% less — with your data on your machine.',
  summaryPoints: [
    {
      title: 'Annual Cost (Site Audit)',
      crawlix: '$149/year',
      competitor: '$1,399/year (Pro plan)',
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
    competitor: '$1,399/year (Pro) / $2,500/year (Guru) / $5,000/year (Business)',
    notes: 'Semrush includes 40+ tools. Crawlix is 90% cheaper if you only need site audits.',
  },
  features: [
    // Pricing & Licensing
    { feature: 'Site audit starting price', category: 'Pricing & Licensing', crawlix: '$0 (free tier)', competitor: '$1,399/year', winner: 'crawlix' },
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
    { feature: 'PDF reports', category: 'Exports & Reports', crawlix: 'Pro+', competitor: true, winner: 'tie' },
    { feature: 'White-label reports', category: 'Exports & Reports', crawlix: 'Agency tier', competitor: 'Business tier', winner: 'tie' },
    { feature: 'API access', category: 'Exports & Reports', crawlix: false, competitor: 'Business tier', winner: 'competitor' },

    // Platform & Support
    { feature: 'Desktop app', category: 'Platform & Support', crawlix: 'Windows, Linux', competitor: false, winner: 'crawlix' },
    { feature: 'Web app', category: 'Platform & Support', crawlix: false, competitor: true, winner: 'competitor' },
    { feature: 'Mobile access', category: 'Platform & Support', crawlix: false, competitor: true, winner: 'competitor' },
  ],
  crawlixAdvantages: [
    {
      title: '$1,250/Year Savings',
      description: 'Crawlix Pro: $149/year. Semrush Pro: $1,399/year. If site auditing is what you need, you\'re paying $1,250 extra for tools you may not use.',
      icon: 'PiggyBank',
    },
    {
      title: 'Your Data, Your Machine',
      description: 'Every crawl stays on your local drive. Semrush uploads your site data to their cloud servers. For regulated industries, that difference matters.',
      icon: 'Shield',
    },
    {
      title: 'Works Without Internet',
      description: 'Review past crawl results on a plane, in a meeting, or in an air-gapped environment. Semrush goes blank without connectivity.',
      icon: 'WifiOff',
    },
    {
      title: 'AI Search Readiness',
      description: 'See how GPTBot, ClaudeBot, and 11 other AI crawlers interact with your robots.txt and content. Semrush doesn\'t track AI bot access.',
      icon: 'Bot',
    },
    {
      title: 'Own It Outright',
      description: 'Our $249 perpetual license means you keep the software even if you stop paying. Semrush subscriptions disappear the moment you cancel.',
      icon: 'Key',
    },
    {
      title: '4x More Projects',
      description: 'Crawlix Pro: 20 projects for $149/yr. Semrush Pro: 5 projects for $1,400/yr. That\'s 4x the projects at 1/10th the price.',
      icon: 'Infinity',
    },
  ],
  competitorStrengths: [
    {
      title: 'Full Marketing Suite',
      description: '40+ tools beyond site auditing: keyword research, rank tracking, backlink analysis, ad intelligence, content optimization, and more.',
    },
    {
      title: 'Access From Anywhere',
      description: 'Cloud-based — log in from any device, share dashboards with clients, and collaborate with remote team members.',
    },
    {
      title: 'Competitive Intelligence',
      description: 'Spy on competitor keywords, ad spend, backlink profiles, and traffic estimates. Crawlix focuses on your own site only.',
    },
    {
      title: 'Historical Trend Data',
      description: 'Years of historical ranking and traffic data for analyzing trends. Crawlix stores crawl-by-crawl history, not market-level trends.',
    },
  ],
  bestFor: {
    crawlix: [
      'Technical SEOs who audit sites and don\'t need keyword or backlink tools',
      'Organizations in healthcare, finance, or government with data residency requirements',
      'Freelancers and small agencies watching every dollar of overhead',
      'Teams that already have a separate keyword tool and just need a crawler',
      'Security-conscious environments that can\'t send site data to third-party clouds',
    ],
    competitor: [
      'Marketing teams that need keywords, backlinks, and audits in one platform',
      'Agencies that sell competitive analysis reports alongside audits',
      'Teams that need cloud-based collaboration and shared dashboards',
      'SEOs who want rank tracking tightly integrated with site health data',
    ],
  },
  verdict: {
    title: 'The Bottom Line',
    summary: 'Semrush is a powerful all-in-one marketing platform — but most of that $1,399/year goes toward tools that aren\'t site auditing. If technical SEO audits are your primary need, Crawlix does the job at 10% of the cost with better privacy. If you need keyword research, rank tracking, and competitive intelligence alongside audits, Semrush earns its price.',
  },
  migrationSteps: [
    'Download Crawlix — it installs locally on Windows or Linux, no cloud account needed',
    'Enter the same URLs you audit in Semrush\'s Site Audit tool',
    'Run your crawl — Crawlix checks the same fundamentals (broken links, meta tags, Core Web Vitals) plus AI readiness',
    'Review issues locally — your data never leaves your machine, unlike Semrush\'s cloud storage',
    'Keep Semrush for keywords and backlinks, use Crawlix for deeper site audits at a fraction of the cost',
  ],
};

// Ahrefs comparison data
export const ahrefsComparison: ComparisonData = {
  competitor: competitors['ahrefs'],
  headline: 'Crawlix vs Ahrefs Site Audit',
  subheadline: 'Ahrefs owns backlinks. For site auditing, Crawlix delivers more — at 90% less cost.',
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
    { feature: 'PDF reports', category: 'Exports & Reports', crawlix: 'Pro+', competitor: false, winner: 'crawlix' },
    { feature: 'White-label reports', category: 'Exports & Reports', crawlix: 'Agency tier', competitor: false, winner: 'crawlix' },
    { feature: 'CSV export', category: 'Exports & Reports', crawlix: true, competitor: true, winner: 'tie' },

    // Platform & Support
    { feature: 'Desktop app', category: 'Platform & Support', crawlix: 'Windows, Linux', competitor: false, winner: 'crawlix' },
    { feature: 'Web app', category: 'Platform & Support', crawlix: false, competitor: true, winner: 'competitor' },
  ],
  crawlixAdvantages: [
    {
      title: '$1,399/Year Savings',
      description: 'Crawlix Pro: $149/year. Ahrefs Lite: $1,548/year. For pure site auditing, you save $1,399 annually — enough to fund another tool entirely.',
      icon: 'PiggyBank',
    },
    {
      title: 'No Confusing Credits',
      description: 'Ahrefs charges credits for crawls, exports, and API calls. Crawlix uses simple page limits — 50K pages for Pro, unlimited for Agency. No surprises.',
      icon: 'Calculator',
    },
    {
      title: 'Data Stays On Your Machine',
      description: 'Crawlix never uploads your site data anywhere. Ahrefs stores everything on their servers. If your clients care about data handling, this matters.',
      icon: 'Shield',
    },
    {
      title: 'Client-Ready Reports',
      description: 'Export branded PDFs and interactive HTML reports. Ahrefs Site Audit only exports CSV — you\'d need to build the report yourself.',
      icon: 'FileText',
    },
    {
      title: 'AI Crawler Visibility',
      description: 'Analyze how GPTBot, ClaudeBot, and 11 other AI crawlers access your robots.txt and content. Ahrefs doesn\'t track AI bot behavior.',
      icon: 'Bot',
    },
    {
      title: 'Works Offline',
      description: 'Review and compare past crawl results without an internet connection. Ahrefs is 100% cloud — no connection, no data.',
      icon: 'WifiOff',
    },
  ],
  competitorStrengths: [
    {
      title: 'Largest Backlink Index',
      description: 'Ahrefs crawls the web more frequently than any other tool. Their backlink index is unmatched for link building and outreach.',
    },
    {
      title: 'Keyword Research Database',
      description: 'Accurate search volumes, keyword difficulty scores, and click-through rate estimates across 150+ countries.',
    },
    {
      title: 'Competitor Traffic Analysis',
      description: 'Estimate any domain\'s organic traffic, see their top pages, and find keyword gaps between you and your competitors.',
    },
    {
      title: 'Content Explorer',
      description: 'Search billions of pages to find top-performing content by topic, backlinks, or social shares. Great for content strategy.',
    },
  ],
  bestFor: {
    crawlix: [
      'Technical SEOs whose primary job is finding and fixing site issues',
      'Agencies that need to deliver white-label audit reports to clients',
      'Privacy-conscious organizations that can\'t send site data to the cloud',
      'Teams that already have Ahrefs for backlinks but want a better auditing tool',
      'Budget-conscious freelancers who don\'t need backlink or keyword data',
    ],
    competitor: [
      'Link builders and outreach specialists who live in backlink data',
      'Agencies that sell competitive backlink analysis as a service',
      'Content marketers researching topics and finding link opportunities',
      'SEO managers who want keywords, backlinks, and audits in one dashboard',
    ],
  },
  verdict: {
    title: 'The Bottom Line',
    summary: 'Ahrefs is unbeatable for backlink analysis and keyword research. But their site audit is a secondary feature in a $1,548/year suite. If you need a dedicated, privacy-first crawler with better reporting and AI readiness checks, Crawlix does it for $149/year. Many teams use both — Ahrefs for links, Crawlix for audits.',
  },
  migrationSteps: [
    'Download Crawlix — install it on Windows or Linux, no account required for the free tier',
    'Enter the same URLs you audit in Ahrefs Site Audit',
    'Run your crawl — Crawlix checks for the same issues plus AI crawler readiness and accessibility',
    'Export a branded PDF report to send to clients (Ahrefs only exports CSV for audit data)',
    'Use Crawlix alongside Ahrefs — let Ahrefs handle backlinks and keywords, Crawlix handle in-depth audits',
  ],
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
