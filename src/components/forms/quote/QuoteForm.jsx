import { useState, useCallback } from 'react';
import { HiOutlineLightBulb, HiOutlineBriefcase, HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineDocumentText, HiOutlineCurrencyDollar, HiOutlineCalendar, HiOutlineCheckCircle } from 'react-icons/hi';
import { InputField } from '../InputField';
import { TextAreaField } from '../TextAreaField';
import { SelectField } from '../SelectField';

const QuoteForm = ({ variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    serviceInterest: []
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'custom-software', label: 'Custom Software' },
    { value: 'crm-system', label: 'CRM System' },
    { value: 'business-automation', label: 'Business Automation' },
    { value: 'ai-integration', label: 'AI Integration' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  const budgets = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'tbd', label: 'To Be Determined' }
  ];

  const timelines = [
    { value: '', label: 'Select Timeline' },
    { value: 'asap', label: 'As Soon As Possible' },
    { value: '1-2-months', label: '1-2 Months' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-12-months', label: '6-12 Months' },
    { value: '1-year-plus', label: '1 Year Plus' },
    { value: 'not-sure', label: 'Not Sure Yet' }
  ];

  const serviceInterests = [
    { value: 'web-dev', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile Applications' },
    { value: 'custom-software', label: 'Custom Software' },
    { value: 'crm', label: 'CRM Systems' },
    { value: 'automation', label: 'Business Automation' },
    { value: 'ai', label: 'AI Integration' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'maintenance', label: 'Maintenance & Support' }
  ];

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.budget) newErrors.budget = 'Budget range is required';
    if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    if (!formData.message.trim()) newErrors.message = 'Project description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceInterestChange = (value) => {
    setFormData(prev => {
      const newInterests = prev.serviceInterest.includes(value)
        ? prev.serviceInterest.filter(item => item !== value)
        : [...prev.serviceInterest, value];
      return { ...prev, serviceInterest: newInterests };
    });
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        serviceInterest: []
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
          Thank You for Your Request!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We've received your quote request and will contact you within 24 hours to discuss your project details.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg dark:shadow-soft-dark border border-gray-200 dark:border-dark-700 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <HiOutlineLightBulb className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Get Your Custom Quote
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tell us about your project and we'll provide a personalized quote
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              required
              icon={HiOutlineUser}
              placeholder="John"
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              required
              icon={HiOutlineUser}
              placeholder="Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              icon={HiOutlineMail}
              placeholder="john@example.com"
            />
            <InputField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
              icon={HiOutlinePhone}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <InputField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
            required
            icon={HiOutlineBriefcase}
            placeholder="Your Company Name"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SelectField
              label="Project Type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              error={errors.projectType}
              required
              options={projectTypes}
              icon={HiOutlineDocumentText}
            />
            <SelectField
              label="Budget Range"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              error={errors.budget}
              required
              options={budgets}
              icon={HiOutlineCurrencyDollar}
            />
            <SelectField
              label="Timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              error={errors.timeline}
              required
              options={timelines}
              icon={HiOutlineCalendar}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Services of Interest
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {serviceInterests.map((service) => (
                <label
                  key={service.value}
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                    formData.serviceInterest.includes(service.value)
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    value={service.value}
                    checked={formData.serviceInterest.includes(service.value)}
                    onChange={() => handleServiceInterestChange(service.value)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{service.label}</span>
                </label>
              ))}
            </div>
          </div>

          <TextAreaField
            label="Project Description"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
            rows={5}
            placeholder="Please describe your project requirements, goals, and any specific features you need..."
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
              'Request Custom Quote'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;