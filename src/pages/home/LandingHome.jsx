import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/header/Navbar';
import Footer from '../../components/layout/footer/Footer';
import LandingHero from '../../components/home/LandingHero';
import LandingMetrics from '../../components/home/LandingMetrics';
import LandingCapabilities from '../../components/home/LandingCapabilities';
import LandingProcess from '../../components/home/LandingProcess';
import LandingFoundational from '../../components/home/LandingFoundational';
import LandingEngagement from '../../components/home/LandingEngagement';
import LandingModal from '../../components/home/LandingModal';

const LandingHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observe elements from sub-components.
        // We use a timeout to ensure sub-components are mounted and rendered
        const timer = setTimeout(() => {
            document.querySelectorAll('.on-scroll, .on-scroll-mask').forEach(el => observer.observe(el));
        }, 100);

        const handleScroll = () => {
             if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="bg-[#0e1114] text-[#94a3b8] font-sans antialiased overflow-x-hidden scroll-smooth selection:bg-[#1ba6d6] selection:text-white">
            <div className="blueprint-grid fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:80px_80px] -z-10 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]"></div>

            <Navbar onInitiateProject={toggleModal} />

            <LandingHero toggleModal={toggleModal} />

            <LandingMetrics />

            <LandingCapabilities />

            <LandingProcess />

            <LandingFoundational toggleModal={toggleModal} />

            <LandingEngagement toggleModal={toggleModal} />

            <Footer />

            <LandingModal isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
    );
};

export default LandingHome;
