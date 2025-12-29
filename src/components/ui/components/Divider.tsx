import { forwardRef } from 'react';
import { DividerProps } from '../../../types';

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className = '',
      orientation = 'horizontal',
      variant = 'solid',
      thickness = 1,
      color = 'gray',
      textAlign = 'center',
      children,
      ...props
    },
    ref
  ) => {
    // Orientation classes
    const orientationClasses =
      orientation === 'horizontal' ? 'w-full my-4' : 'h-full mx-4';

    // Variant classes
    const variantClasses = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    };

    // Color classes
    const colorClasses = {
      gray: 'border-gray-300 dark:border-dark-600',
      primary: 'border-primary-500',
      secondary: 'border-secondary-500',
      accent: 'border-accent-500',
    };

    // Border classes
    const borderClasses =
      orientation === 'horizontal'
        ? `border-t ${thickness === 1 ? 'border' : `border-${thickness}`}`
        : `border-l ${thickness === 1 ? 'border' : `border-${thickness}`}`;

    // If divider has children, render as a text divider
    if (children) {
      return (
        <div
          ref={ref}
          className={`flex items-center w-full my-4 ${className}`}
          role="separator"
          aria-orientation="horizontal"
          {...props}
        >
          <div
            className={`flex-grow ${borderClasses} ${variantClasses[variant]} ${colorClasses[color]}`}
          ></div>
          <div className="px-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {children}
          </div>
          <div
            className={`flex-grow ${borderClasses} ${variantClasses[variant]} ${colorClasses[color]}`}
          ></div>
        </div>
      );
    }

    // Render as a simple divider
    return (
      <div
        ref={ref}
        className={`${orientationClasses} ${borderClasses} ${variantClasses[variant]} ${colorClasses[color]} ${className}`}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export default Divider;
