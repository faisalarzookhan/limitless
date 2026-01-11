import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Scale, 
  ShieldCheck, 
  FileText, 
  Handshake, 
  AlertTriangle, 
  Gavel, 
  Crown, 
  Clock,
  ChevronRight,
  ArrowRight,
  ShieldAlert,
  Link2
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const TermsOfService = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      id: 'agreement',
      title: '1. Agreement to Terms',
      content: [
        {
          text: 'By accessing and using the Limitless Infotech Solution website ("Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
        },
        {
          subtitle: '1.1 Definitions',
          list: [
            '"Company", "We", "Us", "Our" refers to Limitless Infotech Solution',
            '"Client", "You", "Your" refers to the individual or entity using our services',
            '"Services" refers to all software development and consulting provided',
            '"Agreement" refers to these Terms of Service and any amendments',
          ],
        },
      ],
    },
    {
      id: 'eligibility',
      title: '2. Use of Services',
      content: [
        {
          subtitle: '2.1 Eligibility',
          text: 'You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.',
        },
        {
          subtitle: '2.2 Acceptable Use',
          text: 'You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to use our services:',
        },
        {
          list: [
            'In any way that violates any applicable law or regulation',
            'To transmit any harmful or malicious code',
            'To impersonate or attempt to impersonate the Company',
            "To engage in any conduct that restricts or inhibits anyone's use",
          ],
        },
      ],
    },
    {
      id: 'payment',
      title: '3. Payment Terms',
      content: [
        {
          subtitle: '3.1 Pricing and Fees',
          text: 'All fees are quoted in INR or USD as specified in the project agreement. Prices are subject to change with 30 days notice for ongoing services.',
        },
        {
          subtitle: '3.2 Late Payments',
          text: 'Late payments may incur interest charges of 1.5% per month (18% per annum). We reserve the right to suspend services for accounts more than 15 days overdue.',
        },
      ],
    },
    {
      id: 'intellectual',
      title: '4. Intellectual Property',
      content: [
        {
          subtitle: '4.1 Ownership',
          text: 'Upon full payment, you will own the final deliverables created specifically for your project, including custom code, designs, and content.',
        },
        {
          subtitle: '4.2 Retained Rights',
          text: 'We retain ownership of pre-existing code, frameworks, tools, and general knowledge gained during the development cycle.',
        },
      ],
    },
    {
      id: 'liability',
      title: '5. Limitation of Liability',
      content: [
        {
          text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.',
        },
      ],
    },
    {
      id: 'dispute',
      title: '6. Dispute Resolution',
      content: [
        {
          text: 'Any disputes shall be resolved through binding arbitration in Mumbai, Maharashtra, India, in accordance with the Arbitration and Conciliation Act, 1996.',
        },
      ],
    },
    {
      id: 'contact',
      title: '7. Contact',
      content: [
        {
          list: [
            'Email: Info@limitlessinfotech.com',
            'Phone: +91 77109 09492',
            'Location: Mumbai, Maharashtra, India',
          ],
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden selection:bg-primary-500/30">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6">
           <div className="max-w-7xl mx-auto text-center">
              <motion.div 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <Scale className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Contractual Nodes — Terms of Service</span>
              </motion.div>

              <motion.h1 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic"
              >
                 Service <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Protocols</span>
              </motion.h1>

              <div className="flex justify-center gap-8 mb-16">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <Clock className="w-3 h-3" />
                    Last Updated: {lastUpdated}
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black text-primary-400 uppercase tracking-widest">
                    <Gavel className="w-3 h-3" />
                    Standard Agreement Active
                 </div>
              </div>
           </div>
        </section>

        {/* Legal Grid Section */}
        <section className="py-24 px-6 relative z-10">
           <div className="max-w-7xl mx-auto">
              {/* Important Alert Shell */}
              <motion.div 
                variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mb-20 p-8 md:p-12 rounded-[56px] bg-amber-500/5 border border-amber-500/20 backdrop-blur-3xl relative overflow-hidden group"
              >
                 <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 rounded-3xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                       <ShieldAlert className="w-10 h-10 text-amber-500 animate-pulse" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-white italic tracking-tight mb-3 uppercase">Mandatory Legal Notice</h3>
                       <p className="text-gray-400 font-medium leading-relaxed uppercase tracking-widest text-xs">
                          By engaging with Limitless services, you enter a deterministic contractual alignment. Failure to harmonize with these nodes may result in terminal service suspension.
                       </p>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-grid-white/[0.02]" />
              </motion.div>

              <div className="flex flex-col lg:flex-row gap-16">
                 {/* Sidebar Navigation */}
                 <div className="lg:w-1/4">
                    <motion.div 
                       variants={itemVariants} initial="hidden" animate="visible"
                       className="sticky top-32 p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl"
                    >
                       <h3 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-12">Registry Sections</h3>
                       <nav className="space-y-4">
                          {sections.map(section => (
                             <a
                               key={section.id}
                               href={`#${section.id}`}
                               className="block text-sm font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors py-2 group flex items-center gap-3"
                             >
                                <ChevronRight className="w-4 h-4 text-gray-700 group-hover:translate-x-1 group-hover:text-primary-400 transition-all font-black" />
                                {section.title.split('. ')[1]}
                             </a>
                          ))}
                       </nav>

                       <div className="mt-16 p-8 rounded-[32px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10">
                          <Crown className="w-6 h-6 text-primary-400 mb-6" />
                          <h4 className="text-sm font-black text-white italic tracking-tight mb-4 uppercase">SLA Integrity</h4>
                          <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
                             Systemic availability protocols are governed by our premium architecture guarantee. 
                          </p>
                       </div>
                    </motion.div>
                 </div>

                 {/* Main Contractual Content */}
                 <div className="lg:flex-1 space-y-20">
                    {sections.map((section, index) => (
                       <motion.div 
                         key={section.id}
                         id={section.id}
                         variants={itemVariants}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="space-y-12"
                       >
                          <div className="flex items-center gap-6">
                             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-xl font-black text-primary-400 italic">0{index + 1}</span>
                             </div>
                             <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">{section.title.split('. ')[1]}</h2>
                          </div>

                          <div className="space-y-10 pl-4 md:pl-20">
                             {section.content.map((item, idx) => (
                                <div key={idx} className="space-y-6">
                                   {item.subtitle && (
                                     <h3 className="text-xl font-black text-white italic tracking-tight">{item.subtitle}</h3>
                                   )}
                                   {item.text && (
                                     <p className="text-gray-400 font-medium leading-relaxed text-lg">{item.text}</p>
                                   )}
                                   {item.list && (
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {item.list.map((listItem, listIdx) => (
                                          <div key={listIdx} className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 group hover:border-primary-500/30 transition-all">
                                             <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                                             <span className="text-gray-300 font-medium leading-relaxed">{listItem}</span>
                                          </div>
                                        ))}
                                     </div>
                                   )}
                                </div>
                             ))}
                          </div>
                          {index !== sections.length - 1 && <div className="h-px bg-white/5 w-full" />}
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Global Legal Linkages */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="flex justify-center flex-wrap gap-8 mb-16">
                    <Link to="/privacy-policy" className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-dark-900 transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                       <ShieldCheck className="w-4 h-4" /> Privacy Protocol
                    </Link>
                    <Link to="/compliance" className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-dark-900 transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                       <AlertTriangle className="w-4 h-4" /> Compliance Matrix
                    </Link>
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Harmonics</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    By continuing into the architectural core, you synchronize with our global terms of deployment.
                 </p>
                 <div className="pt-8 flex flex-wrap justify-center gap-6">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       I Accept Terms
                    </button>
                    <Link to="/contact" className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm uppercase flex items-center gap-3 group">
                       Consult Legal Node <Handshake className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default TermsOfService;
