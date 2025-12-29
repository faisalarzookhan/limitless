/**
 * Sub-domain Configuration
 * Configuration for sub-domain architecture:
 * - product.limitlessinfotech.com: High-performance hub for SaaS offerings and product-led growth
 * - services.limitlessinfotech.com: Dedicated catalog for custom development, cloud migration, and digital transformation
 * - enterprises.limitlessinfotech.com: Secure portal for high-ticket corporate case studies, partner perks, and white-label documentation
 * - about.limitlessinfotech.com: Centralized node for company mission, i18n support, and the "Limitless" career ecosystem
 */

const SUBDOMAIN_CONFIG = {
  // Main domain
  mainDomain: 'https://limitlessinfotech.com',

  // Sub-domain configurations
  subdomains: {
    product: {
      name: 'product',
      path: '/product',
      title: 'Product Hub | Limitless Infotech',
      description:
        'High-performance hub for SaaS offerings and product-led growth',
      routes: [
        '/product',
        '/product/trackit',
        '/product/hr-ims',
        '/product/solutions',
        '/product/features',
        '/product/pricing',
        '/product/demo',
      ],
      features: [
        'SaaS offerings',
        'Product-led growth',
        'Interactive demos',
        'Feature showcases',
      ],
    },
    services: {
      name: 'services',
      path: '/services',
      title: 'Services | Limitless Infotech',
      description:
        'Dedicated catalog for custom development, cloud migration, and digital transformation',
      routes: [
        '/services',
        '/services/custom-development',
        '/services/cloud-migration',
        '/services/digital-transformation',
        '/services/consulting',
        '/services/support',
      ],
      features: [
        'Custom development',
        'Cloud migration',
        'Digital transformation',
        'Consulting services',
        'Technical support',
      ],
    },
    enterprises: {
      name: 'enterprises',
      path: '/enterprises',
      title: 'Enterprise Solutions | Limitless Infotech',
      description:
        'Secure portal for high-ticket corporate case studies, partner perks, and white-label documentation',
      routes: [
        '/enterprises',
        '/enterprises/case-studies',
        '/enterprises/partner-program',
        '/enterprises/white-label',
        '/enterprises/security',
        '/enterprises/compliance',
      ],
      features: [
        'Corporate case studies',
        'Partner program',
        'White-label solutions',
        'Enterprise security',
        'Compliance tools',
      ],
    },
    about: {
      name: 'about',
      path: '/about',
      title: 'About | Limitless Infotech',
      description:
        'Centralized node for company mission, i18n support, and the "Limitless" career ecosystem',
      routes: [
        '/about',
        '/about/company',
        '/about/team',
        '/about/careers',
        '/about/mission',
        '/about/i18n',
      ],
      features: [
        'Company information',
        'Team profiles',
        'Career opportunities',
        'Company mission',
        'Internationalization',
      ],
    },
  },

  // Redirect configurations
  redirects: {
    // Redirect from main domain to appropriate subdomain based on path
    '/products/*': 'https://product.limitlessinfotech.com',
    '/solutions/*': 'https://product.limitlessinfotech.com',
    '/services/*': 'https://services.limitlessinfotech.com',
    '/enterprise/*': 'https://enterprises.limitlessinfotech.com',
    '/business/*': 'https://enterprises.limitlessinfotech.com',
    '/careers/*': 'https://about.limitlessinfotech.com',
    '/company/*': 'https://about.limitlessinfotech.com',
    '/about/*': 'https://about.limitlessinfotech.com',
    '/contact/*': 'https://contact.limitlessinfotech.com',
    '/contact/*': 'https://contact.limitlessinfotech.com',
    '/blog/*': 'https://blog.limitlessinfotech.com',
    '/portfolio/*': 'https://portfolio.limitlessinfotech.com',
    '/faq/*': 'https://faq.limitlessinfotech.com',
    '/pricing/*': 'https://pricing.limitlessinfotech.com',
    '/technology/*': 'https://technology.limitlessinfotech.com',
    '/careers/*': 'https://careers.limitlessinfotech.com',
    '/news/*': 'https://news.limitlessinfotech.com',
    '/technical/*': 'https://technical.limitlessinfotech.com',
    '/investors/*': 'https://investors.limitlessinfotech.com',
  },

  // Security configurations for each subdomain
  security: {
    product: {
      cors: {
        origins: [
          'https://limitlessinfotech.com',
          'https://www.limitlessinfotech.com',
          'https://product.limitlessinfotech.com',
        ],
      },
      rateLimiting: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      },
      hsts: true,
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'", 'https://api.limitlessinfotech.com'],
        },
      },
    },
    services: {
      cors: {
        origins: [
          'https://limitlessinfotech.com',
          'https://www.limitlessinfotech.com',
          'https://services.limitlessinfotech.com',
        ],
      },
      rateLimiting: {
        windowMs: 15 * 60 * 1000,
        max: 50,
      },
      hsts: true,
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: [
            "'self'",
            'https://api.limitlessinfotech.com',
            'https://crm.limitlessinfotech.com',
          ],
        },
      },
    },
    enterprises: {
      cors: {
        origins: [
          'https://limitlessinfotech.com',
          'https://www.limitlessinfotech.com',
          'https://enterprises.limitlessinfotech.com',
        ],
        credentials: true,
      },
      rateLimiting: {
        windowMs: 15 * 60 * 1000,
        max: 25,
      },
      hsts: true,
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'", "'unsafe-eval'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: [
            "'self'",
            'https://api.limitlessinfotech.com',
            'https://enterprise.limitlessinfotech.com',
          ],
          frameSrc: ["'none'"], // No iframes for security
        },
      },
      // Additional enterprise security
      authenticationRequired: true,
      ssoEnabled: true,
      auditLogging: true,
    },
    about: {
      cors: {
        origins: [
          'https://limitlessinfotech.com',
          'https://www.limitlessinfotech.com',
          'https://about.limitlessinfotech.com',
          'https://contact.limitlessinfotech.com',
          'https://blog.limitlessinfotech.com',
          'https://portfolio.limitlessinfotech.com',
          'https://faq.limitlessinfotech.com',
          'https://pricing.limitlessinfotech.com',
          'https://technology.limitlessinfotech.com',
          'https://careers.limitlessinfotech.com',
          'https://news.limitlessinfotech.com',
          'https://technical.limitlessinfotech.com',
          'https://investors.limitlessinfotech.com',
        ],
      },
      rateLimiting: {
        windowMs: 15 * 60 * 1000,
        max: 200,
      },
      hsts: true,
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'"],
        },
      },
    },
  },

  // Internationalization configurations
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ar', 'es'],
    subdomainLocales: {
      'about.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'product.limitlessinfotech.com': ['en', 'es'],
      'services.limitlessinfotech.com': ['en', 'hi'],
      'enterprises.limitlessinfotech.com': ['en', 'ar'],
      'about.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'contact.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'blog.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'portfolio.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'faq.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'pricing.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'technology.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'careers.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'news.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'technical.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
      'investors.limitlessinfotech.com': ['en', 'hi', 'ar', 'es'],
    },
  },

  // SEO configurations for each subdomain
  seo: {
    product: {
      sitemap: 'https://product.limitlessinfotech.com/sitemap.xml',
      robots: 'https://product.limitlessinfotech.com/robots.txt',
      canonicalDomain: 'product.limitlessinfotech.com',
    },
    services: {
      sitemap: 'https://services.limitlessinfotech.com/sitemap.xml',
      robots: 'https://services.limitlessinfotech.com/robots.txt',
      canonicalDomain: 'services.limitlessinfotech.com',
    },
    enterprises: {
      sitemap: 'https://enterprises.limitlessinfotech.com/sitemap.xml',
      robots: 'https://enterprises.limitlessinfotech.com/robots.txt',
      canonicalDomain: 'enterprises.limitlessinfotech.com',
    },
    about: {
      sitemap: 'https://about.limitlessinfotech.com/sitemap.xml',
      robots: 'https://about.limitlessinfotech.com/robots.txt',
      canonicalDomain: 'about.limitlessinfotech.com',
    },
  },

  // Analytics configurations
  analytics: {
    product: {
      trackingId: 'G-PRODUCT-ANALYTICS',
      events: ['product_view', 'demo_request', 'feature_interaction'],
    },
    services: {
      trackingId: 'G-SERVICES-ANALYTICS',
      events: ['service_inquiry', 'consultation_request', 'quote_request'],
    },
    enterprises: {
      trackingId: 'G-ENTERPRISE-ANALYTICS',
      events: [
        'enterprise_inquiry',
        'case_study_download',
        'white_paper_request',
      ],
    },
    about: {
      trackingId: 'G-ABOUT-ANALYTICS',
      events: ['about_view', 'career_view', 'team_view'],
    },
  },

  // Subdomain-specific branding
  branding: {
    product: {
      primaryColor: '#1e3a8a', // Deep blue
      secondaryColor: '#d4af37', // Royal gold
      theme: 'product-theme',
    },
    services: {
      primaryColor: '#059669', // Emerald
      secondaryColor: '#d4af37', // Royal gold
      theme: 'services-theme',
    },
    enterprises: {
      primaryColor: '#7c3aed', // Violet
      secondaryColor: '#d4af37', // Royal gold
      theme: 'enterprise-theme',
    },
    about: {
      primaryColor: '#dc2626', // Red
      secondaryColor: '#d4af37', // Royal gold
      theme: 'about-theme',
    },
  },
};

