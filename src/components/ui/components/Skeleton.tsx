import { forwardRef, HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'circle' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({
  variant = 'default',
  width,
  height,
  animation = 'pulse',
  className = '',
  style = {},
  ...props
}, ref) => {
  const baseClasses = 'bg-gray-200 dark:bg-dark-700';
  
  const variantClasses = {
    default: 'rounded',
    circle: 'rounded-full',
    rounded: 'rounded-lg',
  };
  
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse-slow',
    none: '',
  };

  const widthStyle = width ? { width } : {};
  const heightStyle = height ? { height } : {};

  const classes = `${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`;

  return (
    <div
      ref={ref}
      className={classes}
      style={{ ...style, ...widthStyle, ...heightStyle }}
      aria-busy="true"
      aria-label="Loading content"
      {...props}
    />
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;