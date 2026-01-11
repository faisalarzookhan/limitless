import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Box,
  Cpu,
  RefreshCw,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Search,
  Settings
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const AuditorToSandboxFlow = () => {
  const [activeNode, setActiveNode] = useState('audit');

  const nodes = {
    audit: {
      title: 'Digital Health Audit',
      icon: Activity,
      color: 'text-primary-400',
      description: 'Diagnosis of systemic inefficiencies and nodal bottlenecks within your current architecture.',
      actions: ['Scan Infrastructure', 'Identify Deviations', 'Generate Report']
    },
    synthesis: {
      title: 'Neural Synthesis',
      icon: RefreshCw,
      color: 'text-secondary-400',
      description: 'Transforming audit raw data into optimized architectural blueprints.',
      actions: ['Optimize Logic', 'Refactor Nodes', 'Security Hardening']
    },
    sandbox: {
      title: 'Implementation Sandbox',
      icon: Box,
      color: 'text-emerald-400',
      description: 'Testing transformed protocols in an isolated, high-fidelity simulation environment.',
      actions: ['Pilot Simulation', 'Stress Testing', 'Final Deployment']
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30">
        {/* Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6 text-center">
           <div className="max-w-7xl mx-auto">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <RefreshCw className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Phase Transition Node — Auditor To Sandbox</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-8 uppercase">
                 Deployment <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Trajectory</span>
              </motion.h1>

              <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-24 italic">
                 Witness the seamless transition from diagnostic audit to high-fidelity implementation. A deterministic path from entropy to architectural perfection.
              </motion.p>

              {/* Interactive Flow Map */}
              <div className="max-w-6xl mx-auto relative mb-32">
                 <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden lg:block" />
                 
                 <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                    {Object.entries(nodes).map(([key, node], idx) => (
                       <motion.div 
                          key={key} 
                          onClick={() => setActiveNode(key)}
                          className={`relative z-10 p-10 rounded-[56px] border backdrop-blur-3xl transition-all duration-500 cursor-pointer w-full lg:w-[30%] ${
                             activeNode === key 
                             ? 'bg-white border-white text-dark-900 shadow-2xl scale-105' 
                             : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
                          }`}
                       >
                          <div className="flex flex-col items-center text-center gap-6">
                             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all ${
                                activeNode === key ? 'bg-dark-900 border-dark-900' : 'bg-white/5 border-white/10'
                             }`}>
                                <node.icon className={`w-8 h-8 ${activeNode === key ? 'text-primary-400' : 'text-gray-600'}`} />
                             </div>
                             <div>
                                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">{node.title}</h3>
                                <div className="text-[8px] font-black uppercase tracking-[0.3em]">Protocol Phase 0{idx + 1}</div>
                             </div>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>

              {/* Active Node Detail */}
              <AnimatePresence mode="wait">
                 <motion.div 
                    key={activeNode}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="max-w-4xl mx-auto p-12 md:p-20 rounded-[72px] bg-white/5 border border-white/10 backdrop-blur-3xl text-left relative overflow-hidden"
                 >
                    <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                       <div className="md:w-1/2 space-y-8">
                          <h2 className={`text-4xl font-black italic tracking-tighter uppercase leading-none ${nodes[activeNode].color}`}>
                             {nodes[activeNode].title}
                          </h2>
                          <p className="text-lg text-gray-400 font-medium leading-relaxed italic">
                             {nodes[activeNode].description}
                          </p>
                          <div className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                             <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Phase Protocol</span>
                          </div>
                       </div>
                       <div className="md:w-1/2 w-full space-y-4">
                          {nodes[activeNode].actions.map((action, i) => (
                             <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 group hover:border-primary-500/30 transition-all">
                                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                   <CheckCircle2 className="w-4 h-4 text-primary-400" />
                                </div>
                                <span className="text-sm font-black text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">{action}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-grid-white/[0.03]" />
                 </motion.div>
              </AnimatePresence>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Trajectory</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team is ready to synchronize your transition. From audit to sandbox to global scale.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Start Trail Entry
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                       Flow Documentation <ArrowRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default AuditorToSandboxFlow;
