import { forwardRef } from 'react';
import { TextAreaProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', variant = 'default', ...props }, ref) => {
    const baseTextAreaClasses =
      'w-full rounded-lg border bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 resize-none';

    const variantClasses = {
      default:
        'border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-transparent',
      filled:
        'border-gray-300 dark:border-dark-600 bg-gray-50 dark:bg-dark-700 focus:ring-primary-500 focus:border-transparent',
      outlined:
        'border-2 border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-primary-500',
    };

    const textAreaClasses = `${baseTextAreaClasses} ${variantClasses[variant]} ${className} ${error ? 'border-red-500 dark:border-red-400 focus:ring-red-500' : ''}`;

    const labelClasses = `block text-sm font-semibold mb-2 ${error ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}`;

    // Generate unique ID for accessibility if not provided
    const textAreaId = props.id || generateId('textarea');

    return (
      <div className="w-full">
        {label && (
          <label className={labelClasses} htmlFor={textAreaId}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textAreaId}
          className={textAreaClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${textAreaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${textAreaId}-error`}
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

TextArea.displayName = 'TextArea';

export default TextArea;
