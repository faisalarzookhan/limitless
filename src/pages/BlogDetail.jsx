import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  Send,
  Link2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';
import { sendUserInteractionNotification } from '../services/notification/notificationService';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);

  // Modern Portfolio-Style Data Fallback
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      slug: 'future-web-development-2024',
      excerpt: 'Explore the emerging trends and technologies that will shape web development in 2024, from AI integration to progressive web apps.',
      content: `
        <p>The web development landscape is continuously evolving, and 2024 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that every developer should be aware of.</p>
        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. AI-powered coding assistants, automated testing tools, and intelligent code review systems are helping developers write better code faster.</p>
        <p>GitHub Copilot, ChatGPT, and similar tools are transforming how developers approach problem-solving. These tools can suggest code completions, generate boilerplate code, and even help debug complex issues.</p>
        <h2>2. Progressive Web Apps (PWAs) Evolution</h2>
        <p>PWAs continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming the go-to choice for businesses looking to provide a seamless cross-platform experience.</p>
        <h2>3. WebAssembly (Wasm) Mainstream Adoption</h2>
        <p>WebAssembly is gaining traction as a way to run high-performance applications in the browser. Languages like Rust, C++, and Go can now be compiled to WebAssembly, enabling developers to build computationally intensive applications that run at near-native speed.</p>
      `,
      category: 'web-development',
      author: {
        name: 'Faisal Khan',
        role: 'CEO & Founder',
        bio: 'Passionate technologist and entrepreneur with over 10 years of experience in software development. Founder of Limitless Infotech Solution.'
      },
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      tags: ['Architecture', 'Trends', 'AI'],
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Apps: Best Practices and Patterns',
      slug: 'scalable-mobile-apps-best-practices',
      excerpt: 'Learn the architectural patterns and best practices for building mobile applications that can scale with your business growth.',
      content: `
        <p>Building mobile applications that can scale with your business is crucial for long-term success. In this article, we'll explore the architectural patterns and best practices that will help you create robust, scalable mobile applications.</p>
        <h2>1. Choose the Right Architecture</h2>
        <p>Selecting the appropriate architecture is the foundation of a scalable mobile app. Popular patterns include MVC, MVVM, MVP, and Clean Architecture.</p>
      `,
      category: 'mobile-apps',
      author: {
        name: 'Sarah Johnson',
        role: 'Mobile Lead',
        bio: 'Expert mobile developer specializing in React Native and Flutter.'
      },
      publishedAt: '2024-01-10',
      readTime: '12 min read',
      tags: ['Mobile', 'Scalability'],
      views: 980,
      likes: 67,
      comments: 18
    }
  ];

  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  useEffect(() => {
    setComments([
      { id: 1, author: 'John Smith', comment: 'Great article! Very insightful and well-written.', date: '2024-01-16', likes: 5 },
      { id: 2, author: 'Emily Davis', comment: 'Thanks for sharing these trends.', date: '2024-01-16', likes: 3 }
    ]);
  }, []);

  const handleLike = () => setLiked(!liked);

  const handleCommentSubmit = async e => {
    e.preventDefault();
    if (comment.trim()) {
      try {
        await sendUserInteractionNotification('blog-comment', {
          blogTitle: post.title,
          blogSlug: post.slug,
          comment: comment,
          author: 'You',
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
        });
      } catch (error) { console.error(error); }

      const newComment = {
        id: comments.length + 1,
        author: 'You',
        comment: comment,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

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
        {/* Reading Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[60]">
          <motion.div 
            className="h-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Navigation Bar */}
        <div className="sticky top-0 z-50 px-6 py-4 bg-dark-900/60 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              to="/blog"
              className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Dispatch
            </Link>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                <button onClick={handleLike} className={`hover:text-red-400 transition-colors ${liked ? 'text-red-400' : 'text-gray-500'}`}>
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                </button>
                <button className="text-gray-500 hover:text-primary-400 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
              <div className="h-4 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-widest leading-none">Intelligence Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">{post.category.replace('-', ' ')}</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.readTime}</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              {post.title}
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm font-medium mt-12 mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center border border-primary-500/20 text-primary-400 font-bold">{post.author.name.charAt(0)}</div>
                <div className="text-left">
                  <div className="text-white font-bold">{post.author.name}</div>
                  <div className="text-xs text-gray-500">{post.author.role}</div>
                </div>
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {post.views} Views
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="pb-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-[48px] overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-10 md:p-20"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <MessageCircle className="w-64 h-64" />
              </div>

              <div 
                className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags & Actions */}
              <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-12">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-400 hover:text-white hover:border-primary-500/30 transition-all cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Share Intelligence</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition-all"><Twitter className="w-4 h-4" /></button>
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition-all"><Linkedin className="w-4 h-4" /></button>
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 transition-all"><Link2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Author Signature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 p-12 rounded-[40px] bg-white/5 border border-primary-500/10 flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center text-3xl font-black text-white">{post.author.name.charAt(0)}</div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="text-2xl font-bold text-white">{post.author.name}</div>
                <div className="text-primary-400 font-bold uppercase text-[10px] tracking-widest">{post.author.role}</div>
                <p className="text-gray-400 leading-relaxed font-medium">{post.author.bio}</p>
              </div>
              <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all whitespace-nowrap">View Profile</button>
            </motion.div>

            {/* Comments Arena */}
            <section className="mt-32">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-bold text-white flex items-center gap-4">
                  Community <span className="text-primary-400 italic">Nexus</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-sm font-medium text-gray-500 border border-white/5">{comments.length}</span>
                </h3>
              </div>

              <form onSubmit={handleCommentSubmit} className="mb-16 group">
                <div className="relative">
                  <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Contribute to the dialogue..."
                    className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 min-h-[160px] resize-none transition-all placeholder:text-gray-600"
                  />
                  <button 
                    disabled={!comment.trim()}
                    className="absolute bottom-4 right-4 p-4 bg-primary-500 text-white rounded-2xl hover:bg-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed group-hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>

              <div className="space-y-6">
                <AnimatePresence>
                  {comments.map((c) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-8 rounded-3xl bg-white/5 border border-white/5 flex gap-6"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white flex-shrink-0">{c.author.charAt(0)}</div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{c.author}</span>
                          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{new Date(c.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-medium">{c.comment}</p>
                        <div className="pt-4 flex items-center gap-6">
                           <button className="flex items-center gap-2 text-[10px] font-bold text-gray-600 hover:text-red-400 transition-colors uppercase tracking-widest"><Heart className="w-3.5 h-3.5" /> {c.likes} Likes</button>
                           <button className="flex items-center gap-2 text-[10px] font-bold text-gray-600 hover:text-white transition-colors uppercase tracking-widest">Reply</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto p-16 md:p-24 rounded-[64px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden"
          >
            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Transform your Vision</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Connect with our architectural strategists to determine the optimal investment model for your digital future.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/get-started" className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all flex items-center gap-2 group">
                  Begin Engagement
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                  Direct Consultation
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

export default BlogDetail;
