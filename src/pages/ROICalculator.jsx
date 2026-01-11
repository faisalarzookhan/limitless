import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign,
  BarChart3,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Calculator,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Activity,
  ArrowUpRight
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

const ROICalculator = () => {
  const [calculatorType, setCalculatorType] = useState('hr-ims');
  const [inputs, setInputs] = useState({
    hr: {
      employeeCount: 100,
      avgSalary: 50000,
      timeSavedPerEmployee: 2,
      costReductionPercentage: 15,
    },
    project: {
      projectCount: 50,
      avgProjectValue: 10000,
      timeToComplete: 30,
      efficiencyGain: 25,
    },
    implementationCost: 50000,
    timeframe: 24,
  });

  const [results, setResults] = useState(null);

  const calculators = {
    'hr-ims': {
      title: 'Alliance Core ROI',
      description: 'Projecting structural savings for human capital architecture deployments.',
      icon: Users,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10',
      inputs: [
        { id: 'employeeCount', label: 'Human Assets', type: 'number', min: 1, max: 10000, step: 1, icon: Users },
        { id: 'avgSalary', label: 'Mean Asset Value ($)', type: 'number', min: 10000, max: 500000, step: 1000, icon: DollarSign },
        { id: 'timeSavedPerEmployee', label: 'Monthly Flux Gain (hrs)', type: 'number', min: 0.5, max: 40, step: 0.5, icon: Clock },
        { id: 'costReductionPercentage', label: 'Operational Delta (%)', type: 'number', min: 1, max: 50, step: 1, icon: Activity },
      ],
    },
    trackit: {
      title: 'OmniTrack ROI',
      description: 'Quantifying architectural efficiency gains in operational oversight.',
      icon: BarChart3,
      color: 'text-secondary-400',
      bg: 'bg-secondary-500/10',
      inputs: [
        { id: 'projectCount', label: 'Annual Streams', type: 'number', min: 1, max: 1000, step: 1, icon: Activity },
        { id: 'avgProjectValue', label: 'Mean Stream Value ($)', type: 'number', min: 1000, max: 1000000, step: 1000, icon: DollarSign },
        { id: 'timeToComplete', label: 'Cycle Duration (days)', type: 'number', min: 1, max: 365, step: 1, icon: Clock },
        { id: 'efficiencyGain', label: 'Throughput Lift (%)', type: 'number', min: 1, max: 100, step: 1, icon: Zap },
      ],
    },
  };

  const calculateROI = () => {
    const data = inputs[calculatorType === 'hr-ims' ? 'hr' : 'project'];
    const { implementationCost, timeframe } = inputs;

    let yearlySavings = 0;
    let yearlyBenefits = 0;

    if (calculatorType === 'hr-ims') {
      const hourlyRate = data.avgSalary / (40 * 52);
      const monthlyTimeSavings = data.employeeCount * data.timeSavedPerEmployee;
      const yearlyTimeSavingsValue = monthlyTimeSavings * 12 * hourlyRate;
      const yearlyCostReduction = (data.avgSalary * data.employeeCount * data.costReductionPercentage) / 100;
      yearlySavings = yearlyTimeSavingsValue + yearlyCostReduction;
      yearlyBenefits = yearlySavings;
    } else {
      const timeReduction = (data.timeToComplete * data.efficiencyGain) / 100;
      const newTimeToComplete = data.timeToComplete - timeReduction;
      const projectsCompleted = (365 / newTimeToComplete) * (data.projectCount / (365 / data.timeToComplete));
      const additionalValue = (projectsCompleted - data.projectCount) * data.avgProjectValue;
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
      <div className="relative min-h-screen bg-dark-900 overflow-hidden">
        {/* Ambient Gradients */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
               initial="hidden"
               animate="visible"
               variants={containerVariants}
               className="text-center"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Calculator className="w-4 h-4 text-primary-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Strategic Audit — ROI Synthesizer</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic">
                Return on <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Insight</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
                Quantify the systemic impact of architectural transformation. Our deterministic models provide high-fidelity projections of capital recovery and efficiency gains.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Interface */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-12 items-start">
              {/* Form Side */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full xl:w-1/2 p-1 rounded-[48px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 overflow-hidden"
              >
                <div className="bg-[#0e1114]/80 backdrop-blur-3xl rounded-[46px] p-8 md:p-12 space-y-12">
                   <div className="space-y-6">
                      <h2 className="text-xs font-black text-primary-400 uppercase tracking-[0.4em]">Core Interface Selector</h2>
                      <div className="flex gap-4 p-2 rounded-[32px] bg-white/5 border border-white/10">
                         {Object.keys(calculators).map(type => (
                           <button
                             key={type}
                             onClick={() => setCalculatorType(type)}
                             className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all ${
                               calculatorType === type 
                               ? 'bg-white text-dark-900 shadow-xl' 
                               : 'text-gray-500 hover:text-white hover:bg-white/5'
                             }`}
                           >
                              <Calculator className="w-4 h-4" />
                              {calculators[type].title.split(' ')[0]}
                           </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div className="flex items-center justify-between">
                         <h3 className="text-2xl font-black text-white italic tracking-tight">{currentCalculator.title}</h3>
                         <div className={`p-3 rounded-2xl ${currentCalculator.bg}`}>
                            <currentCalculator.icon className={`w-6 h-6 ${currentCalculator.color}`} />
                         </div>
                      </div>
                      <p className="text-sm font-medium text-gray-400 leading-relaxed border-l-2 border-primary-500/30 pl-6 italic">
                         "{currentCalculator.description}"
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {currentCalculator.inputs.map(input => (
                           <div key={input.id} className="space-y-3 group">
                              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-primary-400 transition-colors">
                                 {input.label}
                              </label>
                              <div className="relative">
                                 <input
                                   type={input.type}
                                   min={input.min}
                                   max={input.max}
                                   step={input.step}
                                   value={inputs[calculatorType === 'hr-ims' ? 'hr' : 'project'][input.id]}
                                   onChange={e => updateInput(calculatorType === 'hr-ims' ? 'hr' : 'project', input.id, e.target.value)}
                                   className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all hover:bg-white/10"
                                 />
                                 <input.icon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="pt-12 border-t border-white/5 space-y-8">
                      <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.4em]">Environmental Parameters</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-3">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Architectural Investment ($)</label>
                            <input
                              type="number"
                              value={inputs.implementationCost}
                              onChange={e => updateGeneralInput('implementationCost', e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                            />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Projection Epoch (Months)</label>
                            <div className="relative">
                               <input
                                 type="number"
                                 value={inputs.timeframe}
                                 onChange={e => updateGeneralInput('timeframe', e.target.value)}
                                 className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                               />
                               <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Results Side */}
              <div className="w-full xl:w-1/2 space-y-12">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.98 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-xl space-y-10"
                 >
                   <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Audit Synthesis</h2>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Projection Stable</span>
                      </div>
                   </div>

                   {results && (
                     <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="p-8 rounded-[40px] bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-white/10 hover:border-primary-500/30 transition-all group">
                              <h4 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.2em] mb-4">Capital Resilience</h4>
                              <div className="text-4xl font-black text-white tracking-tighter mb-2">${results.netBenefits.toLocaleString()}</div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Net Outcome (Post-Sync)</p>
                           </div>

                           <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-secondary-500/30 transition-all group">
                              <h4 className="text-[10px] font-black text-secondary-400 uppercase tracking-[0.2em] mb-4">Neural Lift</h4>
                              <div className="text-4xl font-black text-white tracking-tighter mb-2">{results.roiPercentage}%</div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Deterministic ROI</p>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 group">
                              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Recovery Epoch</h4>
                              <div className="text-3xl font-black text-white tracking-tighter mb-2">{results.paybackPeriod} <span className="text-sm italic text-gray-600">MONTHS</span></div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sync Point Convergence</p>
                           </div>

                           <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 group">
                              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Annual Throughput</h4>
                              <div className="text-3xl font-black text-white tracking-tighter mb-2">${results.yearlySavings.toLocaleString()}</div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Recurring Value Flux</p>
                           </div>
                        </div>

                        <div className="p-8 rounded-[40px] bg-dark-950 border border-white/5 relative overflow-hidden">
                           <div className="relative z-10 space-y-6">
                              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Structural Breakdown</h4>
                              <div className="space-y-4">
                                 <div className="flex justify-between items-center text-sm font-bold text-gray-400">
                                    <span>Gross Structural Benefit ({inputs.timeframe}m):</span>
                                    <span className="text-white">${results.totalBenefits.toLocaleString()}</span>
                                 </div>
                                 <div className="flex justify-between items-center text-sm font-bold text-gray-400">
                                    <span>Sync Investment Overhead:</span>
                                    <span className="text-red-500">-${inputs.implementationCost.toLocaleString()}</span>
                                 </div>
                                 <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                                    <span className="text-xs font-black text-primary-400 uppercase tracking-widest">NET PROJECTION:</span>
                                    <span className={`text-2xl font-black tracking-tighter ${results.netBenefits >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                       ${results.netBenefits.toLocaleString()}
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="absolute inset-0 bg-grid-white/[0.01]" />
                        </div>
                     </div>
                   )}
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="p-10 rounded-[48px] bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-white/10"
                 >
                    <h3 className="text-lg font-black text-white tracking-tight mb-6 flex items-center gap-3">
                       <ShieldCheck className="w-5 h-5 text-primary-400" /> Strategic Recommendation
                    </h3>
                    <p className="text-gray-300 font-medium leading-relaxed italic">
                       "{results?.roiPercentage > 100
                         ? `Substantial neural efficiency detected. Projected ROI of ${results.roiPercentage}% exceeds industry benchmarks by 2.4x. Immediate architectural deployment is advised for maximum capital lift.`
                         : results?.roiPercentage > 50
                           ? `Positive flux confirmed. A ${results.roiPercentage}% return indicates strong alignment with systemic goals. Recommended for phased deployment.`
                           : `Nominal lift projected. We suggest optimizing architectural overhead or increasing input variables to achieve 50%+ convergence.`}"
                    </p>
                 </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Benchmarks Matrix */}
        <section className="py-32 px-6 bg-dark-950/50">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-8">Nodal <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Benchmarks</span></h2>
                 <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Global architectural standard metrics for high-trust software ecosystems.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { label: 'Cloud-Native HRM ROI', value: '187%', icon: Users },
                   { label: 'E2E Lifecycle Tracking ROI', value: '156%', icon: BarChart3 },
                   { label: 'Mean Convergence Epoch', value: '18m', icon: Clock }
                 ].map((node, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="p-10 rounded-[48px] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors group"
                   >
                     <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                        <node.icon className="w-8 h-8 text-primary-400" />
                     </div>
                     <h3 className="text-5xl font-black text-white italic tracking-tighter mb-4">{node.value}</h3>
                     <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">{node.label}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-5xl mx-auto p-16 md:p-24 rounded-[72px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic uppercase">Ready for <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Verification</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                    Schedule a deep-fiber audit with our structural architects to refine your ROI projection against real-world technical data.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.2em] shadow-xl">
                       Initiate Audit
                    </button>
                    <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-2 group">
                       Architect Consultation <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 animate-pulse" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ROICalculator;
