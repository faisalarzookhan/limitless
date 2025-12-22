import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiGlobe,
  HiShoppingCart,
  HiAcademicCap,
  HiTruck,
  HiHeart,
  HiOfficeBuilding,
  HiCash,
  HiArrowRight,
  HiFilter,
  HiSearch,
} from "react-icons/hi";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Projects", icon: HiCube },
    { id: "web", name: "Web Development", icon: HiCode },
    { id: "mobile", name: "Mobile Apps", icon: HiDeviceMobile },
    { id: "crm", name: "CRM & Business", icon: HiChartBar },
    { id: "ecommerce", name: "E-commerce", icon: HiShoppingCart },
    { id: "automation", name: "Automation & AI", icon: HiLightningBolt },
  ];

  const portfolioProjects = [
    {
      id: 101,
      title: "IVOLEX - Enterprise Resource Planning System",
      category: "crm",
      client: "Enterprise Client (Confidential)",
      industry: "Enterprise Software",
      description:
        "Custom ERP solution with multi-location support, real-time analytics, and comprehensive business management capabilities.",
      image: null,
      tags: ["ERP", "React", "Node.js", "MongoDB", "React Native"],
      results: {
        efficiency: "+60%",
        automation: "80%",
        locations: "15",
        users: "500+",
      },
      year: "2023",
      duration: "8 months",
      icon: HiOfficeBuilding,
      color: "from-blue-600 to-purple-600",
      featured: true,
      testimonial: {
        text: "Limitless Infotech transformed our operations with IVOLEX. The system integrated all 15 locations seamlessly, automated 80% of our manual processes, and improved overall efficiency by 60%. Their team was professional, responsive, and delivered beyond expectations.",
        author: "Operations Director",
        company: "Enterprise Client",
      },
      fullDescription:
        "IVOLEX is a comprehensive enterprise resource planning system built from ground up to handle complex multi-location operations. The platform includes custom workflow engine, real-time analytics dashboard, mobile applications for iOS and Android, multi-location inventory management, role-based access control, and extensive integration APIs. The system successfully handles 500+ daily active users across 15 locations with 99.9% uptime.",
      features: [
        "Custom workflow engine tailored to business needs",
        "Real-time analytics and reporting dashboard",
        "Native mobile apps for iOS and Android",
        "Multi-location inventory synchronization",
        "Role-based access control with granular permissions",
        "Integration APIs for third-party systems",
        "Automated approval workflows",
        "Document management system",
        "Advanced search and filtering",
        "Audit trails and compliance reporting",
      ],
    },
    {
      id: 102,
      title: "Wakilni - Legal Services Platform",
      category: "mobile",
      client: "Legal Industry Startup",
      industry: "Legal Technology",
      description:
        "Comprehensive platform connecting 500+ lawyers with 10,000+ clients, featuring case management, document handling, and multi-language support.",
      image: null,
      tags: ["LegalTech", "React", "Django", "PostgreSQL", "Flutter"],
      results: {
        lawyers: "500+",
        clients: "10,000+",
        resolution: "-80%",
        satisfaction: "95%",
      },
      year: "2024",
      duration: "10 months",
      icon: HiAcademicCap,
      color: "from-amber-600 to-orange-600",
      featured: true,
      testimonial: {
        text: "Wakilni has revolutionized how we connect legal professionals with clients. The platform is intuitive, scalable, and has helped us build a thriving community of lawyers and clients. Limitless Infotech delivered a world-class solution that exceeded all our expectations.",
        author: "Founder & CEO",
        company: "Wakilni Platform",
      },
      fullDescription:
        "Wakilni is a cutting-edge legal services platform that bridges the gap between legal professionals and clients seeking legal assistance. The platform features a comprehensive lawyer directory with detailed profiles, advanced case management system, secure document management, appointment scheduling with calendar integration, integrated payment processing, review and rating system, and full multi-language support in Arabic and English. The platform has successfully onboarded 500+ verified lawyers and serves over 10,000 active clients.",
      features: [
        "Comprehensive lawyer directory with verified profiles",
        "Advanced case management system",
        "Secure document storage and sharing",
        "Appointment scheduling with reminders",
        "Integrated payment gateway",
        "Review and rating system",
        "Multi-language support (Arabic/English)",
        "In-app messaging and notifications",
        "Mobile apps for lawyers and clients",
        "Analytics dashboard for lawyers",
        "Admin panel for platform management",
        "Automated matching algorithm",
      ],
    },
    {
      id: 1,
      title: "TechVision CRM System",
      category: "crm",
      client: "TechVision Solutions",
      industry: "Technology",
      description:
        "A comprehensive customer relationship management system with advanced analytics and automation.",
      image: null,
      tags: ["CRM", "React", "Node.js", "PostgreSQL"],
      results: {
        productivity: "+40%",
        efficiency: "+35%",
        satisfaction: "+50%",
      },
      year: "2023",
      duration: "4 months",
      icon: HiChartBar,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      title: "StyleHub E-commerce Platform",
      category: "ecommerce",
      client: "StyleHub Fashion",
      industry: "Retail & Fashion",
      description:
        "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      image: null,
      tags: ["E-commerce", "Next.js", "Stripe", "AI"],
      results: {
        sales: "+300%",
        conversion: "+85%",
        traffic: "+250%",
      },
      year: "2023",
      duration: "5 months",
      icon: HiShoppingCart,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 3,
      title: "LogiTrack Mobile App",
      category: "mobile",
      client: "LogiTrack Logistics",
      industry: "Logistics & Transportation",
      description:
        "Real-time logistics tracking mobile application with route optimization and delivery management.",
      image: null,
      tags: ["Mobile App", "React Native", "GPS", "Real-time"],
      results: {
        efficiency: "+60%",
        accuracy: "+95%",
        cost: "-30%",
      },
      year: "2023",
      duration: "6 months",
      icon: HiTruck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "EduLearn LMS Platform",
      category: "web",
      client: "EduLearn Academy",
      industry: "Education",
      description:
        "Complete learning management system with video streaming, assessments, and progress tracking.",
      image: null,
      tags: ["LMS", "React", "Video Streaming", "MongoDB"],
      results: {
        engagement: "+120%",
        completion: "+80%",
        satisfaction: "+90%",
      },
      year: "2023",
      duration: "7 months",
      icon: HiAcademicCap,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 5,
      title: "HealthCare Patient Portal",
      category: "web",
      client: "HealthCare Plus",
      industry: "Healthcare",
      description:
        "Secure patient portal with appointment scheduling, medical records, and telemedicine integration.",
      image: null,
      tags: ["Healthcare", "HIPAA", "Vue.js", "Telemedicine"],
      results: {
        appointments: "+150%",
        paperwork: "-70%",
        satisfaction: "+85%",
      },
      year: "2023",
      duration: "8 months",
      icon: HiHeart,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 6,
      title: "FinTech Payment Gateway",
      category: "web",
      client: "SecurePay Financial",
      industry: "Financial Services",
      description:
        "Enterprise payment gateway with multi-currency support and fraud detection.",
      image: null,
      tags: ["FinTech", "Payment", "Security", "Node.js"],
      results: {
        transactions: "+500%",
        security: "99.9%",
        uptime: "99.99%",
      },
      year: "2022",
      duration: "10 months",
      icon: HiCash,
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 7,
      title: "Smart Office Automation",
      category: "automation",
      client: "Corporate Offices Ltd",
      industry: "Corporate",
      description:
        "IoT-based office automation system with AI-powered resource management and energy optimization.",
      image: null,
      tags: ["IoT", "AI", "Automation", "Python"],
      results: {
        energy: "-40%",
        efficiency: "+55%",
        cost: "-35%",
      },
      year: "2023",
      duration: "5 months",
      icon: HiOfficeBuilding,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 8,
      title: "RestaurantPro Management",
      category: "mobile",
      client: "Restaurant Chain Group",
      industry: "Food & Beverage",
      description:
        "Complete restaurant management system with POS, inventory, and customer loyalty program.",
      image: null,
      tags: ["Mobile", "POS", "Inventory", "Flutter"],
      results: {
        orders: "+180%",
        accuracy: "+98%",
        waste: "-45%",
      },
      year: "2023",
      duration: "4 months",
      icon: HiShoppingCart,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 9,
      title: "PropertyHub Real Estate Platform",
      category: "web",
      client: "PropertyHub Realty",
      industry: "Real Estate",
      description:
        "Modern real estate platform with virtual tours, mortgage calculator, and agent matching.",
      image: null,
      tags: ["Real Estate", "React", "3D Tours", "Maps"],
      results: {
        listings: "+400%",
        leads: "+220%",
        conversion: "+95%",
      },
      year: "2022",
      duration: "6 months",
      icon: HiOfficeBuilding,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 10,
      title: "AI Chatbot for Customer Service",
      category: "automation",
      client: "CustomerFirst Inc",
      industry: "Customer Service",
      description:
        "Intelligent AI chatbot with natural language processing and multi-language support.",
      image: null,
      tags: ["AI", "NLP", "Chatbot", "Machine Learning"],
      results: {
        response: "-90%",
        satisfaction: "+75%",
        cost: "-60%",
      },
      year: "2023",
      duration: "3 months",
      icon: HiLightningBolt,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 11,
      title: "FitLife Fitness App",
      category: "mobile",
      client: "FitLife Wellness",
      industry: "Health & Fitness",
      description:
        "Comprehensive fitness app with workout tracking, meal planning, and social features.",
      image: null,
      tags: ["Mobile", "Health", "React Native", "Firebase"],
      results: {
        users: "+1000%",
        engagement: "+150%",
        retention: "+85%",
      },
      year: "2023",
      duration: "5 months",
      icon: HiHeart,
      color: "from-red-500 to-orange-500",
    },
    {
      id: 12,
      title: "Enterprise ERP System",
      category: "crm",
      client: "Manufacturing Corp",
      industry: "Manufacturing",
      description:
        "Custom ERP system integrating inventory, production, sales, and finance departments.",
      image: null,
      tags: ["ERP", "Enterprise", ".NET", "SQL Server"],
      results: {
        integration: "+100%",
        errors: "-85%",
        productivity: "+65%",
      },
      year: "2022",
      duration: "12 months",
      icon: HiChartBar,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Industries Served" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8" aria-hidden="true">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <HiCube className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              Portfolio of Excellence
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Explore our showcase of successful projects that have transformed
              businesses across industries
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by name, client, industry, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-50 dark:bg-dark-800 p-2 rounded-xl border border-gray-200 dark:border-dark-700">
              <HiFilter className="w-5 h-5 text-gray-500 dark:text-gray-400 ml-2" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? "bg-primary-600 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="portfolio-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                >
                  <project.icon className="w-24 h-24 text-white opacity-80 transform group-hover:scale-110 transition-transform duration-300" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-semibold mb-1">
                        View Case Study
                      </p>
                      <HiArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                      {project.industry}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.client}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="badge badge-primary text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results Preview */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-dark-700">
                    {Object.entries(project.results)
                      .slice(0, 3)
                      .map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <HiCube className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Your project could be
            featured here next!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
