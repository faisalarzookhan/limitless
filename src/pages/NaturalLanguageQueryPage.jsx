import { useState } from 'react';
import { HiChatAlt, HiLightBulb, HiAcademicCap, HiSparkles, HiCode, HiUserGroup, HiChartBar, HiDocumentText, HiDatabase } from 'react-icons/hi';
import NaturalLanguageQuery from '../components/NaturalLanguageQuery';

const NaturalLanguageQueryPage = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const features = [
    {
      title: "Natural Language Understanding",
      description: "Understand complex queries expressed in plain English",
      icon: HiAcademicCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Contextual Responses",
      description: "Provide relevant answers based on your specific context",
      icon: HiChatAlt,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Modal Queries",
      description: "Handle different types of questions and data formats",
      icon: HiSparkles,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-Time Processing",
      description: "Get instant responses to your questions",
      icon: HiLightBulb,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const useCases = [
    {
      question: "What's the cost for developing a mobile app?",
      answer: "Our mobile app development starts at $25,000 for basic apps and goes up to $150,000+ for complex enterprise solutions. We offer native iOS/Android and cross-platform solutions using React Native or Flutter."
    },
    {
      question: "How secure is your HR-IMS solution?",
      answer: "Our HR-IMS solution is SOC 2 Type II certified with GDPR compliance, end-to-end encryption, and multi-factor authentication. We undergo quarterly security audits and penetration testing."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we provide comprehensive API integration services supporting RESTful APIs, GraphQL, and custom integration solutions. We've successfully integrated with Salesforce, SAP, Oracle, and many other enterprise systems."
    },
    {
      question: "What's your timeline for a custom web application?",
      answer: "Custom web applications typically take 8-16 weeks depending on complexity. Basic websites: 4-8 weeks, complex applications: 12-20 weeks. We follow agile methodology with regular milestone deliveries."
    }
  ];

  const benefits = [
    {
      title: "Reduced Support Tickets",
      description: "Self-service reduces support requests by up to 60%",
      metric: "60% decrease"
    },
    {
      title: "Faster Resolution",
      description: "Instant answers reduce resolution time from hours to seconds",
      metric: "80% faster"
    },
    {
      title: "Improved Satisfaction",
      description: "Users appreciate the convenience and speed of natural language queries",
      metric: "90% satisfaction"
    },
    {
      title: "24/7 Availability",
      description: "AI assistant available around the clock to answer questions",
      metric: "Always on"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiAcademicCap className="w-5 h-5" />
              <span className="text-sm font-semibold">Natural Language Query</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Ask in Plain
              <br />
              English
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Get instant answers to your questions using natural language processing
            </p>
            <a 
              href="#query" 
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
            >
              Try It Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our natural language query system understands context and provides relevant answers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="query" className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Try Our Natural Language Query
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Ask any question about our services, pricing, or technical capabilities
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft border border-gray-100 dark:border-dark-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-dark-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <HiAcademicCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">AI Assistant</h3>
                  <div className="flex-1 flex justify-end">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setActiveTab('chat')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === 'chat'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        Chat
                      </button>
                      <button
                        onClick={() => setActiveTab('examples')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === 'examples'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
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
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Example Queries</h4>
                    <div className="space-y-4">
                      {useCases.map((useCase, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <HiChatAlt className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 dark:text-white mb-2">
                                {useCase.question}
                              </p>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">
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
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Business <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Natural language querying transforms how users interact with your systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiLightBulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Technical <span className="text-gradient">Implementation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge NLP and AI technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'OpenAI GPT', icon: HiAcademicCap, description: 'Language Understanding' },
              { name: 'TensorFlow', icon: HiCode, description: 'ML Framework' },
              { name: 'Python', icon: HiCode, description: 'Backend Processing' },
              { name: 'React', icon: HiCode, description: 'Frontend UI' },
              { name: 'PostgreSQL', icon: HiDatabase, description: 'Data Storage' },
              { name: 'Redis', icon: HiSparkles, description: 'Caching' },
              { name: 'Docker', icon: HiCode, description: 'Containerization' },
              { name: 'Kubernetes', icon: HiChartBar, description: 'Orchestration' }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-1 text-gray-900 dark:text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Easy <span className="text-gradient">Integration</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Add natural language querying to your existing systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <HiCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                API Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Integrate our natural language query API into your existing applications and systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">RESTful API endpoints</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Real-time processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Customizable responses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <HiDocumentText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Widget Embed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Embed our chat widget directly into your website or application.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Lightweight JavaScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Customizable UI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Branded experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <HiUserGroup className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Custom Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Tailored natural language solutions for your specific business needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Domain-specific models</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Private data integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiChatAlt className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Enterprise security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Implement Natural Language Querying?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform how users interact with your systems
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </a>
              <a href="/ai-features" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
                Explore AI Features
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaturalLanguageQueryPage;