import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  const cleanup = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    // Cleanup previous observer
    cleanup();

    // Create new observer
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              setHasAnimated(true);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.current.observe(elementRef.current);

    // Cleanup on unmount
    return cleanup;
  }, [threshold, rootMargin, once, cleanup]);

  // Reset animation state if needed
  const resetAnimation = useCallback(() => {
    setHasAnimated(false);
    setIsVisible(false);
  }, []);

  return {
    elementRef,
    isVisible: once ? hasAnimated || isVisible : isVisible,
    resetAnimation,
  };
};

export default useScrollAnimation;
