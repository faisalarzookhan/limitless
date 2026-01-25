import { useState, useEffect } from 'react';
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
  Settings,
  Loader2
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const AuditorToSandboxFlow = () => {
  const [activeNode, setActiveNode] = useState('audit');
  const [auditData, setAuditData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([
     'Initializing architectural deconstruction...',
     'Synchronizing with diagnostic node...'
  ]);

  useEffect(() => {
     // Load last audit artifact
     const savedAudit = localStorage.getItem('limitless_last_audit');
     if (savedAudit) {
        const parsed = JSON.parse(savedAudit);
        setAuditData(parsed);
        
        // Auto-progression logic
        const timeline = [
           { node: 'audit', p: 33, log: `Analyzing structural deltas for ${parsed.url}...` },
           { node: 'synthesis', p: 66, log: 'Synthesizing neural blueprints from diagnostic variables...' },
           { node: 'sandbox', p: 100, log: 'Orchestrating sandbox environment on Port 8080...' }
        ];

        timeline.forEach((step, idx) => {
           setTimeout(() => {
              setActiveNode(step.node);
              setProgress(step.p);
              setTerminalLogs(prev => [...prev, step.log, `Phase 0${idx + 1} Committed successfully.`]);
           }, (idx + 1) * 3000);
        });
     }
  }, []);

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

              <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
                 {auditData ? `Witness the seamless transition from diagnostic audit of ${auditData.url} to high-fidelity implementation.` : 'Witness the seamless transition from diagnostic audit to high-fidelity implementation.'}
              </motion.p>
              
              {/* Progress Bar Container */}
              <div className="max-w-4xl mx-auto mb-24 space-y-4">
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
                    <span className="text-primary-400">Structural Lift Progress</span>
                    <span className="text-white">{progress}%</span>
                 </div>
                 <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${progress}%` }}
                       className="h-full bg-gradient-to-r from-primary-500 via-[#1ba6d6] to-secondary-500 shadow-[0_0_20px_rgba(27,166,214,0.5)]"
                    />
                 </div>
              </div>

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
                             : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10 shadow-lg shadow-black/20'
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

              {/* Active Node Detail + Terminal Flow */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
                 <AnimatePresence mode="wait">
                    <motion.div 
                       key={activeNode}
                       initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                       className="lg:col-span-8 p-12 md:p-16 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-3xl text-left relative overflow-hidden"
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

                 {/* Terminal Readout */}
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-4 p-10 rounded-[48px] bg-black/40 border border-white/5 backdrop-blur-3xl text-left font-mono relative overflow-hidden h-[450px] lg:h-auto"
                 >
                    <div className="flex items-center justify-between mb-8">
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                          <div className="w-2 h-2 rounded-full bg-green-500/50" />
                       </div>
                       <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">Terminal Output — 443</span>
                    </div>
                    <div className="space-y-4 overflow-y-auto max-h-[300px] scrollbar-none">
                       {terminalLogs.map((log, i) => (
                          <div key={i} className="flex gap-3 text-[10px] leading-relaxed">
                             <span className="text-primary-400/50">root@limitless:~$</span>
                             <span className="text-gray-400">{log}</span>
                          </div>
                       ))}
                       {progress < 100 && (
                          <div className="flex gap-3 text-[10px]">
                             <Loader2 size={12} className="animate-spin text-primary-400" />
                             <span className="text-primary-400 animate-pulse">Running architectural analysis...</span>
                          </div>
                       )}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                 </motion.div>
              </div>
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
