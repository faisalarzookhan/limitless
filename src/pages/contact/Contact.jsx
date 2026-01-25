import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  User, 
  Building2, 
  MessageSquare, 
  Calendar, 
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Map as MapIcon
} from 'lucide-react';
import ContactForm from '../../components/forms/contact/ContactForm';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useApp } from '../../context/AppContext';

const Contact = () => {
  const { toggleChat } = useApp();
  const formRef = useRef(null);
  const [initialSubject, setInitialSubject] = useState('');

  const handleAction = (action) => {
    if (action.title === 'Live Chat Support') {
      toggleChat(true);
      return;
    }
    
    if (action.title === 'Schedule Consultation') {
      setInitialSubject('project');
    } else if (action.title === 'Request Demo') {
      setInitialSubject('demo');
    }
    
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'Info@limitlessinfotech.com',
      link: 'mailto:Info@limitlessinfotech.com',
      description: 'Official inquiries and support.',
      color: 'primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 77109 09492',
      link: 'tel:+917710909492',
      description: 'Mon-Sat: 9AM - 6PM IST',
      color: 'secondary'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Mumbai, Maharashtra, IN',
      link: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
      description: 'Collaborate at our workspace.',
      color: 'brand'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: null,
      description: 'Sunday: Closed',
      color: 'primary'
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: MessageCircle, url: 'https://wa.me/917710909492', label: 'WhatsApp' }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a free 30-minute discovery call',
      action: 'Schedule Now',
      link: '/get-started'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat Support',
      description: 'Chat with our experts in real-time',
      action: 'Start Chat',
      link: '#'
    },
    {
      icon: ArrowRight,
      title: 'Request Demo',
      description: 'Explore our latest enterprise solutions',
      action: 'Request Demo',
      link: '/get-started'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: "Our team aims to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling or using WhatsApp."
    },
    {
      question: 'Do you offer international consultations?',
      answer: 'Yes, we serve clients globally and can arrange virtual meetings across all time zones to accommodate your schedule.'
    }
  ];

  return (
    <ErrorBoundary>
      <SEO 
        title="Contact | Limitless Inotech" 
        description="Reach out to Limitless Inotech for secure, unique, and limitless technology solutions." 
      />

      <div className="relative">
        {/* Ambient background accents */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-[-5%] w-[40%] h-[40%] bg-primary-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/3 right-[-5%] w-[40%] h-[40%] bg-secondary-500/10 blur-[150px] rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <MessageSquare className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">Connect with Experts</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Let's Start a <br />
              <span className="bg-gradient-to-r from-primary-400 via-primary-200 to-secondary-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have a visionary project or a complex challenge? Our team is ready to architect your success with tailored digital solutions.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-primary-500/30 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${
                  info.color === 'primary' ? 'bg-primary-500/20' : 
                  info.color === 'secondary' ? 'bg-secondary-500/20' : 
                  'bg-brand-500/20'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <info.icon className={`w-7 h-7 ${
                    info.color === 'primary' ? 'text-primary-400' : 
                    info.color === 'secondary' ? 'text-secondary-400' : 
                    'text-brand-400'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-200 font-medium hover:text-primary-400 transition-colors block mb-1">
                    {info.value}
                  </a>
                ) : (
                  <span className="text-gray-200 font-medium block mb-1">{info.value}</span>
                )}
                <p className="text-sm text-gray-400">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Interface: Form & Sidebar */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form Container */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-400">Fill out the details and our specialists will reach out to you within 24 hours.</p>
              </div>
              <div ref={formRef}>
                <ContactForm key={initialSubject} initialSubject={initialSubject} />
              </div>
            </motion.div>

            {/* Sidebar Elements */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button 
                      key={index} 
                      onClick={() => handleAction(action)}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-left"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <action.icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{action.title}</h4>
                        <p className="text-xs text-gray-400">{action.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Social Connect */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold mb-6">Social Connect</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary-500/10 hover:border-primary-500/30 hover:scale-110 transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Quick FAQs */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold mb-6">Quick FAQs</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-bold text-sm text-gray-200">{faq.question}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-video md:aspect-auto md:h-[600px] bg-white/5"
            >
              <div className="absolute inset-0 grayscale opacity-50 bg-[#0e1114]">
                {/* Fallback for real map integration or styled placeholder */}
                <div className="w-full h-full flex items-center justify-center flex-col gap-4 opacity-50">
                    <MapIcon className="w-16 h-16 text-gray-600" />
                    <p className="text-gray-600 font-medium">Interactive Map Placeholder</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1114] via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Visit our Office</h3>
                        <p className="text-gray-400 text-sm">Mumbai, Maharashtra, India</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <a href="https://maps.google.com/?q=Mumbai,Maharashtra,India" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/20 inline-flex items-center gap-2">
                        Open in Google Maps
                        <MapIcon className="w-4 h-4" />
                    </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to architect your digital future?</h2>
            <Link to="/get-started" className="px-12 py-5 bg-gradient-to-r from-primary-600 to-primary-400 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary-500/25 inline-flex items-center gap-3">
              Start Your Strategic Initiative
              <Sparkles className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Contact;
