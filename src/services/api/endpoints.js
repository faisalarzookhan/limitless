// src/services/api/endpoints.js

/**
 * API Endpoints Configuration
 * Centralized API endpoint definitions and request handlers
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class APIEndpoints {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.timeout = 30000; // 30 seconds
    }

    /**
     * Authentication Endpoints
     */
    auth = {
        login: () => `${this.baseURL}/auth/login`,
        logout: () => `${this.baseURL}/auth/logout`,
        register: () => `${this.baseURL}/auth/register`,
        refresh: () => `${this.baseURL}/auth/refresh`,
        resetPassword: () => `${this.baseURL}/auth/reset-password`,
        verifyEmail: () => `${this.baseURL}/auth/verify-email`,
    };

    /**
     * Lead Management Endpoints
     */
    leads = {
        create: () => `${this.baseURL}/leads`,
        getAll: () => `${this.baseURL}/leads`,
        getById: (id) => `${this.baseURL}/leads/${id}`,
        update: (id) => `${this.baseURL}/leads/${id}`,
        delete: (id) => `${this.baseURL}/leads/${id}`,
        export: () => `${this.baseURL}/leads/export`,
    };

    /**
     * Contact Form Endpoints
     */
    contact = {
        submit: () => `${this.baseURL}/contact`,
        getSubmissions: () => `${this.baseURL}/contact/submissions`,
    };

    /**
     * Analytics & KPI Endpoints
     */
    analytics = {
        pageviews: () => `${this.baseURL}/analytics/pageviews`,
        events: () => `${this.baseURL}/analytics/events`,
        conversions: () => `${this.baseURL}/analytics/conversions`,
        kpis: () => `${this.baseURL}/analytics/kpis`,
        dashboard: () => `${this.baseURL}/analytics/dashboard`,
        userActivity: () => `${this.baseURL}/analytics/user-activity`,
    };

    /**
     * Email Endpoints
     */
    email = {
        send: () => `${this.baseURL}/email/send`,
        newsletter: {
            subscribe: () => `${this.baseURL}/email/newsletter/subscribe`,
            unsubscribe: () => `${this.baseURL}/email/newsletter/unsubscribe`,
        },
    };

    /**
     * Portfolio Endpoints
     */
    portfolio = {
        getAll: () => `${this.baseURL}/portfolio`,
        getById: (id) => `${this.baseURL}/portfolio/${id}`,
        getByCategory: (category) => `${this.baseURL}/portfolio/category/${category}`,
    };

    /**
     * Blog Endpoints
     */
    blog = {
        getAll: () => `${this.baseURL}/blog`,
        getById: (id) => `${this.baseURL}/blog/${id}`,
        getByCategory: (category) => `${this.baseURL}/blog/category/${category}`,
        search: () => `${this.baseURL}/blog/search`,
    };

    /**
     * Job Application Endpoints
     */
    careers = {
        getJobs: () => `${this.baseURL}/careers/jobs`,
        getJobById: (id) => `${this.baseURL}/careers/jobs/${id}`,
        apply: () => `${this.baseURL}/careers/apply`,
        getApplications: () => `${this.baseURL}/careers/applications`,
    };

    /**
     * Services Endpoints
     */
    services = {
        getAll: () => `${this.baseURL}/services`,
        getById: (id) => `${this.baseURL}/services/${id}`,
        getQuote: () => `${this.baseURL}/services/quote`,
    };

    /**
     * User Management Endpoints
     */
    users = {
        getProfile: () => `${this.baseURL}/users/profile`,
        updateProfile: () => `${this.baseURL}/users/profile`,
        changePassword: () => `${this.baseURL}/users/change-password`,
        uploadAvatar: () => `${this.baseURL}/users/avatar`,
    };

    /**
     * Admin Endpoints
     */
    admin = {
        dashboard: () => `${this.baseURL}/admin/dashboard`,
        users: () => `${this.baseURL}/admin/users`,
        leads: () => `${this.baseURL}/admin/leads`,
        analytics: () => `${this.baseURL}/admin/analytics`,
        settings: () => `${this.baseURL}/admin/settings`,
    };

    /**
     * Notification Endpoints
     */
    notifications = {
        getAll: () => `${this.baseURL}/notifications`,
        markAsRead: (id) => `${this.baseURL}/notifications/${id}/read`,
        markAllAsRead: () => `${this.baseURL}/notifications/read-all`,
        delete: (id) => `${this.baseURL}/notifications/${id}`,
    };

    /**
     * File Upload Endpoints
     */
    files = {
        upload: () => `${this.baseURL}/files/upload`,
        delete: (id) => `${this.baseURL}/files/${id}`,
        getUrl: (id) => `${this.baseURL}/files/${id}/url`,
    };

    /**
     * Health Check Endpoints
     */
    health = {
        check: () => `${this.baseURL}/health`,
        status: () => `${this.baseURL}/health/status`,
    };

    /**
     * Generic HTTP request method
     */
    async request(url, options = {}) {
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        // Add auth token if available
        const token = localStorage.getItem('limitless_auth_session');
        if (token) {
            try {
                const session = JSON.parse(token);
                defaultOptions.headers['Authorization'] = `Bearer ${session.token}`;
            } catch (e) {
                console.error('Failed to parse auth token');
            }
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);

            const response = await fetch(url, {
                ...defaultOptions,
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Request Error:', error);
            throw error;
        }
    }

    /**
     * GET request
     */
    async get(url, options = {}) {
        return this.request(url, { ...options, method: 'GET' });
    }

    /**
     * POST request
     */
    async post(url, data, options = {}) {
        return this.request(url, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    /**
     * PUT request
     */
    async put(url, data, options = {}) {
        return this.request(url, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    /**
     * PATCH request
     */
    async patch(url, data, options = {}) {
        return this.request(url, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    /**
     * DELETE request
     */
    async delete(url, options = {}) {
        return this.request(url, { ...options, method: 'DELETE' });
    }
}

export default new APIEndpoints();
