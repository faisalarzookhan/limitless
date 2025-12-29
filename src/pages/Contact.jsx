import { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from 'react-icons/hi';
import ContactForm from '../components/ContactForm';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email Us',
      value: 'Info@limitlessinfotech.com',
      link: 'mailto:Info@limitlessinfotech.com',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      value: '+91 77109 09492',
      link: 'tel:+917710909492',
      description: 'Mon-Sat from 9am to 6pm',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      value: 'Mumbai, Maharashtra, IN',
      link: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
      description: 'Come say hello at our office',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: HiGlobe,
      title: 'Working Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: null,
      description: 'Sunday: Closed',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: 'https://facebook.com',
      label: 'Facebook',
      color: 'hover:bg-blue-600',
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:bg-sky-500',
    },
    {
      icon: FaLinkedinIn,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700',
    },
    {
      icon: FaInstagram,
      url: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:bg-pink-600',
    },
    {
      icon: FaGithub,
      url: 'https://github.com',
      label: 'GitHub',
      color: 'hover:bg-gray-800',
    },
    {
      icon: FaWhatsapp,
      url: 'https://wa.me/917710909492',
      label: 'WhatsApp',
      color: 'hover:bg-green-600',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <HiChat className="w-5 h-5" />
              <span className="text-sm font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              Let's Build Something Amazing Together
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Have a project in mind? We'd love to hear from you. Get in touch
              and let's discuss how we can help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-2xl p-6 shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={
                      info.link.startsWith('http') ? 'noopener noreferrer' : ''
                    }
                    className="text-primary-600 dark:text-primary-400 font-semibold hover:underline block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700">
                <h2 className="text-3xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>

                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 border border-primary-100 dark:border-primary-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.link}
                      className="block p-4 bg-white dark:bg-dark-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                          <action.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {action.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
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
                      className={`aspect-square bg-gray-100 dark:bg-dark-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Quick FAQs
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We'd love to meet you in person
            </p>
          </div>

          <div className="bg-white dark:bg-dark-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-dark-700">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
              <div className="text-center">
                <HiLocationMarker className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Mumbai, Maharashtra, India
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Visit us at our office location
                </p>
                <a
                  href="https://maps.google.com/?q=Mumbai,Maharashtra,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Open in Maps
                  <HiArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a detailed project plan
          </p>
          <Link
            to="/get-started"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Get Started with Your Project
            <HiArrowRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
