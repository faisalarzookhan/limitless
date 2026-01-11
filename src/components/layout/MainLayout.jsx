import React from 'react';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';
import FloatingButtons from '../FloatingButtons';
import WhatsAppBusinessIntegration from '../WhatsAppBusinessIntegration';
import PrivacyConsent from '../PrivacyConsent';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0e1114] text-[#94a3b8] relative overflow-x-hidden selection:bg-[#1ba6d6] selection:text-white">
      {/* Ambient Background - Global */}
      <div className="fixed inset-0 bg-radial-gradient from-blue-900/10 via-[#0e1114] to-[#0e1114] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <PrivacyConsent />
        <main id="content" className="flex-grow pt-24 md:pt-32">
          {children}
        </main>
        <FloatingButtons />
        <WhatsAppBusinessIntegration />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
