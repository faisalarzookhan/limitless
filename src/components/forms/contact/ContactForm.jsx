import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  User,
  HelpCircle,
  CheckCircle2,
  Phone,
  FileText,
  Send,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import notificationService from '../../../services/notification/notificationService';
import encryptionService from '../../../services/auth/encryptionService';
import csrfService from '../../../services/csrfService';
import rateLimitService from '../../../services/rateLimitService';

const ContactForm = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [rateLimitError, setRateLimitError] = useState(null);
  
  const getClientIdentifier = () => {
    return `${window.location.hostname}_${navigator.userAgent}`;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Identity required';
    if (!formData.email.trim()) {
      newErrors.email = 'Channel required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid protocol';
    }
    if (!formData.subject) newErrors.subject = 'Sector required';
    if (!formData.message.trim()) newErrors.message = 'Payload required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const clientIdentifier = getClientIdentifier();
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'contactForm');
    
    if (!rateLimitCheck.allowed) {
      setRateLimitError(`Flood protection active. Retry in ${Math.ceil(rateLimitCheck.retryAfter / 1000)}s.`);
      return;
    }
    
    setRateLimitError(null);
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    const sanitizedData = {
      name: encryptionService.sanitizeInput(formData.name),
      email: encryptionService.sanitizeInput(formData.email),
      phone: encryptionService.sanitizeInput(formData.phone),
      subject: encryptionService.sanitizeInput(formData.subject),
      message: encryptionService.sanitizeInput(formData.message),
    };

    const requestData = {
      ...sanitizedData,
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    };

    await notificationService.sendContactNotification(requestData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#1ba6d6]/10 border border-[#1ba6d6]/20 backdrop-blur-xl rounded-2xl p-10 text-center"
          >
            <div className="w-16 h-16 bg-[#1ba6d6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(27,166,214,0.4)]">
              <CheckCircle2 color="white" size={32} />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Transmission Successful</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Our architects have received your briefing. A representative will establish contact shortly.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {rateLimitError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
                <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{rateLimitError}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.65rem] font-black text-[#1ba6d6] uppercase tracking-[0.2em] ml-1">Identity Node</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
                    placeholder="Full Name / Organization"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="absolute -bottom-5 right-1 text-[0.6rem] font-bold text-red-500 uppercase">{errors.name}</motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-black text-[#1ba6d6] uppercase tracking-[0.2em] ml-1">Communication Channel</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
                    placeholder="official@domain.com"
                  />
                   <AnimatePresence>
                    {errors.email && (
                      <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="absolute -bottom-5 right-1 text-[0.6rem] font-bold text-red-500 uppercase">{errors.email}</motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.65rem] font-black text-[#1ba6d6] uppercase tracking-[0.2em] ml-1">Telemetry (Optional)</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-black text-[#1ba6d6] uppercase tracking-[0.2em] ml-1">Project Sector</label>
                <div className="relative group">
                  <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors pointer-events-none" />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white/80 appearance-none outline-none transition-all duration-300 backdrop-blur-md cursor-pointer`}
                  >
                    <option value="" className="bg-[#0e1114]">Select Domain</option>
                    <option value="general" className="bg-[#0e1114]">General Protocol</option>
                    <option value="project" className="bg-[#0e1114]">Custom Architecture</option>
                    <option value="support" className="bg-[#0e1114]">System Continuity</option>
                    <option value="partnership" className="bg-[#0e1114]">Strategic Alliance</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] transition-transform group-hover:translate-y-[-40%]" />
                   <AnimatePresence>
                    {errors.subject && (
                      <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="absolute -bottom-5 right-1 text-[0.6rem] font-bold text-red-500 uppercase">{errors.subject}</motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[0.65rem] font-black text-[#1ba6d6] uppercase tracking-[0.2em] ml-1">Mission Payload</label>
              <div className="relative group">
                <FileText className="absolute left-4 top-6 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-2xl px-12 py-6 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md resize-none`}
                  placeholder="Describe the architectural requirements of your project..."
                />
                 <AnimatePresence>
                    {errors.message && (
                      <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="absolute -bottom-2 right-1 text-[0.6rem] font-bold text-red-500 uppercase">{errors.message}</motion.span>
                    )}
                  </AnimatePresence>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(27,166,214,0.3)" }}
              whileTap={{ scale: 0.99 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 bg-[#1ba6d6] hover:bg-[#1592bd] text-white font-black text-xs uppercase tracking-[0.4em] mask-btn transition-colors disabled:opacity-50 flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Establishing Link...
                </>
              ) : (
                <>
                  Establish Protocol
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(ContactForm);
