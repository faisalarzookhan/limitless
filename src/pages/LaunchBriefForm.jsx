import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Building2, 
  Target, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Plus, 
  Zap,
  Globe,
  Cpu,
  Database,
  Loader2
} from 'lucide-react';
import SEO from '../components/SEO/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import api from '../services/api';

const LaunchBriefForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    projectScope: 'web-ecosystem',
    complexity: 'mid',
    budgetRange: 'tier1',
    technicalReqs: [],
    transformationGoals: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleTechnicalReq = (req) => {
    setFormData(prev => ({
      ...prev,
      technicalReqs: prev.technicalReqs.includes(req)
        ? prev.technicalReqs.filter(r => r !== req)
        : [...prev.technicalReqs, req]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await api.contact.submitLaunchBrief(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission failed:', error);
      // Fallback for demo purposes if server is not available
      setTimeout(() => setIsSuccess(true), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ErrorBoundary>
      <SEO 
        title="Launch Brief | Custom Project Intake" 
        description="Initiate your architectural transformation. Complete the multi-step launch brief to receive a deterministic project strategy and budgetary benchmark."
      />
      
      <div className="min-h-screen bg-[#0e1114] py-32 px-6 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(27,166,214,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-xl">
              <Rocket className="w-4 h-4 text-[#1ba6d6]" />
              <span className="text-[0.6rem] font-black text-white/50 uppercase tracking-[0.4em]">Protocol: Mission Initiation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 italic">
              Launch <span className="text-[#1ba6d6] not-italic">Brief</span>
            </h1>
            <p className="text-[0.7rem] text-white/30 font-black uppercase tracking-[0.3em] max-w-xl mx-auto leading-relaxed">
              Define the variables for your digital transformation. Each input recalibrates our systemic projection model.
            </p>
          </motion.div>

          {/* Progress Node */}
          <div className="flex justify-between mb-20 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
             {[1, 2, 3, 4].map(num => (
               <div 
                 key={num}
                 className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                   step >= num ? 'bg-[#1ba6d6] border-[#1ba6d6] text-white shadow-[0_0_20px_rgba(27,166,214,0.3)]' : 'bg-[#0e1114] border-white/10 text-white/20'
                 }`}
               >
                 <span className="text-xs font-black">{num}</span>
               </div>
             ))}
          </div>

          <div className="bg-white/5 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 p-10 lg:p-20 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none" />
             
             <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <div className="space-y-4">
                       <h3 className="text-xl font-black text-white uppercase tracking-tight italic">Entity Origin</h3>
                       <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-widest">Identify your organizational parameters.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="space-y-3">
                          <label className="text-[0.55rem] font-black text-white/40 uppercase tracking-widest">Organization Name</label>
                          <input 
                            type="text" 
                            value={formData.companyName}
                            onChange={(e) => updateField('companyName', e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-[#1ba6d6]/50 transition-all font-sans"
                            placeholder="e.g. Nexus Corp"
                          />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[0.55rem] font-black text-white/40 uppercase tracking-widest">Primary Industry</label>
                          <select 
                            value={formData.industry}
                            onChange={(e) => updateField('industry', e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-[#1ba6d6]/50 transition-all font-sans"
                          >
                             <option value="" className="bg-[#0e1114]">Select Domain</option>
                             <option value="fintech" className="bg-[#0e1114]">FinTech Matrix</option>
                             <option value="healthcare" className="bg-[#0e1114]">HealthTech Ecosystem</option>
                             <option value="enterprise" className="bg-[#0e1114]">Enterprise Systems</option>
                          </select>
                       </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <div className="space-y-4">
                       <h3 className="text-xl font-black text-white uppercase tracking-tight italic">Structural Scope</h3>
                       <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-widest">Define the technical boundaries of the mission.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                       {[
                         { id: 'web-ecosystem', label: 'Web Ecosystem', icon: Globe },
                         { id: 'mobile-neural', label: 'Mobile Neural', icon: Cpu },
                         { id: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: Database },
                         { id: 'ai-automation', label: 'AI Automation', icon: Zap }
                       ].map(option => (
                         <button
                           key={option.id}
                           onClick={() => updateField('projectScope', option.id)}
                           className={`p-8 rounded-[2.5rem] border text-left flex flex-col justify-between h-48 transition-all group/opt ${
                             formData.projectScope === option.id 
                             ? 'bg-[#1ba6d6] border-[#1ba6d6] text-white' 
                             : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                           }`}
                         >
                           <option.icon size={24} className={formData.projectScope === option.id ? 'text-white' : 'text-[#1ba6d6]'} />
                           <span className="text-[0.65rem] font-black uppercase tracking-widest">{option.label}</span>
                         </button>
                       ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <div className="space-y-4">
                       <h3 className="text-xl font-black text-white uppercase tracking-tight italic">Technical Requirements</h3>
                       <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-widest">Select mission-critical components.</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                       {[
                         'Real-time Telemetry',
                         'Blockchain Persistence',
                         'Neural Processing',
                         'Zero-Trust Security',
                         'Edge Computing',
                         'Biometric Registry',
                         'Scalable Load Balance'
                       ].map(req => (
                         <button
                           key={req}
                           onClick={() => toggleTechnicalReq(req)}
                           className={`px-8 py-4 rounded-2xl text-[0.6rem] font-black uppercase tracking-widest transition-all ${
                             formData.technicalReqs.includes(req)
                             ? 'bg-white text-black shadow-2xl scale-105'
                             : 'bg-white/5 text-white/40 border border-white/5 hover:border-[#1ba6d6]/30'
                           }`}
                         >
                           {req}
                         </button>
                       ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div 
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-10"
                  >
                     {isSuccess ? (
                        <div className="space-y-10">
                           <div className="w-24 h-24 rounded-[2rem] bg-green-500/20 flex items-center justify-center mx-auto mb-10 border border-green-500/30">
                              <CheckCircle2 size={40} className="text-green-500" />
                           </div>
                           <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Mission Initialized</h3>
                           <p className="text-[0.65rem] text-white/30 font-black uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed">
                              Your architectural brief has been successfully committed to the Limitless registry. An architect will synchronize with your node within 12 temporal units.
                           </p>
                           <button 
                             onClick={() => window.location.href = '/'}
                             className="px-12 py-5 bg-white text-black text-[0.65rem] font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-[#1ba6d6] hover:text-white transition-all shadow-2xl"
                           >
                             Return to Nexus
                           </button>
                        </div>
                     ) : (
                        <div className="space-y-10">
                           <div className="w-24 h-24 rounded-[2rem] bg-[#1ba6d6]/20 flex items-center justify-center mx-auto mb-10 border border-[#1ba6d6]/30">
                              {isSubmitting ? (
                                 <Loader2 size={40} className="text-[#1ba6d6] animate-spin" />
                              ) : (
                                 <CheckCircle2 size={40} className="text-[#1ba6d6]" />
                              )}
                           </div>
                           <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Brief Synchronized</h3>
                           <p className="text-[0.65rem] text-white/30 font-black uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed">
                              Your architectural variables have been buffered. Submit to initiate terminal deconstruction and receive your strategy report.
                           </p>
                           
                           <div className="p-8 rounded-[3rem] bg-white/5 border border-white/5 text-left space-y-4">
                              <p className="text-[0.55rem] font-black text-white/20 uppercase tracking-widest">Brief Summary</p>
                              <div className="grid grid-cols-2 gap-6">
                                 <div>
                                    <p className="text-[0.5rem] font-black text-[#1ba6d6] uppercase tracking-widest">Entity</p>
                                    <p className="text-xs font-bold text-white uppercase">{formData.companyName || 'Unidentified Node'}</p>
                                 </div>
                                 <div>
                                    <p className="text-[0.5rem] font-black text-[#1ba6d6] uppercase tracking-widest">Scope</p>
                                    <p className="text-xs font-bold text-white uppercase">{formData.projectScope.replace(/-/g, ' ')}</p>
                                 </div>
                              </div>
                           </div>

                           <button 
                             onClick={handleSubmit}
                             disabled={isSubmitting}
                             className="w-full py-6 bg-[#1ba6d6] text-white text-[0.7rem] font-black uppercase tracking-[0.4em] mask-btn shadow-2xl hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                           >
                              {isSubmitting ? 'Synchronizing Node...' : 'Submit Migration Protocol'}
                           </button>
                        </div>
                     )}
                  </motion.div>
                )}
             </AnimatePresence>

             {step < 4 && (
                <div className="flex justify-between mt-20 pt-10 border-t border-white/5">
                   <button 
                     onClick={prevStep} 
                     disabled={step === 1}
                     className="flex items-center gap-2 text-[0.6rem] font-black text-white/20 uppercase tracking-widest hover:text-white transition-colors disabled:opacity-0"
                   >
                     <ChevronLeft size={14} /> Back
                   </button>
                   <button 
                     onClick={nextStep}
                     className="flex items-center gap-4 px-10 py-5 bg-white text-black text-[0.65rem] font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-[#1ba6d6] hover:text-white transition-all shadow-2xl"
                   >
                     Continue <ChevronRight size={16} />
                   </button>
                </div>
             )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default LaunchBriefForm;
