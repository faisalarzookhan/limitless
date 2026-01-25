import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  UserCircle, 
  Users, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LaunchBriefForm from './LaunchBriefForm'; // Request Project
import ClientForm from './ClientForm'; // Request Consultant (using it as a base or adjusting)
import DedicatedTeamForm from '../components/DedicatedTeamForm'; // Hire Team
import AnalyticsConfig from '../services/analytics/AnalyticsConfig';

const InquiryCenter = () => {
  const [activeTab, setActiveTab] = useState('project');

  const tabs = [
    { id: 'project', label: 'Request Project', icon: Rocket, color: 'text-primary-400' },
    { id: 'consultant', label: 'Request Consultant', icon: UserCircle, color: 'text-secondary-400' },
    { id: 'team', label: 'Hire Dedicated Team', icon: Users, color: 'text-white' }
  ];

  return (
    <ErrorBoundary>
      <SEO 
        title="Inquiry Center | Limitless Infotech" 
        description="Initialize your collaboration with Limitless Infotech. Choose from specialized intake protocols for projects, consultancy, or dedicated teams." 
      />
      
      <div className="min-h-screen bg-[#0e1114] pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-[0.6rem] font-black text-white/50 uppercase tracking-[0.4em]">Protocol: Central Intake</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 italic">
              Initialization <span className="text-primary-400 not-italic">Center.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
              Select your specific alignment protocol. Our systems are optimized for high-fidelity technical synthesis.
            </p>
          </div>

          {/* Unified Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-20 p-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] w-full max-w-fit mx-auto overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  AnalyticsConfig.trackCTA(`Switch to ${tab.label}`, 'Inquiry Center');
                }}
                className={`flex items-center gap-4 px-10 py-5 rounded-[2rem] text-[0.7rem] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab.id 
                  ? 'bg-white text-dark-900 shadow-2xl scale-105' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={18} className={activeTab === tab.id ? 'text-primary-500' : tab.color} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === 'project' && (
                <motion.div
                  key="project"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <LaunchBriefForm embedded={true} />
                </motion.div>
              )}
              {activeTab === 'consultant' && (
                <motion.div
                  key="consultant"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ClientForm embedded={true} />
                </motion.div>
              )}
              {activeTab === 'team' && (
                <motion.div
                  key="team"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 p-10 lg:p-20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none" />
                  <div className="text-center mb-12">
                     <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Dedicated Team Deployment</h3>
                     <p className="text-[0.65rem] text-white/30 font-black uppercase tracking-widest">Scale your technical bandwidth with mission-ready neural resources.</p>
                  </div>
                  <DedicatedTeamForm />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary-400" />
              <span className="text-[0.55rem] font-black text-white uppercase tracking-[0.3em]">AES-256 Encrypted Intake</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-secondary-400" />
              <span className="text-[0.55rem] font-black text-white uppercase tracking-[0.3em]">Priority Sequential Processing</span>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default InquiryCenter;
