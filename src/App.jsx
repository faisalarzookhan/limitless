import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { BackToTop } from "./components/ui";

function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-900">
        <Navbar />

        <main 
          className="flex-grow pt-28 pb-16"
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
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/ai-features" element={<AIFeatures />} />
            <Route path="/natural-language-query" element={<NaturalLanguageQueryPage />} />
            <Route path="/progressive-profiling" element={<ProgressiveProfilingPage />} />
            <Route path="/careers/apply/:jobId" element={<JobApplication />} />
            <Route path="/whatsapp-integration" element={<WhatsAppIntegrationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <Toast />
        <FloatingButtons />
        {/* <ThemeWelcome /> */}
      </div>
    </Router>
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

export default App;
