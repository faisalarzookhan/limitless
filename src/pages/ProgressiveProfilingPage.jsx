import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiUser,
  HiBriefcase,
  HiLightBulb,
  HiSparkles,
  HiChartBar,
  HiShieldCheck,
  HiClock,
  HiUserGroup,
  HiCheckCircle,
  HiCode,
} from 'react-icons/hi';
import ProgressiveProfiling from '../components/ProgressiveProfiling';

const ProgressiveProfilingPage = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingData, setOnboardingData] = useState(null);

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

  const handleOnboardingComplete = data => {
    setOnboardingData(data);
    setShowOnboarding(false);
    // In a real app, you would save this data to your backend
    console.log('Onboarding data:', data);
  };

  const handleOnboardingCancel = () => {
    setShowOnboarding(false);
  };

  const benefits = [
    {
      title: 'Reduced Friction',
      description: 'Collect information gradually without overwhelming users',
      icon: HiClock,
      color: 'from-[#2563eb] to-[#ffc957]',
    },
    {
      title: 'Higher Completion',
      description: 'Users are more likely to complete profile information',
      icon: HiChartBar,
      color: 'from-[#ffc957] to-[#2563eb]',
    },
    {
      title: 'Personalized Experience',
      description: 'Tailor the experience based on user preferences',
      icon: HiUser,
      color: 'from-[#2563eb] to-[#1d4ed8]',
    },
    {
      title: 'Better Data Quality',
      description: 'Collect more accurate information over time',
      icon: HiShieldCheck,
      color: 'from-[#ffc957] to-[#1d4ed8]',
    },
  ];

  const features = [
    {
      title: 'Smart Field Prioritization',
      description:
        'Show the most important fields first based on user behavior',
    },
    {
      title: 'Context-Aware Suggestions',
      description: 'Provide intelligent suggestions based on previous answers',
    },
    {
      title: 'Cross-Device Sync',
      description: 'Continue where you left off on any device',
    },
    {
      title: 'Privacy-First Approach',
      description: "Only collect what's necessary for personalization",
    },
    {
      title: 'A/B Testing Capabilities',
      description: 'Optimize the onboarding flow based on conversion rates',
    },
    {
      title: 'Integration Ready',
      description: 'Seamlessly integrate with your existing systems',
    },
  ];

  const stats = [
    { label: 'Completion Rate', value: '78%', change: '+32%' },
    { label: 'User Engagement', value: '2.4x', change: '+45%' },
    { label: 'Data Quality', value: '94%', change: '+28%' },
    { label: 'Drop-off Rate', value: '12%', change: '-41%' },
  ];

  return (
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
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">
                Progressive Profiling
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              variants={itemVariants}
            >
              Progressive
              <br />
              Profiling
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Collect user information gradually without overwhelming them
            </motion.p>
            <motion.button
              onClick={() => setShowOnboarding(true)}
              className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              variants={itemVariants}
            >
              Try Demo Onboarding
            </motion.button>
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
              Why <span className="text-[#ffc957]">Progressive Profiling</span>?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Transform your user onboarding experience with smart, gradual
              information collection
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 font-['Figtree']">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
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
              Proven <span className="text-[#ffc957]">Results</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Data-driven improvements to user onboarding and engagement
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-xl p-6 shadow-xl border border-gray-700 text-center"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-['Outfit'] font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 mb-1 font-['Figtree']">
                  {stat.label}
                </div>
                <div
                  className={`text-sm font-['Figtree'] font-medium ${
                    stat.change.startsWith('+')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {stat.change}
                </div>
              </motion.div>
            ))}
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
              Key <span className="text-[#ffc957]">Features</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Advanced capabilities for seamless user onboarding
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiUserGroup className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 font-['Figtree']">
                      {feature.description}
                    </p>
                  </div>
                </div>
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
              Experience the progressive profiling onboarding flow
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {onboardingData ? (
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-['Outfit'] font-bold mb-4 text-white">
                  Onboarding Complete!
                </h3>
                <p className="text-gray-300 mb-6 font-['Figtree']">
                  Thank you for completing the progressive profiling onboarding.
                  Your profile has been updated.
                </p>
                <div className="bg-gray-800 rounded-xl p-4 text-left">
                  <h4 className="font-['Outfit'] font-semibold mb-2 text-white">
                    Your Information:
                  </h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto font-['Figtree']">
                    {JSON.stringify(onboardingData, null, 2)}
                  </pre>
                </div>
                <motion.button
                  onClick={() => {
                    setOnboardingData(null);
                    setShowOnboarding(true);
                  }}
                  className="mt-6 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-xl font-['Figtree'] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
              </motion.div>
            ) : showOnboarding ? (
              <ProgressiveProfiling
                onComplete={handleOnboardingComplete}
                onCancel={handleOnboardingCancel}
              />
            ) : (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiSparkles className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-['Outfit'] font-bold mb-4 text-white">
                  Progressive Profiling Demo
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-['Figtree']">
                  Click the button below to experience our progressive profiling
                  onboarding flow. We'll gradually collect information to
                  personalize your experience.
                </p>
                <motion.button
                  onClick={() => setShowOnboarding(true)}
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-xl font-['Figtree'] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Onboarding
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Implementation Section */}
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
              Easy <span className="text-[#ffc957]">Implementation</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Integrate progressive profiling into your existing onboarding flow
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'API Integration',
                description: 'Simple API endpoints to track and manage user profile completion.',
                icon: HiCode,
                color: 'from-[#2563eb] to-[#ffc957]',
                features: [
                  'RESTful API',
                  'Webhook support',
                  'Real-time updates'
                ]
              },
              {
                title: 'Customizable Flows',
                description: 'Tailor the onboarding experience based on user behavior and preferences.',
                icon: HiUser,
                color: 'from-[#ffc957] to-[#2563eb]',
                features: [
                  'Dynamic field ordering',
                  'Conditional logic',
                  'A/B testing'
                ]
              },
              {
                title: 'Privacy & Security',
                description: 'Built with privacy-first principles and enterprise-grade security.',
                icon: HiShieldCheck,
                color: 'from-[#2563eb] to-[#1d4ed8]',
                features: [
                  'GDPR compliant',
                  'End-to-end encryption',
                  'SOC 2 certified'
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 font-['Figtree']">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <HiCheckCircle className="w-4 h-4 text-[#2563eb]" />
                      <span className="text-sm font-['Figtree']">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Ready to Improve Your Onboarding?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#0a0b0d]/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Implement progressive profiling to reduce friction and increase
              completion rates
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

      {/* Modal Overlay */}
      {showOnboarding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl">
            <ProgressiveProfiling
              onComplete={handleOnboardingComplete}
              onCancel={handleOnboardingCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressiveProfilingPage;