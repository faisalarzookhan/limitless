import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  ChevronRight, 
  Info, 
  ArrowRight,
  Database,
  RefreshCw,
  Mail,
  Cookie,
  Settings,
  Eye,
  ShieldAlert
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const CookiePolicy = () => {
  const lastUpdated = 'January 15, 2026';

  const sections = [
    {
      id: 'definition',
      title: '1. What are Cookies?',
      content: [
        {
          text: 'Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.',
        },
      ],
    },
    {
      id: 'types',
      title: '2. Types of Cookies We Use',
      content: [
        {
          subtitle: '2.1 Essential Cookies',
          text: 'These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.',
        },
        {
          subtitle: '2.2 Analytics and Customization Cookies',
          text: 'These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.',
        },
        {
          subtitle: '2.3 Functional Cookies',
          text: 'These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.',
        },
      ],
    },
    {
      id: 'control',
      title: '3. Controlling Cookies',
      content: [
        {
          text: 'You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.',
        },
        {
          subtitle: '3.1 Browser Controls',
          text: 'If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.',
        },
      ],
    },
    {
      id: 'updates',
      title: '4. Updates to this Policy',
      content: [
        {
          text: 'We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.',
        },
      ],
    },
    {
      id: 'inquiries',
      title: '5. Technical Inquiries',
      content: [
        {
          text: 'If you have any questions about our use of cookies or other technologies, please email us at Info@limitlessinfotech.com.',
        },
      ],
    },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
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
                 <Cookie className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Telemetry Protocol — Cookie Policy</span>
              </motion.div>

              <motion.h1 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic"
              >
                 Session <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Integrity</span>
              </motion.h1>

              <div className="flex justify-center gap-8 mb-16">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <RefreshCw className="w-3 h-3" />
                    Last Updated: {lastUpdated}
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black text-primary-400 uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3" />
                    Audited Node Access
                 </div>
              </div>
           </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6 relative z-10">
           <div className="max-w-7xl mx-auto">
              {/* Alert Shell */}
              <motion.div 
                variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mb-20 p-8 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl text-center"
              >
                 <ShieldAlert className="w-8 h-8 text-primary-400 mx-auto mb-6" />
                 <p className="text-gray-400 font-medium uppercase tracking-[0.2em] text-[10px] max-w-2xl mx-auto leading-relaxed">
                    We use deterministic telemetry cookies to optimize your architectural experience. Zero personally identifiable data is sold to external nodes.
                 </p>
              </motion.div>

              <div className="flex flex-col lg:flex-row gap-16">
                 {/* Sidebar Navigation */}
                 <div className="lg:w-1/4">
                    <motion.div 
                       variants={itemVariants} initial="hidden" animate="visible"
                       className="sticky top-32 p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl"
                    >
                       <h3 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-12">Cookie Matrix</h3>
                       <nav className="space-y-4">
                          {sections.map(section => (
                             <a
                               key={section.id}
                               href={`#${section.id}`}
                               className="block text-sm font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors py-2 group flex items-center gap-3"
                             >
                                <ChevronRight className="w-4 h-4 text-gray-700 group-hover:translate-x-1 group-hover:text-primary-400 transition-all" />
                                {section.title.split('. ')[1]}
                             </a>
                          ))}
                       </nav>

                       <div className="mt-16 p-8 rounded-[32px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10">
                          <Settings className="w-6 h-6 text-primary-400 mb-6" />
                          <h4 className="text-sm font-black text-white italic tracking-tight mb-4 uppercase">Node Consent</h4>
                          <button className="px-6 py-3 bg-white text-dark-900 font-black rounded-xl text-[8px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                             RESET PREFERENCES
                          </button>
                       </div>
                    </motion.div>
                 </div>

                 {/* Main Content */}
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
                                     <p className="text-gray-400 font-medium leading-relaxed text-lg italic">{item.text}</p>
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

        {/* Global CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Accepted the <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Cookies</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    By continuing to explore the Limitless ecosystem, you synchronize with our telemetry and session integrity protocols.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <Link to="/privacy-policy" className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Privacy Protocol
                    </Link>
                    <Link to="/contact" className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm uppercase flex items-center gap-3">
                       Consult Officer <ArrowRight className="w-5 h-5" />
                    </Link>
                 </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default CookiePolicy;
