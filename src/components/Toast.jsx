import { useEffect, useRef } from 'react';
import { HiX, HiCheckCircle, HiExclamationCircle, HiInformationCircle, HiExclamation } from 'react-icons/hi';
import { useApp } from '../context/AppContext';
import { generateId } from '../utils/accessibility';

const Toast = () => {
  const { notifications, removeNotification } = useApp();
  const regionId = generateId('notifications');

  return (
    <div 
      id={regionId}
      className="fixed top-24 right-4 z-50 space-y-3 max-w-sm w-full pointer-events-none"
      role="region"
      aria-label="Notifications"
      aria-live="polite"
      aria-relevant="additions"
    >
      {notifications.map((notification) => (
        <ToastItem
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

const ToastItem = ({ notification, onClose }) => {
  const { type, title, message, duration } = notification;
  const toastRef = useRef(null);
  const toastId = generateId('toast');

  useEffect(() => {
    // Auto-focus the toast for screen readers
    if (toastRef.current) {
      toastRef.current.focus();
    }

    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <HiCheckCircle className="w-6 h-6 text-green-500" />;
      case 'error':
        return <HiExclamationCircle className="w-6 h-6 text-red-500" />;
      case 'warning':
        return <HiExclamation className="w-6 h-6 text-yellow-500" />;
      case 'info':
      default:
        return <HiInformationCircle className="w-6 h-6 text-blue-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'info':
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-800 dark:text-green-200';
      case 'error':
        return 'text-red-800 dark:text-red-200';
      case 'warning':
        return 'text-yellow-800 dark:text-yellow-200';
      case 'info':
      default:
        return 'text-blue-800 dark:text-blue-200';
    }
  };

  // Determine the politeness setting for screen readers
  const getAriaLive = () => {
    switch (type) {
      case 'error':
        return 'assertive';
      case 'warning':
      case 'info':
      case 'success':
      default:
        return 'polite';
    }
  };

  return (
    <div
      id={toastId}
      ref={toastRef}
      className={`${getBgColor()} ${getTextColor()} border rounded-xl shadow-lg p-4 flex items-start space-x-3 animate-slide-in-right pointer-events-auto backdrop-blur-sm`}
      role="alert"
      aria-live={getAriaLive()}
      aria-atomic="true"
      tabIndex={-1}
    >
      <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-semibold text-sm mb-1">{title}</h4>
        )}
        {message && (
          <p className="text-sm opacity-90">{message}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 ml-2 hover:opacity-70 transition-opacity duration-200"
        aria-label="Close notification"
      >
        <HiX className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toast;
