// src/services/analyticsService.js
class AnalyticsService {
  constructor() {
    this.events = [];
    this.conversionMetrics = {
      auditorToSandbox: 0,
      sandboxToTrial: 0,
      trialToPurchase: 0,
      totalConversions: 0
    };
    this.userJourneyData = new Map();
  }

  // Track an event
  trackEvent(eventName, properties = {}) {
    const event = {
      id: this.generateId(),
      name: eventName,
      properties,
      timestamp: new Date().toISOString(),
      userId: properties.userId || 'anonymous'
    };

    this.events.push(event);
    
    // Process conversion metrics based on event
    this.processConversionMetrics(event);
    
    return event;
  }

  // Process conversion metrics based on events
  processConversionMetrics(event) {
    switch (event.name) {
      case 'auditor_completed':
        this.conversionMetrics.auditorToSandbox += 1;
        break;
      case 'sandbox_started':
        this.conversionMetrics.sandboxToTrial += 1;
        break;
      case 'trial_started':
        this.conversionMetrics.trialToPurchase += 1;
        break;
      case 'purchase_completed':
        this.conversionMetrics.totalConversions += 1;
        break;
      default:
        break;
    }
  }

  // Track user journey from auditor to sandbox
  trackUserJourney(userId, fromStage, toStage, properties = {}) {
    const journeyId = `${userId}_${fromStage}_to_${toStage}`;
    
    const journey = {
      id: journeyId,
      userId,
      fromStage,
      toStage,
      timestamp: new Date().toISOString(),
      duration: properties.duration || null,
      success: properties.success || false,
      properties
    };

    this.userJourneyData.set(journeyId, journey);
    
    // Track the conversion event
    this.trackEvent(`${fromStage}_to_${toStage}`, {
      ...properties,
      userId,
      fromStage,
      toStage
    });
    
    return journey;
  }

  // Track conversion velocity (time from first audit to sales inquiry)
  trackConversionVelocity(userId, startStage, endStage, startTime, endTime) {
    const duration = new Date(endTime) - new Date(startTime);
    
    this.trackEvent('conversion_velocity', {
      userId,
      startStage,
      endStage,
      durationMs: duration,
      durationFormatted: this.formatDuration(duration)
    });
    
    return duration;
  }

  // Track platform stickiness (time spent in sandbox)
  trackPlatformStickiness(userId, sandboxId, startTime, endTime) {
    const duration = new Date(endTime) - new Date(startTime);
    
    this.trackEvent('platform_stickiness', {
      userId,
      sandboxId,
      durationMs: duration,
      durationFormatted: this.formatDuration(duration)
    });
    
    return duration;
  }

  // Track lead quality (valid corporate domains)
  trackLeadQuality(email, domain, properties = {}) {
    const isValidCorporate = this.isValidCorporateDomain(domain);
    
    this.trackEvent('lead_quality', {
      email,
      domain,
      isValidCorporate,
      ...properties
    });
    
    return isValidCorporate;
  }

  // Validate if domain is corporate
  isValidCorporateDomain(domain) {
    const personalDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'icloud.com', 'aol.com', 'protonmail.com', 'tutanota.com'
    ];
    
    return !personalDomains.includes(domain.toLowerCase());
  }

  // Track brand equity growth
  trackBrandEquity(searchTerm, source, properties = {}) {
    this.trackEvent('brand_equity', {
      searchTerm,
      source,
      ...properties
    });
  }

  // Get conversion metrics
  getConversionMetrics() {
    const totalAuditors = this.events.filter(e => e.name === 'auditor_completed').length;
    const totalSandboxes = this.events.filter(e => e.name === 'sandbox_started').length;
    const totalTrials = this.events.filter(e => e.name === 'trial_started').length;
    const totalPurchases = this.events.filter(e => e.name === 'purchase_completed').length;

    return {
      ...this.conversionMetrics,
      auditorToSandboxRate: totalAuditors > 0 ? (this.conversionMetrics.auditorToSandbox / totalAuditors) * 100 : 0,
      sandboxToTrialRate: totalSandboxes > 0 ? (this.conversionMetrics.sandboxToTrial / totalSandboxes) * 100 : 0,
      trialToPurchaseRate: totalTrials > 0 ? (this.conversionMetrics.trialToPurchase / totalTrials) * 100 : 0,
      overallConversionRate: totalAuditors > 0 ? (this.conversionMetrics.totalConversions / totalAuditors) * 100 : 0
    };
  }

  // Get user journey analytics
  getUserJourneyAnalytics() {
    const journeys = Array.from(this.userJourneyData.values());
    
    const stageTransitions = journeys.reduce((acc, journey) => {
      const key = `${journey.fromStage}_to_${journey.toStage}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    
    const successRates = journeys.reduce((acc, journey) => {
      const key = `${journey.fromStage}_to_${journey.toStage}`;
      if (!acc[key]) {
        acc[key] = { total: 0, successful: 0 };
      }
      acc[key].total += 1;
      if (journey.success) {
        acc[key].successful += 1;
      }
      return acc;
    }, {});
    
    Object.keys(successRates).forEach(key => {
      successRates[key].rate = successRates[key].total > 0 
        ? (successRates[key].successful / successRates[key].total) * 100 
        : 0;
    });
    
    return {
      totalJourneys: journeys.length,
      stageTransitions,
      successRates
    };
  }

  // Get platform stickiness metrics
  getPlatformStickiness() {
    const stickinessEvents = this.events.filter(e => e.name === 'platform_stickiness');
    
    if (stickinessEvents.length === 0) {
      return {
        averageDuration: 0,
        averageDurationFormatted: '0s',
        totalSessions: 0
      };
    }
    
    const totalDuration = stickinessEvents.reduce((sum, event) => sum + event.properties.durationMs, 0);
    const averageDuration = totalDuration / stickinessEvents.length;
    
    return {
      averageDuration,
      averageDurationFormatted: this.formatDuration(averageDuration),
      totalSessions: stickinessEvents.length
    };
  }

  // Get lead quality metrics
  getLeadQuality() {
    const leadQualityEvents = this.events.filter(e => e.name === 'lead_quality');
    
    const totalLeads = leadQualityEvents.length;
    const corporateLeads = leadQualityEvents.filter(e => e.properties.isValidCorporate).length;
    const personalLeads = totalLeads - corporateLeads;
    
    return {
      totalLeads,
      corporateLeads,
      personalLeads,
      corporateLeadPercentage: totalLeads > 0 ? (corporateLeads / totalLeads) * 100 : 0
    };
  }

  // Format duration in milliseconds to human readable format
  formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  // Get all events for a user
  getUserEvents(userId) {
    return this.events.filter(event => event.userId === userId);
  }

  // Get events by name
  getEventsByName(eventName) {
    return this.events.filter(event => event.name === eventName);
  }

  // Get analytics dashboard data
  getDashboardData() {
    return {
      conversionMetrics: this.getConversionMetrics(),
      userJourneyAnalytics: this.getUserJourneyAnalytics(),
      platformStickiness: this.getPlatformStickiness(),
      leadQuality: this.getLeadQuality(),
      totalEvents: this.events.length,
      uniqueUsers: new Set(this.events.map(e => e.userId)).size
    };
  }

  // Generate unique ID
  generateId() {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
  }

  // Reset analytics (for testing)
  reset() {
    this.events = [];
    this.conversionMetrics = {
      auditorToSandbox: 0,
      sandboxToTrial: 0,
      trialToPurchase: 0,
      totalConversions: 0
    };
    this.userJourneyData = new Map();
  }
}

export default new AnalyticsService();