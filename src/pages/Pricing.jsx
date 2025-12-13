import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiCheckCircle,
  HiX,
  HiLightningBolt,
  HiCube,
  HiStar,
  HiShieldCheck,
  HiTrendingUp,
  HiCode,
  HiDeviceMobile,
  HiChartBar,
  HiCog,
  HiSupport,
  HiArrowRight
} from 'react-icons/hi';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'support', name: 'Support & Maintenance' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter Package',
      icon: HiLightningBolt,
      color: 'blue',
      category: 'development',
      description: 'Perfect for startups and small businesses',
      monthlyPrice: 49999,
      yearlyPrice: 499999,
      popular: false,
      features: [
        { name: 'Landing Page or Simple Website (5-7 pages)', included: true },
        { name: 'Responsive Design (Mobile + Desktop)', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'Social Media Integration', included: true },
        { name: '1 Month Free Support', included: true },
        { name: 'Content Management System', included: false },
        { name: 'E-commerce Functionality', included: false },
        { name: 'Custom API Integration', included: false },
        { name: 'Advanced Analytics', included: false }
      ],
      deliveryTime: '2-3 weeks',
      revisions: '3 revisions included'
    },
    {
      id: 'professional',
      name: 'Professional Package',
      icon: HiCube,
      color: 'primary',
      category: 'development',
      description: 'Ideal for growing businesses',
      monthlyPrice: 99999,
      yearlyPrice: 999999,
      popular: true,
      features: [
        { name: 'Full-featured Website (15-20 pages)', included: true },
        { name: 'Advanced Responsive Design', included: true },
        { name: 'SEO Optimization', included: true },
        { name: 'Content Management System', included: true },
        { name: 'Advanced Forms & Integrations', included: true },
        { name: '3 Months Free Support', included: true },
        { name: 'Blog/News Section', included: true },
        { name: 'Performance Optimization', included: true },
        { name: 'E-commerce Functionality', included: true },
        { name: 'Custom API Integration', included: false },
        { name: 'Advanced Analytics Dashboard', included: false }
      ],
      deliveryTime: '4-6 weeks',
      revisions: '5 revisions included'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      icon: HiStar,
      color: 'purple',
      category: 'development',
      description: 'Complete solution for large organizations',
      monthlyPrice: 199999,
      yearlyPrice: 1999999,
      popular: false,
      features: [
        { name: 'Custom Web/Mobile Application', included: true },
        { name: 'Unlimited Pages & Features', included: true },
        { name: 'Advanced SEO & Marketing Tools', included: true },
        { name: 'Custom CMS Development', included: true },
        { name: 'Full E-commerce Solution', included: true },
        { name: '6 Months Free Support', included: true },
        { name: 'Custom API Development', included: true },
        { name: 'Advanced Analytics Dashboard', included: true },
        { name: 'Multi-language Support', included: true },
        { name: 'Dedicated Project Manager', included: true },
        { name: 'Priority Support (24/7)', included: true }
      ],
      deliveryTime: '8-12 weeks',
      revisions: 'Unlimited revisions'
    }
  ];

  const supportPlans = [
    {
      id: 'basic-support',
      name: 'Basic Support',
      icon: HiSupport,
      color: 'green',
      category: 'support',
      description: 'Essential maintenance and updates',
      monthlyPrice: 9999,
      yearlyPrice: 99999,
      features: [
        { name: 'Monthly Website Backups', included: true },
        { name: 'Security Updates', included: true },
        { name: 'Content Updates (up to 5 hours/month)', included: true },
        { name: 'Bug Fixes', included: true },
        { name: 'Email Support (48-hour response)', included: true },
        { name: 'Performance Monitoring', included: false },
        { name: 'Priority Support', included: false },
        { name: 'New Feature Development', included: false }
      ]
    },
    {
      id: 'premium-support',
      name: 'Premium Support',
      icon: HiShieldCheck,
      color: 'orange',
      category: 'support',
      description: 'Comprehensive care for your digital assets',
      monthlyPrice: 24999,
      yearlyPrice: 249999,
      popular: true,
      features: [
        { name: 'Weekly Website Backups', included: true },
        { name: 'Security Updates & Monitoring', included: true },
        { name: 'Content Updates (up to 15 hours/month)', included: true },
        { name: 'Bug Fixes & Improvements', included: true },
        { name: 'Priority Email Support (24-hour response)', included: true },
        { name: 'Performance Monitoring & Optimization', included: true },
        { name: 'Monthly Performance Reports', included: true },
        { name: 'Minor Feature Updates', included: true }
      ]
    },
    {
      id: 'enterprise-support',
      name: 'Enterprise Support',
      icon: HiTrendingUp,
      color: 'red',
      category: 'support',
      description: 'White-glove service with dedicated support',
      monthlyPrice: 49999,
      yearlyPrice: 499999,
      features: [
        { name: 'Daily Website Backups', included: true },
        { name: 'Advanced Security & Monitoring', included: true },
        { name: 'Unlimited Content Updates', included: true },
        { name: 'Priority Bug Fixes & Improvements', included: true },
        { name: '24/7 Priority Support', included: true },
        { name: 'Performance Optimization', included: true },
        { name: 'Weekly Performance Reports', included: true },
        { name: 'New Feature Development (up to 20 hours/month)', included: true },
        { name: 'Dedicated Account Manager', included: true }
      ]
    }
  ];

  const addOns = [
    {
      name: 'Logo Design',
      price: 14999,
      icon: HiCode,
      description: 'Professional logo with 3 concepts and unlimited revisions'
    },
    {
      name: 'Brand Identity Package',
      price: 34999,
      icon: HiStar,
      description: 'Complete branding including logo, colors, typography, and guidelines'
    },
    {
      name: 'UI/UX Design',
      price: 24999,
      icon: HiCube,
      description: 'Custom interface design with user experience optimization'
    },
    {
      name: 'Mobile App Development',
      price: 149999,
      icon: HiDeviceMobile,
      description: 'Native iOS and Android app or cross-platform solution'
    },
    {
      name: 'SEO Optimization',
      price: 19999,
      icon: HiChartBar,
      description: 'Comprehensive SEO audit and 3-month optimization campaign'
    },
    {
      name: 'Content Writing',
      price: 9999,
      icon: HiCode,
      description: 'Professional copywriting for up to 10 pages'
    },
    {
      name: 'Social Media Setup',
      price: 14999,
      icon: HiLightningBolt,
      description: 'Complete social media profiles setup and integration'
    },
    {
      name: 'Training Session',
      price: 7999,
      icon: HiSupport,
      description: '2-hour training on managing your website/application'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-600 to-blue-400',
      primary: 'from-primary-600 to-secondary-400',
      purple: 'from-purple-600 to-purple-400',
      green: 'from-green-600 to-green-400',
      orange: 'from-orange-600 to-orange-400',
      red: 'from-red-600 to-red-400'
    };
    return colors[color] || colors.primary;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const filteredDevelopmentPlans = selectedCategory === 'all' || selectedCategory === 'development'
    ? pricingPlans
    : [];

  const filteredSupportPlans = selectedCategory === 'all' || selectedCategory === 'support'
    ? supportPlans
    : [];

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center animate-float">
                <HiChartBar className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our commitment to quality, security, and exceptional support.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center space-x-4 bg-dark-800/50 rounded-full p-2 border border-dark-700">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-dark-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-primary text-white'
                    : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Development Packages */}
      {filteredDevelopmentPlans.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Development Packages
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Complete solutions from concept to deployment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => {
                const Icon = plan.icon;
                const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                const colorClasses = getColorClasses(plan.color);

                return (
                  <div
                    key={plan.id}
                    className={`relative bg-dark-800 rounded-2xl border ${
                      plan.popular
                        ? 'border-primary-600 shadow-2xl shadow-primary-600/20 scale-105'
                        : 'border-dark-700'
                    } transition-all duration-300 hover:border-primary-600/50`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-white">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses} rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Plan Name */}
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-6">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-white">{formatPrice(price)}</span>
                          <span className="text-gray-400 ml-2">
                            / {billingCycle === 'monthly' ? 'project' : 'year'}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <p className="text-sm text-green-400 mt-2">
                            Save {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)} per year
                          </p>
                        )}
                      </div>

                      {/* Delivery Info */}
                      <div className="mb-6 p-4 bg-dark-900/50 rounded-lg border border-dark-700">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-400">Delivery Time:</span>
                          <span className="text-white font-medium">{plan.deliveryTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Revisions:</span>
                          <span className="text-white font-medium">{plan.revisions}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.included ? (
                              <HiCheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                            ) : (
                              <HiX className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Link
                        to="/get-started"
                        className={`btn-block text-center ${
                          plan.popular ? 'btn-primary' : 'btn-secondary'
                        }`}
                      >
                        Get Started
                        <HiArrowRight className="w-5 h-5 ml-2 inline" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Support & Maintenance Plans */}
      {filteredSupportPlans.length > 0 && (
        <section className="py-16 bg-dark-800/30 border-y border-dark-800">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support & Maintenance Plans
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Keep your digital assets secure, updated, and performing at their best
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {supportPlans.map((plan, index) => {
                const Icon = plan.icon;
                const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                const colorClasses = getColorClasses(plan.color);

                return (
                  <div
                    key={plan.id}
                    className={`bg-dark-800 rounded-2xl border ${
                      plan.popular ? 'border-primary-600 shadow-lg' : 'border-dark-700'
                    } transition-all duration-300 hover:border-primary-600/50`}
                  >
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses} rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-6">{plan.description}</p>

                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-white">{formatPrice(price)}</span>
                          <span className="text-gray-400 ml-2">
                            / {billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.included ? (
                              <HiCheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                            ) : (
                              <HiX className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="btn-block text-center btn-secondary"
                      >
                        Subscribe Now
                        <HiArrowRight className="w-5 h-5 ml-2 inline" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Add-ons Section */}
      {selectedCategory === 'all' && (
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Add-on Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Enhance your package with additional services tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {addOns.map((addon, index) => {
                const Icon = addon.icon;

                return (
                  <div
                    key={index}
                    className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <span className="text-primary-400 font-bold text-lg">
                        {formatPrice(addon.price)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                    <p className="text-sm text-gray-400">{addon.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="py-16 bg-dark-800/30 border-y border-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compare Plans
            </h2>
            <p className="text-gray-400">
              See what's included in each development package
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Features</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 px-4">
                      <div className="text-white font-semibold">{plan.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingPlans[0].features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-dark-800">
                    <td className="py-4 px-4 text-gray-300">{feature.name}</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.features[idx].included ? (
                          <HiCheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                        ) : (
                          <HiX className="w-6 h-6 text-gray-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I switch plans later?',
                  answer: 'Yes! You can upgrade or downgrade your plan at any time. For development packages, you can add features mid-project. For support plans, changes take effect from the next billing cycle.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept bank transfers, UPI, credit/debit cards, and international payment methods like PayPal. For enterprise clients, we offer flexible payment terms.'
                },
                {
                  question: 'Is there a setup fee?',
                  answer: 'No setup fees! The prices shown include everything needed to get your project started and delivered.'
                },
                {
                  question: 'What if I need custom requirements?',
                  answer: 'We offer fully customized solutions! Use our "Get Started" form to describe your needs, and we\'ll provide a tailored quote within 24 hours.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'We offer refunds on a case-by-case basis. If you\'re not satisfied with our work during the first milestone, we\'ll work to make it right or provide a refund for the remaining work.'
                },
                {
                  question: 'What technologies do you use?',
                  answer: 'We use modern, industry-standard technologies including React, Node.js, Python, React Native, Flutter, and more. We choose the best tech stack for your specific needs.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-700"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto animate-float">
                <HiCog className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs and budget.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="btn-primary">
                Get Custom Quote
              </Link>
              <Link to="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>

            <p className="text-gray-500 mt-8 text-sm">
              💬 Have questions? Contact us at{' '}
              <a href="mailto:Info@limitlessinfotech.com" className="text-primary-400 hover:underline">
                Info@limitlessinfotech.com
              </a>
              {' '}or call{' '}
              <a href="tel:+917710909492" className="text-primary-400 hover:underline">
                +91 77109 09492
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-dark-800/30 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
