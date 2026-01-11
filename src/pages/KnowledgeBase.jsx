import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  BookOpen,
  Code2,
  Video,
  Sparkles,
  Zap,
  GraduationCap,
  MessageSquare,
  Clock,
  Users,
  BarChart3,
  ChevronRight,
  ArrowRight,
  Globe,
  FileText,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';
import AIPoweredSearch from '../components/AIPoweredSearch';
import ErrorBoundary from '../components/ErrorBoundary';

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: Globe, count: 156, color: 'text-primary-400' },
    { id: 'documentation', name: 'Documentation', icon: BookOpen, count: 64, color: 'text-secondary-400' },
    { id: 'api', name: 'API Guides', icon: Code2, count: 32, color: 'text-white' },
    { id: 'tutorials', name: 'Tutorials', icon: Video, count: 28, color: 'text-primary-500' },
    { id: 'tools', name: 'Tools & Calculators', icon: Sparkles, count: 15, color: 'text-secondary-500' },
    { id: 'best-practices', name: 'Best Practices', icon: Zap, count: 17, color: 'text-white' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Getting Started with HR-IMS',
      description: 'Complete guide to setting up and configuring the HR Information Management System.',
      category: 'documentation',
      type: 'guide',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      tags: ['hr-ims', 'setup', 'onboarding'],
      url: '/docs/hr-ims-getting-started',
    },
    {
      id: 2,
      title: 'TrackIT API Integration Guide',
      description: 'Step-by-step instructions for integrating TrackIT with your existing systems.',
      category: 'api',
      type: 'api',
      date: 'Jan 10, 2024',
      readTime: '12 min read',
      tags: ['trackit', 'api', 'development'],
      url: '/docs/trackit-api',
    },
    {
      id: 3,
      title: 'Security Best Practices & Compliance',
      description: 'Learn about our security measures and best practices for securing your data.',
      category: 'best-practices',
      type: 'security',
      date: 'Jan 05, 2024',
      readTime: '10 min read',
      tags: ['security', 'compliance', 'gdpr'],
      url: '/docs/security',
    },
    {
      id: 4,
      title: 'ROI Calculator for HR Solutions',
      description: 'Interactive tool to calculate the return on investment for HR management solutions.',
      category: 'tools',
      type: 'tool',
      date: 'Jan 01, 2024',
      readTime: '2 min read',
      tags: ['roi', 'calculator', 'finance'],
      url: '/roi-calculator',
    },
    {
      id: 5,
      title: 'Client Portal User Guide',
      description: 'Complete guide to using the client portal for project tracking and management.',
      category: 'documentation',
      type: 'guide',
      date: 'Dec 28, 2023',
      readTime: '6 min read',
      tags: ['client-portal', 'guide', 'tracking'],
      url: '/docs/client-portal',
    },
    {
      id: 6,
      title: 'API Rate Limits and Optimization',
      description: 'Understanding rate limits and how to optimize your API usage.',
      category: 'api',
      type: 'api',
      date: 'Dec 20, 2023',
      readTime: '7 min read',
      tags: ['api', 'limits', 'optimization'],
      url: '/docs/api-limits',
    },
    {
      id: 7,
      title: 'Video: Setting up your first project',
      description: 'Step-by-step video tutorial for creating your first project in our platform.',
      category: 'tutorials',
      type: 'video',
      date: 'Dec 15, 2023',
      readTime: '15 min watch',
      tags: ['video', 'tutorial', 'setup'],
      url: '/videos/setup-tutorial',
    },
    {
      id: 8,
      title: 'Compliance and Certifications Overview',
      description: 'Detailed information about our compliance standards and certifications.',
      category: 'best-practices',
      type: 'compliance',
      date: 'Dec 10, 2023',
      readTime: '5 min read',
      tags: ['compliance', 'soc2', 'iso27001'],
      url: '/compliance',
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIconForType = type => {
    switch (type) {
      case 'api': return Code2;
      case 'security':
      case 'compliance': return ShieldCheck;
      case 'video': return Video;
      case 'tool': return Sparkles;
      default: return FileText;
    }
  };

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
      <div className="relative min-h-screen bg-dark-900 overflow-hidden">
        {/* Ambient background particles/glows */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <motion.section 
          className="relative pt-40 pb-32 px-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <GraduationCap className="w-4 h-4 text-primary-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Neural Repository — Knowledge Base</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white italic uppercase">
              Intelligence <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Hub</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
              Find answers, guides, and architectural blueprints with our neural search system. Optimized for sub-millisecond information recovery.
            </motion.p>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative">
                 <AIPoweredSearch
                   placeholder="Ask anything about our products and services..."
                   className="w-full bg-[#0e1114]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500/50 transition-all font-bold"
                 />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Browse Section */}
        <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
               {/* Sidebar Filters */}
               <div className="lg:w-1/4 space-y-12">
                  <motion.div variants={itemVariants} initial="hidden" animate="visible">
                    <h2 className="text-xs font-black text-primary-400 uppercase tracking-[0.4em] mb-8">Filter Protocols</h2>
                    <div className="flex flex-col gap-2">
                       {categories.map(category => (
                         <button
                           key={category.id}
                           onClick={() => setActiveCategory(category.id)}
                           className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                             activeCategory === category.id 
                             ? 'bg-white text-dark-900 shadow-xl' 
                             : 'text-gray-400 hover:bg-white/5 hover:text-white'
                           }`}
                         >
                            <div className="flex items-center gap-4">
                               <category.icon className={`w-5 h-5 ${activeCategory === category.id ? 'text-primary-600' : 'text-gray-600 group-hover:text-primary-400'}`} />
                               <span className="text-sm font-black uppercase tracking-widest">{category.name}</span>
                            </div>
                            <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${activeCategory === category.id ? 'bg-dark-900/10 text-dark-900' : 'bg-white/5 text-gray-600'}`}>
                               {category.count}
                            </span>
                         </button>
                       ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} initial="hidden" animate="visible" className="p-8 rounded-[40px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10">
                     <Activity className="w-8 h-8 text-primary-400 mb-6" />
                     <h3 className="text-lg font-black text-white italic tracking-tight mb-4">Pulse Analysis</h3>
                     <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
                        Neural activity in the repository is currently <span className="text-green-500">Peak Synchronicity</span>. 1,432 nodes active.
                     </p>
                  </motion.div>
               </div>

               {/* Resources Feed */}
               <div className="lg:flex-1 space-y-12">
                  <div className="relative group">
                     <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-primary-400 transition-colors" />
                     <input
                       type="text"
                       value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}
                       placeholder="Enter keywords for targeted retrieval..."
                       className="w-full bg-white/5 border border-white/10 rounded-[28px] pl-16 pr-8 py-6 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all hover:bg-white/10 shadow-2xl"
                     />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                      {filteredResources.map((resource, index) => {
                        const Icon = getIconForType(resource.type);
                        return (
                          <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
                          >
                            <div className="relative z-10">
                               <div className="flex items-start justify-between mb-8">
                                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <Icon className="w-6 h-6 text-primary-400" />
                                  </div>
                                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">{resource.date}</span>
                               </div>

                               <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight group-hover:text-primary-400 transition-colors">{resource.title}</h3>
                               <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 line-clamp-2">{resource.description}</p>

                               <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                  <div className="flex items-center gap-3">
                                     <Clock className="w-3 h-3 text-gray-600" />
                                     <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{resource.readTime}</span>
                                  </div>
                                  <a
                                    href={resource.url}
                                    className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-[0.2em] hover:text-primary-400 transition-colors"
                                  >
                                    Retrieve <ArrowRight className="w-3 h-3" />
                                  </a>
                               </div>
                            </div>
                            {/* Background decoration */}
                            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                               <Icon className="w-40 h-40 text-white" />
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  {filteredResources.length === 0 && (
                    <motion.div 
                      className="text-center py-32 bg-white/5 rounded-[48px] border border-dashed border-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Search className="mx-auto h-12 w-12 text-gray-700 mb-6" />
                      <h3 className="text-xl font-black text-white italic mb-2 tracking-tight">Zero Results Detected</h3>
                      <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Adjust your parameters or request manual synthesis.</p>
                    </motion.div>
                  )}
               </div>
            </div>
          </div>
        </section>

        {/* AI Features Matrix */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-8">Neural <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Capabilities</span></h2>
                 <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Advanced information processing protocols built into the Limitless core.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: MessageSquare, title: 'Natural Language Synthesis', desc: 'Interact with the repository using human-centric syntax for precise nodal recovery.' },
                  { icon: Zap, title: 'Pulse Suggestions', desc: 'Intelligent resource predictions based on your current architectural trajectory.' },
                  { icon: Layers, title: 'Contextual Ranking', desc: 'Results are prioritized by systemic relevance and proximity to your active stack.' }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-12 rounded-[56px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all group"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                       <feature.icon className="w-10 h-10 text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        {/* Global Documentation CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-24 rounded-[80px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="w-24 h-24 rounded-[32px] bg-white/10 flex items-center justify-center mx-auto mb-12 border border-white/20">
                    <Cpu className="w-12 h-12 text-white animate-pulse" />
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Can't Localize <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Information</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural support team is available for real-time manual synthesis and custom blueprinting.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Contact Architect
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3 group">
                       Browse Global Index <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default KnowledgeBase;