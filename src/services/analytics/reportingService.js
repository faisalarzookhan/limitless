// src/services/reportingService.js
// Service for generating automated reports

class ReportingService {
  constructor() {
    this.reports = new Map();
    this.reportTemplates = new Map();
    this.scheduledReports = new Map();

    this.setupDefaultTemplates();
  }

  // Set up default report templates
  setupDefaultTemplates() {
    this.reportTemplates.set('daily', {
      name: 'Daily Status Report',
      description:
        'Daily summary of system status, performance metrics, and events',
      schedule: '0 0 * * *', // Every day at midnight
      generate: this.generateDailyReport.bind(this),
    });

    this.reportTemplates.set('weekly', {
      name: 'Weekly Performance Report',
      description: 'Weekly analysis of performance metrics, errors, and trends',
      schedule: '0 1 * * 1', // Every Monday at 1 AM
      generate: this.generateWeeklyReport.bind(this),
    });

    this.reportTemplates.set('monthly', {
      name: 'Monthly Summary Report',
      description:
        'Monthly overview of system health, performance, and improvements',
      schedule: '0 2 1 * *', // First day of every month at 2 AM
      generate: this.generateMonthlyReport.bind(this),
    });

    this.reportTemplates.set('deployment', {
      name: 'Deployment Report',
      description: 'Report on deployment success/failure and performance',
      schedule: null, // Triggered manually on deployment
      generate: this.generateDeploymentReport.bind(this),
    });
  }

  // Generate daily status report
  async generateDailyReport(options = {}) {
    const startTime =
      options.startDate || new Date(Date.now() - 24 * 60 * 60 * 1000);
    const endTime = options.endDate || new Date();

    const metrics = await this.getMetricsForPeriod(startTime, endTime);
    const errors = await this.getErrorsForPeriod(startTime, endTime);
    const deployments = await this.getDeploymentsForPeriod(startTime, endTime);

    const report = {
      id: `daily-${Date.now()}`,
      type: 'daily',
      title: `Daily Status Report - ${new Date().toLocaleDateString()}`,
      generatedAt: new Date().toISOString(),
      period: {
        start: startTime.toISOString(),
        end: endTime.toISOString(),
      },
      summary: {
        uptime: this.calculateUptime(metrics),
        errorCount: errors.length,
        deploymentCount: deployments.length,
        performance: this.calculatePerformanceMetrics(metrics),
      },
      details: {
        metrics,
        errors,
        deployments,
      },
      trends: this.analyzeTrends(metrics, errors),
    };

    this.reports.set(report.id, report);
    return report;
  }

  // Generate weekly performance report
  async generateWeeklyReport(options = {}) {
    const startTime =
      options.startDate || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const endTime = options.endDate || new Date();

    const metrics = await this.getMetricsForPeriod(startTime, endTime);
    const errors = await this.getErrorsForPeriod(startTime, endTime);
    const performance = await this.getPerformanceMetricsForPeriod(
      startTime,
      endTime
    );

    const report = {
      id: `weekly-${Date.now()}`,
      type: 'weekly',
      title: `Weekly Performance Report - Week of ${startTime.toLocaleDateString()}`,
      generatedAt: new Date().toISOString(),
      period: {
        start: startTime.toISOString(),
        end: endTime.toISOString(),
      },
      summary: {
        avgResponseTime: this.calculateAverageResponseTime(performance),
        errorRate: this.calculateErrorRate(errors, metrics),
        uptime: this.calculateUptime(metrics),
        performanceScore: this.calculatePerformanceScore(performance),
      },
      details: {
        performance,
        errors,
        metrics,
      },
      comparisons: this.generateWeekOverWeekComparison(startTime, endTime),
    };

    this.reports.set(report.id, report);
    return report;
  }

