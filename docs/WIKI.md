# Limitless Infotech Solution - Wiki

Welcome to the Limitless Infotech Solution platform wiki. This comprehensive guide covers everything you need to know about developing, deploying, and maintaining the platform.

## 📚 Table of Contents

- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Development Guide](#development-guide)
- [API Documentation](#api-documentation)
- [Component Library](#component-library)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)
- [FAQ](#faq)

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- Git
- Code editor (VS Code recommended)

### Quick Start
```bash
# Clone repository
git clone https://github.com/limitlessinfotech/redesigned.git
cd redesigned

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Start development server
npm run dev
```

### First Steps
1. Review the [README.md](../README.md)
2. Check [PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md)
3. Set up your development environment
4. Run the application locally
5. Explore the codebase

---

## 🏗 Architecture

### System Overview
The platform follows a modern React architecture with:
- **Frontend**: React 18 + Vite
- **Routing**: React Router v7
- **State Management**: Context API
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

### Key Components

#### Enterprise Services
- **EnterpriseProtocolService**: Feature flags and configuration
- **PersistenceService**: Data storage abstraction
- **NeuralRepositoryService**: AI knowledge base
- **AuthService**: Authentication and authorization

#### Service Layer
```
src/services/
├── auth/           # Authentication
├── email/          # SMTP email service
├── api/            # API endpoints
├── analytics/      # KPI tracking
└── enterprise/     # Enterprise services
```

### Data Flow
1. User interaction → Component
2. Component → Service Layer
3. Service → API/Storage
4. Response → Component → UI Update

---

## 💻 Development Guide

### Code Style
- Use functional components with hooks
- Follow ESLint and Prettier configurations
- Use TypeScript for complex components
- Write meaningful variable names
- Add JSDoc comments for public APIs

### Component Structure
```jsx
// 1. Imports
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 2. Component
const MyComponent = ({ prop1, prop2 }) => {
    // 3. State and hooks
    const [state, setState] = useState();
    
    // 4. Event handlers
    const handleClick = () => {};
    
    // 5. Render
    return <div>...</div>;
};

// 6. Export
export default MyComponent;
```

### State Management
- Use `useState` for local state
- Use `useContext` for global state
- Use `useReducer` for complex state logic
- Keep state as close to where it's used as possible

### API Integration
```javascript
import APIEndpoints from '../services/api/endpoints';

// GET request
const data = await APIEndpoints.get(APIEndpoints.leads.getAll());

// POST request
const result = await APIEndpoints.post(
    APIEndpoints.leads.create(),
    leadData
);
```

---

## 📡 API Documentation

### Authentication Endpoints
```
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/register
POST /api/auth/refresh
POST /api/auth/reset-password
```

### Lead Management
```
GET    /api/leads
POST   /api/leads
GET    /api/leads/:id
PUT    /api/leads/:id
DELETE /api/leads/:id
```

### Analytics
```
GET /api/analytics/pageviews
GET /api/analytics/conversions
GET /api/analytics/kpis
GET /api/analytics/dashboard
```

See [API Endpoints](../src/services/api/endpoints.js) for complete list.

---

## 🎨 Component Library

### UI Components

#### Card
```jsx
import Card from '../components/ui/Card';

<Card
    title="Service Title"
    description="Description"
    image="/path/to/image.jpg"
    link="/services/detail"
    variant="service"
/>
```

#### PricingSlider
```jsx
import PricingSlider from '../components/ui/PricingSlider';

<PricingSlider
    plans={pricingPlans}
    onSelectPlan={(plan) => console.log(plan)}
/>
```

#### UserProfile
```jsx
import UserProfile from '../components/profiles/UserProfile';

<UserProfile
    user={userData}
    onUpdate={(data) => updateUser(data)}
    editable={true}
/>
```

### Form Components
- ContactForm
- JobApplicationForm
- QuickQuoteForm
- DedicatedTeamForm
- And more...

See [FORMS_AUDIT.md](./FORMS_AUDIT.md) for complete inventory.

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
```bash
# Required
VITE_API_URL=https://api.limitlessinfotech.com
VITE_APP_VERSION=2.1.9

# Optional
VITE_SMTP_HOST=smtp.gmail.com
VITE_SMTP_PORT=587
VITE_ENABLE_ANALYTICS=true
```

### Deployment Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

#### Custom Server
```bash
# Build
npm run build

# Serve with nginx
# Point nginx to dist/ directory
```

---

## 🔧 Troubleshooting

### Common Issues

#### Build Errors
**Issue**: Module not found
**Solution**: Run `npm install` and clear cache
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Authentication Not Working
**Issue**: Session not persisting
**Solution**: Check localStorage and AuthContext
```javascript
// Clear auth data
localStorage.removeItem('limitless_auth_session');
```

#### SMTP Emails Not Sending
**Issue**: Email service disabled
**Solution**: Set environment variable
```bash
VITE_EMAIL_ENABLED=true
```

### Debug Mode
```bash
# Enable verbose logging
VITE_DEBUG=true npm run dev
```

---

## ✅ Best Practices

### Performance
- Lazy load routes and components
- Optimize images (WebP format)
- Use code splitting
- Minimize bundle size
- Cache API responses

### Security
- Never commit `.env` files
- Use HTTPS in production
- Implement CSRF protection
- Sanitize user inputs
- Use secure authentication

### Accessibility
- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Maintain color contrast
- Test with screen readers

### Testing
```bash
# Unit tests
npm run test

# E2E tests
npx playwright test

# Coverage
npm run test:coverage
```

---

## ❓ FAQ

### How do I add a new page?
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `Navbar.jsx`

### How do I protect a route?
```jsx
import ProtectedRoute from './components/auth/ProtectedRoute';

<Route path="/admin" element={
    <ProtectedRoute requiredPermission="admin">
        <AdminPage />
    </ProtectedRoute>
} />
```

### How do I track analytics?
```javascript
import KPIService from './services/analytics/KPIService';

// Track page view
KPIService.trackPageView('/services');

// Track conversion
KPIService.trackConversion('lead_generated');
```

### How do I send emails?
```javascript
import SMTPService from './services/email/SMTPService';

await SMTPService.sendContactFormEmail(formData);
```

### How do I add a new service?
1. Create service file in `src/services/`
2. Export singleton instance
3. Import and use in components

---

## 📞 Support

- **Email**: info@limitlessinfotech.com
- **Documentation**: [README.md](../README.md)
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

---

**Last Updated**: 2026-01-11  
**Version**: 2.1.9  
**Maintained by**: Limitless Infotech Solution Team
