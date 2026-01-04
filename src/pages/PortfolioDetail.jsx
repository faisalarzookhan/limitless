import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ErrorBoundary from '../components/ErrorBoundary';
import {
  HiArrowLeft,
  HiCheckCircle,
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiShoppingCart,
  HiAcademicCap,
  HiTruck,
  HiHeart,
  HiOfficeBuilding,
  HiCash,
  HiStar,
  HiCalendar,
  HiClock,
  HiUserGroup,
  HiExternalLink,
} from 'react-icons/hi';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Portfolio data (in a real app, this would come from an API or database)
  const portfolioProjects = {
    1: {
      id: 1,
      title: 'TechVision CRM System',
      client: 'TechVision Solutions',
      industry: 'Technology',
      year: '2023',
      duration: '4 months',
      teamSize: '5 developers',
      description:
        'A comprehensive customer relationship management system designed to streamline sales, marketing, and customer service operations for a growing technology company.',
      challenge:
        'TechVision Solutions was struggling with disconnected systems for managing customer data, leading to inefficiencies, data inconsistencies, and missed opportunities. They needed a unified platform that could integrate all customer touchpoints and provide actionable insights.',
      solution:
        'We developed a custom CRM system with advanced features including automated lead scoring, sales pipeline visualization, email integration, task management, and comprehensive analytics dashboards. The system was built with a modern tech stack ensuring scalability and performance.',
      implementation: [
        'Conducted thorough requirements analysis with stakeholders from sales, marketing, and customer service departments',
        'Designed an intuitive UI/UX that required minimal training',
        'Built a robust backend with role-based access control and data encryption',
        'Integrated with existing email systems and marketing automation tools',
        'Implemented real-time notifications and automated workflow triggers',
        'Deployed with comprehensive training and documentation',
      ],
      technologies: [
        'React.js for frontend',
        'Node.js & Express for backend',
        'PostgreSQL for database',
        'Redis for caching',
        'AWS for cloud hosting',
        'Stripe for payment processing',
      ],
      results: [
        {
          metric: 'Productivity Increase',
          value: '+40%',
          description: 'Sales team efficiency improved significantly',
        },
        {
          metric: 'Data Accuracy',
          value: '+35%',
          description: 'Reduction in data entry errors',
        },
        {
          metric: 'Customer Satisfaction',
          value: '+50%',
          description: 'Faster response times and better service',
        },
        {
          metric: 'Revenue Growth',
          value: '+25%',
          description: 'Better lead management led to more conversions',
        },
      ],
      testimonial: {
        text: 'Limitless transformed our business with a custom CRM system. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40%!',
        author: 'Rajesh Kumar',
        role: 'CEO, TechVision Solutions',
        rating: 5,
      },
      features: [
        'Customer & Contact Management',
        'Lead & Opportunity Tracking',
        'Sales Pipeline Visualization',
        'Email Integration & Tracking',
        'Task & Activity Management',
        'Custom Reports & Dashboards',
        'Role-Based Access Control',
        'Mobile Responsive Interface',
        'API for Third-Party Integration',
        'Automated Workflows & Notifications',
      ],
      icon: HiChartBar,
      color: 'from-[#2563eb] to-[#ffc957]',
      tags: ['CRM', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    2: {
      id: 2,
      title: 'StyleHub E-commerce Platform',
      client: 'StyleHub Fashion',
      industry: 'Retail & Fashion',
      year: '2023',
      duration: '5 months',
      teamSize: '6 developers',
      description:
        'A modern, feature-rich e-commerce platform for a fashion retailer looking to expand their online presence and compete with major players in the industry.',
      challenge:
        "StyleHub Fashion had an outdated e-commerce platform that couldn't handle increasing traffic, lacked modern features like AI recommendations, and provided a poor mobile experience. They were losing customers to competitors with better online experiences.",
      solution:
        'We built a next-generation e-commerce platform with AI-powered product recommendations, seamless checkout, advanced search and filtering, inventory management, and a stunning responsive design. The platform was optimized for speed and conversion.',
      implementation: [
        'Redesigned the entire user experience with focus on mobile-first approach',
        'Integrated AI-powered recommendation engine for personalized shopping',
        'Implemented advanced product search with filters and sorting',
        'Built secure payment gateway integration with multiple payment options',
        'Created admin panel for inventory, orders, and customer management',
        'Optimized images and implemented lazy loading for fast page loads',
        'Added customer reviews and ratings system',
        'Integrated with shipping providers for real-time tracking',
      ],
      technologies: [
        'Next.js for server-side rendering',
        'React for interactive UI',
        'Stripe & PayPal for payments',
        'TensorFlow for AI recommendations',
        'MongoDB for product data',
        'Redis for session management',
        'AWS S3 for image storage',
        'Vercel for deployment',
      ],
      results: [
        {
          metric: 'Sales Increase',
          value: '+300%',
          description: 'Massive growth in online sales',
        },
        {
          metric: 'Conversion Rate',
          value: '+85%',
          description: 'Better UX led to more purchases',
        },
        {
          metric: 'Website Traffic',
          value: '+250%',
          description: 'Improved SEO and user experience',
        },
        {
          metric: 'Mobile Orders',
          value: '+400%',
          description: 'Mobile-first design paid off',
        },
      ],
      testimonial: {
        text: 'The e-commerce platform they built for us is stunning and incredibly efficient. Sales have tripled since launch. Highly recommend their services!',
        author: 'Priya Sharma',
        role: 'Founder, StyleHub Fashion',
        rating: 5,
      },
      features: [
        'AI-Powered Product Recommendations',
        'Advanced Search & Filtering',
        'One-Click Checkout',
        'Guest Checkout Option',
        'Multiple Payment Gateways',
        'Inventory Management',
        'Order Tracking',
        'Customer Reviews & Ratings',
        'Wishlist & Favorites',
        'Promotional Codes & Discounts',
        'Email Notifications',
        'Analytics Dashboard',
      ],
      icon: HiShoppingCart,
      color: 'from-[#ffc957] to-[#2563eb]',
      tags: ['E-commerce', 'Next.js', 'Stripe', 'AI', 'MongoDB'],
    },
    3: {
      id: 3,
      title: 'LogiTrack Mobile App',
      client: 'LogiTrack Logistics',
      industry: 'Logistics & Transportation',
      year: '2023',
      duration: '6 months',
      teamSize: '4 developers',
      description:
        'A comprehensive mobile application for logistics and delivery management with real-time tracking, route optimization, and driver management features.',
      challenge:
        'LogiTrack was using paper-based systems and basic tools for managing deliveries, resulting in inefficiencies, delivery delays, and poor customer visibility. They needed a modern solution that could work offline and provide real-time updates.',
      solution:
        'We developed a robust mobile application with GPS tracking, route optimization, delivery proof capture, offline functionality, and real-time notifications. The app works seamlessly for drivers in the field and provides customers with live tracking.',
      implementation: [
        'Built native mobile apps for iOS and Android using React Native',
        'Integrated GPS for real-time location tracking',
        'Implemented route optimization algorithms to reduce delivery times',
        'Added offline mode for areas with poor connectivity',
        'Created proof of delivery system with photo and signature capture',
        'Built admin dashboard for fleet and delivery management',
        'Integrated push notifications for status updates',
        'Implemented analytics for performance tracking',
      ],
      technologies: [
        'React Native for cross-platform mobile',
        'Node.js backend API',
        'Google Maps API',
        'Firebase for real-time updates',
        'PostgreSQL for data storage',
        'AWS for cloud infrastructure',
      ],
      results: [
        {
          metric: 'Delivery Efficiency',
          value: '+60%',
          description: 'Faster deliveries with route optimization',
        },
        {
          metric: 'Tracking Accuracy',
          value: '+95%',
          description: 'Real-time GPS tracking',
        },
        {
          metric: 'Operational Cost',
          value: '-30%',
          description: 'Reduced fuel and time costs',
        },
        {
          metric: 'Customer Satisfaction',
          value: '+80%',
          description: 'Better visibility and communication',
        },
      ],
      testimonial: {
        text: "Outstanding mobile app development! The app is intuitive, fast, and our clients love it. The team's expertise in automation saved us countless hours.",
        author: 'Ahmed Ali',
        role: 'Operations Manager, LogiTrack',
        rating: 5,
      },
      features: [
        'Real-Time GPS Tracking',
        'Route Optimization',
        'Delivery Schedule Management',
        'Proof of Delivery Capture',
        'Digital Signatures',
        'Photo Documentation',
        'Offline Mode',
        'Push Notifications',
        'Driver Performance Analytics',
        'Customer Communication',
        'Fleet Management Dashboard',
      ],
      icon: HiTruck,
      color: 'from-[#2563eb] to-[#ffc957]',
      tags: ['Mobile App', 'React Native', 'GPS', 'Real-time', 'Logistics'],
    },
  };

  const project = portfolioProjects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
        <div className="text-center">
          <HiCube className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-['Outfit'] font-bold text-white mb-2">
            Project Not Found
          </h2>
          <p className="text-gray-300 mb-6 font-['Figtree']">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/portfolio" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-xl font-semibold transition-colors font-['Figtree']">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
      {/* Back Button */}
      <motion.div 
        className="bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] border-b border-gray-700"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom px-4 md:px-6 lg:px-8 py-4">
          <motion.button
            onClick={() => navigate('/portfolio')}
            className="flex items-center space-x-2 text-gray-300 hover:text-[#2563eb] transition-colors duration-300 font-['Figtree']"
            variants={itemVariants}
          >
            <HiArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className={`relative py-20 bg-gradient-to-br ${project.color} text-[#0a0b0d] overflow-hidden`}
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
              className="w-24 h-24 bg-[#0a0b0d]/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8"
              variants={itemVariants}
            >
              <project.icon className="w-12 h-12 text-white" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>

            {/* Project Meta */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 text-sm font-['Figtree']"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <HiOfficeBuilding className="w-5 h-5" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiCalendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiClock className="w-5 h-5" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiUserGroup className="w-5 h-5" />
                <span>{project.teamSize}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              The <span className="text-[#ffc957]">Results</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300"
              variants={itemVariants}
            >
              Measurable impact and business outcomes
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl border border-gray-700"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-['Outfit'] font-bold text-[#2563eb] mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-['Outfit'] font-semibold text-white mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-gray-300 font-['Figtree']">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Challenge Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom max-w-5xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-['Outfit'] font-bold mb-6 text-white">
                The Challenge
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-['Figtree']">
                {project.challenge}
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-['Outfit'] font-bold mb-6 text-white">
                Our Solution
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-['Figtree']">
                {project.solution}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Implementation Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom max-w-5xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Implementation <span className="text-[#ffc957]">Process</span>
          </motion.h2>
          <motion.div 
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {project.implementation.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-xl border border-gray-700"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-['Outfit'] font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-300 flex-1 font-['Figtree']">
                  {step}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom max-w-5xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Key <span className="text-[#ffc957]">Features</span>
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-lg border border-gray-700"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <HiCheckCircle className="w-6 h-6 text-[#2563eb] flex-shrink-0" />
                <span className="text-gray-300 font-['Figtree']">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom max-w-5xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Technology <span className="text-[#ffc957]">Stack</span>
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-6 bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-xl border border-gray-700"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <HiCode className="w-8 h-8 text-[#2563eb] flex-shrink-0" />
                <span className="text-lg text-white font-['Figtree']">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom max-w-4xl text-center">
            <motion.div 
              className="flex items-center justify-center mb-6"
              variants={itemVariants}
            >
              {[...Array(project.testimonial.rating)].map((_, i) => (
                <HiStar key={i} className="w-8 h-8 text-[#0a0b0d]" />
              ))}
            </motion.div>
            <motion.blockquote 
              className="text-2xl md:text-3xl font-['Figtree'] font-medium mb-8 italic"
              variants={itemVariants}
            >
              "{project.testimonial.text}"
            </motion.blockquote>
            <motion.div 
              className="flex items-center justify-center space-x-4"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#0a0b0d]/20 rounded-full flex items-center justify-center text-2xl font-['Outfit'] font-bold">
                {project.testimonial.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-['Outfit'] font-semibold text-lg">
                  {project.testimonial.author}
                </div>
                <div className="text-[#0a0b0d]/80 font-['Figtree']">{project.testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-3xl p-12 md:p-16 text-center border border-gray-700"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4 text-white"
              variants={itemVariants}
            >
              Want Similar Results for Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Let's discuss how we can create a custom solution that transforms
              your business
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Link to="/get-started" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="bg-transparent border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']">
                View More Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
    </ErrorBoundary>
  );
};

export default PortfolioDetail;