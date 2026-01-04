import React from 'react';
import { motion } from 'framer-motion';
import PredictiveAnalyticsDashboard from '../components/PredictiveAnalyticsDashboard';
import Layout from '../components/layout/Layout';

const PredictiveAnalyticsPage = () => {
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
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl font-['Outfit'] font-bold text-white mb-4"
              variants={itemVariants}
            >
              Predictive Analytics Dashboard
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              AI-driven insights and predictions for your business growth.
              Leverage advanced analytics to make data-driven decisions and
              optimize your operations.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <PredictiveAnalyticsDashboard />
          </motion.div>

          {/* Additional Analytics Content */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl p-6 border border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-xl font-['Outfit'] font-semibold text-white mb-4">
                About Predictive Analytics
              </h3>
              <p className="text-gray-300 mb-4 font-['Figtree']">
                Our predictive analytics dashboard uses machine learning
                algorithms to analyze your business data and forecast future
                trends. By examining historical patterns and current performance
                metrics, we can predict potential outcomes and recommend
                strategic actions.
              </p>
              <p className="text-gray-300 font-['Figtree']">
                The dashboard provides real-time insights into user engagement,
                conversion rates, resource utilization, and ROI projections,
                helping you make informed decisions about your business
                strategy.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl p-6 border border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-xl font-['Outfit'] font-semibold text-white mb-4">
                How It Works
              </h3>
              <ul className="space-y-3 text-gray-300 font-['Figtree']">
                <li className="flex items-start">
                  <span className="text-[#2563eb] font-bold mr-2">1.</span>
                  <span>
                    Data collection from various sources including user
                    interactions, performance metrics, and business operations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] font-bold mr-2">2.</span>
                  <span>
                    Machine learning algorithms analyze patterns and identify
                    trends in your data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] font-bold mr-2">3.</span>
                  <span>
                    Predictive models generate forecasts for key business
                    metrics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] font-bold mr-2">4.</span>
                  <span>
                    AI-powered recommendations help optimize your business
                    strategy
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] rounded-2xl shadow-xl p-8 text-[#0a0b0d] text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Ready to Transform Your Business with Predictive Analytics?
            </motion.h3>
            <motion.p 
              className="text-[#0a0b0d]/80 mb-6 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Contact our team to learn more about how our predictive analytics
              can help you make data-driven decisions and optimize your business
              operations.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <button className="bg-[#0a0b0d] text-[#ffc957] font-semibold py-3 px-8 rounded-lg hover:bg-[#1a1c25] transition duration-300 font-['Figtree']">
                Schedule a Demo
              </button>
              <button className="bg-transparent border-2 border-[#0a0b0d] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:bg-[#0a0b0d] hover:text-[#ffc957] transition duration-300 font-['Figtree']">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PredictiveAnalyticsPage;