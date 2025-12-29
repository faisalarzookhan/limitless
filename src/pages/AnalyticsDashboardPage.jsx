import React from 'react';
import PredictiveAnalyticsDashboard from '../components/PredictiveAnalyticsDashboard';
import Layout from '../components/layout/Layout';
import { HiOutlineChartBar, HiOutlineEye, HiOutlineUserGroup, HiOutlineClock, HiOutlineDeviceMobile, HiOutlineDesktopComputer } from 'react-icons/hi';

const AnalyticsDashboardPage = () => {
  // Mock data for the dashboard
  const mockKPIs = [
    {
      title: "Total Visitors",
      value: "24,531",
      change: "+12.5%",
      icon: HiOutlineUserGroup,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Page Views",
      value: "128,492",
      change: "+8.3%",
      icon: HiOutlineEye,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Avg. Session Duration",
      value: "4m 32s",
      change: "+5.7%",
      icon: HiOutlineClock,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      title: "Bounce Rate",
      value: "32.4%",
      change: "-3.2%",
      icon: HiOutlineDeviceMobile,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
    }
  ];

  const mockTrafficSources = [
    { source: "Organic Search", percentage: 45, value: "11,034" },
    { source: "Direct", percentage: 28, value: "6,871" },
    { source: "Social Media", percentage: 15, value: "3,679" },
    { source: "Referral", percentage: 8, value: "1,962" },
    { source: "Email", percentage: 4, value: "981" }
  ];

  const mockTopPages = [
    { page: "/home", views: "12,450", change: "+12%" },
    { page: "/services", views: "8,921", change: "+8%" },
    { page: "/products", views: "7,654", change: "+15%" },
    { page: "/contact", views: "5,432", change: "+5%" },
    { page: "/blog", views: "4,321", change: "+22%" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive analytics and insights for your business performance
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mockKPIs.map((kpi, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-xl shadow p-6 border border-gray-200 dark:border-dark-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{kpi.value}</p>
                    <p className={`text-sm mt-1 ${kpi.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {kpi.change} from last month
                    </p>
                  </div>
                  <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                    <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Predictive Analytics */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-dark-800 rounded-xl shadow p-6 border border-gray-200 dark:border-dark-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Predictive Analytics</h2>
                <PredictiveAnalyticsDashboard />
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow p-6 border border-gray-200 dark:border-dark-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Traffic Sources</h2>
              <div className="space-y-4">
                {mockTrafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{source.source}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-900 dark:text-white font-medium mr-3">{source.value}</span>
                      <div className="w-24 bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Analytics Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Pages */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow p-6 border border-gray-200 dark:border-dark-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Top Pages</h2>
              <div className="space-y-4">
                {mockTopPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-dark-600 last:border-b-0">
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">{page.page}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{page.views} views</p>
                    </div>
                    <span className={`text-sm font-medium ${page.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {page.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Breakdown */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow p-6 border border-gray-200 dark:border-dark-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Device Breakdown</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <HiOutlineDeviceMobile className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Mobile</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-900 dark:text-white font-medium mr-3">62%</span>
                    <div className="w-32 bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <HiOutlineDesktopComputer className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Desktop</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-900 dark:text-white font-medium mr-3">32%</span>
                    <div className="w-32 bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <HiOutlineDeviceMobile className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Tablet</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-900 dark:text-white font-medium mr-3">6%</span>
                    <div className="w-32 bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '6%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center mt-8">
            <h3 className="text-2xl font-bold mb-4">Want More Detailed Analytics?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our advanced analytics platform provides deeper insights into user behavior, 
              conversion funnels, and performance metrics. Connect with our team to learn more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
                Request Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnalyticsDashboardPage;