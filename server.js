// Server.js - Backend API Server for Limitless Infotech Solution
// This server handles API requests for the frontend application

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const https = require('https');

// Import middleware configuration
const {
  securityMiddleware,
  loggingMiddleware,
  sessionMiddleware,
  parsingMiddleware,
  compressionMiddleware,
  errorHandler,
} = require('./etc/middleware/middleware.config');

// Import health endpoints
const healthRoutes = require('./src/services/api/healthEndpoints');

// Create Express app
const app = express();

// Apply middleware
app.use(compressionMiddleware);

// Apply security middleware
securityMiddleware.forEach(middleware => app.use(middleware));

// Apply logging middleware
loggingMiddleware.forEach(middleware => app.use(middleware));

// Apply session middleware
app.use(sessionMiddleware);

// Apply parsing middleware
parsingMiddleware.forEach(middleware => app.use(middleware));

// API routes
app.use('/api', healthRoutes);

// Analytics routes
app.post('/api/analytics/pageviews', handleAnalyticsPageView);
app.post('/api/analytics/events', handleAnalyticsEvent);
app.post('/api/analytics/interactions', handleAnalyticsInteraction);
app.post('/api/analytics/form-submissions', handleAnalyticsFormSubmission);
app.post('/api/analytics/conversions', handleAnalyticsConversion);
app.get('/api/analytics/users/:userId/preferences', handleGetUserPreferences);
app.put('/api/analytics/users/:userId/preferences', handleUpdateUserPreferences);
app.get('/api/analytics/dashboard', handleGetAnalyticsData);
app.get('/api/analytics/dashboard/comprehensive', handleGetComprehensiveDashboardData);
app.get('/api/analytics/pageviews/data', handleGetPageViewsData);
app.get('/api/analytics/events/data', handleGetEventsData);
app.get('/api/analytics/conversions/data', handleGetConversionsData);
app.get('/api/analytics/dashboard/top-pages', handleGetTopPages);
app.get('/api/analytics/dashboard/top-events', handleGetTopEvents);
app.get('/api/analytics/sessions/:sessionId', handleGetSessionData);
app.post('/api/analytics/sessions', handleTrackSessionStart);

// Contact and inquiries routes
app.post('/api/contact/submit', (req, res) => {
  // Simulate processing contact form
  const { name, email, message, phone } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Name, email, and message are required',
    });
  }

  // In a real application, you would save this to a database and send an email
  console.log(`Contact form received: ${name} (${email}): ${message}`);

  res.status(200).json({
    success: true,
    message: 'Thank you for your message. We will contact you soon.',
  });
});

// Client form submission
app.post('/api/contact/client-form', (req, res) => {
  const {
    businessName,
    contactPerson,
    email,
    phone,
    requirements,
    budget,
    timeline,
  } = req.body;

  // Validation
  if (!businessName || !contactPerson || !email || !requirements) {
    return res.status(400).json({
      error:
        'Business name, contact person, email, and requirements are required',
    });
  }

  // In a real application, you would save this to a database
  console.log(`Client form received: ${businessName} - ${requirements}`);

  res.status(200).json({
    success: true,
    message:
      'Your requirements have been submitted. Our team will contact you within 24 hours.',
  });
});

// Portfolio routes
app.get('/api/portfolio', (req, res) => {
  // Simulate portfolio data
  const portfolioData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Complete online shopping solution with payment integration',
      category: 'web-development',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/images/portfolio/ecommerce.jpg',
      client: 'Retail Corp',
      year: 2023,
      featured: true,
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description:
        'Secure mobile banking application with biometric authentication',
      category: 'mobile-apps',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      image: '/images/portfolio/banking.jpg',
      client: 'Finance Inc',
      year: 2024,
      featured: true,
    },
  ];

  res.json({
    success: true,
    data: portfolioData,
    total: portfolioData.length,
  });
});

app.get('/api/portfolio/:id', (req, res) => {
  const { id } = req.params;

  // In a real application, you would fetch from a database
  const project = {
    id: parseInt(id),
    title: 'Sample Project',
    description: 'Detailed project description',
    category: 'web-development',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/sample.jpg',
    client: 'Sample Client',
    year: 2024,
    details: 'Project details here...',
    screenshots: [
      '/images/portfolio/screenshot1.jpg',
      '/images/portfolio/screenshot2.jpg',
    ],
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    challenges: ['Challenge 1', 'Challenge 2'],
    solutions: ['Solution 1', 'Solution 2'],
  };

  res.json({
    success: true,
    data: project,
  });
});

