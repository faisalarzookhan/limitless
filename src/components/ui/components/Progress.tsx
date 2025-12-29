import { forwardRef, HTMLAttributes } from 'react';
import { ProgressProps } from '../../../types';
import { generateId } from '../../../utils/accessibility';

const Progress = forwardRef<
  HTMLDivElement,
  ProgressProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      value,
      max = 100,
      className = '',
      variant = 'default',
      showPercentage = false,
      label,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const baseTrackClasses = 'w-full h-3 rounded-full overflow-hidden';
    const baseIndicatorClasses =
      'h-full rounded-full transition-all duration-500 ease-out';

    const variantClasses = {
      default: {
        track: 'bg-gray-200 dark:bg-dark-700',
        indicator: 'bg-gradient-primary',
      },
      success: {
        track: 'bg-gray-200 dark:bg-dark-700',
        indicator: 'bg-green-500',
      },
      warning: {
        track: 'bg-gray-200 dark:bg-dark-700',
        indicator: 'bg-yellow-500',
      },
      danger: {
        track: 'bg-gray-200 dark:bg-dark-700',
        indicator: 'bg-red-500',
      },
    };

    // Generate unique ID for accessibility
    const progressId = generateId('progress');

    return (
      <div ref={ref} className={className} {...props}>
        {label && (
          <div className="flex justify-between mb-2">
            <span
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
              id={`${progressId}-label`}
            >
              {label}
            </span>
            {showPercentage && (
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}

        <div
          id={progressId}
          className={`${baseTrackClasses} ${variantClasses[variant].track}`}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-labelledby={label ? `${progressId}-label` : undefined}
          aria-label={label ? undefined : props['aria-label'] || 'Progress'}
        >
          <div
            className={`${baseIndicatorClasses} ${variantClasses[variant].indicator}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
