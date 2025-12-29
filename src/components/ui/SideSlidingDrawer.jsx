import React, { useState, useEffect, useCallback } from 'react';
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
      >
        {/* Drawer header */}
        <div className="drawer-header">
          {title && <h2 className="drawer-title">{title}</h2>}
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
              ×
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
