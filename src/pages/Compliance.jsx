import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  LockKeyhole,
  Users,
  Globe,
  CheckCircle2,
  ArrowRight,
  Activity,
  Award,
  Zap,
  Shield,
  Search,
  Check
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const Compliance = () => {
  const complianceStandards = [
    {
      id: 'soc2',
      title: 'SOC 2 Type II',
      description:
        'Our systems undergo rigorous annual audits to ensure security, availability, processing integrity, confidentiality, and privacy of customer data.',
      status: 'Certified',
      expiry: 'Dec 2025',
      details: [
        'Type II certification (12-month period)',
        'Independent third-party audit',
        'Comprehensive security controls',
        'Continuous monitoring synthesis',
      ],
    },
    {
      id: 'gdpr',
      title: 'GDPR Compliance',
      description:
        'Adherence to the strictest data protection standards in the European Union, ensuring absolute data privacy rights.',
      status: 'Synchronized',
      expiry: 'Ongoing Cycle',
      details: [
        'Data processing agreements',
        'Deterministic Right to be Forgotten',
        '72-hour pulse notification',
        'Privacy by Architecture principles',
      ],
    },
    {
      id: 'iso27001',
      title: 'ISO 27001',
      description:
        'International standard for information security management, demonstrating commitment to secure information handling.',
      status: 'Certified',
      expiry: 'Jun 2025',
      details: [
        'ISMS Protocol Management',
        'Dynamic risk assessment treatment',
        'Continuous evolution cycles',
        'Internal audit synchronicity',
      ],
    },
    {
      id: 'hipaa',
      title: 'HIPAA Compliance',
      description:
        'Health Insurance Portability and Accountability Act compliance for high-integrity healthcare data protection.',
      status: 'Compliant',
      expiry: 'Ongoing Cycle',
      details: [
        'PHI handling encryption',
        'Administrative fortress safeguards',
        'Physical perimeter security',
        'Technical architectural walls',
      ],
    },
  ];

  const securityPractices = [
    {
      icon: LockKeyhole,
      title: 'AES-256 Vault',
      description:
        'Data at rest is secured via 256-bit encryption with rotating keys.',
      color: 'text-primary-400'
    },
    {
      icon: Users,
      title: 'Role Synthesis',
      description: 'MFA and deterministic role-based access control for all nodes.',
      color: 'text-secondary-400'
    },
    {
      icon: Globe,
      title: 'Global Protocol',
      description: 'International data protection alignment across all jurisdictions.',
      color: 'text-white'
    },
    {
      icon: Activity,
      title: 'Pulse Logs',
      description: 'Real-time telemetry and logging for every systemic mutation.',
      color: 'text-primary-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden selection:bg-primary-500/30">
        {/* Background Layers */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-6">
           <div className="max-w-7xl mx-auto text-center">
              <motion.div 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <ShieldCheck className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Operational Integrity — Compliance Architecture</span>
              </motion.div>

              <motion.h1 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic"
              >
                 Trust <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Infrastructure</span>
              </motion.h1>

              <motion.p 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
              >
                 Deterministic security protocols and verified compliance matrices. Our architecture is designed for transparency, integrity, and absolute data sovereignty.
              </motion.p>

              <motion.div 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="flex flex-wrap justify-center gap-6"
              >
                  <Link to="/contact" className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                    Request Security Audit
                  </Link>
                  <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                    Download Repository Report <FileText className="w-4 h-4" />
                  </button>
              </motion.div>
           </div>
        </section>

        {/* Compliance Standards Grid */}
        <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-dark-950/50">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-6">Certification <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent">Matrix</span></h2>
                 <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">A comprehensive breakdown of our synchronized regulatory nodes.</p>
              </div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                 {complianceStandards.map((std) => (
                    <motion.div 
                      key={std.id}
                      variants={itemVariants}
                      className="group p-10 rounded-[48px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
                    >
                       <div className="relative z-10">
                          <div className="flex items-start justify-between mb-10">
                             <div className="w-16 h-16 rounded-[24px] bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Award className="w-8 h-8 text-primary-400" />
                             </div>
                             <div className="flex flex-col items-end">
                                <span className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black text-green-500 uppercase tracking-widest mb-2">
                                   {std.status}
                                </span>
                                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">VALID UNTIL {std.expiry}</span>
                             </div>
                          </div>

                          <h3 className="text-3xl font-black text-white italic tracking-tight mb-6">{std.title}</h3>
                          <p className="text-gray-400 font-medium leading-relaxed mb-10">{std.description}</p>

                          <div className="space-y-4 mb-10">
                             {std.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-sm font-medium text-gray-300">
                                   <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                   {detail}
                                </div>
                             ))}
                          </div>

                          <div className="pt-8 border-t border-white/5">
                             <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest leading-relaxed">
                                <span className="text-primary-400">AUDIT SUMMARY:</span> COMPLETED WITH ZERO DEVIATIONS FROM PRIMARY PROTOCOLS.
                             </p>
                          </div>
                       </div>
                       {/* Decoration */}
                       <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                          <Shield className="w-48 h-48 text-white" />
                       </div>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </section>

        {/* Security Practices Synthesis */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-6">Security <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Protocols</span></h2>
                 <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Active defensive measures protecting the Limitless ecosystem.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {securityPractices.map((practice, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center group"
                    >
                       <div className="w-20 h-20 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all group-hover:scale-110">
                          <practice.icon className={`w-8 h-8 ${practice.color}`} />
                       </div>
                       <h3 className="text-xl font-black text-white mb-4 italic tracking-tight">{practice.title}</h3>
                       <p className="text-sm text-gray-500 font-medium leading-relaxed">{practice.description}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Enterprise Trust Stats */}
        <section className="py-32 px-6 bg-white/5 border-y border-white/5 backdrop-blur-3xl">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center text-center">
                 {[
                   { label: 'Uptime Protocol', val: '99.9%' },
                   { label: 'Active Monitoring', val: '24/7' },
                   { label: 'Enterprise Nodes', val: '100+' },
                   { label: 'Systemic Breach', val: '0' }
                 ].map((stat, idx) => (
                   <div key={idx} className="space-y-2">
                      <div className="text-5xl font-black text-white italic tracking-tighter">{stat.val}</div>
                      <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global Compliance CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-12 border border-white/20">
                    <ShieldCheck className="w-10 h-10 text-white animate-pulse" />
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Security <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Consultancy</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Discuss your specific regulatory requirements with our security architects. We build custom compliance matrices for enterprise-scale deployments.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <Link to="/contact" className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Schedule Review
                    </Link>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3 group">
                       Security Whitepaper <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Compliance;
