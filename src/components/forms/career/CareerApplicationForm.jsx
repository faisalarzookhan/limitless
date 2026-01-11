import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Briefcase, FileText, Link as LinkIcon, GraduationCap, CheckCircle2, Upload, Send, AlertCircle } from 'lucide-react';

const CareerApplicationForm = ({ jobTitle = 'Open Position', variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: jobTitle,
    experience: '',
    education: '',
    portfolio: '',
    linkedin: '',
    availability: '',
    salaryExpectation: '',
    coverLetter: '',
    resume: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const experiences = [
    { value: '', label: 'Experience Level' },
    { value: 'entry', label: 'Entry Level (0-1 years)' },
    { value: 'junior', label: 'Junior (1-3 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior (5-8 years)' },
    { value: 'lead', label: 'Lead/Principal (8+ years)' }
  ];

  const educations = [
    { value: '', label: 'Education Level' },
    { value: 'high-school', label: 'High School' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'phd', label: 'PhD' },
    { value: 'other', label: 'Other' }
  ];

  const availabilityOptions = [
    { value: '', label: 'Availability' },
    { value: 'immediate', label: 'Immediate' },
    { value: '2-weeks', label: '2 Weeks Notice' },
    { value: '1-month', label: '1 Month Notice' },
    { value: '2-months', label: '2 Months Notice' },
    { value: 'negotiable', label: 'Negotiable' }
  ];

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.position.trim()) newErrors.position = 'Required';
    if (!formData.experience) newErrors.experience = 'Required';
    if (!formData.education) newErrors.education = 'Required';
    if (!formData.availability) newErrors.availability = 'Required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Required';

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'Max 5MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (onSubmit) {
        onSubmit({ ...formData, resume: formData.resume ? formData.resume.name : null });
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission breakdown:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-[#1ba6d6]/10 border border-[#1ba6d6]/20 backdrop-blur-xl rounded-2xl p-12 text-center"
      >
        <div className="w-16 h-16 bg-[#1ba6d6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(27,166,214,0.4)]">
          <CheckCircle2 color="white" size={32} />
        </div>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Transmission Successful</h3>
        <p className="text-[#94a3b8] text-xs uppercase tracking-widest opacity-60 mb-8 leading-relaxed">
          Your credentials have been indexed. Our neural network will evaluate your profile.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-[#1ba6d6] text-white text-[0.6rem] font-black uppercase tracking-[0.2em] mask-btn hover:scale-105 transition-transform"
        >
          Submit Alternative Profile
        </button>
      </motion.div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
              placeholder="Primary Name"
            />
          </div>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
              placeholder="Secondary Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
              placeholder="Neural Node (Email)"
            />
          </div>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md`}
              placeholder="Signal Link (Phone)"
            />
          </div>
        </div>

        <div className="relative group">
          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md"
            placeholder="Target Vertical (Position)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors z-10" />
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full bg-[#1a1f24] border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm outline-none transition-all duration-300 appearance-none"
            >
              {experiences.map(opt => <option key={opt.value} value={opt.value} className="bg-[#0e1114]">{opt.label}</option>)}
            </select>
          </div>
          <div className="relative group">
            <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors z-10" />
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full bg-[#1a1f24] border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm outline-none transition-all duration-300 appearance-none"
            >
              {educations.map(opt => <option key={opt.value} value={opt.value} className="bg-[#0e1114]">{opt.label}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md"
              placeholder="Portfolio Artifacts (URL)"
            />
          </div>
          <div className="relative group">
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md"
              placeholder="Neural Profile (LinkedIn)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors z-10" />
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full bg-[#1a1f24] border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm outline-none transition-all duration-300 appearance-none"
            >
              {availabilityOptions.map(opt => <option key={opt.value} value={opt.value} className="bg-[#0e1114]">{opt.label}</option>)}
            </select>
          </div>
          <div className="relative group">
            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] group-focus-within:text-[#1ba6d6] transition-colors" />
            <input
              type="text"
              name="salaryExpectation"
              value={formData.salaryExpectation}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 focus:border-[#1ba6d6] rounded-xl px-12 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md"
              placeholder="Reward Expectation"
            />
          </div>
        </div>

        <div className="relative group">
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="resume"
            className={`flex items-center justify-center gap-4 px-6 py-4 border-2 border-dashed ${errors.resume ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/5'} rounded-xl cursor-pointer hover:border-[#1ba6d6] hover:bg-[#1ba6d6]/5 transition-all group/label backdrop-blur-md`}
          >
            <Upload className={`w-5 h-5 ${errors.resume ? 'text-red-500' : 'text-[#94a3b8] group-hover/label:text-[#1ba6d6]'} transition-colors`} />
            <span className={`text-xs uppercase tracking-[0.2em] font-bold ${errors.resume ? 'text-red-500' : 'text-[#94a3b8] group-hover/label:text-white'} transition-colors`}>
              {formData.resume ? formData.resume.name : 'Ingest Resume Artifact (PDF/DOC)'}
            </span>
          </label>
        </div>

        <div className="relative group">
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className={`w-full bg-white/5 border ${errors.coverLetter ? 'border-red-500' : 'border-white/10'} focus:border-[#1ba6d6] rounded-2xl px-6 py-4 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 backdrop-blur-md resize-none min-h-[160px]`}
            placeholder="Structural Narrative (Cover Letter)"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(27,166,214,0.3)" }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="w-full py-5 bg-[#1ba6d6] hover:bg-[#1592bd] text-white font-black text-xs uppercase tracking-[0.4em] mask-btn transition-all disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Commit Architecture
              <Send size={18} />
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default CareerApplicationForm;
