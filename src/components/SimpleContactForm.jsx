import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  User,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { sendContactNotification } from '../services/notification/notificationService';

const SimpleContactForm = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

    // Send notification about the contact form submission
    try {
      await sendContactNotification({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
      });
    } catch (error) {
      console.error('Error sending contact notification:', error);
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
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
          Transmission Success
        </h3>
        <p className="text-[0.65rem] text-white/50 font-black uppercase tracking-widest leading-relaxed relative z-10">
          Neural link established. We'll transmit a response across the network encrypted shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label
            htmlFor="name"
            className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em]"
          >
            Identifier *
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none"
              placeholder="YOUR IDENTIFIER"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label
            htmlFor="email"
            className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em]"
          >
            Neural Node *
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none"
              placeholder="ARCHIVE@NODE.COM"
            />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <label
          htmlFor="subject"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em]"
        >
          Protocol Subject *
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <HelpCircle className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
          </div>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white appearance-none transition-all duration-500 outline-none"
          >
            <option value="" className="bg-[#0e1114]">SELECT PROTOCOL</option>
            <option value="general" className="bg-[#0e1114]">GENERAL INQUIRY</option>
            <option value="support" className="bg-[#0e1114]">SUPPORT REQUEST</option>
            <option value="feedback" className="bg-[#0e1114]">FEEDBACK TRANSMISSION</option>
            <option value="complaint" className="bg-[#0e1114]">SYSTEM ANOMALY</option>
            <option value="other" className="bg-[#0e1114]">OTHER</option>
          </select>
        </div>
      </div>
      <div className="space-y-3">
        <label
          htmlFor="message"
          className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em]"
        >
          Core Transmission *
        </label>
        <div className="relative group">
          <div className="absolute top-6 left-5 flex items-center pointer-events-none">
            <MessageSquare className="h-4 w-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full pl-12 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/20 transition-all duration-500 outline-none resize-none"
            placeholder="ENCODE YOUR MESSAGE..."
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
            Transmitting...
          </>
        ) : (
          <>
            Send Transmission
            <ChevronRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default SimpleContactForm;