// Testimonials routes
app.get('/api/testimonials', (req, res) => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CTO, Tech Solutions',
      company: 'Tech Solutions Inc.',
      content:
        'Limitless Infotech delivered exceptional results for our project.',
      rating: 5,
      date: '2024-01-15',
      featured: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Director, Global Services',
      company: 'Global Services Ltd.',
      content: 'Professional, timely, and innovative solutions.',
      rating: 5,
      date: '2024-02-20',
      featured: true,
    },
  ];

  res.json({
    success: true,
    data: testimonials,
    total: testimonials.length,
  });
});

// Blog routes
app.get('/api/blog', (req, res) => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      slug: 'future-of-web-development',
      excerpt: 'Exploring the latest trends in web development...',
      content: 'Full blog content here...',
      author: 'Faisal Khan',
      date: '2024-01-10',
      category: 'Technology',
      tags: ['web-development', 'trends', 'innovation'],
      image: '/images/blog/web-dev.jpg',
      readTime: '5 min read',
      featured: true,
    },
  ];

  res.json({
    success: true,
    data: blogPosts,
    total: blogPosts.length,
  });
});

// Services routes
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Custom web applications and solutions',
      icon: 'web',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized'],
      price: 'Starting at $5000',
    },
    {
      id: 2,
      name: 'Mobile Development',
      description: 'Cross-platform mobile applications',
      icon: 'mobile',
      features: ['iOS & Android', 'Native Performance', 'App Store Deployment'],
      price: 'Starting at $7000',
    },
  ];

  res.json({
    success: true,
    data: services,
    total: services.length,
  });
});

