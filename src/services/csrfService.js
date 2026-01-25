/**
 * CSRF Protection Service
 * Implements Cross-Site Request Forgery protection for forms
 */

class CSRFService {
  constructor() {
    this.tokenName = 'csrf_token';
    this.token = this.generateToken();
  }

  /**
   * Generate a CSRF token
   * @returns {string} CSRF token
   */
  generateToken() {
    // Generate a random token using native browser Crypto API
    const randomBytes = new Uint8Array(32);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(randomBytes);
    } else {
      // Return a placeholder or empty string if crypto is not available (should not happen in modern browsers)
      console.error('Crypto API not available');
      return '';
    }
    
    // Convert to hex string
    return Array.from(randomBytes)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  /**
   * Get the current CSRF token
   * @returns {string} CSRF token
   */
  getToken() {
    if (!this.token) {
      this.token = this.generateToken();
    }
    return this.token;
  }

  /**
   * Validate a CSRF token
   * @param {string} token - Token to validate
   * @returns {boolean} True if token is valid
   */
  validateToken(token) {
    return token && token === this.token;
  }

  /**
   * Refresh the CSRF token
   * @returns {string} New CSRF token
   */
  refreshToken() {
    this.token = this.generateToken();
    return this.token;
  }

  /**
   * Get CSRF token header configuration for fetch requests
   * @returns {Object} Headers object with CSRF token
   */
  getHeaders() {
    return {
      'X-CSRF-Token': this.getToken(),
      'Content-Type': 'application/json',
    };
  }

  /**
   * Get CSRF token for form data
   * @returns {Object} Form data object with CSRF token
   */
  getFormData() {
    return {
      [this.tokenName]: this.getToken(),
    };
  }

  /**
   * Verify request has valid CSRF token
   * @param {Object} headers - Request headers
   * @param {Object} body - Request body (for form submissions)
   * @returns {boolean} True if request is valid
   */
  verifyRequest(headers, body) {
    // Check for token in header
    const headerToken = headers?.['X-CSRF-Token'] || headers?.['x-csrf-token'];
    
    // Check for token in body (for form submissions)
    const bodyToken = body?.[this.tokenName];
    
    // Validate either header or body token
    return this.validateToken(headerToken) || this.validateToken(bodyToken);
  }
}

// Export singleton instance
const csrfService = new CSRFService();

export default csrfService;