import { useState } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlineBriefcase, HiOutlineGlobe, HiOutlineCurrencyDollar, HiOutlineLightBulb, HiCheckCircle } from 'react-icons/hi';
import { sendLeadGenerationNotification } from '../services/notificationService';

const PartnerWhiteLabelForm = ({ variant = 'default', onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    companySize: '',
    region: '',
    annualTurnover: '',
    partnershipType: '',
    businessModel: '',
    existingClients: '',
    specialization: ''
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
        formType: 'partner-whitelabel',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
      });

      // Reset form
      setFormData({ 
        fullName: '', 
        email: '', 
        companyName: '', 
        companySize: '', 
        region: '', 
        annualTurnover: '', 
        partnershipType: '',
        businessModel: '',
        existingClients: '',
        specialization: '' 
      });
      setSubmitSuccess(true);
      
      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting partner/white-label form:', error);
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
        <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">Partnership Application Submitted!</h3>
        <p className="text-green-700 dark:text-green-400 text-sm">
          Thank you for your interest in our partnership program. We'll review your application and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Company Name *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineBriefcase className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="Your company name"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Company Size *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineBriefcase className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select company size</option>
              <option value="1-10 employees">1-10 employees</option>
              <option value="11-50 employees">11-50 employees</option>
              <option value="51-200 employees">51-200 employees</option>
              <option value="201-500 employees">201-500 employees</option>
              <option value="500+ employees">500+ employees</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Primary Region *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineGlobe className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select region</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Latin America">Latin America</option>
              <option value="Middle East & Africa">Middle East & Africa</option>
              <option value="Global">Global</option>
            </select>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="annualTurnover" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Annual Turnover *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineCurrencyDollar className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="annualTurnover"
            name="annualTurnover"
            value={formData.annualTurnover}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select annual turnover</option>
            <option value="under-1m">Under $1M</option>
            <option value="1m-5m">$1M - $5M</option>
            <option value="5m-25m">$5M - $25M</option>
            <option value="25m-100m">$25M - $100M</option>
            <option value="100m-500m">$100M - $500M</option>
            <option value="500m-plus">$500M+</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Partnership Type *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineBriefcase className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="partnershipType"
              name="partnershipType"
              value={formData.partnershipType}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select partnership type</option>
              <option value="Reseller">Reseller</option>
              <option value="System Integrator">System Integrator</option>
              <option value="Technology Partner">Technology Partner</option>
              <option value="Referral Partner">Referral Partner</option>
              <option value="White-Label Partner">White-Label Partner</option>
              <option value="Alliance Partner">Alliance Partner</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Business Model *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineLightBulb className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="businessModel"
              name="businessModel"
              value={formData.businessModel}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select business model</option>
              <option value="B2B Services">B2B Services</option>
              <option value="SaaS Reseller">SaaS Reseller</option>
              <option value="Consulting">Consulting</option>
              <option value="System Integration">System Integration</option>
              <option value="Product Distribution">Product Distribution</option>
              <option value="Hybrid Model">Hybrid Model</option>
            </select>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Specialization / Industry Focus
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineLightBulb className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="e.g., Healthcare, Finance, E-commerce, etc."
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="existingClients" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Brief Description of Existing Client Base
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3">
            <HiOutlineBriefcase className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="existingClients"
            name="existingClients"
            value={formData.existingClients}
            onChange={handleChange}
            rows="3"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            placeholder="Describe your existing client base, number of clients, and key industries served..."
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
          'Apply for Partnership'
        )}
      </button>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        We'll review your partnership application and contact you within 48 hours to discuss potential collaboration opportunities.
      </p>
    </form>
  );
};

export default PartnerWhiteLabelForm;