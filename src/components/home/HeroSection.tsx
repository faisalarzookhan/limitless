import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ChevronDown, 
  ArrowRight, 
  Shield, 
  Globe, 
  Cpu,
  Layers
} from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e1114]"
      aria-labelledby="hero-heading"
    >
      {/* Background Layer: Grid & Neon Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1ba6d6]/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0080ff]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-wide px-4 md:px-6 lg:px-8 relative z-10 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#1ba6d6]" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Neural Network Online
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h1
              id="hero-heading"
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter"
            >
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ba6d6] via-[#0080ff] to-[#1ba6d6] animate-gradient-x">
                Limitless Spectrum
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Scale your enterprise beyond the digital horizon. We deploy high-fidelity software solutions, 
            secured by neural-grade protocols and architected for eternal performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/get-started"
              className="group relative px-8 py-4 bg-[#1ba6d6] text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                Initiate Protocol
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              to="/products"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all border-b-4 border-b-[#1ba6d6]/50"
            >
              Explore Node Repository
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
            {[
              { icon: Layers, number: '500+', label: 'Active Nodes' },
              { icon: Cpu, number: '7', label: 'Core Engines' },
              { icon: Globe, number: '10M+', label: 'Neural Uplinks' },
              { icon: Shield, number: '99.9%', label: 'Uptime Protocol' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm hover:border-[#1ba6d6]/30 transition-colors group text-center"
              >
                <div className="w-10 h-10 bg-[#1ba6d6]/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#1ba6d6]/20 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5 text-[#1ba6d6]" />
                </div>
                <div className="text-3xl font-black text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown className="w-8 h-8 opacity-50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
