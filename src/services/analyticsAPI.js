// Enhanced Analytics API Service for Limitless Infotech Solution
// Provides secure endpoints for collecting and managing analytics data

const ANALYTICS_API_BASE_URL = import.meta.env.VITE_ANALYTICS_API_URL || 'http://localhost:5000/api/analytics';

class AnalyticsAPI {
  constructor() {
    this.baseURL = ANALYTICS_API_BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
    this.timeout = 10000; // 10 seconds timeout
  }

  // Generic request method with error handling
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout. Please try again.');
      }
      
      console.error('Analytics API error:', error);
      throw error;
    }
  }

  // Track page view
  async trackPageView(data) {
    const payload = {
      ...data,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      screen: {
        width: screen.width,
        height: screen.height,
      },
    };

    return this.request('/pageviews', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Track custom event
  async trackEvent(eventName, properties = {}) {
    const payload = {
      eventName,
      properties,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer,
    };

    return this.request('/events', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Track user interaction (clicks, scrolls, etc.)
  async trackInteraction(interactionType, elementData = {}) {
    const payload = {
      interactionType,
      elementData,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer,
    };

    return this.request('/interactions', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Track form submission
  async trackFormSubmission(formId, formData, success = true) {
    const payload = {
      formId,
      formData: this.sanitizeFormData(formData),
      success,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer,
    };

    return this.request('/form-submissions', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Track conversion
  async trackConversion(conversionName, value = 0, currency = 'USD', properties = {}) {
    const payload = {
      conversionName,
      value,
      currency,
      properties,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer,
    };

    return this.request('/conversions', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Get user preferences
  async getUserPreferences(userId) {
    return this.request(`/users/${userId}/preferences`);
  }

  // Update user preferences
  async updateUserPreferences(userId, preferences) {
    return this.request(`/users/${userId}/preferences`, {
      method: 'PUT',
      body: JSON.stringify(preferences),
    });
  }

  // Get analytics dashboard data
  async getAnalyticsData(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    const queryString = params ? `?${params}` : '';
    
    return this.request(`/dashboard${queryString}`);
  }

  // Get comprehensive analytics dashboard data
  async getComprehensiveDashboardData(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    const queryString = params ? `?${params}` : '';
    
    return this.request(`/dashboard/comprehensive${queryString}`);
  }

  // Get page views data
  async getPageViewsData(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    const queryString = params ? `?${params}` : '';
    
    return this.request(`/pageviews/data${queryString}`);
  }

  // Get events data
  async getEventsData(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    const queryString = params ? `?${params}` : '';
    
    return this.request(`/events/data${queryString}`);
  }

  // Get conversion data
  async getConversionsData(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    const queryString = params ? `?${params}` : '';
    
    return this.request(`/conversions/data${queryString}`);
  }

  // Get top pages
  async getTopPages(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    const queryString = params ? `?${params}` : '';
    
    return this.request(`/dashboard/top-pages${queryString}`);
  }

  // Get top events
  async getTopEvents(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    const queryString = params ? `?${params}` : '';
    
    return this.request(`/dashboard/top-events${queryString}`);
  }

  // Sanitize form data to remove sensitive information
  sanitizeFormData(formData) {
    const sanitized = { ...formData };
    
    // Remove sensitive fields
    const sensitiveFields = ['password', 'credit_card', 'ssn', 'phone', 'email'];
    
    sensitiveFields.forEach(field => {
      if (sanitized[field]) {
        delete sanitized[field];
      }
    });
    
    return sanitized;
  }

  // Get session data
  async getSessionData(sessionId) {
    return this.request(`/sessions/${sessionId}`);
  }

  // Track session start
  async trackSessionStart(sessionData) {
    const payload = {
      ...sessionData,
      startTime: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    };

    return this.request('/sessions', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}

// Create and export a singleton instance
export const analyticsAPI = new AnalyticsAPI();

// Export individual methods for direct use
export const {
  trackPageView,
  trackEvent,
  trackInteraction,
  trackFormSubmission,
  trackConversion,
  getUserPreferences,
  updateUserPreferences,
  getAnalyticsData,
  getSessionData,
  trackSessionStart,
} = analyticsAPI;

export default analyticsAPI;