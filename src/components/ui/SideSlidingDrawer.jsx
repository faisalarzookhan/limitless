import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import './SideSlidingDrawer.css';

/**
 * Standardized side-sliding drawer component for project deep-dives,
 * audit results, and user settings to maintain parent screen context
 * and reduce cognitive load.
 */
const SideSlidingDrawer = ({
  isOpen = false,
  onClose,
  position = 'right',
  width = '400px',
  title = '',
  children,
  showCloseButton = true,
  backdrop = true,
  className = '',
  zIndex = 1000,
  closeOnOutsideClick = true,
  closeOnEscapeKey = true,
  animationDuration = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const drawerRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Handle open/close state changes
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      if (isVisible) {
        setIsAnimating(false);
        // Wait for animation to complete before hiding
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, animationDuration);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, isVisible, animationDuration]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      // Get all focusable elements within the drawer
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        firstFocusableRef.current = focusableElements[0];
        lastFocusableRef.current = focusableElements[focusableElements.length - 1];
        
        // Focus the first element when drawer opens
        firstFocusableRef.current.focus();
      } else {
        // If no focusable elements, focus the drawer container
        drawerRef.current.focus();
      }
    }
  }, [isOpen]);

  // Trap focus within the drawer
  const handleTabKey = useCallback((event) => {
    if (event.key === 'Tab' && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, []);

  // Handle escape key
  const handleKeyDown = useCallback(
    event => {
      if (closeOnEscapeKey && event.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [closeOnEscapeKey, isOpen, onClose]
  );

  useEffect(() => {
    if (closeOnEscapeKey && isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, closeOnEscapeKey, isOpen]);

  // Add tab key listener for focus trapping
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.addEventListener('keydown', handleTabKey);
      return () => {
        if (drawerRef.current) {
          drawerRef.current.removeEventListener('keydown', handleTabKey);
        }
      };
    }
  }, [handleTabKey, isOpen]);

  // Handle outside click
  const handleBackdropClick = event => {
    if (
      closeOnOutsideClick &&
      event.target.classList.contains('drawer-backdrop')
    ) {
      onClose();
    }
  };

  // Determine drawer position classes
  const positionClass = `drawer-${position}`;
  const animationClass = isAnimating ? 'drawer-open' : 'drawer-closed';
  const displayClass = isVisible ? 'drawer-visible' : 'drawer-hidden';

  // Build class names
  const drawerClasses = [
    'limitless-drawer',
    positionClass,
    animationClass,
    displayClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Calculate position styles
  const positionStyles = {
    ...(position === 'right' && { right: isAnimating ? '0' : `-${width}` }),
    ...(position === 'left' && { left: isAnimating ? '0' : `-${width}` }),
    ...(position === 'top' && { top: isAnimating ? '0' : `-${width}` }),
    ...(position === 'bottom' && { bottom: isAnimating ? '0' : `-${width}` }),
    width: position === 'top' || position === 'bottom' ? '100%' : width,
    height: position === 'left' || position === 'right' ? '100%' : width,
    maxWidth: position === 'left' || position === 'right' ? '90vw' : '100%',
    maxHeight: position === 'top' || position === 'bottom' ? '90vh' : '100%',
    zIndex,
  };

  // Animation transition styles
  const transitionStyle = {
    transition: `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    WebkitTransition: `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    msTransition: `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  return (
    <>
      {backdrop && isVisible && (
        <div
          className={`drawer-backdrop ${isAnimating ? 'backdrop-fade-in' : 'backdrop-fade-out'}`}
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: zIndex - 1,
            opacity: isAnimating ? 1 : 0,
            transition: `opacity ${animationDuration}ms ease-in-out`,
            pointerEvents: isAnimating ? 'auto' : 'none',
          }}
        />
      )}

      <div
        ref={drawerRef}
        className={drawerClasses}
        style={{
          ...positionStyles,
          ...transitionStyle,
          position: 'fixed',
          top: position === 'top' || position === 'bottom' ? 0 : '0',
          bottom: position === 'top' || position === 'bottom' ? '0' : 'auto',
          display: isVisible ? 'flex' : 'none',
          flexDirection: 'column',
          backgroundColor: 'white',
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
        aria-hidden={!isOpen}
        tabIndex="-1"
      >
        {/* Drawer header */}
        <div className="drawer-header">
          {title && <h2 id="drawer-title" className="drawer-title">{title}</h2>}
          {showCloseButton && (
            <button
              className="drawer-close-button"
              onClick={onClose}
              aria-label="Close drawer"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={e =>
                (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)')
              }
              onMouseLeave={e =>
                (e.target.style.backgroundColor = 'transparent')
              }
            >
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>

        {/* Drawer content */}
        <div
          className="drawer-content"
          style={{ flex: 1, overflow: 'auto', padding: '1rem' }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

SideSlidingDrawer.propTypes = {
  /** Whether the drawer is open */
  isOpen: PropTypes.bool,
  /** Function called when drawer is closed */
  onClose: PropTypes.func.isRequired,
  /** Position of the drawer: 'right', 'left', 'top', 'bottom' */
  position: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
  /** Width of the drawer (for right/left) or height (for top/bottom) */
  width: PropTypes.string,
  /** Title to display in the drawer header */
  title: PropTypes.string,
  /** Content to render inside the drawer */
  children: PropTypes.node,
  /** Whether to show the close button */
  showCloseButton: PropTypes.bool,
  /** Whether to show a backdrop behind the drawer */
  backdrop: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Z-index of the drawer */
  zIndex: PropTypes.number,
  /** Whether to close when clicking outside the drawer */
  closeOnOutsideClick: PropTypes.bool,
  /** Whether to close when pressing the escape key */
  closeOnEscapeKey: PropTypes.bool,
  /** Duration of open/close animations in milliseconds */
  animationDuration: PropTypes.number,
};

export default SideSlidingDrawer;
