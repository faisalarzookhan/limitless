import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Zap, Globe, Shield, Terminal, Boxes, Cpu, Layers, BookOpen, Users, DollarSign, Rocket, Newspaper } from 'lucide-react';

const NavDropdown = ({ title, items, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}>
        {title}
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 mt-4 w-64 bg-[#0e1114]/95 backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-2xl z-50"
          >
            <div className="space-y-1">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 group transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#1ba6d6]/10 transition-colors">
                    {item.icon && <item.icon size={16} className="text-[#94a3b8] group-hover:text-[#1ba6d6] transition-colors" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">{item.name}</div>
                    {item.description && <div className="text-[10px] text-[#94a3b8] mt-0.5 line-clamp-1">{item.description}</div>}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = ({ onInitiateProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const platformLinks = [
    { name: 'Products', path: '/products', icon: Boxes, description: 'Neural SaaS Registry' },
    { name: 'Services', path: '/services', icon: Cpu, description: 'Specialized Architecture' },
    { name: 'Portfolio', path: '/portfolio', icon: Rocket, description: 'Success Trajectories' },
    { name: 'Enterprise', path: '/compliance', icon: Shield, description: 'Admin & Compliance' },
  ];

  const intelligenceLinks = [
    { name: 'Auralis AI', path: '/auralis-ai', icon: Sparkles, description: 'Persona Adaptation' },
    { name: 'Innovation Lab', path: '/innovation-lab', icon: Terminal, description: 'Research & Prototypes' },
    { name: 'Knowledge Base', path: '/knowledge-base', icon: BookOpen, description: 'Neural Repository' },
    { name: 'API Reference', path: '/api-documentation', icon: Layers, description: 'Developer Core' },
  ];

  const companyLinks = [
    { name: 'About US', path: '/about', icon: Globe, description: 'Mission & Vision' },
    { name: 'Careers', path: '/careers', icon: Users, description: 'Join the Nexus' },
    { name: 'Pricing', path: '/pricing', icon: DollarSign, description: 'Scale Protocols' },
    { name: 'Intelligence Hub', path: '/blog', icon: Newspaper, description: 'Industry Insights' },
    { name: 'Testimonials', path: '/testimonials', icon: Zap, description: 'Client Telemetry' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-[#0e1114]/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group z-50">
           <div className="w-10 h-10 bg-[#1ba6d6] mask-facet flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <span className="text-white font-black text-xl">L</span>
           </div>
           <div className="flex flex-col">
               <span className="text-white font-extrabold tracking-tighter text-xl leading-none uppercase">LIMITLESS</span>
               <span className="text-[#1ba6d6] text-[0.6rem] font-bold tracking-[0.4em] mt-1 leading-none uppercase hidden sm:block">Infotech Solution</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <NavDropdown title="Platform" items={platformLinks} isActive={platformLinks.some(l => location.pathname === l.path)} />
          <NavDropdown title="Intelligence" items={intelligenceLinks} isActive={intelligenceLinks.some(l => location.pathname === l.path)} />
          <NavDropdown title="Company" items={companyLinks} isActive={companyLinks.some(l => location.pathname === l.path)} />
          
          <Link 
            to="/contact" 
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === '/contact' ? 'text-white' : 'text-[#94a3b8] hover:text-white'}`}
          >
            Contact
          </Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
             {onInitiateProject ? (
                <button 
                    onClick={onInitiateProject}
                    className="hidden xl:flex px-6 py-3 bg-[#1ba6d6] text-white font-black text-[0.65rem] uppercase tracking-widest mask-btn hover:bg-[#f4b41a] transition-colors"
                >
                    Initiate Project
                </button>
             ) : (
                <Link 
                    to="/contact" 
                    className="hidden xl:flex px-6 py-3 bg-[#1ba6d6] text-white font-black text-[0.65rem] uppercase tracking-widest mask-btn hover:bg-[#f4b41a] transition-colors"
                >
                    Initiate Project
                </Link>
             )}

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white border border-white/10 hover:border-[#1ba6d6] transition-colors"
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
                <div className="space-y-8">
                     <div className="space-y-4">
                        <h3 className="text-[#1ba6d6] text-[0.6rem] font-black uppercase tracking-widest">Platform</h3>
                        {platformLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-2xl font-black text-white hover:text-[#1ba6d6] tracking-tighter transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[#1ba6d6] text-[0.6rem] font-black uppercase tracking-widest">Intelligence</h3>
                        {intelligenceLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-2xl font-black text-white hover:text-[#1ba6d6] tracking-tighter transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[#1ba6d6] text-[0.6rem] font-black uppercase tracking-widest">Company</h3>
                        {companyLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-2xl font-black text-white hover:text-[#1ba6d6] tracking-tighter transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                     {onInitiateProject ? (
                        <button 
                            onClick={() => { setIsOpen(false); onInitiateProject(); }}
                            className="inline-block w-full text-center mt-8 px-8 py-4 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-widest mask-btn"
                        >
                            Initiate Project
                        </button>
                     ) : (
                        <Link 
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="inline-block w-full text-center mt-8 px-8 py-4 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-widest mask-btn"
                        >
                            Initiate Project
                        </Link>
                     )}
                </div>
                
                <div className="mt-20 pb-10 text-center opacity-30">
                    <p className="text-[0.6rem] text-white uppercase tracking-[0.3em]">System Version 2.1.9</p>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
