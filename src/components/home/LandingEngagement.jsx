import React from 'react';
import { motion } from 'framer-motion';

const LandingEngagement = ({ toggleModal }) => {
    return (
        <section id="engagement" className="py-48 px-6 md:px-10">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto glass-panel p-16 md:p-24 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1ba6d6]"></div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Initiate Transformation.</h2>
                <p className="text-lg text-[#94a3b8] mb-14 max-w-xl mx-auto leading-relaxed">
                    Connect with our systems architecture team for a comprehensive audit of your digital infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleModal} 
                        className="px-12 py-6 bg-white text-[#0e1114] font-black text-sm uppercase tracking-widest mask-btn shadow-xl hover:bg-[#f4b41a] transition-colors"
                    >
                        Ping for Demo
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleModal} 
                        className="px-12 py-6 border border-white/10 text-white font-black text-sm uppercase tracking-widest mask-btn"
                    >
                        Consult an Architect
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default LandingEngagement;
