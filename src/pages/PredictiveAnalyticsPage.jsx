import React from 'react';
import PredictiveAnalyticsDashboard from '../components/PredictiveAnalyticsDashboard';
import Layout from '../components/layout/Layout';

const PredictiveAnalyticsPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Predictive Analytics Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              AI-driven insights and predictions for your business growth.
              Leverage advanced analytics to make data-driven decisions and
              optimize your operations.
            </p>
          </div>

          <div className="mb-12">
            <PredictiveAnalyticsDashboard />
          </div>

          {/* Additional Analytics Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                About Predictive Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our predictive analytics dashboard uses machine learning
                algorithms to analyze your business data and forecast future
                trends. By examining historical patterns and current performance
                metrics, we can predict potential outcomes and recommend
                strategic actions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                The dashboard provides real-time insights into user engagement,
                conversion rates, resource utilization, and ROI projections,
                helping you make informed decisions about your business
                strategy.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                How It Works
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">1.</span>
                  <span>
                    Data collection from various sources including user
                    interactions, performance metrics, and business operations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">2.</span>
                  <span>
                    Machine learning algorithms analyze patterns and identify
                    trends in your data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">3.</span>
                  <span>
                    Predictive models generate forecasts for key business
                    metrics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">4.</span>
                  <span>
                    AI-powered recommendations help optimize your business
                    strategy
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Predictive Analytics?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact our team to learn more about how our predictive analytics
              can help you make data-driven decisions and optimize your business
              operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
                Schedule a Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PredictiveAnalyticsPage;
