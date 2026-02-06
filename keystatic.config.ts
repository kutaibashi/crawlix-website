import { config, fields, collection, singleton } from '@keystatic/core';

// Lucide icon options for selection fields
const lucideIcons = [
  'Wrench', 'FileText', 'BookOpen', 'Link', 'Image', 'Gauge', 'Code', 'Shield',
  'Accessibility', 'Globe', 'Bot', 'Search', 'Zap', 'Monitor', 'BarChart3',
  'Table', 'Braces', 'FileSpreadsheet', 'Settings', 'Bug', 'Lightbulb',
  'ChevronRight', 'ArrowRight', 'Download', 'ExternalLink', 'Check', 'X',
  'Star', 'Heart', 'Users', 'Building', 'Calendar', 'Clock', 'Mail',
  'Phone', 'MapPin', 'Tag', 'Folder', 'File', 'Edit', 'Trash', 'Plus',
  'Minus', 'AlertCircle', 'Info', 'HelpCircle', 'CheckCircle', 'XCircle',
] as const;

// Tailwind color options
const tailwindColors = [
  'sky', 'violet', 'emerald', 'amber', 'rose', 'cyan', 'indigo', 'orange',
  'pink', 'teal', 'purple', 'slate', 'gray', 'red', 'green', 'blue', 'yellow',
] as const;

// Storage configuration
// Set KEYSTATIC_STORAGE=github and configure GITHUB_REPO for GitHub mode
// Otherwise defaults to local storage for development
const isGitHubMode = import.meta.env.KEYSTATIC_STORAGE === 'github';

// SECURITY: Validate required environment variables in production
if (import.meta.env.PROD && isGitHubMode) {
  const requiredEnvVars = {
    'GITHUB_REPO_OWNER': import.meta.env.GITHUB_REPO_OWNER,
    'GITHUB_REPO_NAME': import.meta.env.GITHUB_REPO_NAME,
    'KEYSTATIC_SECRET': import.meta.env.KEYSTATIC_SECRET,
  };

  const missing: string[] = [];
  const invalid: string[] = [];

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value) {
      missing.push(key);
    } else if (value === 'your-org' || value === 'your-client-id' || value === 'placeholder') {
      invalid.push(`${key} (contains placeholder value)`);
    }
  }

  if (missing.length > 0 || invalid.length > 0) {
    const errors = [...missing.map(k => `Missing: ${k}`), ...invalid];
    throw new Error(
      `Keystatic security configuration error:\n${errors.join('\n')}\n` +
      'All environment variables must be properly configured in production.'
    );
  }
}

const storage = isGitHubMode
  ? {
      kind: 'github' as const,
      repo: {
        owner: import.meta.env.GITHUB_REPO_OWNER || 'your-org',
        name: import.meta.env.GITHUB_REPO_NAME || 'seo-crawler',
      },
      branchPrefix: 'keystatic/',
    }
  : {
      kind: 'local' as const,
    };

