import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Search,
  Database,
  Cpu,
  Zap,
  Sparkles,
  ArrowRight,
  BarChart3,
  LineChart,
  PieChart,
  BrainCircuit,
  Terminal,
  RefreshCw,
  SearchCode
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const NaturalLanguageQueryPage = () => {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const sampleQueries = [
    "Analyze Q4 revenue nodes for tech sectors",
    "Synthesize user retention trends across global registries",
    "Project architectural efficiency for next 12 cycles",
    "Identify bottleneck nodes in payment propagation"
  ];

  const handleQuery = () => {
    if (!query) return;
    setIsProcessing(true);
    setResult(null);
    
    // Simulate neural processing
    setTimeout(() => {
      setIsProcessing(false);
      setResult({
        summary: "Neural synthesis complete. Detected 12% architectural optimization potential in current revenue nodes.",
        insights: [
          "Primary growth localized in Tech/Neural sector (+22%)",
          "Latency detected in APAC regional nodes (-4%)",
          "Deterministic ROI currently maintaining 5.0 baseline"
        ],
        type: 'Synthesis'
      });
    }, 2000);
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
        <section className="relative pt-40 pb-24 px-6">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                 <motion.div 
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                 >
                    <BrainCircuit className="w-4 h-4 text-primary-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Neural Interface — Natural Language Query</span>
                 </motion.div>
                 
                 <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none uppercase mb-8">
                    Neural <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Synthesis</span>
                 </motion.h1>

                 <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 font-medium leading-relaxed mb-12 italic">
                    Conversational access to complex architectural data. Query your entire enterprise registry using natural linguistic protocols. No SQL, just intelligence.
                 </motion.p>

                 <div className="space-y-4">
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1">Try a neural prompt:</p>
                    <div className="flex flex-wrap gap-3">
                       {sampleQueries.map((q, idx) => (
                          <button 
                             key={idx} onClick={() => setQuery(q)}
                             className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-dark-900 transition-all"
                          >
                             {q}
                          </button>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Interactive Neural Simulator */}
              <div className="lg:w-1/2 relative w-full">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="p-10 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden h-[600px] flex flex-col"
                 >
                    <div className="relative z-10 flex flex-col h-full">
                       <div className="flex items-center justify-between mb-10">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                                <Terminal className="w-5 h-5 text-primary-400" />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Neural Console V.1</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                             <span className="text-[8px] font-black uppercase text-green-500">Live</span>
                          </div>
                       </div>

                       {/* Input Area */}
                       <div className="relative group mb-8">
                          <input 
                             type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                             placeholder="Search your architecture..."
                             className="w-full bg-dark-950/50 border border-white/10 rounded-3xl p-6 pl-14 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                          />
                          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-hover:text-primary-400 transition-colors" />
                          <button 
                             onClick={handleQuery}
                             className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-primary-500 text-white rounded-2xl hover:bg-primary-600 transition-all shadow-xl"
                          >
                             <Zap className="w-4 h-4 fill-current" />
                          </button>
                       </div>

                       {/* Output Feed */}
                       <div className="flex-1 space-y-8 overflow-y-auto pr-2 custom-scrollbar">
                          <AnimatePresence>
                             {isProcessing && (
                                <motion.div 
                                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                   className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 border-dashed"
                                >
                                   <RefreshCw className="w-5 h-5 text-primary-400 animate-spin" />
                                   <div>
                                      <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">Synthesizing Query...</p>
                                      <p className="text-sm italic text-gray-500">Scanning global registries for matched nodes...</p>
                                   </div>
                                </motion.div>
                             )}

                             {result && (
                                <motion.div 
                                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                   className="space-y-6"
                                >
                                   <div className="p-8 rounded-[40px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10">
                                      <div className="flex items-center gap-3 mb-4">
                                         <CheckCircle2 className="w-4 h-4 text-green-500" />
                                         <span className="text-[10px] font-black uppercase text-green-500">{result.type} COMPLETE</span>
                                      </div>
                                      <p className="text-lg font-black italic text-white leading-relaxed">{result.summary}</p>
                                   </div>

                                   <div className="grid grid-cols-1 gap-4">
                                      {result.insights.map((insight, idx) => (
                                         <div key={idx} className="flex gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                                            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                               <Sparkles className="w-4 h-4 text-primary-400" />
                                            </div>
                                            <p className="text-sm italic text-gray-400 font-medium group-hover:text-white transition-colors">"{insight}"</p>
                                         </div>
                                      ))}
                                   </div>
                                </motion.div>
                             )}
                          </AnimatePresence>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Technical Specs */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/5 backdrop-blur-3xl">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {[
                   { icon: SearchCode, title: 'Linguistic Parsing', text: 'Semantic understanding of natural prompts across 50+ languages.' },
                   { icon: Database, title: 'Registry Agnostic', text: 'Queries cross-registry data from SQL, NoSQL, and static nodes.' },
                   { icon: ShieldCheck, title: 'Sovereign Security', text: 'All queries are deterministic and filtered through RBAC protocols.' }
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
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Interface</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Discuss your specific data retrieval requirements with our architectural team. We build custom neural interfaces for enterprise-scale registries.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Request Demo
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                       Neural Whitepaper <ArrowRight className="w-5 h-5" />
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

export default NaturalLanguageQueryPage;