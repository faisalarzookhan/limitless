import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { SubdomainRouter } from './components/SubdomainRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingButtons from './components/FloatingButtons';
import WhatsAppBusinessIntegration from './components/WhatsAppBusinessIntegration';
import AnalyticsTracker from './components/AnalyticsTracker';

// Import all page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import JobApplication from './pages/JobApplication';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Compliance from './pages/Compliance';
import NotFound from './pages/NotFound';
import InnovationLab from './pages/InnovationLab';
import ROICalculator from './pages/ROICalculator';
import ClientPortal from './pages/ClientPortal';
import ClientForm from './pages/ClientForm';
import LeadGenerationFormsPage from './pages/LeadGenerationFormsPage';
import AuralisPersonalizationDemoPage from './pages/AuralisPersonalizationDemoPage';
import NaturalLanguageQueryPage from './pages/NaturalLanguageQueryPage';
import ProgressiveProfilingPage from './pages/ProgressiveProfilingPage';
import PredictiveAnalyticsPage from './pages/PredictiveAnalyticsPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import DigitalHealthAuditorPage from './pages/DigitalHealthAuditorPage';
import WhatsAppIntegrationPage from './pages/WhatsAppIntegrationPage';
import AIFeatures from './pages/AIFeatures';
import AuralisAIPage from './pages/AuralisAIPage';
import ApiDocumentation from './pages/ApiDocumentation';

// Subdomain-specific pages
import AuditorToSandboxFlow from './pages/AuditorToSandboxFlow';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <AnalyticsTracker />
        <SubdomainRouter>
          <Navbar />
          <main id="content">
            <Routes>
              {/* Main domain routes */}
              <Route path="/" element={<Home />} />
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
              <Route path="/digital-health-auditor" element={<DigitalHealthAuditorPage />} />
              <Route path="/whatsapp-integration" element={<WhatsAppIntegrationPage />} />
              <Route path="/ai-features" element={<AIFeatures />} />
              <Route path="/auralis-ai" element={<AuralisAIPage />} />
              <Route path="/api-documentation" element={<ApiDocumentation />} />
              <Route path="/auditor-to-sandbox" element={<AuditorToSandboxFlow />} />
              
              {/* Catch-all for unknown routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <FloatingButtons />
          <WhatsAppBusinessIntegration />
          <Footer />
        </SubdomainRouter>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;