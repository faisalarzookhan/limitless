import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink,
  FaCalendarPlus,
} from "react-icons/fa";
import { sendUserInteractionNotification } from '../services/notificationService';

const EventDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [expandedSection, setExpandedSection] = useState("agenda");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  // Sample events data (in real app, fetch from API)
  const events = [
    {
      id: 1,
      title: "Launch: AI-Powered CRM System 2.0",
      slug: "ai-crm-system-launch",
      type: "Product Launch",
      category: "product",
      description:
        "Introducing the next generation of our CRM system with advanced AI capabilities, intelligent automation, and predictive analytics.",
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
      date: "2024-02-15",
      time: "10:00 AM IST",
      endTime: "12:00 PM IST",
      duration: "2 hours",
      location: "Virtual Event",
      venue: "Zoom Webinar",
      registrationLink: "#",
      maxAttendees: 500,
      currentAttendees: 287,
      status: "upcoming",
      featured: true,
      image: null,
      highlights: [
        "Live product demonstration",
        "Q&A with product team",
        "Early bird special pricing",
        "Exclusive beta access",
        "Networking opportunity",
        "Certificate of attendance",
      ],
      agenda: [
        {
          time: "10:00 AM",
          title: "Welcome & Introduction",
          duration: "10 min",
          speaker: "Faisal Khan",
        },
        {
          time: "10:10 AM",
          title: "Product Overview & Vision",
          duration: "20 min",
          speaker: "Faisal Khan",
        },
        {
          time: "10:30 AM",
          title: "Live Demo: Core Features",
          duration: "30 min",
          speaker: "Sarah Johnson",
        },
        {
          time: "11:00 AM",
          title: "AI Capabilities Deep Dive",
          duration: "25 min",
          speaker: "Dr. Michael Chen",
        },
        {
          time: "11:25 AM",
          title: "Pricing & Special Offers",
          duration: "15 min",
          speaker: "Sarah Johnson",
        },
        {
          time: "11:40 AM",
          title: "Q&A Session",
          duration: "15 min",
          speaker: "All Speakers",
        },
        {
          time: "11:55 AM",
          title: "Closing Remarks",
          duration: "5 min",
          speaker: "Faisal Khan",
        },
      ],
      speakers: [
        {
          name: "Faisal Khan",
          role: "CEO & Founder",
          bio: "Passionate technologist and entrepreneur with over 10 years of experience in software development.",
          avatar: null,
          linkedin: "#",
          twitter: "#",
        },
        {
          name: "Sarah Johnson",
          role: "Product Manager",
          bio: "Product strategy expert specializing in CRM solutions and customer success.",
          avatar: null,
          linkedin: "#",
          twitter: "#",
        },
        {
          name: "Dr. Michael Chen",
          role: "AI Research Lead",
          bio: "AI researcher and engineer with expertise in machine learning and natural language processing.",
          avatar: null,
          linkedin: "#",
          twitter: "#",
        },
      ],
      tags: ["Product Launch", "AI", "CRM", "Automation"],
      requirements: [
        "Stable internet connection (minimum 5 Mbps)",
        "Zoom client installed (desktop or mobile)",
        "Headphones recommended for better audio",
        "Webcam optional but encouraged for networking",
      ],
      benefits: [
        "Early bird pricing (40% off)",
        "Exclusive beta access",
        "Free 1-month trial",
        "Priority support for 3 months",
        "Certificate of attendance",
        "Access to recording for 30 days",
      ],
    },
    {
      id: 2,
      title: "Webinar: Building Scalable Web Applications",
      slug: "scalable-web-apps-webinar",
      type: "Webinar",
      category: "education",
      description:
        "Join our expert developers as they share insights on building scalable, high-performance web applications using modern technologies.",
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
      date: "2024-02-20",
      time: "3:00 PM IST",
      endTime: "4:30 PM IST",
      duration: "1.5 hours",
      location: "Online",
      venue: "YouTube Live",
      registrationLink: "#",
      maxAttendees: 300,
      currentAttendees: 156,
      status: "upcoming",
      featured: false,
      image: null,
      highlights: [
        "Architecture best practices",
        "Performance optimization",
        "Cloud deployment strategies",
        "Real-world case studies",
        "Code examples and demos",
      ],
      agenda: [
        {
          time: "3:00 PM",
          title: "Introduction to Scalability",
          duration: "15 min",
          speaker: "Michael Chen",
        },
        {
          time: "3:15 PM",
          title: "Architecture Patterns",
          duration: "25 min",
          speaker: "Michael Chen",
        },
        {
          time: "3:40 PM",
          title: "Database Optimization",
          duration: "20 min",
          speaker: "Emma Davis",
        },
        {
          time: "4:00 PM",
          title: "Case Study Walkthrough",
          duration: "15 min",
          speaker: "Both",
        },
        { time: "4:15 PM", title: "Q&A", duration: "15 min", speaker: "All" },
      ],
      speakers: [
        {
          name: "Michael Chen",
          role: "Senior Architect",
          bio: "Cloud architecture specialist with experience building systems for millions of users.",
          avatar: null,
          linkedin: "#",
          twitter: "#",
        },
        {
          name: "Emma Davis",
          role: "Frontend Lead",
          bio: "Expert in modern frontend technologies and performance optimization.",
          avatar: null,
          linkedin: "#",
          twitter: "#",
        },
      ],
      tags: ["Webinar", "Web Development", "Architecture", "Best Practices"],
      requirements: [
        "Basic understanding of web development",
        "No special software required",
        "Notebook for taking notes recommended",
      ],
      benefits: [
        "Certificate of completion",
        "Downloadable resources",
        "Access to recording",
        "30-day community access",
      ],
    },
  ];

  // Find the current event
  const event = events.find((e) => e.slug === slug);

  // Get related events
  const relatedEvents = event
    ? events
        .filter((e) => e.category === event.category && e.id !== event.id)
        .slice(0, 2)
    : [];

  useEffect(() => {
    if (!event) {
      navigate("/events");
      return;
    }
    window.scrollTo(0, 0);
  }, [event, navigate]);

  if (!event) {
    return null;
  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    // Send notification about the event registration
    try {
      await sendUserInteractionNotification('event-registration', {
        eventName: event.title,
        eventSlug: event.slug,
        ...formData,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
      });
    } catch (error) {
      console.error('Error sending registration notification:', error);
    }
    
    // In real app, send to API
    console.log("Registration submitted:", formData);
    setRegistered(true);
    alert("Registration successful! Check your email for confirmation.");
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = event.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text} ${url}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } else {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const handleAddToCalendar = () => {
    // Generate .ics file
    const eventDate = new Date(event.date + " " + event.time);
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${event.slug}.ics`;
    link.click();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Back Button */}
      <div className="container-custom pt-24 pb-8">
        <Link
          to="/events"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
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
                <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                {event.featured && (
                  <span className="inline-block ml-2 px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {event.title}
              </h1>

              {/* Meta Information */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <HiCalendar className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <HiClock className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">
                      {event.time} - {event.endTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <HiLocationMarker className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <HiUsers className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Attendees</p>
                    <p className="font-medium">
                      {event.currentAttendees} / {event.maxAttendees}
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Image Placeholder */}
              <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600/20 to-secondary-600/20 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HiPlay className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-400">Event Preview</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  About This Event
                </h2>
                <div
                  className="prose prose-invert prose-lg max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                />
              </div>

              {/* Highlights */}
              <div className="mb-8 bg-dark-800/50 rounded-2xl p-6 border border-dark-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Event Highlights
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <HiCheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agenda */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("agenda")}
                  className="w-full flex items-center justify-between bg-dark-800/50 p-6 rounded-2xl border border-dark-700 hover:border-primary-600/50 transition-all"
                >
                  <h3 className="text-xl font-bold text-white">Event Agenda</h3>
                  {expandedSection === "agenda" ? (
                    <HiChevronUp className="w-6 h-6 text-primary-400" />
                  ) : (
                    <HiChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSection === "agenda" && (
                  <div className="mt-4 bg-dark-800/30 rounded-2xl p-6 border border-dark-700">
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 pb-4 border-b border-dark-800 last:border-0"
                        >
                          <div className="flex-shrink-0 w-24">
                            <p className="text-primary-400 font-semibold">
                              {item.time}
                            </p>
                            <p className="text-xs text-gray-500">
                              {item.duration}
                            </p>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              Speaker: {item.speaker}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Speakers */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Meet Our Speakers
                </h3>
                <div className="space-y-6">
                  {event.speakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                              {speaker.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {speaker.name}
                          </h4>
                          <p className="text-primary-400 text-sm mb-2">
                            {speaker.role}
                          </p>
                          <p className="text-gray-400 text-sm">{speaker.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              {event.requirements && (
                <div className="mb-8 bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    What You'll Need
                  </h3>
                  <ul className="space-y-2">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-3">•</span>
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-800 text-gray-300 rounded-full text-sm"
                    >
                      #{tag.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Registration Card */}
                <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-2">
                      Free Event
                    </div>
                    <p className="text-gray-400">Limited spots available</p>
                    <div className="mt-4">
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full"
                          style={{
                            width: `${(event.currentAttendees / event.maxAttendees) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
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
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        <HiTicket className="w-5 h-5 mr-2 inline" />
                        Register Now
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HiCheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        You're Registered!
                      </h4>
                      <p className="text-gray-400 mb-4">
                        Check your email for event details
                      </p>
                      <button
                        onClick={handleAddToCalendar}
                        className="btn-secondary w-full"
                      >
                        <FaCalendarPlus className="w-4 h-4 mr-2 inline" />
                        Add to Calendar
                      </button>
                    </div>
                  )}
                </div>

                {/* Benefits */}
                {event.benefits && (
                  <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Attendee Benefits
                    </h4>
                    <ul className="space-y-3">
                      {event.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <HiCheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Share */}
                <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Share Event
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex-1 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex-1 h-10 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex-1 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex-1 h-10 bg-dark-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <FaLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Need Help?
                  </h4>
                  <div className="space-y-3 text-sm">
                    <a
                      href="mailto:Info@limitlessinfotech.com"
                      className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <HiMail className="w-4 h-4 mr-2" />
                      Info@limitlessinfotech.com
                    </a>
                    <a
                      href="tel:+917710909492"
                      className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <HiPhone className="w-4 h-4 mr-2" />
                      +91 77109 09492
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-16 bg-dark-800/30 border-t border-dark-700">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                More Events You Might Like
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedEvents.map((relatedEvent) => (
                  <Link
                    key={relatedEvent.id}
                    to={`/events/${relatedEvent.slug}`}
                    className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
                      <HiPlay className="w-12 h-12 text-gray-600" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs font-medium mb-3">
                        {relatedEvent.type}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {relatedEvent.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
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
                <HiTicket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-gray-300 mb-8">
              Join us for more events and stay updated on the latest in
              technology and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/events" className="btn-secondary">
                View All Events
              </Link>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
