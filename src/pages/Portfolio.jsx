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

        // Curated Showcase Data
        setPortfolioProjects([
          {
            id: 101,
            title: 'IVOLEX - Enterprise Resource Planning',
            category: 'crm',
            client: 'Enterprise Global',
            industry: 'Logistics',
            description: 'Unified multidimensional ERP for large-scale operations and secure asset management.',
            image: null,
            tags: ['Enterprise', 'Scalable', 'Cloud Architecture'],
            results: { efficiency: '+60%', automation: '80%', users: '2k+' },
            year: '2023',
            icon: Building2,
            color: 'primary'
          },
          {
            id: 102,
            title: 'Wakilni - Legal Tech Ecosystem',
            category: 'mobile',
            client: 'MENA Legal Startup',
            industry: 'Legal',
            description: 'Premium matching platform for legal professionals and corporate entities seeking expertise.',
            image: null,
            tags: ['Mobile First', 'High Trust', 'Encrypted'],
            results: { lawyers: '500+', latency: '-80%', satisfaction: '99%' },
            year: '2024',
            icon: Scale,
            color: 'secondary'
          },
          {
            id: 1,
            title: 'Visionary CRM Dashboard',
            category: 'crm',
            client: 'FinTech Group',
            industry: 'Finance',
            description: 'Advanced relational dashboard with real-time analytics and predictive modeling.',
            image: null,
            tags: ['FinTech', 'Data Viz', 'Secure'],
            results: { accuracy: '+95%', productivity: '+40%' },
            year: '2023',
            icon: BarChart3,
            color: 'primary'
          },
          {
            id: 2,
            title: 'Luxe E-commerce Engine',
            category: 'ecommerce',
            client: 'Heritage Brands',
            industry: 'Retail',
            description: 'High-conversion e-commerce core with immersive visual storytelling and seamless checkout.',
            image: null,
            tags: ['Brand-Led', 'Performance', 'UX'],
            results: { conversion: '+85%', traffic: '+250%' },
            year: '2023',
            icon: ShoppingCart,
            color: 'secondary'
          },
          {
            id: 3,
            title: 'LogiFlow Mobile Core',
            category: 'mobile',
            client: 'Global Logistics',
            industry: 'Logistics',
            description: 'Real-time fleet intelligence and route optimization suite for global distribution networks.',
            image: null,
            tags: ['Real-time', 'IoT', 'Optimized'],
            results: { efficiency: '+60%', fuel: '-30%' },
            year: '2023',
            icon: Truck,
            color: 'primary'
          },
          {
            id: 4,
            title: 'EduNexus Learning Core',
            category: 'web',
            client: 'Academia Int.',
            industry: 'Education',
            description: 'Immersive digital learning environment with integrated assessment and progress tracking.',
            image: null,
            tags: ['Immersive', 'Scalable', 'LMS'],
            results: { completion: '+80%', engagement: '+120%' },
            year: '2023',
            icon: Globe,
            color: 'secondary'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolioProjects();
  }, []);

  const filteredProjects = portfolioProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '150+', label: 'Digital Assets Built', icon: Briefcase },
    { number: '50+', label: 'Global Partnerships', icon: Users },
    { number: '12+', label: 'Innovation Awards', icon: Trophy },
    { number: '99%', label: 'Retention Rate', icon: Heart }
  ];

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Trophy className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">Architecture of Success</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              A Legacy of <br />
              <span className="bg-gradient-to-r from-primary-400 via-primary-200 to-secondary-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore our curation of high-impact strategic initiatives and digital transformations that have redefined industry standards.
            </motion.p>

            {/* Metrics */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-5xl font-bold text-white tracking-tighter">{stat.number}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Control Bar */}
        <section className="sticky top-20 z-40 px-6 py-6 bg-dark-900/60 backdrop-blur-xl border-y border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    selectedCategory === cat.id 
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                    : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search initiatives..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {loading ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-[4/5] rounded-4xl bg-white/5 animate-pulse" />
                  ))}
                </motion.div>
              ) : filteredProjects.length > 0 ? (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative"
                    >
                      <Link to={`/portfolio/${project.id}`} className="block h-full cursor-none-special">
                        <div className="relative h-full aspect-[4/5] rounded-4xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 transition-all duration-500 group-hover:border-primary-500/30">
                          {/* Inner Content */}
                          <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            {/* Decorative Icon Background */}
                            <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                              {project.icon && <project.icon className="w-40 h-40" />}
                            </div>

                            <div className="relative z-10 space-y-4">
                              <div className="flex gap-2">
                                {project.tags?.slice(0, 2).map((tag, i) => (
                                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-400">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors leading-tight">
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                                {project.description}
                              </p>
                              
                              <div className="pt-4 flex items-center justify-between">
                                <span className="text-xs font-bold text-primary-400/80 uppercase tracking-widest">{project.industry}</span>
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500 transition-all duration-500 group-hover:scale-110">
                                  <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Accent Gradient on Hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 opacity-0 group-hover:opacity-20 ${
                            project.color === 'primary' ? 'from-primary-500' : 'from-secondary-500'
                          } to-transparent`} />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="py-32 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No initiatives found</h3>
                  <p className="text-gray-400">Try adjusting your filters or search keywords.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-12 md:p-20 rounded-[48px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to be our next flagship story?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Join our collective of forward-thinking enterprises and transform your digital infrastructure with architectural precision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-started" className="px-10 py-4 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/20 flex items-center gap-2 group">
                  Begin Initiative
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all">
                  Consultation
                </Link>
              </div>
            </div>
            {/* Visual pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

// Internal icon for matching scale behavior
const Scale = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
);

export default Portfolio;