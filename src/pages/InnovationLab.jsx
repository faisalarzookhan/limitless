import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiLightningBolt,
  HiAcademicCap,
  HiChip,
  HiDatabase,
  HiCloud,
  HiCode,
  HiRefresh,
  HiSparkles,
} from 'react-icons/hi';

const InnovationLab = () => {
  const researchAreas = [
    {
      id: 'genai',
      title: 'Generative AI',
      description:
        'Exploring the potential of large language models and generative AI for business automation',
      icon: HiSparkles,
      projects: [
        'Custom GPT implementations for enterprise workflows',
        'AI-powered document processing and analysis',
        'Natural language interfaces for business systems',
        'Automated content generation and summarization',
      ],
      status: 'Active Research',
    },
    {
      id: 'edge',
      title: 'Edge Computing',
      description:
        'Bringing compute closer to data sources for reduced latency and improved performance',
      icon: HiChip,
      projects: [
        'IoT edge processing solutions',
        'Real-time data analytics at the edge',
        'Distributed computing architectures',
        'Edge security and privacy solutions',
      ],
      status: 'In Development',
    },
    {
      id: 'quantum',
      title: 'Quantum-Ready Algorithms',
      description:
        'Preparing for the quantum computing era with quantum-safe algorithms',
      icon: HiAcademicCap,
      projects: [
        'Post-quantum cryptography implementations',
        'Quantum-resistant security protocols',
        'Hybrid classical-quantum algorithms',
        'Quantum simulation applications',
      ],
      status: 'Research Phase',
    },
    {
      id: 'blockchain',
      title: 'Blockchain & DLT',
      description:
        'Decentralized solutions for trust and transparency in business processes',
      icon: HiDatabase,
      projects: [
        'Smart contract implementations',
        'Supply chain transparency solutions',
        'Decentralized identity systems',
        'Tokenization of assets',
      ],
      status: 'Pilot Projects',
    },
  ];

  const innovationProjects = [
    {
      id: 'project1',
      title: 'AI-Powered Predictive Maintenance',
      description:
        'Using machine learning to predict equipment failures before they occur',
      tech: ['TensorFlow', 'Python', 'IoT Sensors', 'Real-time Analytics'],
      impact: 'Reduced downtime by 45% for manufacturing clients',
    },
    {
      id: 'project2',
      title: 'Natural Language Processing Suite',
      description:
        'Advanced NLP tools for document analysis and business intelligence',
      tech: ['BERT', 'Transformers', 'Python', 'NLP'],
      impact: 'Automated analysis of 10,000+ documents per day',
    },
    {
      id: 'project3',
      title: 'Autonomous Testing Framework',
      description:
        'AI-driven testing that adapts to application changes automatically',
      tech: ['Selenium', 'AI Agents', 'Python', 'Computer Vision'],
      impact: 'Reduced manual testing effort by 70%',
    },
    {
      id: 'project4',
      title: 'Federated Learning Platform',
      description:
        'Privacy-preserving machine learning across distributed datasets',
      tech: ['TensorFlow Federated', 'Differential Privacy', 'Blockchain'],
      impact: 'Enabled ML without compromising data privacy',
    },
  ];

  const innovationStats = [
    { label: 'Active Research Projects', value: '24' },
    { label: 'Patent Applications', value: '8' },
    { label: 'Research Papers Published', value: '15' },
    { label: 'Innovation Labs Worldwide', value: '3' },
  ];

  const futureTechnologies = [
    {
      title: 'Neuromorphic Computing',
      description: 'Brain-inspired computing architectures for AI efficiency',
      timeline: '2025-2027',
    },
    {
      title: 'Digital Twins',
      description: 'Virtual replicas of physical systems for optimization',
      timeline: '2024-2025',
    },
    {
      title: 'Extended Reality (XR)',
      description:
        'Immersive interfaces for data visualization and collaboration',
      timeline: '2024-2026',
    },
    {
      title: 'Swarm Intelligence',
      description: 'Coordinated behavior of decentralized systems',
      timeline: '2025-2028',
    },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8"
              variants={itemVariants}
            >
              <HiLightningBolt className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">
                Innovation & Research
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              variants={itemVariants}
            >
              Innovation
              <br />
              Lab
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 font-['Figtree']"
              variants={itemVariants}
            >
              Where cutting-edge research meets practical business solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Link
                to="/contact"
                className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                Partner with Our Lab
              </Link>
              <Link
                to="/research"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-[#2563eb] px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']"
              >
                View Research Papers
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Innovation Stats */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {innovationStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-['Outfit'] font-bold bg-gradient-to-r from-[#2563eb] to-[#ffc957] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-['Figtree']">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Research Areas */}
      <section className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Current <span className="text-[#ffc957]">Research Areas</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Our dedicated research teams are exploring the next generation of
              technologies
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-xl flex items-center justify-center mr-4">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-['Outfit'] font-bold mb-2 text-white">
                        {area.title}
                      </h3>
                      <p className="text-gray-300 font-['Figtree']">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d] px-3 py-1 rounded-full text-sm font-semibold font-['Figtree']">
                    {area.status}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-['Figtree'] font-semibold text-white mb-3">
                    Current Projects:
                  </h4>
                  {area.projects.map((project, idx) => (
                    <div key={idx} className="flex items-start font-['Figtree']">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section className="section-padding bg-gradient-to-br from-[#1a1c25] to-[#2d303d] text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Breakthrough <span className="text-[#ffc957]">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Real-world implementations of our research that deliver measurable
              business value
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovationProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-['Outfit'] font-bold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 font-['Figtree']">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-['Figtree'] font-semibold text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-['Figtree']">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4 border border-green-700">
                  <p className="text-sm text-green-400 font-['Figtree']">
                    <strong>Impact:</strong> {project.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <section className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4"
              variants={itemVariants}
            >
              Future <span className="text-[#ffc957]">Technologies</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Emerging technologies we're preparing to integrate into our
              solutions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-2xl p-8 shadow-xl border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-['Outfit'] font-bold text-white">
                    {tech.title}
                  </h3>
                  <span className="text-sm text-gray-400 font-['Figtree']">
                    {tech.timeline}
                  </span>
                </div>
                <p className="text-gray-300 font-['Figtree']">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Investment */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#2563eb] to-[#ffc957] text-[#0a0b0d]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-8"
              variants={itemVariants}
            >
              R&D Investment
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <div className="text-4xl font-['Outfit'] font-bold mb-2">15%</div>
                <div className="font-['Figtree']">Revenue Invested in R&D</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-4xl font-['Outfit'] font-bold mb-2">50+</div>
                <div className="font-['Figtree']">Research Engineers</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-4xl font-['Outfit'] font-bold mb-2">200+</div>
                <div className="font-['Figtree']">Patent Applications Filed</div>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
              <motion.p 
                className="text-xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
                variants={itemVariants}
              >
                We invest heavily in research and development to ensure our
                clients have access to the most advanced technologies and
                solutions.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="bg-[#0a0b0d] text-[#ffc957] hover:bg-[#1a1c25] px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center font-['Figtree']"
                >
                  Join Our Innovation Network
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#1a1c25] to-[#2d303d] rounded-3xl p-12 md:p-16 text-center border border-gray-700">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-4 text-white"
              variants={itemVariants}
            >
              Interested in Collaborating?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-['Figtree']"
              variants={itemVariants}
            >
              Partner with our innovation lab to develop custom solutions for
              your business challenges
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Link to="/contact" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']">
                Start a Collaboration
              </Link>
              <Link to="/innovation-lab" className="bg-transparent border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors font-['Figtree']">
                View All Research
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default InnovationLab;