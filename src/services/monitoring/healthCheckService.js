// src/services/healthCheckService.js
// This service provides client-side health check capabilities
// In a real application, these endpoints would be implemented on the backend

class HealthCheckService {
  constructor() {
    this.checks = [];
    this.status = 'unknown';
    this.lastCheck = null;
  }

  // Register a health check function
  registerCheck(name, checkFunction, options = {}) {
    this.checks.push({
      name,
      checkFunction,
      interval: options.interval || 30000, // 30 seconds default
      timeout: options.timeout || 5000, // 5 seconds default
      enabled: options.enabled !== false,
    });
  }

  // Perform all registered health checks
  async performHealthChecks() {
    const results = [];
    const startTime = Date.now();

    for (const check of this.checks) {
      if (!check.enabled) continue;

      try {
        const result = await this.executeCheck(check);
        results.push(result);
      } catch (error) {
        results.push({
          name: check.name,
          status: 'error',
          error: error.message,
          timestamp: Date.now(),
        });
      }
    }

    this.lastCheck = {
      timestamp: Date.now(),
      duration: Date.now() - startTime,
      results,
    };

    this.status = this.calculateOverallStatus(results);

    return {
      status: this.status,
      timestamp: Date.now(),
      checks: results,
      duration: Date.now() - startTime,
    };
  }

  // Execute a single health check with timeout
  async executeCheck(check) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error(`Health check ${check.name} timed out`));
      }, check.timeout);

      Promise.resolve(check.checkFunction())
        .then(result => {
          clearTimeout(timeoutId);
          resolve({
            name: check.name,
            status: result.status || 'ok',
            details: result.details || {},
            timestamp: Date.now(),
          });
        })
        .catch(error => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  }

  // Calculate overall health status from individual check results
  calculateOverallStatus(results) {
    if (results.some(r => r.status === 'error')) {
      return 'error';
    }
    if (results.some(r => r.status === 'warning')) {
      return 'warning';
    }
    return 'ok';
  }

  // Get system health information
  getSystemHealth() {
    return {
      status: this.status,
      timestamp: Date.now(),
      uptime: this.getUptime(),
      version: process.env.REACT_APP_VERSION || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: this.lastCheck ? this.lastCheck.results : [],
      details: {
        totalChecks: this.checks.length,
        enabledChecks: this.checks.filter(c => c.enabled).length,
        lastCheck: this.lastCheck,
      },
    };
  }

  // Get uptime in milliseconds
  getUptime() {
    if (!this.lastCheck) return 0;
    return Date.now() - this.lastCheck.timestamp;
  }

  // Get detailed health information
  getDetailedHealth() {
    return {
      ...this.getSystemHealth(),
      checks: this.checks.map(check => ({
        name: check.name,
        enabled: check.enabled,
        interval: check.interval,
        timeout: check.timeout,
      })),
      metrics: this.getFrontendMetrics(),
    };
  }

  // Get frontend-specific metrics
  getFrontendMetrics() {
    const performanceMetrics = {};

    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        performanceMetrics.navigation = {
          loadTime: perfData.loadEventEnd - perfData.fetchStart,
          domContentLoaded:
            perfData.domContentLoadedEventEnd - perfData.fetchStart,
          firstByte: perfData.responseStart - perfData.requestStart,
        };
      }
    }

    if ('memory' in performance) {
      performanceMetrics.memory = performance.memory;
    }

    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      hardwareConcurrency: navigator.hardwareConcurrency,
      deviceMemory: navigator.deviceMemory,
      performance: performanceMetrics,
      screen: {
        width: screen.width,
        height: screen.height,
        availWidth: screen.availWidth,
        availHeight: screen.availHeight,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
      },
    };
  }

  // Start periodic health checks
  startPeriodicChecks() {
    this.checks.forEach(check => {
      if (check.enabled) {
        setInterval(() => {
          this.executeCheck(check).catch(error => {
            console.error(`Health check ${check.name} failed:`, error);
          });
        }, check.interval);
      }
    });
  }

  // Add default health checks
  setupDefaultChecks() {
    // Check network connectivity
    this.registerCheck(
      'network',
      async () => {
        try {
          const response = await fetch('/health', {
            method: 'HEAD',
            cache: 'no-cache',
          });
          return {
            status: response.ok ? 'ok' : 'error',
            details: { statusCode: response.status },
          };
        } catch (error) {
          return {
            status: 'error',
            details: { error: error.message },
          };
        }
      },
      { interval: 15000 }
    ); // Every 15 seconds

    // Check API availability
    this.registerCheck(
      'api',
      async () => {
        try {
          const response = await fetch('/api/health', {
            method: 'GET',
            cache: 'no-cache',
          });
          const data = await response.json();
          return {
            status: data.status === 'healthy' ? 'ok' : 'error',
            details: data,
          };
        } catch (error) {
          return {
            status: 'error',
            details: { error: error.message },
          };
        }
      },
      { interval: 30000 }
    ); // Every 30 seconds

    // Check database connection (mock)
    this.registerCheck(
      'database',
      async () => {
        try {
          // In a real app, this would check actual database connection
          // For frontend, we'll just check if we can reach our backend
          const response = await fetch('/api/db-health', {
            method: 'GET',
            cache: 'no-cache',
          });
          return {
            status: response.ok ? 'ok' : 'error',
            details: { statusCode: response.status },
          };
        } catch (error) {
          return {
            status: 'error',
            details: { error: error.message },
          };
        }
      },
      { interval: 60000 }
    ); // Every minute
  }
}

// Create a singleton instance
const healthCheckService = new HealthCheckService();
healthCheckService.setupDefaultChecks();

export default healthCheckService;
