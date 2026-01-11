import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  UserCircle2,
  Zap,
  Globe,
  Settings,
  RefreshCw,
  Cpu,
  Monitor,
  Palette,
  Terminal,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const AuralisPersonalizationDemoPage = () => {
  const [persona, setPersona] = useState('enterprise');

  const personas = {
    enterprise: {
      name: 'Executive Architect',
      icon: ShieldCheck,
      color: 'text-primary-400',
      accent: 'bg-primary-500',
      description: 'Prioritizing security, ROI, and global compliance nodes.',
      uiState: 'High-Integrity Dashboard'
    },
    creative: {
      name: 'Visionary Designer',
      icon: Palette,
      color: 'text-secondary-400',
      accent: 'bg-secondary-500',
      description: 'Prioritizing aesthetics, fluid animations, and visual storytelling.',
      uiState: 'Immersive Experience'
    },
    developer: {
      name: 'Engineering Node',
      icon: Terminal,
      color: 'text-emerald-400',
      accent: 'bg-emerald-500',
      description: 'Prioritizing raw performance, API density, and codebase transparency.',
      uiState: 'Console Interface'
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
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6">
           <div className="max-w-7xl mx-auto text-center">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <Sparkles className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Auralis Neural Core — Personalization Engine</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-8 uppercase">
                 Neural <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Adaptation</span>
              </motion.h1>

              <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-16 italic">
                 Witness the Auralis core as it dynamically reshapes the interface to harmonize with your specific persona. Real-time architectural adaptation.
              </motion.p>

              {/* Persona Selectors */}
              <div className="flex flex-wrap justify-center gap-6 mb-24">
                 {Object.entries(personas).map(([key, p]) => (
                    <button 
                       key={key} 
                       onClick={() => setPersona(key)}
                       className={`flex items-center gap-4 px-8 py-5 rounded-[32px] border transition-all duration-500 ${
                         persona === key 
                         ? 'bg-white text-dark-900 border-white shadow-2xl scale-105' 
                         : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
                       }`}
                    >
                       <p.icon className={`w-5 h-5 ${persona === key ? 'text-primary-600' : 'text-gray-600'}`} />
                       <span className="text-xs font-black uppercase tracking-widest">{p.name}</span>
                    </button>
                 ))}
              </div>

              {/* Interactive Adaptation Simulation */}
              <div className="max-w-5xl mx-auto">
                 <AnimatePresence mode="wait">
                    <motion.div 
                       key={persona}
                       initial={{ opacity: 0, scale: 0.95, y: 20 }}
                       animate={{ opacity: 1, scale: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0.95, y: -20 }}
                       transition={{ duration: 0.6 }}
                       className="p-10 md:p-20 rounded-[88px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden text-left"
                    >
                       <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                          <div className="lg:w-1/2 space-y-8">
                             <div className={`w-20 h-20 rounded-[32px] flex items-center justify-center border transition-colors ${personas[persona].accent}/10 border-${personas[persona].accent}/20`}>
                                {(() => {
                                  const Icon = personas[persona].icon;
                                  return <Icon className={`w-10 h-10 ${personas[persona].color}`} />;
                                })()}
                             </div>
                             <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">
                                Adaptive Mode: <br />
                                <span className={`${personas[persona].color} not-italic`}>{personas[persona].uiState}</span>
                             </h3>
                             <p className="text-lg text-gray-400 font-medium leading-relaxed italic">
                                {personas[persona].description} 
                             </p>
                             <div className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-[0.4em]">
                                <RefreshCw className="w-3 h-3 animate-spin" /> Neural Sync Active
                             </div>
                          </div>

                          <div className="lg:w-1/2 w-full">
                             <div className="grid grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((i) => (
                                   <div key={i} className={`h-40 rounded-[40px] border border-white/10 transition-all duration-700 ${
                                      persona === 'enterprise' ? 'bg-dark-950 p-6' : 
                                      persona === 'creative' ? 'bg-white/10 backdrop-blur-xl' :
                                      'bg-dark-900 border-emerald-500/20 font-mono text-[8px]'
                                   }`}>
                                      {persona === 'developer' ? (
                                        <div className="text-emerald-500 font-mono overflow-hidden">
                                          {`> process.node_${i}\n> status: active\n> latency: 0.4ms\n> payload: optimized`}
                                        </div>
                                      ) : persona === 'creative' ? (
                                        <div className="w-full h-full rounded-[30px] bg-gradient-to-br from-white/10 to-transparent" />
                                      ) : (
                                        <div className="space-y-4">
                                          <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                                          <div className="h-8 w-full bg-white/5 rounded-xl border border-white/5" />
                                        </div>
                                      )}
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                       <div className="absolute inset-0 bg-grid-white/[0.03]" />
                       <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-${personas[persona].accent.split('-')[1]}-500 to-transparent opacity-50`} />
                    </motion.div>
                 </AnimatePresence>
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
                 <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-12 border border-white/20">
                    <BrainCircuit className="w-10 h-10 text-white animate-pulse" />
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Adaptation</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team is ready to synchronize your user experience. Access the sub-millisecond future of personalized enterprise interfaces.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Initialize Auralis
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3 group">
                       Personalization Docs <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
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

export default AuralisPersonalizationDemoPage;