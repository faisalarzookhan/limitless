import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Micro Interactions Component with Haptic-like Feedback
 * Subtle haptic-like feedback on buttons and smooth layout transitions
 * to convey "Royal" quality as per the "Limitless UI/UX Library Standards".
 */
const MicroInteractions = ({
  children,
  type = 'button',
  feedbackIntensity = 'medium',
  enableHaptic = true,
  className = '',
  ...props
}) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const elementRef = useRef(null);

  // Haptic feedback simulation
  const triggerHapticFeedback = intensity => {
    if (!enableHaptic) return;

    // Simulate haptic feedback based on intensity
    const intensities = {
      light: { scale: 0.98, duration: 50 },
      medium: { scale: 0.96, duration: 100 },
      heavy: { scale: 0.94, duration: 150 },
    };

    const config = intensities[intensity] || intensities.medium;

    if (elementRef.current) {
      // Apply temporary scale transformation
      elementRef.current.style.transform = `scale(${config.scale})`;

      // Reset after delay
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.style.transform = 'scale(1)';
        }
      }, config.duration);
    }

    // Trigger visual feedback
    setFeedback(true);
    setTimeout(() => setFeedback(false), 200);
  };

  // Handle interaction based on type
  const handleInteraction = event => {
    if (type === 'button' || type === 'click') {
      triggerHapticFeedback(feedbackIntensity);
    } else if (type === 'hover') {
      // For hover interactions, we can provide subtle feedback
      triggerHapticFeedback('light');
    }
  };

  // Get interaction props based on type
  const getInteractionProps = () => {
    const baseProps = {
      ref: elementRef,
      className: [
        'limitless-micro-interaction',
        `interaction-${type}`,
        `feedback-${feedbackIntensity}`,
        isInteracting ? 'interaction-active' : '',
        feedback ? 'feedback-active' : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
      style: {
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        transformOrigin: 'center',
        cursor: type === 'button' || type === 'click' ? 'pointer' : 'default',
        ...props.style,
      },
    };

    switch (type) {
      case 'button':
      case 'click':
        return {
          ...baseProps,
          onClick: e => {
            handleInteraction(e);
            if (props.onClick) props.onClick(e);
          },
          onMouseDown: e => {
            setIsInteracting(true);
            if (props.onMouseDown) props.onMouseDown(e);
          },
          onMouseUp: e => {
            setIsInteracting(false);
            if (props.onMouseUp) props.onMouseUp(e);
          },
          onMouseLeave: e => {
            setIsInteracting(false);
            if (props.onMouseLeave) props.onMouseLeave(e);
          },
        };
      case 'hover':
        return {
          ...baseProps,
          onMouseEnter: e => {
            handleInteraction(e);
            setIsInteracting(true);
            if (props.onMouseEnter) props.onMouseEnter(e);
          },
          onMouseLeave: e => {
            setIsInteracting(false);
            if (props.onMouseLeave) props.onMouseLeave(e);
          },
        };
      case 'focus':
        return {
          ...baseProps,
          onFocus: e => {
            handleInteraction(e);
            setIsInteracting(true);
            if (props.onFocus) props.onFocus(e);
          },
          onBlur: e => {
            setIsInteracting(false);
            if (props.onBlur) props.onBlur(e);
          },
        };
      default:
        return baseProps;
    }
  };

  return React.cloneElement(children, getInteractionProps());
};

/**
 * Royal Button Component with Micro Interactions
 * Enhanced button with haptic-like feedback and Royal Gold styling
 */
const RoyalButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  feedbackIntensity = 'medium',
  enableHaptic = true,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const royalVariants = {
    primary: {
      bg: '#1e3a8a', // Deep blue
      hover: '#1e40af',
      text: 'white',
      border: 'none',
    },
    secondary: {
      bg: 'transparent',
      hover: '#eff6ff',
      text: '#1e3a8a',
      border: '2px solid #1e3a8a',
    },
    gold: {
      bg: '#d4af37', // Royal Gold
      hover: '#b8860b',
      text: 'white',
      border: 'none',
    },
    outline: {
      bg: 'transparent',
      hover: '#1e3a8a',
      text: '#1e3a8a',
      border: '2px solid #1e3a8a',
    },
  };

  const variantStyles = royalVariants[variant] || royalVariants.primary;

  const buttonClasses = [
    'royal-button',
    `royal-button-${size}`,
    `royal-button-${variant}`,
    disabled ? 'royal-button-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleButtonClick = e => {
    if (disabled) return;

    // Trigger haptic feedback
    if (enableHaptic) {
      // Simulate haptic feedback through CSS animation
      e.currentTarget.classList.add('haptic-feedback');
      setTimeout(() => {
        e.currentTarget.classList.remove('haptic-feedback');
      }, 200);
    }

    if (onClick) onClick(e);
  };

  return (
    <MicroInteractions
      type="button"
      feedbackIntensity={feedbackIntensity}
      enableHaptic={enableHaptic}
    >
      <button
        className={buttonClasses}
        onClick={handleButtonClick}
        disabled={disabled}
        style={{
          background: disabled ? '#d1d5db' : variantStyles.bg,
          color: disabled ? '#9ca3af' : variantStyles.text,
          border: variantStyles.border,
          padding:
            size === 'small'
              ? '0.5rem 1rem'
              : size === 'large'
                ? '1rem 2rem'
                : '0.75rem 1.5rem',
          fontSize:
            size === 'small'
              ? '0.875rem'
              : size === 'large'
                ? '1.25rem'
                : '1rem',
          fontWeight: '600',
          borderRadius: '0.5rem',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          minWidth:
            size === 'small' ? '80px' : size === 'large' ? '140px' : '100px',
          ...props.style,
        }}
        {...props}
      >
        {children}
        {/* Feedback effect overlay */}
        <span
          className="feedback-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.2)',
            opacity: 0,
            borderRadius: '0.5rem',
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease',
          }}
        />
      </button>
    </MicroInteractions>
  );
};

/**
 * Royal Input Component with Micro Interactions
 * Enhanced input with haptic-like feedback on focus
 */
const RoyalInput = ({
  label,
  feedbackIntensity = 'light',
  enableHaptic = true,
  className = '',
  ...props
}) => {
  return (
    <div className={`royal-input-container ${className}`}>
      {label && (
        <label
          className="royal-input-label"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
            color: '#1e3a8a',
            fontSize: '0.875rem',
          }}
        >
          {label}
        </label>
      )}
      <MicroInteractions
        type="focus"
        feedbackIntensity={feedbackIntensity}
        enableHaptic={enableHaptic}
      >
        <input
          className="royal-input"
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '2px solid #d1d5db',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            outline: 'none',
          }}
          {...props}
        />
      </MicroInteractions>
    </div>
  );
};

/**
 * Royal Card Component with Micro Interactions
 * Enhanced card with haptic-like feedback on interaction
 */
const RoyalCard = ({
  children,
  feedbackIntensity = 'light',
  enableHaptic = true,
  className = '',
  ...props
}) => {
  return (
    <MicroInteractions
      type="hover"
      feedbackIntensity={feedbackIntensity}
      enableHaptic={enableHaptic}
    >
      <div
        className={`royal-card ${className}`}
        style={{
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          ...props.style,
        }}
        {...props}
      >
        {children}
      </div>
    </MicroInteractions>
  );
};

// CSS for haptic feedback animations
const HapticFeedbackCSS = () => (
  <style jsx>{`
    .haptic-feedback {
      transform: scale(0.96);
    }

    .royal-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .royal-button:active:not(:disabled) {
      transform: translateY(0) scale(0.98);
    }

    .royal-input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    .royal-card:hover {
      transform: translateY(-4px);
      box-shadow:
        0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .feedback-overlay:active {
      opacity: 1;
    }
  `}</style>
);

MicroInteractions.propTypes = {
  /** Child element to apply micro interactions to */
  children: PropTypes.element.isRequired,
  /** Type of interaction: 'button', 'hover', 'focus', 'click' */
  type: PropTypes.oneOf(['button', 'hover', 'focus', 'click']),
  /** Intensity of haptic feedback: 'light', 'medium', 'heavy' */
  feedbackIntensity: PropTypes.oneOf(['light', 'medium', 'heavy']),
  /** Whether to enable haptic feedback */
  enableHaptic: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

RoyalButton.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'gold', 'outline']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Intensity of haptic feedback */
  feedbackIntensity: PropTypes.oneOf(['light', 'medium', 'heavy']),
  /** Whether to enable haptic feedback */
  enableHaptic: PropTypes.bool,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

RoyalInput.propTypes = {
  /** Input label */
  label: PropTypes.string,
  /** Intensity of haptic feedback */
  feedbackIntensity: PropTypes.oneOf(['light', 'medium', 'heavy']),
  /** Whether to enable haptic feedback */
  enableHaptic: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

RoyalCard.propTypes = {
  /** Card content */
  children: PropTypes.node.isRequired,
  /** Intensity of haptic feedback */
  feedbackIntensity: PropTypes.oneOf(['light', 'medium', 'heavy']),
  /** Whether to enable haptic feedback */
  enableHaptic: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export {
  MicroInteractions,
  RoyalButton,
  RoyalInput,
  RoyalCard,
  HapticFeedbackCSS,
};
export default MicroInteractions;
