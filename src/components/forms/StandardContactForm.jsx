// src/components/forms/StandardContactForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import SMTPService from '../../services/email/SMTPService';
import KPIService from '../../services/analytics/KPIService';
import PersistenceService from '../../services/enterprise/PersistenceService';

/**
 * Standardized Contact Form
 * Fully functional form with SMTP integration, validation, and analytics
 */
const StandardContactForm = ({ onSuccess, variant = 'default' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }

        // Phone validation (optional but must be valid if provided)
        if (formData.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Store in persistence layer
            await PersistenceService.store('contact_submissions', {
                ...formData,
                timestamp: new Date().toISOString(),
                status: 'new'
            });

            // Send email notification
            const emailResult = await SMTPService.sendContactFormEmail(formData);

            // Track analytics
            KPIService.trackFormSubmission('contact_form', formData);
            KPIService.trackConversion('contact_form_submission');

            // Success!
            setSubmitStatus('success');
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Call success callback if provided
            if (onSuccess) {
                onSuccess(formData);
            }

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);

        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');

            // Auto-hide error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <User size={14} />
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-black/30 border ${
                            errors.name ? 'border-red-500' : 'border-white/10'
                        } p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg`}
                    />
                    {errors.name && (
                        <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Mail size={14} />
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-black/30 border ${
                            errors.email ? 'border-red-500' : 'border-white/10'
                        } p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg`}
                    />
                    {errors.email && (
                        <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Phone size={14} />
                        Phone Number (Optional)
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className={`w-full bg-black/30 border ${
                            errors.phone ? 'border-red-500' : 'border-white/10'
                        } p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg`}
                    />
                    {errors.phone && (
                        <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <MessageSquare size={14} />
                        Subject *
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className={`w-full bg-black/30 border ${
                            errors.subject ? 'border-red-500' : 'border-white/10'
                        } p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg`}
                    />
                    {errors.subject && (
                        <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.subject}
                        </p>
                    )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Message *
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        className={`w-full bg-black/30 border ${
                            errors.message ? 'border-red-500' : 'border-white/10'
                        } p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg resize-none`}
                    />
                    {errors.message && (
                        <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-widest hover:bg-[#f4b41a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-lg"
                >
                    {isSubmitting ? (
                        <>
                            <Loader size={18} className="animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={18} />
                            Send Message
                        </>
                    )}
                </button>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence>
                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 bg-[#25d366]/10 border border-[#25d366]/30 rounded-xl flex items-start gap-3"
                    >
                        <CheckCircle size={20} className="text-[#25d366] flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-[#25d366] font-bold mb-1">Message Sent Successfully!</h4>
                            <p className="text-sm text-gray-300">
                                Thank you for contacting us. We'll get back to you within 24 hours.
                            </p>
                        </div>
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3"
                    >
                        <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-red-500 font-bold mb-1">Submission Failed</h4>
                            <p className="text-sm text-gray-300">
                                There was an error sending your message. Please try again or email us directly at info@limitlessinfotech.com
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StandardContactForm;
