import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import SubdomainRouter from './components/SubdomainRouter';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import AnalyticsTracker from './components/AnalyticsTracker';
import ErrorBoundary from './components/ErrorBoundary';
import MainLayout from './components/layout/MainLayout';
import LandingHome from './pages/home/LandingHome';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/home/Home'));
const AdminNexus = lazy(() => import('./pages/admin/AdminNexus'));
const Login = lazy(() => import('./pages/auth/Login'));
const AccessDenied = lazy(() => import('./pages/auth/AccessDenied'));
const About = lazy(() => import('./pages/about/About'));
const Services = lazy(() => import('./pages/services/Services'));
const Products = lazy(() => import('./pages/products/Products'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioDetail = lazy(() => import('./pages/PortfolioDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Events = lazy(() => import('./pages/Events'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Careers = lazy(() => import('./pages/Careers'));
const JobApplication = lazy(() => import('./pages/JobApplication'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Compliance = lazy(() => import('./pages/Compliance'));
const NotFound = lazy(() => import('./pages/NotFound'));
const InnovationLab = lazy(() => import('./pages/InnovationLab'));
const ROICalculator = lazy(() => import('./pages/ROICalculator'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));
const ClientForm = lazy(() => import('./pages/ClientForm'));
const LeadGenerationFormsPage = lazy(() => import('./pages/LeadGenerationFormsPage'));
const AuralisPersonalizationDemoPage = lazy(() => import('./pages/AuralisPersonalizationDemoPage'));
const NaturalLanguageQueryPage = lazy(() => import('./pages/NaturalLanguageQueryPage'));
const ProgressiveProfilingPage = lazy(() => import('./pages/ProgressiveProfilingPage'));
const PredictiveAnalyticsPage = lazy(() => import('./pages/PredictiveAnalyticsPage'));
const AnalyticsDashboardPage = lazy(() => import('./pages/AnalyticsDashboardPage'));
const AdvancedAnalyticsDashboard = lazy(() => import('./pages/AdvancedAnalyticsDashboard'));
const DigitalHealthAuditorPage = lazy(() => import('./pages/DigitalHealthAuditorPage'));
const WhatsAppIntegrationPage = lazy(() => import('./pages/WhatsAppIntegrationPage'));
const AIFeatures = lazy(() => import('./pages/AIFeatures'));
const AuralisAIPage = lazy(() => import('./pages/AuralisAIPage'));
const ApiDocumentation = lazy(() => import('./pages/ApiDocumentation'));
const KnowledgeBase = lazy(() => import('./pages/KnowledgeBase'));
const ResponsiveToolkitDemo = lazy(() => import('./pages/ResponsiveToolkitDemo'));

// Subdomain-specific pages
const AuditorToSandboxFlow = lazy(() => import('./pages/AuditorToSandboxFlow'));

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white dark:bg-dark-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p className="text-gray-900 dark:text-white text-lg">Loading page...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppProvider>
          <ScrollToTop />
          <AnalyticsTracker />
          <SubdomainRouter>
            <Routes>
              {/* Landing Page Route */}
              <Route path="/" element={<LandingHome />} />

              {/* All other routes wrapped in MainLayout */}
              <Route path="/*" element={
                <MainLayout>
                  <ErrorBoundary>
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/admin-nexus" element={
                          <ProtectedRoute requiredPermission="admin_nexus">
                            <AdminNexus />
                          </ProtectedRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/access-denied" element={<AccessDenied />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />  
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogDetail />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/events/:id" element={<EventDetail />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/careers/apply/:jobId" element={<JobApplication />} />
                        <Route path="/terms-of-service" element={<TermsOfService />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/cookie-policy" element={<CookiePolicy />} />
                        <Route path="/compliance" element={<Compliance />} />
                        <Route path="/innovation-lab" element={<InnovationLab />} />
                        <Route path="/roi-calculator" element={<ROICalculator />} />
                        <Route path="/client-portal" element={<ClientPortal />} />
                        <Route path="/client-form" element={<ClientForm />} />
                        <Route path="/lead-generation" element={<LeadGenerationFormsPage />} />
                        <Route path="/auralis-personalization" element={<AuralisPersonalizationDemoPage />} />
                        <Route path="/natural-language-query" element={<NaturalLanguageQueryPage />} />
                        <Route path="/progressive-profiling" element={<ProgressiveProfilingPage />} />
                        <Route path="/predictive-analytics" element={<PredictiveAnalyticsPage />} />
                        <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
                        <Route path="/advanced-analytics" element={<AdvancedAnalyticsDashboard />} />
                        <Route path="/digital-health-auditor" element={<DigitalHealthAuditorPage />} />
                        <Route path="/whatsapp-integration" element={<WhatsAppIntegrationPage />} />
                        <Route path="/ai-features" element={<AIFeatures />} />
                        <Route path="/auralis-ai" element={<AuralisAIPage />} />
                        <Route path="/api-documentation" element={<ApiDocumentation />} />
                        <Route path="/auditor-to-sandbox" element={<AuditorToSandboxFlow />} />
                        
                        {/* Additional specific routes */}
                        <Route path="/knowledge-base" element={<KnowledgeBase />} />
                        <Route path="/get-started" element={<Contact />} />
                        <Route path="/blog/limitless-innovation" element={<BlogDetail />} />
                        <Route path="/events/webinar-series" element={<EventDetail />} />
                        <Route path="/careers/open-positions" element={<Careers />} />
                        <Route path="/docs" element={<ApiDocumentation />} />
                        <Route path="/responsive-toolkit" element={<ResponsiveToolkitDemo />} />
                        
                        {/* Catch-all for unknown routes */}
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              } />
            </Routes>
          </SubdomainRouter>
          </AppProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;