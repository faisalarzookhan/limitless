import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DigitalHealthAuditor from '../components/DigitalHealthAuditor';
import MainLayout from '../components/layout/MainLayout';
import {
  Globe,
  Zap,
  ShieldCheck,
  BarChart3,
  FileText,
  Users,
  ArrowRight,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Activity,
  HeartPulse,
  Monitor
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const DigitalHealthAuditorPage = () => {
  const [showSandbox, setShowSandbox] = useState(false);

  const handleSandboxRequest = () => {
    setShowSandbox(true);
    // In a real implementation, this would open the sandbox
    alert('Initiating OmniTrack sandbox environment...');
  };

  const handleAuditComplete = (results, url, email) => {
    console.log('Audit completed for:', url);
  };

  const features = [
    {
      title: 'Structural Performance',
      description: 'Real-time telemetry via Lighthouse API for LCP, FID, and CLS benchmarks.',
      icon: Zap,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10'
    },
    {
      title: 'Security Synthesis',
      description: 'Automated SSL/TLS handshake verification and systemic HSTS header audits.',
      icon: ShieldCheck,
      color: 'text-secondary-400',
      bg: 'bg-secondary-500/10'
    },
    {
      title: 'Neural SEO Analysis',
      description: 'Comprehensive audit mapping of meta-signals, structural headers, and semantic paths.',
      icon: BarChart3,
      color: 'text-white',
      bg: 'bg-white/10'
    },
    {
      title: 'Technical Debt Delta',
      description: 'Generation of 10-page "Structural Resilience & Opportunity Reports" with deterministic paths.',
      icon: FileText,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10'
    },
    {
      title: 'User Velocity Mapping',
      description: 'Identifying friction centroids and engagement deltas within your ecosystem.',
      icon: Users,
      color: 'text-secondary-400',
      bg: 'bg-secondary-500/10'
    },
    {
      title: 'Deterministic Remediation',
      description: 'Direct integration with OmniTrack for immediate resolution of identified variables.',
      icon: TrendingUp,
      color: 'text-white',
      bg: 'bg-white/10'
    }
  ];

  const testimonials = [
    {
      quote: "The Digital Health Audit revealed critical structural deltas we didn't know existed. Our Core Web Vitals improved by 40%.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "SJ"
    },
    {
      quote: "Security vulnerabilities were isolated and neutralized within days. The detailed reporting made prioritization deterministic.",
      author: "Michael Chen",
      role: "Security Lead, FinSecure",
      avatar: "MC"
    },
    {
      quote: "Our search visibility shifted significantly following the audit recommendations. The actionable insights were exactly what we needed.",
      author: "Emily Rodriguez",
      role: "Director of Digital, GrowthCo",
      avatar: "ER"
    }
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden">
        {/* Ambient background particles/glows */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div 
               className="text-center mb-32"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <HeartPulse className="w-4 h-4 text-primary-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Diagnostic Core — Digital Health</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic">
                Digital <span className="not-italic bg-gradient-to-r from-primary-400 via-white to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Health</span> Auditor
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
                Get a high-fidelity analysis of your structural integrity, security posture, and semantic performance. Identify technical debt and architect your path to digital excellence.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all shadow-xl shadow-white/5 flex items-center gap-2">
                  Initiate Sync Audit
                </button>
                <button className="px-10 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                  View Reference Report
                </button>
              </motion.div>
            </motion.div>

            {/* Auditor Component Matrix */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-[64px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 mb-32 shadow-3xl overflow-hidden"
            >
              <div className="bg-[#0e1114]/80 backdrop-blur-3xl rounded-[62px] p-8 md:p-16 relative">
                 <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                          <Activity className="w-8 h-8 text-primary-400" />
                       </div>
                       <div>
                          <h2 className="text-2xl font-black text-white italic tracking-tight">Active Auditor Shell</h2>
                          <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">
                             <Monitor className="w-3 h-3" /> System Ready — Port 443 Sync Available
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="rounded-[40px] bg-dark-900/50 border border-white/5 p-8 relative overflow-hidden">
                    <DigitalHealthAuditor
                      onAuditComplete={handleAuditComplete}
                      onSandboxRequest={handleSandboxRequest}
                    />
                    <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                 </div>
              </div>
            </motion.div>

            {/* Features Glass Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
               {features.map((feature, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="group p-10 rounded-[48px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm"
                 >
                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform`}>
                       <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 leading-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                       {feature.description}
                    </p>
                 </motion.div>
               ))}
            </div>

            {/* How It Works Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="space-y-12"
               >
                  <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase underline decoration-primary-500/20 underline-offset-8">Audit <span className="not-italic block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Trajectory</span></h2>
                  
                  <div className="space-y-10">
                    {[
                      { step: '01', title: 'Endpoint Identification', desc: 'Input your domain for initial structural reconnaissance and port assessment.' },
                      { step: '02', title: 'Deep-Fiber Analysis', desc: 'Our AI agents synthesize performance delta, security posture, and semantic signals.' },
                      { step: '03', title: 'Intelligence Delivery', desc: 'Receive your Limitless Score and a comprehensive Technical Debt report.' },
                      { step: '04', title: 'Immediate Optimization', desc: 'Transition directly to OmniTrack for autonomous or guided structural lift.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-8 group">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-primary-400 text-lg group-hover:bg-primary-500 group-hover:text-white transition-all shadow-lg group-hover:translate-y-[-4px]">
                          {item.step}
                        </div>
                        <div className="pt-2">
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="space-y-12"
               >
                  <div className="p-12 md:p-16 rounded-[64px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 relative overflow-hidden group">
                     <div className="relative z-10 space-y-8">
                        <h3 className="text-3xl font-black text-white italic tracking-tight">Systemic Benefits</h3>
                        <div className="space-y-5">
                          {[
                            'Identify critical performance centroids',
                            'Detect latent security vulnerabilities',
                            'Elevate semantic search visibility',
                            'Benchmark against global architects',
                            'Deterministic remediation paths'
                          ].map(benefit => (
                            <div key={benefit} className="flex items-center gap-4 text-sm font-bold text-gray-300">
                               <ShieldCheck className="w-5 h-5 text-primary-400 flex-shrink-0" />
                               {benefit}
                            </div>
                          ))}
                        </div>
                        <button className="w-full py-5 px-8 rounded-3xl bg-white text-dark-900 font-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-all shadow-2xl">
                           Start Free Audit
                        </button>
                     </div>
                     {/* Decorative Scanline */}
                     <div className="absolute inset-0 bg-grid-white/[0.02]" />
                  </div>
               </motion.div>
            </div>

            {/* Testimonials Hub */}
            <div className="mb-32">
               <div className="text-center mb-16">
                  <h2 className="text-xs font-black text-gray-500 uppercase tracking-[0.6em] mb-4">Diagnostic Feedback</h2>
                  <h3 className="text-3xl font-black text-white italic tracking-tight">Structural Verification</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((t, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-10 rounded-[48px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all group"
                    >
                      <div className="flex gap-1 mb-8">
                         {[1,2,3,4,5].map(s => <Sparkles key={s} className="w-3 h-3 text-secondary-400" />)}
                      </div>
                      <p className="text-gray-400 font-medium italic leading-relaxed mb-10 text-lg">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-4 pt-10 border-t border-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center font-black text-primary-400 text-sm">
                           {t.avatar}
                        </div>
                        <div>
                           <div className="font-bold text-white text-sm">{t.author}</div>
                           <div className="text-xs font-black text-gray-500 uppercase tracking-widest">{t.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Global CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-16 md:p-24 rounded-[72px] bg-gradient-to-br from-dark-950 to-dark-900 border border-white/10 text-center relative overflow-hidden"
            >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic uppercase">Ready for <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Transformation</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                    Initiate a comprehensive diagnostic pulse today and discover the variables holding back your structural performance.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.2em] shadow-xl">
                       Launch Sync Audit
                    </button>
                    <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-2 group">
                       Contact Architect <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
            </motion.div>

          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DigitalHealthAuditorPage;
