import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiChat,
  HiPhone,
  HiGlobe,
  HiUserGroup,
  HiLightBulb,
  HiSparkles,
  HiChartBar,
  HiShieldCheck,
  HiClock,
  HiCheckCircle,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';
import WhatsAppBusinessIntegration from '../components/WhatsAppBusinessIntegration';

const WhatsAppIntegrationPage = () => {
  const [showDemo, setShowDemo] = useState(false);

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

  const features = [
    {
      title: '24/7 Availability',
      description: 'Always-on support through WhatsApp Business API',
      icon: HiClock,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Quick Responses',
      description: 'Instant replies to common customer queries',
      icon: HiChat,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Multilingual Support',
      description: 'Support in multiple languages for global reach',
      icon: HiGlobe,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with existing CRM and support systems',
      icon: HiUserGroup,
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  const benefits = [
    {
      title: 'Faster Response Times',
      description: 'Reduce average response time from hours to minutes',
      metric: '75% faster',
    },
    {
      title: 'Higher Engagement',
      description: 'WhatsApp has 98% message open rate vs 20% for email',
      metric: '4.9x more',
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce support costs by automating common queries',
      metric: '60% less',
    },
    {
      title: 'Better Customer Satisfaction',
      description: 'Instant, convenient support increases satisfaction',
      metric: '85% rated',
    },
  ];

  const useCases = [
    {
      title: 'Lead Generation',
      description: 'Capture leads directly through WhatsApp conversations',
    },
    {
      title: 'Customer Support',
      description: 'Provide instant support and resolve issues quickly',
    },
    {
      title: 'Appointment Scheduling',
      description: 'Schedule meetings and demos via WhatsApp',
    },
    {
      title: 'Order Tracking',
      description: 'Send order updates and delivery notifications',
    },
    {
      title: 'Marketing Campaigns',
      description: 'Send personalized marketing messages to customers',
    },
    {
      title: 'Feedback Collection',
      description: 'Collect customer feedback and reviews',
    },
  ];

  const integrations = [
    {
      name: 'WhatsApp Business API',
      description: 'Official WhatsApp integration',
    },
    {
      name: 'Facebook Business',
      description: 'Connect with Facebook Messenger',
    },
    {
      name: 'CRM Systems',
      description: 'Integrate with Salesforce, HubSpot, etc.',
    },
    {
      name: 'Helpdesk Software',
      description: 'Connect with Zendesk, Freshdesk',
    },
    { name: 'Marketing Tools', description: 'Sync with Mailchimp, Klaviyo' },
    { name: 'Analytics', description: 'Track performance and engagement' },
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
        {/* Hero Section */}
        <motion.section 
          className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-[#0a0b0d]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-[#0a0b0d]/20 px-6 py-3 rounded-full mb-8"
                variants={itemVariants}
              >
                <HiChat className="w-5 h-5" />
                <span className="text-sm font-semibold font-['Outfit']">
                  WhatsApp Business
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
                variants={itemVariants}
              >
                WhatsApp
                <br />
                Business Integration
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
                variants={itemVariants}
              >
                Connect with customers on the world's most popular messaging
                platform
              </motion.p>
              <motion.button
                onClick={() => setShowDemo(true)}
                className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Live Demo
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Powerful <span className="text-[#ffc957]">Features</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Everything you need to provide exceptional WhatsApp support
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 font-['Figtree']">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Business <span className="text-[#ffc957]">Benefits</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Transform your customer engagement with WhatsApp Business
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-xl p-6 shadow-xl border border-gray-700 text-center"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <HiChartBar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-3 font-['Figtree']">
                    {benefit.description}
                  </p>
                  <div className="text-2xl font-bold text-[#2563eb] font-['Outfit']">
                    {benefit.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Common <span className="text-[#ffc957]">Use Cases</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                How businesses use WhatsApp Business to engage with customers
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-6 shadow-xl border border-gray-700"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center mb-4">
                    <HiLightBulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 font-['Figtree']">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Integration Options */}
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Seamless <span className="text-[#ffc957]">Integrations</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Connect with your existing tools and systems
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-xl p-6 shadow-xl border border-gray-700 text-center"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ffc957] to-[#2563eb] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <HiSparkles className="w-6 h-6 text-[#0a0b0d]" />
                  </div>
                  <h3 className="font-bold mb-2 text-white font-['Outfit']">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-300 font-['Figtree']">
                    {integration.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Demo Section */}
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Live <span className="text-[#ffc957]">Demo</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Experience our WhatsApp Business integration in action
              </motion.p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
                variants={itemVariants}
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center">
                        <HiChat className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-white font-['Outfit']">
                        WhatsApp Business Demo
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                      <span className="text-sm text-gray-300 font-['Figtree']">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiChat className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2 font-['Outfit']">
                      Try Our WhatsApp Integration
                    </h4>
                    <p className="text-gray-300 mb-6 font-['Figtree']">
                      Click the button below to open the WhatsApp chat widget and
                      experience our integration.
                    </p>
                    <motion.button
                      onClick={() => setShowDemo(true)}
                      className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-xl font-['Figtree'] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Open WhatsApp Chat
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Security & Compliance */}
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Security & <span className="text-[#ffc957]">Compliance</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Enterprise-grade security for your WhatsApp communications
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-xl flex items-center justify-center mb-6">
                  <HiShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-4 text-white">
                  End-to-End Encryption
                </h3>
                <p className="text-gray-300 font-['Figtree']">
                  All messages are encrypted between sender and receiver, ensuring
                  privacy and security.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffc957] to-[#2563eb] rounded-xl flex items-center justify-center mb-6">
                  <HiCheckCircle className="w-6 h-6 text-[#0a0b0d]" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-4 text-white">
                  GDPR Compliant
                </h3>
                <p className="text-gray-300 font-['Figtree']">
                  Full compliance with GDPR and other data protection regulations
                  for global operations.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffc957] to-[#1d4ed8] rounded-xl flex items-center justify-center mb-6">
                  <HiUserGroup className="w-6 h-6 text-[#0a0b0d]" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-4 text-white">
                  Access Controls
                </h3>
                <p className="text-gray-300 font-['Figtree']">
                  Role-based access controls ensure only authorized personnel can
                  access customer data.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="section-padding bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container-custom">
            <div className="text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Ready to Connect with Customers on WhatsApp?
              </motion.h2>
              <motion.p 
                className="text-xl text-[#0a0b0d]/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Implement WhatsApp Business integration to enhance customer
                engagement
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={itemVariants}
              >
                <a
                  href="/contact"
                  className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="bg-transparent border border-[#0a0b0d] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#ffc957] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
                >
                  Explore Services
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Demo Modal */}
        {showDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md">
              <WhatsAppBusinessIntegration />
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default WhatsAppIntegrationPage;
