import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiSun,
  HiMoon,
  HiSparkles,
} from "react-icons/hi";
import { useApp } from "../context/AppContext";
import { Image } from "./ui";

const Footer = () => {
  const { theme, changeTheme } = useApp();
  const currentYear = new Date().getFullYear();

  const toggleTheme = () => {
    const themes = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    changeTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    if (theme === "dark") return <HiMoon className="w-5 h-5" />;
    if (theme === "light") return <HiSun className="w-5 h-5" />;
    return <HiSparkles className="w-5 h-5" />;
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    { name: "Web Development", path: "/services#web", icon: HiCode },
    {
      name: "Mobile App Development",
      path: "/services#mobile",
      icon: HiDeviceMobile,
    },
    { name: "Custom Software", path: "/services#software", icon: HiCube },
    { name: "CRM Solutions", path: "/services#crm", icon: HiChartBar },
    {
      name: "Business Automation",
      path: "/services#automation",
      icon: HiLightningBolt,
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com/limitlessinfotech", label: "Facebook" },
    { icon: FaTwitter, url: "https://twitter.com/limitlessinfotech", label: "Twitter" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/in/limitlessinfotech", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://instagram.com/limitless.infotech", label: "Instagram" },
    { icon: FaGithub, url: "https://github.com/limitlessinfotech", label: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-dark text-gray-300 border-t border-dark-800">
      {/* Main Footer Content */}
      <div className="container-custom px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logos/limitlessinfotech Logo - 3D.png"
                alt="Limitless Infotech Solution"
                className="w-20 h-20 object-contain"
              />
              <span className="text-2xl font-display font-bold text-white">
                Limitless
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Where Innovation Meets Execution. Empowering Businesses with
              Technology that is Secure, Unique, and Limitless.
            </p>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center space-x-3 px-5 py-3 bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 hover:border-primary-500 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              title={`Current theme: ${theme}`}
              aria-label={`Toggle ${theme} mode`}
            >
              {getThemeIcon()}
              <span className="text-sm font-semibold capitalize">
                {theme} Mode
              </span>
            </button>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6" id="quick-links">
              Quick Links
            </h3>
            <ul className="space-y-3" aria-labelledby="quick-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2 py-1"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 group-focus:w-4 transition-all duration-300 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6" id="our-services">
              Our Services
            </h3>
            <ul className="space-y-3" aria-labelledby="our-services">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2 py-1"
                  >
                    <service.icon className="w-4 h-4 mr-2 group-hover:text-primary-400 group-focus:text-primary-400" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6" id="contact-info">
              Contact Us
            </h3>
            <ul className="space-y-4" aria-labelledby="contact-info">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:Info@limitlessinfotech.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2 py-1 inline-block"
                  >
                    Info@limitlessinfotech.com
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <FaPhone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a
                    href="tel:+917710909492"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2 py-1 inline-block"
                  >
                    +91 77109 09492
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-gray-300">Mumbai, Maharashtra, IN</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-dark-800">
        <div className="container-custom px-4 md:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Build Limitless | Manage Limitless | Grow Limitless with our
              innovative solutions
            </p>
            <Link 
              to="/get-started" 
              className="btn-primary inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              aria-label="Get started with our services today"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Limitless Infotech Solution. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-500 hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-500 hover:text-primary-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Crafted with <span className="text-red-500">♥</span> by Limitless Infotech Solution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
