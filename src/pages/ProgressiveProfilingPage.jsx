import { useState } from 'react';
import {
  HiUser,
  HiBriefcase,
  HiLightBulb,
  HiSparkles,
  HiChartBar,
  HiShieldCheck,
  HiClock,
  HiUserGroup,
  HiCheckCircle,
} from 'react-icons/hi';
import ProgressiveProfiling from '../components/ProgressiveProfiling';

const ProgressiveProfilingPage = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingData, setOnboardingData] = useState(null);

  const handleOnboardingComplete = data => {
    setOnboardingData(data);
    setShowOnboarding(false);
    // In a real app, you would save this data to your backend
    console.log('Onboarding data:', data);
  };

  const handleOnboardingCancel = () => {
    setShowOnboarding(false);
  };

  const benefits = [
    {
      title: 'Reduced Friction',
      description: 'Collect information gradually without overwhelming users',
      icon: HiClock,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Higher Completion',
      description: 'Users are more likely to complete profile information',
      icon: HiChartBar,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Personalized Experience',
      description: 'Tailor the experience based on user preferences',
      icon: HiUser,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Better Data Quality',
      description: 'Collect more accurate information over time',
      icon: HiShieldCheck,
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  const features = [
    {
      title: 'Smart Field Prioritization',
      description:
        'Show the most important fields first based on user behavior',
    },
    {
      title: 'Context-Aware Suggestions',
      description: 'Provide intelligent suggestions based on previous answers',
    },
    {
      title: 'Cross-Device Sync',
      description: 'Continue where you left off on any device',
    },
    {
      title: 'Privacy-First Approach',
      description: "Only collect what's necessary for personalization",
    },
    {
      title: 'A/B Testing Capabilities',
      description: 'Optimize the onboarding flow based on conversion rates',
    },
    {
      title: 'Integration Ready',
      description: 'Seamlessly integrate with your existing systems',
    },
  ];

  const stats = [
    { label: 'Completion Rate', value: '78%', change: '+32%' },
    { label: 'User Engagement', value: '2.4x', change: '+45%' },
    { label: 'Data Quality', value: '94%', change: '+28%' },
    { label: 'Drop-off Rate', value: '12%', change: '-41%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Progressive Profiling
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Progressive
              <br />
              Profiling
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Collect user information gradually without overwhelming them
            </p>
            <button
              onClick={() => setShowOnboarding(true)}
              className="btn-primary bg-white text-indigo-600 hover:bg-gray-100"
            >
              Try Demo Onboarding
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why <span className="text-gradient">Progressive Profiling</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transform your user onboarding experience with smart, gradual
              information collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Proven <span className="text-gradient">Results</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Data-driven improvements to user onboarding and engagement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 text-center"
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.label}
                </div>
                <div
                  className={`text-sm font-medium ${
                    stat.change.startsWith('+')
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced capabilities for seamless user onboarding
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiUserGroup className="w-6 h-6 text-white" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Live <span className="text-gradient">Demo</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the progressive profiling onboarding flow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {onboardingData ? (
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Onboarding Complete!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Thank you for completing the progressive profiling onboarding.
                  Your profile has been updated.
                </p>
                <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 text-left">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Your Information:
                  </h4>
                  <pre className="text-sm text-gray-600 dark:text-gray-400 overflow-x-auto">
                    {JSON.stringify(onboardingData, null, 2)}
                  </pre>
                </div>
                <button
                  onClick={() => {
                    setOnboardingData(null);
                    setShowOnboarding(true);
                  }}
                  className="mt-6 btn-primary"
                >
                  Try Again
                </button>
              </div>
            ) : showOnboarding ? (
              <ProgressiveProfiling
                onComplete={handleOnboardingComplete}
                onCancel={handleOnboardingCancel}
              />
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiSparkles className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Progressive Profiling Demo
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Click the button below to experience our progressive profiling
                  onboarding flow. We'll gradually collect information to
                  personalize your experience.
                </p>
                <button
                  onClick={() => setShowOnboarding(true)}
                  className="btn-primary"
                >
                  Start Onboarding
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Easy <span className="text-gradient">Implementation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Integrate progressive profiling into your existing onboarding flow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <HiCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                API Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Simple API endpoints to track and manage user profile
                completion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">RESTful API</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Webhook support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Real-time updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <HiUser className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Customizable Flows
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tailor the onboarding experience based on user behavior and
                preferences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Dynamic field ordering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Conditional logic</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">A/B testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <HiShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Privacy & Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built with privacy-first principles and enterprise-grade
                security.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">GDPR compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">End-to-end encryption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">SOC 2 certified</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Improve Your Onboarding?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Implement progressive profiling to reduce friction and increase
              completion rates
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {showOnboarding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl">
            <ProgressiveProfiling
              onComplete={handleOnboardingComplete}
              onCancel={handleOnboardingCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressiveProfilingPage;
