import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from, to, duration = 2 }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    React.useEffect(() => {
        if (!isInView) return;
        
        const node = nodeRef.current;
        const controls = {
            value: from
        };

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            const currentValue = from + (to - from) * easeProgress;
            
            // Format logic based on the target value type (integer vs float)
            if (Number.isInteger(to)) {
                node.textContent = Math.floor(currentValue);
            } else {
               node.textContent = currentValue.toFixed(1);
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                 if (Number.isInteger(to)) {
                    node.textContent = to;
                } else {
                    node.textContent = to.toFixed(1) + "%"; // Handle percentage if needed explicitly or outside
                }
            }
        };

        let startTime = null;
        requestAnimationFrame(animate);

    }, [isInView, from, to, duration]);

    return <span ref={nodeRef}>{from}</span>;
};

// Simplified Counter for Framer Motion purely
const AnimatedCounter = ({ value, suffix = "" }) => {
    return (
        <span className="flex">
            <Counter from={0} to={parseFloat(value)} />
            {suffix}
        </span>
    );
}


const LandingMetrics = () => {
    const metrics = [
        { value: 120, suffix: "+", label: "Institutional Assets", delay: 0.1 },
        { value: 84, suffix: "k", label: "Throughput/Sec", delay: 0.2 },
        { value: 99.9, suffix: "%", label: "System Availability", delay: 0.3 },
        { value: 42, suffix: "%", label: "Operational Efficiency", delay: 0.4 },
    ];

    return (
        <section className="py-24 border-y border-white/5 bg-[#1c1f24]/40">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
                {metrics.map((metric, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: metric.delay }}
                        className="group"
                    >
                        <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#1ba6d6] transition-colors duration-300 flex items-center">
                            {index === 0 ? "120+" : 
                             index === 1 ? "84k" : 
                             index === 2 ? "99.9%" : "+42%"}
                        </div>
                        <div className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#1ba6d6] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            {metric.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LandingMetrics;
