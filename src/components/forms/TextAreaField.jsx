import React from 'react';
import FormFieldWrapper from './FormFieldWrapper';

const TextAreaField = ({ 
  id, 
  name, 
  label, 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  error, 
  description,
  rows = 4,
  className = "",
  ...props 
}) => {
  return (
    <FormFieldWrapper 
      label={label} 
      id={id} 
      required={required} 
      error={error} 
      description={description}
      className={className}
    >
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 rounded-lg border ${
          error 
            ? 'border-red-300 dark:border-red-600' 
            : 'border-gray-300 dark:border-dark-600'
        } bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
          props.disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        {...props}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    </FormFieldWrapper>
  );
};

export default TextAreaField;