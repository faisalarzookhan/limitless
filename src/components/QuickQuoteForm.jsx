import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Send,
  AlertCircle
} from 'lucide-react';
import csrfService from '../services/csrfService';
import rateLimitService from '../services/rateLimitService';
import encryptionService from '../services/auth/encryptionService';
import { sendLeadGenerationNotification } from '../services/notification/notificationService';

const QuickQuoteForm = ({ variant = 'default', onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [rateLimitError, setRateLimitError] = useState(null);
  
  const getClientIdentifier = () => {
    return `${window.location.hostname}_${navigator.userAgent}`;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'VALID IDENTIFIER REQUIRED';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'IDENTIFIER TOO SHORT';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'NEURAL NODE REQUIRED';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'INVALID NEURAL NODE';
      }
    }
    
    if (!formData.requirement.trim()) {
      newErrors.requirement = 'CORE REQUIREMENT REQUIRED';
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = 'INSUFFICIENT DATA DENSITY';
    }
    
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
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'quickQuoteForm');
    
    if (!rateLimitCheck.allowed) {
      const retryAfterSeconds = Math.ceil(rateLimitCheck.retryAfter / 1000);
      setRateLimitError(`PROTOCOL STANDBY: PLEASE RETRY IN ${retryAfterSeconds} SECONDS.`);
      return;
    }
    
    setRateLimitError(null);
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const sanitizedData = {
      name: encryptionService.sanitizeInput(formData.name),
      email: encryptionService.sanitizeInput(formData.email),
      requirement: encryptionService.sanitizeInput(formData.requirement),
    };

    const requestData = {
      ...sanitizedData,
      formType: 'quick-quote',
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    try {
      await sendLeadGenerationNotification(requestData);
      setFormData({ name: '', email: '', requirement: '' });
      setSubmitSuccess(true);
      if (onSubmitSuccess) onSubmitSuccess();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting quick quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        className="bg-[#1ba6d6]/5 border border-[#1ba6d6]/30 rounded-[2rem] p-10 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none"></div>
        <div className="flex items-center justify-center mb-6 relative z-10">
          <div className="w-16 h-16 bg-[#1ba6d6] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(27,166,214,0.4)]">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-4 relative z-10">
          TRANSMISSION SUCCESS
        </h3>
        <p className="text-[0.65rem] text-white/50 font-black uppercase tracking-widest leading-relaxed relative z-10">
          Neural link established. A Limitless architect will transmit a response shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <AnimatePresence>
        {rateLimitError && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 rounded-2xl p-4 flex items-center gap-3 overflow-hidden"
          >
            <AlertCircle className="w-4 h-4 text-[#ff4d4d] flex-shrink-0" />
            <p className="text-[0.6rem] font-black text-[#ff4d4d] uppercase tracking-widest">{rateLimitError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label htmlFor="name" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-4">
            IDENTIFIER *
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-[#1ba6d6] transition-colors">
              <User className="h-4 w-4" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border ${errors.name ? 'border-[#ff4d4d]/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 transition-all duration-500 outline-none`}
              placeholder="YOUR FULL NAME"
            />
          </div>
          {errors.name && (
            <p className="text-[0.55rem] font-black text-[#ff4d4d] uppercase tracking-widest mt-2 ml-4">{errors.name}</p>
          )}
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-4">
            NEURAL NODE *
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-[#1ba6d6] transition-colors">
              <Mail className="h-4 w-4" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border ${errors.email ? 'border-[#ff4d4d]/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 transition-all duration-500 outline-none`}
              placeholder="YOUR@COMPANY.COM"
            />
          </div>
          {errors.email && (
            <p className="text-[0.55rem] font-black text-[#ff4d4d] uppercase tracking-widest mt-2 ml-4">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="requirement" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-4">
          CORE REQUIREMENT *
        </label>
        <div className="relative group">
          <div className="absolute top-6 left-6 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors">
            <Lightbulb className="h-4 w-4" />
          </div>
          <textarea
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
            rows="3"
            className={`w-full pl-14 pr-6 py-6 rounded-2xl bg-white/5 border ${errors.requirement ? 'border-[#ff4d4d]/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 transition-all duration-500 outline-none resize-none`}
            placeholder="BRIEFLY DESCRIBE YOUR REQUIREMENT..."
          ></textarea>
        </div>
        {errors.requirement && (
          <p className="text-[0.55rem] font-black text-[#ff4d4d] uppercase tracking-widest mt-2 ml-4">{errors.requirement}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 bg-[#1ba6d6] text-white text-[0.7rem] font-black uppercase tracking-[0.5em] mask-btn hover:scale-[1.02] active:scale-95 disabled:opacity-30 disabled:grayscale transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)] flex items-center justify-center group"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-4"></div>
            PROCESSING...
          </>
        ) : (
          <>
            INITIALIZE QUOTE
            <ChevronRight className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-[0.55rem] text-white/20 font-black uppercase tracking-[0.3em] text-center mt-6">
        Architecture deployment scheduled within <span className="text-white/40">24 cycles</span>.
      </p>
    </form>
  );
};

export default memo(QuickQuoteForm);
