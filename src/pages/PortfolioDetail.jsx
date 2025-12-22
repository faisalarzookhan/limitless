import { useParams, Link, useNavigate } from 'react-router-dom';
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
  HiExternalLink
} from 'react-icons/hi';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      description: 'A comprehensive customer relationship management system designed to streamline sales, marketing, and customer service operations for a growing technology company.',
      challenge: 'TechVision Solutions was struggling with disconnected systems for managing customer data, leading to inefficiencies, data inconsistencies, and missed opportunities. They needed a unified platform that could integrate all customer touchpoints and provide actionable insights.',
      solution: 'We developed a custom CRM system with advanced features including automated lead scoring, sales pipeline visualization, email integration, task management, and comprehensive analytics dashboards. The system was built with a modern tech stack ensuring scalability and performance.',
      implementation: [
        'Conducted thorough requirements analysis with stakeholders from sales, marketing, and customer service departments',
        'Designed an intuitive UI/UX that required minimal training',
        'Built a robust backend with role-based access control and data encryption',
        'Integrated with existing email systems and marketing automation tools',
        'Implemented real-time notifications and automated workflow triggers',
        'Deployed with comprehensive training and documentation'
      ],
      technologies: [
        'React.js for frontend',
        'Node.js & Express for backend',
        'PostgreSQL for database',
        'Redis for caching',
        'AWS for cloud hosting',
        'Stripe for payment processing'
      ],
      results: [
        { metric: 'Productivity Increase', value: '+40%', description: 'Sales team efficiency improved significantly' },
        { metric: 'Data Accuracy', value: '+35%', description: 'Reduction in data entry errors' },
        { metric: 'Customer Satisfaction', value: '+50%', description: 'Faster response times and better service' },
        { metric: 'Revenue Growth', value: '+25%', description: 'Better lead management led to more conversions' }
      ],
      testimonial: {
        text: 'Limitless transformed our business with a custom CRM system. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40%!',
        author: 'Rajesh Kumar',
        role: 'CEO, TechVision Solutions',
        rating: 5
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
        'Automated Workflows & Notifications'
      ],
      icon: HiChartBar,
      color: 'from-green-500 to-emerald-500',
      tags: ['CRM', 'React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    2: {
      id: 2,
      title: 'StyleHub E-commerce Platform',
      client: 'StyleHub Fashion',
      industry: 'Retail & Fashion',
      year: '2023',
      duration: '5 months',
      teamSize: '6 developers',
      description: 'A modern, feature-rich e-commerce platform for a fashion retailer looking to expand their online presence and compete with major players in the industry.',
      challenge: 'StyleHub Fashion had an outdated e-commerce platform that couldn\'t handle increasing traffic, lacked modern features like AI recommendations, and provided a poor mobile experience. They were losing customers to competitors with better online experiences.',
      solution: 'We built a next-generation e-commerce platform with AI-powered product recommendations, seamless checkout, advanced search and filtering, inventory management, and a stunning responsive design. The platform was optimized for speed and conversion.',
      implementation: [
        'Redesigned the entire user experience with focus on mobile-first approach',
        'Integrated AI-powered recommendation engine for personalized shopping',
        'Implemented advanced product search with filters and sorting',
        'Built secure payment gateway integration with multiple payment options',
        'Created admin panel for inventory, orders, and customer management',
        'Optimized images and implemented lazy loading for fast page loads',
        'Added customer reviews and ratings system',
        'Integrated with shipping providers for real-time tracking'
      ],
      technologies: [
        'Next.js for server-side rendering',
        'React for interactive UI',
        'Stripe & PayPal for payments',
        'TensorFlow for AI recommendations',
        'MongoDB for product data',
        'Redis for session management',
        'AWS S3 for image storage',
        'Vercel for deployment'
      ],
      results: [
        { metric: 'Sales Increase', value: '+300%', description: 'Massive growth in online sales' },
        { metric: 'Conversion Rate', value: '+85%', description: 'Better UX led to more purchases' },
        { metric: 'Website Traffic', value: '+250%', description: 'Improved SEO and user experience' },
        { metric: 'Mobile Orders', value: '+400%', description: 'Mobile-first design paid off' }
      ],
      testimonial: {
        text: 'The e-commerce platform they built for us is stunning and incredibly efficient. Sales have tripled since launch. Highly recommend their services!',
        author: 'Priya Sharma',
        role: 'Founder, StyleHub Fashion',
        rating: 5
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
        'Analytics Dashboard'
      ],
      icon: HiShoppingCart,
      color: 'from-pink-500 to-rose-500',
      tags: ['E-commerce', 'Next.js', 'Stripe', 'AI', 'MongoDB']
    },
    3: {
      id: 3,
      title: 'LogiTrack Mobile App',
      client: 'LogiTrack Logistics',
      industry: 'Logistics & Transportation',
      year: '2023',
      duration: '6 months',
      teamSize: '4 developers',
      description: 'A comprehensive mobile application for logistics and delivery management with real-time tracking, route optimization, and driver management features.',
      challenge: 'LogiTrack was using paper-based systems and basic tools for managing deliveries, resulting in inefficiencies, delivery delays, and poor customer visibility. They needed a modern solution that could work offline and provide real-time updates.',
      solution: 'We developed a robust mobile application with GPS tracking, route optimization, delivery proof capture, offline functionality, and real-time notifications. The app works seamlessly for drivers in the field and provides customers with live tracking.',
      implementation: [
        'Built native mobile apps for iOS and Android using React Native',
        'Integrated GPS for real-time location tracking',
        'Implemented route optimization algorithms to reduce delivery times',
        'Added offline mode for areas with poor connectivity',
        'Created proof of delivery system with photo and signature capture',
        'Built admin dashboard for fleet and delivery management',
        'Integrated push notifications for status updates',
        'Implemented analytics for performance tracking'
      ],
      technologies: [
        'React Native for cross-platform mobile',
        'Node.js backend API',
        'Google Maps API',
        'Firebase for real-time updates',
        'PostgreSQL for data storage',
        'AWS for cloud infrastructure'
      ],
      results: [
        { metric: 'Delivery Efficiency', value: '+60%', description: 'Faster deliveries with route optimization' },
        { metric: 'Tracking Accuracy', value: '+95%', description: 'Real-time GPS tracking' },
        { metric: 'Operational Cost', value: '-30%', description: 'Reduced fuel and time costs' },
        { metric: 'Customer Satisfaction', value: '+80%', description: 'Better visibility and communication' }
      ],
      testimonial: {
        text: 'Outstanding mobile app development! The app is intuitive, fast, and our clients love it. The team\'s expertise in automation saved us countless hours.',
        author: 'Ahmed Ali',
        role: 'Operations Manager, LogiTrack',
        rating: 5
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
        'Fleet Management Dashboard'
      ],
      icon: HiTruck,
      color: 'from-blue-500 to-cyan-500',
      tags: ['Mobile App', 'React Native', 'GPS', 'Real-time', 'Logistics']
    }
  };

  const project = portfolioProjects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <HiCube className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Project Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/portfolio" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700">
        <div className="container-custom px-4 md:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br ${project.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8" aria-hidden="true">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <project.icon className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
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
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The <span className="text-gradient">Results</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Measurable impact and business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                Our Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Implementation <span className="text-gradient">Process</span>
          </h2>
          <div className="space-y-4">
            {project.implementation.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-dark-800 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Key <span className="text-gradient">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-dark-900 rounded-lg">
                <HiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
                <HiCode className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span className="text-lg text-gray-900 dark:text-white font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="container-custom max-w-4xl text-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(project.testimonial.rating)].map((_, i) => (
                <HiStar key={i} className="w-8 h-8 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
              "{project.testimonial.text}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                {project.testimonial.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">
                  {project.testimonial.author}
                </div>
                <div className="text-white/80">
                  {project.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800 rounded-3xl p-12 md:p-16 text-center border border-primary-200 dark:border-dark-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Want Similar Results for Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a custom solution that transforms your business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/get-started" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
