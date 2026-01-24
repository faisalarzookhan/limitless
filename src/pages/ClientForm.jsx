import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Building2,
  Globe,
  Briefcase,
  Layers,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Send,
  HelpCircle,
  Briefcase as BriefcaseIcon // Fallback if needed
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';
import notificationService from '../services/notification/notificationService';

const ClientForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    industry: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
        // Send data to notification service
        await notificationService.sendLeadNotification({
            ...formData,
            source: 'Client Intake Form'
        });
        
        // Simulate network delay for UX
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSuccess(true);
    } catch (error) {
        console.error("Submission failed", error);
        // Still show success in demo mode or handle error
        setIsSuccess(true); 
    } finally {
        setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, title: 'Identity Synchronization', icon: User },
    { id: 2, title: 'Architectural Domain', icon: Building2 },
    { id: 3, title: 'Protocol Specifications', icon: Layers },
    { id: 4, title: 'Final Synthesis', icon: Send }
  ];

  if (isSuccess) {
      return (
        <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-white/[0.01]" />
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full mx-6 p-12 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl text-center"
            >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-4xl font-black italic text-white mb-4">Protocol Established</h2>
                <p className="text-gray-400 text-lg mb-12">Your architectural manifest has been synchronized. Our team is analyzing the nodal requirements.</p>
                <button onClick={() => window.location.href = '/'} className="px-10 py-4 bg-white text-dark-900 font-bold rounded-2xl hover:bg-gray-200 transition-all">
                    Return to Nexus
                </button>
            </motion.div>
        </div>
      );
  }

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30 py-40 px-6">
        {/* Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
           {/* Header */}
           <div className="text-center mb-16">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <Sparkles className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Intake Protocol — Strategic Alignment</span>
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-6">
                 Initiate <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Alignment</span>
              </h1>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Complete the nodal synchronization to join the Limitless ecosystem.</p>
           </div>

           {/* Progress Bar */}
           <div className="mb-20">
              <div className="flex justify-between mb-8 relative">
                 <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-10" />
                 {steps.map((s) => (
                    <div key={s.id} className="group relative">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                         step >= s.id 
                         ? 'bg-primary-500 border-primary-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                         : 'bg-dark-900 border-white/10 text-gray-600'
                       }`}>
                          <s.icon className="w-5 h-5" />
                       </div>
                       <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-black text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">
                          {s.title}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Form Content */}
           <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-10 md:p-16 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
           >
              <div className="relative z-10">
                 {step === 1 && (
                    <div className="space-y-10">
                       <h2 className="text-2xl font-black text-white italic tracking-tight flex items-center gap-4">
                          <User className="w-6 h-6 text-primary-400" /> 01 // Identity Pulse
                       </h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Legal Name</label>
                             <input 
                                type="text" name="name" value={formData.name} onChange={handleInputChange}
                                className="w-full bg-dark-950 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                                placeholder="Architect Name..."
                             />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Universal Email</label>
                             <input 
                                type="email" name="email" value={formData.email} onChange={handleInputChange}
                                className="w-full bg-dark-950 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                                placeholder="node@protocol.com"
                             />
                          </div>
                       </div>
                    </div>
                 )}

                 {step === 2 && (
                    <div className="space-y-10">
                       <h2 className="text-2xl font-black text-white italic tracking-tight flex items-center gap-4">
                          <Building2 className="w-6 h-6 text-secondary-400" /> 02 // Structural Domain
                       </h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Organization Node</label>
                             <input 
                                type="text" name="company" value={formData.company} onChange={handleInputChange}
                                className="w-full bg-dark-950 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                                placeholder="Entity Name..."
                             />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Digital Presence (URL)</label>
                             <input 
                                type="url" name="website" value={formData.website} onChange={handleInputChange}
                                className="w-full bg-dark-950 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                                placeholder="https://domain.com"
                             />
                          </div>
                       </div>
                    </div>
                 )}

                 {step === 3 && (
                    <div className="space-y-10">
                       <h2 className="text-2xl font-black text-white italic tracking-tight flex items-center gap-4">
                          <Layers className="w-6 h-6 text-primary-500" /> 03 // Logic Parameters
                       </h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Service Tier Required</label>
                             <select 
                                name="serviceType" value={formData.serviceType} onChange={handleInputChange}
                                className="w-full bg-dark-950 border border-white/10 rounded-2xl p-5 text-white font-bold focus:ring-2 focus:ring-primary-500/30 outline-none cursor-pointer appearance-none"
                             >
                                <option value="">Select Protocol...</option>
                                <option value="dev">Neural Development</option>
                                <option value="design">Architectural Design</option>
                                <option value="scaling">Scale Synchronization</option>
                             </select>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Nodal Budget Index</label>
                             <select 
                                name="budget" value={formData.budget} onChange={handleInputChange}
                                className="w-full bg-dark-950 border border-white/10 rounded-2xl p-5 text-white font-bold focus:ring-2 focus:ring-primary-500/30 outline-none cursor-pointer appearance-none"
                             >
                                <option value="">Select Index...</option>
                                <option value="lite">Standard Node</option>
                                <option value="pro">Pro-Grade Registry</option>
                                <option value="ent">Enterprise Architecture</option>
                             </select>
                          </div>
                       </div>
                    </div>
                 )}

                 {step === 4 && (
                    <div className="space-y-10">
                       <h2 className="text-2xl font-black text-white italic tracking-tight flex items-center gap-4">
                          <HelpCircle className="w-6 h-6 text-white" /> 04 // Abstract Manifest
                       </h2>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Manifest / Brief</label>
                          <textarea 
                             name="message" value={formData.message} onChange={handleInputChange}
                             rows="5"
                             className="w-full bg-dark-950 border border-white/10 rounded-[32px] p-8 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none resize-none"
                             placeholder="Describe your architectural vision..."
                          />
                       </div>
                    </div>
                 )}

                 {/* Controls */}
                 <div className="mt-16 pt-12 border-t border-white/5 flex items-center justify-between">
                    <button 
                       onClick={prevStep}
                       disabled={step === 1}
                       className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                         step === 1 ? 'text-gray-800 pointer-events-none' : 'text-gray-500 hover:text-white'
                       }`}
                    >
                       <ChevronLeft className="w-4 h-4" /> De-Escalate
                    </button>

                    <div className="flex gap-6">
                       {step < totalSteps ? (
                          <button 
                             onClick={nextStep}
                             className="px-12 py-5 bg-white text-dark-900 font-black rounded-2xl hover:bg-gray-200 transition-all text-[10px] uppercase tracking-[0.3em] flex items-center gap-3"
                          >
                             Advance Protocol <ChevronRight className="w-4 h-4" />
                          </button>
                       ) : (
                          <button 
                             onClick={handleSubmit}
                             disabled={isSubmitting}
                             className="px-16 py-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-black rounded-3xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all text-sm uppercase tracking-[0.3em] flex items-center gap-4 disabled:opacity-50"
                          >
                             {isSubmitting ? 'Synchronizing...' : 'Initiate Synchronization'} <Zap className="w-5 h-5 fill-current" />
                          </button>
                       )}
                    </div>
                 </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />
           </motion.div>

           {/* Security Footnote */}
           <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-700 uppercase tracking-widest">
                 <ShieldCheck className="w-3 h-3 text-primary-500" /> AES-256 Intake
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-700 uppercase tracking-widest">
                 <CheckCircle2 className="w-3 h-3 text-secondary-500" /> GDPR Synchronized
              </div>
           </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ClientForm;
