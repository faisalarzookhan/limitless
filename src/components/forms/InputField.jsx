import React from 'react';
import FormFieldWrapper from './FormFieldWrapper';

const InputField = ({ 
  id, 
  name, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  error, 
  description,
  icon: Icon,
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
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full ${
            Icon ? 'pl-10 pr-4' : 'px-4'
          } py-3 rounded-lg border ${
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
      </div>
    </FormFieldWrapper>
  );
};

export default InputField;