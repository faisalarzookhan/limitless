import React, { useState } from 'react';
import DigitalHealthAuditor from '../components/DigitalHealthAuditor';
import Layout from '../components/layout/Layout';
import { HiOutlineGlobeAlt, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineDocumentReport, HiOutlineUserGroup } from 'react-icons/hi';

const DigitalHealthAuditorPage = () => {
  const [showSandbox, setShowSandbox] = useState(false);

  const handleSandboxRequest = () => {
    setShowSandbox(true);
    // In a real implementation, this would open the sandbox
    alert('Opening TrackIT sandbox environment...');
  };

  const handleAuditComplete = (results, url, email) => {
    console.log('Audit completed for:', url);
    console.log('Results:', results);
    console.log('Email:', email);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-900 dark:to-dark-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Health Auditor
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Get a comprehensive analysis of your website's performance, security, and SEO with our AI-powered auditor. 
              Identify technical debt and discover opportunities for improvement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Audit
              </button>
              <button className="bg-white dark:bg-dark-800 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg border border-gray-300 dark:border-dark-600 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                View Sample Report
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <HiOutlineLightningBolt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Performance Metrics</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time data fetching via Google Lighthouse API for LCP, FID, and CLS metrics 
                to evaluate your site's performance.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <HiOutlineShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Security Scanning</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Automated SSL/TLS handshake verification and HSTS header checks to ensure 
                your site's security posture.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <HiOutlineChartBar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SEO Analysis</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive SEO audit identifying issues with meta tags, header structure, 
                and other on-page optimization factors.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-4">
                  <HiOutlineDocumentReport className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Automated Reports</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Generate comprehensive 10-page "Technical Debt & Opportunity Report" 
                with detailed recommendations.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                  <HiOutlineUserGroup className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Lead Generation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Capture leads automatically through the audit process and integrate 
                with your CRM system.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                  <HiOutlineGlobeAlt className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Instant Remediation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Direct access to our TrackIT solution through the auditor for immediate 
                remediation of identified issues.
              </p>
            </div>
          </div>

          {/* Auditor Component */}
          <div className="mb-16">
            <DigitalHealthAuditor 
              onAuditComplete={handleAuditComplete}
              onSandboxRequest={handleSandboxRequest}
            />
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How the Digital Health Audit Works</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enter Your Website URL</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Provide your website URL and email address to begin the comprehensive audit process.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Comprehensive Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our AI-powered auditor analyzes performance, security, SEO, and accessibility metrics.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Receive Detailed Report</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Get a comprehensive report with your Limitless Score and specific recommendations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Take Action</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Use our TrackIT solution to address identified issues and improve your website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Benefits of Digital Health Audit</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Identify critical performance bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Discover security vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Improve SEO and search visibility</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Enhance user experience and engagement</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Get actionable recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Measure against industry benchmarks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "The Digital Health Audit revealed critical performance issues we didn't know existed. 
                  After implementing their recommendations, our Core Web Vitals improved by 40%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">CTO, TechCorp</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Security vulnerabilities were identified and fixed within days. The detailed report 
                  made it easy for our team to prioritize the most critical issues."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Michael Chen</div>
                    <div className="text-sm text-gray-500">Security Lead, FinSecure</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
                <div className="text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Our SEO rankings improved significantly after following the audit recommendations. 
                  The actionable insights were exactly what we needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Emily Rodriguez</div>
                    <div className="text-sm text-gray-500">Marketing Director, GrowthCo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Audit Your Website?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start a comprehensive digital health audit today and discover opportunities 
              for improvement in performance, security, and SEO.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
                Start Free Audit Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DigitalHealthAuditorPage;