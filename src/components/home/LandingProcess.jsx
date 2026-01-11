import React from 'react';
import { motion } from 'framer-motion';

const LandingProcess = () => {
    const steps = [
        {
            id: '01',
            title: 'Audit & Discovery',
            description: 'Full operational analysis of technical debt and architectural bottlenecks.',
            color: 'bg-[#1ba6d6]',
            delay: 0.1
        },
        {
            id: '02',
            title: 'Architecture',
            description: 'Designing the sovereign ecosystem map and security protocols.',
            color: 'bg-[#f4b41a]',
            delay: 0.2
        },
        {
            id: '03',
            title: 'Execution',
            description: 'Agile deployment of microservices and infrastructure scaling.',
            color: 'bg-white',
            delay: 0.3
        },
        {
            id: '04',
            title: 'Handover',
            description: 'Documentation, team training, and long-term managed support.',
            color: 'bg-[#1ba6d6]',
            delay: 0.4
        }
    ];

    return (
        <section id="process" className="py-32 px-6 md:px-10 bg-[#1c1f24] border-y border-white/5">
            <div className="max-w-[1440px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-4 block">Transformation Protocol</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">From Concept to Core.</h2>
                </motion.div>
                
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: step.delay }}
                            className="relative group"
                        >
                            <div className="h-1 w-full bg-white/10 mb-8 overflow-hidden rounded-full">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: step.delay + 0.2 }}
                                    className={`h-full ${step.color}`}
                                ></motion.div>
                            </div>
                            <span className="text-[4rem] font-black text-white/5 absolute -top-8 left-0 select-none">{step.id}</span>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                            <p className="text-sm text-[#94a3b8] group-hover:text-white transition-colors duration-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingProcess;
