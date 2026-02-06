// Blog data - All information is real from the Crawlix codebase

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string; // URL or placeholder
  twitter?: string;
  linkedin?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color: string; // Tailwind color class
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  author: string; // Author ID
  category: string; // Category ID
  tags: string[];
  readingTime: number; // minutes
  featured?: boolean;
  image?: string;
}

// Authors
export const authors: Record<string, Author> = {
  'crawlix-team': {
    id: 'crawlix-team',
    name: 'Crawlix Team',
    role: 'Product Team',
    bio: 'The team behind Crawlix SEO Crawler. We build tools to help SEO professionals audit websites faster and more thoroughly.',
    twitter: 'crawloix',
  },
};

// Blog categories
export const categories: BlogCategory[] = [
  {
    id: 'tutorials',
    name: 'Tutorials',
    description: 'Step-by-step guides for using Crawlix',
    color: 'sky',
  },
  {
    id: 'product-updates',
    name: 'Product Updates',
    description: 'New features and improvements',
    color: 'violet',
  },
  {
    id: 'seo-guides',
    name: 'SEO Guides',
    description: 'Best practices and strategies',
    color: 'emerald',
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Deep dives into technical SEO',
    color: 'amber',
  },
  {
    id: 'case-studies',
    name: 'Case Studies',
    description: 'Real-world examples and results',
    color: 'rose',
  },
];

// Category color mapping
export const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  sky: { bg: 'bg-sky-500/20', text: 'text-sky-400', border: 'border-sky-500/30' },
  violet: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/30' },
  emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  rose: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' },
};

// Blog posts - Real content about Crawlix features
export const blogPosts: BlogPost[] = [
  {
    slug: 'complete-guide-to-97-seo-checks',
    title: 'The Complete Guide to Crawlix\'s 97+ SEO Checks',
    description: 'A comprehensive breakdown of every SEO check Crawlix performs, organized by category with actionable fix recommendations.',
    excerpt: 'Learn exactly what Crawlix analyzes on every page: from technical SEO fundamentals like status codes and canonicals, to content quality metrics, accessibility compliance, and security headers.',
    publishedAt: '2026-02-03',
    author: 'crawlix-team',
    category: 'tutorials',
    tags: ['seo-checks', 'technical-seo', 'content-analysis', 'accessibility'],
    readingTime: 15,
    featured: true,
  },
  {
    slug: 'javascript-rendering-guide',
    title: 'How to Crawl JavaScript Websites: A Complete Guide',
    description: 'Master JavaScript rendering in Crawlix with wait strategies, resource blocking, and lazy loading detection.',
    excerpt: 'Modern websites rely heavily on JavaScript. Learn how to configure Crawlix\'s Puppeteer-based rendering engine for accurate audits of SPAs and dynamic content.',
    publishedAt: '2026-01-28',
    author: 'crawlix-team',
    category: 'tutorials',
    tags: ['javascript', 'spa', 'puppeteer', 'rendering'],
    readingTime: 10,
  },
  {
    slug: 'core-web-vitals-measurement',
    title: 'Measuring Core Web Vitals with Crawlix',
    description: 'How Crawlix measures LCP, CLS, and INP using Chrome DevTools Protocol for accurate performance data.',
    excerpt: 'Core Web Vitals are now ranking signals. Discover how Crawlix captures real performance metrics including LCP, CLS, FCP, TTFB, and resource breakdowns.',
    publishedAt: '2026-01-20',
    author: 'crawlix-team',
    category: 'technical',
    tags: ['core-web-vitals', 'performance', 'lcp', 'cls', 'inp'],
    readingTime: 8,
  },
  {
    slug: 'ai-crawler-robots-txt-guide',
    title: 'AI Crawlers and Your Robots.txt: What You Need to Know',
    description: 'Understand how AI models like GPTBot, ClaudeBot, and Google-Extended access your content and how to control it.',
    excerpt: 'Crawlix analyzes your robots.txt for 13 AI crawlers including GPTBot, Google-Extended, and ClaudeBot. Learn what each bot does and how to manage AI access to your content.',
    publishedAt: '2026-01-15',
    author: 'crawlix-team',
    category: 'seo-guides',
    tags: ['ai', 'robots-txt', 'gptbot', 'llm'],
    readingTime: 7,
  },
  {
    slug: 'custom-data-extraction-tutorial',
    title: 'Extract Any Data from Websites with Custom Extraction Rules',
    description: 'Learn to use CSS selectors, XPath, regex, and JSON-LD extraction to pull custom data from crawled pages.',
    excerpt: 'Go beyond standard SEO metrics. Use Crawlix\'s extraction engine to capture prices, SKUs, author names, or any custom data using CSS selectors, XPath, or regex.',
    publishedAt: '2026-01-10',
    author: 'crawlix-team',
    category: 'tutorials',
    tags: ['extraction', 'css-selectors', 'xpath', 'regex'],
    readingTime: 12,
  },
  {
    slug: 'google-integrations-setup',
    title: 'Connecting Google Analytics and Search Console to Crawlix',
    description: 'Step-by-step guide to OAuth setup for GA4 and GSC integration, plus how to find orphan pages.',
    excerpt: 'Combine crawl data with traffic metrics from GA4 and search performance from GSC. Identify orphan pages that have traffic but no internal links.',
    publishedAt: '2026-01-05',
    author: 'crawlix-team',
    category: 'tutorials',
    tags: ['google-analytics', 'search-console', 'integrations', 'orphan-pages'],
    readingTime: 8,
  },
];

// Helper functions
export function getAuthor(id: string): Author | undefined {
  return authors[id];
}

export function getCategory(id: string): BlogCategory | undefined {
  return categories.find(c => c.id === id);
}

export function getCategoryColor(colorName: string) {
  return categoryColors[colorName] || categoryColors.sky;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find(p => p.slug === currentSlug);
  if (!current) return blogPosts.slice(0, limit);

  // Find posts with matching tags or category
  return blogPosts
    .filter(p => p.slug !== currentSlug)
    .map(p => ({
      post: p,
      score: (p.category === current.category ? 2 : 0) +
        p.tags.filter(t => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(p => p.post);
}
