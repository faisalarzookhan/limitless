import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onInitiateProject }) => {
  const [isOpen, setIsOpen] = useState(false);
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
           <div className="w-10 h-10 bg-[#1ba6d6] mask-facet flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <span className="text-white font-black text-xl">L</span>
           </div>
           <div className="flex flex-col">
               <span className="text-white font-extrabold tracking-tighter text-xl leading-none uppercase">LIMITLESS</span>
               <span className="text-[#1ba6d6] text-[0.6rem] font-bold tracking-[0.4em] mt-1 leading-none uppercase hidden sm:block">Infotech Solution</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
                <Link 
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                        location.pathname === link.path ? 'text-white' : 'text-[#94a3b8] hover:text-white'
                    }`}
                >
                    {link.name}
                </Link>
            ))}
          
          <Link 
            to="/contact" 
            className={`px-6 py-2 border border-[#1ba6d6] text-[#1ba6d6] hover:bg-[#1ba6d6] hover:text-white font-bold text-sm uppercase tracking-wider transition-all rounded-sm`}
          >
            Contact
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
