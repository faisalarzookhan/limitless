// API Service Layer for Limitless Infotech Solution
// This provides a centralized way to handle all API calls

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_TIMEOUT = 30000; // 30 seconds

// API Client Configuration
class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
    this.timeout = API_TIMEOUT;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  // Set authorization token
  setAuthToken(token) {
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.headers['Authorization'];
    }
  }

  // Handle API errors
  handleError(error) {
    if (error.response) {
      // Server responded with error status
      const message = error.response.data?.message || error.response.statusText;
      throw new Error(message);
    } else if (error.request) {
      // Request made but no response
      throw new Error('No response from server. Please check your connection.');
    } else {
      // Error in request setup
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.headers,
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
        throw {
          response: {
            status: response.status,
            statusText: response.statusText,
            data: error,
          },
        };
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }

      return response;
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout. Please try again.');
      }
      return this.handleError(error);
    }
  }

  // HTTP Methods
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url, { method: 'GET' });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async patch(endpoint, data) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // Upload file with progress
  async upload(endpoint, formData, onProgress) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', e => {
        if (e.lengthComputable && onProgress) {
          const percentComplete = (e.loaded / e.total) * 100;
          onProgress(percentComplete);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(`Upload failed: ${xhr.statusText}`));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Upload failed due to network error'));
      });

      xhr.addEventListener('timeout', () => {
        reject(new Error('Upload timeout'));
      });

      xhr.open('POST', `${this.baseURL}${endpoint}`);

      // Add auth header if exists
      if (this.headers['Authorization']) {
        xhr.setRequestHeader('Authorization', this.headers['Authorization']);
      }

      xhr.timeout = this.timeout;
      xhr.send(formData);
    });
  }
}

// Create API client instance
const apiClient = new ApiClient();

// API Service Methods
export const api = {
  // ============= Contact & Inquiries =============
  contact: {
    // Submit contact form
    submitContactForm: data => apiClient.post('/contact/submit', data),

    // Submit client requirements form
    submitClientForm: data => apiClient.post('/contact/client-form', data),

    // Schedule consultation
    scheduleConsultation: data => apiClient.post('/contact/consultation', data),

    // Request demo
    requestDemo: data => apiClient.post('/contact/demo', data),

    // Subscribe to newsletter
    subscribe: email => apiClient.post('/contact/subscribe', { email }),
  },

  // ============= Portfolio =============
  portfolio: {
    // Get all projects
    getAll: params => apiClient.get('/portfolio', params),

    // Get project by ID
    getById: id => apiClient.get(`/portfolio/${id}`),

    // Get featured projects
    getFeatured: () => apiClient.get('/portfolio/featured'),

    // Filter projects
    filter: filters => apiClient.post('/portfolio/filter', filters),

    // Search projects
    search: query => apiClient.get('/portfolio/search', { q: query }),
  },

  // ============= Testimonials =============
  testimonials: {
    // Get all testimonials
    getAll: params => apiClient.get('/testimonials', params),

    // Get testimonial by ID
    getById: id => apiClient.get(`/testimonials/${id}`),

    // Submit testimonial
    submit: data => apiClient.post('/testimonials/submit', data),

    // Rate a project
    rateProject: (projectId, rating) =>
      apiClient.post(`/testimonials/rate/${projectId}`, { rating }),

    // Filter testimonials
    filter: filters => apiClient.post('/testimonials/filter', filters),
  },

  // ============= Blog/News =============
  blog: {
    // Get all posts
    getAll: params => apiClient.get('/blog', params),

    // Get post by slug
    getBySlug: slug => apiClient.get(`/blog/${slug}`),

    // Get categories
    getCategories: () => apiClient.get('/blog/categories'),

    // Get posts by category
    getByCategory: category => apiClient.get(`/blog/category/${category}`),

    // Search posts
    search: query => apiClient.get('/blog/search', { q: query }),

    // Get featured posts
    getFeatured: () => apiClient.get('/blog/featured'),

    // Add comment
    addComment: (postId, data) =>
      apiClient.post(`/blog/${postId}/comments`, data),

    // Like post
    likePost: postId => apiClient.post(`/blog/${postId}/like`),
  },

  // ============= Events =============
  events: {
    // Get all events
    getAll: params => apiClient.get('/events', params),

    // Get event by ID
    getById: id => apiClient.get(`/events/${id}`),

    // Get upcoming events
    getUpcoming: () => apiClient.get('/events/upcoming'),

    // Register for event
    register: (eventId, data) =>
      apiClient.post(`/events/${eventId}/register`, data),

    // Add comment to event
    addComment: (eventId, data) =>
      apiClient.post(`/events/${eventId}/comments`, data),

    // Get event comments
    getComments: eventId => apiClient.get(`/events/${eventId}/comments`),

    // RSVP to event
    rsvp: (eventId, status) =>
      apiClient.post(`/events/${eventId}/rsvp`, { status }),
  },

  // ============= Services =============
  services: {
    // Get all services
    getAll: () => apiClient.get('/services'),

    // Get service by ID
    getById: id => apiClient.get(`/services/${id}`),

    // Get add-on services
    getAddOns: () => apiClient.get('/services/add-ons'),

    // Get service pricing
    getPricing: serviceId => apiClient.get(`/services/${serviceId}/pricing`),

    // Request service quote
    requestQuote: data => apiClient.post('/services/quote', data),
  },

  // ============= Pricing =============
  pricing: {
    // Get pricing plans
    getPlans: () => apiClient.get('/pricing'),

    // Get plan by ID
    getPlanById: id => apiClient.get(`/pricing/${id}`),

    // Calculate custom quote
    calculateQuote: data => apiClient.post('/pricing/calculate', data),

    // Compare plans
    comparePlans: planIds => apiClient.post('/pricing/compare', { planIds }),
  },

  // ============= Authentication (Future) =============
  auth: {
    // Login
    login: credentials => apiClient.post('/auth/login', credentials),

    // Register
    register: userData => apiClient.post('/auth/register', userData),

    // Logout
    logout: () => apiClient.post('/auth/logout'),

    // Forgot password
    forgotPassword: email => apiClient.post('/auth/forgot-password', { email }),

    // Reset password
    resetPassword: (token, password) =>
      apiClient.post('/auth/reset-password', { token, password }),

    // Verify email
    verifyEmail: token => apiClient.post('/auth/verify-email', { token }),

    // Refresh token
    refreshToken: () => apiClient.post('/auth/refresh-token'),

    // Get current user
    getCurrentUser: () => apiClient.get('/auth/me'),

    // Update profile
    updateProfile: data => apiClient.put('/auth/profile', data),

    // Change password
    changePassword: data => apiClient.post('/auth/change-password', data),
  },

  // ============= Files/Media =============
  files: {
    // Upload file
    upload: (file, onProgress) => {
      const formData = new FormData();
      formData.append('file', file);
      return apiClient.upload('/files/upload', formData, onProgress);
    },

    // Upload multiple files
    uploadMultiple: (files, onProgress) => {
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));
      return apiClient.upload('/files/upload-multiple', formData, onProgress);
    },

    // Delete file
    delete: fileId => apiClient.delete(`/files/${fileId}`),
  },

  // ============= Analytics =============
  analytics: {
    // Track page view
    trackPageView: page => apiClient.post('/analytics/pageview', { page }),

    // Track event
    trackEvent: (event, data) =>
      apiClient.post('/analytics/event', { event, data }),

    // Get notification stats
    getNotificationStats: notificationId =>
      apiClient.get(`/analytics/notifications/${notificationId}/stats`),

    // Get notification performance metrics
    getNotificationPerformance: params =>
      apiClient.post('/analytics/notifications/performance', params),

    // Get site statistics
    getStats: () => apiClient.get('/analytics/stats'),
  },

  // ============= Reviews & Ratings =============
  reviews: {
    // Submit review
    submit: data => apiClient.post('/reviews/submit', data),

    // Get reviews for project
    getByProject: projectId => apiClient.get(`/reviews/project/${projectId}`),

    // Update review
    update: (reviewId, data) => apiClient.put(`/reviews/${reviewId}`, data),

    // Delete review
    delete: reviewId => apiClient.delete(`/reviews/${reviewId}`),

    // Like review
    like: reviewId => apiClient.post(`/reviews/${reviewId}/like`),

    // Report review
    report: (reviewId, reason) =>
      apiClient.post(`/reviews/${reviewId}/report`, { reason }),
  },

  // ============= Notifications =============
  notifications: {
    // Get all notifications
    getAll: () => apiClient.get('/notifications'),

    // Mark as read
    markAsRead: notificationId =>
      apiClient.patch(`/notifications/${notificationId}/read`),

    // Mark all as read
    markAllAsRead: () => apiClient.post('/notifications/read-all'),

    // Delete notification
    delete: notificationId =>
      apiClient.delete(`/notifications/${notificationId}`),

    // Get notification by ID
    getById: id => apiClient.get(`/notifications/${id}`),

    // Update notification status
    updateStatus: (id, data) =>
      apiClient.put(`/notifications/${id}/status`, data),

    // Get unread count
    getUnreadCount: () => apiClient.get('/notifications/unread-count'),

    // Get user preferences
    getUserPreferences: userId =>
      apiClient.get(`/notifications/preferences/${userId}`),

    // Set user preferences
    setUserPreferences: (userId, data) =>
      apiClient.post(`/notifications/preferences/${userId}`, data),

    // Send notification
    send: data => apiClient.post('/notifications', data),

    // Send email notification
    sendEmail: data => apiClient.post('/notifications/email', data),

    // Send WhatsApp notification
    sendWhatsApp: data => apiClient.post('/notifications/whatsapp', data),

    // Send multiple notifications
    sendMultiple: data => apiClient.post('/notifications/multiple', data),
  },

  // ============= Search =============
  search: {
    // Global search
    global: query => apiClient.get('/search', { q: query }),

    // Search with filters
    advanced: params => apiClient.post('/search/advanced', params),

    // Get search suggestions
    suggestions: query => apiClient.get('/search/suggestions', { q: query }),
  },

  // ============= Settings =============
  settings: {
    // Get site settings
    getSite: () => apiClient.get('/settings/site'),

    // Get user settings
    getUser: () => apiClient.get('/settings/user'),

    // Update user settings
    updateUser: data => apiClient.put('/settings/user', data),

    // Get privacy settings
    getPrivacy: () => apiClient.get('/settings/privacy'),

    // Update privacy settings
    updatePrivacy: data => apiClient.put('/settings/privacy', data),
  },
};

// Set auth token helper
export const setAuthToken = token => {
  apiClient.setAuthToken(token);
};

// Export API client for advanced usage
export { apiClient };

export default api;
