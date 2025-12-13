import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  HiGlobe
} from 'react-icons/hi';

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
      description: 'Introducing the next generation of our CRM system with advanced AI capabilities, intelligent automation, and predictive analytics.',
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
        'Networking opportunity'
      ],
      speakers: [
        { name: 'Faisal Khan', role: 'CEO & Founder' },
        { name: 'Sarah Johnson', role: 'Product Manager' }
      ],
      tags: ['Product Launch', 'AI', 'CRM', 'Automation'],
    },
    {
      id: 2,
      title: 'Webinar: Building Scalable Web Applications',
      slug: 'scalable-web-apps-webinar',
      type: 'Webinar',
      description: 'Join our expert developers as they share insights on building scalable, high-performance web applications using modern technologies.',
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
        'Code examples and demos'
      ],
      speakers: [
        { name: 'Michael Chen', role: 'Senior Architect' },
        { name: 'Emma Davis', role: 'Frontend Lead' }
      ],
      tags: ['Webinar', 'Web Development', 'Architecture', 'Best Practices'],
    },
    {
      id: 3,
      title: 'Product Demo: Mobile App Development Platform',
      slug: 'mobile-app-platform-demo',
      type: 'Product Demo',
      description: 'Discover our new mobile app development platform that accelerates development time by 50% with pre-built components and templates.',
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
        'Developer toolkit access'
      ],
      speakers: [
        { name: 'David Martinez', role: 'Mobile Lead' },
        { name: 'Lisa Thompson', role: 'UX Designer' }
      ],
      tags: ['Demo', 'Mobile Development', 'Platform', 'Tools'],
    },
    {
      id: 4,
      title: 'Workshop: Introduction to AI & Machine Learning',
      slug: 'ai-ml-workshop',
      type: 'Workshop',
      description: 'A hands-on workshop for beginners to understand AI and machine learning concepts with practical examples and real-world applications.',
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
        'Learning resources'
      ],
      speakers: [
        { name: 'Robert Anderson', role: 'AI Specialist' }
      ],
      tags: ['Workshop', 'AI', 'Machine Learning', 'Training'],
    },
    {
      id: 5,
      title: 'Launch Event: Business Automation Suite',
      slug: 'automation-suite-launch',
      type: 'Product Launch',
      description: 'Unveiling our comprehensive business automation suite that streamlines operations, reduces costs, and boosts productivity.',
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
        'Networking dinner (In-person)'
      ],
      speakers: [
        { name: 'Faisal Khan', role: 'CEO & Founder' },
        { name: 'Jennifer Wilson', role: 'Automation Lead' }
      ],
      tags: ['Launch', 'Automation', 'Business', 'Enterprise'],
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleRSVP = (eventId, status) => {
    setRsvpStatus(prev => ({ ...prev, [eventId]: status }));
    // Here you would make an API call
    console.log(`RSVP for event ${eventId}: ${status}`);
  };

  const handleAddComment = (eventId) => {
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
      [eventId]: [...(prev[eventId] || []), comment]
    }));

    setNewComment('');
    setShowCommentForm(prev => ({ ...prev, [eventId]: false }));
  };

  const handleLikeComment = (eventId, commentId) => {
    setComments(prev => ({
      ...prev,
      [eventId]: prev[eventId]?.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      ) || []
    }));
  };

  const getStatusBadge = (status) => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="container-custom px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <HiCalendar className="w-5 h-5" />
              <span className="text-sm font-semibold">Events & Product Launches</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              Join Our Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Product launches, webinars, workshops, and networking opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Events</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't miss our flagship events and product launches
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {events.filter(e => e.featured).map((event, index) => (
              <div
                key={event.id}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-dark-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Header Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center overflow-hidden">
                  <HiSparkles className="w-32 h-32 text-white opacity-20" />
                  <div className="absolute top-4 left-4">
                    <span className="badge bg-yellow-500 text-white">Featured</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(event.status)}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="badge badge-primary">{event.type}</span>
                    {event.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="badge badge-secondary text-xs">{tag}</span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start space-x-2">
                      <HiCalendar className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Date</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {formatDate(event.date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <HiClock className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Time</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {event.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <HiLocationMarker className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Location</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <HiUsers className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Attendees</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {event.currentAttendees} / {event.maxAttendees}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Attendance Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Registration Progress</span>
                      <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                        {getAttendancePercentage(event.currentAttendees, event.maxAttendees)}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 to-secondary-600"
                        style={{ width: `${getAttendancePercentage(event.currentAttendees, event.maxAttendees)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* RSVP Buttons */}
                  <div className="flex gap-3 mb-6">
                    {!rsvpStatus[event.id] ? (
                      <>
                        <button
                          onClick={() => handleRSVP(event.id, 'going')}
                          className="flex-1 btn-primary text-sm"
                        >
                          <HiCheckCircle className="inline w-5 h-5 mr-2" />
                          Register Now
                        </button>
                        <button
                          onClick={() => setSelectedEventId(selectedEventId === event.id ? null : event.id)}
                          className="btn-outline text-sm"
                        >
                          Learn More
                        </button>
                      </>
                    ) : (
                      <div className="flex-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-6 py-3 rounded-xl font-semibold text-center">
                        <HiCheckCircle className="inline w-5 h-5 mr-2" />
                        Registered Successfully!
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {selectedEventId === event.id && (
                    <div className="border-t border-gray-200 dark:border-dark-700 pt-6 animate-slide-down">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Event Highlights</h4>
                      <ul className="space-y-2 mb-6">
                        {event.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Speakers</h4>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {event.speakers.map((speaker, i) => (
                          <div key={i} className="flex items-center space-x-2 bg-gray-100 dark:bg-dark-700 px-4 py-2 rounded-lg">
                            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {speaker.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{speaker.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{speaker.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Comments Section */}
                      <div className="border-t border-gray-200 dark:border-dark-700 pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-gray-900 dark:text-white flex items-center">
                            <HiChat className="w-5 h-5 mr-2" />
                            Comments ({comments[event.id]?.length || 0})
                          </h4>
                          <button
                            onClick={() => setShowCommentForm(prev => ({ ...prev, [event.id]: !prev[event.id] }))}
                            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Add Comment
                          </button>
                        </div>

                        {/* Comment Form */}
                        {showCommentForm[event.id] && (
                          <div className="mb-6 animate-slide-down">
                            <textarea
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              placeholder="Share your thoughts about this event..."
                              rows="3"
                              className="textarea-field mb-3"
                            ></textarea>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAddComment(event.id)}
                                className="btn-primary text-sm"
                              >
                                Post Comment
                              </button>
                              <button
                                onClick={() => setShowCommentForm(prev => ({ ...prev, [event.id]: false }))}
                                className="btn-ghost text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Comments List */}
                        <div className="space-y-4">
                          {comments[event.id]?.map((comment) => (
                            <div key={comment.id} className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                              <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                  {comment.author.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <h5 className="font-semibold text-sm text-gray-900 dark:text-white">
                                      {comment.author}
                                    </h5>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                      {comment.timestamp.toLocaleDateString()}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {comment.content}
                                  </p>
                                  <button
                                    onClick={() => handleLikeComment(event.id, comment.id)}
                                    className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                  >
                                    <HiHeart className={`w-4 h-4 ${comment.likes > 0 ? 'text-red-500 fill-current' : ''}`} />
                                    <span>{comment.likes > 0 ? comment.likes : 'Like'}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}

                          {(!comments[event.id] || comments[event.id].length === 0) && (
                            <p className="text-center text-sm text-gray-500 dark:text-gray-400 py-8">
                              No comments yet. Be the first to share your thoughts!
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* All Events List */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold mb-4">
              All <span className="text-gradient">Events</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <HiCalendar className="w-16 h-16 text-white opacity-20" />
                  <div className="absolute top-3 right-3">
                    {getStatusBadge(event.status)}
                  </div>
                </div>

                <div className="p-6">
                  <span className="badge badge-primary text-xs mb-3">{event.type}</span>
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <HiCalendar className="w-4 h-4 mr-2 text-primary-600" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <HiClock className="w-4 h-4 mr-2 text-primary-600" />
                      {event.time} • {event.duration}
                    </div>
                  </div>

                  <button
                    onClick={() => handleRSVP(event.id, 'going')}
                    disabled={rsvpStatus[event.id]}
                    className="w-full btn-primary text-sm disabled:opacity-50"
                  >
                    {rsvpStatus[event.id] ? 'Registered' : 'Register Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Stay Updated on Upcoming Events
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive notifications about new events and product launches
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Subscribe Now
            <HiArrowRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
