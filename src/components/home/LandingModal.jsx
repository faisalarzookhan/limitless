import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const LandingModal = ({ isOpen, toggleModal }) => {
    const [formState, setFormState] = useState({
        organization: '',
        email: '',
        needs: 'Enterprise Engineering'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Import dynamically to avoid top-level overhead if not used
            const { default: PersistenceService } = await import('../../services/enterprise/PersistenceService');
            
            // Real persistence protocol execution
            await PersistenceService.store('project_leads', formState);
            
            // Small artificial buffer for "System Architecture Simulation" feel
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setIsSubmitting(false);
            setIsSuccess(true);
            
            setTimeout(() => {
                setIsSuccess(false);
                setFormState({ organization: '', email: '', needs: 'Enterprise Engineering' });
                toggleModal();
            }, 2000);
        } catch (error) {
            console.error('System Transmission Error:', error);
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div id="project-modal" className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleModal}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    ></motion.div>
                    
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-full max-w-2xl bg-[#1c1f24] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden mask-facet z-10"
                    >
                        <button onClick={toggleModal} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                            <X className="w-8 h-8" />
                        </button>
                        
                        {!isSuccess ? (
                            <>
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6]">Secure Transmission</span>
                                    <div className="h-px w-32 bg-white/10"></div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Initiate System Prompt</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">Identity</label>
                                            <input 
                                                type="text" 
                                                name="organization"
                                                value={formState.organization}
                                                onChange={handleChange}
                                                required
                                                placeholder="Organization" 
                                                className="w-full bg-black/30 border border-white/10 p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">Contact Node</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Corporate Email" 
                                                className="w-full bg-black/30 border border-white/10 p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">Architectural Needs</label>
                                        <select 
                                            name="needs"
                                            value={formState.needs}
                                            onChange={handleChange}
                                            className="w-full bg-black/30 border border-white/10 p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors appearance-none"
                                        >
                                            <option>Enterprise Engineering</option>
                                            <option>Cloud Infrastructure</option>
                                            <option>AI & Automation</option>
                                            <option>Managed Services</option>
                                        </select>
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-[#f4b41a] text-[#0e1114] font-black text-sm uppercase tracking-widest mask-btn hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-[#0e1114] border-t-transparent rounded-full animate-spin"></span>
                                                Transmitting...
                                            </>
                                        ) : 'Transmit Request'}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                                    <Check className="w-10 h-10 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Transmission Received</h3>
                                    <p className="text-[#94a3b8]">System protocol initiated. Our architects will calibrate a response shortly.</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LandingModal;
