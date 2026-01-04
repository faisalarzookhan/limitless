import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HiCurrencyDollar,
  HiChartBar,
  HiLightningBolt,
  HiUserGroup,
  HiClock,
  HiTrendingUp,
  HiCalculator,
  HiSparkles,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

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
        duration: 0.5
      }
    }
  };

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
    <ErrorBoundary>
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#0a0b0d]/20 px-6 py-3 rounded-full mb-8"
              variants={itemVariants}
            >
              <HiCalculator className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">
                ROI Calculator
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              variants={itemVariants}
            >
              ROI
              <br />
              Calculator
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Calculate the return on investment for our SaaS solutions
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Calculator Form */}
            <div className="lg:w-1/2">
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700 sticky top-8"
                variants={itemVariants}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2 text-white font-['Outfit']">
                    Select Product
                  </h2>
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => setCalculatorType('hr-ims')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors font-['Figtree'] ${
                        calculatorType === 'hr-ims'
                          ? 'bg-[#2563eb] text-white'
                          : 'bg-[#1a1c25] text-gray-300 hover:bg-[#2d303d]'
                      }`}
                    >
                      HR-IMS
                    </motion.button>
                    <motion.button
                      onClick={() => setCalculatorType('trackit')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors font-['Figtree'] ${
                        calculatorType === 'trackit'
                          ? 'bg-[#ffc957] text-[#0a0b0d]'
                          : 'bg-[#1a1c25] text-gray-300 hover:bg-[#2d303d]'
                      }`}
                    >
                      TrackIT
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 text-white flex items-center font-['Outfit']">
                  <currentCalculator.icon className="w-6 h-6 mr-3 text-[#2563eb]" />
                  {currentCalculator.title}
                </h3>

                <p className="text-gray-300 mb-6 font-['Figtree']">
                  {currentCalculator.description}
                </p>

                <div className="space-y-6">
                  {currentCalculator.inputs.map(input => (
                    <div key={input.id}>
                      <label className="block text-sm font-medium mb-2 text-gray-300 font-['Figtree']">
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
                        className="w-full p-3 border border-gray-600 rounded-lg bg-[#2d303d] text-white font-['Figtree']"
                      />
                      <div className="mt-2 flex justify-between text-xs text-gray-400">
                        <span>Min: {input.min}</span>
                        <span>Max: {input.max}</span>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold mb-4 text-white font-['Outfit']">
                      General Parameters
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300 font-['Figtree']">
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
                          className="w-full p-3 border border-gray-600 rounded-lg bg-[#2d303d] text-white font-['Figtree']"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300 font-['Figtree']">
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
                          className="w-full p-3 border border-gray-600 rounded-lg bg-[#2d303d] text-white font-['Figtree']"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Results */}
            <div className="lg:w-1/2">
              <motion.div 
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold mb-6 text-white font-['Outfit']">
                  ROI Results
                </h2>

                {results && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-[#052e16]/20 to-[#047857]/20 rounded-xl p-6 shadow-lg border border-[#10b981]/30">
                        <div className="flex items-center mb-3">
                          <HiCurrencyDollar className="w-6 h-6 text-[#10b981] mr-2" />
                          <h3 className="font-semibold text-white font-['Outfit']">
                            Net Benefits
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-[#10b981] mb-1 font-['Outfit']">
                          ${results.netBenefits.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-300 font-['Figtree']">
                          Total value after implementation costs
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#1e40af]/20 to-[#3b82f6]/20 rounded-xl p-6 shadow-lg border border-[#3b82f6]/30">
                        <div className="flex items-center mb-3">
                          <HiTrendingUp className="w-6 h-6 text-[#3b82f6] mr-2" />
                          <h3 className="font-semibold text-white font-['Outfit']">
                            ROI
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-[#3b82f6] mb-1 font-['Outfit']">
                          {results.roiPercentage}%
                        </p>
                        <p className="text-sm text-gray-300 font-['Figtree']">
                          Return on investment
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-[#7e22ce]/20 to-[#ec4899]/20 rounded-xl p-6 shadow-lg border border-[#ec4899]/30">
                        <div className="flex items-center mb-3">
                          <HiClock className="w-6 h-6 text-[#ec4899] mr-2" />
                          <h3 className="font-semibold text-white font-['Outfit']">
                            Payback Period
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-[#ec4899] mb-1 font-['Outfit']">
                          {results.paybackPeriod} months
                        </p>
                        <p className="text-sm text-gray-300 font-['Figtree']">
                          Time to recover investment
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-[#b45309]/20 to-[#f59e0b]/20 rounded-xl p-6 shadow-lg border border-[#f59e0b]/30">
                        <div className="flex items-center mb-3">
                          <HiLightningBolt className="w-6 h-6 text-[#f59e0b] mr-2" />
                          <h3 className="font-semibold text-white font-['Outfit']">
                            Annual Savings
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-[#f59e0b] mb-1 font-['Outfit']">
                          ${results.yearlySavings.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-300 font-['Figtree']">
                          Value gained per year
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#2d303d] rounded-xl p-6">
                      <h3 className="font-semibold mb-4 text-white font-['Outfit']">
                        Breakdown
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300 font-['Figtree']">
                            Total Benefits ({inputs.timeframe} months):
                          </span>
                          <span className="font-medium text-white font-['Figtree']">
                            ${results.totalBenefits.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 font-['Figtree']">
                            Implementation Cost:
                          </span>
                          <span className="font-medium text-white font-['Figtree']">
                            -${inputs.implementationCost.toLocaleString()}
                          </span>
                        </div>
                        <div className="border-t border-gray-600 pt-3">
                          <div className="flex justify-between font-semibold">
                            <span className="text-white font-['Figtree']">
                              Net Benefits:
                            </span>
                            <span
                              className={`text-lg ${results.netBenefits >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}
                            >
                              ${results.netBenefits.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#1e40af]/20 to-[#3b82f6]/20 rounded-xl p-6 border border-[#3b82f6]/30">
                      <h3 className="font-semibold mb-3 text-white font-['Outfit']">
                        Recommendation
                      </h3>
                      <p className="text-gray-300 font-['Figtree']">
                        {results.roiPercentage > 100
                          ? `With a ${results.roiPercentage}% ROI, this investment is highly recommended and will provide significant value.`
                          : results.roiPercentage > 50
                            ? `With a ${results.roiPercentage}% ROI, this investment is recommended and will provide good value.`
                            : `With a ${results.roiPercentage}% ROI, consider optimizing implementation costs or increasing expected benefits.`}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Industry Benchmarks */}
              <motion.div 
                className="mt-8 bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold mb-6 text-white font-['Outfit']">
                  Industry Benchmarks
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#2d303d] rounded-lg">
                    <span className="text-gray-300 font-['Figtree']">
                      Average HR Software ROI
                    </span>
                    <span className="font-semibold text-white font-['Figtree']">
                      187%
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#2d303d] rounded-lg">
                    <span className="text-gray-300 font-['Figtree']">
                      Average Project Management ROI
                    </span>
                    <span className="font-semibold text-white font-['Figtree']">
                      156%
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#2d303d] rounded-lg">
                    <span className="text-gray-300 font-['Figtree']">
                      Average Payback Period
                    </span>
                    <span className="font-semibold text-white font-['Figtree']">
                      18 months
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              How the <span className="text-[#ffc957]">ROI Calculator</span>{' '}
              Works
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Our calculator uses industry-standard formulas to estimate your
              potential return on investment
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Input Your Data',
                description: 'Enter your specific business metrics and requirements to get personalized calculations',
                icon: HiCalculator,
                color: 'from-[#2563eb] to-[#ffc957]',
              },
              {
                title: 'Calculate Benefits',
                description: 'Our algorithm calculates time savings, cost reductions, and efficiency gains',
                icon: HiChartBar,
                color: 'from-[#ffc957] to-[#2563eb]',
              },
              {
                title: 'See Your ROI',
                description: 'Get detailed breakdown of your potential return on investment and payback period',
                icon: HiTrendingUp,
                color: 'from-[#2563eb] to-[#1d4ed8]',
              },
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 font-['Figtree']">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Ready to Calculate Your ROI?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#0a0b0d]/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Use our calculator to see the potential value of our solutions for
              your business
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <a
                href="/roi-calculator"
                className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                Start Calculating
              </a>
              <a
                href="/contact"
                className="bg-transparent border border-[#0a0b0d] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#ffc957] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                Speak with an Expert
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
    </ErrorBoundary>
  );
};

export default ROICalculator;
