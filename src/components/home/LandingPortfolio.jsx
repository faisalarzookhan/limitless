import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const LandingPortfolio = () => {
    const projects = [
        {
            title: 'IVOLEX - Enterprise ERP',
            category: 'Enterprise System',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // Business/Dashboard/Analytics
            problem: 'Fragmented operations across global logistics network.',
            solution: 'Unified multidimensional ERP with real-time asset tracking.',
            result: '60% efficiency gain and automated 80% of manual flows.',
            tech: ['React', 'Node.js', 'PostgreSQL']
        },
        {
            title: 'Wakilni - Legal Tech',
            category: 'Mobile Platform',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop', // Legal/Professional/Clean
            problem: 'Complex bridging between legal professionals and clients.',
            solution: 'Secure, encrypted matching platform with instant consultation.',
            result: 'Onboarded 500+ lawyers and reduced latency by 80%.',
            tech: ['Flutter', 'Firebase', 'E2E Encryption']
        },
        {
            title: 'Luxe E-commerce Core',
            category: 'Digital Retail',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop', // Retail/Fashion/Store
            problem: 'High traffic but low conversion on legacy storefront.',
            solution: 'Immersive visual storytelling engine with optimized checkout.',
            result: '85% increase in conversion and 250% traffic growth.',
            tech: ['Next.js', 'Stripe', 'Redis']
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
