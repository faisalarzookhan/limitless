import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiUsers,
  HiTicket,
  HiCheckCircle,
  HiUser,
  HiArrowLeft,
  HiShare,
  HiHeart,
  HiDownload,
  HiPlay,
  HiMail,
  HiPhone,
  HiGlobe,
  HiChevronDown,
  HiChevronUp,
  HiArrowRight,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink,
  FaCalendarPlus,
} from 'react-icons/fa';
import ErrorBoundary from '../components/ErrorBoundary';
import { sendUserInteractionNotification } from '../services/notificationService';

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

const EventDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [expandedSection, setExpandedSection] = useState('agenda');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  // Sample events data (in real app, fetch from API)
  const events = [
    {
      id: 1,
      title: 'Launch: AI-Powered CRM System 2.0',
      slug: 'ai-crm-system-launch',
      type: 'Product Launch',
      category: 'product',
      description:
        'Introducing the next generation of our CRM system with advanced AI capabilities, intelligent automation, and predictive analytics.',
      fullDescription: `
        <p>We're thrilled to announce the launch of our revolutionary AI-Powered CRM System 2.0! This next-generation platform combines cutting-edge artificial intelligence with intuitive design to transform how businesses manage customer relationships.</p>

        <h3>What's New in Version 2.0?</h3>
        <p>Our latest release brings powerful new features that will revolutionize your customer management:</p>
        <ul>
          <li><strong>Intelligent Lead Scoring:</strong> AI-powered algorithms automatically prioritize leads based on conversion likelihood</li>
          <li><strong>Predictive Analytics:</strong> Forecast sales trends and customer behavior with machine learning models</li>
          <li><strong>Smart Automation:</strong> Automate repetitive tasks with intelligent workflows that adapt to your business</li>
          <li><strong>Natural Language Processing:</strong> Extract insights from customer communications automatically</li>
          <li><strong>Advanced Reporting:</strong> Generate comprehensive reports with just a few clicks</li>
        </ul>

        <h3>Who Should Attend?</h3>
        <p>This launch event is perfect for:</p>
        <ul>
          <li>Business owners looking to scale customer operations</li>
          <li>Sales and marketing professionals</li>
          <li>CRM administrators and system integrators</li>
          <li>Tech enthusiasts interested in AI applications</li>
        </ul>

        <h3>What to Expect</h3>
        <p>During this 2-hour virtual event, you'll get an exclusive first look at our new platform, witness live demonstrations, and have the opportunity to ask questions to our product team. Plus, attendees will receive special launch pricing and early beta access!</p>
      `,
      date: '2024-02-15',
      time: '10:00 AM IST',
      endTime: '12:00 PM IST',
      duration: '2 hours',
      location: 'Virtual Event',
      venue: 'Zoom Webinar',
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
        'Certificate of attendance',
      ],
      agenda: [
        {
          time: '10:00 AM',
          title: 'Welcome & Introduction',
          duration: '10 min',
          speaker: 'Faisal Khan',
        },
        {
          time: '10:10 AM',
          title: 'Product Overview & Vision',
          duration: '20 min',
          speaker: 'Faisal Khan',
        },
        {
          time: '10:30 AM',
          title: 'Live Demo: Core Features',
          duration: '30 min',
          speaker: 'Sarah Johnson',
        },
        {
          time: '11:00 AM',
          title: 'AI Capabilities Deep Dive',
          duration: '25 min',
          speaker: 'Dr. Michael Chen',
        },
        {
          time: '11:25 AM',
          title: 'Pricing & Special Offers',
          duration: '15 min',
          speaker: 'Sarah Johnson',
        },
        {
          time: '11:40 AM',
          title: 'Q&A Session',
          duration: '15 min',
          speaker: 'All Speakers',
        },
        {
          time: '11:55 AM',
          title: 'Closing Remarks',
          duration: '5 min',
          speaker: 'Faisal Khan',
        },
      ],
      speakers: [
        {
          name: 'Faisal Khan',
          role: 'CEO & Founder',
          bio: 'Passionate technologist and entrepreneur with over 10 years of experience in software development.',
          avatar: null,
          linkedin: '#',
          twitter: '#',
        },
        {
          name: 'Sarah Johnson',
          role: 'Product Manager',
          bio: 'Product strategy expert specializing in CRM solutions and customer success.',
          avatar: null,
          linkedin: '#',
          twitter: '#',
        },
        {
          name: 'Dr. Michael Chen',
          role: 'AI Research Lead',
          bio: 'AI researcher and engineer with expertise in machine learning and natural language processing.',
          avatar: null,
          linkedin: '#',
          twitter: '#',
        },
      ],
      tags: ['Product Launch', 'AI', 'CRM', 'Automation'],
      requirements: [
        'Stable internet connection (minimum 5 Mbps)',
        'Zoom client installed (desktop or mobile)',
        'Headphones recommended for better audio',
        'Webcam optional but encouraged for networking',
      ],
      benefits: [
        'Early bird pricing (40% off)',
        'Exclusive beta access',
        'Free 1-month trial',
        'Priority support for 3 months',
        'Certificate of attendance',
        'Access to recording for 30 days',
      ],
    },
    {
      id: 2,
      title: 'Webinar: Building Scalable Web Applications',
      slug: 'scalable-web-apps-webinar',
      type: 'Webinar',
      category: 'education',
      description:
        'Join our expert developers as they share insights on building scalable, high-performance web applications using modern technologies.',
      fullDescription: `
        <p>Learn from industry experts about the best practices, patterns, and technologies for building web applications that can scale from hundreds to millions of users.</p>

        <h3>Topics Covered</h3>
        <ul>
          <li>Microservices architecture patterns</li>
          <li>Database optimization and caching strategies</li>
          <li>Load balancing and horizontal scaling</li>
          <li>Cloud infrastructure best practices</li>
          <li>Performance monitoring and optimization</li>
        </ul>
      `,
      date: '2024-02-20',
      time: '3:00 PM IST',
      endTime: '4:30 PM IST',
      duration: '1.5 hours',
      location: 'Online',
      venue: 'YouTube Live',
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
      agenda: [
        {
          time: '3:00 PM',
          title: 'Introduction to Scalability',
          duration: '15 min',
          speaker: 'Michael Chen',
        },
        {
          time: '3:15 PM',
          title: 'Architecture Patterns',
          duration: '25 min',
          speaker: 'Michael Chen',
        },
        {
          time: '3:40 PM',
          title: 'Database Optimization',
          duration: '20 min',
          speaker: 'Emma Davis',
        },
        {
          time: '4:00 PM',
          title: 'Case Study Walkthrough',
          duration: '15 min',
          speaker: 'Both',
        },
        { time: '4:15 PM', title: 'Q&A', duration: '15 min', speaker: 'All' },
      ],
      speakers: [
        {
          name: 'Michael Chen',
          role: 'Senior Architect',
          bio: 'Cloud architecture specialist with experience building systems for millions of users.',
          avatar: null,
          linkedin: '#',
          twitter: '#',
        },
        {
          name: 'Emma Davis',
          role: 'Frontend Lead',
          bio: 'Expert in modern frontend technologies and performance optimization.',
          avatar: null,
          linkedin: '#',
          twitter: '#',
        },
      ],
      tags: ['Webinar', 'Web Development', 'Architecture', 'Best Practices'],
      requirements: [
        'Basic understanding of web development',
        'No special software required',
        'Notebook for taking notes recommended',
      ],
      benefits: [
        'Certificate of completion',
        'Downloadable resources',
        'Access to recording',
        '30-day community access',
      ],
    },
  ];

  // Find the current event
  const event = events.find(e => e.slug === slug);

  // Get related events
  const relatedEvents = event
    ? events
        .filter(e => e.category === event.category && e.id !== event.id)
        .slice(0, 2)
    : [];

  useEffect(() => {
    if (!event) {
      navigate('/events');
      return;
    }
    window.scrollTo(0, 0);
  }, [event, navigate]);

  if (!event) {
    return null;
  }

  const handleRegistration = async e => {
    e.preventDefault();

    // Send notification about the event registration
    try {
      await sendUserInteractionNotification('event-registration', {
        eventName: event.title,
        eventSlug: event.slug,
        ...formData,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
      });
    } catch (error) {
      console.error('Error sending registration notification:', error);
    }

    // In real app, send to API
    console.log('Registration submitted:', formData);
    setRegistered(true);
    alert('Registration successful! Check your email for confirmation.');
  };

  const handleShare = platform => {
    const url = window.location.href;
    const text = event.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text} ${url}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleAddToCalendar = () => {
    // Generate .ics file
    const eventDate = new Date(event.date + ' ' + event.time);
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${event.slug}.ics`;
    link.click();
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const toggleSection = section => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0a0b0d] font-['Figtree']">
      {/* Back Button */}
      <div className="container-custom pt-24 pb-8">
        <Link
          to="/events"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#2563eb] transition-colors duration-300 font-['Figtree']"
        >
          <HiArrowLeft className="w-5 h-5" />
          <span>Back to Events</span>
        </Link>
      </div>

      {/* Event Header */}
      <section className="container-custom pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Type Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#2563eb]/20 text-[#2563eb] rounded-full text-sm font-medium">
                  {event.type}
                </span>
                {event.featured && (
                  <span className="inline-block ml-2 px-4 py-2 bg-[#ffc957]/20 text-[#ffc957] rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-['Outfit']"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {event.title}
              </motion.h1>

              {/* Meta Information */}
              <motion.div 
                className="grid md:grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-[#2563eb]/20 rounded-lg flex items-center justify-center">
                    <HiCalendar className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-['Figtree']">Date</p>
                    <p className="font-medium font-['Figtree']">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-[#2563eb]/20 rounded-lg flex items-center justify-center">
                    <HiClock className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-['Figtree']">Time</p>
                    <p className="font-medium font-['Figtree']">
                      {event.time} - {event.endTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-[#2563eb]/20 rounded-lg flex items-center justify-center">
                    <HiLocationMarker className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-['Figtree']">Location</p>
                    <p className="font-medium font-['Figtree']">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-[#2563eb]/20 rounded-lg flex items-center justify-center">
                    <HiUsers className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-['Figtree']">Attendees</p>
                    <p className="font-medium font-['Figtree']">
                      {event.currentAttendees} / {event.maxAttendees}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Featured Image Placeholder */}
              <motion.div 
                className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2563eb]/20 to-[#ffc957]/20 aspect-video flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HiPlay className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-400 font-['Figtree']">Event Preview</p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 font-['Outfit']">
                  About This Event
                </h2>
                <div
                  className="prose prose-invert prose-lg max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                  style={{
                    lineHeight: '1.8',
                  }}
                />
              </motion.div>

              {/* Highlights */}
              <motion.div 
                className="mb-8 bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 font-['Outfit']">
                  Event Highlights
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <HiCheckCircle className="w-5 h-5 text-[#2563eb] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-['Figtree']">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Agenda */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button
                  onClick={() => toggleSection('agenda')}
                  className="w-full flex items-center justify-between bg-[#1a1c20] p-6 rounded-2xl border border-[#2563eb]/30 hover:border-[#2563eb] transition-all font-['Figtree']"
                >
                  <h3 className="text-xl font-bold text-white font-['Outfit']">Event Agenda</h3>
                  {expandedSection === 'agenda' ? (
                    <HiChevronUp className="w-6 h-6 text-[#2563eb]" />
                  ) : (
                    <HiChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSection === 'agenda' && (
                  <motion.div 
                    className="mt-4 bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 pb-4 border-b border-[#2563eb]/10 last:border-0"
                        >
                          <div className="flex-shrink-0 w-24">
                            <p className="text-[#2563eb] font-semibold font-['Figtree']">
                              {item.time}
                            </p>
                            <p className="text-xs text-gray-500 font-['Figtree']">
                              {item.duration}
                            </p>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1 font-['Figtree']">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-400 font-['Figtree']">
                              Speaker: {item.speaker}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Speakers */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-['Outfit']">
                  Meet Our Speakers
                </h3>
                <div className="space-y-6">
                  {event.speakers.map((speaker, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                              {speaker.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1 font-['Figtree']">
                            {speaker.name}
                          </h4>
                          <p className="text-[#ffc957] text-sm mb-2 font-['Figtree']">
                            {speaker.role}
                          </p>
                          <p className="text-gray-400 text-sm font-['Figtree']">{speaker.bio}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              {event.requirements && (
                <motion.div 
                  className="mb-8 bg-[#ffc957]/10 rounded-2xl p-6 border border-[#ffc957]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-['Outfit']">
                    What You'll Need
                  </h3>
                  <ul className="space-y-2">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#ffc957] mr-3 font-['Figtree']">•</span>
                        <span className="text-gray-300 font-['Figtree']">{req}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Tags */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#1a1c20] text-gray-300 rounded-full text-sm hover:bg-[#2563eb]/20 hover:text-[#2563eb] transition-colors font-['Figtree']"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Registration Card */}
                <motion.div 
                  className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-2 font-['Outfit']">
                      Free Event
                    </div>
                    <p className="text-gray-400 font-['Figtree']">Limited spots available</p>
                    <div className="mt-4">
                      <div className="w-full bg-[#1a1c20] rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] h-2 rounded-full"
                          style={{
                            width: `${(event.currentAttendees / event.maxAttendees) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2 font-['Figtree']">
                        {event.maxAttendees - event.currentAttendees} spots
                        remaining
                      </p>
                    </div>
                  </div>

                  {!registered ? (
                    <form onSubmit={handleRegistration} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name *"
                          required
                          value={formData.name}
                          onChange={e =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#1a1c20] border border-[#2563eb]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2563eb] font-['Figtree']"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          required
                          value={formData.email}
                          onChange={e =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#1a1c20] border border-[#2563eb]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2563eb] font-['Figtree']"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company"
                          value={formData.company}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-[#1a1c20] border border-[#2563eb]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2563eb] font-['Figtree']"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={e =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#1a1c20] border border-[#2563eb]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2563eb] font-['Figtree']"
                        />
                      </div>
                      <button type="submit" className="px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 w-full font-['Outfit']">
                        <HiTicket className="w-5 h-5 mr-2 inline" />
                        Register Now
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-[#2563eb]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HiCheckCircle className="w-8 h-8 text-[#2563eb]" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                        You're Registered!
                      </h4>
                      <p className="text-gray-400 mb-4 font-['Figtree']">
                        Check your email for event details
                      </p>
                      <button
                        onClick={handleAddToCalendar}
                        className="px-6 py-3 bg-[#ffc957] text-[#0a0b0d] rounded-lg hover:bg-[#2563eb] hover:text-white transition-colors duration-300 w-full font-['Outfit']"
                      >
                        <FaCalendarPlus className="w-4 h-4 mr-2 inline" />
                        Add to Calendar
                      </button>
                    </div>
                  )}
                </motion.div>

                {/* Benefits */}
                {event.benefits && (
                  <motion.div 
                    className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-4 font-['Outfit']">
                      Attendee Benefits
                    </h4>
                    <ul className="space-y-3">
                      {event.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <HiCheckCircle className="w-5 h-5 text-[#2563eb] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300 font-['Figtree']">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Share */}
                <motion.div 
                  className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4 font-['Outfit']">
                    Share Event
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex-1 h-10 bg-[#1a1c20] hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors border border-[#2563eb]/30"
                    >
                      <FaFacebookF className="w-4 h-4 text-[#2563eb]" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex-1 h-10 bg-[#1a1c20] hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors border border-[#2563eb]/30"
                    >
                      <FaTwitter className="w-4 h-4 text-[#2563eb]" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex-1 h-10 bg-[#1a1c20] hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors border border-[#2563eb]/30"
                    >
                      <FaLinkedinIn className="w-4 h-4 text-[#2563eb]" />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex-1 h-10 bg-[#1a1c20] hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors border border-[#2563eb]/30"
                    >
                      <FaLink className="w-4 h-4 text-[#2563eb]" />
                    </button>
                  </div>
                </motion.div>

                {/* Contact */}
                <motion.div 
                  className="bg-[#1a1c20] rounded-2xl p-6 border border-[#2563eb]/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4 font-['Outfit']">
                    Need Help?
                  </h4>
                  <div className="space-y-3 text-sm font-['Figtree']">
                    <a
                      href="mailto:Info@limitlessinfotech.com"
                      className="flex items-center text-gray-400 hover:text-[#2563eb] transition-colors"
                    >
                      <HiMail className="w-4 h-4 mr-2" />
                      Info@limitlessinfotech.com
                    </a>
                    <a
                      href="tel:+917710909492"
                      className="flex items-center text-gray-400 hover:text-[#2563eb] transition-colors"
                    >
                      <HiPhone className="w-4 h-4 mr-2" />
                      +91 77109 09492
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-16 bg-[#0a0b0d] border-t border-[#2563eb]/30">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-white mb-12 text-center font-['Outfit']"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                More Events You Might Like
              </motion.h2>

              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {relatedEvents.map(relatedEvent => (
                  <motion.Link
                    key={relatedEvent.id}
                    to={`/events/${relatedEvent.slug}`}
                    className="bg-[#1a1c20] rounded-xl overflow-hidden border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300 group"
                    variants={itemVariants}
                  >
                    <div className="aspect-video bg-gradient-to-br from-[#2563eb]/20 to-[#ffc957]/20 flex items-center justify-center">
                      <HiPlay className="w-12 h-12 text-gray-600" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-[#2563eb]/20 text-[#2563eb] rounded-full text-xs font-medium mb-3 font-['Figtree']">
                        {relatedEvent.type}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2563eb] transition-colors font-['Figtree']">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2 font-['Figtree']">
                        {relatedEvent.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 font-['Figtree']">
                        <span className="flex items-center">
                          <HiCalendar className="w-4 h-4 mr-1" />
                          {formatDate(relatedEvent.date)}
                        </span>
                        <span className="flex items-center">
                          <HiUsers className="w-4 h-4 mr-1" />
                          {relatedEvent.currentAttendees} attending
                        </span>
                      </div>
                    </div>
                  </motion.Link>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 border-t border-[#2563eb]/30 bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0a0b0d] to-[#ffc957] rounded-2xl flex items-center justify-center mx-auto">
                <HiTicket className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold mb-4 font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Don't Miss Out!
            </motion.h2>
            <motion.p 
              className="mb-8 font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join us for more events and stay updated on the latest in
              technology and innovation.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/events" className="px-8 py-4 bg-[#0a0b0d] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                View All Events
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
};

export default EventDetail;
