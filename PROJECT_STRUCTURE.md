# Limitless Infotech Solution - Project Structure

## Overview

This document provides a comprehensive overview of the project's directory structure, explaining the purpose and organization of each major component.

## Root Directory Structure

```
limitless-infotech-solution/
├── .github/                    # GitHub-specific configurations
├── .vscode/                    # VSCode workspace settings
├── docs/                       # Project documentation
├── public/                     # Static public assets
├── scripts/                    # Build and utility scripts
├── src/                        # Source code (main application)
├── tests/                      # Test files and configurations
├── .env.example                # Environment variables template
├── .eslintrc                   # ESLint configuration
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier code formatting config
├── index.html                  # HTML entry point
├── jest.config.js              # Jest testing configuration
├── package.json                # NPM dependencies and scripts
├── playwright.config.js        # Playwright E2E test config
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project documentation
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
└── server.js                   # Development server (optional)
```

---

## Source Code Structure (`src/`)

### Component Organization

```
src/
├── components/                 # Reusable UI components
│   ├── auth/                  # Authentication-related components
│   │   ├── ProtectedRoute.jsx # Route protection wrapper
│   │   └── ...
│   ├── forms/                 # Form components
│   │   ├── ContactForm.jsx
│   │   ├── QuickQuoteForm.jsx
│   │   ├── JobApplicationForm.jsx
│   │   └── ...
│   ├── home/                  # Landing page components
│   │   ├── LandingHero.jsx
│   │   ├── LandingMetrics.jsx
│   │   ├── LandingCapabilities.jsx
│   │   ├── LandingModal.jsx
│   │   └── ...
│   ├── layout/                # Layout components
│   │   ├── header/
│   │   │   └── Navbar.jsx     # Main navigation
│   │   ├── footer/
│   │   │   └── Footer.jsx     # Site footer
│   │   ├── MainLayout.jsx     # Main app layout wrapper
│   │   └── LandingNavbar.jsx  # Landing page navbar
│   ├── ui/                    # UI primitives and components
│   │   ├── components/        # Shared UI components
│   │   │   ├── Accordion.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── AnalyticsTracker.jsx   # Analytics tracking component
│   ├── ErrorBoundary.jsx      # Error boundary wrapper
│   ├── FloatingButtons.jsx    # Floating action buttons
│   ├── NaturalLanguageQuery.jsx # NLQ interface
│   ├── PrivacyConsent.jsx     # Privacy consent banner
│   ├── ScrollToTop.jsx        # Scroll restoration
│   ├── SubdomainRouter.jsx    # Subdomain routing logic
│   ├── Toast.jsx              # Toast notifications
│   └── WhatsAppBusinessIntegration.jsx # WhatsApp chat
```

### Pages Structure

```
src/pages/                      # Route-based page components
├── home/
│   ├── LandingHome.jsx        # Landing page (/)
│   └── Home.jsx               # Internal home (/home)
├── auth/
│   ├── Login.jsx              # Login page
│   └── AccessDenied.jsx       # Access denied page
├── admin/
│   └── AdminNexus.jsx         # Admin dashboard (protected)
├── about/
│   └── About.jsx              # About page
├── services/
│   └── Services.jsx           # Services page
├── products/
│   └── Products.jsx           # Products page
├── contact/
│   └── Contact.jsx            # Contact page
├── Portfolio.jsx              # Portfolio page
├── PortfolioDetail.jsx        # Portfolio detail page
├── Blog.jsx                   # Blog listing
├── BlogDetail.jsx             # Blog post detail
├── Pricing.jsx                # Pricing page
├── Careers.jsx                # Careers page
├── JobApplication.jsx         # Job application page
├── Testimonials.jsx           # Testimonials page
├── Events.jsx                 # Events listing
├── EventDetail.jsx            # Event detail page
├── Compliance.jsx             # Compliance page
├── InnovationLab.jsx          # Innovation lab page
├── ROICalculator.jsx          # ROI calculator
├── ClientPortal.jsx           # Client portal
├── NotFound.jsx               # 404 page
└── ...                        # Additional pages
```

### Services Layer

```
src/services/                   # Business logic and API services
├── auth/
│   └── AuthService.js         # Authentication logic
├── enterprise/                # Enterprise-grade services
│   ├── EnterpriseProtocolService.js  # Config & feature toggles
│   ├── PersistenceService.js         # Data persistence layer
│   └── NeuralRepositoryService.js    # AI knowledge base
├── api.js                     # API client and endpoints
├── notificationService.js     # Notification handling
├── monitoringService.js       # Performance monitoring
├── healthCheckService.js      # Health checks
├── reportingService.js        # Reporting service
├── emailNotificationService.js # Email notifications
├── dataSyncService.js         # Data synchronization
├── backupService.js           # Backup procedures
├── cleanupService.js          # Cleanup tasks
├── scalingConfig.js           # Auto-scaling configuration
└── dockerSandboxService.js    # Docker sandbox management
```

