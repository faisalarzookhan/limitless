import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Bookmark,
  Share2,
  Eye,
  Heart,
  MessageCircle,
  AlertCircle,
  RefreshCw,
  Sparkles,
  Newspaper,
  Layout,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO/SEO';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { showError } = useApp();

  const categories = [
    { id: 'all', name: 'All Insights', count: 24, icon: Layout },
    { id: 'web-development', name: 'Web Core', count: 8, icon: Newspaper },
    { id: 'mobile-apps', name: 'Mobile Ecosystem', count: 6, icon: Smartphone },
    { id: 'ai-ml', name: 'Intelligence', count: 4, icon: Zap },
    { id: 'case-studies', name: 'Architecture Studies', count: 3, icon: TrendingUp },
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const data = await api.blog.getAll();
        setBlogPosts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err.message || 'Failed to fetch blog posts');
        showError('Accessing archive. Displaying curated editorial content.');

        // Curated Editorial Data
        setBlogPosts([
          {
            id: 1,
            title: 'Neural Architecture: The Rise of Auralis AI',
            slug: 'neural-architecture-auralis-ai',
            excerpt: 'Analyzing the structural transition from linear logic to neural synthesis in the next-generation enterprise ecosystems.',
            category: 'ai-ml',
            author: { name: 'Faisal Khan', role: 'Chief Architect' },
            publishedAt: '2024-01-22',
            readTime: '15 min read',
            tags: ['AI', 'Neural-Synthesis', 'Architecture'],
            views: 2450,
            likes: 189,
            comments: 45,
            featured: true
          },
          {
            id: 2,
            title: 'Elastic Sculpting: Global Node Orchestration',
            slug: 'elastic-sculpting-global-nodes',
            excerpt: 'Orchestrating multi-regional distributed nodes for zero-latency mission-critical enterprise applications.',
            category: 'web-development',
            author: { name: 'Taj Nadaf', role: 'Infrastructure Lead' },
            publishedAt: '2024-01-18',
            readTime: '12 min read',
            tags: ['Cloud', 'Scalability', 'Nodes'],
            views: 1890,
            likes: 134,
            comments: 28,
            featured: true
          },
          {
            id: 3,
            title: 'Zero-Trust Synthesis: Security at Scale',
            slug: 'zero-trust-synthesis-security',
            excerpt: 'Implementing persistent biometric handshakes and neural encryption buffers across decentralized platform nodes.',
            category: 'case-studies',
            author: { name: 'Sarah Johnson', role: 'Security Architect' },
            publishedAt: '2024-01-12',
            readTime: '10 min read',
            tags: ['Security', 'Zero-Trust', 'Encryption'],
            views: 1650,
            likes: 112,
            comments: 34,
            featured: false
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesTag && matchesSearch;
  });

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const featuredPosts = blogPosts.filter(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen">
        <SEO 
          title="Editorial Intelligence - Strategic Insights" 
          description="Deep dives into architectural patterns, emerging tech ecosystems, and the future of human-digital interaction." 
        />

        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Bookmark className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">The Limitless Dispatch</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Curated <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent italic">Intelligence</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Deep dives into architectural patterns, emerging tech ecosystems, and the future of human-digital interaction.
            </motion.p>
          </motion.div>
        </section>

        {/* Control Bar */}
        <section className="sticky top-20 z-40 px-6 py-6 bg-dark-900/60 backdrop-blur-xl border-y border-white/5">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap items-center gap-3">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat.id 
                      ? 'bg-white text-dark-900 shadow-2xl scale-105' 
                      : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-96 group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Enter keywords for neural retrieval..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-3xl bg-white/5 border border-white/5 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all hover:bg-white/10"
                />
              </div>
            </div>

            {/* Knowledge Cloud (Tags) */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
               <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mr-4 flex items-center gap-2">
                  <Tag className="w-3 h-3" /> Knowledge Cloud:
               </span>
               <button 
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                    !selectedTag 
                    ? 'bg-primary-500/20 border-primary-500/50 text-white shadow-lg shadow-primary-500/10' 
                    : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
                  }`}
               >
                  All Nodes
               </button>
               {allTags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                      selectedTag === tag 
                      ? 'bg-secondary-500/20 border-secondary-500/50 text-white shadow-lg shadow-secondary-500/10' 
                      : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tag}
                  </button>
               ))}
            </div>
          </div>
        </section>

        {/* Featured Pulse */}
        {!loading && !error && featuredPosts.length > 0 && selectedCategory === 'all' && !searchQuery && (
          <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group relative block aspect-[16/9] rounded-[48px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                      <div className="relative z-10 space-y-4">
                        <div className="flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-primary-500 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary-500/20">Featured</span>
                          {post.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-300 backdrop-blur-md">{tag}</span>
                          ))}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight group-hover:text-primary-400 transition-colors">{post.title}</h2>
                        <p className="text-gray-400 line-clamp-2 max-w-xl">{post.excerpt}</p>
                        <div className="pt-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center border border-primary-500/20 text-primary-400 font-bold">{post.author.name.charAt(0)}</div>
                            <span className="text-sm font-medium text-white">{post.author.name}</span>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500 transition-all duration-500 group-hover:scale-110">
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                  </Link>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map(i => <div key={i} className="aspect-[4/5] rounded-4xl bg-white/5 animate-pulse" />)}
                </div>
              ) : filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      layout
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group p-8 rounded-4xl bg-white/5 border border-white/5 hover:border-primary-500/30 backdrop-blur-md transition-all duration-500 flex flex-col"
                    >
                      <Link to={`/blog/${post.slug}`} className="flex-1 space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">{post.category.replace('-', ' ')}</span>
                          <span className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-bold"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors leading-tight">{post.title}</h3>
                        <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                        
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white">{post.author.name.charAt(0)}</div>
                            <div className="text-[10px]">
                              <div className="text-white font-bold">{post.author.name}</div>
                              <div className="text-gray-500">{post.author.role}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                             <span className="flex items-center gap-1 text-[10px] font-bold"><Heart className="w-3 h-3" /> {post.likes}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center">
                   <AlertCircle className="w-16 h-16 text-gray-700 mx-auto mb-6" />
                   <h3 className="text-2xl font-bold text-white">No dispatches found</h3>
                   <p className="text-gray-500">Adjust your search or category filters.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Newsletter Collective */}
        <section className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto p-16 md:p-24 rounded-[64px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden"
          >
            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Stay <span className="italic">Integrated</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Join our collective of architects and strategists. Get the latest intelligence delivered to your encrypted inbox.
              </p>
              <div className="max-w-md mx-auto relative group">
                <input 
                  type="email" 
                  placeholder="Enter secure email..." 
                  className="w-full px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 backdrop-blur-2xl transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 px-8 bg-white text-dark-900 font-black rounded-2xl hover:bg-gray-200 transition-all text-sm uppercase tracking-widest">
                  Sync
                </button>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Zero spam. Pure intelligence. Encrypted delivery.</p>
            </div>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

// Internal icon for matching scale behavior
const Smartphone = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
);
const Zap = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14.71V2c0-.55.45-1 1-1h10.29c.31 0 .6.14.79.38l3.53 4.41c.19.24.29.54.29.85v15.35a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4.29"/><path d="m14 1 5 5"/>
  </svg>
);

export default Blog;
