import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/header/Navbar';
import Footer from '../../components/layout/footer/Footer';
import LandingHero from '../../components/home/LandingHero';
import LandingMetrics from '../../components/home/LandingMetrics';
import LandingCapabilities from '../../components/home/LandingCapabilities';
import LandingProcess from '../../components/home/LandingProcess';
import LandingFoundational from '../../components/home/LandingFoundational';
import LandingContact from '../../components/home/LandingContact';
import LandingPortfolio from '../../components/home/LandingPortfolio';
import LandingTestimonials from '../../components/home/LandingTestimonials';
import TechStack from '../../components/home/TechStack';
import LandingModal from '../../components/home/LandingModal';
import LandingEstimation from '../../components/home/LandingEstimation';
import ChatWidget from '../../components/chat/ChatWidget';
import SEO from '../../components/SEO/SEO';

const LandingHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
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
        };
    }, []);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="bg-[#0e1114] text-[#94a3b8] font-sans antialiased overflow-x-hidden scroll-smooth selection:bg-[#1ba6d6] selection:text-white">
            <SEO 
                title="Innovation Meets Execution"
                description="Limitless Infotech Solution - Premier Custom Software Development, Cloud Architecture, and AI Integration. We build scalable digital ecosystems for startups and enterprises."
            />
            <div className="blueprint-grid fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:80px_80px] -z-10 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]"></div>

            <Navbar onInitiateProject={toggleModal} />

            <LandingHero toggleModal={toggleModal} />

            <LandingMetrics />

            <LandingCapabilities />
            
            <LandingEstimation />
            
            <LandingPortfolio />

            <TechStack />

            <LandingProcess />

            <LandingTestimonials />

            <LandingFoundational toggleModal={toggleModal} />

            <LandingContact />

            <Footer />
            
            <ChatWidget />

            <LandingModal isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
    );
};

export default LandingHome;
