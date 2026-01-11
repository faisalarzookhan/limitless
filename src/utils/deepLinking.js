// src/utils/deepLinking.js

/**
 * Deep Linking Utility
 * Handles URL parameters, campaign tracking, referral links, and deep linking
 */

class DeepLinkingService {
    constructor() {
        this.params = new URLSearchParams(window.location.search);
        this.hash = window.location.hash;
    }

    /**
     * Get URL parameter
     */
    getParam(key) {
        return this.params.get(key);
    }

    /**
     * Get all URL parameters
     */
    getAllParams() {
        const params = {};
        for (const [key, value] of this.params.entries()) {
            params[key] = value;
        }
        return params;
    }

    /**
     * Set URL parameter without page reload
     */
    setParam(key, value) {
        this.params.set(key, value);
        this._updateURL();
    }

    /**
     * Remove URL parameter
     */
    removeParam(key) {
        this.params.delete(key);
        this._updateURL();
    }

    /**
     * Track campaign parameters (UTM)
     */
    trackCampaign() {
        const campaignData = {
            source: this.getParam('utm_source'),
            medium: this.getParam('utm_medium'),
            campaign: this.getParam('utm_campaign'),
            term: this.getParam('utm_term'),
            content: this.getParam('utm_content'),
        };

        // Store campaign data
        if (Object.values(campaignData).some(v => v !== null)) {
            localStorage.setItem('limitless_campaign', JSON.stringify({
                ...campaignData,
                timestamp: new Date().toISOString(),
                landingPage: window.location.pathname,
            }));

            console.info('[DeepLink] Campaign tracked:', campaignData);
        }

        return campaignData;
    }

    /**
     * Track referral
     */
    trackReferral() {
        const referralCode = this.getParam('ref');
        
        if (referralCode) {
            localStorage.setItem('limitless_referral', JSON.stringify({
                code: referralCode,
                timestamp: new Date().toISOString(),
                landingPage: window.location.pathname,
            }));

            console.info('[DeepLink] Referral tracked:', referralCode);
        }

        return referralCode;
    }

    /**
     * Generate shareable link
     */
    generateShareLink(path, params = {}) {
        const baseUrl = window.location.origin;
        const url = new URL(path, baseUrl);
        
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.set(key, value);
        });

        return url.toString();
    }

    /**
     * Generate campaign link
     */
    generateCampaignLink(path, campaignData) {
        const params = {
            utm_source: campaignData.source,
            utm_medium: campaignData.medium,
            utm_campaign: campaignData.campaign,
        };

        if (campaignData.term) params.utm_term = campaignData.term;
        if (campaignData.content) params.utm_content = campaignData.content;

        return this.generateShareLink(path, params);
    }

    /**
     * Generate referral link
     */
    generateReferralLink(path, referralCode) {
        return this.generateShareLink(path, { ref: referralCode });
    }

    /**
     * Handle deep link navigation
     */
    handleDeepLink() {
        // Check for specific deep link actions
        const action = this.getParam('action');
        const target = this.getParam('target');

        if (action && target) {
            console.info('[DeepLink] Handling deep link:', { action, target });
            
            // Dispatch custom event for deep link handling
            window.dispatchEvent(new CustomEvent('deeplink', {
                detail: { action, target, params: this.getAllParams() }
            }));
        }

        // Track campaign and referral
        this.trackCampaign();
        this.trackReferral();
    }

    /**
     * Scroll to element by ID from hash
     */
    scrollToHash() {
        if (this.hash) {
            const elementId = this.hash.substring(1);
            const element = document.getElementById(elementId);
            
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }

    /**
     * Get campaign data
     */
    getCampaignData() {
        try {
            const data = localStorage.getItem('limitless_campaign');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('[DeepLink] Failed to get campaign data:', error);
            return null;
        }
    }

    /**
     * Get referral data
     */
    getReferralData() {
        try {
            const data = localStorage.getItem('limitless_referral');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('[DeepLink] Failed to get referral data:', error);
            return null;
        }
    }

    /**
     * Clear campaign data
     */
    clearCampaignData() {
        localStorage.removeItem('limitless_campaign');
    }

    /**
     * Clear referral data
     */
    clearReferralData() {
        localStorage.removeItem('limitless_referral');
    }

    /**
     * Copy link to clipboard
     */
    async copyToClipboard(link) {
        try {
            await navigator.clipboard.writeText(link);
            console.info('[DeepLink] Link copied to clipboard');
            return true;
        } catch (error) {
            console.error('[DeepLink] Failed to copy link:', error);
            return false;
        }
    }

    /**
     * Share link via Web Share API
     */
    async shareLink(link, title, text) {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url: link,
                });
                console.info('[DeepLink] Link shared successfully');
                return true;
            } catch (error) {
                console.error('[DeepLink] Share failed:', error);
                return false;
            }
        } else {
            // Fallback to copy to clipboard
            return this.copyToClipboard(link);
        }
    }

    // Private methods

    _updateURL() {
        const newURL = `${window.location.pathname}?${this.params.toString()}${this.hash}`;
        window.history.replaceState({}, '', newURL);
    }
}

// Export singleton instance
const deepLinking = new DeepLinkingService();

// Auto-handle deep links on load
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        deepLinking.handleDeepLink();
        deepLinking.scrollToHash();
    });
}

export default deepLinking;
