import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
// import api from '../../services/api'; 
import PersistenceService from '../../services/enterprise/PersistenceService';
import EnterpriseProtocolService from '../../services/enterprise/EnterpriseProtocolService';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { 
  Cpu, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Shield, 
  ChevronRight, 
  Database, 
  Activity, 
  Server,
  Download,
  Eye,
  Trash2,
  X
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler
);

const AdminNexus = () => {
    const [leads, setLeads] = useState([]);
    const [chatLogs, setChatLogs] = useState([]);
    const [systemStatus, setSystemStatus] = useState(EnterpriseProtocolService.getSystemStatus());
    const [activeTab, setActiveTab] = useState('telemetry');
    const [selectedLead, setSelectedLead] = useState(null);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            try {
                // Fetch leads directly from the Persistence Service (supports Supabase & Local)
                const leadData = await PersistenceService.fetchAll('leads');
                setLeads(Array.isArray(leadData) ? leadData.reverse() : []);

                // For now, continue to simulate chat logs or fetch from persistence if valid
                try {
                     const chatData = await PersistenceService.fetchAll('chat_logs');
                     setChatLogs(Array.isArray(chatData) ? chatData.reverse() : []);
                } catch (e) {
                     // Keep chat logs empty if not implemented
                     setChatLogs([]);
                }

            } catch (error) {
                console.error('[AdminNexus] Data loading error:', error);
                setLeads([]);
            }
        };
        loadData();
        const interval = setInterval(loadData, 15000);
        return () => clearInterval(interval);
    }, []);

    const handleExport = async () => {
       try {
          await api.leads.export();
          alert('Lead Registry export initiated. Protocol: CSV/JSON-LD. Check terminal downloads.');
       } catch (error) {
          console.error('Export failed:', error);
       }
    };

    const leadChartData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            label: 'Inbound Inquiries',
            data: [12, 19, 15, 25, 22, 30, 45],
            borderColor: '#1ba6d6',
            backgroundColor: 'rgba(27, 166, 214, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 4
        }]
    };

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
            <SEO 
              title="Admin Nexus - Enterprise Intelligence" 
              description="Centralized telemetry, lead management, and platform security control node." 
            />
            {/* Lead Details Modal */}
            <AnimatePresence>
                {selectedLead && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0e1114]/80 backdrop-blur-3xl">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1c1f24] border border-white/10 rounded-[3rem] p-12 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        >
                            <button onClick={() => setSelectedLead(null)} className="absolute top-8 right-8 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all">
                                <X size={20} />
                            </button>
                            
                            <div className="flex items-center gap-6 mb-12">
                                <div className="p-4 rounded-2xl bg-[#1ba6d6]/10 border border-[#1ba6d6]/20">
                                    <Zap className="text-[#1ba6d6]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Lead <span className="text-[#1ba6d6] not-italic">Intelligence</span></h2>
                                    <p className="text-[0.6rem] font-black text-gray-600 uppercase tracking-widest">Inquiry Protocol: {selectedLead.subject || selectedLead.projectScope || 'General'}</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-[0.55rem] font-black text-[#1ba6d6] uppercase tracking-widest mb-2">Organization Node</p>
                                        <p className="text-lg font-bold text-white mb-1">{selectedLead.name || selectedLead.companyName || 'Inquiry Node'}</p>
                                        <p className="text-[0.65rem] text-gray-500 font-medium tracking-tight italic">{selectedLead.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-[0.55rem] font-black text-[#1ba6d6] uppercase tracking-widest mb-2">Temporal Marker</p>
                                        <p className="text-xs font-bold text-white uppercase tracking-tight">{new Date(selectedLead.timestamp || selectedLead._timestamp).toLocaleString()}</p>
                                        <p className="text-[0.65rem] text-gray-500 font-medium tracking-tight italic">Source: {selectedLead.page || 'Direct Nexus'}</p>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                    <p className="text-[0.55rem] font-black text-[#ffc957] uppercase tracking-widest mb-4">Inquiry Payload</p>
                                    <p className="text-sm text-gray-300 leading-relaxed italic font-medium">"{selectedLead.message || selectedLead.transformationGoals || 'No payload detected.'}"</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button className="flex-1 py-4 bg-[#1ba6d6] text-white text-[0.65rem] font-black uppercase tracking-widest rounded-xl hover:bg-[#1592bd] transition-all">
                                        Establish Sink Node
                                    </button>
                                    <button className="p-4 bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="max-w-[1440px] mx-auto">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatsCard title="Capture Leads" value={leads.length} icon={Database} color="bg-[#1ba6d6]" />
                    <StatsCard title="Neural Interactions" value={chatLogs.length} icon={MessageSquare} color="bg-[#ffc957]" />
                    <StatsCard title="Platform Uptime" value="99.99%" icon={Activity} color="bg-[#25d366]" />
                    <StatsCard title="Protocol Nodes" value="14" icon={Server} color="bg-white" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-3 space-y-4">
                        {[
                            { id: 'telemetry', name: 'System Telemetry', icon: Cpu },
                            { id: 'leads', name: 'Project Inquiries', icon: Zap },
                            { id: 'analytics', name: 'Conversion Matrix', icon: BarChart3 },
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
                                <div className="flex items-center justify-between mb-8">
                                   <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                       <Zap className="text-[#1ba6d6]" /> Inbound Project Leads
                                   </h3>
                                   <button 
                                     onClick={handleExport}
                                     className="flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
                                   >
                                      <Download size={14} className="text-[#1ba6d6]" />
                                      <span className="text-[0.6rem] font-black uppercase tracking-widest">Export Registry</span>
                                   </button>
                                </div>

                                <div className="space-y-4">
                                    {leads.length === 0 ? (
                                        <div className="p-12 text-center border-2 border-dashed border-white/5 rounded-3xl">
                                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Inert Data Stream detected.</p>
                                        </div>
                                    ) : (
                                        leads.map((lead, idx) => (
                                            <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/[0.08] transition-colors relative overflow-hidden group flex items-center justify-between">
                                                <div className="absolute top-0 right-0 w-1 h-full bg-[#1ba6d6] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <h4 className="text-lg font-black text-white tracking-tight">{lead.name || lead.companyName || 'Inquiry Node'}</h4>
                                                            <p className="text-[0.6rem] text-[#1ba6d6] font-black tracking-[0.2em] uppercase mt-1">{lead.email}</p>
                                                        </div>
                                                        <span className="text-[0.5rem] text-gray-600 font-bold uppercase tracking-widest">{new Date(lead.timestamp || lead._timestamp).toLocaleString()}</span>
                                                    </div>
                                                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-3">
                                                        <span className="px-3 py-1 bg-white/5 text-white/40 text-[0.5rem] font-black uppercase tracking-widest rounded-full border border-white/5">{lead.subject || lead.projectScope || 'General Inquiry'}</span>
                                                        <span className="px-3 py-1 bg-[#1ba6d6]/10 text-[#1ba6d6] text-[0.5rem] font-black uppercase tracking-widest rounded-full border border-[#1ba6d6]/20">Active Node</span>
                                                    </div>
                                                </div>
                                                <div className="ml-8">
                                                   <button 
                                                     onClick={() => setSelectedLead(lead)}
                                                     className="p-4 rounded-xl bg-white/5 hover:bg-[#1ba6d6] text-gray-500 hover:text-white transition-all group/btn"
                                                   >
                                                      <Eye size={20} className="transition-transform group-hover/btn:scale-110" />
                                                   </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'analytics' && (
                            <div className="space-y-12">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                        <BarChart3 className="text-[#1ba6d6]" /> Conversion Matrix
                                    </h3>
                                    <div className="px-4 py-1 bg-[#25d366]/10 border border-[#25d366]/20 rounded-full">
                                        <span className="text-[0.5rem] font-black text-[#25d366] uppercase tracking-[0.2em]">Efficiency: Optimal</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { label: 'Conversion Velocity', val: '14.2%', color: 'text-[#1ba6d6]' },
                                        { label: 'Attribution Accuracy', val: '99.4%', color: 'text-[#ffc957]' },
                                        { label: 'Decay Rate', val: '2.1%', color: 'text-red-400' }
                                    ].map((m, i) => (
                                        <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                                            <p className="text-[0.5rem] font-black text-gray-500 uppercase tracking-widest mb-2">{m.label}</p>
                                            <p className={`text-3xl font-black ${m.color} tracking-tighter`}>{m.val}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-[300px] w-full p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                                    <Line 
                                        data={leadChartData}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            scales: {
                                                y: { display: false },
                                                x: { grid: { display: false }, ticks: { color: 'rgba(255,255,255,0.2)', font: { size: 9, weight: 'bold' } } }
                                            },
                                            plugins: { legend: { display: false } }
                                        }}
                                    />
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
                                            <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-xl relative overflow-hidden">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-[0.5rem] font-black text-[#ffc957] uppercase tracking-widest">Inbound Vector</span>
                                                    <span className="text-[0.5rem] text-gray-600 uppercase tracking-widest">{new Date(log._timestamp).toLocaleTimeString()}</span>
                                                </div>
                                                <p className="text-xs text-gray-300 italic font-medium leading-relaxed">"{log.text}"</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="flex flex-col items-center justify-center p-20 text-center space-y-4">
                                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-6">
                                    <Shield size={32} className="text-red-500 animate-pulse" />
                                </div>
                                <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm">Restricted Protocol</h4>
                                <p className="text-[0.65rem] text-gray-600 max-w-xs uppercase font-bold tracking-widest leading-relaxed">Identity verification required for terminal access. Standby for biographic scan.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNexus;
