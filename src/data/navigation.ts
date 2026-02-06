export interface NavItem {
  name: string;
  href: string;
}

export interface Navigation {
  main: NavItem[];
  footer: {
    product: NavItem[];
    resources: NavItem[];
    company: NavItem[];
    legal: NavItem[];
  };
}

const navigation: Navigation = {
  main: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Compare', href: '/compare' },
    { name: 'Docs', href: '/docs' },
    { name: 'Blog', href: '/blog' },
  ],
  footer: {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Compare', href: '/compare' },
      { name: 'Download', href: '/download' },
      { name: 'Changelog', href: '/changelog' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/docs/tutorials' },
      { name: 'API Reference', href: '/docs/api' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Security', href: '/security/vulnerability-disclosure' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'EULA', href: '/legal/eula' },
      { name: 'Refund Policy', href: '/legal/refund' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'Accessibility', href: '/legal/accessibility' },
    ],
  },
};

export default navigation;
