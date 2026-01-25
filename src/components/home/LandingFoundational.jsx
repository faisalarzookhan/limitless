import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Mail, Server, ArrowRight } from 'lucide-react';

const LandingFoundational = ({ toggleModal }) => {
    const services = [
        { icon: Globe, label: "Digital Domain Registry", sub: "Global Deployment" },
        { icon: Mail, label: "Encrypted Mail Infrastructure", sub: "AES-256 Protocol" },
        { icon: Server, label: "High-Performance Node Hosting", sub: "Edge-Sync Active" }
    ];

    return (
        <section id="foundational" className="py-40 px-6 md:px-10 bg-[#0e1114] border-y border-white/5 relative overflow-hidden">
             {/* Sub-node Background Decoration */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
             
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-32 items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="p-12 md:p-16 glass-panel mask-facet relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-out"></div>
                        
                        <div className="flex items-center justify-between mb-16 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary-500/20 rounded-xl border border-primary-500/30">
                                    <Layers className="text-primary-400 w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-1">Architecture</div>
                                    <div className="text-xs font-black text-white uppercase tracking-widest">Managed_Core_v4.2</div>
                                </div>
                            </div>
                            <span className="flex items-center gap-2 text-[0.6rem] font-bold text-primary-400 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" /> Uplink Stable
                            </span>
                        </div>

                        <div className="space-y-8 relative z-10">
                            {services.map((service, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center justify-between border-b border-white/5 pb-6 group/item hover:border-white/10 transition-colors"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-primary-500/30 transition-all">
                                            <service.icon className="text-gray-500 group-hover/item:text-primary-400 w-5 h-5 transition-colors" />
                                        </div>
                                        <span className="text-sm font-black text-gray-300 group-hover/item:text-white transition-colors">{service.label}</span>
                                    </div>
                                    <span className="text-[0.6rem] font-black tracking-widest text-secondary-400 uppercase bg-secondary-500/10 px-3 py-1 rounded-full border border-secondary-500/20">{service.sub}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Orbital Decoration */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 space-y-10"
                >
                    <div>
                        <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary-400 mb-6 block">Foundational Protocols</span>
                        <h2 className="text-6xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-10">
                            The Digital <br /> <span className="text-primary-400 not-italic">Base Layer.</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed italic max-w-xl">
                            We manage the structural baseline—sovereign hosting, encrypted mail, and DNS routing—securing your perimeter while you scale product innovation.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8">
                        <button 
                            onClick={toggleModal} 
                            className="px-12 py-5 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.3em] rounded-2xl hover:bg-gray-200 transition-all shadow-2xl"
                        >
                            Configure Managed Core
                        </button>
                        <button 
                            className="flex items-center gap-4 text-white font-black text-[0.65rem] uppercase tracking-widest group"
                        >
                            View Managed Packages 
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500 transition-all">
                                <ArrowRight className="text-white w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LandingFoundational;
