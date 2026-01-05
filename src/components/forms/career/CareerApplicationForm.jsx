import { useState, useCallback } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineBriefcase, HiOutlineDocumentText, HiOutlineLink, HiOutlineAcademicCap, HiOutlineCheckCircle } from 'react-icons/hi';
import InputField from '../InputField';
import TextAreaField from '../TextAreaField';
import SelectField from '../SelectField';

const CareerApplicationForm = ({ jobTitle = 'Open Position', variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: jobTitle,
    experience: '',
    education: '',
    portfolio: '',
    linkedin: '',
    availability: '',
    salaryExpectation: '',
    coverLetter: '',
    resume: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const experiences = [
    { value: '', label: 'Select Experience Level' },
    { value: 'entry', label: 'Entry Level (0-1 years)' },
    { value: 'junior', label: 'Junior (1-3 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior (5-8 years)' },
    { value: 'lead', label: 'Lead/Principal (8+ years)' }
  ];

  const educations = [
    { value: '', label: 'Select Education Level' },
    { value: 'high-school', label: 'High School' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'phd', label: 'PhD' },
    { value: 'other', label: 'Other' }
  ];

  const availability = [
    { value: '', label: 'Select Availability' },
    { value: 'immediate', label: 'Available Immediately' },
    { value: '2-weeks', label: '2 Weeks Notice' },
    { value: '1-month', label: '1 Month Notice' },
    { value: '2-months', label: '2 Months Notice' },
    { value: 'negotiable', label: 'Negotiable' }
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
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.education) newErrors.education = 'Education level is required';
    if (!formData.availability) newErrors.availability = 'Availability is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }));
        return;
      }
      if (!file.type.includes('pdf') && !file.type.includes('doc') && !file.type.includes('docx')) {
        setErrors(prev => ({ ...prev, resume: 'Please upload a PDF or DOC file' }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
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
        onSubmit({ ...formData, resume: formData.resume ? formData.resume.name : null });
      }
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: jobTitle,
        experience: '',
        education: '',
        portfolio: '',
        linkedin: '',
        availability: '',
        salaryExpectation: '',
        coverLetter: '',
        resume: null
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
          Application Submitted Successfully!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for applying for the {jobTitle} position. Our HR team will review your application and contact you within 5-7 business days.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg dark:shadow-soft-dark border border-gray-200 dark:border-dark-700 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <HiOutlineBriefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Apply for {jobTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join our team and help us build amazing solutions
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

          <InputField
            label="Position Applied For"
            name="position"
            value={formData.position}
            onChange={handleChange}
            error={errors.position}
            required
            icon={HiOutlineBriefcase}
            placeholder="Position Title"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Experience Level"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              error={errors.experience}
              required
              options={experiences}
              icon={HiOutlineBriefcase}
            />
            <SelectField
              label="Education Level"
              name="education"
              value={formData.education}
              onChange={handleChange}
              error={errors.education}
              required
              options={educations}
              icon={HiOutlineAcademicCap}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Portfolio URL (Optional)"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
              icon={HiOutlineLink}
              placeholder="https://your-portfolio.com"
            />
            <InputField
              label="LinkedIn Profile (Optional)"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              error={errors.linkedin}
              icon={HiOutlineLink}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              error={errors.availability}
              required
              options={availability}
              icon={HiOutlineDocumentText}
            />
            <InputField
              label="Salary Expectation (Optional)"
              name="salaryExpectation"
              value={formData.salaryExpectation}
              onChange={handleChange}
              error={errors.salaryExpectation}
              icon={HiOutlineDocumentText}
              placeholder="$80,000 - $100,000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Resume
              {errors.resume && <span className="text-red-600 dark:text-red-400 text-sm ml-2">{errors.resume}</span>}
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="resume"
                className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-lg cursor-pointer hover:border-primary-500 transition-colors duration-300"
              >
                <HiOutlineDocumentText className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                {formData.resume ? formData.resume.name : 'Upload Resume (PDF, DOC, DOCX)'}
              </label>
            </div>
            {errors.resume && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.resume}</p>
            )}
          </div>

          <TextAreaField
            label="Cover Letter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            error={errors.coverLetter}
            required
            rows={6}
            placeholder="Please tell us why you're interested in this position and how your skills and experience make you a great fit for our team..."
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
              'Submit Application'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerApplicationForm;