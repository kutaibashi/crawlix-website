import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

// Create a reader for accessing Keystatic content
export const reader = createReader(process.cwd(), keystaticConfig);

// Helper types based on our schema
export type PricingTier = {
  id: string;
  name: string;
  description: string;
  priceAnnual: number;
  pricePerpetual: number | null;
  limits: {
    pages: string;
    projects: string;
    scheduledCrawls: string;
    extractions: string;
    devices: string;
  };
  features: string[];
  highlighted: boolean;
  badge: string;
  cta: string;
  ctaLink: string;
};

export type FeatureCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  checkCount: number;
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number | null;
};

export type Release = {
  version: string;
  date: string;
  title: string;
  summary: string;
  type: 'major' | 'minor' | 'patch';
  highlights: string[];
  changes: Array<{
    type: 'feature' | 'improvement' | 'fix' | 'breaking';
    title: string;
    description?: string;
    badge?: string;
  }>;
};

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string | null;
  twitter?: string;
  linkedin?: string | null;
};

export type BlogCategory = {
  id: string;
  name: string;
  description: string;
  color: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string | null;
  author: string;
  category: string;
  tags: readonly string[];
  readingTime: number;
  featured?: boolean;
  image?: string | null;
};

export type Competitor = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website?: string | null;
  logo: string;
  founded?: string;
  headquarters?: string;
};

export type Navigation = {
  main: Array<{ name: string; href: string }>;
  footerProduct: Array<{ name: string; href: string }>;
  footerResources: Array<{ name: string; href: string }>;
  footerCompany: Array<{ name: string; href: string }>;
  footerLegal: Array<{ name: string; href: string }>;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  description: string;
  socialTwitter?: string;
  socialGithub?: string | null;
  contactEmail?: string;
  copyrightYear: number | null;
};

export type Homepage = {
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroCtaLink: string;
  keyCapabilities: Array<{
    title: string;
    description: string;
    icon: string;
    stat: string;
    statLabel: string;
  }>;
  workflowSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
};

// Convenience functions for fetching content

export async function getPricingTiers(): Promise<PricingTier[]> {
  const slugs = await reader.collections.pricingTiers.list();
  const tiers = await Promise.all(
    slugs.map(async (slug) => {
      const tier = await reader.collections.pricingTiers.read(slug);
      return tier ? { ...tier, id: slug } : null;
    })
  );
  return tiers.filter((t): t is PricingTier => t !== null);
}

export async function getFeatureCategories(): Promise<FeatureCategory[]> {
  const slugs = await reader.collections.featureCategories.list();
  const categories = await Promise.all(
    slugs.map(async (slug): Promise<FeatureCategory | null> => {
      const category = await reader.collections.featureCategories.read(slug);
      if (!category) return null;
      return {
        id: slug,
        name: category.name,
        description: category.description,
        icon: category.icon as string,
        color: category.color as string,
        checkCount: category.checkCount,
        features: category.features.map((f) => ({
          title: f.title,
          description: f.description,
          icon: f.icon as string | undefined,
        })),
      };
    })
  );
  return categories.filter((c): c is FeatureCategory => c !== null);
}

