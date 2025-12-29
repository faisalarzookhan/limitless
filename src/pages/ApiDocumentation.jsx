import { useState } from 'react';
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
    <div className="space-y-8">
      <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          API Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Our RESTful API provides programmatic access to all platform features.
          All endpoints are secured with JWT authentication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
            <HiCode className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
              RESTful Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Consistent, predictable API design following REST principles
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
            <HiLockClosed className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
              Secure by Default
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              JWT authentication and HTTPS encryption for all requests
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
            <HiRefresh className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
              Rate Limited
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fair usage policies with rate limiting to ensure performance
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
          <h3 className="font-bold mb-4 text-gray-900 dark:text-white">
            Base URL
          </h3>
          <code className="block bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            https://api.limitlessinfotech.com/v1
          </code>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Authentication
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          All API requests require a valid JWT token in the Authorization
          header.
        </p>

        <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 mb-6">
          <h3 className="font-bold mb-3 text-gray-900 dark:text-white">
            Example Request
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            {`curl -X GET https://api.limitlessinfotech.com/v1/users/profile \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json"`}
          </pre>
        </div>

        <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
          <h3 className="font-bold mb-3 text-gray-900 dark:text-white">
            Rate Limits
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Default rate limits:
          </p>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>• 1000 requests per hour per IP</li>
            <li>• 100 requests per minute per authenticated user</li>
            <li>• 10 requests per second for unauthenticated users</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderEndpoint = endpoint => (
    <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 mb-6">
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
          <code className="font-mono text-gray-900 dark:text-white">
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

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {endpoint.description}
      </p>

      {selectedEndpoint === endpoint.path && (
        <div className="space-y-6">
          {endpoint.headers && endpoint.headers.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                Headers
              </h4>
              <div className="space-y-2">
                {endpoint.headers.map((header, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <span className="font-mono text-sm font-bold mr-3">
                        {header.name}
                      </span>
                      {header.required && (
                        <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded">
                          Required
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {header.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                Parameters
              </h4>
              <div className="space-y-2">
                {endpoint.parameters.map((param, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <span className="font-mono text-sm font-bold mr-3">
                        {param.name}
                      </span>
                      <span className="text-xs bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        {param.type}
                      </span>
                      {param.required && (
                        <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded ml-2">
                          Required
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {param.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
              Responses
            </h4>
            <div className="space-y-4">
              {endpoint.responses.map((response, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono font-bold text-gray-900 dark:text-white">
                      {response.code}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {response.description}
                    </span>
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto">
                    {JSON.stringify(response.example, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiTerminal className="w-5 h-5" />
              <span className="text-sm font-semibold">API Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              API
              <br />
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive API documentation for seamless integration
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#playground"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100"
              >
                API Playground
              </a>
              <a
                href="#sdk"
                className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Download SDK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 sticky top-8">
                <h3 className="font-bold mb-4 text-gray-900 dark:text-white">
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
                            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">{renderTabContent()}</div>
          </div>
        </div>
      </section>

      {/* API Playground */}
      <section
        id="playground"
        className="section-padding bg-gray-50 dark:bg-dark-800"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Interactive <span className="text-gradient">API Playground</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Test our API endpoints directly in your browser
            </p>
          </div>

          <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Try It Out
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Method
                    </label>
                    <select className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white">
                      <option>GET</option>
                      <option>POST</option>
                      <option>PUT</option>
                      <option>DELETE</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Endpoint
                    </label>
                    <input
                      type="text"
                      placeholder="/api/users/profile"
                      className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Authorization
                    </label>
                    <input
                      type="password"
                      placeholder="Bearer token"
                      className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <button className="btn-primary w-full">
                    Execute Request
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Response
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-64 overflow-auto">
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              SDKs & <span className="text-gradient">Libraries</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Official SDKs for popular programming languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                JavaScript
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                For Node.js and browser applications
              </p>
              <code className="block text-xs bg-gray-100 dark:bg-dark-700 p-2 rounded mb-3">
                npm install @limitlessinfotech/api
              </code>
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
              >
                Documentation
              </a>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">PY</span>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Python
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                For Python applications
              </p>
              <code className="block text-xs bg-gray-100 dark:bg-dark-700 p-2 rounded mb-3">
                pip install limitlessinfotech-api
              </code>
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
              >
                Documentation
              </a>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">JAVA</span>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Java
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                For Java applications
              </p>
              <code className="block text-xs bg-gray-100 dark:bg-dark-700 p-2 rounded mb-3">
                Maven dependency
              </code>
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
              >
                Documentation
              </a>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">NET</span>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                .NET
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                For .NET applications
              </p>
              <code className="block text-xs bg-gray-100 dark:bg-dark-700 p-2 rounded mb-3">
                NuGet package
              </code>
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Integrate?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with our API today and unlock the full potential of
              our platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100"
              >
                Get API Access
              </a>
              <a
                href="/api-documentation"
                className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600"
              >
                View Full Docs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocumentation;
