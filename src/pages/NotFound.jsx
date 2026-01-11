import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Compass, 
  Zap, 
  Code2, 
  Smartphone, 
  MessageCircle,
  AlertTriangle
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Code2 },
    { name: 'Portfolio', path: '/portfolio', icon: Compass },
    { name: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-500/5 blur-[150px] opacity-30 rounded-full" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/5 blur-[100px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 blur-[100px] opacity-20" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        <motion.div 
          className="max-w-4xl w-full px-6 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero 404 */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-12"
          >
            <div className="text-[150px] md:text-[250px] font-black text-white/5 select-none leading-none tracking-tighter">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-[40px] border border-white/10 backdrop-blur-2xl flex items-center justify-center shadow-2xl shadow-primary-500/10"
              >
                <AlertTriangle className="w-20 h-20 md:w-24 md:h-24 text-primary-400 opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Navigation <span className="text-primary-400 italic">Failure</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium"
          >
            The architectural endpoint you are attempting to reach does not exist or has been relocated within the collective.
          </motion.p>

          {/* Core Navigation */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-xl"
              >
                <link.icon className="w-8 h-8 mx-auto mb-4 text-gray-500 group-hover:text-primary-400 transition-colors group-hover:scale-110 duration-500" />
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => window.history.back()}
              className="px-10 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Return to Previous
            </button>
            <Link 
              to="/" 
              className="px-10 py-4 bg-white text-dark-900 font-black rounded-2xl hover:bg-gray-200 transition-all shadow-xl shadow-white/10 flex items-center gap-2 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Core Command
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-20 text-xs font-bold text-gray-600 uppercase tracking-[0.2em]">
            Limitless Infotech Architecture &copy; 2024
          </motion.p>
        </motion.div>
      </div>
    </ErrorBoundary>
  );
};

export default NotFound;