import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Box, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Server, 
  TrendingUp, 
  Clock, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Search,
  Bot
} from 'lucide-react';

import AnimatedElement from '../../components/ui/components/AnimatedElement';
import DuoToneIcon from '../../components/ui/components/DuoToneIcon';
import ErrorBoundary from '../../components/ErrorBoundary';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const coreServices = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Responsive, scalable, and SEO-optimized websites built with cutting-edge technologies.',
      color: 'from-[#1ba6d6] to-[#0e1114]',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'from-[#1ba6d6] to-[#0e1114]',
    },
    {
      icon: Box,
      title: 'Custom Software & Systems',
      description:
        'Tailored software solutions designed to meet your unique business requirements.',
      color: 'from-[#1ba6d6] to-[#0e1114]',
    },
    {
      icon: BarChart3,
      title: 'CRM & Task Management',
      description:
        'Powerful systems to manage customer relationships and streamline business operations.',
      color: 'from-[#1ba6d6] to-[#0e1114]',
    },
    {
      icon: Zap,
      title: 'Business Automation & AI',
      description:
        'Intelligent automation solutions that transform operations and boost productivity.',
      color: 'from-[#1ba6d6] to-[#0e1114]',
    },
    {
      icon: Server,
      title: 'Enterprise SaaS Products',
      description:
        'Production-ready software solutions including TrackIT, HR-IMS, WorkTrack, and more.',
      color: 'from-[#1ba6d6] to-[#0e1114]',
    },
  ];

  const featuredProducts = [
    {
      id: 'trackit',
      name: 'TrackIT',
      description: 'IT Asset Management System',
      icon: Server,
      color: 'from-[#1ba6d6] to-[#0e1114]',
      users: '500+',
      link: '/products',
    },
    {
      id: 'hrims',
      name: 'HR-IMS',
      description: 'HR Management System',
      icon: Users,
      color: 'from-[#ffc957] to-[#0e1114]',
      users: '2,000+',
      link: '/products',
      popular: true,
    },
    {
      id: 'worktrack',
      name: 'WorkTrack',
      description: 'Workforce Management',
      icon: Clock,
      color: 'from-[#1ba6d6] to-[#0e1114]',
      users: '1,500+',
      link: '/products',
    },
    {
      id: 'ittms',
      name: 'IT-TMS',
      description: 'IT Ticket Management',
      icon: BarChart3,
      color: 'from-[#1ba6d6] to-[#0e1114]',
      users: '800+',
      link: '/products',
    },
  ];

  const successStories = [
    {
      id: 'ivolex',
      title: 'IVOLEX',
      subtitle: 'Enterprise ERP System',
      description:
        'Custom enterprise resource planning system that improved efficiency by 60% across 15 locations.',
      results: [
        { label: 'Efficiency', value: '+60%' },
        { label: 'Automation', value: '80%' },
        { label: 'Users', value: '500+' },
      ],
      link: '/portfolio/101',
      color: 'from-[#2563eb] to-[#1e40af]',
    },
    {
      id: 'wakilni',
      title: 'Wakilni',
      subtitle: 'Legal Services Platform',
      description:
        'Comprehensive platform connecting 500+ lawyers with 10,000+ clients across the region.',
      results: [
        { label: 'Lawyers', value: '500+' },
        { label: 'Clients', value: '10K+' },
        { label: 'Satisfaction', value: '95%' },
      ],
      link: '/portfolio/102',
      color: 'from-[#ffc957] to-[#ffbd3a]',
    },
  ];

  const whyLimitless = [
    {
      icon: ShieldCheck,
      title: 'Total Security',
      description:
        'Enterprise-grade security protocols with bank-level encryption and SOC2 compliance standards.',
    },
    {
      icon: Box,
      title: '7+ Production-Ready Products',
      description:
        'Complete suite of SaaS products serving 10,000+ users worldwide, from IT management to HR systems.',
    },
    {
      icon: Sparkles,
      title: 'True Uniqueness',
      description:
        'Every solution is custom-crafted to reflect your brand identity and meet your specific business needs.',
    },
    {
      icon: Server,
      title: 'Reliability & Scalability',
      description:
        'Built to grow with your business, our solutions handle increased demand without compromising performance.',
    },
    {
      icon: TrendingUp,
      title: 'Speed + Performance',
      description:
        'Lightning-fast applications optimized for peak performance, delivering exceptional user experiences.',
    },
    {
      icon: Clock,
      title: 'Smart & Future-Ready',
      description:
        'Forward-thinking solutions leveraging AI and emerging technologies to keep you ahead of the curve.',
    },
    {
      icon: Users,
      title: 'Royal Client Experience',
      description:
        'White-glove service with dedicated support, ensuring your success is our top priority at every step.',
    },
  ];

  const clientLogos = [
    { name: 'IVOLEX', logo: null, category: 'Enterprise' },
    { name: 'Wakilni', logo: null, category: 'LegalTech' },
    { name: 'TechVision', logo: null, category: 'Technology' },
    { name: 'StyleHub', logo: null, category: 'E-commerce' },
    { name: 'LogiTrack', logo: null, category: 'Logistics' },
    { name: 'EduLearn', logo: null, category: 'Education' },
    { name: 'HealthCare Plus', logo: null, category: 'Healthcare' },
    { name: 'SecurePay', logo: null, category: 'FinTech' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechVision Solutions',
      image: null,
      rating: 5,
      text: 'Limitless transformed our business with a custom CRM system. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40%!',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, StyleHub Fashion',
      image: null,
      rating: 5,
      text: 'The e-commerce platform they built for us is stunning and incredibly efficient. Sales have tripled since launch. Highly recommend their services!',
    },
    {
      name: 'Ahmed Ali',
      role: 'Operations Manager, LogiTrack',
      image: null,
      rating: 5,
      text: "Outstanding mobile app development! The app is intuitive, fast, and our clients love it. The team's expertise in automation saved us countless hours.",
    },
    {
      name: 'Sneha Patel',
      role: 'Director, EduLearn Academy',
      image: null,
      rating: 5,
      text: 'Working with Limitless was a game-changer. They built a complete learning management system that exceeded all our requirements. True professionals!',
    },
  ];

  const faqs = [
    {
      question: 'What services does Limitless Infotech Solution offer?',
      answer:
        'We offer comprehensive technology solutions including Web Development, Mobile App Development, Custom Software & Systems, CRM & Task Management Apps, Business Automation & AI Integration, IoT Solutions, Network Installation, and Server Setup. Each service is tailored to meet your specific business needs.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications may take 2-4 months. Mobile apps generally require 3-6 months, and custom enterprise software can take 3-12 months. We provide detailed timelines during the planning phase and keep you updated throughout development.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We work with cutting-edge technologies including React, Vue, Angular, Next.js for frontend; Node.js, Python, PHP, .NET for backend; React Native and Flutter for mobile apps; MongoDB, PostgreSQL, MySQL for databases; and AWS, Azure, Google Cloud for cloud infrastructure. We choose the best technology stack for each project based on your specific requirements.',
    },
    {
      question: 'Do you provide post-launch support and maintenance?',
      answer:
        'Yes! We offer comprehensive post-launch support including 24/7 technical assistance, regular updates and maintenance, bug fixes, security patches, performance monitoring, and training. We ensure your systems continue to operate flawlessly and stay up-to-date with the latest technologies.',
    },
    {
      question: 'How much does a project cost?',
      answer:
        'Project costs vary based on scope, complexity, timeline, and required features. We believe in transparent pricing and provide detailed quotes after understanding your requirements. Fill out our client requirements form or contact us directly for a personalized quote tailored to your budget and needs.',
    },
    {
      question: 'Can you work with our existing systems?',
      answer:
        'Absolutely! We specialize in integrating with existing systems and can enhance, upgrade, or build upon your current infrastructure. Whether you need to modernize legacy systems or add new features, our team has the expertise to ensure seamless integration.',
    },
    {
      question:
        'What makes Limitless different from other development companies?',
      answer:
        "Our commitment to Total Security, True Uniqueness, and Royal Client Experience sets us apart. We don't just build software – we create transformative solutions that are secure, scalable, and truly unique to your business. Our dedicated team provides white-glove service, ensuring your success at every step.",
    },
    {
      question: 'Do you offer custom CRM solutions?',
      answer:
        'Yes! We specialize in custom CRM development tailored to your business processes. Our CRM solutions include customer management, sales tracking, lead management, automated workflows, reporting and analytics, and seamless integration with your existing tools. We build systems that adapt to your needs, not the other way around.',
    },
  ];

  const toggleFaq = index => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <ErrorBoundary>
      <>
      <Helmet>
        <title>Limitless Infotech Solution - Enterprise Digital Excellence</title>
        <meta name="description" content="Transform your business with architectural-grade digital solutions. We are the architects of transformation, building tomorrow's technology today." />
        <meta name="keywords" content="web development, mobile app development, custom software, CRM, business automation, AI integration, enterprise solutions" />
        <meta name="author" content="Limitless Infotech Solution" />
        <meta property="og:title" content="Limitless Infotech Solution - Enterprise Digital Excellence" />
        <meta property="og:description" content="Transform your business with architectural-grade digital solutions. We are the architects of transformation, building tomorrow's technology today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.limitlessinfotech.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Limitless Infotech Solution - Enterprise Digital Excellence" />
        <meta name="twitter:description" content="Transform your business with architectural-grade digital solutions. We are the architects of transformation, building tomorrow's technology today." />
        <link rel="canonical" href="https://www.limitlessinfotech.com" />
      </Helmet>
      <div className="min-h-screen font-sans bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0b0d] via-[#1e293b] to-[#0f172a]">
        {/* Asymmetrical background elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#2563eb]/10 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-2/5 h-2/3 bg-gradient-to-l from-[#ffc957]/10 to-transparent"></div>

        {/* Geometric pattern derived from logo architecture */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-16 h-16 border-l-4 border-b-4 border-[#2563eb] rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-r-4 border-t-4 border-[#ffc957] rotate-12"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 border-t-4 border-r-4 border-[#2563eb] -rotate-12"></div>

          {/* Additional architectural elements */}
          <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-[#2563eb] to-[#ffc957]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-[#2563eb] rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-24 bg-gradient-to-b from-[#2563eb] to-transparent"></div>
          <div className="absolute top-1/4 right-1/3 w-24 h-2 bg-gradient-to-r from-[#ffc957] to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl mb-8 border border-white/10 group hover:border-[#1ba6d6]/50 transition-all duration-500">
                <Sparkles className="w-5 h-5 text-[#1ba6d6] group-hover:animate-pulse" />
                <span className="text-[0.65rem] font-black text-white uppercase tracking-[0.3em]">
                  Mission-Critical Innovation
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 text-white leading-[0.9] tracking-tighter">
                ARCHITECTING{' '}
                <span className="text-[#1ba6d6] drop-shadow-[0_0_15px_rgba(27,166,214,0.3)]">
                  ENTERPRISE
                </span>
                <br />
                DIGITAL{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
                  EXCELLENCE
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm md:text-base text-[#94a3b8] mb-12 max-w-lg leading-relaxed uppercase tracking-widest opacity-80">
                Transform your architecture with neural-grade digital
                solutions. We are the orchestrators of transformation, building
                the nexus of tomorrow today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                <Link to="/get-started" className="px-10 py-5 bg-[#1ba6d6] text-white text-xs font-black uppercase tracking-[0.3em] mask-btn hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)] flex items-center group">
                  Begin Strategic Nexus
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="px-10 py-5 border border-white/10 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-md"
                >
                  Explore Core Protocols
                </Link>
              </div>

              {/* Stats - Asymmetrical grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: '50+', label: 'Enterprise Solutions' },
                  { number: '7', label: 'SaaS Products' },
                  { number: '10K+', label: 'Users' },
                  { number: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-[#0a0b0d]/50 backdrop-blur-sm rounded-xl border border-[#2563eb]/30"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#e2e8f0] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs text-[#94a3b8] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual element - right side */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-[#ffc957]/20 to-transparent rounded-3xl rotate-6"></div>
                <div className="relative bg-[#0a0b0d]/80 backdrop-blur-sm p-8 rounded-3xl border-2 border-[#2563eb]/30 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                      <div className="h-2 bg-[#2563eb]/30 rounded w-3/4"></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#ffc957] rounded-full"></div>
                      <div className="h-2 bg-[#2563eb]/30 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#0a0b0d] rounded-full"></div>
                      <div className="h-2 bg-[#2563eb]/30 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center gap-2 group">
          <span className="text-[0.5rem] text-[#94a3b8] uppercase tracking-[0.5em] font-black group-hover:text-white transition-colors">Observe</span>
          <ChevronDown className="w-6 h-6 text-[#1ba6d6]" />
        </div>
      </section>

      {/* Foundation/About Section - Asymmetrical */}
      <section className="section-padding bg-[#0a0b0d] relative overflow-hidden">
        {/* Architectural background elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-[#2563eb] opacity-30"></div>
          <div className="absolute bottom-1/3 right-20 w-16 h-16 border-2 border-[#ffc957] opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-32 bg-gradient-to-b from-[#2563eb]/20 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-2 bg-gradient-to-r from-[#ffc957]/20 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#2563eb]/20 to-[#ffc957]/10 rounded-3xl -rotate-3"></div>
                <div className="relative bg-[#2563eb] text-white p-8 rounded-3xl">
                  <div className="text-6xl font-bold text-[#ffc957] mb-4">
                    15+
                  </div>
                  <div className="text-lg font-semibold">
                    Years of Excellence
                  </div>
                  <div className="text-sm opacity-80 mt-2">
                    Enterprise Architecture Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white tracking-tighter uppercase">
                Our Neural{' '}
                <span className="text-[#1ba6d6] drop-shadow-[0_0_10px_rgba(27,166,214,0.3)]">
                  Architectural
                </span>{' '}
                Foundation
              </h2>
              <p className="text-sm text-[#94a3b8] leading-[1.8] mb-8 uppercase tracking-widest opacity-80 font-medium">
                At Limitless Infotech Solution, we are the architects of the next paradigm. We believe that technology should empower, not complicate.
                Every line of code we write, every system we build, is crafted
                with high-fidelity precision and neural security.
              </p>
              <p className="text-sm text-[#94a3b8] leading-[1.8] uppercase tracking-widest opacity-60 font-medium">
                Our vision is to blueprint the next era of intelligent
                business ecosystems, where innovation meets the speed of light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section - Asymmetrical Grid */}
      <section
        className="section-padding bg-[#0a0b0d]/50 relative overflow-hidden"
        aria-labelledby="core-services-heading"
      >
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#2563eb]/30 rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-[#ffc957]/30 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-2 bg-gradient-to-r from-[#2563eb]/20 to-[#ffc957]/20"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-40 bg-gradient-to-b from-[#ffc957]/20 to-[#2563eb]/20"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2
              id="core-services-heading"
              className="text-4xl lg:text-7xl font-black mb-6 text-white tracking-tighter uppercase"
            >
              Core{' '}
              <span className="text-[#1ba6d6]">
                Capabilities
              </span>
            </h2>
            <p className="text-xs text-[#94a3b8] uppercase tracking-[0.4em] font-black opacity-60">
              Advanced neural infrastructures for enterprise evolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`lg:col-span-4 rounded-3xl transition-all duration-500 flex flex-col h-full border border-white/5 bg-[#1ba6d6]/5 backdrop-blur-3xl p-10 group hover:border-[#1ba6d6]/30 ${
                  index === 1 ? 'lg:col-start-2 lg:row-start-1' : ''
                }`}
                role="listitem"
              >
                <div
                  className={`w-14 h-14 bg-[#1ba6d6] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(27,166,214,0.3)] group-hover:shadow-[0_0_30px_rgba(27,166,214,0.5)] transition-all`}
                  aria-hidden="true"
                >
                  <service.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-black mb-4 text-white uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#94a3b8] text-xs uppercase tracking-wider leading-relaxed mb-8 flex-grow opacity-80">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-[#1ba6d6] text-[0.6rem] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300"
                >
                  Initialize Protocol
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
          </div>

          <div className="text-center mt-20">
            <Link to="/services" className="px-12 py-5 bg-[#1ba6d6] text-white text-xs font-black uppercase tracking-[0.4em] mask-btn hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)]">
              View Deployment Map
            </Link>
          </div>
        </div>
      </section>

      {/* Why Limitless Section - Editorial Layout */}
      <section
        className="section-padding bg-[#0a0b0d] relative overflow-hidden"
        aria-labelledby="why-limitless-heading"
      >
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/5 w-24 h-24 border-t-2 border-l-2 border-[#2563eb]/30 rotate-12"></div>
          <div className="absolute top-1/4 right-1/5 w-16 h-16 border-b-2 border-r-2 border-[#ffc957]/30 -rotate-12"></div>
          <div className="absolute bottom-1/5 left-1/4 w-32 h-2 bg-gradient-to-r from-[#2563eb]/15 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-24 bg-gradient-to-b from-[#ffc957]/15 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <h2
                id="why-limitless-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white"
              >
                Why Choose{' '}
                <span className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent">
                  Limitless
                </span>
              </h2>
              <p className="text-lg text-[#94a3b8]">
                Our core qualities and competitive advantages that set us apart
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyLimitless.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-[#0a0b0d]/30 border border-[#2563eb]/30 relative overflow-hidden"
                  >
                    <div className="w-12 h-12 bg-[#2563eb]/20 rounded-lg flex items-center justify-center mb-4">
                      <DuoToneIcon
                        icon={item.icon}
                        size="lg"
                        primaryColor="text-[#2563eb]"
                        secondaryColor="text-[#2563eb]/30"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-[#cbd5e1] text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Asymmetrical Logo Grid */}
      <section className="section-padding bg-[#0a0b0d]/50 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-[#2563eb]/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/6 w-16 h-16 border-2 border-[#ffc957]/20 rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-36 h-2 bg-gradient-to-r from-[#2563eb]/10 to-[#ffc957]/10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-32 bg-gradient-to-b from-[#ffc957]/10 to-[#2563eb]/10"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Trusted By{' '}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their
              businesses with our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-white">
                  {client.name}
                </span>
                <span className="text-xs text-[#94a3b8]">
                  {client.category}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-[#94a3b8] text-sm">
              <span>Trusted by industry leaders worldwide</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4 text-[#ffc957]" />
                ))}
              </div>
              <span>4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Asymmetrical Layout */}
      <section className="section-padding bg-[#0a0b0d] border-t border-[#2563eb]/30 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/4 w-28 h-28 border-2 border-[#2563eb]/25 rotate-12"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-[#ffc957]/25 -rotate-12"></div>
          <div className="absolute bottom-1/5 left-1/3 w-40 h-2 bg-gradient-to-r from-[#2563eb]/15 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-36 bg-gradient-to-b from-[#ffc957]/15 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent">
                Enterprise Products
              </span>
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Production-ready SaaS solutions serving 10,000+ users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`lg:col-span-3 rounded-2xl p-6 border-2 border-[#2563eb]/30 bg-[#0a0b0d]/50 relative overflow-hidden ${
                  index === 1 ? 'lg:col-start-3 lg:row-start-1' : ''
                }`}
              >
                <Link to={product.link}>
                  {product.popular && (
                    <div className="absolute -top-3 right-4">
                      <span className="bg-gradient-to-r from-[#ffc957] to-[#ffbd3a] px-3 py-1 rounded-full text-xs font-semibold text-[#0a0b0d] flex items-center">
                        <HiStar className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 self-start`}
                  >
                    <DuoToneIcon
                      icon={product.icon}
                      size="lg"
                      primaryColor="text-white"
                      secondaryColor="text-white/30"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#cbd5e1] mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#94a3b8]">
                      {product.users} users
                    </span>
                    <HiArrowRight className="w-5 h-5 text-[#ffc957]" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/products" className="px-12 py-5 bg-[#1ba6d6] text-white text-xs font-black uppercase tracking-[0.4em] mask-btn hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)] inline-flex items-center group">
              View All 7 Products
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Editorial Layout */}
      <section className="section-padding bg-[#0a0b0d]/50">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Client{' '}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Transforming businesses with innovative custom solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-3xl rounded-3xl overflow-hidden border border-white/10 group hover:border-[#1ba6d6]/30 transition-all duration-500"
              >
                <Link to={story.link}>
                  <div className={`h-2 bg-[#1ba6d6] shadow-[0_0_15px_rgba(27,166,214,0.3)]`}></div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black mb-2 text-white uppercase tracking-tighter">
                      {story.title}
                    </h3>
                    <p className="text-[#1ba6d6] text-[0.6rem] font-black uppercase tracking-[0.2em] mb-6 opacity-80">
                      {story.subtitle}
                    </p>
                    <p className="text-[#94a3b8] text-xs uppercase tracking-[0.1em] mb-8 leading-relaxed opacity-70">
                      {story.description}
                    </p>
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-black text-white mb-1 uppercase">
                            {result.value}
                          </div>
                          <div className="text-[0.5rem] text-[#94a3b8] uppercase tracking-widest font-black opacity-60">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center text-[#1ba6d6] text-[0.6rem] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300">
                      Decipher Intelligence
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/portfolio" className="px-12 py-5 border border-white/10 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white/5 hover:border-[#1ba6d6]/30 transition-all duration-500 backdrop-blur-md inline-block">
              Analyze Full Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Asymmetrical Grid */}
      <section className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1e293b]">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-7xl font-black mb-6 text-white tracking-tighter uppercase text-center">
              Client{' '}
              <span className="text-[#1ba6d6]">
                Transmissions
              </span>
            </h2>
            <p className="text-xs text-[#94a3b8] uppercase tracking-[0.4em] font-black opacity-60 text-center">
              Verified experiences from the Limitless network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-3xl rounded-3xl p-10 border border-white/10 flex flex-col h-full group hover:border-[#1ba6d6]/30 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#1ba6d6] fill-[#1ba6d6] mr-1" />
                  ))}
                </div>

                <p className="text-[#94a3b8] mb-8 text-sm uppercase tracking-widest leading-relaxed italic opacity-80 flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4 pt-8 border-t border-white/5">
                  <div className="w-12 h-12 bg-[#1ba6d6] rounded-xl flex items-center justify-center text-white font-black text-lg shadow-[0_0_15px_rgba(27,166,214,0.3)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-white text-xs uppercase tracking-widest mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-[0.6rem] text-[#1ba6d6] font-black uppercase tracking-[0.2em] opacity-60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="px-10 py-4 border border-white/10 text-white text-[0.6rem] font-black uppercase tracking-[0.3em] hover:bg-white/5 hover:border-[#1ba6d6]/30 transition-all duration-500 backdrop-blur-md inline-block"
            >
              View Full Network Feed
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Editorial Layout */}
      <section className="section-padding bg-[#0a0b0d]">
        <div className="container-custom max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
              Neural{' '}
              <span className="text-[#1ba6d6]">
                Archive
              </span>
            </h2>
            <p className="text-xs text-[#94a3b8] uppercase tracking-[0.4em] font-black opacity-60">
              Query resolution for the Limitless architecture
            </p>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className="border border-white/5 bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-[#1ba6d6]/30 transition-all duration-500"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <h3 className="text-xs font-black text-white uppercase tracking-widest pr-4 group-hover:text-[#1ba6d6] transition-colors">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#1ba6d6] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#94a3b8] flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-[#94a3b8] text-xs uppercase tracking-wider leading-relaxed opacity-80">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6] to-[#0e1114]"></div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12 text-center">
              <h2 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase leading-[0.9]">
                Ready to Initialize<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">The Deployment?</span>
              </h2>
              <p className="text-sm md:text-base text-white/60 mb-12 max-w-2xl mx-auto uppercase tracking-widest leading-relaxed font-black">
                Architectural Excellence is a choice. Initialize the nexus protocol today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/get-started"
                  className="px-12 py-6 bg-white text-[#0e1114] text-xs font-black uppercase tracking-[0.4em] mask-btn hover:scale-105 transition-all duration-500 shadow-2xl flex items-center group"
                >
                  Begin Strategy
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-12 py-6 border-2 border-white/20 text-white text-xs font-black uppercase tracking-[0.4em] hover:bg-white/10 transition-all duration-500"
                >
                  Schedule Meet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </>
    </ErrorBoundary>
  );
};

export default Home;