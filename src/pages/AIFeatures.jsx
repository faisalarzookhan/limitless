import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  BarChart3,
  Users,
  Clock,
  GraduationCap,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Code2,
  Database,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Workflow
} from 'lucide-react';
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const AIFeatures = memo(() => {
  const [activeProduct, setActiveProduct] = useState('hr-ims');
  const [activeFeature, setActiveFeature] = useState('predictive-analytics');

  const products = [
    {
      id: 'hr-ims',
      name: 'Alliance Core',
      description: 'Human Capital Architecture',
    },
    {
      id: 'trackit',
      name: 'OmniTrack',
      description: 'Systemic Operational Oversight',
    },
  ];

  const features = [
    {
      id: 'predictive-analytics',
      name: 'Predictive Pulse',
      icon: BarChart3,
    },
    {
      id: 'automated-insights',
      name: 'Neural Insights',
      icon: Zap,
    },
    { 
      id: 'ai-recommendations', 
      name: 'Strategic Advisory', 
      icon: Sparkles 
    },
    { 
      id: 'smart-automation', 
      name: 'Adaptive Flux', 
      icon: Workflow 
    },
  ];

  const aiCapabilities = [
    {
      title: 'Structural Intelligence',
      description:
        'Advanced architecture for multi-layered neural processing.',
      benefits: [
        '98.4% model confidence',
        'Auto-evolving learning paths',
        'Parametric optimization',
      ],
      icon: Cpu,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Cognitive Processing',
      description: 'Large-scale intent analysis and pattern recognition.',
      benefits: [
        'Poly-linguistic synthesis',
        'Sentiment vectoring',
        'Entity relationship mapping',
      ],
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-400',
    },
    {
      title: 'Autonomous Flux',
      description: 'Self-correcting decision cycles for zero-latency operations.',
      benefits: [
        'Zero-trust verification',
        'Millisecond convergence',
        'Evolving decision trees',
      ],
      icon: Zap,
      color: 'from-green-500 to-emerald-400',
    },
    {
      title: 'Anomaly Synthesis',
      description: 'Identifying delta-shifts across massive datasets.',
      benefits: [
        'Pre-emptive threat identification',
        'Pattern-shift isolation',
        'Dynamic thresholding',
      ],
      icon: ShieldCheck,
      color: 'from-amber-400 to-orange-500',
    },
  ];

  const useCases = [
    {
      title: 'Talent Dynamics: Risk Mitigation',
      description:
        'Architecting retention strategies by predicting human capital shifts before they manifest.',
      metrics: [
        { label: 'Risk Accuracy', value: '94%' },
        { label: 'Ops Efficiency', value: '+28%' },
        { label: 'Retention Lift', value: '+15%' },
      ],
      icon: Users,
    },
    {
      title: 'Operational Flow: Outcome Projection',
      description:
        'Projecting system stability and delivery timelines with architectural-grade precision.',
      metrics: [
        { label: 'Forecast Delta', value: '<2%' },
        { label: 'Throughput', value: '+34%' },
        { label: 'Reliability', value: '99.9%' },
      ],
      icon: Clock,
    },
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden">
        {/* Ambient Gradients */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-500/10 blur-[150px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Neural Infrastructure</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                AI <span className="italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Integrated</span>
                <br />
                Architecture
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                Deployment of advanced neural models within our core ecosystems. Experience the shift from reactive tools to proactive architectural intelligence.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
                  Initiate Sync
                </button>
                <button className="px-10 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
                  Architecture Overview <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature Interface */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-1 px-1 rounded-[64px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 overflow-hidden shadow-3xl"
            >
              <div className="bg-[#0e1114]/80 backdrop-blur-3xl rounded-[62px] p-8 md:p-16">
                <div className="flex flex-col lg:flex-row gap-16">
                  {/* Controls */}
                  <div className="lg:w-1/3 space-y-12">
                    <div>
                      <h2 className="text-sm font-black text-primary-400 uppercase tracking-[0.3em] mb-8">System Selector</h2>
                      <div className="flex flex-col gap-3">
                        {products.map(product => (
                          <button
                            key={product.id}
                            onClick={() => setActiveProduct(product.id)}
                            className={`p-6 rounded-[32px] text-left transition-all relative overflow-hidden group ${
                              activeProduct === product.id 
                              ? 'bg-primary-500 text-white shadow-2xl shadow-primary-500/20' 
                              : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
                            }`}
                          >
                            <div className="relative z-10">
                              <h3 className="font-black text-xl mb-1">{product.name}</h3>
                              <p className={`text-xs font-bold uppercase tracking-wider ${activeProduct === product.id ? 'text-white/70' : 'text-gray-500'}`}>{product.description}</p>
                            </div>
                            {activeProduct === product.id && (
                              <motion.div 
                                layoutId="glow"
                                className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-transparent pointer-events-none"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-sm font-black text-primary-400 uppercase tracking-[0.3em] mb-8">Module Matrix</h2>
                      <div className="grid grid-cols-1 gap-4">
                        {features.map(feature => (
                          <button
                            key={feature.id}
                            onClick={() => setActiveFeature(feature.id)}
                            className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${
                              activeFeature === feature.id 
                              ? 'bg-white/10 text-white border border-white/20' 
                              : 'text-gray-500 hover:text-gray-300'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                              activeFeature === feature.id ? 'bg-primary-500 text-white' : 'bg-white/5'
                            }`}>
                              <feature.icon className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-sm tracking-wide">{feature.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visualization */}
                  <div className="lg:w-2/3">
                    <div className="h-full rounded-[48px] bg-dark-900/50 border border-white/5 p-8 relative overflow-hidden flex flex-col">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-2xl font-black text-white">{features.find(f => f.id === activeFeature)?.name}</h3>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Real-time Neural Simulation</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] font-black text-green-500 uppercase">System Nominal</span>
                        </div>
                      </div>

                      <div className="flex-1 min-h-[400px]">
                        <PredictiveAnalyticsDashboard productType={activeProduct} />
                      </div>
                      
                      {/* Decorative Grid Overlay */}
                      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Core <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent italic">Flux</span></h2>
                <p className="text-xl text-gray-400">Our structural capabilities are designed for high-velocity, high-trust environments.</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
                <span className="text-primary-400">01</span> — Integrated Intelligence
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-10 rounded-[48px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500"
                >
                  <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${capability.color} p-4 flex items-center justify-center shadow-lg mb-8 shadow-primary-500/10`}>
                    <capability.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">{capability.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{capability.description}</p>
                  
                  <ul className="space-y-4">
                    {capability.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs font-bold text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400 flex items-center gap-2">
                       Documentation <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-world Impact (Use Cases) */}
        <section className="py-32 px-6 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 italic">Impact <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent not-italic">Synthesis</span></h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">Tangible metrics from live architectural deployments.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-12 md:p-16 rounded-[64px] bg-white/5 border border-white/10 relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="flex items-start gap-8 mb-12">
                      <div className="w-20 h-20 rounded-[32px] bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-10 h-10 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white mb-3">{useCase.title}</h3>
                        <p className="text-gray-400 leading-relaxed font-medium">{useCase.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-12">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-6 rounded-[32px] bg-white/5 border border-white/5">
                          <div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-primary-400 transition-colors uppercase tracking-tighter">{metric.value}</div>
                          <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="p-8 rounded-[32px] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/10 backdrop-blur-md">
                      <h4 className="text-xs font-black text-primary-400 uppercase tracking-widest mb-2">Architectural Outcome</h4>
                      <p className="text-gray-300 text-sm font-medium italic">
                        "{useCase.title.includes('Talent') 
                          ? 'Mitigated projected capital loss by 18% through pre-emptive reallocation.' 
                          : 'Accelerated core throughput by 34% while reducing error-delta to near zero.'}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                    <useCase.icon className="w-64 h-64" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Pulse */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-xs font-black text-primary-400 uppercase tracking-[0.5em]">The Stack</span>
            </div>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
               {['TensorFlow', 'PyTorch', 'NVIDIA', 'OpenAI', 'Azure ML', 'AWS', 'Python', 'Keras'].map(tech => (
                 <span key={tech} className="text-2xl font-black text-white hover:text-primary-400 transition-colors cursor-default">{tech}</span>
               ))}
            </div>
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto p-16 md:p-24 rounded-[72px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden"
          >
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic">Shift your <span className="not-italic bg-gradient-to-r from-primary-200 to-white bg-clip-text text-transparent">Paradigm</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Connect your existing ecosystem to our neural infrastructure for immediate architectural lift.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.2em] shadow-2xl shadow-white/10">
                  Begin Sync
                </button>
                <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm">
                  Consult Architect
                </button>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 animate-pulse" />
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
});

export default AIFeatures;
