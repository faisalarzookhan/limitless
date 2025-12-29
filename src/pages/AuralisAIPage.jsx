import React from 'react';
import Chatbot from '../components/Chatbot';
import Layout from '../components/layout/Layout';
import { HiChatAlt2, HiCalendar, HiDocumentReport, HiChartBar, HiLightBulb, HiUserGroup } from 'react-icons/hi';

const AuralisAIPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-900 dark:to-dark-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Auralis AI Architect
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our specialized AI assistant trained on Limitless project whitepapers to answer complex technical queries, 
              schedule consultations, and provide personalized recommendations for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Conversation
              </button>
              <button className="bg-white dark:bg-dark-800 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg border border-gray-300 dark:border-dark-600 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <HiChatAlt2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Consultative Intelligence</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Auralis AI is trained on our project whitepapers to answer complex technical queries 
                and provide detailed insights about our solutions and services.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <HiCalendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Meeting Architect</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Integrated calendar API allowing Auralis to schedule qualified meetings directly 
                through the conversation interface.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <HiDocumentReport className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Automated Reporting</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Generate comprehensive technical reports and recommendations based on your specific 
                business requirements and technical challenges.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-4">
                  <HiChartBar className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Predictive Analytics</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                AI-driven insights for infrastructure scaling and resource optimization based 
                on usage patterns and business projections.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                  <HiLightBulb className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Dynamic Content Mapping</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Site content automatically reshuffles based on the lead's industry identified 
                by Auralis to provide personalized experience.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                  <HiUserGroup className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Collaborative Sandbox</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Multi-user testing capabilities allowing prospects to invite team members 
                into shared temporary Sandbox environments.
              </p>
            </div>
          </div>

          {/* Auralis Chat Interface */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Chat with Auralis AI</h2>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Online</span>
              </div>
            </div>
            <div className="h-96 relative">
              <Chatbot />
            </div>
          </div>

          {/* How Auralis Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How Auralis AI Works</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Inquiry</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Auralis processes your technical questions using our trained knowledge base 
                      of project whitepapers and technical documentation.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Requirement Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The AI analyzes your specific requirements and matches them with our 
                      appropriate solutions and services.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Auralis provides tailored recommendations based on your industry, 
                      technical stack, and business objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Scheduling & Follow-up</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Qualified leads can schedule meetings directly through Auralis or 
                      receive personalized follow-up communications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Benefits of Auralis AI</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">24/7 availability for technical inquiries</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Instant access to our technical knowledge base</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Personalized recommendations based on your needs</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Seamless scheduling with our experts</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Reduced response time for complex queries</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Integration with our sandbox environments</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Auralis AI?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start a conversation with our AI architect today and get personalized 
              recommendations for your technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
                Start Chatting Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuralisAIPage;