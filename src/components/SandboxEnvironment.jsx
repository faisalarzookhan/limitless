import React, { useState, useEffect } from 'react';
import {
  HiOutlineLightBulb,
  HiOutlineClock,
  HiOutlineUserCircle,
  HiOutlineChartBar,
} from 'react-icons/hi';
import sandboxService from '../services/sandboxService';

const SandboxEnvironment = ({ onExit }) => {
  const [timeRemaining, setTimeRemaining] = useState(4 * 60 * 60); // 4 hours in seconds
  const [currentStep, setCurrentStep] = useState(0);
  const [tourProgress, setTourProgress] = useState(0);
  const [sandboxId, setSandboxId] = useState(null);
  const [sandboxData, setSandboxData] = useState({
    projects: 5,
    tasks: 50,
    users: 12,
    completedTasks: 23,
  });

  // Simulate countdown timer
  useEffect(() => {
    if (timeRemaining <= 0) {
      handleSandboxExpiration();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Initialize sandbox on component mount
  useEffect(() => {
    const initializeSandbox = async () => {
      const sandbox = await sandboxService.createSandbox({
        email: 'demo@user.com',
      });
      setSandboxId(sandbox.id);
    };

    initializeSandbox();
  }, []);

  // Track tour progress
  useEffect(() => {
    if (sandboxId && tourProgress === 100) {
      // Tour completed
      sandboxService.updateSandboxProgress(sandboxId, {
        tourCompleted: true,
        featuresExplored: guidedSteps.length,
      });
    } else if (sandboxId) {
      // Update progress
      sandboxService.updateSandboxProgress(sandboxId, {
        featuresExplored: Math.floor((tourProgress / 100) * guidedSteps.length),
      });
    }
  }, [tourProgress, sandboxId]);

  const handleSandboxExpiration = () => {
    alert(
      'Your sandbox session has expired. Please contact us for a full demo.'
    );
    if (onExit) onExit();
  };

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const sandboxFeatures = [
    {
      title: 'Project Management',
      description: 'Create and manage projects with team collaboration',
      value: sandboxData.projects,
      unit: 'projects',
    },
    {
      title: 'Task Management',
      description: 'Track tasks with real-time updates',
      value: sandboxData.tasks,
      unit: 'tasks',
    },
    {
      title: 'User Management',
      description: 'Add team members and manage permissions',
      value: sandboxData.users,
      unit: 'users',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor completion rates and productivity',
      value: sandboxData.completedTasks,
      unit: 'completed',
    },
  ];

  const guidedSteps = [
    'Explore the dashboard overview',
    'Create your first project',
    'Add team members',
    'Track task progress',
    'Generate reports',
    'Customize settings',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                TrackIT Sandbox Environment
              </h1>
              <p className="text-gray-600">
                Experience our SaaS solution with pre-loaded data and full
                functionality
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="bg-yellow-100 px-4 py-2 rounded-lg flex items-center">
                <HiOutlineClock className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">
                  {formatTime(timeRemaining)} remaining
                </span>
              </div>
              <button
                onClick={onExit}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition"
              >
                Exit Sandbox
              </button>
            </div>
          </div>
        </div>

        {/* Guided Tour */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <HiOutlineLightBulb className="w-6 h-6 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">Guided Tour</h2>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Tour Progress
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(tourProgress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${tourProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-4">
            {guidedSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg border-2 transition-all ${
                  index === currentStep
                    ? 'border-yellow-400 bg-yellow-50'
                    : index < currentStep
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    index < currentStep
                      ? 'bg-green-500 text-white'
                      : index === currentStep
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium ${
                      index === currentStep
                        ? 'text-yellow-800'
                        : 'text-gray-900'
                    }`}
                  >
                    {step}
                  </p>
                </div>
                {index === currentStep && (
                  <button
                    onClick={() => {
                      setCurrentStep(prev =>
                        Math.min(prev + 1, guidedSteps.length - 1)
                      );
                      setTourProgress(
                        Math.min(
                          100,
                          ((currentStep + 1) / guidedSteps.length) * 100
                        )
                      );
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Next
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sandboxFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center">
                  <HiOutlineChartBar className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {feature.description}
              </p>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-indigo-600">
                  {feature.value}
                </span>
                <span className="text-gray-500 ml-2">{feature.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Interactive Demo
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Try Creating a Project
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter project name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Project description"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition">
                  Create Project
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sandbox Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <HiOutlineUserCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    Full access to all features
                  </span>
                </li>
                <li className="flex items-start">
                  <HiOutlineUserCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    Pre-populated with sample data
                  </span>
                </li>
                <li className="flex items-start">
                  <HiOutlineUserCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">No credit card required</span>
                </li>
                <li className="flex items-start">
                  <HiOutlineUserCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    4 hours of exclusive access
                  </span>
                </li>
                <li className="flex items-start">
                  <HiOutlineUserCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">
                    Direct access to our experts
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-xl p-8 mt-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-yellow-800 mb-6 max-w-2xl mx-auto">
            Experience the full power of TrackIT with a personalized demo or
            start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-yellow-600 font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-gray-100">
              Schedule Demo
            </button>
            <button className="bg-yellow-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-yellow-800">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxEnvironment;
