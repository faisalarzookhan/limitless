import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
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
  ArcElement,
} from 'chart.js';
import { analyticsAPI } from '../services/analyticsAPI';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import ErrorBoundary from '../components/ErrorBoundary';
import {
  Users,
  Eye,
  MousePointer2,
  TrendingDown,
  TrendingUp,
  Activity,
  Calendar,
  Layers,
  BarChart,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  ChevronDown
} from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdvancedAnalyticsDashboard = () => {
  const { theme } = useApp();
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: [],
    events: [],
    conversions: [],
    totalUsers: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
  });
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7d');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await analyticsAPI.getComprehensiveDashboardData({ dateRange });
        setAnalyticsData(data.data || {
          pageViews: [],
          events: [],
          conversions: [],
          totalUsers: 0,
          uniqueVisitors: 0,
          bounceRate: 0,
          topPages: [],
          topEvents: [],
        });
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        setAnalyticsData({
          pageViews: [],
          events: [],
          conversions: [],
          totalUsers: 0,
          uniqueVisitors: 0,
          bounceRate: 0,
          topPages: [],
          topEvents: [],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange]);

  const pageViewsData = {
    labels: analyticsData.pageViews.map(pv => pv.date),
    datasets: [
      {
        label: 'Structural Throughput',
        data: analyticsData.pageViews.map(pv => pv.count),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#3b82f6',
      },
    ],
  };

  const eventsData = {
    labels: analyticsData.events.map(e => e.name),
    datasets: [
      {
        label: 'Protocol Activity',
        data: analyticsData.events.map(e => e.count),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 2,
      },
    ],
  };

  const conversionsData = {
    labels: analyticsData.conversions.map(c => c.name),
    datasets: [
      {
        label: 'Node Conversion',
        data: analyticsData.conversions.map(c => c.count),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        hoverBackgroundColor: '#3b82f6',
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#94a3b8',
          padding: 20,
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 11,
            weight: 'bold'
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleFont: { size: 14, weight: 'black' },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 12,
        displayColors: false,
      }
    },
    scales: {
      x: {
        ticks: { color: '#64748b', font: { size: 10, weight: 'bold' } },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#64748b', font: { size: 10, weight: 'bold' } },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-t-2 border-primary-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary-400 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  const kpis = [
    { label: 'Total Syncs', value: analyticsData.totalUsers, icon: Users, change: '+12%', color: 'text-primary-400', bg: 'bg-primary-500/10' },
    { label: 'Neural Visits', value: analyticsData.uniqueVisitors, icon: Eye, change: '+8%', color: 'text-secondary-400', bg: 'bg-secondary-500/10' },
    { label: 'Flux Rate', value: `${analyticsData.bounceRate}%`, icon: Activity, change: '-2%', color: 'text-white', bg: 'bg-white/10' },
    { label: 'Total Conversions', value: '85', icon: Zap, change: '+15%', color: 'text-primary-400', bg: 'bg-primary-500/10' },
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 text-white overflow-hidden selection:bg-primary-500/30">
        {/* Background Grid */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.01]" />
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-500/5 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="max-w-7xl mx-auto">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-4"
                >
                   <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                      <BarChart className="w-5 h-5 text-primary-400" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Advanced Telemetry</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-black italic tracking-tighter"
                >
                  Neural <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-primary-500/20 underline-offset-8">Insight</span> Hub
                </motion.h1>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="appearance-none bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-bold text-sm tracking-wide cursor-pointer hover:bg-white/10"
                  >
                    <option value="7d">Last 7 Cycles</option>
                    <option value="30d">Last 30 Cycles</option>
                    <option value="90d">Last 90 Cycles</option>
                    <option value="1y">Complete Epoch</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-1 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10"
                >
                   <div className="bg-[#0e1114]/50 backdrop-blur-xl rounded-[31px] p-8 h-full">
                      <div className="flex items-center justify-between mb-8">
                         <div className={`w-12 h-12 rounded-2xl ${kpi.bg} flex items-center justify-center`}>
                            <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                         </div>
                         <div className={`flex items-center gap-1 text-[10px] font-black p-2 rounded-lg bg-white/5 ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {kpi.change.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {kpi.change}
                         </div>
                      </div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{kpi.label}</p>
                      <h3 className="text-3xl font-black tracking-tighter">{kpi.value.toLocaleString()}</h3>
                   </div>
                </motion.div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
               >
                  <div className="flex items-center justify-between mb-12">
                     <div>
                        <h2 className="text-xl font-black tracking-tight">Systemic Throughput</h2>
                        <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mt-1">Real-time Volume Analysis</p>
                     </div>
                     <Activity className="w-5 h-5 text-gray-600 group-hover:text-primary-400 transition-colors" />
                  </div>
                  <div className="h-80 relative z-10">
                     <Line data={pageViewsData} options={chartOptions} />
                  </div>
                  <div className="absolute inset-0 bg-grid-white/[0.01]" />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
               >
                  <div className="flex items-center justify-between mb-12">
                     <div>
                        <h2 className="text-xl font-black tracking-tight">Protocol Synthesis</h2>
                        <p className="text-[10px] font-black text-secondary-400 uppercase tracking-widest mt-1">Nodal Type Distribution</p>
                     </div>
                     <Layers className="w-5 h-5 text-gray-600 group-hover:text-secondary-400 transition-colors" />
                  </div>
                  <div className="h-80 relative z-10">
                     <Pie data={eventsData} options={chartOptions} />
                  </div>
                  <div className="absolute inset-0 bg-grid-white/[0.01]" />
               </motion.div>
            </div>

            {/* Conversions & Bottom Tables */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 rounded-[48px] bg-white/5 border border-white/10 mb-8"
            >
               <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-xl font-black tracking-tight">Conversion Velocity</h2>
                    <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest mt-1">Deterministic Goal Tracking</p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-green-500" />
               </div>
               <div className="h-80">
                  <Bar data={conversionsData} options={chartOptions} />
               </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Top Data Panels */}
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="p-10 rounded-[48px] bg-white/5 border border-white/10"
               >
                  <h3 className="text-lg font-black tracking-tight mb-8 flex items-center gap-3">
                     <MousePointer2 className="w-5 h-5 text-primary-400" /> Structural Entrypoints
                  </h3>
                  <div className="space-y-4">
                     {analyticsData.topPages?.map((item, index) => (
                       <div key={index} className="flex justify-between items-center p-6 rounded-3xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group">
                          <div className="flex-1">
                             <p className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight">{item.page}</p>
                             <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">{item.views?.toLocaleString()} EPOCHS</p>
                          </div>
                          <div className="flex items-center gap-3">
                             <span className="text-xs font-black text-green-500">{item.change}</span>
                             <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                          </div>
                       </div>
                     )) || (
                       <div className="py-12 text-center text-gray-600 font-bold uppercase tracking-widest text-xs">Awaiting Data Cycles...</div>
                     )}
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="p-10 rounded-[48px] bg-white/5 border border-white/10"
               >
                  <h3 className="text-lg font-black tracking-tight mb-8 flex items-center gap-3">
                     <Zap className="w-5 h-5 text-secondary-400" /> Priority Signal Events
                  </h3>
                  <div className="space-y-4">
                     {analyticsData.topEvents?.map((item, index) => (
                       <div key={index} className="flex justify-between items-center p-6 rounded-3xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group">
                          <div className="flex-1">
                             <p className="text-sm font-bold text-white group-hover:text-secondary-400 transition-colors uppercase tracking-tight">{item.event}</p>
                             <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">{item.count} PULSES</p>
                          </div>
                          <div className="flex items-center gap-3">
                             <span className="text-xs font-black text-green-500">{item.change}</span>
                             <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                          </div>
                       </div>
                     )) || (
                       <div className="py-12 text-center text-gray-600 font-bold uppercase tracking-widest text-xs">Awaiting Signal Sync...</div>
                     )}
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AdvancedAnalyticsDashboard;