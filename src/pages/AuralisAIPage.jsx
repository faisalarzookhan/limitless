import MainLayout from '../components/layout/MainLayout';
import Chatbot from '../components/features/chatbot/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Calendar,
  FileText,
  LineChart,
  Lightbulb,
  Users,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Cpu,
  Activity,
  ChevronRight
} from 'lucide-react';
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

const AuralisAIPage = () => {
  const features = [
    {
      title: 'Consultative Synthesis',
      description: 'Auralis processes massive technical datasets to provide strategic architectural guidance.',
      icon: MessageSquare,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10'
    },
    {
      title: 'Scheduling Integration',
      description: 'Autonomous coordination between complex calendars for immediate consultation.',
      icon: Calendar,
      color: 'text-secondary-400',
      bg: 'bg-secondary-500/10'
    },
    {
      title: 'Structural Reporting',
      description: 'Generation of high-fidelity architectural audits and technical specifications.',
      icon: FileText,
      color: 'text-white',
      bg: 'bg-white/10'
    },
    {
      title: 'Pattern Analytics',
      description: 'Identifying systemic shifts and resource optimization paths in real-time.',
      icon: LineChart,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10'
    },
    {
      title: 'Contextual Profiling',
      description: 'Environment-aware adaptation that customizes the interface for your industry.',
      icon: Lightbulb,
      color: 'text-secondary-400',
      bg: 'bg-secondary-500/10'
    },
    {
      title: 'Collaborative Sandbox',
      description: 'Instant deployment of shared temporary environments for multi-user evaluation.',
      icon: Users,
      color: 'text-white',
      bg: 'bg-white/10'
    }
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden">
        {/* Ambient background elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div 
              className="text-center mb-32"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Cpu className="w-4 h-4 text-primary-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Neural Nexus — v2.4</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
                variants={itemVariants}
              >
                Auralis <span className="italic bg-gradient-to-r from-primary-400 via-white to-secondary-400 bg-clip-text text-transparent">AI Architect</span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
                variants={itemVariants}
              >
                An advanced neural assistant trained on the Limitless technical corpus. Initiate deep-dives, schedule consultations, and architect your digital trajectory in real-time.
              </motion.p>

              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                variants={itemVariants}
              >
                <button className="px-10 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all shadow-xl shadow-white/5 flex items-center gap-2 group">
                  Initiate Dialogue
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                  Documentation Archive
                </button>
              </motion.div>
            </motion.div>

            {/* Features Glass Matrix */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group relative p-10 rounded-[48px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/5 backdrop-blur-sm"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                  
                  <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Chat Interface Container */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-[64px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 mb-32 shadow-3xl overflow-hidden"
            >
              <div className="bg-[#0e1114]/80 backdrop-blur-3xl rounded-[62px] p-8 md:p-16 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 p-0.5">
                        <div className="w-full h-full rounded-2xl bg-dark-900 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0e1114] animate-pulse" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-white">Interface Auralis</h2>
                      <p className="text-xs font-black text-primary-400 uppercase tracking-widest mt-1">High-Trust Neural Channel</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-green-500" /> Latency: 24ms</span>
                    <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary-400" /> E2E Encrypted</span>
                  </div>
                </div>

                <div className="relative min-h-[600px] rounded-[40px] bg-dark-900/50 border border-white/5 overflow-hidden">
                  <Chatbot />
                  {/* Decorative Scanline */}
                  <div className="absolute inset-x-0 top-0 h-px bg-primary-400/20 shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-scan" />
                  <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* Process Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-4xl md:text-6xl font-black text-white italic">EvolutionARY <span className="not-italic block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Workflow</span></h2>
                </div>
                
                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Technical Inquiry', desc: 'Auralis deciphers high-complexity queries against our specialized technical knowledge base.' },
                    { step: '02', title: 'Contextual Logic', desc: 'The AI synthesizes your operational environment to provide grounded, applicable intelligence.' },
                    { step: '03', title: 'Trajectory Projection', desc: 'Personalized strategic paths are generated based on resource availability and business goals.' },
                    { step: '04', title: 'Systemic Integration', desc: 'Direct transitions from dialogue to scheduling or sandbox deployment.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-primary-400 text-sm group-hover:bg-primary-500 group-hover:text-white transition-all">
                        {item.step}
                      </div>
                      <div className="pt-2">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-16 rounded-[64px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 relative overflow-hidden flex flex-col justify-center items-center text-center"
              >
                <div className="relative z-10 space-y-8">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Strategic Benefits</h3>
                  <div className="space-y-4 max-w-sm mx-auto">
                    {[
                      '24/7 Architectural Oversight',
                      'High-Fidelity Knowledge Access',
                      'Instant Sandbox Environment Generation',
                      'Deterministic Resource Planning'
                    ].map(benefit => (
                      <div key={benefit} className="flex items-center gap-3 text-left text-sm font-bold text-gray-300">
                        <ShieldCheck className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual accents */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-500/20 blur-[100px] rounded-full" />
              </motion.div>
            </div>

            {/* Global CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-16 md:p-24 rounded-[72px] bg-gradient-to-br from-dark-950 to-dark-900 border border-white/10 text-center relative overflow-hidden"
            >
              <div className="relative z-10 space-y-12">
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic">Experience <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Unrestricted</span> Support</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.2em] shadow-2xl shadow-white/10">
                    Launch Auralis
                  </button>
                  <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-2 group">
                    View Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
            </motion.div>

          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AuralisAIPage;