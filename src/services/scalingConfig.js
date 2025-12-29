// src/services/scalingConfig.js
// Configuration for automated scaling (backend infrastructure)

class ScalingConfig {
  constructor() {
    this.policies = new Map();
    this.metrics = new Map();
    this.scalingHistory = [];

    this.setupDefaultPolicies();
  }

  // Set up default scaling policies
  setupDefaultPolicies() {
    // CPU-based scaling policy
    this.policies.set('cpu-scaling', {
      name: 'CPU-Based Scaling',
      description: 'Scale based on CPU utilization',
      metric: 'cpu_utilization',
      threshold: 75, // Scale up when CPU > 75%
      cooldown: 300, // 5 minutes cooldown
      minInstances: 1,
      maxInstances: 10,
      scaleUp: {
        threshold: 75,
        adjustment: '+2',
        gracePeriod: 120,
      },
      scaleDown: {
        threshold: 25,
        adjustment: '-1',
        gracePeriod: 300,
      },
    });

    // Memory-based scaling policy
    this.policies.set('memory-scaling', {
      name: 'Memory-Based Scaling',
      description: 'Scale based on memory utilization',
      metric: 'memory_utilization',
      threshold: 80, // Scale up when memory > 80%
      cooldown: 300,
      minInstances: 1,
      maxInstances: 8,
      scaleUp: {
        threshold: 80,
        adjustment: '+1',
        gracePeriod: 180,
      },
      scaleDown: {
        threshold: 30,
        adjustment: '-1',
        gracePeriod: 450,
      },
    });

    // Request-based scaling policy
    this.policies.set('request-scaling', {
      name: 'Request-Based Scaling',
      description: 'Scale based on request rate',
      metric: 'requests_per_second',
      threshold: 100, // Scale up when > 100 requests/second
      cooldown: 120,
      minInstances: 2,
      maxInstances: 20,
      scaleUp: {
        threshold: 100,
        adjustment: '+3',
        gracePeriod: 60,
      },
      scaleDown: {
        threshold: 20,
        adjustment: '-1',
        gracePeriod: 240,
      },
    });

    // Response time-based scaling policy
    this.policies.set('response-time-scaling', {
      name: 'Response Time Scaling',
      description: 'Scale based on average response time',
      metric: 'avg_response_time',
      threshold: 2000, // Scale up when avg response > 2 seconds
      cooldown: 180,
      minInstances: 1,
      maxInstances: 15,
      scaleUp: {
        threshold: 2000,
        adjustment: '+2',
        gracePeriod: 90,
      },
      scaleDown: {
        threshold: 500,
        adjustment: '-1',
        gracePeriod: 300,
      },
    });
  }

  // Register a scaling metric
  registerMetric(name, config) {
    this.metrics.set(name, {
      name,
      ...config,
      lastValue: null,
      lastUpdate: null,
      status: 'registered',
    });
  }

