import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { InputProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = '',
      variant = 'default',
      type = 'text',
      icon,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const baseInputClasses =
      'w-full rounded-2xl bg-white/5 border border-white/5 text-[0.8rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 focus:outline-none focus:border-[#1ba6d6]/50 focus:bg-white/10 px-8 py-5';

    const inputType = type === 'password' && showPassword ? 'text' : type;

    const inputClasses = `${baseInputClasses} ${className} ${error ? 'border-red-500/50' : ''}`;

    const labelClasses = `block text-[0.6rem] font-black uppercase tracking-[0.3em] mb-4 ml-4 ${error ? 'text-[#ff4d4d]' : 'text-white/40'}`;


    const inputId = props.id || generateId('input');

    return (
      <div className="w-full">
        {label && (
          <label className={labelClasses} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-[#1ba6d6] transition-colors">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={`${inputClasses} ${icon ? 'pl-14' : ''} ${type === 'password' ? 'pr-14' : ''}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          {type === 'password' && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-6 flex items-center text-white/20 hover:text-white focus:outline-none transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-[0.6rem] font-black text-[#ff4d4d] uppercase tracking-widest mt-3 ml-4"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
