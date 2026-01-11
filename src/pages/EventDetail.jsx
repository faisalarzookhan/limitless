import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ChevronLeft,
  Share2,
  Ticket,
  Play,
  ArrowRight,
  Monitor,
  Video,
  Mic2,
  Cpu,
  Layout,
  MessageSquare,
  Globe,
  Zap,
  CheckCircle2
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const EventDetail = () => {
  const { id } = useParams();

  // Mock data for the event detail
  const event = {
    id: id,
    title: 'Future of AI: Architectural Deep Dive',
    category: 'webinar',
    date: 'Jan 28, 2024',
    time: '14:00 - 16:30 GMT',
    location: 'Virtual Terminal (Limitless Nexus)',
    description: `Join our lead AI architects for an immersive exploration of the next generation of neural systems. This high-fidelity session covers the transition from legacy automation to autonomous architectural intelligence.

    We will dissect real-world use cases of Auralis AI integration and demonstrate how to build high-precision, scalable AI infrastructures that evolve with your business needs.`,
    longDescription: `The digital landscape is undergoing a systemic transformation. Legacy AI models are being surpassed by dynamic, architectural neural networks that don't just process data—they synthesize intelligence.

    In this deep-dive webinar, our engineering team will reveal the proprietary methodologies used to power the Limitless ecosystem. 

    Key Learning Objectives:
    • Architectural synthesis of large-scale language models
    • Implementing high-trust verified compliance in AI nodes
    • Real-time telemetry and performance optimization
    • Designing for autonomous evolution and system integrity`,
    image: null,
    attendees: 1240,
    price: 'Free Admission',
    status: 'upcoming',
    speakers: [
      { name: 'Dr. Sarah Chen', role: 'Chief AI Architect', bio: 'Former Lead Neural Engineering at Google Quantum Research.' },
      { name: 'James Wilson', role: 'Head of Innovation Lab', bio: 'Architect behind the Auralis AI infrastructure.' }
    ],
    schedule: [
      { time: '14:00', title: 'Neural Baseline: The Current State of AI Architecture', type: 'Keynote' },
      { time: '14:45', title: 'Synthesizing Intelligence: Auralis Deep Dive', type: 'Technical Session' },
      { time: '15:30', title: 'Architectural Integrity & Compliance Labs', type: 'Workshop' },
      { time: '16:15', title: 'Global Q&A: The Future Roadmap', type: 'Interactive' }
    ]
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30 pb-32">
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute top-1/2 left-[-10%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 border-b border-white/5 bg-dark-950/50">
           <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                 <Link to="/events" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Registry
                 </Link>
              </motion.div>

              <div className="flex flex-col lg:flex-row gap-20">
                 <div className="lg:w-2/3">
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-8">
                       <div className="flex flex-wrap items-center gap-4">
                          <span className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-[10px] font-black text-primary-400 uppercase tracking-widest">
                             {event.category}
                          </span>
                          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                             Entry ID: EVT-0921-X
                          </span>
                       </div>
                       <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none uppercase">
                          {event.title.split(': ')[0]} <br />
                          <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">
                             {event.title.split(': ')[1]}
                          </span>
                       </h1>
                       <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl italic">
                          "{event.description}"
                       </p>

                       <div className="flex flex-wrap gap-12 pt-12">
                          {[
                            { icon: Calendar, label: 'Temporal Node', val: event.date },
                            { icon: Clock, label: 'Duration Cycle', val: event.time },
                            { icon: MapPin, label: 'Geospatial Lock', val: event.location }
                          ].map((info, idx) => (
                            <div key={idx} className="space-y-2">
                               <div className="flex items-center gap-2 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                  <info.icon className="w-3 h-3 text-primary-400" /> {info.label}
                               </div>
                               <div className="text-sm font-black text-white italic uppercase tracking-widest">{info.val}</div>
                            </div>
                          ))}
                       </div>
                    </motion.div>
                 </div>

                 <div className="lg:w-1/3">
                    <motion.div 
                       initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                       className="p-10 rounded-[56px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
                    >
                       <div className="relative z-10 space-y-10">
                          <div className="text-center">
                             <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4">Registration Status</div>
                             <div className="text-4xl font-black text-white italic tracking-tighter">{event.price}</div>
                          </div>

                          <div className="space-y-4">
                             <button className="w-full py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                                Synchronize Now
                             </button>
                             <button className="w-full py-6 bg-white/5 text-white font-black rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                                <Share2 className="w-4 h-4" /> Relinquish Info
                             </button>
                          </div>

                          <div className="pt-8 border-t border-white/5">
                             <div className="flex items-center justify-between text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                <span>SYNCED NODES:</span>
                                <span className="text-primary-400">{event.attendees} / 2500</span>
                             </div>
                             <div className="mt-3 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary-500 w-[50%]" />
                             </div>
                          </div>
                       </div>
                       <div className="absolute inset-0 bg-grid-white/[0.03]" />
                    </motion.div>
                 </div>
              </div>
           </div>
        </section>

        {/* Detail Content Section */}
        <section className="py-24 px-6 relative z-10">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-20">
                 {/* Main Column */}
                 <div className="lg:w-2/3 space-y-20">
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                       <h2 className="text-3xl font-black text-white mb-10 italic uppercase tracking-tighter flex items-center gap-4">
                          <Layout className="w-8 h-8 text-primary-400" />
                          Abstract Synthesis
                       </h2>
                       <div className="prose prose-invert max-w-none">
                          <p className="text-lg text-gray-400 font-medium leading-relaxed mb-8 whitespace-pre-line">
                             {event.longDescription}
                          </p>
                       </div>
                    </motion.div>

                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                       <h2 className="text-3xl font-black text-white mb-10 italic uppercase tracking-tighter flex items-center gap-4">
                          <Clock className="w-8 h-8 text-secondary-400" />
                          Itinerary Matrix
                       </h2>
                       <div className="space-y-4">
                          {event.schedule.map((item, idx) => (
                             <div key={idx} className="group flex items-center gap-8 p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all">
                                <div className="text-xl font-black text-white italic tracking-tighter w-24 shrink-0">{item.time}</div>
                                <div className="h-10 w-px bg-white/10" />
                                <div className="flex-1">
                                   <div className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">{item.type}</div>
                                   <div className="text-lg font-black text-gray-300 italic tracking-tight">{item.title}</div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-primary-400 transition-colors" />
                             </div>
                          ))}
                       </div>
                    </motion.div>
                 </div>

                 {/* Sidebar Column */}
                 <div className="lg:w-1/3 space-y-20">
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                       <h2 className="text-2xl font-black text-white mb-10 italic uppercase tracking-tighter flex items-center gap-4">
                          <Mic2 className="w-6 h-6 text-primary-400" />
                          Key Architects
                       </h2>
                       <div className="space-y-8">
                          {event.speakers.map((speaker, idx) => (
                             <div key={idx} className="p-8 rounded-[40px] bg-white/5 border border-white/10 group">
                                <div className="flex items-center gap-5 mb-6">
                                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-[1px]">
                                      <div className="w-full h-full rounded-[15px] bg-dark-900 flex items-center justify-center">
                                         <Users className="w-8 h-8 text-white/50" />
                                      </div>
                                   </div>
                                   <div>
                                      <h4 className="text-lg font-black text-white italic tracking-tight">{speaker.name}</h4>
                                      <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest">{speaker.role}</p>
                                   </div>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                                   "{speaker.bio}"
                                </p>
                             </div>
                          ))}
                       </div>
                    </motion.div>

                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-10 rounded-[48px] bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm">
                       <h3 className="text-xl font-black text-white italic mb-6 flex items-center gap-3">
                          <Zap className="w-5 h-5 text-primary-400" /> Synergy Group
                       </h3>
                       <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8">
                          Join the pre-event discussion with other synchronized nodes and architects.
                       </p>
                       <button className="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] hover:text-primary-400 transition-colors group">
                          Enter Discussion <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                       </button>
                    </motion.div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-12 border border-white/20">
                    <CheckCircle2 className="w-10 h-10 text-white animate-pulse" />
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Registry <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Synchronized</span></h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Secure your entry to this high-fidelity architectural summit. Synchronization is irreversible once initiated.
                 </p>
                 <div className="pt-8 flex flex-wrap justify-center gap-6">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       I Accept Invitation
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm uppercase flex items-center gap-3 group">
                       View Itinerary Node <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
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

export default EventDetail;
