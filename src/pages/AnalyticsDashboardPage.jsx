import React, { memo } from 'react';
import { motion } from 'framer-motion';
import PredictiveAnalyticsDashboard from '../components/PredictiveAnalyticsDashboard';
import MainLayout from '../components/layout/MainLayout';
import {
  BarChart3,
  Eye,
  Users,
  Clock,
  Smartphone,
  Monitor,
  Globe,
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
  Activity,
  Box
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const AnalyticsDashboardPage = memo(() => {
  const mockKPIs = [
    {
      title: 'Total Traffic',
      value: '24,531',
      change: '+12.5%',
      icon: Users,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10',
    },
    {
      title: 'Structural Views',
      value: '128,492',
      change: '+8.3%',
      icon: Eye,
      color: 'text-secondary-400',
      bg: 'bg-secondary-500/10',
    },
    {
      title: 'Average Epoch',
      value: '4m 32s',
      change: '+5.7%',
      icon: Clock,
      color: 'text-white',
      bg: 'bg-white/10',
    },
    {
      title: 'Bounce Rate',
      value: '32.4%',
      change: '-3.2%',
      icon: Activity,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10',
    },
  ];

  const mockTrafficSources = [
    { source: 'Neural Search', percentage: 45, value: '11,034' },
    { source: 'Direct Sync', percentage: 28, value: '6,871' },
    { source: 'Social Protocols', percentage: 15, value: '3,679' },
    { source: 'Referral Nodes', percentage: 8, value: '1,962' },
    { source: 'Data Emails', percentage: 4, value: '981' },
  ];

  const mockTopPages = [
    { page: '/architecture/core', views: '12,450', change: '+12%' },
    { page: '/services/neural', views: '8,921', change: '+8%' },
    { page: '/innovation/lab', views: '7,654', change: '+15%' },
    { page: '/contact/architect', views: '5,432', change: '+5%' },
    { page: '/blog/dispatch', views: '4,321', change: '+22%' },
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden">
        {/* Ambient Gradients */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header section with Stats */}
            <motion.div 
              className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="max-w-2xl">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                  <BarChart3 className="w-3 h-3 text-primary-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Real-time Telemetry</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">
                  Analytics <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-primary-500/30 decoration-offset-8">Dashboard</span>
                </motion.h1>
              </div>
              <motion.div variants={itemVariants} className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                   <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Global Status</span>
                   <span className="text-sm font-bold text-green-500 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      SYSTEMS NOMINAL
                   </span>
                </div>
              </motion.div>
            </motion.div>

            {/* KPI Cards Glass Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {mockKPIs.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-2xl ${kpi.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                      </div>
                      <div className={`text-xs font-black p-2 rounded-xl bg-white/5 border border-white/5 ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {kpi.change}
                      </div>
                    </div>
                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">{kpi.title}</p>
                    <h3 className="text-3xl font-black text-white tracking-tighter">{kpi.value}</h3>
                  </div>
                  {/* Decorative background icon */}
                  <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                    <kpi.icon className="w-32 h-32 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main visualization Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 p-1 rounded-[48px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 overflow-hidden shadow-3xl"
              >
                <div className="bg-[#0e1114]/80 backdrop-blur-3xl rounded-[46px] p-8 md:p-12 relative overflow-hidden">
                   <div className="flex items-center justify-between mb-12">
                      <div>
                        <h2 className="text-2xl font-black text-white">Predictive Trajectory</h2>
                        <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mt-1">Simulated Outcome Mapping</p>
                      </div>
                      <button className="p-2 rounded-xl bg-white/5 text-gray-500 hover:text-white transition-colors">
                        <Box className="w-5 h-5" />
                      </button>
                   </div>
                   
                   <div className="h-[400px]">
                      <PredictiveAnalyticsDashboard />
                   </div>
                   
                   <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <h2 className="text-xl font-black text-white mb-10 tracking-tight flex items-center gap-3">
                  <Globe className="w-5 h-5 text-secondary-400" /> Traffic Sources
                </h2>
                <div className="space-y-8">
                  {mockTrafficSources.map((source, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{source.source}</span>
                        <span className="text-xs font-black text-white">{source.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${source.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/5 text-center">
                   <TrendingUp className="w-6 h-6 text-primary-400 mx-auto mb-4" />
                   <p className="text-xs font-bold text-gray-400">Inbound velocity has increased by 14% since the last epoch.</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-10 rounded-[48px] bg-white/5 border border-white/10"
               >
                  <h2 className="text-xl font-black text-white mb-10 tracking-tight">Top Architectural Entrypoints</h2>
                  <div className="space-y-4">
                     {mockTopPages.map((page, index) => (
                       <div key={index} className="flex items-center justify-between p-5 rounded-3xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group">
                          <div className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary-400" />
                             <div>
                                <p className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight">{page.page}</p>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{page.views} Synced</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <span className="text-xs font-black text-green-500">{page.change}</span>
                             <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                          </div>
                       </div>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-10 rounded-[48px] bg-white/5 border border-white/10"
               >
                  <h2 className="text-xl font-black text-white mb-10 tracking-tight">Endpoint Synthesis</h2>
                  <div className="space-y-8">
                     {[
                       { device: 'Neural Mobile', icon: Smartphone, percent: 62, color: 'from-green-500 to-emerald-400' },
                       { device: 'Systemic Desktop', icon: Monitor, percent: 32, color: 'from-blue-500 to-cyan-400' },
                       { device: 'Tablet Nodes', icon: Box, percent: 6, color: 'from-purple-500 to-pink-400' }
                     ].map((item, idx) => (
                       <div key={idx} className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-gray-400">
                               <item.icon className="w-5 h-5" />
                               <span className="text-sm font-bold uppercase tracking-tight text-white">{item.device}</span>
                            </div>
                            <span className="text-lg font-black text-white">{item.percent}%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${item.percent}%` }}
                               viewport={{ once: true }}
                               transition={{ duration: 1.2, delay: idx * 0.1 }}
                               className={`h-full bg-gradient-to-r ${item.color}`}
                             />
                          </div>
                       </div>
                     ))}
                  </div>
               </motion.div>
            </div>

            {/* Global Telemetry CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 p-16 md:p-20 rounded-[64px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 text-center relative overflow-hidden"
            >
               <div className="relative z-10 space-y-10">
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic">Require Deep-Fiber <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Analytics</span>?</h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
                    Our architectural telemetry engine provides sub-millisecond precision across all systemic endpoints.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                     <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.2em] shadow-xl">
                        Request Pulse Access
                     </button>
                     <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-2 group">
                        Architecture Documentation <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </div>
               <div className="absolute inset-0 bg-grid-white/[0.02]" />
            </motion.div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
});

export default AnalyticsDashboardPage;
