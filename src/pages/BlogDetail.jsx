import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  HiCalendar,
  HiClock,
  HiUser,
  HiTag,
  HiEye,
  HiHeart,
  HiChat,
  HiShare,
  HiArrowLeft,
  HiArrowRight,
  HiCheckCircle
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink
} from 'react-icons/fa';
import { sendUserInteractionNotification } from '../services/notificationService';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);

  // Sample blog posts data (in real app, fetch from API)
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
        <p>Major companies like Twitter, Starbucks, and Uber have successfully implemented PWAs, demonstrating their potential for delivering high-performance, engaging user experiences.</p>

        <h2>3. WebAssembly (Wasm) Mainstream Adoption</h2>
        <p>WebAssembly is gaining traction as a way to run high-performance applications in the browser. Languages like Rust, C++, and Go can now be compiled to WebAssembly, enabling developers to build computationally intensive applications that run at near-native speed.</p>

        <h2>4. Edge Computing and Serverless Architecture</h2>
        <p>Edge computing is pushing computation and data storage closer to users, reducing latency and improving performance. Serverless architectures are becoming more sophisticated, with better cold start times and more powerful execution environments.</p>
        <p>Platforms like Cloudflare Workers, Deno Deploy, and AWS Lambda@Edge are making it easier than ever to deploy globally distributed applications.</p>

        <h2>5. Component-Driven Development</h2>
        <p>The shift toward component-driven development continues to accelerate. Tools like Storybook, Bit, and design systems are helping teams build, document, and maintain reusable UI components across projects.</p>

        <h2>6. Web3 and Decentralized Applications</h2>
        <p>While still in its early stages, Web3 technology is opening new possibilities for decentralized applications (dApps). Blockchain integration, cryptocurrency payments, and NFTs are becoming more accessible to web developers.</p>

        <h2>7. Enhanced Performance Metrics</h2>
        <p>Core Web Vitals and other performance metrics are becoming increasingly important for SEO and user experience. Tools and frameworks are being optimized to help developers meet these standards more easily.</p>

        <h2>Conclusion</h2>
        <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning new technologies, developers can position themselves at the forefront of innovation.</p>
        <p>At Limitless Infotech Solution, we're committed to leveraging these cutting-edge technologies to deliver exceptional web solutions for our clients. Ready to build something amazing? Get in touch with us today!</p>
      `,
      category: 'web-development',
      author: {
        name: 'Faisal Khan',
        avatar: null,
        role: 'CEO & Founder',
        bio: 'Passionate technologist and entrepreneur with over 10 years of experience in software development. Founder of Limitless Infotech Solution, dedicated to helping businesses transform through technology.'
      },
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      image: null,
      tags: ['Web Development', 'Trends', 'Technology', 'AI', 'PWA'],
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true,
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Apps: Best Practices and Patterns',
      slug: 'scalable-mobile-apps-best-practices',
      excerpt: 'Learn the architectural patterns and best practices for building mobile applications that can scale with your business growth.',
      content: `
        <p>Building mobile applications that can scale with your business is crucial for long-term success. In this article, we'll explore the architectural patterns and best practices that will help you create robust, scalable mobile applications.</p>

        <h2>1. Choose the Right Architecture</h2>
        <p>Selecting the appropriate architecture is the foundation of a scalable mobile app. Popular patterns include MVC, MVVM, MVP, and Clean Architecture. Each has its strengths and use cases.</p>
        <p>For React Native applications, we recommend a combination of Clean Architecture principles with state management solutions like Redux or MobX.</p>

        <h2>2. State Management</h2>
        <p>Proper state management is critical for maintaining app performance as it grows. Consider using established patterns like Redux, MobX, or Context API depending on your app's complexity.</p>

        <h2>3. API Design and Integration</h2>
        <p>Design your APIs with scalability in mind. Implement proper caching strategies, use pagination for large datasets, and consider GraphQL for more flexible data fetching.</p>

        <h2>4. Performance Optimization</h2>
        <p>Optimize images, implement lazy loading, minimize re-renders, and use list virtualization for long lists. Profile your app regularly to identify and fix performance bottlenecks.</p>

        <h2>5. Testing Strategy</h2>
        <p>Implement a comprehensive testing strategy including unit tests, integration tests, and E2E tests. Use tools like Jest, React Native Testing Library, and Detox.</p>

        <h2>6. Code Organization</h2>
        <p>Maintain a clear folder structure, separate business logic from UI components, and follow consistent naming conventions. Use feature-based or domain-based organization for larger projects.</p>

        <h2>Conclusion</h2>
        <p>Building scalable mobile apps requires careful planning and adherence to best practices. By following these guidelines, you'll create applications that can grow with your business needs.</p>
      `,
      category: 'mobile-apps',
      author: {
        name: 'Sarah Johnson',
        avatar: null,
        role: 'Mobile Lead Developer',
        bio: 'Expert mobile developer specializing in React Native and Flutter. Passionate about creating beautiful, performant mobile experiences.'
      },
      publishedAt: '2024-01-10',
      readTime: '12 min read',
      image: null,
      tags: ['Mobile Development', 'Architecture', 'React Native', 'Best Practices'],
      views: 980,
      likes: 67,
      comments: 18,
      featured: false,
    },
    {
      id: 3,
      title: 'AI Integration in Business: A Practical Guide',
      slug: 'ai-integration-business-guide',
      excerpt: 'Discover how to successfully integrate AI technologies into your business operations for improved efficiency and innovation.',
      content: `
        <p>Artificial Intelligence is transforming how businesses operate, making processes more efficient and enabling new capabilities. This guide will help you understand how to integrate AI into your business effectively.</p>

        <h2>Understanding AI Opportunities</h2>
        <p>Start by identifying areas where AI can add the most value. Common use cases include customer service automation, predictive analytics, process automation, and personalization.</p>

        <h2>Starting Small</h2>
        <p>Begin with pilot projects to prove value before scaling. Choose projects with clear metrics and achievable goals.</p>

        <h2>Data is Key</h2>
        <p>AI systems require quality data to function effectively. Invest in data collection, cleaning, and organization before implementing AI solutions.</p>

        <h2>Choosing the Right Tools</h2>
        <p>Evaluate different AI platforms and tools based on your needs. Consider factors like ease of integration, cost, scalability, and support.</p>

        <h2>Team Training</h2>
        <p>Ensure your team understands how to work with AI systems. Provide training and establish clear processes for monitoring and maintaining AI solutions.</p>

        <h2>Ethical Considerations</h2>
        <p>Consider the ethical implications of AI implementation. Ensure transparency, fairness, and accountability in your AI systems.</p>

        <h2>Conclusion</h2>
        <p>AI integration is a journey, not a destination. Start with clear objectives, build incrementally, and continuously optimize based on results.</p>
      `,
      category: 'ai-automation',
      author: {
        name: 'Faisal Khan',
        avatar: null,
        role: 'CEO & Founder',
        bio: 'Passionate technologist and entrepreneur with over 10 years of experience in software development. Founder of Limitless Infotech Solution, dedicated to helping businesses transform through technology.'
      },
      publishedAt: '2024-01-08',
      readTime: '10 min read',
      image: null,
      tags: ['AI', 'Automation', 'Business', 'Innovation'],
      views: 1420,
      likes: 95,
      comments: 31,
      featured: true,
    }
  ];

  // Find the current post
  const post = blogPosts.find(p => p.slug === slug);

  // Get related posts (same category, different article)
  const relatedPosts = post
    ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3)
    : [];

  // Get prev/next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Track reading progress
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, navigate]);

  useEffect(() => {
    // Load sample comments
    setComments([
      {
        id: 1,
        author: 'John Smith',
        avatar: null,
        comment: 'Great article! Very insightful and well-written.',
        date: '2024-01-16',
        likes: 5
      },
      {
        id: 2,
        author: 'Emily Davis',
        avatar: null,
        comment: 'Thanks for sharing these trends. Looking forward to implementing some of these in our projects.',
        date: '2024-01-16',
        likes: 3
      }
    ]);
  }, []);

  if (!post) {
    return null;
  }

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text} ${url}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      // Send notification about the comment
      try {
        await sendUserInteractionNotification('blog-comment', {
          blogTitle: post.title,
          blogSlug: post.slug,
          comment: comment,
          author: 'You', // In a real app, this would be the actual user
          timestamp: new Date().toISOString(),
          page: window.location.pathname
        });
      } catch (error) {
        console.error('Error sending comment notification:', error);
      }

      const newComment = {
        id: comments.length + 1,
        author: 'You',
        avatar: null,
        comment: comment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-dark-800 z-50">
        <div
          className="h-full bg-gradient-primary transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="container-custom pt-24 pb-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
        >
          <HiArrowLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container-custom pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
              {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <HiUser className="w-5 h-5" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiCalendar className="w-5 h-5" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiClock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiEye className="w-5 h-5" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600/20 to-secondary-600/20 aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiChat className="w-10 h-10 text-white" />
              </div>
              <p className="text-gray-400">Featured Image</p>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />

          {/* Tags */}
          <div className="mb-8 pb-8 border-b border-dark-700">
            <div className="flex flex-wrap items-center gap-3">
              <HiTag className="w-5 h-5 text-gray-400" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-dark-800 text-gray-300 rounded-full text-sm hover:bg-primary-600/20 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>

          {/* Social Share */}
          <div className="mb-12 pb-8 border-b border-dark-700">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    liked
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-dark-800 text-gray-400 hover:bg-red-500/20 hover:text-red-400'
                  }`}
                >
                  <HiHeart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>{liked ? post.likes + 1 : post.likes}</span>
                </button>

                <button className="flex items-center space-x-2 px-4 py-2 bg-dark-800 text-gray-400 rounded-lg hover:bg-primary-600/20 hover:text-primary-400 transition-all duration-300">
                  <HiChat className="w-5 h-5" />
                  <span>{comments.length}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-400 mr-2">Share:</span>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-10 h-10 bg-dark-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Share on Facebook"
                >
                  <FaFacebookF className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-10 h-10 bg-dark-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-10 h-10 bg-dark-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="w-10 h-10 bg-dark-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Copy link"
                >
                  <FaLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mb-12 bg-dark-800/50 rounded-2xl p-8 border border-dark-700">
            <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{post.author.name}</h4>
                <p className="text-primary-400 text-sm mb-3">{post.author.role}</p>
                <p className="text-gray-400 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Comments ({comments.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 mb-4"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="btn-primary"
                disabled={!comment.trim()}
              >
                Post Comment
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((c) => (
                <div key={c.id} className="bg-dark-800/30 rounded-xl p-6 border border-dark-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {c.author.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{c.author}</h4>
                        <span className="text-sm text-gray-500">{formatDate(c.date)}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{c.comment}</p>
                      <button className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                        <HiHeart className="w-4 h-4 inline mr-1" />
                        {c.likes} likes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation: Previous/Next Posts */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {prevPost && (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 text-gray-400 mb-3">
                  <HiArrowLeft className="w-5 h-5" />
                  <span className="text-sm">Previous Article</span>
                </div>
                <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                  {prevPost.title}
                </h4>
              </Link>
            )}

            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="flex items-center justify-end space-x-3 text-gray-400 mb-3">
                  <span className="text-sm">Next Article</span>
                  <HiArrowRight className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-right group-hover:text-primary-400 transition-colors">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-dark-800/30 border-t border-dark-700">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Related Articles
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
                      <HiChat className="w-12 h-12 text-gray-600" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs font-medium mb-3">
                        {relatedPost.category.split('-').join(' ')}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedPost.readTime}</span>
                        <span>{relatedPost.views} views</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 border-t border-dark-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <HiCheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help you leverage the latest technologies to achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="btn-primary">
                Get Started
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
