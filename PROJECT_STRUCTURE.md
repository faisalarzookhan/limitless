# Limitless Infotech Solution - Project Structure

## Overview

This document provides a comprehensive overview of the project's directory structure, explaining the purpose and organization of each major component.

## Root Directory Structure

```
limitless-infotech-solution/
├── .github/                    # GitHub CI/CD workflows
├── .vscode/                    # VSCode workspace settings
├── docker/                     # Docker configurations
├── docs/                       # Project documentation
├── etc/                        # Environment configurations
├── public/                     # Static public assets
├── scripts/                    # Build and utility scripts
├── src/                        # Source code (main application)
├── supabase/                   # Supabase configuration
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
└── vite.config.ts              # Vite build configuration
```

---

## Source Code Structure (`src/`)

### Component Organization

```
src/
├── components/                 # Reusable UI components
│   ├── auth/                  # Authentication-related components
│   ├── forms/                 # Form components
│   ├── home/                  # Landing page components
│   ├── layout/                # Layout components (Header, Footer, MainLayout)
│   ├── ui/                    # UI primitives and components
│   └── ...
├── pages/                      # Route-based page components
│   ├── home/                  # Home nodes
│   ├── auth/                  # Auth nodes
│   ├── admin/                 # Admin Nexus
│   ├── services/              # Services ecosystem
│   └── ...
├── services/                   # Business logic and API services
├── context/                    # React Context providers (State Management)
├── hooks/                     # Custom hooks
├── utils/                     # Utility functions
├── config/                    # Configuration nodes
├── assets/                    # Internal code assets
├── App.jsx                    # Root application component
└── main.jsx                   # Application entry point
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

**Last Updated**: 2026-01-25  
**Version**: 2.1.9
