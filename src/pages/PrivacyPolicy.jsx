import { Link } from 'react-router-dom';
import { HiShieldCheck, HiLockClosed, HiDocumentText } from 'react-icons/hi';

const PrivacyPolicy = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Personal Information',
          text: 'We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.',
        },
        {
          subtitle: '1.2 Information Collected Includes:',
          list: [
            'Name and Contact Data (name, email address, phone number, company name)',
            'Professional Information (job title, company size, industry)',
            'Project Requirements (details about your project needs)',
            'Communication Data (messages, inquiries, feedback)',
            'Technical Data (IP address, browser type, device information)',
          ],
        },
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: '2.1 Primary Uses',
          text: 'We use the information we collect or receive:',
        },
        {
          list: [
            'To respond to your inquiries and provide customer support',
            'To send you information about our services and updates',
            'To process your service requests and manage projects',
            'To improve our website and user experience',
            'To send administrative information such as updates to our terms and policies',
            'To protect our services and ensure security',
            'To fulfill and manage your orders and requests',
            'To deliver targeted advertising and marketing communications',
            'To comply with legal obligations',
          ],
        },
      ],
    },
    {
      title: '3. Information Sharing and Disclosure',
      content: [
        {
          subtitle: '3.1 We May Share Information:',
          list: [
            'With service providers who help us operate our business',
            'With business partners for joint marketing initiatives',
            'When required by law or to respond to legal process',
            'To protect rights, property, or safety of Limitless Infotech, our clients, or others',
            'In connection with a business transfer, merger, or acquisition',
            'With your explicit consent',
          ],
        },
        {
          subtitle: '3.2 We Do Not:',
          list: [
            'Sell your personal information to third parties',
            'Share your data with unauthorized parties',
            'Use your information for purposes not disclosed in this policy',
          ],
        },
      ],
    },
    {
      title: '4. Data Security',
      content: [
        {
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:',
        },
        {
          list: [
            'SSL/TLS encryption for data transmission',
            'Secure servers and databases',
            'Regular security audits and updates',
            'Access controls and authentication',
            'Employee training on data protection',
            'Regular backups and disaster recovery plans',
          ],
        },
        {
          text: 'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.',
        },
      ],
    },
    {
      title: '5. Cookies and Tracking Technologies',
      content: [
        {
          subtitle: '5.1 What We Use',
          text: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.',
        },
        {
          subtitle: '5.2 Types of Cookies:',
          list: [
            'Essential Cookies - Required for website functionality',
            'Performance Cookies - Help us improve our website',
            'Functionality Cookies - Remember your preferences',
            'Analytics Cookies - Understand how you use our site',
            'Marketing Cookies - Deliver relevant advertisements',
          ],
        },
      ],
    },
    {
      title: '6. Your Privacy Rights',
      content: [
        {
          subtitle: '6.1 You Have the Right To:',
          list: [
            'Access your personal information we hold',
            'Correct inaccurate or incomplete information',
            'Request deletion of your personal information',
            'Object to processing of your personal information',
            'Request restriction of processing',
            'Data portability',
            'Withdraw consent at any time',
            'Lodge a complaint with a supervisory authority',
          ],
        },
        {
          subtitle: '6.2 How to Exercise Your Rights',
          text: 'To exercise any of these rights, please contact us at Info@limitlessinfotech.com. We will respond to your request within 30 days.',
        },
      ],
    },
    {
      title: '7. Data Retention',
      content: [
        {
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.',
        },
        {
          subtitle: 'Retention Periods:',
          list: [
            'Account Information - Duration of account plus 3 years',
            'Project Data - Duration of project plus 7 years',
            'Communication Records - 3 years from last contact',
            'Marketing Data - Until you unsubscribe or request deletion',
            'Legal Documents - As required by law',
          ],
        },
      ],
    },
    {
      title: '8. International Data Transfers',
      content: [
        {
          text: 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers.',
        },
      ],
    },
    {
      title: "9. Children's Privacy",
      content: [
        {
          text: 'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.',
        },
      ],
    },
    {
      title: '10. Third-Party Links',
      content: [
        {
          text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.',
        },
      ],
    },
    {
      title: '11. Changes to This Privacy Policy',
      content: [
        {
          text: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last Updated' date. You are advised to review this privacy policy periodically for any changes.",
        },
      ],
    },
    {
      title: '12. Contact Information',
      content: [
        {
          text: 'If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:',
        },
        {
          list: [
            'Email: Info@limitlessinfotech.com',
            'Phone: +91 77109 09492',
            'Address: Mumbai, Maharashtra, India',
            'Data Protection Officer: privacy@limitlessinfotech.com',
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <HiShieldCheck className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Your Privacy Matters
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              Privacy Policy
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              We are committed to protecting your personal information and your
              right to privacy
            </p>
            <p
              className="text-sm text-white/80 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 mb-12 border border-primary-200 dark:border-primary-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <HiDocumentText className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Limitless Infotech Solution ("we," "us," or "our") respects your
              privacy and is committed to protecting your personal data. This
              privacy policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border-b border-gray-200 dark:border-dark-700 pb-10 last:border-b-0"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                          {item.subtitle}
                        </h3>
                      )}
                      {item.text && (
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          {item.text}
                        </p>
                      )}
                      {item.list && (
                        <ul className="space-y-2 ml-4">
                          {item.list.map((listItem, listIdx) => (
                            <li key={listIdx} className="flex items-start">
                              <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700 dark:text-gray-300">
                                {listItem}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <div className="flex items-start space-x-4">
              <HiLockClosed className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Questions About This Policy?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have questions or comments about this privacy policy,
                  please contact our Data Protection Officer:
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Email:</strong> Info@limitlessinfotech.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 77109 09492
                  </p>
                  <p>
                    <strong>Address:</strong> Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/terms-of-service" className="btn-outline">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="btn-outline">
              Cookie Policy
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
