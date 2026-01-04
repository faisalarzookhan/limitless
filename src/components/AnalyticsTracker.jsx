import { useEffect, useRef, useCallback } from 'react';
import { analyticsAPI } from '../services/analyticsAPI';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
  const location = useLocation();
  const sessionStarted = useRef(false);
  
  // Get or generate a session ID
  const getSessionId = useCallback(() => {
    let sessionId = localStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }, []);
  
  // Get or generate an anonymous ID
  const getAnonymousId = useCallback(() => {
    let anonymousId = localStorage.getItem('analytics_anonymous_id');
    if (!anonymousId) {
      anonymousId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('analytics_anonymous_id', anonymousId);
    }
    return anonymousId;
  }, []);
  
  // Track page view
  const trackPageView = useCallback(async () => {
    try {
      // Only track if user has consented to analytics
      const consent = localStorage.getItem('analytics_consent');
      if (consent === 'false') return;
      
      const pageData = {
        session_id: getSessionId(),
        anonymous_id: getAnonymousId(),
        page_url: window.location.pathname + window.location.search,
        page_title: document.title,
        referrer: document.referrer,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        screen_width: screen.width,
        screen_height: screen.height,
        device_type: getDeviceType(),
        browser: getBrowserInfo(),
        os: getOSInfo(),
        ip_address: null, // IP will be detected server-side
        user_agent: navigator.userAgent,
        load_time: performance.timing.loadEventEnd - performance.timing.navigationStart,
      };
      
      await analyticsAPI.trackPageView(pageData);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, [getSessionId, getAnonymousId]);
  
  // Track custom event
  const trackEvent = useCallback(async (eventName, properties = {}) => {
    try {
      // Only track if user has consented to analytics
      const consent = localStorage.getItem('analytics_consent');
      if (consent === 'false') return;
      
      await analyticsAPI.trackEvent(eventName, {
        ...properties,
        session_id: getSessionId(),
        anonymous_id: getAnonymousId(),
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }, [getSessionId, getAnonymousId]);
  
  // Track user interaction
  const trackInteraction = useCallback(async (interactionType, elementData = {}) => {
    try {
      // Only track if user has consented to analytics
      const consent = localStorage.getItem('analytics_consent');
      if (consent === 'false') return;
      
      await analyticsAPI.trackInteraction(interactionType, {
        ...elementData,
        session_id: getSessionId(),
        anonymous_id: getAnonymousId(),
        page_url: window.location.pathname,
      });
    } catch (error) {
      console.error('Error tracking interaction:', error);
    }
  }, [getSessionId, getAnonymousId]);
  
  // Track form submission
  const trackFormSubmission = useCallback(async (formId, formData, success = true) => {
    try {
      // Only track if user has consented to analytics
      const consent = localStorage.getItem('analytics_consent');
      if (consent === 'false') return;
      
      await analyticsAPI.trackFormSubmission(formId, {
        ...formData,
        session_id: getSessionId(),
        anonymous_id: getAnonymousId(),
      }, success);
    } catch (error) {
      console.error('Error tracking form submission:', error);
    }
  }, [getSessionId, getAnonymousId]);
  
  // Track conversion
  const trackConversion = useCallback(async (conversionName, value = 0, currency = 'USD', properties = {}) => {
    try {
      // Only track if user has consented to analytics
      const consent = localStorage.getItem('analytics_consent');
      if (consent === 'false') return;
      
      await analyticsAPI.trackConversion(conversionName, value, currency, {
        ...properties,
        session_id: getSessionId(),
        anonymous_id: getAnonymousId(),
      });
    } catch (error) {
      console.error('Error tracking conversion:', error);
    }
  }, [getSessionId, getAnonymousId]);
  
  // Get device type based on screen size
  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };
  
  // Get browser info
  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edg')) return 'Edge';
    if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
    return 'Unknown';
  };
  
  // Get OS info
  const getOSInfo = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Win')) return 'Windows';
    if (userAgent.includes('Mac')) return 'MacOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
  };
  
  // Track scroll depth
  const trackScrollDepth = useCallback(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track at 25%, 50%, 75%, and 100% scroll depth
      if (scrollPercent >= 25 && !localStorage.getItem('scrolled_25')) {
        trackInteraction('scroll', { depth: 25 });
        localStorage.setItem('scrolled_25', 'true');
      } else if (scrollPercent >= 50 && !localStorage.getItem('scrolled_50')) {
        trackInteraction('scroll', { depth: 50 });
        localStorage.setItem('scrolled_50', 'true');
      } else if (scrollPercent >= 75 && !localStorage.getItem('scrolled_75')) {
        trackInteraction('scroll', { depth: 75 });
        localStorage.setItem('scrolled_75', 'true');
      } else if (scrollPercent >= 95 && !localStorage.getItem('scrolled_100')) {
        trackInteraction('scroll', { depth: 100 });
        localStorage.setItem('scrolled_100', 'true');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trackInteraction]);
  
  // Initialize analytics
  useEffect(() => {
    // Check if user has given consent for analytics
    const consent = localStorage.getItem('analytics_consent');
    if (consent === null) {
      // Default to true if no preference set
      localStorage.setItem('analytics_consent', 'true');
    }
    
    // Start session if not already started
    if (!sessionStarted.current) {
      sessionStarted.current = true;
      
      analyticsAPI.trackSessionStart({
        session_id: getSessionId(),
        anonymous_id: getAnonymousId(),
        referrer: document.referrer,
        utm_params: getUTMParams(),
      });
    }
    
    // Track initial page view
    trackPageView();
    
    // Set up scroll tracking
    trackScrollDepth();
    
    // Set up interaction tracking
    const handleInteraction = (event) => {
      if (event.type === 'click') {
        trackInteraction('click', {
          element_id: event.target.id,
          element_class: event.target.className,
          element_tag: event.target.tagName,
          element_text: event.target.textContent?.substring(0, 100),
          x_position: event.clientX,
          y_position: event.clientY,
        });
      } else if (event.type === 'focus') {
        trackInteraction('focus', {
          element_id: event.target.id,
          element_class: event.target.className,
          element_tag: event.target.tagName,
        });
      }
    };
    
    window.addEventListener('click', handleInteraction);
    window.addEventListener('focus', handleInteraction, true);
    
    // Clean up
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('focus', handleInteraction, true);
    };
  }, [trackPageView, trackInteraction, trackScrollDepth, getSessionId, getAnonymousId]);
  
  // Track route changes
  useEffect(() => {
    trackPageView();
    
    // Reset scroll tracking for new page
    localStorage.removeItem('scrolled_25');
    localStorage.removeItem('scrolled_50');
    localStorage.removeItem('scrolled_75');
    localStorage.removeItem('scrolled_100');
  }, [location.pathname, trackPageView]);
  
  // Get UTM parameters from URL
  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {};
    
    if (urlParams.get('utm_source')) utmParams.utm_source = urlParams.get('utm_source');
    if (urlParams.get('utm_medium')) utmParams.utm_medium = urlParams.get('utm_medium');
    if (urlParams.get('utm_campaign')) utmParams.utm_campaign = urlParams.get('utm_campaign');
    if (urlParams.get('utm_term')) utmParams.utm_term = urlParams.get('utm_term');
    if (urlParams.get('utm_content')) utmParams.utm_content = urlParams.get('utm_content');
    
    return utmParams;
  };
  
  // Expose analytics functions globally for use in other components
  useEffect(() => {
    window.analytics = {
      trackEvent,
      trackInteraction,
      trackFormSubmission,
      trackConversion,
    };
  }, [trackEvent, trackInteraction, trackFormSubmission, trackConversion]);
  
  return null;
};

export default AnalyticsTracker;
