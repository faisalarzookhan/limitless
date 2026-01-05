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
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import ErrorBoundary from '../components/ErrorBoundary';

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
  const [dateRange, setDateRange] = useState('7d'); // 7 days, 30 days, etc.

  // Fetch real analytics data from API
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
        // Set default values in case of error
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

  // Chart data configurations
  const pageViewsData = {
    labels: analyticsData.pageViews.map(pv => pv.date),
    datasets: [
      {
        label: 'Page Views',
        data: analyticsData.pageViews.map(pv => pv.count),
        borderColor: '#2563eb', // Primary Brand Blue
        backgroundColor: 'rgba(37, 99, 235, 0.2)', // Primary Brand Blue with transparency
      },
    ],
  };

  const eventsData = {
    labels: analyticsData.events.map(e => e.name),
    datasets: [
      {
        label: 'Event Count',
        data: analyticsData.events.map(e => e.count),
        backgroundColor: [
          'rgba(37, 99, 235, 0.7)', // Primary Brand Blue
          'rgba(255, 201, 87, 0.7)', // Corporate Amber
          'rgba(10, 11, 13, 0.7)', // Enterprise Dark
          'rgba(37, 99, 235, 0.5)', // Primary Brand Blue (lighter)
        ],
        borderColor: [
          '#2563eb', // Primary Brand Blue
          '#ffc957', // Corporate Amber
          '#0a0b0d', // Enterprise Dark
          '#2563eb', // Primary Brand Blue
        ],
        borderWidth: 1,
      },
    ],
  };

  const conversionsData = {
    labels: analyticsData.conversions.map(c => c.name),
    datasets: [
      {
        label: 'Conversion Count',
        data: analyticsData.conversions.map(c => c.count),
        backgroundColor: [
          'rgba(37, 99, 235, 0.7)', // Primary Brand Blue
          'rgba(255, 201, 87, 0.7)', // Corporate Amber
          'rgba(10, 11, 13, 0.7)', // Enterprise Dark
        ],
        borderColor: [
          '#2563eb', // Primary Brand Blue
          '#ffc957', // Corporate Amber
          '#0a0b0d', // Enterprise Dark
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme === 'dark' ? '#e2e8f0' : '#475569',
          font: {
            family: 'Figtree, system-ui, sans-serif',
          },
        },
      },
      title: {
        display: false,
        text: 'Chart Title',
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme === 'dark' ? '#e2e8f0' : '#475569',
          font: {
            family: 'Figtree, system-ui, sans-serif',
          },
        },
        grid: {
          color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        ticks: {
          color: theme === 'dark' ? '#e2e8f0' : '#475569',
          font: {
            family: 'Figtree, system-ui, sans-serif',
          },
        },
        grid: {
          color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ffc957] mb-4"></div>
          <p className="text-[#cbd5e1] font-medium font-['Figtree']">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-[#0a0b0d] p-6 rounded-2xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white font-['Outfit']">Analytics Dashboard</h1>
          <p className="text-[#cbd5e1] mt-2 text-lg font-['Figtree']">Comprehensive analytics and insights for your website</p>
        </motion.div>

        {/* Date Range Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#cbd5e1] mb-2 font-['Figtree']">Date Range</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-[#1a1c20] border border-[#2563eb] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ffc957] transition-all duration-300 font-['Outfit'] text-lg"
          >
            <option value="7d" className="bg-[#0a0b0d] text-white font-['Outfit']">Last 7 days</option>
            <option value="30d" className="bg-[#0a0b0d] text-white font-['Outfit']">Last 30 days</option>
            <option value="90d" className="bg-[#0a0b0d] text-white font-['Outfit']">Last 90 days</option>
            <option value="1y" className="bg-[#0a0b0d] text-white font-['Outfit']">Last year</option>
          </select>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-gray-300 font-['Outfit']">Total Users</h3>
            <p className="text-4xl font-bold text-[#2563eb] mt-2 font-['Outfit']">{analyticsData.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-green-400 mt-1 flex items-center font-['Figtree']">
              <span className="mr-1">▲</span> +12% from last period
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-gray-300 font-['Outfit']">Unique Visitors</h3>
            <p className="text-4xl font-bold text-[#ffc957] mt-2 font-['Outfit']">{analyticsData.uniqueVisitors.toLocaleString()}</p>
            <p className="text-sm text-green-400 mt-1 flex items-center font-['Figtree']">
              <span className="mr-1">▲</span> +8% from last period
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-gray-300 font-['Outfit']">Bounce Rate</h3>
            <p className="text-4xl font-bold text-[#0a0b0d] mt-2 font-['Outfit']">{analyticsData.bounceRate}%</p>
            <p className="text-sm text-red-400 mt-1 flex items-center font-['Figtree']">
              <span className="mr-1">▼</span> -2% from last period
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-gray-300 font-['Outfit']">Conversions</h3>
            <p className="text-4xl font-bold text-white mt-2 font-['Outfit']">85</p>
            <p className="text-sm text-green-400 mt-1 flex items-center font-['Figtree']">
              <span className="mr-1">▲</span> +15% from last period
            </p>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Page Views Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit']">Page Views Over Time</h3>
            <div className="h-80">
              <Line data={pageViewsData} options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      color: theme === 'dark' ? '#e2e8f0' : '#475569',
                      font: {
                        family: 'Figtree, system-ui, sans-serif',
                      },
                    },
                    grid: {
                      color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    },
                  },
                  y: {
                    ticks: {
                      color: theme === 'dark' ? '#e2e8f0' : '#475569',
                      font: {
                        family: 'Figtree, system-ui, sans-serif',
                      },
                    },
                    grid: {
                      color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    },
                  },
                },
              }} />
            </div>
          </motion.div>

          {/* Events Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit']">Event Distribution</h3>
            <div className="h-80">
              <Pie data={eventsData} options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: {
                    display: false,
                  },
                  legend: {
                    labels: {
                      color: theme === 'dark' ? '#e2e8f0' : '#475569',
                      font: {
                        family: 'Figtree, system-ui, sans-serif',
                      },
                    },
                  },
                },
              }} />
            </div>
          </motion.div>
        </div>

        {/* Conversions Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg mb-8"
        >
          <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit']">Conversions</h3>
          <div className="h-80">
            <Bar data={conversionsData} options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: theme === 'dark' ? '#e2e8f0' : '#475569',
                    font: {
                      family: 'Figtree, system-ui, sans-serif',
                    },
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    color: theme === 'dark' ? '#e2e8f0' : '#475569',
                    font: {
                      family: 'Figtree, system-ui, sans-serif',
                    },
                  },
                  grid: {
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  },
                },
              },
            }} />
          </div>
        </motion.div>

        {/* Top Pages and Top Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit']">Top Pages</h3>
            <div className="space-y-4">
              {analyticsData.topPages?.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-[#334155]">
                  <div className="flex-1">
                    <p className="font-medium text-[#2563eb] truncate font-['Figtree']">{item.page}</p>
                    <p className="text-sm text-[#94a3b8] font-['Figtree']">{item.views?.toLocaleString()} views</p>
                  </div>
                  <span className="text-green-400 font-medium bg-[#1a1c20] px-2 py-1 rounded-md text-sm font-['Figtree']">
                    {item.change}
                  </span>
                </div>
              )) || (
                <p className="text-[#64748b] text-center py-4 font-['Figtree']">No data available</p>
              )}
            </div>
          </motion.div>

          {/* Top Events */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb] border-opacity-30 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit']">Top Events</h3>
            <div className="space-y-4">
              {analyticsData.topEvents?.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-[#334155]">
                  <div className="flex-1">
                    <p className="font-medium text-[#ffc957] truncate font-['Figtree']">{item.event}</p>
                    <p className="text-sm text-[#94a3b8] font-['Figtree']">{item.count} occurrences</p>
                  </div>
                  <span className="text-green-400 font-medium bg-[#1a1c20] px-2 py-1 rounded-md text-sm font-['Figtree']">
                    {item.change}
                  </span>
                </div>
              )) || (
                <p className="text-[#64748b] text-center py-4 font-['Figtree']">No data available</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default AdvancedAnalyticsDashboard;