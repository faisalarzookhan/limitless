import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Code2,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';
import { sendLeadGenerationNotification } from '../services/notification/notificationService';

const TechnicalAuditForm = ({ variant = 'default', onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    url: '',
    currentStack: '',
    performancePainPoints: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification about the form submission
      await sendLeadGenerationNotification({
        ...formData,
        formType: 'technical-audit',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
      });

      // Reset form
      setFormData({ url: '', currentStack: '', performancePainPoints: '' });
      setSubmitSuccess(true);

      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting technical audit form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        className="bg-[#1ba6d6]/5 border border-[#1ba6d6]/30 rounded-[2rem] p-10 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none"></div>
        <div className="flex items-center justify-center mb-6 relative z-10">
          <div className="w-16 h-16 bg-[#1ba6d6] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(27,166,214,0.4)]">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-4 relative z-10">
          Protocol Initiated
        </h3>
        <p className="text-[0.65rem] text-white/50 font-black uppercase tracking-widest leading-relaxed relative z-10">
          We'll perform a comprehensive neural audit of your infrastructure and transmit the results shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-3">
        <label
          htmlFor="url"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em]"
        >
          Target URL *
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Globe className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
          </div>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none"
            placeholder="HTTPS://SOURCE.COM"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label
          htmlFor="currentStack"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em]"
        >
          Neural Architecture
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Code2 className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
          </div>
          <input
            type="text"
            id="currentStack"
            name="currentStack"
            value={formData.currentStack}
            onChange={handleChange}
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none"
            placeholder="E.G. REACT, NODE.JS, AWS"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label
          htmlFor="performancePainPoints"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em]"
        >
          Anomaly Analysis *
        </label>
        <div className="relative group">
          <div className="absolute top-6 left-5 flex items-center pointer-events-none">
            <Lightbulb className="h-4 w-4 text-white/20 group-focus-within:text-[#ffc957] transition-colors" />
          </div>
          <textarea
            id="performancePainPoints"
            name="performancePainPoints"
            value={formData.performancePainPoints}
            onChange={handleChange}
            required
            rows="4"
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#ffc957]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none resize-none"
            placeholder="DESCRIBE DETECTED LATENCY OR TECHNICAL ANOMALIES..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 bg-[#1ba6d6] text-white text-[0.7rem] font-black uppercase tracking-[0.4em] mask-btn hover:scale-[1.02] active:scale-95 disabled:opacity-30 disabled:grayscale transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)] flex items-center justify-center group"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-3"></div>
            Analyzing Target...
          </>
        ) : (
          <>
            Initiate Neural Audit
            <ChevronRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <div className="flex flex-col items-center space-y-4 py-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1ba6d6]" />
            <span className="text-[0.5rem] text-white/40 font-black uppercase tracking-[0.2em]">Secure Node</span>
          </div>
          <div className="flex items-center space-x-2">
            <BrainCircuit className="w-3.5 h-3.5 text-[#ffc957]" />
            <span className="text-[0.5rem] text-white/40 font-black uppercase tracking-[0.2em]">AI Powered</span>
          </div>
        </div>
        <p className="text-[0.5rem] text-white/20 font-black uppercase tracking-[0.2em] text-center italic">
          Comprehensive diagnostic protocol will follow within 24 standard cycles.
        </p>
      </div>
    </form>
  );
};

export default TechnicalAuditForm;
