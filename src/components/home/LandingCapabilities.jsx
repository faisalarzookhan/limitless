import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Layout, Server, ArrowRight, Cloud } from 'lucide-react';

const LandingCapabilities = () => {
    const services = [
        {
            icon: Code2,
            iconColor: 'text-primary-400',
            glow: 'rgba(27, 166, 214, 0.15)',
            title: 'Foundational Web',
            items: ['Custom React/Next.js Architecture', 'Mission-Critical Dashboards', 'Progressive Web Nodes'],
            delay: 0.1,
            tag: 'Layer_1'
        },
        {
            icon: Smartphone,
            iconColor: 'text-secondary-400',
            glow: 'rgba(244, 180, 26, 0.12)',
            title: 'Neural Mobile',
            items: ['iOS & Android Core (Flutter/Native)', 'Deterministic Performance', 'Global Node Sync'],
            delay: 0.2,
            tag: 'Layer_2'
        },
        {
            icon: Layout,
            iconColor: 'text-white',
            glow: 'rgba(255, 255, 255, 0.1)',
            title: 'Design Synthesis',
            items: ['Aesthetic Neural Research', 'High-Fidelity UI Systems', 'Cognitive Design Maps'],
            delay: 0.3,
            tag: 'Layer_1.5'
        },
         {
            icon: Server,
            iconColor: 'text-primary-500',
            glow: 'rgba(27, 166, 214, 0.1)',
            title: 'DevOps Grid',
            items: ['AWS/Cloud Orchestration', 'CI/CD Persistence Pipelines', 'Docker & Kubernetes Nodes'],
            delay: 0.4,
            tag: 'Layer_3'
        }
    ];

    return (
        <section id="services" className="py-40 px-6 md:px-10 bg-[#0e1114] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            <div className="max-w-[1440px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12"
                >
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary-400 mb-6 block">Our Capabilities</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-8">
                            Architectural <br /> <span className="text-primary-400 not-italic">Execution.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-medium italic leading-relaxed">End-to-end digital synthesis tailored for high-growth ventures and global enterprise nodes.</p>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="text-right">
                            <div className="text-2xl font-black text-white italic">04</div>
                            <div className="text-[0.55rem] font-black text-gray-600 uppercase tracking-widest">Core Disciplines</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-right">
                            <div className="text-2xl font-black text-white italic">24/7</div>
                            <div className="text-[0.55rem] font-black text-gray-600 uppercase tracking-widest">Node Uptime</div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: service.delay }}
                            whileHover={{ y: -10 }}
                            className="p-10 glass-panel mask-facet relative group overflow-hidden"
                        >
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at top right, ${service.glow}, transparent 70%)` }}
                            />

                            <div className="flex items-center justify-between mb-12">
                                <div className={`p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-dark-900 ${service.iconColor}`}>
                                    <service.icon size={24} />
                                </div>
                                <span className="text-[0.6rem] font-black text-gray-600 uppercase tracking-widest">{service.tag}</span>
                            </div>

                            <h3 className="text-xl font-black text-white mb-8 italic uppercase tracking-tight">{service.title}</h3>
                            
                            <ul className="space-y-4">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/item">
                                        <ArrowRight className={`w-3 h-3 mt-0.5 shrink-0 transition-transform group-hover/item:translate-x-1 ${service.iconColor}`} /> 
                                        <span className="text-[0.65rem] font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-wide leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3">
                                <span className="text-[0.55rem] font-black text-primary-400 uppercase tracking-[0.2em]">Calibrate Node</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingCapabilities;
