import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, CheckCircle2, Send, AlertCircle, ShieldCheck } from 'lucide-react';
import csrfService from '../../../services/csrfService';
import rateLimitService from '../../../services/rateLimitService';
import encryptionService from '../../../services/auth/encryptionService';
import { sendLoginNotification } from '../../../services/notification/notificationService';

const LoginForm = ({ onLoginSuccess, variant = 'default' }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [rateLimitError, setRateLimitError] = useState(null);
  
  const getClientIdentifier = () => {
    return `${window.location.hostname}_${navigator.userAgent}`;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Identifier required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Invalid protocol';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Auth key required';
    } else if (formData.password.trim().length < 6) {
      newErrors.password = 'Key strength insufficient';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const clientIdentifier = getClientIdentifier();
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'loginAttempts');
    
    if (!rateLimitCheck.allowed) {
      setRateLimitError(`Auth Lockout Active. Retry in ${Math.ceil(rateLimitCheck.retryAfter / 1000)}s.`);
      return;
    }
    
    setRateLimitError(null);
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const sanitizedData = {
      email: encryptionService.sanitizeInput(formData.email),
      password: encryptionService.sanitizeInput(formData.password),
      rememberMe: formData.rememberMe,
    };

    const requestData = {
      ...sanitizedData,
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    try {
      await sendLoginNotification(requestData);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        if (onLoginSuccess) onLoginSuccess();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Auth breakdown:', error);
    }
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
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Access Granted</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed uppercase tracking-widest opacity-60">Identity verified. Welcome to the Nexus.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
            noValidate
          >
            {rateLimitError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
                <AlertCircle className="text-red-500" size={20} />
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{rateLimitError}</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
                  placeholder="Neural Identity (Email)"
                />
                {errors.email && <p className="text-red-500 text-[0.6rem] uppercase tracking-widest mt-1 ml-4">{errors.email}</p>}
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md pr-12`}
                  placeholder="Security Cipher"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                {errors.password && <p className="text-red-500 text-[0.6rem] uppercase tracking-widest mt-1 ml-4">{errors.password}</p>}
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="peer hidden"
                  />
                  <div className="w-5 h-5 border-2 border-white/10 rounded-md peer-checked:bg-[#1ba6d6] peer-checked:border-[#1ba6d6] transition-all" />
                  <CheckCircle2 className="absolute inset-0 m-auto w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-[0.65rem] text-[#94a3b8] uppercase tracking-widest group-hover:text-white transition-colors">Persistent Link</span>
              </label>

              <a href="/password-reset" className="text-[0.65rem] text-[#1ba6d6] hover:text-white transition-colors uppercase tracking-widest font-bold">Restore Access</a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(27,166,214,0.3)" }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 bg-[#1ba6d6] hover:bg-[#1592bd] text-white font-black text-xs uppercase tracking-[0.4em] mask-btn transition-colors disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Authorize Node
                  <ShieldCheck size={18} />
                </>
              )}
            </motion.button>

            <div className="text-center">
              <p className="text-[0.6rem] text-[#94a3b8] uppercase tracking-widest opacity-40">
                New Identity? <a href="/register" className="text-[#1ba6d6] hover:text-white font-bold transition-colors">Register Protocol</a>
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(LoginForm);
