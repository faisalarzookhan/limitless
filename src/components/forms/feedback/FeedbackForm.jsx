import { useState, useCallback } from 'react';
import { HiOutlineChatAlt2, HiOutlineStar, HiOutlineUser, HiOutlineMail, HiOutlineLightBulb, HiOutlineCheckCircle } from 'react-icons/hi';
import InputField from '../InputField';
import TextAreaField from '../TextAreaField';

const FeedbackForm = ({ variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    category: '',
    message: '',
    wouldRecommend: null,
    improveSuggestion: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { value: '', label: 'Select Category' },
    { value: 'service-quality', label: 'Service Quality' },
    { value: 'support', label: 'Customer Support' },
    { value: 'product', label: 'Product/Service' },
    { value: 'website', label: 'Website Experience' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'delivery', label: 'Delivery Time' },
    { value: 'other', label: 'Other' }
  ];

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (formData.rating === 0) newErrors.rating = 'Please provide a rating';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.message.trim()) newErrors.message = 'Feedback message is required';
    if (formData.wouldRecommend === null) newErrors.wouldRecommend = 'Please let us know if you would recommend us';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const handleRecommendChange = (value) => {
    setFormData(prev => ({ ...prev, wouldRecommend: value }));
    if (errors.wouldRecommend) {
      setErrors(prev => ({ ...prev, wouldRecommend: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        rating: 0,
        category: '',
        message: '',
        wouldRecommend: null,
        improveSuggestion: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
          <HiOutlineCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Thank You for Your Feedback!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your feedback helps us improve our services. We appreciate your time in sharing your experience with us.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Submit Another Feedback
        </button>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg dark:shadow-soft-dark border border-gray-200 dark:border-dark-700 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <HiOutlineChatAlt2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Share Your Feedback
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Help us improve by sharing your experience with our services
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
              icon={HiOutlineUser}
              placeholder="Your Name"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              icon={HiOutlineMail}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              How would you rate our service?
              {errors.rating && <span className="text-red-600 dark:text-red-400 text-sm ml-2">{errors.rating}</span>}
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    formData.rating >= star
                      ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  <HiOutlineStar className={`w-8 h-8 ${formData.rating >= star ? 'fill-current' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.category 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-primary-500'
              } bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-all duration-300`}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Would you recommend us to others?
              {errors.wouldRecommend && <span className="text-red-600 dark:text-red-400 text-sm ml-2">{errors.wouldRecommend}</span>}
            </label>
            <div className="flex space-x-4">
              <label className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.wouldRecommend === true
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                  : 'border-gray-200 dark:border-dark-600 hover:border-green-300 dark:hover:border-green-500'
              }`}>
                <input
                  type="radio"
                  name="wouldRecommend"
                  checked={formData.wouldRecommend === true}
                  onChange={() => handleRecommendChange(true)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">Yes, definitely</span>
              </label>
              <label className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.wouldRecommend === false
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  : 'border-gray-200 dark:border-dark-600 hover:border-red-300 dark:hover:border-red-500'
              }`}>
                <input
                  type="radio"
                  name="wouldRecommend"
                  checked={formData.wouldRecommend === false}
                  onChange={() => handleRecommendChange(false)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">Not really</span>
              </label>
            </div>
          </div>

          <TextAreaField
            label="Your Feedback"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
            rows={4}
            placeholder="Please share your detailed feedback about our services, what you liked, and what could be improved..."
          />

          <TextAreaField
            label="Suggestions for Improvement"
            name="improveSuggestion"
            value={formData.improveSuggestion}
            onChange={handleChange}
            rows={3}
            placeholder="Do you have any specific suggestions on how we can improve our services?"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Processing...
              </div>
            ) : (
              'Submit Feedback'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;