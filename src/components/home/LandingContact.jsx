import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, DollarSign, Briefcase, Send, CheckCircle2, MessageSquare } from 'lucide-react';
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await api.contact.submitContactForm(formData);
            
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setIsSubmitting(false);
            // Optional: Add error state handling here
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="py-32 px-6 md:px-10 bg-[#0e1114] relative overflow-hidden">
             {/* Ambient Background */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1ba6d6]/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Get Started</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Ready to Build the <br /> 
                        <span className="text-[#1ba6d6]">Next Big Thing?</span>
                    </h2>
                    <p className="text-lg text-[#94a3b8] mb-10 leading-relaxed max-w-lg">
                        Tell us about your project. We help startups and enterprises engineer scalable, secure, and future-proof digital solutions.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-[#94a3b8]">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#1ba6d6]">
                                <Mail size={18} />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Email Us</div>
                                <div className="text-sm">hello@limitlessinfotech.com</div>
                            </div>
                        </div>
                         {/* Add more contact info if needed */}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 border border-white/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
                >
                    {submitSuccess ? (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-[#1ba6d6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(27,166,214,0.4)]">
                                <CheckCircle2 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                            <p className="text-[#94a3b8]">We'll be in touch with you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[0.65rem] font-black text-[#94a3b8] uppercase tracking-wider">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-3.5 text-gray-500 w-4 h-4" />
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0e1114] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors"
                                            placeholder="John Doe" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.65rem] font-black text-[#94a3b8] uppercase tracking-wider">Your Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-3.5 text-gray-500 w-4 h-4" />
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0e1114] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors"
                                            placeholder="john@company.com" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[0.65rem] font-black text-[#94a3b8] uppercase tracking-wider">Project Type</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-3.5 text-gray-500 w-4 h-4 pointer-events-none" />
                                        <select 
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0e1114] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors appearance-none"
                                        >
                                            <option value="" disabled>Select Type</option>
                                            <option value="web">Web Development</option>
                                            <option value="mobile">Mobile App</option>
                                            <option value="uiux">UI/UX Design</option>
                                            <option value="devops">DevOps/Cloud</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.65rem] font-black text-[#94a3b8] uppercase tracking-wider">Budget Range</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-3.5 text-gray-500 w-4 h-4 pointer-events-none" />
                                        <select 
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0e1114] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors appearance-none"
                                        >
                                            <option value="" disabled>Select Budget</option>
                                            <option value="<5k">&lt;$5,000</option>
                                            <option value="5k-10k">$5,000 - $10,000</option>
                                            <option value="10k-25k">$10,000 - $25,000</option>
                                            <option value="25k+">$25,000+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[0.65rem] font-black text-[#94a3b8] uppercase tracking-wider">Project Details</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-3.5 text-gray-500 w-4 h-4" />
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-[#0e1114] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us a bit about your project goals..." 
                                    ></textarea>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#1ba6d6] text-white font-black text-xs uppercase tracking-widest mask-btn hover:bg-[#f4b41a] transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Get Your Quote <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default LandingContact;
