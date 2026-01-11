import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle2, UserPlus, AlertCircle, ShieldCheck } from 'lucide-react';
import csrfService from '../../../services/csrfService';
import rateLimitService from '../../../services/rateLimitService';
import encryptionService from '../../../services/auth/encryptionService';
import { sendRegistrationNotification } from '../../../services/notification/notificationService';

const RegisterForm = ({ onRegisterSuccess, variant = 'default' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Primary identifier required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Secondary identifier required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Neural channel required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Invalid protocol';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Auth key required';
    } else if (formData.password.trim().length < 6) {
      newErrors.password = 'Key strength below threshold';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Keys non-synchronous';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Protocol agreement essential';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const clientIdentifier = getClientIdentifier();
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'registration');
    
    if (!rateLimitCheck.allowed) {
      setRateLimitError(`Registry Lock Active. Retry in ${Math.ceil(rateLimitCheck.retryAfter / 1000)}s.`);
      return;
    }
    
    setRateLimitError(null);
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const sanitizedData = {
      firstName: encryptionService.sanitizeInput(formData.firstName),
      lastName: encryptionService.sanitizeInput(formData.lastName),
      email: encryptionService.sanitizeInput(formData.email),
      password: encryptionService.sanitizeInput(formData.password),
      confirmPassword: encryptionService.sanitizeInput(formData.confirmPassword),
      agreeToTerms: formData.agreeToTerms,
    };

    const requestData = {
      ...sanitizedData,
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    try {
      await sendRegistrationNotification(requestData);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        if (onRegisterSuccess) onRegisterSuccess();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Registry breakdown:', error);
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
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Registry Complete</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed uppercase tracking-widest opacity-60">Identity established. Welcome to the Nexus architecture.</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
                  placeholder="First Name"
                />
              </div>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
                placeholder="Communication Channel (Email)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md pr-12`}
                  placeholder="Security Key"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md pr-12`}
                  placeholder="Confirm Key"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="px-2">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="peer hidden"
                  />
                  <div className={`w-5 h-5 border-2 rounded-md transition-all ${errors.agreeToTerms ? 'border-red-500' : 'border-white/10 peer-checked:bg-[#1ba6d6] peer-checked:border-[#1ba6d6]'}`} />
                  <CheckCircle2 className="absolute inset-0 m-auto w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <p className="text-[0.65rem] text-[#94a3b8] uppercase tracking-widest leading-relaxed">
                  I accept all <a href="/terms-of-service" className="text-[#1ba6d6] hover:text-white transition-colors font-bold">Protocols</a> and <a href="/privacy-policy" className="text-[#1ba6d6] hover:text-white transition-colors font-bold">Privacy Shields</a>.
                </p>
              </label>
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
                  Initialize Identity
                  <UserPlus size={18} />
                </>
              )}
            </motion.button>

            <div className="text-center">
              <p className="text-[0.6rem] text-[#94a3b8] uppercase tracking-widest opacity-40">
                Existing Node? <a href="/login" className="text-[#1ba6d6] hover:text-white font-bold transition-colors">Authorize Access</a>
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(RegisterForm);
