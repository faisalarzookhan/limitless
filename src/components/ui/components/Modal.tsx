import React, { useEffect, useRef } from 'react';
import { HiX } from 'react-icons/hi';
import { ModalProps } from '../../../types';
import { trapFocus, generateId } from '../../../utils/accessibility';

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
      
      // Trap focus within the modal
      if (modalRef.current) {
        // Wait a tick to ensure DOM is ready
        setTimeout(() => {
          cleanupFocusTrap = trapFocus(modalRef.current!);
          // Focus the modal container or first focusable element
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
      
      // Return focus to the element that opened the modal
      const triggerElement = document.querySelector(`[data-modal-trigger]`) as HTMLElement;
      if (triggerElement) {
        triggerElement.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={`${titleId}-description`}
    >
      <div 
        ref={modalRef}
        className={`bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto focus:outline-none`}
        tabIndex={-1}
        role="document"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
          {title && (
            <h3 
              id={titleId}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Close modal"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>
        <div id={`${titleId}-description`} className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;