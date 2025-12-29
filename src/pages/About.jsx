import { Link } from 'react-router-dom';
import {
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
  HiUserGroup,
  HiTrendingUp,
  HiHeart,
  HiGlobe,
  HiCode,
  HiCheckCircle,
  HiArrowRight,
  HiMail,
  HiPhone,
  HiLocationMarker,
} from 'react-icons/hi';
import { AnimatedElement, DuoToneIcon } from '../components/ui';
import FeedbackForm from '../components/FeedbackForm';

const About = () => {
  const values = [
    {
      icon: HiShieldCheck,
      title: 'Security First',
      description:
        'We prioritize security in every line of code, ensuring your data and systems are protected with enterprise-grade encryption and best practices.',
    },
    {
      icon: HiSparkles,
      title: 'Innovation Driven',
      description:
        'We stay ahead of technology trends, constantly exploring new solutions to give your business a competitive edge.',
    },
    {
      icon: HiHeart,
      title: 'Client-Centric',
      description:
        'Your success is our mission. We provide white-glove service and support, treating your business as our own.',
    },
    {
      icon: HiCheckCircle,
      title: 'Quality Excellence',
      description:
        'We maintain the highest standards in development, testing, and delivery, ensuring every project exceeds expectations.',
    },
    {
      icon: HiLightningBolt,
      title: 'Agile & Efficient',
      description:
        'We deliver projects on time and within budget, using agile methodologies to adapt quickly to your evolving needs.',
    },
    {
      icon: HiGlobe,
      title: 'Global Perspective',
      description:
        'We build solutions that scale globally, following international standards and best practices.',
    },
  ];

  const team = [
    {
      name: 'Faisal Khan',
      role: 'Founder & CEO',
      bio: 'Visionary leader with a passion for transforming businesses through technology. With over a decade of experience in software development and business strategy, Faisal founded Limitless Infotech Solution with a mission to empower businesses with technology that is secure, unique, and limitless.',
      expertise: [
        'Strategic Planning',
        'Business Development',
        'Technology Innovation',
        'Client Relations',
      ],
      image: null,
      social: {
        linkedin: 'https://www.linkedin.com/in/faisalarzookhan',
        twitter: 'https://twitter.com/faisalarzookhan',
        email: 'faisal.khan@limitlessinfotech.com',
      },
    },
    {
      name: 'Taj Nadaf',
      role: 'Co-Founder',
      bio: "Dynamic co-founder with deep expertise in technology innovation and business operations. Taj plays a pivotal role in driving the company's growth strategy and ensuring operational excellence across all projects.",
      expertise: [
        'Operations Management',
        'Technology Strategy',
        'Team Leadership',
        'Business Growth',
      ],
      image: null,
      social: {
        linkedin: 'https://www.linkedin.com/in/taj-nadaf',
        twitter: 'https://twitter.com/tajmohdnadaf',
        email: 'taj.nadaf@limitlessinfotech.com',
      },
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description:
        'Limitless Infotech Solution was born with a vision to revolutionize business technology.',
    },
    {
      year: '2019',
      title: 'First Major Client',
      description:
        'Successfully delivered our first enterprise-level CRM system, setting the foundation for excellence.',
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description:
        'Grew our team to 15+ talented developers, designers, and engineers.',
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description:
        'Received multiple awards for innovation and client satisfaction in software development.',
    },
    {
      year: '2022',
      title: '50+ Successful Projects',
      description:
        'Crossed the milestone of 50 completed projects across various industries.',
    },
    {
      year: '2023',
      title: 'Global Reach',
      description:
        'Expanded services internationally, serving clients across multiple continents.',
    },
  ];

  const expertise = [
    { name: 'Web Development', percentage: 95 },
    { name: 'Mobile App Development', percentage: 90 },
    { name: 'Custom Software', percentage: 92 },
    { name: 'AI & Automation', percentage: 88 },
    { name: 'Cloud Solutions', percentage: 90 },
    { name: 'UI/UX Design', percentage: 93 },
  ];

  const stats = [
    { number: '50+', label: 'Enterprise Solutions' },
    { number: '7', label: 'SaaS Products' },
    { number: '10K+', label: 'Users' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 bg-architectural-grid">
        {/* Asymmetrical background elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-2/5 h-2/3 bg-gradient-to-l from-amber-500/10 to-transparent"></div>

        {/* Geometric pattern derived from logo architecture */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-16 h-16 border-l-4 border-b-4 border-blue-500 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-r-4 border-t-4 border-amber-500 rotate-12"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 border-t-4 border-r-4 border-blue-600 -rotate-12"></div>

          {/* Additional architectural elements */}
          <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-blue-500 to-amber-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-blue-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
          <div className="absolute top-1/4 right-1/3 w-24 h-2 bg-gradient-to-r from-amber-500 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-blue-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-blue-200 dark:border-blue-700">
              <HiSparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-blue-900 dark:text-white">
              About Limitless Infotech Solution
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200">
              Where Innovation Meets Execution
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section - Asymmetrical Layout */}
      <section className="section-padding bg-white dark:bg-blue-900/50 relative overflow-hidden">
        {/* Architectural background elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-300 opacity-30"></div>
          <div className="absolute bottom-1/3 right-20 w-16 h-16 border-2 border-amber-400 opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-32 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-2 bg-gradient-to-r from-amber-500/20 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center text-blue-900 dark:text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <div className="space-y-6 text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
              <p>
                At{' '}
                <span className="font-semibold text-blue-700 dark:text-blue-300">
                  LimitlessInotech
                </span>
                , we believe that technology should empower, not complicate.
                Founded with a vision to transform how businesses operate, we
                are more than just developers – we are architects of
                transformation.
              </p>
              <p>
                Every line of code we write, every system we build, is crafted
                with precision, security, and your success in mind. We
                understand that in today's digital world, your technology
                infrastructure is the backbone of your business. That's why we
                don't just deliver software; we deliver solutions that are
                secure, scalable, and truly unique to your needs.
              </p>
              <p>
                Our journey began with a simple yet powerful mission: to lead
                the world into the next era of intelligent business systems. We
                saw businesses struggling with outdated technology, disconnected
                systems, and solutions that didn't fit their unique processes.
                We knew there had to be a better way.
              </p>
              <p>
                Today, we serve clients across industries – from startups
                finding their footing to established enterprises seeking digital
                transformation. Each project is an opportunity to push
                boundaries, explore new technologies, and create solutions that
                make a real difference.
              </p>
              <p className="text-xl font-semibold text-blue-900 dark:text-white">
                We are not just building software. We are building the future of
                your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Asymmetrical Layout */}
      <section
        className="section-padding bg-blue-50 dark:bg-blue-900/30 relative overflow-hidden"
        aria-labelledby="vision-mission-heading"
      >
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-400/30 rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-amber-400/30 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-2 bg-gradient-to-r from-blue-500/20 to-amber-500/20"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-40 bg-gradient-to-b from-amber-500/20 to-blue-500/20"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white dark:bg-blue-800/50 rounded-3xl p-10 shadow-soft border border-blue-200 dark:border-blue-700 relative overflow-hidden">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                <DuoToneIcon
                  icon={HiSparkles}
                  size="xl"
                  primaryColor="text-white"
                  secondaryColor="text-white/30"
                />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-blue-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed">
                To lead the world into the next era of intelligent business
                systems, where innovation meets execution, and where businesses
                can achieve their full potential through technology that is
                secure, unique, and limitless.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-blue-800/50 rounded-3xl p-10 shadow-soft border border-blue-200 dark:border-blue-700 relative overflow-hidden">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <DuoToneIcon
                  icon={HiTrendingUp}
                  size="xl"
                  primaryColor="text-white"
                  secondaryColor="text-white/30"
                />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-blue-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed">
                To empower businesses with cutting-edge technology solutions
                that transform operations, enhance customer experiences, and
                drive sustainable growth. We are committed to delivering
                excellence, innovation, and unparalleled client service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Asymmetrical Grid */}
      <section className="section-padding bg-white dark:bg-blue-900 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/5 w-24 h-24 border-t-2 border-l-2 border-blue-400/30 rotate-12"></div>
          <div className="absolute top-1/4 right-1/5 w-16 h-16 border-b-2 border-r-2 border-amber-400/30 -rotate-12"></div>
          <div className="absolute bottom-1/5 left-1/4 w-32 h-2 bg-gradient-to-r from-blue-500/15 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-24 bg-gradient-to-b from-amber-500/15 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700"
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-700 dark:text-blue-300 mb-3">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-600 dark:text-blue-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section - Editorial Layout */}
      <section
        className="section-padding bg-blue-50 dark:bg-blue-900/30 relative overflow-hidden"
        aria-labelledby="core-values-heading"
      >
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/5 w-24 h-24 border-2 border-blue-400/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/5 w-16 h-16 border-2 border-amber-400/20 rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-36 h-2 bg-gradient-to-r from-blue-500/10 to-amber-500/10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-32 bg-gradient-to-b from-amber-500/10 to-blue-500/10"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2
              id="core-values-heading"
              className="text-4xl md:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-blue-800/50 rounded-2xl p-8 border border-blue-200 dark:border-blue-700 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-700 dark:to-blue-800 rounded-xl flex items-center justify-center mb-6">
                  <DuoToneIcon
                    icon={value.icon}
                    size="lg"
                    primaryColor="text-blue-600 dark:text-blue-400"
                    secondaryColor="text-blue-600/30 dark:text-blue-400/30"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Asymmetrical Layout */}
      <section className="section-padding bg-white dark:bg-blue-900 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/4 w-28 h-28 border-2 border-blue-400/25 rotate-12"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-amber-400/25 -rotate-12"></div>
          <div className="absolute bottom-1/5 left-1/3 w-40 h-2 bg-gradient-to-r from-blue-500/15 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-36 bg-gradient-to-b from-amber-500/15 to-transparent"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Founder
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Leadership that drives innovation and excellence
            </p>
          </div>

          {team.map((member, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Photo */}
                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-100 to-amber-100 dark:from-blue-800/50 dark:to-amber-800/20 rounded-3xl -rotate-3"></div>
                    <div className="relative aspect-square bg-gradient-to-br from-blue-600 to-amber-500 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                      <HiUserGroup className="w-32 h-32 opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-7">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 text-blue-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-6">
                    {member.role}
                  </p>
                  <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-blue-900 dark:text-white mb-3 uppercase tracking-wide">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-800/50 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:contact@limitlessinfotech.com"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <HiMail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                    <a
                      href="tel:+917710909492"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <HiPhone className="w-5 h-5" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Section - Asymmetrical Timeline */}
      <section className="section-padding bg-blue-50 dark:bg-blue-900/30 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-blue-400/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/6 w-16 h-16 border-2 border-amber-400/20 rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-36 h-2 bg-gradient-to-r from-blue-500/10 to-amber-500/10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-32 bg-gradient-to-b from-amber-500/10 to-blue-500/10"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-[3.25rem] top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-amber-500"></div>
                  )}

                  {/* Year Badge */}
                  <div className="absolute left-0 top-0 w-24 h-12 bg-gradient-to-r from-blue-600 to-amber-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Asymmetrical Layout */}
      <section className="section-padding bg-white dark:bg-blue-900 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border-l-4 border-b-4 border-blue-500 rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border-r-4 border-t-4 border-amber-500 rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-t-4 border-r-4 border-blue-600 -rotate-12"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300">
              Technical proficiency across multiple domains
            </p>
          </div>

          <div className="space-y-8">
            {expertise.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-blue-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-blue-100 dark:bg-blue-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Asymmetrical Layout */}
      <section className="section-padding bg-blue-50 dark:bg-blue-900/30 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border-l-4 border-b-4 border-blue-500 rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-r-4 border-t-4 border-amber-500 rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-t-4 border-r-4 border-blue-600 -rotate-12"></div>

          {/* Additional architectural elements */}
          <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-blue-500 to-amber-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-blue-400 rounded-full opacity-30"></div>
        </div>

        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Cutting-edge technologies we use to build your solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Frontend Technologies */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">JS</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                JavaScript
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Frontend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">RE</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                React
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Frontend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">NG</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Angular
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Frontend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">VU</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Vue.js
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Frontend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">NX</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Next.js
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Frontend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">TS</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                TypeScript
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Frontend
              </p>
            </div>

            {/* Backend Technologies */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">ND</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Node.js
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Backend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">PY</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Python
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Backend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">DJ</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Django
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Backend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">SP</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Spring
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Backend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">.N</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                .NET
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Backend
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">PH</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                PHP
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Backend
              </p>
            </div>

            {/* Databases */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">MG</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                MongoDB
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Database
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">PS</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                PostgreSQL
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Database
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">MY</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                MySQL
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Database
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">RD</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Redis
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Database
              </p>
            </div>

            {/* Mobile */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">RN</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                React Native
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Mobile</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">FL</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Flutter
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Mobile</p>
            </div>

            {/* AI & ML */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">TF</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                TensorFlow
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">AI/ML</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">PY</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                PyTorch
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">AI/ML</p>
            </div>

            {/* Cloud & DevOps */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">AW</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                AWS
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Cloud</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">AZ</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Azure
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Cloud</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">GC</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                GCP
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Cloud</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">DO</span>
              </div>
              <h3 className="font-bold text-blue-900 dark:text-white mb-1">
                Docker
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">DevOps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section - Asymmetrical Layout */}
      <section className="section-padding bg-white dark:bg-blue-900 relative overflow-hidden">
        {/* Architectural geometric elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/5 left-1/5 w-24 h-24 border-2 border-blue-400/20 rounded-full"></div>
          <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 border-amber-400/20 rotate-45"></div>
        </div>

        <div className="container-custom max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-blue-900 dark:text-white">
              Share Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Feedback
              </span>
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Your thoughts and experiences help us improve and grow
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-800/30 rounded-3xl p-8 md:p-10 border border-blue-200 dark:border-blue-700">
            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* CTA Section - Asymmetrical Layout */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Work With Us?
            <br />
            <span className="text-amber-400">
              Architectural Excellence
            </span>{' '}
            Awaits
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with
            innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="mission-critical-button text-blue-900 bg-amber-400 hover:bg-amber-300"
            >
              Begin Strategic Initiative
              <HiArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-bold text-base tracking-wide border-2 border-amber-400 text-amber-400 bg-transparent hover:bg-amber-400/20 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
