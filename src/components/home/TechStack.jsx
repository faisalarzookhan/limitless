import React from 'react';
import { motion } from 'framer-motion';
import { 
    Code2, 
    Terminal, 
    Cloud, 
    Smartphone, 
    Zap, 
    Shield, 
    Timer, 
    CheckCircle2, 
    Cpu,
    Globe,
    Layers,
    Activity
} from 'lucide-react';

const TechStack = () => {
    const techCategories = [
        { 
            name: 'Frontend', 
            icon: Code2, 
            color: 'text-primary-400',
            glow: 'rgba(27, 166, 214, 0.2)',
            items: ['React', 'Next.js', 'Vue', 'Tailwind CSS'] 
        },
        { 
            name: 'Backend', 
            icon: Terminal, 
            color: 'text-secondary-400',
            glow: 'rgba(244, 180, 26, 0.2)',
            items: ['Node.js', 'Python', 'Go', 'GraphQL'] 
        },
        { 
            name: 'Cloud & DevOps', 
            icon: Cloud, 
            color: 'text-white',
            glow: 'rgba(255, 255, 255, 0.1)',
            items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'] 
        },
        { 
            name: 'Mobile', 
            icon: Smartphone, 
            color: 'text-primary-500',
            glow: 'rgba(27, 166, 214, 0.15)',
            items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] 
        }
    ];

    const reasons = [
        { 
            title: '24/7 Support', 
            desc: 'Always available to resolve critical issues.', 
            icon: Zap,
            tag: 'Pulse'
        },
        { 
            title: 'Agile Methodology', 
            desc: 'Iterative development with weekly updates.', 
            icon: Layers,
            tag: 'Iterative'
        },
        { 
            title: '100% On-Time', 
            desc: 'We respect deadlines and delivery schedules.', 
            icon: Timer,
            tag: 'Temporal'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="py-40 px-6 md:px-10 border-t border-white/5 relative overflow-hidden">
             {/* Background Atmosphere */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-secondary-500/10 blur-[120px] rounded-full" />
             </div>

             <div className="max-w-[1440px] mx-auto space-y-32 relative z-10">
                {/* Tech Stack Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
                    >
                        <Cpu size={14} className="text-primary-400" />
                        <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-gray-400">Ecosystem Matrix</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none mb-8"
                    >
                        Our Tech <span className="text-primary-400 not-italic">Stack.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-500 font-medium italic"
                    >
                        Leveraging the world's most robust frameworks to architect low-latency, scalable digital monoliths.
                    </motion.p>
                </div>

                {/* Tech Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {techCategories.map((cat, idx) => (
                        <motion.div 
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="p-10 glass-panel mask-facet relative group cursor-default"
                        >
                            <div 
                                className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 opacity-0 group-hover:opacity-100"
                                style={{ background: `linear-gradient(to right, transparent, ${cat.glow}, transparent)` }}
                            />
                            
                            <div className="flex items-center justify-between mb-12">
                                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${cat.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <cat.icon size={24} />
                                </div>
                                <span className="text-[0.55rem] font-black text-white/20 uppercase tracking-[0.3em]">Protocol_v0{idx+1}</span>
                            </div>

                            <h4 className="text-xl font-black text-white mb-8 italic uppercase tracking-tight">{cat.name}</h4>
                            
                            <ul className="space-y-4">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="text-gray-500 text-xs font-bold flex items-center gap-3 group/item">
                                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${cat.color.replace('text-', 'bg-')} opacity-20 group-hover/item:opacity-100 group-hover/item:scale-150 shadow-[0_0_10px_currentColor]`} />
                                        <span className="group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Why Choose Us & Operational Protocols */}
                <div className="grid lg:grid-cols-12 gap-20 items-center border-t border-white/5 pt-32">
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-secondary-400 mb-6 block">Why Us</span>
                            <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-10">
                                Strategic <br /> <span className="text-secondary-400 not-italic">Integrity.</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-medium leading-relaxed italic max-w-md">
                                Beyond code, we deliver operational excellence. Our protocols are designed for mission-critical reliability and surgical precision.
                            </p>
                        </motion.div>

                        <div className="flex gap-8 items-center border-l border-white/10 pl-8">
                             <div className="text-center">
                                <div className="text-3xl font-black text-white italic">100%</div>
                                <div className="text-[0.55rem] font-black text-gray-600 uppercase tracking-widest">Commitment</div>
                             </div>
                             <div className="w-px h-8 bg-white/10" />
                             <div className="text-center">
                                <div className="text-3xl font-black text-white italic">99.9%</div>
                                <div className="text-[0.55rem] font-black text-gray-600 uppercase tracking-widest">Uptime</div>
                             </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {reasons.map((reason, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all group ${index === 0 ? 'sm:col-span-2' : ''}`}
                                >
                                     <div className="flex items-start justify-between mb-8">
                                         <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white text-secondary-400 group-hover:text-dark-900 transition-all duration-500">
                                            <reason.icon size={28} />
                                        </div>
                                        <span className="text-[0.6rem] font-black px-4 py-1.5 rounded-full bg-white/5 text-gray-500 tracking-widest uppercase border border-white/5">{reason.tag}</span>
                                     </div>
                                     <div>
                                         <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-4">{reason.title}</h3>
                                         <p className="text-gray-400 text-sm font-medium leading-relaxed italic group-hover:text-white transition-colors">{reason.desc}</p>
                                     </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
