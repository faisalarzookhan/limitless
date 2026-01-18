import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Layout, Server, ArrowRight, Cloud } from 'lucide-react';

const LandingCapabilities = () => {
    const services = [
        {
            icon: Code2,
            iconColor: 'text-[#1ba6d6]',
            title: 'Web Development',
            items: ['Custom React/Next.js Apps', 'E-commerce Solutions', 'Progressive Web Apps (PWA)'],
            delay: 0.1
        },
        {
            icon: Smartphone,
            iconColor: 'text-[#f4b41a]',
            title: 'Mobile Apps',
            items: ['iOS & Android (Flutter/React Native)', 'Native Performance', 'Cross-Platform Scalability'],
            delay: 0.2
        },
        {
            icon: Layout,
            iconColor: 'text-white',
            title: 'UI/UX Design',
            items: ['User Research & Prototyping', 'Modern Interface Design', 'Design Systems'],
            delay: 0.3
        },
         {
            icon: Server,
            iconColor: 'text-[#1ba6d6]',
            title: 'DevOps & Cloud',
            items: ['AWS/Azure Infrastructure', 'CI/CD Pipelines', 'Docker & Kubernetes'],
            delay: 0.4
        }
    ];

    return (
        <section id="services" className="py-32 px-6 md:px-10 bg-[#0e1114]">
            <div className="max-w-[1440px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 max-w-3xl"
                >
                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Services We Deliver.</h2>
                    <p className="text-lg text-[#94a3b8] leading-relaxed">End-to-end digital product development tailored for startups and enterprises.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: service.delay }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-lg group"
                        >
                            <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-white/5 ${service.iconColor}`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6">{service.title}</h3>
                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className={`flex items-start gap-2 text-xs font-medium text-[#94a3b8] group-hover:text-white transition-colors`}>
                                        <ArrowRight className={`w-3 h-3 mt-0.5 ${service.iconColor}`} /> 
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingCapabilities;
