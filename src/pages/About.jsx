import { Link } from "react-router-dom";
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
} from "react-icons/hi";

const About = () => {
  const values = [
    {
      icon: HiShieldCheck,
      title: "Security First",
      description:
        "We prioritize security in every line of code, ensuring your data and systems are protected with enterprise-grade encryption and best practices.",
    },
    {
      icon: HiSparkles,
      title: "Innovation Driven",
      description:
        "We stay ahead of technology trends, constantly exploring new solutions to give your business a competitive edge.",
    },
    {
      icon: HiHeart,
      title: "Client-Centric",
      description:
        "Your success is our mission. We provide white-glove service and support, treating your business as our own.",
    },
    {
      icon: HiCheckCircle,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in development, testing, and delivery, ensuring every project exceeds expectations.",
    },
    {
      icon: HiLightningBolt,
      title: "Agile & Efficient",
      description:
        "We deliver projects on time and within budget, using agile methodologies to adapt quickly to your evolving needs.",
    },
    {
      icon: HiGlobe,
      title: "Global Perspective",
      description:
        "We build solutions that scale globally, following international standards and best practices.",
    },
  ];

  const team = [
    {
      name: "Faisal Khan",
      role: "Founder & CEO",
      bio: "Visionary leader with a passion for transforming businesses through technology. With over a decade of experience in software development and business strategy, Faisal founded Limitless Infotech Solution with a mission to empower businesses with technology that is secure, unique, and limitless.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Technology Innovation",
        "Client Relations",
      ],
      image: null,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "faisal@limitlessinfotech.com",
      },
    },
    {
      name: "Taj Nadaf",
      role: "Co-Founder",
      bio: "Dynamic co-founder with deep expertise in technology innovation and business operations. Taj plays a pivotal role in driving the company's growth strategy and ensuring operational excellence across all projects.",
      expertise: [
        "Operations Management",
        "Technology Strategy",
        "Team Leadership",
        "Business Growth",
      ],
      image: null,
      social: {
        linkedin: "#",
        email: "taj@limitlessinfotech.com",
      },
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Limitless Infotech Solution was born with a vision to revolutionize business technology.",
    },
    {
      year: "2019",
      title: "First Major Client",
      description:
        "Successfully delivered our first enterprise-level CRM system, setting the foundation for excellence.",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description:
        "Grew our team to 15+ talented developers, designers, and engineers.",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation and client satisfaction in software development.",
    },
    {
      year: "2022",
      title: "50+ Successful Projects",
      description:
        "Crossed the milestone of 50 completed projects across various industries.",
    },
    {
      year: "2023",
      title: "Global Reach",
      description:
        "Expanded services internationally, serving clients across multiple continents.",
    },
  ];

  const expertise = [
    { name: "Web Development", percentage: 95 },
    { name: "Mobile App Development", percentage: 90 },
    { name: "Custom Software", percentage: 92 },
    { name: "AI & Automation", percentage: 88 },
    { name: "Cloud Solutions", percentage: 90 },
    { name: "UI/UX Design", percentage: 93 },
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Team Members" },
    { number: "5+", label: "Years Experience" },
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
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              About Limitless Infotech Solution
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Where Innovation Meets Execution
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                At{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  Limitless Infotech Solution
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
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                We are not just building software. We are building the future of
                your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white dark:bg-dark-800 rounded-3xl p-10 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <HiSparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To lead the world into the next era of intelligent business
                systems, where innovation meets execution, and where businesses
                can achieve their full potential through technology that is
                secure, unique, and limitless.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-dark-800 rounded-3xl p-10 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6">
                <HiTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge technology solutions
                that transform operations, enhance customer experiences, and
                drive sustainable growth. We are committed to delivering
                excellence, innovation, and unparalleled client service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gradient-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700 group"
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Meet Our <span className="text-gradient">Founder</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Leadership that drives innovation and excellence
            </p>
          </div>

          {team.map((member, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Photo */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                      <HiUserGroup className="w-32 h-32 opacity-80" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
                    {member.role}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="badge badge-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:Info@limitlessinfotech.com"
                      className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <HiMail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                    <a
                      href="tel:+917710909492"
                      className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline"
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

      {/* Milestones Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-[3.25rem] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>
                  )}

                  {/* Year Badge */}
                  <div className="absolute left-0 top-0 w-24 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technical proficiency across multiple domains
            </p>
          </div>

          <div className="space-y-8">
            {expertise.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with
            innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Get Started
              <HiArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
