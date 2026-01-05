// src/services/engagementService.js
class EngagementService {
  constructor() {
    this.followUpQueue = [];
    this.userInteractions = new Map();
    this.retentionStrategies = [];
  }

  // Track user interaction from auditor
  trackAuditorInteraction(userData, auditResults) {
    const interaction = {
      id: this.generateId(),
      type: 'auditor_interaction',
      timestamp: new Date().toISOString(),
      userData,
      auditResults,
      engagementScore: this.calculateEngagementScore(auditResults),
      nextAction: this.determineNextAction(auditResults),
    };

    this.userInteractions.set(userData.email, interaction);
    this.scheduleFollowUp(interaction);

    return interaction;
  }

  // Track sandbox usage
  trackSandboxUsage(sandboxId, usageData) {
    const interaction = {
      id: this.generateId(),
      type: 'sandbox_usage',
      timestamp: new Date().toISOString(),
      sandboxId,
      usageData,
      engagementScore: this.calculateSandboxEngagement(usageData),
      nextAction: this.determineSandboxNextAction(usageData),
    };

    // Update existing user interaction or create new one
    const existing = Array.from(this.userInteractions.values()).find(
      i => i.sandboxId === sandboxId
    );

    if (existing) {
      this.userInteractions.set(existing.userData?.email || existing.id, {
        ...existing,
        ...interaction,
      });
    } else {
      this.userInteractions.set(sandboxId, interaction);
    }

    this.scheduleFollowUp(interaction);

    return interaction;
  }

  // Calculate engagement score based on audit results
  calculateEngagementScore(auditResults) {
    // Higher scores for users with more issues (they need our solution more)
    const performanceIssues = auditResults.performance.lcp > 2500 ? 1 : 0;
    const seoIssues = auditResults.seo.issues.length;
    const securityIssues =
      auditResults.security.sslIssues.length +
      auditResults.security.headerIssues.length;
    const speedIssues = auditResults.speed.issues.length;

    // Calculate engagement score (0-100)
    const totalIssues =
      performanceIssues + seoIssues + securityIssues + speedIssues;
    const maxIssues = 15; // Maximum possible issues

    return Math.min(100, Math.round((totalIssues / maxIssues) * 100));
  }

  // Calculate sandbox engagement score
  calculateSandboxEngagement(usageData) {
    const { tourCompleted, tasksCompleted, featuresExplored } = usageData;
    const tourScore = tourCompleted ? 40 : 0;
    const taskScore = Math.min(30, tasksCompleted * 2); // 2 points per task
    const featureScore = Math.min(30, featuresExplored * 6); // 6 points per feature

    return Math.min(100, tourScore + taskScore + featureScore);
  }

  // Determine next action based on audit results
  determineNextAction(auditResults) {
    if (auditResults.limitlessScore < 60) {
      return {
        type: 'high_priority_followup',
        message: 'User has significant performance issues - send premium offer',
        delay: 24 * 60 * 60 * 1000, // 24 hours
      };
    } else if (auditResults.limitlessScore < 80) {
      return {
        type: 'medium_priority_followup',
        message: 'User has moderate issues - send case study',
        delay: 48 * 60 * 60 * 1000, // 48 hours
      };
    } else {
      return {
        type: 'low_priority_followup',
        message: 'User has good performance - send newsletter',
        delay: 7 * 24 * 60 * 60 * 1000, // 1 week
      };
    }
  }

  // Determine next action based on sandbox usage
  determineSandboxNextAction(usageData) {
    const { tourCompleted, tasksCompleted, featuresExplored } = usageData;

    if (tourCompleted && tasksCompleted > 5) {
      return {
        type: 'conversion_attempt',
        message: 'Highly engaged user - offer trial extension or purchase',
        delay: 1 * 60 * 60 * 1000, // 1 hour
      };
    } else if (tourCompleted && featuresExplored > 3) {
      return {
        type: 'engagement_boost',
        message: 'Moderately engaged user - send additional resources',
        delay: 6 * 60 * 60 * 1000, // 6 hours
      };
    } else {
      return {
        type: 're-engagement',
        message: 'Low engagement - send reminder and support',
        delay: 24 * 60 * 60 * 1000, // 24 hours
      };
    }
  }

  // Schedule follow-up action
  scheduleFollowUp(interaction) {
    const followUp = {
      id: this.generateId(),
      interactionId: interaction.id,
      scheduledTime: new Date(
        Date.now() + interaction.nextAction.delay
      ).toISOString(),
      actionType: interaction.nextAction.type,
      message: interaction.nextAction.message,
      status: 'scheduled',
    };

    this.followUpQueue.push(followUp);

    // Set timeout for follow-up action
    setTimeout(() => {
      this.executeFollowUp(followUp);
    }, interaction.nextAction.delay);

    return followUp;
  }

  // Execute follow-up action
  executeFollowUp(followUp) {
    followUp.status = 'executed';

    // Based on action type, execute appropriate follow-up
    switch (followUp.actionType) {
      case 'high_priority_followup':
        this.sendHighPriorityFollowUp(followUp);
        break;
      case 'medium_priority_followup':
        this.sendMediumPriorityFollowUp(followUp);
        break;
      case 'low_priority_followup':
        this.sendLowPriorityFollowUp(followUp);
        break;
      case 'conversion_attempt':
        this.sendConversionAttempt(followUp);
        break;
      case 'engagement_boost':
        this.sendEngagementBoost(followUp);
        break;
      case 're-engagement':
        this.sendReEngagement(followUp);
        break;
      default:
        console.log('Unknown follow-up type:', followUp.actionType);
    }
  }

  // Send high priority follow-up (premium offer)
  sendHighPriorityFollowUp(followUp) {
    console.log(
      `Sending high priority follow-up to user: ${followUp.interactionId}`
    );
    // In a real implementation, this would send an email with a premium offer
    // and potentially trigger a sales call
  }

  // Send medium priority follow-up (case study)
  sendMediumPriorityFollowUp(followUp) {
    console.log(
      `Sending medium priority follow-up to user: ${followUp.interactionId}`
    );
    // In a real implementation, this would send a relevant case study
  }

  // Send low priority follow-up (newsletter)
  sendLowPriorityFollowUp(followUp) {
    console.log(
      `Sending low priority follow-up to user: ${followUp.interactionId}`
    );
    // In a real implementation, this would send a newsletter
  }

  // Send conversion attempt
  sendConversionAttempt(followUp) {
    console.log(
      `Sending conversion attempt to user: ${followUp.interactionId}`
    );
    // In a real implementation, this would send a special offer to convert
    // the sandbox user to a paying customer
  }

  // Send engagement boost
  sendEngagementBoost(followUp) {
    console.log(`Sending engagement boost to user: ${followUp.interactionId}`);
    // In a real implementation, this would send additional resources
  }

  // Send re-engagement
  sendReEngagement(followUp) {
    console.log(`Sending re-engagement to user: ${followUp.interactionId}`);
    // In a real implementation, this would send a re-engagement email
  }

  // Get user engagement data
  getUserEngagement(email) {
    return this.userInteractions.get(email);
  }

  // Get all follow-ups for a user
  getUserFollowUps(email) {
    const userInteraction = this.userInteractions.get(email);
    if (!userInteraction) return [];

    return this.followUpQueue.filter(
      followUp => followUp.interactionId === userInteraction.id
    );
  }

  // Track retargeting pixel events
  trackRetargetingEvent(userId, eventType, eventData) {
    const retargetingEvent = {
      id: this.generateId(),
      userId,
      eventType,
      eventData,
      timestamp: new Date().toISOString(),
      targetAudience: this.determineRetargetingAudience(eventData),
    };

    // In a real implementation, this would send data to ad platforms
    console.log('Retargeting event:', retargetingEvent);

    return retargetingEvent;
  }

  // Determine retargeting audience based on data
  determineRetargetingAudience(eventData) {
    if (eventData.auditResults && eventData.auditResults.limitlessScore < 60) {
      return 'performance_issues';
    } else if (
      eventData.auditResults &&
      eventData.auditResults.limitlessScore < 80
    ) {
      return 'moderate_issues';
    } else if (eventData.sandboxUsage && eventData.sandboxUsage.tourCompleted) {
      return 'sandbox_active';
    } else {
      return 'general_audience';
    }
  }

  // Generate unique ID
  generateId() {
    return (
      Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
    );
  }

  // Get engagement analytics
  getEngagementAnalytics() {
    const interactions = Array.from(this.userInteractions.values());
    const followUps = this.followUpQueue;

    return {
      totalInteractions: interactions.length,
      totalFollowUps: followUps.length,
      executedFollowUps: followUps.filter(f => f.status === 'executed').length,
      scheduledFollowUps: followUps.filter(f => f.status === 'scheduled')
        .length,
      avgEngagementScore:
        interactions.reduce((sum, i) => sum + (i.engagementScore || 0), 0) /
          interactions.length || 0,
      conversionRate: this.calculateConversionRate(interactions),
    };
  }

  // Calculate conversion rate
  calculateConversionRate(interactions) {
    // This would calculate actual conversion rate in a real implementation
    // For now, return a mock value
    return 15; // 15% mock conversion rate
  }
}

export default new EngagementService();
