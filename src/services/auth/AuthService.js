// src/services/auth/AuthService.js
import EnterpriseProtocol from '../enterprise/EnterpriseProtocolService';
import supabase from '../supabaseClient';

class AuthService {
    constructor() {
        this.storageKey = 'limitless_auth_session';
        this.users = [
            {
                id: 1,
                email: 'admin@limitlessinfotech.com',
                password: 'Enterprise2026!', // In production, this would be hashed
                name: 'System Administrator',
                role: 'admin',
                permissions: ['admin_nexus', 'analytics', 'client_portal', 'all']
            },
            {
                id: 2,
                email: 'demo@limitlessinfotech.com',
                password: 'Demo2026!',
                name: 'Demo User',
                role: 'user',
                permissions: ['analytics', 'client_portal']
            }
        ];
    }

    /**
     * Authenticate user with email and password
     */
    async login(email, password, rememberMe = false) {
        if (supabase) {
            try {
                const { data, error } = await supabase.auth.signInWithPassword({ email, password });
                
                if (error) {
                    // Fallback to mock users if Supabase fails (optional, or just return error)
                    // For now, if we have supabase configured, we assume we want to use it.
                    console.error('[Auth] Supabase login error:', error);
                    return { success: false, error: error.message };
                }

                if (data.user) {
                    // Map Supabase user to App user structure
                    const user = {
                        id: data.user.id,
                        email: data.user.email,
                        name: data.user.user_metadata?.full_name || data.user.email.split('@')[0],
                        role: data.user.user_metadata?.role || 'user',
                        permissions: data.user.user_metadata?.permissions || ['client_portal'] // Default permission
                    };

                    // For admin email fallback if metadata is empty
                    if (email === 'admin@limitlessinfotech.com' && user.role === 'user') {
                         user.role = 'admin';
                         user.permissions = ['admin_nexus', 'analytics', 'client_portal', 'all'];
                    }

                    const session = {
                        user,
                        token: data.session?.access_token,
                        timestamp: new Date().toISOString(),
                        expiresAt: data.session?.expires_at 
                            ? new Date(data.session.expires_at * 1000).toISOString() 
                            : this._getExpirationTime(rememberMe)
                    };

                    localStorage.setItem(this.storageKey, JSON.stringify(session));
                    EnterpriseProtocol.setProtocol('AUTH_STATUS', 'AUTHENTICATED');
                    
                    return { success: true, user };
                }
            } catch (err) {
                 console.error('[Auth] Unexpected error during Supabase login:', err);
                 // Fall through to mock? No, better to fail if Supabase was intended.
                 return { success: false, error: 'Authentication failed' };
            }
        }

        try {
            // Simulate network delay for realistic UX
            await new Promise(resolve => setTimeout(resolve, 800));

            const user = this.users.find(u => u.email === email && u.password === password);
            
            if (!user) {
                return {
                    success: false,
                    error: 'Invalid credentials. Please check your email and password.'
                };
            }

            // Create session
            const session = {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    permissions: user.permissions
                },
                token: this._generateToken(),
                timestamp: new Date().toISOString(),
                expiresAt: this._getExpirationTime(rememberMe)
            };

            // Store session
            localStorage.setItem(this.storageKey, JSON.stringify(session));
            
            // Update enterprise protocol
            EnterpriseProtocol.setProtocol('AUTH_STATUS', 'AUTHENTICATED');

            console.info('[Auth] Login successful:', user.email);
            
            return {
                success: true,
                user: session.user
            };
        } catch (error) {
            console.error('[Auth] Login error:', error);
            return {
                success: false,
                error: 'Authentication service unavailable. Please try again.'
            };
        }
    }

    /**
     * Logout current user
     */
    async logout() {
        if (supabase) {
            await supabase.auth.signOut();
        }
        localStorage.removeItem(this.storageKey);
        EnterpriseProtocol.setProtocol('AUTH_STATUS', 'UNAUTHENTICATED');
        console.info('[Auth] User logged out');
    }

    /**
     * Get current session
     */
    getSession() {
        try {
            const sessionData = localStorage.getItem(this.storageKey);
            if (!sessionData) return null;

            const session = JSON.parse(sessionData);
            
            // Check if session is expired
            if (new Date(session.expiresAt) < new Date()) {
                this.logout();
                return null;
            }

            return session;
        } catch (error) {
            console.error('[Auth] Session retrieval error:', error);
            return null;
        }
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return this.getSession() !== null;
    }

    /**
     * Get current user
     */
    getCurrentUser() {
        const session = this.getSession();
        return session ? session.user : null;
    }

    /**
     * Check if user has specific permission
     */
    hasPermission(permission) {
        const user = this.getCurrentUser();
        if (!user) return false;
        
        return user.permissions.includes(permission) || user.permissions.includes('all');
    }

    /**
     * Check if user has specific role
     */
    hasRole(role) {
        const user = this.getCurrentUser();
        return user && user.role === role;
    }

    // Private helper methods
    _generateToken() {
        return 'lt_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    }

    _getExpirationTime(rememberMe) {
        const now = new Date();
        const hours = rememberMe ? 720 : 24; // 30 days or 24 hours
        return new Date(now.getTime() + hours * 60 * 60 * 1000).toISOString();
    }
}

export default new AuthService();
