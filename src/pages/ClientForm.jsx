import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiCheckCircle,
  HiArrowRight,
  HiArrowLeft,
  HiSparkles,
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiUser,
  HiMail,
  HiPhone,
  HiOfficeBuilding,
  HiGlobe,
  HiCalendar,
  HiCurrencyDollar,
  HiDocument,
  HiChip,
  HiServer,
  HiShoppingCart,
  HiAcademicCap,
} from "react-icons/hi";

const ClientForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    role: "",

    // Step 2: Project Information
    projectType: [],
    projectTitle: "",
    projectDescription: "",
    industry: "",
    targetAudience: "",

    // Step 3: Requirements & Features
    specificFeatures: [],
    customFeatures: "",
    platforms: [],
    integrations: "",

    // Step 4: Budget & Timeline
    budget: "",
    customBudget: "",
    timeline: "",
    startDate: "",
    priority: "",

    // Step 5: Additional Information
    existingSystems: "",
    designPreferences: "",
    competitors: "",
    successMetrics: "",
    additionalNotes: "",

    // Step 6: How Did You Hear
    referralSource: "",
    consent: false,
  });

  const totalSteps = 6;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name !== "consent") {
      setFormData((prev) => {
        const currentArray = prev[name] || [];
        if (checked) {
          return { ...prev, [name]: [...currentArray, value] };
        } else {
          return {
            ...prev,
            [name]: currentArray.filter((item) => item !== value),
          };
        }
      });
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  const projectTypes = [
    { value: "web", label: "Web Development", icon: HiCode },
    { value: "mobile", label: "Mobile App Development", icon: HiDeviceMobile },
    { value: "software", label: "Custom Software", icon: HiCube },
    { value: "crm", label: "CRM System", icon: HiChartBar },
    {
      value: "automation",
      label: "Business Automation",
      icon: HiLightningBolt,
    },
    { value: "ecommerce", label: "E-commerce Platform", icon: HiShoppingCart },
    { value: "lms", label: "Learning Management System", icon: HiAcademicCap },
    { value: "iot", label: "IoT Solutions", icon: HiChip },
    { value: "other", label: "Other", icon: HiCube },
  ];

  const features = [
    "User Authentication & Authorization",
    "Dashboard & Analytics",
    "Payment Integration",
    "Email Notifications",
    "Push Notifications",
    "Real-time Chat",
    "File Upload & Management",
    "Search Functionality",
    "API Development",
    "Third-party Integrations",
    "Multi-language Support",
    "Responsive Design",
    "Admin Panel",
    "Reporting System",
    "Data Export/Import",
    "Social Media Integration",
  ];

  const platforms = [
    { value: "web", label: "Web Application" },
    { value: "ios", label: "iOS App" },
    { value: "android", label: "Android App" },
    { value: "desktop", label: "Desktop Application" },
    { value: "api", label: "API/Backend Only" },
  ];

  const budgetRanges = [
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k+", label: "$100,000+" },
    { value: "custom", label: "Custom Budget" },
  ];

  const timelines = [
    { value: "1-2months", label: "1-2 Months" },
    { value: "3-4months", label: "3-4 Months" },
    { value: "5-6months", label: "5-6 Months" },
    { value: "6-12months", label: "6-12 Months" },
    { value: "12months+", label: "12+ Months" },
    { value: "flexible", label: "Flexible" },
  ];

  const priorities = [
    { value: "quality", label: "Quality (Best possible solution)" },
    { value: "speed", label: "Speed (Quick delivery)" },
    { value: "budget", label: "Budget (Cost-effective)" },
    { value: "balanced", label: "Balanced (Mix of all)" },
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white dark:bg-dark-800 rounded-3xl p-12 shadow-2xl text-center animate-scale-up">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <HiCheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Your project requirements have been submitted successfully. Our team
            will review your information and get back to you within 24 hours.
          </p>
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              What Happens Next?
            </h3>
            <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-2">
                <HiCheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>We'll review your requirements in detail</span>
              </li>
              <li className="flex items-start space-x-2">
                <HiCheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>
                  Schedule a consultation call to discuss your project
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <HiCheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>Provide a detailed proposal with timeline and cost</span>
              </li>
              <li className="flex items-start space-x-2">
                <HiCheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>Begin development once approved</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <HiSparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Start Your Project</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Client Requirements Form
            </h1>
            <p className="text-lg text-white/90">
              Help us understand your project better so we can provide the best
              solution
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 sticky top-20 z-40">
        <div className="container-custom px-4 md:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <section className="section-padding">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700 animate-fade-in">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <HiUser className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Personal Information
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Let's start with your basic information
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="label-text">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="label-text">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="label-text">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="label-text">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="website" className="label-text">
                          Website (Optional)
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="label-text">
                          Your Role *
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="select-field"
                        >
                          <option value="">Select your role</option>
                          <option value="founder">Founder/CEO</option>
                          <option value="cto">CTO/Technical Lead</option>
                          <option value="manager">Project Manager</option>
                          <option value="marketing">Marketing Manager</option>
                          <option value="entrepreneur">Entrepreneur</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Information */}
              {currentStep === 2 && (
                <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700 animate-fade-in">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <HiDocument className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Project Information
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Tell us about your project
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="label-text">
                        Project Type * (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        {projectTypes.map((type) => (
                          <label
                            key={type.value}
                            className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.projectType.includes(type.value)
                                ? "border-primary-600 bg-primary-50 dark:bg-primary-900/20"
                                : "border-gray-200 dark:border-dark-700 hover:border-primary-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="projectType"
                              value={type.value}
                              checked={formData.projectType.includes(
                                type.value,
                              )}
                              onChange={handleChange}
                              className="checkbox-field"
                            />
                            <type.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {type.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectTitle" className="label-text">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="e.g., E-commerce Platform for Fashion Retail"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectDescription"
                        className="label-text"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="textarea-field"
                        placeholder="Describe your project in detail. What problem are you trying to solve? What are your main goals?"
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="industry" className="label-text">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                          className="select-field"
                        >
                          <option value="">Select industry</option>
                          <option value="technology">Technology</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance</option>
                          <option value="education">Education</option>
                          <option value="realestate">Real Estate</option>
                          <option value="logistics">Logistics</option>
                          <option value="food">Food & Beverage</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="targetAudience" className="label-text">
                          Target Audience *
                        </label>
                        <input
                          type="text"
                          id="targetAudience"
                          name="targetAudience"
                          value={formData.targetAudience}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="e.g., Small business owners, Students"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements & Features */}
              {currentStep === 3 && (
                <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700 animate-fade-in">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <HiCube className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Requirements & Features
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        What features do you need?
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="label-text">
                        Required Features (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                        {features.map((feature) => (
                          <label
                            key={feature}
                            className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700 cursor-pointer transition-colors duration-200"
                          >
                            <input
                              type="checkbox"
                              name="specificFeatures"
                              value={feature}
                              checked={formData.specificFeatures.includes(
                                feature,
                              )}
                              onChange={handleChange}
                              className="checkbox-field"
                            />
                            <span className="text-sm text-gray-900 dark:text-white">
                              {feature}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="customFeatures" className="label-text">
                        Additional Custom Features
                      </label>
                      <textarea
                        id="customFeatures"
                        name="customFeatures"
                        value={formData.customFeatures}
                        onChange={handleChange}
                        rows="4"
                        className="textarea-field"
                        placeholder="Describe any specific features not listed above..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="label-text">
                        Target Platforms * (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {platforms.map((platform) => (
                          <label
                            key={platform.value}
                            className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.platforms.includes(platform.value)
                                ? "border-primary-600 bg-primary-50 dark:bg-primary-900/20"
                                : "border-gray-200 dark:border-dark-700 hover:border-primary-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="platforms"
                              value={platform.value}
                              checked={formData.platforms.includes(
                                platform.value,
                              )}
                              onChange={handleChange}
                              className="checkbox-field"
                            />
                            <span className="font-medium text-gray-900 dark:text-white">
                              {platform.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="integrations" className="label-text">
                        Required Integrations
                      </label>
                      <textarea
                        id="integrations"
                        name="integrations"
                        value={formData.integrations}
                        onChange={handleChange}
                        rows="3"
                        className="textarea-field"
                        placeholder="List any third-party services or APIs you need to integrate (e.g., Stripe, Twilio, Google Maps)..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Budget & Timeline */}
              {currentStep === 4 && (
                <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700 animate-fade-in">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <HiCurrencyDollar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Budget & Timeline
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Help us understand your constraints
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="budget" className="label-text">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="select-field"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {formData.budget === "custom" && (
                      <div>
                        <label htmlFor="customBudget" className="label-text">
                          Specify Your Budget
                        </label>
                        <input
                          type="text"
                          id="customBudget"
                          name="customBudget"
                          value={formData.customBudget}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Enter your budget"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="timeline" className="label-text">
                        Expected Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="select-field"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((time) => (
                          <option key={time.value} value={time.value}>
                            {time.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="startDate" className="label-text">
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="input-field"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div>
                      <label htmlFor="priority" className="label-text">
                        Project Priority *
                      </label>
                      <div className="space-y-3 mt-2">
                        {priorities.map((prio) => (
                          <label
                            key={prio.value}
                            className={`flex items-start space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.priority === prio.value
                                ? "border-primary-600 bg-primary-50 dark:bg-primary-900/20"
                                : "border-gray-200 dark:border-dark-700 hover:border-primary-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="priority"
                              value={prio.value}
                              checked={formData.priority === prio.value}
                              onChange={handleChange}
                              className="mt-1"
                            />
                            <span className="font-medium text-gray-900 dark:text-white">
                              {prio.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Additional Information */}
              {currentStep === 5 && (
                <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700 animate-fade-in">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <HiServer className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Additional Information
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Help us understand your context better
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="existingSystems" className="label-text">
                        Existing Systems & Technologies
                      </label>
                      <textarea
                        id="existingSystems"
                        name="existingSystems"
                        value={formData.existingSystems}
                        onChange={handleChange}
                        rows="4"
                        className="textarea-field"
                        placeholder="Do you have any existing systems, databases, or technologies that need to be integrated or replaced?"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="designPreferences" className="label-text">
                        Design Preferences
                      </label>
                      <textarea
                        id="designPreferences"
                        name="designPreferences"
                        value={formData.designPreferences}
                        onChange={handleChange}
                        rows="4"
                        className="textarea-field"
                        placeholder="Do you have any design preferences, brand guidelines, or reference websites you'd like us to consider?"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="competitors" className="label-text">
                        Competitors & Inspirations
                      </label>
                      <textarea
                        id="competitors"
                        name="competitors"
                        value={formData.competitors}
                        onChange={handleChange}
                        rows="3"
                        className="textarea-field"
                        placeholder="List any competitor websites or applications that you admire or want to differentiate from..."
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="successMetrics" className="label-text">
                        Success Metrics
                      </label>
                      <textarea
                        id="successMetrics"
                        name="successMetrics"
                        value={formData.successMetrics}
                        onChange={handleChange}
                        rows="3"
                        className="textarea-field"
                        placeholder="How will you measure the success of this project? (e.g., increased sales, reduced costs, user engagement)"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="label-text">
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows="4"
                        className="textarea-field"
                        placeholder="Any other information you'd like to share about your project..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700 animate-fade-in">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <HiCheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Review & Submit
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Review your information and submit
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Personal Info Summary */}
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Name:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {formData.fullName}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Email:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {formData.email}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Phone:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {formData.phone}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Company:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {formData.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info Summary */}
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                        Project Information
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Project Type:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {formData.projectType.join(", ") || "Not specified"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Title:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {formData.projectTitle}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Budget:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {budgetRanges.find(
                              (b) => b.value === formData.budget,
                            )?.label || "Not specified"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            Timeline:
                          </span>
                          <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                            {timelines.find(
                              (t) => t.value === formData.timeline,
                            )?.label || "Not specified"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* How Did You Hear */}
                    <div>
                      <label htmlFor="referralSource" className="label-text">
                        How did you hear about us?
                      </label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleChange}
                        className="select-field"
                      >
                        <option value="">Select source</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="event">Event/Conference</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Consent */}
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          className="checkbox-field mt-1"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the{" "}
                          <Link
                            to="/terms-of-service"
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy-policy"
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Privacy Policy
                          </Link>
                          . I understand that Limitless Infotech Solution will
                          use my information to contact me about my project
                          inquiry. *
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="btn-ghost disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <HiArrowLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Step {currentStep} of {totalSteps}
                </div>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary flex items-center"
                  >
                    Next
                    <HiArrowRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner inline-block w-5 h-5 mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <HiCheckCircle className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientForm;
