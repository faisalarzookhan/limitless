/**
 * Rate Limiting Service
 * Implements request rate limiting to prevent abuse
 */

class RateLimitService {
  constructor() {
    this.requests = new Map(); // Store request counts by IP/identifier
    this.limits = {
      contactForm: {
        maxRequests: 5,     // Max 5 requests
        windowMs: 900000,   // Per 15 minutes (900000 ms)
      },
      apiCalls: {
        maxRequests: 100,   // Max 100 requests
        windowMs: 3600000,  // Per hour (3600000 ms)
      },
      loginAttempts: {
        maxRequests: 5,     // Max 5 attempts
        windowMs: 900000,   // Per 15 minutes
      }
    };
  }

  /**
   * Check if a request should be allowed based on rate limits
   * @param {string} identifier - Unique identifier for the user/client (e.g., IP address)
   * @param {string} limitType - Type of limit (contactForm, apiCalls, etc.)
   * @returns {Object} Object with allowed (boolean) and resetTime (timestamp)
   */
  checkLimit(identifier, limitType = 'contactForm') {
    const limitConfig = this.limits[limitType];
    if (!limitConfig) {
      throw new Error(`Unknown rate limit type: ${limitType}`);
    }

    const now = Date.now();
    const key = `${identifier}:${limitType}`;
    
    if (!this.requests.has(key)) {
      // First request from this identifier
      this.requests.set(key, {
        count: 1,
        resetTime: now + limitConfig.windowMs,
      });
      return { allowed: true, resetTime: now + limitConfig.windowMs };
    }

    const requestInfo = this.requests.get(key);
    
    // Check if the window has expired
    if (now > requestInfo.resetTime) {
      // Reset the counter
      this.requests.set(key, {
        count: 1,
        resetTime: now + limitConfig.windowMs,
      });
      return { allowed: true, resetTime: now + limitConfig.windowMs };
    }

    // Check if limit is exceeded
    if (requestInfo.count >= limitConfig.maxRequests) {
      return { 
        allowed: false, 
        resetTime: requestInfo.resetTime,
        retryAfter: requestInfo.resetTime - now
      };
    }

    // Increment the counter
    this.requests.set(key, {
      count: requestInfo.count + 1,
      resetTime: requestInfo.resetTime,
    });

    return { allowed: true, resetTime: requestInfo.resetTime };
  }

  /**
   * Get rate limit status for an identifier
   * @param {string} identifier - Unique identifier for the user/client
   * @param {string} limitType - Type of limit
   * @returns {Object} Rate limit status information
   */
  getStatus(identifier, limitType = 'contactForm') {
    const limitConfig = this.limits[limitType];
    if (!limitConfig) {
      throw new Error(`Unknown rate limit type: ${limitType}`);
    }

    const key = `${identifier}:${limitType}`;
    const requestInfo = this.requests.get(key);

    if (!requestInfo) {
      return {
        limit: limitConfig.maxRequests,
        current: 0,
        remaining: limitConfig.maxRequests,
        resetTime: Date.now() + limitConfig.windowMs,
        isLimited: false,
      };
    }

    const now = Date.now();
    const isExpired = now > requestInfo.resetTime;

    if (isExpired) {
      return {
        limit: limitConfig.maxRequests,
        current: 0,
        remaining: limitConfig.maxRequests,
        resetTime: Date.now() + limitConfig.windowMs,
        isLimited: false,
      };
    }

    const remaining = Math.max(0, limitConfig.maxRequests - requestInfo.count);

    return {
      limit: limitConfig.maxRequests,
      current: isExpired ? 0 : requestInfo.count,
      remaining,
      resetTime: requestInfo.resetTime,
      isLimited: remaining <= 0,
    };
  }

  /**
   * Clear expired entries to prevent memory leaks
   */
  clearExpired() {
    const now = Date.now();
    for (const [key, requestInfo] of this.requests.entries()) {
      if (now > requestInfo.resetTime) {
        this.requests.delete(key);
      }
    }
  }

  /**
   * Get all rate limit types
   * @returns {Array} Array of rate limit type names
   */
  getLimitTypes() {
    return Object.keys(this.limits);
  }

  /**
   * Update rate limit configuration
   * @param {string} limitType - Type of limit to update
   * @param {Object} config - New configuration {maxRequests, windowMs}
   */
  updateLimit(limitType, config) {
    if (!this.limits[limitType]) {
      throw new Error(`Unknown rate limit type: ${limitType}`);
    }
    
    if (typeof config.maxRequests !== 'number' || typeof config.windowMs !== 'number') {
      throw new Error('Configuration must include maxRequests and windowMs as numbers');
    }

    this.limits[limitType] = config;
  }
}

// Export singleton instance
const rateLimitService = new RateLimitService();

// Clear expired entries periodically to prevent memory leaks
setInterval(() => {
  rateLimitService.clearExpired();
}, 300000); // Clear every 5 minutes

export default rateLimitService;