import { useState } from 'react';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import InputField from './InputField';
import { sendPasswordResetNotification } from '../../services/notificationService';

const PasswordResetForm = ({ onResetSuccess, variant = 'default' }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1: Enter email, 2: Reset password

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = 'New password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Send notification about the password reset request
      await sendPasswordResetNotification({
        email: formData.email,
        action: 'request',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
      });

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(2); // Move to password reset step
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Password reset request error:', error);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (!validatePassword()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Send notification about the password reset
      await sendPasswordResetNotification({
        email: formData.email,
        action: 'reset',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
      });

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Call success callback if provided
        if (onResetSuccess) {
          onResetSuccess();
        }
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Password reset error:', error);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
        <div className="flex items-center justify-center mb-3">
          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">Password Reset Successful!</h3>
        <p className="text-green-700 dark:text-green-400 text-sm">
          Your password has been successfully reset. You can now log in with your new password.
        </p>
      </div>
    );
  }

  if (step === 1) {
    return (
      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Reset Your Password</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            'Send Reset Link'
          )}
        </button>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          <a href="/login" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
            Back to login
          </a>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handlePasswordReset} className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create New Password</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Enter your new password for {formData.email}
      </p>
      
      <div className="relative">
        <InputField
          id="password"
          name="password"
          label="New Password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a new password"
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
          label="Confirm New Password"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your new password"
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Resetting password...
          </>
        ) : (
          'Reset Password'
        )}
      </button>

      <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        <a href="/login" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
          Back to login
        </a>
      </div>
    </form>
  );
};

export default PasswordResetForm;