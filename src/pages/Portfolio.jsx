import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Database, 
  BarChart3, 
  Globe, 
  ShoppingCart, 
  Search, 
  Filter, 
  ArrowRight, 
  Layout, 
  Cpu, 
  Truck, 
  Heart, 
  Building2, 
  Zap,
  Sparkles,
  Trophy,
  Users,
  Briefcase
} from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO/SEO';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [portfolioProjects, setPortfolioProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { showError } = useApp();

  const categories = [
    { id: 'all', name: 'All Work', icon: Layout },
    { id: 'web', name: 'Web Systems', icon: Code2 },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'crm', name: 'Enterprise', icon: Building2 },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'automation', name: 'AI & Automation', icon: Zap },
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

  useEffect(() => {
    const fetchPortfolioProjects = async () => {
      try {
        setLoading(true);
        const data = await api.portfolio.getAll();
        setPortfolioProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio projects:', err);
        setError(err.message || 'Failed to fetch portfolio projects');
        showError('Displaying curated showcase. Connect for full documentation.');

        setPortfolioProjects([
          {
            id: 101,
            title: 'IVOLEX - Enterprise Resource Planning',
            category: 'crm',
            client: 'Enterprise Global',
            industry: 'Logistics',
            description: 'Unified multidimensional ERP for large-scale operations and secure asset management.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
            tags: ['Enterprise', 'Scalable', 'Cloud Architecture'],
            results: { efficiency: '+60%', automation: '80%', users: '2k+' },
            year: '2023',
            icon: Building2,
            color: 'text-primary-400',
            glow: 'rgba(27, 166, 214, 0.2)'
          },
          {
            id: 102,
            title: 'Wakilni - Legal Tech Ecosystem',
            category: 'mobile',
            client: 'MENA Legal Startup',
            industry: 'Legal',
            description: 'Premium matching platform for legal professionals and corporate entities seeking expertise.',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop',
            tags: ['Mobile Core', 'Encryption', 'Real-time Sync'],
            results: { latency: '80%', onboarding: '500+', matching: '99%' },
            year: '2023',
            icon: Heart,
            color: 'text-secondary-400',
            glow: 'rgba(244, 180, 26, 0.15)'
          },
          {
            id: 103,
            title: 'Auralis - AI Personalization',
            category: 'automation',
            client: 'Retail Dynamic',
            industry: 'E-commerce',
            description: 'Neural-engine personalization layer increasing global checkout velocity and precision.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
            tags: ['AI Neural', 'Big Data', 'Personalization'],
            results: { conversion: '+40%', accuracy: '95%', retention: '+25%' },
            year: '2024',
            icon: Zap,
            color: 'text-white',
            glow: 'rgba(255, 255, 255, 0.1)'
          }
        ]);
        setLoading(false);
      }
    };

    fetchPortfolioProjects();
  }, [showError]);

  const filteredProjects = portfolioProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen pb-32">
        <SEO 
          title="Architectural Showcase - Limitless Portfolio" 
          description="Exploring the structural transformations and mission-critical systems engineered by Limitless Infotech." 
        />

        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <section className="relative pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
               initial="hidden"
               animate="visible"
               variants={containerVariants}
               className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
                <Trophy size={14} className="text-secondary-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Mission Record</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-10">
                Architectural <br /> <span className="text-primary-400 not-italic">Showcase.</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-gray-500 font-medium italic mb-16 leading-relaxed">
                Deterministic output from our high-fidelity engineering labs. Secure, low-latency transformations deployed across the global digital perimeter.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-20 p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] w-full max-w-fit mx-auto overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-3 px-8 py-4 rounded-[2rem] text-xs font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat.id 
                      ? 'bg-white text-dark-900 shadow-xl' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <cat.icon size={16} />
                    {cat.name}
                  </button>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="relative max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="Query Project Registry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-white text-[10px] font-black uppercase tracking-[0.2em] focus:border-primary-500/50 focus:outline-none transition-all placeholder:text-gray-800"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-[500px] glass-panel rounded-[3rem] animate-pulse bg-white/5 border border-white/5" />
                ))}
              </div>
            ) : (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <Link
                      to={`/portfolio/${project.id}`}
                      key={project.id}
                      className="glass-panel mask-facet relative group flex flex-col h-full bg-dark-900/40 shadow-[0_0_80px_rgba(0,0,0,0.4)] transition-all hover:border-primary-500/20"
                    >
                      <div className="h-64 overflow-hidden relative">
                         {project.image ? (
                           <img src={project.image} alt={project.title} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" />
                         ) : (
                           <div className="w-full h-full bg-white/5 flex items-center justify-center">
                              <project.icon className={`w-20 h-20 ${project.color} opacity-20`} />
                           </div>
                         )}
                         <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0e1114] to-transparent z-10" />
                         <div className="absolute top-8 left-8 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                             <div className="flex items-center gap-2">
                                <project.icon className={`w-3 h-3 ${project.color}`} />
                                <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${project.color}`}>{project.industry}</span>
                             </div>
                         </div>
                      </div>

                      <div className="p-10 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-8 group-hover:translate-x-1 transition-transform">
                          <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-tight max-w-[80%]">{project.title}</h3>
                          <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${project.color} group-hover:bg-white group-hover:text-dark-900 transition-all`}>
                             <ArrowRight className="w-6 h-6" />
                          </div>
                        </div>

                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest italic leading-relaxed mb-10 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-10">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-gray-600 uppercase tracking-widest border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto pt-10 border-t border-white/5 grid grid-cols-2 gap-6">
                           {Object.entries(project.results).slice(0, 2).map(([key, val], idx) => (
                             <div key={idx} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors">
                                <div className="text-lg font-black text-white tracking-tighter mb-1 italic">{val}</div>
                                <div className="text-[7px] font-black text-gray-600 uppercase tracking-[0.2em]">{key} Recovery</div>
                             </div>
                           ))}
                        </div>
                      </div>

                      <div 
                        className="absolute bottom-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{ background: `linear-gradient(to right, transparent, ${project.glow}, transparent)` }}
                      />
                    </Link>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!loading && filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-40 glass-panel rounded-[3rem] border-white/5 bg-white/2"
              >
                <Database size={48} className="text-gray-800 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">Registry Null</h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest">No matching architectural nodes found in the current selector sync.</p>
              </motion.div>
            )}
          </div>
        </section>

        <section className="pt-40 px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto p-16 md:p-32 rounded-[5rem] bg-dark-900 border border-white/10 backdrop-blur-3xl relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="relative z-10 space-y-12">
                  <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">Initialize <br /> <span className="italic text-primary-400">Collaboration.</span></h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed italic">
                    Our architects are ready to deconstruct your technical debt and rebuild your digital future with deterministic precision.
                  </p>
                  <div className="flex flex-wrap justify-center gap-8">
                     <Link to="/get-started" className="px-14 py-6 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl hover:bg-primary-500 hover:text-white transition-all shadow-2xl flex items-center gap-4 group/btn">
                  Begin Engagement_
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                     <Link to="/pricing" className="px-14 py-6 bg-white/5 text-white font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-3xl border border-white/10 hover:bg-white/10 backdrop-blur-xl transition-all">
                        Investment Models
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

export default Portfolio;