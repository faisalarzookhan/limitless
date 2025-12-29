// src/utils/performance.js

// Mock function to get performance metrics
export const getPerformanceMetrics = () => {
  // This is a mock implementation since we don't have actual performance APIs in this context
  // In a real application, this would interface with browser performance APIs
  return {
    navigation: {
      getEntriesByType: type => {
        // Mock navigation entries
        if (type === 'navigation') {
          return [
            {
              loadEventEnd: 1000,
              domContentLoadedEventEnd: 800,
              responseEnd: 500,
              loadTime: 1000,
            },
          ];
        }
        return [];
      },
    },
    paint: {
      getEntriesByType: type => {
        // Mock paint entries
        if (type === 'paint') {
          return [
            { name: 'first-paint', startTime: 100 },
            { name: 'first-contentful-paint', startTime: 200 },
          ];
        }
        return [];
      },
    },
    getEntriesByType: type => {
      if (type === 'largest-contentful-paint') {
        // Mock LCP entry
        return [{ startTime: 500 }];
      }
      return [];
    },
  };
};

// Function to get current performance entry
export const getLCP = () => {
  return new Promise(resolve => {
    // Check if PerformanceObserver is available
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve({
          startTime: lastEntry.startTime,
          size: lastEntry.size || 0,
          loadTime: lastEntry.loadTime || 0,
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } else {
      // Fallback for browsers that don't support PerformanceObserver
      resolve({
        startTime: Math.random() * 2500, // Random value between 0-2500ms
        size: 0,
        loadTime: 0,
      });
    }
  });
};

// Function to get FID (First Input Delay) - mock implementation
export const getFID = () => {
  return new Promise(resolve => {
    // Mock FID value
    resolve({
      processingStart: 0,
      processingEnd: Math.random() * 100, // Random value between 0-100ms
      loadTime: 0,
    });
  });
};

// Function to get CLS (Cumulative Layout Shift) - mock implementation
export const getCLS = () => {
  return new Promise(resolve => {
    // Mock CLS value
    resolve({
      value: Math.random() * 0.25, // Random value between 0-0.25
      entries: [],
    });
  });
};

// Performance observer utility
export const observePerformance = callback => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver(callback);
    observer.observe({
      entryTypes: ['navigation', 'paint', 'largest-contentful-paint'],
    });
    return observer;
  }
  return null;
};

export default {
  getPerformanceMetrics,
  getLCP,
  getFID,
  getCLS,
  observePerformance,
};
