import { motion } from 'framer-motion';
import {
  FileText,
  User,
  Mail,
  Phone,
  Link2,
  Upload,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const JobApplication = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30 py-40 px-6">
        {/* Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
           {/* Header */}
           <div className="text-center mb-16">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <Briefcase className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Talent Acquisition — Recruitment Intake Node</span>
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-6">
                 Join the <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Synergy</span>
              </h1>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-xs italic">Submit your architectural credentials to the Limitless ecosystem.</p>
           </div>

           {/* Form Container */}
           <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="p-10 md:p-16 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
           >
              <form className="relative z-10 space-y-12" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                          <User className="w-3 h-3 text-primary-400" /> Full Name
                       </label>
                       <input 
                          type="text" required
                          className="w-full bg-dark-950/50 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                          placeholder="Architect Name..."
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                          <Mail className="w-3 h-3 text-primary-400" /> Email Node
                       </label>
                       <input 
                          type="email" required
                          className="w-full bg-dark-950/50 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                          placeholder="node@protocol.com"
                       />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                          <Phone className="w-3 h-3 text-primary-400" /> Contact Number
                       </label>
                       <input 
                          type="tel" required
                          className="w-full bg-dark-950/50 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                          placeholder="+1 (000) 000-0000"
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                          <Link2 className="w-3 h-3 text-primary-400" /> Portfolio Hub (URL)
                       </label>
                       <input 
                          type="url"
                          className="w-full bg-dark-950/50 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none"
                          placeholder="https://nexus.com/profile"
                       />
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                       <FileText className="w-3 h-3 text-primary-400" /> Professional Manifest (Cover Letter)
                    </label>
                    <textarea 
                       rows="5"
                       className="w-full bg-dark-950/50 border border-white/10 rounded-[32px] p-8 text-white placeholder-gray-700 font-bold focus:ring-2 focus:ring-primary-500/30 outline-none resize-none"
                       placeholder="Synthesize your mission and expertise..."
                    />
                 </div>

                 <div className="pt-8 flex flex-col items-center">
                    <div className="w-full p-12 rounded-[48px] border-2 border-dashed border-white/10 hover:border-primary-500/30 transition-all flex flex-col items-center justify-center gap-6 cursor-pointer group bg-dark-950/30 mb-8">
                       <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Upload className="w-8 h-8 text-gray-600 group-hover:text-primary-400" />
                       </div>
                       <div className="text-center">
                          <p className="text-sm font-black text-white italic tracking-tight uppercase">Upload Credentials (Resume/CV)</p>
                          <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.3em] mt-2">PDF | DOCX | MAX 10MB</p>
                       </div>
                    </div>

                    <button 
                       type="submit"
                       className="px-20 py-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-black rounded-3xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all text-sm uppercase tracking-[0.4em] flex items-center gap-4 group"
                    >
                       Initiate Application <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </form>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />
           </motion.div>

           {/* Security Footnote */}
           <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-700 uppercase tracking-widest">
                 <ShieldCheck className="w-3 h-3 text-primary-500" /> Encrypted Transmission
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-700 uppercase tracking-widest">
                 <CheckCircle2 className="w-3 h-3 text-secondary-500" /> Registry Verified
              </div>
           </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default JobApplication;