### Context and State Management

```
src/context/                    # React Context providers
├── AppContext.jsx             # Global application state
└── AuthContext.jsx            # Authentication state
```

### Configuration and Utilities

```
src/
├── config/                    # Configuration files
│   └── subdomainConfig.js     # Subdomain routing config
├── hooks/                     # Custom React hooks
│   └── ...
├── utils/                     # Utility functions
│   └── ...
├── App.jsx                    # Root application component
├── main.jsx                   # Application entry point
└── index.css                  # Global CSS styles
```

---

## GitHub Actions (`.github/workflows/`)

```
.github/workflows/
├── ci-cd-pipeline.yml         # Main CI/CD pipeline
├── testing.yml                # Automated testing
├── code-quality.yml           # Code quality checks
├── security-scanning.yml      # Security audits
└── dependency-audit.yml       # Dependency management
```

---

## Documentation (`docs/`)

```
docs/
├── api/                       # API documentation
├── architecture/              # Architecture diagrams
├── deployment/                # Deployment guides
├── development/               # Development guides
└── user-guides/               # User documentation
```

---

## Public Assets (`public/`)

```
public/
├── images/                    # Image assets
├── fonts/                     # Custom fonts
├── icons/                     # Icon files
├── favicon.ico                # Favicon
└── robots.txt                 # SEO robots file
```

---

## Testing Structure (`tests/`)

```
tests/
├── unit/                      # Unit tests
│   ├── components/
│   ├── services/
│   └── utils/
├── integration/               # Integration tests
│   └── ...
└── e2e/                       # End-to-end tests
    └── ...
```

---

## Naming Conventions

### Files
- **Components**: PascalCase (e.g., `Navbar.jsx`, `AdminNexus.jsx`)
- **Services**: camelCase (e.g., `authService.js`, `api.js`)
- **Utilities**: camelCase (e.g., `formatDate.js`, `validators.js`)
- **Pages**: PascalCase (e.g., `Login.jsx`, `About.jsx`)
- **Config**: camelCase (e.g., `tailwind.config.js`)

### Directories
- **Lowercase with hyphens** for multi-word directories (e.g., `user-guides/`)
- **camelCase** for code directories (e.g., `components/`, `services/`)

### Components
- **Functional components** with hooks
- **Named exports** for utilities and services
- **Default exports** for pages and main components

---

## Key Architectural Patterns

### 1. Service Layer Pattern
Business logic is separated into service modules in `src/services/`, keeping components focused on UI.

### 2. Context API for State
Global state is managed using React Context API (`AppContext`, `AuthContext`).

### 3. Protected Routes
Authentication and authorization are handled via the `ProtectedRoute` wrapper component.

### 4. Enterprise Services
Core platform functionality is abstracted into enterprise services:
- `EnterpriseProtocolService`: Feature flags and configuration
- `PersistenceService`: Data storage abstraction
- `NeuralRepositoryService`: AI knowledge base

### 5. Lazy Loading
Pages are lazy-loaded using React's `lazy()` and `Suspense` for code splitting.

### 6. Layout Composition
Layouts are composed using wrapper components (`MainLayout`) for consistent structure.

---

## Module Dependencies

### Core Dependencies
- React + React DOM
- React Router
- Framer Motion (animations)
- Tailwind CSS (styling)
- Lucide React (icons)

### Development Dependencies
- Vite (build tool)
- TypeScript
- ESLint + Prettier
- Jest (unit testing)
- Playwright (E2E testing)

---

## Build Output

```
dist/                          # Production build output
├── assets/                    # Bundled assets
│   ├── index-[hash].js       # Main JavaScript bundle
│   ├── index-[hash].css      # Main CSS bundle
│   └── ...                   # Other chunked assets
├── index.html                 # Entry HTML file
└── ...
```

---

## Environment-Specific Files

- `.env.development` - Development environment
- `.env.staging` - Staging environment
- `.env.production` - Production environment
- `.env.local` - Local overrides (gitignored)

---

## Best Practices

1. **Component Placement**: Place components in the most specific directory possible
2. **Service Layer**: Keep business logic in services, not components
3. **Reusability**: Create reusable components in `src/components/ui/`
4. **Type Safety**: Use TypeScript for complex components and utilities
5. **Testing**: Co-locate test files with the code they test
6. **Documentation**: Document complex logic and public APIs

---

**Last Updated**: 2026-01-11  
**Version**: 2.1.9
