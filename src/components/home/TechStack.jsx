import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TechStack = () => {
    const techCategories = [
        { name: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL'] },
        { name: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'] },
        { name: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] }
    ];

     const reasons = [
        { title: '24/7 Support', desc: 'Always available to resolve critical issues.' },
        { title: 'Agile Methodology', desc: 'Iterative development with weekly updates.' },
        { title: '100% On-Time', desc: 'We respect deadlines and delivery schedules.' }
    ];

    return (
        <section className="py-32 px-6 md:px-10 border-t border-white/5">
             <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20">
                {/* Tech Stack */}
                <div>
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Technology</span>
                        <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight">Our Tech Stack.</h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {techCategories.map((cat, idx) => (
                                <div key={idx}>
                                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-b border-white/10 pb-2 inline-block">{cat.name}</h4>
                                    <ul className="space-y-2">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="text-[#94a3b8] text-sm flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#1ba6d6] rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Why Choose Us */}
                <div>
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Why Us</span>
                        <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight">Why Choose Limitless.</h2>
                        
                        <div className="space-y-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4">
                                     <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="text-[#1ba6d6]" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{reason.title}</h3>
                                        <p className="text-[#94a3b8] text-sm leading-relaxed">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
