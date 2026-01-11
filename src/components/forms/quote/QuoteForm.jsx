import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Briefcase,
  User,
  Mail,
  Phone,
  FileText,
  DollarSign,
  Calendar,
  CheckCircle2,
  Zap,
  ChevronRight,
  ShieldCheck,
  Target
} from 'lucide-react';

const QuoteForm = ({ variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    serviceInterest: []
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'web-development', label: 'Web Engine Architecture' },
    { value: 'mobile-app', label: 'Mobile interface Deployment' },
    { value: 'custom-software', label: 'Custom Logic Systems' },
    { value: 'crm-system', label: 'CRM / Node Management' },
    { value: 'business-automation', label: 'Neural Automation' },
    { value: 'ai-integration', label: 'AI Cognition Sync' },
    { value: 'consultation', label: 'Strategic Audit' },
    { value: 'other', label: 'Custom Protocol' }
  ];

  const budgets = [
    { value: '', label: 'Select Resource Range' },
    { value: 'under-5k', label: 'Under 5,000 Units' },
    { value: '5k-10k', label: '5,000 - 10,000 Units' },
    { value: '10k-25k', label: '10,000 - 25,000 Units' },
    { value: '25k-50k', label: '25,000 - 50,000 Units' },
    { value: '50k-100k', label: '50,000 - 100,000 Units' },
    { value: 'over-100k', label: 'Over 100,000 Units' },
    { value: 'tbd', label: 'Dynamic Allocation' }
  ];

  const timelines = [
    { value: '', label: 'Select Cycle Count' },
    { value: 'asap', label: 'Immediate Execution' },
    { value: '1-2-months', label: '1-2 Macro Cycles' },
    { value: '2-3-months', label: '2-3 Macro Cycles' },
    { value: '3-6-months', label: '3-6 Macro Cycles' },
    { value: '6-12-months', label: 'Annual Framework' },
    { value: 'not-sure', label: 'To Be Calibrated' }
  ];

  const serviceInterests = [
    { value: 'web-dev', label: 'Web Engine' },
    { value: 'mobile-app', label: 'Mobile Uplink' },
    { value: 'custom-software', label: 'Custom Logic' },
    { value: 'crm', label: 'Node Management' },
    { value: 'automation', label: 'Neural Flow' },
    { value: 'ai', label: 'Cognition Sync' },
    { value: 'consulting', label: 'System Audit' },
    { value: 'maintenance', label: 'Persistent Support' }
  ];

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'ID required';
    if (!formData.lastName.trim()) newErrors.lastName = 'ID required';
    if (!formData.email.trim()) {
      newErrors.email = 'Neural link required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Neural link invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Comms link required';
    if (!formData.company.trim()) newErrors.company = 'Node ID required';
    if (!formData.projectType) newErrors.projectType = 'Protocol type required';
    if (!formData.budget) newErrors.budget = 'Resource range required';
    if (!formData.timeline) newErrors.timeline = 'Cycle count required';
    if (!formData.message.trim()) newErrors.message = 'Manifesto required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceInterestChange = (value) => {
    setFormData(prev => {
      const newInterests = prev.serviceInterest.includes(value)
        ? prev.serviceInterest.filter(item => item !== value)
        : [...prev.serviceInterest, value];
      return { ...prev, serviceInterest: newInterests };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate neural synchronization
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        serviceInterest: []
      });
    } catch (error) {
      console.error('Synchronization fault:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#12161b]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-12 text-center"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-emerald-500/20 rounded-full border border-emerald-500/40">
                <ShieldCheck className="w-16 h-16 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-4">
              Telemetry Synchronized
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Your resource allocation request has been cached in the central node. An operator will contact your neural uplink within 24 operational cycles.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 text-white font-bold rounded-xl transition-all flex items-center gap-2 mx-auto"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              Request New Allocation
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#12161b]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="w-64 h-64 text-[#1ba6d6]" />
            </div>

            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#1ba6d6]/10 px-4 py-2 rounded-full mb-6 border border-[#1ba6d6]/20">
                <Lightbulb className="w-4 h-4 text-[#1ba6d6]" />
                <span className="text-[10px] font-black text-[#1ba6d6] uppercase tracking-widest">Resource Allocation Request</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                Engineer Your <span className="text-[#1ba6d6]">Custom Protocol</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Define your project telemetry and our neural network will calibrate a precise resource solution for your enterprise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <User className="w-3 h-3 text-[#1ba6d6]" /> First ID
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                    placeholder="e.g. John"
                  />
                  {errors.firstName && <p className="text-[10px] text-red-500 font-bold">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <User className="w-3 h-3 text-[#1ba6d6]" /> Last ID
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                    placeholder="e.g. Doe"
                  />
                  {errors.lastName && <p className="text-[10px] text-red-500 font-bold">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Mail className="w-3 h-3 text-[#1ba6d6]" /> Neural Uplink
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                    placeholder="protocol@neural.net"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Phone className="w-3 h-3 text-[#1ba6d6]" /> Comms Link
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                    placeholder="+x (xxx) xxx-xxxx"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                  <Briefcase className="w-3 h-3 text-[#1ba6d6]" /> Node Domain (Company)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.company ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                  placeholder="Your Enterprise Node"
                />
                {errors.company && <p className="text-[10px] text-red-500 font-bold">{errors.company}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <FileText className="w-3 h-3 text-[#1ba6d6]" /> Protocol Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.projectType ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all appearance-none cursor-pointer`}
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#0e1114]">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <DollarSign className="w-3 h-3 text-[#1ba6d6]" /> Resource Units
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.budget ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all appearance-none cursor-pointer`}
                  >
                    {budgets.map((b) => (
                      <option key={b.value} value={b.value} className="bg-[#0e1114]">
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-[#1ba6d6]" /> Cycle Count
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.timeline ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all appearance-none cursor-pointer`}
                  >
                    {timelines.map((t) => (
                      <option key={t.value} value={t.value} className="bg-[#0e1114]">
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-4 block">
                  Synchronous Modules of Interest
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {serviceInterests.map((service) => (
                    <button
                      key={service.value}
                      type="button"
                      onClick={() => handleServiceInterestChange(service.value)}
                      className={`flex items-center justify-center p-3 rounded-xl border transition-all text-[10px] font-bold uppercase tracking-tighter ${
                        formData.serviceInterest.includes(service.value)
                          ? 'bg-[#1ba6d6] border-[#1ba6d6] text-white shadow-[0_0_20px_rgba(27,166,214,0.3)]'
                          : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/30'
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-[#1ba6d6]" /> Project Manifesto
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                  placeholder="Define your objectives, neural requirements, and scaling benchmarks..."
                />
                {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1ba6d6] hover:bg-[#1ba6d6]/90 text-white font-black rounded-2xl transition-all shadow-xl shadow-[#1ba6d6]/20 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Syncing Node...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Initiate Synchronization Sequence
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuoteForm;