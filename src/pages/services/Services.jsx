import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  Database, 
  BarChart3, 
  Zap, 
  Cloud, 
  ShieldCheck, 
  Briefcase, 
  Globe, 
  Layers, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Users,
  Server,
  Puzzle,
  Camera,
  RefreshCw,
  Trophy,
  Activity,
  FlaskConical
} from 'lucide-react';
import ErrorBoundary from '../../components/ErrorBoundary';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const mainServices = [
    {
      id: 'web',
      icon: Code2,
      title: 'Web Architectures',
      subtitle: 'Resilient, High-Frequency Ecosystems',
      description: 'Transforming static digital presence into high-fidelity web applications using React, Next.js, and Node.js. Engineered for deterministic scaling.',
      color: 'text-primary-400',
      glow: 'rgba(27, 166, 214, 0.2)',
      features: [
        'Adaptive & Mobile-Core Protocols',
        'Strategic SEO Deconstruction',
        'Progressive Sync Architectures (PWA)',
        'Global Commerce Infrastructure',
        'Custom Node API Integration'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind']
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Ecosystems',
      subtitle: 'Native Excellence across Digital Borders',
      description: 'Building pervasive mobile experiences using React Native and Flutter. Designed for mission-critical user engagement and performance sync.',
      color: 'text-secondary-400',
      glow: 'rgba(244, 180, 26, 0.15)',
      features: [
        'Native Multi-platform Deployment',
        'Intuitive Neural UI/UX',
        'Real-time Data Telemetry Sync',
        'Persistent Cloud handshakes',
        'Secure Offline Resilience'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      id: 'software',
      icon: Cpu,
      title: 'Custom Enterprise Systems',
      subtitle: 'Strategic Engineering for Complex Nodes',
      description: 'Bespoke software protocols engineered with Python and Microservices. Reconstructing legacy debt into intelligent business assets.',
      color: 'text-white',
      glow: 'rgba(255, 255, 255, 0.1)',
      features: [
        'Custom Structural Development',
        'Legacy Core Modernization',
        'Strategic System Interfacing',
        'Enterprise Resource Sync (ERP)',
        'Automated Logic Workflows'
      ],
      technologies: ['Python', 'Java', '.NET', 'Docker', 'Kubernetes']
    }
  ];

  const additionalServices = [
    { icon: Globe, title: 'IoT Nodes', description: 'Deep hardware-to-digital synching.', slug: 'iot-nodes' },
    { icon: Server, title: 'Network Security', description: 'Enterprise-grade structural defense.', slug: 'network-security' },
    { icon: Database, title: 'Cloud Matrix', description: 'AWS & Azure multi-region clusters.', slug: 'cloud-matrix' },
    { icon: Puzzle, title: 'Neural UI/UX', description: 'Designing for high-fidelity engagement.', slug: 'neural-ui-ux' },
    { icon: Camera, title: 'Digital Brand Node', description: 'Structural visual identity systems.', slug: 'digital-brand-node' },
    { icon: Cloud, title: 'DevOps Pipelines', description: 'Automated CI/CD architectural parity.', slug: 'devops-pipelines' },
    { icon: RefreshCw, title: 'Continuity Ops', description: '24/7 mission-critical node support.', slug: 'continuity-ops' },
    { icon: TrendingUp, title: 'Growth Telemetry', description: 'Data-driven market expansion protocols.', slug: 'growth-telemetry' }
  ];

  const processStages = [
    { number: '01', title: 'Audit Dispatch', icon: Search, description: 'Deep structural analysis of existing technical debt.' },
    { number: '02', title: 'Blueprint Logic', icon: Sparkles, description: 'Defining the architectural parameters for transformation.' },
    { number: '03', title: 'Core Construction', icon: Code2, description: 'High-fidelity engineering using premium protocols.' },
    { number: '04', title: 'Final Sync', icon: Zap, description: 'Global deployment and ecosystem synchronization.' }
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[#0e1114] pb-32">
        <SEO 
          title="Ecosystem Architectures - Limitless Services" 
          description="Scalable web development, high-performance mobile apps, and custom enterprise software solutions engineered for global scale." 
        />

        {/* High-Fidelity Ambient Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] left-[-5%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-12 pb-32 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Node Capabilities</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-12">
              Architectural <br /> <span className="text-primary-400 not-italic">Verticals.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-500 font-medium italic max-w-3xl mx-auto leading-relaxed mb-20">
              Deterministic engineering protocols deployed across the global perimeter. From neural web systems to mission-critical mobile ecosystems.
            </motion.p>
          </motion.div>
        </section>

        {/* Main Architectural Hub (Services) */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-40">
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}
              >
                {/* Visual Side - Overlapping Glass Nodes */}
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/5] md:aspect-video glass-panel mask-facet rounded-[3rem] overflow-hidden bg-dark-900/40 border-white/5 relative group cursor-crosshair">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <service.icon className={`w-40 h-40 ${service.color} opacity-[0.03] group-hover:scale-125 group-hover:rotate-6 transition-all duration-1000 group-hover:opacity-[0.12]`} />
                    </div>
                    {/* Floating Telemetry Nodes */}
                    <div className="absolute top-12 left-12 p-8 glass-panel mask-facet border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl animate-float group-hover:bg-white/10 transition-colors">
                        <div className="flex gap-2">
                           {[1, 2, 3].map(i => <div key={i} className={`w-2 h-2 rounded-full ${service.color} opacity-40 group-hover:opacity-100 group-hover:animate-pulse`} />)}
                        </div>
                    </div>
                    <div className="absolute bottom-12 right-12 p-8 glass-panel mask-facet border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl animate-float-delayed group-hover:bg-white/10 transition-colors">
                        <Activity className={`${service.color} w-6 h-6 group-hover:scale-110 transition-transform`} />
                    </div>
                    {/* Hover Pulse Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-transparent to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-1000" />
                  </div>
                  {/* Background Aura */}
                  <div 
                    className="absolute inset-0 -z-10 blur-[100px] opacity-20 pointer-events-none" 
                    style={{ background: `radial-gradient(circle, ${service.glow}, transparent)` }}
                  />
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <service.icon className={`w-10 h-10 ${service.color}`} />
                       <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${service.color}`}>Protocol Segment {index + 1}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">{service.title}</h2>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] italic">{service.subtitle}</p>
                    <p className="text-lg text-gray-500 font-medium italic leading-relaxed">{service.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <CheckCircle2 className={`w-4 h-4 ${service.color} opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-white/5 flex flex-wrap gap-3">
                    {service.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-gray-600 uppercase tracking-widest hover:text-white transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-10">
                    <Link to="/get-started" className={`inline-flex items-center gap-4 px-10 py-5 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-2xl hover:${service.color === 'text-primary-400' ? 'bg-primary-500' : (service.color === 'text-secondary-400' ? 'bg-secondary-500' : 'bg-white/10')} hover:text-white transition-all group`}>
                       Initialize Sync_
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Ecosystem Grid */}
        <section id="expertise" className="py-40 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">Extended <span className="text-secondary-400">Expertise.</span></h2>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Complementary nodes required for complete digital parity.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <Link to={`/services/${service.slug}`} key={index}>
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-10 glass-panel mask-facet bg-dark-900/40 border-white/5 group hover:border-primary-500/30 transition-all duration-500 h-full"
                    >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary-500 transition-all duration-500">
                        <service.icon className="w-6 h-6 text-primary-400 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-black text-white mb-4 italic uppercase tracking-tight">{service.title}</h3>
                    <p className="text-[0.6rem] font-bold text-gray-500 group-hover:text-gray-400 uppercase tracking-widest leading-relaxed transition-colors italic">{service.description}</p>
                    </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Execution Workflow Matrix */}
        <section id="workflow" className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">Execution <span className="text-primary-400">Workflow.</span></h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Architectural phases from Audit to Ecosystem-scale Sync.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-12">
                    {processStages.map((stage, index) => (
                        <div key={index} className="relative group">
                            {index < 3 && (
                                <div className="hidden md:block absolute top-[60px] left-1/2 w-full h-[1px] bg-white/5 -z-10" />
                            )}
                            <div className="text-center space-y-8">
                                <div className="w-20 h-20 rounded-3xl bg-dark-900 border border-white/10 backdrop-blur-3xl flex items-center justify-center mx-auto group-hover:bg-white group-hover:border-white transition-all duration-700 shadow-2xl">
                                    <stage.icon className="w-8 h-8 text-primary-400 group-hover:text-dark-900 transition-colors" />
                                </div>
                                <div className="space-y-4">
                                    <span className="text-primary-400 font-black text-[10px] uppercase tracking-[0.4em]">{stage.number} PROTOCOL</span>
                                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">{stage.title}</h3>
                                    <p className="text-[0.65rem] font-bold text-gray-600 uppercase tracking-widest italic leading-relaxed px-6 group-hover:text-gray-400 transition-colors">{stage.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Global Conversion Handoff */}
        <section className="pt-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto p-20 md:p-32 rounded-[5rem] bg-dark-900 border border-white/10 shadow-[0_0_100px_rgba(27,166,214,0.1)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 space-y-12">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-2">Initialize <br /> <span className="italic text-primary-400">Collaboration.</span></h2>
              <p className="text-xl text-gray-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
                Our architects are ready to deconstruct your technical complexity and reconstruct it as high-fidelity digital assets.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <Link to="/get-started" className="px-14 py-6 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl hover:bg-primary-500 hover:text-white transition-all shadow-2xl flex items-center gap-4 group/btn">
                  Consultation Node_
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-14 py-6 bg-white/5 text-white font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl border border-white/10 hover:bg-white/10 backdrop-blur-3xl transition-all">
                  Direct Uplink
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Services;