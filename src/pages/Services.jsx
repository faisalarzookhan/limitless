import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiServer,
  HiCloud,
  HiCog,
  HiShieldCheck,
  HiSparkles,
  HiTrendingUp,
  HiUsers,
  HiCheckCircle,
  HiArrowRight,
  HiGlobe,
  HiChip,
  HiDatabase,
  HiRefresh,
  HiLockClosed,
  HiPhotograph,
  HiPuzzle,
  HiChevronDown,
  HiChevronUp,
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

const Services = () => {
  const [expandedMobileFeatures, setExpandedMobileFeatures] = useState({});

  const toggleMobileFeatures = serviceId => {
    setExpandedMobileFeatures(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const mainServices = [
    {
      id: 'web',
      icon: HiCode,
      title: 'Web Development',
      subtitle: 'Powerful, Responsive, and Scalable Web Solutions',
      description:
        'Transform your digital presence with cutting-edge web applications using React, Next.js, Node.js, and modern frameworks that drive business growth and deliver exceptional user experiences.',
      color: 'from-[#2563eb] to-[#1e40af]',
      features: [
        'Responsive & Mobile-First Design',
        'SEO Optimization',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Custom Web Applications',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization',
        'Cross-Browser Compatibility',
        'Accessibility Standards (WCAG)',
      ],
      technologies: [
        'React',
        'Next.js',
        'Vue',
        'Angular',
        'Node.js',
        'PHP',
        'WordPress',
        'Shopify',
      ],
      benefits: [
        'Increased online visibility and reach',
        'Enhanced user engagement and conversion',
        'Scalable infrastructure for growth',
        'Reduced maintenance costs',
      ],
    },
    {
      id: 'mobile',
      icon: HiDeviceMobile,
      title: 'Mobile App Development',
      subtitle: 'Native and Cross-Platform Mobile Excellence',
      description:
        'Build powerful mobile applications using React Native, Flutter, Swift, and Kotlin that engage users, streamline operations, and drive business success across iOS and Android platforms.',
      color: 'from-[#ffc957] to-[#ffbd3a]',
      features: [
        'Native iOS & Android Development',
        'Cross-Platform Solutions (React Native, Flutter)',
        'Intuitive UI/UX Design',
        'Offline Functionality',
        'Push Notifications',
        'In-App Purchases',
        'Real-Time Synchronization',
        'Social Media Integration',
        'App Store Optimization (ASO)',
        'Analytics & Performance Tracking',
      ],
      technologies: [
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase',
        'GraphQL',
      ],
      benefits: [
        'Reach customers on their preferred devices',
        'Increase customer engagement and loyalty',
        'Streamline business processes',
        'Generate new revenue streams',
      ],
    },
    {
      id: 'software',
      icon: HiCube,
      title: 'Custom Software & Systems',
      subtitle: 'Tailored Solutions for Your Unique Needs',
      description:
        'Get bespoke software solutions built with Python, Java, .NET, and microservices architecture designed specifically for your business processes, challenges, and goals. No compromises, just perfect fit.',
      color: 'from-[#0a0b0d] to-[#1e3a8a]',
      features: [
        'Requirements Analysis & Planning',
        'Custom Application Development',
        'Legacy System Modernization',
        'System Integration',
        'Data Migration Services',
        'Enterprise Resource Planning (ERP)',
        'Workflow Automation',
        'Reporting & Analytics',
        'Multi-Tenant Architecture',
        'White-Label Solutions',
      ],
      technologies: [
        'Python',
        '.NET',
        'Java',
        'C#',
        'Microservices',
        'Docker',
        'Kubernetes',
      ],
      benefits: [
        'Perfect alignment with business processes',
        'Competitive advantage through unique features',
        'Full ownership and control',
        'Seamless integration with existing systems',
      ],
    },
    {
      id: 'crm',
      icon: HiChartBar,
      title: 'CRM & Task Management Apps',
      subtitle: 'Manage Relationships, Optimize Operations',
      description:
        'Custom CRM and task management systems built with React, Node.js, PostgreSQL, and real-time technologies that help you track customers, manage leads, automate workflows, and boost productivity.',
      color: 'from-[#2563eb] to-[#1e40af]',
      features: [
        'Customer Relationship Management',
        'Lead & Opportunity Tracking',
        'Sales Pipeline Management',
        'Task & Project Management',
        'Team Collaboration Tools',
        'Email Integration',
        'Calendar & Scheduling',
        'Document Management',
        'Automated Workflows',
        'Custom Reports & Dashboards',
      ],
      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'WebSockets',
        'REST APIs',
      ],
      benefits: [
        'Improved customer satisfaction',
        'Increased sales conversion rates',
        'Better team collaboration',
        'Data-driven decision making',
      ],
    },
    {
      id: 'automation',
      icon: HiLightningBolt,
      title: 'Business Automation & AI Integration',
      subtitle: 'Intelligent Systems for the Modern Business',
      description:
        'Leverage AI and automation using Python, TensorFlow, OpenAI, and Azure AI to eliminate repetitive tasks, reduce errors, and free your team to focus on what matters most.',
      color: 'from-[#ffc957] to-[#ffbd3a]',
      features: [
        'Process Automation',
        'AI-Powered Chatbots',
        'Machine Learning Integration',
        'Natural Language Processing',
        'Predictive Analytics',
        'Robotic Process Automation (RPA)',
        'Intelligent Data Extraction',
        'Automated Reporting',
        'Email Automation',
        'Workflow Optimization',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'OpenAI',
        'Azure AI',
        'Power Automate',
        'Zapier',
      ],
      benefits: [
        'Reduced operational costs',
        'Increased efficiency and productivity',
        'Minimized human errors',
        'Faster decision-making',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: HiChip,
      title: 'IoT Solutions',
      description:
        'Connect physical devices to the digital world with secure IoT implementations using Arduino, Raspberry Pi, MQTT, and AWS IoT.',
      features: [
        'Device Integration',
        'Real-Time Monitoring',
        'Data Analytics',
        'Cloud Connectivity',
      ],
    },
    {
      icon: HiServer,
      title: 'Network Installation',
      description:
        'Professional network setup using Cisco, Juniper, and enterprise-grade equipment for reliable and secure business connectivity.',
      features: [
        'LAN/WAN Setup',
        'Router Configuration',
        'Security Implementation',
        'Network Optimization',
      ],
    },
    {
      icon: HiDatabase,
      title: 'Server Setup',
      description:
        'Robust server infrastructure using AWS, Azure, GCP, and Linux/Windows Server for your applications and data.',
      features: [
        'Server Configuration',
        'Load Balancing',
        'Security Hardening',
        'Backup Solutions',
      ],
    },
    {
      icon: HiPuzzle,
      title: 'UI/UX Design',
      description:
        'Create intuitive and engaging user experiences using Figma, Adobe XD, and modern design principles that delight customers.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
      ],
    },
    {
      icon: HiPhotograph,
      title: 'Branding & Logo Design',
      description:
        'Build a strong visual identity using Adobe Creative Suite, Canva, and brand strategy principles that represents your brand perfectly.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Color Palette',
        'Typography Selection',
      ],
    },
    {
      icon: HiCloud,
      title: 'Cloud Hosting & Infrastructure',
      description:
        'Secure, scalable cloud hosting on AWS, Azure, and GCP with performance monitoring and DevOps automation.',
      features: [
        'AWS/Azure/GCP',
        'Performance Monitoring',
        'Auto-Scaling',
        'CDN Integration',
      ],
    },
    {
      icon: HiRefresh,
      title: 'Maintenance & Support',
      description:
        'Keep your systems running flawlessly with ongoing maintenance using DevOps practices and monitoring tools.',
      features: [
        '24/7 Support',
        'Regular Updates',
        'Bug Fixes',
        'Security Patches',
      ],
    },
    {
      icon: HiTrendingUp,
      title: 'Digital Marketing',
      description:
        'Grow your online presence with data-driven marketing strategies using Google Analytics, Meta Ads, and SEO tools.',
      features: [
        'Social Media Management',
        'Content Strategy',
        'SEO/SEM',
        'Analytics',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We understand your business, goals, and challenges to create a comprehensive project plan.',
      icon: HiUsers,
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description:
        'Create wireframes and prototypes to visualize the solution before development begins.',
      icon: HiSparkles,
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'Build your solution with clean code, rigorous testing, and quality assurance.',
      icon: HiCode,
    },
    {
      number: '04',
      title: 'Launch & Support',
      description:
        'Deploy to production and provide ongoing support to ensure continued success.',
      icon: HiCheckCircle,
    },
  ];

  return (
    <ErrorBoundary>
      <>
      <Helmet>
        <title>Services - Limitless Infotech Solution</title>
        <meta name="description" content="Comprehensive technology solutions including Web Development, Mobile App Development, Custom Software & Systems, CRM & Task Management, Business Automation & AI Integration, and more." />
        <meta name="keywords" content="web development, mobile app development, custom software, CRM, task management, business automation, AI integration, enterprise solutions" />
        <meta name="author" content="Limitless Infotech Solution" />
        <meta property="og:title" content="Services - Limitless Infotech Solution" />
        <meta property="og:description" content="Comprehensive technology solutions including Web Development, Mobile App Development, Custom Software & Systems, CRM & Task Management, Business Automation & AI Integration, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.limitlessinfotech.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Limitless Infotech Solution" />
        <meta name="twitter:description" content="Comprehensive technology solutions including Web Development, Mobile App Development, Custom Software & Systems, CRM & Task Management, Business Automation & AI Integration, and more." />
        <link rel="canonical" href="https://www.limitlessinfotech.com/services" />
      </Helmet>
      <div className="min-h-screen font-sans bg-[#0a0b0d]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#0a0b0d] text-white overflow-hidden">
        <div
          className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-architectural-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Comprehensive Technology Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              Services That Transform
              <br />
              Your Business
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              From web and mobile development to AI-powered automation, we
              deliver end-to-end solutions that drive growth and innovation.
            </p>
            <Link
              to="/get-started"
              className="px-8 py-4 bg-[#ffc957] text-[#0a0b0d] font-bold rounded-xl hover:bg-[#ffbd3a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Start Your Project
              <HiArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      {mainServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-[#0a0b0d]' : 'bg-[#0a0b0d]/50'}`}
        >
          <div className="container-custom">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-white">
                  {service.title}
                </h2>
                <p className="text-xl text-[#ffc957] font-semibold mb-4">
                  {service.subtitle}
                </p>
                <p className="text-lg text-[#cbd5e1] mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-[#2563eb]/20 rounded-full text-sm font-medium text-[#e2e8f0] border border-[#2563eb]/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/get-started" className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-bold rounded-xl hover:from-[#1d4ed8] hover:to-[#1e3a8a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Request Demo
                  <HiArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Features & Benefits */}
              <div
                className={
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }
              >
                <div className="space-y-6">
                  {/* Features - Mobile Accordion */}
                  <div className="lg:hidden bg-[#0a0b0d]/50 rounded-2xl p-6 shadow-2xl border border-[#2563eb]/30">
                    <button
                      className="w-full flex justify-between items-center text-xl font-bold text-white py-2"
                      onClick={() => toggleMobileFeatures(service.id)}
                      aria-expanded={expandedMobileFeatures[service.id]}
                    >
                      <div className="flex items-center">
                        <HiCheckCircle className="w-6 h-6 text-[#ffc957] mr-2" />
                        Key Features
                      </div>
                      {expandedMobileFeatures[service.id] ? (
                        <HiChevronUp className="w-6 h-6 text-[#2563eb]" />
                      ) : (
                        <HiChevronDown className="w-6 h-6 text-[#2563eb]" />
                      )}
                    </button>
                    {expandedMobileFeatures[service.id] && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <HiCheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#cbd5e1]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Features - Desktop */}
                  <div className="hidden lg:block bg-[#0a0b0d]/50 rounded-2xl p-8 shadow-2xl border border-[#2563eb]/30">
                    <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                      <HiCheckCircle className="w-6 h-6 text-[#ffc957] mr-2" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <HiCheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#cbd5e1]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-br from-[#2563eb]/20 to-[#ffc957]/10 rounded-2xl p-8 border border-[#2563eb]/30">
                    <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                      <HiTrendingUp className="w-6 h-6 text-[#2563eb] mr-2" />
                      Business Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#ffc957] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#cbd5e1]">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-[#0a0b0d]/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Additional <span className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Complementary services to provide complete end-to-end solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-[#0a0b0d]/50 rounded-2xl p-6 border border-[#2563eb]/30 relative overflow-hidden">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-[#cbd5e1] mb-4">
                  {service.description}
                </p>

                {/* Features - Mobile Accordion */}
                <div className="md:hidden">
                  <button
                    className="w-full flex justify-between items-center text-xs font-semibold text-[#cbd5e1] py-2"
                    onClick={() => toggleMobileFeatures(`additional-${index}`)}
                    aria-expanded={
                      expandedMobileFeatures[`additional-${index}`]
                    }
                  >
                    <span>Features</span>
                    {expandedMobileFeatures[`additional-${index}`] ? (
                      <HiChevronUp className="w-4 h-4 text-[#2563eb]" />
                    ) : (
                      <HiChevronDown className="w-4 h-4 text-[#2563eb]" />
                    )}
                  </button>
                  {expandedMobileFeatures[`additional-${index}`] && (
                    <ul className="space-y-2 mt-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-xs text-[#94a3b8]"
                        >
                          <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Features - Desktop */}
                <ul className="space-y-2 hidden md:block">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs text-[#94a3b8]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-[#0a0b0d]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Our <span className="bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#2563eb] to-transparent"></div>
                )}

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-full mb-6">
                    <div className="absolute inset-2 bg-[#0a0b0d] rounded-full flex items-center justify-center">
                      <step.icon className="w-12 h-12 text-[#2563eb]" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-[#cbd5e1]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Quality */}
      <section className="section-padding bg-gradient-to-br from-[#2563eb] to-[#0a0b0d] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <HiShieldCheck className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-white/90">
                Bank-level encryption, secure coding practices, and compliance
                with industry standards
              </p>
            </div>
            <div className="text-center">
              <HiLockClosed className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Data Protection</h3>
              <p className="text-white/90">
                GDPR compliance, secure data storage, and robust backup systems
              </p>
            </div>
            <div className="text-center">
              <HiGlobe className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Global Standards</h3>
              <p className="text-white/90">
                Following international best practices and quality standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0a0b0d]/50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#0a0b0d] to-[#1e293b] rounded-3xl p-12 md:p-16 text-center border border-[#2563eb]/30">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-[#cbd5e1] mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that exceeds your
              expectations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/get-started" className="px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-bold rounded-xl hover:from-[#1d4ed8] hover:to-[#1e3a8a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-xl font-bold text-base tracking-wide border-2 border-[#2563eb] text-[#2563eb] bg-transparent hover:bg-[#2563eb]/10 transition-all duration-300"
              >
                View Our Work
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-xl font-bold text-base tracking-wide border-2 border-[#ffc957] text-[#ffc957] bg-transparent hover:bg-[#ffc957]/10 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
      </>
    </ErrorBoundary>
  );
};

export default Services;