import { forwardRef, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { InputProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  className = '',
  variant = 'default',
  type = 'text',
  icon,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const baseInputClasses = 'w-full rounded-lg border bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-all duration-300 focus:outline-none focus:ring-2';
  
  const variantClasses = {
    default: 'border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-transparent',
    filled: 'border-gray-300 dark:border-dark-600 bg-gray-50 dark:bg-dark-700 focus:ring-primary-500 focus:border-transparent',
    outlined: 'border-2 border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-primary-500',
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  const inputClasses = `${baseInputClasses} ${variantClasses[variant]} ${className} ${error ? 'border-red-500 dark:border-red-400 focus:ring-red-500' : ''}`;
  
  const labelClasses = `block text-sm font-semibold mb-2 ${error ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}`;
  
  const hasIcon = icon || type === 'password';

  // Generate unique ID for accessibility if not provided
  const inputId = props.id || generateId('input');

  return (
    <div className="w-full">
      {label && (
        <label className={labelClasses} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          type={inputType}
          className={`${inputClasses} ${hasIcon ? 'pl-10' : ''} ${type === 'password' ? 'pr-10' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
          </button>
        )}
      </div>
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-600 dark:text-red-400 mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;