  // Generate monthly summary report
  async generateMonthlyReport(options = {}) {
    const startTime =
      options.startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const endTime = options.endDate || new Date();

    const metrics = await this.getMetricsForPeriod(startTime, endTime);
    const errors = await this.getErrorsForPeriod(startTime, endTime);
    const deployments = await this.getDeploymentsForPeriod(startTime, endTime);

    const report = {
      id: `monthly-${Date.now()}`,
      type: 'monthly',
      title: `Monthly Summary Report - ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`,
      generatedAt: new Date().toISOString(),
      period: {
        start: startTime.toISOString(),
        end: endTime.toISOString(),
      },
      summary: {
        totalUptime: this.calculateUptime(metrics),
        totalErrors: errors.length,
        totalDeployments: deployments.length,
        performanceImprovement: this.calculatePerformanceImprovement(metrics),
        securityIssues: await this.getSecurityIssuesForPeriod(
          startTime,
          endTime
        ),
      },
      details: {
        metrics,
        errors,
        deployments,
      },
      recommendations: this.generateRecommendations(metrics, errors),
    };

    this.reports.set(report.id, report);
    return report;
  }

  // Generate deployment report
  async generateDeploymentReport(deploymentInfo) {
    const report = {
      id: `deployment-${deploymentInfo.id}-${Date.now()}`,
      type: 'deployment',
      title: `Deployment Report - ${deploymentInfo.name || 'Unknown'}`,
      generatedAt: new Date().toISOString(),
      deployment: deploymentInfo,
      summary: {
        success: deploymentInfo.success,
        duration: deploymentInfo.duration,
        environment: deploymentInfo.environment,
        changes: deploymentInfo.changes || [],
      },
      details: {
        steps: deploymentInfo.steps || [],
        errors: deploymentInfo.errors || [],
        performance: deploymentInfo.performance || {},
      },
    };

    this.reports.set(report.id, report);
    return report;
  }

  // Get metrics for a specific period
  async getMetricsForPeriod(startTime, endTime) {
    // In a real implementation, this would fetch from a metrics database
    // For now, we'll return mock data
    return [
      {
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        responseTime: 120,
        throughput: 45,
        errorRate: 0.02,
        uptime: 99.9,
      },
      {
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        responseTime: 95,
        throughput: 52,
        errorRate: 0.01,
        uptime: 99.95,
      },
    ];
  }

  // Get errors for a specific period
  async getErrorsForPeriod(startTime, endTime) {
    // In a real implementation, this would fetch from an error tracking system
    // For now, we'll return mock data
    return [
      {
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        type: 'API_ERROR',
        message: 'Database connection timeout',
        severity: 'high',
        count: 3,
      },
      {
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        type: 'FRONTEND_ERROR',
        message: 'Component failed to load',
        severity: 'medium',
        count: 1,
      },
    ];
  }

  // Get deployments for a specific period
  async getDeploymentsForPeriod(startTime, endTime) {
    // In a real implementation, this would fetch from a deployment tracking system
    // For now, we'll return mock data
    return [
      {
        id: 'deploy-123',
        timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        environment: 'staging',
        success: true,
        duration: 180,
        changes: [
          'Fixed bug in user authentication',
          'Updated payment processing',
        ],
      },
    ];
  }

  // Get performance metrics for a specific period
  async getPerformanceMetricsForPeriod(startTime, endTime) {
    // In a real implementation, this would fetch from a performance monitoring system
    // For now, we'll return mock data
    return [
      {
        timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
        lcp: 1800,
        fcp: 900,
        cls: 0.05,
        fid: 100,
      },
      {
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        lcp: 1600,
        fcp: 800,
        cls: 0.03,
        fid: 80,
      },
    ];
  }

  // Get security issues for a specific period
  async getSecurityIssuesForPeriod(startTime, endTime) {
    // In a real implementation, this would fetch from a security monitoring system
    // For now, we'll return mock data
    return [
      {
        id: 'sec-456',
        type: 'VULNERABILITY',
        severity: 'medium',
        description: 'Outdated dependency found',
        resolved: false,
      },
    ];
  }

  // Calculate uptime percentage
  calculateUptime(metrics) {
    if (!metrics || metrics.length === 0) return 0;

    const totalUptime = metrics.reduce((sum, metric) => sum + metric.uptime, 0);
    return totalUptime / metrics.length;
  }

  // Calculate average response time
  calculateAverageResponseTime(performanceMetrics) {
    if (!performanceMetrics || performanceMetrics.length === 0) return 0;

    const totalResponseTime = performanceMetrics.reduce(
      (sum, metric) => sum + metric.responseTime,
      0
    );
    return totalResponseTime / performanceMetrics.length;
  }

