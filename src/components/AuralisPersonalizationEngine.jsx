import { useState, useEffect } from 'react';
import { sendUserInteractionNotification } from '../services/notificationService';

const AuralisPersonalizationEngine = ({ children, userId = 'anonymous' }) => {
  const [userProfile, setUserProfile] = useState({
    industry: null,
    preferences: {},
    behavior: {},
    engagementLevel: 'low',
  });

  const [personalizedContent, setPersonalizedContent] = useState(children);

  // Mock industry detection based on user behavior
  const detectIndustry = behavior => {
    if (
      behavior.pagesVisited?.includes('/hr-ims') ||
      behavior.pagesVisited?.includes('/hr')
    ) {
      return 'Human Resources';
    } else if (
      behavior.pagesVisited?.includes('/trackit') ||
      behavior.pagesVisited?.includes('/project')
    ) {
      return 'Project Management';
    } else if (
      behavior.pagesVisited?.includes('/ecommerce') ||
      behavior.pagesVisited?.includes('/retail')
    ) {
      return 'E-commerce/Retail';
    } else if (
      behavior.pagesVisited?.includes('/healthcare') ||
      behavior.pagesVisited?.includes('/medical')
    ) {
      return 'Healthcare';
    } else if (
      behavior.pagesVisited?.includes('/finance') ||
      behavior.pagesVisited?.includes('/banking')
    ) {
      return 'Finance/Banking';
    } else {
      return 'Technology';
    }
  };

  // Mock content personalization based on industry
  const personalizeContent = (industry, originalContent) => {
    // This would typically modify the content based on industry
    // For now, we'll just track the personalization
    return originalContent;
  };

  // Track user behavior
  useEffect(() => {
    const trackBehavior = () => {
      const currentPath = window.location.pathname;
      const referrer = document.referrer;

      // Update behavior profile
      setUserProfile(prev => ({
        ...prev,
        behavior: {
          ...prev.behavior,
          lastPage: currentPath,
          pagesVisited: [...(prev.behavior.pagesVisited || []), currentPath],
          referrer,
          timestamp: Date.now(),
        },
      }));

      // Detect industry based on behavior
      const detectedIndustry = detectIndustry({
        pagesVisited: [
          ...(userProfile.behavior.pagesVisited || []),
          currentPath,
        ],
        referrer,
      });

      if (detectedIndustry && detectedIndustry !== userProfile.industry) {
        setUserProfile(prev => ({
          ...prev,
          industry: detectedIndustry,
        }));

        // Update personalized content
        setPersonalizedContent(personalizeContent(detectedIndustry, children));

        // Send notification about industry detection
        sendUserInteractionNotification({
          type: 'industry_detection',
          userId,
          industry: detectedIndustry,
          page: currentPath,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        });
      }
    };

    // Track initial behavior
    trackBehavior();

    // Track route changes
    const handleRouteChange = () => {
      setTimeout(trackBehavior, 100);
    };

    window.addEventListener('popstate', handleRouteChange);

    // Also track clicks and interactions
    const handleInteraction = e => {
      const element = e.target;
      const page = window.location.pathname;

      sendUserInteractionNotification({
        type: 'user_interaction',
        element: element.tagName,
        id: element.id,
        className: element.className,
        page,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });
    };

    document.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('click', handleInteraction);
    };
  }, [children, userId]);

  // Update engagement level based on behavior
  useEffect(() => {
    const calculateEngagementLevel = () => {
      const { behavior } = userProfile;
      if (!behavior.pagesVisited) return 'low';

      const pagesCount = behavior.pagesVisited.length;
      const timeOnSite = behavior.timestamp
        ? Date.now() - behavior.timestamp
        : 0;

      if (pagesCount >= 5 && timeOnSite > 300000) {
        // 5+ pages, 5+ minutes
        return 'high';
      } else if (pagesCount >= 3 && timeOnSite > 120000) {
        // 3+ pages, 2+ minutes
        return 'medium';
      } else {
        return 'low';
      }
    };

    setUserProfile(prev => ({
      ...prev,
      engagementLevel: calculateEngagementLevel(),
    }));
  }, [userProfile.behavior]);

  return (
    <div data-auralis-personalization={userProfile.industry || 'none'}>
      {personalizedContent}

      {/* Hidden tracking element to monitor personalization effectiveness */}
      <div
        className="hidden"
        data-personalization-industry={userProfile.industry}
        data-engagement-level={userProfile.engagementLevel}
      />
    </div>
  );
};

export default AuralisPersonalizationEngine;
