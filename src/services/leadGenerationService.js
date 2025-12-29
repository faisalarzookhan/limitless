// src/services/leadGenerationService.js
class LeadGenerationService {
  constructor() {
    this.visitors = new Map();
    this.leadData = new Map();
    this.consentRecords = new Map();
    this.pageTracking = new Map();
    this.sessionData = new Map();

    // Initialize tracking
    this.initializeTracking();
  }

  // Initialize tracking when service is created
  initializeTracking() {
    // Track page views
    this.trackPageView();

    // Listen for page changes
    this.setupPageChangeListener();

    // Track user interactions
    this.setupInteractionTracking();

    // Collect initial visitor metadata
    this.collectVisitorMetadata();
  }

  // Collect visitor metadata
  collectVisitorMetadata() {
    const visitorId = this.getOrCreateVisitorId();
    const timestamp = new Date().toISOString();

    const metadata = {
      id: visitorId,
      timestamp: timestamp,
      ip: this.getIPAddress(), // In a real implementation, this would come from server
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: {
        width: screen.width,
        height: screen.height,
        colorDepth: screen.colorDepth,
      },
      location: {
        latitude: null, // Would require user permission
        longitude: null, // Would require user permission
        city: null, // Would come from IP geolocation service
        country: null, // Would come from IP geolocation service
      },
      referrer: document.referrer,
      utm: this.getUTMParams(),
      initialPage: window.location.pathname,
      device: this.getDeviceType(),
      browser: this.getBrowserInfo(),
      sessionStart: timestamp,
      pageViews: 1,
      timeOnSite: 0,
      pagesVisited: [window.location.pathname],
      interests: [],
      consentGiven: false,
    };

    this.visitors.set(visitorId, metadata);
    this.sessionData.set(visitorId, {
      startTime: new Date().getTime(),
      lastActivity: new Date().getTime(),
      currentPage: window.location.pathname,
    });

    return metadata;
  }

  // Get or create a unique visitor ID
  getOrCreateVisitorId() {
    let visitorId = localStorage.getItem('limitless_visitor_id');

    if (!visitorId) {
      visitorId = this.generateId();
      localStorage.setItem('limitless_visitor_id', visitorId);
    }

    return visitorId;
  }

  // Generate unique ID
  generateId() {
    return (
      Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
    );
  }

  // Get IP address (in a real implementation, this would come from server)
  getIPAddress() {
    // In a real implementation, this would be retrieved from server-side
    // For now, returning a mock IP
    return '192.168.1.1';
  }

  // Get UTM parameters
  getUTMParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const utm = {};

    if (urlParams.get('utm_source')) utm.source = urlParams.get('utm_source');
    if (urlParams.get('utm_medium')) utm.medium = urlParams.get('utm_medium');
    if (urlParams.get('utm_campaign'))
      utm.campaign = urlParams.get('utm_campaign');
    if (urlParams.get('utm_term')) utm.term = urlParams.get('utm_term');
    if (urlParams.get('utm_content'))
      utm.content = urlParams.get('utm_content');