  // Calculate error rate
  calculateErrorRate(errors, metrics) {
    if (!metrics || metrics.length === 0) return 0;

    const totalErrors = errors.length;
    const totalRequests = metrics.reduce(
      (sum, metric) => sum + metric.throughput,
      0
    );

    return totalRequests > 0 ? (totalErrors / totalRequests) * 100 : 0;
  }

  // Calculate performance score
  calculatePerformanceScore(performanceMetrics) {
    if (!performanceMetrics || performanceMetrics.length === 0) return 0;

    // Calculate score based on Core Web Vitals
    let score = 0;
    performanceMetrics.forEach(metric => {
      // LCP score (lower is better, max 100)
      score += Math.max(0, Math.min(100, 100 - (metric.lcp / 2500) * 100));
      // FCP score (lower is better, max 100)
      score += Math.max(0, Math.min(100, 100 - (metric.fcp / 1800) * 100));
      // CLS score (lower is better, max 100)
      score += Math.max(0, Math.min(100, 100 - (metric.cls / 0.1) * 100));
    });

    return score / performanceMetrics.length;
  }

  // Calculate performance improvement
  calculatePerformanceImprovement(metrics) {
    if (!metrics || metrics.length < 2) return 0;

    const firstMetric = metrics[0];
    const lastMetric = metrics[metrics.length - 1];

    return (
      ((lastMetric.responseTime - firstMetric.responseTime) /
        firstMetric.responseTime) *
      100
    );
  }

  // Analyze trends
  analyzeTrends(metrics, errors) {
    const trend = {
      responseTime: this.analyzeMetricTrend(metrics, 'responseTime'),
      errorRate: this.analyzeMetricTrend(metrics, 'errorRate'),
      errorFrequency: this.analyzeErrorTrend(errors),
    };

    return trend;
  }

  // Analyze metric trend
  analyzeMetricTrend(metrics, metricName) {
    if (!metrics || metrics.length < 2) return 'stable';

    const firstValue = metrics[0][metricName];
    const lastValue = metrics[metrics.length - 1][metricName];

    if (lastValue > firstValue * 1.1) return 'degrading';
    if (lastValue < firstValue * 0.9) return 'improving';
    return 'stable';
  }

  // Analyze error trend
  analyzeErrorTrend(errors) {
    if (!errors || errors.length === 0) return 'decreasing';

    // Count errors in recent period vs earlier period
    const now = Date.now();
    const recentErrors = errors.filter(
      e => new Date(e.timestamp).getTime() > now - 12 * 60 * 60 * 1000 // Last 12 hours
    ).length;

    const earlierErrors = errors.filter(
      e =>
        new Date(e.timestamp).getTime() <= now - 12 * 60 * 60 * 1000 && // Before 12 hours ago
        new Date(e.timestamp).getTime() > now - 24 * 60 * 60 * 1000 // Within last 24 hours
    ).length;

    if (recentErrors > earlierErrors * 1.5) return 'increasing';
    if (recentErrors < earlierErrors * 0.5) return 'decreasing';
    return 'stable';
  }

  // Generate week-over-week comparison
  generateWeekOverWeekComparison(currentStart, currentEnd) {
    const previousStart = new Date(
      currentStart.getTime() - 7 * 24 * 60 * 60 * 1000
    );
    const previousEnd = new Date(
      currentEnd.getTime() - 7 * 24 * 60 * 60 * 1000
    );

    // In a real implementation, this would fetch data for both periods
    // For now, we'll return mock comparison data
    return {
      currentPeriod: {
        start: currentStart.toISOString(),
        end: currentEnd.toISOString(),
      },
      previousPeriod: {
        start: previousStart.toISOString(),
        end: previousEnd.toISOString(),
      },
      comparisons: {
        responseTime: {
          current: 120,
          previous: 145,
          change: -17.2,
          trend: 'improving',
        },
        errorRate: {
          current: 0.02,
          previous: 0.03,
          change: -33.3,
          trend: 'improving',
        },
        uptime: {
          current: 99.95,
          previous: 99.87,
          change: 0.08,
          trend: 'improving',
        },
      },
    };
  }

