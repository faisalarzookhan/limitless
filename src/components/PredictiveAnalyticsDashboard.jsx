import React, { useState, useEffect } from 'react';
import { HiTrendingUp, HiTrendingDown, HiChartBar, HiUserGroup, HiCurrencyDollar, HiClock, HiRefresh } from 'react-icons/hi';
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

// Register Chart.js components
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

  // Mock data for the dashboard
  const mockPredictions = {
    roi: {
      current: 3.2,
      predicted: 4.1,
      change: '+28%',
      trend: 'up'
    },
    resourceUtilization: {
      current: 78,
      predicted: 85,
      change: '+7%',
      trend: 'up'
    },
    userEngagement: {
      current: 4.2,
      predicted: 5.8,
      change: '+38%',
      trend: 'up'
    },
    conversionRate: {
      current: 2.4,
      predicted: 3.1,
      change: '+29%',
      trend: 'up'
    }
  };

  // Mock chart data
  const engagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Current Engagement',
        data: [3.2, 3.5, 3.8, 4.0, 4.2, 4.5, 4.2],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Predicted Engagement',
        data: [4.0, 4.3, 4.6, 4.9, 5.2, 5.5, 5.8],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  const conversionData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Current Conversion',
        data: [2.1, 2.3, 2.4, 2.4],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Predicted Conversion',
        data: [2.5, 2.8, 3.0, 3.1],
        backgroundColor: '#10B981',
      },
    ],
  };

  const resourceData = {
    labels: ['Server 1', 'Server 2', 'Server 3', 'Database', 'CDN'],
    datasets: [
      {
        label: 'Current Utilization',
        data: [75, 68, 82, 78, 65],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Predicted Utilization',
        data: [82, 75, 88, 85, 72],
        backgroundColor: '#10B981',
      },
    ],
  };

  // Simulate data loading
  useEffect(() => {
    const loadPredictions = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
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
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Predictive Analytics Dashboard</h2>
          <button 
            onClick={refreshData}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg transition-colors"
            disabled={isLoading}
          >
            <HiRefresh className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-dark-600 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-gray-200 dark:bg-dark-600 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-dark-600 rounded w-1/3"></div>
            </div>
          ))}
        </div>
        
        <div className="space-y-8">
          <div className="h-64 bg-gray-50 dark:bg-dark-700 rounded-xl animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-50 dark:bg-dark-700 rounded-xl animate-pulse"></div>
            <div className="h-64 bg-gray-50 dark:bg-dark-700 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-dark-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Predictive Analytics Dashboard</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              AI-driven insights and predictions for your business growth
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            
            <button 
              onClick={refreshData}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg transition-colors"
              disabled={isLoading}
            >
              <HiRefresh className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      
      {/* KPI Cards */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">ROI</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {predictions.roi.current}x
                </p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${predictions.roi.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {predictions.roi.change}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">predicted</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${predictions.roi.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                {predictions.roi.trend === 'up' ? (
                  <HiTrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <HiTrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Resource Utilization</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {predictions.resourceUtilization.current}%
                </p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${predictions.resourceUtilization.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {predictions.resourceUtilization.change}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">predicted</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${predictions.resourceUtilization.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                {predictions.resourceUtilization.trend === 'up' ? (
                  <HiTrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <HiTrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">User Engagement</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {predictions.userEngagement.current} min
                </p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${predictions.userEngagement.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {predictions.userEngagement.change}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">predicted</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${predictions.userEngagement.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                {predictions.userEngagement.trend === 'up' ? (
                  <HiTrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <HiTrendingDown className="w-6 h-6 text-green-600 dark:text-red-400" />
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {predictions.conversionRate.current}%
                </p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${predictions.conversionRate.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {predictions.conversionRate.change}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">predicted</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${predictions.conversionRate.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                {predictions.conversionRate.trend === 'up' ? (
                  <HiTrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <HiTrendingDown className="w-6 h-6 text-green-600 dark:text-red-400" />
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="space-y-8">
          {/* Engagement Trend Chart */}
          <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Engagement Trend</h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Current</span>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 ml-4"></div>
                <span>Predicted</span>
              </div>
            </div>
            <Line 
              data={engagementData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Engagement Time (minutes)',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Minutes'
                    }
                  }
                }
              }}
            />
          </div>
          
          {/* Conversion Rate Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Conversion Rate Projection</h3>
              <Bar 
                data={conversionData} 
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Percentage (%)'
                      }
                    }
                  }
                }}
              />
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Resource Utilization Forecast</h3>
              <Bar 
                data={resourceData} 
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Percentage (%)'
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommendations Section */}
      <div className="p-6 bg-gray-50 dark:bg-dark-700 border-t border-gray-200 dark:border-dark-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-dark-800 rounded-lg p-4 border border-gray-200 dark:border-dark-600">
            <div className="flex items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <HiChartBar className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Optimize Server Capacity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Based on predicted utilization, consider scaling server capacity by 15% for Q4.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark-800 rounded-lg p-4 border border-gray-200 dark:border-dark-600">
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <HiUserGroup className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Enhance User Experience</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Predicted 38% engagement increase suggests implementing personalization features.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark-800 rounded-lg p-4 border border-gray-200 dark:border-dark-600">
            <div className="flex items-start">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <HiCurrencyDollar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">ROI Improvement Strategy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">With predicted 28% ROI increase, consider investing in marketing automation tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsDashboard;