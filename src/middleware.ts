/**
 * Security Middleware for Crawlix Website
 * Implements CSP and security headers (2026 best practices)
 *
 * @see https://owasp.org/www-project-secure-headers/
 */

import { defineMiddleware } from 'astro:middleware';

// Content Security Policy - strict but allows necessary resources
const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'wasm-unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:', 'https:'],
  'connect-src': ["'self'", 'https://crawlix.lemonsqueezy.com', 'https://api.lemonsqueezy.com'],
  'frame-src': ["'self'", 'https://crawlix.lemonsqueezy.com'],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'", 'https://crawlix.lemonsqueezy.com'],
  'upgrade-insecure-requests': [],
};

function buildCSP(): string {
  return Object.entries(CSP_DIRECTIVES)
    .map(([directive, values]) => {
      if (values.length === 0) return directive;
      return `${directive} ${values.join(' ')}`;
    })
    .join('; ');
}

// Security headers based on OWASP 2025/2026 recommendations
const SECURITY_HEADERS: Record<string, string> = {
  'Content-Security-Policy': buildCSP(),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '0', // Deprecated but still set to 0 for security
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), magnetometer=(), gyroscope=(), payment=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'credentialless',
  'Cross-Origin-Resource-Policy': 'same-origin',
};

// Paths that should skip CSP (e.g., Keystatic admin)
const CSP_SKIP_PATHS = ['/keystatic', '/api/keystatic'];

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = new URL(context.request.url);

  // Skip CSP for Keystatic admin (it needs inline scripts)
  const skipCSP = CSP_SKIP_PATHS.some((path) => url.pathname.startsWith(path));

  // Add security headers
  for (const [header, value] of Object.entries(SECURITY_HEADERS)) {
    // Skip CSP for certain paths
    if (header === 'Content-Security-Policy' && skipCSP) {
      continue;
    }
    response.headers.set(header, value);
  }

  // Add HSTS only in production (requires HTTPS)
  if (import.meta.env.PROD) {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  // Remove server identification headers
  response.headers.delete('X-Powered-By');
  response.headers.delete('Server');

  return response;
});
