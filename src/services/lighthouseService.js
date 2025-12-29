// src/services/lighthouseService.js
class LighthouseService {
  constructor() {
    // In a real implementation, this would be the Google Lighthouse API endpoint
    // For now, we'll simulate the API calls with realistic mock data
    this.apiEndpoint =
      'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  }

  // Function to run a Lighthouse audit
  async runAudit(url, strategy = 'desktop') {
    try {
      // In a real implementation, we would call the actual Google API
      // For now, we'll simulate the API response with realistic data
      return await this.mockLighthouseAudit(url, strategy);
    } catch (error) {
      console.error('Lighthouse audit failed:', error);
      throw error;
    }
  }

  // Mock function to simulate Google Lighthouse API response
  async mockLighthouseAudit(url, strategy) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate realistic mock data based on the URL
    const mockAudit = {
      url: url,
      loadingExperience: {
        id: url,
        metrics: {
          CUMULATIVE_LAYOUT_SHIFT_SCORE: {
            category: 'GOOD',
            percentile: 75,
            value: 0.05,
          },
          FIRST_CONTENTFUL_PAINT_MS: {
            category: 'AVERAGE',
            percentile: 60,
            value: 1800,
          },
          FIRST_INPUT_DELAY_MS: {
            category: 'GOOD',
            percentile: 80,
            value: 80,
          },
          LARGEST_CONTENTFUL_PAINT_MS: {
            category: 'POOR',
            percentile: 25,
            value: 4200,
          },
        },
      },
      lighthouseResult: {
        requestedUrl: url,
        finalUrl: url,
        runWarnings: [],
        audits: {
          'first-contentful-paint': {
            score: Math.random() > 0.5 ? 0.8 : 0.6,
            numericValue: 1800 + Math.random() * 1000,
            displayValue: `${(1.8 + Math.random()).toFixed(2)} s`,
          },
          'largest-contentful-paint': {
            score: Math.random() > 0.7 ? 0.5 : 0.3,
            numericValue: 4000 + Math.random() * 1500,
            displayValue: `${(4.0 + Math.random() * 1.5).toFixed(2)} s`,
          },
          'first-input-delay': {
            score: Math.random() > 0.4 ? 0.9 : 0.7,
            numericValue: 80 + Math.random() * 70,
            displayValue: `${Math.floor(80 + Math.random() * 70)} ms`,
          },
          'cumulative-layout-shift': {
            score: Math.random() > 0.3 ? 0.85 : 0.65,
            numericValue: 0.05 + Math.random() * 0.15,
            displayValue: (0.05 + Math.random() * 0.15).toFixed(3),
          },
          'speed-index': {
            score: Math.random() > 0.5 ? 0.75 : 0.55,
            numericValue: 3500 + Math.random() * 2000,
            displayValue: `${Math.floor(3500 + Math.random() * 2000)} ms`,
          },
        },
        categories: {
          performance: {
            score: 0.65 + Math.random() * 0.25, // 0.65 to 0.90
          },
          accessibility: {
            score: 0.7 + Math.random() * 0.25, // 0.7 to 0.95
          },
          'best-practices': {
            score: 0.75 + Math.random() * 0.2, // 0.75 to 0.95
          },
          seo: {
            score: 0.6 + Math.random() * 0.35, // 0.6 to 0.95
          },
          pwa: {
            score: 0.3 + Math.random() * 0.4, // 0.3 to 0.7
          },
        },
      },
    };

    return mockAudit;
  }

  // Extract performance metrics from the audit result
  extractPerformanceMetrics(auditResult) {
    const lhr = auditResult.lighthouseResult;

    return {
      lcp: lhr.audits['largest-contentful-paint'].numericValue, // Largest Contentful Paint in ms
      fcp: lhr.audits['first-contentful-paint'].numericValue, // First Contentful Paint in ms
      cls: lhr.audits['cumulative-layout-shift'].numericValue, // Cumulative Layout Shift
      fid: lhr.audits['first-input-delay'].numericValue, // First Input Delay in ms
      si: lhr.audits['speed-index'].numericValue, // Speed Index in ms
    };
  }

  // Extract category scores
  extractCategoryScores(auditResult) {
    const categories = auditResult.lighthouseResult.categories;

    return {
      performance: Math.round(categories.performance.score * 100),
      accessibility: Math.round(categories.accessibility.score * 100),
      bestPractices: Math.round(categories['best-practices'].score * 100),
      seo: Math.round(categories.seo.score * 100),
      pwa: Math.round(categories.pwa.score * 100),
    };
  }

  // Get audit summary
  getAuditSummary(auditResult) {
    const performanceMetrics = this.extractPerformanceMetrics(auditResult);
    const categoryScores = this.extractCategoryScores(auditResult);

    return {
      performanceMetrics,
      categoryScores,
      overallScore: categoryScores.performance,
      timestamp: new Date().toISOString(),
    };
  }
}

export default new LighthouseService();
