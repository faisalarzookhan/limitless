import { Link } from 'react-router-dom';
import {
  HiShieldCheck,
  HiDocumentText,
  HiLockClosed,
  HiUserGroup,
  HiGlobe,
  HiCheckCircle,
} from 'react-icons/hi';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiShieldCheck className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Enterprise Security & Compliance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Enterprise-Grade
              <br />
              Security & Compliance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Our commitment to the highest standards of data protection,
              security, and regulatory compliance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Request Security Audit
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                Compliance Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Industry <span className="text-gradient">Standards</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We maintain the highest levels of security and compliance
              certifications to protect your business data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={standard.id}
                className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {standard.description}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    {standard.status}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <HiDocumentText className="w-4 h-4 mr-2" />
                    {standard.expiry}
                  </div>

                  <div className="space-y-2">
                    {standard.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <HiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Assessment:</strong> Validated by independent
                    auditors with no critical findings
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Security <span className="text-gradient">Practices</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our comprehensive approach to protecting your data and maintaining
              system integrity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityPractices.map((practice, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <practice.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {practice.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Compliance <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built-in tools and features that help you maintain compliance with
              industry regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-soft border border-gray-100 dark:border-dark-700"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Trusted by Enterprise Clients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-white/80">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-white/80">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">0</div>
                <div className="text-white/80">Security Breaches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800 rounded-3xl p-12 md:p-16 text-center border border-primary-200 dark:border-dark-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Discuss Your Compliance Needs?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Our security team is ready to discuss how we can meet your
              specific compliance requirements
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule Security Review
              </Link>
              <Link to="/compliance" className="btn-outline">
                Download Compliance Report
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