// Analytics handlers
const handleAnalyticsPageView = async (req, res) => {
  try {
    // Input validation
    const { page_url, page_title, referrer, load_time_ms, session_id, anonymous_id } = req.body;
    
    // Validate required fields
    if (!page_url) {
      return res.status(400).json({
        error: 'page_url is required',
      });
    }
    
    // Validate URL format
    try {
      new URL(page_url);
    } catch (e) {
      return res.status(400).json({
        error: 'Invalid page_url format',
      });
    }
    
    // Rate limiting check
    if (await checkRateLimit(req.ip, 'pageview')) {
      return res.status(429).json({
        error: 'Rate limit exceeded for page views',
      });
    }
    
    // Sanitize inputs
    const sanitizedPageTitle = sanitizeInput(page_title);
    const sanitizedReferrer = sanitizeInput(referrer);
    
    // In a real application, you would store this in a database
    console.log('Page view tracked:', { 
      page_url, 
      page_title: sanitizedPageTitle, 
      referrer: sanitizedReferrer, 
      load_time_ms,
      session_id,
      anonymous_id
    });
    
    res.status(200).json({
      success: true,
      message: 'Page view tracked successfully',
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
    res.status(500).json({
      error: 'Failed to track page view',
    });
  }
};

const handleAnalyticsEvent = async (req, res) => {
  try {
    // Input validation
    const { eventName, properties, session_id, anonymous_id } = req.body;
    
    // Validate required fields
    if (!eventName) {
      return res.status(400).json({
        error: 'eventName is required',
      });
    }
    
    // Validate event name format
    if (typeof eventName !== 'string' || eventName.length > 100) {
      return res.status(400).json({
        error: 'Invalid eventName format',
      });
    }
    
    // Rate limiting check
    if (await checkRateLimit(req.ip, 'event')) {
      return res.status(429).json({
        error: 'Rate limit exceeded for events',
      });
    }
    
    // Sanitize inputs
    const sanitizedEventName = sanitizeInput(eventName);
    const sanitizedProperties = sanitizeInput(properties);
    
    // In a real application, you would store this in a database
    console.log('Event tracked:', { eventName: sanitizedEventName, properties: sanitizedProperties, session_id, anonymous_id });
    
    res.status(200).json({
      success: true,
      message: 'Event tracked successfully',
    });
  } catch (error) {
    console.error('Error tracking event:', error);
    res.status(500).json({
      error: 'Failed to track event',
    });
  }
};

const handleAnalyticsInteraction = async (req, res) => {
  try {
    // Input validation
    const { interactionType, elementData, session_id, anonymous_id } = req.body;
    
    // Validate required fields
    if (!interactionType) {
      return res.status(400).json({
        error: 'interactionType is required',
      });
    }
    
    // Validate interaction type format
    if (typeof interactionType !== 'string' || interactionType.length > 50) {
      return res.status(400).json({
        error: 'Invalid interactionType format',
      });
    }
    
    // Rate limiting check
    if (await checkRateLimit(req.ip, 'interaction')) {
      return res.status(429).json({
        error: 'Rate limit exceeded for interactions',
      });
    }
    
    // Sanitize inputs
    const sanitizedInteractionType = sanitizeInput(interactionType);
    const sanitizedElementData = sanitizeInput(elementData);
    
    // In a real application, you would store this in a database
    console.log('Interaction tracked:', { interactionType: sanitizedInteractionType, elementData: sanitizedElementData, session_id, anonymous_id });
    
    res.status(200).json({
      success: true,
      message: 'Interaction tracked successfully',
    });
  } catch (error) {
    console.error('Error tracking interaction:', error);
    res.status(500).json({
      error: 'Failed to track interaction',
    });
  }
};

const handleAnalyticsFormSubmission = async (req, res) => {
  try {
    // Input validation
    const { formId, formData, success, session_id, anonymous_id } = req.body;
    
    // Validate required fields
    if (!formId) {
      return res.status(400).json({
        error: 'formId is required',
      });
    }
    
    // Validate formId format
    if (typeof formId !== 'string' || formId.length > 100) {
      return res.status(400).json({
        error: 'Invalid formId format',
      });
    }
    
    // Rate limiting check
    if (await checkRateLimit(req.ip, 'form_submission')) {
      return res.status(429).json({
        error: 'Rate limit exceeded for form submissions',
      });
    }
    
    // Sanitize inputs - be careful with form data as it may contain sensitive information
    const sanitizedFormId = sanitizeInput(formId);
    const sanitizedFormData = sanitizeFormData(formData);
    
    // In a real application, you would store this in a database
    console.log('Form submission tracked:', { formId: sanitizedFormId, success, session_id, anonymous_id });
    
    res.status(200).json({
      success: true,
      message: 'Form submission tracked successfully',
    });
  } catch (error) {
    console.error('Error tracking form submission:', error);
    res.status(500).json({
      error: 'Failed to track form submission',
    });
  }
};

const handleAnalyticsConversion = async (req, res) => {
  try {
    // Input validation
    const { conversionName, value, currency, properties, session_id, anonymous_id } = req.body;
    
    // Validate required fields
    if (!conversionName) {
      return res.status(400).json({
        error: 'conversionName is required',
      });
    }
    
    // Validate conversion name format
    if (typeof conversionName !== 'string' || conversionName.length > 100) {
      return res.status(400).json({
        error: 'Invalid conversionName format',
      });
    }
    
    // Validate value format
    if (value !== undefined && typeof value !== 'number') {
      return res.status(400).json({
        error: 'Value must be a number',
      });
    }
    
    // Validate currency format
    if (currency && typeof currency !== 'string') {
      return res.status(400).json({
        error: 'Currency must be a string',
      });
    }
    
    // Rate limiting check
    if (await checkRateLimit(req.ip, 'conversion')) {
      return res.status(429).json({
        error: 'Rate limit exceeded for conversions',
      });
    }
    
    // Sanitize inputs
    const sanitizedConversionName = sanitizeInput(conversionName);
    const sanitizedProperties = sanitizeInput(properties);
    
    // In a real application, you would store this in a database
    console.log('Conversion tracked:', { conversionName: sanitizedConversionName, value, currency, properties: sanitizedProperties, session_id, anonymous_id });
    
    res.status(200).json({
      success: true,
      message: 'Conversion tracked successfully',
    });
  } catch (error) {
    console.error('Error tracking conversion:', error);
    res.status(500).json({
      error: 'Failed to track conversion',
    });
  }
};

const handleGetUserPreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // In a real application, you would fetch from a database
    const preferences = {
      userId,
      tracking_consent: true,
      data_sharing_consent: true,
      marketing_consent: false,
      analytics_consent: true,
    };
    
    res.status(200).json({
      success: true,
      data: preferences,
    });
  } catch (error) {
    console.error('Error getting user preferences:', error);
    res.status(500).json({
      error: 'Failed to get user preferences',
    });
  }
};

const handleUpdateUserPreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    const preferences = req.body;
    
    // In a real application, you would update in a database
    console.log('User preferences updated:', { userId, preferences });
    
    res.status(200).json({
      success: true,
      message: 'User preferences updated successfully',
    });
  } catch (error) {
    console.error('Error updating user preferences:', error);
    res.status(500).json({
      error: 'Failed to update user preferences',
    });
  }
};

