import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ModalProps } from '../../../types';
import { trapFocus, generateId } from '../../../utils/accessibility';
import { motion, AnimatePresence } from 'framer-motion';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = generateId('modal-title');

  // Size classes
  const sizeClasses = {
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full mx-4',
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    let cleanupFocusTrap: (() => void) | undefined;

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      if (modalRef.current) {
        setTimeout(() => {
          cleanupFocusTrap = trapFocus(modalRef.current!);
          const firstFocusable = modalRef.current!.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) as HTMLElement;

          if (firstFocusable) {
            firstFocusable.focus();
          } else {
            modalRef.current!.focus();
          }
        }, 0);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      if (cleanupFocusTrap) {
        cleanupFocusTrap();
      }
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 isolate"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          aria-describedby={`${titleId}-description`}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0e1114]/80 backdrop-blur-xl"
            onClick={handleBackdropClick}
          />
          
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`bg-[#0e1114]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto focus:outline-none relative z-10`}
            tabIndex={-1}
            role="document"
          >
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              {title && (
                <h3
                  id={titleId}
                  className="text-xs font-black text-white uppercase tracking-[0.4em]"
                >
                  {title}
                </h3>
              )}
              <button
                onClick={onClose}
                className="p-3 rounded-2xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div id={`${titleId}-description`} className="p-8">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
