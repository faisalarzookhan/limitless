import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Mail, Server, ArrowRight } from 'lucide-react';

const LandingFoundational = ({ toggleModal }) => {
    const services = [
        { icon: Globe, label: "Domain Registry", sub: "Global" },
        { icon: Mail, label: "Secure Email Ops", sub: "Encrypted" },
        { icon: Server, label: "Strategic Hosting", sub: "Active" }
    ];

    return (
        <section id="foundational" className="py-40 px-6 md:px-10 bg-[#1c1f24] mask-diagonal">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="p-10 md:p-12 glass-panel mask-facet relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#1ba6d6]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                        <div className="flex items-center justify-between mb-12 relative z-10">
                            <Layers className="text-[#1ba6d6] w-8 h-8" />
                            <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] opacity-60">Managed_Core_v4.2</span>
                        </div>
                        <div className="space-y-6 relative z-10">
                            {services.map((service, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center justify-between border-b border-white/5 pb-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <service.icon className="text-[#94a3b8] w-5 h-5" />
                                        <span className="text-sm font-bold text-white">{service.label}</span>
                                    </div>
                                    <span className="text-[0.6rem] font-black tracking-widest text-[#f4b41a] uppercase">{service.sub}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2"
                >
                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Foundational Services</span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-10 tracking-tight">The Digital <br /> Base Layer.</h2>
                    <p className="text-lg text-[#94a3b8] mb-12 leading-relaxed">
                        We manage baseline operations—hosting, mail, domains, and security—so your internal teams can focus on product innovation.
                    </p>
                    <motion.button 
                        whileHover={{ x: 10 }}
                        onClick={toggleModal} 
                        className="flex items-center gap-4 text-white font-black text-sm uppercase tracking-wide group"
                    >
                        Explore Managed Packages 
                        <ArrowRight className="text-[#1ba6d6] w-5 h-5 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default LandingFoundational;
