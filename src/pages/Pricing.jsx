import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import SEO from '../components/SEO/SEO';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Strategic Nodes' },
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
      description: 'Ideal for high-integrity foundational nodes requiring structural stability.',
      monthlyPrice: 499,
      yearlyPrice: 4999,
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
      description: 'Engineered for scaling enterprises requiring deep architectural integration.',
      monthlyPrice: 999,
      yearlyPrice: 9999,
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
      description: 'Bespoke architectural solutions for global-scale mission-critical organizations.',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
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
      description: 'Mission-critical maintenance nodes for your permanent digital assets.',
      monthlyPrice: 99,
      yearlyPrice: 999,
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
      description: 'Comprehensive evolution and performance management for scaling nodes.',
      monthlyPrice: 249,
      yearlyPrice: 2499,
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
      description: 'Virtual CTO services with dedicated rapid-response architectural teams.',
      monthlyPrice: 499,
      yearlyPrice: 4999,
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
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
      <div className="relative min-h-screen bg-[#0e1114] pb-32">
        <SEO
          title="Investment Models - Strategic Pricing"
          description="Deterministic pricing nodes for startups and enterprises. Choose your engagement scale from Project-Core to Architectural-Alliance."
        />

        {/* High-Fidelity Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Strategic Allocation</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-12">
              Investment <br /> <span className="text-primary-400 not-italic">Models.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-500 font-medium italic max-w-3xl mx-auto leading-relaxed mb-20">
              Deterministic pricing matrices engineered for high-fidelity digital stability and long-term architectural evolution.
            </motion.p>

            {/* Billing Toggle Hub */}
            <motion.div variants={itemVariants} className="flex items-center justify-center mb-10">
              <div className="relative inline-flex p-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem]">
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`relative z-10 px-10 py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${billingCycle === 'monthly' ? 'text-dark-900' : 'text-gray-500 hover:text-white'}`}
                >
                  Monthly Node
                </button>
                <button 
                  onClick={() => setBillingCycle('yearly')}
                  className={`relative z-10 px-10 py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${billingCycle === 'yearly' ? 'text-dark-900' : 'text-gray-500 hover:text-white'}`}
                >
                  Annual Commitment
                  <span className="absolute -top-4 -right-2 px-2 py-0.5 rounded-full bg-primary-500 text-[8px] text-white font-black tracking-widest">
                    SYNC -17%
                  </span>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ x: billingCycle === 'monthly' ? 0 : '100%' }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-y-2 left-2 w-[calc(50%-8px)] bg-white rounded-[1.5rem] shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Global Protocol Filter */}
        <div className="max-w-7xl mx-auto px-6 mb-32 relative z-20">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                  selectedCategory === cat.id 
                  ? 'bg-white text-dark-900 border-white shadow-2xl' 
                  : 'bg-white/5 text-gray-500 border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grids */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {(selectedCategory === 'all' || selectedCategory === 'development') && (
              <motion.section 
                key="dev-plans"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="px-6 mb-40"
              >
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {pricingPlans.map((plan, index) => (
                    <PlanCard 
                      key={plan.id} 
                      plan={plan} 
                      billingCycle={billingCycle} 
                      formatPrice={formatPrice}
                      delay={index * 0.15}
                    />
                  ))}
                </div>
              </motion.section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'support') && (
              <motion.section 
                key="support-plans"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="px-6 mb-40"
              >
                 <div className="max-w-7xl mx-auto mb-20 text-center">
                   <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">Continuity <span className="text-secondary-400">Protocols.</span></h2>
                   <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Post-launch node management and architectural evolution.</p>
                 </div>
                 <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {supportPlans.map((plan, index) => (
                    <PlanCard 
                      key={plan.id} 
                      plan={plan} 
                      billingCycle={billingCycle} 
                      formatPrice={formatPrice}
                      delay={index * 0.15}
                      isSupport
                    />
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Structural Comparison Matrix */}
        <section className="py-40 px-6 bg-white/[0.01] relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-6">Structural <span className="text-primary-400">Integrity.</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Granular breakdown of architectural deliverables across vectors.</p>
            </div>
            
            <div className="glass-panel mask-facet border-white/5 overflow-hidden bg-dark-900/60 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-10 text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black">Capabilities Protocol</th>
                    {pricingPlans.map(p => (
                      <th key={p.id} className="p-10 text-center text-xs font-black text-white uppercase tracking-widest italic">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {pricingPlans[0].features.map((f, i) => (
                    <tr key={i} className="hover:bg-white/[0.03] transition-colors group">
                      <td className="p-10 text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{f.name}</td>
                      {pricingPlans.map(p => (
                        <td key={p.id} className="p-10 text-center">
                          {p.features[i]?.included ? (
                            <CheckCircle2 className="w-5 h-5 text-primary-400 mx-auto group-hover:scale-110 transition-transform" />
                          ) : (
                            <X className="w-5 h-5 text-gray-900 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" />
        </section>

        {/* Clarifications & Policies Hub */}
        <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">Clarifications & <span className="text-secondary-400">Policies.</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Addressing mission-critical engagement parameters.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {[
                { 
                  q: "Protocol Evolution Post-Handshake?", 
                  a: "Engagement models are inherently modular. Architectural nodes can be scaled or pivoted dynamically as your sovereign roadmap evolves through different growth phases." 
                },
                { 
                  q: "Data Integrity & Continuity Cycles?", 
                  a: "Limitless maintains a rigid separation between operational and fiscal layers. Digital stability is preserved through deterministic handovers and regional compliance nodes." 
                },
                { 
                  q: "Bespoke Sprint Allocations?", 
                  a: "While our primary tiers address standard scale, we offer 'Architectural Sprints' for high-impact targeted transformations requiring rapid deployment and focused engineering." 
                }
              ].map((faq, i) => (
                <div key={i} className="p-12 glass-panel mask-facet border-white/5 group hover:border-primary-500/30 transition-all duration-700 bg-white/[0.02]">
                  <div className="flex gap-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-500 transition-all duration-500 shadow-xl group-hover:rotate-12">
                      <HelpCircle className="w-6 h-6 text-primary-400 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-white mb-6 italic uppercase tracking-tight">{faq.q}</h4>
                      <p className="text-[0.65rem] font-bold text-gray-500 group-hover:text-gray-300 leading-relaxed uppercase tracking-widest transition-colors">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Conversion Handoff */}
        <section className="py-40 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto p-20 md:p-32 rounded-[5rem] bg-dark-900 border border-white/10 shadow-[0_0_100px_rgba(27,166,214,0.1)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 space-y-12">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-2">Initiate <br /> <span className="italic text-primary-400">Transformation.</span></h2>
              <p className="text-xl text-gray-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
                Connect with our architectural dispatch managers to determine the optimal strategic model for your digital trajectory and global scale.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <Link to="/get-started" className="px-14 py-6 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl hover:bg-primary-500 hover:text-white transition-all shadow-2xl flex items-center gap-4 group/btn">
                  Initialize Dispatch
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-14 py-6 bg-white/5 text-white font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl border border-white/10 hover:bg-white/10 backdrop-blur-3xl transition-all">
                  Direct Uplink
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

const PlanCard = ({ plan, billingCycle, formatPrice, delay, isSupport = false }) => {
  const Icon = plan.icon;
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group h-full cursor-default ${plan.popular ? 'z-20' : 'z-10'}`}
    >
      <div className={`h-full p-12 glass-panel mask-facet relative flex flex-col items-start overflow-hidden transition-all duration-700 bg-dark-900/60 border ${plan.popular ? 'border-primary-500/50 shadow-[0_0_80px_rgba(27,166,214,0.15)] shadow-primary-500/10' : 'border-white/5 hover:border-white/20'}`}>
        
        {plan.popular && (
          <div className="absolute top-0 right-0 px-8 py-3 bg-primary-500 text-white text-[9px] font-black tracking-[0.4em] uppercase rounded-bl-3xl z-20">
            Core Recommendation
          </div>
        )}

        <div className={`w-16 h-16 rounded-2xl mb-10 flex items-center justify-center transition-all duration-700 shadow-2xl ${plan.popular ? 'bg-white text-primary-500' : 'bg-white/5 text-gray-400 group-hover:bg-white group-hover:text-dark-900 shadow-none hover:shadow-white/10'}`}>
          <Icon size={28} />
        </div>

        <h3 className="text-3xl font-black text-white mb-4 italic uppercase tracking-tighter">{plan.name}</h3>
        <p className="text-gray-500 text-[0.65rem] font-bold uppercase tracking-widest leading-relaxed mb-10 italic">{plan.description}</p>

        <div className="mb-12">
          <div className="flex items-baseline gap-3">
            <span className={`text-6xl font-black tracking-tighter italic ${plan.popular ? 'text-primary-400' : 'text-white'}`}>{formatPrice(price)}</span>
            <span className="text-gray-600 font-black uppercase text-[9px] tracking-[0.3em] flex flex-col">
              <span>/ Node</span>
              <span className="opacity-40">{billingCycle === 'monthly' ? 'Base' : 'Annual'}</span>
            </span>
          </div>
        </div>

        <div className="w-full space-y-6 mb-16 flex-1">
          {plan.features.map((feature, i) => (
            <div key={i} className={`flex items-start gap-4 text-[0.6rem] font-bold uppercase tracking-[0.15em] leading-tight ${feature.included ? 'text-gray-300' : 'text-gray-800'}`}>
              <CheckCircle2 className={`w-4 h-4 mt-[-1px] flex-shrink-0 ${feature.included ? (plan.popular ? 'text-primary-400' : 'text-secondary-400') : 'text-gray-900'}`} />
              <span className="flex-1">{feature.name}</span>
            </div>
          ))}
        </div>

        <Link 
          to="/get-started" 
          className={`mt-auto w-full py-6 rounded-2xl font-black text-[0.7rem] uppercase tracking-[0.4em] transition-all text-center shadow-2xl ${
            plan.popular 
            ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-primary-500/20' 
            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
          }`}
        >
          Begin Sync_
        </Link>

        {/* Dynamic Glow Accent */}
        <div 
            className="absolute -bottom-20 -right-20 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[80px] pointer-events-none"
            style={{ background: plan.popular ? 'radial-gradient(circle, rgba(27, 166, 214, 0.15), transparent 70%)' : 'radial-gradient(circle, rgba(244, 180, 26, 0.1), transparent 70%)' }}
        />
      </div>
    </motion.div>
  );
};

export default Pricing;
