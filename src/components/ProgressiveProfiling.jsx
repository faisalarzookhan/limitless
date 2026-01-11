import { useState, useEffect, createElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Briefcase,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Target,
  Rocket,
  Shield,
  Fingerprint
} from 'lucide-react';

const ProgressiveProfiling = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profileData, setProfileData] = useState({});
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const steps = [
    {
      id: 'neural-identity',
      title: 'Neural Identity',
      fields: [
        {
          name: 'name',
          label: 'IDENTIFIER',
          type: 'text',
          required: true,
          placeholder: 'ENTER FULL NAME',
        },
        {
          name: 'email',
          label: 'NEURAL NODE',
          type: 'email',
          required: true,
          placeholder: 'ACCESS@NODE.COM',
        },
        {
          name: 'company',
          label: 'ORGANIZATION',
          type: 'text',
          required: true,
          placeholder: 'ENTITY NAME',
        },
      ],
      icon: Fingerprint,
      description: 'Initialize biometric synchronization for personalized architecture.',
    },
    {
      id: 'sector-analysis',
      title: 'Sector Analysis',
      fields: [
        {
          name: 'role',
          label: 'DESIGNATION',
          type: 'select',
          options: [
            'CTO',
            'CFO',
            'CEO',
            'Product Architect',
            'Core Developer',
            'Other Operator',
          ],
          required: true,
        },
        {
          name: 'industry',
          label: 'DOMAIN SECTOR',
          type: 'select',
          options: [
            'Technology',
            'Finance',
            'Bio-Health',
            'Quantum Retail',
            'Neural Manufacturing',
            'Other',
          ],
          required: true,
        },
        {
          name: 'companySize',
          label: 'ENTITY SCALE',
          type: 'select',
          options: ['1-10 UNITS', '11-50 UNITS', '51-200 UNITS', '201-500 UNITS', '500+ UNITS'],
          required: true,
        },
      ],
      icon: Briefcase,
      description: 'Mapping industrial frequency for optimal deployment strategy.',
    },
    {
      id: 'objective-mapping',
      title: 'Objective Mapping',
      fields: [
        {
          name: 'primaryNeed',
          label: 'CORE OBJECTIVE',
          type: 'select',
          options: [
            'Web Architecture',
            'Mobile Neural Link',
            'HR Protocol',
            'Project Stream',
            'AI/ML Integration',
            'Custom Vector',
          ],
          required: true,
        },
        {
          name: 'timeline',
          label: 'DEPLOYMENT WINDOW',
          type: 'select',
          options: ['IMMEDIATE', '1-3 CYCLES', '3-6 CYCLES', '6+ CYCLES'],
          required: true,
        },
        {
          name: 'budgetRange',
          label: 'RESOURCE ALLOCATION',
          type: 'select',
          options: [
            'UNDER 10K CREDITS',
            '10K-50K CREDITS',
            '50K-100K CREDITS',
            '100K+ CREDITS',
            'VARIABLE',
          ],
          required: false,
        },
      ],
      icon: Target,
      description: 'Defining target coordinates for structural development.',
    },
    {
      id: 'protocol-preferences',
      title: 'Protocol Config',
      fields: [
        {
          name: 'communication',
          label: 'COMMUNICATION CHANNEL',
          type: 'select',
          options: ['NEURAL EMAIL', 'VOICE LINK', 'SLACK CHANNEL', 'TEAMS NODE'],
          required: false,
        },
        {
          name: 'updates',
          label: 'SYNCHRONIZE UPDATES',
          type: 'checkbox',
          required: false,
          description: 'Receive archive updates and structural insights',
        },
        {
          name: 'contact',
          label: 'DIRECT CHANNEL',
          type: 'checkbox',
          required: false,
          description: 'Allow Limitless architects to initialize contact',
        },
      ],
      icon: Sparkles,
      description: 'Finalizing interface parameters for the Limitless experience.',
    },
  ];

  const handleFieldChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
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
    const requiredFields = currentStepData.fields.filter(
      field => field.required
    );

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
    <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
      
      <div className="p-10 border-b border-white/5 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">
              Neural <span className="text-[#1ba6d6]">Profiling</span>
            </h3>
            <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em]">
              Synchronizing User Architecture // Step {currentStep + 1}
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-[0.6rem] font-black text-white/20 hover:text-white uppercase tracking-[0.3em] transition-colors"
          >
            Bypass Protocol
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4 overflow-x-auto pb-4 scrollbar-hide">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-shrink-0">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-[0.7rem] font-black transition-all duration-500 ${
                  index <= currentStep || completedSteps.has(index)
                    ? 'bg-[#1ba6d6] text-white shadow-[0_0_20px_rgba(27,166,214,0.3)]'
                    : 'bg-white/5 text-white/20 border border-white/10'
                }`}
              >
                {completedSteps.has(index) ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-[1px] w-8 mx-2 ${
                    index < currentStep
                      ? 'bg-[#1ba6d6]'
                      : 'bg-white/5'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-[#1ba6d6]/10 rounded-3xl flex items-center justify-center text-[#1ba6d6] border border-[#1ba6d6]/20">
                {createElement(steps[currentStep].icon, {
                  className: 'w-8 h-8',
                })}
              </div>
              <div>
                <h4 className="text-lg font-black text-white uppercase tracking-widest mb-2">
                  {steps[currentStep].title}
                </h4>
                <p className="text-[0.65rem] text-white/40 font-black uppercase tracking-widest leading-relaxed">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {steps[currentStep].fields.map(field => (
                <div key={field.name} className="space-y-3">
                  <label className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-4">
                    {field.label} {field.required && <span className="text-[#1ba6d6] ml-1">*</span>}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      value={profileData[field.name] || ''}
                      onChange={e => handleFieldChange(field.name, e.target.value)}
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white outline-none focus:border-[#1ba6d6]/50 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0e1114]">SELECT {field.label}</option>
                      {field.options.map(option => (
                        <option key={option} value={option} className="bg-[#0e1114]">
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer" 
                         onClick={() => handleFieldChange(field.name, !profileData[field.name])}>
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                        profileData[field.name] ? 'bg-[#1ba6d6] border-[#1ba6d6]' : 'border-white/10'
                      }`}>
                        {profileData[field.name] && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <p className="text-[0.65rem] text-white font-black uppercase tracking-widest">
                          {field.label}
                        </p>
                        <p className="text-[0.55rem] text-white/40 font-black uppercase tracking-widest mt-1">
                          {field.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      value={profileData[field.name] || ''}
                      onChange={e => handleFieldChange(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none focus:border-[#1ba6d6]/50 transition-all duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-12">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.3em] transition-all ${
              currentStep === 0
                ? 'opacity-0 pointer-events-none'
                : 'text-white/40 hover:text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Node
          </button>

          {isLastStep ? (
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={`px-10 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-[0.4em] transition-all duration-500 flex items-center gap-4 ${
                isValid
                  ? 'bg-[#1ba6d6] text-white shadow-[0_0_30px_rgba(27,166,214,0.3)] hover:scale-105 active:scale-95'
                  : 'bg-white/5 text-white/20 cursor-not-allowed grayscale'
              }`}
            >
              Initialize Profile
              <Rocket className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isValid}
              className={`px-10 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-[0.4em] transition-all duration-500 flex items-center gap-4 ${
                isValid
                  ? 'bg-white text-[#0e1114] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95'
                  : 'bg-white/5 text-white/20 cursor-not-allowed grayscale'
              }`}
            >
              Next Phase
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressiveProfiling;
