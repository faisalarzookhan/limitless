import { useState, useEffect, useMemo } from 'react';
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
  ArrowUpRight,
  Layers,
  PieChart,
  LineChart,
  ArrowDown
} from 'lucide-react';
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
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO/SEO';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ROICalculator = () => {
  const [calculatorType, setCalculatorType] = useState('hr-ims');
  const [inputs, setInputs] = useState({
    hr: {
      employeeCount: 150,
      avgSalary: 65000,
      turnoverRate: 12,
      recruitmentCost: 15000,
      productivityLift: 20,
    },
    tech: {
      userCount: 500,
      licensingCost: 25000,
      uptimeGained: 4,
      securityRiskReduction: 35,
      devSpeedIncrease: 25,
    },
    investment: 75000,
    maintenance: 12000,
  });

  const [projection, setProjection] = useState(null);

  const calculators = {
    'hr-ims': {
      title: 'Alliance Core ROI (HRM)',
      description: 'Human Capital Transformation Modeling',
      icon: Users,
      color: '#1ba6d6',
      inputs: [
        { id: 'employeeCount', label: 'Workforce Size', min: 10, max: 5000, step: 10 },
        { id: 'avgSalary', label: 'Average Annual Salary ($)', min: 30000, max: 250000, step: 5000 },
        { id: 'turnoverRate', label: 'Current Turnover (%)', min: 1, max: 40, step: 1 },
        { id: 'productivityLift', label: 'Target Productivity Lift (%)', min: 5, max: 50, step: 5 },
      ]
    },
    'tech': {
      title: 'Nexus Infrastructure ROI',
      description: 'Systemic Operational Excellence Projections',
      icon: BarChart3,
      color: '#ffc957',
      inputs: [
        { id: 'userCount', label: 'System active Users', min: 50, max: 10000, step: 50 },
        { id: 'licensingCost', label: 'Legacy License Overhead ($)', min: 5000, max: 500000, step: 5000 },
        { id: 'uptimeGained', label: 'Operational Uptime Lift (%)', min: 0.1, max: 10, step: 0.1 },
        { id: 'devSpeedIncrease', label: 'Engineering Throughput Lift (%)', min: 5, max: 100, step: 5 },
      ]
    }
  };

  const calculateProjections = () => {
    const data = inputs[calculatorType === 'hr-ims' ? 'hr' : 'tech'];
    const { investment, maintenance } = inputs;
    
    let year1Savings = 0;
    let year2Savings = 0;
    let year3Savings = 0;

    if (calculatorType === 'hr-ims') {
      const turnoverSavings = (data.employeeCount * (data.turnoverRate / 100)) * (data.avgSalary * 0.3); // 30% of salary for replacement cost
      const productivitySavings = (data.employeeCount * data.avgSalary) * (data.productivityLift / 100);
      year1Savings = (turnoverSavings + productivitySavings) * 0.8; // Year 1 setup stabilization
      year2Savings = (turnoverSavings + productivitySavings) * 1.1; // Year 2 optimization
      year3Savings = (turnoverSavings + productivitySavings) * 1.25; // Year 3 mastery
    } else {
      const uptimeValue = (data.userCount * 50) * data.uptimeGained; // Basic uptime value formula
      const overheadSavings = data.licensingCost * 0.6; // 60% reduction in legacy overhead
      const throughputSavings = (data.userCount * 80000 * 0.1) * (data.devSpeedIncrease / 100);
      year1Savings = (uptimeValue + overheadSavings + throughputSavings) * 0.75;
      year2Savings = (uptimeValue + overheadSavings + throughputSavings) * 1.15;
      year3Savings = (uptimeValue + overheadSavings + throughputSavings) * 1.4;
    }

    const total3YearSavings = year1Savings + year2Savings + year3Savings;
    const total3YearCost = investment + (maintenance * 3);
    const netROI = ((total3YearSavings - total3YearCost) / total3YearCost) * 100;
    const paybackMonths = (investment / (year1Savings / 12));

    setProjection({
      years: [Math.round(year1Savings), Math.round(year2Savings), Math.round(year3Savings)],
      totalSavings: Math.round(total3YearSavings),
      netROI: Math.round(netROI),
      payback: Math.round(paybackMonths * 10) / 10,
      totalCost: Math.round(total3YearCost)
    });
  };

  useEffect(() => {
    calculateProjections();
  }, [inputs, calculatorType]);

  const chartData = useMemo(() => {
    if (!projection) return null;
    return {
      labels: ['Year 1', 'Year 2', 'Year 3'],
      datasets: [
        {
          label: 'Cumulative Benefits ($)',
          data: [projection.years[0], projection.years[0] + projection.years[1], projection.years[0] + projection.years[1] + projection.years[2]],
          borderColor: calculatorType === 'hr-ims' ? '#1ba6d6' : '#ffc957',
          backgroundColor: (context) => {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) return null;
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(27, 166, 214, 0)');
            gradient.addColorStop(1, calculatorType === 'hr-ims' ? 'rgba(27, 166, 214, 0.2)' : 'rgba(255, 201, 87, 0.2)');
            return gradient;
          },
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#1ba6d6',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }
      ]
    };
  }, [projection, calculatorType]);

  const handleInputChange = (field, value) => {
    const category = calculatorType === 'hr-ims' ? 'hr' : 'tech';
    setInputs(prev => ({
      ...prev,
      [category]: { ...prev[category], [field]: parseFloat(value) }
    }));
  };

  const handleGeneralChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: parseFloat(value) }));
  };

  return (
    <ErrorBoundary>
      <SEO 
        title="Interactive ROI Projection Simulator V2" 
        description="Quantify the systemic impact of architectural transformation. Our high-fidelity simulator provides 3-year fiscal projections and capital recovery mapping."
      />
      
      <div className="min-h-screen bg-[#0e1114] py-32 px-6 relative overflow-hidden">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none opacity-20" />
        <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-[#1ba6d6]/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-xl">
              <Calculator className="w-4 h-4 text-[#ffc957]" />
              <span className="text-[0.6rem] font-bold text-white/50 uppercase tracking-[0.4em]">Audit Tool: ROI Projection V2.0</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 italic">
              Proving the <span className="text-[#1ba6d6] flip-text">Value</span>
            </h1>
            <p className="text-[0.8rem] text-white/30 font-black uppercase tracking-[0.3em] max-w-3xl mx-auto leading-relaxed">
              deterministic modeling for high-scale enterprise deployments. adjust systemic variables to visualize capital flux and mission-critical ROI.
            </p>
          </motion.div>

          <div className="grid xl:grid-cols-12 gap-10 items-start">
            {/* Input Panel */}
            <div className="xl:col-span-4 space-y-8">
              <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10">
                <h3 className="text-[0.65rem] font-black text-[#1ba6d6] uppercase tracking-[0.3em] mb-10">Interface Matrix</h3>
                <div className="flex gap-4 mb-12">
                   {Object.keys(calculators).map(type => (
                     <button
                        key={type}
                        onClick={() => setCalculatorType(type)}
                        className={`flex-1 py-4 rounded-2xl text-[0.65rem] font-black uppercase tracking-widest transition-all ${
                          calculatorType === type ? 'bg-white text-black shadow-2xl' : 'bg-white/5 text-white/40 hover:bg-white/10'
                        }`}
                     >
                       {calculators[type].title.split(' ')[0]}
                     </button>
                   ))}
                </div>

                <div className="space-y-10">
                  {calculators[calculatorType].inputs.map(input => (
                    <div key={input.id} className="space-y-4">
                      <div className="flex justify-between items-baseline">
                         <label className="text-[0.55rem] font-black text-white/40 uppercase tracking-widest">{input.label}</label>
                         <span className="text-sm font-black text-[#1ba6d6]">{inputs[calculatorType === 'hr-ims' ? 'hr' : 'tech'][input.id].toLocaleString()}</span>
                      </div>
                      <input 
                        type="range"
                        min={input.min}
                        max={input.max}
                        step={input.step}
                        value={inputs[calculatorType === 'hr-ims' ? 'hr' : 'tech'][input.id]}
                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                        className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#1ba6d6]"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-white/5 space-y-10">
                   <h4 className="text-[0.55rem] font-black text-white/20 uppercase tracking-[0.3em]">Lifecycle Investment</h4>
                   <div className="space-y-8">
                      <div className="space-y-4">
                         <div className="flex justify-between">
                            <label className="text-[0.55rem] font-black text-white/40 uppercase tracking-widest">Initial Capital Sync ($)</label>
                            <span className="text-xs font-bold text-white">${inputs.investment.toLocaleString()}</span>
                         </div>
                         <input 
                            type="range" min="10000" max="500000" step="5000"
                            value={inputs.investment}
                            onChange={(e) => handleGeneralChange('investment', e.target.value)}
                            className="w-full h-1 bg-white/10 rounded-full appearance-none accent-white/40"
                         />
                      </div>
                      <div className="space-y-4">
                         <div className="flex justify-between">
                            <label className="text-[0.55rem] font-black text-white/40 uppercase tracking-widest">Annual Maintenance ($)</label>
                            <span className="text-xs font-bold text-white">${inputs.maintenance.toLocaleString()}</span>
                         </div>
                         <input 
                            type="range" min="1000" max="50000" step="1000"
                            value={inputs.maintenance}
                            onChange={(e) => handleGeneralChange('maintenance', e.target.value)}
                            className="w-full h-1 bg-white/10 rounded-full appearance-none accent-white/40"
                         />
                      </div>
                   </div>
                </div>
              </div>

              <div className="bg-[#ffc957] rounded-[3rem] p-10 flex flex-col gap-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-10 -translate-y-10">
                    <ShieldCheck size={180} className="text-black" />
                 </div>
                 <h4 className="text-[0.65rem] font-black text-black uppercase tracking-[0.2em] relative z-10">Enterprise Audit Ready</h4>
                 <p className="text-[0.75rem] font-bold text-black/80 leading-relaxed relative z-10">
                    These projections are based on standard LIS architectural benchmarks. For a detailed fiber-optic audit of your specific ecosystem, schedule a session.
                 </p>
                 <button className="bg-black text-white py-4 rounded-2xl text-[0.6rem] font-black uppercase tracking-[0.3em] hover:scale-105 transition-transform relative z-10 shadow-2xl">
                    Initiate Deep Audit
                 </button>
              </div>
            </div>

            {/* Viz & Results Panel */}
            <div className="xl:col-span-8 space-y-10">
               <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-12 lg:p-16">
                  <div className="flex flex-col lg:flex-row gap-16 mb-20">
                     <div className="lg:w-1/2 space-y-12">
                        <div>
                           <h2 className="text-[0.6rem] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Total 3-Year Projection</h2>
                           <div className="text-7xl font-black text-white tracking-tighter">${projection?.totalSavings.toLocaleString()}</div>
                           <p className="text-[0.65rem] font-bold text-green-500 uppercase tracking-widest mt-2">+ Gross Capital Resilience Unlock</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-8 rounded-[3rem] bg-white/5 border border-white/5">
                               <p className="text-[0.5rem] font-black text-white/30 uppercase tracking-widest mb-2">Sync ROI</p>
                               <div className="text-4xl font-black text-[#1ba6d6] tracking-tighter">{projection?.netROI}%</div>
                            </div>
                            <div className="p-8 rounded-[3rem] bg-white/5 border border-white/5">
                               <p className="text-[0.5rem] font-black text-white/30 uppercase tracking-widest mb-2">Sync Recovery</p>
                               <div className="text-xl font-black text-white tracking-tighter uppercase italic">{projection?.payback} Months</div>
                            </div>
                        </div>
                     </div>
                     <div className="lg:w-1/2">
                        <div className="h-[300px] w-full relative">
                           {chartData && (
                             <Line 
                               data={chartData} 
                               options={{
                                 responsive: true,
                                 maintainAspectRatio: false,
                                 scales: {
                                   y: { display: false },
                                   x: { 
                                     grid: { display: false },
                                     ticks: { color: 'rgba(255,255,255,0.3)', font: { family: 'Outfit', weight: 'bold', size: 10 } }
                                   }
                                 },
                                 plugins: {
                                   legend: { display: false },
                                   tooltip: {
                                     backgroundColor: '#0e1114',
                                     titleFont: { size: 12, weight: 'black' },
                                     bodyFont: { size: 10, weight: 'bold' },
                                     padding: 20,
                                     borderRadius: 15,
                                     borderColor: 'rgba(255,255,255,0.1)',
                                     borderWidth: 1
                                   }
                                 }
                               }}
                             />
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-[0.65rem] font-black text-[#ffc957] uppercase tracking-[0.4em]">Multi-Year Accumulation Matrix</h4>
                     <div className="grid md:grid-cols-3 gap-6">
                        {projection?.years.map((val, i) => (
                          <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                             <div className="flex justify-between items-center mb-6">
                                <span className="text-[0.6rem] font-black text-white/40 uppercase tracking-widest">Epoch 0{i+1}</span>
                                <TrendingUp size={14} className="text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <div className="text-3xl font-black text-white tracking-tighter mb-1">${val.toLocaleString()}</div>
                             <p className="text-[0.55rem] font-bold text-white/30 uppercase tracking-widest">Incremental Flow</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="grid md:grid-cols-2 gap-10"
               >
                  <div className="bg-[#1ba6d6] rounded-[3.5rem] p-12 text-white relative overflow-hidden">
                     <Layers className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-10" />
                     <h3 className="text-2xl font-black italic uppercase tracking-tight mb-4 relative z-10">Architectural Thesis</h3>
                     <p className="text-[0.8rem] font-bold leading-relaxed relative z-10 opacity-90">
                        "Deploying {calculatorType.toUpperCase()} architecture reveals a projected delta of ${((projection?.totalSavings || 0) - (projection?.totalCost || 0)).toLocaleString()} over the next 36 months. Systemic efficiency lift is consistent with Elite Tier LIS benchmarks."
                     </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-12 border border-white/10 flex flex-col justify-center gap-8">
                     <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                           <ShieldCheck className="text-[#1ba6d6]" />
                        </div>
                        <div>
                           <p className="text-[0.55rem] font-black text-white/30 uppercase tracking-widest mb-1">Verify Output</p>
                           <p className="text-xs font-bold text-white uppercase tracking-wider">Certified Benchmark Validation</p>
                        </div>
                     </div>
                     <Link to="/contact" className="w-full py-5 bg-white text-black text-[0.65rem] font-black uppercase tracking-[0.4em] rounded-2xl text-center hover:scale-105 transition-transform shadow-2xl">
                        Request Strategy Brief
                     </Link>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

// Internal Import for Link
import { Link } from 'react-router-dom';

export default ROICalculator;
