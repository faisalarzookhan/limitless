import React, { useState, useEffect } from 'react';

const RoyalConciergeTour = ({ 
  steps, 
  onComplete, 
  onStart, 
  isActive = false,
  autoStart = false 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTourActive, setIsTourActive] = useState(isActive);
  const [tourProgress, setTourProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize tour
  useEffect(() => {
    if (autoStart || isActive) {
      startTour();
    }
  }, [autoStart, isActive]);

  // Update progress when step changes
  useEffect(() => {
    if (steps && steps.length > 0) {
      setTourProgress((currentStep / steps.length) * 100);
    }
  }, [currentStep, steps]);

  const startTour = () => {
    setIsTourActive(true);
    setCurrentStep(0);
    setIsVisible(true);
    if (onStart) onStart();
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const endTour = () => {
    setIsTourActive(false);
    setIsVisible(false);
    setCurrentStep(0);
    if (onComplete) onComplete();
  };

  const skipTour = () => {
    endTour();
  };

  if (!isTourActive || !steps || steps.length === 0 || currentStep >= steps.length) {
    return null;
  }

  const currentStepData = steps[currentStep];

  return (
    <>
      {/* Spotlight overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[9998] pointer-events-none" />
      
      {/* Spotlight hole (this would be dynamically positioned based on target element) */}
      <div 
        className="fixed z-[9999] pointer-events-none"
        style={{
          top: currentStepData.position?.top || '50%',
          left: currentStepData.position?.left || '50%',
          width: currentStepData.position?.width || '300px',
          height: currentStepData.position?.height || '200px',
          borderRadius: '12px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-2xl animate-pulse" />
      </div>
      
      {/* Tour tooltip */}
      <div 
        className="fixed bg-white rounded-xl shadow-2xl p-6 z-[9999] max-w-sm border-2 border-yellow-400 transform -translate-x-1/2 -translate-y-full"
        style={{
          top: currentStepData.position?.top ? 
            `${parseInt(currentStepData.position.top) - 20}px` : '50%',
          left: currentStepData.position?.left ? 
            `${parseInt(currentStepData.position.left) + (parseInt(currentStepData.position.width || '300') / 2)}px` : '50%',
        }}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900">
            {currentStepData.title}
          </h3>
          <button 
            onClick={skipTour}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-700 mb-4">
          {currentStepData.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                currentStep === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Back
            </button>
            
            <button
              onClick={nextStep}
              className="px-4 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-yellow-700"
            >
              {currentStep === steps.length - 1 ? 'Complete Tour' : 'Next'}
            </button>
          </div>
          
          <div className="text-xs text-gray-500">
            {currentStep + 1} of {steps.length}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${tourProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Hotspot indicators */}
      {steps.map((step, index) => (
        <div
          key={index}
          className={`fixed z-[9997] w-4 h-4 rounded-full border-2 border-white ${
            index === currentStep 
              ? 'bg-yellow-500 animate-ping' 
              : 'bg-yellow-400'
          }`}
          style={{
            top: step.position?.top ? 
              `${parseInt(step.position.top) - 10}px` : '50%',
            left: step.position?.left ? 
              `${parseInt(step.position.left) - 10}px` : '50%',
          }}
        >
          <div className="absolute -top-6 -left-6 bg-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {index + 1}
          </div>
        </div>
      ))}
    </>
  );
};

// Enhanced Royal Concierge Tour with more features
const EnhancedRoyalConciergeTour = ({ 
  steps, 
  onComplete, 
  onStart, 
  isActive = false,
  autoStart = false,
  showProgress = true,
  showHotspots = true
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTourActive, setIsTourActive] = useState(isActive);
  const [tourProgress, setTourProgress] = useState(0);
  const [stepAnimations, setStepAnimations] = useState({});

  // Initialize tour
  useEffect(() => {
    if (autoStart || isActive) {
      startTour();
    }
  }, [autoStart, isActive]);

  // Update progress when step changes
  useEffect(() => {
    if (steps && steps.length > 0) {
      setTourProgress((currentStep / steps.length) * 100);
    }
    
    // Trigger animation for current step
    setStepAnimations(prev => ({
      ...prev,
      [currentStep]: true
    }));
  }, [currentStep, steps]);

  const startTour = () => {
    setIsTourActive(true);
    setCurrentStep(0);
    if (onStart) onStart();
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const endTour = () => {
    setIsTourActive(false);
    setCurrentStep(0);
    if (onComplete) onComplete();
  };

  const skipTour = () => {
    endTour();
  };

  if (!isTourActive || !steps || steps.length === 0 || currentStep >= steps.length) {
    return null;
  }

  const currentStepData = steps[currentStep];
  const isCurrentStepAnimated = stepAnimations[currentStep];

  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none">
      {/* Spotlight overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" />
      
      {/* Spotlight hole */}
      <div 
        className={`absolute rounded-lg shadow-2xl ${
          isCurrentStepAnimated ? 'animate-pulse' : ''
        }`}
        style={{
          top: currentStepData.position?.top || '50%',
          left: currentStepData.position?.left || '50%',
          width: currentStepData.position?.width || '300px',
          height: currentStepData.position?.height || '200px',
          background: 'conic-gradient(from 0deg, transparent, #F59E0B, transparent)',
          filter: 'blur(1px)',
        }}
      >
        <div 
          className="absolute inset-2 bg-white rounded-md"
          style={{
            background: 'linear-gradient(135deg, #FEFCE8 0%, #FFFBEB 100%)'
          }}
        />
      </div>
      
      {/* Tour tooltip */}
      <div 
        className="absolute bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl shadow-2xl p-5 max-w-md pointer-events-auto"
        style={{
          top: currentStepData.position?.top ? 
            `${parseInt(currentStepData.position.top) - 20}px` : '50%',
          left: currentStepData.position?.left ? 
            `${parseInt(currentStepData.position.left) + (parseInt(currentStepData.position.width || '300') / 2)}px` : '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">{currentStep + 1}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {currentStepData.title}
            </h3>
          </div>
          <button 
            onClick={skipTour}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-700 mb-4">
          {currentStepData.description}
        </p>
        
        {currentStepData.highlightedFeature && (
          <div className="mb-4 p-3 bg-yellow-100 rounded-lg border border-yellow-200">
            <div className="font-semibold text-yellow-800 text-sm mb-1">
              💡 Pro Tip:
            </div>
            <div className="text-yellow-700 text-sm">
              {currentStepData.highlightedFeature}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                currentStep === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Back
            </button>
            
            <button
              onClick={nextStep}
              className="px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all"
            >
              {currentStep === steps.length - 1 ? 'Complete Tour' : 'Next'}
            </button>
          </div>
          
          <div className="text-xs text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
        
        {showProgress && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${tourProgress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Hotspot indicators */}
      {showHotspots && steps.map((step, index) => (
        <div
          key={index}
          className={`absolute z-[9997] w-5 h-5 rounded-full border-2 border-white ${
            index === currentStep 
              ? 'bg-yellow-500 animate-ping' 
              : 'bg-yellow-400'
          }`}
          style={{
            top: step.position?.top ? 
              `${parseInt(step.position.top) - 10}px` : '50%',
            left: step.position?.left ? 
              `${parseInt(step.position.left) - 10}px` : '50%',
          }}
        >
          <div className="absolute -top-7 -left-7 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

// Predefined tours for common systems
const predefinedTours = {
  trackIT: [
    {
      title: "Welcome to TrackIT",
      description: "Let me show you the powerful project management features of our TrackIT system.",
      highlightedFeature: "TrackIT helps manage projects with real-time collaboration and automated reporting.",
      position: { top: '10%', left: '50%', width: '250px', height: '60px' }
    },
    {
      title: "Project Dashboard",
      description: "This is your central hub where you can see all active projects and their progress.",
      highlightedFeature: "Use the progress bars to quickly identify which projects need attention.",
      position: { top: '25%', left: '20%', width: '300px', height: '200px' }
    },
    {
      title: "Task Management",
      description: "Create, assign, and track tasks with our intuitive interface.",
      highlightedFeature: "Tasks can be assigned to team members with due dates and priority levels.",
      position: { top: '40%', left: '60%', width: '280px', height: '180px' }
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your team members in real-time with comments and updates.",
      highlightedFeature: "Use @mentions to notify specific team members about important updates.",
      position: { top: '60%', left: '30%', width: '320px', height: '150px' }
    },
    {
      title: "Reporting & Analytics",
      description: "Generate detailed reports to analyze project performance and team productivity.",
      highlightedFeature: "Reports can be exported in multiple formats including PDF, Excel, and CSV.",
      position: { top: '70%', left: '70%', width: '260px', height: '120px' }
    }
  ],
  hrIMS: [
    {
      title: "Welcome to HR-IMS",
      description: "This is our Human Resources Information Management System for comprehensive HR operations.",
      highlightedFeature: "HR-IMS streamlines employee management, payroll, and compliance processes.",
      position: { top: '10%', left: '50%', width: '250px', height: '60px' }
    },
    {
      title: "Employee Directory",
      description: "Access comprehensive employee information with advanced search and filtering.",
      highlightedFeature: "Use the directory to quickly find employee contact information and details.",
      position: { top: '25%', left: '20%', width: '300px', height: '200px' }
    },
    {
      title: "Payroll Management",
      description: "Process payroll, manage benefits, and track compensation with ease.",
      highlightedFeature: "Automatic tax calculations and compliance reporting are built-in.",
      position: { top: '40%', left: '60%', width: '280px', height: '180px' }
    },
    {
      title: "Performance Reviews",
      description: "Conduct and track performance reviews with standardized templates.",
      highlightedFeature: "Set goals, track progress, and provide feedback all in one place.",
      position: { top: '60%', left: '30%', width: '320px', height: '150px' }
    },
    {
      title: "Reporting Center",
      description: "Generate HR reports for compliance, analytics, and strategic planning.",
      highlightedFeature: "Reports include headcount, turnover, compensation analysis, and more.",
      position: { top: '70%', left: '70%', width: '260px', height: '120px' }
    }
  ]
};

export { RoyalConciergeTour, EnhancedRoyalConciergeTour, predefinedTours };