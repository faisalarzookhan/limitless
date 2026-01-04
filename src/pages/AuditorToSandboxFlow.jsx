import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DigitalHealthAuditor from '../components/DigitalHealthAuditor';
import SandboxEnvironment from '../components/SandboxEnvironment';
import EngagementSystem from '../components/EngagementSystem';
import analyticsService from '../services/analyticsService';
import ErrorBoundary from '../components/ErrorBoundary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const AuditorToSandboxFlow = () => {
  const [currentStage, setCurrentStage] = useState('auditor'); // 'auditor', 'sandbox'
  const [userData, setUserData] = useState({});
  const [auditResults, setAuditResults] = useState(null);
  const [sandboxStarted, setSandboxStarted] = useState(false);

  const handleAuditComplete = (results, url, email) => {
    setAuditResults(results);
    setUserData({ url, email });

    // Track the audit completion
    analyticsService.trackEvent('auditor_completed', {
      userId: email,
      url,
      limitlessScore: results.limitlessScore,
      timestamp: new Date().toISOString(),
    });

    // Track user journey
    analyticsService.trackUserJourney(email, 'auditor', 'sandbox', {
      success: true,
      limitlessScore: results.limitlessScore,
      timestamp: new Date().toISOString(),
    });

    // Show engagement system for auditor
    console.log('Auditor engagement tracked');
  };

  const handleSandboxStart = () => {
    setCurrentStage('sandbox');
    setSandboxStarted(true);

    // Track sandbox start
    analyticsService.trackEvent('sandbox_started', {
      userId: userData.email,
      timestamp: new Date().toISOString(),
    });

    // Track user journey
    analyticsService.trackUserJourney(userData.email, 'sandbox', 'trial', {
      success: true,
      timestamp: new Date().toISOString(),
    });

    console.log('Sandbox started - engagement tracked');
  };

  const handleSandboxExit = () => {
    setCurrentStage('auditor');

    // Track sandbox completion
    analyticsService.trackEvent('sandbox_completed', {
      userId: userData.email,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-[#0a0b0d] font-sans">
      {currentStage === 'auditor' && (
        <motion.div 
          className="container mx-auto px-4 py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h1 className="text-4xl font-bold text-white mb-4 font-['Outfit']">
              Digital Health <span className="text-[#ffc957]">Auditor</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-['Figtree']">
              Get a comprehensive analysis of your website's performance,
              security, and SEO with our AI-powered auditor
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <DigitalHealthAuditor
              onAuditComplete={handleAuditComplete}
              onSandboxRequest={handleSandboxStart}
            />
          </motion.div>

          {/* Engagement tracking for auditor */}
          {auditResults && (
            <motion.div variants={itemVariants}>
              <EngagementSystem
                userType="auditor"
                userData={userData}
                results={auditResults}
              />
            </motion.div>
          )}
        </motion.div>
      )}

      {currentStage === 'sandbox' && (
        <motion.div 
          className="container mx-auto px-4 py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SandboxEnvironment onExit={handleSandboxExit} />

          {/* Engagement tracking for sandbox */}
          {sandboxStarted && (
            <motion.div variants={itemVariants}>
              <EngagementSystem
                userType="sandbox"
                results={{
                  sandboxId: 'current-sandbox-id',
                  usageData: {
                    tourCompleted: false,
                    tasksCompleted: 0,
                    featuresExplored: 0,
                  },
                }}
              />
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Conversion Metrics Summary */}
      <motion.div 
        className="fixed bottom-4 right-4 bg-[#1a1c20] rounded-lg shadow-lg p-4 max-w-xs border border-[#2563eb]/30"
        variants={itemVariants}
      >
        <h4 className="font-semibold text-white mb-2 font-['Outfit']">Live Metrics</h4>
        <div className="text-sm text-gray-300 space-y-1 font-['Figtree']">
          <div>
            Stage: <span className="font-medium text-[#ffc957]">{currentStage}</span>
          </div>
          <div>
            Events Tracked: 
            <span className="font-medium text-white">
              {analyticsService.getDashboardData().totalEvents}
            </span>
          </div>
          <div>
            Conversion Rate: 
            <span className="font-medium text-white">
              {analyticsService
                .getConversionMetrics()
                .overallConversionRate.toFixed(2)}
              %
            </span>
          </div>
        </div>
      </motion.div>
    </div>
    </ErrorBoundary>
  );
};

export default AuditorToSandboxFlow;
