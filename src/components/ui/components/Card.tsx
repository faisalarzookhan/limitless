import { forwardRef, HTMLAttributes } from 'react';
import { CardProps } from '../../../types';

const Card = forwardRef<
  HTMLDivElement,
  CardProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      variant = 'default',
      className = '',
      hoverable = false,
      clickable = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'rounded-2xl p-6 transition-all duration-300';

    const variantClasses = {
      default:
        'bg-white dark:bg-dark-800/80 backdrop-blur-sm shadow-soft border border-gray-100/50 dark:border-dark-700/50',
      elevated:
        'bg-white dark:bg-dark-800/80 backdrop-blur-sm shadow-xl border border-gray-100/50 dark:border-dark-700/50',
      outlined: 'bg-transparent border-2 border-gray-200 dark:border-dark-700',
      filled: 'bg-gray-50 dark:bg-dark-800',
      glass:
        'bg-white/70 dark:bg-dark-800/60 backdrop-blur-xl border border-white/30 dark:border-dark-700/30 shadow-lg',
      gradient:
        'bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 shadow-soft border border-gray-100/50 dark:border-dark-700/50',
    };

    const hoverClasses = hoverable
      ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer transform-gpu'
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
  }
);

Card.displayName = 'Card';

export default Card;
