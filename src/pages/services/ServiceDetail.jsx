import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Server, 
  Layers, 
  Activity, 
  Search, 
  Code2, 
  Smartphone,
  Cloud,
  Puzzle,
  Camera,
  RefreshCw,
  TrendingUp,
  ArrowRight,
  Terminal
} from 'lucide-react';
import ErrorBoundary from '../../components/ErrorBoundary';
import SEO from '../../components/SEO/SEO';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

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

  // Service Data Map
  const services = {
    'iot-nodes': {
      title: 'IoT Nodes',
      subtitle: 'Deep Hardware-to-Digital Synching',
      description: 'We deny the divide between physical and digital. Our IoT architectures create seamless, real-time command loops between hardware sensors and cloud intelligence.',
      icon: Globe,
      color: 'primary',
      features: [
        'Real-time Sensor Telemetry',
        'Edge Computing Logic',
        'Hardware-Agnostic Bridging',
        'Low-Latency Data Mesh',
        'Automated Alert Triggers'
      ],
      process: [
        { title: 'Hardware Audit', desc: 'Analyzing sensor capabilities and data output specs.' },
        { title: 'Protocol Design', desc: 'Defining MQTT/HTTPs handshake standards.' },
        { title: 'Mesh Deployment', desc: 'Rolling out secure, scalable edge nodes.' },
        { title: 'Neural Sync', desc: 'Connecting physical inputs to digital dashboards.' }
      ],
      techStack: ['MQTT', 'Node-RED', 'AWS IoT Core', 'Raspberry Pi', 'Zigbee'],
      benefits: ['Instant Operational Visibility', 'Predictive Maintenance', 'Remote Asset Control']
    },
    'network-security': {
      title: 'Network Security',
      subtitle: 'Enterprise-Grade Structural Defense',
      description: 'Security is not a feature; it is the foundation. We architect zero-trust pillars that immunize your digital infrastructure against evolving global threats.',
      icon: ShieldCheck,
      color: 'secondary',
      features: [
        'Zero-Trust Architecture',
        'Automated Penetration Testing',
        'Real-time Threat Heuristics',
        'Encrypted Data Vaults',
        'Compliance Governance (GDPR/HIPAA)'
      ],
      process: [
        { title: 'Vulnerability Scan', desc: 'Deep-dive analysis of current exposure points.' },
        { title: 'Fortification', desc: 'Implementing multi-layer encryption and hygiene.' },
        { title: 'Attack Sim', desc: 'Red-teaming your own infrastructure for validation.' },
        { title: 'Sentinel Mode', desc: '24/7 AI-driven threat monitoring.' }
      ],
      techStack: ['Kali Linux', 'OpenVPN', 'Snort', 'Wireshark', 'Python'],
      benefits: ['Data Sovereignty', 'Regulatory Compliance', 'Uninterrupted Uptime']
    },
    'cloud-matrix': {
      title: 'Cloud Matrix',
      subtitle: 'AWS & Azure Multi-Region Clusters',
      description: 'Transcend server limitations. We deploy deterministic cloud architectures that auto-scale with your growth, ensuring global availability and millisecond latency.',
      icon: Database,
      color: 'brand',
      features: [
        'Multi-Region Auto-Scaling',
        'Serverless Compute Nodes',
        'Container Orchestration (K8s)',
        'Database Sharding Strategy',
        'Cost-Optimized Resource Allocation'
      ],
      process: [
        { title: 'Cloud Audit', desc: 'Mapping resource usage and cost inefficiencies.' },
        { title: 'Migration Blueprint', desc: 'Strategy for zero-downtime lift-and-shift.' },
        { title: 'Cluster Init', desc: 'Provisioning IaC (Infrastructure as Code) environments.' },
        { title: 'Global Sync', desc: 'Activating CDN and multi-region replication.' }
      ],
      techStack: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      benefits: ['Infinite Scalability', 'Disaster Recovery', 'OpEx Optimization']
    },
    'neural-ui-ux': {
      title: 'Neural UI/UX',
      subtitle: 'Designing for High-Fidelity Engagement',
      description: 'Interfaces that think. We design intuitive, adaptive user experiences that reduce cognitive load and maximize interaction velocity through behavioral psychology.',
      icon: Puzzle,
      color: 'primary',
      features: [
        'Behavioral User Flows',
        'High-Fidelity Prototyping',
        'Micro-Interaction libraries',
        'Accessibility First (WCAG)',
        'Design System Architecture'
      ],
      process: [
        { title: 'User Mapping', desc: 'Deciphering intent and friction points.' },
        { title: 'Wireframe Logic', desc: 'Structuring the information hierarchy.' },
        { title: 'Visual Synthesis', desc: 'Applying brand physics and motion.' },
        { title: 'Interaction Lab', desc: 'User testing for intuitive validation.' }
      ],
      techStack: ['Figma', 'Framer', 'Spline', 'Rive', 'Adobe CC'],
      benefits: ['Higher Conversion Rates', 'Brand Loyalty', 'Reduced Support Costs']
    },
    'digital-brand-node': {
      title: 'Digital Brand Node',
      subtitle: 'Structural Visual Identity Systems',
      description: 'Your brand is a signal. We amplify it. Constructing cohesive visual languages that persist across every digital touchpoint, ensuring instant recognition and authority.',
      icon: Camera,
      color: 'secondary',
      features: [
        'Dynamic Logo Systems',
        'Typography Hierarchy',
        'Color Psychology Matrix',
        'Motion Brand Guidelines',
        'Cross-Platform Asset Kits'
      ],
      process: [
        { title: 'Core DNA', desc: 'Extracting brand values and mission.' },
        { title: 'Visual Concept', desc: 'Exploration of aesthetic territories.' },
        { title: 'System Build', desc: 'Creating the atomic design components.' },
        { title: 'Brand Bible', desc: 'Documentation for global consistency.' }
      ],
      techStack: ['Illustrator', 'After Effects', 'Blender', 'Photoshop', 'Indesign'],
      benefits: ['Market Differentiation', 'Trust Acceleration', 'Consistent Narrative']
    },
    'devops-pipelines': {
      title: 'DevOps Pipelines',
      subtitle: 'Automated CI/CD Architectural Parity',
      description: 'Code at the speed of thought. We build automated deployment highways that allow your team to ship features daily with absolute confidence and zero regression.',
      icon: Cloud,
      color: 'brand',
      features: [
        'Automated CI/CD Workflows',
        'Infrastructure as Code (IaC)',
        'Automated Regression Testing',
        'Blue/Green Deployment',
        'Containerization Strategy'
      ],
      process: [
        { title: 'Pipeline Audit', desc: 'Identifying bottlenecks in delivery.' },
        { title: 'Automation Scripting', desc: 'Writing the logic for build/test/deploy.' },
        { title: 'environment Sync', desc: 'Aligning dev, staging, and prod.' },
        { title: 'Continuous Flow', desc: 'Enabling one-click global releases.' }
      ],
      techStack: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD', 'Helmm'],
      benefits: ['Faster Time-to-Market', 'Reduced Human Error', 'Stable Releases']
    },
    'continuity-ops': {
      title: 'Continuity Ops',
      subtitle: '24/7 Mission-Critical Node Support',
      description: 'Downtime is not an option. We provide the sentinel layer—monitoring, patching, and reviving your systems before users even notice a blip.',
      icon: RefreshCw,
      color: 'primary',
      features: [
        '24/7 Uptime Monitoring',
        'SLA-Backed Response Time',
        'Proactive Security Patching',
        'Database Optimization',
        'Legacy Code Maintenance'
      ],
      process: [
        { title: 'Baseline Check', desc: 'Establishing performance metrics.' },
        { title: 'Monitor Setup', desc: 'Deploying sentries across the stack.' },
        { title: 'Response Matrix', desc: 'Defining escalation protocols.' },
        { title: 'Eternal Watch', desc: 'Continuous optimization and defense.' }
      ],
      techStack: ['Datadog', 'New Relic', 'PagerDuty', 'Sentry', 'Prometheus'],
      benefits: ['Business Continuity', 'Peace of Mind', 'Resource Optimization']
    },
    'growth-telemetry': {
      title: 'Growth Telemetry',
      subtitle: 'Data-Driven Market Expansion Protocols',
      description: 'Growth is science, not luck. We implement deep tracking and analytics architectures that reveal exactly how to scale your user base and revenue.',
      icon: TrendingUp,
      color: 'secondary',
      features: [
        'Full-Funnel Analytics',
        'Conversion Rate Optimization (CRO)',
        'A/B Testing Frameworks',
        'User Cohort Analysis',
        'Revenue Attribution Models'
      ],
      process: [
        { title: 'Data Audit', desc: 'Verifying data integrity and sources.' },
        { title: 'Tracking Setup', desc: 'Implementing pixel-perfect events.' },
        { title: 'Dashboarding', desc: 'Visualizing the pulse of the business.' },
        { title: 'Insight Loop', desc: 'Iterative optimization based on facts.' }
      ],
      techStack: ['Google Analytics 4', 'Mixpanel', 'Segment', 'Tableau', 'Hotjar'],
      benefits: ['ROI Clarity', 'User Acquisition', 'Churn Reduction']
    }
  };

  const service = services[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0e1114] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Protocol Not Found</h1>
          <Link to="/services" className="text-primary-400 hover:text-white transition-colors">Return to Matrix</Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[#0e1114] pb-24">
        <SEO 
          title={`${service.title} | Limitless Services`} 
          description={service.description} 
        />

        {/* Ambient Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-0 right-0 w-[60%] h-[60%] ${service.color === 'primary' ? 'bg-primary-500/5' : (service.color === 'secondary' ? 'bg-secondary-500/5' : 'bg-brand-500/5')} blur-[120px] rounded-full`} />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        {/* Navigation Bar */}
        <div className="sticky top-0 z-50 px-6 py-4 bg-[#0e1114]/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => navigate('/services')}
              className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Matrix
            </button>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${service.color === 'primary' ? 'bg-primary-400' : (service.color === 'secondary' ? 'bg-secondary-400' : 'bg-brand-400')} animate-pulse`} />
              <span className="hidden md:block text-xs uppercase tracking-widest text-gray-500 font-bold">Node Active</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-8"
              >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                   <Terminal className={`w-4 h-4 ${service.color === 'primary' ? 'text-primary-400' : (service.color === 'secondary' ? 'text-secondary-400' : 'text-brand-400')}`} />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">System Capability</span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                  {service.title.split(' ')[0]} <br/>
                  <span className={`${service.color === 'primary' ? 'text-primary-400' : (service.color === 'secondary' ? 'text-secondary-400' : 'text-brand-400')} not-italic`}>
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                  {service.subtitle}. <br/>
                  <span className="text-gray-500 text-lg mt-4 block">{service.description}</span>
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                  <Link to="/get-started" className={`px-8 py-4 bg-white text-dark-900 font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:${service.color === 'primary' ? 'bg-primary-500' : (service.color === 'secondary' ? 'bg-secondary-500' : 'bg-brand-500')} hover:text-white transition-all flex items-center gap-2`}>
                    Initialize
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transition-all">
                    Inquire
                  </Link>
                </motion.div>
              </motion.div>

              {/* Visual Node */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative hidden lg:flex items-center justify-center p-20"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[3rem] border border-white/5 backdrop-blur-sm" />
                <div className={`absolute top-10 right-10 w-20 h-20 bg-gradient-to-br ${service.color === 'primary' ? 'from-primary-500/20' : (service.color === 'secondary' ? 'from-secondary-500/20' : 'from-brand-500/20')} to-transparent blur-2xl rounded-full`} />
                <ServiceIcon className={`w-40 h-40 ${service.color === 'primary' ? 'text-primary-400' : (service.color === 'secondary' ? 'text-secondary-400' : 'text-brand-400')} relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]`} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Tech Stack */}
        <section className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-12">
                     <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Core Functions.</h2>
                     <div className="grid gap-6">
                        {service.features.map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors group"
                            >
                                <CheckCircle2 className={`w-5 h-5 ${service.color === 'primary' ? 'text-primary-400' : (service.color === 'secondary' ? 'text-secondary-400' : 'text-brand-400')} group-hover:scale-110 transition-transform`} />
                                <span className="text-sm font-bold text-gray-300 uppercase tracking-wide group-hover:text-white transition-colors">{feature}</span>
                            </motion.div>
                        ))}
                     </div>
                </div>

                <div className="space-y-12">
                    <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Technology Stack.</h2>
                    <div className="flex flex-wrap gap-3">
                        {service.techStack.map((tech, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              className="px-6 py-3 rounded-xl bg-dark-900 border border-white/10 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-white hover:border-white/30 transition-all"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="mt-12 pt-12 border-t border-white/10">
                        <h3 className="text-xl font-bold text-white mb-6">Strategic Benefits</h3>
                        <ul className="space-y-4">
                            {service.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary-400' : (service.color === 'secondary' ? 'bg-secondary-400' : 'bg-brand-400')}`} />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Process Flow */}
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                     <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">Execution Protocol</h2>
                     <p className="text-gray-500 text-sm uppercase tracking-widest">From Analysis to Deployment</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.process.map((step, i) => (
                        <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all group">
                            <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">0{i+1}</div>
                            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{step.title}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
             <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">Ready to Deploy?</h2>
                <div className="flex justify-center gap-6">
                    <Link to="/get-started" className="px-10 py-5 bg-white text-dark-900 font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-primary-500 hover:text-white transition-all shadow-xl">
                        Start Project
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </ErrorBoundary>
  );
};

export default ServiceDetail;
