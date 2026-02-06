// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://crawlix.app',
  output: 'server',
  adapter: node({ mode: 'standalone' }),

  // Performance: Inline CSS to eliminate render-blocking requests
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keystatic admin is large (~2.7MB) but only loaded for /keystatic routes
      // This is expected and doesn't affect public page performance
      chunkSizeWarningLimit: 3000,
      // Minify CSS for smaller inline size
      cssMinify: 'lightningcss',
    },
  },
  integrations: [
    react(),
    markdoc(),
    mdx(),
    sitemap(),
    keystatic(),
  ]
});