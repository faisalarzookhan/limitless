import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import '../styles/hero-pattern.css';
import {
  HiLightningBolt,
  HiChartBar,
  HiUserGroup,
  HiClock,
  HiAcademicCap,
  HiSparkles,
  HiTrendingUp,
  HiTrendingDown,
  HiCode,
  HiDatabase,
  HiChevronRight,
  HiArrowRight,
} from 'react-icons/hi';
import PredictiveAnalyticsDashboard from '../components/PredictiveAnalyticsDashboard';
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

const AIFeatures = memo(() => {
  const [activeProduct, setActiveProduct] = useState('hr-ims');
  const [activeFeature, setActiveFeature] = useState('predictive-analytics');

  const products = [
    {
      id: 'hr-ims',
      name: 'HR-IMS',
      description: 'HR Information Management System',
    },
    {
      id: 'trackit',
      name: 'TrackIT',
      description: 'Project Tracking Solution',
    },
  ];

  const features = [
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      icon: HiChartBar,
    },
    {
      id: 'automated-insights',
      name: 'Automated Insights',
      icon: HiLightningBolt,
    },
    { id: 'ai-recommendations', name: 'AI Recommendations', icon: HiSparkles },
    { id: 'smart-automation', name: 'Smart Automation', icon: HiLightningBolt },
  ];

  const aiCapabilities = [
    {
      title: 'Predictive Modeling',
      description:
        'Forecast trends and outcomes using machine learning algorithms',
      benefits: [
        '95% accuracy in predictions',
        'Real-time model updates',
        'Customizable prediction parameters',
      ],
      icon: HiTrendingUp,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and process human language for better insights',
      benefits: [
        'Multi-language support',
        'Sentiment analysis',
        'Automated categorization',
      ],
      icon: HiAcademicCap,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Automated Decision Making',
      description: 'AI-powered decisions that improve over time',
      benefits: [
        'Reduced manual intervention',
        'Faster decision cycles',
        'Continuous learning algorithms',
      ],
      icon: HiLightningBolt,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and potential issues',
      benefits: [
        'Real-time alerts',
        'Proactive issue resolution',
        'Customizable thresholds',
      ],
      icon: HiLightningBolt,
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  const useCases = [
    {
      title: 'HR-IMS: Employee Attrition Prediction',
      description:
        'Predict which employees are at risk of leaving and take proactive measures',
      metrics: [
        { label: 'Accuracy', value: '92%' },
        { label: 'Time Saved', value: '15h/week' },
        { label: 'Retention Rate', value: '+18%' },
      ],
      icon: HiUserGroup,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'TrackIT: Project Success Forecasting',
      description:
        'Predict project outcomes and identify potential delays before they happen',
      metrics: [
        { label: 'Accuracy', value: '88%' },
        { label: 'On-time Delivery', value: '+22%' },
        { label: 'Budget Adherence', value: '+15%' },
      ],
      icon: HiClock,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c20] dark:from-[#0a0b0d] dark:to-[#1a1c20]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern-bg opacity-20"></div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">AI-Powered Features</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              AI-Native
              <br />
              Features
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Experience the future of business automation with our AI-powered
              solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="/contact"
                className="btn-primary bg-[#ffc957] text-[#0a0b0d] hover:bg-[#ffb830] transition-colors duration-300 font-['Outfit'] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
              >
                Request Demo
              </a>
              <a
                href="/innovation-lab"
                className="btn-outline border-white text-white hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit'] font-bold px-8 py-4 rounded-lg"
              >
                See Innovation Lab
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Selector */}
      <section className="section-padding bg-[#0a0b0d] dark:bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <motion.h2 className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4 text-white">
                Select Your <span className="text-[#ffc957]">AI Features</span>
              </motion.h2>
              <motion.p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']">
                Choose the product and feature you want to explore
              </motion.p>
            </motion.div>

            {/* Product Selector */}
            <motion.div className="flex justify-center mb-8" variants={itemVariants}>
              <div className="inline-flex bg-[#1a1c20] rounded-xl p-1">
                {products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProduct(product.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors font-['Outfit'] ${
                      activeProduct === product.id
                        ? 'bg-[#2563eb] text-white'
                        : 'text-gray-300 hover:text-white hover:bg-[#2563eb] hover:bg-opacity-20'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Feature Selector */}
            <motion.div className="flex justify-center mb-12" variants={itemVariants}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map(feature => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`flex flex-col items-center p-4 rounded-xl transition-colors font-['Outfit'] ${
                        activeFeature === feature.id
                          ? 'bg-[#2563eb] text-white rounded-lg'
                          : 'bg-[#1a1c20] text-gray-300 hover:bg-[#2563eb] hover:bg-opacity-20 hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-2 text-[#ffc957]" />
                      <span className="text-sm font-medium">
                        {feature.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Predictive Analytics Dashboard */}
            <motion.div className="mb-12" variants={itemVariants}>
              <div className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30">
                <PredictiveAnalyticsDashboard productType={activeProduct} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section-padding bg-[#0a0b0d] dark:bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4 text-white">
                AI <span className="text-[#ffc957]">Capabilities</span>
              </motion.h2>
              <motion.p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']">
                Our advanced AI technologies that power intelligent business
                solutions
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-[#1a1c20] rounded-2xl p-8 border border-[#2563eb] border-opacity-30"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-2xl mb-6"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white font-['Outfit']">
                      {capability.title}
                    </h3>

                    <p className="text-gray-300 mb-6 font-['Figtree']">
                      {capability.description}
                    </p>

                    <ul className="space-y-3">
                      {capability.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#ffc957] rounded-full"></div>
                          <span className="text-gray-300 font-['Figtree']">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-[#0a0b0d] dark:bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4 text-white">
                Real-World <span className="text-[#ffc957]">Use Cases</span>
              </motion.h2>
              <motion.p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']">
                See how our AI features deliver measurable business value
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-[#1a1c20] rounded-2xl p-8 border border-[#2563eb] border-opacity-30"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center mr-4"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-white font-['Outfit']">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-300 font-['Figtree']">
                          {useCase.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-white mb-1 font-['Outfit']">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-300 font-['Figtree']">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-[#2563eb] from-opacity-20 to-[#ffc957] to-opacity-20 rounded-xl p-4 border border-[#2563eb] border-opacity-30">
                      <h4 className="font-semibold mb-2 text-white font-['Outfit']">
                        Impact:
                      </h4>
                      <p className="text-sm text-gray-300 font-['Figtree']">
                        {useCase.title.includes('HR-IMS')
                          ? 'This capability helped reduce employee turnover by 18% and saved an estimated $2.3M in recruitment costs.'
                          : 'This capability improved project success rates by 22% and reduced delivery delays by 35%.'}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section-padding bg-[#0a0b0d] dark:bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4 text-white">
                AI <span className="text-[#ffc957]">Technology Stack</span>
              </motion.h2>
              <motion.p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']">
                The cutting-edge technologies that power our AI solutions
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'TensorFlow', icon: HiCode, description: 'ML Framework' },
                { name: 'Python', icon: HiCode, description: 'Development' },
                { name: 'PyTorch', icon: HiCode, description: 'Deep Learning' },
                {
                  name: 'Scikit-learn',
                  icon: HiDatabase,
                  description: 'ML Library',
                },
                { name: 'Keras', icon: HiCode, description: 'NN Framework' },
                {
                  name: 'OpenAI API',
                  icon: HiSparkles,
                  description: 'NLP Models',
                },
                {
                  name: 'AWS SageMaker',
                  icon: HiChartBar,
                  description: 'ML Platform',
                },
                { name: 'Azure ML', icon: HiChartBar, description: 'Cloud AI' },
              ].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div key={index} className="text-center" variants={itemVariants}>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-1 text-white font-['Outfit']">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-gray-300 font-['Figtree']">
                      {tech.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern-bg opacity-20"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Experience AI?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Transform your business with our AI-powered solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="/contact"
                className="btn-primary bg-[#ffc957] text-[#0a0b0d] hover:bg-[#ffb830] transition-colors duration-300 font-['Outfit'] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </a>
              <a
                href="/ai-features"
                className="btn-outline border-white text-white hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit'] font-bold px-8 py-4 rounded-lg"
              >
                View All Features
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
});

export default AIFeatures;
