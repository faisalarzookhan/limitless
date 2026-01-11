import { motion } from 'framer-motion';
import {
  MessageSquare,
  Zap,
  ShieldCheck,
  Globe,
  Bot,
  MessageCircle,
  Clock,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Cpu,
  RefreshCw,
  PhoneCall,
  Layout,
  Share2
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const WhatsAppIntegrationPage = () => {
  const features = [
    {
      title: 'Neural Chatbot Flow',
      description: 'Autonomous AI response units handling 90% of standard protocol inquiries.',
      icon: Bot,
      color: 'text-primary-400'
    },
    {
      title: 'Sovereign Encryption',
      description: 'End-to-end nodal encryption ensuring absolute message integrity.',
      icon: ShieldCheck,
      color: 'text-secondary-400'
    },
    {
      title: 'Global Broadcast Node',
      description: 'High-throughput dissemination of protocols to massive user registries.',
      icon: Globe,
      color: 'text-white'
    },
    {
      title: 'Sub-ms Latency',
      description: 'Deterministic message delivery with sub-millisecond propagation.',
      icon: Zap,
      color: 'text-primary-500'
    }
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30">
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                 <motion.div 
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                 >
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Communication Node — WhatsApp Integration</span>
                 </motion.div>
                 
                 <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none uppercase mb-8">
                    Ambient <span className="not-italic bg-gradient-to-r from-green-500 to-primary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Messaging</span>
                 </motion.h1>

                 <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 font-medium leading-relaxed mb-12 italic">
                    Synchronize your enterprise protocols with the world's most ubiquitous messaging network. Low-latency, high-trust communication at architectural scale.
                 </motion.p>

                 <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex flex-wrap gap-8">
                    <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Initialize Integration
                    </button>
                    <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm uppercase flex items-center gap-3">
                       API Payload Docs <Cpu className="w-4 h-4" />
                    </button>
                 </motion.div>
              </div>

              {/* Interface Simulation */}
              <div className="lg:w-1/2 relative">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 p-8 rounded-[64px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl"
                 >
                    {/* Simulated Phone Mockup */}
                    <div className="w-full max-w-[320px] mx-auto bg-dark-950 rounded-[48px] border-8 border-white/5 overflow-hidden shadow-black/50 shadow-2xl">
                       <div className="bg-[#075e54] p-6 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                             <Bot className="w-6 h-6 text-white" />
                          </div>
                          <div>
                             <div className="text-sm font-black text-white italic tracking-tight">Limitless Neural Bot</div>
                             <div className="text-[8px] text-green-300 font-bold uppercase tracking-widest">Online — Synchronized</div>
                          </div>
                       </div>
                       <div className="p-6 space-y-4 h-[400px] overflow-y-auto bg-[#0b141a]">
                          <div className="p-4 rounded-2xl rounded-tl-none bg-[#202c33] text-sm text-gray-300 max-w-[80%] font-medium">Hello Architect. How can I assist your integration today?</div>
                          <div className="p-4 rounded-2xl rounded-tr-none bg-[#005c4b] text-sm text-white max-w-[80%] ml-auto font-medium">I need to synchronize my CRM node.</div>
                          <div className="p-4 rounded-2xl rounded-tl-none bg-[#202c33] text-sm text-gray-300 max-w-[80%] font-medium">
                             Protocol received. Initiating Neural Handshake...
                             <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                                <RefreshCw className="w-4 h-4 text-primary-400 animate-spin" />
                                <span className="text-[10px] font-black uppercase text-primary-400">Syncing...</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
                 {/* Ambient pattern */}
                 <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-500/10 blur-3xl rounded-full" />
              </div>
           </div>
        </section>

        {/* Features Matrix */}
        <section className="py-24 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {features.map((feature, idx) => (
                    <motion.div 
                       key={idx}
                       initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    >
                       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 hover:scale-110 transition-transform cursor-pointer">
                          <feature.icon className={`w-8 h-8 ${feature.color}`} />
                       </div>
                       <h3 className="text-xl font-black text-white italic tracking-tight mb-4 uppercase">{feature.title}</h3>
                       <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.description}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-green-600/20 to-primary-600/20 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-12 border border-white/20">
                    <PhoneCall className="w-10 h-10 text-white animate-pulse" />
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Signal</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Discuss your specific integration requirements with our architectural team. We build custom messaging nodes for enterprise-scale deployments.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Schedule Sync
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3">
                       Integration Whitepaper <ArrowRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default WhatsAppIntegrationPage;
