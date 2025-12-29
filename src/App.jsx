import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { RTLProvider } from './components/RTLProvider';
import './styles/rtl.css';
import { AppProvider } from "./context/AppContext";
import { NotificationProvider } from "./context/NotificationContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Toast from "./components/Toast";
import FloatingButtons from "./components/FloatingButtons";
// import ThemeWelcome from "./components/ThemeWelcome"; // Disabled as per user request
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientForm from "./pages/ClientForm";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import Compliance from "./pages/Compliance";
import InnovationLab from "./pages/InnovationLab";
import ApiDocumentation from "./pages/ApiDocumentation";
import ROICalculator from "./pages/ROICalculator";
import ClientPortal from "./pages/ClientPortal";
import KnowledgeBase from "./pages/KnowledgeBase";
import AIFeatures from "./pages/AIFeatures";
import NaturalLanguageQueryPage from "./pages/NaturalLanguageQueryPage";
import ProgressiveProfilingPage from "./pages/ProgressiveProfilingPage";
import WhatsAppIntegrationPage from "./pages/WhatsAppIntegrationPage";
import JobApplication from "./pages/JobApplication";
import AuralisAIPage from './pages/AuralisAIPage';
import DigitalHealthAuditorPage from './pages/DigitalHealthAuditorPage';
import PredictiveAnalyticsPage from './pages/PredictiveAnalyticsPage';
import LeadGenerationFormsPage from './pages/LeadGenerationFormsPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import AuralisPersonalizationDemoPage from './pages/AuralisPersonalizationDemoPage';
import { BackToTop } from "./components/ui";
import AnalyticsTracker from "./components/AnalyticsTracker";

function AppContent() {
  return (
    <I18nextProvider i18n={i18n}>
    <RTLProvider>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-900">
        <NavbarWithLocation />

        <AnalyticsTracker />
        <MainWithLocation />

        <Footer />
        <Toast />
        <FloatingButtons />
        {/* <ThemeWelcome /> */}
      </div>
    </Router>
    </RTLProvider>
    </I18nextProvider>
  );
}

function App() {
  return (
    <AppProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </AppProvider>
  );
}

function NavbarWithLocation() {
  const location = useLocation();
  
  // Determine if navbar should be transparent based on current route
  const isTransparent = (location.pathname === '/ClientPortal' || location.pathname === '/ClientPortal/');
  
  return <Navbar isTransparent={false} />;
}

function MainWithLocation() {
  const location = useLocation();
  
  // Determine if main content should have different padding based on current route
  const paddingTop = (location.pathname === '/ClientPortal') ? 'pt-32' : 'pt-28';
  
  return (
    <main 
      className={`flex-grow ${paddingTop} pb-16`}
      id="main-content"
      tabIndex={-1}
      role="main"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<ClientForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<EventDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/innovation-lab" element={<InnovationLab />} />
        <Route path="/api-documentation" element={<ApiDocumentation />} />
        <Route path="/roi-calculator" element={<ROICalculator />} />
        <Route path="/ClientPortal" element={<ClientPortal />} />
        <Route path="/KnowledgeBase" element={<KnowledgeBase />} />
        <Route path="/ai-features" element={<AIFeatures />} />
        <Route path="/AIFeatures" element={<AIFeatures />} />
        <Route path="/NaturalLanguageQueryPage" element={<NaturalLanguageQueryPage />} />
        <Route path="/Careers/Apply/:JobId" element={<JobApplication />} />
        <Route path="/WhatsAppIntegrationPage" element={<WhatsAppIntegrationPage />} />
        <Route path="/AuralisAIPage" element={<AuralisAIPage />} />
        <Route path="/DigitalHealthAuditorPage" element={<DigitalHealthAuditorPage />} />
        <Route path="/PredictiveAnalyticsPage" element={<PredictiveAnalyticsPage />} />
        <Route path="/LeadGenerationFormsPage" element={<LeadGenerationFormsPage />} />
        <Route path="/AnalyticsDashboardPage" element={<AnalyticsDashboardPage />} />
        <Route path="/AuralisPersonalizationDemoPage" element={<AuralisPersonalizationDemoPage />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
