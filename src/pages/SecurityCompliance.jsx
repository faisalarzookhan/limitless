import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Database, Globe, Zap, CheckCircle2, FileText, Activity } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import ErrorBoundary from '../components/ErrorBoundary';

const SecurityCompliance = () => {
    const securityFeatures = [
        {
            title: "Secure SDLC",
            desc: "Security is integrated into every phase of our software development lifecycle, from discovery to deployment.",
            icon: Lock,
            color: "text-primary-400"
        },
        {
            title: "Data Privacy",
            desc: "GDPR-aligned protocols and localized encryption buffers ensure high-fidelity data sovereignity.",
            icon: Eye,
            color: "text-secondary-400"
        },
        {
            title: "Resilient Infrastructure",
            desc: "Multi-node redundancy and automated backup strategies (DRP) for mission-critical stability.",
            icon: Database,
            color: "text-white"
        },
        {
            title: "Zero-Trust Architecture",
            desc: "Dynamic identity verification and role-based access control across all digital perimeter nodes.",
            icon: ShieldCheck,
            color: "text-primary-400"
        }
    ];

    return (
        <ErrorBoundary>
            <div className="relative min-h-screen bg-[#0e1114] pt-40 pb-32 px-6 overflow-hidden">
                <SEO 
                    title="Security & Compliance | Limitless Infotech" 
                    description="Enterprise-grade security posture and compliance standards. Our commitment to secure SDLC, data privacy, and architectural resilience." 
                />

                {/* Atmosphere */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-grid-white/[0.02]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-xl"
                        >
                            <ShieldCheck className="w-4 h-4 text-primary-400" />
                            <span className="text-[0.6rem] font-black text-white/50 uppercase tracking-[0.4em]">Protocol: Security Posture</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 italic">
                            Security & <span className="text-primary-400 not-italic">Compliance.</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-medium italic max-w-3xl mx-auto leading-relaxed">
                            Architectural integrity is the baseline of our engineering labs. We enforce non-negotiable security standards across every node we deploy.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-32">
                        {securityFeatures.map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-12 glass-panel mask-facet border-white/5 group hover:border-primary-500/30 transition-all"
                            >
                                <div className={`w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-8 ${feature.color} group-hover:bg-white group-hover:text-dark-900 transition-all`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">{feature.title}</h3>
                                <p className="text-gray-500 font-bold uppercase tracking-widest text-[0.65rem] leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Compliance Roadmap */}
                    <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-16 md:p-32 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-12">Compliance <span className="text-primary-400 not-italic">Benchmarks.</span></h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <CheckCircle2 className="w-10 h-10 text-primary-400 mx-auto" />
                                <h4 className="text-white font-black uppercase text-sm tracking-widest">HSTS Enforcement</h4>
                                <p className="text-[0.6rem] text-gray-600 font-black uppercase tracking-widest">Global Protocol</p>
                            </div>
                            <div className="space-y-4">
                                <Activity className="w-10 h-10 text-secondary-400 mx-auto" />
                                <h4 className="text-white font-black uppercase text-sm tracking-widest">SLA Guarantee</h4>
                                <p className="text-[0.6rem] text-gray-600 font-black uppercase tracking-widest">99.9% Uptime</p>
                            </div>
                            <div className="space-y-4">
                                <FileText className="w-10 h-10 text-white mx-auto" />
                                <h4 className="text-white font-black uppercase text-sm tracking-widest">NDAs Supported</h4>
                                <p className="text-[0.6rem] text-gray-600 font-black uppercase tracking-widest">Confidential Ops</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default SecurityCompliance;
