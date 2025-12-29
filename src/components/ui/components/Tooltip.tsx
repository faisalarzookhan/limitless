import { forwardRef, useState, useRef, useEffect } from 'react';
import { TooltipProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      position = 'top',
      className = '',
      delay = 0,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [delayTimer, setDelayTimer] = useState<NodeJS.Timeout | null>(null);
    const tooltipId = generateId('tooltip');
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const showTooltip = () => {
      if (delay > 0) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, delay);
        setDelayTimer(timer);
      } else {
        setIsVisible(true);
      }
    };

    const hideTooltip = () => {
      if (delayTimer) {
        clearTimeout(delayTimer);
        setDelayTimer(null);
      }
      setIsVisible(false);
    };

    // Handle click outside to close tooltip
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          isVisible &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node) &&
          tooltipRef.current &&
          !tooltipRef.current.contains(event.target as Node)
        ) {
          hideTooltip();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        if (delayTimer) {
          clearTimeout(delayTimer);
        }
      };
    }, [isVisible, delayTimer]);

    // Position classes
    const positionClasses = {
      top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    };

    // Arrow position classes
    const arrowClasses = {
      top: 'top-full left-1/2 transform -translate-x-1/2 border-t border-l border-gray-900 dark:border-dark-700',
      bottom:
        'bottom-full left-1/2 transform -translate-x-1/2 border-b border-r border-gray-900 dark:border-dark-700',
      left: 'left-full top-1/2 transform -translate-y-1/2 border-b border-l border-gray-900 dark:border-dark-700',
      right:
        'right-full top-1/2 transform -translate-y-1/2 border-t border-r border-gray-900 dark:border-dark-700',
    };

    return (
      <div
        ref={triggerRef}
        className="inline-block relative"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby={tooltipId}
      >
        {children}

        {isVisible && content && (
          <div
            ref={el => {
              if (typeof ref === 'function') {
                ref(el);
              } else if (ref) {
                ref.current = el;
              }
              tooltipRef.current = el;
            }}
            id={tooltipId}
            className={`absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-dark-700 rounded-lg shadow-sm whitespace-nowrap transition-opacity duration-200 ${positionClasses[position]} ${className}`}
            role="tooltip"
            {...props}
          >
            <div className="relative">
              {content}
              <div
                className={`absolute w-2 h-2 bg-gray-900 dark:bg-dark-700 rotate-45 ${arrowClasses[position]}`}
                aria-hidden="true"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
