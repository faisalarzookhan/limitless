import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, Zap, Target, Layers, Cpu, CheckCircle2 } from 'lucide-react';

const LandingEstimation = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        type: 'web',
        complexity: 'enterprise',
        timeline: 'standard'
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    return (
        <section className="py-24 px-6 md:px-10 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="p-1 px-1 rounded-[64px] bg-gradient-to-br from-[#1ba6d6]/20 via-white/5 to-transparent border border-white/10 overflow-hidden shadow-2xl">
                    <div className="bg-[#0e1114]/80 backdrop-blur-3xl rounded-[62px] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ba6d6]/10 border border-[#1ba6d6]/20 rounded-full">
                                <Calculator size={14} className="text-[#1ba6d6]" />
                                <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-[#1ba6d6]">Interactive Protocol</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                                Instant <span className="text-[#1ba6d6] not-italic">Architectural</span> <br /> Estimation
                            </h2>
                            <p className="text-sm font-medium text-gray-400 max-w-lg leading-relaxed italic">
                                Quantify your vision. Our deterministic projection model analyzes your structural requirements to provide immediate budgetary and temporal benchmarks.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    'Multi-dimensional Growth Projections',
                                    'Structural Complexity Analysis',
                                    'Temporal Epoch Benchmarking'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-[0.65rem] font-black uppercase tracking-widest text-white/40">
                                        <CheckCircle2 size={16} className="text-[#1ba6d6]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Layers size={150} className="text-white" />
                                </div>
                                
                                <div className="relative z-10">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div 
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-8"
                                            >
                                                <h3 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-6">Select Ecosystem</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {['Web Systems', 'Mobile Neural', 'AI Automation', 'Cloud Infra'].map(type => (
                                                        <button 
                                                            key={type}
                                                            onClick={() => { setData({...data, type}); nextStep(); }}
                                                            className="p-6 bg-white/5 border border-white/10 rounded-2xl text-[0.6rem] font-black uppercase tracking-widest text-white/40 hover:bg-[#1ba6d6] hover:text-white hover:border-[#1ba6d6] transition-all"
                                                        >
                                                            {type}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div 
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-8"
                                            >
                                                <h3 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-6">Complexity Depth</h3>
                                                <div className="space-y-4">
                                                    {['Seed Stage Venture', 'Growth Tier Scaleup', 'Corporate Enterprise'].map(comp => (
                                                        <button 
                                                            key={comp}
                                                            onClick={() => { setData({...data, complexity: comp}); nextStep(); }}
                                                            className="w-full text-left p-6 bg-white/5 border border-white/10 rounded-2xl text-[0.6rem] font-black uppercase tracking-widest text-white/40 hover:bg-[#1ba6d6] hover:text-white transition-all flex justify-between items-center"
                                                        >
                                                            {comp}
                                                            <ArrowRight size={14} />
                                                        </button>
                                                    ))}
                                                </div>
                                                <button onClick={prevStep} className="text-[0.5rem] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Back to Architecture</button>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div 
                                                key="step3"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center space-y-8"
                                            >
                                                <div className="w-16 h-16 bg-[#1ba6d6]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                   <Target className="text-[#1ba6d6]" />
                                                </div>
                                                <h3 className="text-lg font-black text-white uppercase tracking-widest">Protocol Sync Initialized</h3>
                                                <p className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                                                   We've mapped your requirements for <span className="text-white">{data.type}</span> at <span className="text-white">{data.complexity}</span> level. 
                                                </p>
                                                <button className="w-full py-5 bg-[#1ba6d6] text-white text-[0.7rem] font-black uppercase tracking-[0.4em] mask-btn shadow-2xl">
                                                   Receive Final Report
                                                </button>
                                                <button onClick={() => setStep(1)} className="text-[0.5rem] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Reset Simulation</button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingEstimation;
