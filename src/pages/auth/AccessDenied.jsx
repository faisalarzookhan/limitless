// src/pages/auth/AccessDenied.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AccessDenied = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-[#0e1114] flex items-center justify-center px-4 py-12 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:80px_80px] -z-10 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl text-center"
            >
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-32 h-32 mx-auto mb-8 bg-red-500/10 rounded-full flex items-center justify-center border-4 border-red-500/30"
                >
                    <ShieldAlert size={64} className="text-red-500" />
                </motion.div>

                {/* Content */}
                <div className="bg-[#1c1f24] border border-white/10 p-12 mask-facet">
                    <div className="mb-6">
                        <span className="px-4 py-2 bg-red-500/20 text-red-400 text-[0.6rem] font-black uppercase tracking-[0.3em] rounded-full border border-red-500/30">
                            Access Restricted
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
                        Access <span className="text-red-500">Denied</span>
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                        You don't have the required permissions to access this resource.
                    </p>

                    {user && (
                        <div className="mb-8 p-4 bg-white/5 border border-white/5 rounded-xl inline-block">
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-gray-500 mb-1">Current User</p>
                            <p className="text-sm text-white font-bold">{user.name}</p>
                            <p className="text-xs text-gray-400">{user.email}</p>
                            <p className="text-[0.6rem] uppercase tracking-wider text-[#1ba6d6] mt-2">Role: {user.role}</p>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="px-8 py-4 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-widest mask-btn hover:bg-[#f4b41a] transition-colors flex items-center justify-center gap-2"
                        >
                            <Home size={18} />
                            Return Home
                        </Link>

                        {user ? (
                            <button
                                onClick={logout}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                            >
                                <ArrowLeft size={18} />
                                Switch Account
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                            >
                                <ArrowLeft size={18} />
                                Login
                            </Link>
                        )}
                    </div>
                </div>

                {/* Additional Info */}
                <p className="mt-8 text-xs text-gray-600 uppercase tracking-wider">
                    If you believe this is an error, please contact your system administrator
                </p>
            </motion.div>
        </div>
    );
};

export default AccessDenied;
