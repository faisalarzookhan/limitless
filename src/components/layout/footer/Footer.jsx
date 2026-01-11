import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-24 px-6 md:px-10 border-t border-white/5 bg-[#0e1114]">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[1440px] mx-auto grid lg:grid-cols-4 gap-20"
            >
                <div className="col-span-1">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-8 bg-[#1ba6d6] mask-facet"></div>
                        <span className="font-black text-white text-xl tracking-tighter">LIMITLESS</span>
                    </div>
                    <p className="text-sm text-[#94a3b8] opacity-60 leading-relaxed mb-10">
                        Technical authority and operational maturity for the next generation of industry leaders.
                    </p>
                    <div className="flex gap-4">
                        <motion.a 
                             href="https://github.com/limitlessinfotech" 
                             target="_blank"
                             rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, borderColor: '#1ba6d6', color: '#1ba6d6' }}
                            className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors"
                        >
                            <Github className="w-4 h-4" />
                        </motion.a>
                         <motion.a 
                             href="https://twitter.com/limitlessinfotech" 
                             target="_blank"
                             rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, borderColor: '#1ba6d6', color: '#1ba6d6' }}
                            className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors"
                        >
                            <Twitter className="w-4 h-4" />
                        </motion.a>
                         <motion.a 
                             href="https://linkedin.com/in/limitlessinfotech" 
                             target="_blank"
                             rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, borderColor: '#1ba6d6', color: '#1ba6d6' }}
                            className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>
                
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">Platform</h4>
                        <ul className="space-y-4 text-sm font-medium text-[#94a3b8] opacity-60">
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/services">Services</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/products">Neural Products</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/portfolio">Legacy Portfolio</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/compliance">Enterprise Compliance</Link>
                            </motion.li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-medium text-[#94a3b8] opacity-60">
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/about">About Nexus</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/careers">Careers</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/pricing">Pricing Protocols</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/contact">Initiate Contact</Link>
                            </motion.li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium text-[#94a3b8] opacity-60">
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/blog">Intelligence Hub</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/knowledge-base">Knowledge Base</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/api-documentation">API Reference</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/admin-nexus">Admin Nexus</Link>
                            </motion.li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">Operational Desk</h4>
                    <motion.div 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(27, 166, 214, 0.05)" }}
                        className="p-8 border border-white/5 bg-white/5 mask-facet transition-colors"
                    >
                        <p className="text-xs font-bold text-[#1ba6d6] mb-2 uppercase tracking-widest">Global Uplink</p>
                        <p className="text-sm text-white font-medium mb-6">info@limitlessinfotech.com</p>
                        <Link to="/contact" className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#1ba6d6] hover:text-white transition-colors">
                            Request Architecture Review →
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            <div className="max-w-[1440px] mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <p className="text-[10px] font-black tracking-[0.4em] text-[#94a3b8] opacity-30 uppercase">
                    &copy; {new Date().getFullYear()} Limitless Infotech.
                </p>
                <div className="flex gap-12 text-[10px] font-black tracking-[0.2em] text-[#94a3b8] opacity-40 uppercase">
                    <Link to="/terms-of-service" className="hover:text-white transition-colors">Protocols</Link>
                    <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
