import { useEffect, useRef } from 'react';
import {
  X,
  CheckCircle,
  AlertCircle,
  Info,
  AlertTriangle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { generateId } from '../utils/accessibility';

const Toast = () => {
  const { notifications, removeNotification } = useApp();
  const regionId = generateId('notifications');

  return (
    <div
      id={regionId}
      className="fixed top-24 right-4 z-[9999] space-y-4 max-w-sm w-full pointer-events-none"
      role="region"
      aria-label="Notifications"
      aria-live="polite"
      aria-relevant="additions"
    >
      <AnimatePresence mode="popLayout">
        {notifications.map(notification => (
          <ToastItem
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastItem = ({ notification, onClose }) => {
  const { type, title, message, duration } = notification;
  const toastRef = useRef(null);
  const toastId = generateId('toast');

  useEffect(() => {
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
        return <CheckCircle className="w-5 h-5 text-[#25d366]" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-[#ffc957]" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-[#1ba6d6]" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'border-[#25d366]/30';
      case 'error':
        return 'border-red-500/30';
      case 'warning':
        return 'border-[#ffc957]/30';
      case 'info':
      default:
        return 'border-[#1ba6d6]/30';
    }
  };

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
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.9, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
      id={toastId}
      ref={toastRef}
      className={`bg-[#0e1114]/90 backdrop-blur-2xl border ${getBorderColor()} rounded-2xl shadow-2xl p-5 flex items-start space-x-4 pointer-events-auto group relative overflow-hidden`}
      role="alert"
      aria-live={getAriaLive()}
      aria-atomic="true"
      tabIndex={-1}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="flex-shrink-0 mt-0.5 relative z-10">{getIcon()}</div>
      
      <div className="flex-1 min-w-0 relative z-10">
        {title && <h4 className="text-[0.7rem] font-black text-white uppercase tracking-widest mb-1">{title}</h4>}
        {message && <p className="text-[0.65rem] text-white/60 font-black uppercase tracking-widest leading-relaxed">{message}</p>}
      </div>
      
      <button
        onClick={onClose}
        className="flex-shrink-0 ml-4 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300 relative z-10"
        aria-label="Close notification"
      >
        <X className="w-4 h-4 text-white/40" />
      </button>
    </motion.div>
  );
};

export default Toast;
