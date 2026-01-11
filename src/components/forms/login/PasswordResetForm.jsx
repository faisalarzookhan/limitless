import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldAlert,
  CheckCircle2,
  Key,
  ArrowLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import csrfService from '../../../services/csrfService';
import rateLimitService from '../../../services/rateLimitService';
import encryptionService from '../../../services/auth/encryptionService';
import { sendPasswordResetNotification } from '../../../services/notification/notificationService';

const PasswordResetForm = ({ onResetSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [rateLimitError, setRateLimitError] = useState(null);
  const [step, setStep] = useState(1); // 1: Enter email, 2: Reset password

  const getClientIdentifier = () => {
    return `${window.location.hostname}_${navigator.userAgent}`;
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

  const validateEmail = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Neural link required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Invalid neural format';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!formData.password.trim()) {
      newErrors.password = 'Credential required';
    } else if (formData.password.trim().length < 6) {
      newErrors.password = 'Min. 6 characters required';
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Verification required';
    } else if (formData.password.trim() !== formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Credential mismatch';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = async e => {
    e.preventDefault();
    const clientIdentifier = getClientIdentifier();
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'passwordReset');
    
    if (!rateLimitCheck.allowed) {
      const retryAfterSeconds = Math.ceil(rateLimitCheck.retryAfter / 1000);
      setRateLimitError(`Node overloaded. Retry in ${retryAfterSeconds} cycles.`);
      return;
    }
    
    setRateLimitError(null);
    if (!validateEmail()) return;
    
    setIsSubmitting(true);
    const requestData = {
      email: encryptionService.sanitizeInput(formData.email),
      action: 'request',
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    try {
      await sendPasswordResetNotification(requestData);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(2);
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Sequence fault:', error);
    }
  };

  const handlePasswordReset = async e => {
    e.preventDefault();
    const clientIdentifier = getClientIdentifier();
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'passwordReset');
    
    if (!rateLimitCheck.allowed) {
      const retryAfterSeconds = Math.ceil(rateLimitCheck.retryAfter / 1000);
      setRateLimitError(`Node overloaded. Retry in ${retryAfterSeconds} cycles.`);
      return;
    }
    
    setRateLimitError(null);
    if (!validatePassword()) return;
    
    setIsSubmitting(true);
    const requestData = {
      email: encryptionService.sanitizeInput(formData.email),
      password: encryptionService.sanitizeInput(formData.password),
      confirmPassword: encryptionService.sanitizeInput(formData.confirmPassword),
      action: 'reset',
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    try {
      await sendPasswordResetNotification(requestData);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        if (onResetSuccess) onResetSuccess();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Sequence fault:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#12161b]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-full border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">
              Credentials Reset
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Your neural credentials have been updated successfully. Proceed to login node.
            </p>
            <a
              href="/login"
              className="inline-flex items-center gap-2 text-[#1ba6d6] font-bold text-sm hover:underline"
            >
              Access Command Center <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        ) : (
          <motion.div
            key={step === 1 ? 'step-1' : 'step-2'}
            initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
            className="bg-[#12161b]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl"
          >
            <div className="mb-8">
              <div className="w-12 h-12 bg-[#1ba6d6]/10 rounded-xl flex items-center justify-center mb-4 border border-[#1ba6d6]/20">
                <Key className="w-6 h-6 text-[#1ba6d6]" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
                {step === 1 ? 'Neural Recovery' : 'New Credential'}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {step === 1 
                  ? 'Request an access key for your neural uplink.' 
                  : `Configuring credentials for ${formData.email}`}
              </p>
            </div>

            {rateLimitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
              >
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <p className="text-[11px] font-bold text-red-400 uppercase tracking-tighter">{rateLimitError}</p>
              </motion.div>
            )}

            <form onSubmit={step === 1 ? handleEmailSubmit : handlePasswordReset} className="space-y-6" noValidate>
              {step === 1 ? (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
                    <Mail className="w-3 h-3 text-[#1ba6d6]" /> Neural Uplink
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all text-sm`}
                    placeholder="protocol@limitless.com"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.email}</p>}
                </div>
              ) : (
                <>
                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
                      <Lock className="w-3 h-3 text-[#1ba6d6]" /> New Credential
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.password ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all text-sm`}
                      placeholder="******"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-9 text-gray-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    {errors.password && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.password}</p>}
                  </div>

                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
                      <Lock className="w-3 h-3 text-[#1ba6d6]" /> Verify Credential
                    </label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all text-sm`}
                      placeholder="******"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-9 text-gray-500 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    {errors.confirmPassword && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.confirmPassword}</p>}
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1ba6d6] hover:bg-[#1ba6d6]/90 text-white font-black rounded-2xl transition-all shadow-xl shadow-[#1ba6d6]/20 flex items-center justify-center gap-2 group disabled:opacity-50 text-sm uppercase tracking-tighter"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Executing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    {step === 1 ? 'Initiate Recovery Link' : 'Secure New Credentials'}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center pt-4">
                <a
                  href="/login"
                  className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase hover:text-[#1ba6d6] transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" /> Back to Command Center
                </a>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PasswordResetForm;

