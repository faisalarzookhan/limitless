import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket, Code2, Smartphone, Cpu, ShieldCheck, Zap } from 'lucide-react';

const Navbar = ({ onInitiateProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Insights', path: '/blog' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-[#0e1114]/90 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group z-50">
           <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <img src="/images/logos/Limitless_Geometric_Logo.png" alt="Limitless" className="w-full h-full object-contain" />
           </div>
           <div className="flex flex-col">
               <span className="text-white font-extrabold tracking-tighter text-xl leading-none uppercase">LIMITLESS</span>
               <span className="text-[#1ba6d6] text-[0.6rem] font-bold tracking-[0.4em] mt-1 leading-none uppercase hidden sm:block">Infotech Solution</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === '/' ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}>Home</Link>
            
            {/* Services Mega Menu Trigger */}
            <div 
                className="relative group py-2"
                onMouseEnter={() => setActiveMegaMenu('services')}
                onMouseLeave={() => setActiveMegaMenu(null)}
            >
                <button className={`text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${location.pathname.startsWith('/services') ? 'text-white' : 'text-[#94a3b8] group-hover:text-white'}`}>
                    Services
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                    {activeMegaMenu === 'services' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] z-50 pointer-events-auto"
                        >
                            <div className="bg-[#0e1114]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 grid grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h3 className="text-[0.6rem] font-black text-[#1ba6d6] uppercase tracking-[0.3em] mb-4">Core Architecture</h3>
                                    {[
                                        { title: 'Web Systems', desc: 'Enterprise React & Next.js', path: '/services#web', icon: Code2 },
                                        { title: 'Mobile Neural', desc: 'iOS & Android Ecosystems', path: '/services#mobile', icon: Smartphone }
                                    ].map(item => (
                                        <Link key={item.path} to={item.path} className="flex gap-4 group/item">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-[#1ba6d6]/20 transition-colors">
                                                <item.icon size={18} className="text-[#1ba6d6]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white uppercase tracking-tight">{item.title}</p>
                                                <p className="text-[0.6rem] text-gray-500 uppercase tracking-widest mt-1">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-[0.6rem] font-black text-[#ffc957] uppercase tracking-[0.3em] mb-4">Intelligence & Cloud</h3>
                                    {[
                                        { title: 'AI & Neural', desc: 'Predictive LLM Integration', path: '/services#expertise', icon: Cpu },
                                        { title: 'Cloud Infrastructure', desc: 'AWS & Azure Scalability', path: '/services#software', icon: ShieldCheck }
                                    ].map(item => (
                                        <Link key={item.path} to={item.path} className="flex gap-4 group/item">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-[#ffc957]/20 transition-colors">
                                                <item.icon size={18} className="text-[#ffc957]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white uppercase tracking-tight">{item.title}</p>
                                                <p className="text-[0.6rem] text-gray-500 uppercase tracking-widest mt-1">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Link to="/portfolio" className={`text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === '/portfolio' ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}>Portfolio</Link>
            <Link to="/blog" className={`text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === '/blog' ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}>Insights</Link>
            <Link to="/about" className={`text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === '/about' ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}>About</Link>
          
          <Link 
            to="/get-started" 
            className="px-8 py-3 bg-[#1ba6d6] text-white font-black text-xs uppercase tracking-[0.2em] mask-btn transition-all hover:scale-105 shadow-[0_10px_20px_rgba(27,166,214,0.3)]"
          >
            Initiate Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center lg:hidden gap-4">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center text-white border border-white/10 hover:border-[#1ba6d6] transition-colors"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 bg-[#0e1114] z-40 flex flex-col pt-32 px-6 lg:hidden overflow-y-auto"
            >
                <div className="space-y-6">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path} 
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-2xl font-black text-white hover:text-[#1ba6d6] tracking-tighter transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                     <Link 
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-2xl font-black text-[#1ba6d6] hover:text-white tracking-tighter transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                
                <div className="mt-auto pb-10 text-center opacity-30">
                    <p className="text-[0.6rem] text-white uppercase tracking-[0.3em]">&copy; 2026 Limitless Infotech</p>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