  // Create a scaling policy
  createScalingPolicy(policyConfig) {
    const policy = {
      id:
        policyConfig.id ||
        `scaling-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: policyConfig.name,
      description: policyConfig.description,
      metric: policyConfig.metric,
      threshold: policyConfig.threshold,
      cooldown: policyConfig.cooldown || 300,
      minInstances: policyConfig.minInstances || 1,
      maxInstances: policyConfig.maxInstances || 10,
      scaleUp: policyConfig.scaleUp,
      scaleDown: policyConfig.scaleDown,
      enabled: policyConfig.enabled !== false,
      lastAction: null,
      status: 'created',
    };

    this.policies.set(policy.id, policy);
    return policy;
  }

  // Evaluate if scaling action is needed based on current metrics
  evaluateScalingAction(policyId) {
    const policy = this.policies.get(policyId);
    if (!policy || !policy.enabled) {
      return { action: 'none', reason: 'Policy not found or disabled' };
    }

    const metric = this.metrics.get(policy.metric);
    if (!metric || metric.lastValue === null) {
      return { action: 'none', reason: 'Metric not available' };
    }

    // Check cooldown period
    if (
      policy.lastAction &&
      Date.now() - policy.lastAction.timestamp < policy.cooldown * 1000
    ) {
      return { action: 'none', reason: 'Cooldown period active' };
    }

    // Determine scaling action
    if (metric.lastValue > policy.scaleUp.threshold) {
      return {
        action: 'scale-up',
        adjustment: policy.scaleUp.adjustment,
        reason: `Metric ${metric.name} (${metric.lastValue}) exceeds scale-up threshold (${policy.scaleUp.threshold})`,
      };
    } else if (metric.lastValue < policy.scaleDown.threshold) {
      return {
        action: 'scale-down',
        adjustment: policy.scaleDown.adjustment,
        reason: `Metric ${metric.name} (${metric.lastValue}) below scale-down threshold (${policy.scaleDown.threshold})`,
      };
    }

    return { action: 'none', reason: 'No scaling needed' };
  }

  // Apply scaling action
  async applyScalingAction(policyId, action) {
    const policy = this.policies.get(policyId);
    if (!policy) {
      throw new Error(`Scaling policy not found: ${policyId}`);
    }

    console.log(
      `Applying scaling action: ${action.action} for policy ${policy.name}`
    );

    // In a real implementation, this would call cloud provider APIs
    // For now, we'll simulate the action
    await this.simulateScalingAction(action, policy);

    // Record scaling action
    const scalingRecord = {
      policyId,
      policyName: policy.name,
      action: action.action,
      adjustment: action.adjustment,
      reason: action.reason,
      timestamp: new Date(),
      status: 'completed',
    };

    this.scalingHistory.push(scalingRecord);
    policy.lastAction = scalingRecord;

    return scalingRecord;
  }

  // Simulate scaling action (for demonstration)
  async simulateScalingAction(action, policy) {
    console.log(`Simulating ${action.action} action: ${action.adjustment}`);

    // Simulate scaling operation
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(
      `${action.action} operation completed for policy: ${policy.name}`
    );
  }

  // Update metric value
  updateMetricValue(metricName, value) {
    const metric = this.metrics.get(metricName);
    if (!metric) {
      throw new Error(`Metric not found: ${metricName}`);
    }

    metric.lastValue = value;
    metric.lastUpdate = new Date();
    metric.status = 'updated';

    // Check if any policies need to be evaluated
    this.evaluateAllPolicies();
  }

  // Evaluate all active policies
  evaluateAllPolicies() {
    for (const [policyId, policy] of this.policies) {
      if (policy.enabled) {
        const action = this.evaluateScalingAction(policyId);
        if (action.action !== 'none') {
          this.applyScalingAction(policyId, action).catch(error => {
            console.error(
              `Failed to apply scaling action for policy ${policyId}:`,
              error
            );
          });
        }
      }
    }
  }

  // Get all scaling policies
  getScalingPolicies() {
    return Array.from(this.policies.values());
  }

  // Get scaling policy by ID
  getScalingPolicy(policyId) {
    return this.policies.get(policyId);
  }

  // Get scaling history
  getScalingHistory(limit = 50) {
    return this.scalingHistory.slice(-limit);
  }

  // Get current scaling status
  getScalingStatus() {
    return {
      totalPolicies: this.policies.size,
      activePolicies: Array.from(this.policies.values()).filter(p => p.enabled)
        .length,
      metrics: Array.from(this.metrics.values()).map(m => ({
        name: m.name,
        lastValue: m.lastValue,
        lastUpdate: m.lastUpdate,
        status: m.status,
      })),
      lastScalingAction:
        this.scalingHistory.length > 0
          ? this.scalingHistory[this.scalingHistory.length - 1]
          : null,
    };
  }

  // Enable/disable a scaling policy
  setPolicyEnabled(policyId, enabled) {
    const policy = this.policies.get(policyId);
    if (!policy) {
      throw new Error(`Policy not found: ${policyId}`);
    }

    policy.enabled = enabled;
    return policy;
  }

  // Remove a scaling policy
  removeScalingPolicy(policyId) {
    return this.policies.delete(policyId);
  }

  // Get recommended instance count based on all active policies
  getRecommendedInstanceCount() {
    const recommendations = [];

    for (const [policyId, policy] of this.policies) {
      if (!policy.enabled) continue;

      const metric = this.metrics.get(policy.metric);
      if (!metric || metric.lastValue === null) continue;

      let recommended = policy.minInstances;

      if (metric.lastValue > policy.scaleUp.threshold) {
        // Scale up based on the adjustment
        const adjustment = parseInt(
          policy.scaleUp.adjustment.replace(/[^\d-+]/g, '')
        );
        recommended = Math.min(
          policy.maxInstances,
          policy.minInstances + adjustment
        );
      } else if (metric.lastValue < policy.scaleDown.threshold) {
        // Scale down based on the adjustment
        const adjustment = parseInt(
          policy.scaleDown.adjustment.replace(/[^\d-+]/g, '')
        );
        recommended = Math.max(
          policy.minInstances,
          policy.minInstances + adjustment
        );
      } else {
        // Keep current level
        recommended = policy.minInstances;
      }

      recommendations.push({
        policy: policy.name,
        recommended: recommended,
        current: metric.lastValue,
        threshold: policy.threshold,
      });
    }

    // Return the maximum recommended count from all policies
    if (recommendations.length === 0) {
      return { recommended: 1, recommendations: [] };
    }

    const maxRecommended = Math.max(...recommendations.map(r => r.recommended));

    return {
      recommended: maxRecommended,
      recommendations,
    };
  }

  // Setup default scaling configurations
  setupDefaultScaling() {
    // Register common metrics
    this.registerMetric('cpu_utilization', {
      description: 'CPU utilization percentage',
      unit: 'percentage',
      range: [0, 100],
    });

    this.registerMetric('memory_utilization', {
      description: 'Memory utilization percentage',
      unit: 'percentage',
      range: [0, 100],
    });

    this.registerMetric('requests_per_second', {
      description: 'Requests per second',
      unit: 'rps',
      range: [0, Infinity],
    });

    this.registerMetric('avg_response_time', {
      description: 'Average response time in milliseconds',
      unit: 'ms',
      range: [0, Infinity],
    });

    // Create additional custom policies
    this.createScalingPolicy({
      name: 'Custom Load-Based Scaling',
      description: 'Scale based on custom load metric',
      metric: 'requests_per_second',
      threshold: 50,
      cooldown: 180,
      minInstances: 2,
      maxInstances: 25,
      scaleUp: {
        threshold: 50,
        adjustment: '+2',
        gracePeriod: 120,
      },
      scaleDown: {
        threshold: 10,
        adjustment: '-1',
        gracePeriod: 300,
      },
    });
  }

  // Start monitoring and scaling evaluation
  startScalingMonitoring() {
    // Evaluate policies every minute
    setInterval(() => {
      this.evaluateAllPolicies();
    }, 60000); // Every minute
  }
}

// Create a singleton instance
const scalingConfig = new ScalingConfig();

// Setup default scaling configurations
scalingConfig.setupDefaultScaling();

export default scalingConfig;
