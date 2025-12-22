import React, { forwardRef } from 'react';
import { CardProps } from '../../../types';

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  variant = 'default',
  className = '',
  hoverable = false,
  clickable = false,
  ...props
}, ref) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white dark:bg-dark-800 shadow-soft border border-gray-100 dark:border-dark-700',
    elevated: 'bg-white dark:bg-dark-800 shadow-xl border border-gray-100 dark:border-dark-700',
    outlined: 'bg-transparent border-2 border-gray-200 dark:border-dark-700',
    filled: 'bg-gray-50 dark:bg-dark-800',
    gradient: 'bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 shadow-soft border border-gray-100 dark:border-dark-700',
  };

  const hoverClasses = hoverable 
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' 
    : '';
    
  const clickableClasses = clickable 
    ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500' 
    : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickableClasses} ${className}`;

  // Determine appropriate role and attributes based on interactivity
  const role = clickable ? 'button' : undefined;
  const tabIndex = clickable ? 0 : undefined;
  const handleClick = clickable ? props.onClick : undefined;
  const handleKeyDown = clickable
    ? (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          props.onClick && props.onClick(e as any);
        }
      }
    : undefined;

  return (
    <div
      ref={ref}
      className={classes}
      role={role}
      tabIndex={tabIndex}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;