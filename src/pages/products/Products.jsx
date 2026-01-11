import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  BarChart3,
  Users,
  Clock,
  Ticket,
  Mail,
  Database,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Box,
  Play,
  Download,
  Star,
  Sparkles,
  ChevronRight,
  Filter,
  Search,
  Cpu,
  Globe,
  Activity,
  X,
  Plus
} from 'lucide-react';
import ErrorBoundary from '../../components/ErrorBoundary';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'Global Registry' },
    { id: 'management', name: 'Strategic Nodes' },
    { id: 'tracking', name: 'Telemetry & Audit' },
    { id: 'communication', name: 'Nexus Channels' },
    { id: 'development', name: 'Logic Engines' },
  ];

  const products = [
    {
      id: 'trackit',
      name: 'TrackIT',
      tagline: 'Deterministic Asset Telemetry',
      category: 'tracking',
      description: 'High-fidelity IT asset monitoring and lifecycle synthesis for modern enterprises.',
      longDescription: 'TrackIT is a systemic asset management node that provides absolute visibility into hardware, software, and spectral resources. Eliminate nodal decay through real-time telemetry and automated compliance audits.',
      icon: Server,
      color: 'primary',
      monthlyPrice: 9999,
      yearlyPrice: 99999,
      features: [
        'Real-time Hardware Telemetry',
        'Deterministic License Compliance',
        'Warranty Pulse Monitoring',
        'Asset Lifecycle Synthesis',
        'Automated Depreciation Logic',
        'QR/NFC Registry Integration',
        'Multi-location Node Support',
      ],
      metrics: { users: '500+', satisfaction: '4.8/5', uptime: '99.9%' },
    },
    {
      id: 'tracko',
      name: 'TrackO',
      tagline: 'Operational Logic Optimization',
      category: 'tracking',
      description: 'End-to-end workflow synthesis and performance monitoring for peak efficiency.',
      longDescription: 'TrackO optimizes operational throughput through real-time bottleneck detection and automated logic flows. Perfect for manufacturing and logistics nodes requiring high-precision tracking.',
      icon: Activity,
      color: 'secondary',
      monthlyPrice: 14999,
      yearlyPrice: 149999,
      features: [
        'Neural Workflow Automation',
        'Real-time Throughput Monitoring',
        'Task Propagation Tracking',
        'Performance Analytics Registry',
        'Automated Resource Allocation',
        'Custom Operational Dashboards',
        'Edge Logic Integration',
      ],
      metrics: { users: '1K+', satisfaction: '4.7/5', efficiency: '+45%' },
    },
    {
      id: 'hrims',
      name: 'HR-IMS',
      tagline: 'Identity & Talent Orchestration',
      category: 'management',
      description: 'Universal identity management and talent lifecycle synthesis.',
      longDescription: 'HR-IMS manages the human element of your architecture. From initial nodal synchronization (onboarding) to final archival, it ensures talent integrity and operational harmony.',
      icon: Users,
      color: 'primary',
      monthlyPrice: 19999,
      yearlyPrice: 199999,
      popular: true,
      features: [
        'Universal Identity Registry',
        'Nodal Onboarding Protocols',
        'Temporal Attendance Logs',
        'Automated Payroll Logic',
        'Performance Synthesis Matrix',
        'Self-Service Registry Access',
        'Compliance & Reporting Nodes',
      ],
      metrics: { users: '2K+', satisfaction: '4.9/5', timeSaved: '20h/w' },
    },
    {
      id: 'worktrack',
      name: 'WorkTrack',
      tagline: 'Temporal Resource Auditor',
      category: 'tracking',
      description: 'Advanced workforce synchronization and productivity telemetry.',
      longDescription: 'WorkTrack decodes the temporal expenditure of your workforce nodes. Gain insights into project-specific throughput and optimize for maximum profitability across remote registries.',
      icon: Clock,
      color: 'secondary',
      monthlyPrice: 7999,
      yearlyPrice: 79999,
      features: [
        'Precision Time Telemetry',
        'Project Nodal Allocation',
        'Geospatial Heartbeat (GPS)',
        'Productivity Pulse Analytics',
        'Automated Timesheet Synthesis',
        'Billable Logic Integrations',
        'Remote Node Monitoring',
      ],
      metrics: { users: '1.5K+', satisfaction: '4.6/5', accuracy: '99%' },
    },
    {
      id: 'ittms',
      name: 'IT-TMS',
      tagline: 'Resolution Support Engine',
      category: 'management',
      description: 'Enterprise helpdesk and protocol resolution infrastructure.',
      longDescription: 'IT-TMS is the primary support node for your ecosystem. Manage ticket propagation, track resolution SLAs, and maintain system integrity through high-fidelity user assistance.',
      icon: Ticket,
      color: 'primary',
      monthlyPrice: 12999,
      yearlyPrice: 129999,
      features: [
        'Ticket Propagation Matrix',
        'SLA Integrity Monitoring',
        'Neural Knowledge Repository',
        'Omnichannel Protocol Support',
        'Automated Escalation Logic',
        'Asset Hardware Linking',
        'Registry User Portal',
      ],
      metrics: { users: '800+', satisfaction: '4.7/5', latency: '-40%' },
    },
    {
      id: 'mailto',
      name: 'MailTO',
      tagline: 'Ambient Communication Hub',
      category: 'communication',
      description: 'Intelligent message orchestration and automation platform.',
      longDescription: 'MailTO synchronizes your communication nodes with neural intelligence. Automate follow-up sequences and manage high-volume messaging with absolute deterministic accuracy.',
      icon: Mail,
      color: 'secondary',
      monthlyPrice: 8999,
      yearlyPrice: 89999,
      features: [
        'Unified Message Nexus',
        'Neural Automation Templates',
        'Campaign Propagation Engine',
        'Communication Telemetry',
        'Team Synergy Channels',
        'Deterministic Priority Inboxes',
        'SMTP/IMAP Node Integration',
      ],
      metrics: { users: '1.2K+', satisfaction: '4.8/5', output: '+35%' },
    },
    {
      id: 'baseless',
      name: 'Baseless',
      tagline: 'Logic Registry Architect',
      category: 'development',
      description: 'Dynamic database synthesis and instant API generation.',
      longDescription: 'Baseless allows architects to design logic registries visually and deploy production-ready APIs in sub-milliseconds. The ultimate foundation for rapid architectural evolution.',
      icon: Database,
      color: 'primary',
      monthlyPrice: 0,
      yearlyPrice: 0,
      badge: 'BETA',
      features: [
        'Visual Schema Architect',
        'Instant API Propagation',
        'Registry Migration Nodes',
        'Automated Vault Backups',
        'Neural Query Builder',
        'REST/GraphQL Synthesis',
        'Developer Toolkit Access',
      ],
      metrics: { users: '500+', satisfaction: '4.9/5', speed: '10x' },
    }
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === selectedCategory);

  const formatPrice = price => {
    if (price === 0) return 'NODE FREE';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30">
        {/* Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute top-1/2 left-[-10%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6 text-center">
           <div className="max-w-7xl mx-auto">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <Sparkles className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Neural Registry — SaaS Ecosystem</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none mb-8 uppercase">
                 The Limitless <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Stack</span>
              </motion.h1>

              <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-24 italic">
                 Explore our suite of 7 enterprise-grade SaaS nodes designed to accelerate your business architecture. Fixed-logic solutions for complex operational challenges.
              </motion.p>

              {/* Protocol Selectors (Filters) */}
              <div className="flex flex-wrap justify-center gap-6 mb-24">
                 {categories.map(cat => (
                    <button 
                       key={cat.id} 
                       onClick={() => setSelectedCategory(cat.id)}
                       className={`px-8 py-4 rounded-[24px] border transition-all duration-500 text-[10px] font-black uppercase tracking-[0.2em] ${
                         selectedCategory === cat.id 
                         ? 'bg-white text-dark-900 border-white shadow-2xl scale-105' 
                         : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
                       }`}
                    >
                       {cat.name}
                    </button>
                 ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                 <AnimatePresence mode="popLayout">
                    {filteredProducts.map((p, idx) => (
                       <motion.div 
                          key={p.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                          className={`group p-10 rounded-[56px] border backdrop-blur-3xl relative overflow-hidden flex flex-col h-full ${
                             p.popular ? 'bg-primary-500/5 border-primary-500/20' : 'bg-white/5 border-white/10'
                          }`}
                       >
                          {p.popular && (
                             <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30">
                                <Star className="w-3 h-3 text-primary-400 fill-primary-400" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-primary-400">Node Alpha</span>
                             </div>
                          )}
                          {p.badge && (
                             <div className="absolute top-8 right-8 px-3 py-1 rounded-full bg-secondary-500/20 border border-secondary-500/30">
                                <span className="text-[8px] font-black uppercase tracking-widest text-secondary-400">{p.badge}</span>
                             </div>
                          )}

                          <div className={`w-16 h-16 rounded-2xl bg-${p.color === 'primary' ? 'primary-500' : 'secondary-500'}/10 border border-${p.color === 'primary' ? 'primary-500' : 'secondary-500'}/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                             <p.icon className={`w-8 h-8 ${p.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'}`} />
                          </div>

                          <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2 uppercase">{p.name}</h3>
                          <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${p.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'}`}>{p.tagline}</p>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed italic mb-10 flex-1">"{p.description}"</p>

                          <div className="mb-10">
                             <div className="text-3xl font-black text-white italic tracking-tighter">{formatPrice(p.monthlyPrice)}</div>
                             <div className="text-[8px] font-black text-gray-700 uppercase tracking-widest mt-1">MONTHLY NODAL EXPENDITURE</div>
                          </div>

                          <div className="space-y-4 mb-10">
                             {p.features.slice(0, 4).map((f, i) => (
                                <div key={i} className="flex items-center gap-3 text-xs text-gray-400 font-medium italic">
                                   <CheckCircle2 className="w-3 h-3 text-primary-400/50" /> {f}
                                </div>
                             ))}
                          </div>

                          <div className="flex flex-col gap-4">
                             <button 
                                onClick={() => setSelectedProduct(p)}
                                className="w-full py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-[10px] uppercase tracking-[0.3em]"
                             >
                                Learn More
                             </button>
                             <Link 
                                to={`/get-started?product=${p.id}`}
                                className="w-full py-5 bg-white/5 text-white border border-white/10 font-bold rounded-3xl hover:bg-white/10 transition-all text-[10px] uppercase tracking-[0.3em] text-center flex items-center justify-center gap-2 group/btn"
                             >
                                Request Sync <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                             </Link>
                          </div>
                          
                          <div className="absolute inset-0 bg-grid-white/[0.02]" />
                       </motion.div>
                    ))}
                 </AnimatePresence>
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Need a <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Custom</span> Node?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team can build bespoke enterprise-grade solutions tailored to your unique systemic requirements.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <Link to="/contact" className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Consult Architects
                    </Link>
                    <Link to="/pricing" className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                       Global Pricing Node <ArrowRight className="w-5 h-5" />
                    </Link>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
           </motion.div>
        </section>

        {/* Product Detail Modal */}
        <AnimatePresence>
           {selectedProduct && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-y-auto">
                 <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setSelectedProduct(null)}
                    className="absolute inset-0 bg-dark-950/90 backdrop-blur-2xl"
                 />
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 30 }} 
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    className="relative w-full max-w-5xl bg-dark-900 border border-white/10 rounded-[64px] shadow-2xl overflow-hidden max-h-screen"
                 >
                    <div className="p-12 md:p-20 overflow-y-auto max-h-screen custom-scrollbar">
                       <button 
                          onClick={() => setSelectedProduct(null)}
                          className="absolute top-10 right-10 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-dark-900 transition-all z-10"
                       >
                          <X className="w-6 h-6" />
                       </button>

                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                          <div>
                             <div className={`w-20 h-20 rounded-[32px] bg-${selectedProduct.color === 'primary' ? 'primary-500' : 'secondary-500'}/10 border border-${selectedProduct.color === 'primary' ? 'primary-500' : 'secondary-500'}/20 flex items-center justify-center mb-10`}>
                                <selectedProduct.icon className={`w-10 h-10 ${selectedProduct.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'}`} />
                             </div>
                             <h2 className="text-5xl md:text-7xl font-black italic text-white tracking-tighter uppercase mb-6 leading-none">
                                {selectedProduct.name}
                             </h2>
                             <p className={`text-sm font-black uppercase tracking-[0.4em] mb-10 ${selectedProduct.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'}`}>
                                {selectedProduct.tagline}
                             </p>
                             <p className="text-xl text-gray-400 font-medium leading-relaxed italic mb-12">
                                "{selectedProduct.longDescription}"
                             </p>

                             <div className="grid grid-cols-3 gap-8 p-8 rounded-[40px] bg-white/5 border border-white/10">
                                {Object.entries(selectedProduct.metrics).map(([key, val]) => (
                                   <div key={key} className="text-center">
                                      <div className="text-xl font-black text-white italic tracking-tighter">{val}</div>
                                      <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest mt-1">{key}</div>
                                   </div>
                                ))}
                             </div>
                          </div>

                          <div className="space-y-12">
                             <div>
                                <h3 className="text-xl font-black text-white italic uppercase tracking-widest mb-8 flex items-center gap-3">
                                   <Cpu className="w-5 h-5 text-primary-400" /> Full Protocol Features
                                </h3>
                                <div className="space-y-4">
                                   {selectedProduct.features.map((f, i) => (
                                      <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all group">
                                         <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/20 transition-all">
                                            <CheckCircle2 className="w-4 h-4 text-primary-400" />
                                         </div>
                                         <span className="text-sm font-black text-gray-300 uppercase tracking-widest transition-colors">{f}</span>
                                      </div>
                                   ))}
                                </div>
                             </div>

                             <div className="pt-8 flex flex-col gap-6">
                                <Link 
                                   to="/pricing" 
                                   className="w-full py-6 bg-white text-dark-900 font-black rounded-[32px] text-center text-sm uppercase tracking-[0.3em] hover:bg-gray-200 transition-all"
                                >
                                   View Detailed Pricing
                                </Link>
                                <Link 
                                   to={`/get-started?product=${selectedProduct.id}`}
                                   className="w-full py-6 bg-white/5 text-white border border-white/10 font-black rounded-[32px] text-center text-sm uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-4"
                                >
                                   Request Demo <ArrowRight className="w-5 h-5" />
                                </Link>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                 </motion.div>
              </div>
           )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
};

export default Products;
