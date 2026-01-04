import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiGlobe,
  HiShoppingCart,
  HiAcademicCap,
  HiTruck,
  HiHeart,
  HiOfficeBuilding,
  HiCash,
  HiArrowRight,
  HiFilter,
  HiSearch,
  HiExclamation,
  HiRefresh,
} from 'react-icons/hi';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import ErrorBoundary from '../components/ErrorBoundary';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [portfolioProjects, setPortfolioProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { showError } = useApp();

  const categories = [
    { id: 'all', name: 'All Projects', icon: HiCube },
    { id: 'web', name: 'Web Development', icon: HiCode },
    { id: 'mobile', name: 'Mobile Apps', icon: HiDeviceMobile },
    { id: 'crm', name: 'CRM & Business', icon: HiChartBar },
    { id: 'ecommerce', name: 'E-commerce', icon: HiShoppingCart },
    { id: 'automation', name: 'Automation & AI', icon: HiLightningBolt },
  ];

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

  // Fetch portfolio projects from API
  useEffect(() => {
    const fetchPortfolioProjects = async () => {
      try {
        setLoading(true);
        const data = await api.portfolio.getAll();
        setPortfolioProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio projects:', err);
        setError(err.message || 'Failed to fetch portfolio projects');

        // Show error to user
        showError(
          'Failed to load portfolio projects. Showing sample projects instead.'
        );

        // Fallback to hardcoded data
        setPortfolioProjects([
          {
            id: 101,
            title: 'IVOLEX - Enterprise Resource Planning System',
            category: 'crm',
            client: 'Enterprise Client (Confidential)',
            industry: 'Enterprise Software',
            description:
              'Custom ERP solution with multi-location support, real-time analytics, and comprehensive business management capabilities.',
            image: null,
            tags: ['ERP', 'React', 'Node.js', 'MongoDB', 'React Native'],
            results: {
              efficiency: '+60%',
              automation: '80%',
              locations: '15',
              users: '500+',
            },
            year: '2023',
            duration: '8 months',
            icon: HiOfficeBuilding,
            color: 'from-[#2563eb] to-[#ffc957]',
            featured: true,
            testimonial: {
              text: 'Limitless Infotech transformed our operations with IVOLEX. The system integrated all 15 locations seamlessly, automated 80% of our manual processes, and improved overall efficiency by 60%. Their team was professional, responsive, and delivered beyond expectations.',
              author: 'Operations Director',
              company: 'Enterprise Client',
            },
            fullDescription:
              'IVOLEX is a comprehensive enterprise resource planning system built from ground up to handle complex multi-location operations. The platform includes custom workflow engine, real-time analytics dashboard, mobile applications for iOS and Android, multi-location inventory management, role-based access control, and extensive integration APIs. The system successfully handles 500+ daily active users across 15 locations with 99.9% uptime.',
            features: [
              'Custom workflow engine tailored to business needs',
              'Real-time analytics and reporting dashboard',
              'Native mobile apps for iOS and Android',
              'Multi-location inventory synchronization',
              'Role-based access control with granular permissions',
              'Integration APIs for third-party systems',
              'Automated approval workflows',
              'Document management system',
              'Advanced search and filtering',
              'Audit trails and compliance reporting',
            ],
          },
          {
            id: 102,
            title: 'Wakilni - Legal Services Platform',
            category: 'mobile',
            client: 'Legal Industry Startup',
            industry: 'Legal Technology',
            description:
              'Comprehensive platform connecting 500+ lawyers with 10,000+ clients, featuring case management, document handling, and multi-language support.',
            image: null,
            tags: ['LegalTech', 'React', 'Django', 'PostgreSQL', 'Flutter'],
            results: {
              lawyers: '500+',
              clients: '10,000+',
              resolution: '-80%',
              satisfaction: '95%',
            },
            year: '2024',
            duration: '10 months',
            icon: HiAcademicCap,
            color: 'from-[#ffc957] to-[#2563eb]',
            featured: true,
            testimonial: {
              text: 'Wakilni has revolutionized how we connect legal professionals with clients. The platform is intuitive, scalable, and has helped us build a thriving community of lawyers and clients. Limitless Infotech delivered a world-class solution that exceeded all our expectations.',
              author: 'Founder & CEO',
              company: 'Wakilni Platform',
            },
            fullDescription:
              'Wakilni is a cutting-edge legal services platform that bridges the gap between legal professionals and clients seeking legal assistance. The platform features a comprehensive lawyer directory with detailed profiles, advanced case management system, secure document management, appointment scheduling with calendar integration, integrated payment processing, review and rating system, and full multi-language support in Arabic and English. The platform has successfully onboarded 500+ verified lawyers and serves over 10,000 active clients.',
            features: [
              'Comprehensive lawyer directory with verified profiles',
              'Advanced case management system',
              'Secure document storage and sharing',
              'Appointment scheduling with reminders',
              'Integrated payment gateway',
              'Review and rating system',
              'Multi-language support (Arabic/English)',
              'In-app messaging and notifications',
              'Mobile apps for lawyers and clients',
              'Analytics dashboard for lawyers',
              'Admin panel for platform management',
              'Automated matching algorithm',
            ],
          },
          {
            id: 1,
            title: 'TechVision CRM System',
            category: 'crm',
            client: 'TechVision Solutions',
            industry: 'Technology',
            description:
              'A comprehensive customer relationship management system with advanced analytics and automation.',
            image: null,
            tags: ['CRM', 'React', 'Node.js', 'PostgreSQL'],
            results: {
              productivity: '+40%',
              efficiency: '+35%',
              satisfaction: '+50%',
            },
            year: '2023',
            duration: '4 months',
            icon: HiChartBar,
            color: 'from-[#2563eb] to-[#1d4ed8]',
          },
          {
            id: 2,
            title: 'StyleHub E-commerce Platform',
            category: 'ecommerce',
            client: 'StyleHub Fashion',
            industry: 'Retail & Fashion',
            description:
              'Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.',
            image: null,
            tags: ['E-commerce', 'Next.js', 'Stripe', 'AI'],
            results: {
              sales: '+300%',
              conversion: '+85%',
              traffic: '+250%',
            },
            year: '2023',
            duration: '5 months',
            icon: HiShoppingCart,
            color: 'from-[#ffc957] to-[#1d4ed8]',
          },
          {
            id: 3,
            title: 'LogiTrack Mobile App',
            category: 'mobile',
            client: 'LogiTrack Logistics',
            industry: 'Logistics & Transportation',
            description:
              'Real-time logistics tracking mobile application with route optimization and delivery management.',
            image: null,
            tags: ['Mobile App', 'React Native', 'GPS', 'Real-time'],
            results: {
              efficiency: '+60%',
              accuracy: '+95%',
              cost: '-30%',
            },
            year: '2023',
            duration: '6 months',
            icon: HiTruck,
            color: 'from-[#2563eb] to-[#ffc957]',
          },
          {
            id: 4,
            title: 'EduLearn LMS Platform',
            category: 'web',
            client: 'EduLearn Academy',
            industry: 'Education',
            description:
              'Complete learning management system with video streaming, assessments, and progress tracking.',
            image: null,
            tags: ['LMS', 'React', 'Video Streaming', 'MongoDB'],
            results: {
              engagement: '+120%',
              completion: '+80%',
              satisfaction: '+90%',
            },
            year: '2023',
            duration: '7 months',
            icon: HiAcademicCap,
            color: 'from-[#ffc957] to-[#2563eb]',
          },
          {
            id: 5,
            title: 'HealthCare Patient Portal',
            category: 'web',
            client: 'HealthCare Plus',
            industry: 'Healthcare',
            description:
              'Secure patient portal with appointment scheduling, medical records, and telemedicine integration.',
            image: null,
            tags: ['Healthcare', 'HIPAA', 'Vue.js', 'Telemedicine'],
            results: {
              appointments: '+150%',
              paperwork: '-70%',
              satisfaction: '+85%',
            },
            year: '2023',
            duration: '8 months',
            icon: HiHeart,
            color: 'from-[#2563eb] to-[#1d4ed8]',
          },
          {
            id: 6,
            title: 'FinTech Payment Gateway',
            category: 'web',
            client: 'SecurePay Financial',
            industry: 'Financial Services',
            description:
              'Enterprise payment gateway with multi-currency support and fraud detection.',
            image: null,
            tags: ['FinTech', 'Payment', 'Security', 'Node.js'],
            results: {
              transactions: '+500%',
              security: '99.9%',
              uptime: '99.99%',
            },
            year: '2022',
            duration: '10 months',
            icon: HiCash,
            color: 'from-[#ffc957] to-[#2563eb]',
          },
          {
            id: 7,
            title: 'Smart Office Automation',
            category: 'automation',
            client: 'Corporate Offices Ltd',
            industry: 'Corporate',
            description:
              'IoT-based office automation system with AI-powered resource management and energy optimization.',
            image: null,
            tags: ['IoT', 'AI', 'Automation', 'Python'],
            results: {
              energy: '-40%',
              efficiency: '+55%',
              cost: '-35%',
            },
            year: '2023',
            duration: '5 months',
            icon: HiOfficeBuilding,
            color: 'from-[#2563eb] to-[#ffc957]',
          },
          {
            id: 8,
            title: 'RestaurantPro Management',
            category: 'mobile',
            client: 'Restaurant Chain Group',
            industry: 'Food & Beverage',
            description:
              'Complete restaurant management system with POS, inventory, and customer loyalty program.',
            image: null,
            tags: ['Mobile', 'POS', 'Inventory', 'Flutter'],
            results: {
              orders: '+180%',
              accuracy: '+98%',
              waste: '-45%',
            },
            year: '2023',
            duration: '4 months',
            icon: HiShoppingCart,
            color: 'from-[#ffc957] to-[#1d4ed8]',
          },
          {
            id: 9,
            title: 'PropertyHub Real Estate Platform',
            category: 'web',
            client: 'PropertyHub Realty',
            industry: 'Real Estate',
            description:
              'Modern real estate platform with virtual tours, mortgage calculator, and agent matching.',
            image: null,
            tags: ['Real Estate', 'React', '3D Tours', 'Maps'],
            results: {
              listings: '+400%',
              leads: '+220%',
              conversion: '+95%',
            },
            year: '2022',
            duration: '6 months',
            icon: HiOfficeBuilding,
            color: 'from-[#2563eb] to-[#1d4ed8]',
          },
          {
            id: 10,
            title: 'AI Chatbot for Customer Service',
            category: 'automation',
            client: 'CustomerFirst Inc',
            industry: 'Customer Service',
            description:
              'Intelligent AI chatbot with natural language processing and multi-language support.',
            image: null,
            tags: ['AI', 'NLP', 'Chatbot', 'Machine Learning'],
            results: {
              response: '-90%',
              satisfaction: '+75%',
              cost: '-60%',
            },
            year: '2023',
            duration: '3 months',
            icon: HiLightningBolt,
            color: 'from-[#ffc957] to-[#2563eb]',
          },
          {
            id: 11,
            title: 'FitLife Fitness App',
            category: 'mobile',
            client: 'FitLife Wellness',
            industry: 'Health & Fitness',
            description:
              'Comprehensive fitness app with workout tracking, meal planning, and social features.',
            image: null,
            tags: ['Mobile', 'Health', 'React Native', 'Firebase'],
            results: {
              users: '+1000%',
              engagement: '+150%',
              retention: '+85%',
            },
            year: '2023',
            duration: '5 months',
            icon: HiHeart,
            color: 'from-[#2563eb] to-[#ffc957]',
          },
          {
            id: 12,
            title: 'Enterprise ERP System',
            category: 'crm',
            client: 'Manufacturing Corp',
            industry: 'Manufacturing',
            description:
              'Custom ERP system integrating inventory, production, sales, and finance departments.',
            image: null,
            tags: ['ERP', 'Enterprise', '.NET', 'SQL Server'],
            results: {
              integration: '+100%',
              errors: '-85%',
              productivity: '+65%',
            },
            year: '2022',
            duration: '12 months',
            icon: HiChartBar,
            color: 'from-[#ffc957] to-[#2563eb]',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioProjects();
  }, []);

  const filteredProjects = portfolioProjects.filter(project => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Industries Served' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-[#0a0b0d] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#0a0b0d]/20 px-6 py-3 rounded-full mb-8"
              variants={itemVariants}
            >
              <HiCube className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">Our Success Stories</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              variants={itemVariants}
            >
              Portfolio of Excellence
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Explore our showcase of successful projects that have transformed
              businesses across industries
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#0a0b0d]/80 font-['Figtree']">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filter and Search Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2563eb] mb-4"></div>
              <h3 className="text-xl font-['Outfit'] font-semibold text-white mb-2">
                Loading projects...
              </h3>
              <p className="text-gray-300 font-['Figtree']">
                Please wait while we fetch our portfolio
              </p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/20 mb-4">
                <HiExclamation className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-['Outfit'] font-semibold text-white mb-2">
                Unable to Load Projects
              </h3>
              <p className="text-gray-300 mb-6 font-['Figtree']">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors duration-300 font-['Figtree']"
              >
                <HiRefresh className="w-5 h-5" />
                <span>Retry</span>
              </button>
            </div>
          )}

          {/* Search Bar */}
          {!loading && !error && (
            <motion.div 
              className="max-w-2xl mx-auto mb-12"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className="relative">
                <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, client, industry, or technology..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] text-white font-['Figtree']"
                />
              </div>
            </motion.div>
          )}

          {/* Category Filter */}
          {!loading && !error && (
            <motion.div 
              className="flex items-center justify-center mb-12"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className="inline-flex items-center space-x-2 bg-gray-800 p-2 rounded-xl border border-gray-700">
                <HiFilter className="w-5 h-5 text-gray-400 ml-2" />
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-['Figtree'] transition-all duration-300 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-[#2563eb] text-white shadow-lg'
                          : 'text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          {!loading && !error && (
            <motion.div 
              className="text-center mb-8"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <p className="text-gray-300 font-['Figtree']">
                Showing{' '}
                <span className="font-semibold text-[#2563eb]">
                  {filteredProjects.length}
                </span>{' '}
                project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </motion.div>
          )}

          {/* Portfolio Grid */}
          {!loading && !error && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="block bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#2563eb]/50"
                  >
                    {/* Project Image/Icon */}
                    <div
                      className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                    >
                      <project.icon className="w-24 h-24 text-white opacity-80 transform group-hover:scale-110 transition-transform duration-300" />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <p className="text-sm font-semibold mb-1 font-['Figtree']">
                            View Case Study
                          </p>
                          <HiArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-[#0a0b0d]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white font-['Figtree']">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wide font-['Figtree']">
                          {project.industry}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-xs text-gray-400 font-['Figtree']">
                          {project.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-['Outfit'] font-bold mb-2 text-white group-hover:text-[#2563eb] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-300 mb-4 font-['Figtree']">
                        {project.client}
                      </p>

                      <p className="text-gray-300 mb-4 line-clamp-2 font-['Figtree']">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="bg-[#2563eb]/20 text-[#2563eb] px-2 py-1 rounded-full text-xs font-['Figtree']">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Results Preview */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-700">
                        {Object.entries(project.results)
                          .slice(0, 3)
                          .map(([key, value], i) => (
                            <div key={i} className="text-center">
                              <div className="text-lg font-['Outfit'] font-bold text-[#2563eb]">
                                {value}
                              </div>
                              <div className="text-xs text-gray-400 capitalize font-['Figtree']">
                                {key}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* No Results */}
          {!loading && !error && filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <HiCube className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-['Outfit'] font-semibold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-300 font-['Figtree']">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
            variants={itemVariants}
          >
            Ready to Be Our Next Success Story?
          </motion.h2>
          <motion.p 
            className="text-xl text-[#0a0b0d]/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
            variants={itemVariants}
          >
            Let's create something amazing together. Your project could be
            featured here next!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Link
              to="/get-started"
              className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-[#0a0b0d] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#ffc957] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
    </ErrorBoundary>
  );
};

export default Portfolio;