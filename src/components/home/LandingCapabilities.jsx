import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Zap, ArrowRight } from 'lucide-react';

const LandingCapabilities = () => {
    const capabilities = [
        {
            icon: Code2,
            iconColor: 'text-[#1ba6d6]',
            title: 'Engineering',
            items: ['Enterprise Platforms', 'API Orchestration', 'Native Ecosystems'],
            delay: 0.1
        },
        {
            icon: Cloud,
            iconColor: 'text-[#f4b41a]',
            title: 'Infrastructure',
            items: ['Cloud Sovereign Servers', 'Zero-Trust Security', 'Disaster Recovery'],
            delay: 0.2
        },
        {
            icon: Zap,
            iconColor: 'text-white',
            title: 'Intelligence',
            items: ['Predictive Analytics', 'LLM Integration', 'RPA Pipelines'],
            delay: 0.3
        }
    ];

    return (
        <section id="expertise" className="py-40 px-6 md:px-10">
            <div className="max-w-[1440px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 max-w-3xl"
                >
                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Capabilities Framework</span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Systemic Solutions.</h2>
                    <p className="text-lg text-[#94a3b8] leading-relaxed">Our engineering practice is built on technical integrity and transparent execution, ensuring long-term architectural stability.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-1">
                    {capabilities.map((cap, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: cap.delay }}
                            whileHover={{ y: -10 }}
                            className="glass-panel p-12 group hover:bg-white/5 hover:border-white/10 transition-colors duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                                <cap.icon className="w-32 h-32" />
                            </div>
                            <div className={`w-12 h-12 mb-10 flex items-center justify-center border border-white/10 rounded-sm ${cap.iconColor}`}>
                                <cap.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-8">{cap.title}</h3>
                            <ul className="space-y-4">
                                {cap.items.map((item, i) => (
                                    <li key={i} className={`flex items-center gap-3 text-sm font-medium text-[#94a3b8] group-hover:text-white transition-colors`}>
                                        <ArrowRight className={`w-4 h-4 ${cap.iconColor}`} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingCapabilities;
