import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Briefcase,
  GraduationCap,
  FileText,
  CheckCircle2,
  Link,
  Phone,
  Clock,
  Coins,
  Upload,
  ShieldCheck,
  Zap,
  ChevronRight,
  Target
} from 'lucide-react';
import { sendJobApplicationNotification } from '../services/notification/notificationService';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
    portfolio: '',
    availability: '',
    salaryExpectation: '',
    linkedin: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [resume, setResume] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send notification about the job application
    await sendJobApplicationNotification({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      experience: formData.experience,
      education: formData.education,
      coverLetter: formData.coverLetter,
      portfolio: formData.portfolio,
      availability: formData.availability,
      salaryExpectation: formData.salaryExpectation,
      linkedin: formData.linkedin,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    });

    // Simulate neural processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        education: '',
        coverLetter: '',
        portfolio: '',
        availability: '',
        salaryExpectation: '',
        linkedin: '',
      });
      setResume(null);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#12161b]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-emerald-500/20 rounded-full border border-emerald-500/40">
                <ShieldCheck className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Transmission Received
            </h3>
            <p className="text-gray-400 mb-6">
              Your credentials have been uploaded to the recruit node. Our operators will review your profile shortly.
            </p>
            <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Onboarding Protocol Initiated
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#1ba6d6]" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all"
                  placeholder="e.g. Alex Node"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1ba6d6]" />
                  Neural Uplink (Email)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all"
                  placeholder="uplink@node.net"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1ba6d6]" />
                  Direct Comms (Phone)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all"
                  placeholder="+x (xxx) xxx-xxxx"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#1ba6d6]" />
                  Target Designation (Position)
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0e1114]">Select designation</option>
                  <option value="frontend-developer" className="bg-[#0e1114]">Frontend Engine Architect</option>
                  <option value="backend-developer" className="bg-[#0e1114]">Core Systems Developer</option>
                  <option value="fullstack-developer" className="bg-[#0e1114]">Full-Stack Integrator</option>
                  <option value="mobile-developer" className="bg-[#0e1114]">Mobile Interface Specialist</option>
                  <option value="ui-ux-designer" className="bg-[#0e1114]">Experience Designer</option>
                  <option value="devops-engineer" className="bg-[#0e1114]">Infrastructure Operator</option>
                  <option value="project-manager" className="bg-[#0e1114]">Workflow Commander</option>
                  <option value="sales-representative" className="bg-[#0e1114]">Growth Strategist</option>
                  <option value="other" className="bg-[#0e1114]">Custom Role</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1ba6d6]" />
                  Operational History (Experience)
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0e1114]">Select duration</option>
                  <option value="0-1" className="bg-[#0e1114]">0-1 Cycles (Years)</option>
                  <option value="1-3" className="bg-[#0e1114]">1-3 Cycles (Years)</option>
                  <option value="3-5" className="bg-[#0e1114]">3-5 Cycles (Years)</option>
                  <option value="5-10" className="bg-[#0e1114]">5-10 Cycles (Years)</option>
                  <option value="10+" className="bg-[#0e1114]">10+ Cycles (Years)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#1ba6d6]" />
                  Foundational Sync (Education)
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0e1114]">Select level</option>
                  <option value="high-school" className="bg-[#0e1114]">Primary Node</option>
                  <option value="bachelor" className="bg-[#0e1114]">Advanced Node (Bachelor's)</option>
                  <option value="master" className="bg-[#0e1114]">Specialized Node (Master's)</option>
                  <option value="phd" className="bg-[#0e1114]">Expert Node (PhD)</option>
                  <option value="other" className="bg-[#0e1114]">Other Sync</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Link className="w-4 h-4 text-[#1ba6d6]" />
                  Professional Matrix (LinkedIn)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all"
                  placeholder="https://linkedin.com/in/operator"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1ba6d6]" />
                  Portfolio Repository
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all"
                  placeholder="https://github.com/operator/repo"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#1ba6d6]" />
                  Uplink Timing (Availability)
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0e1114]">Select availability</option>
                  <option value="immediate" className="bg-[#0e1114]">Immediate Execution</option>
                  <option value="2-weeks" className="bg-[#0e1114]">Within 2 Cycles</option>
                  <option value="1-month" className="bg-[#0e1114]">Within 4 Cycles</option>
                  <option value="2-months" className="bg-[#0e1114]">Deferred Start</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#1ba6d6]" />
                  Resource Requirement (Expected Salary)
                </label>
                <select
                  name="salaryExpectation"
                  value={formData.salaryExpectation}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0e1114]">Select compensation</option>
                  <option value="3-6lpa" className="bg-[#0e1114]">Standard Tier (3-6 LPA)</option>
                  <option value="6-10lpa" className="bg-[#0e1114]">Core Tier (6-10 LPA)</option>
                  <option value="10-15lpa" className="bg-[#0e1114]">High Tier (10-15 LPA)</option>
                  <option value="15-25lpa" className="bg-[#0e1114]">Elite Tier (15-25 LPA)</option>
                  <option value="25lpa+" className="bg-[#0e1114]">Prime Tier (25+ LPA)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#1ba6d6]" />
                Identity Artifact (Resume)
              </label>
              <div className="relative group">
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-6 border-dashed group-hover:border-[#1ba6d6]/50 transition-all flex flex-col items-center justify-center gap-2">
                  <Upload className="w-8 h-8 text-gray-500 group-hover:text-[#1ba6d6] transition-colors" />
                  <span className="text-gray-400 group-hover:text-gray-300">
                    {resume ? resume.name : 'Upload PDF / DOCX artifact'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1ba6d6]" />
                Manifesto (Cover Letter)
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 focus:ring-1 focus:ring-[#1ba6d6]/50 transition-all"
                placeholder="Declare your objectives and alignment with the Limitless network..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1ba6d6] hover:bg-[#1ba6d6]/90 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Neural Sync in Progress...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Initiate Onboarding Protocol
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobApplicationForm;
