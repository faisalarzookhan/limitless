import React, { forwardRef } from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';

interface AnimatedElementProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?:
    | 'fade-in'
    | 'fade-in-up'
    | 'fade-in-down'
    | 'slide-in-left'
    | 'slide-in-right'
    | 'scale-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  (
    {
      animation = 'fade-in-up',
      delay = 0,
      duration = 0.6,
      threshold = 0.1,
      once = true,
      className = '',
      style = {},
      children,
      ...props
    },
    ref
  ) => {
    const { elementRef, isVisible } = useScrollAnimation({
      threshold,
      once,
    });

    // Map animation types to CSS classes
    const animationClasses = {
      'fade-in': 'opacity-0 transition-opacity duration-700',
      'fade-in-up': 'opacity-0 translate-y-8 transition-all duration-700',
      'fade-in-down': 'opacity-0 -translate-y-8 transition-all duration-700',
      'slide-in-left': 'opacity-0 -translate-x-8 transition-all duration-700',
      'slide-in-right': 'opacity-0 translate-x-8 transition-all duration-700',
      'scale-in': 'opacity-0 scale-95 transition-all duration-700',
    };

    // Determine the final class based on visibility
    const baseClasses = animationClasses[animation];
    const visibleClasses = isVisible
      ? 'opacity-100 translate-y-0 -translate-x-0 scale-100'
      : '';

    const combinedClasses =
      `${baseClasses} ${visibleClasses} ${className}`.trim();

    const combinedStyle = {
      ...style,
      transitionDelay: isVisible ? `${delay}s` : undefined,
    };

    return (
      <div
        ref={elementRef as React.Ref<HTMLDivElement>}
        className={combinedClasses}
        style={combinedStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;
