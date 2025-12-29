import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiShieldCheck,
  HiSparkles,
  HiServer,
  HiTrendingUp,
  HiClock,
  HiUserGroup,
  HiChevronDown,
  HiChevronUp,
  HiStar,
  HiCheckCircle,
  HiArrowRight,
  HiArrowSmLeft,
  HiArrowSmRight,
} from 'react-icons/hi';

import { AnimatedElement, DuoToneIcon } from '../components/ui';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const coreServices = [
    {
      icon: HiCode,
      title: 'Web Development',
      description:
        'Responsive, scalable, and SEO-optimized websites built with cutting-edge technologies.',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: HiDeviceMobile,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'from-blue-700 to-blue-900',
    },
    {
      icon: HiCube,
      title: 'Custom Software & Systems',
      description:
        'Tailored software solutions designed to meet your unique business requirements.',
      color: 'from-blue-800 to-blue-950',
    },
    {
      icon: HiChartBar,
      title: 'CRM & Task Management',
      description:
        'Powerful systems to manage customer relationships and streamline business operations.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: HiLightningBolt,
      title: 'Business Automation & AI',
      description:
        'Intelligent automation solutions that transform operations and boost productivity.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: HiServer,
      title: 'Enterprise SaaS Products',
      description:
        'Production-ready software solutions including TrackIT, HR-IMS, WorkTrack, and more.',
      color: 'from-blue-800 to-blue-900',
    },
  ];

  const featuredProducts = [
    {
      id: 'trackit',
      name: 'TrackIT',
      description: 'IT Asset Management System',
      icon: HiServer,
      color: 'from-blue-600 to-blue-800',
      users: '500+',
      link: '/products',
    },
    {
      id: 'hrims',
      name: 'HR-IMS',
      description: 'HR Management System',
      icon: HiUserGroup,
      color: 'from-amber-500 to-amber-600',
      users: '2,000+',
      link: '/products',
      popular: true,
    },
    {
      id: 'worktrack',
      name: 'WorkTrack',
      description: 'Workforce Management',
      icon: HiClock,
      color: 'from-blue-700 to-blue-900',
      users: '1,500+',
      link: '/products',
    },
    {
      id: 'ittms',
      name: 'IT-TMS',
      description: 'IT Ticket Management',
      icon: HiChartBar,
      color: 'from-blue-600 to-blue-700',
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
      color: 'from-blue-600 to-blue-800',
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
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const whyLimitless = [
    {
      icon: HiShieldCheck,
      title: 'Total Security',
      description:
        'Enterprise-grade security protocols with bank-level encryption and SOC2 compliance standards.',
    },
    {
      icon: HiCube,
      title: '7+ Production-Ready Products',
      description:
        'Complete suite of SaaS products serving 10,000+ users worldwide, from IT management to HR systems.',
    },
    {
      icon: HiSparkles,
      title: 'True Uniqueness',
      description:
        'Every solution is custom-crafted to reflect your brand identity and meet your specific business needs.',
    },
    {
      icon: HiServer,
      title: 'Reliability & Scalability',
      description:
        'Built to grow with your business, our solutions handle increased demand without compromising performance.',
    },
    {
      icon: HiTrendingUp,
      title: 'Speed + Performance',
      description:
        'Lightning-fast applications optimized for peak performance, delivering exceptional user experiences.',
    },
    {
      icon: HiClock,
      title: 'Smart & Future-Ready',
      description:
        'Forward-thinking solutions leveraging AI and emerging technologies to keep you ahead of the curve.',
    },
    {
      icon: HiUserGroup,
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
    <div className="min-h-screen font-sans">
      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 bg-architectural-grid">
        {/* Asymmetrical background elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-2/5 h-2/3 bg-gradient-to-l from-amber-500/10 to-transparent"></div>

        {/* Geometric pattern derived from logo architecture */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-16 h-16 border-l-4 border-b-4 border-blue-500 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-r-4 border-t-4 border-amber-500 rotate-12"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 border-t-4 border-r-4 border-blue-600 -rotate-12"></div>

          {/* Additional architectural elements */}
          <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-blue-500 to-amber-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-blue-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
          <div className="absolute top-1/4 right-1/3 w-24 h-2 bg-gradient-to-r from-amber-500 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-blue-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-blue-200 dark:border-blue-700">
                <HiSparkles className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                  Mission-Critical Innovation
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-blue-900 dark:text-white leading-tight">
                Architecting{' '}
                <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                  Enterprise
                </span>
                <br />
                Digital{' '}
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-blue-800 dark:text-blue-200 mb-12 max-w-lg leading-relaxed">
                Transform your business with architectural-grade digital
                solutions. We are the architects of transformation, building
                tomorrow's technology today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                <Link to="/get-started" className="mission-critical-button">
                  Begin Strategic Initiative
                  <HiArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-4 rounded-xl font-bold text-base tracking-wide border-2 border-blue-600 text-blue-700 dark:text-blue-200 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-all duration-300"
                >
                  Explore Enterprise Solutions
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
                    className="text-center p-4 bg-white/50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual element - right side */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl rotate-6"></div>
                <div className="relative bg-white/80 dark:bg-blue-900/80 backdrop-blur-sm p-8 rounded-3xl border-2 border-blue-300 dark:border-blue-600 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="h-2 bg-blue-200 dark:bg-blue-700 rounded w-3/4"></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <div className="h-2 bg-blue-200 dark:bg-blue-700 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                      <div className="h-2 bg-blue-200 dark:bg-blue-700 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <HiChevronDown className="w-8 h-8 text-blue-500" />
        </div>
      </section>

      {/* Foundation/About Section - Asymmetrical */}
      <section className="section-padding bg-white dark:bg-blue-900/50 relative overflow-hidden">
        {/* Architectural background elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-300 opacity-30"></div>
          <div className="absolute bottom-1/3 right-20 w-16 h-16 border-2 border-amber-400 opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-32 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-2 bg-gradient-to-r from-amber-500/20 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-100 to-amber-100 dark:from-blue-800/50 dark:to-amber-800/20 rounded-3xl -rotate-3"></div>
                <div className="relative bg-blue-600 text-white p-8 rounded-3xl">
                  <div className="text-6xl font-bold text-amber-400 mb-4">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-blue-900 dark:text-white">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                  Architectural
                </span>{' '}
                Foundation
              </h2>
              <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed mb-6">
                At Limitless Infotech Solution, we are more than developers – we
                are{' '}
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  architects of transformation
                </span>
                . We believe that technology should empower, not complicate.
                Every line of code we write, every system we build, is crafted
                with precision, security, and your success in mind.
              </p>
              <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
                Our vision is to lead the world into the next era of intelligent
                business systems, where innovation meets execution, and where
                your business potential becomes truly limitless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section - Asymmetrical Grid */}
      <section
        className="section-padding bg-blue-50 dark:bg-blue-900/30 relative overflow-hidden"
        aria-labelledby="core-services-heading"
      >
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-400/30 rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-amber-400/30 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-2 bg-gradient-to-r from-blue-500/20 to-amber-500/20"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-40 bg-gradient-to-b from-amber-500/20 to-blue-500/20"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2
              id="core-services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your
              business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`lg:col-span-4 rounded-2xl transition-all duration-300 flex flex-col h-full border border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-800/50 p-8 ${
                  index === 1 ? 'lg:col-start-2 lg:row-start-1' : ''
                }`}
                role="listitem"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 self-start`}
                  aria-hidden="true"
                >
                  <DuoToneIcon
                    icon={service.icon}
                    size="xl"
                    primaryColor="text-white"
                    secondaryColor="text-white/30"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-blue-700 dark:text-blue-300 mb-4 flex-grow">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <HiArrowRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="mission-critical-button">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Limitless Section - Editorial Layout */}
      <section
        className="section-padding bg-white dark:bg-blue-900 relative overflow-hidden"
        aria-labelledby="why-limitless-heading"
      >
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/5 w-24 h-24 border-t-2 border-l-2 border-blue-400/30 rotate-12"></div>
          <div className="absolute top-1/4 right-1/5 w-16 h-16 border-b-2 border-r-2 border-amber-400/30 -rotate-12"></div>
          <div className="absolute bottom-1/5 left-1/4 w-32 h-2 bg-gradient-to-r from-blue-500/15 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-24 bg-gradient-to-b from-amber-500/15 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <h2
                id="why-limitless-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white"
              >
                Why Choose{' '}
                <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                  Limitless
                </span>
              </h2>
              <p className="text-lg text-blue-700 dark:text-blue-300">
                Our core qualities and competitive advantages that set us apart
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyLimitless.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-blue-50 dark:bg-blue-800/30 border border-blue-200 dark:border-blue-700 relative overflow-hidden"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                      <DuoToneIcon
                        icon={item.icon}
                        size="lg"
                        primaryColor="text-blue-600 dark:text-blue-400"
                        secondaryColor="text-blue-600/30 dark:text-blue-400/30"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-blue-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
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
      <section className="section-padding bg-blue-50 dark:bg-blue-900/30 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-blue-400/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/6 w-16 h-16 border-2 border-amber-400/20 rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-36 h-2 bg-gradient-to-r from-blue-500/10 to-amber-500/10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-32 bg-gradient-to-b from-amber-500/10 to-blue-500/10"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Trusted By{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  {client.name}
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-400">
                  {client.category}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-blue-700 dark:text-blue-300 text-sm">
              <span>Trusted by industry leaders worldwide</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4 text-amber-500" />
                ))}
              </div>
              <span>4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Asymmetrical Layout */}
      <section className="section-padding bg-white dark:bg-blue-900 border-t border-blue-200 dark:border-blue-800 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/4 w-28 h-28 border-2 border-blue-400/25 rotate-12"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-amber-400/25 -rotate-12"></div>
          <div className="absolute bottom-1/5 left-1/3 w-40 h-2 bg-gradient-to-r from-blue-500/15 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-36 bg-gradient-to-b from-amber-500/15 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Enterprise Products
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Production-ready SaaS solutions serving 10,000+ users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`lg:col-span-3 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-800/30 relative overflow-hidden ${
                  index === 1 ? 'lg:col-start-3 lg:row-start-1' : ''
                }`}
              >
                <Link to={product.link}>
                  {product.popular && (
                    <div className="absolute -top-3 right-4">
                      <span className="bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center">
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
                  <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      {product.users} users
                    </span>
                    <HiArrowRight className="w-5 h-5 text-amber-500" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="mission-critical-button">
              View All 7 Products
              <HiArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Editorial Layout */}
      <section className="section-padding bg-blue-50 dark:bg-blue-900/30">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Client{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Transforming businesses with innovative custom solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className="bg-white dark:bg-blue-800/50 rounded-2xl overflow-hidden border border-blue-200 dark:border-blue-700"
              >
                <Link to={story.link}>
                  <div className={`h-3 bg-gradient-to-r ${story.color}`}></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-blue-900 dark:text-white">
                      {story.title}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-400 font-semibold mb-4">
                      {story.subtitle}
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 mb-6 leading-relaxed">
                      {story.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-200 dark:border-blue-700">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-amber-600 dark:text-amber-400 font-semibold">
                      Read Full Case Study
                      <HiArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="mission-critical-button-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Asymmetrical Grid */}
      <section className="section-padding bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-950">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              What Clients Say About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Limitless
              </span>
            </h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 max-w-2xl mx-auto">
              Real experiences from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-blue-800/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 dark:border-blue-700 flex flex-col h-full"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-amber-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-blue-800 dark:text-blue-200 mb-6 italic flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="mission-critical-button-secondary"
            >
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Editorial Layout */}
      <section className="section-padding bg-white dark:bg-blue-900">
        <div className="container-custom max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className="border border-blue-200 dark:border-blue-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <HiChevronUp className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Asymmetrical Layout */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Transform Your Business?
                <br />
                <span className="text-amber-400">
                  Architectural Excellence
                </span>{' '}
                Awaits
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl">
                Let's discuss how we can help you achieve your goals with
                innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/get-started"
                  className="mission-critical-button text-blue-900 bg-amber-400 hover:bg-amber-300"
                >
                  Begin Strategic Initiative
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl font-bold text-base tracking-wide border-2 border-amber-400 text-amber-400 bg-transparent hover:bg-amber-400/20 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl rotate-6"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <HiCheckCircle className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <div className="font-bold">Strategic Planning</div>
                      <div className="text-sm opacity-80">
                        Enterprise-Grade Solutions
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <HiCheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-sm">
                        Mission-Critical Architecture
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HiCheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-sm">Enterprise Security</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HiCheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-sm">Scalable Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
