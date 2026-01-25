/**
 * Analytics Configuration Service
 * Standardizes event tracking for enterprise lead qualification and conversion funnels.
 */

const AnalyticsConfig = {
    // Event category definitions
    CATEGORIES: {
        CONVERSION: 'Conversion',
        ENGAGEMENT: 'Engagement',
        SECURITY: 'Security',
        NAVIGATION: 'Navigation'
    },

    // Standard CTA Events
    trackCTA: (label, location) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'cta_click', {
                'event_category': 'Engagement',
                'event_label': label,
                'location': location
            });
        }
        console.log(`[Analytics] CTA Clicked: ${label} at ${location}`);
    },

    // Form Funnel Tracking
    trackFormStep: (formName, stepNumber, totalSteps) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'form_step', {
                'event_category': 'Conversion',
                'form_name': formName,
                'step': stepNumber,
                'total_steps': totalSteps
            });
        }
        console.log(`[Analytics] Form Step: ${formName} - ${stepNumber}/${totalSteps}`);
    },

    // Qualification Event
    trackQualification: (headcount, alignment) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'lead_qualified', {
                'event_category': 'Conversion',
                'headcount': headcount,
                'alignment': alignment
            });
        }
        console.log(`[Analytics] Lead Qualified: Headcount ${headcount}, Alignment ${alignment}`);
    }
};

export default AnalyticsConfig;
