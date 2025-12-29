import React from 'react';
import AuralisPersonalizationEngine from '../components/AuralisPersonalizationEngine';
import Layout from '../components/layout/Layout';
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineChartBar, HiOutlineCog, HiOutlineGlobe, HiOutlineAcademicCap } from 'react-icons/hi';

const AuralisPersonalizationDemoPage = () => {
  return (
    <Layout>
      <AuralisPersonalizationEngine>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-900 dark:to-dark-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Auralis AI Personalization Engine
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Experience dynamic content adaptation based on your industry, behavior, and preferences. 
                Our AI engine reshuffles site content to provide the most relevant experience for your needs.
              </p>
            </div>

            {/* How It Works */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <HiOutlineGlobe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Industry Detection</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI analyzes your browsing behavior to identify your industry and specific needs. 
                  This allows us to surface the most relevant content and solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                    <HiOutlineUserGroup className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Behavior Analysis</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  We track your interactions to understand your preferences and engagement patterns. 
                  This data helps us refine your experience over time.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                    <HiOutlineLightBulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Dynamic Adaptation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Content is automatically reshuffled and personalized in real-time based on your 
                  detected industry and preferences for optimal relevance.
                </p>
              </div>
            </div>

            {/* Personalization Features */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-dark-700 mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Personalization Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      <HiOutlineChartBar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Content Reshuffling</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Site content automatically reshuffles based on your industry identified by Auralis, 
                        ensuring you see the most relevant information first.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                      <HiOutlineCog className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Adaptive UI</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        User interface elements adapt to your preferences, showing relevant CTAs and 
                        navigation options based on your behavior patterns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                      <HiOutlineAcademicCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Recommendations</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Get personalized recommendations for products, services, and content based 
                        on your industry and engagement patterns.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Real-Time Adaptation</h3>
                  <p className="mb-4 text-blue-100">
                    The Auralis AI Personalization Engine works in real-time, continuously analyzing 
                    your behavior and adjusting the experience to provide maximum relevance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Industry detection based on browsing patterns</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Content prioritization based on interest</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Adaptive navigation and CTAs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Personalized recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Behavior-based content reshuffling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Demo Section */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-dark-700 mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Experience Personalization</h2>
              
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Browse our site to see how Auralis AI adapts the content to your industry and interests. 
                  The more you explore, the more personalized your experience becomes.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Browse Solutions
                  </button>
                  <button className="bg-white dark:bg-dark-800 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg border border-gray-300 dark:border-dark-600 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineLightBulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dynamic Content</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Content adapts in real-time based on your behavior and interests
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineUserGroup className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Focus</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Solutions and examples tailored to your specific industry
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineChartBar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Analytics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Continuous learning to improve your experience over time
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Personalized AI?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Start interacting with our site to see how Auralis AI personalizes your experience. 
                The system learns from your behavior to provide increasingly relevant content and recommendations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
                  Start Exploring
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </AuralisPersonalizationEngine>
    </Layout>
  );
};

export default AuralisPersonalizationDemoPage;