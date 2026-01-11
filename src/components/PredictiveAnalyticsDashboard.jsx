import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Users,
  DollarSign,
  Clock,
  RefreshCw,
  Zap,
  Cpu,
  Shield,
  Activity
} from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
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
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PredictiveAnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [predictions, setPredictions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const mockPredictions = {
    roi: {
      current: 3.2,
      predicted: 4.1,
      change: '+28%',
      trend: 'up',
    },
    resourceUtilization: {
      current: 78,
      predicted: 85,
      change: '+7%',
      trend: 'up',
    },
    userEngagement: {
      current: 4.2,
      predicted: 5.8,
      change: '+38%',
      trend: 'up',
    },
    conversionRate: {
      current: 2.4,
      predicted: 3.1,
      change: '+29%',
      trend: 'up',
    },
  };

  const engagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Current Engagement',
        data: [3.2, 3.5, 3.8, 4.0, 4.2, 4.5, 4.2],
        borderColor: '#1ba6d6',
        backgroundColor: 'rgba(27, 166, 214, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#1ba6d6',
      },
      {
        label: 'Predicted Engagement',
        data: [4.0, 4.3, 4.6, 4.9, 5.2, 5.5, 5.8],
        borderColor: '#ffc957',
        backgroundColor: 'rgba(255, 201, 87, 0.1)',
        borderDash: [10, 5],
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: '#ffc957',
      },
    ],
  };

  const conversionData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Current Conversion',
        data: [2.1, 2.3, 2.4, 2.4],
        backgroundColor: 'rgba(27, 166, 214, 0.6)',
        borderRadius: 12,
      },
      {
        label: 'Predicted Conversion',
        data: [2.5, 2.8, 3.0, 3.1],
        backgroundColor: 'rgba(255, 201, 87, 0.6)',
        borderRadius: 12,
      },
    ],
  };

  const resourceData = {
    labels: ['Server 1', 'Server 2', 'Server 3', 'Database', 'CDN'],
    datasets: [
      {
        label: 'Current Utilization',
        data: [75, 68, 82, 78, 65],
        backgroundColor: 'rgba(27, 166, 214, 0.6)',
        borderRadius: 12,
      },
      {
        label: 'Predicted Utilization',
        data: [82, 75, 88, 85, 72],
        backgroundColor: 'rgba(255, 201, 87, 0.6)',
        borderRadius: 12,
      },
    ],
  };

  useEffect(() => {
    const loadPredictions = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPredictions(mockPredictions);
      setIsLoading(false);
    };

    loadPredictions();
  }, [timeRange]);

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPredictions(mockPredictions);
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 min-h-[600px] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-[#1ba6d6] rounded-3xl flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-[#1ba6d6] blur-2xl opacity-20 animate-pulse"></div>
          <RefreshCw className="w-10 h-10 text-white animate-spin" />
        </div>
        <h3 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-4">Initializing Neural Dashboard</h3>
        <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em]">Synchronizing cross-network data streams...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
      
      <div className="p-10 border-b border-white/5 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
              Predictive <span className="text-[#1ba6d6]">Terminal</span>
            </h2>
            <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em]">
              AI-DRIVEN ANALYTICS ARCHIVE // NODE: PROXIMA-9
            </p>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={timeRange}
              onChange={e => setTimeRange(e.target.value)}
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white outline-none cursor-pointer hover:bg-white/10 transition-all duration-300"
            >
              <option value="7d" className="bg-[#0e1114]">7 CYCLES</option>
              <option value="30d" className="bg-[#0e1114]">30 CYCLES</option>
              <option value="90d" className="bg-[#0e1114]">90 CYCLES</option>
              <option value="1y" className="bg-[#0e1114]">365 CYCLES</option>
            </select>

            <button
              onClick={refreshData}
              className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/40 hover:text-[#1ba6d6] hover:bg-white/10 transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* KPI Card ROI */}
          <div className="bg-white/5 border border-white/5 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-[#1ba6d6]/10 rounded-2xl flex items-center justify-center text-[#1ba6d6] group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="px-3 py-1 bg-green-500/10 rounded-full">
                <p className="text-[0.55rem] font-black text-green-500 uppercase">PREDICTED</p>
              </div>
            </div>
            <p className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.2em] mb-2">Current ROI</p>
            <p className="text-3xl font-black text-white mb-4">{predictions.roi.current}x</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-[0.6rem] font-black text-green-500">{predictions.roi.change} INCREASE</span>
            </div>
          </div>

          {/* KPI Card Utilization */}
          <div className="bg-white/5 border border-white/5 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-[#ffc957]/10 rounded-2xl flex items-center justify-center text-[#ffc957] group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="px-3 py-1 bg-green-500/10 rounded-full">
                <p className="text-[0.55rem] font-black text-green-500 uppercase">PREDICTED</p>
              </div>
            </div>
            <p className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.2em] mb-2">Resource Utilization</p>
            <p className="text-3xl font-black text-white mb-4">{predictions.resourceUtilization.current}%</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-[0.6rem] font-black text-green-500">{predictions.resourceUtilization.change} GROWTH</span>
            </div>
          </div>

          {/* KPI Card Engagement */}
          <div className="bg-white/5 border border-white/5 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <div className="px-3 py-1 bg-green-500/10 rounded-full">
                <p className="text-[0.55rem] font-black text-green-500 uppercase">PREDICTED</p>
              </div>
            </div>
            <p className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.2em] mb-2">Engagement</p>
            <p className="text-3xl font-black text-white mb-4">{predictions.userEngagement.current}M</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-[0.6rem] font-black text-green-500">{predictions.userEngagement.change} BOOST</span>
            </div>
          </div>

          {/* KPI Card Conversion */}
          <div className="bg-white/5 border border-white/5 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-[#1ba6d6]/10 rounded-2xl flex items-center justify-center text-[#1ba6d6] group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="px-3 py-1 bg-green-500/10 rounded-full">
                <p className="text-[0.55rem] font-black text-green-500 uppercase">PREDICTED</p>
              </div>
            </div>
            <p className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.2em] mb-2">Conversion Rate</p>
            <p className="text-3xl font-black text-white mb-4">{predictions.conversionRate.current}%</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-[0.6rem] font-black text-green-500">{predictions.conversionRate.change} VELOCITY</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10">
            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-8">Engagement Projection</h3>
            <Line
              data={engagementData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, border: { display: false } },
                  y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, border: { display: false } },
                },
              }}
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10">
            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-8">Resource Efficiency</h3>
            <Bar
              data={resourceData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: { grid: { display: false }, border: { display: false } },
                  y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, border: { display: false } },
                },
              }}
            />
          </div>
        </div>

        <div className="mt-12 bg-[#1ba6d6]/5 border border-[#1ba6d6]/10 rounded-[3rem] p-10">
          <h3 className="text-xs font-black text-[#1ba6d6] uppercase tracking-[0.5em] mb-8">AI RECOMMENDATIONS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#1ba6d6] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[0.65rem] font-black text-white uppercase tracking-widest mb-2">SCALING PROTOCOL</h4>
                <p className="text-[0.6rem] text-white/40 font-black uppercase tracking-widest leading-relaxed">Consider 15% capacity boost for nodes designated in Q4 trajectory.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#ffc957] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#0e1114]" />
              </div>
              <div>
                <h4 className="text-[0.65rem] font-black text-white uppercase tracking-widest mb-2">NEURAL PERSONALIZATION</h4>
                <p className="text-[0.6rem] text-white/40 font-black uppercase tracking-widest leading-relaxed">Engagement spike suggests deploying dynamic user mapping modules.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#0e1114]" />
              </div>
              <div>
                <h4 className="text-[0.65rem] font-black text-white uppercase tracking-widest mb-2">ROI PRESERVATION</h4>
                <p className="text-[0.6rem] text-white/40 font-black uppercase tracking-widest leading-relaxed">Integrate automated budget logic to sustain the 28% growth factor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PredictiveAnalyticsDashboard;
