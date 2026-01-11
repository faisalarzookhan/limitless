import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  Tablet,
  Layout,
  Layers,
  Zap,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Maximize,
  Minimize,
  Eye,
  Settings,
  Grid
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const ResponsiveToolkitDemo = () => {
  const [device, setDevice] = useState('desktop');

  const devices = {
    desktop: { icon: Monitor, label: 'Architect Node', width: 'w-full', height: 'h-[400px]' },
    tablet: { icon: Tablet, label: 'Tactical Node', width: 'w-[480px]', height: 'h-[600px]' },
    mobile: { icon: Smartphone, label: 'Handheld Node', width: 'w-[280px]', height: 'h-[500px]' }
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
                 <Layout className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Layout Optimization — Responsive Toolkit</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-8 uppercase">
                 Fluid <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Orchestration</span>
              </motion.h1>

              <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-16 italic">
                 Architectural interfaces that breathe. Our responsive toolkit ensures deterministic visual integrity across every device node in your network.
              </motion.p>

              {/* Device Selectors */}
              <div className="flex justify-center gap-6 mb-24">
                 {Object.entries(devices).map(([key, d]) => (
                    <button 
                       key={key} 
                       onClick={() => setDevice(key)}
                       className={`p-6 rounded-[32px] border transition-all duration-500 ${
                         device === key 
                         ? 'bg-white text-dark-900 border-white shadow-2xl scale-110' 
                         : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
                       }`}
                    >
                       <d.icon className="w-6 h-6" />
                       <div className="mt-2 text-[8px] font-black uppercase tracking-widest">{d.label}</div>
                    </button>
                 ))}
              </div>

              {/* Interactive Device Simulation */}
              <div className="flex justify-center mb-32">
                 <motion.div 
                    layout
                    className={`bg-dark-950 border-8 border-white/5 rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700 ${devices[device].width} ${devices[device].height}`}
                 >
                    <div className="bg-white/5 p-6 flex justify-between items-center border-b border-white/5">
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500/30" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                          <div className="w-2 h-2 rounded-full bg-green-500/30" />
                       </div>
                       <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest">limitless.io/nexus</div>
                       <Settings className="w-4 h-4 text-gray-600" />
                    </div>

                    <div className="p-8 space-y-8 h-full overflow-y-auto custom-scrollbar">
                       <div className="h-40 rounded-3xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-white/10 animate-pulse" />
                       <div className={`grid gap-6 ${device === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                          {[1, 2, 3, 4].map(i => (
                             <div key={i} className="h-32 rounded-3xl bg-white/5 border border-white/5" />
                          ))}
                       </div>
                       <div className="space-y-4">
                          <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                          <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Technical Registry */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/5 backdrop-blur-3xl">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {[
                   { icon: Grid, title: 'Adaptive Grids', text: 'Deterministic layout nodes that refactor based on viewport entropy.' },
                   { icon: Layers, title: 'Layered Scaling', text: 'Multi-tiered scaling protocols for font-weights and visual hierarchies.' },
                   { icon: ShieldCheck, title: 'Integrity Audits', text: 'Real-time validation of visual nodes across 12+ standard viewports.' }
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

        {/* Global CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Orchestration</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team is ready to synchronize your visual ecosystem. Achieve sub-millisecond responsive integrity globally.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Deploy Toolkit
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                       Toolkit Specs <ArrowRight className="w-5 h-5" />
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

export default ResponsiveToolkitDemo;