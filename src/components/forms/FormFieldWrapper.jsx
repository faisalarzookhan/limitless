import React from 'react';

const FormFieldWrapper = ({
  label,
  id,
  required = false,
  error,
  children,
  description,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {children}
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {description}
        </p>
      )}
      {error && (
        <p
          className="text-sm text-red-600 dark:text-red-400 mt-1"
          id={`${id}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormFieldWrapper;
