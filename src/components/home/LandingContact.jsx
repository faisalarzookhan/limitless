import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Send, CheckCircle2, User, Mail, DollarSign, Briefcase, MessageSquare, Activity } from 'lucide-react';
import api from '../../services/api';

const LandingContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submissionProgress, setSubmissionProgress] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionProgress(10);

        try {
            // Simulate protocol handshake
            const progressInterval = setInterval(() => {
                setSubmissionProgress(prev => {
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return prev;
                    }
                    return prev + 15;
                });
            }, 200);

            await api.contact.submitContactForm(formData);
            
            clearInterval(progressInterval);
            setSubmissionProgress(100);
            
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
                setTimeout(() => {
                    setSubmitSuccess(false);
                    setSubmissionProgress(0);
                }, 5000);
            }, 600);

        } catch (error) {
            console.error('Form submission error:', error);
            setIsSubmitting(false);
            alert('Protocol transmission failed. Re-verify uplink.');
        }
    };

    return (
        <section id="contact" className="py-40 px-6 md:px-10 bg-[#0e1114] relative overflow-hidden">
             {/* Background Atmosphere */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" />
             <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-start relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-500/10 border border-secondary-500/20 rounded-full mb-8">
                        <Zap size={14} className="text-secondary-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary-400">Secure Uplink</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-10">
                        Initiate <br /> <span className="text-primary-400 not-italic">Transmission.</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-medium italic max-w-lg mb-12 leading-relaxed">
                        Securely transmit your project parameters. Our architects will analyze your structural requirements and calibrate a strategic response.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <a href="mailto:Info@limitlessinfotech.com" className="p-6 glass-panel mask-facet border-white/5 group hover:border-primary-500/30 transition-all block">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                <Mail size={18} />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Email Protocol</div>
                            <div className="text-sm font-bold text-white uppercase italic">Info@limitlessinfotech.com</div>
                        </a>
                        <a href="tel:+917710909492" className="p-6 glass-panel mask-facet border-white/5 group hover:border-secondary-500/30 transition-all block">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary-400 mb-6 group-hover:bg-secondary-500 group-hover:text-white transition-all">
                                <Activity size={18} />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Direct Uplink</div>
                            <div className="text-sm font-bold text-white uppercase italic">+91 77109 09492</div>
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-10 md:p-16 glass-panel mask-facet relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-dark-900/40"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-12 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary-500/10 rounded-xl border border-primary-500/20">
                                <Cpu className="text-primary-400 w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Protocol Terminal_v2.0</span>
                        </div>
                        {isSubmitting && (
                            <div className="flex items-center gap-3">
                                <span className="text-[9px] font-black uppercase text-primary-400 animate-pulse">Syncing...</span>
                                <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                                     <motion.div 
                                        className="h-full bg-primary-400"
                                        animate={{ width: `${submissionProgress}%` }}
                                     />
                                </div>
                            </div>
                        )}
                    </div>

                    <AnimatePresence mode="wait">
                        {submitSuccess ? (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 bg-primary-500/10 border border-primary-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(27,166,214,0.2)]">
                                    <CheckCircle2 className="w-10 h-10 text-primary-400" />
                                </div>
                                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">Transmission Successful</h3>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Awaiting Architectural Consensus.</p>
                            </motion.div>
                        ) : (
                            <form key="form" onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Identity Vector</label>
                                        <div className="relative group/input">
                                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4 group-focus-within/input:text-primary-400 transition-colors" />
                                            <input 
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white text-sm font-bold focus:border-primary-500/50 focus:bg-black/60 focus:outline-none transition-all placeholder:text-gray-800 uppercase tracking-wide"
                                                placeholder="Full Name" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Communication Node</label>
                                        <div className="relative group/input">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4 group-focus-within/input:text-primary-400 transition-colors" />
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white text-sm font-bold focus:border-primary-500/50 focus:bg-black/60 focus:outline-none transition-all placeholder:text-gray-800 uppercase tracking-wide"
                                                placeholder="E-Mail Protocol" 
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Structural Category</label>
                                        <div className="relative group/input">
                                            <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4 group-focus-within/input:text-primary-400 transition-colors pointer-events-none" />
                                            <select 
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 pl-14 pr-10 text-white text-sm font-bold focus:border-primary-500/50 focus:bg-black/60 focus:outline-none transition-all appearance-none uppercase tracking-wide"
                                            >
                                                <option value="" disabled>Select Segment</option>
                                                <option value="web">Web Architecture</option>
                                                <option value="mobile">Mobile Ecosystem</option>
                                                <option value="uiux">Neural Design</option>
                                                <option value="devops">DevOps Sync</option>
                                                <option value="other">Bespoke Protocol</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Asset Allocation</label>
                                        <div className="relative group/input">
                                            <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4 group-focus-within/input:text-primary-400 transition-colors pointer-events-none" />
                                            <select 
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 pl-14 pr-10 text-white text-sm font-bold focus:border-primary-500/50 focus:bg-black/60 focus:outline-none transition-all appearance-none uppercase tracking-wide"
                                            >
                                                <option value="" disabled>Range Selection</option>
                                                <option value="<5k">&lt;$5,000</option>
                                                <option value="5k-10k">$5k - $10k</option>
                                                <option value="10k-25k">$10k - $25k</option>
                                                <option value="25k+">$25,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Parameters</label>
                                    <div className="relative group/input">
                                        <MessageSquare className="absolute left-5 top-7 text-gray-600 w-4 h-4 group-focus-within/input:text-primary-400 transition-colors" />
                                        <textarea 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-14 pr-6 text-white text-sm font-bold focus:border-primary-500/50 focus:bg-black/60 focus:outline-none transition-all resize-none placeholder:text-gray-800 uppercase tracking-wide"
                                            placeholder="Calibration variables..." 
                                        ></textarea>
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full py-6 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.3em] rounded-2xl hover:bg-primary-500 hover:text-white transition-all shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Activity size={18} className="animate-spin" />
                                            Transmitting Protocol...
                                        </>
                                    ) : (
                                        <>
                                            Initiate Mission <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default LandingContact;
