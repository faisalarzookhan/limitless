import { forwardRef, useEffect } from 'react';
import { 
  X, 
  Info, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle 
} from 'lucide-react';
import { NotificationProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      type = 'info',
      title,
      message,
      onClose,
      duration = 5000,
      className = '',
      closable = true,
      ...props
    },
    ref
  ) => {
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
      success: <CheckCircle2 className="w-5 h-5 text-[#25d366]" />,
      error: <AlertCircle className="w-5 h-5 text-[#ff4d4d]" />,
      warning: <AlertTriangle className="w-5 h-5 text-[#ffc957]" />,
      info: <Info className="w-5 h-5 text-[#1ba6d6]" />,
    };

    // Background color classes
    const bgColorClasses = {
      success: 'bg-[#25d366]/10 border-[#25d366]/20 backdrop-blur-3xl',
      error: 'bg-[#ff4d4d]/10 border-[#ff4d4d]/20 backdrop-blur-3xl',
      warning: 'bg-[#ffc957]/10 border-[#ffc957]/20 backdrop-blur-3xl',
      info: 'bg-[#1ba6d6]/10 border-[#1ba6d6]/20 backdrop-blur-3xl',
    };

    // Text color classes
    const textColorClasses = {
      success: 'text-white/90',
      error: 'text-white/90',
      warning: 'text-white/90',
      info: 'text-white/90',
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
        <div className="flex-shrink-0 mt-0.5">{iconMap[type]}</div>

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

          <button
            onClick={onClose}
            className="flex-shrink-0 ml-4 p-1 rounded-lg text-white/20 hover:text-white/60 hover:bg-white/5 transition-all focus:outline-none"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
      </div>
    );
  }
);

Notification.displayName = 'Notification';

export default Notification;
