import { motion } from 'framer-motion';
import {
  TrendingUp,
  LineChart,
  Target,
  Zap,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Activity,
  BarChart3,
  Cpu,
  BrainCircuit,
  Eye,
  Rocket
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const PredictiveAnalyticsPage = () => {
  const metrics = [
    { label: 'Forecast Accuracy', val: '94.8%', icon: Target, color: 'text-primary-400' },
    { label: 'Signals Processed', val: '2.4M', icon: Activity, color: 'text-secondary-400' },
    { label: 'Anomaly Detection', val: 'Active', icon: ShieldCheck, color: 'text-white' },
    { label: 'Model Evolution', val: 'v8.2', icon: RefreshCw, color: 'text-primary-500' }
  ];

  const projections = [
    { time: 'T+3 Months', growth: '+18%', confidence: 'High' },
    { time: 'T+6 Months', growth: '+32%', confidence: 'High' },
    { time: 'T+12 Months', growth: '+54%', confidence: 'Moderate' }
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
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                 <motion.div 
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                 >
                    <TrendingUp className="w-4 h-4 text-primary-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Temporal Engine — Predictive Analytics</span>
                 </motion.div>
                 
                 <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none uppercase mb-8">
                    Temporal <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Foresight</span>
                 </motion.h1>

                 <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 font-medium leading-relaxed mb-12 italic">
                    Anticipate systemic mutations before they manifest. Our predictive engine synthesizes historical nodal data into deterministic future trajectories.
                 </motion.p>

                 <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex flex-wrap gap-8">
                    <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Access Engine
                    </button>
                    <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm uppercase flex items-center gap-3">
                       Algorithm Specs <Cpu className="w-4 h-4" />
                    </button>
                 </motion.div>
              </div>

              {/* Visualization Simulation */}
              <div className="lg:w-1/2 relative">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="p-10 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
                 >
                    <div className="relative z-10 space-y-12">
                       <div className="flex items-center justify-between">
                          <h3 className="text-xl font-black text-white italic tracking-tighter flex items-center gap-3 uppercase">
                             <Rocket className="w-6 h-6 text-primary-400" /> Trajectory Matrix
                          </h3>
                          <Eye className="w-5 h-5 text-gray-600" />
                       </div>

                       <div className="h-64 flex items-end justify-between gap-4 px-4">
                          {[40, 65, 45, 80, 55, 95, 75].map((h, i) => (
                             <motion.div 
                                key={i}
                                initial={{ height: 0 }} animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className={`w-full rounded-t-xl ${i === 5 ? 'bg-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-white/10 group-hover:bg-white/20'}`}
                             />
                          ))}
                       </div>

                       <div className="grid grid-cols-1 gap-6">
                          {projections.map((p, idx) => (
                             <div key={idx} className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all group">
                                <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                      <Clock className="w-5 h-5 text-gray-500 group-hover:text-primary-400 transition-colors" />
                                   </div>
                                   <div>
                                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{p.time}</div>
                                      <div className="text-sm font-black text-white italic tracking-tight">Projected Growth</div>
                                   </div>
                                </div>
                                <div className="text-right">
                                   <div className="text-xl font-black text-primary-400 italic tracking-tighter">{p.growth}</div>
                                   <div className="text-[8px] font-black text-green-500 uppercase tracking-widest">{p.confidence} Confidence</div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-grid-white/[0.03]" />
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Neural Metrics */}
        <section className="py-24 px-6 relative z-10 border-y border-white/5 bg-dark-950/50">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                 {metrics.map((m, idx) => (
                    <motion.div 
                       key={idx}
                       initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                       className="p-8 rounded-[40px] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all group"
                    >
                       <m.icon className={`w-8 h-8 ${m.color} mx-auto mb-6 group-hover:scale-110 transition-transform`} />
                       <div className="text-4xl font-black text-white italic tracking-tighter mb-2">{m.val}</div>
                       <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">{m.label}</div>
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
                 <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-12 border border-white/20">
                    <BrainCircuit className="w-10 h-10 text-white animate-pulse" />
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Foresight</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team is ready to deploy your predictive engines. Access the sub-millisecond future of enterprise data.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Initialize Foresight
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3 group">
                       Algorithm Dashboard <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default PredictiveAnalyticsPage;