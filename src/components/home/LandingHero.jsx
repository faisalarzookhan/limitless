import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingHero = ({ toggleModal }) => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 flex items-center relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,166,214,0.1),transparent_40%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e1114] to-transparent z-10"></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                <div className="space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-blue-400 text-sm font-medium tracking-wide">Transforming Ideas into Reality</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic uppercase"
                    >
                        Design. Build. <br />
                        <span className="text-[#1ba6d6] not-italic drop-shadow-[0_0_15px_rgba(27,166,214,0.3)]">
                            Scale Securely
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
                            — at Speed.
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-[0.7rem] md:text-[0.8rem] text-[#94a3b8] max-w-xl mb-14 leading-relaxed font-black uppercase tracking-[0.3em] opacity-80"
                    >
                        We help SMBs and enterprises design, build, and scale secure digital products. 
                        Engineered for high-fidelity stability and reduced time-to-market.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Link
                            to="/get-started"
                            className="px-10 py-5 bg-[#1ba6d6] text-white font-black text-xs uppercase tracking-[0.3em] mask-btn shadow-2xl shadow-blue-500/30 flex items-center gap-2 hover:scale-105 transition-all duration-500"
                        >
                            Book a free call
                        </Link>
                        <Link 
                            to="/portfolio"
                            className="px-10 py-5 border border-white/10 text-white font-black text-sm uppercase tracking-wider mask-btn flex items-center justify-center gap-2 group hover:bg-white/5 transition-colors"
                        >
                            View Our Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative hidden lg:flex justify-center"
                >
                    <div className="w-[500px] h-[500px] relative flex items-center justify-center scale-90">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[100%] h-[100%] border border-white/5 rounded-full"
                        >
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#f4b41a] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#f4b41a]"></div>
                        </motion.div>
                        <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[70%] h-[70%] border border-white/5 rounded-full"
                        >
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#1ba6d6] rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_#1ba6d6]"></div>
                        </motion.div>
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[40%] h-[40%] border border-white/5 rounded-full"
                        ></motion.div>
                        <motion.div 
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-40 h-40 glass-panel mask-facet flex items-center justify-center backdrop-blur-md relative z-10"
                        >
                            <Terminal className="text-[#1ba6d6] w-12 h-12" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LandingHero;
