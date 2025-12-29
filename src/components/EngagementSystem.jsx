import React, { useEffect } from 'react';
import engagementService from '../services/engagementService';

const EngagementSystem = ({
  userType = 'auditor',
  userData = {},
  results = {},
  onEngagementTracked = null,
}) => {
  useEffect(() => {
    if (
      userType === 'auditor' &&
      userData.email &&
      results.limitlessScore !== undefined
    ) {
      // Track auditor interaction
      const interaction = engagementService.trackAuditorInteraction(
        userData,
        results
      );
      if (onEngagementTracked) {
        onEngagementTracked(interaction);
      }
    } else if (userType === 'sandbox' && results.sandboxId) {
      // Track sandbox usage
      const interaction = engagementService.trackSandboxUsage(
        results.sandboxId,
        results.usageData
      );
      if (onEngagementTracked) {
        onEngagementTracked(interaction);
      }
    }
  }, [userType, userData, results, onEngagementTracked]);

  return null; // This component doesn't render anything, it just tracks engagement
};

export default EngagementSystem;
