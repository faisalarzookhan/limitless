import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * ResponsiveToolkit Component
 * A flexible component that automatically adjusts its screen ratio to match its parent container's dimensions
 * while maintaining proper aspect ratio scaling and responsive design.
 */
const ResponsiveToolkit = ({ 
  children, 
  aspectRatio = 'auto', 
  className = '', 
  style = {},
  onResize = null,
  maxScale = 2,
  minScale = 0.5
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);

  // Calculate dimensions and scale when the component mounts or resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && contentRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
        
        setDimensions({ width: containerWidth, height: containerHeight });
        
        // Calculate scale based on aspect ratio
        let newScale = 1;
        
        if (aspectRatio !== 'auto') {
          const [widthRatio, heightRatio] = aspectRatio.split(':').map(Number);
          const aspectRatioValue = widthRatio / heightRatio;
          
          const contentAspectRatio = contentRect.width / contentRect.height;
          
          if (contentAspectRatio > aspectRatioValue) {
            // Container is wider than content aspect ratio - scale based on height
            newScale = containerHeight / (contentRect.height * (widthRatio / heightRatio));
          } else {
            // Container is taller than content aspect ratio - scale based on width
            newScale = containerWidth / contentRect.width;
          }
        } else {
          // Auto aspect ratio - scale based on the smaller dimension
          const widthScale = containerWidth / contentRect.width;
          const heightScale = containerHeight / contentRect.height;
          newScale = Math.min(widthScale, heightScale);
        }
        
        // Apply min/max scale constraints
        newScale = Math.max(minScale, Math.min(maxScale, newScale));
        
        setScale(newScale);
        
        // Call onResize callback if provided
        if (onResize) {
          onResize({ width: containerWidth, height: containerHeight, scale: newScale });
        }
      }
    };

    // Initial calculation
    updateDimensions();

    // Add resize observer for better performance than window resize
    let resizeObserver;
    if (containerRef.current) {
      resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(containerRef.current);
    }

    // Fallback to window resize for broader browser support
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [aspectRatio, maxScale, minScale, onResize]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      <div
        ref={contentRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Predefined aspect ratio presets
ResponsiveToolkit.Presets = {
  SQUARE: '1:1',
  WIDESCREEN: '16:9',
  STANDARD: '4:3',
  TALL: '9:16',
  ULTRAWIDE: '21:9',
  AUTO: 'auto'
};

// Example usage component with demo elements
const ResponsiveToolkitDemo = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Responsive Toolkit Component
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Demo 1: Square aspect ratio */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Square Aspect Ratio (1:1)</h2>
          <div className="w-full h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded">
            <ResponsiveToolkit aspectRatio={ResponsiveToolkit.Presets.SQUARE}>
              <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                1:1 Content
              </div>
            </ResponsiveToolkit>
          </div>
        </div>
        
        {/* Demo 2: Widescreen aspect ratio */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Widescreen Aspect Ratio (16:9)</h2>
          <div className="w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded">
            <ResponsiveToolkit aspectRatio={ResponsiveToolkit.Presets.WIDESCREEN}>
              <div className="w-64 h-36 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                16:9 Content
              </div>
            </ResponsiveToolkit>
          </div>
        </div>
        
        {/* Demo 3: Auto aspect ratio */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Auto Aspect Ratio</h2>
          <div className="w-full h-40 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded">
            <ResponsiveToolkit aspectRatio={ResponsiveToolkit.Presets.AUTO}>
              <div className="w-32 h-24 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                Auto Fit
              </div>
            </ResponsiveToolkit>
          </div>
        </div>
        
        {/* Demo 4: Custom aspect ratio */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Custom Aspect Ratio (3:2)</h2>
          <div className="w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded">
            <ResponsiveToolkit aspectRatio="3:2">
              <div className="w-48 h-32 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold">
                3:2 Content
              </div>
            </ResponsiveToolkit>
          </div>
        </div>
      </div>
      
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">How It Works</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Automatically adjusts to match parent container dimensions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Maintains proper aspect ratio scaling</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Responsive to different screen sizes and viewport changes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Prevents distortion and overflow issues</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Supports multiple aspect ratio presets</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveToolkit;
export { ResponsiveToolkitDemo };