    return utm;
  }

  // Get device type
  getDeviceType() {
    const width = window.innerWidth;

    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  }

  // Get browser information
  getBrowserInfo() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Chrome') && !userAgent.includes('Edg'))
      return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome'))
      return 'Safari';
    if (userAgent.includes('Edg')) return 'Edge';
    if (userAgent.includes('MSIE') || userAgent.includes('Trident'))
      return 'Internet Explorer';

    return 'Unknown';
  }

  // Track page view
  trackPageView() {
    const visitorId = this.getOrCreateVisitorId();
    const currentPage = window.location.pathname;
    const timestamp = new Date().toISOString();

    // Update visitor metadata
    const visitor = this.visitors.get(visitorId);
    if (visitor) {
      visitor.pageViews += 1;
      visitor.pagesVisited.push(currentPage);

      // Update time on site
      const session = this.sessionData.get(visitorId);
      if (session) {
        visitor.timeOnSite = (new Date().getTime() - session.startTime) / 1000; // in seconds
      }
    }

    // Track page-specific data
    if (!this.pageTracking.has(currentPage)) {
      this.pageTracking.set(currentPage, {
        views: 0,
        avgTime: 0,
        visitors: [],
      });
    }

    const pageData = this.pageTracking.get(currentPage);
    pageData.views += 1;
    pageData.visitors.push({
      id: visitorId,
      timestamp,
      dwellTime: 0, // Will be calculated later
    });

    // Update session data
    const session = this.sessionData.get(visitorId);
    if (session) {
      session.lastActivity = new Date().getTime();
      session.currentPage = currentPage;
    }
  }

  // Set up page change listener
  setupPageChangeListener() {
    // For SPA applications using history API
    const originalPushState = history.pushState;
    history.pushState = (...args) => {
      originalPushState.apply(history, args);
      setTimeout(() => {
        this.trackPageView();
      }, 0);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', () => {
      setTimeout(() => {
        this.trackPageView();
      }, 0);
    });
  }

  // Set up interaction tracking
  setupInteractionTracking() {
    // Track clicks
    document.addEventListener('click', event => {
      this.trackInteraction('click', event);
    });

    // Track form interactions
    document.addEventListener('submit', event => {
      this.trackInteraction('form_submit', event);
    });

    // Track scroll depth
    let scrollTimeout;
    document.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.trackScrollDepth();
      }, 100);
    });

    // Track mouse movement (for engagement)
    let mouseMoveTimeout;
    document.addEventListener('mousemove', () => {
      clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        this.trackEngagement();
      }, 500);
    });
  }

  // Track user interactions
  trackInteraction(type, event) {
    const visitorId = this.getOrCreateVisitorId();
    const timestamp = new Date().toISOString();

    const interaction = {
      id: this.generateId(),
      visitorId,
      type,
      element: event.target.tagName,
      elementId: event.target.id,
      elementClass: event.target.className,
      page: window.location.pathname,
      timestamp,
      x: event.clientX,
      y: event.clientY,
    };

    // Store interaction data
    const visitor = this.visitors.get(visitorId);
    if (visitor) {
      visitor.interactions = visitor.interactions || [];
      visitor.interactions.push(interaction);
    }
  }

  // Track scroll depth
  trackScrollDepth() {
    const visitorId = this.getOrCreateVisitorId();
    const scrollPercent = Math.round(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    );

    const visitor = this.visitors.get(visitorId);
    if (visitor) {
      visitor.scrollDepth = Math.max(visitor.scrollDepth || 0, scrollPercent);
    }
  }

  // Track user engagement
  trackEngagement() {
    const visitorId = this.getOrCreateVisitorId();
    const now = new Date().getTime();

    const session = this.sessionData.get(visitorId);
    if (session) {
      session.lastActivity = now;
      session.engagementScore = (session.engagementScore || 0) + 1;
    }
  }

  // Get visitor data
  getVisitorData(visitorId) {
    return this.visitors.get(visitorId);
  }

  // Convert visitor to lead
  async convertToLead(visitorId, leadInfo) {
    const visitor = this.visitors.get(visitorId);
    if (!visitor) {
      throw new Error(`Visitor with ID ${visitorId} not found`);
    }

    // Create lead data
    const leadId = this.generateId();
    const leadData = {
      id: leadId,
      visitorId,
      name: leadInfo.name || null,
      email: leadInfo.email || null,
      company: leadInfo.company || null,
      phone: leadInfo.phone || null,
      jobTitle: leadInfo.jobTitle || null,
      industry: leadInfo.industry || null,
      companySize: leadInfo.companySize || null,
      budget: leadInfo.budget || null,
      timeline: leadInfo.timeline || null,
      requirements: leadInfo.requirements || [],
      source: 'website',
      status: 'new',
      priority: this.calculateLeadPriority(visitor, leadInfo),
      score: this.calculateLeadScore(visitor, leadInfo),
      metadata: { ...visitor },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      assignedTo: null,
      lastContacted: null,
      notes: [],
    };

    // Store lead data
    this.leadData.set(leadId, leadData);

    // Remove from visitors (they're now a lead)
    this.visitors.delete(visitorId);

    return leadData;
  }

  // Calculate lead priority
  calculateLeadPriority(visitor, leadInfo) {
    let priority = 1; // Low by default

    // Higher priority for corporate emails
    if (leadInfo.email && this.isCorporateEmail(leadInfo.email)) {
      priority += 2;
    }

    // Higher priority for larger companies
    if (leadInfo.companySize && leadInfo.companySize >= 100) {
      priority += 1;
    }

    // Higher priority for specific industries
    const highValueIndustries = [
      'Technology',
      'Finance',
      'Healthcare',
      'Manufacturing',
    ];
    if (highValueIndustries.includes(leadInfo.industry)) {
      priority += 1;
    }

    // Higher priority for higher budgets
    if (leadInfo.budget && leadInfo.budget >= 50000) {
      priority += 1;
    }

    // Higher priority for shorter timelines
    if (leadInfo.timeline && leadInfo.timeline === 'asap') {
      priority += 1;
    }

    // Higher priority for more engaged visitors
    if (visitor.timeOnSite > 300) {
      // More than 5 minutes
      priority += 1;
    }

    if (visitor.pageViews > 5) {
      priority += 1;
    }

    if (visitor.scrollDepth > 75) {
      // Scrolled more than 75%
      priority += 1;
    }

    // Priority levels: low (1-2), medium (3-4), high (5+)
    if (priority >= 5) return 'high';
    if (priority >= 3) return 'medium';
    return 'low';
  }

  // Calculate lead score
  calculateLeadScore(visitor, leadInfo) {
    let score = 0;

    // Base score from visitor engagement
    score += Math.min(50, visitor.timeOnSite / 60); // Up to 50 points for time on site
    score += Math.min(30, visitor.pageViews * 2); // Up to 30 points for page views
    score += Math.min(20, visitor.scrollDepth / 5); // Up to 20 points for scroll depth

    // Bonus for form submissions
    if (
      visitor.interactions &&
      visitor.interactions.some(i => i.type === 'form_submit')
    ) {
      score += 15;
    }

    // Bonus for email capture
    if (leadInfo.email) {
      score += 25;
    }

    // Bonus for company information
    if (leadInfo.company) {
      score += 20;
    }

    if (leadInfo.companySize && leadInfo.companySize >= 100) {
      score += 15;
    }

    // Cap at 100
    return Math.min(100, Math.round(score));
  }

  // Check if email is from corporate domain
  isCorporateEmail(email) {
    const personalDomains = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'icloud.com',
      'aol.com',
      'protonmail.com',
      'tutanota.com',
    ];

    const domain = email.split('@')[1]?.toLowerCase();
    return domain && !personalDomains.includes(domain);
  }

  // Get all leads
  getLeads(filters = {}) {
    let leads = Array.from(this.leadData.values());

    if (filters.status) {
      leads = leads.filter(lead => lead.status === filters.status);
    }

    if (filters.priority) {
      leads = leads.filter(lead => lead.priority === filters.priority);
    }

    if (filters.scoreMin) {
      leads = leads.filter(lead => lead.score >= filters.scoreMin);
    }

    if (filters.scoreMax) {
      leads = leads.filter(lead => lead.score <= filters.scoreMax);
    }

    if (filters.dateFrom) {
      const dateFrom = new Date(filters.dateFrom);
      leads = leads.filter(lead => new Date(lead.createdAt) >= dateFrom);
    }

    if (filters.dateTo) {
      const dateTo = new Date(filters.dateTo);
      leads = leads.filter(lead => new Date(lead.createdAt) <= dateTo);
    }

    // Sort by creation date (newest first)
    leads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return leads;
  }

  // Update lead status
  updateLeadStatus(leadId, status) {
    const lead = this.leadData.get(leadId);
    if (!lead) {
      throw new Error(`Lead with ID ${leadId} not found`);
    }

    lead.status = status;
    lead.updatedAt = new Date().toISOString();

    return lead;
  }

  // Add note to lead
  addNoteToLead(leadId, note) {
    const lead = this.leadData.get(leadId);
    if (!lead) {
      throw new Error(`Lead with ID ${leadId} not found`);
    }

    const noteObj = {
      id: this.generateId(),
      content: note,
      author: 'system',
      timestamp: new Date().toISOString(),
    };

    lead.notes = lead.notes || [];
    lead.notes.push(noteObj);
    lead.updatedAt = new Date().toISOString();

    return lead;
  }

  // Get lead by ID
  getLead(leadId) {
    return this.leadData.get(leadId);
  }

  // Get visitor statistics
  getVisitorStats() {
    const visitors = Array.from(this.visitors.values());
    const leads = Array.from(this.leadData.values());

    return {
      totalVisitors: visitors.length,
      totalLeads: leads.length,
      conversionRate:
        visitors.length > 0 ? (leads.length / visitors.length) * 100 : 0,
      avgTimeOnSite: this.calculateAverageTimeOnSite(visitors),
      avgPageViews: this.calculateAveragePageViews(visitors),
      topPages: this.getTopPages(),
      trafficSources: this.getTrafficSources(visitors),
      deviceDistribution: this.getDeviceDistribution(visitors),
    };
  }

  // Calculate average time on site
  calculateAverageTimeOnSite(visitors) {
    if (visitors.length === 0) return 0;

    const total = visitors.reduce(
      (sum, visitor) => sum + (visitor.timeOnSite || 0),
      0
    );
    return total / visitors.length;
  }

  // Calculate average page views
  calculateAveragePageViews(visitors) {
    if (visitors.length === 0) return 0;

    const total = visitors.reduce(
      (sum, visitor) => sum + (visitor.pageViews || 0),
      0
    );
    return total / visitors.length;
  }

  // Get top visited pages
  getTopPages() {
    const pageEntries = Array.from(this.pageTracking.entries());
    return pageEntries
      .sort((a, b) => b[1].views - a[1].views)
      .slice(0, 10)
      .map(([path, data]) => ({ path, views: data.views }));
  }

  // Get traffic sources
  getTrafficSources(visitors) {
    const sources = {};

    visitors.forEach(visitor => {
      const source = visitor.referrer || 'Direct';
      sources[source] = (sources[source] || 0) + 1;
    });

    return sources;
  }

  // Get device distribution
  getDeviceDistribution(visitors) {
    const distribution = { desktop: 0, mobile: 0, tablet: 0 };

    visitors.forEach(visitor => {
      if (visitor.device) {
        distribution[visitor.device] = (distribution[visitor.device] || 0) + 1;
      }
    });

    return distribution;
  }

  // Export leads to CSV
  exportLeadsToCSV(filters = {}) {
    const leads = this.getLeads(filters);

    // CSV headers
    const headers = [
      'ID',
      'Name',
      'Email',
      'Company',
      'Phone',
      'Industry',
      'Company Size',
      'Budget',
      'Timeline',
      'Status',
      'Priority',
      'Score',
      'Source',
      'Created At',
      'Assigned To',
    ];

    // CSV rows
    const rows = leads.map(lead => [
      lead.id,
      lead.name || '',
      lead.email || '',
      lead.company || '',
      lead.phone || '',
      lead.industry || '',
      lead.companySize || '',
      lead.budget || '',
      lead.timeline || '',
      lead.status,
      lead.priority,
      lead.score,
      lead.source,
      lead.createdAt,
      lead.assignedTo || '',
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(field => `"${field}"`).join(',')),
    ].join('\n');

    return csvContent;
  }

  // Get lead enrichment data
  async enrichLead(leadId) {
    const lead = this.leadData.get(leadId);
    if (!lead) {
      throw new Error(`Lead with ID ${leadId} not found`);
    }

    // In a real implementation, this would call third-party APIs for enrichment
    // For now, we'll simulate the process with mock data
    const enrichmentData = {
      companyInfo: {
        industry: lead.industry || 'Technology',
        size: lead.companySize || '100-500',
        revenue: '$10M-$50M',
        location: 'United States',
        founded: '2010',
      },
      contactInfo: {
        linkedin: lead.email
          ? `linkedin.com/in/${lead.name?.replace(/\s+/g, '-')}`
          : '',
        twitter: lead.email
          ? `twitter.com/${lead.name?.replace(/\s+/g, '')}`
          : '',
        verified: true,
      },
      intentSignals: [
        'Visited pricing page multiple times',
        'Downloaded case study',
        'Watched product demo',
      ],
      technographics: ['Uses Salesforce', 'Uses HubSpot', 'Uses AWS'],
    };

    lead.enrichment = enrichmentData;
    lead.updatedAt = new Date().toISOString();

    return lead;
  }

  // Track consent for data collection
  trackConsent(consentType, granted) {
    const visitorId = this.getOrCreateVisitorId();
    const consentId = this.generateId();

    const consentRecord = {
      id: consentId,
      visitorId,
      type: consentType,
      granted,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    };

    this.consentRecords.set(consentId, consentRecord);

    // Update visitor record
    const visitor = this.visitors.get(visitorId);
    if (visitor) {
      visitor.consentGiven = granted;
      visitor.consentType = consentType;
    }

    return consentRecord;
  }

  // Get consent records
  getConsentRecords(visitorId) {
    return Array.from(this.consentRecords.values()).filter(
      record => record.visitorId === visitorId
    );
  }
}

export default new LeadGenerationService();
