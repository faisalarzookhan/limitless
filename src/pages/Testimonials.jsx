import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  CheckCircle2,
  Sparkles,
  UserCircle2,
  Filter,
  ChevronDown,
  ChevronUp,
  Quote,
  Building2,
  Calendar,
  Zap,
  ArrowRight,
  Monitor,
  Activity
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const Testimonials = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [expandedReview, setExpandedReview] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'TechVision Solutions',
      industry: 'Technology',
      rating: 5,
      date: 'Nov 2023',
      text: 'Limitless transformed our business with a custom CRM system. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40%!',
      project: 'Custom CRM System',
      verified: true,
      longReview: "Working with Limitless Infotech Solution has been an absolute game-changer for our company. From the initial consultation to the final deployment, every step was handled with utmost professionalism. The CRM system they built is not just a tool; it's a complete transformation of how we manage customer relationships. The team took the time to understand our unique challenges and delivered a solution that exceeded our expectations. Our sales team loves the intuitive interface, and the automated workflows have saved us countless hours.",
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'StyleHub Fashion',
      industry: 'Retail',
      rating: 5,
      date: 'Oct 2023',
      text: 'The e-commerce platform they built for us is stunning and incredibly efficient. Sales have tripled since launch. Highly recommend their services!',
      project: 'E-commerce Platform',
      verified: true,
      longReview: "I cannot express enough how thrilled we are with our new e-commerce platform. Limitless not only delivered a beautiful website but also integrated cutting-edge features like AI-powered product recommendations that have significantly boosted our average order value. The mobile experience is flawless, and our customers love how easy it is to shop on their phones.",
    },
    {
      id: 3,
      name: 'Ahmed Ali',
      role: 'Operations Manager',
      company: 'LogiTrack Logistics',
      industry: 'Logistics',
      rating: 5,
      date: 'Sep 2023',
      text: "Outstanding mobile app development! The app is intuitive, fast, and our clients love it. The team's expertise in automation saved us countless hours.",
      project: 'Logistics Mobile App',
      verified: true,
      longReview: "The mobile app developed by Limitless has transformed our logistics operations completely. Our drivers find it easy to use, even those who aren't tech-savvy. The real-time GPS tracking gives our customers peace of mind, and the route optimization feature has reduced our fuel costs by 30%.",
    },
    {
      id: 4,
      name: 'Sneha Patel',
      role: 'Director',
      company: 'EduLearn Academy',
      industry: 'Education',
      rating: 5,
      date: 'Aug 2023',
      text: 'Working with Limitless was a game-changer. They built a complete learning management system that exceeded all our requirements. True professionals!',
      project: 'Learning Management System',
      verified: true,
      longReview: "As an educational institution, we needed a platform that could handle video streaming, assessments, progress tracking, and student engagement. Limitless delivered all of this and more. The LMS they built is robust, scalable, and incredibly user-friendly.",
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'FinSecure Banking',
      industry: 'Finance',
      rating: 5,
      date: 'Jul 2023',
      text: "Exceptional work on our payment gateway! Security was paramount, and they delivered a solution that meets all compliance requirements.",
      project: 'Payment Gateway',
      verified: true,
      longReview: 'In the financial sector, security and reliability are non-negotiable. Limitless understood this from day one and built a payment gateway that not only meets but exceeds industry standards. The system handles thousands of transactions per second with 99.99% uptime.',
    }
  ];

  const industries = ['all', 'Technology', 'Retail', 'Logistics', 'Education', 'Finance'];
  const ratings = ['all', '5', '4', '3'];

  const filteredTestimonials = testimonials.filter(t => {
    const matchesRating = selectedRating === 'all' || t.rating.toString() === selectedRating;
    const matchesIndustry = selectedIndustry === 'all' || t.industry === selectedIndustry;
    return matchesRating && matchesIndustry;
  });

  const averageRating = 5.0;
  const totalReviews = 156;

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
      <div className="relative min-h-screen bg-dark-900 overflow-hidden selection:bg-primary-500/30">
        {/* Background Layers */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 right-[-10%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6">
           <div className="max-w-7xl mx-auto text-center">
              <motion.div 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <Sparkles className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Success Chronicles — Client Testimonials</span>
              </motion.div>

              <motion.h1 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic"
              >
                 High-Trust <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Synthesis</span>
              </motion.h1>

              <motion.p 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
              >
                 Empirical evidence of architectural transformation. Real-world validation from industry leaders who have scaled with Limitless.
              </motion.p>

              {/* Trust Dashboard */}
              <motion.div 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              >
                 {[
                   { label: 'Network Integrity', value: '100%', detail: 'Verified Satisfaction', icon: CheckCircle2 },
                   { label: 'Structural Rank', value: '5.0', detail: 'Global Avg Rating', icon: Star },
                   { label: 'Active Alliances', value: '150+', detail: 'Global Partners', icon: Activity }
                 ].map((stat, idx) => (
                   <div key={idx} className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                      <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                      <div className="text-4xl font-black text-white mb-2 tracking-tighter italic">{stat.value}</div>
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.detail}</div>
                   </div>
                 ))}
              </motion.div>
           </div>
        </section>

        {/* Filtering & Feed */}
        <section className="py-24 px-6 relative z-10">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl">
                 <div className="flex flex-wrap items-center gap-8">
                    <div className="flex items-center gap-4">
                       <Filter className="w-4 h-4 text-gray-600" />
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Protocol Filter:</span>
                    </div>
                    <select 
                       value={selectedIndustry}
                       onChange={e => setSelectedIndustry(e.target.value)}
                       className="bg-dark-900/50 border border-white/10 text-white p-3 rounded-xl text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary-500/30 outline-none cursor-pointer"
                    >
                       {industries.map(i => <option key={i} value={i}>{i === 'all' ? 'Every Industry' : i}</option>)}
                    </select>
                    <select 
                       value={selectedRating}
                       onChange={e => setSelectedRating(e.target.value)}
                       className="bg-dark-900/50 border border-white/10 text-white p-3 rounded-xl text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary-500/30 outline-none cursor-pointer"
                    >
                       {ratings.map(r => <option key={r} value={r}>{r === 'all' ? 'All Ratings' : `${r} Star Signal`}</option>)}
                    </select>
                 </div>

                 <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    Showing <span className="text-white italic">{filteredTestimonials.length}</span> Active Nodes
                 </div>
              </div>

              {/* Feed Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <AnimatePresence mode="popLayout">
                    {filteredTestimonials.map((testimonial, index) => (
                       <motion.div
                         key={testimonial.id}
                         layout
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.95 }}
                         transition={{ duration: 0.4 }}
                         className="group p-10 rounded-[48px] bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden h-fit"
                       >
                          <div className="relative z-10">
                             <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary-500/10 group-hover:text-primary-500/20 transition-colors" />
                             
                             <div className="flex items-start justify-between mb-10">
                                <div className="flex items-center gap-5">
                                   <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-primary-500 to-secondary-500 p-[1px]">
                                      <div className="w-full h-full rounded-[23px] bg-dark-900 flex items-center justify-center">
                                         <UserCircle2 className="w-8 h-8 text-white/50" />
                                      </div>
                                   </div>
                                   <div>
                                      <div className="flex items-center gap-2 mb-1">
                                         <h3 className="text-xl font-black text-white italic tracking-tight">{testimonial.name}</h3>
                                         {testimonial.verified && <CheckCircle2 className="w-4 h-4 text-primary-400" />}
                                      </div>
                                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{testimonial.role} @ {testimonial.company}</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-1">
                                   {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="w-3 h-3 text-primary-400 fill-current" />
                                   ))}
                                </div>
                             </div>

                             <div className="mb-0">
                                <p className="text-lg text-gray-300 font-medium leading-relaxed italic mb-8">
                                   "{expandedReview === testimonial.id ? testimonial.longReview : testimonial.text}"
                                </p>

                                <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/5">
                                   <div className="flex flex-wrap gap-4">
                                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                         <Zap className="w-3 h-3 text-secondary-400" />
                                         <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">{testimonial.project}</span>
                                      </div>
                                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                         <Calendar className="w-3 h-3 text-gray-600" />
                                         <span className="text-[8px] font-black text-gray-500 uppercase tracking-[0.2em]">{testimonial.date}</span>
                                      </div>
                                   </div>

                                   <button 
                                      onClick={() => setExpandedReview(expandedReview === testimonial.id ? null : testimonial.id)}
                                      className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:text-primary-400 transition-colors group/btn"
                                   >
                                      {expandedReview === testimonial.id ? 'Contract Analysis' : 'Expand Analysis'}
                                      <ChevronDown className={`w-3 h-3 transition-transform ${expandedReview === testimonial.id ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
                                   </button>
                                </div>
                             </div>
                          </div>
                          {/* Ambient pattern */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl rounded-full" />
                       </motion.div>
                    ))}
                 </AnimatePresence>
              </div>

              {filteredTestimonials.length === 0 && (
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="text-center py-32 bg-white/5 rounded-[64px] border border-dashed border-white/10 mt-12"
                >
                   <UserCircle2 className="w-16 h-16 text-gray-700 mx-auto mb-6" />
                   <h3 className="text-2xl font-black text-white italic mb-2">Zero Synchronized Nodes</h3>
                   <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Adjust parameters to localize specific credentials.</p>
                </motion.div>
              )}
           </div>
        </section>

        {/* Global Success Metrics */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                 {[
                   { icon: Building2, label: 'Enterprise Adoptions', val: '42' },
                   { icon: Activity, label: 'Success Velocity', val: '98%' },
                   { icon: Monitor, label: 'Systemic Uptime', val: '99.9%' },
                   { icon: CheckCircle2, label: 'Audit Integrity', val: 'Pristine' }
                 ].map((metric, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="relative group"
                   >
                      <metric.icon className="w-10 h-10 text-gray-700 mx-auto mb-6 group-hover:text-primary-500 transition-colors" />
                      <div className="text-5xl font-black text-white italic tracking-tighter mb-2">{metric.val}</div>
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">{metric.label}</div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Final CTA Matrix */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Initiate Your <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Chronicle</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our architectural team is ready to design your success trajectory. Join the elite network of synchronized enterprises.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Start Transformation
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3 group">
                       View Case Portfolios <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default Testimonials;
