import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import { SubdomainRouter } from './components/SubdomainRouter';
import Navbar from './components/layout/header/Navbar';
import Footer from './components/layout/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingButtons from './components/FloatingButtons';
import WhatsAppBusinessIntegration from './components/WhatsAppBusinessIntegration';
import AnalyticsTracker from './components/AnalyticsTracker';
import PrivacyConsent from './components/PrivacyConsent';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/home/Home'));
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
        <AppProvider>
          <ScrollToTop />
          <AnalyticsTracker />
          <SubdomainRouter>
            <Navbar />
            <PrivacyConsent />
            <main id="content" className="min-h-screen pt-20 md:pt-24 font-sans bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
              <ErrorBoundary>
                <Routes>
                  {/* Main domain routes */}
                  <Route path="/" element={
                    <Suspense fallback={<PageLoader />}> <Home /> </Suspense>
                  } />
                  <Route path="/about" element={
                    <Suspense fallback={<PageLoader />}> <About /> </Suspense>
                  } />
                  <Route path="/services" element={
                    <Suspense fallback={<PageLoader />}> <Services /> </Suspense>
                  } />
                  <Route path="/products" element={
                    <Suspense fallback={<PageLoader />}> <Products /> </Suspense>
                  } />
                  <Route path="/contact" element={
                    <Suspense fallback={<PageLoader />}> <Contact /> </Suspense>
                  } />
                  <Route path="/pricing" element={
                    <Suspense fallback={<PageLoader />}> <Pricing /> </Suspense>
                  } />
                  <Route path="/portfolio" element={
                    <Suspense fallback={<PageLoader />}> <Portfolio /> </Suspense>
                  } />
                  <Route path="/portfolio/:id" element={
                    <Suspense fallback={<PageLoader />}> <PortfolioDetail /> </Suspense>
                  } />
                  <Route path="/blog" element={
                    <Suspense fallback={<PageLoader />}> <Blog /> </Suspense>
                  } />
                  <Route path="/blog/:slug" element={
                    <Suspense fallback={<PageLoader />}> <BlogDetail /> </Suspense>
                  } />
                  <Route path="/events" element={
                    <Suspense fallback={<PageLoader />}> <Events /> </Suspense>
                  } />
                  <Route path="/events/:id" element={
                    <Suspense fallback={<PageLoader />}> <EventDetail /> </Suspense>
                  } />
                  <Route path="/testimonials" element={
                    <Suspense fallback={<PageLoader />}> <Testimonials /> </Suspense>
                  } />
                  <Route path="/careers" element={
                    <Suspense fallback={<PageLoader />}> <Careers /> </Suspense>
                  } />
                  <Route path="/careers/apply/:jobId" element={
                    <Suspense fallback={<PageLoader />}> <JobApplication /> </Suspense>
                  } />
                  <Route path="/terms-of-service" element={
                    <Suspense fallback={<PageLoader />}> <TermsOfService /> </Suspense>
                  } />
                  <Route path="/privacy-policy" element={
                    <Suspense fallback={<PageLoader />}> <PrivacyPolicy /> </Suspense>
                  } />
                  <Route path="/cookie-policy" element={
                    <Suspense fallback={<PageLoader />}> <CookiePolicy /> </Suspense>
                  } />
                  <Route path="/compliance" element={
                    <Suspense fallback={<PageLoader />}> <Compliance /> </Suspense>
                  } />
                  <Route path="/innovation-lab" element={
                    <Suspense fallback={<PageLoader />}> <InnovationLab /> </Suspense>
                  } />
                  <Route path="/roi-calculator" element={
                    <Suspense fallback={<PageLoader />}> <ROICalculator /> </Suspense>
                  } />
                  <Route path="/client-portal" element={
                    <Suspense fallback={<PageLoader />}> <ClientPortal /> </Suspense>
                  } />
                  <Route path="/client-form" element={
                    <Suspense fallback={<PageLoader />}> <ClientForm /> </Suspense>
                  } />
                  <Route path="/lead-generation" element={
                    <Suspense fallback={<PageLoader />}> <LeadGenerationFormsPage /> </Suspense>
                  } />
                  <Route path="/auralis-personalization" element={
                    <Suspense fallback={<PageLoader />}> <AuralisPersonalizationDemoPage /> </Suspense>
                  } />
                  <Route path="/natural-language-query" element={
                    <Suspense fallback={<PageLoader />}> <NaturalLanguageQueryPage /> </Suspense>
                  } />
                  <Route path="/progressive-profiling" element={
                    <Suspense fallback={<PageLoader />}> <ProgressiveProfilingPage /> </Suspense>
                  } />
                  <Route path="/predictive-analytics" element={
                    <Suspense fallback={<PageLoader />}> <PredictiveAnalyticsPage /> </Suspense>
                  } />
                  <Route path="/analytics-dashboard" element={
                    <Suspense fallback={<PageLoader />}> <AnalyticsDashboardPage /> </Suspense>
                  } />
                  <Route path="/advanced-analytics" element={
                    <Suspense fallback={<PageLoader />}> <AdvancedAnalyticsDashboard /> </Suspense>
                  } />
                  <Route path="/digital-health-auditor" element={
                    <Suspense fallback={<PageLoader />}> <DigitalHealthAuditorPage /> </Suspense>
                  } />
                  <Route path="/whatsapp-integration" element={
                    <Suspense fallback={<PageLoader />}> <WhatsAppIntegrationPage /> </Suspense>
                  } />
                  <Route path="/ai-features" element={
                    <Suspense fallback={<PageLoader />}> <AIFeatures /> </Suspense>
                  } />
                  <Route path="/auralis-ai" element={
                    <Suspense fallback={<PageLoader />}> <AuralisAIPage /> </Suspense>
                  } />
                  <Route path="/api-documentation" element={
                    <Suspense fallback={<PageLoader />}> <ApiDocumentation /> </Suspense>
                  } />
                  <Route path="/auditor-to-sandbox" element={
                    <Suspense fallback={<PageLoader />}> <AuditorToSandboxFlow /> </Suspense>
                  } />
                  
                  {/* Additional specific routes */}
                  <Route path="/knowledge-base" element={
                    <Suspense fallback={<PageLoader />}> <KnowledgeBase /> </Suspense>
                  } />
                  <Route path="/get-started" element={
                    <Suspense fallback={<PageLoader />}> <Contact /> </Suspense>
                  } />
                  <Route path="/blog/limitless-innovation" element={
                    <Suspense fallback={<PageLoader />}> <BlogDetail /> </Suspense>
                  } />
                  <Route path="/events/webinar-series" element={
                    <Suspense fallback={<PageLoader />}> <EventDetail /> </Suspense>
                  } />
                  <Route path="/careers/open-positions" element={
                    <Suspense fallback={<PageLoader />}> <Careers /> </Suspense>
                  } />
                  <Route path="/docs" element={
                    <Suspense fallback={<PageLoader />}> <ApiDocumentation /> </Suspense>
                  } />
                  <Route path="/responsive-toolkit" element={
                    <Suspense fallback={<PageLoader />}> <ResponsiveToolkitDemo /> </Suspense>
                  } />
                  
                  {/* Catch-all for unknown routes */}
                  <Route path="*" element={
                    <Suspense fallback={<PageLoader />}> <NotFound /> </Suspense>
                  } />
                </Routes>
              </ErrorBoundary>
            </main>
            <FloatingButtons />
            <WhatsAppBusinessIntegration />
            <Footer />
          </SubdomainRouter>
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;