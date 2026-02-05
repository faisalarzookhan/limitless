import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code2, Smartphone, Cpu, ShieldCheck, Zap, Globe, Layers, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileMenus, setMobileMenus] = useState({ solutions: false, industries: false, company: false });
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
    setMobileMenus({ solutions: false, industries: false, company: false });
  }, [location]);

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Insights', path: '/blog' },
  ];

  const handleMouseEnter = (menu) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150); // 150ms safe-hover grace period
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, y: 10, scale: 0.98, filter: 'blur(10px)' }
  };

  const dropdownContainerStyle = "bg-[#0e1114]/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative";

  const toggleMobileMenu = (key) => {
    setMobileMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-[#0e1114]/80 backdrop-blur-2xl border-b border-white/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group z-50">
           <div className="w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 relative">
               <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <img src="/images/logos/Limitless_Geometric_Logo.png" alt="Limitless" className="w-full h-full object-contain relative z-10" />
           </div>
           <div className="flex flex-col text-left">
               <span className="text-white font-black tracking-tighter text-xl sm:text-2xl leading-none uppercase italic">LIMITLESS</span>
               <span className="text-[#1ba6d6] text-[0.5rem] sm:text-[0.55rem] font-black tracking-[0.4em] mt-1.5 leading-none uppercase hidden xs:block">Infotech Solution&apos;s Pvt Ltd.</span>
           </div>
        </Link>

        {/* Desktop Architecture */}
        <div className="hidden lg:flex items-center gap-10">
            {/* Solutions Dropdown */}
            <div 
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
            >
                <button className={`text-[0.7rem] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${location.pathname.startsWith('/services') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                    Solutions
                    <ChevronDown size={12} className={`transition-transform duration-500 ${activeMegaMenu === 'solutions' ? 'rotate-180 text-primary-400' : ''}`} />
                </button>

                <AnimatePresence>
                    {activeMegaMenu === 'solutions' && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-12 w-screen max-w-[840px] z-50 pointer-events-auto"
                        >
                            <div className={`${dropdownContainerStyle} p-12 grid grid-cols-[1fr,1fr,280px] gap-12 bg-[#0e1114]`}>
                                <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                                
                                <div className="space-y-10 relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-1 h-3 bg-[#1ba6d6] rounded-full" />
                                        <h3 className="text-[0.65rem] font-bold text-white uppercase tracking-[0.4em]">Outcome-Focused</h3>
                                    </div>
                                    <div className="grid gap-4">
                                        {[
                                            { title: 'Web Platforms', desc: 'Secure Enterprise Core', path: '/services#web', icon: Code2, color: 'text-[#1ba6d6]' },
                                            { title: 'Mobile Neural', desc: 'iOS & Android Ecosystems', path: '/services#mobile', icon: Smartphone, color: 'text-[#1ba6d6]' }
                                        ].map(item => (
                                            <Link key={item.path} to={item.path} className="group/item flex gap-5 p-5 rounded-3xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500">
                                                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover/item:bg-white group-hover/item:text-dark-900 transition-all duration-500 shadow-xl`}>
                                                    <item.icon size={20} className="transition-transform group-hover/item:scale-110" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-[0.7rem] font-black text-white uppercase tracking-tight group-hover/item:text-primary-400 transition-colors">{item.title}</p>
                                                        <ChevronDown size={12} className="-rotate-90 opacity-0 group-hover/item:opacity-40 transition-all group-hover/item:translate-x-1" />
                                                    </div>
                                                    <p className="text-[0.55rem] text-gray-500 font-bold uppercase tracking-widest mt-2 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-10 relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-1 h-3 bg-[#ffc957] rounded-full" />
                                        <h3 className="text-[0.65rem] font-bold text-white uppercase tracking-[0.4em]">Intelligence</h3>
                                    </div>
                                    <div className="grid gap-4">
                                        {[
                                            { title: 'AI & Automation', desc: 'Predictive Neural Sync', path: '/services#expertise', icon: Cpu, color: 'text-[#ffc957]' },
                                            { title: 'Enterprise Logic', desc: 'Scalable Cloud Systems', path: '/services#software', icon: ShieldCheck, color: 'text-[#ffc957]' }
                                        ].map(item => (
                                            <Link key={item.path} to={item.path} className="group/item flex gap-5 p-5 rounded-3xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500">
                                                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover/item:bg-white group-hover/item:text-dark-900 transition-all duration-500 shadow-xl`}>
                                                    <item.icon size={20} className="transition-transform group-hover/item:scale-110" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-[0.7rem] font-black text-white uppercase tracking-tight group-hover/item:text-[#ffc957] transition-colors">{item.title}</p>
                                                        <ChevronDown size={12} className="-rotate-90 opacity-0 group-hover/item:opacity-40 transition-all group-hover/item:translate-x-1" />
                                                    </div>
                                                    <p className="text-[0.55rem] text-gray-500 font-bold uppercase tracking-widest mt-2 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col justify-center border-l border-white/5 pl-10">
                                    <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden group/panel">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover/panel:opacity-100 transition-opacity" />
                                        <h4 className="text-[0.5rem] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Architecture First</h4>
                                        <p className="text-[0.6rem] text-white font-bold uppercase tracking-widest leading-relaxed mb-6">
                                            We build products that don't just work—they perform.
                                        </p>
                                        <div className="flex items-center gap-3 text-[0.45rem] font-black text-[#1ba6d6] uppercase tracking-widest">
                                            <Zap size={10} className="fill-current" /> Scalability Verified
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
            >
                <button className={`text-[0.7rem] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${location.pathname.includes('#industries') ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                    Industries
                    <ChevronDown size={12} className={`transition-transform duration-500 ${activeMegaMenu === 'industries' ? 'rotate-180 text-secondary-400' : ''}`} />
                </button>

                <AnimatePresence>
                    {activeMegaMenu === 'industries' && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-12 w-[340px] z-50 pointer-events-auto"
                        >
                            <div className={`${dropdownContainerStyle} p-10 bg-[#0e1114]`}>
                                <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                                <div className="flex items-center gap-3 mb-8 relative z-10 px-2">
                                    <div className="w-1 h-3 bg-secondary-500 rounded-full" />
                                    <h3 className="text-[0.6rem] font-black text-white uppercase tracking-[0.4em]">Vertical Nodes</h3>
                                </div>
                                <div className="grid gap-3 relative z-10">
                                    {['Healthcare', 'Logistics', 'Construction', 'Finance'].map(industry => (
                                        <Link key={industry} to={`/services#${industry.toLowerCase()}`} className="group/item flex items-center justify-between p-5 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500">
                                            <span className="text-[0.7rem] font-bold text-gray-400 group-hover/item:text-white uppercase tracking-widest transition-colors">{industry}</span>
                                            <div className="w-2 h-2 rounded-full bg-secondary-500 opacity-0 group-hover/item:opacity-100 transition-all scale-0 group-hover/item:scale-100" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {navLinks.map(link => (
                <Link key={link.path} to={link.path} className={`text-[0.7rem] font-black uppercase tracking-[0.2em] transition-all ${location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                    {link.name}
                </Link>
            ))}
            
            {/* Company Dropdown */}
            <div 
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
            >
                <button className={`text-[0.7rem] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${['/about', '/careers', '/security'].includes(location.pathname) ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                    Company
                    <ChevronDown size={12} className={`transition-transform duration-500 ${activeMegaMenu === 'company' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {activeMegaMenu === 'company' && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-12 w-[280px] z-50 pointer-events-auto"
                        >
                            <div className={`${dropdownContainerStyle} p-10 bg-[#0e1114]`}>
                                <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                                <div className="flex items-center gap-3 mb-8 relative z-10 px-2">
                                    <div className="w-1 h-3 bg-primary-500 rounded-full" />
                                    <h3 className="text-[0.6rem] font-black text-white uppercase tracking-[0.4em]">Entity Trace</h3>
                                </div>
                                <div className="grid gap-3 relative z-10">
                                    {[
                                        { label: 'About Us', path: '/about' },
                                        { label: 'Careers', path: '/careers' },
                                        { label: 'Security', path: '/security', active: true }
                                    ].map(item => (
                                        <Link key={item.path} to={item.path} className="group/item flex items-center justify-between p-5 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500">
                                            <span className={`text-[0.7rem] font-bold ${item.active ? 'text-[#1ba6d6]' : 'text-gray-400'} group-hover/item:text-white uppercase tracking-widest transition-colors`}>{item.label}</span>
                                            <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-[#1ba6d6]' : 'bg-white/20'} opacity-0 group-hover/item:opacity-100 transition-all scale-0 group-hover/item:scale-100`} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          
            <Link 
                to="/get-started" 
                className="inline-flex items-center justify-center px-10 py-4 bg-[#1ba6d6] text-white font-black text-[0.65rem] uppercase tracking-[0.2em] mask-btn transition-all hover:scale-105 shadow-[0_20px_40px_rgba(27,166,214,0.3)] hover:shadow-[#1ba6d6]/40"
            >
                Book a free call
            </Link>
        </div>

        {/* Mobile Controller */}
        <div className="flex items-center lg:hidden gap-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 flex items-center justify-center text-white border border-white/10 hover:border-[#1ba6d6] transition-all bg-white/5 rounded-2xl relative z-50"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </div>

      {/* Mobile Terminal Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
                exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 bg-[#0e1114] z-40 flex flex-col pt-32 px-6 lg:hidden overflow-y-auto"
            >
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                
                <div className="space-y-4 relative z-10 pb-20">
                    {/* Collapsible Solutions */}
                    <div className="border-b border-white/5 pb-4">
                        <button 
                            onClick={() => toggleMobileMenu('solutions')}
                            className="w-full flex items-center justify-between py-4 text-3xl font-black text-white italic tracking-tighter uppercase"
                        >
                            Solutions
                            <ChevronDown size={24} className={`transition-transform duration-500 ${mobileMenus.solutions ? 'rotate-180 text-primary-400' : 'text-white/20'}`} />
                        </button>
                        <AnimatePresence>
                            {mobileMenus.solutions && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-white/5 rounded-3xl mt-2 px-4 py-6 space-y-8"
                                >
                                    <div className="space-y-6">
                                        <p className="text-[0.5rem] font-black text-primary-400 uppercase tracking-[0.4em] px-2 italic">Outcome-Focused</p>
                                        <div className="grid gap-2">
                                            <Link to="/services#web" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5">
                                                <span className="text-xl font-black text-white tracking-tight uppercase">Web Platforms</span>
                                                <Code2 size={16} className="text-primary-400" />
                                            </Link>
                                            <Link to="/services#mobile" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5">
                                                <span className="text-xl font-black text-white tracking-tight uppercase">Mobile Neural</span>
                                                <Smartphone size={16} className="text-primary-400" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-[0.5rem] font-black text-[#ffc957] uppercase tracking-[0.4em] px-2 italic">Intelligence</p>
                                        <div className="grid gap-2">
                                            <Link to="/services#expertise" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5">
                                                <span className="text-xl font-black text-white tracking-tight uppercase">AI & Automation</span>
                                                <Cpu size={16} className="text-[#ffc957]" />
                                            </Link>
                                            <Link to="/services#software" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5">
                                                <span className="text-xl font-black text-white tracking-tight uppercase">Enterprise Logic</span>
                                                <ShieldCheck size={16} className="text-[#ffc957]" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-primary-500/10 border border-primary-500/20 rounded-2xl">
                                        <p className="text-[0.55rem] font-black text-white/50 uppercase tracking-[0.3em] mb-2 italic">Architecture First</p>
                                        <p className="text-xs font-bold text-white/80 leading-relaxed uppercase">We build products that perform.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Collapsible Industries */}
                    <div className="border-b border-white/5 pb-4">
                        <button 
                            onClick={() => toggleMobileMenu('industries')}
                            className="w-full flex items-center justify-between py-4 text-3xl font-black text-white italic tracking-tighter uppercase"
                        >
                            Industries
                            <ChevronDown size={24} className={`transition-transform duration-500 ${mobileMenus.industries ? 'rotate-180 text-secondary-400' : 'text-white/20'}`} />
                        </button>
                        <AnimatePresence>
                            {mobileMenus.industries && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-white/5 rounded-3xl mt-2 p-6 grid grid-cols-2 gap-4"
                                >
                                    {['Healthcare', 'Logistics', 'Construction', 'Finance'].map(ind => (
                                        <Link key={ind} to={`/services#${ind.toLowerCase()}`} onClick={() => setIsOpen(false)} className="p-4 bg-white/2 border border-white/5 rounded-2xl text-[0.65rem] font-black text-white/40 hover:text-white uppercase tracking-widest text-center italic">
                                            {ind}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Simple Links */}
                    {navLinks.map((link) => (
                        <div key={link.path} className="border-b border-white/5 pb-4">
                            <Link 
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block py-4 text-3xl font-black text-white italic tracking-tighter uppercase"
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}

                    {/* Collapsible Company */}
                    <div className="border-b border-white/5 pb-4">
                        <button 
                            onClick={() => toggleMobileMenu('company')}
                            className="w-full flex items-center justify-between py-4 text-3xl font-black text-white italic tracking-tighter uppercase"
                        >
                            Company
                            <ChevronDown size={24} className={`transition-transform duration-500 ${mobileMenus.company ? 'rotate-180 text-primary-400' : 'text-white/20'}`} />
                        </button>
                        <AnimatePresence>
                            {mobileMenus.company && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-white/5 rounded-3xl mt-2 p-6 space-y-4"
                                >
                                    {['About', 'Careers', 'Security'].map(item => (
                                        <Link key={item} to={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block py-4 border-b border-white/5 text-xl font-black text-white/50 hover:text-white uppercase italic tracking-widest">
                                            {item}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link 
                        to="/get-started"
                        onClick={() => setIsOpen(false)}
                        className="block mt-10 py-8 bg-[#1ba6d6] text-center text-4xl font-black text-white italic tracking-tighter uppercase rounded-[2rem] shadow-2xl"
                    >
                        Initialize Call
                    </Link>
                </div>
                
                <div className="mt-auto pb-10 text-center opacity-30 relative z-10 border-t border-white/5 pt-10">
                    <p className="text-[0.6rem] text-white/50 font-black uppercase tracking-[0.4em] mb-4">&copy; 2026 Limitless Infotech Solution</p>
                    <div className="flex justify-center gap-6">
                        <Globe size={16} className="text-[#1ba6d6]" />
                        <Layers size={16} className="text-[#ffc957]" />
                        <Activity size={16} className="text-white" />
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
