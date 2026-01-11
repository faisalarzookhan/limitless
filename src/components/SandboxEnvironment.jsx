import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Clock,
  UserCircle,
  BarChart3,
  Box,
  LayoutDashboard,
  Users,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Settings
} from 'lucide-react';
import sandboxService from '../services/sandbox/sandboxService';

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
    <div className="min-h-screen bg-[#0e1114] py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 mb-10 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#1ba6d6] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(27,166,214,0.3)]">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-sm font-black text-white uppercase tracking-[0.4em]">
                  TrackIT Sandbox Terminal
                </h1>
              </div>
              <p className="text-[0.65rem] text-white/40 font-black uppercase tracking-widest max-w-xl leading-relaxed">
                Experience our high-performance SaaS infrastructure with pre-populated neural datasets and full administrative protocols.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center shadow-inner">
                <Clock className="w-4 h-4 text-[#ffc957] mr-3" />
                <span className="text-[0.7rem] font-black text-white uppercase tracking-widest">
                  {formatTime(timeRemaining)} <span className="text-white/30 ml-2">Latency Buffer</span>
                </span>
              </div>
              <button
                onClick={onExit}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-[0.6rem] font-black uppercase tracking-[0.3em] rounded-2xl border border-white/5 transition-all duration-300"
              >
                Terminate Session
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Guided Tour */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 h-full overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffc957]/5 to-transparent pointer-events-none"></div>
              <div className="flex items-center mb-10 relative z-10">
                <div className="w-10 h-10 bg-[#ffc957]/20 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-5 h-5 text-[#ffc957]" />
                </div>
                <h2 className="text-xs font-black text-white uppercase tracking-[0.3em]">Neural Onboarding</h2>
              </div>

              <div className="mb-10 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[0.55rem] font-black text-white/40 uppercase tracking-widest">
                    Synchronization Progress
                  </span>
                  <span className="text-[0.6rem] font-black text-[#ffc957] uppercase tracking-widest">
                    {Math.round(tourProgress)}%
                  </span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tourProgress}%` }}
                    className="bg-gradient-to-r from-[#ffc957] to-[#1ba6d6] h-full rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {guidedSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-5 rounded-2xl border transition-all duration-500 ${
                      index === currentStep
                        ? 'border-[#ffc957]/30 bg-[#ffc957]/5'
                        : index < currentStep
                          ? 'border-[#25d366]/20 bg-[#25d366]/5'
                          : 'border-white/5 bg-white/5'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center mr-4 transition-all duration-500 ${
                        index < currentStep
                          ? 'bg-[#25d366] text-white shadow-[0_0_10px_rgba(37,211,102,0.3)]'
                          : index === currentStep
                            ? 'bg-[#ffc957] text-[#0e1114] shadow-[0_0_10px_rgba(255,201,87,0.3)]'
                            : 'bg-white/5 text-white/20'
                      }`}
                    >
                      {index < currentStep ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-[0.6rem] font-black">{index + 1}</span>}
                    </div>
                    <div className="flex-1">
                      <p className={`text-[0.6rem] font-black uppercase tracking-widest leading-relaxed ${
                          index === currentStep ? 'text-white' : 'text-white/40'
                        }`}
                      >
                        {step}
                      </p>
                    </div>
                    {index === currentStep && (
                      <button
                        onClick={() => {
                          setCurrentStep(prev => Math.min(prev + 1, guidedSteps.length - 1));
                          setTourProgress(Math.min(100, ((currentStep + 1) / guidedSteps.length) * 100));
                        }}
                        className="w-10 h-10 bg-[#ffc957] text-[#0e1114] rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {/* Dashboard Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sandboxFeatures.map((feature, index) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 hover:border-[#1ba6d6]/30 transition-all duration-500 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="w-12 h-12 bg-white/5 group-hover:bg-[#1ba6d6]/20 rounded-2xl flex items-center justify-center transition-colors">
                      <BarChart3 className="w-6 h-6 text-[#1ba6d6]" />
                    </div>
                    <div className="text-[0.55rem] font-black text-white/20 uppercase tracking-widest border border-white/5 px-4 py-2 rounded-full">
                      Real-time Feed
                    </div>
                  </div>
                  <h3 className="text-[0.7rem] font-black text-white uppercase tracking-[0.2em] mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-widest mb-8 relative z-10">
                    {feature.description}
                  </p>
                  <div className="flex items-baseline relative z-10">
                    <span className="text-4xl font-black text-[#1ba6d6] tracking-tighter shadow-sm">
                      {feature.value}
                    </span>
                    <span className="text-[0.6rem] font-black text-white/20 uppercase tracking-widest ml-4">{feature.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Demo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
              <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-12 relative z-10 flex items-center">
                <Zap className="w-4 h-4 text-[#ffc957] mr-3" />
                Interactive Neural Protocol
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-8">
                  <h3 className="text-[0.7rem] font-black text-white/60 uppercase tracking-[0.2em]">
                    Initialize Project Node
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-[0.55rem] font-black text-white/30 uppercase tracking-[0.3em]">
                        Project Vector
                      </label>
                      <input
                        type="text"
                        placeholder="SOURCE_IDENTIFIER"
                        className="w-full h-14 px-6 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#1ba6d6] text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[0.55rem] font-black text-white/30 uppercase tracking-[0.3em]">
                        Neural Parameters
                      </label>
                      <textarea
                        placeholder="DEFINE SCOPE PROTOCOLS..."
                        rows={3}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#1ba6d6] text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all outline-none resize-none"
                      />
                    </div>
                    <button className="w-full h-16 bg-[#1ba6d6] text-white text-[0.7rem] font-black uppercase tracking-[0.4em] rounded-2xl mask-btn hover:scale-[1.02] transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)]">
                      Create Project Node
                    </button>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-[0.7rem] font-black text-white/60 uppercase tracking-[0.2em]">
                    System Privileges
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: LayoutDashboard, text: 'Full Visual Access' },
                      { icon: Users, text: 'Pre-populated Datasets' },
                      { icon: ShieldCheck, text: 'Neural Encryption' },
                      { icon: Clock, text: 'Exclusive Session Buffer' },
                      { icon: Zap, text: 'High Latency Experts' }
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-[#1ba6d6]/10 flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-[#1ba6d6]" />
                        </div>
                        <span className="text-[0.6rem] font-black text-white/60 uppercase tracking-widest">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-br from-[#1ba6d6] to-[#0e1114] rounded-[4rem] p-16 text-center shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Nexus Upgrade <span className="text-white/40">Required</span>
            </h3>
            <p className="text-[0.7rem] text-white/60 font-black uppercase tracking-[0.3em] mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the untethered power of standard deployment with private cloud hosting and 24/7 specialist neural support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <button className="px-12 py-6 bg-white text-[#0e1114] text-[0.7rem] font-black uppercase tracking-[0.4em] mask-btn hover:scale-105 transition-all duration-500 shadow-2xl">
                Schedule Neural Demo
              </button>
              <button className="px-12 py-6 bg-white/10 backdrop-blur-3xl text-white text-[0.7rem] font-black uppercase tracking-[0.4em] border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-500">
                Initialize Production
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SandboxEnvironment;
