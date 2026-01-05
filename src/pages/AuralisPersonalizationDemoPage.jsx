import Layout from '../components/layout/Layout';
import AuralisPersonalizationEngine from '../components/features/AuralisPersonalizationEngine';
import { motion } from 'framer-motion';
import {
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineAcademicCap,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

const AuralisPersonalizationDemoPage = () => {
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
      <AuralisPersonalizationEngine>
        <div className="min-h-screen bg-[#0a0b0d] py-8 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div 
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Outfit']"
                variants={itemVariants}
              >
                <span className="text-[#ffc957]">
                  Auralis AI Personalization Engine
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-['Figtree']"
                variants={itemVariants}
              >
                Experience dynamic content adaptation based on your industry,
                behavior, and preferences. Our AI engine reshuffles site content
                to provide the most relevant experience for your needs.
              </motion.p>
            </motion.div>

            {/* How It Works */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                    <HiOutlineGlobe className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-['Outfit']">
                    Industry Detection
                  </h3>
                </div>
                <p className="text-gray-300 font-['Figtree']">
                  Our AI analyzes your browsing behavior to identify your
                  industry and specific needs. This allows us to surface the
                  most relevant content and solutions.
                </p>
              </motion.div>

              <motion.div 
                className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#ffc957]/20 rounded-lg mr-4">
                    <HiOutlineUserGroup className="w-6 h-6 text-[#ffc957]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-['Outfit']">
                    Behavior Analysis
                  </h3>
                </div>
                <p className="text-gray-300 font-['Figtree']">
                  We track your interactions to understand your preferences and
                  engagement patterns. This data helps us refine your experience
                  over time.
                </p>
              </motion.div>

              <motion.div 
                className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#0a0b0d]/20 rounded-lg mr-4">
                    <HiOutlineLightBulb className="w-6 h-6 text-[#0a0b0d]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-['Outfit']">
                    Dynamic Adaptation
                  </h3>
                </div>
                <p className="text-gray-300 font-['Figtree']">
                  Content is automatically reshuffled and personalized in
                  real-time based on your detected industry and preferences for
                  optimal relevance.
                </p>
              </motion.div>
            </motion.div>

            {/* Personalization Features */}
            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-8 border border-[#2563eb] border-opacity-30 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-3xl font-bold text-center text-white mb-12 font-['Outfit']"
                variants={itemVariants}
              >
                Personalization Features
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="p-2 bg-[#2563eb]/20 rounded-lg mr-4">
                      <HiOutlineChartBar className="w-5 h-5 text-[#2563eb]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-['Outfit']">
                        Content Reshuffling
                      </h3>
                      <p className="text-gray-300 font-['Figtree']">
                        Site content automatically reshuffles based on your
                        industry identified by Auralis, ensuring you see the
                        most relevant information first.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="p-2 bg-[#ffc957]/20 rounded-lg mr-4">
                      <HiOutlineCog className="w-5 h-5 text-[#ffc957]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-['Outfit']">
                        Adaptive UI
                      </h3>
                      <p className="text-gray-300 font-['Figtree']">
                        User interface elements adapt to your preferences,
                        showing relevant CTAs and navigation options based on
                        your behavior patterns.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={itemVariants}>
                    <div className="p-2 bg-[#0a0b0d]/20 rounded-lg mr-4">
                      <HiOutlineAcademicCap className="w-5 h-5 text-[#0a0b0d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-['Outfit']">
                        Smart Recommendations
                      </h3>
                      <p className="text-gray-300 font-['Figtree']">
                        Get personalized recommendations for products, services,
                        and content based on your industry and engagement
                        patterns.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] rounded-xl p-6 text-white"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold mb-4 font-['Outfit']">
                    Real-Time Adaptation
                  </h3>
                  <p className="mb-4 text-[#e2e8f0] font-['Figtree']">
                    The Auralis AI Personalization Engine works in real-time,
                    continuously analyzing your behavior and adjusting the
                    experience to provide maximum relevance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="font-['Figtree']">Industry detection based on browsing patterns</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="font-['Figtree']">Content prioritization based on interest</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="font-['Figtree']">Adaptive navigation and CTAs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="font-['Figtree']">Personalized recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="font-['Figtree']">Behavior-based content reshuffling</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Demo Section */}
            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-8 border border-[#2563eb] border-opacity-30 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-3xl font-bold text-center text-white mb-8 font-['Outfit']"
                variants={itemVariants}
              >
                Experience Personalization
              </motion.h2>

              <div className="text-center mb-8">
                <p className="text-lg text-gray-300 mb-6 font-['Figtree']">
                  Browse our site to see how Auralis AI adapts the content to
                  your industry and interests. The more you explore, the more
                  personalized your experience becomes.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:from-[#1d4ed8] hover:to-[#ffb830] transition-all duration-300 shadow-lg hover:shadow-xl font-['Outfit'] font-bold">
                    Browse Solutions
                  </button>
                  <button className="bg-transparent border-2 border-[#2563eb] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#2563eb] transition-colors font-['Outfit'] font-bold">
                    View Case Studies
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-[#1a1c20] rounded-xl p-6 text-center border border-[#2563eb]/30"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-[#2563eb]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineLightBulb className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 font-['Outfit']">
                    Dynamic Content
                  </h3>
                  <p className="text-sm text-gray-300 font-['Figtree']">
                    Content adapts in real-time based on your behavior and
                    interests
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-[#1a1c20] rounded-xl p-6 text-center border border-[#2563eb]/30"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-[#ffc957]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineUserGroup className="w-6 h-6 text-[#ffc957]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 font-['Outfit']">
                    Industry Focus
                  </h3>
                  <p className="text-sm text-gray-300 font-['Figtree']">
                    Solutions and examples tailored to your specific industry
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-[#1a1c20] rounded-xl p-6 text-center border border-[#2563eb]/30"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-[#0a0b0d]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineChartBar className="w-6 h-6 text-[#0a0b0d]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 font-['Outfit']">
                    Smart Analytics
                  </h3>
                  <p className="text-sm text-gray-300 font-['Figtree']">
                    Continuous learning to improve your experience over time
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] rounded-2xl shadow-xl p-8 text-white text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4 font-['Outfit']"
                variants={itemVariants}
              >
                Ready to Experience Personalized AI?
              </motion.h3>
              <motion.p 
                className="text-[#e2e8f0] mb-6 max-w-2xl mx-auto font-['Figtree']"
                variants={itemVariants}
              >
                Start interacting with our site to see how Auralis AI
                personalizes your experience. The system learns from your
                behavior to provide increasingly relevant content and
                recommendations.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                variants={itemVariants}
              >
                <button className="bg-[#ffc957] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:bg-[#ffb830] transition duration-300 font-['Outfit'] font-bold">
                  Start Exploring
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#0a0b0d] transition duration-300 font-['Outfit'] font-bold">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AuralisPersonalizationEngine>
    </Layout>
    </ErrorBoundary>
  );
};

export default AuralisPersonalizationDemoPage;