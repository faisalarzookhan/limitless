import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Heart, 
  Globe, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Cpu,
  Trophy,
  Target,
  Eye
} from 'lucide-react';
import ErrorBoundary from '../../components/ErrorBoundary';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const values = [
    {
      icon: ShieldCheck,
      title: 'Security First',
      description: 'We prioritize security in every line of code, ensuring your data and systems are protected with enterprise-grade encryption.'
    },
    {
      icon: Sparkles,
      title: 'Innovation Driven',
      description: 'We stay ahead of technology trends, constantly exploring new solutions to give your business a competitive edge.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our mission. We provide white-glove service and support, treating your business as our own.'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in development, testing, and delivery, ensuring every project exceeds expectations.'
    },
    {
      icon: Zap,
      title: 'Agile & Efficient',
      description: 'We deliver projects on time and within budget, using agile methodologies to adapt quickly to your evolving needs.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We build solutions that scale globally, following international standards and best practices.'
    }
  ];

  const team = [
    {
      name: 'Faisal Khan',
      role: 'Founder & CEO',
      bio: 'Visionary leader with a passion for transforming businesses through technology. With over a decade of experience, Faisal founded Limitless Inotech with a mission to empower businesses with secure, unique, and limitless technology.',
      expertise: ['Strategic Planning', 'Business Development', 'Innovation', 'Client Relations'],
      image: null
    },
    {
      name: 'Taj Nadaf',
      role: 'Co-Founder',
      bio: "Dynamic co-founder with deep expertise in technology innovation and business operations. Taj plays a pivotal role in driving the company's growth strategy and operational excellence.",
      expertise: ['Operations', 'Technology Strategy', 'Leadership', 'Business Growth'],
      image: null
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Limitless Inotech was born with a vision to revolutionize business technology.' },
    { year: '2019', title: 'First Major Client', description: 'Successfully delivered our first enterprise-level CRM system.' },
    { year: '2020', title: 'Team Expansion', description: 'Grew our team to 15+ talented developers, designers, and engineers.' },
    { year: '2021', title: 'Industry Recognition', description: 'Received multiple awards for innovation and client satisfaction.' },
    { year: '2022', title: '50+ Successful Projects', description: 'Crossed the milestone of 50 completed projects across various industries.' },
    { year: '2023', title: 'Global Reach', description: 'Expanded services internationally, serving clients across multiple continents.' }
  ];

  const expertise = [
    { name: 'Web Development', percentage: 95 },
    { name: 'Mobile App Development', percentage: 90 },
    { name: 'Custom Software', percentage: 92 },
    { name: 'AI & Automation', percentage: 88 },
    { name: 'Cloud Solutions', percentage: 90 },
    { name: 'UI/UX Design', percentage: 93 }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Global Clients' },
    { number: '12+', label: 'Industry Awards' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <ErrorBoundary>
      <div className="relative">
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-500/10 blur-[120px] rounded-full" />
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
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">Our Story</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Pioneering the Future of <br />
              <span className="bg-gradient-to-r from-primary-400 via-primary-200 to-secondary-400 bg-clip-text text-transparent">
                Intelligent Enterprise
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are more than a software house. We are architects of digital transformation, dedicated to building secure, unique, and limitless solutions that redefine what's possible in business.
            </motion.p>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To lead the world into the next era of intelligent business systems, where innovation meets execution, and where businesses can achieve their full potential through technology that is secure, unique, and limitless.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that transform operations, enhance customer experiences, and drive sustainable growth. We are committed to delivering excellence and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 font-medium tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-400">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-primary-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Meet Our Founders</h2>
              <p className="text-gray-400">Leadership that drives innovation and excellence</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {team.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-10 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-32 h-32 text-primary-400" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-primary-400 font-medium mb-6 uppercase tracking-widest text-sm">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed mb-8">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-400">Key milestones in our growth and evolution</p>
            </div>
            <div className="relative">
              <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center font-bold text-white shadow-lg shadow-primary-500/20">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="text-primary-400 font-bold mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold mb-2 text-white">{milestone.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-gray-400">Technical proficiency across multiple domains</p>
            </div>
            <div className="space-y-8">
              {expertise.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-primary-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 backdrop-blur-xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and create a solution that exceeds your expectations. Our team of experts is ready to help you innovate.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-started" className="px-10 py-4 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/20 inline-flex items-center gap-2 group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default About;