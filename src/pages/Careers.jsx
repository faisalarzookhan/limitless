import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
} from 'react-icons/hi';
import ErrorBoundary from '../components/ErrorBoundary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales & Marketing' },
    { value: 'support', label: 'Customer Support' },
    { value: 'operations', label: 'Operations' },
    { value: 'hr', label: 'Human Resources' },
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'remote', label: 'Remote' },
    { value: 'hybrid', label: 'Hybrid' },
  ];

  const jobTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'full-time', label: 'Full-Time' },
    { value: 'part-time', label: 'Part-Time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Mumbai',
      type: 'full-time',
      experience: '4-6 years',
      salary: '₹12L - ₹18L per annum',
      description:
        'We are looking for an experienced Full Stack Developer to join our engineering team.',
      requirements: [
        'Strong proficiency in React, Node.js, and MongoDB',
        'Experience with REST APIs and microservices',
        'Knowledge of cloud platforms (AWS/Azure)',
        'Excellent problem-solving skills',
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code',
        'Mentor junior developers',
      ],
      icon: HiCode,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      posted: '2 days ago',
      applicants: 45,
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Remote',
      type: 'full-time',
      experience: '2-4 years',
      salary: '₹8L - ₹12L per annum',
      description:
        'Join our design team to create beautiful and intuitive user experiences.',
      requirements: [
        'Proficiency in Figma, Adobe XD, and Sketch',
        'Strong portfolio demonstrating UI/UX work',
        'Understanding of design systems',
        'Experience with user research and testing',
      ],
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Collaborate with developers and product managers',
        'Maintain and evolve design systems',
      ],
      icon: HiColorSwatch,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      posted: '5 days ago',
      applicants: 32,
    },
    {
      id: 3,
      title: 'Mobile App Developer (React Native)',
      department: 'engineering',
      location: 'Hybrid',
      type: 'full-time',
      experience: '3-5 years',
      salary: '₹10L - ₹15L per annum',
      description:
        'Build cutting-edge mobile applications for iOS and Android platforms.',
      requirements: [
        'Expert-level knowledge of React Native',
        'Experience with native iOS/Android development',
        'Knowledge of mobile app deployment processes',
        'Understanding of mobile UI/UX best practices',
      ],
      responsibilities: [
        'Develop and maintain mobile applications',
        'Optimize app performance and user experience',
        'Integrate with backend APIs',
        'Participate in code reviews',
      ],
      icon: HiDeviceMobile,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      posted: '1 week ago',
      applicants: 28,
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'sales',
      location: 'Mumbai',
      type: 'full-time',
      experience: '5-7 years',
      salary: '₹15L - ₹25L per annum',
      description:
        'Drive business growth and establish strategic partnerships.',
      requirements: [
        'Proven track record in B2B sales',
        'Strong negotiation and communication skills',
        'Experience in IT/Software industry',
        'Network of potential clients',
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain client relationships',
        'Develop sales strategies and proposals',
        'Achieve revenue targets',
      ],
      icon: HiChartBar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      posted: '3 days ago',
      applicants: 52,
    },
    {
      id: 5,
      title: 'Customer Support Specialist',
      department: 'support',
      location: 'Remote',
      type: 'full-time',
      experience: '1-3 years',
      salary: '₹4L - ₹6L per annum',
      description:
        'Provide exceptional support to our customers and help them succeed.',
      requirements: [
        'Excellent communication skills',
        'Technical aptitude and problem-solving skills',
        'Experience with support ticketing systems',
        'Customer-centric mindset',
      ],
      responsibilities: [
        'Respond to customer inquiries via email, chat, and phone',
        'Troubleshoot technical issues',
        'Document and track customer interactions',
        'Collaborate with product team on improvements',
      ],
      icon: HiSupport,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      posted: '4 days ago',
      applicants: 67,
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Hybrid',
      type: 'full-time',
      experience: '3-5 years',
      salary: '₹12L - ₹18L per annum',
      description:
        'Manage and optimize our infrastructure and deployment pipelines.',
      requirements: [
        'Experience with AWS/Azure/GCP',
        'Strong knowledge of Docker and Kubernetes',
        'Experience with CI/CD tools (Jenkins, GitLab CI)',
        'Scripting skills (Python, Bash)',
      ],
      responsibilities: [
        'Maintain and improve infrastructure',
        'Automate deployment processes',
        'Monitor system performance and security',
        'Collaborate with development teams',
      ],
      icon: HiShieldCheck,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      posted: '1 week ago',
      applicants: 38,
    },
    {
      id: 7,
      title: 'Software Development Intern',
      department: 'engineering',
      location: 'Mumbai',
      type: 'internship',
      experience: '0-1 years',
      salary: '₹15K - ₹25K per month',
      description: 'Learn and grow with our engineering team as an intern.',
      requirements: [
        'Currently pursuing or recently completed CS/IT degree',
        'Basic knowledge of programming (JavaScript, Python, or Java)',
        'Passion for learning and problem-solving',
        'Good communication skills',
      ],
      responsibilities: [
        'Assist in development projects',
        'Learn from senior developers',
        'Write and test code',
        'Participate in team meetings and code reviews',
      ],
      icon: HiAcademicCap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      posted: '1 day ago',
      applicants: 145,
    },
    {
      id: 8,
      title: 'Product Manager',
      department: 'operations',
      location: 'Hybrid',
      type: 'full-time',
      experience: '4-6 years',
      salary: '₹15L - ₹22L per annum',
      description: 'Lead product strategy and drive product development.',
      requirements: [
        'Proven experience as a Product Manager',
        'Strong analytical and strategic thinking',
        'Experience with Agile methodologies',
        'Excellent stakeholder management skills',
      ],
      responsibilities: [
        'Define product vision and roadmap',
        'Gather and prioritize requirements',
        'Work closely with engineering and design teams',
        'Analyze metrics and user feedback',
      ],
      icon: HiLightningBolt,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      posted: '6 days ago',
      applicants: 41,
    },
  ];

  const benefits = [
    {
      icon: HiCurrencyRupee,
      title: 'Competitive Salary',
      description:
        'Market-leading compensation packages with performance bonuses',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: HiHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
    },
    {
      icon: HiAcademicCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and professional growth',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: HiClock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible working hours',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: HiUsers,
      title: 'Great Team Culture',
      description: 'Collaborative environment with talented professionals',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      icon: HiTrendingUp,
      title: 'Career Growth',
      description: 'Clear career paths and advancement opportunities',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace new ideas and cutting-edge technologies',
      icon: HiLightningBolt,
    },
    {
      title: 'Customer Success',
      description: "Our customers' success is our success",
      icon: HiCheckCircle,
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in growth and development',
      icon: HiAcademicCap,
    },
    {
      title: 'Team Collaboration',
      description: 'Together we achieve more',
      icon: HiUsers,
    },
  ];

  const hiringProcess = [
    {
      step: 1,
      title: 'Apply Online',
      description: 'Submit your application through our career portal',
      icon: '📝',
    },
    {
      step: 2,
      title: 'Initial Screening',
      description: 'Our HR team reviews your application',
      icon: '🔍',
    },
    {
      step: 3,
      title: 'Technical Assessment',
      description: 'Showcase your skills through practical tests',
      icon: '💻',
    },
    {
      step: 4,
      title: 'Interview Rounds',
      description: 'Meet with team members and managers',
      icon: '🤝',
    },
    {
      step: 5,
      title: 'Offer & Onboarding',
      description: 'Join the Limitless family!',
      icon: '🎉',
    },
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch =
      searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === 'all' || job.department === selectedDepartment;

    const matchesLocation =
      selectedLocation === 'all' ||
      job.location.toLowerCase() === selectedLocation.toLowerCase();

    const matchesType = selectedType === 'all' || job.type === selectedType;

    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HiBriefcase className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">Join Our Team</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Outfit']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build Your Career with{' '}
              <span className="text-[#ffc957]">Limitless</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join a team of passionate innovators creating the future of
              technology
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#openings"
                className="px-8 py-4 bg-[#0a0b0d] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit'] inline-flex items-center space-x-2"
              >
                <span>View Open Positions</span>
                <HiChevronRight className="w-5 h-5" />
              </a>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']"
              >
                Learn About Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 font-['Outfit']">
                  {jobOpenings.length}+
                </div>
                <div className="text-sm text-gray-400 font-['Figtree']">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 font-['Outfit']">50+</div>
                <div className="text-sm text-gray-400 font-['Figtree']">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 font-['Outfit']">100%</div>
                <div className="text-sm text-gray-400 font-['Figtree']">Remote Friendly</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#2563eb]/20 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold mb-4 font-['Outfit']"
              variants={itemVariants}
            >
              <HiSparkles className="w-4 h-4" />
              <span>Why Limitless?</span>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Outfit']"
              variants={itemVariants}
            >
              Benefits & Perks
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              We believe in taking care of our team with comprehensive benefits
              and a great work environment
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group bg-[#1a1c20] rounded-2xl p-8 border border-[#2563eb]/30 hover:border-[#2563eb] transition-all duration-300 hover:shadow-xl"
                variants={itemVariants}
              >
                <div
                  className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-['Outfit']">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-['Figtree']">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Outfit']"
              variants={itemVariants}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Values that drive us every day
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1c20] rounded-xl p-6 text-center border border-[#2563eb]/30 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
              >
                <value.icon className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 font-['Figtree']">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section
        id="openings"
        className="section-padding bg-[#0a0b0d]"
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Outfit']"
              variants={itemVariants}
            >
              Open Positions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Find your perfect role and start your journey with us
            </motion.p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div 
            className="bg-[#1a1c20] rounded-2xl p-6 mb-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#2563eb]/30 bg-[#0a0b0d] text-white focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={e => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 rounded-xl border border-[#2563eb]/30 bg-[#0a0b0d] text-white focus:outline-none focus:border-[#2563eb]"
              >
                {departments.map(dept => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value)}
                className="px-4 py-3 rounded-xl border border-[#2563eb]/30 bg-[#0a0b0d] text-white focus:outline-none focus:border-[#2563eb]"
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-[#2563eb]/30 bg-[#0a0b0d] text-white focus:outline-none focus:border-[#2563eb]"
              >
                {jobTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 text-sm text-gray-400 font-['Figtree']">
              {filteredJobs.length} position
              {filteredJobs.length !== 1 ? 's' : ''} found
            </div>
          </motion.div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <motion.div 
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredJobs.map(job => (
                <motion.div
                  key={job.id}
                  className="bg-[#1a1c20] rounded-2xl border border-[#2563eb]/30 hover:border-[#2563eb] hover:shadow-xl transition-all duration-300 overflow-hidden"
                  variants={itemVariants}
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
                            <h3 className="text-2xl font-bold text-white mb-2 font-['Outfit']">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-['Figtree']">
                              <div className="flex items-center space-x-1">
                                <HiLocationMarker className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <HiBriefcase className="w-4 h-4" />
                                <span className="capitalize">
                                  {job.type.replace('-', ' ')}
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

                        <p className="text-gray-400 mb-4 font-['Figtree']">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium rounded-full font-['Figtree']">
                            {
                              departments.find(d => d.value === job.department)
                                ?.label
                            }
                          </span>
                          <span className="px-3 py-1 bg-[#1a1c20] text-gray-400 text-sm font-medium rounded-full font-['Figtree']">
                            Posted {job.posted}
                          </span>
                          <span className="px-3 py-1 bg-[#1a1c20] text-gray-400 text-sm font-medium rounded-full font-['Figtree']">
                            {job.applicants} applicants
                          </span>
                        </div>

                        {/* Expandable Details */}
                        <details className="group">
                          <summary className="flex items-center space-x-2 cursor-pointer text-[#2563eb] hover:text-[#ffc957] font-medium">
                            <span>View Details</span>
                            <HiChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="mt-4 p-6 bg-[#0a0b0d] rounded-xl border border-[#2563eb]/30">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-white mb-3 font-['Outfit']">
                                  Requirements
                                </h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start space-x-2 text-sm text-gray-400 font-['Figtree']"
                                    >
                                      <HiCheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-white mb-3 font-['Outfit']">
                                  Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start space-x-2 text-sm text-gray-400 font-['Figtree']"
                                    >
                                      <HiCheckCircle className="w-5 h-5 text-[#ffc957] flex-shrink-0 mt-0.5" />
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
                          className="px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit'] inline-flex items-center space-x-2 w-full lg:w-auto justify-center"
                        >
                          <span>Apply Now</span>
                          <HiChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-[#1a1c20] rounded-full flex items-center justify-center mx-auto mb-6">
                <HiSearch className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                No Positions Found
              </h3>
              <p className="text-gray-400 mb-6 font-['Figtree']">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                  setSelectedType('all');
                }}
                className="px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="section-padding bg-[#0a0b0d]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Outfit']"
              variants={itemVariants}
            >
              Our Hiring Process
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              A transparent and straightforward journey from application to
              offer
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#ffc957] to-[#0a0b0d] -translate-y-1/2"></div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {hiringProcess.map(step => (
                  <motion.div key={step.step} className="text-center" variants={itemVariants}>
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-[#1a1c20] border-4 border-[#2563eb] rounded-full flex items-center justify-center text-3xl shadow-lg">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold shadow-md">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-['Figtree']">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#2563eb] via-[#ffc957] to-[#0a0b0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HiSparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-['Outfit']">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-['Figtree']">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#0a0b0d] text-white rounded-lg hover:bg-[#ffc957] hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit'] inline-flex items-center space-x-2"
              >
                <span>Send Your Resume</span>
                <HiChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:careers@limitlessinfotech.com"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0a0b0d] transition-colors duration-300 font-['Outfit']"
              >
                Email: careers@limitlessinfotech.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
};

export default Careers;
