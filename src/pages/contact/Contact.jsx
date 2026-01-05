import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiGlobe,
  HiCheckCircle,
  HiArrowRight,
  HiUser,
  HiOfficeBuilding,
  HiChat,
  HiCalendar,
  HiSparkles,
} from 'react-icons/hi';
import ContactForm from '../../components/forms/contact/ContactForm';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';
import ErrorBoundary from '../../components/ErrorBoundary';

const Contact = () => {
  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email Us',
      value: 'Info@limitlessinfotech.com',
      link: 'mailto:Info@limitlessinfotech.com',
      description: 'Send us an email anytime',
      color: 'from-[#2563eb] to-[#1e40af]',
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      value: '+91 77109 09492',
      link: 'tel:+917710909492',
      description: 'Mon-Sat from 9am to 6pm',
      color: 'from-[#16a34a] to-[#22c55e]',
    },
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      value: 'Mumbai, Maharashtra, IN',
      link: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
      description: 'Come say hello at our office',
      color: 'from-[#9333ea] to-[#a855f7]',
    },
    {
      icon: HiGlobe,
      title: 'Working Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: null,
      description: 'Sunday: Closed',
      color: 'from-[#ea580c] to-[#f97316]',
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: 'https://facebook.com',
      label: 'Facebook',
      color: 'hover:bg-[#2563eb]',
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:bg-[#1da1f2]',
    },
    {
      icon: FaLinkedinIn,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:bg-[#0077b5]',
    },
    {
      icon: FaInstagram,
      url: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:bg-[#e4405f]',
    },
    {
      icon: FaGithub,
      url: 'https://github.com',
      label: 'GitHub',
      color: 'hover:bg-[#333333]',
    },
    {
      icon: FaWhatsapp,
      url: 'https://wa.me/917710909492',
      label: 'WhatsApp',
      color: 'hover:bg-[#25d366]',
    },
  ];

  const quickActions = [
    {
      icon: HiCalendar,
      title: 'Schedule Consultation',
      description: 'Book a free 30-minute consultation call',
      action: 'Schedule Now',
      link: '/get-started',
    },
    {
      icon: HiChat,
      title: 'Live Chat Support',
      description: 'Chat with our team in real-time',
      action: 'Start Chat',
      link: '#',
    },
    {
      icon: HiArrowRight,
      title: 'Request Demo',
      description: 'See our solutions in action',
      action: 'Request Demo',
      link: '/get-started',
    },
  ];

  const faqs = [
    {
      question: 'What is your response time?',
      answer:
        'We typically respond to all inquiries within 24 hours during business days.',
    },
    {
      question: 'Do you offer free consultations?',
      answer:
        'Yes! We offer a free 30-minute consultation to discuss your project requirements.',
    },
    {
      question: 'What information should I include in my inquiry?',
      answer:
        'Please include your project goals, timeline, budget range, and any specific requirements you have.',
    },
  ];

  return (
    <ErrorBoundary>
      <>
      <Helmet>
        <title>Contact Us - Limitless Infotech Solution</title>
        <meta name="description" content="Get in touch with Limitless Infotech Solution. Reach out via email, phone, or visit our office in Mumbai. We offer 24-hour response time for all inquiries." />
        <meta name="keywords" content="contact, get in touch, email, phone, address, support, inquiry, business consultation, tech support, customer service" />
        <meta name="author" content="Limitless Infotech Solution" />
        <meta property="og:title" content="Contact Us - Limitless Infotech Solution" />
        <meta property="og:description" content="Get in touch with Limitless Infotech Solution. Reach out via email, phone, or visit our office in Mumbai. We offer 24-hour response time for all inquiries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.limitlessinfotech.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Limitless Infotech Solution" />
        <meta name="twitter:description" content="Get in touch with Limitless Infotech Solution. Reach out via email, phone, or visit our office in Mumbai. We offer 24-hour response time for all inquiries." />
        <link rel="canonical" href="https://www.limitlessinfotech.com/contact" />
      </Helmet>
      <div className="min-h-screen font-sans bg-[#0a0b0d] text-white">
        {/* Hero Section - Asymmetrical Layout */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0b0d] via-[#1e293b] to-[#0f172a]">
          {/* Asymmetrical background elements */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#2563eb]/10 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-2/5 h-2/3 bg-gradient-to-l from-[#ffc957]/10 to-transparent"></div>
          <div className="absolute inset-0 bg-architectural-grid opacity-10"></div>
          <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <HiChat className="w-5 h-5" />
                <span className="text-sm font-semibold">Get In Touch</span>
              </motion.div>
            
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's Build Something <span className="text-[#ffc957]">Amazing</span> Together
              </motion.h1>
            
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Have a project in mind? We'd love to hear from you. Get in touch
                and let's discuss how we can help transform your business.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gradient-to-br from-[#0a0b0d] to-[#1e293b]">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="group bg-[#1e293b] rounded-2xl p-6 border border-[#334155] hover:border-[#2563eb]/50 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={
                        info.link.startsWith('http') ? 'noopener noreferrer' : ''
                      }
                      className="text-[#ffc957] font-semibold hover:underline block mb-2"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold mb-2">
                      {info.value}
                    </p>
                  )}
                  <p className="text-sm text-gray-400">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div 
                  className="bg-[#1e293b] rounded-3xl p-8 md:p-10 border border-[#334155]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-2 text-white">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>

                  <ContactForm />
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Quick Actions */}
                <motion.div 
                  className="bg-[#1e293b]/50 rounded-2xl p-6 border border-[#334155]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <Link
                        key={index}
                        to={action.link}
                        className="block p-4 bg-[#0f172a] rounded-xl hover:shadow-lg transition-all duration-300 group border border-[#334155]"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-[#2563eb]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors duration-300">
                            <action.icon className="w-5 h-5 text-[#2563eb] group-hover:text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-white mb-1">
                              {action.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {action.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="bg-[#1e293b]/50 rounded-2xl p-6 border border-[#334155]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Connect With Us
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`aspect-square bg-[#0f172a] rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 border border-[#334155]`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* FAQs */}
                <motion.div 
                  className="bg-[#1e293b]/50 rounded-2xl p-6 border border-[#334155]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Quick FAQs
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-sm text-white mb-1">
                          {faq.question}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-to-br from-[#0a0b0d] to-[#1e293b]">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <HiLocationMarker className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  Visit Our Office
                </span>
              </motion.div>
            
              <motion.h2 
                className="text-3xl md:text-4xl font-display font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Visit Our <span className="text-[#ffc957]">Office</span>
              </motion.h2>
            
              <motion.p 
                className="text-lg text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We'd love to meet you in person
              </motion.p>
            </div>

            <motion.div 
              className="bg-[#1e293b] rounded-3xl overflow-hidden border border-[#334155]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="aspect-video bg-gradient-to-br from-[#2563eb]/20 to-[#ffc957]/20 flex items-center justify-center">
                <div className="text-center">
                  <HiLocationMarker className="w-16 h-16 text-[#2563eb] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mumbai, Maharashtra, India
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Visit us at our office location
                  </p>
                  <a
                    href="https://maps.google.com/?q=Mumbai,Maharashtra,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#ffc957] text-[#0a0b0d] font-bold rounded-xl hover:bg-[#ffbd3a] transition-all duration-300 inline-flex items-center"
                  >
                    Open in Maps
                    <HiArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#0a0b0d] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-architectural-grid opacity-10"></div>
          <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Let's Get Started
              </span>
            </motion.div>
          
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a Project in <span className="text-[#ffc957]">Mind</span>?
            </motion.h2>
          
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's discuss your requirements and create a detailed project plan
            </motion.p>
          
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/get-started"
                className="px-8 py-4 bg-[#ffc957] text-[#0a0b0d] font-bold rounded-xl hover:bg-[#ffbd3a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Get Started with Your Project
                <HiArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      </>
    </ErrorBoundary>
  );
};

export default Contact;
