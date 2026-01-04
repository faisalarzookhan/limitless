import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  HiClock,
  HiUser,
  HiTag,
  HiArrowRight,
  HiSearch,
  HiFilter,
  HiBookmark,
  HiShare,
  HiEye,
  HiHeart,
  HiChat,
  HiExclamation,
  HiRefresh,
  HiSparkles,
} from 'react-icons/hi';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import ErrorBoundary from '../components/ErrorBoundary';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { showError } = useApp();

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'web-development', name: 'Web Development', count: 8 },
    { id: 'mobile-apps', name: 'Mobile Apps', count: 6 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 4 },
    { id: 'tutorials', name: 'Tutorials', count: 5 },
    { id: 'case-studies', name: 'Case Studies', count: 3 },
    { id: 'industry-news', name: 'Industry News', count: 6 },
  ];

  // Fetch blog posts from API
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

        // Show error to user
        showError(
          'Failed to load blog posts. Showing sample articles instead.'
        );

        // Fallback to hardcoded data
        setBlogPosts([
          {
            id: 1,
            title: 'The Future of Web Development: Trends to Watch in 2024',
            slug: 'future-web-development-2024',
            excerpt:
              'Explore the emerging trends and technologies that will shape web development in 2024, from AI integration to progressive web apps.',
            content: '',
            category: 'web-development',
            author: {
              name: 'Faisal Khan',
              avatar: null,
              role: 'CEO & Founder',
            },
            publishedAt: '2024-01-15',
            readTime: '8 min read',
            image: null,
            tags: ['Web Development', 'Trends', 'Technology'],
            views: 1250,
            likes: 89,
            comments: 23,
            featured: true,
          },
          {
            id: 2,
            title: 'Building Scalable Mobile Apps: Best Practices and Patterns',
            slug: 'scalable-mobile-apps-best-practices',
            excerpt:
              'Learn the architectural patterns and best practices for building mobile applications that can scale with your business growth.',
            content: '',
            category: 'mobile-apps',
            author: {
              name: 'Sarah Johnson',
              avatar: null,
              role: 'Mobile Lead Developer',
            },
            publishedAt: '2024-01-10',
            readTime: '12 min read',
            image: null,
            tags: ['Mobile Development', 'Architecture', 'React Native'],
            views: 980,
            likes: 67,
            comments: 18,
            featured: false,
          },
          {
            id: 3,
            title: 'How AI is Transforming Customer Service Automation',
            slug: 'ai-customer-service-automation',
            excerpt:
              'Discover how artificial intelligence and machine learning are revolutionizing customer service with intelligent chatbots and automation.',
            content: '',
            category: 'ai-ml',
            author: {
              name: 'Michael Chen',
              avatar: null,
              role: 'AI Specialist',
            },
            publishedAt: '2024-01-08',
            readTime: '10 min read',
            image: null,
            tags: ['AI', 'Automation', 'Customer Service'],
            views: 1450,
            likes: 112,
            comments: 34,
            featured: true,
          },
          {
            id: 4,
            title: 'Complete Guide to React Hooks: From Basics to Advanced',
            slug: 'complete-guide-react-hooks',
            excerpt:
              'A comprehensive tutorial covering all React hooks with practical examples and real-world use cases for modern web development.',
            content: '',
            category: 'tutorials',
            author: {
              name: 'Emma Davis',
              avatar: null,
              role: 'Senior Frontend Developer',
            },
            publishedAt: '2024-01-05',
            readTime: '15 min read',
            image: null,
            tags: ['React', 'JavaScript', 'Tutorial'],
            views: 2100,
            likes: 156,
            comments: 45,
            featured: false,
          },
          {
            id: 5,
            title:
              'Case Study: E-commerce Platform That Increased Sales by 300%',
            slug: 'ecommerce-platform-case-study',
            excerpt:
              'An in-depth look at how we helped a fashion retailer transform their online presence and triple their sales in just 6 months.',
            content: '',
            category: 'case-studies',
            author: {
              name: 'Faisal Khan',
              avatar: null,
              role: 'CEO & Founder',
            },
            publishedAt: '2024-01-03',
            readTime: '6 min read',
            image: null,
            tags: ['Case Study', 'E-commerce', 'Success Story'],
            views: 890,
            likes: 78,
            comments: 12,
            featured: false,
          },
          {
            id: 6,
            title: 'Top 10 Security Best Practices for Modern Web Applications',
            slug: 'security-best-practices-web-apps',
            excerpt:
              'Essential security practices every developer should implement to protect web applications from common vulnerabilities and attacks.',
            content: '',
            category: 'web-development',
            author: {
              name: 'David Martinez',
              avatar: null,
              role: 'Security Engineer',
            },
            publishedAt: '2024-01-01',
            readTime: '11 min read',
            image: null,
            tags: ['Security', 'Web Development', 'Best Practices'],
            views: 1670,
            likes: 134,
            comments: 28,
            featured: true,
          },
          {
            id: 7,
            title:
              'The Rise of Progressive Web Apps: Why Your Business Needs One',
            slug: 'progressive-web-apps-business-benefits',
            excerpt:
              'Explore the benefits of Progressive Web Apps and why they are becoming the preferred choice for businesses worldwide.',
            content: '',
            category: 'industry-news',
            author: {
              name: 'Lisa Thompson',
              avatar: null,
              role: 'Product Manager',
            },
            publishedAt: '2023-12-28',
            readTime: '7 min read',
            image: null,
            tags: ['PWA', 'Business', 'Mobile'],
            views: 1120,
            likes: 92,
            comments: 19,
            featured: false,
          },
          {
            id: 8,
            title:
              'Microservices Architecture: A Practical Implementation Guide',
            slug: 'microservices-architecture-guide',
            excerpt:
              'Learn how to design and implement microservices architecture for scalable and maintainable enterprise applications.',
            content: '',
            category: 'web-development',
            author: {
              name: 'Robert Anderson',
              avatar: null,
              role: 'Backend Architect',
            },
            publishedAt: '2023-12-25',
            readTime: '14 min read',
            image: null,
            tags: ['Microservices', 'Architecture', 'Backend'],
            views: 1340,
            likes: 103,
            comments: 31,
            featured: false,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <ErrorBoundary>
      <>
        <Helmet>
          <title>Blog & News - Limitless Infotech Solution</title>
          <meta name="description" content="Stay updated with the latest technology trends, tutorials, and industry insights from Limitless Infotech Solution. Read our blog for expert knowledge and best practices." />
          <meta name="keywords" content="blog, technology news, web development, mobile apps, ai, machine learning, tutorials, case studies, industry insights, tech trends" />
          <meta name="author" content="Limitless Infotech Solution" />
          <meta property="og:title" content="Blog & News - Limitless Infotech Solution" />
          <meta property="og:description" content="Stay updated with the latest technology trends, tutorials, and industry insights from Limitless Infotech Solution. Read our blog for expert knowledge and best practices." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.limitlessinfotech.com/blog" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blog & News - Limitless Infotech Solution" />
          <meta name="twitter:description" content="Stay updated with the latest technology trends, tutorials, and industry insights from Limitless Infotech Solution. Read our blog for expert knowledge and best practices." />
          <link rel="canonical" href="https://www.limitlessinfotech.com/blog" />
        </Helmet>
        <div className="min-h-screen font-sans bg-[#0a0b0d] text-white">
          {/* Hero Section - Asymmetrical Layout */}
          <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0b0d] via-[#1e293b] to-[#0f172a]">
            {/* Asymmetrical background elements */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#2563eb]/10 to-transparent"></div>
            <div className="absolute top-1/4 right-0 w-2/5 h-2/3 bg-gradient-to-l from-[#ffc957]/10 to-transparent"></div>
            <div className="absolute inset-0 bg-architectural-grid opacity-10"></div>
            <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div 
                  className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <HiBookmark className="w-5 h-5" />
                  <span className="text-sm font-semibold">Our Blog & News</span>
                </motion.div>
              
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Insights, <span className="text-[#ffc957]">Tutorials</span> & Industry News
                </motion.h1>
              
                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Stay updated with the latest trends, tutorials, and insights from
                  the world of technology
                </motion.p>
              </div>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="section-padding bg-white dark:bg-dark-900">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                {/* Loading State */}
                {loading && (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mb-4"></div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Loading articles...
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Please wait while we fetch the latest content
                    </p>
                  </div>
                )}

                {/* Error State */}
                {error && !loading && (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
                      <HiExclamation className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Unable to Load Articles
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                    >
                      <HiRefresh className="w-5 h-5" />
                      <span>Retry</span>
                    </button>
                  </div>
                )}

                {/* Search Bar */}
                {!loading && !error && (
                  <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                      <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search articles by title, content, or tags..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Category Filter */}
                {!loading && !error && (
                  <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                    <div className="flex items-center space-x-2 flex-wrap gap-2">
                      <HiFilter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            selectedCategory === category.id
                              ? 'bg-primary-600 text-white shadow-lg'
                              : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                          }`}
                        >
                          {category.name}
                          <span className="ml-2 text-xs opacity-75">
                            ({category.count})
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results Count */}
                {!loading && !error && (
                  <div className="text-center mb-8">
                    <p className="text-gray-600 dark:text-gray-400">
                      Showing{' '}
                      <span className="font-semibold text-primary-600 dark:text-primary-400">
                        {filteredPosts.length}
                      </span>{' '}
                      article{filteredPosts.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          {!loading &&
            !error &&
            featuredPosts.length > 0 &&
            selectedCategory === 'all' &&
            !searchQuery && (
              <section className="section-padding bg-gray-50 dark:bg-dark-800">
                <div className="container-custom">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
                    Featured <span className="text-gradient">Articles</span>
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {featuredPosts.slice(0, 2).map((post, index) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Image */}
                        <div className="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <HiBookmark className="w-24 h-24 text-white opacity-20" />
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="badge badge-accent text-white bg-accent-600">
                              Featured
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center space-x-4 mb-3 text-sm">
                            <span className="flex items-center text-gray-500 dark:text-gray-400">
                              <HiUser className="w-4 h-4 mr-1" />
                              {post.author.name}
                            </span>
                            <span className="flex items-center text-gray-500 dark:text-gray-400">
                              <HiClock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag, i) => (
                                <span
                                  key={i}
                                  className="badge badge-primary text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <span className="text-primary-600 dark:text-primary-400 font-semibold flex items-center">
                              Read More
                              <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                          </div>

                          <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-dark-700 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center">
                              <HiEye className="w-4 h-4 mr-1" />
                              {post.views}
                            </span>
                            <span className="flex items-center">
                              <HiHeart className="w-4 h-4 mr-1" />
                              {post.likes}
                            </span>
                            <span className="flex items-center">
                              <HiChat className="w-4 h-4 mr-1" />
                              {post.comments}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

          {/* All Posts */}
          <section className="section-padding bg-white dark:bg-dark-900">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                {!loading && !error && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-700 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <HiBookmark className="w-16 h-16 text-white opacity-20" />
                          </div>
                          {post.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="badge badge-accent text-xs">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-3 text-xs">
                            <span className="text-gray-500 dark:text-gray-400">
                              {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center text-gray-500 dark:text-gray-400">
                              <HiClock className="w-3 h-3 mr-1" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {post.author.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                {post.author.role}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
                            <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                              <span className="flex items-center">
                                <HiHeart className="w-4 h-4 mr-1" />
                                {post.likes}
                              </span>
                              <span className="flex items-center">
                                <HiChat className="w-4 h-4 mr-1" />
                                {post.comments}
                              </span>
                            </div>
                            <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-semibold flex items-center">
                              Read
                              <HiArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {!loading && !error && filteredPosts.length === 0 && (
                  <div className="text-center py-16">
                    <HiBookmark className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      No articles found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="btn-primary"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Newsletter Subscription */}
          <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and industry insights delivered
                to your inbox
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-white/70 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    </ErrorBoundary>
  );
};

export default Blog;
