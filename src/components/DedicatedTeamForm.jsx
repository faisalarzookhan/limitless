import { useState, memo } from 'react';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineCode,
  HiOutlineLightBulb,
  HiCheckCircle,
} from 'react-icons/hi';
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
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center" role="alert" aria-live="polite">
        <div className="flex items-center justify-center mb-3">
          <HiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">
          Application Submitted!
        </h3>
        <p className="text-green-700 dark:text-green-400 text-sm">
          Thank you for your interest in our dedicated team services. We'll
          review your application and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {rateLimitError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4" role="alert" aria-live="polite">
          <p className="text-red-700 dark:text-red-300 text-sm">{rateLimitError}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'} bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300`}
              placeholder="Your full name"
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Work Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'} bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300`}
              placeholder="your@company.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Company Name *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineBriefcase className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'} bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300`}
            placeholder="Your company name"
          />
        </div>
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="projectScope"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Project Scope *
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3">
            <HiOutlineLightBulb className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="projectScope"
            name="projectScope"
            value={formData.projectScope}
            onChange={handleChange}
            required
            rows="3"
            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.projectScope ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'} bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300`}
            placeholder="Describe your project scope and objectives..."
          ></textarea>
        </div>
        {errors.projectScope && (
          <p className="mt-1 text-sm text-red-600">{errors.projectScope}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="timeline"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Project Timeline *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineClock className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.timeline ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'} bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300`}
            >
              <option value="">Select timeline</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="12+ months">12+ months</option>
              <option value="ongoing">Ongoing/Long-term</option>
            </select>
          </div>
          {errors.timeline && (
            <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Budget Range
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineBriefcase className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select budget range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="250k-plus">$250,000+</option>
              <option value="tbd">To be determined</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="techStack"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Preferred Tech Stack
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineCode className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="techStack"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="e.g., React, Node.js, AWS, etc."
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="requirements"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Additional Requirements
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3">
            <HiOutlineLightBulb className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="3"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="Any additional requirements, constraints, or specific needs..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Submitting...
          </>
        ) : (
          'Apply for Dedicated Team'
        )}
      </button>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        We'll review your application and contact you within 24-48 hours to
        discuss your project needs.
      </p>
    </form>
  );
};

export default memo(DedicatedTeamForm);
