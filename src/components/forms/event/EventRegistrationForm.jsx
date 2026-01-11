import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  MapPin,
  Ticket,
  CheckCircle2,
  Zap,
  Globe,
  Cpu,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const EventRegistrationForm = ({ eventName = 'Upcoming Event', eventDate = 'TBD', variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    attendanceType: '',
    dietaryRestrictions: '',
    specialRequirements: '',
    newsletterOptIn: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    { value: '', label: 'Select Specialized Sector' },
    { value: 'technology', label: 'Neural Technology' },
    { value: 'finance', label: 'Quantum Finance' },
    { value: 'healthcare', label: 'Bio-Digital Health' },
    { value: 'education', label: 'Knowledge Synthesis' },
    { value: 'manufacturing', label: 'Automated Forging' },
    { value: 'retail', label: 'Digital Commerce' },
    { value: 'consulting', label: 'Strategic Auditing' },
    { value: 'government', label: 'Civil Infrastructure' },
    { value: 'other', label: 'Custom Protocol' }
  ];

  const attendanceTypes = [
    { value: '', label: 'Select Uplink Type' },
    { value: 'in-person', label: 'Physical Presence' },
    { value: 'virtual', label: 'Neural Uplink (Virtual)' },
    { value: 'hybrid', label: 'Symbiotic (Hybrid)' }
  ];

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'ID required';
    if (!formData.lastName.trim()) newErrors.lastName = 'ID required';
    if (!formData.email.trim()) {
      newErrors.email = 'Neural link required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Neural format invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Comms link required';
    if (!formData.company.trim()) newErrors.company = 'Node ID required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Title required';
    if (!formData.industry) newErrors.industry = 'Sector selection required';
    if (!formData.attendanceType) newErrors.attendanceType = 'Uplink type required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate registration synchronization
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
        jobTitle: '',
        industry: '',
        attendanceType: '',
        dietaryRestrictions: '',
        specialRequirements: '',
        newsletterOptIn: false
      });
    } catch (error) {
      console.error('Registration fault:', error);
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
              Access Granted
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              You are now synchronized for <strong>{eventName}</strong> on <strong>{eventDate}</strong>. A digital pass has been transmitted to your neural uplink.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 text-white font-bold rounded-xl transition-all flex items-center gap-2 mx-auto"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              Register Another Unit
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
              <Globe className="w-64 h-64 text-[#1ba6d6]" />
            </div>

            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#1ba6d6]/10 px-4 py-2 rounded-full mb-6 border border-[#1ba6d6]/20">
                <Ticket className="w-4 h-4 text-[#1ba6d6]" />
                <span className="text-[10px] font-black text-[#1ba6d6] uppercase tracking-widest">Node Summit Reservation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                Synchronize for <span className="text-[#1ba6d6]">{eventName}</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto flex items-center justify-center gap-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1ba6d6]" /> {eventDate}
                </span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1ba6d6]" /> Secure Zone
                </span>
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
                    placeholder="John"
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
                    placeholder="Doe"
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
                    placeholder="uplink@neural.net"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Briefcase className="w-3 h-3 text-[#1ba6d6]" /> Node Instance (Company)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.company ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                    placeholder="Your Node"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Cpu className="w-3 h-3 text-[#1ba6d6]" /> Functional Role
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.jobTitle ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all`}
                    placeholder="Lead Architect"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Globe className="w-3 h-3 text-[#1ba6d6]" /> Specialized Sector
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.industry ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all appearance-none cursor-pointer`}
                  >
                    {industries.map((ind) => (
                      <option key={ind.value} value={ind.value} className="bg-[#0e1114]">
                        {ind.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Zap className="w-3 h-3 text-[#1ba6d6]" /> Uplink Type
                  </label>
                  <select
                    name="attendanceType"
                    value={formData.attendanceType}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.attendanceType ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all appearance-none cursor-pointer`}
                  >
                    {attendanceTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#0e1114]">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">
                  Nutritional Protocol Requirements (Optional)
                </label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all"
                  placeholder="Define any bio-restrictions..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">
                  Structural Accessibility Needs (Optional)
                </label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all"
                  placeholder="Identify any accessibility protocols..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="newsletterOptIn"
                  id="newsletterOptIn"
                  checked={formData.newsletterOptIn}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#1ba6d6] focus:ring-[#1ba6d6] transition-all cursor-pointer"
                />
                <label htmlFor="newsletterOptIn" className="text-sm text-gray-400 cursor-pointer">
                  Sync with future intelligence transmissions and node updates
                </label>
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
                    Syncing Reservation...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Secure Immediate Reservation
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

export default EventRegistrationForm;