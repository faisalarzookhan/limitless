import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Briefcase,
  Globe,
  DollarSign,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Building2,
  Target
} from 'lucide-react';
import { sendLeadGenerationNotification } from '../services/notification/notificationService';

const PartnerWhiteLabelForm = ({ variant = 'default', onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    companySize: '',
    region: '',
    annualTurnover: '',
    partnershipType: '',
    businessModel: '',
    existingClients: '',
    specialization: '',
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
      await sendLeadGenerationNotification({
        ...formData,
        formType: 'partner-whitelabel',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
      });

      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        companySize: '',
        region: '',
        annualTurnover: '',
        partnershipType: '',
        businessModel: '',
        existingClients: '',
        specialization: '',
      });
      setSubmitSuccess(true);

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting partner/white-label form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        className="bg-[#1ba6d6]/5 border border-[#1ba6d6]/30 rounded-[2.5rem] p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none"></div>
        <div className="flex items-center justify-center mb-8 relative z-10">
          <div className="w-20 h-20 bg-[#1ba6d6] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(27,166,214,0.4)]">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="text-sm font-black text-white uppercase tracking-[0.4em] mb-4 relative z-10">
          UPLINK ESTABLISHED
        </h3>
        <p className="text-[0.65rem] text-white/50 font-black uppercase tracking-widest leading-relaxed max-w-sm mx-auto relative z-10">
          Partnership transmission received. A Limitless architect will synchronize with your node terminal shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
      
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label htmlFor="fullName" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Operator Identity</label>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none transition-all duration-500"
                placeholder="FULL NAME"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="email" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Neural Node (Email)</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none transition-all duration-500"
                placeholder="OPERATOR@COMMAND.COM"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="companyName" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Organization Identifier</label>
          <div className="relative group">
            <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none transition-all duration-500"
              placeholder="COMPANY / ENTITY NAME"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label htmlFor="companySize" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Entity Scale</label>
            <div className="relative group">
              <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white outline-none transition-all duration-500 appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0e1114]">SELECT SCALE</option>
                <option value="1-10 employees" className="bg-[#0e1114]">1-10 OPERATORS</option>
                <option value="11-50 employees" className="bg-[#0e1114]">11-50 OPERATORS</option>
                <option value="51-200 employees" className="bg-[#0e1114]">51-200 OPERATORS</option>
                <option value="201-500 employees" className="bg-[#0e1114]">201-500 OPERATORS</option>
                <option value="500+ employees" className="bg-[#0e1114]">500+ OPERATORS</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="region" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Operational Sector</label>
            <div className="relative group">
              <Globe className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white outline-none transition-all duration-500 appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0e1114]">SELECT SECTOR</option>
                <option value="North America" className="bg-[#0e1114]">NORTH AMERICA</option>
                <option value="Europe" className="bg-[#0e1114]">EUROPE</option>
                <option value="Asia Pacific" className="bg-[#0e1114]">ASIA PACIFIC</option>
                <option value="Latin America" className="bg-[#0e1114]">LATIN AMERICA</option>
                <option value="Middle East & Africa" className="bg-[#0e1114]">MIDDLE EAST & AFRICA</option>
                <option value="Global" className="bg-[#0e1114]">GLOBAL FREQUENCY</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="annualTurnover" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Resource Flow (Turnover)</label>
          <div className="relative group">
            <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            <select
              id="annualTurnover"
              name="annualTurnover"
              value={formData.annualTurnover}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white outline-none transition-all duration-500 appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#0e1114]">SELECT TURNOVER</option>
              <option value="under-1m" className="bg-[#0e1114]">UNDER 1M CREDITS</option>
              <option value="1m-5m" className="bg-[#0e1114]">1M - 5M CREDITS</option>
              <option value="5m-25m" className="bg-[#0e1114]">5M - 25M CREDITS</option>
              <option value="25m-100m" className="bg-[#0e1114]">25M - 100M CREDITS</option>
              <option value="100m-500m" className="bg-[#0e1114]">100M - 500M CREDITS</option>
              <option value="500m-plus" className="bg-[#0e1114]">500M+ CREDITS</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label htmlFor="partnershipType" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Protocol Type</label>
            <div className="relative group">
              <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white outline-none transition-all duration-500 appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0e1114]">SELECT PROTOCOL</option>
                <option value="Reseller" className="bg-[#0e1114]">RESELLER</option>
                <option value="System Integrator" className="bg-[#0e1114]">SYSTEM INTEGRATOR</option>
                <option value="Technology Partner" className="bg-[#0e1114]">TECHNOLOGY PARTNER</option>
                <option value="Referral Partner" className="bg-[#0e1114]">REFERRAL PARTNER</option>
                <option value="White-Label Partner" className="bg-[#0e1114]">WHITE-LABEL</option>
                <option value="Alliance Partner" className="bg-[#0e1114]">ALLIANCE</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="businessModel" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Operational Logic</label>
            <div className="relative group">
              <Zap className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
              <select
                id="businessModel"
                name="businessModel"
                value={formData.businessModel}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white outline-none transition-all duration-500 appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0e1114]">SELECT LOGIC</option>
                <option value="B2B Services" className="bg-[#0e1114]">B2B SERVICES</option>
                <option value="SaaS Reseller" className="bg-[#0e1114]">SAAS RESELLER</option>
                <option value="Consulting" className="bg-[#0e1114]">CONSULTING</option>
                <option value="System Integration" className="bg-[#0e1114]">SYSTEM INTEGRATION</option>
                <option value="Product Distribution" className="bg-[#0e1114]">DISTRIBUTION</option>
                <option value="Hybrid Model" className="bg-[#0e1114]">HYBRID MODEL</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="specialization" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Domain Specialization</label>
          <div className="relative group">
            <Lightbulb className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none transition-all duration-500"
              placeholder="E.G., HEALTHCARE, QUANTUM FINANCE, ETC."
            />
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="existingClients" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Archive of Current Nodes (Clients)</label>
          <div className="relative group">
            <Target className="absolute top-6 left-5 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            <textarea
              id="existingClients"
              name="existingClients"
              value={formData.existingClients}
              onChange={handleChange}
              rows="4"
              className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-6 rounded-3xl text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none transition-all duration-500 resize-none"
              placeholder="DESCRIBE EXISTING NETWORK AND KEY SECTORS..."
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-6 bg-[#1ba6d6] text-white text-[0.8rem] font-black uppercase tracking-[0.5em] mask-btn hover:scale-[1.02] active:scale-95 transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)] flex items-center justify-center group"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-4"></div>
              TRANSMITTING...
            </>
          ) : (
            <>
              INITIALIZE PARTNERSHIP
              <ChevronRight className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-[0.5rem] text-center text-white/20 font-black uppercase tracking-[0.2em] mt-8">
          Neural link protocols will be evaluated within 48 operational cycles.
        </p>
      </form>
    </motion.div>
  );
};

export default PartnerWhiteLabelForm;
