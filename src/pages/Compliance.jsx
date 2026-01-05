import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiShieldCheck,
  HiDocumentText,
  HiLockClosed,
  HiUserGroup,
  HiGlobe,
  HiCheckCircle,
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

const Compliance = () => {
  const complianceStandards = [
    {
      id: 'soc2',
      title: 'SOC 2 Type II',
      description:
        'Our systems undergo rigorous annual audits to ensure security, availability, processing integrity, confidentiality, and privacy of customer data.',
      logo: 'SOC 2',
      status: 'Certified',
      expiry: 'Expires: Dec 2025',
      details: [
        'Type II certification covering 12-month period',
        'Independent third-party audit',
        'Comprehensive security controls',
        'Regular monitoring and testing',
      ],
    },
    {
      id: 'gdpr',
      title: 'GDPR Compliance',
      description:
        'We adhere to the strictest data protection standards in the European Union, ensuring your data privacy rights are always protected.',
      logo: 'GDPR',
      status: 'Compliant',
      expiry: 'Ongoing',
      details: [
        'Data processing agreements',
        'Right to be forgotten',
        'Data breach notification within 72 hours',
        'Privacy by design principles',
      ],
    },
    {
      id: 'iso27001',
      title: 'ISO 27001',
      description:
        'International standard for information security management systems, demonstrating our commitment to maintaining secure information handling.',
      logo: 'ISO 27001',
      status: 'Certified',
      expiry: 'Expires: Jun 2025',
      details: [
        'Information security management system',
        'Risk assessment and treatment',
        'Continuous improvement process',
        'Regular internal audits',
      ],
    },
    {
      id: 'hipaa',
      title: 'HIPAA Compliance',
      description:
        'Health Insurance Portability and Accountability Act compliance for healthcare data handling and protection.',
      logo: 'HIPAA',
      status: 'Compliant',
      expiry: 'Ongoing',
      details: [
        'Protected health information (PHI) handling',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
      ],
    },
  ];

  const securityPractices = [
    {
      icon: HiLockClosed,
      title: 'Data Encryption',
      description:
        'AES-256 encryption for data at rest and TLS 1.3 for data in transit',
    },
    {
      icon: HiUserGroup,
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access control',
    },
    {
      icon: HiGlobe,
      title: 'Global Compliance',
      description: 'Adherence to international data protection regulations',
    },
    {
      icon: HiDocumentText,
      title: 'Audit Logs',
      description: 'Comprehensive logging of all system access and changes',
    },
  ];

  const complianceFeatures = [
    {
      title: 'Regular Security Audits',
      description:
        'Quarterly third-party security assessments and penetration testing',
      icon: HiShieldCheck,
    },
    {
      title: 'Incident Response',
      description:
        '24/7 incident response team with documented response procedures',
      icon: HiCheckCircle,
    },
    {
      title: 'Data Residency',
      description: 'Control over where your data is stored and processed',
      icon: HiGlobe,
    },
    {
      title: 'Privacy Controls',
      description: 'Granular privacy settings and data management tools',
      icon: HiLockClosed,
    },
  ];

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 font-['Figtree']">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HiShieldCheck className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Enterprise Security & Compliance
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enterprise-Grade
              <br />
              Security & Compliance
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our commitment to the highest standards of data protection,
              security, and regulatory compliance
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#0a0b0d] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']"
              >
                Request Security Audit
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']"
              >
                Compliance Documentation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit'] text-white">
              Industry <span className="text-[#ffc957]">Standards</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-['Figtree']">
              We maintain the highest levels of security and compliance
              certifications to protect your business data
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.id}
                className="bg-[#1a1c20] rounded-2xl p-8 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white font-['Outfit']">
                      {standard.title}
                    </h3>
                    <p className="text-gray-400 mb-4 font-['Figtree']">
                      {standard.description}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-white px-4 py-2 rounded-lg text-sm font-bold">
                    {standard.status}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 font-['Figtree']">
                    <HiDocumentText className="w-4 h-4 mr-2" />
                    {standard.expiry}
                  </div>

                  <div className="space-y-2">
                    {standard.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <HiCheckCircle className="w-4 h-4 text-[#2563eb] mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300 font-['Figtree']">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#2563eb]/10 to-[#ffc957]/10 rounded-lg p-4">
                  <p className="text-sm text-gray-400 font-['Figtree']">
                    <strong>Assessment:</strong> Validated by independent
                    auditors with no critical findings
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit'] text-white">
              Security <span className="text-[#ffc957]">Practices</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-['Figtree']">
              Our comprehensive approach to protecting your data and maintaining
              system integrity
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {securityPractices.map((practice, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center mx-auto mb-6">
                  <practice.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-['Outfit']">
                  {practice.title}
                </h3>
                <p className="text-gray-400 font-['Figtree']">
                  {practice.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit'] text-white">
              Compliance <span className="text-[#ffc957]">Features</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-['Figtree']">
              Built-in tools and features that help you maintain compliance with
              industry regulations
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 p-6 bg-[#1a1c20] rounded-2xl border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white font-['Outfit']">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-['Figtree']">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-custom">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-['Outfit']">
              Trusted by Enterprise Clients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 font-['Outfit']">99.9%</div>
                <div className="text-white/80 font-['Figtree']">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 font-['Outfit']">24/7</div>
                <div className="text-white/80 font-['Figtree']">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 font-['Outfit']">100+</div>
                <div className="text-white/80 font-['Figtree']">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 font-['Outfit']">0</div>
                <div className="text-white/80 font-['Figtree']">Security Breaches</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-br from-[#2563eb]/10 to-[#ffc957]/10 rounded-3xl p-12 md:p-16 text-center border border-[#2563eb]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['Outfit']">
              Ready to Discuss Your Compliance Needs?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-['Figtree']">
              Our security team is ready to discuss how we can meet your
              specific compliance requirements
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#2563eb] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                Schedule Security Review
              </Link>
              <Link to="/compliance" className="px-8 py-4 bg-transparent border-2 border-[#2563eb] text-[#2563eb] rounded-lg hover:bg-[#2563eb] hover:text-white transition-colors duration-300 font-['Outfit']">
                Download Compliance Report
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
};

export default Compliance;
