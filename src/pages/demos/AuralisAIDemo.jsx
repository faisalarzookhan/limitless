import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Cpu, 
  Zap, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  BarChart3,
  Search,
  MessageSquare,
  FileText
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

const AuralisAIDemo = () => {
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState(null);

  const processIntelligence = useCallback(async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    // Simulate complex neural processing
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Mock analysis results based on systemic intelligence
    setResults({
      sentiment: "Highly Strategic & Forward-Thinking",
      entities: [
        { label: "Architecture", weight: "0.98", category: "Core Design" },
        { label: "Scalability", weight: "0.94", category: "Performance" },
        { label: "Neural Flow", weight: "0.89", category: "AI Integration" }
      ],
      summary: "The input describes a transition from legacy operational models to an integrated, neural-first architectural framework focusing on high-velocity execution and systemic trust.",
      nexus_score: 92
    });
    setIsProcessing(false);
  }, [inputText]);

  return (
    <ErrorBoundary>
      <SEO 
        title="Auralis AI Text Intelligence Demo" 
        description="Experience the power of Auralis AI. Our interactive demo showcases real-time text analysis, entity extraction, and architectural sentiment vectoring."
      />
      
      <div className="min-h-screen bg-[#0e1114] py-32 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(27,166,214,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-[#1ba6d6]/5 blur-[120px] rounded-full animate-pulse" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-xl">
              <Zap className="w-4 h-4 text-[#1ba6d6] animate-pulse" />
              <span className="text-[0.6rem] font-black text-white/60 uppercase tracking-[0.3em]">Module: Text Intelligence V3</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Auralis <span className="text-[#1ba6d6]">Neural Demo</span>
            </h1>
            <p className="text-[0.7rem] text-white/40 font-black uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
              Interact with the Auralis core. Present your textual objectives for immediate neural decomposition and architectural synthesis.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Input Terminal */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <MessageSquare size={20} className="text-[#1ba6d6]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Input Buffer</h3>
                    <p className="text-[0.5rem] text-white/30 uppercase font-black">Awaiting data stream...</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="relative">
                  <textarea 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="ENTER ARCHITECTURAL OBJECTIVES OR STRATEGIC OVERVIEW..."
                    className="w-full bg-black/40 border border-white/5 rounded-3xl p-8 text-white text-[0.8rem] font-medium leading-relaxed min-h-[300px] outline-none focus:border-[#1ba6d6]/50 transition-all placeholder:text-white/10"
                  />
                  <div className="absolute bottom-6 right-6 text-[0.5rem] font-black text-white/20 uppercase tracking-widest">
                    Buffered: {inputText.length} tokens
                  </div>
                </div>

                <button
                  onClick={processIntelligence}
                  disabled={isProcessing || !inputText}
                  className="w-full py-6 bg-[#1ba6d6] text-white text-[0.8rem] font-black uppercase tracking-[0.4em] mask-btn transition-all flex items-center justify-center gap-4 group disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Synchronizing...
                    </>
                  ) : (
                    <>
                      Execute Neural Scan
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Results Console */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                {!results && !isProcessing ? (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full bg-white/5 border border-dashed border-white/10 rounded-[3rem] p-20 text-center flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <Cpu size={60} className="text-white/5 mb-8" />
                    <h3 className="text-[0.6rem] font-black text-white/20 uppercase tracking-[0.4em]">Neural Output Offline</h3>
                    <p className="text-[0.5rem] text-white/10 uppercase tracking-[0.2em] mt-4">Initiate scan from the input terminal</p>
                  </motion.div>
                ) : isProcessing ? (
                  <motion.div 
                    key="processing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12 min-h-[500px] flex flex-col items-center justify-center text-center space-y-10"
                  >
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border-2 border-[#1ba6d6]/20 rounded-full" />
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-[#1ba6d6] rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="text-[#1ba6d6] animate-pulse" size={40} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white uppercase tracking-[0.4em] mb-4">Processing Flows</h3>
                      <div className="flex flex-col gap-4 max-w-xs mx-auto">
                        {['Syntactic Extraction', 'Semantic Vectoring', 'Architectural Mapping'].map((step, i) => (
                          <motion.div 
                            key={step}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.6, y: 0 }}
                            transition={{ delay: i * 0.5 }}
                            className="flex items-center gap-4 text-[0.6rem] font-bold text-white tracking-widest"
                          >
                            <div className="w-1 h-1 bg-[#1ba6d6] rounded-full" />
                            {step}...
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* Sentiment & Summary */}
                    <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-10">
                       <div className="flex items-center gap-3 mb-8">
                         <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                            <ShieldCheck className="text-green-500" size={16} />
                         </div>
                         <h3 className="text-[0.6rem] font-black text-white uppercase tracking-[0.2em]">Neural Synthesis Complete</h3>
                       </div>

                       <div className="space-y-8">
                         <div>
                            <p className="text-[0.5rem] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Architectural Sentiment</p>
                            <div className="text-2xl font-black text-white italic tracking-tighter uppercase">{results.sentiment}</div>
                         </div>
                         <div>
                            <p className="text-[0.5rem] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Decomposed Executive Summary</p>
                            <p className="text-[0.8rem] font-medium text-white/60 leading-relaxed italic border-l-2 border-[#1ba6d6]/30 pl-6">
                              "{results.summary}"
                            </p>
                         </div>
                       </div>
                    </div>

                    {/* Entities & Score */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-10">
                           <h4 className="text-[0.5rem] font-black text-white/30 uppercase tracking-[0.2em] mb-8">Structural Entities</h4>
                           <div className="space-y-6">
                              {results.entities.map(entity => (
                                <div key={entity.label}>
                                  <div className="flex justify-between items-end mb-2">
                                     <span className="text-[0.65rem] font-black text-white uppercase tracking-widest">{entity.label}</span>
                                     <span className="text-[0.5rem] font-black text-[#1ba6d6] uppercase tracking-widest">{Math.round(entity.weight * 100)}% Match</span>
                                  </div>
                                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                     <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${entity.weight * 100}%` }}
                                        transition={{ duration: 1.5, delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-[#1ba6d6] to-transparent"
                                     />
                                  </div>
                                </div>
                              ))}
                           </div>
                        </div>

                        <div className="bg-[#1ba6d6] rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-1000">
                               <Layers size={200} className="text-white" />
                            </div>
                            <h4 className="text-[0.55rem] font-black text-white/60 uppercase tracking-[0.2em] relative z-10">LIS Nexus Compatibility</h4>
                            <div className="relative z-10 mt-12 mb-4">
                               <div className="text-7xl font-black text-white tracking-tighter">{results.nexus_score}%</div>
                               <p className="text-[0.55rem] font-black text-white/60 uppercase tracking-[0.4em] mt-2">Architecture Ready</p>
                            </div>
                            <Link to="/contact" className="relative z-10 w-full py-4 bg-white text-[#1ba6d6] text-[0.65rem] font-black uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-2 hover:bg-[#0e1114] hover:text-white transition-all">
                               Deploy Prototype <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

// Internal Import for Link
import { Link } from 'react-router-dom';

export default AuralisAIDemo;
