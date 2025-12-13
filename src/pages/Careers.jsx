import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiBriefcase,
  HiLocationMarker,
  HiClock,
  HiCurrencyRupee,
  HiUsers,
  HiAcademicCap,
  HiLightningBolt,
  HiHeart,
  HiTrendingUp,
  HiCheckCircle,
  HiChevronRight,
  HiSearch,
  HiFilter,
  HiSparkles,
  HiCode,
  HiDeviceMobile,
  HiChartBar,
  HiColorSwatch,
  HiSupport,
  HiShieldCheck,
} from "react-icons/hi";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "engineering", label: "Engineering" },
    { value: "design", label: "Design" },
    { value: "sales", label: "Sales & Marketing" },
    { value: "support", label: "Customer Support" },
    { value: "operations", label: "Operations" },
    { value: "hr", label: "Human Resources" },
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "mumbai", label: "Mumbai" },
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const jobTypes = [
    { value: "all", label: "All Types" },
    { value: "full-time", label: "Full-Time" },
    { value: "part-time", label: "Part-Time" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "engineering",
      location: "Mumbai",
      type: "full-time",
      experience: "4-6 years",
      salary: "₹12L - ₹18L per annum",
      description:
        "We are looking for an experienced Full Stack Developer to join our engineering team.",
      requirements: [
        "Strong proficiency in React, Node.js, and MongoDB",
        "Experience with REST APIs and microservices",
        "Knowledge of cloud platforms (AWS/Azure)",
        "Excellent problem-solving skills",
      ],
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams",
        "Write clean, maintainable code",
        "Mentor junior developers",
      ],
      icon: HiCode,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      posted: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "design",
      location: "Remote",
      type: "full-time",
      experience: "2-4 years",
      salary: "₹8L - ₹12L per annum",
      description:
        "Join our design team to create beautiful and intuitive user experiences.",
      requirements: [
        "Proficiency in Figma, Adobe XD, and Sketch",
        "Strong portfolio demonstrating UI/UX work",
        "Understanding of design systems",
        "Experience with user research and testing",
      ],
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers and product managers",
        "Maintain and evolve design systems",
      ],
      icon: HiColorSwatch,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      posted: "5 days ago",
      applicants: 32,
    },
    {
      id: 3,
      title: "Mobile App Developer (React Native)",
      department: "engineering",
      location: "Hybrid",
      type: "full-time",
      experience: "3-5 years",
      salary: "₹10L - ₹15L per annum",
      description:
        "Build cutting-edge mobile applications for iOS and Android platforms.",
      requirements: [
        "Expert-level knowledge of React Native",
        "Experience with native iOS/Android development",
        "Knowledge of mobile app deployment processes",
        "Understanding of mobile UI/UX best practices",
      ],
      responsibilities: [
        "Develop and maintain mobile applications",
        "Optimize app performance and user experience",
        "Integrate with backend APIs",
        "Participate in code reviews",
      ],
      icon: HiDeviceMobile,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      posted: "1 week ago",
      applicants: 28,
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "sales",
      location: "Mumbai",
      type: "full-time",
      experience: "5-7 years",
      salary: "₹15L - ₹25L per annum",
      description:
        "Drive business growth and establish strategic partnerships.",
      requirements: [
        "Proven track record in B2B sales",
        "Strong negotiation and communication skills",
        "Experience in IT/Software industry",
        "Network of potential clients",
      ],
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Develop sales strategies and proposals",
        "Achieve revenue targets",
      ],
      icon: HiChartBar,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      posted: "3 days ago",
      applicants: 52,
    },
    {
      id: 5,
      title: "Customer Support Specialist",
      department: "support",
      location: "Remote",
      type: "full-time",
      experience: "1-3 years",
      salary: "₹4L - ₹6L per annum",
      description:
        "Provide exceptional support to our customers and help them succeed.",
      requirements: [
        "Excellent communication skills",
        "Technical aptitude and problem-solving skills",
        "Experience with support ticketing systems",
        "Customer-centric mindset",
      ],
      responsibilities: [
        "Respond to customer inquiries via email, chat, and phone",
        "Troubleshoot technical issues",
        "Document and track customer interactions",
        "Collaborate with product team on improvements",
      ],
      icon: HiSupport,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      posted: "4 days ago",
      applicants: 67,
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Hybrid",
      type: "full-time",
      experience: "3-5 years",
      salary: "₹12L - ₹18L per annum",
      description:
        "Manage and optimize our infrastructure and deployment pipelines.",
      requirements: [
        "Experience with AWS/Azure/GCP",
        "Strong knowledge of Docker and Kubernetes",
        "Experience with CI/CD tools (Jenkins, GitLab CI)",
        "Scripting skills (Python, Bash)",
      ],
      responsibilities: [
        "Maintain and improve infrastructure",
        "Automate deployment processes",
        "Monitor system performance and security",
        "Collaborate with development teams",
      ],
      icon: HiShieldCheck,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      posted: "1 week ago",
      applicants: 38,
    },
    {
      id: 7,
      title: "Software Development Intern",
      department: "engineering",
      location: "Mumbai",
      type: "internship",
      experience: "0-1 years",
      salary: "₹15K - ₹25K per month",
      description: "Learn and grow with our engineering team as an intern.",
      requirements: [
        "Currently pursuing or recently completed CS/IT degree",
        "Basic knowledge of programming (JavaScript, Python, or Java)",
        "Passion for learning and problem-solving",
        "Good communication skills",
      ],
      responsibilities: [
        "Assist in development projects",
        "Learn from senior developers",
        "Write and test code",
        "Participate in team meetings and code reviews",
      ],
      icon: HiAcademicCap,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      posted: "1 day ago",
      applicants: 145,
    },
    {
      id: 8,
      title: "Product Manager",
      department: "operations",
      location: "Hybrid",
      type: "full-time",
      experience: "4-6 years",
      salary: "₹15L - ₹22L per annum",
      description: "Lead product strategy and drive product development.",
      requirements: [
        "Proven experience as a Product Manager",
        "Strong analytical and strategic thinking",
        "Experience with Agile methodologies",
        "Excellent stakeholder management skills",
      ],
      responsibilities: [
        "Define product vision and roadmap",
        "Gather and prioritize requirements",
        "Work closely with engineering and design teams",
        "Analyze metrics and user feedback",
      ],
      icon: HiLightningBolt,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      posted: "6 days ago",
      applicants: 41,
    },
  ];

  const benefits = [
    {
      icon: HiCurrencyRupee,
      title: "Competitive Salary",
      description:
        "Market-leading compensation packages with performance bonuses",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: HiHeart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      icon: HiAcademicCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities and professional growth",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: HiClock,
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: HiUsers,
      title: "Great Team Culture",
      description: "Collaborative environment with talented professionals",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: HiTrendingUp,
      title: "Career Growth",
      description: "Clear career paths and advancement opportunities",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace new ideas and cutting-edge technologies",
      icon: HiLightningBolt,
    },
    {
      title: "Customer Success",
      description: "Our customers' success is our success",
      icon: HiCheckCircle,
    },
    {
      title: "Continuous Learning",
      description: "We invest in growth and development",
      icon: HiAcademicCap,
    },
    {
      title: "Team Collaboration",
      description: "Together we achieve more",
      icon: HiUsers,
    },
  ];

  const hiringProcess = [
    {
      step: 1,
      title: "Apply Online",
      description: "Submit your application through our career portal",
      icon: "📝",
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "Our HR team reviews your application",
      icon: "🔍",
    },
    {
      step: 3,
      title: "Technical Assessment",
      description: "Showcase your skills through practical tests",
      icon: "💻",
    },
    {
      step: 4,
      title: "Interview Rounds",
      description: "Meet with team members and managers",
      icon: "🤝",
    },
    {
      step: 5,
      title: "Offer & Onboarding",
      description: "Join the Limitless family!",
      icon: "🎉",
    },
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;

    const matchesLocation =
      selectedLocation === "all" ||
      job.location.toLowerCase() === selectedLocation.toLowerCase();

    const matchesType = selectedType === "all" || job.type === selectedType;

    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>

        <div className="container-custom px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <HiBriefcase className="w-5 h-5" />
              <span className="text-sm font-semibold">Join Our Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              Build Your Career with{" "}
              <span className="text-secondary-300">Limitless</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-primary-100 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Join a team of passionate innovators creating the future of
              technology
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="#openings"
                className="btn-secondary inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100"
              >
                <span>View Open Positions</span>
                <HiChevronRight className="w-5 h-5" />
              </a>
              <Link
                to="/about"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                Learn About Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {jobOpenings.length}+
                </div>
                <div className="text-sm text-primary-200">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-primary-200">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-primary-200">Remote Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <HiSparkles className="w-4 h-4" />
              <span>Why Limitless?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits
              and a great work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Values that drive us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 text-center border border-gray-200 dark:border-dark-700 hover:shadow-lg transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section
        id="openings"
        className="section-padding bg-white dark:bg-dark-900"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {departments.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {jobTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {filteredJobs.length} position
              {filteredJobs.length !== 1 ? "s" : ""} found
            </div>
          </div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Left Side */}
                      <div className="flex-1">
                        <div className="flex items-start space-x-4 mb-4">
                          <div
                            className={`w-14 h-14 ${job.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <job.icon className={`w-7 h-7 ${job.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center space-x-1">
                                <HiLocationMarker className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <HiBriefcase className="w-4 h-4" />
                                <span className="capitalize">
                                  {job.type.replace("-", " ")}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <HiClock className="w-4 h-4" />
                                <span>{job.experience}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <HiCurrencyRupee className="w-4 h-4" />
                                <span>{job.salary}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
                            {
                              departments.find(
                                (d) => d.value === job.department,
                              )?.label
                            }
                          </span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full">
                            Posted {job.posted}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full">
                            {job.applicants} applicants
                          </span>
                        </div>

                        {/* Expandable Details */}
                        <details className="group">
                          <summary className="flex items-center space-x-2 cursor-pointer text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                            <span>View Details</span>
                            <HiChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="mt-4 p-6 bg-gray-50 dark:bg-dark-700/50 rounded-xl">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                  Requirements
                                </h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                      <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                  Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                      <HiCheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </details>
                      </div>

                      {/* Right Side - CTA */}
                      <div className="flex-shrink-0">
                        <Link
                          to={`/careers/apply/${job.id}`}
                          className="btn-primary inline-flex items-center space-x-2 w-full lg:w-auto justify-center"
                        >
                          <span>Apply Now</span>
                          <HiChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiSearch className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No Positions Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("all");
                  setSelectedLocation("all");
                  setSelectedType("all");
                }}
                className="btn-outline"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A transparent and straightforward journey from application to
              offer
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 dark:from-primary-800 dark:via-primary-600 dark:to-secondary-600 -translate-y-1/2"></div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {hiringProcess.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-white dark:bg-dark-800 border-4 border-primary-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold shadow-md">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <HiSparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100"
              >
                <span>Send Your Resume</span>
                <HiChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:careers@limitlessinfotech.com"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                Email: careers@limitlessinfotech.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
