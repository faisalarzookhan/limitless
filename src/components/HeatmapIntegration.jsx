import { useEffect, useState } from 'react';
import { sendUserInteractionNotification } from '../services/notificationService';

const HeatmapIntegration = () => {
  const [interactions, setInteractions] = useState([]);
  const [activeElements, setActiveElements] = useState(new Set());

  useEffect(() => {
    // Track mouse movements
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // Only record position every 100ms to avoid too many events
      if (Date.now() % 100 < 10) { // Approximately every 100ms
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenterX = (rect.left + rect.right) / 2;
          const elementCenterY = (rect.top + rect.bottom) / 2;
          
          const elementData = {
            x: (elementCenterX / window.innerWidth) * 100,
            y: (elementCenterY / window.innerHeight) * 100,
            element: element.tagName,
            id: element.id || 'no-id',
            className: element.className || 'no-class',
            timestamp: Date.now()
          };
          
          setInteractions(prev => [...prev.slice(-100), elementData]); // Keep last 100 interactions
        }
      }
    };

    // Track clicks
    const handleClick = (e) => {
      const element = e.target;
      const rect = element.getBoundingClientRect();
      const x = (rect.left + rect.right) / 2;
      const y = (rect.top + rect.bottom) / 2;
      
      const clickData = {
        x: (x / window.innerWidth) * 100,
        y: (y / window.innerHeight) * 100,
        element: element.tagName,
        id: element.id || 'no-id',
        className: element.className || 'no-class',
        type: 'click',
        timestamp: Date.now()
      };
      
      // Send interaction data to analytics service
      sendUserInteractionNotification({
        type: 'click',
        element: element.tagName,
        id: element.id,
        className: element.className,
        position: { x: clickData.x, y: clickData.y },
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
      });
      
      setInteractions(prev => [...prev.slice(-100), clickData]);
    };

    // Track scroll events
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      const scrollData = {
        scrollPercent,
        type: 'scroll',
        timestamp: Date.now()
      };
      
      setInteractions(prev => [...prev.slice(-50), scrollData]); // Keep last 50 scroll events
    };

    // Track form interactions
    const handleFormInteraction = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        const formData = {
          element: e.target.tagName,
          type: 'form_interaction',
          field: e.target.name || e.target.id || 'unknown',
          value: e.target.value,
          timestamp: Date.now()
        };
        
        sendUserInteractionNotification({
          type: 'form_interaction',
          field: e.target.name || e.target.id || 'unknown',
          value: e.target.value,
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
          userAgent: navigator.userAgent
        });
        
        setInteractions(prev => [...prev.slice(-50), formData]);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('input', handleFormInteraction);
    document.addEventListener('focus', handleFormInteraction, true);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('input', handleFormInteraction);
      document.removeEventListener('focus', handleFormInteraction, true);
    };
  }, []);

  // Function to get heatmap data for analytics
  const getHeatmapData = () => {
    return {
      interactions,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
  };

  // Function to send aggregated heatmap data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (interactions.length > 0) {
        // Send aggregated data to analytics service
        sendUserInteractionNotification({
          type: 'heatmap_aggregate',
          interactionCount: interactions.length,
          page: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        });
      }
    }, 30000); // Send every 30 seconds

    return () => clearInterval(interval);
  }, [interactions]);

  return null; // This component doesn't render anything visible
};

export default HeatmapIntegration;