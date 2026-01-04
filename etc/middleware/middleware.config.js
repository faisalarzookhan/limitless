// Middleware Configuration for Limitless Infotech Solution
// Centralized configuration for authentication, logging, error handling, and request processing

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const fileUpload = require('express-fileupload');
const xss = require('xss');
const validator = require('validator');

// Security middleware configuration
const securityMiddleware = [
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'", 'https://api.limitlessinfotech.com'],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: {
      policy: 'no-referrer-when-downgrade',
    },
  }),

  // CORS configuration
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:5173',
      'http://localhost:3000',
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  }),

  // Rate limiting
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: process.env.RATE_LIMIT_MAX || 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  }),

  // Analytics-specific rate limiting
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: process.env.ANALYTICS_RATE_LIMIT || 20, // limit analytics events per minute
    message: 'Too many analytics events from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Skip rate limiting for non-analytics endpoints
      return !req.url.includes('/analytics');
    },
  }),

  // Input sanitization
  (req, res, next) => {
    // Sanitize query parameters
    if (req.query) {
      Object.keys(req.query).forEach(key => {
        req.query[key] = xss(req.query[key]);
      });
    }

    // Sanitize body parameters
    if (req.body) {
      Object.keys(req.body).forEach(key => {
        if (typeof req.body[key] === 'string') {
          req.body[key] = xss(req.body[key]);
        }
      });
    }

    next();
  },
];

// Logging middleware configuration
const loggingMiddleware = [
  morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev', {
    skip: (req, res) => {
      // Don't log health check endpoints in production
      return process.env.NODE_ENV === 'production' && req.path === '/health';
    },
  }),
];

// Session middleware configuration
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'your-session-secret-key',
  resave: false,
  saveUninitialized: false,
  store:
    process.env.NODE_ENV === 'production'
      ? MongoStore.create({
          mongoUrl:
            process.env.MONGODB_URI || 'mongodb://localhost:27017/limitless',
        })
      : undefined,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Serve secure cookies in production
    httpOnly: true, // Prevent XSS attacks
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'lax', // CSRF protection
  },
});

// Parsing middleware configuration
const parsingMiddleware = [
  express.json({
    limit: process.env.BODY_LIMIT || '10mb',
    type: 'application/json',
  }),

  express.urlencoded({
    extended: true,
    limit: process.env.BODY_LIMIT || '10mb',
  }),

  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
    safeFileNames: true,
    preserveExtension: true,
    abortOnLimit: true,
    responseOnLimit: 'File size too large',
  }),
];

// Compression middleware
const compressionMiddleware = compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      // Don't compress responses with this request header
      return false;
    }

    // fallback to standard filter function
    return compression.filter(req, res);
  },
});

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('[ERROR]', err);

  // Log error details
  const errorLog = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    error: {
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
  };

  console.error(JSON.stringify(errorLog));

  // Send appropriate error response
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      message: err.message,
      details: err.details || [],
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or expired token',
    });
  }

  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      error: 'File Too Large',
      message: 'File size exceeds the limit',
    });
  }

  // Default error response
  res.status(500).json({
    error:
      process.env.NODE_ENV === 'development'
        ? 'Internal Server Error'
        : 'Something went wrong',
    message:
      process.env.NODE_ENV === 'development'
        ? err.message
        : 'An unexpected error occurred',
  });
};

// Custom validation middleware
const validateInput = schema => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        details: error.details.map(detail => detail.message),
      });
    }

    req.validatedData = value;
    next();
  };
};

// Authentication middleware
const authenticate = (req, res, next) => {
  // Check for authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // In a real application, you would verify the JWT token here
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // req.user = decoded;

  next();
};

// Authorization middleware
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
};

module.exports = {
  securityMiddleware,
  loggingMiddleware,
  sessionMiddleware,
  parsingMiddleware,
  compressionMiddleware,
  errorHandler,
  validateInput,
  authenticate,
  authorize,
};
