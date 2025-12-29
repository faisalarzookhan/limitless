import { Link } from 'react-router-dom';
import {
  HiHome,
  HiArrowLeft,
  HiSearch,
  HiQuestionMarkCircle,
} from 'react-icons/hi';

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: HiHome },
    { name: 'Services', path: '/services', icon: HiSearch },
    { name: 'Portfolio', path: '/portfolio', icon: HiQuestionMarkCircle },
    { name: 'Contact Us', path: '/contact', icon: HiQuestionMarkCircle },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 px-4">
      <div className="max-w-3xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-[180px] md:text-[280px] font-bold text-gradient leading-none select-none animate-float">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Page Not Found
        </h1>
        <p
          className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Search Bar */}
        <div
          className="max-w-md mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search our website..."
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  // Implement search functionality
                  console.log('Search:', e.target.value);
                }
              }}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-300">
              <HiSearch className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div
          className="mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Try these popular pages instead:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group p-6 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-primary-500 hover:shadow-lg transition-all duration-300"
              >
                <link.icon className="w-8 h-8 mx-auto mb-3 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={() => window.history.back()}
            className="btn-outline flex items-center"
          >
            <HiArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <Link to="/" className="btn-primary flex items-center">
            <HiHome className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
        </div>

        {/* Help Text */}
        <p
          className="mt-12 text-sm text-gray-500 dark:text-gray-500 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          If you believe this is an error, please{' '}
          <Link
            to="/contact"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