// Helper functions for subdomain management
const SubdomainHelper = {
  // Get subdomain from current URL
  getCurrentSubdomain: () => {
    // Check if running in browser environment
    if (typeof window === 'undefined' || typeof window.location === 'undefined') {
      return null;
    }
    
    const hostname = window.location.hostname;
    const parts = hostname.split('.');

    if (parts.length >= 3 && parts[parts.length - 2] === 'limitlessinfotech') {
      return parts[0] === 'www' ? parts[1] : parts[0];
    }

    return null;
  },

  // Get configuration for current subdomain
  getCurrentSubdomainConfig: () => {
    // Check if running in browser environment
    if (typeof window === 'undefined' || typeof window.location === 'undefined') {
      return null;
    }
    
    const subdomain = SubdomainHelper.getCurrentSubdomain();
    return subdomain ? SUBDOMAIN_CONFIG.subdomains[subdomain] : null;
  },

  // Check if current domain matches a specific subdomain
  isSubdomain: expectedSubdomain => {
    // Check if running in browser environment
    if (typeof window === 'undefined' || typeof window.location === 'undefined') {
      return false;
    }
    
    return SubdomainHelper.getCurrentSubdomain() === expectedSubdomain;
  },

  // Get full URL for a subdomain and path
  getSubdomainUrl: (subdomain, path = '') => {
    if (SUBDOMAIN_CONFIG.subdomains[subdomain]) {
      return `https://${subdomain}.${SUBDOMAIN_CONFIG.mainDomain}${path}`;
    }
    return null;
  },

  // Get all available subdomains
  getAvailableSubdomains: () => {
    return Object.keys(SUBDOMAIN_CONFIG.subdomains);
  },

  // Get subdomain by path
  getSubdomainByPath: path => {
    for (const [subdomain, config] of Object.entries(
      SUBDOMAIN_CONFIG.subdomains
    )) {
      if (config.routes.some(route => path.startsWith(route))) {
        return subdomain;
      }
    }
    return null;
  },
};

export { SUBDOMAIN_CONFIG, SubdomainHelper };
export default SUBDOMAIN_CONFIG;
