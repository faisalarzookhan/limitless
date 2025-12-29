import { useState } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlineLightBulb, HiCheckCircle } from 'react-icons/hi';
import { sendLeadGenerationNotification } from '../services/notificationService';

const QuickQuoteForm = ({ variant = 'default', onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification about the form submission
      await sendLeadGenerationNotification({
        ...formData,
        formType: 'quick-quote',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
      });

      // Reset form
      setFormData({ name: '', email: '', requirement: '' });
      setSubmitSuccess(true);
      
      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting quick quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
        <div className="flex items-center justify-center mb-3">
          <HiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">Thank You!</h3>
        <p className="text-green-700 dark:text-green-400 text-sm">
          We've received your requirement and will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              placeholder="Your full name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              placeholder="your@company.com"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Requirement *
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3">
            <HiOutlineLightBulb className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
            rows="3"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="Briefly describe your requirement..."
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
          'Get Quote'
        )}
      </button>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        We'll contact you within 24 hours with a personalized quote.
      </p>
    </form>
  );
};

export default QuickQuoteForm;