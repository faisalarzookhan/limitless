// Notification Service for handling all user interaction notifications
import api from './api';

class NotificationService {
  constructor() {
    // Configuration for notification endpoints
    this.emailEndpoint = '/api/notifications/email';
    this.whatsappEndpoint = '/api/notifications/whatsapp';
  }

  // Enhanced notification function with fallbacks
  async sendNotification(type, data) {
    try {
      const notificationData = {
        type,
        data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer,
        source: 'frontend',
        priority: 'normal',
      };

      // Try to send notification to backend
      try {
        const response = await api.notifications.send(notificationData);
        return response;
      } catch (apiError) {
        console.error('API notification failed:', apiError);

        // Fallback 1: Try to send via email if primary method fails
        try {
          const fallbackResponse = await api.notifications.sendEmail({
            ...notificationData,
            type: `${type}-fallback`,
          });
          return { ...fallbackResponse, fallback: true };
        } catch (fallbackError) {
          console.error('Fallback notification failed:', fallbackError);

          // Fallback 2: Store in local storage for later retry
          this.queueNotificationForRetry(notificationData);

          // Fallback 3: Log to console
          console.log(`Notification failed: ${type}`, data);

          return {
            success: false,
            error: apiError.message,
            queuedForRetry: true,
          };
        }
      }
    } catch (error) {
      console.error('Error sending notification:', error);
      return { success: false, error: error.message };
    }
  }

  // Send lead generation notification
  async sendLeadNotification(leadData) {
    return this.sendNotification('lead', {
      ...leadData,
      category: 'lead-generation',
    });
  }

  // Send chat message notification
  async sendChatNotification(messageData) {
    return this.sendNotification('chat', {
      ...messageData,
      category: 'chat-conversation',
    });
  }

  // Send feedback notification
  async sendFeedbackNotification(feedbackData) {
    return this.sendNotification('feedback', {
      ...feedbackData,
      category: 'feedback',
    });
  }

  // Send contact form notification
  async sendContactNotification(contactData) {
    return this.sendNotification('contact', {
      ...contactData,
      category: 'contact-form',
    });
  }

  // Send job application notification
  async sendJobApplicationNotification(applicationData) {
    return this.sendNotification('job-application', {
      ...applicationData,
      category: 'job-application',
    });
  }

  // Send newsletter signup notification
  async sendNewsletterNotification(subscriptionData) {
    return this.sendNotification('newsletter', {
      ...subscriptionData,
      category: 'newsletter-signup',
    });
  }

  // Send user engagement notification
  async sendEngagementNotification(engagementData) {
    return this.sendNotification('engagement', {
      ...engagementData,
      category: 'user-engagement',
    });
  }

  // Send lead generation notification
  async sendLeadGenerationNotification(leadData) {
    return this.sendNotification('lead-generation', {
      ...leadData,
      category: 'lead-generation',
      action: 'lead-inquiry',
    });
  }

  // Send user question notification
  async sendQuestionNotification(questionData) {
    return this.sendNotification('question', {
      ...questionData,
      category: 'user-question',
    });
  }

  // Send general user interaction notification
  async sendUserInteractionNotification(interactionData) {
    return this.sendNotification('user-interaction', {
      ...interactionData,
      category: 'user-interaction',
    });
  }

  // Queue notification for retry when connection is available
  queueNotificationForRetry(notificationData) {
    try {
      const queue = JSON.parse(
        localStorage.getItem('notificationQueue') || '[]'
      );
      queue.push({
        ...notificationData,
        queuedAt: new Date().toISOString(),
        retryCount: 0,
      });
      localStorage.setItem('notificationQueue', JSON.stringify(queue));

      // Check for connection and retry if available
      this.setupRetryMechanism();
    } catch (error) {
      console.error('Error queuing notification for retry:', error);
    }
  }

  // Setup retry mechanism when connection is available
  setupRetryMechanism() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      // Use background sync if available
      navigator.serviceWorker.ready.then(registration => {
        if (registration.sync) {
          registration.sync.register('retry-notifications');
        }
      });
    } else {
      // Fallback: retry when online
      window.addEventListener('online', () => {
        this.retryQueuedNotifications();
      });
    }
  }

  // Retry queued notifications
  async retryQueuedNotifications() {
    try {
      const queue = JSON.parse(
        localStorage.getItem('notificationQueue') || '[]'
      );

      for (const notification of queue) {
        try {
          // Limit retry attempts
          if (notification.retryCount >= 3) {
            continue; // Skip if already retried 3 times
          }

          const response = await api.notifications.send({
            ...notification,
            retryCount: notification.retryCount + 1,
          });

          if (response.success) {
            // Remove successful notification from queue
            const updatedQueue = queue.filter(
              n => n.queuedAt !== notification.queuedAt
            );
            localStorage.setItem(
              'notificationQueue',
              JSON.stringify(updatedQueue)
            );
          }
        } catch (error) {
          console.error('Failed to retry notification:', error);
        }
      }
    } catch (error) {
      console.error('Error in retry mechanism:', error);
    }
  }

  // Track notification status
  async trackNotificationStatus(notificationId) {
    try {
      const response = await api.notifications.getById(notificationId);
      return response;
    } catch (error) {
      console.error('Error tracking notification status:', error);
      return { status: 'unknown', error: error.message };
    }
  }

  // Update notification status
  async updateNotificationStatus(notificationId, status, details = {}) {
    try {
      const response = await api.notifications.updateStatus(notificationId, {
        status,
        details,
        updatedAt: new Date().toISOString(),
      });
      return response;
    } catch (error) {
      console.error('Error updating notification status:', error);
      return { success: false, error: error.message };
    }
  }

  // Send email notification
  async sendEmailNotification(emailData) {
    try {
      const notificationData = {
        ...emailData,
        type: 'email',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer,
        source: 'frontend',
        priority: 'normal',
      };

      try {
        const response = await api.notifications.sendEmail(notificationData);
        return response;
      } catch (apiError) {
        console.error('Email notification failed:', apiError);

        // Fallback: log to console if API fails
        console.log('Email notification failed:', emailData);
        return { success: false, error: apiError.message };
      }
    } catch (error) {
      console.error('Error sending email notification:', error);
      return { success: false, error: error.message };
    }
  }

  // Send WhatsApp notification
  async sendWhatsAppNotification(whatsappData) {
    try {
      const notificationData = {
        ...whatsappData,
        type: 'whatsapp',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer,
        source: 'frontend',
        priority: 'normal',
      };

      try {
        const response = await api.notifications.sendWhatsApp(notificationData);
        return response;
      } catch (apiError) {
        console.error('WhatsApp notification failed:', apiError);

        // Fallback: log to console if API fails
        console.log('WhatsApp notification failed:', whatsappData);
        return { success: false, error: apiError.message };
      }
    } catch (error) {
      console.error('Error sending WhatsApp notification:', error);
      return { success: false, error: error.message };
    }
  }

  // Send multiple notifications
  async sendMultipleNotifications(notificationData) {
    try {
      const data = {
        ...notificationData,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer,
        source: 'frontend',
        priority: 'normal',
      };

      try {
        const response = await api.notifications.sendMultiple(data);
        return response;
      } catch (apiError) {
        console.error('Multiple notifications failed:', apiError);

        // Fallback: log to console if API fails
        console.log('Multiple notifications failed:', notificationData);
        return { success: false, error: apiError.message };
      }
    } catch (error) {
      console.error('Error sending multiple notifications:', error);
      return { success: false, error: error.message };
    }
  }

  // Get user notification preferences
  async getUserPreferences(userId) {
    try {
      // First try to get from backend API
      try {
        const response = await api.notifications.getUserPreferences(userId);
        return response;
      } catch (apiError) {
        console.error('API preferences fetch failed:', apiError);

        // Fallback to localStorage
        const preferences = localStorage.getItem(
          `notificationPreferences_${userId}`
        );
        if (preferences) {
          return JSON.parse(preferences);
        }

        // Default preferences if none found
        return {
          email: true,
          whatsapp: true,
          push: true,
          sms: false,
          notificationTypes: {
            lead: true,
            chat: true,
            feedback: true,
            contact: true,
            jobApplication: true,
            newsletter: true,
            engagement: true,
            question: true,
            userInteraction: true,
          },
        };
      }
    } catch (error) {
      console.error('Error getting user preferences:', error);
      return { error: error.message };
    }
  }

  // Set user notification preferences
  async setUserPreferences(userId, preferences) {
    try {
      // Update in backend API
      try {
        const response = await api.notifications.setUserPreferences(
          userId,
          preferences
        );

        // Update in localStorage as well for offline access
        localStorage.setItem(
          `notificationPreferences_${userId}`,
          JSON.stringify(preferences)
        );

        return response;
      } catch (apiError) {
        console.error('API preferences update failed:', apiError);

        // Fallback to localStorage only
        localStorage.setItem(
          `notificationPreferences_${userId}`,
          JSON.stringify(preferences)
        );

        return { success: true, savedLocally: true };
      }
    } catch (error) {
      console.error('Error setting user preferences:', error);
      return { success: false, error: error.message };
    }
  }

  // Check if user has enabled specific notification type
  async isNotificationEnabled(userId, notificationType) {
    try {
      const preferences = await this.getUserPreferences(userId || 'anonymous');

      if (preferences.error) {
        // If there's an error getting preferences, default to enabled
        return true;
      }

      // Check if specific notification type is enabled
      if (
        preferences.notificationTypes &&
        preferences.notificationTypes[notificationType]
      ) {
        return preferences.notificationTypes[notificationType];
      }

      // If notification type not specifically set, check general channel preferences
      return true; // Default to enabled if not specified
    } catch (error) {
      console.error('Error checking notification preference:', error);
      return true; // Default to enabled if there's an error
    }
  }

  // Get notification history for a user
  async getNotificationHistory(userId, filters = {}) {
    try {
      // First try to get from backend API
      try {
        const response = await api.notifications.getAll({
          userId,
          ...filters,
        });
        return response;
      } catch (apiError) {
        console.error('API notification history fetch failed:', apiError);

        // Fallback: get from localStorage
        const history = localStorage.getItem(`notificationHistory_${userId}`);
        if (history) {
          let parsedHistory = JSON.parse(history);

          // Apply filters locally if provided
          if (filters.type) {
            parsedHistory = parsedHistory.filter(n => n.type === filters.type);
          }
          if (filters.status) {
            parsedHistory = parsedHistory.filter(
              n => n.status === filters.status
            );
          }
          if (filters.dateFrom) {
            parsedHistory = parsedHistory.filter(
              n => new Date(n.timestamp) >= new Date(filters.dateFrom)
            );
          }
          if (filters.dateTo) {
            parsedHistory = parsedHistory.filter(
              n => new Date(n.timestamp) <= new Date(filters.dateTo)
            );
          }

          return { notifications: parsedHistory };
        }

        return { notifications: [] };
      }
    } catch (error) {
      console.error('Error getting notification history:', error);
      return { error: error.message };
    }
  }

  // Mark notification as read
  async markNotificationAsRead(notificationId) {
    try {
      const response = await api.notifications.markAsRead(notificationId);

      // Update in localStorage as well
      this.updateLocalNotificationStatus(notificationId, 'read');

      return response;
    } catch (error) {
      console.error('Error marking notification as read:', error);

      // Update in localStorage as fallback
      this.updateLocalNotificationStatus(notificationId, 'read');

      return { success: true, savedLocally: true };
    }
  }

  // Mark all notifications as read
  async markAllNotificationsAsRead(userId) {
    try {
      const response = await api.notifications.markAllAsRead({ userId });

      // Update in localStorage as well
      this.updateAllLocalNotificationsStatus(userId, 'read');

      return response;
    } catch (error) {
      console.error('Error marking all notifications as read:', error);

      // Update in localStorage as fallback
      this.updateAllLocalNotificationsStatus(userId, 'read');

      return { success: true, savedLocally: true };
    }
  }

  // Delete notification
  async deleteNotification(notificationId) {
    try {
      const response = await api.notifications.delete(notificationId);

      // Remove from localStorage as well
      this.removeLocalNotification(notificationId);

      return response;
    } catch (error) {
      console.error('Error deleting notification:', error);

      // Remove from localStorage as fallback
      this.removeLocalNotification(notificationId);

      return { success: true, deletedLocally: true };
    }
  }

  // Update notification status in localStorage
  updateLocalNotificationStatus(notificationId, status) {
    try {
      const history = JSON.parse(
        localStorage.getItem('notificationHistory') || '[]'
      );
      const updatedHistory = history.map(notification =>
        notification.id === notificationId
          ? { ...notification, status, updatedAt: new Date().toISOString() }
          : notification
      );
      localStorage.setItem(
        'notificationHistory',
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error('Error updating local notification status:', error);
    }
  }

  // Update all notification statuses in localStorage
  updateAllLocalNotificationsStatus(userId, status) {
    try {
      const history = JSON.parse(
        localStorage.getItem('notificationHistory') || '[]'
      );
      const updatedHistory = history.map(notification =>
        notification.userId === userId
          ? { ...notification, status, updatedAt: new Date().toISOString() }
          : notification
      );
      localStorage.setItem(
        'notificationHistory',
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error('Error updating all local notification statuses:', error);
    }
  }

  // Remove notification from localStorage
  removeLocalNotification(notificationId) {
    try {
      const history = JSON.parse(
        localStorage.getItem('notificationHistory') || '[]'
      );
      const updatedHistory = history.filter(
        notification => notification.id !== notificationId
      );
      localStorage.setItem(
        'notificationHistory',
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error('Error removing local notification:', error);
    }
  }

  // Track notification analytics
  async trackNotificationAnalytics(notificationId, event, metadata = {}) {
    try {
      const analyticsData = {
        notificationId,
        event,
        metadata,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      // Send to analytics API
      try {
        const response = await api.analytics.trackEvent(
          'notification-event',
          analyticsData
        );
        return response;
      } catch (apiError) {
        console.error('Analytics tracking failed:', apiError);

        // Fallback: store in localStorage for later sending
        this.queueAnalyticsEvent(analyticsData);

        return { success: true, queued: true };
      }
    } catch (error) {
      console.error('Error tracking notification analytics:', error);
      return { success: false, error: error.message };
    }
  }

  // Queue analytics event for later sending
  queueAnalyticsEvent(eventData) {
    try {
      const queue = JSON.parse(localStorage.getItem('analyticsQueue') || '[]');
      queue.push({
        ...eventData,
        queuedAt: new Date().toISOString(),
      });
      localStorage.setItem('analyticsQueue', JSON.stringify(queue));

      // Retry when online
      if (!navigator.onLine) {
        window.addEventListener('online', () => {
          this.sendQueuedAnalytics();
        });
      } else {
        // Send immediately if online
        this.sendQueuedAnalytics();
      }
    } catch (error) {
      console.error('Error queuing analytics event:', error);
    }
  }

  // Send queued analytics events
  async sendQueuedAnalytics() {
    try {
      const queue = JSON.parse(localStorage.getItem('analyticsQueue') || '[]');

      for (const event of queue) {
        try {
          await api.analytics.trackEvent('notification-event', event);

          // Remove successful event from queue
          const updatedQueue = queue.filter(e => e.queuedAt !== event.queuedAt);
          localStorage.setItem('analyticsQueue', JSON.stringify(updatedQueue));
        } catch (error) {
          console.error('Failed to send queued analytics:', error);
          break; // Stop on first failure to retry later
        }
      }
    } catch (error) {
      console.error('Error sending queued analytics:', error);
    }
  }

  // Get notification analytics
  async getNotificationAnalytics(notificationId) {
    try {
      const response = await api.analytics.getNotificationStats(notificationId);
      return response;
    } catch (error) {
      console.error('Error getting notification analytics:', error);
      return { error: error.message };
    }
  }

  // Get overall notification performance metrics
  async getNotificationPerformanceMetrics(filters = {}) {
    try {
      const response = await api.analytics.getNotificationPerformance(filters);
      return response;
    } catch (error) {
      console.error('Error getting notification performance metrics:', error);
      return { error: error.message };
    }
  }

  // Rate limiting for notifications
  async checkRateLimit(userId, notificationType, limit = 5, windowMs = 60000) {
    // Default: 5 notifications per minute
    try {
      const key = `rateLimit_${userId}_${notificationType}`;
      const now = Date.now();

      // Get existing rate limit data
      const rateLimitData = JSON.parse(
        localStorage.getItem(key) || '{"count": 0, "windowStart": null}'
      );

      // Reset window if it's expired
      if (
        !rateLimitData.windowStart ||
        now - rateLimitData.windowStart > windowMs
      ) {
        rateLimitData.count = 1;
        rateLimitData.windowStart = now;
        localStorage.setItem(key, JSON.stringify(rateLimitData));
        return { allowed: true, remaining: limit - 1 };
      }

      // Check if limit exceeded
      if (rateLimitData.count >= limit) {
        const timeToReset = windowMs - (now - rateLimitData.windowStart);
        return {
          allowed: false,
          remaining: 0,
          resetTime: new Date(rateLimitData.windowStart + windowMs),
          timeToReset,
        };
      }

      // Increment count and save
      rateLimitData.count++;
      localStorage.setItem(key, JSON.stringify(rateLimitData));

      return {
        allowed: true,
        remaining: limit - rateLimitData.count,
      };
    } catch (error) {
      console.error('Error checking rate limit:', error);
      // If there's an error with rate limiting, allow the notification to pass through
      return { allowed: true, remaining: -1 };
    }
  }

  // Get notification template
  getNotificationTemplate(templateName, variables = {}) {
    const templates = {
      'contact-form': {
        subject: 'New Contact Form Submission',
        body: `A new contact form submission has been received:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}
Message: {{message}}

Submitted on: {{timestamp}}`,
      },
      'job-application': {
        subject: 'New Job Application Received',
        body: `A new job application has been submitted:

Applicant: {{fullName}}
Email: {{email}}
Phone: {{phone}}
Position: {{position}}

Experience: {{experience}}
Education: {{education}}

Submitted on: {{timestamp}}`,
      },
      'newsletter-signup': {
        subject: 'New Newsletter Subscription',
        body: `A new user has subscribed to the newsletter:

Email: {{email}}
First Name: {{firstName}}

Subscribed on: {{timestamp}}`,
      },
      feedback: {
        subject: 'New Feedback Received',
        body: `A user has submitted feedback:

Name: {{name}}
Email: {{email}}
Rating: {{rating}}/5 stars
Category: {{category}}

Feedback: {{feedback}}

Submitted on: {{timestamp}}`,
      },
      'lead-generation': {
        subject: 'New Lead Generated',
        body: `A new lead has been generated:

Name: {{fullName}}
Email: {{email}}
Company: {{company}}

Project Title: {{projectTitle}}
Project Description: {{projectDescription}}

Budget: {{budget}}
Timeline: {{timeline}}

Submitted on: {{timestamp}}`,
      },
      'event-registration': {
        subject: 'New Event Registration',
        body: `A user has registered for an event:

Name: {{name}}
Email: {{email}}
Company: {{company}}

Event: {{eventName}}

Registered on: {{timestamp}}`,
      },
      'blog-comment': {
        subject: 'New Blog Comment',
        body: `A new comment has been posted on your blog:

Blog Post: {{blogTitle}}
Comment: {{comment}}
Author: {{author}}

Posted on: {{timestamp}}`,
      },
      'chat-message': {
        subject: 'New Chat Message',
        body: `A new chat message has been received:

Message: {{message}}
Page: {{page}}

Sent on: {{timestamp}}`,
      },
      'whatsapp-chat': {
        subject: 'New WhatsApp Chat Message',
        body: `A new WhatsApp chat message has been received:

Message: {{message}}
Sender: {{sender}}
Page: {{page}}

Sent on: {{timestamp}}`,
      },
    };

    const template = templates[templateName];
    if (!template) {
      return null;
    }

    // Replace variables in the template
    let processedSubject = template.subject;
    let processedBody = template.body;

    for (const [key, value] of Object.entries(variables)) {
      const placeholder = `{{${key}}}`;
      processedSubject = processedSubject.replace(
        new RegExp(placeholder, 'g'),
        value || 'N/A'
      );
      processedBody = processedBody.replace(
        new RegExp(placeholder, 'g'),
        value || 'N/A'
      );
    }

    return {
      subject: processedSubject,
      body: processedBody,
    };
  }

  // Comprehensive notification function that sends to both email and WhatsApp
  async sendComprehensiveNotification(notificationType, notificationData) {
    try {
      // Send to both email and WhatsApp
      const emailResult = await this.sendEmailNotification({
        ...notificationData,
        type: `${notificationType}-email`,
      });

      const whatsappResult = await this.sendWhatsAppNotification({
        ...notificationData,
        type: `${notificationType}-whatsapp`,
      });

      return {
        email: emailResult,
        whatsapp: whatsappResult,
        success: emailResult.success || whatsappResult.success, // At least one succeeded
      };
    } catch (error) {
      console.error('Comprehensive notification failed:', error);
      return { success: false, error: error.message };
    }
  }
}

// Create and export a singleton instance
export const notificationService = new NotificationService();

// Export individual functions for direct use
export const {
  sendNotification,
  sendLeadNotification,
  sendChatNotification,
  sendFeedbackNotification,
  sendContactNotification,
  sendJobApplicationNotification,
  sendNewsletterNotification,
  sendEngagementNotification,
  sendLeadGenerationNotification,
  sendQuestionNotification,
  sendUserInteractionNotification,
  sendEmailNotification,
  sendWhatsAppNotification,
  sendMultipleNotifications,
  sendComprehensiveNotification,
} = notificationService;

export default notificationService;
