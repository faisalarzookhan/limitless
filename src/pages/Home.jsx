import { useState } from "react";
import { Link } from "react-router-dom";
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
} from "react-icons/hi";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const coreServices = [
    {
      icon: HiCode,
      title: "Web Development",
      description:
        "Responsive, scalable, and SEO-optimized websites built with cutting-edge technologies.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: HiDeviceMobile,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HiCube,
      title: "Custom Software & Systems",
      description:
        "Tailored software solutions designed to meet your unique business requirements.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: HiChartBar,
      title: "CRM & Task Management",
      description:
        "Powerful systems to manage customer relationships and streamline business operations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: HiLightningBolt,
      title: "Business Automation & AI",
      description:
        "Intelligent automation solutions that transform operations and boost productivity.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: HiServer,
      title: "Enterprise SaaS Products",
      description:
        "Production-ready software solutions including TrackIT, HR-IMS, WorkTrack, and more.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const featuredProducts = [
    {
      id: "trackit",
      name: "TrackIT",
      description: "IT Asset Management System",
      icon: HiServer,
      color: "from-blue-600 to-blue-400",
      users: "500+",
      link: "/products",
    },
    {
      id: "hrims",
      name: "HR-IMS",
      description: "HR Management System",
      icon: HiUserGroup,
      color: "from-purple-600 to-purple-400",
      users: "2,000+",
      link: "/products",
      popular: true,
    },
    {
      id: "worktrack",
      name: "WorkTrack",
      description: "Workforce Management",
      icon: HiClock,
      color: "from-orange-600 to-orange-400",
      users: "1,500+",
      link: "/products",
    },
    {
      id: "ittms",
      name: "IT-TMS",
      description: "IT Ticket Management",
      icon: HiChartBar,
      color: "from-red-600 to-red-400",
      users: "800+",
      link: "/products",
    },
  ];

  const successStories = [
    {
      id: "ivolex",
      title: "IVOLEX",
      subtitle: "Enterprise ERP System",
      description:
        "Custom enterprise resource planning system that improved efficiency by 60% across 15 locations.",
      results: [
        { label: "Efficiency", value: "+60%" },
        { label: "Automation", value: "80%" },
        { label: "Users", value: "500+" },
      ],
      link: "/portfolio/101",
      color: "from-blue-600 to-purple-600",
    },
    {
      id: "wakilni",
      title: "Wakilni",
      subtitle: "Legal Services Platform",
      description:
        "Comprehensive platform connecting 500+ lawyers with 10,000+ clients across the region.",
      results: [
        { label: "Lawyers", value: "500+" },
        { label: "Clients", value: "10K+" },
        { label: "Satisfaction", value: "95%" },
      ],
      link: "/portfolio/102",
      color: "from-amber-600 to-orange-600",
    },
  ];

  const whyLimitless = [
    {
      icon: HiShieldCheck,
      title: "Total Security",
      description:
        "Enterprise-grade security protocols with bank-level encryption and SOC2 compliance standards.",
    },
    {
      icon: HiCube,
      title: "7+ Production-Ready Products",
      description:
        "Complete suite of SaaS products serving 10,000+ users worldwide, from IT management to HR systems.",
    },
    {
      icon: HiSparkles,
      title: "True Uniqueness",
      description:
        "Every solution is custom-crafted to reflect your brand identity and meet your specific business needs.",
    },
    {
      icon: HiServer,
      title: "Reliability & Scalability",
      description:
        "Built to grow with your business, our solutions handle increased demand without compromising performance.",
    },
    {
      icon: HiTrendingUp,
      title: "Speed + Performance",
      description:
        "Lightning-fast applications optimized for peak performance, delivering exceptional user experiences.",
    },
    {
      icon: HiClock,
      title: "Smart & Future-Ready",
      description:
        "Forward-thinking solutions leveraging AI and emerging technologies to keep you ahead of the curve.",
    },
    {
      icon: HiUserGroup,
      title: "Royal Client Experience",
      description:
        "White-glove service with dedicated support, ensuring your success is our top priority at every step.",
    },
  ];

  const clientLogos = [
    { name: "IVOLEX", logo: null, category: "Enterprise" },
    { name: "Wakilni", logo: null, category: "LegalTech" },
    { name: "TechVision", logo: null, category: "Technology" },
    { name: "StyleHub", logo: null, category: "E-commerce" },
    { name: "LogiTrack", logo: null, category: "Logistics" },
    { name: "EduLearn", logo: null, category: "Education" },
    { name: "HealthCare Plus", logo: null, category: "Healthcare" },
    { name: "SecurePay", logo: null, category: "FinTech" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechVision Solutions",
      image: null,
      rating: 5,
      text: "Limitless transformed our business with a custom CRM system. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40%!",
    },
    {
      name: "Priya Sharma",
      role: "Founder, StyleHub Fashion",
      image: null,
      rating: 5,
      text: "The e-commerce platform they built for us is stunning and incredibly efficient. Sales have tripled since launch. Highly recommend their services!",
    },
    {
      name: "Ahmed Ali",
      role: "Operations Manager, LogiTrack",
      image: null,
      rating: 5,
      text: "Outstanding mobile app development! The app is intuitive, fast, and our clients love it. The team's expertise in automation saved us countless hours.",
    },
    {
      name: "Sneha Patel",
      role: "Director, EduLearn Academy",
      image: null,
      rating: 5,
      text: "Working with Limitless was a game-changer. They built a complete learning management system that exceeded all our requirements. True professionals!",
    },
  ];

  const faqs = [
    {
      question: "What services does Limitless Infotech Solution offer?",
      answer:
        "We offer comprehensive technology solutions including Web Development, Mobile App Development, Custom Software & Systems, CRM & Task Management Apps, Business Automation & AI Integration, IoT Solutions, Network Installation, and Server Setup. Each service is tailored to meet your specific business needs.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications may take 2-4 months. Mobile apps generally require 3-6 months, and custom enterprise software can take 3-12 months. We provide detailed timelines during the planning phase and keep you updated throughout development.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We work with cutting-edge technologies including React, Vue, Angular, Next.js for frontend; Node.js, Python, PHP, .NET for backend; React Native and Flutter for mobile apps; MongoDB, PostgreSQL, MySQL for databases; and AWS, Azure, Google Cloud for cloud infrastructure. We choose the best technology stack for each project based on your specific requirements.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes! We offer comprehensive post-launch support including 24/7 technical assistance, regular updates and maintenance, bug fixes, security patches, performance monitoring, and training. We ensure your systems continue to operate flawlessly and stay up-to-date with the latest technologies.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Project costs vary based on scope, complexity, timeline, and required features. We believe in transparent pricing and provide detailed quotes after understanding your requirements. Fill out our client requirements form or contact us directly for a personalized quote tailored to your budget and needs.",
    },
    {
      question: "Can you work with our existing systems?",
      answer:
        "Absolutely! We specialize in integrating with existing systems and can enhance, upgrade, or build upon your current infrastructure. Whether you need to modernize legacy systems or add new features, our team has the expertise to ensure seamless integration.",
    },
    {
      question:
        "What makes Limitless different from other development companies?",
      answer:
        "Our commitment to Total Security, True Uniqueness, and Royal Client Experience sets us apart. We don't just build software – we create transformative solutions that are secure, scalable, and truly unique to your business. Our dedicated team provides white-glove service, ensuring your success at every step.",
    },
    {
      question: "Do you offer custom CRM solutions?",
      answer:
        "Yes! We specialize in custom CRM development tailored to your business processes. Our CRM solutions include customer management, sales tracking, lead management, automated workflows, reporting and analytics, and seamless integration with your existing tools. We build systems that adapt to your needs, not the other way around.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        {/* Background Pattern - Aligned with container */}
        <div className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8" aria-hidden="true">
          <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-dark-800 px-6 py-3 rounded-full shadow-soft mb-8 animate-fade-in-down">
              <HiSparkles className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Where Innovation Meets Execution
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up">
              Empowering Businesses with{" "}
              <span className="text-gradient">Technology</span>
              <br />
              that is{" "}
              <span className="text-gradient-secondary">Secure, Unique,</span>
              <br />
              and <span className="text-gradient-accent">Limitless</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transform your business with cutting-edge digital solutions. We
              are the architects of transformation, building tomorrow's
              technology today.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/get-started" className="btn-primary">
                Get Started
                <HiArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore Our Products
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { number: "50+", label: "Products & Solutions" },
                { number: "7", label: "SaaS Products" },
                { number: "10K+", label: "Product Users" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <HiChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Foundation/About Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Foundation</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              At Limitless Infotech Solution, we are more than developers – we
              are{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                architects of transformation
              </span>
              . We believe that technology should empower, not complicate. Every
              line of code we write, every system we build, is crafted with
              precision, security, and your success in mind.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our vision is to lead the world into the next era of intelligent
              business systems, where innovation meets execution, and where your
              business potential becomes truly limitless.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section 
        className="section-padding bg-gray-50 dark:bg-dark-800 transition-colors duration-300"
        aria-labelledby="core-services-heading"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 
              id="core-services-heading"
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Our <span className="text-gradient">Core Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your
              business
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Core services"
          >
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="service-card card-hover focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-dark-900 rounded-2xl transition-all duration-300 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="listitem"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 self-start`}
                  aria-hidden="true"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded mt-auto"
                >
                  Learn More
                  <HiArrowRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-900 rounded-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Limitless Section */}
      <section 
        className="section-padding bg-white dark:bg-dark-900 transition-colors duration-300"
        aria-labelledby="why-limitless-heading"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 
              id="why-limitless-heading"
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Why Choose <span className="text-gradient">Limitless</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our core qualities and competitive advantages that set us apart
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Company values and advantages"
          >
            {whyLimitless.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 border border-gray-100 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-dark-900 flex flex-col h-full"
                role="listitem"
                tabIndex={0}
              >
                <div 
                  className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300 self-start"
                  aria-hidden="true"
                >
                  <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Trusted By <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses with our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {client.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {client.category}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
              <span>Trusted by industry leaders worldwide</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
              <span>4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Enterprise Products</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Production-ready SaaS solutions serving 10,000+ users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={product.link}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-dark-700 hover:border-primary-500 transition-all duration-300 card-hover flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-gradient-primary px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center">
                      <HiStar className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 self-start`}
                >
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {product.users} users
                  </span>
                  <HiArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary">
              View All 7 Products
              <HiArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transforming businesses with innovative custom solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <Link
                key={story.id}
                to={story.link}
                className="group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-dark-700 hover:border-primary-500 transition-all duration-300 card-hover flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-3 bg-gradient-to-r ${story.color}`}></div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    {story.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                    {story.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-dark-700">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-primary-600 dark:text-primary-400 font-semibold">
                    Read Full Case Study
                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Limitless Section */}
      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What Clients Say About{" "}
              <span className="text-gradient">Limitless</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real experiences from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card flex flex-col h-full">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials" className="btn-outline">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <HiChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-700 animate-slide-down">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section for Startups */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Want To Start Your Own Business?
              <br />
              But Don't Know Where To Start?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Get Started With Limitless & Grow Your Business{" "}
              <span className="font-bold">"Limitless"</span>
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
              We provide complete end-to-end solutions for startups and growing
              businesses. From ideation to execution, we're with you every step
              of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-started"
                className="px-10 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started with Limitless
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: HiCheckCircle, text: "Build Limitless" },
                { icon: HiCheckCircle, text: "Manage Limitless" },
                { icon: HiCheckCircle, text: "Grow Limitless" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-3"
                >
                  <feature.icon className="w-8 h-8" />
                  <span className="text-xl font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800 rounded-3xl p-12 md:p-16 text-center border border-primary-200 dark:border-dark-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with
              innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/get-started" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
