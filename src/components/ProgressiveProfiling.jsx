import { useState, useEffect } from 'react';
import { HiUser, HiBriefcase, HiLightBulb, HiCheckCircle, HiArrowRight, HiArrowLeft, HiSparkles } from 'react-icons/hi';

const ProgressiveProfiling = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profileData, setProfileData] = useState({});
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const steps = [
    {
      id: 'basic-info',
      title: 'Basic Information',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'John Doe' },
        { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'john@example.com' },
        { name: 'company', label: 'Company Name', type: 'text', required: true, placeholder: 'Your Company' }
      ],
      icon: HiUser,
      description: 'Start with the basics to personalize your experience'
    },
    {
      id: 'role-info',
      title: 'Role & Industry',
      fields: [
        { name: 'role', label: 'Your Role', type: 'select', options: ['CTO', 'CFO', 'CEO', 'Product Manager', 'Developer', 'Other'], required: true },
        { name: 'industry', label: 'Industry', type: 'select', options: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Other'], required: true },
        { name: 'companySize', label: 'Company Size', type: 'select', options: ['1-10', '11-50', '51-200', '201-500', '500+'], required: true }
      ],
      icon: HiBriefcase,
      description: 'Help us understand your business context'
    },
    {
      id: 'needs',
      title: 'Business Needs',
      fields: [
        { name: 'primaryNeed', label: 'Primary Need', type: 'select', options: ['Web Development', 'Mobile App', 'HR Management', 'Project Tracking', 'AI/ML', 'Other'], required: true },
        { name: 'timeline', label: 'Timeline', type: 'select', options: ['Asap', '1-3 months', '3-6 months', '6+ months'], required: true },
        { name: 'budgetRange', label: 'Budget Range', type: 'select', options: ['Under $10K', '$10K-$50K', '$50K-$100K', '$100K+', 'Not Sure'], required: false }
      ],
      icon: HiLightBulb,
      description: 'Tell us about your specific requirements'
    },
    {
      id: 'preferences',
      title: 'Preferences',
      fields: [
        { name: 'communication', label: 'Preferred Communication', type: 'select', options: ['Email', 'Phone', 'Slack', 'Teams'], required: false },
        { name: 'updates', label: 'Email Updates', type: 'checkbox', required: false, description: 'Receive product updates and insights' },
        { name: 'contact', label: 'Contact Me', type: 'checkbox', required: false, description: 'Allow our team to reach out' }
      ],
      icon: HiSparkles,
      description: 'Set your preferences for the best experience'
    }
  ];

  const handleFieldChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep];
    const requiredFields = currentStepData.fields.filter(field => field.required);
    
    for (const field of requiredFields) {
      if (!profileData[field.name]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      onComplete(profileData);
    }
  };

  const isLastStep = currentStep === steps.length - 1;
  const isValid = validateCurrentStep();

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft border border-gray-100 dark:border-dark-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Personalize Your Experience</h3>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Skip
          </button>
        </div>
        
        <div className="flex items-center space-x-3 mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep || completedSteps.has(index)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {completedSteps.has(index) ? <HiCheckCircle className="w-4 h-4" /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-12 ${
                    index < currentStep ? 'bg-blue-500' : 'bg-gray-200 dark:bg-dark-600'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {steps[currentStep].description}
        </p>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
            {React.createElement(steps[currentStep].icon, { className: "w-6 h-6 text-white" })}
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            {steps[currentStep].title}
          </h4>
        </div>

        <div className="space-y-4">
          {steps[currentStep].fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              
              {field.type === 'select' ? (
                <select
                  value={profileData[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={field.name}
                    checked={profileData[field.name] || false}
                    onChange={(e) => handleFieldChange(field.name, e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={field.name} className="ml-2 block text-sm text-gray-900 dark:text-white">
                    {field.description || field.label}
                  </label>
                </div>
              ) : (
                <input
                  type={field.type}
                  value={profileData[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
            }`}
          >
            Previous
          </button>
          
          {isLastStep ? (
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={`px-6 py-3 rounded-lg font-medium ${
                isValid
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                  : 'bg-gray-200 dark:bg-dark-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              Complete Setup
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isValid}
              className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 ${
                isValid
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                  : 'bg-gray-200 dark:bg-dark-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <HiArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressiveProfiling;