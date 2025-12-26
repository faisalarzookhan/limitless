import { useState, useEffect } from 'react';
import { HiTrendingUp, HiTrendingDown, HiChartBar, HiUserGroup, HiClock, HiCalendar, HiUsers, HiDocumentText, HiCurrencyDollar } from 'react-icons/hi';

const PredictiveAnalyticsDashboard = ({ productType = 'hr-ims' }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [predictions, setPredictions] = useState(null);

  // Mock data initialization
  useEffect(() => {
    // Simulate fetching predictive analytics data
    const mockPredictions = {
      hrims: {
        attritionRisk: {
          current: 12,
          predicted: 8,
          trend: 'decreasing',
          next30Days: 9,
          confidence: 85
        },
        hiringNeeds: {
          current: 5,
          predicted: 8,
          trend: 'increasing',
          next30Days: 7,
          confidence: 78
        },
        productivity: {
          current: 78,
          predicted: 82,
          trend: 'increasing',
          next30Days: 81,
          confidence: 82
        },
        compliance: {
          current: 95,
          predicted: 97,
          trend: 'increasing',
          next30Days: 96,
          confidence: 90
        }
      },
      trackit: {
        projectSuccess: {
          current: 85,
          predicted: 88,
          trend: 'increasing',
          next30Days: 87,
          confidence: 87
        },
        timelineAdherence: {
          current: 72,
          predicted: 78,
          trend: 'increasing',
          next30Days: 76,
          confidence: 83
        },
        resourceUtilization: {
          current: 68,
          predicted: 74,
          trend: 'increasing',
          next30Days: 72,
          confidence: 80
        },
        budgetEfficiency: {
          current: 80,
          predicted: 84,
          trend: 'increasing',
          next30Days: 82,
          confidence: 85
        }
      }
    };

    setPredictions(mockPredictions[productType]);
  }, [productType]);

  const getTrendIcon = (trend) => {
    if (trend === 'increasing') {
      return <HiTrendingUp className="w-5 h-5 text-green-500" />;
    } else if (trend === 'decreasing') {
      return <HiTrendingDown className="w-5 h-5 text-red-500" />;
    }
    return <HiChartBar className="w-5 h-5 text-gray-500" />;
  };

  const getTrendColor = (current, predicted) => {
    if (predicted > current) {
      return 'text-green-600 dark:text-green-400';
    } else if (predicted < current) {
      return 'text-red-600 dark:text-red-400';
    }
    return 'text-gray-600 dark:text-gray-400';
  };

  const metrics = productType === 'hrims' 
    ? [
        {
          title: 'Attrition Risk',
          current: predictions?.attritionRisk?.current,
          predicted: predictions?.attritionRisk?.predicted,
          next30Days: predictions?.attritionRisk?.next30Days,
          trend: predictions?.attritionRisk?.trend,
          confidence: predictions?.attritionRisk?.confidence,
          description: 'Predicted employee turnover rate',
          icon: HiUsers,
          unit: '%'
        },
        {
          title: 'Hiring Needs',
          current: predictions?.hiringNeeds?.current,
          predicted: predictions?.hiringNeeds?.predicted,
          next30Days: predictions?.hiringNeeds?.next30Days,
          trend: predictions?.hiringNeeds?.trend,
          confidence: predictions?.hiringNeeds?.confidence,
          description: 'Anticipated new hires needed',
          icon: HiUserGroup,
          unit: 'reqs'
        },
        {
          title: 'Productivity Score',
          current: predictions?.productivity?.current,
          predicted: predictions?.productivity?.predicted,
          next30Days: predictions?.productivity?.next30Days,
          trend: predictions?.productivity?.trend,
          confidence: predictions?.productivity?.confidence,
          description: 'Overall productivity index',
          icon: HiChartBar,
          unit: 'pts'
        },
        {
          title: 'Compliance Score',
          current: predictions?.compliance?.current,
          predicted: predictions?.compliance?.predicted,
          next30Days: predictions?.compliance?.next30Days,
          trend: predictions?.compliance?.trend,
          confidence: predictions?.compliance?.confidence,
          description: 'Regulatory compliance rating',
          icon: HiDocumentText,
          unit: '%'
        }
      ]
    : [
        {
          title: 'Project Success Rate',
          current: predictions?.projectSuccess?.current,
          predicted: predictions?.projectSuccess?.predicted,
          next30Days: predictions?.projectSuccess?.next30Days,
          trend: predictions?.projectSuccess?.trend,
          confidence: predictions?.projectSuccess?.confidence,
          description: 'Predicted project completion success',
          icon: HiTrendingUp,
          unit: '%'
        },
        {
          title: 'Timeline Adherence',
          current: predictions?.timelineAdherence?.current,
          predicted: predictions?.timelineAdherence?.predicted,
          next30Days: predictions?.timelineAdherence?.next30Days,
          trend: predictions?.timelineAdherence?.trend,
          confidence: predictions?.timelineAdherence?.confidence,
          description: 'On-time project delivery rate',
          icon: HiClock,
          unit: '%'
        },
        {
          title: 'Resource Utilization',
          current: predictions?.resourceUtilization?.current,
          predicted: predictions?.resourceUtilization?.predicted,
          next30Days: predictions?.resourceUtilization?.next30Days,
          trend: predictions?.resourceUtilization?.trend,
          confidence: predictions?.resourceUtilization?.confidence,
          description: 'Efficient resource allocation',
          icon: HiUserGroup,
          unit: '%'
        },
        {
          title: 'Budget Efficiency',
          current: predictions?.budgetEfficiency?.current,
          predicted: predictions?.budgetEfficiency?.predicted,
          next30Days: predictions?.budgetEfficiency?.next30Days,
          trend: predictions?.budgetEfficiency?.trend,
          confidence: predictions?.budgetEfficiency?.confidence,
          description: 'Cost management effectiveness',
          icon: HiCurrencyDollar,
          unit: '%'
        }
      ];

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Predictive Analytics Dashboard
        </h3>
        <div className="flex items-center space-x-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="7d">7 Days</option>
            <option value="30d">30 Days</option>
            <option value="90d">90 Days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{metric.title}</h4>
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(metric.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(metric.current, metric.predicted)}`}>
                    {metric.current} → {metric.predicted}{metric.unit}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{metric.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Current</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {metric.current}{metric.unit}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Predicted</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {metric.predicted}{metric.unit}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Next 30 days</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {metric.next30Days}{metric.unit}
                  </span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-dark-600">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Confidence</span>
                  <span className="text-xs font-medium text-gray-900 dark:text-white">
                    {metric.confidence}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-1 mt-1">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1 rounded-full" 
                    style={{ width: `${metric.confidence}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <HiLightningBolt className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI Insights</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {productType === 'hrims'
                ? "Based on current trends, attrition risk is expected to decrease by 25% over the next quarter. Consider implementing retention programs now to maximize impact."
                : "Project success rates are trending upward. Focus on resource allocation to maintain momentum and improve timeline adherence."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsDashboard;