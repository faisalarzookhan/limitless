import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiUsers,
  HiChat,
  HiHeart,
  HiShare,
  HiTicket,
  HiCheckCircle,
  HiChevronDown,
  HiChevronUp,
  HiUser,
  HiArrowRight,
  HiSparkles,
  HiTrendingUp,
  HiGlobe,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

const Events = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState({});

  const events = [
    {
      id: 1,
      title: 'Launch: AI-Powered CRM System 2.0',
      slug: 'ai-crm-system-launch',
      type: 'Product Launch',
      description:
        'Introducing the next generation of our CRM system with advanced AI capabilities, intelligent automation, and predictive analytics.',
      date: '2024-02-15',
      time: '10:00 AM IST',
      duration: '2 hours',
      location: 'Virtual Event',
      registrationLink: '#',
      maxAttendees: 500,
      currentAttendees: 287,
      status: 'upcoming',
      featured: true,
      image: null,
      highlights: [
        'Live product demonstration',
        'Q&A with product team',
        'Early bird special pricing',
        'Exclusive beta access',
        'Networking opportunity',
      ],
      speakers: [
        { name: 'Faisal Khan', role: 'CEO & Founder' },
        { name: 'Sarah Johnson', role: 'Product Manager' },
      ],
      tags: ['Product Launch', 'AI', 'CRM', 'Automation'],
    },
    {
      id: 2,
      title: 'Webinar: Building Scalable Web Applications',
      slug: 'scalable-web-apps-webinar',
      type: 'Webinar',
      description:
        'Join our expert developers as they share insights on building scalable, high-performance web applications using modern technologies.',
      date: '2024-02-20',
      time: '3:00 PM IST',
      duration: '1.5 hours',
      location: 'Online',
      registrationLink: '#',
      maxAttendees: 300,
      currentAttendees: 156,
      status: 'upcoming',
      featured: false,
      image: null,
      highlights: [
        'Architecture best practices',
        'Performance optimization',
        'Cloud deployment strategies',
        'Real-world case studies',
        'Code examples and demos',
      ],
      speakers: [
        { name: 'Michael Chen', role: 'Senior Architect' },
        { name: 'Emma Davis', role: 'Frontend Lead' },
      ],
      tags: ['Webinar', 'Web Development', 'Architecture', 'Best Practices'],
    },
    {
      id: 3,
      title: 'Product Demo: Mobile App Development Platform',
      slug: 'mobile-app-platform-demo',
      type: 'Product Demo',
      description:
        'Discover our new mobile app development platform that accelerates development time by 50% with pre-built components and templates.',
      date: '2024-02-25',
      time: '11:00 AM IST',
      duration: '1 hour',
      location: 'Virtual Event',
      registrationLink: '#',
      maxAttendees: 200,
      currentAttendees: 89,
      status: 'upcoming',
      featured: true,
      image: null,
      highlights: [
        'Live platform walkthrough',
        'Feature showcase',
        'Pricing reveal',
        'Limited-time offers',
        'Developer toolkit access',
      ],
      speakers: [
        { name: 'David Martinez', role: 'Mobile Lead' },
        { name: 'Lisa Thompson', role: 'UX Designer' },
      ],
      tags: ['Demo', 'Mobile Development', 'Platform', 'Tools'],
    },
    {
      id: 4,
      title: 'Workshop: Introduction to AI & Machine Learning',
      slug: 'ai-ml-workshop',
      type: 'Workshop',
      description:
        'A hands-on workshop for beginners to understand AI and machine learning concepts with practical examples and real-world applications.',
      date: '2024-03-01',
      time: '2:00 PM IST',
      duration: '3 hours',
      location: 'Online',
      registrationLink: '#',
      maxAttendees: 150,
      currentAttendees: 98,
      status: 'upcoming',
      featured: false,
      image: null,
      highlights: [
        'Hands-on coding exercises',
        'ML model building',
        'AI integration techniques',
        'Certificate of completion',
        'Learning resources',
      ],
      speakers: [{ name: 'Robert Anderson', role: 'AI Specialist' }],
      tags: ['Workshop', 'AI', 'Machine Learning', 'Training'],
    },
    {
      id: 5,
      title: 'Launch Event: Business Automation Suite',
      slug: 'automation-suite-launch',
      type: 'Product Launch',
      description:
        'Unveiling our comprehensive business automation suite that streamlines operations, reduces costs, and boosts productivity.',
      date: '2024-03-10',
      time: '4:00 PM IST',
      duration: '2 hours',
      location: 'Hybrid (Online + Mumbai Office)',
      registrationLink: '#',
      maxAttendees: 400,
      currentAttendees: 215,
      status: 'upcoming',
      featured: true,
      image: null,
      highlights: [
        'Product unveiling ceremony',
        'Customer success stories',
        'Live demonstrations',
        'Launch pricing',
        'Networking dinner (In-person)',
      ],
      speakers: [
        { name: 'Faisal Khan', role: 'CEO & Founder' },
        { name: 'Jennifer Wilson', role: 'Automation Lead' },
      ],
      tags: ['Launch', 'Automation', 'Business', 'Enterprise'],
    },
  ];

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleRSVP = (eventId, status) => {
    setRsvpStatus(prev => ({ ...prev, [eventId]: status }));
    // Here you would make an API call
    console.log(`RSVP for event ${eventId}: ${status}`);
  };

  const handleAddComment = eventId => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      eventId,
      author: 'Anonymous User', // Replace with actual user data
      content: newComment,
      timestamp: new Date(),
      likes: 0,
    };

    setComments(prev => ({
      ...prev,
      [eventId]: [...(prev[eventId] || []), comment],
    }));

    setNewComment('');
    setShowCommentForm(prev => ({ ...prev, [eventId]: false }));
  };

  const handleLikeComment = (eventId, commentId) => {
    setComments(prev => ({
      ...prev,
      [eventId]:
        prev[eventId]?.map(comment =>
          comment.id === commentId
            ? { ...comment, likes: comment.likes + 1 }
            : comment
        ) || [],
    }));
  };

  const getStatusBadge = status => {
    switch (status) {
      case 'upcoming':
        return <span className="badge badge-primary">Upcoming</span>;
      case 'live':
        return <span className="badge badge-success">Live Now</span>;
      case 'completed':
        return <span className="badge bg-gray-500 text-white">Completed</span>;
      default:
        return null;
    }
  };

  const getAttendancePercentage = (current, max) => {
    return Math.round((current / max) * 100);
  };

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
        duration: 0.5
      }
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
              variants={itemVariants}
            >
              <HiCalendar className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">
                Events & Product Launches
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              variants={itemVariants}
            >
              Join Our Upcoming Events
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Product launches, webinars, workshops, and networking
              opportunities
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Featured Events */}
      <section className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Featured <span className="text-[#ffc957]">Events</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Don't miss our flagship events and product launches
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {events
              .filter(e => e.featured)
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-3xl overflow-hidden shadow-xl border border-gray-700"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Event Header Image */}
                  <div className="relative h-64 bg-gradient-to-br from-[#2563eb] to-[#ffc957] flex items-center justify-center overflow-hidden">
                    <HiSparkles className="w-32 h-32 text-white opacity-20" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#ffc957] text-[#0a0b0d] px-3 py-1 rounded-full text-sm font-semibold font-['Figtree']">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(event.status)}
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-[#2563eb] text-white px-3 py-1 rounded-full text-sm font-['Figtree']">
                        {event.type}
                      </span>
                      {event.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs font-['Figtree']">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-['Outfit'] font-bold mb-3 text-white">
                      {event.title}
                    </h3>

                    <p className="text-gray-300 mb-6 font-['Figtree']">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start space-x-2">
                        <HiCalendar className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 font-['Figtree']">
                            Date
                          </p>
                          <p className="text-sm font-semibold text-white font-['Figtree']">
                            {formatDate(event.date)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <HiClock className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 font-['Figtree']">
                            Time
                          </p>
                          <p className="text-sm font-semibold text-white font-['Figtree']">
                            {event.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <HiLocationMarker className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 font-['Figtree']">
                            Location
                          </p>
                          <p className="text-sm font-semibold text-white font-['Figtree']">
                            {event.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <HiUsers className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 font-['Figtree']">
                            Attendees
                          </p>
                          <p className="text-sm font-semibold text-white font-['Figtree']">
                            {event.currentAttendees} / {event.maxAttendees}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Attendance Progress */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400 font-['Figtree']">
                          Registration Progress
                        </span>
                        <span className="text-xs font-semibold text-[#2563eb] font-['Figtree']">
                          {getAttendancePercentage(
                            event.currentAttendees,
                            event.maxAttendees
                          )}
                          %
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563eb] to-[#ffc957]"
                          style={{
                            width: `${getAttendancePercentage(event.currentAttendees, event.maxAttendees)}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* RSVP Buttons */}
                    <div className="flex gap-3 mb-6">
                      {!rsvpStatus[event.id] ? (
                        <>
                          <button
                            onClick={() => handleRSVP(event.id, 'going')}
                            className="flex-1 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-xl font-semibold transition-colors text-sm font-['Figtree']"
                          >
                            <HiCheckCircle className="inline w-5 h-5 mr-2" />
                            Register Now
                          </button>
                          <button
                            onClick={() =>
                              setSelectedEventId(
                                selectedEventId === event.id ? null : event.id
                              )
                            }
                            className="bg-transparent border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors text-sm font-['Figtree']"
                          >
                            Learn More
                          </button>
                        </>
                      ) : (
                        <div className="flex-1 bg-green-900/30 text-green-400 px-6 py-3 rounded-xl font-semibold text-center font-['Figtree']">
                          <HiCheckCircle className="inline w-5 h-5 mr-2" />
                          Registered Successfully!
                        </div>
                      )}
                    </div>

                    {/* Expanded Details */}
                    {selectedEventId === event.id && (
                      <motion.div 
                        className="border-t border-gray-700 pt-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <h4 className="font-['Outfit'] font-bold text-white mb-3">
                          Event Highlights
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {event.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-sm text-gray-300 font-['Figtree']"
                            >
                              <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-['Outfit'] font-bold text-white mb-3">
                          Speakers
                        </h4>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {event.speakers.map((speaker, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {speaker.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white font-['Figtree']">
                                  {speaker.name}
                                </p>
                                <p className="text-xs text-gray-400 font-['Figtree']">
                                  {speaker.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Comments Section */}
                        <div className="border-t border-gray-700 pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-['Outfit'] font-bold text-white flex items-center">
                              <HiChat className="w-5 h-5 mr-2" />
                              Comments ({comments[event.id]?.length || 0})
                            </h4>
                            <button
                              onClick={() =>
                                setShowCommentForm(prev => ({
                                  ...prev,
                                  [event.id]: !prev[event.id],
                                }))
                              }
                              className="text-sm text-[#2563eb] hover:underline font-['Figtree']"
                            >
                              Add Comment
                            </button>
                          </div>

                          {/* Comment Form */}
                          {showCommentForm[event.id] && (
                            <motion.div 
                              className="mb-6"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <textarea
                                value={newComment}
                                onChange={e => setNewComment(e.target.value)}
                                placeholder="Share your thoughts about this event..."
                                rows="3"
                                className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] font-['Figtree']"
                              ></textarea>
                              <div className="flex gap-2 mt-3">
                                <button
                                  onClick={() => handleAddComment(event.id)}
                                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-lg text-sm font-['Figtree']"
                                >
                                  Post Comment
                                </button>
                                <button
                                  onClick={() =>
                                    setShowCommentForm(prev => ({
                                      ...prev,
                                      [event.id]: false,
                                    }))
                                  }
                                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-['Figtree']"
                                >
                                  Cancel
                                </button>
                              </div>
                            </motion.div>
                          )}

                          {/* Comments List */}
                          <div className="space-y-4">
                            {comments[event.id]?.map(comment => (
                              <div
                                key={comment.id}
                                className="bg-gray-800 rounded-lg p-4"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                    {comment.author.charAt(0)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <h5 className="font-semibold text-sm text-white font-['Figtree']">
                                        {comment.author}
                                      </h5>
                                      <span className="text-xs text-gray-400 font-['Figtree']">
                                        {comment.timestamp.toLocaleDateString()}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-2 font-['Figtree']">
                                      {comment.content}
                                    </p>
                                    <button
                                      onClick={() =>
                                        handleLikeComment(event.id, comment.id)
                                      }
                                      className="flex items-center space-x-1 text-xs text-gray-400 hover:text-[#2563eb] transition-colors font-['Figtree']"
                                    >
                                      <HiHeart
                                        className={`w-4 h-4 ${comment.likes > 0 ? 'text-red-500 fill-current' : ''}`}
                                      />
                                      <span>
                                        {comment.likes > 0
                                          ? comment.likes
                                          : 'Like'}
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {(!comments[event.id] ||
                              comments[event.id].length === 0) && (
                              <p className="text-center text-sm text-gray-400 py-8 font-['Figtree']">
                                No comments yet. Be the first to share your
                                thoughts!
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* All Events List */}
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-3xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              All <span className="text-[#ffc957]">Events</span>
            </motion.h3>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#2563eb] to-[#ffc957] flex items-center justify-center">
                  <HiCalendar className="w-16 h-16 text-white opacity-20" />
                  <div className="absolute top-3 right-3">
                    {getStatusBadge(event.status)}
                  </div>
                </div>

                <div className="p-6">
                  <span className="bg-[#2563eb] text-white px-2 py-1 rounded-full text-xs font-['Figtree'] mb-3">
                    {event.type}
                  </span>
                  <h4 className="text-lg font-['Outfit'] font-bold mb-2 text-white line-clamp-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2 font-['Figtree']">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4 text-sm font-['Figtree']">
                    <div className="flex items-center text-gray-300">
                      <HiCalendar className="w-4 h-4 mr-2 text-[#2563eb]" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <HiClock className="w-4 h-4 mr-2 text-[#2563eb]" />
                      {event.time} • {event.duration}
                    </div>
                  </div>

                  <button
                    onClick={() => handleRSVP(event.id, 'going')}
                    disabled={rsvpStatus[event.id]}
                    className={`w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-3 rounded-xl font-semibold transition-colors text-sm font-['Figtree'] ${rsvpStatus[event.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {rsvpStatus[event.id] ? 'Registered' : 'Register Now'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4"
            variants={itemVariants}
          >
            Stay Updated on Upcoming Events
          </motion.h2>
          <motion.p 
            className="text-xl text-[#0a0b0d]/90 mb-8 max-w-2xl mx-auto font-['Figtree']"
            variants={itemVariants}
          >
            Subscribe to our newsletter to receive notifications about new
            events and product launches
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center font-['Figtree']"
            >
              Subscribe Now
              <HiArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
    </ErrorBoundary>
  );
};

export default Events;