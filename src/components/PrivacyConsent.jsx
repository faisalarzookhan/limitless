import { useState, useEffect } from 'react';

const PrivacyConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('analytics_consent');
    const consentDate = localStorage.getItem('analytics_consent_date');
    
    if (consent === null) {
      // Show consent banner if no preference set
      setShowConsent(true);
    } else {
      setConsentGiven(consent === 'true');
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('analytics_consent', 'true');
    localStorage.setItem('analytics_consent_date', new Date().toISOString());
    setShowConsent(false);
    setConsentGiven(true);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('analytics_consent', 'false');
    localStorage.setItem('analytics_consent_date', new Date().toISOString());
    setShowConsent(false);
    setConsentGiven(false);
  };

  const handleCustomize = () => {
    // This would open a modal with more options
    alert('Privacy settings would open in a modal in a real implementation');
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h3 className="font-bold text-lg">Privacy & Cookie Policy</h3>
          <p className="text-sm mt-1">
            We use cookies and similar technologies to improve your experience, 
            analyze traffic, and provide personalized content. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleAcceptNecessary}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm transition-colors"
          >
            Necessary Only
          </button>
          <button
            onClick={handleCustomize}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm transition-colors"
          >
            Customize
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsent;