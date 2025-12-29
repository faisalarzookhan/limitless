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
  errorHandler
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

// Contact and inquiries routes
app.post('/api/contact/submit', (req, res) => {
  // Simulate processing contact form
  const { name, email, message, phone } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Name, email, and message are required'
    });
  }
  
  // In a real application, you would save this to a database and send an email
  console.log(`Contact form received: ${name} (${email}): ${message}`);
  
  res.status(200).json({
    success: true,
    message: 'Thank you for your message. We will contact you soon.'
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
    timeline
  } = req.body;
  
  // Validation
  if (!businessName || !contactPerson || !email || !requirements) {
    return res.status(400).json({
      error: 'Business name, contact person, email, and requirements are required'
    });
  }
  
  // In a real application, you would save this to a database
  console.log(`Client form received: ${businessName} - ${requirements}`);
  
  res.status(200).json({
    success: true,
    message: 'Your requirements have been submitted. Our team will contact you within 24 hours.'
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
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      category: 'mobile-apps',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      image: '/images/portfolio/banking.jpg',
      client: 'Finance Inc',
      year: 2024,
      featured: true
    }
  ];
  
  res.json({
    success: true,
    data: portfolioData,
    total: portfolioData.length
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
    screenshots: ['/images/portfolio/screenshot1.jpg', '/images/portfolio/screenshot2.jpg'],
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    challenges: ['Challenge 1', 'Challenge 2'],
    solutions: ['Solution 1', 'Solution 2']
  };
  
  res.json({
    success: true,
    data: project
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
      content: 'Limitless Infotech delivered exceptional results for our project.',
      rating: 5,
      date: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Director, Global Services',
      company: 'Global Services Ltd.',
      content: 'Professional, timely, and innovative solutions.',
      rating: 5,
      date: '2024-02-20',
      featured: true
    }
  ];
  
  res.json({
    success: true,
    data: testimonials,
    total: testimonials.length
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
      featured: true
    }
  ];
  
  res.json({
    success: true,
    data: blogPosts,
    total: blogPosts.length
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
      price: 'Starting at $5000'
    },
    {
      id: 2,
      name: 'Mobile Development',
      description: 'Cross-platform mobile applications',
      icon: 'mobile',
      features: ['iOS & Android', 'Native Performance', 'App Store Deployment'],
      price: 'Starting at $7000'
    }
  ];
  
  res.json({
    success: true,
    data: services,
    total: services.length
  });
});

// Newsletter subscription
app.post('/api/contact/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({
      error: 'Valid email address is required'
    });
  }
  
  // In a real application, you would add to a newsletter service
  console.log(`Newsletter subscription: ${email}`);
  
  res.status(200).json({
    success: true,
    message: 'Thank you for subscribing to our newsletter!'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // Serve index.html for all other routes (for SPA routing)
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
    cert: fs.readFileSync(process.env.SSL_CERT_PATH || './ssl/cert.pem')
  };
  
  https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
} else {
  // HTTP server
  app.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

module.exports = app;