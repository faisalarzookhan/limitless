import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiHome,
  HiArrowLeft,
  HiSearch,
  HiQuestionMarkCircle,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: HiHome },
    { name: 'Services', path: '/services', icon: HiSearch },
    { name: 'Portfolio', path: '/portfolio', icon: HiQuestionMarkCircle },
    { name: 'Contact Us', path: '/contact', icon: HiQuestionMarkCircle },
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

  return (
    <ErrorBoundary>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] px-4">
      <motion.div 
        className="max-w-3xl w-full text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated 404 */}
        <motion.div 
          className="relative mb-8"
          variants={itemVariants}
        >
          <div className="text-[180px] md:text-[280px] font-['Outfit'] font-bold bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#2563eb]/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.h1 
          className="text-3xl md:text-5xl font-['Outfit'] font-bold mb-4 text-white"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 mb-8 font-['Figtree']"
          variants={itemVariants}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto mb-12"
          variants={itemVariants}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search our website..."
              className="w-full px-6 py-4 rounded-full border-2 border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-[#2563eb] transition-colors duration-300 font-['Figtree']"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  // Implement search functionality
                  console.log('Search:', e.target.value);
                }
              }}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#2563eb] text-white rounded-full hover:bg-[#1d4ed8] transition-colors duration-300">
              <HiSearch className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-lg font-['Outfit'] font-semibold text-white mb-6"
            variants={itemVariants}
          >
            Try these popular pages instead:
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="p-6 bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl border border-gray-700 hover:border-[#2563eb] hover:shadow-xl transition-all duration-300 block"
                >
                  <link.icon className="w-8 h-8 mx-auto mb-3 text-[#2563eb] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-['Outfit'] font-semibold text-white">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <button
            onClick={() => window.history.back()}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-['Figtree'] flex items-center transition-colors"
          >
            <HiArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <Link to="/" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-xl font-['Figtree'] flex items-center transition-colors">
            <HiHome className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
        </motion.div>

        {/* Help Text */}
        <motion.p 
          className="mt-12 text-sm text-gray-400 font-['Figtree']"
          variants={itemVariants}
        >
          If you believe this is an error, please{' '}
          <Link
            to="/contact"
            className="text-[#2563eb] hover:underline"
          >
            contact us
          </Link>
          .
        </motion.p>
      </motion.div>
    </div>
    </ErrorBoundary>
  );
};

export default NotFound;