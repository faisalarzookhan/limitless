// Accessibility utilities for WCAG AA compliance

// Generate unique IDs for accessibility attributes
let idCounter = 0;
export const generateId = (prefix = 'uid'): string => {
  return `${prefix}-${++idCounter}`;
};

// Ensure sufficient color contrast (WCAG AA requires 4.5:1 for normal text)
export const getContrastRatio = (hex1: string, hex2: string): number => {
  const luminance = (hex: string): number => {
    const rgb = hex.startsWith('#') ? hex.substring(1) : hex;
    const r = parseInt(rgb.substring(0, 2), 16) / 255;
    const g = parseInt(rgb.substring(2, 4), 16) / 255;
    const b = parseInt(rgb.substring(4, 6), 16) / 255;
    
    const a = [r, g, b].map(v => {
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };
  
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

// Check if color combination meets WCAG AA contrast requirements
export const hasSufficientContrast = (backgroundColor: string, textColor: string): boolean => {
  return getContrastRatio(backgroundColor, textColor) >= 4.5;
};

// Get appropriate text color for a given background to ensure accessibility
export const getAccessibleTextColor = (backgroundColor: string): string => {
  // Simplified approach - in a real implementation, you'd calculate actual contrast
  // This is a basic heuristic for demonstration purposes
  const hex = backgroundColor.startsWith('#') ? backgroundColor.substring(1) : backgroundColor;
  
  if (hex.length !== 6) return '#000000'; // fallback
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate brightness (https://www.w3.org/TR/AERT/#color-contrast)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  return brightness > 125 ? '#000000' : '#FFFFFF';
};

// Focus management utilities
export const focusFirstFocusableElement = (element: HTMLElement): void => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement).focus();
  }
};

// Trap focus within an element (useful for modals)
export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return () => {};
  
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleKeyDown);
  
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
};

// Skip to content link utility
export const createSkipLink = (targetId: string, linkText = 'Skip to main content'): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = linkText;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded focus:ring-2 focus:ring-primary-500';
  
  return skipLink;
};

// Announce messages to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcementElement = document.createElement('div');
  announcementElement.setAttribute('aria-live', priority);
  announcementElement.setAttribute('aria-atomic', 'true');
  announcementElement.className = 'sr-only';
  announcementElement.textContent = message;
  
  document.body.appendChild(announcementElement);
  
  // Remove the element after the announcement is likely to have been read
  setTimeout(() => {
    document.body.removeChild(announcementElement);
  }, 1000);
};

// Utility to handle reduced motion preferences
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Utility to handle high contrast mode
export const prefersHighContrast = (): boolean => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Utility to handle dark mode
export const prefersDarkMode = (): boolean => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Utility to make elements accessible
export const makeAccessible = (element: HTMLElement, options: {
  label?: string;
  describedBy?: string;
  details?: string;
  role?: string;
  hidden?: boolean;
}): void => {
  if (options.label) {
    element.setAttribute('aria-label', options.label);
  }
  
  if (options.describedBy) {
    element.setAttribute('aria-describedby', options.describedBy);
  }
  
  if (options.details) {
    element.setAttribute('aria-details', options.details);
  }
  
  if (options.role) {
    element.setAttribute('role', options.role);
  }
  
  if (options.hidden) {
    element.setAttribute('aria-hidden', 'true');
  }
};

// Export all utilities as a single object
export const accessibilityUtils = {
  generateId,
  getContrastRatio,
  hasSufficientContrast,
  getAccessibleTextColor,
  focusFirstFocusableElement,
  trapFocus,
  createSkipLink,
  announceToScreenReader,
  prefersReducedMotion,
  prefersHighContrast,
  prefersDarkMode,
  makeAccessible,
};

export default accessibilityUtils;