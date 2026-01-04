import Layout from '../components/layout/Layout';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import {
  HiChatAlt2,
  HiCalendar,
  HiDocumentReport,
  HiChartBar,
  HiLightBulb,
  HiUserGroup,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

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

const AuralisAIPage = () => {
  return (
    <ErrorBoundary>
    <Layout>
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
                Auralis AI Architect
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Our specialized AI assistant trained on Limitless project
              whitepapers to answer complex technical queries, schedule
              consultations, and provide personalized recommendations for your
              business needs.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <button className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:from-[#1d4ed8] hover:to-[#ffb830] transition-all duration-300 shadow-lg hover:shadow-xl font-['Outfit'] font-bold">
                Start Conversation
              </button>
              <button className="bg-transparent border-2 border-[#2563eb] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#2563eb] transition-colors font-['Outfit'] font-bold">
                View Documentation
              </button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiChatAlt2 className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Consultative Intelligence
                </h3>
              </div>
              <p className="text-gray-300 font-['Figtree']">
                Auralis AI is trained on our project whitepapers to answer
                complex technical queries and provide detailed insights about
                our solutions and services.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#ffc957]/20 rounded-lg mr-4">
                  <HiCalendar className="w-6 h-6 text-[#ffc957]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Meeting Architect
                </h3>
              </div>
              <p className="text-gray-300 font-['Figtree']">
                Integrated calendar API allowing Auralis to schedule qualified
                meetings directly through the conversation interface.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#0a0b0d]/20 rounded-lg mr-4">
                  <HiDocumentReport className="w-6 h-6 text-[#0a0b0d]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Automated Reporting
                </h3>
              </div>
              <p className="text-gray-300 font-['Figtree']">
                Generate comprehensive technical reports and recommendations
                based on your specific business requirements and technical
                challenges.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiChartBar className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Predictive Analytics
                </h3>
              </div>
              <p className="text-gray-300 font-['Figtree']">
                AI-driven insights for infrastructure scaling and resource
                optimization based on usage patterns and business projections.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#ffc957]/20 rounded-lg mr-4">
                  <HiLightBulb className="w-6 h-6 text-[#ffc957]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Dynamic Content Mapping
                </h3>
              </div>
              <p className="text-gray-300 font-['Figtree']">
                Site content automatically reshuffles based on the lead's
                industry identified by Auralis to provide personalized
                experience.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#0a0b0d]/20 rounded-lg mr-4">
                  <HiUserGroup className="w-6 h-6 text-[#0a0b0d]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Collaborative Sandbox
                </h3>
              </div>
              <p className="text-gray-300 font-['Figtree']">
                Multi-user testing capabilities allowing prospects to invite
                team members into shared temporary Sandbox environments.
              </p>
            </motion.div>
          </motion.div>

          {/* Auralis Chat Interface */}
          <motion.div 
            className="bg-[#1a1c20] rounded-2xl shadow-lg p-6 border border-[#2563eb] border-opacity-30 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-center justify-between mb-6" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white font-['Outfit']">
                Chat with Auralis AI
              </h2>
              <div className="flex items-center text-green-400">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Online</span>
              </div>
            </motion.div>
            <motion.div 
              className="h-96 relative"
              variants={itemVariants}
            >
              <Chatbot />
            </motion.div>
          </motion.div>

          {/* How Auralis Works */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-6 font-['Outfit']">
                How Auralis AI Works
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-['Outfit']">
                      Technical Inquiry
                    </h3>
                    <p className="text-gray-300 font-['Figtree']">
                      Auralis processes your technical questions using our
                      trained knowledge base of project whitepapers and
                      technical documentation.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-['Outfit']">
                      Requirement Analysis
                    </h3>
                    <p className="text-gray-300 font-['Figtree']">
                      The AI analyzes your specific requirements and matches
                      them with our appropriate solutions and services.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-['Outfit']">
                      Personalized Recommendations
                    </h3>
                    <p className="text-gray-300 font-['Figtree']">
                      Auralis provides tailored recommendations based on your
                      industry, technical stack, and business objectives.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-['Outfit']">
                      Scheduling & Follow-up
                    </h3>
                    <p className="text-gray-300 font-['Figtree']">
                      Qualified leads can schedule meetings directly through
                      Auralis or receive personalized follow-up communications.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] rounded-2xl p-8 text-white"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 font-['Outfit']">
                Benefits of Auralis AI
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#e2e8f0] font-['Figtree']">
                    24/7 availability for technical inquiries
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#e2e8f0] font-['Figtree']">
                    Instant access to our technical knowledge base
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#e2e8f0] font-['Figtree']">
                    Personalized recommendations based on your needs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#e2e8f0] font-['Figtree']">
                    Seamless scheduling with our experts
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#e2e8f0] font-['Figtree']">
                    Reduced response time for complex queries
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#e2e8f0] font-['Figtree']">
                    Integration with our sandbox environments
                  </span>
                </li>
              </ul>
            </motion.div>
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
              Ready to Experience Auralis AI?
            </motion.h3>
            <motion.p 
              className="text-[#e2e8f0] mb-6 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Start a conversation with our AI architect today and get
              personalized recommendations for your technical challenges.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <button className="bg-[#ffc957] text-[#0a0b0d] font-semibold py-3 px-8 rounded-lg hover:bg-[#ffb830] transition duration-300 font-['Outfit'] font-bold">
                Start Chatting Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#0a0b0d] transition duration-300 font-['Outfit'] font-bold">
                Schedule Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
    </ErrorBoundary>
  );
};

export default AuralisAIPage;