import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Code2, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Zap, 
  ShoppingCart, 
  Building2, 
  Truck, 
  Heart, 
  ExternalLink,
  Calendar,
  Clock,
  Users,
  ChevronRight,
  Quote,
  Star,
  Target,
  Lightbulb,
  Settings
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const PortfolioDetail = () => {
  const { id } = useParams();
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

  // Modernized Portfolio Data (Extracted from previous file and enhanced)
  const portfolioProjects = {
    1: {
      id: 1,
      title: 'Visionary CRM Dashboard',
      client: 'FinTech Group',
      industry: 'Financial Services',
      year: '2023',
      duration: '4 Months',
      teamSize: '5 Architects',
      description: 'A comprehensive, high-security relational dashboard designed to unify fragmented financial data into actionable intelligence.',
      challenge: 'FinTech Group faced significant latency in data aggregation and inconsistent reporting across silos. They required a unified, real-time command center for their operations.',
      solution: 'We architected a high-performance CRM with integrated predictive modeling, real-time data streaming, and a custom encryption layer for financial integrity.',
      implementation: [
        'Multi-departmental architectural discovery and stakeholder alignment.',
        'Engineering of a unified data lake with real-time sync capabilities.',
        'Implementation of a glassmorphic dashboard interface for high-density data visualization.',
        'Automated workflow triggers and predictive lead scoring integration.',
        'Comprehensive security audit and end-to-end encryption deployment.'
      ],
      technologies: ['React Framework', 'FastAPI Backend', 'PostgreSQL Cluster', 'Redis Streaming', 'AWS GovCloud'],
      results: [
        { metric: 'Productivity', value: '+40%', description: 'Streamlined operational efficiency.' },
        { metric: 'Accuracy', value: '99.9%', description: 'Elimination of data inconsistencies.' },
        { metric: 'Growth', value: '+25%', description: 'Incremental revenue from optimized leads.' }
      ],
      testimonial: {
        text: 'Limitless Infotech didn\'t just build a tool; they redefined our operational fabric. The CRM dashboard is the brain of our organization now.',
        author: 'Siddharth Mehta',
        role: 'COO, FinTech Group',
        rating: 5
      },
      features: [
        'Real-time Financial Streaming',
        'Predictive Analytics Engine',
        'Unified Contact Intelligence',
        'Automated Workflow Modeler',
        'High-Density Reporting'
      ],
      icon: BarChart3,
      color: 'primary'
    },
    2: {
      id: 2,
      title: 'Luxe E-commerce Engine',
      client: 'Heritage Brands',
      industry: 'Luxury Retail',
      year: '2023',
      duration: '5 Months',
      teamSize: '6 Visionaries',
      description: 'An immersive digital storefront merging high-end storytelling with a robust, scalable e-commerce infrastructure.',
      challenge: 'Heritage Brands struggled with a legacy platform that failed to convey their lifestyle aesthetic and crumbled under high-traffic seasonal drops.',
      solution: 'We built a custom Next.js storefront with headless CMS integration, global CDN optimization, and a tailor-made checkout experience designed for conversion.',
      implementation: [
        'Visual identity translation into digital interaction patterns.',
        'Headless commerce architecture implementation for ultimate flexibility.',
        'Integration of AR-ready product visualizations.',
        'Checkout flow optimization with one-click payment integrations.',
        'Dynamic scaling configuration for zero-downtime sales events.'
      ],
      technologies: ['Next.js / TypeScript', 'Shopify Plus Headless', 'Sanity CMS', 'Vercel Edge', 'Stripe Global'],
      results: [
        { metric: 'Conversion', value: '+85%', description: 'Optimized path to purchase.' },
        { metric: 'Load Speed', value: '< 1s', description: 'Blazing fast global performance.' },
        { metric: 'Revenue', value: '3x', description: 'Post-launch sales performance.' }
      ],
      testimonial: {
        text: 'The digital transformation of our flagship store was flawless. Our customers now experience the luxury we promise, online.',
        author: 'Elena Rossi',
        role: 'Brand Director, Heritage Brands',
        rating: 5
      },
      features: [
        'Immersive Visual Storytelling',
        'Headless Performance Core',
        'AR Product Previews',
        'Global Multi-currency Checkout',
        'Personalized Recommendation AI'
      ],
      icon: ShoppingCart,
      color: 'secondary'
    },
    3: {
      id: 3,
      title: 'LogiFlow Mobile Core',
      client: 'Global Logistics',
      industry: 'Transportation',
      year: '2023',
      duration: '6 Months',
      teamSize: '4 Engineers',
      description: 'A critical fleet intelligence and driver ecosystem designed to optimize mid-mile and last-mile distribution globally.',
      challenge: 'Global Logistics relied on fragmented communication and manual route планирование, leading to significant fuel waste and delivery delays.',
      solution: 'A robust React Native ecosystem providing real-time GPS telemetry, automated route optimization, and digital proof-of-delivery with offline sync.',
      implementation: [
        'On-site field research with fleet drivers and dispatchers.',
        'Development of a proprietary route optimization algorithm.',
        'Implementation of real-time GPS streaming and telemetry.',
        'Reliable offline-first sync architecture for low-signal areas.',
        'Dispatch command center with interactive global fleet overview.'
      ],
      technologies: ['React Native', 'Node.js Microservices', 'Google Maps API', 'Firebase Realtime', 'MQTT Protocol'],
      results: [
        { metric: 'Efficiency', value: '+60%', description: 'Deliveries completed per shift.' },
        { metric: 'Fuel Cost', value: '-30%', description: 'Optimized route trajectories.' },
        { metric: 'Transparency', value: '100%', description: 'Real-time visibility for clients.' }
      ],
      testimonial: {
        text: 'LogiFlow has literally changed how our trucks move. We are saving millions in fuel and our drivers have a tool they actually love using.',
        author: 'Marcus Chen',
        role: 'CTO, Global Logistics',
        rating: 5
      },
      features: [
        'Real-time Fleet Telemetry',
        'Smart Route Optimization',
        'Digital POD with Signature',
        'Offline-First Intelligence',
        'Direct Driver Messaging'
      ],
      icon: Truck,
      color: 'primary'
    },
    101: {
      id: 101,
      title: 'IVOLEX - Enterprise ERP',
      client: 'Enterprise Global',
      industry: 'Manufacturing & Resale',
      year: '2023',
      duration: '8 Months',
      teamSize: '8 Architects',
      description: 'A custom, multidimensional ERP system architected for multi-location inventory, finance, and human resource management.',
      challenge: 'Enterprise Global operated across 15 locations with disconnected ERP systems, leading to inventory discrepancies and financial reporting delays.',
      solution: 'We consolidated their operations into a single, high-availability ERP core with real-time multi-location sync and an automated financial auditor.',
      implementation: [
        'Deep architectural audit of legacy data structures.',
        'Centralized data lake construction for all 15 locations.',
        'Modular development of Inventory, Finance, and HR cores.',
        'Real-time automated reconciliation engine.',
        'Global deployment with zero-downtime data migration.'
      ],
      technologies: ['React / Redux', 'Node.js Cluster', 'MongoDB Sharded', 'AWS Infrastructure', 'Docker / K8s'],
      results: [
        { metric: 'Auditing', value: 'Instant', description: 'No more month-end delays.' },
        { metric: 'Inventory', value: '99.9%', description: 'Accuracy across all locations.' },
        { metric: 'Automation', value: '80%', description: 'Manual process elimination.' }
      ],
      testimonial: {
        text: 'IVOLEX is the backbone of our enterprise. It has provided the clarity and control we needed to scale from 15 to 30 locations.',
        author: 'David Harrison',
        role: 'Group CEO, Enterprise Global',
        rating: 5
      },
      features: [
        'Multi-location Sync Core',
        'Automated Financial Auditor',
        'Smart Inventory Forecasting',
        'Global HR Management',
        'Scalable Microservices Layer'
      ],
      icon: Building2,
      color: 'primary'
    }
  };

  const project = portfolioProjects[id] || portfolioProjects[1]; // Fallback if needed for demo

  const ProjectIcon = project.icon;

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-secondary-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Navigation Bar */}
        <div className="sticky top-0 z-50 px-6 py-4 bg-dark-900/60 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => navigate('/portfolio')}
              className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Showcases
            </button>
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-xs uppercase tracking-widest text-gray-500 font-bold">{project.industry}</span>
              <div className="h-4 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">Global Premiere</span>
                <Globe className="w-4 h-4 text-primary-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-24 px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                  <Sparkles className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium text-gray-300">Case Study: {project.year}</span>
                </motion.div>
                
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  {project.title}
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-xl text-gray-400 leading-relaxed mb-12">
                  {project.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Client</div>
                    <div className="text-lg font-medium text-white">{project.client}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Timeline</div>
                    <div className="text-lg font-medium text-white">{project.duration}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Team</div>
                    <div className="text-lg font-medium text-white">{project.teamSize}</div>
                  </div>
                </motion.div>
              </div>

              {/* Visual Spotlight */}
              <motion.div 
                variants={itemVariants}
                className="relative aspect-square rounded-[60px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-20 group"
              >
                <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
                <div className="relative z-10 transition-transform duration-700 group-hover:scale-110">
                  <ProjectIcon className={`w-48 h-48 md:w-64 md:h-64 ${project.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'} opacity-80`} />
                </div>
                {/* Orbital elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full border border-white/5 rounded-full animate-spin-slow opacity-20" />
                  <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-reverse-spin opacity-10" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Results Pulse */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {project.results.map((result, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-10 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md text-center group hover:border-primary-500/30 transition-all duration-500"
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:text-primary-400 transition-colors">
                    {result.value}
                  </div>
                  <div className="text-lg font-bold text-gray-200 mb-2 uppercase tracking-wide">
                    {result.metric}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {result.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Strategic Analysis */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary-500/20 border border-secondary-500/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-secondary-400" />
                </div>
                <h2 className="text-4xl font-bold text-white">The Challenge</h2>
                <div className="h-1 w-20 bg-secondary-500/50 rounded-full" />
                <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                  "{project.challenge}"
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-500/20 border border-primary-500/20 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-primary-400" />
                </div>
                <h2 className="text-4xl font-bold text-white">Strategic Solution</h2>
                <div className="h-1 w-20 bg-primary-500/50 rounded-full" />
                <p className="text-xl text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Architectural Process */}
        <section className="py-32 px-6 bg-dark-950/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Process & Integration</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">How we navigated the complexities from initial analysis to global deployment.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.implementation.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 font-black">
                    {index + 1}
                  </div>
                  <span className="text-lg text-gray-300 font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Matrix & Tech Stack */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Feature Matrix */}
              <div className="space-y-12">
                <h3 className="text-3xl font-bold text-white flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary-400" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-300">
                      <Zap className="w-4 h-4 text-primary-400" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-12">
                <h3 className="text-3xl font-bold text-white flex items-center gap-4">
                  <Settings className="w-8 h-8 text-secondary-400" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white font-bold tracking-tight hover:bg-white/10 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Signature */}
        <section className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-primary-600 to-secondary-600 p-[1px] rounded-[60px]"
          >
            <div className="bg-dark-900 rounded-[60px] p-12 md:p-20 relative overflow-hidden">
               {/* Background quote mark */}
               <Quote className="absolute top-20 right-20 w-80 h-80 text-white/[0.03] pointer-events-none" />
               
               <div className="relative z-10 text-center space-y-12">
                 <div className="flex justify-center gap-1">
                   {[...Array(project.testimonial.rating)].map((_, i) => (
                     <Star key={i} className="w-6 h-6 fill-primary-400 text-primary-400" />
                   ))}
                 </div>
                 
                 <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
                   "{project.testimonial.text}"
                 </p>

                 <div className="flex flex-col items-center gap-4">
                   <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-[2px]">
                     <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center text-3xl font-black text-white">
                       {project.testimonial.author.charAt(0)}
                     </div>
                   </div>
                   <div className="text-center">
                     <div className="text-xl font-bold text-white">{project.testimonial.author}</div>
                     <div className="text-primary-400 font-medium uppercase tracking-widest text-sm">{project.testimonial.role}</div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Global CTA */}
        <section className="py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">Want similar results?</h2>
            <p className="text-xl text-gray-500">Let’s discuss your next breakthrough architectural initiative.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all flex items-center gap-2 group">
                Start Initiative
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                More Showcases
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default PortfolioDetail;