const handleGetAnalyticsData = async (req, res) => {
  try {
    const filters = req.query;
    
    // In a real application, you would fetch from a database
    const analyticsData = {
      pageViews: [],
      events: [],
      conversions: [],
      totalUsers: 0,
      uniqueVisitors: 0,
      bounceRate: 0,
    };
    
    res.status(200).json({
      success: true,
      data: analyticsData,
    });
  } catch (error) {
    console.error('Error getting analytics data:', error);
    res.status(500).json({
      error: 'Failed to get analytics data',
    });
  }
};

const handleGetSessionData = async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    // In a real application, you would fetch from a database
    const sessionData = {
      sessionId,
      startTime: new Date(),
      duration: 0,
      pageViews: [],
    };
    
    res.status(200).json({
      success: true,
      data: sessionData,
    });
  } catch (error) {
    console.error('Error getting session data:', error);
    res.status(500).json({
      error: 'Failed to get session data',
    });
  }
};

const handleTrackSessionStart = async (req, res) => {
  try {
    const sessionData = req.body;
    
    // In a real application, you would store this in a database
    console.log('Session started:', sessionData);
    
    res.status(200).json({
      success: true,
      message: 'Session tracked successfully',
    });
  } catch (error) {
    console.error('Error tracking session start:', error);
    res.status(500).json({
      error: 'Failed to track session start',
    });
  }
};

const handleGetComprehensiveDashboardData = async (req, res) => {
  try {
    const filters = req.query;
    
    // In a real application, you would fetch from a database
    const analyticsData = {
      pageViews: [
        { date: '2024-01-01', count: 120 },
        { date: '2024-01-02', count: 190 },
        { date: '2024-01-03', count: 150 },
        { date: '2024-01-04', count: 210 },
        { date: '2024-01-05', count: 180 },
        { date: '2024-01-06', count: 230 },
        { date: '2024-01-07', count: 200 },
      ],
      events: [
        { name: 'button_click', count: 450 },
        { name: 'form_submit', count: 120 },
        { name: 'page_view', count: 780 },
        { name: 'scroll', count: 920 },
      ],
      conversions: [
        { name: 'purchase', count: 25 },
        { name: 'signup', count: 15 },
        { name: 'download', count: 40 },
      ],
      totalUsers: 1245,
      uniqueVisitors: 890,
      bounceRate: 32.5,
      topPages: [
        { page: '/home', views: 12450, change: '+12%' },
        { page: '/products', views: 8921, change: '+5%' },
        { page: '/contact', views: 6543, change: '+8%' },
        { page: '/about', views: 5432, change: '+3%' },
        { page: '/services', views: 4321, change: '+7%' },
      ],
      topEvents: [
        { event: 'Button Click', count: 2345, change: '+15%' },
        { event: 'Form Submit', count: 1234, change: '+10%' },
        { event: 'Video Play', count: 987, change: '+5%' },
        { event: 'Link Click', count: 765, change: '+8%' },
        { event: 'Download', count: 543, change: '+12%' },
      ],
      dateRange: filters.dateRange || '7d',
    };
    
    res.status(200).json({
      success: true,
      data: analyticsData,
    });
  } catch (error) {
    console.error('Error getting comprehensive dashboard data:', error);
    res.status(500).json({
      error: 'Failed to get dashboard data',
    });
  }
};

const handleGetPageViewsData = async (req, res) => {
  try {
    const filters = req.query;
    
    // In a real application, you would fetch from a database
    const pageViewsData = [
      { date: '2024-01-01', count: 120 },
      { date: '2024-01-02', count: 190 },
      { date: '2024-01-03', count: 150 },
      { date: '2024-01-04', count: 210 },
      { date: '2024-01-05', count: 180 },
      { date: '2024-01-06', count: 230 },
      { date: '2024-01-07', count: 200 },
    ];
    
    res.status(200).json({
      success: true,
      data: pageViewsData,
    });
  } catch (error) {
    console.error('Error getting page views data:', error);
    res.status(500).json({
      error: 'Failed to get page views data',
    });
  }
};

const handleGetEventsData = async (req, res) => {
  try {
    const filters = req.query;
    
    // In a real application, you would fetch from a database
    const eventsData = [
      { name: 'button_click', count: 450 },
      { name: 'form_submit', count: 120 },
      { name: 'page_view', count: 780 },
      { name: 'scroll', count: 920 },
    ];
    
    res.status(200).json({
      success: true,
      data: eventsData,
    });
  } catch (error) {
    console.error('Error getting events data:', error);
    res.status(500).json({
      error: 'Failed to get events data',
    });
  }
};

