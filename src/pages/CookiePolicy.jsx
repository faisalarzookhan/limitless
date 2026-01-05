import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiShieldCheck,
  HiCog,
  HiInformationCircle,
  HiDocumentText,
  HiArrowRight,
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

const CookiePolicy = () => {
  const lastUpdated = 'January 15, 2024';
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  });

  const handleToggle = category => {
    if (category === 'necessary') return; // Can't disable necessary cookies
    setCookieSettings(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    // Save to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
    alert('Cookie preferences saved successfully!');
  };

  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Strictly Necessary Cookies',
      icon: HiShieldCheck,
      color: 'red',
      required: true,
      description:
        'These cookies are essential for the website to function properly. They cannot be disabled.',
      examples: [
        'Session cookies for authentication',
        'Security cookies for form submissions',
        'Load balancing cookies',
        'Cookie consent preferences',
      ],
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains user session',
          duration: 'Session',
        },
        {
          name: 'csrf_token',
          purpose: 'Security protection',
          duration: 'Session',
        },
        {
          name: 'cookie_consent',
          purpose: 'Stores cookie preferences',
          duration: '1 year',
        },
      ],
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      icon: HiCog,
      color: 'blue',
      required: false,
      description:
        'These cookies enable enhanced functionality and personalization, such as videos and live chat.',
      examples: [
        'Language preferences',
        'Theme preferences (Light/Dark mode)',
        'Region/location settings',
        'Chat widget functionality',
      ],
      cookies: [
        {
          name: 'user_theme',
          purpose: 'Remembers theme preference',
          duration: '1 year',
        },
        {
          name: 'user_language',
          purpose: 'Stores language choice',
          duration: '1 year',
        },
        {
          name: 'chat_state',
          purpose: 'Maintains chat session',
          duration: '30 days',
        },
      ],
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      icon: HiInformationCircle,
      color: 'purple',
      required: false,
      description:
        'These cookies help us understand how visitors interact with our website, helping us improve user experience.',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring',
      ],
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics tracking',
          duration: '2 years',
        },
        {
          name: '_gid',
          purpose: 'Google Analytics identifier',
          duration: '24 hours',
        },
        {
          name: '_gat',
          purpose: 'Google Analytics throttling',
          duration: '1 minute',
        },
        {
          name: 'pageviews',
          purpose: 'Tracks page visits',
          duration: '30 days',
        },
      ],
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      icon: HiDocumentText,
      color: 'green',
      required: false,
      description:
        'These cookies track your online activity to help advertisers deliver more relevant advertising or limit ad frequency.',
      examples: [
        'Social media pixels',
        'Retargeting cookies',
        'Ad campaign tracking',
        'Conversion tracking',
      ],
      cookies: [
        {
          name: 'fb_pixel',
          purpose: 'Facebook advertising',
          duration: '90 days',
        },
        {
          name: 'google_ads',
          purpose: 'Google Ads tracking',
          duration: '90 days',
        },
        {
          name: 'linkedin_insight',
          purpose: 'LinkedIn conversion tracking',
          duration: '180 days',
        },
      ],
    },
  ];

  const sections = [
    {
      title: '1. What Are Cookies?',
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website.
      They are widely used to make websites work more efficiently, provide a better user experience, and provide
      information to website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain
      on your device after you close your browser, while session cookies are deleted when you close your browser.`,
    },
    {
      title: '2. How We Use Cookies',
      content: `Limitless Infotech Solution uses cookies to:`,
      list: [
        'Ensure the website functions properly and securely',
        'Remember your preferences and settings',
        'Analyze how you use our website to improve performance',
        'Personalize content and features',
        'Provide social media features',
        'Deliver relevant advertisements (if you consent)',
        'Prevent fraud and enhance security',
      ],
    },
    {
      title: '3. Types of Cookies We Use',
      content: `We use the following types of cookies on our website. You can control which cookies you accept through our cookie settings below.`,
    },
    {
      title: '4. Third-Party Cookies',
      content: `We may use third-party service providers who also set cookies on our website. These include:`,
      list: [
        'Google Analytics - For website analytics and performance monitoring',
        'Google Ads - For advertising and remarketing',
        'Facebook Pixel - For social media advertising',
        'LinkedIn Insight Tag - For business advertising and analytics',
        'Chatbot Services - For customer support functionality',
        'Video Hosting Services - For embedded videos (YouTube, Vimeo)',
      ],
      note: `We do not control these third-party cookies. Please review the privacy policies of these third parties for more information.`,
    },
    {
      title: '5. How to Control Cookies',
      content: `You have several options to control or limit how cookies are used:`,
      subsections: [
        {
          subtitle: '5.1 Browser Settings',
          text: 'Most web browsers allow you to manage cookie preferences through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable cookies, some features of our website may not function properly.',
        },
        {
          subtitle: '5.2 Our Cookie Settings',
          text: 'You can use the cookie preferences tool on this page to control which categories of cookies you accept.',
        },
        {
          subtitle: '5.3 Third-Party Opt-Out',
          text: 'You can opt out of third-party cookies through:',
          list: [
            'Google Analytics Opt-out: https://tools.google.com/dlpage/gaoptout',
            'Google Ads Settings: https://adssettings.google.com',
            'Facebook Ad Preferences: https://www.facebook.com/ads/preferences',
            'Network Advertising Initiative: http://www.networkadvertising.org/choices/',
          ],
        },
      ],
    },
    {
      title: '6. Cookie Duration',
      content: `Cookies can be stored for different periods:`,
      list: [
        'Session Cookies: Deleted when you close your browser',
        'Persistent Cookies: Remain on your device until deleted or they expire',
        'Our cookies typically expire between 24 hours and 2 years, depending on their purpose',
      ],
    },
    {
      title: '7. Updates to This Policy',
      content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices.
      We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date.`,
    },
    {
      title: '8. Contact Us',
      content: `If you have questions about our use of cookies or this Cookie Policy, please contact us:`,
      list: [
        'Email: Info@limitlessinfotech.com',
        'Phone: +91 77109 09492',
        'Address: Mumbai, Maharashtra, India',
      ],
    },
  ];

  const getColorClasses = color => {
    const colors = {
      red: 'bg-red-500/20 border-red-500/30 text-red-400',
      blue: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
      purple: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
      green: 'bg-green-500/20 border-green-500/30 text-green-400',
    };
    return colors[color] || colors.blue;
  };

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 font-['Figtree']">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-2xl flex items-center justify-center">
                <HiDocumentText className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cookie Policy
            </motion.h1>

            <motion.p 
              className="text-xl text-white mb-8 max-w-3xl mx-auto font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Learn about how Limitless Infotech Solution uses cookies and
              similar technologies to enhance your browsing experience.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <HiInformationCircle className="w-5 h-5 text-[#ffc957]" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiShieldCheck className="w-5 h-5 text-[#ffc957]" />
                <span>GDPR Compliant</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Settings Manager */}
      <section className="py-12 bg-[#0a0b0d] border-y border-[#2563eb]/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-3 font-['Outfit']">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-gray-400 font-['Figtree']">
                Choose which types of cookies you want to accept
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cookieCategories.map(category => {
                const Icon = category.icon;
                const colorClasses = getColorClasses(category.color);

                return (
                  <motion.div
                    key={category.id}
                    className="bg-[#1a1c20] rounded-xl p-6 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
                    variants={itemVariants}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1 font-['Figtree']">
                            {category.name}
                          </h3>
                          {category.required && (
                            <span className="text-xs text-red-400 font-medium font-['Figtree']">
                              Always Active
                            </span>
                          )}
                        </div>
                      </div>

                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookieSettings[category.id]}
                          onChange={() => handleToggle(category.id)}
                          disabled={category.required}
                          className="sr-only peer"
                        />
                        <div
                          className={`w-11 h-6 bg-[#2563eb]/30 peer-focus:outline-none rounded-full peer
                          ${category.required ? 'peer-checked:bg-red-600' : 'peer-checked:bg-[#2563eb]'}
                          ${category.required ? 'opacity-50 cursor-not-allowed' : ''}
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                          after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                          peer-checked:after:translate-x-full peer-checked:after:border-white`}
                        ></div>
                      </label>
                    </div>

                    <p className="text-sm text-gray-400 mb-4 font-['Figtree']">
                      {category.description}
                    </p>

                    <div className="bg-[#1a1c20] rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-400 mb-2 font-['Figtree']">
                        Examples:
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 font-['Figtree']">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#2563eb] mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={handleSavePreferences}
                className="px-8 py-4 bg-[#2563eb] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']"
              >
                Save Preferences
              </button>
              <p className="text-sm text-gray-500 mt-3 font-['Figtree']">
                Your preferences will be saved and applied immediately
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Cookie Information */}
      <section className="py-16 bg-[#0a0b0d]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-white mb-8 text-center font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Cookie Details
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cookieCategories.map((category, idx) => {
                const Icon = category.icon;
                const colorClasses = getColorClasses(category.color);

                return (
                  <motion.div
                    key={idx}
                    className="mb-8 bg-[#1a1c20] rounded-2xl p-8 border border-[#2563eb]/30"
                    variants={itemVariants}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white font-['Outfit']">
                        {category.name}
                      </h3>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-[#2563eb]/30">
                            <th className="text-left py-3 px-4 text-gray-400 font-semibold font-['Figtree']">
                              Cookie Name
                            </th>
                            <th className="text-left py-3 px-4 text-gray-400 font-semibold font-['Figtree']">
                              Purpose
                            </th>
                            <th className="text-left py-3 px-4 text-gray-400 font-semibold font-['Figtree']">
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.cookies.map((cookie, cookieIdx) => (
                            <tr
                              key={cookieIdx}
                              className="border-b border-[#2563eb]/10"
                            >
                              <td className="py-3 px-4 text-gray-300 font-mono text-xs font-['Figtree']">
                                {cookie.name}
                              </td>
                              <td className="py-3 px-4 text-gray-400 font-['Figtree']">
                                {cookie.purpose}
                              </td>
                              <td className="py-3 px-4 text-gray-500 font-['Figtree']">
                                {cookie.duration}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-[#0a0b0d]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Complete Cookie Policy
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="mb-10 bg-[#1a1c20] rounded-xl p-8 border border-[#2563eb]/30"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center font-['Outfit']">
                    <span className="w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center text-sm mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>

                  {section.content && (
                    <p className="text-gray-300 leading-relaxed mb-4 font-['Figtree']">
                      {section.content}
                    </p>
                  )}

                  {section.list && (
                    <ul className="space-y-2 ml-4 mb-4 font-['Figtree']">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-[#2563eb] mr-3 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <p className="text-sm text-gray-300 font-['Figtree']">
                        <span className="font-semibold text-yellow-500">
                          Note:
                        </span>{' '}
                        {section.note}
                      </p>
                    </div>
                  )}

                  {section.subsections && (
                    <div className="space-y-4 mt-4">
                      {section.subsections.map((subsection, subIdx) => (
                        <div key={subIdx} className="ml-4">
                          <h4 className="font-semibold text-gray-300 mb-2 font-['Figtree']">
                            {subsection.subtitle}
                          </h4>
                          <p className="text-gray-300 leading-relaxed mb-2 font-['Figtree']">
                            {subsection.text}
                          </p>
                          {subsection.list && (
                            <ul className="space-y-1 ml-4 font-['Figtree']">
                              {subsection.list.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="flex items-start text-gray-400 text-sm"
                                >
                                  <span className="text-[#2563eb] mr-2">→</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Browser Instructions */}
      <section className="py-16 border-t border-[#2563eb]/30 bg-[#0a0b0d]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-white mb-8 text-center font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Manage Cookies in Your Browser
            </motion.h2>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  name: 'Google Chrome',
                  link: 'https://support.google.com/chrome/answer/95647',
                },
                {
                  name: 'Mozilla Firefox',
                  link: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer',
                },
                {
                  name: 'Safari',
                  link: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac',
                },
                {
                  name: 'Microsoft Edge',
                  link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
                },
              ].map((browser, idx) => (
                <motion.a
                  key={idx}
                  href={browser.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1c20] p-6 rounded-xl border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300 group"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white mb-1 font-['Figtree']">
                        {browser.name}
                      </h4>
                      <p className="text-sm text-gray-400 font-['Figtree']">
                        Cookie management guide
                      </p>
                    </div>
                    <span className="text-[#2563eb] group-hover:translate-x-1 transition-transform">
                      <HiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-[#0a0b0d]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              className="text-xl font-semibold text-white mb-6 text-center font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Related Legal Documents
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.Link
                to="/privacy-policy"
                className="bg-[#1a1c20] p-6 rounded-xl border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#2563eb]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2563eb]/30 transition-colors">
                    <HiShieldCheck className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-['Figtree']">
                      Privacy Policy
                    </h4>
                    <p className="text-sm text-gray-400 font-['Figtree']">
                      How we handle your data
                    </p>
                  </div>
                </div>
              </motion.Link>

              <motion.Link
                to="/terms-of-service"
                className="bg-[#1a1c20] p-6 rounded-xl border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#ffc957]/20 rounded-lg flex items-center justify-center group-hover:bg-[#ffc957]/30 transition-colors">
                    <HiInformationCircle className="w-6 h-6 text-[#ffc957]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-['Figtree']">
                      Terms of Service
                    </h4>
                    <p className="text-sm text-gray-400 font-['Figtree']">
                      Our terms and conditions
                    </p>
                  </div>
                </div>
              </motion.Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 border-t border-[#2563eb]/30 bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-3xl font-bold mb-4 font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Questions About Cookies?
            </motion.h2>
            <motion.p 
              className="text-white mb-8 font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              If you have any questions about our use of cookies, feel free to
              reach out to us.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact" className="px-8 py-4 bg-[#0a0b0d] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                Contact Us
              </Link>
              <Link to="/privacy-policy" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                View Privacy Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
};

export default CookiePolicy;
