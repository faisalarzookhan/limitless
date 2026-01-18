import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const LandingTestimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'CTO, FinScale',
            quote: "Limitless Infotech transformed our legacy backend into a high-performance microservices architecture. The transition was seamless.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: 'Michael Chen',
            role: 'Founder, HealthLink',
            quote: "Their team isn't just about coding; they understand business logic. The mobile app they built helped us secure our Series A funding.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: 'Elena Rodriguez',
            role: 'Director of Product, ShopFlow',
            quote: "The UI/UX redesign increased our conversion rates by 40%. They truly understand user psychology and modern design principles.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    return (
        <section id="testimonials" className="py-32 px-6 md:px-10 bg-[#0e1114]">
            <div className="max-w-[1440px] mx-auto">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] mb-6 block">Client Success</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Trusted by Visionaries.</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white/5 border border-white/5 p-10 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-white/10 w-12 h-12" />
                            <p className="text-lg text-gray-300 italic mb-8 leading-relaxed relative z-10">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#1ba6d6]" />
                                <div>
                                    <div className="text-white font-bold text-sm">{t.name}</div>
                                    <div className="text-[#94a3b8] text-xs font-medium">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingTestimonials;
