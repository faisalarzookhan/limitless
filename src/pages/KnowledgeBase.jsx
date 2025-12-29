import { useState } from 'react';
import {
  HiSearch,
  HiDocumentText,
  HiCode,
  HiBookOpen,
  HiVideoCamera,
  HiSparkles,
  HiLightningBolt,
  HiAcademicCap,
  HiChatAlt,
  HiClock,
  HiUserGroup,
  HiChartBar,
} from 'react-icons/hi';
import AIPoweredSearch from '../components/AIPoweredSearch';

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: HiDocumentText, count: 156 },
    { id: 'documentation', name: 'Documentation', icon: HiBookOpen, count: 64 },
    { id: 'api', name: 'API Guides', icon: HiCode, count: 32 },
    { id: 'tutorials', name: 'Tutorials', icon: HiVideoCamera, count: 28 },
    { id: 'tools', name: 'Tools & Calculators', icon: HiSparkles, count: 15 },
    {
      id: 'best-practices',
      name: 'Best Practices',
      icon: HiLightningBolt,
      count: 17,
    },
  ];

  const resources = [
    {
      id: 1,
      title: 'Getting Started with HR-IMS',
      description:
        'Complete guide to setting up and configuring the HR Information Management System',
      category: 'documentation',
      type: 'guide',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['hr-ims', 'setup', 'configuration', 'onboarding'],
      url: '/docs/hr-ims-getting-started',
    },
    {
      id: 2,
      title: 'TrackIT API Integration Guide',
      description:
        'Step-by-step instructions for integrating TrackIT with your existing systems',
      category: 'api',
      type: 'api',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['trackit', 'api', 'integration', 'development'],
      url: '/docs/trackit-api',
    },
    {
      id: 3,
      title: 'Security Best Practices & Compliance',
      description:
        'Learn about our security measures and best practices for securing your data',
      category: 'best-practices',
      type: 'security',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['security', 'compliance', 'best-practices', 'gdpr'],
      url: '/docs/security',
    },
    {
      id: 4,
      title: 'ROI Calculator for HR Solutions',
      description:
        'Interactive tool to calculate the return on investment for HR management solutions',
      category: 'tools',
      type: 'tool',
      date: '2024-01-01',
      readTime: '2 min read',
      tags: ['roi', 'calculator', 'hr', 'finance'],
      url: '/roi-calculator',
    },
    {
      id: 5,
      title: 'Client Portal User Guide',
      description:
        'Complete guide to using the client portal for project tracking and management',
      category: 'documentation',
      type: 'guide',
      date: '2023-12-28',
      readTime: '6 min read',
      tags: ['client-portal', 'guide', 'tracking', 'management'],
      url: '/docs/client-portal',
    },
    {
      id: 6,
      title: 'API Rate Limits and Optimization',
      description:
        'Understanding rate limits and how to optimize your API usage',
      category: 'api',
      type: 'api',
      date: '2023-12-20',
      readTime: '7 min read',
      tags: ['api', 'limits', 'quotas', 'optimization'],
      url: '/docs/api-limits',
    },
    {
      id: 7,
      title: 'Video: Setting up your first project',
      description:
        'Step-by-step video tutorial for creating your first project in our platform',
      category: 'tutorials',
      type: 'video',
      date: '2023-12-15',
      readTime: '15 min watch',
      tags: ['video', 'tutorial', 'setup', 'project'],
      url: '/videos/setup-tutorial',
    },
    {
      id: 8,
      title: 'Compliance and Certifications Overview',
      description:
        'Detailed information about our compliance standards and certifications',
      category: 'best-practices',
      type: 'compliance',
      date: '2023-12-10',
      readTime: '5 min read',
      tags: ['compliance', 'certifications', 'soc2', 'iso27001'],
      url: '/compliance',
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory =
      activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getIconForType = type => {
    switch (type) {
      case 'api':
        return <HiCode className="w-5 h-5 text-green-500" />;
      case 'security':
      case 'compliance':
        return <HiBookOpen className="w-5 h-5 text-red-500" />;
      case 'video':
        return <HiVideoCamera className="w-5 h-5 text-purple-500" />;
      case 'tool':
        return <HiSparkles className="w-5 h-5 text-yellow-500" />;
      case 'guide':
        return <HiDocumentText className="w-5 h-5 text-blue-500" />;
      default:
        return <HiDocumentText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getCategoryIcon = categoryId => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      return <category.icon className="w-5 h-5" />;
    }
    return <HiDocumentText className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiAcademicCap className="w-5 h-5" />
              <span className="text-sm font-semibold">Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              AI-Powered
              <br />
              Knowledge Base
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Find answers, guides, and resources with our intelligent search
              system
            </p>

            <div className="max-w-2xl mx-auto">
              <AIPoweredSearch
                placeholder="Ask anything about our products and services..."
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Browse Resources
              </h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map(category => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                          : 'bg-gray-100 text-gray-700 dark:bg-dark-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full ml-1">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search resources by keyword..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-dark-600 rounded-xl bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredResources.length} of {resources.length}{' '}
                resources
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(resource => (
                <div
                  key={resource.id}
                  className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      {getIconForType(resource.type)}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {resource.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {resource.readTime}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 capitalize">
                      {resource.category.replace('-', ' ')}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={resource.url}
                    className="btn-outline w-full flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>Read More</span>
                  </a>
                </div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <HiSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or browse different categories.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              AI-Powered <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our intelligent search system understands context, intent, and
              provides relevant results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiChatAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Natural Language Search
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ask questions in plain English and get precise answers from our
                knowledge base
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiLightningBolt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Smart Suggestions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get intelligent suggestions based on your search history and
                common queries
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiChartBar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Contextual Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Results are ranked by relevance and context to your specific
                needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Quick <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Frequently accessed resources and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/api-documentation"
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HiCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                API Documentation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete API reference and examples
              </p>
            </a>

            <a
              href="/compliance"
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HiBookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Compliance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Security and compliance information
              </p>
            </a>

            <a
              href="/roi-calculator"
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HiSparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                ROI Calculator
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Calculate your investment returns
              </p>
            </a>

            <a
              href="/client-portal"
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HiUserGroup className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Client Portal
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage your projects and invoices
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our AI-powered search is continuously learning and improving
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100"
              >
                Contact Support
              </a>
              <a
                href="/docs"
                className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Browse All Docs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;
