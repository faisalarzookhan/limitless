import { useState } from 'react';
import { HiLightningBolt, HiChartBar, HiUserGroup, HiClock, HiAcademicCap, HiSparkles, HiTrendingUp, HiTrendingDown, HiCode, HiDatabase } from 'react-icons/hi';
import PredictiveAnalyticsDashboard from '../components/PredictiveAnalyticsDashboard';

const AIFeatures = () => {
  const [activeProduct, setActiveProduct] = useState('hr-ims');
  const [activeFeature, setActiveFeature] = useState('predictive-analytics');

  const products = [
    { id: 'hr-ims', name: 'HR-IMS', description: 'HR Information Management System' },
    { id: 'trackit', name: 'TrackIT', description: 'Project Tracking Solution' }
  ];

  const features = [
    { id: 'predictive-analytics', name: 'Predictive Analytics', icon: HiChartBar },
    { id: 'automated-insights', name: 'Automated Insights', icon: HiLightningBolt },
    { id: 'ai-recommendations', name: 'AI Recommendations', icon: HiSparkles },
    { id: 'smart-automation', name: 'Smart Automation', icon: HiLightningBolt }
  ];

  const aiCapabilities = [
    {
      title: "Predictive Modeling",
      description: "Forecast trends and outcomes using machine learning algorithms",
      benefits: [
        "95% accuracy in predictions",
        "Real-time model updates",
        "Customizable prediction parameters"
      ],
      icon: HiTrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Natural Language Processing",
      description: "Understand and process human language for better insights",
      benefits: [
        "Multi-language support",
        "Sentiment analysis",
        "Automated categorization"
      ],
      icon: HiAcademicCap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Decision Making",
      description: "AI-powered decisions that improve over time",
      benefits: [
        "Reduced manual intervention",
        "Faster decision cycles",
        "Continuous learning algorithms"
      ],
      icon: HiLightningBolt,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Anomaly Detection",
      description: "Identify unusual patterns and potential issues",
      benefits: [
        "Real-time alerts",
        "Proactive issue resolution",
        "Customizable thresholds"
      ],
      icon: HiLightningBolt,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const useCases = [
    {
      title: "HR-IMS: Employee Attrition Prediction",
      description: "Predict which employees are at risk of leaving and take proactive measures",
      metrics: [
        { label: "Accuracy", value: "92%" },
        { label: "Time Saved", value: "15h/week" },
        { label: "Retention Rate", value: "+18%" }
      ],
      icon: HiUserGroup,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "TrackIT: Project Success Forecasting",
      description: "Predict project outcomes and identify potential delays before they happen",
      metrics: [
        { label: "Accuracy", value: "88%" },
        { label: "On-time Delivery", value: "+22%" },
        { label: "Budget Adherence", value: "+15%" }
      ],
      icon: HiClock,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">AI-Powered Features</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              AI-Native
              <br />
              Features
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Experience the future of business automation with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
                Request Demo
              </a>
              <a href="/innovation-lab" className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600">
                See Innovation Lab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Selector */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Select Your <span className="text-gradient">AI Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the product and feature you want to explore
              </p>
            </div>

            {/* Product Selector */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 dark:bg-dark-800 rounded-xl p-1">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProduct(product.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeProduct === product.id
                        ? 'bg-white dark:bg-dark-700 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Selector */}
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`flex flex-col items-center p-4 rounded-xl border transition-colors ${
                        activeFeature === feature.id
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                          : 'border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-dark-600'
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium">{feature.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Predictive Analytics Dashboard */}
            <div className="mb-12">
              <PredictiveAnalyticsDashboard productType={activeProduct} />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              AI <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our advanced AI technologies that power intelligent business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {capability.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {capability.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Real-World <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how our AI features deliver measurable business value
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-600 rounded-xl p-4">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Impact:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {useCase.title.includes('HR-IMS')
                        ? "This capability helped reduce employee turnover by 18% and saved an estimated $2.3M in recruitment costs."
                        : "This capability improved project success rates by 22% and reduced delivery delays by 35%."
                      }
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              AI <span className="text-gradient">Technology Stack</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The cutting-edge technologies that power our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'TensorFlow', icon: HiCode, description: 'ML Framework' },
              { name: 'Python', icon: HiCode, description: 'Development' },
              { name: 'PyTorch', icon: HiCode, description: 'Deep Learning' },
              { name: 'Scikit-learn', icon: HiDatabase, description: 'ML Library' },
              { name: 'Keras', icon: HiCode, description: 'NN Framework' },
              { name: 'OpenAI API', icon: HiSparkles, description: 'NLP Models' },
              { name: 'AWS SageMaker', icon: HiChartBar, description: 'ML Platform' },
              { name: 'Azure ML', icon: HiChartBar, description: 'Cloud AI' }
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Experience AI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your business with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
                Start Free Trial
              </a>
              <a href="/ai-features" className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600">
                View All Features
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFeatures;