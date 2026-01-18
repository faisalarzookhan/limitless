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
                        className="text-5xl md:text-7xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8"
                    >
                        Where Innovation Meets
                        <br />
                        <span className="bg-gradient-to-r from-[#1ba6d6] via-blue-400 to-[#1ba6d6] bg-clip-text text-transparent bg-300% animate-gradient">
                            Execution.
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-[#94a3b8] max-w-xl mb-14 leading-relaxed font-light"
                    >
                        Custom Software Development & Cloud Solutions for Startups. 
                        We build scalable, secure, and high-performance technology that drives your business forward.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-wider mask-btn shadow-2xl shadow-blue-500/20 flex items-center gap-2 hover:bg-[#158bb3] transition-colors"
                        >
                            Get a Free Consultation
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
