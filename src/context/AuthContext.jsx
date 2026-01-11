// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from '../services/auth/AuthService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing session on mount
        const currentUser = AuthService.getCurrentUser();
        setUser(currentUser);
        setLoading(false);
    }, []);

    const login = async (email, password, rememberMe) => {
        const result = await AuthService.login(email, password, rememberMe);
        if (result.success) {
            setUser(result.user);
        }
        return result;
    };

    const logout = () => {
        AuthService.logout();
        setUser(null);
    };

    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        hasPermission: (permission) => AuthService.hasPermission(permission),
        hasRole: (role) => AuthService.hasRole(role)
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

