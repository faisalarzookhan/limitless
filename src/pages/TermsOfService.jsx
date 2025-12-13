import { Link } from 'react-router-dom';
import { HiDocumentText, HiShieldCheck, HiScale } from 'react-icons/hi';

const TermsOfService = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "1. Agreement to Terms",
      content: [
        {
          text: "By accessing and using the Limitless Infotech Solution website (\"Website\"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "1.1 Definitions",
          list: [
            "\"Company\", \"We\", \"Us\", \"Our\" refers to Limitless Infotech Solution",
            "\"Client\", \"You\", \"Your\" refers to the individual or entity using our services",
            "\"Services\" refers to all software development, consulting, and related services provided by the Company",
            "\"Agreement\" refers to these Terms of Service and any amendments"
          ]
        }
      ]
    },
    {
      title: "2. Use of Services",
      content: [
        {
          subtitle: "2.1 Eligibility",
          text: "You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements."
        },
        {
          subtitle: "2.2 Account Registration",
          list: [
            "You may be required to create an account to access certain features",
            "You are responsible for maintaining the confidentiality of your account credentials",
            "You agree to provide accurate, current, and complete information",
            "You are responsible for all activities that occur under your account",
            "You must notify us immediately of any unauthorized access or security breach"
          ]
        },
        {
          subtitle: "2.3 Acceptable Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to use our services:"
        },
        {
          list: [
            "In any way that violates any applicable law or regulation",
            "To transmit any harmful or malicious code",
            "To impersonate or attempt to impersonate the Company or another user",
            "To engage in any conduct that restricts or inhibits anyone's use of the services",
            "To harvest or collect information about users without their consent",
            "For any commercial purpose without our express written consent"
          ]
        }
      ]
    },
    {
      title: "3. Service Terms and Scope",
      content: [
        {
          subtitle: "3.1 Project Engagement",
          text: "All projects require a signed Statement of Work (SOW) or Service Agreement that defines:"
        },
        {
          list: [
            "Project scope, deliverables, and timelines",
            "Payment terms and project costs",
            "Intellectual property rights",
            "Support and maintenance terms",
            "Change request procedures"
          ]
        },
        {
          subtitle: "3.2 Project Timeline",
          text: "Project timelines are estimates based on the information provided. Delays may occur due to:"
        },
        {
          list: [
            "Late delivery of client materials or feedback",
            "Changes in project scope",
            "Technical complexities not initially identified",
            "Third-party service dependencies"
          ]
        },
        {
          subtitle: "3.3 Client Responsibilities",
          text: "To ensure successful project delivery, clients agree to:"
        },
        {
          list: [
            "Provide timely feedback and approvals",
            "Supply all required content, assets, and access",
            "Designate a primary point of contact",
            "Respond to queries within agreed timeframes",
            "Make timely payments as per the agreement"
          ]
        }
      ]
    },
    {
      title: "4. Payment Terms",
      content: [
        {
          subtitle: "4.1 Pricing and Fees",
          text: "All fees are quoted in INR or USD as specified in the project agreement. Prices are subject to change with 30 days notice for ongoing services."
        },
        {
          subtitle: "4.2 Payment Schedule",
          list: [
            "Initial deposit (typically 30-50%) is required to commence work",
            "Milestone payments as defined in the project agreement",
            "Final payment upon project completion and delivery",
            "Monthly retainer fees for ongoing support and maintenance"
          ]
        },
        {
          subtitle: "4.3 Late Payments",
          text: "Late payments may incur interest charges of 1.5% per month (18% per annum) or the maximum rate permitted by law. We reserve the right to suspend services for accounts more than 15 days overdue."
        },
        {
          subtitle: "4.4 Refund Policy",
          text: "Refunds are handled on a case-by-case basis. Initial deposits are generally non-refundable once work has commenced. Refunds for completed milestones are not provided."
        }
      ]
    },
    {
      title: "5. Intellectual Property Rights",
      content: [
        {
          subtitle: "5.1 Ownership of Deliverables",
          text: "Upon full payment, you will own the final deliverables created specifically for your project, including custom code, designs, and content."
        },
        {
          subtitle: "5.2 Company Retained Rights",
          text: "We retain ownership of:"
        },
        {
          list: [
            "Pre-existing code, frameworks, and tools",
            "Reusable components and libraries",
            "Development methodologies and processes",
            "General knowledge and experience gained"
          ]
        },
        {
          subtitle: "5.3 Third-Party Components",
          text: "Projects may include third-party software, libraries, or assets subject to their respective licenses. You are responsible for complying with these licenses."
        },
        {
          subtitle: "5.4 Portfolio Rights",
          text: "We reserve the right to display your project in our portfolio and marketing materials unless otherwise agreed in writing."
        }
      ]
    },
    {
      title: "6. Confidentiality",
      content: [
        {
          subtitle: "6.1 Non-Disclosure",
          text: "Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during the engagement."
        },
        {
          subtitle: "6.2 Confidential Information Includes",
          list: [
            "Business plans and strategies",
            "Technical specifications and source code",
            "Customer data and user information",
            "Financial information",
            "Trade secrets and proprietary processes"
          ]
        },
        {
          subtitle: "6.3 Exceptions",
          text: "Confidentiality obligations do not apply to information that:"
        },
        {
          list: [
            "Is publicly available or becomes public through no breach of this agreement",
            "Was known prior to disclosure",
            "Is independently developed without use of confidential information",
            "Must be disclosed by law or court order"
          ]
        }
      ]
    },
    {
      title: "7. Warranties and Disclaimers",
      content: [
        {
          subtitle: "7.1 Our Warranties",
          text: "We warrant that:"
        },
        {
          list: [
            "Services will be performed in a professional and workmanlike manner",
            "We have the right to provide the services",
            "Deliverables will substantially conform to specifications in the SOW",
            "We will use industry-standard practices for security and quality"
          ]
        },
        {
          subtitle: "7.2 Disclaimer of Warranties",
          text: "EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:"
        },
        {
          list: [
            "Warranties of merchantability or fitness for a particular purpose",
            "That services will be uninterrupted or error-free",
            "That defects will be corrected",
            "That our servers are free of viruses or other harmful components"
          ]
        },
        {
          subtitle: "7.3 Warranty Period",
          text: "We provide a warranty period (typically 30-90 days) for bug fixes related to original specifications. Changes to specifications or third-party integrations may void warranties."
        }
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: [
        {
          subtitle: "8.1 Liability Cap",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM IN THE 12 MONTHS PRECEDING THE CLAIM."
        },
        {
          subtitle: "8.2 Excluded Damages",
          text: "WE SHALL NOT BE LIABLE FOR:"
        },
        {
          list: [
            "Indirect, incidental, special, or consequential damages",
            "Loss of profits, revenue, data, or business opportunities",
            "Cost of substitute services",
            "Damages arising from third-party products or services",
            "Damages resulting from unauthorized access or data breaches not caused by our negligence"
          ]
        },
        {
          subtitle: "8.3 Exceptions",
          text: "Limitations do not apply to damages caused by our gross negligence, willful misconduct, or where prohibited by law."
        }
      ]
    },
    {
      title: "9. Indemnification",
      content: [
        {
          subtitle: "9.1 Your Indemnification",
          text: "You agree to indemnify, defend, and hold harmless Limitless Infotech Solution, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:"
        },
        {
          list: [
            "Your use of our services",
            "Your violation of these Terms",
            "Your violation of any rights of another party",
            "Content or materials you provide",
            "Your use of deliverables in violation of applicable laws"
          ]
        },
        {
          subtitle: "9.2 Our Indemnification",
          text: "We agree to indemnify you against third-party claims that our deliverables infringe intellectual property rights, provided you:"
        },
        {
          list: [
            "Notify us promptly of any claim",
            "Provide reasonable cooperation in the defense",
            "Give us sole control of the defense and settlement"
          ]
        }
      ]
    },
    {
      title: "10. Term and Termination",
      content: [
        {
          subtitle: "10.1 Term",
          text: "These Terms remain in effect while you use our services or have an active account with us."
        },
        {
          subtitle: "10.2 Termination by You",
          text: "You may terminate your account at any time by providing written notice. You remain responsible for any outstanding fees."
        },
        {
          subtitle: "10.3 Termination by Us",
          text: "We may suspend or terminate your access to services:"
        },
        {
          list: [
            "For violation of these Terms",
            "For non-payment of fees",
            "If we cease providing services",
            "For any conduct we deem harmful to our business or other users",
            "As required by law"
          ]
        },
        {
          subtitle: "10.4 Effect of Termination",
          text: "Upon termination:"
        },
        {
          list: [
            "Your right to access services immediately ceases",
            "We will provide completed deliverables upon payment of all outstanding fees",
            "Work-in-progress may be delivered at our discretion",
            "Provisions regarding confidentiality, intellectual property, and liability survive termination"
          ]
        }
      ]
    },
    {
      title: "11. Dispute Resolution",
      content: [
        {
          subtitle: "11.1 Informal Resolution",
          text: "In the event of any dispute, both parties agree to first attempt to resolve the matter through good faith negotiations."
        },
        {
          subtitle: "11.2 Mediation",
          text: "If informal resolution fails, parties agree to attempt mediation before pursuing legal action."
        },
        {
          subtitle: "11.3 Arbitration",
          text: "Any disputes not resolved through mediation shall be resolved through binding arbitration in Mumbai, Maharashtra, India, in accordance with the Arbitration and Conciliation Act, 1996."
        },
        {
          subtitle: "11.4 Governing Law",
          text: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles."
        },
        {
          subtitle: "11.5 Jurisdiction",
          text: "Subject to arbitration, courts in Mumbai, Maharashtra shall have exclusive jurisdiction over any disputes."
        }
      ]
    },
    {
      title: "12. Changes to Terms",
      content: [
        {
          text: "We reserve the right to modify these Terms at any time. We will notify you of material changes by:"
        },
        {
          list: [
            "Posting the updated Terms on our website",
            "Sending an email notification to your registered email address",
            "Displaying a notice on our website or client portal"
          ]
        },
        {
          text: "Your continued use of our services after changes take effect constitutes acceptance of the revised Terms. If you do not agree to changes, you should discontinue use of our services."
        }
      ]
    },
    {
      title: "13. General Provisions",
      content: [
        {
          subtitle: "13.1 Entire Agreement",
          text: "These Terms, together with any SOW or Service Agreement, constitute the entire agreement between you and Limitless Infotech Solution regarding use of our services."
        },
        {
          subtitle: "13.2 Severability",
          text: "If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect."
        },
        {
          subtitle: "13.3 Waiver",
          text: "Our failure to enforce any provision is not a waiver of our right to enforce it later."
        },
        {
          subtitle: "13.4 Assignment",
          text: "You may not assign or transfer these Terms without our written consent. We may assign our rights and obligations without restriction."
        },
        {
          subtitle: "13.5 Force Majeure",
          text: "Neither party shall be liable for delays or failures due to circumstances beyond reasonable control, including natural disasters, war, terrorism, pandemics, labor disputes, or government actions."
        },
        {
          subtitle: "13.6 Independent Contractors",
          text: "The relationship between you and Limitless Infotech Solution is that of independent contractors. Nothing in these Terms creates a partnership, joint venture, or employment relationship."
        }
      ]
    },
    {
      title: "14. Contact Information",
      content: [
        {
          text: "For questions about these Terms of Service, please contact us:"
        },
        {
          list: [
            "Email: Info@limitlessinfotech.com",
            "Phone: +91 77109 09492",
            "Address: Mumbai, Maharashtra, India",
            "Website: www.limitlessinfotech.com"
          ]
        },
        {
          text: "For legal notices, please send written communication to the above address, marked \"Attention: Legal Department\"."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center animate-float">
                <HiScale className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using Limitless Infotech Solution services, you agree to be bound by these terms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <HiDocumentText className="w-5 h-5 text-primary-400" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiShieldCheck className="w-5 h-5 text-primary-400" />
                <span>Legal Agreement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-500/10 border-y border-yellow-500/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-500 text-xl">⚠️</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  Important Legal Notice
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and Limitless Infotech Solution.
                  If you do not agree with any part of these terms, you must not use our services. For specific projects,
                  a detailed Statement of Work (SOW) or Service Agreement will supplement these general terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className="mb-12 bg-dark-800/30 rounded-2xl p-8 border border-dark-700 hover:border-primary-600/30 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-gray-300">
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold text-gray-200 mb-3">
                          {item.subtitle}
                        </h3>
                      )}

                      {item.text && (
                        <p className="leading-relaxed mb-4">{item.text}</p>
                      )}

                      {item.list && (
                        <ul className="space-y-2 ml-4">
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex} className="flex items-start">
                              <span className="text-primary-400 mr-3 mt-1 flex-shrink-0">•</span>
                              <span className="leading-relaxed">{listItem}</span>
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
        </div>
      </section>

      {/* Acceptance Section */}
      <section className="py-16 bg-dark-800/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-2xl p-8 border border-primary-600/30">
              <h2 className="text-2xl font-bold text-white mb-4">
                Acknowledgment and Acceptance
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                BY USING OUR SERVICES, SUBMITTING INFORMATION THROUGH OUR WEBSITE, OR ENTERING INTO A
                SERVICE AGREEMENT WITH LIMITLESS INFOTECH SOLUTION, YOU ACKNOWLEDGE THAT YOU HAVE READ,
                UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
              </p>
              <p className="text-gray-400 text-sm">
                If you have questions or concerns about these Terms, please contact us before using our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12">
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
                    <h4 className="font-semibold text-white mb-1">Privacy Policy</h4>
                    <p className="text-sm text-gray-400">How we handle your data</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/cookie-policy"
                className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-600/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-600/30 transition-colors">
                    <HiDocumentText className="w-6 h-6 text-secondary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Cookie Policy</h4>
                    <p className="text-sm text-gray-400">How we use cookies</p>
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
              Questions About These Terms?
            </h2>
            <p className="text-gray-300 mb-8">
              Our team is here to help clarify any questions you may have about our Terms of Service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Contact Us
              </Link>
              <Link
                to="/get-started"
                className="btn-secondary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
