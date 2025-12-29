import { useState, useEffect } from 'react';
import {
  HiCurrencyDollar,
  HiChartBar,
  HiLightningBolt,
  HiUserGroup,
  HiClock,
  HiTrendingUp,
  HiCalculator,
} from 'react-icons/hi';

const ROICalculator = () => {
  const [calculatorType, setCalculatorType] = useState('hr-ims');
  const [inputs, setInputs] = useState({
    // HR-IMS specific inputs
    hr: {
      employeeCount: 100,
      avgSalary: 50000,
      timeSavedPerEmployee: 2,
      costReductionPercentage: 15,
    },
    // TrackIT specific inputs
    project: {
      projectCount: 50,
      avgProjectValue: 10000,
      timeToComplete: 30,
      efficiencyGain: 25,
    },
    // General inputs
    implementationCost: 50000,
    timeframe: 24,
  });

  const [results, setResults] = useState(null);

  const calculators = {
    'hr-ims': {
      title: 'HR-IMS ROI Calculator',
      description:
        'Calculate the return on investment for implementing our HR Information Management System',
      icon: HiUserGroup,
      inputs: [
        {
          id: 'employeeCount',
          label: 'Number of Employees',
          type: 'number',
          min: 1,
          max: 10000,
          step: 1,
        },
        {
          id: 'avgSalary',
          label: 'Average Annual Salary per Employee ($)',
          type: 'number',
          min: 10000,
          max: 500000,
          step: 1000,
        },
        {
          id: 'timeSavedPerEmployee',
          label: 'Hours Saved per Employee per Month',
          type: 'number',
          min: 0.5,
          max: 40,
          step: 0.5,
        },
        {
          id: 'costReductionPercentage',
          label: 'Percentage Cost Reduction (%)',
          type: 'number',
          min: 1,
          max: 50,
          step: 1,
        },
      ],
    },
    trackit: {
      title: 'TrackIT ROI Calculator',
      description:
        'Calculate the return on investment for implementing our Project Tracking Solution',
      icon: HiChartBar,
      inputs: [
        {
          id: 'projectCount',
          label: 'Number of Projects per Year',
          type: 'number',
          min: 1,
          max: 1000,
          step: 1,
        },
        {
          id: 'avgProjectValue',
          label: 'Average Project Value ($)',
          type: 'number',
          min: 1000,
          max: 1000000,
          step: 1000,
        },
        {
          id: 'timeToComplete',
          label: 'Average Time to Complete (Days)',
          type: 'number',
          min: 1,
          max: 365,
          step: 1,
        },
        {
          id: 'efficiencyGain',
          label: 'Efficiency Gain (%)',
          type: 'number',
          min: 1,
          max: 100,
          step: 1,
        },
      ],
    },
  };

  const calculateROI = () => {
    const data = inputs[calculatorType === 'hr-ims' ? 'hr' : 'project'];
    const { implementationCost, timeframe } = inputs;

    let yearlySavings = 0;
    let yearlyBenefits = 0;

    if (calculatorType === 'hr-ims') {
      // Calculate HR-IMS benefits
      const hourlyRate = data.avgSalary / (40 * 52); // 40 hours/week * 52 weeks
      const monthlyTimeSavings = data.employeeCount * data.timeSavedPerEmployee;
      const yearlyTimeSavingsValue = monthlyTimeSavings * 12 * hourlyRate;
      const yearlyCostReduction =
        (data.avgSalary * data.employeeCount * data.costReductionPercentage) /
        100;

      yearlySavings = yearlyTimeSavingsValue + yearlyCostReduction;
      yearlyBenefits = yearlySavings;
    } else {
      // Calculate TrackIT benefits
      const timeReduction = (data.timeToComplete * data.efficiencyGain) / 100;
      const newTimeToComplete = data.timeToComplete - timeReduction;
      const projectsCompleted =
        (365 / newTimeToComplete) *
        (data.projectCount / (365 / data.timeToComplete));
      const additionalValue =
        (projectsCompleted - data.projectCount) * data.avgProjectValue;

      yearlyBenefits = additionalValue;
      yearlySavings = additionalValue;
    }

    const totalBenefits = yearlyBenefits * (timeframe / 12);
    const netBenefits = totalBenefits - implementationCost;
    const roiPercentage = (netBenefits / implementationCost) * 100;
    const paybackPeriod = (implementationCost / yearlyBenefits) * 12;

    setResults({
      yearlySavings: Math.round(yearlySavings),
      totalBenefits: Math.round(totalBenefits),
      netBenefits: Math.round(netBenefits),
      roiPercentage: Math.round(roiPercentage * 100) / 100,
      paybackPeriod: Math.round(paybackPeriod * 100) / 100,
      yearlyBenefits: Math.round(yearlyBenefits),
    });
  };

  useEffect(() => {
    calculateROI();
  }, [inputs, calculatorType]);

  const updateInput = (category, field, value) => {
    setInputs(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: parseFloat(value) || 0,
      },
    }));
  };

  const updateGeneralInput = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const currentCalculator = calculators[calculatorType];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiCalculator className="w-5 h-5" />
              <span className="text-sm font-semibold">ROI Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              ROI <span className="text-gradient">Calculator</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Calculate the return on investment for our SaaS solutions
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Calculator Form */}
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700 sticky top-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Select Product
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setCalculatorType('hr-ims')}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                        calculatorType === 'hr-ims'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                      }`}
                    >
                      HR-IMS
                    </button>
                    <button
                      onClick={() => setCalculatorType('trackit')}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                        calculatorType === 'trackit'
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                      }`}
                    >
                      TrackIT
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                  <currentCalculator.icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  {currentCalculator.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {currentCalculator.description}
                </p>

                <div className="space-y-6">
                  {currentCalculator.inputs.map(input => (
                    <div key={input.id}>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        {input.label}
                      </label>
                      <input
                        type={input.type}
                        min={input.min}
                        max={input.max}
                        step={input.step}
                        value={
                          inputs[
                            calculatorType === 'hr-ims' ? 'hr' : 'project'
                          ][input.id]
                        }
                        onChange={e =>
                          updateInput(
                            calculatorType === 'hr-ims' ? 'hr' : 'project',
                            input.id,
                            e.target.value
                          )
                        }
                        className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                      />
                      <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>Min: {input.min}</span>
                        <span>Max: {input.max}</span>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-gray-200 dark:border-dark-600 pt-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      General Parameters
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Implementation Cost ($)
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="1000"
                          value={inputs.implementationCost}
                          onChange={e =>
                            updateGeneralInput(
                              'implementationCost',
                              e.target.value
                            )
                          }
                          className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Timeframe (Months)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="60"
                          step="1"
                          value={inputs.timeframe}
                          onChange={e =>
                            updateGeneralInput('timeframe', e.target.value)
                          }
                          className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  ROI Results
                </h2>

                {results && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="flex items-center mb-3">
                          <HiCurrencyDollar className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Net Benefits
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                          ${results.netBenefits.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Total value after implementation costs
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center mb-3">
                          <HiTrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            ROI
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {results.roiPercentage}%
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Return on investment
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center mb-3">
                          <HiClock className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Payback Period
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                          {results.paybackPeriod} months
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Time to recover investment
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                        <div className="flex items-center mb-3">
                          <HiLightningBolt className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-2" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Annual Savings
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1">
                          ${results.yearlySavings.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Value gained per year
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                      <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
                        Breakdown
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Total Benefits ({inputs.timeframe} months):
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            ${results.totalBenefits.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Implementation Cost:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            -${inputs.implementationCost.toLocaleString()}
                          </span>
                        </div>
                        <div className="border-t border-gray-200 dark:border-dark-600 pt-3">
                          <div className="flex justify-between font-semibold">
                            <span className="text-gray-900 dark:text-white">
                              Net Benefits:
                            </span>
                            <span
                              className={`text-lg ${results.netBenefits >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                            >
                              ${results.netBenefits.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
                        Recommendation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {results.roiPercentage > 100
                          ? `With a ${results.roiPercentage}% ROI, this investment is highly recommended and will provide significant value.`
                          : results.roiPercentage > 50
                            ? `With a ${results.roiPercentage}% ROI, this investment is recommended and will provide good value.`
                            : `With a ${results.roiPercentage}% ROI, consider optimizing implementation costs or increasing expected benefits.`}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Industry Benchmarks */}
              <div className="mt-8 bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Industry Benchmarks
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">
                      Average HR Software ROI
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      187%
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">
                      Average Project Management ROI
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      156%
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">
                      Average Payback Period
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      18 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How the <span className="text-gradient">ROI Calculator</span>{' '}
              Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our calculator uses industry-standard formulas to estimate your
              potential return on investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiCalculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Input Your Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enter your specific business metrics and requirements to get
                personalized calculations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiChartBar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Calculate Benefits
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our algorithm calculates time savings, cost reductions, and
                efficiency gains
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                See Your ROI
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get detailed breakdown of your potential return on investment
                and payback period
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Calculate Your ROI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Use our calculator to see the potential value of our solutions for
              your business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/roi-calculator"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Calculating
              </a>
              <a
                href="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-blue-600"
              >
                Speak with an Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;
