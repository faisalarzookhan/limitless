import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CareerApplicationForm from '../components/forms/career/CareerApplicationForm';
import ErrorBoundary from '../components/ErrorBoundary';

const JobApplication = () => {
  const { jobId } = useParams();

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

  // In a real application, you would fetch job details based on the jobId
  // For now, we'll just render the form
  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-gradient-to-br from-white dark:from-dark-900 to-gray-100 dark:to-dark-800 bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <motion.section 
        className="relative py-16 bg-gradient-to-r from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
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
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Apply for Position
            </motion.h1>
            <motion.p 
              className="text-xl text-[#0a0b0d]/80 font-['Figtree']"
              variants={itemVariants}
            >
              Join our team and help us build the future of technology
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Application Form Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-white dark:from-dark-900 to-gray-100 dark:to-dark-800 text-gray-900 dark:text-gray-100"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-white dark:from-dark-800 to-gray-100 dark:to-dark-700 rounded-3xl p-8 md:p-10 shadow-xl dark:shadow-soft-dark border border-gray-200 dark:border-dark-700"
              variants={itemVariants}
            >
              <div className="text-center mb-8">
                <motion.h2 
                  className="text-3xl font-['Outfit'] font-bold text-white mb-2"
                  variants={itemVariants}
                >
                  Job Application
                </motion.h2>
                <motion.p 
                  className="text-gray-300 font-['Figtree']"
                  variants={itemVariants}
                >
                  Fill out the form below to apply for the position
                </motion.p>
              </div>

              <CareerApplicationForm />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
    </ErrorBoundary>
  );
};

export default JobApplication;