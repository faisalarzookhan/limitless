import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import csrfService from '../../../services/csrfService';
import rateLimitService from '../../../services/rateLimitService';
import encryptionService from '../../../services/auth/encryptionService';
import { sendNewsletterNotification } from '../../../services/notification/notificationService';

const NewsletterForm = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
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
    if (!formData.email.trim()) {
      newErrors.email = 'Channel required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Invalid protocol';
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
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'newsletterSignup');
    
    if (!rateLimitCheck.allowed) {
      setRateLimitError(`Flood protection active. Retry in ${Math.ceil(rateLimitCheck.retryAfter / 1000)}s.`);
      return;
    }
    
    setRateLimitError(null);
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    const sanitizedData = {
      firstName: encryptionService.sanitizeInput(formData.firstName),
      email: encryptionService.sanitizeInput(formData.email),
    };

    const requestData = {
      ...sanitizedData,
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    };

    await sendNewsletterNotification(requestData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ email: '', firstName: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#1ba6d6]/10 border border-[#1ba6d6]/20 backdrop-blur-xl rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-[#1ba6d6] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(27,166,214,0.3)]">
              <CheckCircle2 color="white" size={24} />
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">Nexus Linked</h3>
            <p className="text-[#94a3b8] text-[0.6rem] uppercase tracking-wider">Communication channel established successfully.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            {rateLimitError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-2">
                <AlertCircle className="text-red-500 w-4 h-4" />
                <p className="text-red-500 text-[0.6rem] font-bold uppercase tracking-widest">{rateLimitError}</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md"
                  placeholder="First Name"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
                  placeholder="Intelligence Feed Email"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01, boxShadow: "0 0 15px rgba(27,166,214,0.2)" }}
              whileTap={{ scale: 0.99 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 bg-[#1ba6d6] hover:bg-[#1592bd] text-white font-black text-[0.6rem] uppercase tracking-[0.3em] mask-btn transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Connect to Feed
                  <Send size={12} />
                </>
              )}
            </motion.button>
            
            <p className="text-[0.5rem] text-[#94a3b8] opacity-40 uppercase tracking-[0.2em] text-center">
              Protocol: Privacy Encrypted. Zero Spam.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(NewsletterForm);
