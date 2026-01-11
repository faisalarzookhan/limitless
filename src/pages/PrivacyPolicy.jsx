import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  ChevronRight, 
  Info, 
  ArrowRight,
  UserCheck,
  Globe,
  Database,
  Eye,
  RefreshCw,
  Mail
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const PrivacyPolicy = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Personal Information',
          text: 'We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.',
        },
        {
          subtitle: '1.2 Information Collected Includes:',
          list: [
            'Name and Contact Data (name, email address, phone number, company name)',
            'Professional Information (job title, company size, industry)',
            'Project Requirements (details about your project needs)',
            'Communication Data (messages, inquiries, feedback)',
            'Technical Data (IP address, browser type, device information)',
          ],
        },
      ],
    },
    {
      id: 'usage',
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: '2.1 Primary Uses',
          text: 'We use the information we collect or receive:',
        },
        {
          list: [
            'To respond to your inquiries and provide customer support',
            'To send you information about our services and updates',
            'To process your service requests and manage projects',
            'To improve our website and user experience',
            'To protect our services and ensure security',
            'To fulfill and manage your orders and requests',
            'To comply with legal obligations',
          ],
        },
      ],
    },
    {
      id: 'sharing',
      title: '3. Information Sharing and Disclosure',
      content: [
        {
          subtitle: '3.1 We May Share Information:',
          list: [
            'With service providers who help us operate our business',
            'With business partners for joint marketing initiatives',
            'When required by law or to respond to legal process',
            'To protect rights, property, or safety of Limitless Infotech',
          ],
        },
        {
          subtitle: '3.2 We Do Not:',
          list: [
            'Sell your personal information to third parties',
            'Share your data with unauthorized parties',
            'Use your information for purposes not disclosed in this policy',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: '4. Data Security',
      content: [
        {
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:',
        },
        {
          list: [
            'SSL/TLS encryption for data transmission',
            'Secure servers and databases',
            'Regular security audits and updates',
            'Access controls and authentication',
          ],
        },
        {
          text: 'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.',
        },
      ],
    },
    {
      id: 'rights',
      title: '5. Your Privacy Rights',
      content: [
        {
          subtitle: '5.1 You Have the Right To:',
          list: [
            'Access your personal information we hold',
            'Correct inaccurate or incomplete information',
            'Request deletion of your personal information',
            'Object to processing of your personal information',
            'Data portability',
          ],
        },
        {
          subtitle: '5.2 How to Exercise Your Rights',
          text: 'To exercise any of these rights, please contact us at Info@limitlessinfotech.com. We will respond to your request within 30 days.',
        },
      ],
    },
    {
      id: 'retention',
      title: '6. Data Retention',
      content: [
        {
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.',
        },
        {
          subtitle: 'Retention Periods:',
          list: [
            'Account Information - Duration of account plus 3 years',
            'Project Data - Duration of project plus 7 years',
            'Communication Records - 3 years from last contact',
          ],
        },
      ],
    },
    {
      id: 'contact',
      title: '7. Contact Information',
      content: [
        {
          text: 'If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:',
        },
        {
          list: [
            'Email: Info@limitlessinfotech.com',
            'Phone: +91 77109 09492',
            'Address: Mumbai, Maharashtra, India',
          ],
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden selection:bg-primary-500/30">
        {/* Background Layers */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6">
           <div className="max-w-7xl mx-auto text-center">
              <motion.div 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                 <ShieldCheck className="w-4 h-4 text-primary-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Sovereignty Protocol — Privacy Policy</span>
              </motion.div>

              <motion.h1 
                 variants={itemVariants} initial="hidden" animate="visible"
                 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic"
              >
                 Data <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Sovereignty</span>
              </motion.h1>

              <div className="flex justify-center gap-8 mb-16">
                 <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <RefreshCw className="w-3 h-3" />
                    Last Updated: {lastUpdated}
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black text-primary-400 uppercase tracking-widest">
                    <UserCheck className="w-3 h-3" />
                    Global Integrity Approved
                 </div>
              </div>
           </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6 relative z-10">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16">
                 {/* Sidebar Navigation */}
                 <div className="lg:w-1/4">
                    <motion.div 
                       variants={itemVariants} initial="hidden" animate="visible"
                       className="sticky top-32 p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl"
                    >
                       <h3 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-12">Document Nodes</h3>
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
                          <Info className="w-6 h-6 text-primary-400 mb-6" />
                          <h4 className="text-sm font-black text-white italic tracking-tight mb-4 uppercase">Integrity Summary</h4>
                          <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
                             We process data with sub-millisecond encryption. Zero unauthorized node access detected.
                          </p>
                       </div>
                    </motion.div>
                 </div>

                 {/* Main Legal Content */}
                 <div className="lg:flex-1 space-y-20">
                    <motion.div 
                       variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                       className="p-12 rounded-[56px] bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                       <h2 className="text-3xl font-black text-white mb-8 italic tracking-tight flex items-center gap-4">
                          <Globe className="w-8 h-8 text-primary-400" />
                          Introduction Protocols
                       </h2>
                       <p className="text-lg text-gray-400 font-medium leading-relaxed italic mb-6">
                          Limitless Infotech Solution ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                       </p>
                       <p className="text-lg text-gray-400 font-medium leading-relaxed italic">
                          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                       </p>
                    </motion.div>

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
                                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {item.list.map((listItem, listIdx) => (
                                          <li key={listIdx} className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 group hover:border-primary-500/30 transition-all">
                                             <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                             <span className="text-gray-300 font-medium leading-relaxed">{listItem}</span>
                                          </li>
                                        ))}
                                     </ul>
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

        {/* Global Legal CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/20 to-secondary-600/20 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="flex justify-center flex-wrap gap-8 mb-16">
                    <Link to="/terms-of-service" className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-dark-900 transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                       <FileText className="w-4 h-4" /> Terms of Service
                    </Link>
                    <Link to="/contact" className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-dark-900 transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                       <Mail className="w-4 h-4" /> Contact Officer
                    </Link>
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Inquiry <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Protocol</span></h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Our Data Protection Officer is available for any queries regarding nodal processing and privacy architecture.
                 </p>
                 <div className="pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Inquire Now
                    </button>
                 </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default PrivacyPolicy;