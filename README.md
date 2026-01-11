# Limitless Infotech Solution

**Where Innovation Meets Execution**

[![Version](https://img.shields.io/badge/version-2.1.9-blue.svg)](https://github.com/limitlessinfotech)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?logo=vite)](https://vitejs.dev/)

## 🚀 Overview

Limitless Infotech Solution is an enterprise-grade web platform showcasing cutting-edge software solutions, AI-powered services, and innovative digital products. Built with modern technologies and designed for scalability, security, and performance.

### Key Features

- 🎨 **Modern UI/UX**: Sleek, responsive design with Framer Motion animations
- 🔐 **Enterprise Authentication**: Role-based access control with protected routes
- 🧠 **AI-Powered Services**: Neural repository, natural language query, intelligent chatbot
- 📊 **Admin Dashboard**: Real-time telemetry and analytics via Admin Nexus
- 💾 **Data Persistence**: Unified persistence layer with local and cloud storage support
- 🌐 **Multi-Language Support**: i18next integration for internationalization
- 📱 **WhatsApp Integration**: Business communication and automated responses
- 🎯 **Lead Generation**: Automated lead capture and management
- 📈 **Analytics & KPIs**: Comprehensive tracking and reporting
- 🔄 **CI/CD Pipeline**: Automated testing, building, and deployment

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Authentication](#-authentication)
- [Enterprise Services](#-enterprise-services)
- [Development](#-development)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## ⚡ Quick Start

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/limitlessinfotech/redesigned.git
cd redesigned

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Default Admin Credentials

```
Email: admin@limitlessinfotech.com
Password: Enterprise2026!
```

---

## 🛠 Technology Stack

### Frontend
- **React 18.2** - UI library
- **Vite 7.3** - Build tool and dev server
- **React Router 7.11** - Client-side routing
- **Framer Motion 12.23** - Animation library
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Icon library

### State Management
- **React Context API** - Global state management
- **Custom Hooks** - Reusable stateful logic

### Backend Integration
- **Axios** - HTTP client (planned)
- **Supabase** - Backend as a Service (planned integration)

### Development Tools
- **TypeScript 5.9** - Type safety
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **Playwright** - E2E testing

### Additional Libraries
- **Chart.js** - Data visualization
- **jsPDF** - PDF generation
- **date-fns** - Date manipulation
- **React Helmet** - Document head management
- **i18next** - Internationalization

---

## 📁 Project Structure

```
limitless-infotech-solution/
├── .github/                    # GitHub Actions workflows
│   └── workflows/              # CI/CD configurations
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── auth/              # Authentication components
│   │   ├── forms/             # Form components
│   │   ├── layout/            # Layout components (Navbar, Footer)
│   │   ├── home/              # Landing page components
│   │   └── ui/                # UI primitives
│   ├── pages/                  # Route-based page components
│   │   ├── home/              # Home pages
│   │   ├── auth/              # Login, Access Denied
│   │   ├── admin/             # Admin Nexus dashboard
│   │   ├── about/             # About page
│   │   ├── services/          # Services pages
│   │   ├── products/          # Products pages
│   │   └── contact/           # Contact page
│   ├── services/               # Business logic services
│   │   ├── auth/              # Authentication service
│   │   ├── enterprise/        # Enterprise services
│   │   │   ├── EnterpriseProtocolService.js
│   │   │   ├── PersistenceService.js
│   │   │   └── NeuralRepositoryService.js
│   │   ├── api.js             # API client
│   │   └── notificationService.js
│   ├── context/                # React Context providers
│   │   ├── AppContext.jsx     # Application state
│   │   └── AuthContext.jsx    # Authentication state
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utility functions
│   ├── config/                 # Configuration files
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── tests/                      # Test files
├── docs/                       # Documentation
├── scripts/                    # Build and utility scripts
├── .env.example                # Environment variables template
├── .eslintrc                   # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── .gitignore                  # Git ignore rules
├── jest.config.js              # Jest configuration
├── playwright.config.js        # Playwright configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

---

## ✨ Features

### 🏠 Landing Page
- High-impact hero section
- Service showcases
- Metrics and capabilities
- Process overview
- Lead generation modal

### 🔐 Authentication System
- Email/password authentication
- Session management
- Role-based access control (RBAC)
- Permission-based routing
- Protected routes
- "Remember me" functionality
- Logout with session cleanup

### 📊 Admin Nexus Dashboard
- Real-time system telemetry
- Project lead management
- Neural chat logs
- Protocol and feature flag monitoring
- User session information
- System version tracking

### 🧠 AI-Powered Features
- **Neural Repository**: Centralized knowledge base
- **Natural Language Query**: AI-powered search
- **WhatsApp Business Integration**: Intelligent chatbot
- **Context-Aware Responses**: Pattern matching and intent recognition

### 💾 Data Persistence
- Unified persistence layer
- Local storage support
- Cloud storage ready (Supabase)
- Automatic data synchronization
- Metadata tracking

### 🌐 Multi-Page Application
- Home/Landing
- About
- Services
- Products
- Portfolio
- Blog
- Contact
- Pricing
- Careers
- Admin Nexus (protected)

---

## 🔐 Authentication

### Login Flow

1. Navigate to `/login` or try accessing a protected route
2. Enter credentials (see default admin credentials above)
3. Session is created and stored in localStorage
4. Redirect to requested page or Admin Nexus
5. Session persists for 24 hours (or 30 days with "Remember me")

### Protected Routes

- `/admin-nexus` - Requires `admin_nexus` permission
- Additional routes can be protected using `ProtectedRoute` component

### Usage Example

```jsx
import ProtectedRoute from './components/auth/ProtectedRoute';

<Route path="/admin-nexus" element={
  <ProtectedRoute requiredPermission="admin_nexus">
    <AdminNexus />
  </ProtectedRoute>
} />
```

### User Roles

- **Admin**: Full access to all features
- **User**: Limited access to specific features

---

## 🏢 Enterprise Services

### EnterpriseProtocolService
Centralized configuration and feature toggle management.

```javascript
import EnterpriseProtocol from './services/enterprise/EnterpriseProtocolService';

// Get protocol
const mode = EnterpriseProtocol.getProtocol('PERSISTENCE_MODE');

// Set protocol
EnterpriseProtocol.setProtocol('AUTH_STATUS', 'AUTHENTICATED');

// Check feature
const isEnabled = EnterpriseProtocol.isFeatureEnabled('LIVE_NEURAL_SEARCH');
```

### PersistenceService
Unified data storage abstraction.

```javascript
import PersistenceService from './services/enterprise/PersistenceService';

// Store data
await PersistenceService.store('project_leads', leadData);

// Fetch data
const leads = await PersistenceService.fetchAll('project_leads');
```

### NeuralRepositoryService
AI knowledge base and query processing.

```javascript
import NeuralRepository from './services/enterprise/NeuralRepositoryService';

// Query the knowledge base
const response = await NeuralRepository.query('What services do you offer?');
```

---

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # TypeScript type checking
npm run quality          # Run all quality checks
npm run quality:fix      # Fix all quality issues

# Testing
npm run test             # Run unit tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage

# Analysis
npm run analyze          # Analyze bundle size
npm run bundle-report    # Generate bundle report
```

### Development Workflow

1. Create a feature branch
2. Make your changes
3. Run quality checks: `npm run quality`
4. Commit with descriptive message
5. Push and create pull request

### Code Style

- Use functional components with hooks
- Follow ESLint and Prettier configurations
- Use TypeScript for type safety where applicable
- Write meaningful component and variable names
- Add JSDoc comments for complex functions
- Keep components small and focused

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Environment-Specific Builds

```bash
# Development
NODE_ENV=development npm run build

# Staging
NODE_ENV=staging npm run build

# Production
NODE_ENV=production npm run build
```

### Deployment Platforms

The application can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **AWS S3 + CloudFront**
- **GitHub Pages**
- **Custom server with Nginx**

### CI/CD

GitHub Actions workflows are configured for:
- Automated testing on PR
- Build verification
- Deployment to staging/production
- Security scanning
- Dependency audits

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```bash
# Application
VITE_APP_NAME=Limitless Infotech Solution
VITE_APP_VERSION=2.1.9
VITE_API_URL=http://localhost:5000/api

# Authentication (Future)
VITE_JWT_SECRET=your-secret-key

# Supabase (Future Integration)
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Email (SMTP)
VITE_SMTP_HOST=smtp.gmail.com
VITE_SMTP_PORT=587
VITE_SMTP_USER=your-email@gmail.com
VITE_SMTP_PASS=your-app-password

# Analytics
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=true
```

---

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npx playwright test
```

### Coverage Report

```bash
npm run test:coverage
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

```
feat: Add new feature
fix: Bug fix
docs: Documentation update
style: Code style changes
refactor: Code refactoring
test: Add or update tests
chore: Maintenance tasks
```

---

## 📄 License

This project is licensed under the ISC License.

---

## 👥 Team

**Limitless Infotech Solution Pvt. Ltd.**

- **Founder & CEO**: Faisal Khan
- **Website**: [limitlessinfotech.com](https://limitlessinfotech.com)
- **Email**: info@limitlessinfotech.com

---

## 📞 Support

For support, email info@limitlessinfotech.com or visit our [Contact Page](https://limitlessinfotech.com/contact).

---

## 🙏 Acknowledgments

- React Team
- Vite Team
- Tailwind CSS Team
- Framer Motion Team
- All open-source contributors

---

**Made with ❤️ by Limitless Infotech Solution**
