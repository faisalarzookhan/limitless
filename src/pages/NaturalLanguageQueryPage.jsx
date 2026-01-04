import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiChatAlt,
  HiLightBulb,
  HiAcademicCap,
  HiSparkles,
  HiCode,
  HiUserGroup,
  HiChartBar,
  HiDocumentText,
  HiDatabase,
} from 'react-icons/hi';
import NaturalLanguageQuery from '../components/NaturalLanguageQuery';

const NaturalLanguageQueryPage = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const features = [
    {
      title: 'Natural Language Understanding',
      description: 'Understand complex queries expressed in plain English',
      icon: HiAcademicCap,
      color: 'from-[#2563eb] to-[#ffc957]',
    },
    {
      title: 'Contextual Responses',
      description: 'Provide relevant answers based on your specific context',
      icon: HiChatAlt,
      color: 'from-[#ffc957] to-[#2563eb]',
    },
    {
      title: 'Multi-Modal Queries',
      description: 'Handle different types of questions and data formats',
      icon: HiSparkles,
      color: 'from-[#2563eb] to-[#1d4ed8]',
    },
    {
      title: 'Real-Time Processing',
      description: 'Get instant responses to your questions',
      icon: HiLightBulb,
      color: 'from-[#ffc957] to-[#1d4ed8]',
    },
  ];

  const useCases = [
    {
      question: "What's the cost for developing a mobile app?",
      answer:
        'Our mobile app development starts at $25,000 for basic apps and goes up to $150,000+ for complex enterprise solutions. We offer native iOS/Android and cross-platform solutions using React Native or Flutter.',
    },
    {
      question: 'How secure is your HR-IMS solution?',
      answer:
        'Our HR-IMS solution is SOC 2 Type II certified with GDPR compliance, end-to-end encryption, and multi-factor authentication. We undergo quarterly security audits and penetration testing.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer:
        "Yes, we provide comprehensive API integration services supporting RESTful APIs, GraphQL, and custom integration solutions. We've successfully integrated with Salesforce, SAP, Oracle, and many other enterprise systems.",
    },
    {
      question: "What's your timeline for a custom web application?",
      answer:
        'Custom web applications typically take 8-16 weeks depending on complexity. Basic websites: 4-8 weeks, complex applications: 12-20 weeks. We follow agile methodology with regular milestone deliveries.',
    },
  ];

  const benefits = [
    {
      title: 'Reduced Support Tickets',
      description: 'Self-service reduces support requests by up to 60%',
      metric: '60% decrease',
    },
    {
      title: 'Faster Resolution',
      description:
        'Instant answers reduce resolution time from hours to seconds',
      metric: '80% faster',
    },
    {
      title: 'Improved Satisfaction',
      description:
        'Users appreciate the convenience and speed of natural language queries',
      metric: '90% satisfaction',
    },
    {
      title: '24/7 Availability',
      description:
        'AI assistant available around the clock to answer questions',
      metric: 'Always on',
    },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#0a0b0d]/20 px-6 py-3 rounded-full mb-8"
              variants={itemVariants}
            >
              <HiAcademicCap className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">
                Natural Language Query
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              variants={itemVariants}
            >
              Ask in Plain
              <br />
              English
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Get instant answers to your questions using natural language
              processing
            </motion.p>
            <motion.a
              href="#query"
              className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              variants={itemVariants}
            >
              Try It Now
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Powerful <span className="text-[#ffc957]">Features</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Our natural language query system understands context and provides
              relevant answers
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-['Figtree']">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Interactive Demo */}
      <motion.section
        id="query"
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
                variants={itemVariants}
              >
                Try Our Natural Language Query
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 font-['Figtree']"
                variants={itemVariants}
              >
                Ask any question about our services, pricing, or technical
                capabilities
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center">
                    <HiAcademicCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-['Outfit'] font-bold text-white">
                    AI Assistant
                  </h3>
                  <div className="flex-1 flex justify-end">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setActiveTab('chat')}
                        className={`px-4 py-2 rounded-lg text-sm font-['Figtree'] transition-colors ${
                          activeTab === 'chat'
                            ? 'bg-[#2563eb]/20 text-[#2563eb]'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Chat
                      </button>
                      <button
                        onClick={() => setActiveTab('examples')}
                        className={`px-4 py-2 rounded-lg text-sm font-['Figtree'] transition-colors ${
                          activeTab === 'examples'
                            ? 'bg-[#2563eb]/20 text-[#2563eb]'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Examples
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'chat' ? (
                  <NaturalLanguageQuery />
                ) : (
                  <div className="space-y-6">
                    <h4 className="font-['Outfit'] font-semibold text-white mb-4">
                      Example Queries
                    </h4>
                    <div className="space-y-4">
                      {useCases.map((useCase, index) => (
                        <div
                          key={index}
                          className="bg-gray-800 rounded-xl p-4"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center flex-shrink-0">
                              <HiChatAlt className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-['Figtree'] font-medium text-white mb-2">
                                {useCase.question}
                              </p>
                              <p className="text-gray-300 text-sm font-['Figtree']">
                                {useCase.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Business <span className="text-[#ffc957]">Benefits</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Natural language querying transforms how users interact with your
              systems
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-6 shadow-xl border border-gray-700 text-center"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiLightBulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-4 font-['Figtree']">
                  {benefit.description}
                </p>
                <div className="text-2xl font-['Outfit'] font-bold text-[#ffc957]">
                  {benefit.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technical Implementation */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Technical <span className="text-[#ffc957]">Implementation</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Built with cutting-edge NLP and AI technologies
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: 'OpenAI GPT',
                icon: HiAcademicCap,
                description: 'Language Understanding',
              },
              { name: 'TensorFlow', icon: HiCode, description: 'ML Framework' },
              {
                name: 'Python',
                icon: HiCode,
                description: 'Backend Processing',
              },
              { name: 'React', icon: HiCode, description: 'Frontend UI' },
              {
                name: 'PostgreSQL',
                icon: HiDatabase,
                description: 'Data Storage',
              },
              { name: 'Redis', icon: HiSparkles, description: 'Caching' },
              { name: 'Docker', icon: HiCode, description: 'Containerization' },
              {
                name: 'Kubernetes',
                icon: HiChartBar,
                description: 'Orchestration',
              },
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Outfit'] font-bold mb-1 text-white">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-300 font-['Figtree']">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Integration Options */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Easy <span className="text-[#ffc957]">Integration</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Add natural language querying to your existing systems
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'API Integration',
                description: 'Integrate our natural language query API into your existing applications and systems.',
                icon: HiCode,
                color: 'from-[#2563eb] to-[#ffc957]',
                features: [
                  'RESTful API endpoints',
                  'Real-time processing',
                  'Customizable responses'
                ]
              },
              {
                title: 'Widget Embed',
                description: 'Embed our chat widget directly into your website or application.',
                icon: HiDocumentText,
                color: 'from-[#ffc957] to-[#2563eb]',
                features: [
                  'Lightweight JavaScript',
                  'Customizable UI',
                  'Branded experience'
                ]
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored natural language solutions for your specific business needs.',
                icon: HiUserGroup,
                color: 'from-[#2563eb] to-[#1d4ed8]',
                features: [
                  'Domain-specific models',
                  'Private data integration',
                  'Enterprise security'
                ]
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-4 text-white">
                  {option.title}
                </h3>
                <p className="text-gray-300 mb-6 font-['Figtree']">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li className="flex items-center space-x-2" key={idx}>
                      <HiChatAlt className="w-4 h-4 text-[#2563eb]" />
                      <span className="text-sm font-['Figtree']">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Ready to Implement Natural Language Querying?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#0a0b0d]/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Transform how users interact with your systems
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <a
                href="/contact"
                className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                Get Started
              </a>
              <a
                href="/ai-features"
                className="bg-transparent border border-[#0a0b0d] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#ffc957] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                Explore AI Features
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default NaturalLanguageQueryPage;