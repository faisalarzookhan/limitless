import React from 'react';
import QuickQuoteForm from '../components/QuickQuoteForm';
import TechnicalAuditForm from '../components/TechnicalAuditForm';
import DedicatedTeamForm from '../components/DedicatedTeamForm';
import PartnerWhiteLabelForm from '../components/PartnerWhiteLabelForm';
import Layout from '../components/layout/Layout';
import {
  HiOutlineLightningBolt,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineChatAlt2,
} from 'react-icons/hi';

const LeadGenerationFormsPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-900 dark:to-dark-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Lead Generation Forms
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with our solutions through our specialized forms. Whether
              you're looking for a quick quote, a technical audit, dedicated
              team services, or partnership opportunities, we have the right
              form for you.
            </p>
          </div>

          {/* Forms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Quick Quote Form */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <HiOutlineLightningBolt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Quick Quote Form
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get a personalized quote in minutes. Share your requirements and
                we'll provide a detailed estimate tailored to your needs.
              </p>
              <QuickQuoteForm />
            </div>

            {/* Technical Audit Form */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <HiOutlineDocumentText className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Audit Form
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Request a comprehensive technical audit of your website. We'll
                analyze performance, security, and SEO metrics to identify
                improvement opportunities.
              </p>
              <TechnicalAuditForm />
            </div>

            {/* Dedicated Team Form */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <HiOutlineUserGroup className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Dedicated Team Form
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Apply for our dedicated team services. Describe your project
                needs and we'll match you with the right expertise and
                resources.
              </p>
              <DedicatedTeamForm />
            </div>

            {/* Partner/White-Label Form */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-4">
                  <HiOutlineBriefcase className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Partner/White-Label Form
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore partnership opportunities with our white-label
                solutions. Join our network of trusted partners and expand your
                service offerings.
              </p>
              <PartnerWhiteLabelForm />
            </div>
          </div>

          {/* How Our Forms Help You */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-dark-700 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              How Our Forms Help You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineChatAlt2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Instant Connection
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with our team immediately through our specialized
                  forms designed for different types of inquiries and
                  requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineLightningBolt className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tailored Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each form is designed to capture the specific information
                  needed to provide you with the most relevant solutions and
                  recommendations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineGlobeAlt className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Fast Response
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our forms streamline the communication process, ensuring you
                  get responses and solutions faster than traditional inquiry
                  methods.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Choose the form that best matches your needs and connect with our
              team. We're here to help you achieve your business goals with our
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
                Get a Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Request Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadGenerationFormsPage;
