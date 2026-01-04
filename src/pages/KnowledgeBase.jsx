import { useState } from 'react';
import { motion } from 'framer-motion';
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
import ErrorBoundary from '../components/ErrorBoundary';

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

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#0a0b0d]/20 px-6 py-3 rounded-full mb-8"
              variants={itemVariants}
            >
              <HiAcademicCap className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">Knowledge Base</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              variants={itemVariants}
            >
              AI-Powered
              <br />
              Knowledge Base
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Find answers, guides, and resources with our intelligent search
              system
            </motion.p>

            <motion.div 
              className="max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <AIPoweredSearch
                placeholder="Ask anything about our products and services..."
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <motion.h2 
                className="text-2xl font-['Outfit'] font-bold mb-6 text-white"
                variants={itemVariants}
              >
                Browse Resources
              </motion.h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map(category => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-['Figtree'] transition-colors ${
                        activeCategory === category.id
                          ? 'bg-[#2563eb]/20 text-[#2563eb]'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full ml-1">
                        {category.count}
                      </span>
                    </motion.button>
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
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent font-['Figtree']"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-300 font-['Figtree']">
                Showing {filteredResources.length} of {resources.length}{' '}
                resources
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-6 shadow-xl border border-gray-700"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center">
                      {getIconForType(resource.type)}
                    </div>
                    <span className="text-xs text-gray-400 font-['Figtree']">
                      {resource.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-['Outfit'] font-bold mb-2 text-white line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 font-['Figtree']">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-400 font-['Figtree']">
                      {resource.readTime}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-['Figtree'] bg-[#2563eb]/20 text-[#2563eb] capitalize">
                      {resource.category.replace('-', ' ')}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-['Figtree'] bg-gray-800 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={resource.url}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-lg text-sm font-['Figtree'] w-full flex items-center justify-center transition-colors"
                  >
                    <span>Read More</span>
                  </a>
                </motion.div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <HiSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-['Outfit'] font-medium text-white mb-2">
                  No resources found
                </h3>
                <p className="text-gray-300 font-['Figtree']">
                  Try adjusting your search or browse different categories.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* AI Features Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              AI-Powered <span className="text-[#ffc957]">Features</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Our intelligent search system understands context, intent, and
              provides relevant results
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HiChatAlt,
                title: 'Natural Language Search',
                description: 'Ask questions in plain English and get precise answers from our knowledge base'
              },
              {
                icon: HiLightningBolt,
                title: 'Smart Suggestions',
                description: 'Get intelligent suggestions based on your search history and common queries'
              },
              {
                icon: HiChartBar,
                title: 'Contextual Results',
                description: 'Results are ranked by relevance and context to your specific needs'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-['Figtree']">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick Links Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Quick <span className="text-[#ffc957]">Resources</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Frequently accessed resources and tools
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HiCode,
                title: 'API Documentation',
                description: 'Complete API reference and examples',
                url: '/api-documentation',
                color: 'from-[#2563eb] to-[#ffc957]'
              },
              {
                icon: HiBookOpen,
                title: 'Compliance',
                description: 'Security and compliance information',
                url: '/compliance',
                color: 'from-[#ffc957] to-[#2563eb]'
              },
              {
                icon: HiSparkles,
                title: 'ROI Calculator',
                description: 'Calculate your investment returns',
                url: '/roi-calculator',
                color: 'from-[#ffc957] to-[#1d4ed8]'
              },
              {
                icon: HiUserGroup,
                title: 'Client Portal',
                description: 'Manage your projects and invoices',
                url: '/client-portal',
                color: 'from-[#1d4ed8] to-[#ffc957]'
              }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-lg transition-shadow duration-300 text-center block"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Outfit'] font-bold mb-2 text-white">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-300 font-['Figtree']">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Can't Find What You Need?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#0a0b0d]/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Our AI-powered search is continuously learning and improving
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <a
                href="/contact"
                className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                Contact Support
              </a>
              <a
                href="/docs"
                className="bg-transparent border border-[#0a0b0d] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#ffc957] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                Browse All Docs
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
    </ErrorBoundary>
  );
};

export default KnowledgeBase;