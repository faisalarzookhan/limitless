import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DigitalHealthAuditor from '../components/DigitalHealthAuditor';
import Layout from '../components/layout/Layout';
import {
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineDocumentReport,
  HiOutlineUserGroup,
  HiArrowRight,
} from 'react-icons/hi';

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
      <div className="min-h-screen bg-[#0a0b0d] font-['Figtree'] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Outfit']">
              <span className="text-[#ffc957]">
                Digital Health Auditor
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-['Figtree']">
              Get a comprehensive analysis of your website's performance,
              security, and SEO with our AI-powered auditor. Identify technical
              debt and discover opportunities for improvement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#2563eb] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                Start Free Audit
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-[#2563eb] text-[#2563eb] rounded-lg hover:bg-[#2563eb] hover:text-white transition-colors duration-300 font-['Outfit']">
                View Sample Report
              </button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiOutlineLightningBolt className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Performance Metrics
                </h3>
              </div>
              <p className="text-gray-400 font-['Figtree']">
                Real-time data fetching via Google Lighthouse API for LCP, FID,
                and CLS metrics to evaluate your site's performance.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiOutlineShieldCheck className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Security Scanning
                </h3>
              </div>
              <p className="text-gray-400 font-['Figtree']">
                Automated SSL/TLS handshake verification and HSTS header checks
                to ensure your site's security posture.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiOutlineChartBar className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  SEO Analysis
                </h3>
              </div>
              <p className="text-gray-400 font-['Figtree']">
                Comprehensive SEO audit identifying issues with meta tags,
                header structure, and other on-page optimization factors.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiOutlineDocumentReport className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Automated Reports
                </h3>
              </div>
              <p className="text-gray-400 font-['Figtree']">
                Generate comprehensive 10-page "Technical Debt & Opportunity
                Report" with detailed recommendations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiOutlineUserGroup className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Lead Generation
                </h3>
              </div>
              <p className="text-gray-400 font-['Figtree']">
                Capture leads automatically through the audit process and
                integrate with your CRM system.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                  <HiOutlineGlobeAlt className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Outfit']">
                  Instant Remediation
                </h3>
              </div>
              <p className="text-gray-400 font-['Figtree']">
                Direct access to our TrackIT solution through the auditor for
                immediate remediation of identified issues.
              </p>
            </motion.div>
          </motion.div>

          {/* Auditor Component */}
          <div className="mb-16">
            <DigitalHealthAuditor
              onAuditComplete={handleAuditComplete}
              onSandboxRequest={handleSandboxRequest}
            />
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-['Outfit']">
                How the Digital Health Audit Works
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
                      Enter Your Website URL
                    </h3>
                    <p className="text-gray-400 font-['Figtree']">
                      Provide your website URL and email address to begin the
                      comprehensive audit process.
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
                      Comprehensive Analysis
                    </h3>
                    <p className="text-gray-400 font-['Figtree']">
                      Our AI-powered auditor analyzes performance, security,
                      SEO, and accessibility metrics.
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
                      Receive Detailed Report
                    </h3>
                    <p className="text-gray-400 font-['Figtree']">
                      Get a comprehensive report with your Limitless Score and
                      specific recommendations.
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
                      Take Action
                    </h3>
                    <p className="text-gray-400 font-['Figtree']">
                      Use our TrackIT solution to address identified issues and
                      improve your website.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] rounded-2xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              <h2 className="text-3xl font-bold mb-6 font-['Outfit'] relative z-10">
                Benefits of Digital Health Audit
              </h2>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <HiArrowRight className="w-4 h-4 text-[#ffc957]" />
                  </div>
                  <span className="text-gray-200 font-['Figtree']">
                    Identify critical performance bottlenecks
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <HiArrowRight className="w-4 h-4 text-[#ffc957]" />
                  </div>
                  <span className="text-gray-200 font-['Figtree']">
                    Discover security vulnerabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <HiArrowRight className="w-4 h-4 text-[#ffc957]" />
                  </div>
                  <span className="text-gray-200 font-['Figtree']">
                    Improve SEO and search visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <HiArrowRight className="w-4 h-4 text-[#ffc957]" />
                  </div>
                  <span className="text-gray-200 font-['Figtree']">
                    Enhance user experience and engagement
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <HiArrowRight className="w-4 h-4 text-[#ffc957]" />
                  </div>
                  <span className="text-gray-200 font-['Figtree']">
                    Get actionable recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <HiArrowRight className="w-4 h-4 text-[#ffc957]" />
                  </div>
                  <span className="text-gray-200 font-['Figtree']">
                    Measure against industry benchmarks
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12 font-['Outfit']">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-yellow-400 mb-4">{'★'.repeat(5)}</div>
                <p className="text-gray-400 mb-4 font-['Figtree']">
                  "The Digital Health Audit revealed critical performance issues
                  we didn't know existed. After implementing their
                  recommendations, our Core Web Vitals improved by 40%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white font-['Figtree']">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-500 font-['Figtree']">CTO, TechCorp</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-yellow-400 mb-4">{'★'.repeat(5)}</div>
                <p className="text-gray-400 mb-4 font-['Figtree']">
                  "Security vulnerabilities were identified and fixed within
                  days. The detailed report made it easy for our team to
                  prioritize the most critical issues."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white font-['Figtree']">
                      Michael Chen
                    </div>
                    <div className="text-sm text-gray-500 font-['Figtree']">
                      Security Lead, FinSecure
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-yellow-400 mb-4">{'★'.repeat(5)}</div>
                <p className="text-gray-400 mb-4 font-['Figtree']">
                  "Our SEO rankings improved significantly after following the
                  audit recommendations. The actionable insights were exactly
                  what we needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ER</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white font-['Figtree']">
                      Emily Rodriguez
                    </div>
                    <div className="text-sm text-gray-500 font-['Figtree']">
                      Marketing Director, GrowthCo
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] rounded-2xl p-8 text-white text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4 font-['Outfit'] relative z-10">
              Ready to Audit Your Website?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto font-['Figtree'] relative z-10">
              Start a comprehensive digital health audit today and discover
              opportunities for improvement in performance, security, and SEO.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="px-8 py-4 bg-[#0a0b0d] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                Start Free Audit Now
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default DigitalHealthAuditorPage;
