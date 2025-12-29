import { useEffect } from 'react';
import HeatmapIntegration from './HeatmapIntegration';
import { sendUserInteractionNotification } from '../services/notificationService';

const AnalyticsTracker = () => {
  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      sendUserInteractionNotification({
        type: 'page_view',
        url: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      });
    };

    // Initial page view tracking
    trackPageView();

    // Track route changes (for SPA navigation)
    const handleRouteChange = () => {
      setTimeout(trackPageView, 100); // Small delay to ensure new page is loaded
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);

    // For React Router, we can't directly listen to route changes here
    // but we'll rely on the heatmap integration for interaction tracking

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <HeatmapIntegration />;
};

export default AnalyticsTracker;