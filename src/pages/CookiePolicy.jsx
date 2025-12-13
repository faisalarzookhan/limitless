import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiShieldCheck,
  HiCog,
  HiInformationCircle,
  HiDocumentText,
} from "react-icons/hi";

const CookiePolicy = () => {
  const lastUpdated = "January 15, 2024";
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  });

  const handleToggle = (category) => {
    if (category === "necessary") return; // Can't disable necessary cookies
    setCookieSettings((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    // Save to localStorage
    localStorage.setItem("cookiePreferences", JSON.stringify(cookieSettings));
    alert("Cookie preferences saved successfully!");
  };

  const cookieCategories = [
    {
      id: "necessary",
      name: "Strictly Necessary Cookies",
      icon: HiShieldCheck,
      color: "red",
      required: true,
      description:
        "These cookies are essential for the website to function properly. They cannot be disabled.",
      examples: [
        "Session cookies for authentication",
        "Security cookies for form submissions",
        "Load balancing cookies",
        "Cookie consent preferences",
      ],
      cookies: [
        {
          name: "session_id",
          purpose: "Maintains user session",
          duration: "Session",
        },
        {
          name: "csrf_token",
          purpose: "Security protection",
          duration: "Session",
        },
        {
          name: "cookie_consent",
          purpose: "Stores cookie preferences",
          duration: "1 year",
        },
      ],
    },
    {
      id: "functional",
      name: "Functional Cookies",
      icon: HiCog,
      color: "blue",
      required: false,
      description:
        "These cookies enable enhanced functionality and personalization, such as videos and live chat.",
      examples: [
        "Language preferences",
        "Theme preferences (Light/Dark mode)",
        "Region/location settings",
        "Chat widget functionality",
      ],
      cookies: [
        {
          name: "user_theme",
          purpose: "Remembers theme preference",
          duration: "1 year",
        },
        {
          name: "user_language",
          purpose: "Stores language choice",
          duration: "1 year",
        },
        {
          name: "chat_state",
          purpose: "Maintains chat session",
          duration: "30 days",
        },
      ],
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      icon: HiInformationCircle,
      color: "purple",
      required: false,
      description:
        "These cookies help us understand how visitors interact with our website, helping us improve user experience.",
      examples: [
        "Google Analytics",
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring",
      ],
      cookies: [
        {
          name: "_ga",
          purpose: "Google Analytics tracking",
          duration: "2 years",
        },
        {
          name: "_gid",
          purpose: "Google Analytics identifier",
          duration: "24 hours",
        },
        {
          name: "_gat",
          purpose: "Google Analytics throttling",
          duration: "1 minute",
        },
        {
          name: "pageviews",
          purpose: "Tracks page visits",
          duration: "30 days",
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      icon: HiDocumentText,
      color: "green",
      required: false,
      description:
        "These cookies track your online activity to help advertisers deliver more relevant advertising or limit ad frequency.",
      examples: [
        "Social media pixels",
        "Retargeting cookies",
        "Ad campaign tracking",
        "Conversion tracking",
      ],
      cookies: [
        {
          name: "fb_pixel",
          purpose: "Facebook advertising",
          duration: "90 days",
        },
        {
          name: "google_ads",
          purpose: "Google Ads tracking",
          duration: "90 days",
        },
        {
          name: "linkedin_insight",
          purpose: "LinkedIn conversion tracking",
          duration: "180 days",
        },
      ],
    },
  ];

  const sections = [
    {
      title: "1. What Are Cookies?",
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website.
      They are widely used to make websites work more efficiently, provide a better user experience, and provide
      information to website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain
      on your device after you close your browser, while session cookies are deleted when you close your browser.`,
    },
    {
      title: "2. How We Use Cookies",
      content: `Limitless Infotech Solution uses cookies to:`,
      list: [
        "Ensure the website functions properly and securely",
        "Remember your preferences and settings",
        "Analyze how you use our website to improve performance",
        "Personalize content and features",
        "Provide social media features",
        "Deliver relevant advertisements (if you consent)",
        "Prevent fraud and enhance security",
      ],
    },
    {
      title: "3. Types of Cookies We Use",
      content: `We use the following types of cookies on our website. You can control which cookies you accept through our cookie settings below.`,
    },
    {
      title: "4. Third-Party Cookies",
      content: `We may use third-party service providers who also set cookies on our website. These include:`,
      list: [
        "Google Analytics - For website analytics and performance monitoring",
        "Google Ads - For advertising and remarketing",
        "Facebook Pixel - For social media advertising",
        "LinkedIn Insight Tag - For business advertising and analytics",
        "Chatbot Services - For customer support functionality",
        "Video Hosting Services - For embedded videos (YouTube, Vimeo)",
      ],
      note: `We do not control these third-party cookies. Please review the privacy policies of these third parties for more information.`,
    },
    {
      title: "5. How to Control Cookies",
      content: `You have several options to control or limit how cookies are used:`,
      subsections: [
        {
          subtitle: "5.1 Browser Settings",
          text: "Most web browsers allow you to manage cookie preferences through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable cookies, some features of our website may not function properly.",
        },
        {
          subtitle: "5.2 Our Cookie Settings",
          text: "You can use the cookie preferences tool on this page to control which categories of cookies you accept.",
        },
        {
          subtitle: "5.3 Third-Party Opt-Out",
          text: "You can opt out of third-party cookies through:",
          list: [
            "Google Analytics Opt-out: https://tools.google.com/dlpage/gaoptout",
            "Google Ads Settings: https://adssettings.google.com",
            "Facebook Ad Preferences: https://www.facebook.com/ads/preferences",
            "Network Advertising Initiative: http://www.networkadvertising.org/choices/",
          ],
        },
      ],
    },
    {
      title: "6. Cookie Duration",
      content: `Cookies can be stored for different periods:`,
      list: [
        "Session Cookies: Deleted when you close your browser",
        "Persistent Cookies: Remain on your device until deleted or they expire",
        "Our cookies typically expire between 24 hours and 2 years, depending on their purpose",
      ],
    },
    {
      title: "7. Updates to This Policy",
      content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices.
      We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date.`,
    },
    {
      title: "8. Contact Us",
      content: `If you have questions about our use of cookies or this Cookie Policy, please contact us:`,
      list: [
        "Email: Info@limitlessinfotech.com",
        "Phone: +91 77109 09492",
        "Address: Mumbai, Maharashtra, India",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: "bg-red-500/20 border-red-500/30 text-red-400",
      blue: "bg-blue-500/20 border-blue-500/30 text-blue-400",
      purple: "bg-purple-500/20 border-purple-500/30 text-purple-400",
      green: "bg-green-500/20 border-green-500/30 text-green-400",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center animate-float">
                <HiDocumentText className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Cookie Policy
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how Limitless Infotech Solution uses cookies and
              similar technologies to enhance your browsing experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <HiInformationCircle className="w-5 h-5 text-primary-400" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiShieldCheck className="w-5 h-5 text-primary-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Settings Manager */}
      <section className="py-12 bg-dark-800/50 border-y border-dark-700">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-gray-400">
                Choose which types of cookies you want to accept
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cookieCategories.map((category) => {
                const Icon = category.icon;
                const colorClasses = getColorClasses(category.color);

                return (
                  <div
                    key={category.id}
                    className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-600/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">
                            {category.name}
                          </h3>
                          {category.required && (
                            <span className="text-xs text-red-400 font-medium">
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
                          className={`w-11 h-6 bg-dark-700 peer-focus:outline-none rounded-full peer
                          ${category.required ? "peer-checked:bg-red-600" : "peer-checked:bg-primary-600"}
                          ${category.required ? "opacity-50 cursor-not-allowed" : ""}
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                          after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                          peer-checked:after:translate-x-full peer-checked:after:border-white`}
                        ></div>
                      </label>
                    </div>

                    <p className="text-sm text-gray-400 mb-4">
                      {category.description}
                    </p>

                    <div className="bg-dark-900/50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-400 mb-2">
                        Examples:
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-400 mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleSavePreferences}
                className="btn-primary px-8"
              >
                Save Preferences
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Your preferences will be saved and applied immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cookie Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Cookie Details
            </h2>

            {cookieCategories.map((category, idx) => {
              const Icon = category.icon;
              const colorClasses = getColorClasses(category.color);

              return (
                <div
                  key={idx}
                  className="mb-8 bg-dark-800/30 rounded-2xl p-8 border border-dark-700"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-700">
                          <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                            Cookie Name
                          </th>
                          <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                            Purpose
                          </th>
                          <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.cookies.map((cookie, cookieIdx) => (
                          <tr
                            key={cookieIdx}
                            className="border-b border-dark-800"
                          >
                            <td className="py-3 px-4 text-gray-300 font-mono text-xs">
                              {cookie.name}
                            </td>
                            <td className="py-3 px-4 text-gray-400">
                              {cookie.purpose}
                            </td>
                            <td className="py-3 px-4 text-gray-500">
                              {cookie.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-dark-800/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Complete Cookie Policy
            </h2>

            {sections.map((section, index) => (
              <div
                key={index}
                className="mb-10 bg-dark-800/50 rounded-xl p-8 border border-dark-700"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h3>

                {section.content && (
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-2 ml-4 mb-4">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-primary-400 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-yellow-500">
                        Note:
                      </span>{" "}
                      {section.note}
                    </p>
                  </div>
                )}

                {section.subsections && (
                  <div className="space-y-4 mt-4">
                    {section.subsections.map((subsection, subIdx) => (
                      <div key={subIdx} className="ml-4">
                        <h4 className="font-semibold text-gray-200 mb-2">
                          {subsection.subtitle}
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-2">
                          {subsection.text}
                        </p>
                        {subsection.list && (
                          <ul className="space-y-1 ml-4">
                            {subsection.list.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-start text-gray-400 text-sm"
                              >
                                <span className="text-primary-400 mr-2">→</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browser Instructions */}
      <section className="py-16 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Manage Cookies in Your Browser
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Google Chrome",
                  link: "https://support.google.com/chrome/answer/95647",
                },
                {
                  name: "Mozilla Firefox",
                  link: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
                },
                {
                  name: "Safari",
                  link: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
                },
                {
                  name: "Microsoft Edge",
                  link: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
                },
              ].map((browser, idx) => (
                <a
                  key={idx}
                  href={browser.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {browser.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        Cookie management guide
                      </p>
                    </div>
                    <span className="text-primary-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-dark-800/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Related Legal Documents
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/privacy-policy"
                className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                    <HiShieldCheck className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Privacy Policy
                    </h4>
                    <p className="text-sm text-gray-400">
                      How we handle your data
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/terms-of-service"
                className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-600/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-600/30 transition-colors">
                    <HiInformationCircle className="w-6 h-6 text-secondary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Terms of Service
                    </h4>
                    <p className="text-sm text-gray-400">
                      Our terms and conditions
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-gray-300 mb-8">
              If you have any questions about our use of cookies, feel free to
              reach out to us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/privacy-policy" className="btn-secondary">
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
