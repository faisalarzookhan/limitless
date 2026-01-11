import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  Database, 
  BarChart3, 
  Zap, 
  Cloud, 
  ShieldCheck, 
  Briefcase, 
  Globe, 
  Layers, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Users,
  Server,
  Puzzle,
  Camera,
  RefreshCw,
  Trophy
} from 'lucide-react';
import ErrorBoundary from '../../components/ErrorBoundary';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const mainServices = [
    {
      id: 'web',
      icon: Code2,
      title: 'Web Development',
      subtitle: 'Powerful, Responsive, and Scalable Web Solutions',
      description: 'Transform your digital presence with cutting-edge web applications using React, Next.js, Node.js, and modern frameworks that drive business growth.',
      color: 'primary',
      features: [
        'Responsive & Mobile-First Design',
        'SEO Optimization',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Custom Web Applications',
        'API Development & Integration'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Native and Cross-Platform Mobile Excellence',
      description: 'Build powerful mobile applications using React Native, Flutter, and Swift that engage users and drive business success across all platforms.',
      color: 'secondary',
      features: [
        'Native iOS & Android Development',
        'Cross-Platform Solutions (React Native, Flutter)',
        'Intuitive UI/UX Design',
        'Push Notifications & Cloud Messaging',
        'In-App Purchases',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      id: 'software',
      icon: Cpu,
      title: 'Custom Software & Systems',
      subtitle: 'Tailored Solutions for Your Unique Needs',
      description: 'Get bespoke software solutions built with Python, Java, and microservices architecture designed specifically for your business processes.',
      color: 'brand',
      features: [
        'Custom Application Development',
        'Legacy System Modernization',
        'System Integration',
        'Enterprise Resource Planning (ERP)',
        'Workflow Automation',
        'Data Migration Services'
      ],
      technologies: ['Python', 'Java', '.NET', 'Docker', 'Kubernetes']
    },
    {
      id: 'crm',
      icon: BarChart3,
      title: 'CRM & Task Management',
      subtitle: 'Manage Relationships, Optimize Operations',
      description: 'Custom CRM and task management systems that help you track customers, manage leads, automate workflows, and boost productivity.',
      color: 'primary',
      features: [
        'Lead & Opportunity Tracking',
        'Sales Pipeline Management',
        'Task & Project Management',
        'Team Collaboration Tools',
        'Automated Workflows',
        'Custom Reports & Dashboards'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets']
    }
  ];

  const additionalServices = [
    { icon: Globe, title: 'IoT Solutions', description: 'Connect physical devices to the digital world.' },
    { icon: Server, title: 'Network Setup', description: 'Enterprise-grade equipment for secure connectivity.' },
    { icon: Database, title: 'Server Infra', description: 'Robust server setups using AWS, Azure, and GCP.' },
    { icon: Puzzle, title: 'UI/UX Design', description: 'Intuitive and engaging user experiences.' },
    { icon: Camera, title: 'Branding', description: 'Build a strong visual identity for your brand.' },
    { icon: Cloud, title: 'Cloud Hosting', description: 'Secure, scalable cloud hosting with DevOps.' },
    { icon: RefreshCw, title: 'Support', description: 'Keep your systems running flawlessly 24/7.' },
    { icon: TrendingUp, title: 'Digital Marketing', description: 'Grow your online presence with data-driven strategies.' }
  ];

  const processStages = [
    { number: '01', title: 'Discovery', icon: Search, description: 'Deep dive into your requirements and goals.' },
    { number: '02', title: 'Design', icon: Sparkles, description: 'Creating the blueprint for your digital solution.' },
    { number: '03', title: 'Develop', icon: Code2, description: 'Building with precision and cutting-edge tech.' },
    { number: '04', title: 'Deploy', icon: Zap, description: 'Launching and scaling for maximum impact.' }
  ];

  return (
    <ErrorBoundary>
      <Helmet>
        <title>Services | Limitless Inotech</title>
        <meta name="description" content="Explore our premium range of technology solutions from web development to AI integration." />
      </Helmet>

      <div className="relative">
        {/* Ambient background glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-[-10%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">Limitless Possibilities</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Solutions that <br />
              <span className="bg-gradient-to-r from-primary-400 via-primary-200 to-secondary-400 bg-clip-text text-transparent">
                Redefine Success
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end technology services designed to empower your business with high-performance, secure, and scalable digital solutions.
            </motion.p>
          </motion.div>
        </section>

        {/* Main Services Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <div className={`relative aspect-square md:aspect-video rounded-4xl overflow-hidden bg-gradient-to-br ${
                    service.color === 'primary' ? 'from-primary-600/20 to-primary-900/40' : 
                    service.color === 'secondary' ? 'from-secondary-600/20 to-secondary-900/40' : 
                    'from-brand-600/20 to-brand-900/40'
                  } border border-white/10 group overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className={`w-32 h-32 ${
                        service.color === 'primary' ? 'text-primary-400' : 
                        service.color === 'secondary' ? 'text-secondary-400' : 
                        'text-brand-400'
                      } opacity-20 group-hover:scale-110 transition-transform duration-700`} />
                    </div>
                    {/* Floating accents */}
                    <div className="absolute top-10 left-10 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl animate-float">
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-primary-400" />)}
                      </div>
                    </div>
                    <div className="absolute bottom-10 right-10 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl animate-float-delayed">
                      <Code2 className="w-6 h-6 text-secondary-400" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h2>
                    <p className="text-xl text-primary-400/80 font-medium">{service.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed text-lg">{service.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {service.technologies.map(tech => (
                      <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link to="/get-started" className={`inline-flex items-center gap-2 text-lg font-bold ${
                      service.color === 'primary' ? 'text-primary-400' : 
                      service.color === 'secondary' ? 'text-secondary-400' : 
                      'text-brand-400'
                    } group`}>
                      Learn more about {service.title}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">Extended Expertise</h2>
                <p className="text-gray-400">Complementary services to build your complete digital ecosystem</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-primary-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Stage */}
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold">Our Execution Workflow</h2>
                    <p className="text-gray-400">How we bring your vision to life from initial concept to launch</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {processStages.map((stage, index) => (
                        <div key={index} className="relative group">
                            {index < 3 && (
                                <div className="hidden md:block absolute top-[60px] left-1/2 w-full h-[1px] bg-white/10 -z-10" />
                            )}
                            <div className="text-center space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mx-auto group-hover:bg-primary-500 transition-colors duration-500">
                                    <stage.icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-primary-400 font-bold text-xs uppercase tracking-widest">{stage.number}</span>
                                    <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed px-4">{stage.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-primary-600/30 to-secondary-600/30 border border-white/20 backdrop-blur-2xl text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Something Truly Limitless?</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/get-started" className="px-10 py-4 bg-white text-dark-900 font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl shadow-white/10 inline-flex items-center gap-2 group">
                  Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all">
                  Get in Touch
                </Link>
              </div>
            </div>
            {/* Visual background sparkle */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-400/20 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Services;