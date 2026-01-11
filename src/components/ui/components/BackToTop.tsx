import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackToTopProps {
  threshold?: number;
  className?: string;
  children?: React.ReactNode;
}

const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 300,
  className = '',
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          className={`fixed bottom-8 right-8 z-40 ${className}`}
        >
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-[#1ba6d6] text-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(27,166,214,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden relative"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            {children || <ArrowUp className="w-6 h-6 relative z-10 group-hover:-translate-y-1 transition-transform" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
