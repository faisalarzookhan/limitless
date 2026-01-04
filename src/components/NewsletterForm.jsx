import { useState, memo } from 'react';
import { HiMail, HiUser, HiCheckCircle } from 'react-icons/hi';
import csrfService from '../services/csrfService';
import rateLimitService from '../services/rateLimitService';
import encryptionService from '../services/encryptionService';
import { sendNewsletterNotification } from '../services/notificationService';

const NewsletterForm = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
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
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
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
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'newsletterSignup');
    
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
      firstName: encryptionService.sanitizeInput(formData.firstName),
      email: encryptionService.sanitizeInput(formData.email),
    };

    // Add CSRF token to the data
    const requestData = {
      ...sanitizedData,
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    };

    // Send notification about the newsletter signup
    await sendNewsletterNotification(requestData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ email: '', firstName: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center" role="alert" aria-live="polite">
        <div className="flex items-center justify-center mb-3">
          <HiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">
          Subscribed!
        </h3>
        <p className="text-green-700 dark:text-green-400 text-sm">
          Thank you for subscribing to our newsletter.
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
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          placeholder="Your first name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'} bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Subscribing...
          </>
        ) : (
          'Subscribe to Newsletter'
        )}
      </button>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
};

export default memo(NewsletterForm);
