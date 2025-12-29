import { Link } from 'react-router-dom';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8">
              <HiLightningBolt className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Innovation & Research
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Innovation
              <br />
              Lab
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Where cutting-edge research meets practical business solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100"
              >
                Partner with Our Lab
              </Link>
              <Link
                to="/research"
                className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600"
              >
                View Research Papers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {innovationStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Current <span className="text-gradient">Research Areas</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our dedicated research teams are exploring the next generation of
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={area.id}
                className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                    {area.status}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Current Projects:
                  </h4>
                  {area.projects.map((project, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Breakthrough <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real-world implementations of our research that deliver measurable
              business value
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovationProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="badge badge-secondary text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    <strong>Impact:</strong> {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Future <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Emerging technologies we're preparing to integrate into our
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {tech.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {tech.timeline}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Investment */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              R&D Investment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold mb-2">15%</div>
                <div>Revenue Invested in R&D</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div>Research Engineers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div>Patent Applications Filed</div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white/90 mb-8">
                We invest heavily in research and development to ensure our
                clients have access to the most advanced technologies and
                solutions.
              </p>
              <Link
                to="/contact"
                className="btn-primary bg-white text-indigo-600 hover:bg-gray-100"
              >
                Join Our Innovation Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-dark-900 dark:to-dark-800 rounded-3xl p-12 md:p-16 text-center border border-indigo-200 dark:border-dark-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Partner with our innovation lab to develop custom solutions for
              your business challenges
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start a Collaboration
              </Link>
              <Link to="/innovation-lab" className="btn-outline">
                View All Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationLab;
