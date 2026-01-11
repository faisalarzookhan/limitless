// src/pages/admin/AdminNexus.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, MessageSquare, Activity, Shield, Server, Zap, ChevronRight, Search } from 'lucide-react';
import ProtocolService from '../../services/enterprise/EnterpriseProtocolService';
import PersistenceService from '../../services/enterprise/PersistenceService';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminNexus = () => {
    const [leads, setLeads] = useState([]);
    const [chatLogs, setChatLogs] = useState([]);
    const [systemStatus, setSystemStatus] = useState(ProtocolService.getSystemStatus());
    const [activeTab, setActiveTab] = useState('telemetry');
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            try {
                const leadData = await PersistenceService.fetchAll('project_leads');
                const chatData = await PersistenceService.fetchAll('chat_interactions');
                setLeads(Array.isArray(leadData) ? leadData.reverse() : []);
                setChatLogs(Array.isArray(chatData) ? chatData.reverse() : []);
            } catch (error) {
                console.error('[AdminNexus] Data loading error:', error);
                // Set empty arrays on error to prevent crash
                setLeads([]);
                setChatLogs([]);
            }
        };
        loadData();
        
        // Refresh every 10 seconds for "Real-time" effect
        const interval = setInterval(loadData, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const StatsCard = ({ title, value, icon: Icon, color }) => (
        <div className="bg-[#1c1f24] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`}></div>
            <div className="flex items-center justify-between relative z-10">
                <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-widest text-gray-500 mb-2">{title}</p>
                    <h3 className="text-3xl font-black text-white tracking-tighter">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${color.replace('bg-', 'text-')}`}>
                    <Icon size={24} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0e1114] pt-32 pb-20 px-6 md:px-10 font-sans">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-[#1ba6d6]/20 text-[#1ba6d6] text-[0.5rem] font-black uppercase tracking-[0.3em] rounded-full border border-[#1ba6d6]/30">
                                System Version {systemStatus.system.VERSION}
                            </span>
                            <span className="flex items-center gap-1.5 text-[0.5rem] font-black uppercase tracking-[0.3em] text-[#25d366]">
                                <span className="w-1.5 h-1.5 bg-[#25d366] rounded-full animate-pulse"></span>
                                Uplink Stable
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                            Admin <span className="text-[#1ba6d6]">Nexus</span>
                        </h1>
                        <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Centralized Enterprise Intelligence & Telemetry</p>
                    </div>
                    
                    {/* User Info & Logout */}
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-xs font-bold text-white">{user?.name}</p>
                            <p className="text-[0.5rem] text-gray-500 uppercase tracking-wider">{user?.role}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 bg-white/5 border border-white/10 text-white font-black text-[0.6rem] uppercase tracking-widest hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatsCard title="Capture Leads" value={leads.length} icon={Database} color="bg-[#1ba6d6]" />
                    <StatsCard title="Neural Interactions" value={chatLogs.length} icon={MessageSquare} color="bg-[#ffc957]" />
                    <StatsCard title="Platform Uptime" value="99.99%" icon={Activity} color="bg-[#25d366]" />
                    <StatsCard title="Protocol Nodes" value="14" icon={Server} color="bg-white" />
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Sidebar / Navigation */}
                    <div className="lg:col-span-3 space-y-4">
                        {[
                            { id: 'telemetry', name: 'System Telemetry', icon: Cpu },
                            { id: 'leads', name: 'Project Inquiries', icon: Zap },
                            { id: 'neural', name: 'Neural Chat Logs', icon: MessageSquare },
                            { id: 'security', name: 'Security Protocols', icon: Shield },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border ${
                                    activeTab === item.id 
                                    ? 'bg-[#1ba6d6] border-[#1ba6d6] text-white' 
                                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon size={20} />
                                    <span className="text-[0.7rem] font-black uppercase tracking-widest">{item.name}</span>
                                </div>
                                <ChevronRight size={16} />
                            </button>
                        ))}
                    </div>

                    {/* Data Display */}
                    <div className="lg:col-span-9 bg-[#1c1f24] border border-white/5 rounded-3xl p-8 relative overflow-hidden min-h-[600px]">
                        {activeTab === 'telemetry' && (
                            <div className="space-y-8">
                                <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                    <Cpu className="text-[#1ba6d6]" /> System State Protocols
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#1ba6d6]">Active Protocols</p>
                                        {Object.entries(systemStatus.protocols).map(([key, value]) => (
                                            <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                                <span className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">{key.replace(/_/g, ' ')}</span>
                                                <span className="text-[0.65rem] font-black text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#ffc957]">Feature Flags</p>
                                        {Object.entries(systemStatus.features).map(([key, value]) => (
                                            <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                                <span className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">{key.replace(/_/g, ' ')}</span>
                                                <span className={`text-[0.65rem] font-black uppercase tracking-widest ${value ? 'text-[#25d366]' : 'text-gray-600'}`}>
                                                    {value ? 'ACTIVE' : 'STANDBY'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'leads' && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                    <Zap className="text-[#1ba6d6]" /> Inbound Project Leads
                                </h3>
                                <div className="space-y-4">
                                    {leads.length === 0 ? (
                                        <p className="text-gray-500 text-sm uppercase italic">No lead telemetry detected.</p>
                                    ) : (
                                        leads.map((lead, idx) => (
                                            <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/[0.08] transition-colors">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="text-lg font-black text-white tracking-tight">{lead.organization || 'Inquiry'}</h4>
                                                        <p className="text-xs text-[#1ba6d6] font-bold tracking-widest uppercase mt-1">{lead.email}</p>
                                                    </div>
                                                    <span className="text-[0.5rem] text-gray-500 font-bold uppercase tracking-widest">{new Date(lead._timestamp).toLocaleString()}</span>
                                                </div>
                                                <div className="mt-4 pt-4 border-t border-white/5 flex gap-4">
                                                    <span className="px-3 py-1 bg-white/5 text-white/60 text-[0.5rem] font-black uppercase tracking-widest rounded-full">{lead.needs}</span>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'neural' && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                    <MessageSquare className="text-[#ffc957]" /> Neural Chat Telemetry
                                </h3>
                                <div className="space-y-4">
                                    {chatLogs.length === 0 ? (
                                        <p className="text-gray-500 text-sm uppercase italic">No neural interactions recorded.</p>
                                    ) : (
                                        chatLogs.map((log, idx) => (
                                            <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-xl">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-[0.5rem] font-black text-[#ffc957] uppercase tracking-widest">Inbound Query</span>
                                                    <span className="text-[0.5rem] text-gray-600 uppercase tracking-widest">{new Date(log._timestamp).toLocaleTimeString()}</span>
                                                </div>
                                                <p className="text-xs text-gray-300 italic">"{log.text}"</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="flex flex-col items-center justify-center p-20 text-center space-y-4">
                                <Shield size={64} className="text-[#25d366] opacity-20" />
                                <h4 className="text-white font-black uppercase tracking-widest">Secure Area</h4>
                                <p className="text-xs text-gray-600 max-w-xs uppercase tracking-widest">Rerouting security telemetry through encrypted nexus protocols. Standby for SOC2 clearance.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNexus;