const handleGetConversionsData = async (req, res) => {
  try {
    const filters = req.query;
    
    // In a real application, you would fetch from a database
    const conversionsData = [
      { name: 'purchase', count: 25 },
      { name: 'signup', count: 15 },
      { name: 'download', count: 40 },
    ];
    
    res.status(200).json({
      success: true,
      data: conversionsData,
    });
  } catch (error) {
    console.error('Error getting conversions data:', error);
    res.status(500).json({
      error: 'Failed to get conversions data',
    });
  }
};

const handleGetTopPages = async (req, res) => {
  try {
    const filters = req.query;
    
    // In a real application, you would fetch from a database
    const topPagesData = [
      { page: '/home', views: 12450, change: '+12%' },
      { page: '/products', views: 8921, change: '+5%' },
      { page: '/contact', views: 6543, change: '+8%' },
      { page: '/about', views: 5432, change: '+3%' },
      { page: '/services', views: 4321, change: '+7%' },
    ];
    
    res.status(200).json({
      success: true,
      data: topPagesData,
    });
  } catch (error) {
    console.error('Error getting top pages:', error);
    res.status(500).json({
      error: 'Failed to get top pages',
    });
  }
};

const handleGetTopEvents = async (req, res) => {
  try {
    const filters = req.query;
    
    // In a real application, you would fetch from a database
    const topEventsData = [
      { event: 'Button Click', count: 2345, change: '+15%' },
      { event: 'Form Submit', count: 1234, change: '+10%' },
      { event: 'Video Play', count: 987, change: '+5%' },
      { event: 'Link Click', count: 765, change: '+8%' },
      { event: 'Download', count: 543, change: '+12%' },
    ];
    
    res.status(200).json({
      success: true,
      data: topEventsData,
    });
  } catch (error) {
    console.error('Error getting top events:', error);
    res.status(500).json({
      error: 'Failed to get top events',
    });
  }
};

// Newsletter subscription
app.post('/api/contact/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({
      error: 'Valid email address is required',
    });
  }

  // In a real application, you would add to a newsletter service
  console.log(`Newsletter subscription: ${email}`);

  res.status(200).json({
    success: true,
    message: 'Thank you for subscribing to our newsletter!',
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Enable CORS for all routes to support subdomain access
  app.use(cors({
    origin: [
      'https://limitlessinfotech.com',
      'https://www.limitlessinfotech.com',
      // Add other known subdomains
      'https://*.limitlessinfotech.com'
    ],
    credentials: true
  }));

  // Serve static files
  app.use(express.static(path.join(__dirname, 'dist')));

  // Serve index.html for all other routes (for SPA routing)
  // This handles subdomain routing properly for SPA
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production' && process.env.USE_HTTPS === 'true') {
  // HTTPS server configuration
  const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH || './ssl/key.pem'),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH || './ssl/cert.pem'),
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(
      `HTTPS Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`
    );
  });
} else {
  // HTTP server
  app.listen(PORT, () => {
    console.log(
      `HTTP Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`
    );
  });
}

// Utility functions for analytics security
const rateLimitStore = new Map(); // In production, use Redis or similar

const checkRateLimit = async (ip, type) => {
  const key = `${ip}:${type}`;
  const now = Date.now();
  const windowMs = 60000; // 1 minute window
  const maxRequests = 20; // Max requests per window
  
  if (!rateLimitStore.has(key)) {
    rateLimitStore.set(key, []);
  }
  
  const requests = rateLimitStore.get(key);
  // Remove requests outside the current window
  const validRequests = requests.filter(timestamp => now - timestamp < windowMs);
  
  if (validRequests.length >= maxRequests) {
    return true; // Rate limit exceeded
  }
  
  validRequests.push(now);
  rateLimitStore.set(key, validRequests);
  return false; // Rate limit not exceeded
};

const sanitizeInput = (input) => {
  if (typeof input === 'string') {
    // Remove potentially dangerous characters
    return input.replace(/[<>"'&]/g, (match) => {
      const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;',
      };
      return escapeMap[match];
    });
  } else if (typeof input === 'object' && input !== null) {
    // Recursively sanitize object properties
    const sanitized = {};
    for (const [key, value] of Object.entries(input)) {
      sanitized[key] = sanitizeInput(value);
    }
    return sanitized;
  }
  return input;
};

const sanitizeFormData = (formData) => {
  if (typeof formData !== 'object' || formData === null) {
    return formData;
  }
  
  const sanitized = { ...formData };
  
  // Remove sensitive fields
  const sensitiveFields = ['password', 'credit_card', 'ssn', 'phone', 'email'];
  
  sensitiveFields.forEach(field => {
    if (sanitized[field]) {
      sanitized[field] = '[REDACTED]';
    }
  });
  
  return sanitized;
};

module.exports = app;
