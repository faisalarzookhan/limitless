import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, BarChart3, Zap, Globe, Cpu, Activity } from 'lucide-react';

const LandingPortfolio = () => {
    const projects = [
        {
            title: 'IVOLEX - Enterprise ERP',
            category: 'CRM Node',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
            problem: 'Fragmented operations across global logistics networks.',
            solution: 'Unified multidimensional ERP with real-time asset telemetry.',
            metrics: [
                { label: 'Efficiency Gain', value: '+60%', icon: Activity },
                { label: 'Automation Yield', value: '80%', icon: Cpu }
            ],
            tech: ['React', 'Node.js', 'PostgreSQL'],
            glow: 'rgba(27, 166, 214, 0.2)'
        },
        {
            title: 'Wakilni - Legal Ecosystem',
            category: 'Neural Mobile',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop',
            problem: 'Complex structural bridging between legal entities.',
            solution: 'Secure encrypted matching platform with instant consult sync.',
            metrics: [
                { label: 'Latency Reduction', value: '80%', icon: Zap },
                { label: 'User Onboarding', value: '500+', icon: Globe }
            ],
            tech: ['Flutter', 'Firebase', 'E2E Encryption'],
            glow: 'rgba(244, 180, 26, 0.15)'
        },
        {
            title: 'Luxe E-commerce Core',
            category: 'Retail Forge',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
            problem: 'Inert conversion rates on legacy storefront infrastructure.',
            solution: 'Immersive visual storytelling engine with optimized checkout nodes.',
            metrics: [
                { label: 'Conversion Yield', value: '+85%', icon: BarChart3 },
                { label: 'Traffic Velocity', value: '250%', icon: Activity }
            ],
            tech: ['Next.js', 'Stripe', 'Redis'],
            glow: 'rgba(255, 255, 255, 0.1)'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="portfolio" className="py-40 px-6 md:px-10 bg-[#0e1114] relative overflow-hidden">
             {/* Sub-node ambient light */}
             <div className="absolute top-1/2 left-0 w-1/2 h-full bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
             
            <div className="max-w-[1440px] mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                        <Globe size={14} className="text-primary-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-400">Strategic Showroom</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-8">
                        Strategic <br /> <span className="text-primary-400 not-italic">Deployments.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium italic max-w-2xl leading-relaxed">
                        Deterministic results delivered through mission-critical engineering. 
                        A catalog of structural transformations for the digital era.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                >
                    {projects.map((project, index) => (
                        <Link 
                            key={index}
                            to="/portfolio"
                            className="glass-panel mask-facet relative group overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary-500/30 transition-all duration-500"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div 
                                    className="absolute inset-0 z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" 
                                    style={{ background: `linear-gradient(to bottom, transparent, #0e1114)` }}
                                />
                                <div className="absolute inset-0 z-10 bg-[#0e1114]/20 mix-blend-multiply" />
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                                />
                                <div className="absolute top-6 left-6 z-20 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg">
                                    <span className="text-[9px] font-black text-[#1ba6d6] uppercase tracking-[0.3em]">{project.category}</span>
                                </div>
                            </div>

                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black text-white mb-8 italic uppercase tracking-tight">{project.title}</h3>
                                
                                <div className="space-y-6 mb-10 flex-1">
                                    <div>
                                        <div className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                                            Structural Debt
                                        </div>
                                        <p className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-wide italic leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-secondary-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-400" />
                                            Architectural Pivot
                                        </div>
                                        <p className="text-[0.65rem] font-bold text-gray-300 uppercase tracking-wide leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-10 border-t border-white/5 mb-10">
                                    {project.metrics.map((m, i) => (
                                        <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="text-xl font-black text-white tracking-tighter mb-1">{m.value}</div>
                                            <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{m.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black text-gray-500 uppercase tracking-widest border border-white/5 group-hover:border-white/10 group-hover:text-white transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div 
                                className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                style={{ background: `linear-gradient(to right, transparent, ${project.glow}, transparent)` }}
                            />
                        </Link>
                    ))}
                </motion.div>
                
                <div className="mt-32 text-center">
                    <motion.a 
                        href="/portfolio" 
                        whileHover={{ x: 10 }}
                        className="inline-flex items-center gap-4 text-white font-black text-[0.65rem] uppercase tracking-[0.4em] group"
                    >
                        Access Repository Terminal
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary-500 group-hover:border-primary-400 transition-all">
                            <ArrowRight size={18} />
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default LandingPortfolio;
