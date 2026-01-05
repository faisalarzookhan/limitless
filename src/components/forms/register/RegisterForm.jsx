import { useState, memo } from 'react';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from 'react-icons/hi';
import InputField from './InputField';
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
  
  // Get client identifier for rate limiting (using a combination of factors)
  const getClientIdentifier = () => {
    // In a real implementation, this would use the actual IP address from the server
    // For client-side, we'll use a combination of factors
    return `${window.location.hostname}_${navigator.userAgent}`;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error for this field when user starts typing
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
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.trim().length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password.trim() !== formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    // Check rate limit
    const clientIdentifier = getClientIdentifier();
    const rateLimitCheck = rateLimitService.checkLimit(clientIdentifier, 'registration');
    
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
      lastName: encryptionService.sanitizeInput(formData.lastName),
      email: encryptionService.sanitizeInput(formData.email),
      password: encryptionService.sanitizeInput(formData.password),
      confirmPassword: encryptionService.sanitizeInput(formData.confirmPassword),
      agreeToTerms: formData.agreeToTerms,
    };

    // Add CSRF token to the data
    const requestData = {
      ...sanitizedData,
      csrfToken: csrfService.getToken(),
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    try {
      // Send notification about the registration
      await sendRegistrationNotification(requestData);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Call success callback if provided
        if (onRegisterSuccess) {
          onRegisterSuccess();
        }

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Registration error:', error);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center" role="alert" aria-live="polite">
        <div className="flex items-center justify-center mb-3">
          <svg
            className="w-8 h-8 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">
          Registration Successful!
        </h3>
        <p className="text-green-700 dark:text-green-400 text-sm">
          Welcome! Your account has been created successfully.
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
        <InputField
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
          required
          error={errors.firstName}
          icon={HiOutlineUser}
        />

        <InputField
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          required
          error={errors.lastName}
          icon={HiOutlineUser}
        />
      </div>

      <InputField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your@email.com"
        required
        error={errors.email}
        icon={HiOutlineMail}
      />

      <div className="relative">
        <InputField
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
          error={errors.password}
          icon={HiOutlineLockClosed}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-11 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
        </button>
      </div>

      <div className="relative">
        <InputField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
          error={errors.confirmPassword}
          icon={HiOutlineLockClosed}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-11 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          {showConfirmPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
        </button>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="agreeToTerms"
            className="text-gray-700 dark:text-gray-300"
          >
            I agree to the{' '}
            <a
              href="/terms"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Privacy Policy
            </a>
          </label>
          {errors.agreeToTerms && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.agreeToTerms}
            </p>
          )}
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
            Creating account...
          </>
        ) : (
          'Create Account'
        )}
      </button>

      <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        Already have an account?{' '}
        <a
          href="/login"
          className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Sign in
        </a>
      </div>
    </form>
  );
};

export default memo(RegisterForm);
