import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/hero-pattern.css';
import {
  HiCode,
  HiDocumentText,
  HiTerminal,
  HiLockClosed,
  HiRefresh,
  HiUser,
  HiBriefcase,
  HiCalendar,
  HiChartBar,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ApiDocumentation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);

  const apiEndpoints = {
    auth: [
      {
        method: 'POST',
        path: '/api/auth/login',
        description: 'Authenticate user and get access token',
        parameters: [
          {
            name: 'email',
            type: 'string',
            required: true,
            description: 'User email address',
          },
          {
            name: 'password',
            type: 'string',
            required: true,
            description: 'User password',
          },
        ],
        responses: [
          {
            code: 200,
            description: 'Successful authentication',
            example: {
              token: 'jwt_token_here',
              user: { id: 1, email: 'user@example.com' },
            },
          },
          { code: 401, description: 'Invalid credentials' },
        ],
      },
      {
        method: 'POST',
        path: '/api/auth/register',
        description: 'Register a new user account',
        parameters: [
          {
            name: 'email',
            type: 'string',
            required: true,
            description: 'User email address',
          },
          {
            name: 'password',
            type: 'string',
            required: true,
            description: 'User password (min 8 characters)',
          },
          {
            name: 'name',
            type: 'string',
            required: true,
            description: 'User full name',
          },
        ],
        responses: [
          {
            code: 201,
            description: 'User created successfully',
            example: {
              user: { id: 1, email: 'user@example.com' },
              token: 'jwt_token_here',
            },
          },
          { code: 409, description: 'Email already exists' },
        ],
      },
    ],
    users: [
      {
        method: 'GET',
        path: '/api/users/profile',
        description: 'Get current user profile information',
        headers: [
          {
            name: 'Authorization',
            required: true,
            description: 'Bearer token',
          },
        ],
        responses: [
          {
            code: 200,
            description: 'User profile retrieved',
            example: {
              id: 1,
              email: 'user@example.com',
              name: 'John Doe',
              role: 'user',
            },
          },
          { code: 401, description: 'Unauthorized' },
        ],
      },
      {
        method: 'PUT',
        path: '/api/users/profile',
        description: 'Update user profile information',
        headers: [
          {
            name: 'Authorization',
            required: true,
            description: 'Bearer token',
          },
        ],
        parameters: [
          {
            name: 'name',
            type: 'string',
            required: false,
            description: 'User full name',
          },
          {
            name: 'email',
            type: 'string',
            required: false,
            description: 'User email address',
          },
        ],
        responses: [
          {
            code: 200,
            description: 'Profile updated successfully',
            example: {
              id: 1,
              email: 'updated@example.com',
              name: 'Updated Name',
            },
          },
          { code: 401, description: 'Unauthorized' },
        ],
      },
    ],
    products: [
      {
        method: 'GET',
        path: '/api/products',
        description: 'Get list of all products',
        headers: [
          {
            name: 'Authorization',
            required: true,
            description: 'Bearer token',
          },
        ],
        responses: [
          {
            code: 200,
            description: 'Products retrieved successfully',
            example: [
              {
                id: 1,
                name: 'TrackIT',
                description: 'Project tracking solution',
                status: 'active',
              },
            ],
          },
          { code: 401, description: 'Unauthorized' },
        ],
      },
      {
        method: 'GET',
        path: '/api/products/:id',
        description: 'Get specific product details',
        headers: [
          {
            name: 'Authorization',
            required: true,
            description: 'Bearer token',
          },
        ],
        responses: [
          {
            code: 200,
            description: 'Product details retrieved',
            example: {
              id: 1,
              name: 'TrackIT',
              description: 'Project tracking solution',
              features: ['task management', 'time tracking'],
            },
          },
          { code: 404, description: 'Product not found' },
        ],
      },
    ],
    analytics: [
      {
        method: 'GET',
        path: '/api/analytics/dashboard',
        description: 'Get dashboard analytics data',
        headers: [
          {
            name: 'Authorization',
            required: true,
            description: 'Bearer token',
          },
        ],
        responses: [
          {
            code: 200,
            description: 'Analytics data retrieved',
            example: { users: 1000, activeProjects: 50, revenue: 50000 },
          },
          { code: 401, description: 'Unauthorized' },
        ],
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: HiDocumentText },
    { id: 'auth', label: 'Authentication', icon: HiLockClosed },
    { id: 'users', label: 'Users', icon: HiUser },
    { id: 'products', label: 'Products', icon: HiBriefcase },
    { id: 'analytics', label: 'Analytics', icon: HiChartBar },
  ];

  const renderOverview = () => (
    <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="bg-[#1a1c20] rounded-2xl p-8 shadow-lg border border-[#2563eb] border-opacity-30" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-6 text-white font-['Outfit']">
          API Overview
        </h2>
        <p className="text-gray-300 mb-6 font-['Figtree']">
          Our RESTful API provides programmatic access to all platform features.
          All endpoints are secured with JWT authentication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div className="bg-gradient-to-br from-[#2563eb]/20 to-[#ffc957]/20 p-6 rounded-xl border border-[#2563eb]/30" variants={itemVariants}>
            <HiCode className="w-8 h-8 text-[#2563eb] mb-3" />
            <h3 className="font-bold mb-2 text-white font-['Outfit']">
              RESTful Design
            </h3>
            <p className="text-sm text-gray-300 font-['Figtree']">
              Consistent, predictable API design following REST principles
            </p>
          </motion.div>
          <motion.div className="bg-gradient-to-br from-[#ffc957]/20 to-[#2563eb]/20 p-6 rounded-xl border border-[#2563eb]/30" variants={itemVariants}>
            <HiLockClosed className="w-8 h-8 text-[#ffc957] mb-3" />
            <h3 className="font-bold mb-2 text-white font-['Outfit']">
              Secure by Default
            </h3>
            <p className="text-sm text-gray-300 font-['Figtree']">
              JWT authentication and HTTPS encryption for all requests
            </p>
          </motion.div>
          <motion.div className="bg-gradient-to-br from-[#0a0b0d]/20 to-[#2563eb]/20 p-6 rounded-xl border border-[#2563eb]/30" variants={itemVariants}>
            <HiRefresh className="w-8 h-8 text-[#0a0b0d] mb-3" />
            <h3 className="font-bold mb-2 text-white font-['Outfit']">
              Rate Limited
            </h3>
            <p className="text-sm text-gray-300 font-['Figtree']">
              Fair usage policies with rate limiting to ensure performance
            </p>
          </motion.div>
        </div>

        <div className="bg-[#1a1c20] rounded-xl p-6 border border-[#2563eb]/30">
          <h3 className="font-bold mb-4 text-white font-['Outfit']">
            Base URL
          </h3>
          <code className="block bg-[#0a0b0d] text-[#ffc957] p-4 rounded-lg font-mono text-sm overflow-x-auto">
            https://api.limitlessinfotech.com/v1
          </code>
        </div>
      </motion.div>

      <motion.div className="bg-[#1a1c20] rounded-2xl p-8 shadow-lg border border-[#2563eb] border-opacity-30" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-6 text-white font-['Outfit']">
          Authentication
        </h2>
        <p className="text-gray-300 mb-6 font-['Figtree']">
          All API requests require a valid JWT token in the Authorization
          header.
        </p>

        <div className="bg-[#1a1c20] rounded-xl p-6 mb-6 border border-[#2563eb]/30">
          <h3 className="font-bold mb-3 text-white font-['Outfit']">
            Example Request
          </h3>
          <pre className="bg-[#0a0b0d] text-[#ffc957] p-4 rounded-lg font-mono text-sm overflow-x-auto">
            {`curl -X GET https://api.limitlessinfotech.com/v1/users/profile \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json"`}
          </pre>
        </div>

        <div className="bg-[#1a1c20] rounded-xl p-6 border border-[#2563eb]/30">
          <h3 className="font-bold mb-3 text-white font-['Outfit']">
            Rate Limits
          </h3>
          <p className="text-gray-300 mb-4 font-['Figtree']">
            Default rate limits:
          </p>
          <ul className="text-gray-300 space-y-2 font-['Figtree']">
            <li>• 1000 requests per hour per IP</li>
            <li>• 100 requests per minute per authenticated user</li>
            <li>• 10 requests per second for unauthenticated users</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderEndpoint = endpoint => (
    <motion.div className="bg-[#1a1c20] rounded-2xl p-6 shadow-lg border border-[#2563eb] border-opacity-30 mb-6" variants={itemVariants}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-mono font-bold ${
              endpoint.method === 'GET'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : endpoint.method === 'POST'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  : endpoint.method === 'PUT'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    : endpoint.method === 'DELETE'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            {endpoint.method}
          </span>
          <code className="font-mono text-white">
            {endpoint.path}
          </code>
        </div>
        <button
          onClick={() =>
            setSelectedEndpoint(
              selectedEndpoint === endpoint.path ? null : endpoint.path
            )
          }
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          {selectedEndpoint === endpoint.path ? 'Hide' : 'Show Details'}
        </button>
      </div>

      <p className="text-gray-300 mb-4 font-['Figtree']">
        {endpoint.description}
      </p>

      {selectedEndpoint === endpoint.path && (
        <div className="space-y-6">
          {endpoint.headers && endpoint.headers.length > 0 && (
            <div>
              <h4 className="font-bold mb-3 text-white font-['Outfit']">
                Headers
              </h4>
              <div className="space-y-2">
                {endpoint.headers.map((header, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#1a1c20] rounded-lg border border-[#2563eb]/20"
                  >
                    <div className="flex items-center">
                      <span className="font-mono text-sm font-bold mr-3 text-white">
                        {header.name}
                      </span>
                      {header.required && (
                        <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded">
                          Required
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-300 font-['Figtree']">
                      {header.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div>
              <h4 className="font-bold mb-3 text-white font-['Outfit']">
                Parameters
              </h4>
              <div className="space-y-2">
                {endpoint.parameters.map((param, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#1a1c20] rounded-lg border border-[#2563eb]/20"
                  >
                    <div className="flex items-center">
                      <span className="font-mono text-sm font-bold mr-3 text-white">
                        {param.name}
                      </span>
                      <span className="text-xs bg-[#2563eb] text-white px-2 py-1 rounded">
                        {param.type}
                      </span>
                      {param.required && (
                        <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded ml-2">
                          Required
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-300 font-['Figtree']">
                      {param.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-bold mb-3 text-white font-['Outfit']">
              Responses
            </h4>
            <div className="space-y-4">
              {endpoint.responses.map((response, idx) => (
                <div
                  key={idx}
                  className="bg-[#1a1c20] rounded-lg p-4 border border-[#2563eb]/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono font-bold text-white">
                      {response.code}
                    </span>
                    <span className="text-gray-300 font-['Figtree']">
                      {response.description}
                    </span>
                  </div>
                  <pre className="bg-[#0a0b0d] text-[#ffc957] p-3 rounded font-mono text-xs overflow-x-auto">
                    {JSON.stringify(response.example, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );

  const renderTabContent = () => {
    if (activeTab === 'overview') {
      return renderOverview();
    }

    const endpoints = apiEndpoints[activeTab] || [];
    return (
      <div className="space-y-6">
        {endpoints.map((endpoint, index) => renderEndpoint(endpoint))}
      </div>
    );
  };

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern-bg opacity-20"></div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HiTerminal className="w-5 h-5" />
              <span className="text-sm font-semibold">API Documentation</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              API
              <br />
              Documentation
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive API documentation for seamless integration
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#playground"
                className="bg-[#ffc957] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:bg-[#ffb830] transition duration-300 font-['Outfit']"
              >
                API Playground
              </a>
              <a
                href="#sdk"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#0a0b0d] transition duration-300 font-['Outfit']"
              >
                Download SDK
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-[#0a0b0d]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <motion.div 
                className="bg-[#1a1c20] rounded-2xl p-6 shadow-lg border border-[#2563eb] border-opacity-30 sticky top-8"
                variants={itemVariants}
              >
                <h3 className="font-bold mb-4 text-white font-['Outfit']">
                  API Sections
                </h3>
                <nav className="space-y-2">
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                          activeTab === tab.id
                            ? 'bg-[#2563eb] text-white'
                            : 'text-gray-300 hover:bg-[#2563eb] hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium font-['Figtree']">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4" variants={itemVariants}>{renderTabContent()}</div>
          </div>
        </div>
      </section>

      {/* API Playground */}
      <section
        id="playground"
        className="section-padding bg-[#0a0b0d]"
      >
        <div className="container-custom">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-['Outfit']">
              Interactive <span className="text-[#ffc957]">API Playground</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']">
              Test our API endpoints directly in your browser
            </p>
          </motion.div>

          <div className="bg-[#1a1c20] rounded-2xl p-8 shadow-lg border border-[#2563eb] border-opacity-30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white font-['Outfit']">
                  Try It Out
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300 font-['Figtree']">
                      Method
                    </label>
                    <select className="w-full p-3 border border-[#2563eb]/30 rounded-lg bg-[#0a0b0d] text-white font-['Figtree']">
                      <option>GET</option>
                      <option>POST</option>
                      <option>PUT</option>
                      <option>DELETE</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300 font-['Figtree']">
                      Endpoint
                    </label>
                    <input
                      type="text"
                      placeholder="/api/users/profile"
                      className="w-full p-3 border border-[#2563eb]/30 rounded-lg bg-[#0a0b0d] text-white font-['Figtree']"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300 font-['Figtree']">
                      Authorization
                    </label>
                    <input
                      type="password"
                      placeholder="Bearer token"
                      className="w-full p-3 border border-[#2563eb]/30 rounded-lg bg-[#0a0b0d] text-white font-['Figtree']"
                    />
                  </div>
                  <button className="bg-[#2563eb] text-white w-full py-3 px-6 rounded-lg hover:bg-[#1d4ed8] transition duration-300 font-['Outfit']">
                    Execute Request
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white font-['Outfit']">
                  Response
                </h3>
                <div className="bg-[#0a0b0d] text-[#ffc957] p-4 rounded-lg font-mono text-sm h-64 overflow-auto">
                  {`{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe"
    }
  }
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs & Libraries */}
      <section className="section-padding bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-['Outfit']">
              SDKs & <span className="text-[#ffc957]">Libraries</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']">
              Official SDKs for popular programming languages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div className="bg-[#1a1c20] rounded-xl p-6 shadow-lg border border-[#2563eb] border-opacity-30 text-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
              <h3 className="font-bold mb-2 text-white font-['Outfit']">
                JavaScript
              </h3>
              <p className="text-sm text-gray-300 mb-4 font-['Figtree']">
                For Node.js and browser applications
              </p>
              <code className="block text-xs bg-[#0a0b0d] text-[#ffc957] p-2 rounded mb-3 font-mono">
                npm install @limitlessinfotech/api
              </code>
              <a
                href="#"
                className="text-[#2563eb] hover:text-[#ffc957] hover:underline text-sm font-['Figtree']"
              >
                Documentation
              </a>
            </motion.div>

            <motion.div className="bg-[#1a1c20] rounded-xl p-6 shadow-lg border border-[#2563eb] border-opacity-30 text-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffc957] to-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">PY</span>
              </div>
              <h3 className="font-bold mb-2 text-white font-['Outfit']">
                Python
              </h3>
              <p className="text-sm text-gray-300 mb-4 font-['Figtree']">
                For Python applications
              </p>
              <code className="block text-xs bg-[#0a0b0d] text-[#ffc957] p-2 rounded mb-3 font-mono">
                pip install limitlessinfotech-api
              </code>
              <a
                href="#"
                className="text-[#2563eb] hover:text-[#ffc957] hover:underline text-sm font-['Figtree']"
              >
                Documentation
              </a>
            </motion.div>

            <motion.div className="bg-[#1a1c20] rounded-xl p-6 shadow-lg border border-[#2563eb] border-opacity-30 text-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#0a0b0d] to-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">JAVA</span>
              </div>
              <h3 className="font-bold mb-2 text-white font-['Outfit']">
                Java
              </h3>
              <p className="text-sm text-gray-300 mb-4 font-['Figtree']">
                For Java applications
              </p>
              <code className="block text-xs bg-[#0a0b0d] text-[#ffc957] p-2 rounded mb-3 font-mono">
                Maven dependency
              </code>
              <a
                href="#"
                className="text-[#2563eb] hover:text-[#ffc957] hover:underline text-sm font-['Figtree']"
              >
                Documentation
              </a>
            </motion.div>

            <motion.div className="bg-[#1a1c20] rounded-xl p-6 shadow-lg border border-[#2563eb] border-opacity-30 text-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#0a0b0d] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">NET</span>
              </div>
              <h3 className="font-bold mb-2 text-white font-['Outfit']">
                .NET
              </h3>
              <p className="text-sm text-gray-300 mb-4 font-['Figtree']">
                For .NET applications
              </p>
              <code className="block text-xs bg-[#0a0b0d] text-[#ffc957] p-2 rounded mb-3 font-mono">
                NuGet package
              </code>
              <a
                href="#"
                className="text-[#2563eb] hover:text-[#ffc957] hover:underline text-sm font-['Figtree']"
              >
                Documentation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white">
        <div className="container-custom">
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Outfit']">
              Ready to Integrate?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-['Figtree']">
              Get started with our API today and unlock the full potential of
              our platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-[#ffc957] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:bg-[#ffb830] transition duration-300 font-['Outfit']"
              >
                Get API Access
              </a>
              <a
                href="/api-documentation"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#0a0b0d] transition duration-300 font-['Outfit']"
              >
                View Full Docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
};

export default ApiDocumentation;
