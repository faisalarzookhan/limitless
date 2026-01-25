import React from 'react';
import { motion } from 'framer-motion';
import { 
    Search, 
    DraftingCompass, 
    Terminal, 
    ShieldCheck, 
    ChevronRight, 
    Activity,
    Cpu,
    Zap,
    ArrowUpRight
} from 'lucide-react';

const LandingProcess = () => {
    const steps = [
        {
            id: 'Phase_01',
            title: 'Diagnostic Audit',
            description: 'Surgical analysis of structural technical debt, low-latency bottlenecks, and architectural entropy.',
            icon: Search,
            color: 'text-primary-400',
            glow: 'rgba(27, 166, 214, 0.2)',
            status: 'Diagnostic'
        },
        {
            id: 'Phase_02',
            title: 'Sovereign Map',
            description: 'Engineering high-fidelity ecosystem blueprints and deterministic security protocols.',
            icon: DraftingCompass,
            color: 'text-secondary-400',
            glow: 'rgba(244, 180, 26, 0.15)',
            status: 'Synthesized'
        },
        {
            id: 'Phase_03',
            title: 'Protocol Sync',
            description: 'Agile orchestration of micro-services and automated infrastructure scaling sequences.',
            icon: Terminal,
            color: 'text-white',
            glow: 'rgba(255, 255, 255, 0.1)',
            status: 'Executing'
        },
        {
            id: 'Phase_04',
            title: 'Nexus Handoff',
            description: 'Platform stabilization, comprehensive documentation, and managed enterprise support.',
            icon: ShieldCheck,
            color: 'text-primary-500',
            glow: 'rgba(27, 166, 214, 0.15)',
            status: 'Operational'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="process" className="py-40 px-6 md:px-10 bg-[#0e1114] border-y border-white/5 relative overflow-hidden">
             {/* Architectural Grid Background */}
             <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)] pointer-events-none" />
             
            <div className="max-w-[1440px] mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                        <Activity size={14} className="text-primary-400 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-400">Process Telemetry</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none mb-8">
                        Transformation <span className="text-primary-400 not-italic">Protocol.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium italic max-w-2xl">
                        A deterministic journey from legacy concepts to optimized enterprise cores. 
                        Precision engineering at every transition node.
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="p-10 glass-panel mask-facet relative group cursor-default"
                        >
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at top right, ${step.glow}, transparent 70%)` }}
                            />

                            <div className="flex items-center justify-between mb-12">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-dark-900 ${step.color}`}>
                                    <step.icon size={28} />
                                </div>
                                <span className="text-[0.6rem] font-black text-gray-600 uppercase tracking-widest">{step.id}</span>
                            </div>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-primary-400 uppercase tracking-widest">Protocol Sync</span>
                                    <div className="h-px flex-1 bg-white/5 mx-4" />
                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{step.status}</span>
                                </div>
                                <h3 className="text-xl font-black text-white italic uppercase tracking-tight">{step.title}</h3>
                            </div>

                            <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-wide leading-relaxed group-hover:text-white transition-colors duration-300">
                                {step.description}
                            </p>

                            <div className="mt-12 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <button className="flex items-center gap-3 text-[10px] font-black text-primary-400 uppercase tracking-widest group/btn">
                                    Details <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-1 h-1 rounded-full ${index >= i ? step.color.replace('text-', 'bg-') : 'bg-white/10'}`} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Connection Lines Decorative */}
                <div className="mt-32 p-12 glass-panel mask-facet border-primary-500/10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary-500/5 -skew-x-12 translate-x-1/2" />
                    <div className="relative z-10">
                        <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">Start Your <span className="text-primary-400">Sync.</span></h4>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest max-w-md italic">Initialize the deconstruction flow and calibrate your structural requirements for Phase 01.</p>
                    </div>
                    <button className="relative z-10 px-12 py-5 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.3em] rounded-2xl hover:bg-primary-500 hover:text-white transition-all shadow-2xl group">
                        Initialize Mission <ChevronRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LandingProcess;
