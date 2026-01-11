import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  X, 
  Zap, 
  Box, 
  Star, 
  ShieldCheck, 
  TrendingUp, 
  Code2, 
  Smartphone, 
  BarChart3, 
  Settings, 
  Headphones, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  Gem,
  Rocket,
  Crown
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Architecture' },
    { id: 'support', name: 'Continuity' },
    { id: 'consulting', name: 'Specialized' },
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Launch Core',
      icon: Rocket,
      color: 'blue',
      category: 'development',
      description: 'Ideal for startups seeking a high-integrity foundational presence.',
      monthlyPrice: 49999,
      yearlyPrice: 499999,
      popular: false,
      features: [
        { name: 'Architecture Discovery (1 session)', included: true },
        { name: 'Foundational Site (5-7 segments)', included: true },
        { name: 'High-Performance Responsive Engine', included: true },
        { name: 'Core SEO Infrastructure', included: true },
        { name: 'Secure Engagement Channels', included: true },
        { name: '30-Day Stability Support', included: true },
        { name: 'Advanced Headless CMS', included: false },
        { name: 'Global Commerce Foundation', included: false },
        { name: 'Custom Core API', included: false },
      ],
      deliveryTime: '15-20 Days',
      revisions: '3 Milestone Iterations',
    },
    {
      id: 'professional',
      name: 'Strategic Scale',
      icon: Gem,
      color: 'primary',
      category: 'development',
      description: 'Engineered for scaling enterprises requiring deep integration.',
      monthlyPrice: 99999,
      yearlyPrice: 999999,
      popular: true,
      features: [
        { name: 'Full Enterprise Ecosystem', included: true },
        { name: 'Advanced Adaptive UI/UX', included: true },
        { name: 'Strategic SEO & Performance Audit', included: true },
        { name: 'Integrated Content Management', included: true },
        { name: 'Automated Sales Workflows', included: true },
        { name: '90-Day Post-Launch Support', included: true },
        { name: 'Commerce & Payment Core', included: true },
        { name: 'Custom API Interfacing', included: true },
        { name: 'Analytics Intelligence Hub', included: false },
      ],
      deliveryTime: '30-45 Days',
      revisions: '5 Milestone Iterations',
    },
    {
      id: 'enterprise',
      name: 'Limitless Vision',
      icon: Crown,
      color: 'purple',
      category: 'development',
      description: 'Bespoke architectural solutions for global-scale organizations.',
      monthlyPrice: 199999,
      yearlyPrice: 1999999,
      popular: false,
      features: [
        { name: 'Proprietary System Architecture', included: true },
        { name: 'Multi-platform Ecosystem (Web/App)', included: true },
        { name: 'AI-Powered Business Intelligence', included: true },
        { name: 'High-Scale Global Infrastructure', included: true },
        { name: 'Custom Security & Encryption', included: true },
        { name: 'Unlimited Architectural Revisions', included: true },
        { name: '24/7 Dedicated Priority Support', included: true },
        { name: 'Dedicated Project Architect', included: true },
        { name: 'Global Multi-Region Compliance', included: true },
      ],
      deliveryTime: '60-90 Days',
      revisions: 'Infinite Iteration',
    },
  ];

  const supportPlans = [
    {
      id: 'basic-support',
      name: 'Essential Continuity',
      icon: Headphones,
      color: 'green',
      category: 'support',
      description: 'Mission-critical maintenance for your digital assets.',
      monthlyPrice: 9999,
      yearlyPrice: 99999,
      features: [
        { name: 'Secure Off-site Backups', included: true },
        { name: 'Continuous Security Patching', included: true },
        { name: 'Optimization Updates (5h/mo)', included: true },
        { name: 'Priority Issue Resolution', included: true },
        { name: 'Digital Identity Monitoring', included: true },
      ],
    },
    {
      id: 'premium-support',
      name: 'Architectural Guard',
      icon: ShieldCheck,
      color: 'orange',
      category: 'support',
      description: 'Comprehensive evolution and performance management.',
      monthlyPrice: 24999,
      yearlyPrice: 249999,
      popular: true,
      features: [
        { name: 'Weekly System Synchronization', included: true },
        { name: 'Proactive Threat Intelligence', included: true },
        { name: 'Growth Support (15h/mo)', included: true },
        { name: 'Performance Acceleration', included: true },
        { name: 'Quarterly Strategy Review', included: true },
        { name: 'Predictive Load Management', included: true },
      ],
    },
    {
      id: 'enterprise-support',
      name: 'Unrestricted Ops',
      icon: TrendingUp,
      color: 'red',
      category: 'support',
      description: 'Virtual CTO services with dedicated rapid-response teams.',
      monthlyPrice: 49999,
      yearlyPrice: 499999,
      features: [
        { name: 'Daily High-Frequency Backups', included: true },
        { name: 'Dedicated Support Infrastructure', included: true },
        { name: 'Unlimited Adaptive Updates', included: true },
        { name: 'Real-time Crisis Response', included: true },
        { name: 'White-Glove Success Manager', included: true },
        { name: 'Bi-Weekly Innovation Labs', included: true },
      ],
    },
  ];

  const formatPrice = price => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen">
        <Helmet>
          <title>Pricing Strategy - Limitless Infotech</title>
          <meta name="description" content="Transparent architectural pricing and continuity plans for high-growth enterprises." />
        </Helmet>

        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">Predictable Architecture</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Strategic <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent italic">Value</span> Models
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Transparent investment structures engineered for long-term digital stability and architectural growth.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-8">
              <div className="relative inline-flex p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`relative z-10 px-8 py-3 text-sm font-bold transition-all duration-500 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}
                >
                  Monthly Focus
                </button>
                <button 
                  onClick={() => setBillingCycle('yearly')}
                  className={`relative z-10 px-8 py-3 text-sm font-bold transition-all duration-500 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}
                >
                  Annual Commitment
                  <span className="absolute -top-4 -right-2 px-2 py-0.5 rounded-full bg-primary-500 text-[10px] text-white font-black tracking-widest shadow-lg shadow-primary-500/30">
                    SAVE 17%
                  </span>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ x: billingCycle === 'monthly' ? 0 : '100%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] bg-primary-600 rounded-xl shadow-lg border border-primary-400/50"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Category Filter Snippet (Simplified) */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold border transition-all ${
                  selectedCategory === cat.id 
                  ? 'bg-white text-dark-900 border-white' 
                  : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Development Plans Grid */}
        <AnimatePresence mode="wait">
          {(selectedCategory === 'all' || selectedCategory === 'development') && (
            <motion.section 
              key="dev-plans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="px-6 mb-32"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <PlanCard 
                    key={plan.id} 
                    plan={plan} 
                    billingCycle={billingCycle} 
                    formatPrice={formatPrice}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.section>
          )}

          {/* Support Plans Grid */}
          {(selectedCategory === 'all' || selectedCategory === 'support') && (
            <motion.section 
              key="support-plans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="px-6 mb-32"
            >
               <div className="max-w-7xl mx-auto mb-16 text-center">
                 <h2 className="text-3xl font-bold mb-4">Continuity Plans</h2>
                 <p className="text-gray-500">Post-launch management and architectural evolution.</p>
               </div>
               <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {supportPlans.map((plan, index) => (
                  <PlanCard 
                    key={plan.id} 
                    plan={plan} 
                    billingCycle={billingCycle} 
                    formatPrice={formatPrice}
                    delay={index * 0.1}
                    isSupport
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Strategic Comparison */}
        <section className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 italic">Comparison Matrix</h2>
              <p className="text-gray-500">Granular breakdown of architectural deliverables.</p>
            </div>
            
            <div className="rounded-3xl border border-white/10 overflow-hidden backdrop-blur-xl bg-dark-900/50">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-8 text-xs uppercase tracking-widest text-gray-500 font-black">Capabilities</th>
                    {pricingPlans.map(p => (
                      <th key={p.id} className="p-8 text-center text-sm font-bold text-white">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans[0].features.map((f, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-8 text-sm text-gray-400">{f.name}</td>
                      {pricingPlans.map(p => (
                        <td key={p.id} className="p-8 text-center">
                          {p.features[i]?.included ? (
                            <CheckCircle2 className="w-5 h-5 text-primary-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-800 mx-auto" />
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
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 text-balance">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Clarifications & <span className="text-primary-400">Policies</span></h2>
              <p className="text-gray-500">Addressing architectural engagement concerns.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  q: "Can engagement models be evolved post-initiation?", 
                  a: "Absolutely. Our architecture is designed for modularity; capabilities can be scaled or pivoted as your strategic roadmap evolves." 
                },
                { 
                  q: "How is data integrity managed across billing cycles?", 
                  a: "We maintain a rigid separation of operational and billing layers, ensuring that architectural stability is never compromised by administrative transitions." 
                },
                { 
                  q: "Are bespoke enterprise models restricted to 'Limitless' tiers?", 
                  a: "While the Limitless tier is designed for maximal complexity, we offer modular 'Architectural Sprints' for smaller entities with specific high-impact needs." 
                }
              ].map((faq, i) => (
                <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/5 group hover:border-primary-500/30 transition-all duration-500">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">{faq.q}</h4>
                      <p className="text-gray-400 leading-relaxed font-light">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-32 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-16 md:p-24 rounded-[64px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
          >
            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">Initiate <span className="italic">Transformation</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Connect with our architectural strategists to determine the optimal investment model for your digital future.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/get-started" className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all flex items-center gap-2 group shadow-2xl shadow-primary-500/20">
                  Begin Engagement
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 backdrop-blur-xl transition-all">
                  Direct Consultation
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

// Extracted Plan Card Component for consistent reuse
const PlanCard = ({ plan, billingCycle, formatPrice, delay, isSupport = false }) => {
  const Icon = plan.icon;
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group h-full transition-all duration-700 ${plan.popular ? 'scale-105 z-10' : 'hover:scale-[1.02]'}`}
    >
      <div className={`h-full p-10 rounded-4xl bg-white/5 border ${plan.popular ? 'border-primary-500/50 shadow-2xl shadow-primary-500/20' : 'border-white/10'} backdrop-blur-2xl flex flex-col items-start overflow-hidden`}>
        {plan.popular && (
          <div className="absolute top-0 right-0 px-6 py-2 bg-primary-500 text-white text-[10px] font-black tracking-widest uppercase rounded-bl-3xl">
            Prime Recommendation
          </div>
        )}

        <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${plan.popular ? 'bg-primary-500' : 'bg-white/10'}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">{plan.description}</p>

        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black text-white tracking-tighter">{formatPrice(price)}</span>
            <span className="text-gray-600 font-bold uppercase text-[10px] tracking-widest">/ {isSupport ? (billingCycle === 'monthly' ? 'Month' : 'Year') : (billingCycle === 'monthly' ? 'Core' : 'Year')}</span>
          </div>
        </div>

        <div className="w-full space-y-4 mb-10">
          {plan.features.map((feature, i) => (
            <div key={i} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-gray-300' : 'text-gray-700'}`}>
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.included ? (plan.popular ? 'text-primary-400' : 'text-gray-400') : 'text-gray-800'}`} />
              <span className="font-medium underline-offset-4 decoration-white/10">{feature.name}</span>
            </div>
          ))}
        </div>

        <Link 
          to="/get-started" 
          className={`mt-auto w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all text-center ${
            plan.popular 
            ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/20 hover:bg-primary-500 hover:scale-[0.98]' 
            : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
          }`}
        >
          Initialize Plan
        </Link>

        {/* Decorative corner accent */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default Pricing;
