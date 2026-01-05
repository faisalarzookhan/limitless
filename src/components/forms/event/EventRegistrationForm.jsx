import { useState, useCallback } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineTicket, HiOutlineCheckCircle } from 'react-icons/hi';
import { InputField } from '../InputField';
import { SelectField } from '../SelectField';

const EventRegistrationForm = ({ eventName = 'Upcoming Event', eventDate = 'TBD', variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    attendanceType: '',
    dietaryRestrictions: '',
    specialRequirements: '',
    newsletterOptIn: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    { value: '', label: 'Select Industry' },
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'government', label: 'Government' },
    { value: 'other', label: 'Other' }
  ];

  const attendanceTypes = [
    { value: '', label: 'Select Attendance Type' },
    { value: 'in-person', label: 'In-Person' },
    { value: 'virtual', label: 'Virtual (Online)' },
    { value: 'hybrid', label: 'Hybrid (In-Person or Virtual)' }
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
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.attendanceType) newErrors.attendanceType = 'Attendance type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        industry: '',
        attendanceType: '',
        dietaryRestrictions: '',
        specialRequirements: '',
        newsletterOptIn: false
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
          Registration Confirmed!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for registering for {eventName} on {eventDate}. A confirmation email has been sent to {formData.email}.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Register Another Attendee
        </button>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg dark:shadow-soft-dark border border-gray-200 dark:border-dark-700 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <HiOutlineTicket className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Register for {eventName}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {eventDate} | Secure your spot at this exclusive event
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
              placeholder="john.doe@example.com"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              required
              icon={HiOutlineBriefcase}
              placeholder="Your Company"
            />
            <InputField
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              error={errors.jobTitle}
              required
              icon={HiOutlineBriefcase}
              placeholder="Your Title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              error={errors.industry}
              required
              options={industries}
              icon={HiOutlineBriefcase}
            />
            <SelectField
              label="Attendance Type"
              name="attendanceType"
              value={formData.attendanceType}
              onChange={handleChange}
              error={errors.attendanceType}
              required
              options={attendanceTypes}
              icon={HiOutlineLocationMarker}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Dietary Restrictions (Optional)
            </label>
            <textarea
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={(e) => handleChange('dietaryRestrictions', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              placeholder="Please let us know about any dietary restrictions or allergies..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Special Requirements (Optional)
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={(e) => handleChange('specialRequirements', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              placeholder="Do you have any special requirements or accessibility needs?"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletterOptIn"
              checked={formData.newsletterOptIn}
              onChange={(e) => handleChange('newsletterOptIn', e.target.checked)}
              className="mt-1 mr-3 h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-dark-600 rounded"
            />
            <label htmlFor="newsletterOptIn" className="text-sm text-gray-700 dark:text-gray-300">
              I would like to receive updates about future events and company news
            </label>
          </div>

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
              'Register Now'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;