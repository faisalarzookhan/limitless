import { forwardRef } from 'react';
import { SelectProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, error, className = '', variant = 'default', children, ...props },
    ref
  ) => {
    const baseSelectClasses =
      'w-full rounded-lg border bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 appearance-none pr-10';

    const variantClasses = {
      default:
        'border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-transparent',
      filled:
        'border-gray-300 dark:border-dark-600 bg-gray-50 dark:bg-dark-700 focus:ring-primary-500 focus:border-transparent',
      outlined:
        'border-2 border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-primary-500',
    };

    const selectClasses = `${baseSelectClasses} ${variantClasses[variant]} ${className} ${error ? 'border-red-500 dark:border-red-400 focus:ring-red-500' : ''}`;

    const labelClasses = `block text-sm font-semibold mb-2 ${error ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}`;

    // Generate unique ID for accessibility if not provided
    const selectId = props.id || generateId('select');

    return (
      <div className="w-full relative">
        {label && (
          <label className={labelClasses} htmlFor={selectId}>
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={selectClasses}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : undefined}
            {...props}
          >
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {error && (
          <p
            id={`${selectId}-error`}
            className="text-sm text-red-600 dark:text-red-400 mt-1"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
