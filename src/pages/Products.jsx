import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiServer,
  HiChartBar,
  HiUsers,
  HiClock,
  HiTicket,
  HiMail,
  HiDatabase,
  HiCheckCircle,
  HiArrowRight,
  HiLightningBolt,
  HiShieldCheck,
  HiCube,
  HiPlay,
  HiDownload,
  HiStar,
} from 'react-icons/hi';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'management', name: 'Management' },
    { id: 'tracking', name: 'Tracking & Monitoring' },
    { id: 'communication', name: 'Communication' },
    { id: 'development', name: 'Development Tools' },
  ];

  const products = [
    {
      id: 'trackit',
      name: 'TrackIT',
      tagline: 'Track Everything, Manage Anything',
      category: 'tracking',
      description:
        'Comprehensive IT asset tracking and management solution for modern enterprises',
      longDescription:
        'TrackIT is your complete IT asset management system that helps you track, manage, and optimize all your IT resources. From hardware to software licenses, TrackIT gives you complete visibility and control over your IT infrastructure.',
      icon: HiServer,
      color: 'blue',
      monthlyPrice: 9999,
      yearlyPrice: 99999,
      features: [
        'Hardware & Software Asset Tracking',
        'License Management & Compliance',
        'Warranty & Maintenance Tracking',
        'Asset Lifecycle Management',
        'Depreciation Calculations',
        'Audit Reports & Compliance',
        'QR Code Integration',
        'Real-time Inventory Updates',
        'Custom Fields & Tags',
        'Multi-location Support',
      ],
      targetUsers: ['IT Departments', 'System Administrators', 'Asset Managers'],
      useCases: [
        'Track all IT assets across multiple locations',
        'Manage software licenses and renewals',
        'Generate compliance and audit reports',
        'Plan hardware refresh cycles',
      ],
      metrics: {
        users: '500+',
        satisfaction: '4.8/5',
        uptime: '99.9%',
      },
    },
    {
      id: 'tracko',
      name: 'TrackO',
      tagline: 'Operations Excellence, Simplified',
      category: 'tracking',
      description:
        'End-to-end operations tracking and workflow management for peak efficiency',
      longDescription:
        'TrackO streamlines your business operations with real-time tracking, workflow automation, and intelligent analytics. Perfect for manufacturing, logistics, and service industries.',
      icon: HiChartBar,
      color: 'green',
      monthlyPrice: 14999,
      yearlyPrice: 149999,
      features: [
        'Real-time Operations Monitoring',
        'Workflow Automation',
        'Task Assignment & Tracking',
        'Performance Analytics Dashboard',
        'Resource Allocation',
        'Process Optimization',
        'Custom Dashboards',
        'Integration APIs',
        'Mobile App Support',
        'Notification System',
      ],
      targetUsers: ['Operations Managers', 'Process Engineers', 'Business Analysts'],
      useCases: [
        'Monitor production floor activities',
        'Automate repetitive workflows',
        'Track KPIs and performance metrics',
        'Optimize resource utilization',
      ],
      metrics: {
        users: '1,000+',
        satisfaction: '4.7/5',
        efficiency: '+45%',
      },
    },
    {
      id: 'hrims',
      name: 'HR-IMS',
      tagline: 'Empower Your People, Elevate Your Business',
      category: 'management',
      description:
        'Complete HR management solution for modern businesses of all sizes',
      longDescription:
        'HR-IMS is your all-in-one human resources management system that handles everything from recruitment to retirement. Streamline HR processes, engage employees, and drive organizational growth.',
      icon: HiUsers,
      color: 'purple',
      monthlyPrice: 19999,
      yearlyPrice: 199999,
      popular: true,
      features: [
        'Employee Database Management',
        'Recruitment & Onboarding',
        'Attendance & Leave Management',
        'Payroll Processing',
        'Performance Appraisals',
        'Training & Development',
        'Employee Self-Service Portal',
        'Compliance & Reporting',
        'Document Management',
        'Mobile Access',
      ],
      targetUsers: ['HR Departments', 'People Operations', 'Business Owners'],
      useCases: [
        'Streamline recruitment and onboarding',
        'Automate payroll and attendance',
        'Conduct performance reviews',
        'Manage employee benefits and training',
      ],
      metrics: {
        users: '2,000+',
        satisfaction: '4.9/5',
        timesSaved: '20 hrs/week',
      },
    },
    {
      id: 'worktrack',
      name: 'WorkTrack',
      tagline: 'Know Where Time Goes',
      category: 'tracking',
      description:
        'Advanced workforce management and productivity tracking solution',
      longDescription:
        'WorkTrack helps you understand how your team spends time, optimize productivity, and improve project profitability. Perfect for agencies, consultancies, and remote teams.',
      icon: HiClock,
      color: 'orange',
      monthlyPrice: 7999,
      yearlyPrice: 79999,
      features: [
        'Time Tracking & Timesheets',
        'Project Time Allocation',
        'Attendance Management',
        'Shift Scheduling',
        'GPS-based Clock In/Out',
        'Productivity Analytics',
        'Billable Hours Tracking',
        'Mobile App Support',
        'Screenshot Monitoring (Optional)',
        'Integration with Project Tools',
      ],
      targetUsers: ['Project Managers', 'Team Leads', 'Remote Teams'],
      useCases: [
        'Track billable hours for clients',
        'Monitor remote team productivity',
        'Schedule shifts and manage attendance',
        'Generate accurate timesheets',
      ],
      metrics: {
        users: '1,500+',
        satisfaction: '4.6/5',
        accuracy: '99%',
      },
    },
    {
      id: 'ittms',
      name: 'IT-TMS',
      tagline: 'Support Made Simple',
      category: 'management',
      description:
        'Comprehensive IT helpdesk and ticket management system',
      longDescription:
        'IT-TMS is your complete IT service management solution that helps you deliver exceptional support. Manage tickets, track SLAs, and keep your users happy.',
      icon: HiTicket,
      color: 'red',
      monthlyPrice: 12999,
      yearlyPrice: 129999,
      features: [
        'Ticket Creation & Assignment',
        'Priority & SLA Management',
        'Knowledge Base Integration',
        'Multi-channel Support (Email, Chat, Portal)',
        'Automated Workflows',
        'Asset Linking',
        'Customer Portal',
        'Analytics & Reporting',
        'Escalation Rules',
        'Mobile App',
      ],
      targetUsers: ['IT Support Teams', 'Help Desk', 'Service Desk'],
      useCases: [
        'Manage IT support tickets',
        'Track SLA compliance',
        'Build knowledge base',
        'Provide multi-channel support',
      ],
      metrics: {
        users: '800+',
        satisfaction: '4.7/5',
        resolution: '-40% time',
      },
    },
    {
      id: 'mailto',
      name: 'MailTO',
      tagline: 'Email Management, Perfected',
      category: 'communication',
      description:
        'Intelligent email management and automation platform',
      longDescription:
        'MailTO helps you take control of your inbox with smart automation, team collaboration, and powerful analytics. Perfect for sales teams, support teams, and agencies.',
      icon: HiMail,
      color: 'cyan',
      monthlyPrice: 8999,
      yearlyPrice: 89999,
      features: [
        'Unified Inbox Management',
        'Email Automation & Templates',
        'Campaign Management',
        'Email Analytics',
        'Team Collaboration',
        'Priority Inbox',
        'Smart Filters & Rules',
        'SMTP/IMAP Integration',
        'Contact Management',
        'Tracking & Reporting',
      ],
      targetUsers: ['Sales Teams', 'Marketing Departments', 'Customer Support'],
      useCases: [
        'Manage team email workflows',
        'Automate follow-up sequences',
        'Track email campaigns',
        'Collaborate on customer emails',
      ],
      metrics: {
        users: '1,200+',
        satisfaction: '4.8/5',
        productivity: '+35%',
      },
    },
    {
      id: 'baseless',
      name: 'Baseless',
      tagline: 'Build APIs at Lightning Speed',
      category: 'development',
      description:
        'Flexible database management and instant API generation platform',
      longDescription:
        'Baseless is a revolutionary platform that lets you design databases visually and generate production-ready APIs instantly. Perfect for developers, startups, and rapid prototyping.',
      icon: HiDatabase,
      color: 'indigo',
      monthlyPrice: 0,
      yearlyPrice: 0,
      badge: 'Beta',
      features: [
        'Visual Database Designer',
        'Automatic API Generation',
        'Data Migration Tools',
        'Backup & Recovery',
        'Query Builder',
        'Performance Monitoring',
        'Multi-database Support (SQL, NoSQL)',
        'REST API Documentation',
        'GraphQL Support',
        'Developer Tools',
      ],
      targetUsers: ['Developers', 'Database Administrators', 'System Architects'],
      useCases: [
        'Rapid API prototyping',
        'Database migration projects',
        'Build backend without code',
        'Generate API documentation',
      ],
      metrics: {
        users: '500+ Beta',
        satisfaction: '4.9/5',
        speed: '10x faster',
      },
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-600 to-blue-400',
      green: 'from-green-600 to-green-400',
      purple: 'from-purple-600 to-purple-400',
      orange: 'from-orange-600 to-orange-400',
      red: 'from-red-600 to-red-400',
      cyan: 'from-cyan-600 to-cyan-400',
      indigo: 'from-indigo-600 to-indigo-400',
    };
    return colors[color] || colors.blue;
  };

  const formatPrice = (price) => {
    if (price === 0) return 'Free';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>
        <div className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8" aria-hidden="true">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center animate-float">
                <HiCube className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Enterprise Products by Limitless Infotech
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-deploy SaaS solutions that accelerate your business. Choose from our suite of 7 production-ready products or request a custom solution.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started?product=all-products" className="btn-primary">
                Request Demo
                <HiPlay className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-dark-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-primary text-white'
                    : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;
              const colorClasses = getColorClasses(product.color);

              return (
                <div
                  key={product.id}
                  className={`relative bg-dark-800 rounded-2xl border ${
                    product.popular
                      ? 'border-primary-600 shadow-2xl shadow-primary-600/20'
                      : 'border-dark-700'
                  } transition-all duration-300 hover:border-primary-600/50 hover:transform hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-white flex items-center">
                        <HiStar className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {product.badge && (
                    <div className="absolute -top-4 right-4">
                      <span className="bg-yellow-500 text-dark-900 px-3 py-1 rounded-full text-xs font-bold">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colorClasses} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Product Name & Tagline */}
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-sm text-primary-400 mb-4">{product.tagline}</p>
                    <p className="text-gray-400 mb-6 line-clamp-2">{product.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-white">
                          {formatPrice(product.monthlyPrice)}
                        </span>
                        {product.monthlyPrice > 0 && (
                          <span className="text-gray-400 ml-2">/month</span>
                        )}
                      </div>
                      {product.monthlyPrice === 0 && (
                        <p className="text-sm text-green-400 mt-2">Currently in Beta - Free Access</p>
                      )}
                    </div>

                    {/* Key Features (Top 5) */}
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <HiCheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <div className="mb-6 p-4 bg-dark-900/50 rounded-lg border border-dark-700">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {Object.entries(product.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-primary-400 font-semibold">{value}</div>
                            <div className="text-gray-500 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="btn-block text-center btn-primary"
                      >
                        Learn More
                        <HiArrowRight className="w-5 h-5 ml-2 inline" />
                      </button>
                      <Link
                        to={`/get-started?product=${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                        className="btn-block text-center btn-secondary"
                      >
                        Request Demo
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(
                      selectedProduct.color
                    )} rounded-2xl flex items-center justify-center`}
                  >
                    <selectedProduct.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedProduct.name}</h2>
                    <p className="text-primary-400">{selectedProduct.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Long Description */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {selectedProduct.longDescription}
              </p>

              {/* All Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Complete Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <HiCheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Users */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Perfect For</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.targetUsers.map((user, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm"
                    >
                      {user}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Common Use Cases</h3>
                <ul className="space-y-3">
                  {selectedProduct.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start">
                      <HiLightningBolt className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to={`/get-started?product=${selectedProduct.name.replace(/\s+/g, '-').toLowerCase()}`} className="btn-primary">
                  Request Demo
                  <HiPlay className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/pricing" className="btn-secondary">
                  View Pricing
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Our Products */}
      <section className="py-16 bg-dark-800/30 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Built with enterprise-grade technology and backed by exceptional support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: HiShieldCheck,
                  title: 'Enterprise Security',
                  description:
                    'Bank-level encryption, SOC2 compliance, and regular security audits',
                },
                {
                  icon: HiLightningBolt,
                  title: 'Lightning Fast',
                  description:
                    'Optimized performance with 99.9% uptime and sub-second response times',
                },
                {
                  icon: HiUsers,
                  title: '24/7 Support',
                  description:
                    'Dedicated support team available around the clock to help you succeed',
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-600 transition-all"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto animate-float">
                <HiDownload className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with a free demo and see how our products can accelerate your growth
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started?product=all-products" className="btn-primary">
                Request Demo
              </Link>
              <Link to="/contact" className="btn-secondary">
                Talk to Sales
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>

            <p className="text-gray-500 mt-8 text-sm">
              💬 Questions? Call us at{' '}
              <a
                href="tel:+917710909492"
                className="text-primary-400 hover:underline"
              >
                +91 77109 09492
              </a>{' '}
              or email{' '}
              <a
                href="mailto:products@limitlessinfotech.com"
                className="text-primary-400 hover:underline"
              >
                products@limitlessinfotech.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-dark-800/30 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
