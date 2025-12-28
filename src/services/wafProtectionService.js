/**
 * WAF (Web Application Firewall) Protection Service
 * Deployment of Cloudflare/AWS WAF to protect sub-domains from SQL injection, 
 * DDoS attacks, and cross-site scripting (XSS).
 */

class WAFProtectionService {
  constructor() {
    this.rules = new Map();
    this.rateLimiting = new Map();
    this.blockedIPs = new Set();
    this.whitelistedIPs = new Set();
    this.protectedEndpoints = new Set();
    this.attackLogs = [];
    this.maxLogs = 1000; // Keep only the most recent logs
    this.monitoringInterval = null;
    
    // Initialize WAF rules
    this.initializeDefaultRules();
    
    // Start monitoring for suspicious activities
    this.startMonitoring();
  }

  /**
   * Initializes default WAF rules for common attacks
   */
  initializeDefaultRules() {
    // SQL Injection patterns
    this.rules.set('sql_injection', {
      id: 'sql_injection',
      pattern: /(\b(union|select|insert|delete|update|drop|create|alter|exec|execute|script)\b.*\b(from|where|table|database)\b)|('|--|;|--\s*\w)/gi,
      severity: 'high',
      action: 'block',
      description: 'SQL Injection attempts'
    });

    // XSS patterns
    this.rules.set('xss', {
      id: 'xss',
      pattern: /(<script|javascript:|on\w+\s*=|<iframe|<object|<embed|data:text\/)/gi,
      severity: 'high',
      action: 'block',
      description: 'Cross-Site Scripting attempts'
    });

    // Path traversal patterns
    this.rules.set('path_traversal', {
      id: 'path_traversal',
      pattern: /(\.\.\/|\.\.\\|%2e%2e%2f|%2e%2e%5c|\.\.\%2f)/gi,
      severity: 'high',
      action: 'block',
      description: 'Path traversal attempts'
    });

    // Command injection patterns
    this.rules.set('command_injection', {
      id: 'command_injection',
      pattern: /(;|\||`|\\\$|\n|\r|\0|\x00)/gi,
      severity: 'high',
      action: 'block',
      description: 'Command injection attempts'
    });

    // DDoS protection rules
    this.rules.set('ddos_protection', {
      id: 'ddos_protection',
      pattern: null, // DDoS is handled by rate limiting
      severity: 'medium',
      action: 'rate_limit',
      description: 'DDoS protection through rate limiting'
    });

    // Add more security rules as needed
  }

  /**
   * Starts monitoring for suspicious activities
   */
  startMonitoring() {
    // Clean up old logs periodically
    this.monitoringInterval = setInterval(() => {
      this.cleanupOldLogs();
    }, 5 * 60 * 1000); // Every 5 minutes
  }

  /**
   * Adds an IP to the whitelist
   * @param {string} ip - IP address to whitelist
   */
  addToWhitelist(ip) {
    this.whitelistedIPs.add(ip);
    console.log(`IP ${ip} added to whitelist`);
  }

  /**
   * Adds an IP to the blacklist
   * @param {string} ip - IP address to blacklist
   */
  addToBlacklist(ip) {
    this.blockedIPs.add(ip);
    console.log(`IP ${ip} added to blacklist`);
  }

  /**
   * Checks if an IP is whitelisted
   * @param {string} ip - IP address to check
   * @returns {boolean} True if whitelisted
   */
  isWhitelisted(ip) {
    return this.whitelistedIPs.has(ip);
  }

  /**
   * Checks if an IP is blacklisted
   * @param {string} ip - IP address to check
   * @returns {boolean} True if blacklisted
   */
  isBlacklisted(ip) {
    return this.blockedIPs.has(ip);
  }

  /**
   * Validates request against WAF rules
   * @param {Object} request - Request object with headers, body, query, etc.
   * @returns {Object} Validation result
   */
  validateRequest(request) {
    const result = {
      allowed: true,
      violations: [],
      action: 'allow',
      matchedRules: []
    };

    // Check if IP is blacklisted
    const clientIP = this.getClientIP(request);
    if (this.isBlacklisted(clientIP)) {
      result.allowed = false;
      result.action = 'block';
      result.violations.push({
        ruleId: 'ip_blacklist',
        severity: 'high',
        message: `IP ${clientIP} is blacklisted`
      });
      return result;
    }

    // Check if IP is whitelisted
    if (this.isWhitelisted(clientIP)) {
      return result; // Allow whitelisted IPs without further checks
    }

    // Check for rate limiting
    const rateLimitResult = this.checkRateLimit(clientIP, request);
    if (!rateLimitResult.allowed) {
      result.allowed = false;
      result.action = rateLimitResult.action;
      result.violations.push(rateLimitResult.violation);
    }

    // Check request body for malicious patterns
    if (request.body) {
      const bodyViolations = this.checkForViolations(JSON.stringify(request.body));
      result.violations.push(...bodyViolations);
      if (bodyViolations.length > 0) {
        result.allowed = false;
        result.action = 'block';
      }
    }

    // Check query parameters for malicious patterns
    if (request.query) {
      const queryViolations = this.checkForViolations(JSON.stringify(request.query));
      result.violations.push(...queryViolations);
      if (queryViolations.length > 0) {
        result.allowed = false;
        result.action = 'block';
      }
    }

    // Check headers for malicious patterns
    if (request.headers) {
      const headerViolations = this.checkForViolations(JSON.stringify(request.headers));
      result.violations.push(...headerViolations);
      if (headerViolations.length > 0) {
        result.allowed = false;
        result.action = 'block';
      }
    }

    // Check URL for malicious patterns
    if (request.url) {
      const urlViolations = this.checkForViolations(request.url);
      result.violations.push(...urlViolations);
      if (urlViolations.length > 0) {
        result.allowed = false;
        result.action = 'block';
      }
    }

    // Update matched rules
    result.matchedRules = result.violations.map(v => v.ruleId);

    // Log the violation if any
    if (!result.allowed) {
      this.logAttack(clientIP, request, result);
    }

    return result;
  }

  /**
   * Checks for violations in the provided data
   * @param {string} data - Data to check for violations
   * @returns {Array} Array of violations found
   */
  checkForViolations(data) {
    const violations = [];

    for (const [ruleId, rule] of this.rules) {
      // Skip DDoS rule as it's handled separately
      if (ruleId === 'ddos_protection') continue;

      if (rule.pattern && rule.pattern.test(data)) {
        violations.push({
          ruleId,
          severity: rule.severity,
          message: `Matched ${rule.description}: ${data.substring(0, 100)}...`
        });
      }
    }

    return violations;
  }

  /**
   * Checks rate limiting for the given IP and request
   * @param {string} ip - Client IP address
   * @param {Object} request - Request object
   * @returns {Object} Rate limit check result
   */
  checkRateLimit(ip, request) {
    const result = {
      allowed: true,
      action: 'allow',
      violation: null
    };

    // Get or create rate limiting record for this IP
    if (!this.rateLimiting.has(ip)) {
      this.rateLimiting.set(ip, {
        requests: [],
        lastReset: Date.now()
      });
    }

    const ipRecord = this.rateLimiting.get(ip);
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute window

    // Clean up old requests outside the window
    ipRecord.requests = ipRecord.requests.filter(req => now - req.timestamp < windowMs);

    // Add current request
    ipRecord.requests.push({
      timestamp: now,
      url: request.url,
      method: request.method
    });

    // Define rate limits based on request type
    const maxRequests = this.getMaxRequestsForEndpoint(request.url);
    
    if (ipRecord.requests.length > maxRequests) {
      result.allowed = false;
      result.action = 'rate_limit';
      result.violation = {
        ruleId: 'rate_limiting',
        severity: 'medium',
        message: `Rate limit exceeded: ${ipRecord.requests.length} requests in ${windowMs/1000} seconds (max: ${maxRequests})`
      };

      // Temporarily block the IP for 5 minutes
      this.addToBlacklist(ip);
      setTimeout(() => {
        this.blockedIPs.delete(ip);
        console.log(`IP ${ip} removed from temporary block`);
      }, 5 * 60 * 1000); // 5 minutes
    }

    return result;
  }

  /**
   * Gets the maximum number of requests allowed for an endpoint
   * @param {string} url - URL to check
   * @returns {number} Maximum requests allowed
   */
  getMaxRequestsForEndpoint(url) {
    // Different endpoints may have different rate limits
    if (url.includes('/api/auth') || url.includes('/login')) {
      return 5; // Lower limit for authentication endpoints
    } else if (url.includes('/api/')) {
      return 100; // Standard API rate limit
    } else {
      return 200; // Standard web page rate limit
    }
  }

  /**
   * Gets client IP from request object
   * @param {Object} request - Request object
   * @returns {string} Client IP address
   */
  getClientIP(request) {
    // Try to get IP from various headers (in case of proxies/load balancers)
    return request.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
           request.headers['x-real-ip']?.split(',')[0]?.trim() ||
           request.connection?.remoteAddress ||
           request.socket?.remoteAddress ||
           request.connection?.socket?.remoteAddress ||
           request.ip ||
           'unknown';
  }

  /**
   * Logs attack attempt
   * @param {string} ip - Attacking IP
   * @param {Object} request - Request object
   * @param {Object} result - Validation result
   */
  logAttack(ip, request, result) {
    const attackLog = {
      timestamp: new Date().toISOString(),
      ip,
      url: request.url,
      method: request.method,
      userAgent: request.headers?.['user-agent'],
      violations: result.violations,
      matchedRules: result.matchedRules
    };

    this.attackLogs.push(attackLog);

    // Keep only the most recent logs
    if (this.attackLogs.length > this.maxLogs) {
      this.attackLogs.shift();
    }

    console.log(`WAF BLOCKED REQUEST: ${ip} -> ${request.url}`, attackLog);
  }

  /**
   * Cleans up old logs to prevent memory bloat
   */
  cleanupOldLogs() {
    // Keep only the most recent logs
    if (this.attackLogs.length > this.maxLogs) {
      this.attackLogs = this.attackLogs.slice(-this.maxLogs);
    }

    // Clean up old rate limiting records (older than 1 hour)
    const now = Date.now();
    const cleanupThreshold = 60 * 60 * 1000; // 1 hour

    for (const [ip, record] of this.rateLimiting) {
      if (now - record.lastReset > cleanupThreshold && record.requests.length === 0) {
        this.rateLimiting.delete(ip);
      }
    }
  }

  /**
   * Gets attack statistics
   * @returns {Object} Attack statistics
   */
  getAttackStats() {
    const stats = {
      totalBlocked: this.attackLogs.length,
      recentBlocked: this.attackLogs.slice(-50).length, // Last 50 attacks
      bySeverity: {
        high: 0,
        medium: 0,
        low: 0
      },
      byRule: {},
      topAttackingIPs: {},
      totalWhitelisted: this.whitelistedIPs.size,
      totalBlacklisted: this.blockedIPs.size
    };

    // Count by severity
    for (const log of this.attackLogs) {
      for (const violation of log.violations) {
        if (violation.severity) {
          stats.bySeverity[violation.severity]++;
        }
      }
    }

    // Count by rule
    for (const log of this.attackLogs) {
      for (const ruleId of log.matchedRules) {
        stats.byRule[ruleId] = (stats.byRule[ruleId] || 0) + 1;
      }
    }

    // Count top attacking IPs
    for (const log of this.attackLogs) {
      stats.topAttackingIPs[log.ip] = (stats.topAttackingIPs[log.ip] || 0) + 1;
    }

    // Sort top IPs by count
    const sortedIPs = Object.entries(stats.topAttackingIPs)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10); // Top 10
    
    stats.topAttackingIPs = Object.fromEntries(sortedIPs);

    return stats;
  }

  /**
   * Gets WAF configuration summary
   * @returns {Object} Configuration summary
   */
  getConfigSummary() {
    return {
      rulesCount: this.rules.size,
      whitelistedIPs: Array.from(this.whitelistedIPs),
      blacklistedIPs: Array.from(this.blockedIPs),
      protectedEndpoints: Array.from(this.protectedEndpoints),
      rateLimitingEnabled: true,
      monitoringActive: !!this.monitoringInterval
    };
  }

  /**
   * Adds a custom rule to the WAF
   * @param {string} id - Rule ID
   * @param {Object} rule - Rule configuration
   */
  addCustomRule(id, rule) {
    this.rules.set(id, {
      id,
      pattern: rule.pattern,
      severity: rule.severity || 'medium',
      action: rule.action || 'block',
      description: rule.description || 'Custom rule'
    });
  }

  /**
   * Removes a rule from the WAF
   * @param {string} id - Rule ID to remove
   */
  removeRule(id) {
    this.rules.delete(id);
  }

  /**
   * Protects a specific endpoint
   * @param {string} endpoint - Endpoint to protect
   */
  protectEndpoint(endpoint) {
    this.protectedEndpoints.add(endpoint);
  }

  /**
   * Middleware function for Express.js integration
   * @returns {Function} Express middleware function
   */
  getMiddleware() {
    return (req, res, next) => {
      const validationResult = this.validateRequest({
        url: req.url,
        method: req.method,
        headers: req.headers,
        body: req.body,
        query: req.query,
        connection: req.connection,
        socket: req.socket,
        ip: req.ip
      });

      if (!validationResult.allowed) {
        // Log the blocked request
        console.log(`WAF BLOCKED REQUEST: ${validationResult.violations.map(v => v.message).join(', ')}`);

        // Return 403 Forbidden for blocked requests
        return res.status(403).json({
          error: 'Request blocked by WAF',
          violations: validationResult.violations,
          timestamp: new Date().toISOString()
        });
      }

      // Continue with the request if allowed
      next();
    };
  }

  /**
   * Shuts down the WAF service gracefully
   */
  shutdown() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    
    console.log('WAF Protection service shut down gracefully');
  }
}

// Export singleton instance
const wafProtectionService = new WAFProtectionService();

// Add cleanup on process termination
process.on('SIGINT', () => {
  wafProtectionService.shutdown();
  process.exit(0);
});

process.on('SIGTERM', () => {
  wafProtectionService.shutdown();
  process.exit(0);
});

export default wafProtectionService;