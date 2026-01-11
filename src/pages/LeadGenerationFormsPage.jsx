import { motion } from 'framer-motion';
import {
  Target,
  Users,
  Layout,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MousePointer2,
  BarChart3,
  Sparkles,
  Layers,
  Cpu,
  RefreshCw,
  Search,
  MessageSquare
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const LeadGenerationFormsPage = () => {
  const formTypes = [
    { 
      title: 'Structural Intake', 
      description: 'High-precision multi-step protocols for complex enterprise synthesis.',
      icon: Layers,
      color: 'text-primary-400'
    },
    { 
      title: 'Pulse Capture', 
      description: 'Ultra-low friction single-node capture for rapid registry expansion.',
      icon: Zap,
      color: 'text-secondary-400'
    },
    { 
      title: 'Neural Diagnosis', 
      description: 'Interactive assessment nodes providing immediate systemic value.',
      icon: Cpu,
      color: 'text-white'
    }
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
                 <Target className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Conversion Architecture — Lead Generation</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-8 uppercase">
                 Conversion <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Matrix</span>
              </motion.h1>

              <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-16 italic">
                 Architectural intake protocols designed for high-trust user capture. We transform standard forms into deterministic conversion nodes.
              </motion.p>

              {/* Form Comparison Simulation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                 {/* High-Trust Form Mockup */}
                 <motion.div 
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                    className="p-10 rounded-[56px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden text-left"
                 >
                    <div className="relative z-10 space-y-8">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                             <ShieldCheck className="w-5 h-5 text-primary-400" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Protocol: High-Trust Alpha</span>
                       </div>
                       
                       <div className="space-y-6">
                          <div className="h-12 w-full bg-white/5 rounded-2xl border border-white/5" />
                          <div className="h-12 w-full bg-white/5 rounded-2xl border border-white/5" />
                          <div className="h-32 w-full bg-white/5 rounded-[24px] border border-white/5" />
                          <div className="flex items-center gap-3 py-2">
                             <div className="w-4 h-4 rounded bg-primary-500/20 border border-primary-500/40" />
                             <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Accept Sovereign Terms</span>
                          </div>
                          <button className="w-full py-5 bg-white text-dark-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] shadow-xl">
                             SYNCHRONIZE NODE
                          </button>
                       </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl rounded-full" />
                 </motion.div>

                 {/* Metrics Dashboard for Forms */}
                 <motion.div 
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                    className="p-10 rounded-[56px] bg-dark-950 border border-white/5 flex flex-col justify-center text-left"
                 >
                    <h3 className="text-2xl font-black text-white italic tracking-tighter mb-8 uppercase">Conversion Telemetry</h3>
                    <div className="space-y-8">
                       {[
                         { label: 'Completion Velocity', val: '88%', growth: '+12%' },
                         { label: 'Attribution Fidelity', val: '100%', growth: 'Max' },
                         { label: 'Abandonment Decay', val: '-45%', growth: 'Optimization' }
                       ].map((stat, idx) => (
                          <div key={idx} className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5">
                             <div>
                                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-2xl font-black text-white italic tracking-tighter">{stat.val}</div>
                             </div>
                             <div className="text-right">
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{stat.growth}</span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Matrix Options */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/5 backdrop-blur-3xl">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {formTypes.map((type, idx) => (
                    <motion.div 
                       key={idx}
                       initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                       className="text-center group"
                    >
                       <div className="w-20 h-20 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all group-hover:scale-110">
                          <type.icon className={`w-8 h-8 ${type.color}`} />
                       </div>
                       <h3 className="text-xl font-black text-white italic mb-4 uppercase">{type.title}</h3>
                       <p className="text-sm text-gray-500 font-medium leading-relaxed italic">{type.description}</p>
                    </motion.div>
                 ))}
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
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Capture</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team is ready to design your conversion matrix. Start scaling your registry with high-fidelity intake protocols.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Request Protocol
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                       Marketing Whitepaper <ArrowRight className="w-5 h-5" />
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

export default LeadGenerationFormsPage;