export default config({
  storage,
  ui: {
    brand: {
      name: 'Crawlix CMS',
    },
  },
  collections: {
    // ===================
    // Blog Posts
    // ===================
    blogPosts: collection({
      label: 'Blog Posts',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        slug: fields.slug({
          name: { label: 'URL Slug' },
        }),
        title: fields.text({
          label: 'Title',
          description: 'The post title (max 60 characters for SEO)',
          validation: { isRequired: true, length: { max: 70 } },
        }),
        description: fields.text({
          label: 'Meta Description',
          description: 'SEO description (max 160 characters)',
          multiline: true,
          validation: { isRequired: true, length: { max: 160 } },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'Preview text for blog listing',
          multiline: true,
          validation: { isRequired: true },
        }),
        publishedAt: fields.date({
          label: 'Published Date',
          validation: { isRequired: true },
        }),
        updatedAt: fields.date({
          label: 'Updated Date',
        }),
        author: fields.select({
          label: 'Author',
          options: [
            { label: 'Crawlix Team', value: 'crawlix-team' },
          ],
          defaultValue: 'crawlix-team',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Tutorials', value: 'tutorials' },
            { label: 'Product Updates', value: 'product-updates' },
            { label: 'SEO Guides', value: 'seo-guides' },
            { label: 'Technical', value: 'technical' },
            { label: 'Case Studies', value: 'case-studies' },
          ],
          defaultValue: 'tutorials',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value || 'New Tag',
          }
        ),
        readingTime: fields.integer({
          label: 'Reading Time (minutes)',
          defaultValue: 5,
          validation: { isRequired: true, min: 1 },
        }),
        featured: fields.checkbox({
          label: 'Featured Post',
          description: 'Show on homepage',
          defaultValue: false,
        }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),

    // ===================
    // Authors
    // ===================
    authors: collection({
      label: 'Authors',
      slugField: 'id',
      path: 'src/content/authors/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({ name: { label: 'Author ID' } }),
        name: fields.text({
          label: 'Name',
          validation: { isRequired: true },
        }),
        role: fields.text({
          label: 'Role',
          validation: { isRequired: true },
        }),
        bio: fields.text({
          label: 'Bio',
          multiline: true,
          validation: { isRequired: true },
        }),
        avatar: fields.image({
          label: 'Avatar',
          directory: 'public/images/authors',
          publicPath: '/images/authors/',
        }),
        twitter: fields.text({ label: 'Twitter Handle' }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
      },
    }),

    // ===================
    // Changelog Releases
    // ===================
    releases: collection({
      label: 'Releases',
      slugField: 'version',
      path: 'src/content/releases/*',
      format: { data: 'json' },
      schema: {
        version: fields.slug({
          name: { label: 'Version', description: 'e.g., 1.4.0' },
        }),
        date: fields.date({
          label: 'Release Date',
          validation: { isRequired: true },
        }),
        title: fields.text({
          label: 'Release Title',
          validation: { isRequired: true },
        }),
        summary: fields.text({
          label: 'Summary',
          multiline: true,
          validation: { isRequired: true },
        }),
        type: fields.select({
          label: 'Release Type',
          options: [
            { label: 'Major', value: 'major' },
            { label: 'Minor', value: 'minor' },
            { label: 'Patch', value: 'patch' },
          ],
          defaultValue: 'minor',
        }),
        highlights: fields.array(
          fields.text({ label: 'Highlight' }),
          {
            label: 'Highlights',
            itemLabel: (props) => props.value || 'New Highlight',
          }
        ),
        changes: fields.array(
          fields.object({
            type: fields.select({
              label: 'Type',
              options: [
                { label: 'Feature', value: 'feature' },
                { label: 'Improvement', value: 'improvement' },
                { label: 'Fix', value: 'fix' },
                { label: 'Breaking', value: 'breaking' },
              ],
              defaultValue: 'feature',
            }),
            title: fields.text({
              label: 'Title',
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: 'Description',
              multiline: true,
            }),
            badge: fields.select({
              label: 'Badge',
              options: [
                { label: 'None', value: '' },
                { label: 'Pro', value: 'Pro' },
                { label: 'Agency', value: 'Agency' },
              ],
              defaultValue: '',
            }),
          }),
          {
            label: 'Changes',
            itemLabel: (props) => props.fields.title.value || 'New Change',
          }
        ),
      },
    }),

    // ===================
    // Pricing Tiers
    // ===================
    pricingTiers: collection({
      label: 'Pricing Tiers',
      slugField: 'id',
      path: 'src/content/pricing/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({ name: { label: 'Tier ID' } }),
        name: fields.text({
          label: 'Tier Name',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Tagline',
          validation: { isRequired: true },
        }),
        priceAnnual: fields.integer({
          label: 'Annual Price ($)',
          defaultValue: 0,
        }),
        pricePerpetual: fields.integer({
          label: 'Perpetual Price ($)',
          description: 'Leave empty if not available',
        }),
        limits: fields.object({
          pages: fields.text({ label: 'Pages Limit', defaultValue: '100' }),
          projects: fields.text({ label: 'Projects Limit', defaultValue: '1' }),
          scheduledCrawls: fields.text({ label: 'Scheduled Crawls', defaultValue: '0' }),
          extractions: fields.text({ label: 'Extractions', defaultValue: '5' }),
          devices: fields.text({ label: 'Devices', defaultValue: '1' }),
        }),
        features: fields.array(
          fields.text({ label: 'Feature' }),
          {
            label: 'Features List',
            itemLabel: (props) => props.value || 'New Feature',
          }
        ),
        highlighted: fields.checkbox({
          label: 'Highlighted (Most Popular)',
          defaultValue: false,
        }),
        badge: fields.text({
          label: 'Badge Text',
          description: 'e.g., "Most Popular"',
        }),
        cta: fields.text({
          label: 'CTA Button Text',
          defaultValue: 'Get Started',
        }),
        ctaLink: fields.text({
          label: 'CTA Link',
          defaultValue: '/download',
        }),
      },
    }),

    // ===================
    // Feature Categories
    // ===================
    featureCategories: collection({
      label: 'Feature Categories',
      slugField: 'id',
      path: 'src/content/features/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({ name: { label: 'Category ID' } }),
        name: fields.text({
          label: 'Category Name',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        icon: fields.select({
          label: 'Icon',
          options: lucideIcons.map((icon) => ({ label: icon, value: icon })),
          defaultValue: 'Settings',
        }),
        color: fields.select({
          label: 'Color',
          options: tailwindColors.map((color) => ({ label: color, value: color })),
          defaultValue: 'sky',
        }),
        checkCount: fields.integer({
          label: 'Number of Checks',
          validation: { isRequired: true, min: 1 },
        }),
        features: fields.array(
          fields.object({
            title: fields.text({
              label: 'Title',
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: 'Description',
              validation: { isRequired: true },
            }),
            icon: fields.select({
              label: 'Icon (optional)',
              options: [{ label: 'None', value: '' }, ...lucideIcons.map((icon) => ({ label: icon, value: icon }))],
              defaultValue: '',
            }),
          }),
          {
            label: 'Features',
            itemLabel: (props) => props.fields.title.value || 'New Feature',
          }
        ),
      },
    }),

    // ===================
    // Competitors
    // ===================
    competitors: collection({
      label: 'Competitors',
      slugField: 'id',
      path: 'src/content/competitors/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({ name: { label: 'Competitor ID' } }),
        name: fields.text({
          label: 'Name',
          validation: { isRequired: true },
        }),
        tagline: fields.text({
          label: 'Tagline',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        website: fields.url({
          label: 'Website URL',
        }),
        logo: fields.select({
          label: 'Logo Icon',
          options: lucideIcons.map((icon) => ({ label: icon, value: icon })),
          defaultValue: 'Building',
        }),
        founded: fields.text({ label: 'Founded Year' }),
        headquarters: fields.text({ label: 'Headquarters' }),
      },
    }),

    // ===================
    // Comparison Data
    // ===================
    comparisons: collection({
      label: 'Comparisons',
      slugField: 'competitorId',
      path: 'src/content/comparisons/*',
      format: { data: 'json' },
      schema: {
        competitorId: fields.slug({
          name: { label: 'Competitor ID', description: 'e.g., screaming-frog' },
        }),
        headline: fields.text({
          label: 'Page Headline',
          validation: { isRequired: true },
        }),
        subheadline: fields.text({
          label: 'Subheadline',
          validation: { isRequired: true },
        }),
        pricing: fields.object({
          crawlix: fields.text({ label: 'Crawlix Pricing' }),
          competitor: fields.text({ label: 'Competitor Pricing' }),
          notes: fields.text({ label: 'Notes', multiline: true }),
        }),
        summaryPoints: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            crawlix: fields.text({ label: 'Crawlix Value' }),
            competitor: fields.text({ label: 'Competitor Value' }),
            winner: fields.select({
              label: 'Winner',
              options: [
                { label: 'Crawlix', value: 'crawlix' },
                { label: 'Competitor', value: 'competitor' },
                { label: 'Tie', value: 'tie' },
              ],
              defaultValue: 'crawlix',
            }),
          }),
          {
            label: 'Summary Points',
            itemLabel: (props) => props.fields.title.value || 'New Point',
          }
        ),
        crawlixAdvantages: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
            icon: fields.select({
              label: 'Icon',
              options: lucideIcons.map((icon) => ({ label: icon, value: icon })),
              defaultValue: 'Check',
            }),
          }),
          {
            label: 'Crawlix Advantages',
            itemLabel: (props) => props.fields.title.value || 'New Advantage',
          }
        ),
        competitorStrengths: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Competitor Strengths',
            itemLabel: (props) => props.fields.title.value || 'New Strength',
          }
        ),
        bestForCrawlix: fields.array(
          fields.text({ label: 'Use Case' }),
          { label: 'Best For Crawlix' }
        ),
        bestForCompetitor: fields.array(
          fields.text({ label: 'Use Case' }),
          { label: 'Best For Competitor' }
        ),
        migrationSteps: fields.array(
          fields.text({ label: 'Step' }),
          { label: 'Migration Steps' }
        ),
        features: fields.array(
          fields.object({
            feature: fields.text({ label: 'Feature Name' }),
            category: fields.text({ label: 'Category' }),
            crawlix: fields.text({ label: 'Crawlix Value' }),
            competitor: fields.text({ label: 'Competitor Value' }),
            winner: fields.select({
              label: 'Winner',
              options: [
                { label: 'Crawlix', value: 'crawlix' },
                { label: 'Competitor', value: 'competitor' },
                { label: 'Tie', value: 'tie' },
              ],
              defaultValue: 'tie',
            }),
            note: fields.text({ label: 'Note' }),
          }),
          {
            label: 'Feature Comparison',
            itemLabel: (props) => props.fields.feature.value || 'New Feature',
          }
        ),
      },
    }),

    // ===================
    // FAQs
    // ===================
    faqs: collection({
      label: 'FAQs',
      slugField: 'id',
      path: 'src/content/faqs/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({ name: { label: 'FAQ ID' } }),
        question: fields.text({
          label: 'Question',
          validation: { isRequired: true },
        }),
        answer: fields.text({
          label: 'Answer',
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Pricing', value: 'pricing' },
            { label: 'General', value: 'general' },
            { label: 'Technical', value: 'technical' },
            { label: 'Licensing', value: 'licensing' },
          ],
          defaultValue: 'general',
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),

    // ===================
    // Integrations
    // ===================
    integrations: collection({
      label: 'Integrations',
      slugField: 'id',
      path: 'src/content/integrations/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({ name: { label: 'Integration ID' } }),
        name: fields.text({
          label: 'Name',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        logo: fields.select({
          label: 'Logo Icon',
          options: lucideIcons.map((icon) => ({ label: icon, value: icon })),
          defaultValue: 'Zap',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Analytics & Traffic', value: 'analytics' },
            { label: 'Search Performance', value: 'search' },
            { label: 'Performance & Speed', value: 'performance' },
            { label: 'Data Export', value: 'export' },
            { label: 'Coming Soon', value: 'coming-soon' },
          ],
          defaultValue: 'analytics',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Available', value: 'available' },
            { label: 'Coming Soon', value: 'coming-soon' },
          ],
          defaultValue: 'available',
        }),
        tier: fields.select({
          label: 'Required Tier',
          options: [
            { label: 'Free', value: 'free' },
            { label: 'Pro', value: 'pro' },
            { label: 'Agency', value: 'agency' },
          ],
          defaultValue: 'free',
        }),
        features: fields.array(
          fields.text({ label: 'Feature' }),
          {
            label: 'Features',
            itemLabel: (props) => props.value || 'New Feature',
          }
        ),
      },
    }),

    // ===================
    // Blog Categories
    // ===================
    blogCategories: collection({
      label: 'Blog Categories',
      slugField: 'id',
      path: 'src/content/blog-categories/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({ name: { label: 'Category ID' } }),
        name: fields.text({
          label: 'Name',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          validation: { isRequired: true },
        }),
        color: fields.select({
          label: 'Color',
          options: tailwindColors.map((color) => ({ label: color, value: color })),
          defaultValue: 'sky',
        }),
      },
    }),
  },

  singletons: {
    // ===================
    // Site Navigation
    // ===================
    navigation: singleton({
      label: 'Navigation',
      path: 'src/content/singletons/navigation',
      format: { data: 'json' },
      schema: {
        main: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            href: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Main Navigation',
            itemLabel: (props) => props.fields.name.value || 'New Item',
          }
        ),
        footerProduct: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            href: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Footer - Product',
            itemLabel: (props) => props.fields.name.value || 'New Item',
          }
        ),
        footerResources: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            href: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Footer - Resources',
            itemLabel: (props) => props.fields.name.value || 'New Item',
          }
        ),
        footerCompany: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            href: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Footer - Company',
            itemLabel: (props) => props.fields.name.value || 'New Item',
          }
        ),
        footerLegal: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            href: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Footer - Legal',
            itemLabel: (props) => props.fields.name.value || 'New Item',
          }
        ),
      },
    }),

    // ===================
    // Site Settings
    // ===================
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/singletons/site-settings',
      format: { data: 'json' },
      schema: {
        siteName: fields.text({
          label: 'Site Name',
          defaultValue: 'Crawlix',
        }),
        tagline: fields.text({
          label: 'Tagline',
          defaultValue: 'Privacy-First Desktop SEO Crawler',
        }),
        description: fields.text({
          label: 'Default Meta Description',
          multiline: true,
        }),
        socialTwitter: fields.text({ label: 'Twitter Handle' }),
        socialGithub: fields.url({ label: 'GitHub URL' }),
        contactEmail: fields.text({ label: 'Contact Email' }),
        copyrightYear: fields.integer({
          label: 'Copyright Year',
          defaultValue: 2026,
        }),
      },
    }),

    // ===================
    // Homepage Content
    // ===================
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/singletons/homepage',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.text({
          label: 'Hero Title',
          validation: { isRequired: true },
        }),
        heroSubtitle: fields.text({
          label: 'Hero Subtitle',
          multiline: true,
        }),
        heroCta: fields.text({
          label: 'Hero CTA Text',
          defaultValue: 'Download Free',
        }),
        heroCtaLink: fields.text({
          label: 'Hero CTA Link',
          defaultValue: '/download',
        }),
        keyCapabilities: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
            icon: fields.select({
              label: 'Icon',
              options: lucideIcons.map((icon) => ({ label: icon, value: icon })),
              defaultValue: 'Search',
            }),
            stat: fields.text({ label: 'Stat Value' }),
            statLabel: fields.text({ label: 'Stat Label' }),
          }),
          {
            label: 'Key Capabilities',
            itemLabel: (props) => props.fields.title.value || 'New Capability',
          }
        ),
        workflowSteps: fields.array(
          fields.object({
            step: fields.integer({ label: 'Step Number' }),
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Workflow Steps',
            itemLabel: (props) => `Step ${props.fields.step.value}: ${props.fields.title.value}` || 'New Step',
          }
        ),
      },
    }),
  },
});
