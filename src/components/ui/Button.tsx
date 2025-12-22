import React, { forwardRef, useEffect } from 'react';
import { ButtonProps } from '../../types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/30 focus:ring-primary-500',
    secondary: 'bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-700 focus:ring-gray-500',
    outline: 'border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
    ghost: 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  };

  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  // Warn if button has no accessible name
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (!ariaLabel && !children && !icon) {
        console.warn('Button component missing accessible name (aria-label, children, or icon)');
      }
    }
  }, [ariaLabel, children, icon]);

  const renderChildren = () => {
    if (!icon) return children;

    return (
      <>
        {iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </>
    );
  };

  return (
    <button
      ref={ref}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      {...props}
    >
      {renderChildren()}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
