import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Zap, ShieldCheck, Cpu } from 'lucide-react';

const faqs = [
  {
    question: 'What operational domains does Limitless execute?',
    answer:
      'Our network executes high-fidelity protocols in Web Engine Architecture, Mobile Interface Development, Neural Integration, IoT Mesh Networks, and Core Infrastructure Scaling. Each deployment is architected for maximum security and performance.',
  },
  {
    question: 'What is the standard cycle duration for protocol deployment?',
    answer:
      'Deployment cycles fluctuate based on node complexity. Standard web engines resolve in 2-4 cycles (weeks), while complex neural applications may require 2-4 quarterly spans. Mobile uplinks typically stabilize within 3-6 cycles.',
  },
  {
    question: 'Which neural stacks power the network?',
    answer:
      'We leverage cutting-edge neural stacks including React/Next.js for interfaces; Node.js and Python for core logic; and globally distributed cloud clusters (AWS/Azure) for infrastructure. Our stack selection is dynamically optimized for each project protocol.',
  },
  {
    question: 'Does the network provide persistent maintenance uplinks?',
    answer:
      'Yes. We maintain 24/7 technical monitoring, security patch deployment, and persistent performance audits. Our maintenance protocols ensure that your nodes remain optimized against evolving digital vectors.',
  },
  {
    question: 'How is resource allocation determined?',
    answer:
      'Resource requirements are calculated based on deployment scope, expected telemetry volume, and architectural complexity. We provide transparent resource audits and dynamic scaling options to match your operational budget.',
  },
  {
    question: 'Can the network synchronize with legacy nodes?',
    answer:
      'Our integration specialists specialize in bridging modern protocols with legacy infrastructure. We can modernize existing nodes, upgrade security layers, or build symbiotic interfaces that ensure seamless data flow across the spectrum.',
  },
  {
    question: 'What defines the Uniqueness of the Limitless Network?',
    answer:
      'The network is defined by its Zero-Trust Security, Neural-Grade Uniqueness, and Prime Operator Experience. We dont just deploy code; we architect transformative digital ecosystems that are secure-by-design and resilient for the long horizon.',
  },
];

const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#0e1114] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1ba6d6]/30 to-transparent" />
      
      <div className="container-custom max-w-4xl relative z-10 px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ba6d6]/10 border border-[#1ba6d6]/20 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-[#1ba6d6]" />
            <span className="text-[10px] font-bold text-[#1ba6d6] uppercase tracking-widest">Knowledge Base</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Protocol <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ba6d6] to-[#0080ff]">Intelligence</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Access core system documentation and operational FAQs to understand our deployment methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group border rounded-2xl transition-all duration-300 ${
                openFaq === index 
                  ? 'bg-white/[0.05] border-[#1ba6d6]/50 shadow-[0_0_30px_-10px_rgba(27,166,214,0.3)]' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left p-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg border transition-colors ${
                    openFaq === index 
                      ? 'bg-[#1ba6d6]/20 border-[#1ba6d6]/30' 
                      : 'bg-white/5 border-white/10'
                  }`}>
                    <Zap className={`w-4 h-4 transition-colors ${
                      openFaq === index ? 'text-[#1ba6d6]' : 'text-gray-500'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${
                    openFaq === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openFaq === index ? 'rotate-180 text-[#1ba6d6]' : ''
                }`} />
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 ml-14">
                      <div className="h-px w-full bg-white/10 mb-6" />
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#1ba6d6]/70 uppercase tracking-tighter">
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-600 uppercase tracking-tighter">
                          <Cpu className="w-3 h-3" />
                          Node v4.2.0
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

