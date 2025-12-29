import React, { useState, useEffect } from 'react';

const RoyalGoldProgressBar = ({
  value = 0,
  size = 200,
  strokeWidth = 12,
  label = 'Score',
  showPercentage = true,
  animationDuration = 1000,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [animated, setAnimated] = useState(false);

  // Calculate the radius and circumference for the SVG circle
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  // Animate the progress bar on mount
  useEffect(() => {
    if (!animated) {
      const timer = setTimeout(() => {
        setCurrentValue(value);
        setAnimated(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [value, animated]);

  // Smooth animation effect
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentValue(value);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [value, animated]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Background circle */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient-bg)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeOpacity="0.2"
          />

          {/* Progress circle with gradient */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (currentValue / 100) * circumference
            }
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            <linearGradient
              id="gradient-bg"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#002366" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {showPercentage && (
            <div className="text-3xl font-bold text-yellow-500">
              {Math.round(currentValue)}%
            </div>
          )}
          <div className="text-sm font-medium text-gray-700 mt-1">{label}</div>
        </div>
      </div>

      {/* Animated progress indicator */}
      <div className="mt-4 w-full max-w-xs">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>0%</span>
          <span>100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-blue-600 via-yellow-500 to-yellow-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${currentValue}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Component for multiple progress bars in a row
const RoyalGoldProgressRow = ({ metrics }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-6">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-center">
          <RoyalGoldProgressBar
            value={metric.value}
            size={120}
            label={metric.label}
            showPercentage={true}
          />
          <div className="mt-4 text-center">
            <div className="text-sm font-medium text-gray-700">
              {metric.label}
            </div>
            <div className="text-xs text-gray-500">{metric.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Animated progress bar with additional visual effects
const AnimatedRoyalGoldProgressBar = ({ value, label, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-yellow-50 border border-yellow-200 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-4 md:mb-0 md:pr-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{label}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="flex-1 flex justify-center">
          <RoyalGoldProgressBar
            value={value}
            size={100}
            strokeWidth={8}
            label=""
            showPercentage={true}
          />
        </div>
      </div>
    </div>
  );
};

export {
  RoyalGoldProgressBar,
  RoyalGoldProgressRow,
  AnimatedRoyalGoldProgressBar,
};