export async function getFAQs(category?: string): Promise<FAQ[]> {
  const slugs = await reader.collections.faqs.list();
  const faqs = await Promise.all(
    slugs.map(async (slug): Promise<FAQ | null> => {
      const faq = await reader.collections.faqs.read(slug);
      if (!faq) return null;
      return {
        id: slug,
        question: faq.question,
        answer: faq.answer,
        category: faq.category as string,
        order: faq.order,
      };
    })
  );
  const filtered = faqs.filter((f): f is FAQ => f !== null);

  if (category) {
    return filtered.filter((f) => f.category === category).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }
  return filtered.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getReleases(): Promise<Release[]> {
  const slugs = await reader.collections.releases.list();
  const releases = await Promise.all(
    slugs.map(async (slug): Promise<Release | null> => {
      const release = await reader.collections.releases.read(slug);
      if (!release) return null;
      return {
        version: slug.replace(/-/g, '.'),
        date: release.date,
        title: release.title,
        summary: release.summary,
        type: release.type,
        highlights: [...release.highlights],
        changes: release.changes.map((c) => ({
          type: c.type,
          title: c.title,
          description: c.description,
          badge: c.badge,
        })),
      };
    })
  );
  return releases
    .filter((r): r is Release => r !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getAuthors(): Promise<Record<string, Author>> {
  const slugs = await reader.collections.authors.list();
  const authors: Record<string, Author> = {};

  for (const slug of slugs) {
    const author = await reader.collections.authors.read(slug);
    if (author) {
      authors[slug] = {
        id: slug,
        name: author.name,
        role: author.role,
        bio: author.bio,
        avatar: author.avatar,
        twitter: author.twitter,
        linkedin: author.linkedin,
      };
    }
  }
  return authors;
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const slugs = await reader.collections.blogCategories.list();
  const categories = await Promise.all(
    slugs.map(async (slug): Promise<BlogCategory | null> => {
      const category = await reader.collections.blogCategories.read(slug);
      if (!category) return null;
      return {
        id: slug,
        name: category.name,
        description: category.description,
        color: category.color as string,
      };
    })
  );
  return categories.filter((c): c is BlogCategory => c !== null);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const slugs = await reader.collections.blogPosts.list();
  const posts = await Promise.all(
    slugs.map(async (slug): Promise<BlogPost | null> => {
      const post = await reader.collections.blogPosts.read(slug);
      if (!post) return null;
      return {
        slug,
        title: post.title,
        description: post.description,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        author: post.author,
        category: post.category,
        tags: post.tags,
        readingTime: post.readingTime,
        featured: post.featured,
        image: post.image,
      };
    })
  );
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getBlogPost(slug: string) {
  return reader.collections.blogPosts.read(slug);
}

export async function getCompetitors(): Promise<Competitor[]> {
  const slugs = await reader.collections.competitors.list();
  const competitors = await Promise.all(
    slugs.map(async (slug): Promise<Competitor | null> => {
      const competitor = await reader.collections.competitors.read(slug);
      if (!competitor) return null;
      return {
        id: slug,
        name: competitor.name,
        tagline: competitor.tagline,
        description: competitor.description,
        website: competitor.website,
        logo: competitor.logo as string,
        founded: competitor.founded,
        headquarters: competitor.headquarters,
      };
    })
  );
  return competitors.filter((c): c is Competitor => c !== null);
}

export async function getNavigation(): Promise<Navigation | null> {
  const nav = await reader.singletons.navigation.read();
  if (!nav) return null;
  return {
    main: [...nav.main],
    footerProduct: [...nav.footerProduct],
    footerResources: [...nav.footerResources],
    footerCompany: [...nav.footerCompany],
    footerLegal: [...nav.footerLegal],
  };
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const settings = await reader.singletons.siteSettings.read();
  if (!settings) return null;
  return {
    siteName: settings.siteName,
    tagline: settings.tagline,
    description: settings.description,
    socialTwitter: settings.socialTwitter,
    socialGithub: settings.socialGithub,
    contactEmail: settings.contactEmail,
    copyrightYear: settings.copyrightYear,
  };
}

export async function getHomepage(): Promise<Homepage | null> {
  const home = await reader.singletons.homepage.read();
  if (!home) return null;
  return {
    heroTitle: home.heroTitle,
    heroSubtitle: home.heroSubtitle,
    heroCta: home.heroCta,
    heroCtaLink: home.heroCtaLink,
    keyCapabilities: home.keyCapabilities.map((c) => ({
      title: c.title,
      description: c.description,
      icon: c.icon as string,
      stat: c.stat,
      statLabel: c.statLabel,
    })),
    workflowSteps: home.workflowSteps.map((s) => ({
      step: s.step ?? 0,
      title: s.title,
      description: s.description,
    })),
  };
}

// Calculate total SEO checks from feature categories
export async function getTotalSeoChecks(): Promise<number> {
  const categories = await getFeatureCategories();
  return categories.reduce((sum, cat) => sum + cat.checkCount, 0);
}
