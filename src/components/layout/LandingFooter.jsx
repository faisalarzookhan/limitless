import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database } from 'lucide-react';

const LandingFooter = () => {
    return (
        <footer className="py-24 px-6 md:px-10 border-t border-white/5 bg-black">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[1440px] mx-auto grid lg:grid-cols-4 gap-20"
            >
                <div className="col-span-1">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-8 bg-white mask-facet"></div>
                        <span className="font-black text-white text-xl tracking-tighter">LIMITLESS</span>
                    </div>
                    <p className="text-sm text-[#94a3b8] opacity-60 leading-relaxed mb-10">
                        Technical authority and operational maturity for the next generation of industry leaders.
                    </p>
                    <div className="flex gap-4">
                        <motion.div 
                            whileHover={{ scale: 1.1, borderColor: '#1ba6d6' }}
                            className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors"
                        >
                            <Activity className="w-4 h-4" />
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1, borderColor: '#1ba6d6' }}
                            className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors"
                        >
                            <Database className="w-4 h-4" />
                        </motion.div>
                    </div>
                </div>
                
                <div className="lg:col-span-2 grid grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">System Verticals</h4>
                        <ul className="space-y-4 text-sm font-medium text-[#94a3b8] opacity-60">
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">Enterprise Engineering</motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">Infrastructure</motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">Intelligence Systems</motion.li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">Infrastructure</h4>
                        <ul className="space-y-4 text-sm font-medium text-[#94a3b8] opacity-60">
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">Cloud Servers</motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">Secure Email</motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">Managed Domains</motion.li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">Architecture Desk</h4>
                    <motion.div 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="p-8 border border-white/5 bg-white/5 mask-facet transition-colors"
                    >
                        <p className="text-xs font-bold text-[#1ba6d6] mb-2">GENERAL INQUIRY</p>
                        <p className="text-sm text-white font-medium mb-6">info@limitlessinfotech.com</p>
                    </motion.div>
                </div>
            </motion.div>

            <div className="max-w-[1440px] mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <p className="text-[10px] font-black tracking-[0.4em] text-[#94a3b8] opacity-30 uppercase">
                    &copy; 2026 Limitless Infotech Solution Pvt. Ltd.
                </p>
                <div className="flex gap-12 text-[10px] font-black tracking-2em text-[#94a3b8] opacity-40 uppercase">
                    <span className="hover:text-white transition-colors cursor-pointer">Protocols</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
