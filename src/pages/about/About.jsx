import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Heart, 
  Globe, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Cpu,
  Trophy,
  Target,
  Eye
} from 'lucide-react';
import ErrorBoundary from '../../components/ErrorBoundary';
import SEO from '../../components/SEO/SEO';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const values = [
    {
      icon: ShieldCheck,
      title: 'Structural Integrity',
      description: 'We prioritize sovereign security in every line of code, ensuring enterprise-grade encryption and architectural stability.'
    },
    {
      icon: Sparkles,
      title: 'Neural Innovation',
      description: 'Constant exploration of emerging digital nodes to provide a deterministic competitive edge for global enterprises.'
    },
    {
      icon: Heart,
      title: 'Architect-Client Sync',
      description: 'Your strategic success is our primary mission. We provide white-glove synchronization across all project phases.'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Excellence',
      description: 'Rigid adherence to mission-critical standards in development, testing, and high-fidelity project delivery.'
    },
    {
      icon: Zap,
      title: 'Deterministic Agility',
      description: 'Predictable delivery within defined parameters, using agile protocols to pivot with precision.'
    },
    {
      icon: Globe,
      title: 'Global Parity',
      description: 'Building architectural solutions that scale across international borders and regulatory environments.'
    }
  ];

  const team = [
    {
      name: 'Faisal Khan',
      role: 'Founding Architect & CEO',
      bio: 'Visionary leader focused on the deconstruction of technical debt and the reconstruction of intelligent enterprise ecosystems. Over a decade of engineering leadership.',
      expertise: ['Strategic Pivot', 'Node Architecture', 'Neural Innovation', 'Client Sync'],
      icon: Cpu,
      color: 'text-primary-400',
      glow: 'rgba(27, 166, 214, 0.2)'
    },
    {
      name: 'Taj Nadaf',
      role: 'Co-Architect & Ops Lead',
      bio: 'Operational strategist specialized in high-frequency growth models and mission-critical execution. Driving architectural excellence across the global perimeter.',
      expertise: ['Ops Intelligence', 'Growth Protocols', 'Leadership', 'Execution Sync'],
      icon: Zap,
      color: 'text-secondary-400',
      glow: 'rgba(244, 180, 26, 0.15)'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Protocol Initiation', description: 'Limitless Infotech founded with a vision for structural digital transformation.' },
    { year: '2019', title: 'First Enterprise Node', description: 'Deployment of high-scale multidimensional ERP for global logistics.' },
    { year: '2020', title: 'Sync Expansion', description: 'Engineering team scaled to 15+ specialized architects and developers.' },
    { year: '2022', title: '50+ High-Fidelity Deployments', description: 'Validation of architectural integrity across diverse enterprise verticals.' },
    { year: '2023', title: 'Global Perimeter Reach', description: 'Expansion of mission-critical services across international digital borders.' }
  ];

  const stats = [
    { number: '150+', label: 'Strategic Deployments' },
    { number: '50+', label: 'Global Partnerships' },
    { number: '12+', label: 'Efficiency Awards' },
    { number: '99%', label: 'Architectural Stability' }
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[#0e1114] pb-32">
        <SEO 
          title="About Us - Architects of Intelligent Enterprise" 
          description="Limitless Infotech is a premier software engineering collective. We build secure, unique, and limitless digital solutions for global enterprises." 
        />

        {/* High-Fidelity Ambient Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Architectural Narrative</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-12">
              Building the <br /> <span className="text-primary-400 not-italic">Intelligent Future.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-500 font-medium italic max-w-3xl mx-auto leading-relaxed mb-20">
              We are a software engineering collective dedicated to the deconstruction of technical legacy and the reconstruction of high-fidelity digital ecosystems.
            </motion.p>
          </motion.div>
        </section>

        {/* Vision & Mission Nodes */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel mask-facet p-12 bg-dark-900/40 border-white/5 group hover:border-primary-500/30 transition-all shadow-[0_0_80px_rgba(0,0,0,0.4)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8 group-hover:bg-primary-500 group-hover:rotate-12 transition-all">
                <Eye className="w-8 h-8 text-primary-400 group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6">Our Vision</h3>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-relaxed italic opacity-80">
                To lead the world into the next era of intelligent business systems, where innovation meets execution, and achievement is determined by architectural integrity.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel mask-facet p-12 bg-dark-900/40 border-white/5 group hover:border-secondary-500/30 transition-all shadow-[0_0_80px_rgba(0,0,0,0.4)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary-500/10 flex items-center justify-center mb-8 group-hover:bg-secondary-500 group-hover:-rotate-12 transition-all">
                <Target className="w-8 h-8 text-secondary-400 group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6">Our Mission</h3>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-relaxed italic opacity-80">
                To empower high-growth enterprises with secure, unique, and limitless software solutions that transform static debt into dynamic digital assets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Stats Matrix */}
        <section className="py-32 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">{stat.number}</div>
                <div className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Protocol Values */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">Core <span className="text-primary-400">Protocols.</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">The foundational benchmarks that drive our architectural decisions.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 glass-panel mask-facet bg-dark-900/20 border-white/5 group hover:border-primary-500/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary-500 transition-all duration-500">
                    <value.icon className="w-6 h-6 text-primary-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 italic uppercase tracking-tight">{value.title}</h3>
                  <p className="text-[0.65rem] font-bold text-gray-500 group-hover:text-gray-400 uppercase tracking-widest leading-relaxed transition-colors">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architectural Leadership (Team) */}
        <section className="py-40 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">Founding <span className="text-secondary-400">Architects.</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Sovereign leadership driving innovation and ecosystem scale.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {team.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-panel mask-facet relative p-12 bg-dark-900/40 border-white/5 group hover:border-primary-500/30 transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <member.icon className={`w-48 h-48 ${member.color}`} />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-10">
                      <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-1">{member.name}</h3>
                      <p className={`${member.color} font-black uppercase tracking-[0.4em] text-[10px]`}>{member.role}</p>
                    </div>
                    
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-relaxed italic mb-12 flex-1">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-10 border-t border-white/5">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div 
                        className="absolute bottom-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_20px_currentColor]"
                        style={{ background: `linear-gradient(to right, transparent, ${member.glow}, transparent)`, color: member.glow }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Telemetry (Milestones) */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">Mission <span className="text-primary-400">Timeline.</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Deterministic key events in our architectural evolution.</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 border-l border-white/5" />
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-white text-dark-900 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1 p-10 glass-panel mask-facet bg-dark-900 border-white/5 backdrop-blur-3xl group hover:border-primary-500/30 transition-all duration-500">
                      <div className="text-primary-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{milestone.year} ARCHIVE</div>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">{milestone.title}</h4>
                      <p className="text-[0.65rem] font-bold text-gray-500 group-hover:text-gray-400 uppercase tracking-widest leading-relaxed italic transition-colors">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                Our architects are ready to deconstruct your technical complexity and reconstruct it as a high-fidelity digital assets.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <Link to="/get-started" className="px-14 py-6 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl hover:bg-primary-500 hover:text-white transition-all shadow-2xl flex items-center gap-4 group/btn">
                  Initialize Sync_
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-14 py-6 bg-white/5 text-white font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl border border-white/10 hover:bg-white/10 backdrop-blur-3xl transition-all">
                  Contact Hub
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

export default About;