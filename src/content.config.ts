import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts collection (Markdoc/MDX content)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    readingTime: z.number().optional(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
  }),
});

// Docs collection (MDX content)
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    badge: z.enum(['new', 'updated', 'pro', 'agency']).optional(),
    order: z.number().optional(),
  }),
});

// Note: JSON-based collections (pricing, features, faqs, etc.) are managed by Keystatic
// and read directly via the Keystatic reader API, not via Astro content collections.

export const collections = {
  blog,
  docs,
};
