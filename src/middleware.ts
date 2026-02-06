/**
 * Security Middleware for Crawlix Website
 * Implements CSP, security headers, and Keystatic auth (2026 best practices)
 *
 * @see https://owasp.org/www-project-secure-headers/
 */

import { defineMiddleware } from 'astro:middleware';

// ============================================
// KEYSTATIC ADMIN AUTHENTICATION
// ============================================

// Admin credentials from environment variables (runtime)
// Use process.env for runtime access in SSR
const ADMIN_USERNAME = process.env.KEYSTATIC_ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.KEYSTATIC_ADMIN_PASSWORD;

// Paths that require authentication
const PROTECTED_PATHS = ['/keystatic', '/api/keystatic'];

/**
 * Validate basic auth credentials
 */
function validateBasicAuth(authHeader: string | null): boolean {
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  // In production, require password to be set
  const isProd = process.env.NODE_ENV === 'production';
  if (isProd && !ADMIN_PASSWORD) {
    console.error('KEYSTATIC_ADMIN_PASSWORD is not set in production!');
    return false;
  }

  // In development without password, allow access (for local dev only)
  if (!ADMIN_PASSWORD && !isProd) {
    return true;
  }

  try {
    const base64Credentials = authHeader.slice(6);
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');

    return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
  } catch {
    return false;
  }
}

/**
 * Create 401 Unauthorized response with Basic Auth challenge
 */
function createAuthResponse(): Response {
  return new Response('Unauthorized - Admin access required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Crawlix Admin", charset="UTF-8"',
      'Content-Type': 'text/plain',
    },
  });
}

// ============================================
// CONTENT SECURITY POLICY
// ============================================

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

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // ============================================
  // KEYSTATIC AUTHENTICATION CHECK
  // ============================================
  const isProtectedPath = PROTECTED_PATHS.some((path) => url.pathname.startsWith(path));

  if (isProtectedPath) {
    const authHeader = context.request.headers.get('Authorization');

    if (!validateBasicAuth(authHeader)) {
      return createAuthResponse();
    }
  }

  const response = await next();

  // Skip CSP for Keystatic admin (it needs inline scripts)
  const skipCSP = PROTECTED_PATHS.some((path) => url.pathname.startsWith(path));

  // Add security headers
  for (const [header, value] of Object.entries(SECURITY_HEADERS)) {
    // Skip CSP for certain paths
    if (header === 'Content-Security-Policy' && skipCSP) {
      continue;
    }
    response.headers.set(header, value);
  }

  // Add HSTS only in production (requires HTTPS)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  // Remove server identification headers
  response.headers.delete('X-Powered-By');
  response.headers.delete('Server');

  return response;
});
