import React, { useState } from 'react';
import DigitalHealthAuditor from '../components/DigitalHealthAuditor';
import SandboxEnvironment from '../components/SandboxEnvironment';
import EngagementSystem from '../components/EngagementSystem';
import analyticsService from '../services/analyticsService';

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
      timestamp: new Date().toISOString()
    });
    
    // Track user journey
    analyticsService.trackUserJourney(
      email, 
      'auditor', 
      'sandbox', 
      { 
        success: true, 
        limitlessScore: results.limitlessScore,
        timestamp: new Date().toISOString()
      }
    );
    
    // Show engagement system for auditor
    console.log('Auditor engagement tracked');
  };

  const handleSandboxStart = () => {
    setCurrentStage('sandbox');
    setSandboxStarted(true);
    
    // Track sandbox start
    analyticsService.trackEvent('sandbox_started', {
      userId: userData.email,
      timestamp: new Date().toISOString()
    });
    
    // Track user journey
    analyticsService.trackUserJourney(
      userData.email, 
      'sandbox', 
      'trial', 
      { 
        success: true, 
        timestamp: new Date().toISOString()
      }
    );
    
    console.log('Sandbox started - engagement tracked');
  };

  const handleSandboxExit = () => {
    setCurrentStage('auditor');
    
    // Track sandbox completion
    analyticsService.trackEvent('sandbox_completed', {
      userId: userData.email,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {currentStage === 'auditor' && (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Health <span className="text-blue-600">Auditor</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get a comprehensive analysis of your website's performance, security, and SEO with our AI-powered auditor
            </p>
          </div>
          
          <DigitalHealthAuditor 
            onAuditComplete={handleAuditComplete}
            onSandboxRequest={handleSandboxStart}
          />
          
          {/* Engagement tracking for auditor */}
          {auditResults && (
            <EngagementSystem 
              userType="auditor" 
              userData={userData} 
              results={auditResults} 
            />
          )}
        </div>
      )}
      
      {currentStage === 'sandbox' && (
        <div>
          <SandboxEnvironment onExit={handleSandboxExit} />
          
          {/* Engagement tracking for sandbox */}
          {sandboxStarted && (
            <EngagementSystem 
              userType="sandbox" 
              results={{ 
                sandboxId: 'current-sandbox-id', 
                usageData: { 
                  tourCompleted: false, 
                  tasksCompleted: 0, 
                  featuresExplored: 0 
                } 
              }} 
            />
          )}
        </div>
      )}
      
      {/* Conversion Metrics Summary */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h4 className="font-semibold text-gray-900 mb-2">Live Metrics</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <div>Stage: <span className="font-medium">{currentStage}</span></div>
          <div>Events Tracked: <span className="font-medium">{analyticsService.getDashboardData().totalEvents}</span></div>
          <div>Conversion Rate: <span className="font-medium">
            {analyticsService.getConversionMetrics().overallConversionRate.toFixed(2)}%
          </span></div>
        </div>
      </div>
    </div>
  );
};

export default AuditorToSandboxFlow;