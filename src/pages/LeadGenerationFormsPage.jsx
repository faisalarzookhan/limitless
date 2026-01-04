import React from 'react';
import { motion } from 'framer-motion';
import QuickQuoteForm from '../components/QuickQuoteForm';
import TechnicalAuditForm from '../components/TechnicalAuditForm';
import DedicatedTeamForm from '../components/DedicatedTeamForm';
import PartnerWhiteLabelForm from '../components/PartnerWhiteLabelForm';
import Layout from '../components/layout/Layout';
import ErrorBoundary from '../components/ErrorBoundary';
import {
  HiOutlineLightningBolt,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineChatAlt2,
} from 'react-icons/hi';

const LeadGenerationFormsPage = () => {
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
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-6"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent">
                  Lead Generation Forms
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-['Figtree']"
                variants={itemVariants}
              >
                Connect with our solutions through our specialized forms. Whether
                you're looking for a quick quote, a technical audit, dedicated
                team services, or partnership opportunities, we have the right
                form for you.
              </motion.p>
            </motion.div>

            {/* Forms Grid */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Quick Quote Form */}
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl p-6 border border-gray-700"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                    <HiOutlineLightningBolt className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-semibold text-white">
                    Quick Quote Form
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 font-['Figtree']">
                  Get a personalized quote in minutes. Share your requirements and
                  we'll provide a detailed estimate tailored to your needs.
                </p>
                <QuickQuoteForm />
              </motion.div>

              {/* Technical Audit Form */}
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl p-6 border border-gray-700"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-900/20 rounded-lg mr-4">
                    <HiOutlineDocumentText className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-semibold text-white">
                    Technical Audit Form
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 font-['Figtree']">
                  Request a comprehensive technical audit of your website. We'll
                  analyze performance, security, and SEO metrics to identify
                  improvement opportunities.
                </p>
                <TechnicalAuditForm />
              </motion.div>

              {/* Dedicated Team Form */}
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl p-6 border border-gray-700"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-900/20 rounded-lg mr-4">
                    <HiOutlineUserGroup className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-semibold text-white">
                    Dedicated Team Form
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 font-['Figtree']">
                  Apply for our dedicated team services. Describe your project
                  needs and we'll match you with the right expertise and
                  resources.
                </p>
                <DedicatedTeamForm />
              </motion.div>

              {/* Partner/White-Label Form */}
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl p-6 border border-gray-700"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#ffc957]/20 rounded-lg mr-4">
                    <HiOutlineBriefcase className="w-6 h-6 text-[#ffc957]" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-semibold text-white">
                    Partner/White-Label Form
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 font-['Figtree']">
                  Explore partnership opportunities with our white-label
                  solutions. Join our network of trusted partners and expand your
                  service offerings.
                </p>
                <PartnerWhiteLabelForm />
              </motion.div>
            </motion.div>

            {/* How Our Forms Help You */}
            <motion.div 
              className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl p-8 border border-gray-700 mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl font-['Outfit'] font-bold text-center text-white mb-8"
                variants={itemVariants}
              >
                How Our Forms Help You
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: HiOutlineChatAlt2,
                    title: 'Instant Connection',
                    description: 'Connect with our team immediately through our specialized forms designed for different types of inquiries and requirements.',
                    color: 'blue'
                  },
                  {
                    icon: HiOutlineLightningBolt,
                    title: 'Tailored Solutions',
                    description: 'Each form is designed to capture the specific information needed to provide you with the most relevant solutions and recommendations.',
                    color: 'green'
                  },
                  {
                    icon: HiOutlineGlobeAlt,
                    title: 'Fast Response',
                    description: 'Our forms streamline the communication process, ensuring you get responses and solutions faster than traditional inquiry methods.',
                    color: 'purple'
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-[#2563eb]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-[#2563eb]" />
                    </div>
                    <h3 className="text-xl font-['Outfit'] font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 font-['Figtree']">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
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
                Ready to Get Started?
              </motion.h3>
              <motion.p 
                className="text-[#0a0b0d]/80 mb-6 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Choose the form that best matches your needs and connect with our
                team. We're here to help you achieve your business goals with our
                solutions.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                variants={itemVariants}
              >
                <button className="bg-[#0a0b0d] text-[#ffc957] font-semibold py-3 px-8 rounded-lg hover:bg-[#1a1c25] transition duration-300 font-['Figtree']">
                  Get a Quote
                </button>
                <button className="bg-transparent border-2 border-[#0a0b0d] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:bg-[#0a0b0d] hover:text-[#ffc957] transition duration-300 font-['Figtree']">
                  Request Audit
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </ErrorBoundary>
  );
};

export default LeadGenerationFormsPage;