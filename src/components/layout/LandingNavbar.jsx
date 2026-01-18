import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LandingNavbar = ({ isScrolled, toggleModal }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <nav id="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0e1114]/95 backdrop-blur-md border-b border-white/5 py-4' : 'py-8'}`}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-4 group cursor-pointer z-50 relative">
                        <div className="w-10 h-10 bg-[#1ba6d6] mask-facet flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <span className="text-white font-black text-xl">L</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-extrabold tracking-tighter text-xl leading-none">LIMITLESS</span>
                            <span className="text-[#1ba6d6] text-[0.6rem] font-bold tracking-[0.4em] mt-1 leading-none uppercase">Infotech Solution</span>
                        </div>
                    </a>
                    
                    <div className="hidden lg:flex items-center gap-12">
                        <a href="#expertise" className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#94a3b8] hover:text-white transition-colors">Expertise</a>
                        <a href="#foundational" className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#94a3b8] hover:text-white transition-colors">Foundational</a>
                        <a href="/blog" className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#94a3b8] hover:text-white transition-colors">Insights</a>
                        <a href="#process" className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#94a3b8] hover:text-white transition-colors">Process</a>
                        <button onClick={toggleModal} className="px-8 py-3 bg-white text-[#0e1114] text-[0.7rem] font-black uppercase tracking-widest mask-btn hover:bg-[#1ba6d6] hover:text-white">
                            Initiate Project
                        </button>
                    </div>

                    <button onClick={toggleMobileMenu} className="lg:hidden text-white z-50 relative p-2">
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            <div id="mobile-menu" className={`mobile-menu fixed inset-0 bg-[#0e1114] z-40 flex flex-col items-center justify-center text-center p-8 ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="space-y-8 flex flex-col">
                    <a href="#expertise" onClick={toggleMobileMenu} className="text-2xl font-bold text-white hover:text-[#1ba6d6] transition-colors">Expertise</a>
                    <a href="#foundational" onClick={toggleMobileMenu} className="text-2xl font-bold text-white hover:text-[#1ba6d6] transition-colors">Foundational</a>
                    <a href="/blog" onClick={toggleMobileMenu} className="text-2xl font-bold text-white hover:text-[#1ba6d6] transition-colors">Insights</a>
                    <a href="#process" onClick={toggleMobileMenu} className="text-2xl font-bold text-white hover:text-[#1ba6d6] transition-colors">Process</a>
                    <button onClick={() => { toggleMobileMenu(); toggleModal(); }} className="px-10 py-4 bg-[#1ba6d6] text-white text-sm font-black uppercase tracking-widest mask-btn shadow-xl">
                        Initiate Project
                    </button>
                </div>
                <div className="absolute bottom-10 left-0 w-full text-center">
                     <p className="text-[0.6rem] text-[#1ba6d6] uppercase tracking-[0.3em]">System Status: Online</p>
                </div>
            </div>
        </>
    );
};

export default LandingNavbar;
