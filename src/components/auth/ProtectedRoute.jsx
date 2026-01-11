// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, requiredPermission = null, requiredRole = null }) => {
    const { isAuthenticated, loading, hasPermission, hasRole } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0e1114]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#1ba6d6] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-sm uppercase tracking-widest">Authenticating...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirect to login with return URL
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    // Check for required permission
    if (requiredPermission && !hasPermission(requiredPermission)) {
        return <Navigate to="/access-denied" replace />;
    }

    // Check for required role
    if (requiredRole && !hasRole(requiredRole)) {
        return <Navigate to="/access-denied" replace />;
    }

    return children;
};

export default ProtectedRoute;
