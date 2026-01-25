import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Zap, Cpu, Layers, Globe } from 'lucide-react';

const AnimatedCounter = ({ from, to, duration = 3 }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = from + (to - from) * easeOutQuart;
            
            if (nodeRef.current) {
                if (Number.isInteger(to)) {
                    nodeRef.current.textContent = Math.floor(currentValue);
                } else {
                    nodeRef.current.textContent = currentValue.toFixed(1);
                }
            }

            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, from, to, duration]);

    return <span ref={nodeRef} className="tabular-nums">{from}</span>;
};

const LandingMetrics = () => {
    const metrics = [
        { 
            value: 120, 
            suffix: "+", 
            label: "Institutional Assets", 
            icon: Layers,
            color: 'text-primary-400',
            glow: 'rgba(27, 166, 214, 0.3)'
        },
        { 
            value: 84.5, 
            suffix: "K", 
            label: "Throughput / Sec", 
            icon: Activity,
            color: 'text-secondary-400',
            glow: 'rgba(244, 180, 26, 0.2)'
        },
        { 
            value: 99.9, 
            suffix: "%", 
            label: "System Availability", 
            icon: Globe,
            color: 'text-primary-500',
            glow: 'rgba(27, 166, 214, 0.2)'
        },
        { 
            value: 42, 
            suffix: "%", 
            label: "Efficiency Yield", 
            icon: Zap,
            color: 'text-white',
            glow: 'rgba(255, 255, 255, 0.1)'
        },
    ];

    return (
        <section className="py-24 border-y border-white/5 bg-[#0e1114] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {metrics.map((metric, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="p-8 glass-panel mask-facet group relative overflow-hidden"
                    >
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{ background: `radial-gradient(circle at center, ${metric.glow}, transparent 70%)` }}
                        />
                        
                        <div className="relative z-10 flex flex-col items-center lg:items-start">
                            <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${metric.color} mb-6 group-hover:scale-110 transition-transform`}>
                                <metric.icon size={20} />
                            </div>
                            
                            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter italic flex items-baseline gap-1 mb-2">
                                <AnimatedCounter from={0} to={metric.value} />
                                <span className="text-2xl text-primary-400 not-italic">{metric.suffix}</span>
                            </div>
                            
                            <div className="text-[0.6rem] font-bold tracking-[0.35em] uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
                                {metric.label}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LandingMetrics;