  // Generate recommendations
  generateRecommendations(metrics, errors) {
    const recommendations = [];

    // Performance recommendations
    if (metrics && metrics.length > 0) {
      const avgResponseTime =
        metrics.reduce((sum, m) => sum + m.responseTime, 0) / metrics.length;
      if (avgResponseTime > 500) {
        recommendations.push({
          type: 'performance',
          priority: 'high',
          description:
            'Average response time is high, consider optimizing API calls',
          action: 'Implement caching for frequently accessed data',
        });
      }
    }

    // Error recommendations
    if (errors && errors.length > 0) {
      const highSeverityErrors = errors.filter(e => e.severity === 'high');
      if (highSeverityErrors.length > 0) {
        recommendations.push({
          type: 'error',
          priority: 'critical',
          description: `Found ${highSeverityErrors.length} high severity errors`,
          action: 'Investigate and fix high severity errors immediately',
        });
      }
    }

    return recommendations;
  }

  // Schedule a report
  scheduleReport(reportType, schedule, options = {}) {
    if (!this.reportTemplates.has(reportType)) {
      throw new Error(`Unknown report type: ${reportType}`);
    }

    const reportId = `scheduled-${reportType}-${Date.now()}`;
    const scheduledReport = {
      id: reportId,
      type: reportType,
      schedule,
      options,
      lastGenerated: null,
      nextGeneration: this.calculateNextGeneration(schedule),
    };

    this.scheduledReports.set(reportId, scheduledReport);
    return scheduledReport;
  }

  // Calculate next generation time based on schedule (cron-like)
  calculateNextGeneration(schedule) {
    // Simple implementation - in a real app, use a cron parser
    const now = new Date();
    let nextTime = new Date(now);

    if (schedule === '0 0 * * *') {
      // Daily at midnight
      nextTime.setHours(24, 0, 0, 0); // Next day at midnight
    } else if (schedule === '0 1 * * 1') {
      // Weekly on Monday
      const dayOfWeek = now.getDay();
      const daysUntilNextMonday = dayOfWeek === 1 ? 7 : (8 - dayOfWeek) % 7;
      nextTime.setDate(now.getDate() + daysUntilNextMonday);
      nextTime.setHours(1, 0, 0, 0);
    } else if (schedule === '0 2 1 * *') {
      // Monthly on 1st
      nextTime.setMonth(nextTime.getMonth() + 1);
      nextTime.setDate(1);
      nextTime.setHours(2, 0, 0, 0);
    } else {
      // Default to 24 hours from now
      nextTime.setDate(nextTime.getDate() + 1);
    }

    return nextTime;
  }

  // Get all reports
  getAllReports() {
    return Array.from(this.reports.values());
  }

  // Get report by ID
  getReportById(reportId) {
    return this.reports.get(reportId);
  }

  // Get scheduled reports
  getScheduledReports() {
    return Array.from(this.scheduledReports.values());
  }

  // Export report in various formats
  exportReport(reportId, format = 'json') {
    const report = this.getReportById(reportId);
    if (!report) {
      throw new Error(`Report not found: ${reportId}`);
    }

    switch (format.toLowerCase()) {
      case 'json':
        return JSON.stringify(report, null, 2);
      case 'csv':
        return this.convertToCSV(report);
      case 'html':
        return this.convertToHTML(report);
      case 'pdf':
        // PDF generation would require additional libraries
        return this.convertToHTML(report);
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }

  // Convert report to CSV
  convertToCSV(report) {
    // Simplified CSV conversion
    let csv = 'Metric,Value,Time\n';

    if (report.summary) {
      Object.entries(report.summary).forEach(([key, value]) => {
        csv += `${key},${value},${report.generatedAt}\n`;
      });
    }

    return csv;
  }

  // Convert report to HTML
  convertToHTML(report) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${report.title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { background-color: #f5f5f5; padding: 15px; border-radius: 5px; }
          .summary { margin: 20px 0; }
          .summary-item { margin: 10px 0; }
          .details { margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${report.title}</h1>
          <p>Generated: ${new Date(report.generatedAt).toLocaleString()}</p>
        </div>
        
        <div class="summary">
          <h2>Summary</h2>
          ${Object.entries(report.summary)
            .map(
              ([key, value]) =>
                `<div class="summary-item"><strong>${key}:</strong> ${JSON.stringify(value)}</div>`
            )
            .join('')}
        </div>
        
        <div class="details">
          <h2>Details</h2>
          <pre>${JSON.stringify(report.details, null, 2)}</pre>
        </div>
      </body>
      </html>
    `;
  }
}

// Create a singleton instance
const reportingService = new ReportingService();

export default reportingService;
