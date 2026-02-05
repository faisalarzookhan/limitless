import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-20 md:py-24 px-6 md:px-12 border-t border-white/5 bg-[#0e1114] relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/10 blur-[100px] rounded-full pointer-events-none" />
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[1440px] mx-auto grid lg:grid-cols-4 gap-12 lg:gap-20 relative z-10"
            >
                <div className="col-span-1">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img src="/images/logos/Limitless_Geometric_Logo.png" alt="Limitless" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-black text-white text-xl tracking-tighter">LIMITLESS</span>
                    </div>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-10">
                        Where Innovation Meets Execution. Empowering startups and enterprises with scalable, secure, and high-performance digital solutions.
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
                             href="https://linkedin.com/company/limitlessinfotech" 
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
                        <h4 className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#1ba6d6] mb-8">Architectural Nodes</h4>
                        <ul className="space-y-4 text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8]">
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/services#web">Web Systems</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/services#mobile">Mobile Neural</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/services#expertise">AI & Automation</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#1ba6d6' }} className="cursor-pointer transition-colors">
                                <Link to="/services#software">Cloud Infrastructure</Link>
                            </motion.li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#ffc957] mb-8">Strategic Intelligence</h4>
                        <ul className="space-y-4 text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8]">
                            <motion.li whileHover={{ x: 5, color: '#ffc957' }} className="cursor-pointer transition-colors">
                                <Link to="/roi-calculator">ROI Analytics</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#ffc957' }} className="cursor-pointer transition-colors">
                                <Link to="/innovation-lab">Innovation Lab</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5, color: '#ffc957' }} className="cursor-pointer transition-colors">
                                <Link to="/portfolio">Success Stories</Link>
                            </motion.li>
                             <motion.li whileHover={{ x: 5, color: '#ffc957' }} className="cursor-pointer transition-colors">
                                <Link to="/blog">Strategic Insights</Link>
                            </motion.li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-white mb-8">Operations</h4>
                        <ul className="space-y-4 text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8]">
                            <motion.li whileHover={{ x: 5, color: 'white' }} className="cursor-pointer transition-colors">
                                <Link to="/careers">Engineering Careers</Link>
                            </motion.li>
                             <motion.li whileHover={{ x: 5, color: 'white' }} className="cursor-pointer transition-colors">
                                <Link to="/about">Our Philosophy</Link>
                            </motion.li>
                             <motion.li whileHover={{ x: 5, color: 'white' }} className="cursor-pointer transition-colors">
                                <Link to="/compliance">Compliance Matrix</Link>
                            </motion.li>
                             <motion.li whileHover={{ x: 5, color: 'white' }} className="cursor-pointer transition-colors">
                                <Link to="/contact">Neural Uplink</Link>
                            </motion.li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white mb-8">Newsletter</h4>
                    <p className="text-sm text-[#94a3b8] mb-4">Subscribe for latest tech trends.</p>
                     <div className="relative">
                        <input 
                            type="email" 
                            placeholder="EMAIL ADDRESS" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-xs text-white placeholder:text-white/20 focus:border-[#1ba6d6] focus:outline-none transition-colors"
                        />
                        <button className="absolute right-2 top-1.5 p-1.5 bg-[#1ba6d6] rounded text-white hover:bg-[#158bb3] transition-colors">
                            <Mail size={14} />
                        </button>
                    </div>
                </div>
            </motion.div>

            <div className="max-w-[1440px] mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#94a3b8] opacity-50 uppercase">
                    &copy; {new Date().getFullYear()} Limitless Infotech Solution.
                </p>
                <div className="flex gap-8 text-[10px] font-black tracking-[0.2em] text-[#94a3b8] opacity-50 uppercase">
                    <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
