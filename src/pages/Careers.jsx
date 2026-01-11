import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  CircleDollarSign,
  Users,
  GraduationCap,
  Zap,
  Heart,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Search,
  Filter,
  Sparkles,
  Code2,
  Smartphone,
  BarChart3,
  Palette,
  Headphones,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales & Marketing' },
    { value: 'support', label: 'Client Success' },
    { value: 'operations', label: 'Operations' },
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'mumbai', label: 'Mumbai Hub' },
    { value: 'remote', label: 'Global Remote' },
    { value: 'hybrid', label: 'Hybrid' },
  ];

  const jobTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'full-time', label: 'Full-Time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Fellowship' },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Systems Architect',
      department: 'engineering',
      location: 'Mumbai Hub',
      type: 'full-time',
      experience: '5-8 years',
      salary: '₹18L - ₹28L per annum',
      description: 'Lead the architectural evolution of high-scale enterprise ecosystems and mentor rising engineering talent.',
      icon: Code2,
      color: 'primary',
      posted: '2 days ago',
      applicants: 45
    },
    {
      id: 2,
      title: 'Experience Designer (UX/UI)',
      department: 'design',
      location: 'Global Remote',
      type: 'full-time',
      experience: '3-5 years',
      salary: '₹12L - ₹18L per annum',
      description: 'Craft immersive digital narratives and glassmorphic interfaces for the next generation of enterprise tools.',
      icon: Palette,
      color: 'secondary',
      posted: '5 days ago',
      applicants: 32
    },
    {
      id: 3,
      title: 'Mobile Ecosystem Developer',
      department: 'engineering',
      location: 'Hybrid',
      type: 'full-time',
      experience: '3-5 years',
      salary: '₹14L - ₹22L per annum',
      description: 'Build high-performance React Native applications with a focus on real-time telemetry and architectural integrity.',
      icon: Smartphone,
      color: 'primary',
      posted: '1 week ago',
      applicants: 28
    },
    {
      id: 4,
      title: 'Growth Strategy Manager',
      department: 'sales',
      location: 'Mumbai Hub',
      type: 'full-time',
      experience: '5-7 years',
      salary: '₹20L - ₹30L per annum',
      description: 'Drive high-impact enterprise partnerships and expand the Limitless architectural footprint globally.',
      icon: BarChart3,
      color: 'secondary',
      posted: '3 days ago',
      applicants: 52
    }
  ];

  const benefits = [
    {
      icon: CircleDollarSign,
      title: 'Elite Capital',
      description: 'Top-tier compensation packages with equity and performance incentives.',
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'Vitality Care',
      description: 'Premium global health coverage for you and your chosen family.',
      color: 'secondary'
    },
    {
      icon: GraduationCap,
      title: 'Nexus Learning',
      description: 'Uncapped budget for certifications, masterclasses, and global summits.',
      color: 'primary'
    },
    {
      icon: Clock,
      title: 'Autonomous Flow',
      description: 'Output-based work culture with extreme flexibility and remote-first DNA.',
      color: 'secondary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">Architecting Careers</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Join the <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent italic">Collective</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              We aren't just building software; we're architecting the future of human-digital interaction. Your mission starts here.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
              <a href="#positions" className="px-10 py-4 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/20 flex items-center gap-2 group">
                Open Initiatives
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/about" className="px-10 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 backdrop-blur-xl transition-all">
                Our Philosophy
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* High-Impact Statistics */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[ { v: '20+', l: 'Countries' }, { v: '100%', l: 'Remote First' }, { v: '$0k+', l: 'Training Budget' }, { v: '0%', l: 'Overtime' } ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Perks & Benefits Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Elite Benefits</h2>
              <p className="text-gray-500">Engineered for your peak performance and well-being.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-primary-500/30 transition-all duration-500 group"
                >
                  <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center ${benefit.color === 'primary' ? 'bg-primary-500/10 text-primary-400' : 'bg-secondary-500/10 text-secondary-400'} border border-white/5 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings Control Panel */}
        <section id="positions" className="sticky top-20 z-40 px-6 py-6 bg-dark-900/60 backdrop-blur-xl border-y border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search roles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <select 
                value={selectedDepartment} 
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm text-gray-400 focus:outline-none hover:bg-white/10 transition-all"
              >
                {departments.map(d => <option key={d.value} value={d.value} className="bg-dark-900">{d.label}</option>)}
              </select>
              <select 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm text-gray-400 focus:outline-none hover:bg-white/10 transition-all"
              >
                {locations.map(l => <option key={l.value} value={l.value} className="bg-dark-900">{l.label}</option>)}
              </select>
            </div>
          </div>
        </section>

        {/* Job Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredJobs.map((job, index) => (
                    <motion.div
                      layout
                      key={job.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group p-8 rounded-4xl bg-white/5 border border-white/5 hover:border-primary-500/30 backdrop-blur-md transition-all duration-500"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="flex items-start gap-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${job.color === 'primary' ? 'bg-primary-500/10 text-primary-400' : 'bg-secondary-500/10 text-secondary-400'}`}>
                            <job.icon className="w-8 h-8" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                              <span className="flex items-center gap-1.5"><CircleDollarSign className="w-3.5 h-3.5" /> {job.salary}</span>
                            </div>
                            <p className="text-gray-400 max-w-2xl leading-relaxed">{job.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Link to={`/careers/apply/${job.id}`} className="px-8 py-4 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/20 whitespace-nowrap">
                            Initiate Application
                          </Link>
                          <div className="hidden lg:flex flex-col items-center gap-1 px-4">
                            <span className="text-xs font-bold text-gray-500">{job.applicants}</span>
                            <Users className="w-4 h-4 text-gray-600" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">No active initiatives found</h3>
                  <p className="text-gray-400">Try adjusting your filters or search keywords.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Custom Application CTA */}
        <section className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto p-16 md:p-24 rounded-[64px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Role not listed?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                We believe in architectural genius. If you think you belong in our collective, present your vision through a custom application.
              </p>
              <Link to="/contact" className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group w-full md:w-auto mx-auto inline-flex">
                Present Vision
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Careers;
