import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  Ticket,
  Play,
  ChevronRight,
  Filter,
  Search,
  Sparkles,
  ArrowUpRight,
  Globe,
  Monitor,
  Video,
  Mic2,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Global Index', icon: Globe },
    { id: 'webinar', name: 'Neural Webinars', icon: Monitor },
    { id: 'workshop', name: 'Architect Workshops', icon: Cpu },
    { id: 'conference', name: 'Global Summits', icon: Users },
    { id: 'networking', name: 'Synergy Meets', icon: Sparkles },
  ];

  const events = [
    {
      id: 1,
      title: 'Future of AI: Architectural Deep Dive',
      category: 'webinar',
      date: 'Jan 28, 2024',
      time: '14:00 GMT',
      location: 'Virtual Terminal',
      description: 'Explore the next generation of neural architectures and high-fidelity AI integration strategies.',
      image: null,
      attendees: 1240,
      price: 'Free',
      tags: ['AI', 'Neural', 'Architecture'],
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Global Tech Summit 2024',
      category: 'conference',
      date: 'Feb 15, 2024',
      time: '09:00 EST',
      location: 'Innovation Hub, NY',
      description: 'The premier gathering for technology leaders driving the global digital transformation.',
      image: null,
      attendees: 5200,
      price: '$499',
      tags: ['Innovation', 'Leadership', 'Tech'],
      status: 'live'
    },
    {
      id: 3,
      title: 'React Performance Workshop',
      category: 'workshop',
      date: 'Feb 20, 2024',
      time: '11:00 PST',
      location: 'Virtual Laboratory',
      description: 'Hands-on laboratory session for optimizing high-precision React applications.',
      image: null,
      attendees: 450,
      price: '$99',
      tags: ['React', 'Performance', 'Dev'],
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Cloud Synergy Networking',
      category: 'networking',
      date: 'Mar 05, 2024',
      time: '18:00 CET',
      location: 'Nexus Center, London',
      description: 'Evening of strategic synergy and networking for cloud architectural specialists.',
      image: null,
      attendees: 300,
      price: '$49',
      tags: ['Cloud', 'Network', 'Synergy'],
      status: 'upcoming'
    },
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6">
           <div className="max-w-7xl mx-auto text-center">
              <motion.div 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <Mic2 className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Community Nexus — Intelligence Exchange</span>
              </motion.div>

              <motion.h1 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic"
              >
                 Global <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Nexus</span>
              </motion.h1>

              <motion.p 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
              >
                 Participate in high-fidelity architectural summits and neural workshops. Synchronize with the global Limitless intelligence network.
              </motion.p>

              <motion.div variants={itemVariants} initial="hidden" animate="visible" className="max-w-2xl mx-auto relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500" />
                 <div className="relative flex items-center bg-[#0e1114] border border-white/10 rounded-full p-2 pl-8">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input 
                       type="text" 
                       placeholder="Locate systemic event..." 
                       className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-600 font-bold flex-1 px-4 py-3"
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="px-10 py-3 bg-white text-dark-900 font-black rounded-full hover:bg-gray-200 transition-all text-[10px] uppercase tracking-widest shadow-xl">
                       Retrieve Signal
                    </button>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* Global Registry Feed */}
        <section className="py-24 px-6 relative z-10">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16">
                 {/* Sidebar Navigation */}
                 <div className="lg:w-1/4">
                    <motion.div 
                       variants={itemVariants} initial="hidden" animate="visible"
                       className="sticky top-32 p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl"
                    >
                       <h3 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-12">Registry Matrix</h3>
                       <nav className="space-y-4">
                          {categories.map(cat => (
                             <button
                               key={cat.id}
                               onClick={() => setActiveCategory(cat.id)}
                               className={`w-full flex items-center gap-5 p-5 rounded-2xl transition-all group ${
                                 activeCategory === cat.id 
                                 ? 'bg-white text-dark-900 shadow-2xl translate-x-1' 
                                 : 'text-gray-500 hover:text-white hover:bg-white/5'
                               }`}
                             >
                                <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'text-primary-600' : 'text-gray-600 group-hover:text-primary-400'}`} />
                                <span className="text-sm font-black uppercase tracking-widest">{cat.name}</span>
                             </button>
                          ))}
                       </nav>

                       <div className="mt-20 p-8 rounded-[40px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10">
                          <Activity className="w-8 h-8 text-primary-400 mb-6" />
                          <h4 className="text-lg font-black text-white italic tracking-tight mb-4 uppercase">Pulse Center</h4>
                          <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-[0.2em]">
                             <span className="text-green-500">Peak Saturation</span>: 5 active summits detected in the current cycle.
                          </p>
                       </div>
                    </motion.div>
                 </div>

                 {/* Events Feed */}
                 <div className="lg:flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <AnimatePresence mode="popLayout">
                          {filteredEvents.map((event, index) => (
                             <motion.div
                               key={event.id}
                               layout
                               initial={{ opacity: 0, y: 20 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, scale: 0.95 }}
                               transition={{ duration: 0.5 }}
                               className="group flex flex-col p-10 rounded-[56px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
                             >
                                <div className="relative z-10 flex flex-col h-full">
                                   <div className="flex items-center justify-between mb-10">
                                      <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                         event.status === 'live' 
                                         ? 'bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse' 
                                         : 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
                                      }`}>
                                         {event.status === 'live' ? 'Synchronizing Live' : 'Upcoming Signal'}
                                      </div>
                                      <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{event.category}</span>
                                   </div>

                                   <h3 className="text-3xl font-black text-white italic tracking-tighter mb-6 group-hover:text-primary-400 transition-colors">{event.title}</h3>
                                   <p className="text-gray-400 font-medium leading-relaxed mb-10 line-clamp-3">{event.description}</p>

                                   <div className="space-y-4 mb-10 mt-auto">
                                      <div className="flex items-center gap-4 text-xs font-black text-gray-500 uppercase tracking-widest">
                                         <Calendar className="w-4 h-4 text-primary-400" />
                                         {event.date} // {event.time}
                                      </div>
                                      <div className="flex items-center gap-4 text-xs font-black text-gray-500 uppercase tracking-widest">
                                         <MapPin className="w-4 h-4 text-secondary-400" />
                                         {event.location}
                                      </div>
                                      <div className="flex items-center gap-4 text-xs font-black text-gray-500 uppercase tracking-widest">
                                         <Users className="w-4 h-4 text-white" />
                                         {event.attendees} Registered Nodes
                                      </div>
                                   </div>

                                   <div className="flex items-center justify-between pt-10 border-t border-white/5 mt-auto">
                                      <span className="text-2xl font-black text-white italic tracking-tight">{event.price}</span>
                                      <Link 
                                         to={`/events/${event.id}`}
                                         className="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] hover:text-primary-400 transition-colors group/btn"
                                      >
                                         Initiate Entry <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                      </Link>
                                   </div>
                                </div>
                                {/* Ambient pattern */}
                                <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity">
                                   <Calendar className="w-64 h-64 text-white" />
                                </div>
                             </motion.div>
                          ))}
                       </AnimatePresence>
                    </div>

                    {filteredEvents.length === 0 && (
                       <motion.div 
                          className="text-center py-32 bg-white/5 rounded-[64px] border border-dashed border-white/10"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                       >
                          <Search className="h-16 w-16 text-gray-700 mx-auto mb-8" />
                          <h3 className="text-3xl font-black text-white italic mb-4">Registry Null</h3>
                          <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">No active signals detected for the current parameters.</p>
                       </motion.div>
                    )}
                 </div>
              </div>
           </div>
        </section>

        {/* Community Synergy CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-12 border border-white/20">
                    <Video className="w-10 h-10 text-white animate-pulse" />
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Architect your <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Synergy</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Host a high-fidelity workshop or summit within the Limitless ecosystem. Access our global network of architecture specialists.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Host Event
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm uppercase flex items-center gap-3 group">
                       Consult Nexus Node <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Events;