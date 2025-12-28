import React, { useState, useEffect } from 'react';
import analyticsService from '../services/analyticsService';

const AnalyticsDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const data = analyticsService.getDashboardData();
      setDashboardData(data);
      setLoading(false);
      
      // Refresh data every 30 seconds
      const interval = setInterval(() => {
        const freshData = analyticsService.getDashboardData();
        setDashboardData(freshData);
      }, 30000);
      
      return () => clearInterval(interval);
    };
    
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading analytics data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-600">No analytics data available.</p>
          </div>
        </div>
      </div>
    );
  }

  const { conversionMetrics, userJourneyAnalytics, platformStickiness, leadQuality } = dashboardData;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track conversion metrics and user engagement</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.totalEvents}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unique Users</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.uniqueUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{conversionMetrics.overallConversionRate.toFixed(2)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Corporate Leads</p>
                <p className="text-2xl font-bold text-gray-900">{leadQuality.corporateLeadPercentage.toFixed(2)}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Auditor to Sandbox</span>
                <span className="font-semibold">{conversionMetrics.auditorToSandboxRate.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Sandbox to Trial</span>
                <span className="font-semibold">{conversionMetrics.sandboxToTrialRate.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Trial to Purchase</span>
                <span className="font-semibold">{conversionMetrics.trialToPurchaseRate.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-900 font-semibold">Overall Conversion</span>
                <span className="text-xl font-bold text-blue-600">{conversionMetrics.overallConversionRate.toFixed(2)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Stickiness</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Average Session Time</span>
                <span className="font-semibold">{platformStickiness.averageDurationFormatted}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Total Sessions</span>
                <span className="font-semibold">{platformStickiness.totalSessions}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-semibold text-green-600">High Engagement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Quality */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Quality</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{leadQuality.totalLeads}</div>
              <div className="text-sm text-gray-600">Total Leads</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{leadQuality.corporateLeads}</div>
              <div className="text-sm text-gray-600">Corporate Leads</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{leadQuality.personalLeads}</div>
              <div className="text-sm text-gray-600">Personal Leads</div>
            </div>
          </div>
        </div>

        {/* User Journey Analytics */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Journey Analytics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Journey</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transitions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(userJourneyAnalytics.successRates).map(([journey, data]) => (
                  <tr key={journey}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                      {journey.replace(/_/g, ' ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        data.rate >= 50 ? 'bg-green-100 text-green-800' : 
                        data.rate >= 25 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {data.rate.toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;