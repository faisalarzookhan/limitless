import { createContext, useContext, useReducer } from 'react';
import { 
  sendComprehensiveNotification,
  sendLeadGenerationNotification,
  sendChatNotification,
  sendContactNotification,
  sendJobApplicationNotification,
  sendNewsletterNotification,
  sendFeedbackNotification
} from '../services/notificationService';

const NotificationContext = createContext();

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications]
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    case 'CLEAR_NOTIFICATIONS':
      return {
        ...state,
        notifications: []
      };
    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(n =>
          n.id === action.payload ? { ...n, read: true } : n
        )
      };
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    notifications: []
  });

  // Function to send comprehensive notifications for user interactions
  const sendUserInteractionNotification = async (interactionType, data) => {
    try {
      let notificationResult;
      
      // Route to specific notification based on interaction type
      switch(interactionType) {
        case 'lead-generation':
          notificationResult = await sendLeadGenerationNotification(data);
          break;
        case 'chat-message':
          notificationResult = await sendChatNotification(data);
          break;
        case 'contact-form':
          notificationResult = await sendContactNotification(data);
          break;
        case 'job-application':
          notificationResult = await sendJobApplicationNotification(data);
          break;
        case 'newsletter-signup':
          notificationResult = await sendNewsletterNotification(data);
          break;
        case 'feedback':
          notificationResult = await sendFeedbackNotification(data);
          break;
        case 'general':
        default:
          notificationResult = await sendComprehensiveNotification(interactionType, data);
          break;
      }

      // Add notification to state
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: Date.now().toString(),
          type: interactionType,
          data,
          timestamp: new Date().toISOString(),
          read: false,
          success: notificationResult?.success || false
        }
      });

      return notificationResult;
    } catch (error) {
      console.error('Error sending user interaction notification:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    notifications: state.notifications,
    sendUserInteractionNotification,
    markAsRead: (id) => dispatch({ type: 'MARK_AS_READ', payload: id }),
    removeNotification: (id) => dispatch({ type: 'REMOVE_NOTIFICATION', payload: id }),
    clearNotifications: () => dispatch({ type: 'CLEAR_NOTIFICATIONS' })
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};