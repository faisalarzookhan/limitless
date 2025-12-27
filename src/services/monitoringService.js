// src/services/monitoringService.js
import { getPerformanceMetrics } from '../utils/performance';

class MonitoringService {
  constructor() {
    this.metrics = {
      pageLoadTime: null,
      firstContentfulPaint: null,
      largestContentfulPaint: null,
      cumulativeLayoutShift: null,
      firstInputDelay: null,
      errorCount: 0,
      apiResponseTime: [],
      memoryUsage: [],
      cpuUsage: []
    };
    
    this.performanceObserver = null;
    this.errorHandler = null;
    this.unhandledRejectionHandler = null;
    
    this.init();
  }

  init() {
    this.setupPerformanceMonitoring();
    this.setupErrorMonitoring();
    this.setupResourceMonitoring();
    this.startMetricsCollection();
  }

  setupPerformanceMonitoring() {
    // Performance Observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      this.performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.firstContentfulPaint = entry.startTime;
              this.reportMetric('FCP', entry.startTime);
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            this.metrics.largestContentfulPaint = entry.startTime;
            this.reportMetric('LCP', entry.startTime);
          } else if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              this.metrics.cumulativeLayoutShift += entry.value;
              this.reportMetric('CLS', this.metrics.cumulativeLayoutShift);
            }
          } else if (entry.entryType === 'first-input') {
            const firstInputDelay = entry.processingStart - entry.startTime;
            this.metrics.firstInputDelay = firstInputDelay;
            this.reportMetric('FID', firstInputDelay);
          }
        }
      });

      this.performanceObserver.observe({
        entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input']
      });
    }

    // Measure page load time
    if ('navigation' in performance) {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        this.metrics.pageLoadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
        this.reportMetric('PageLoadTime', this.metrics.pageLoadTime);
      }
    }
  }

  setupErrorMonitoring() {
    // Capture uncaught errors
    this.errorHandler = (event) => {
      this.metrics.errorCount++;
      this.reportError({
        type: 'javascript_error',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    };

    // Capture unhandled promise rejections
    this.unhandledRejectionHandler = (event) => {
      this.metrics.errorCount++;
      this.reportError({
        type: 'unhandled_promise_rejection',
        message: event.reason?.message || event.reason,
        stack: event.reason?.stack
      });
    };

    window.addEventListener('error', this.errorHandler);
    window.addEventListener('unhandledrejection', this.unhandledRejectionHandler);
  }

  setupResourceMonitoring() {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const responseTime = entry.responseEnd - entry.fetchStart;
            if (responseTime > 0) {
              this.metrics.apiResponseTime.push(responseTime);
              this.reportMetric('ResourceLoadTime', responseTime, {
                name: entry.name,
                type: entry.responseEnd - entry.fetchStart
              });
            }
          }
        }
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }

  startMetricsCollection() {
    // Periodically collect memory and CPU usage if available
    if ('memory' in performance) {
      setInterval(() => {
        if (performance.memory) {
          const memory = performance.memory;
          this.metrics.memoryUsage.push({
            used: memory.usedJSHeapSize,
            total: memory.totalJSHeapSize,
            limit: memory.jsHeapSizeLimit
          });
          
          this.reportMetric('MemoryUsage', memory.usedJSHeapSize);
        }
      }, 5000); // Every 5 seconds
    }
  }

  reportMetric(name, value, additionalData = {}) {
    const metricData = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...additionalData
    };

    // Send to monitoring backend (placeholder)
    this.sendToMonitoringBackend('metric', metricData);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Metric: ${name} = ${value}`, additionalData);
    }
  }

  reportError(errorData) {
    const errorReport = {
      ...errorData,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    // Send to error tracking backend (placeholder)
    this.sendToMonitoringBackend('error', errorReport);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorReport);
    }
  }

  async sendToMonitoringBackend(type, data) {
    try {
      // In a real implementation, this would send to a monitoring service like:
      // - Sentry
      // - DataDog
      // - New Relic
      // - Custom backend endpoint
      console.log(`[Monitoring] Sending ${type}:`, data);
      
      // Example API call:
      /*
      await fetch('/api/monitoring', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          data,
          timestamp: Date.now()
        })
      });
      */
    } catch (error) {
      console.error('Failed to send monitoring data:', error);
    }
  }

  getMetrics() {
    return { ...this.metrics };
  }

  getHealthStatus() {
    const now = Date.now();
    return {
      status: 'healthy',
      timestamp: now,
      uptime: performance.timeOrigin ? now - performance.timeOrigin : null,
      metrics: this.getMetrics(),
      version: process.env.REACT_APP_VERSION || '1.0.0'
    };
  }

  destroy() {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
    
    if (this.errorHandler) {
      window.removeEventListener('error', this.errorHandler);
    }
    
    if (this.unhandledRejectionHandler) {
      window.removeEventListener('unhandledrejection', this.unhandledRejectionHandler);
    }
  }
}

// Create a singleton instance
const monitoringService = new MonitoringService();

export default monitoringService;