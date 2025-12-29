import { useEffect } from 'react';
import HeatmapIntegration from './HeatmapIntegration';
import { sendUserInteractionNotification } from '../services/notificationService';

const AnalyticsTracker = () => {
  useEffect(() => {
    // Check if running in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return; // Exit if not in browser
    }
    
    // Track page views
    const trackPageView = async () => {
      try {
        await sendUserInteractionNotification({
          type: 'page_view',
          url: window.location.pathname,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        });
      } catch (error) {
        console.error('Error sending page view notification:', error);
      }
    };

    // Track route changes (for SPA navigation)
    const handleRouteChange = async () => {
      setTimeout(trackPageView, 100); // Small delay to ensure new page is loaded
    };

    // Also track clicks for user interaction
    const handlePageClick = async (e) => {
      try {
        await sendUserInteractionNotification({
          type: 'click',
          element: e.target.tagName,
          url: window.location.pathname,
          timestamp: new Date().toISOString(),
        });
      } catch (error) {
        console.error('Error sending click notification:', error);
      }
    };
    
    // Initial page view tracking
    trackPageView();

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);
    
    // Listen for click events
    window.addEventListener('click', handlePageClick);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('click', handlePageClick);
    };
  }, []);

  return <HeatmapIntegration />;
};

export default AnalyticsTracker;
