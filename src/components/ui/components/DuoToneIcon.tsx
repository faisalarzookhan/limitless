import React, { forwardRef } from 'react';

interface DuoToneIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ComponentType<any>;
  primaryColor?: string;
  secondaryColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const DuoToneIcon = forwardRef<HTMLSpanElement, DuoToneIconProps>(
  (
    {
      icon: Icon,
      primaryColor = 'text-primary-600',
      secondaryColor = 'text-primary-600/20',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    // Size classes mapping
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    };

    return (
      <span
        ref={ref}
        className={`relative inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}
        {...props}
      >
        <span className={`absolute inset-0 ${secondaryColor}`}>
          <Icon className="w-full h-full" />
        </span>
        <span className={`relative ${primaryColor}`}>
          <Icon className="w-full h-full" />
        </span>
      </span>
    );
  }
);

DuoToneIcon.displayName = 'DuoToneIcon';

export default DuoToneIcon;
