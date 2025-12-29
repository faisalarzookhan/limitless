import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Handle skip to content functionality
  useEffect(() => {
    const handleSkipLink = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'S') {
        mainContentRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleSkipLink);
    return () => window.removeEventListener('keydown', handleSkipLink);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-white dark:bg-dark-900 transition-colors duration-300 relative"
      role="document"
    >
      {/* Site-wide background pattern - Aligned with container */}
      {/* Site-wide background pattern - Aligned with container */}
      <div
        className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-pattern-grid opacity-5 dark:opacity-10 pointer-events-none"></div>
      </div>
      <Navbar />
      <main
        ref={mainContentRef}
        className="flex-grow pt-28 pb-16 transition-all duration-300"
        id="main-content"
        tabIndex={-1}
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
