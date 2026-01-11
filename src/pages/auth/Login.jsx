// src/pages/auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const from = location.state?.from || '/admin-nexus';

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setError(''); // Clear error on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await login(formData.email, formData.password, formData.rememberMe);
        
        if (result.success) {
            navigate(from, { replace: true });
        } else {
            setError(result.error);
        }
        
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0e1114] flex items-center justify-center px-4 py-12 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:80px_80px] -z-10 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <Link to="/" className="flex items-center justify-center gap-4 mb-12 group">
                    <div className="w-12 h-12 bg-[#1ba6d6] mask-facet flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <span className="text-white font-black text-2xl">L</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-extrabold tracking-tighter text-2xl leading-none uppercase">LIMITLESS</span>
                        <span className="text-[#1ba6d6] text-[0.6rem] font-bold tracking-[0.4em] mt-1 leading-none uppercase">Infotech Solution</span>
                    </div>
                </Link>

                {/* Login Card */}
                <div className="bg-[#1c1f24] border border-white/10 p-8 md:p-10 mask-facet">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-[#1ba6d6]/20 text-[#1ba6d6] text-[0.5rem] font-black uppercase tracking-[0.3em] rounded-full border border-[#1ba6d6]/30">
                                Secure Access
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">
                            Admin <span className="text-[#1ba6d6]">Portal</span>
                        </h1>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Enterprise Authentication System</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3"
                        >
                            <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-400">{error}</p>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <Mail size={14} />
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="admin@limitlessinfotech.com"
                                className="w-full bg-black/30 border border-white/10 p-4 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <Lock size={14} />
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your password"
                                    className="w-full bg-black/30 border border-white/10 p-4 pr-12 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                id="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className="w-4 h-4 bg-black/30 border border-white/10 rounded focus:ring-2 focus:ring-[#1ba6d6] text-[#1ba6d6]"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-400">
                                Remember me for 30 days
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-widest mask-btn hover:bg-[#f4b41a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Authenticating...
                                </>
                            ) : (
                                'Access System'
                            )}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="mt-8 p-4 bg-white/5 border border-white/5 rounded-xl">
                        <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#1ba6d6] mb-2">Demo Credentials</p>
                        <div className="space-y-1 text-xs text-gray-400">
                            <p><span className="text-gray-500">Admin:</span> admin@limitlessinfotech.com / Enterprise2026!</p>
                            <p><span className="text-gray-500">User:</span> demo@limitlessinfotech.com / Demo2026!</p>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link to="/" className="text-sm text-gray-400 hover:text-[#1ba6d6] transition-colors uppercase tracking-wider">
                        ← Return to Main Site
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
