import { useState } from 'react';
import { HiChat, HiPhone, HiGlobe, HiUserGroup, HiLightBulb, HiSparkles, HiChartBar, HiShieldCheck, HiClock, HiCheckCircle } from 'react-icons/hi';
import WhatsAppBusinessIntegration from '../components/WhatsAppBusinessIntegration';

const WhatsAppIntegrationPage = () => {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      title: "24/7 Availability",
      description: "Always-on support through WhatsApp Business API",
      icon: HiClock,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quick Responses",
      description: "Instant replies to common customer queries",
      icon: HiChat,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multilingual Support",
      description: "Support in multiple languages for global reach",
      icon: HiGlobe,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Seamless Integration",
      description: "Connect with existing CRM and support systems",
      icon: HiUserGroup,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const benefits = [
    {
      title: "Faster Response Times",
      description: "Reduce average response time from hours to minutes",
      metric: "75% faster"
    },
    {
      title: "Higher Engagement",
      description: "WhatsApp has 98% message open rate vs 20% for email",
      metric: "4.9x more"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce support costs by automating common queries",
      metric: "60% less"
    },
    {
      title: "Better Customer Satisfaction",
      description: "Instant, convenient support increases satisfaction",
      metric: "85% rated"
    }
  ];

  const useCases = [
    {
      title: "Lead Generation",
      description: "Capture leads directly through WhatsApp conversations"
    },
    {
      title: "Customer Support",
      description: "Provide instant support and resolve issues quickly"
    },
    {
      title: "Appointment Scheduling",
      description: "Schedule meetings and demos via WhatsApp"
    },
    {
      title: "Order Tracking",
      description: "Send order updates and delivery notifications"
    },
    {
      title: "Marketing Campaigns",
      description: "Send personalized marketing messages to customers"
    },
    {
      title: "Feedback Collection",
      description: "Collect customer feedback and reviews"
    }
  ];

  const integrations = [
    { name: 'WhatsApp Business API', description: 'Official WhatsApp integration' },
    { name: 'Facebook Business', description: 'Connect with Facebook Messenger' },
    { name: 'CRM Systems', description: 'Integrate with Salesforce, HubSpot, etc.' },
    { name: 'Helpdesk Software', description: 'Connect with Zendesk, Freshdesk' },
    { name: 'Marketing Tools', description: 'Sync with Mailchimp, Klaviyo' },
    { name: 'Analytics', description: 'Track performance and engagement' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiChat className="w-5 h-5" />
              <span className="text-sm font-semibold">WhatsApp Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              WhatsApp
              <br />
              Business Integration
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Connect with customers on the world's most popular messaging platform
            </p>
            <button
              onClick={() => setShowDemo(true)}
              className="btn-primary bg-white text-green-600 hover:bg-gray-100"
            >
              Try Live Demo
            </button>
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
              Everything you need to provide exceptional WhatsApp support
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

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Business <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transform your customer engagement with WhatsApp Business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HiChartBar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
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

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Common <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              How businesses use WhatsApp Business to engage with customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <HiLightBulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Seamless <span className="text-gradient">Integrations</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Connect with your existing tools and systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HiSparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Live <span className="text-gradient">Demo</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience our WhatsApp Business integration in action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft border border-gray-100 dark:border-dark-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-dark-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <HiChat className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">WhatsApp Business Demo</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Online</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiChat className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Try Our WhatsApp Integration</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Click the button below to open the WhatsApp chat widget and experience our integration.
                  </p>
                  <button
                    onClick={() => setShowDemo(true)}
                    className="btn-primary"
                  >
                    Open WhatsApp Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Security & <span className="text-gradient">Compliance</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade security for your WhatsApp communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <HiShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                End-to-End Encryption
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All messages are encrypted between sender and receiver, ensuring privacy and security.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <HiCheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                GDPR Compliant
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full compliance with GDPR and other data protection regulations for global operations.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <HiUserGroup className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Access Controls
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Role-based access controls ensure only authorized personnel can access customer data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Connect with Customers on WhatsApp?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Implement WhatsApp Business integration to enhance customer engagement
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary bg-white text-green-600 hover:bg-gray-100">
                Get Started
              </a>
              <a href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-green-600">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md">
            <WhatsAppBusinessIntegration />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppIntegrationPage;