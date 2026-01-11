import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  GraduationCap,
  Cpu,
  Database,
  Cloud,
  Code2,
  RefreshCw,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FlaskConical,
  Globe,
  Binary,
  Microscope
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

const InnovationLab = () => {
  const researchAreas = [
    {
      id: 'genai',
      title: 'Generative Synthesis',
      description:
        'Exploring the vector limits of large language models for hyper-automated business logic.',
      icon: Sparkles,
      projects: [
        'Proprietary Neural Integration paths',
        'Structural document deconstruction',
        'Intent-driven semantic interfaces',
        'Dynamic contextual synthesis',
      ],
      status: 'High-Flux Research',
    },
    {
      id: 'edge',
      title: 'Peripheral Compute',
      description:
        'Architecting low-latency compute nodes at the network edge for instantaneous reaction.',
      icon: Cpu,
      projects: [
        'Systemic IoT integration nodes',
        'Micro-latency data processing',
        'Distributed nodal architectures',
        'Edge-native security protocols',
      ],
      status: 'Active Deployment',
    },
    {
      id: 'quantum',
      title: 'Quantum Resilience',
      description:
        'Fortifying architectural integrity against future computational threats with resistant protocols.',
      icon: Binary,
      projects: [
        'Post-Quantum cryptographic shields',
        'Non-linear security synthesis',
        'Quantum-hybrid processing',
        'Superposition simulation layers',
      ],
      status: 'Long-Range Research',
    },
    {
      id: 'blockchain',
      title: 'Decentralized Trust',
      description:
        'Immutability as a service through advanced ledger technologies and smart integration.',
      icon: Database,
      projects: [
        'Deterministic contract systems',
        'Transparent ledger synthesis',
        'Self-sovereign identity nodes',
        'Asset tokenization architecture',
      ],
      status: 'Pilot Integration',
    },
  ];

  const innovationProjects = [
    {
      id: 'project1',
      title: 'Autonomous Flow: Predictive Failure Isolation',
      description: 'Systemic neural monitoring that identifies hardware delta-shifts before failure.',
      tech: ['TensorFlow Flux', 'Node Sensors', 'Neural Streams'],
      impact: 'Minimized unplanned downtime by 45% in laboratory environments.',
    },
    {
      id: 'project2',
      title: 'Neural Codex: Semantic Analysis Suite',
      description: 'High-velocity deconstruction of technical corpora for structural insight.',
      tech: ['Auralis Core', 'Transformer Grids', 'Synthesis Engine'],
      impact: 'Processed 50M+ data points with 99.8% structural accuracy.',
    },
    {
      id: 'project3',
      title: 'Adaptive Guardian: Autonomous Testing',
      description: 'Evolving testing agents that dynamically adjust to architectural shifts.',
      tech: ['Vision Agents', 'Logic Synthesis', 'Self-Healing Paths'],
      impact: 'Reduced human-in-the-loop validation overhead by 70%.',
    },
    {
      id: 'project4',
      title: 'Privacy Mesh: Federated Learning',
      description: 'Secure multi-node learning without unmasking structural data points.',
      tech: ['Delta Privacy', 'Mesh Consensus', 'Encrypted Gradients'],
      impact: 'Enabled cross-border training without regulatory compromise.',
    },
  ];

  const innovationStats = [
    { label: 'Flux Projects', value: '24' },
    { label: 'IP Filings', value: '8' },
    { label: 'Technical Whitepapers', value: '15' },
    { label: 'Global Nodes', value: '3' },
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden">
        {/* Ambient background particles/glows */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <FlaskConical className="w-4 h-4 text-primary-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">R&D — Innovation Core</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black mb-8 leading-tight tracking-tighter text-white">
                InnovaTION <span className="italic bg-gradient-to-r from-primary-400 via-white to-secondary-400 bg-clip-text text-transparent">Lab</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
                Where technical theory undergoes systemic stress-testing to emerge as architectural reality. We operate at the fracture point of innovation.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all shadow-xl shadow-white/5"
                >
                  Initiate Partnership
                </Link>
                <Link
                  to="/knowledge-base"
                  className="px-10 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Access Archive <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Stats Bar */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 rounded-[48px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
              {innovationStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-12 text-center border-white/5 border-r last:border-r-0 hover:bg-white/5 transition-colors group"
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-primary-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas Matrix */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">Current <span className="not-italic block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Flux Areas</span></h2>
              </div>
              <div className="flex items-center gap-4 text-sm font-black text-gray-500 uppercase tracking-widest">
                <Microscope className="w-5 h-5 text-primary-400" /> Systemic Observation
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-12 rounded-[56px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-12">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <area.icon className="w-8 h-8 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white mb-2">{area.title}</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                           <span className="text-[10px] font-black text-primary-400 uppercase tracking-widest">{area.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
                    {area.description}
                  </p>

                  <div className="space-y-4 pt-10 border-t border-white/5">
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Active Sub-Fluxes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {area.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center gap-3 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500/30 group-hover/item:bg-primary-400 transition-colors" />
                          <span className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-5 transition-opacity">
                    <area.icon className="w-32 h-32 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Breakthrough Case Studies */}
        <section className="py-32 px-6 relative bg-dark-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-8xl font-black text-white italic tracking-tighter mb-8 italic">Project <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Synthesis</span></h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Measurable architectural benchmarks achieved through laboratory research.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {innovationProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-12 md:p-16 rounded-[64px] bg-white/5 border border-white/10 relative overflow-hidden group hover:bg-white/[0.07] transition-all"
                >
                  <h3 className="text-3xl font-black text-white mb-6 leading-tight group-hover:text-primary-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white group-hover:border-primary-500/20 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="p-8 rounded-[32px] bg-green-500/5 border border-green-500/10 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1">Architectural impact</h4>
                      <p className="text-gray-300 font-bold">{project.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment & Future */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
             <div className="relative p-1 rounded-[72px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 overflow-hidden">
                <div className="bg-[#0e1114]/90 backdrop-blur-3xl rounded-[70px] p-20 md:p-32 text-center">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-white">
                      <div>
                        <div className="text-7xl font-black mb-4 tracking-tighter italic">15%</div>
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-primary-400">Structural Reinvestment</p>
                      </div>
                      <div>
                        <div className="text-7xl font-black mb-4 tracking-tighter italic">50+</div>
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-secondary-400">Neural Architects</p>
                      </div>
                      <div>
                        <div className="text-7xl font-black mb-4 tracking-tighter italic">200+</div>
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-white">Global IP Nodes</p>
                      </div>
                   </div>

                   <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium mb-16 italic">
                     "Our commitment to architectural evolution is deterministic. We do not observe the future; we architect the variables that define it."
                   </p>

                   <div className="flex flex-wrap justify-center gap-6">
                      <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.2em] shadow-2xl shadow-white/10">
                        Join the Network
                      </button>
                      <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm">
                        View Research Repository
                      </button>
                   </div>
                </div>
                {/* Visual Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
             </div>
          </div>
        </section>

        {/* Global Network Footer CTA */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-xs font-black text-gray-600 uppercase tracking-[0.8em] mb-12">Global Innovation Nodes</h3>
              <div className="flex flex-wrap justify-center gap-12 text-2xl font-black text-white/20 tracking-tighter">
                 <span className="hover:text-primary-400 transition-colors cursor-default">SAN FRANCISCO</span>
                 <span className="hover:text-secondary-400 transition-colors cursor-default">SINGAPORE</span>
                 <span className="hover:text-white transition-colors cursor-default">BERLIN</span>
                 <span className="hover:text-primary-400 transition-colors cursor-default">DUBAI</span>
                 <span className="hover:text-secondary-400 transition-colors cursor-default">LONDON</span>
              </div>
           </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default InnovationLab;