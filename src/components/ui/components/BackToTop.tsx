import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import Button from '../Button';

interface BackToTopProps {
  threshold?: number;
  className?: string;
  children?: React.ReactNode;
}

const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 300,
  className = 'scroll-to-top',
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

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-8 right-8 z-40 ${className}`}>
      {children ? (
        <button
          onClick={scrollToTop}
          className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full"
          aria-label="Scroll to top"
        >
          {children}
        </button>
      ) : (
        <Button
          variant="primary"
          icon={<HiArrowUp className="w-5 h-5" />}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-4 rounded-full shadow-lg hover:shadow-xl"
        />
      )}
    </div>
  );
};

export default BackToTop;
