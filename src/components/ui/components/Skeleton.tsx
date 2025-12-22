import React, { forwardRef } from 'react';
import { SkeletonProps } from '../../../types';

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({
  className = '',
  variant = 'rectangular',
  width,
  height,
  borderRadius,
  animation = 'pulse',
  ...props
}, ref) => {
  // Base classes for skeleton
  const baseClasses = 'bg-gray-200 dark:bg-dark-700';
  
  // Variant classes
  const variantClasses = {
    rectangular: 'rounded',
    circular: 'rounded-full',
    text: 'rounded-lg',
  };
  
  // Animation classes
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse', // For simplicity, using pulse for both
    none: '',
  };
  
  // Styles
  const styles: React.CSSProperties = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    borderRadius: borderRadius ? `${borderRadius}px` : undefined,
  };
  
  // For text variant, we want to respect line height
  const textStyles: React.CSSProperties = variant === 'text' ? {
    height: height ? `${height}px` : '1em',
    transform: 'scale(1, 0.60)',
    transformOrigin: '0 60%',
  } : {};
  
  const combinedStyles = { ...styles, ...textStyles };

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={combinedStyles}
      {...props}
    />
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;