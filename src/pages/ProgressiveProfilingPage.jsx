import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCircle2,
  Fingerprint,
  Zap,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Database,
  Layers,
  Cpu,
  Target,
  Users,
  Layout,
  Clock,
  CheckCircle2
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const ProgressiveProfilingPage = () => {
  const [profileStage, setProfileStage] = useState(1);
  const stages = [
    { id: 1, title: 'Identity Initialization', fields: ['Core Name', 'Node Email'], color: 'from-blue-500 to-cyan-400' },
    { id: 2, title: 'Domain Verification', fields: ['Enterprise Node', 'Industry Sector'], color: 'from-cyan-400 to-teal-400' },
    { id: 3, title: 'Strategic Alignment', fields: ['Operational Tier', 'Project Manifest'], color: 'from-teal-400 to-emerald-400' }
  ];

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
        <section className="relative pt-40 pb-24 px-6">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                 <motion.div 
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                 >
                    <Fingerprint className="w-4 h-4 text-primary-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Identity Evolution — Progressive Profiling</span>
                 </motion.div>
                 
                 <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none uppercase mb-8">
                    Identity <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Synthesis</span>
                 </motion.h1>

                 <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 font-medium leading-relaxed mb-12 italic">
                    Eliminate friction from the user journey. Our progressive profiling engine decodes user identities over multiple sessions, ensuring deterministic data collection without cognitive overload.
                 </motion.p>

                 <div className="grid grid-cols-2 gap-8 mb-12">
                    {[
                      { label: 'Friction Reduction', val: '-65%', icon: Zap },
                      { label: 'Data Integrity', val: '+40%', icon: ShieldCheck }
                    ].map((stat, idx) => (
                       <div key={idx} className="p-6 rounded-[32px] bg-white/5 border border-white/10">
                          <stat.icon className="w-5 h-5 text-primary-400 mb-4" />
                          <div className="text-2xl font-black text-white italic tracking-tighter">{stat.val}</div>
                          <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Interactive Demo */}
              <div className="lg:w-1/2 relative w-full">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="p-10 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
                 >
                    <div className="relative z-10 space-y-12">
                       <div className="flex items-center justify-between">
                          <h3 className="text-xl font-black text-white italic tracking-tighter flex items-center gap-3 uppercase">
                             <RefreshCw className={`w-6 h-6 text-primary-400 ${profileStage < 4 ? 'animate-spin' : ''}`} /> Evolution Stage
                          </h3>
                          <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Node ID: PRO-9021</div>
                       </div>

                       {/* Progress Nodes */}
                       <div className="flex justify-between relative mb-12">
                          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-10" />
                          {[1, 2, 3].map((s) => (
                             <div 
                                key={s} onClick={() => s <= profileStage && setProfileStage(s)}
                                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-500 cursor-pointer ${
                                   profileStage >= s 
                                   ? 'bg-primary-500 border-primary-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                                   : 'bg-dark-900 border-white/10 text-gray-600'
                                }`}
                             >
                                <span className="text-[10px] font-black italic">{s}</span>
                             </div>
                          ))}
                       </div>

                       {/* Dynamic Form Segment */}
                       <div className="min-h-[280px]">
                          <AnimatePresence mode="wait">
                             {profileStage <= 3 ? (
                                <motion.div 
                                   key={profileStage}
                                   initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                   className="space-y-8"
                                >
                                   <h4 className="text-lg font-black text-white italic tracking-tight uppercase">{stages[profileStage-1].title}</h4>
                                   <div className="space-y-6">
                                      {stages[profileStage-1].fields.map((field, idx) => (
                                         <div key={idx} className="space-y-2">
                                            <input 
                                               type="text" placeholder={field}
                                               className="w-full bg-dark-950/50 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                                            />
                                         </div>
                                      ))}
                                      <button 
                                         onClick={() => setProfileStage(s => s + 1)}
                                         className="w-full py-5 bg-white text-dark-900 font-black rounded-2xl hover:bg-gray-200 transition-all text-[10px] uppercase tracking-[0.3em]"
                                      >
                                         Synchronize Node
                                      </button>
                                   </div>
                                </motion.div>
                             ) : (
                                <motion.div 
                                   initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                   className="text-center py-12 space-y-6"
                                >
                                   <div className="w-20 h-20 rounded-[32px] bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                                   </div>
                                   <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase">Synthesis Complete</h4>
                                   <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Full identity profile established within the Limitless registry.</p>
                                   <button 
                                      onClick={() => setProfileStage(1)}
                                      className="text-[10px] font-black text-primary-400 uppercase tracking-widest hover:text-white transition-colors"
                                   >
                                      RESTART PROTOCOL
                                   </button>
                                </motion.div>
                             )}
                          </AnimatePresence>
                       </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Technical Registry */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/5 backdrop-blur-3xl">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {[
                   { icon: Database, title: 'Session Persistence', text: 'Deterministic user tracking across disparate nodes and devices.' },
                   { icon: Layers, title: 'Logic Stacks', text: 'Conditional logic determining field presentation based on existing node data.' },
                   { icon: ShieldCheck, title: 'Zero Data Drift', text: 'Real-time validation protocols preventing architectural data decay.' }
                 ].map((spec, idx) => (
                    <div key={idx} className="text-center">
                       <spec.icon className="w-10 h-10 text-primary-400 mx-auto mb-8" />
                       <h3 className="text-xl font-black text-white italic mb-4 uppercase">{spec.title}</h3>
                       <p className="text-sm text-gray-500 font-medium leading-relaxed italic">{spec.text}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Evolution</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team is ready to deploy your progressive profiling nodes. Eliminate friction and scale your data integrity.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Deploy Protocol
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                       Technical Whitepaper <ArrowRight className="w-5 h-5" />
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

export default ProgressiveProfilingPage;