import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Box,
  MessageSquare,
  FileText,
  Settings,
  Bell,
  Search,
  Zap,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Plus,
  Users,
  Activity,
  ShieldCheck,
  Package
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const ClientPortal = () => {
  const activeProjects = [
    { id: 1, name: 'Neural CRM V2', progress: 75, status: 'Synthesis', efficiency: '+12%' },
    { id: 2, name: 'Auralis Integration', progress: 40, status: 'Node Audit', efficiency: '+5%' },
  ];

  const recentActivity = [
    { id: 1, type: 'Update', text: 'Architecture audit completed for Neural CRM V2.', time: '2h ago', icon: Activity },
    { id: 2, type: 'Message', text: 'New message from Architect Sarah Chen regarding payload optimization.', time: '5h ago', icon: MessageSquare },
    { id: 3, type: 'System', text: 'Security protocols updated to Version 4.2.', time: '1d ago', icon: ShieldCheck },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30">
        {/* Dashboard Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Top Navigation / Header */}
        <header className="relative z-20 border-b border-white/5 bg-dark-950/50 backdrop-blur-3xl px-8 py-6">
           <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <LayoutDashboard className="w-6 h-6 text-primary-400" />
                 </div>
                 <div>
                    <h1 className="text-xl font-black italic tracking-tighter uppercase">Management <span className="text-primary-400">Console</span></h1>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Client Portal V4.2 — ID: LIS-9021</div>
                 </div>
              </div>

              <div className="hidden md:flex items-center gap-8">
                 <div className="relative">
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                    <Bell className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                 </div>
                 <div className="h-8 w-px bg-white/10" />
                 <div className="flex items-center gap-4">
                    <div className="text-right">
                       <div className="text-sm font-black text-white italic tracking-tight">Enterprise Node</div>
                       <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tier: Architect Plus</div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5">
                       <div className="w-full h-full rounded-[9px] bg-dark-900 flex items-center justify-center">
                          <Users className="w-5 h-5 text-white/50" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </header>

        <main className="relative z-10 p-8 pt-12 pb-32">
           <div className="max-w-7xl mx-auto space-y-12">
              
              {/* Quick Actions / Stats */}
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { label: 'Neural Throughput', val: '98.2%', icon: Zap, color: 'text-primary-400' },
                   { label: 'Active Alliances', val: '02', icon: Box, color: 'text-secondary-400' },
                   { label: 'System Integrity', val: 'Pristine', icon: ShieldCheck, color: 'text-white' },
                   { label: 'Temporal Savings', val: '45h', icon: Clock, color: 'text-primary-500' }
                 ].map((stat, idx) => (
                   <motion.div key={idx} variants={itemVariants} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                      <stat.icon className={`w-6 h-6 ${stat.color} mb-6 group-hover:scale-110 transition-transform`} />
                      <div className="text-3xl font-black text-white italic tracking-tighter mb-1">{stat.val}</div>
                      <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</div>
                   </motion.div>
                 ))}
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                 {/* Left Column: Active Projects */}
                 <div className="lg:col-span-2 space-y-12">
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" className="p-10 rounded-[56px] bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                       <div className="relative z-10">
                          <div className="flex items-center justify-between mb-12">
                             <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3">
                                <Activity className="w-6 h-6 text-primary-400" /> Architectural Feed
                             </h2>
                             <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-dark-900 transition-all">
                                <Plus className="w-4 h-4" />
                             </button>
                          </div>

                          <div className="space-y-6">
                             {activeProjects.map(project => (
                                <div key={project.id} className="p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all group">
                                   <div className="flex items-center justify-between mb-6">
                                      <div>
                                         <h3 className="text-lg font-black text-white italic tracking-tight">{project.name}</h3>
                                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{project.status}</p>
                                      </div>
                                      <div className="text-right">
                                         <div className="text-xl font-black text-primary-400 italic tracking-tighter">{project.progress}%</div>
                                         <div className="text-[8px] font-black text-green-500 uppercase tracking-widest">{project.efficiency} Efficiency Gains</div>
                                      </div>
                                   </div>
                                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                      <motion.div 
                                         initial={{ width: 0 }} animate={{ width: `${project.progress}%` }} transition={{ duration: 1.5, delay: 0.5 }}
                                         className="h-full bg-gradient-to-r from-primary-500 to-secondary-500" 
                                      />
                                   </div>
                                </div>
                             ))}
                          </div>
                          
                          <div className="mt-12 flex justify-center">
                             <button className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors">
                                View Full Archive <ChevronRight className="w-4 h-4" />
                             </button>
                          </div>
                       </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div variants={itemVariants} className="p-10 rounded-[56px] bg-white/5 border border-white/10 group hover:border-secondary-500/30 transition-all">
                          <FileText className="w-8 h-8 text-secondary-400 mb-8" />
                          <h3 className="text-xl font-black text-white italic tracking-tight mb-4 uppercase">Node Artifacts</h3>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">Access contracts, invoices, and architectural blueprints.</p>
                          <button className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:text-secondary-400 transition-colors">
                             OPEN VAULT <ArrowUpRight className="w-4 h-4" />
                          </button>
                       </motion.div>

                       <motion.div variants={itemVariants} className="p-10 rounded-[56px] bg-white/5 border border-white/10 group hover:border-primary-500/30 transition-all">
                          <Package className="w-8 h-8 text-primary-400 mb-8" />
                          <h3 className="text-xl font-black text-white italic tracking-tight mb-4 uppercase">Asset Library</h3>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">Synchronize components and global media nodes.</p>
                          <button className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:text-primary-400 transition-colors">
                             MANAGE REPO <ArrowUpRight className="w-4 h-4" />
                          </button>
                       </motion.div>
                    </div>
                 </div>

                 {/* Right Column: Console Activity */}
                 <div className="space-y-12">
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" className="p-10 rounded-[56px] bg-white/5 border border-white/10 backdrop-blur-3xl h-full flex flex-col">
                       <h2 className="text-xl font-black text-white italic uppercase tracking-tighter mb-10 flex items-center gap-3">
                          <Bell className="w-5 h-5 text-primary-400" /> Registry Logs
                       </h2>
                       
                       <div className="space-y-8 flex-1">
                          {recentActivity.map(activity => (
                             <div key={activity.id} className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary-500/30 transition-all">
                                   <activity.icon className="w-5 h-5 text-gray-600 group-hover:text-primary-400" />
                                </div>
                                <div>
                                   <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{activity.type} — {activity.time}</div>
                                   <p className="text-sm font-medium text-gray-300 leading-relaxed italic">{activity.text}</p>
                                </div>
                             </div>
                          ))}
                       </div>

                       <div className="mt-12 p-8 rounded-[40px] bg-primary-500/10 border border-primary-500/20">
                          <h4 className="text-sm font-black text-white italic tracking-tight mb-4 uppercase">Critical Support</h4>
                          <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest mb-6">
                             Average response latency: <span className="text-primary-400">12 minutes</span>
                          </p>
                          <button className="w-full py-4 bg-white text-dark-900 font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                             INITIATE PULSE
                          </button>
                       </div>
                    </motion.div>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default ClientPortal;
