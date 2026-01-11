// src/services/analytics/KPIService.js

/**
 * KPI (Key Performance Indicator) Tracking Service
 * Tracks and reports on critical business metrics
 */
class KPIService {
    constructor() {
        this.storageKey = 'limitless_kpi_data';
        this.sessionKey = 'limitless_session_data';
        this.enabled = import.meta.env.VITE_ENABLE_ANALYTICS !== 'false';
    }

    /**
     * Initialize KPI tracking
     */
    init() {
        if (!this.enabled) {
            console.warn('[KPI] Analytics disabled');
            return;
        }

        this._initializeSession();
        this._trackPageView();
        this._setupEventListeners();
        
        console.info('[KPI] Service initialized');
    }

    /**
     * Track page view
     */
    trackPageView(pageName = null) {
        const page = pageName || window.location.pathname;
        
        this._recordEvent({
            type: 'pageview',
            page,
            timestamp: new Date().toISOString(),
            referrer: document.referrer,
            userAgent: navigator.userAgent,
        });

        this._updateKPI('pageviews', 1);
    }

    /**
     * Track conversion event
     */
    trackConversion(conversionType, value = null) {
        this._recordEvent({
            type: 'conversion',
            conversionType,
            value,
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
        });

        this._updateKPI('conversions', 1);
        this._updateKPI(`conversion_${conversionType}`, 1);
    }

    /**
     * Track lead generation
     */
    trackLead(leadData) {
        this._recordEvent({
            type: 'lead',
            ...leadData,
            timestamp: new Date().toISOString(),
            source: window.location.pathname,
        });

        this._updateKPI('leads', 1);
        this._updateKPI('lead_value', leadData.estimatedValue || 0);
    }

    /**
     * Track form submission
     */
    trackFormSubmission(formName, formData = {}) {
        this._recordEvent({
            type: 'form_submission',
            formName,
            fields: Object.keys(formData),
            timestamp: new Date().toISOString(),
        });

        this._updateKPI('form_submissions', 1);
        this._updateKPI(`form_${formName}`, 1);
    }

    /**
     * Track button click
     */
    trackButtonClick(buttonName, context = {}) {
        this._recordEvent({
            type: 'button_click',
            buttonName,
            ...context,
            timestamp: new Date().toISOString(),
        });

        this._updateKPI('button_clicks', 1);
    }

    /**
     * Track user engagement
     */
    trackEngagement(engagementType, duration = null) {
        this._recordEvent({
            type: 'engagement',
            engagementType,
            duration,
            timestamp: new Date().toISOString(),
        });

        this._updateKPI('engagement_events', 1);
        if (duration) {
            this._updateKPI('total_engagement_time', duration);
        }
    }

    /**
     * Track error
     */
    trackError(error, context = {}) {
        this._recordEvent({
            type: 'error',
            message: error.message,
            stack: error.stack,
            ...context,
            timestamp: new Date().toISOString(),
        });

        this._updateKPI('errors', 1);
    }

    /**
     * Track performance metric
     */
    trackPerformance(metric, value) {
        this._recordEvent({
            type: 'performance',
            metric,
            value,
            timestamp: new Date().toISOString(),
        });

        this._updateKPI(`perf_${metric}`, value);
    }

    /**
     * Get all KPIs
     */
    getKPIs() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : this._getDefaultKPIs();
        } catch (error) {
            console.error('[KPI] Failed to get KPIs:', error);
            return this._getDefaultKPIs();
        }
    }

    /**
     * Get specific KPI
     */
    getKPI(kpiName) {
        const kpis = this.getKPIs();
        return kpis[kpiName] || 0;
    }

    /**
     * Get KPI summary
     */
    getKPISummary() {
        const kpis = this.getKPIs();
        
        return {
            overview: {
                pageviews: kpis.pageviews || 0,
                uniqueVisitors: kpis.unique_visitors || 0,
                conversions: kpis.conversions || 0,
                leads: kpis.leads || 0,
            },
            engagement: {
                formSubmissions: kpis.form_submissions || 0,
                buttonClicks: kpis.button_clicks || 0,
                avgSessionDuration: this._calculateAvgSessionDuration(),
                bounceRate: this._calculateBounceRate(),
            },
            performance: {
                avgLoadTime: kpis.perf_load_time || 0,
                errors: kpis.errors || 0,
            },
            business: {
                conversionRate: this._calculateConversionRate(),
                leadValue: kpis.lead_value || 0,
            },
        };
    }

    /**
     * Reset KPIs
     */
    resetKPIs() {
        localStorage.setItem(this.storageKey, JSON.stringify(this._getDefaultKPIs()));
        console.info('[KPI] KPIs reset');
    }

    /**
     * Export KPI data
     */
    exportKPIs() {
        const kpis = this.getKPIs();
        const summary = this.getKPISummary();
        
        return {
            kpis,
            summary,
            exportedAt: new Date().toISOString(),
        };
    }

    // Private methods

    _initializeSession() {
        const sessionData = {
            sessionId: this._generateSessionId(),
            startTime: new Date().toISOString(),
            pageviews: 0,
            events: [],
        };

        sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
        this._updateKPI('unique_visitors', 1);
    }

    _setupEventListeners() {
        // Track time on page
        let startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const duration = Date.now() - startTime;
            this.trackEngagement('page_time', duration);
        });

        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage > maxScroll) {
                maxScroll = scrollPercentage;
                if (scrollPercentage >= 25 && scrollPercentage < 50) {
                    this.trackEngagement('scroll_25');
                } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
                    this.trackEngagement('scroll_50');
                } else if (scrollPercentage >= 75) {
                    this.trackEngagement('scroll_75');
                }
            }
        });
    }

    _recordEvent(event) {
        try {
            const sessionData = JSON.parse(sessionStorage.getItem(this.sessionKey) || '{}');
            sessionData.events = sessionData.events || [];
            sessionData.events.push(event);
            sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
        } catch (error) {
            console.error('[KPI] Failed to record event:', error);
        }
    }

    _updateKPI(kpiName, increment) {
        try {
            const kpis = this.getKPIs();
            kpis[kpiName] = (kpis[kpiName] || 0) + increment;
            kpis.lastUpdated = new Date().toISOString();
            localStorage.setItem(this.storageKey, JSON.stringify(kpis));
        } catch (error) {
            console.error('[KPI] Failed to update KPI:', error);
        }
    }

    _getDefaultKPIs() {
        return {
            pageviews: 0,
            unique_visitors: 0,
            conversions: 0,
            leads: 0,
            form_submissions: 0,
            button_clicks: 0,
            engagement_events: 0,
            total_engagement_time: 0,
            errors: 0,
            lead_value: 0,
            lastUpdated: new Date().toISOString(),
        };
    }

    _generateSessionId() {
        return 'session_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    }

    _calculateAvgSessionDuration() {
        const kpis = this.getKPIs();
        const totalTime = kpis.total_engagement_time || 0;
        const sessions = kpis.unique_visitors || 1;
        return Math.round(totalTime / sessions);
    }

    _calculateBounceRate() {
        const kpis = this.getKPIs();
        const visitors = kpis.unique_visitors || 1;
        const engaged = kpis.engagement_events || 0;
        return Math.round(((visitors - engaged) / visitors) * 100);
    }

    _calculateConversionRate() {
        const kpis = this.getKPIs();
        const visitors = kpis.unique_visitors || 1;
        const conversions = kpis.conversions || 0;
        return ((conversions / visitors) * 100).toFixed(2);
    }
}

export default new KPIService();
