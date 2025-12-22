import React, { forwardRef, useEffect } from 'react';
import { HiX, HiInformationCircle, HiCheckCircle, HiExclamation, HiExclamationCircle } from 'react-icons/hi';
import { NotificationProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Notification = forwardRef<HTMLDivElement, NotificationProps>(({
  type = 'info',
  title,
  message,
  onClose,
  duration = 5000,
  className = '',
  closable = true,
  ...props
}, ref) => {
  const notificationId = generateId('notification');
  
  // Auto-close notification after duration
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);
  
  // Icon mapping
  const iconMap = {
    success: <HiCheckCircle className="w-5 h-5 text-green-500" />,
    error: <HiExclamationCircle className="w-5 h-5 text-red-500" />,
    warning: <HiExclamation className="w-5 h-5 text-yellow-500" />,
    info: <HiInformationCircle className="w-5 h-5 text-blue-500" />,
  };
  
  // Background color classes
  const bgColorClasses = {
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  };
  
  // Text color classes
  const textColorClasses = {
    success: 'text-green-800 dark:text-green-200',
    error: 'text-red-800 dark:text-red-200',
    warning: 'text-yellow-800 dark:text-yellow-200',
    info: 'text-blue-800 dark:text-blue-200',
  };
  
  return (
    <div
      ref={ref}
      id={notificationId}
      className={`flex items-start p-4 rounded-lg border ${bgColorClasses[type]} ${className}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      {...props}
    >
      <div className="flex-shrink-0 mt-0.5">
        {iconMap[type]}
      </div>
      
      <div className="ml-3 flex-1">
        {title && (
          <h4 className={`text-sm font-semibold ${textColorClasses[type]}`}>
            {title}
          </h4>
        )}
        
        {message && (
          <p className={`text-sm mt-1 ${textColorClasses[type]}`}>
            {message}
          </p>
        )}
      </div>
      
      {closable && (
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-4 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          aria-label="Close notification"
        >
          <HiX className="w-5 h-5" />
        </button>
      )}
    </div>
  );
});

Notification.displayName = 'Notification';

export default Notification;