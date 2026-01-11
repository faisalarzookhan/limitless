import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Building2,
  Clock,
  Code2,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Settings,
  DollarSign,
  FileText
} from 'lucide-react';
import csrfService from '../services/csrfService';
import rateLimitService from '../services/rateLimitService';
import encryptionService from '../services/auth/encryptionService';
import { sendLeadGenerationNotification } from '../services/notification/notificationService';

const DedicatedTeamForm = ({ variant = 'default', onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectScope: '',
    timeline: '',
    techStack: '',
    budget: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [rateLimitError, setRateLimitError] = useState(null);
  
  // Get client identifier for rate limiting (using a combination of factors)
  const getClientIdentifier = () => {
    // In a real implementation, this would use the actual IP address from the server
    // For client-side, we'll use a combination of factors
    return `${window.location.hostname}_${navigator.userAgent}`;
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters';
    }
    
    // Project scope validation
    if (!formData.projectScope.trim()) {
      newErrors.projectScope = 'Project scope is required';
    } else if (formData.projectScope.trim().length < 10) {
      newErrors.projectScope = 'Project scope must be at least 10 characters';
    }
    
    // Timeline validation
    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
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
    
    // Check rate limit
    const clientIdentifier = getClientIdentifier();
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'dedicatedTeamForm');
    
    if (!rateLimitCheck.allowed) {
      const retryAfterSeconds = Math.ceil(rateLimitCheck.retryAfter / 1000);
      setRateLimitError(`Rate limit exceeded. Please try again in ${retryAfterSeconds} seconds.`);
      return;
    }
    
    // Clear any previous rate limit error
    setRateLimitError(null);
    
    // Validate form first
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Sanitize input data
    const sanitizedData = {
      fullName: encryptionService.sanitizeInput(formData.fullName),
      email: encryptionService.sanitizeInput(formData.email),
      company: encryptionService.sanitizeInput(formData.company),
      projectScope: encryptionService.sanitizeInput(formData.projectScope),
      timeline: encryptionService.sanitizeInput(formData.timeline),
      techStack: encryptionService.sanitizeInput(formData.techStack),
      budget: encryptionService.sanitizeInput(formData.budget),
      requirements: encryptionService.sanitizeInput(formData.requirements),
    };

    // Add CSRF token to the data
    const requestData = {
      ...sanitizedData,
      formType: 'dedicated-team',
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    try {
      // Send notification about the form submission
      await sendLeadGenerationNotification(requestData);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectScope: '',
        timeline: '',
        techStack: '',
        budget: '',
        requirements: '',
      });
      setSubmitSuccess(true);

      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting dedicated team form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        className="bg-[#1ba6d6]/5 border border-[#1ba6d6]/30 rounded-[2.5rem] p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none"></div>
        <div className="flex items-center justify-center mb-8 relative z-10">
          <div className="w-20 h-20 bg-[#1ba6d6] rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(27,166,214,0.4)]">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-black text-white uppercase tracking-[0.3em] mb-6 relative z-10">
          Application Received
        </h3>
        <p className="text-[0.65rem] text-white/50 font-black uppercase tracking-widest leading-relaxed max-w-md mx-auto relative z-10">
          Your request for dedicated neural resources has been logged. Our deployment strategists will establish a secure connection shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {rateLimitError && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5" role="alert"
        >
          <p className="text-red-500 text-[0.6rem] font-black uppercase tracking-widest text-center">{rateLimitError}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label
            htmlFor="fullName"
            className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
          >
            Operator Identity *
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={`w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border ${errors.fullName ? 'border-red-500/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none`}
              placeholder="FULL NAME"
            />
          </div>
          {errors.fullName && (
            <p className="text-[0.55rem] font-black text-red-500 uppercase tracking-widest ml-1">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-3">
          <label
            htmlFor="email"
            className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
          >
            Communication Node *
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none`}
              placeholder="OFFICIAL@NODE.COM"
            />
          </div>
          {errors.email && (
            <p className="text-[0.55rem] font-black text-red-500 uppercase tracking-widest ml-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label
          htmlFor="company"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
        >
          Corporation *
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Building2 className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
          </div>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className={`w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border ${errors.company ? 'border-red-500/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none`}
            placeholder="ORGANIZATION NAME"
          />
        </div>
        {errors.company && (
          <p className="text-[0.55rem] font-black text-red-500 uppercase tracking-widest ml-1">{errors.company}</p>
        )}
      </div>

      <div className="space-y-3">
        <label
          htmlFor="projectScope"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
        >
          Mission Blueprint *
        </label>
        <div className="relative group">
          <div className="absolute top-6 left-5 flex items-center pointer-events-none">
            <FileText className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
          </div>
          <textarea
            id="projectScope"
            name="projectScope"
            value={formData.projectScope}
            onChange={handleChange}
            required
            rows="3"
            className={`w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border ${errors.projectScope ? 'border-red-500/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none resize-none`}
            placeholder="DESCRIBE ARCHITECTURAL OBJECTIVES..."
          ></textarea>
        </div>
        {errors.projectScope && (
          <p className="text-[0.55rem] font-black text-red-500 uppercase tracking-widest ml-1">{errors.projectScope}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label
            htmlFor="timeline"
            className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
          >
            Temporal Constraint *
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Clock className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            </div>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className={`w-full pl-12 pr-12 py-5 rounded-2xl bg-white/5 border ${errors.timeline ? 'border-red-500/50' : 'border-white/5'} focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white appearance-none outline-none transition-all duration-500 cursor-pointer`}
            >
              <option value="" className="bg-[#0e1114]">SELECT CYCLE</option>
              <option value="1-3 months" className="bg-[#0e1114]">1-3 QUARTERS</option>
              <option value="3-6 months" className="bg-[#0e1114]">3-6 QUARTERS</option>
              <option value="6-12 months" className="bg-[#0e1114]">6-12 QUARTERS</option>
              <option value="12+ months" className="bg-[#0e1114]">ANNUAL+</option>
              <option value="ongoing" className="bg-[#0e1114]">PERPETUAL</option>
            </select>
          </div>
          {errors.timeline && (
            <p className="text-[0.55rem] font-black text-red-500 uppercase tracking-widest ml-1">{errors.timeline}</p>
          )}
        </div>

        <div className="space-y-3">
          <label
            htmlFor="budget"
            className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
          >
            Resource Allocation
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <DollarSign className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            </div>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full pl-12 pr-12 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white appearance-none outline-none transition-all duration-500 cursor-pointer"
            >
              <option value="" className="bg-[#0e1114]">SELECT BAND</option>
              <option value="under-10k" className="bg-[#0e1114]">UNDER $10K</option>
              <option value="10k-25k" className="bg-[#0e1114]">$10K - $25K</option>
              <option value="25k-50k" className="bg-[#0e1114]">$25K - $50K</option>
              <option value="50k-100k" className="bg-[#0e1114]">$50K - $100K</option>
              <option value="100k-250k" className="bg-[#0e1114]">$100K - $250K</option>
              <option value="250k-plus" className="bg-[#0e1114]">$250K+</option>
              <option value="tbd" className="bg-[#0e1114]">TO BE DEFINED</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label
          htmlFor="techStack"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
        >
          Neural Frameworks
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Code2 className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
          </div>
          <input
            type="text"
            id="techStack"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none"
            placeholder="E.G. REACT, NODE.JS, AWS, KUBERNETES"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label
          htmlFor="requirements"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-1"
        >
          Specialized Protocols
        </label>
        <div className="relative group">
          <div className="absolute top-6 left-5 flex items-center pointer-events-none">
            <Zap className="h-4 w-4 text-white/20 group-focus-within:text-[#ffc957] transition-colors" />
          </div>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="3"
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#ffc957]/50 focus:bg-white/10 text-[0.75rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none resize-none"
            placeholder="ADDITIONAL SECURITY OR INFRASTRUCTURE REQUIREMENTS..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 bg-[#1ba6d6] text-white text-[0.8rem] font-black uppercase tracking-[0.4em] mask-btn hover:scale-[1.02] active:scale-95 disabled:opacity-30 transition-all duration-500 shadow-[0_0_40px_rgba(27,166,214,0.3)] flex items-center justify-center group"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-4"></div>
            ESTABLISHING CONNECTION...
          </>
        ) : (
          <>
            INITIATE DEPLOYMENT PROTOCOL
            <ChevronRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </>
        )}
      </button>

      <div className="flex flex-wrap justify-center gap-8 py-4 opacity-50">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1ba6d6]" />
          <span className="text-[0.5rem] font-black uppercase tracking-[0.2em] text-white">Encrypted Node</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="w-3.5 h-3.5 text-[#ffc957]" />
          <span className="text-[0.5rem] font-black uppercase tracking-[0.2em] text-white">Priority Relay</span>
        </div>
        <div className="flex items-center space-x-2">
          <Globe className="w-3.5 h-3.5 text-white" />
          <span className="text-[0.5rem] font-black uppercase tracking-[0.2em] text-white">Global Perimeter</span>
        </div>
      </div>
    </form>
  );
};

export default memo(DedicatedTeamForm);
