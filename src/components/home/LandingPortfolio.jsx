import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const LandingPortfolio = () => {
    const projects = [
        {
            title: 'FinTech Dashboard',
            category: 'Web Application',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Placeholder - in production use local assets or relevant images
            problem: 'Legacy system was slow and difficult to scale.',
            solution: 'Rebuilt using React and Node.js with microservices architecture.',
            result: '50% faster load times and 99.9% uptime.',
            tech: ['React', 'Node.js', 'AWS']
        },
        {
            title: 'HealthCare Mobile App',
            category: 'Mobile Development',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
            problem: 'Patients struggled to book appointments efficiently.',
            solution: 'Native mobile app with real-time scheduling and telemedicine.',
            result: '3x increase in patient booking conversion.',
            tech: ['Flutter', 'Firebase', 'WebRTC']
        },
        {
             title: 'E-Commerce Platform',
            category: 'UI/UX & Development',
            image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop',
            problem: 'Low conversion rate due to poor user experience.',
            solution: 'Complete UI redesign and optimized checkout flow.',
            result: '40% increase in sales revenue within 3 months.',
            tech: ['Next.js', 'Stripe', 'Tailwind']
        }
    ];

    return (
        <section id="portfolio" className="py-32 px-6 md:px-10">
            <div className="max-w-[1440px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Featured Projects.</h2>
                    <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl">Real-world results delivered through engineering excellence.</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-[#1ba6d6]/30 transition-colors group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <div className="text-xs font-bold text-[#1ba6d6] uppercase tracking-wider mb-3">{project.category}</div>
                                <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
                                
                                <div className="space-y-4 mb-8">
                                    <div>
                                        <div className="text-[0.65rem] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">Problem</div>
                                        <p className="text-sm text-gray-400">{project.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-[0.65rem] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">Solution</div>
                                        <p className="text-sm text-gray-400">{project.solution}</p>
                                    </div>
                                    <div>
                                        <div className="text-[0.65rem] font-bold text-[#1ba6d6] uppercase tracking-wider mb-1">Result</div>
                                        <p className="text-sm text-white font-medium">{project.result}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-[#94a3b8] uppercase tracking-wide">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <a href="/portfolio" className="inline-flex items-center gap-2 text-[#1ba6d6] font-bold uppercase tracking-wider hover:text-white transition-colors">
                        View All Projects <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LandingPortfolio;
