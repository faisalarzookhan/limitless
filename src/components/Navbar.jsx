import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
  HiServer,
  HiUsers,
  HiClock,
  HiTicket,
  HiMail,
  HiDatabase,
  HiArrowRight,
  HiSun,
  HiMoon,
  HiShieldCheck,
  HiCurrencyDollar,
} from "react-icons/hi";
import { useApp } from "../context/AppContext";
import { Image } from "./ui";

const Navbar = ({ isTransparent = false }) => {
  const { theme, changeTheme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(null);
  const location = useLocation();

  // Memoize navigation data to prevent unnecessary re-renders
  const memoizedProducts = useMemo(() => [
    {
      id: "trackit",
      name: "TrackIT",
      description: "IT Asset Management",
      icon: HiServer,
      color: "text-blue-600",
      popular: false,
    },
    {
      id: "hrims",
      name: "HR-IMS",
      description: "HR Management System",
      icon: HiUsers,
      color: "text-purple-600",
      popular: true,
    },
    {
      id: "worktrack",
      name: "WorkTrack",
      description: "Workforce Management",
      icon: HiClock,
      color: "text-orange-600",
      popular: false,
    },
    {
      id: "ittms",
      name: "IT-TMS",
      description: "Ticket Management",
      icon: HiTicket,
      color: "text-red-600",
      popular: false,
    },
    {
      id: "tracko",
      name: "TrackO",
      description: "Operations Tracking",
      icon: HiChartBar,
      color: "text-green-600",
      popular: false,
    },
    {
      id: "mailto",
      name: "MailTO",
      description: "Email Management",
      icon: HiMail,
      color: "text-cyan-600",
      popular: false,
    },
    {
      id: "baseless",
      name: "Baseless",
      description: "Database Solutions",
      icon: HiDatabase,
      color: "text-indigo-600",
      badge: "New",
    },
  ], []);

  const memoizedServices = useMemo(() => [
    { name: "Web Development", icon: HiCode, path: "/services#web" },
    { name: "Mobile Apps", icon: HiDeviceMobile, path: "/services#mobile" },
    { name: "Custom Software", icon: HiCube, path: "/services#software" },
    { name: "CRM Solutions", icon: HiChartBar, path: "/services#crm" },
    {
      name: "Business Automation",
      icon: HiLightningBolt,
      path: "/services#automation",
    },
  ], []);

  const memoizedNavItems = useMemo(() => [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "/products",
      hasDropdown: true,
      dropdownType: "products",
    },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownType: "services",
    },
    {
      name: "Enterprise",
      path: "/compliance",
      hasDropdown: true,
      dropdownType: "enterprise",
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ], []);

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setIsMobileSubmenuOpen(null);
  }, [location]);

  const isActive = useCallback((path) => {
    return location.pathname === path;
  }, [location.pathname]);

  const handleDropdownEnter = useCallback((itemName) => {
    setActiveDropdown(itemName);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleMobileSubmenu = useCallback((itemName) => {
    setIsMobileSubmenuOpen(isMobileSubmenuOpen === itemName ? null : itemName);
  }, [isMobileSubmenuOpen]);

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
        setIsMobileSubmenuOpen(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "py-5 bg-transparent backdrop-blur-none"
            : isScrolled
              ? "py-3 bg-white/90 dark:bg-dark-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-dark-700/30"
              : "py-5 bg-white/70 dark:bg-dark-900/70 backdrop-blur-lg"
        }`}
        aria-label="Main navigation"
      >
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:gap-6">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group z-50 relative flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
              aria-label="Limitless Infotech Solution homepage"
            >
              <div className="relative">
                <Image
                  src="/images/logos/Limitlessinfotech Logo - 3D.png"
                  alt="Limitless Infotech Solution"
                  className="h-16 w-16 md:h-20 md:w-20 object-contain transform group-hover:scale-105 transition-all duration-300 drop-shadow-lg"
                  width="80"
                  height="80"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center">
              {memoizedNavItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleDropdownEnter(item.name)
                  }
                  onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
                  onFocus={() =>
                    item.hasDropdown && handleDropdownEnter(item.name)
                  }
                  onBlur={() => item.hasDropdown && handleDropdownLeave()}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30"
                        : "text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-800/60 hover:shadow-md"
                    }`}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-max min-w-[300px] md:min-w-[500px] bg-white/95 dark:bg-blue-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-200/50 dark:border-blue-700/50 overflow-hidden animate-fade-in"
                      role="menu"
                      aria-label={`${item.name} submenu`}
                    >
                      {item.dropdownType === "products" && (
                        <div className="p-5 md:p-6">
                          <div className="mb-4 pb-4 border-b border-blue-200 dark:border-blue-700">
                            <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-1">
                              Our Products
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Enterprise SaaS solutions for modern businesses
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-4">
                            {memoizedProducts.map((product) => (
                              <Link
                                key={product.id}
                                to={`/products#${product.id}`}
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div
                                  className={`flex-shrink-0 w-10 h-10 ${product.color} bg-opacity-10 dark:bg-opacity-20 rounded-lg flex items-center justify-center`}
                                >
                                  <product.icon
                                    className={`w-5 h-5 ${product.color}`}
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                      {product.name}
                                    </h4>
                                    {product.popular && (
                                      <span className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-full">
                                        Popular
                                      </span>
                                    )}
                                    {product.badge && (
                                      <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full">
                                        {product.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                    {product.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <Link
                            to="/products"
                            className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>View All Products</span>
                            <HiArrowRight className="w-4 h-4" aria-hidden="true" />
                          </Link>
                        </div>
                      )}

                      {item.dropdownType === "services" && (
                        <div className="p-5 md:p-6">
                          <div className="mb-4 pb-4 border-b border-blue-200 dark:border-blue-700">
                            <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-1">
                              Our Services
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Comprehensive technology solutions
                            </p>
                          </div>

                          <div className="grid gap-2 mb-4">
                            {memoizedServices.map((service, index) => (
                              <Link
                                key={index}
                                to={service.path}
                                className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary opacity-10 rounded-lg flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                                  <service.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" aria-hidden="true" />
                                </div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                  {service.name}
                                </span>
                                <HiArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-hidden="true" />
                              </Link>
                            ))}
                          </div>

                          <Link
                            to="/services"
                            className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>View All Services</span>
                            <HiArrowRight className="w-4 h-4" aria-hidden="true" />
                          </Link>
                        </div>
                      )}

                      {item.dropdownType === "enterprise" && (
                        <div className="p-5 md:p-6">
                          <div className="mb-4 pb-4 border-b border-blue-200 dark:border-blue-700">
                            <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-1">
                              Enterprise Solutions
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              Enterprise-grade tools and compliance
                            </p>
                          </div>

                          <div className="grid gap-2 mb-4">
                            <Link
                              to="/compliance"
                              className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary opacity-10 rounded-lg flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                                <HiShieldCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" aria-hidden="true" />
                              </div>
                              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                Compliance & Security
                              </span>
                              <HiArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-hidden="true" />
                            </Link>
                            <Link
                              to="/innovation-lab"
                              className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary opacity-10 rounded-lg flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                                <HiLightningBolt className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" aria-hidden="true" />
                              </div>
                              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                Innovation Lab
                              </span>
                              <HiArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-hidden="true" />
                            </Link>
                            <Link
                              to="/api-documentation"
                              className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary opacity-10 rounded-lg flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                                <HiCode className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" aria-hidden="true" />
                              </div>
                              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                API Documentation
                              </span>
                              <HiArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-hidden="true" />
                            </Link>
                            <Link
                              to="/roi-calculator"
                              className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary opacity-10 rounded-lg flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                                <HiCurrencyDollar className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" aria-hidden="true" />
                              </div>
                              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                ROI Calculator
                              </span>
                              <HiArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-hidden="true" />
                            </Link>
                          </div>

                          <Link
                            to="/compliance"
                            className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>Enterprise Hub</span>
                            <HiArrowRight className="w-4 h-4" aria-hidden="true" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              
              {/* CTA Button */}
              <Link
                to="/get-started"
                className="ml-2 md:ml-4 mission-critical-button flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Get started with our services"
              >
                <span>Get Started</span>
                <HiArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/80 dark:bg-blue-800/80 text-blue-900 dark:text-blue-100 hover:bg-white dark:hover:bg-blue-700/80 transition-all duration-300 border border-blue-200/50 dark:border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <HiMenu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white/95 dark:bg-blue-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-blue-200 dark:border-blue-700">
              <Link
                to="/"
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                onClick={() => setIsOpen(false)}
                aria-label="Limitless Infotech Solution homepage"
              >
                <Image
                  src="/images/logos/Limitlessinfotech Logo - 3D.png"
                  alt="Limitless Infotech Solution"
                  className="h-12 w-12 object-contain"
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close menu"
              >
                <HiX className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="space-y-2" role="menubar">
                {memoizedNavItems.map((item) => (
                  <div key={item.path}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        onClick={() => !item.hasDropdown && setIsOpen(false)}
                        className={`flex-1 flex items-center space-x-3 px-5 py-4 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isActive(item.path)
                            ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                            : "text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-800"
                        }`}
                        aria-current={isActive(item.path) ? "page" : undefined}
                      >
                        <span>{item.name}</span>
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="p-4 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-800 rounded-xl transition-colors ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-expanded={isMobileSubmenuOpen === item.name}
                          aria-controls={`submenu-${item.name}`}
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <HiChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isMobileSubmenuOpen === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {item.hasDropdown && isMobileSubmenuOpen === item.name && (
                      <div 
                        id={`submenu-${item.name}`}
                        className="mt-2 ml-4 pl-6 border-l-2 border-blue-200 dark:border-blue-700 space-y-2 animate-fade-in"
                        role="menu"
                      >
                        {item.dropdownType === "products" &&
                          memoizedProducts.map((product) => (
                            <Link
                              key={product.id}
                              to={`/products#${product.id}`}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-800 dark:text-blue-200 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <product.icon
                                className={`w-4 h-4 ${product.color}`}
                                aria-hidden="true"
                              />
                              <span className="text-sm">{product.name}</span>
                              {product.popular && (
                                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-full">
                                  Popular
                                </span>
                              )}
                            </Link>
                          ))}

                        {item.dropdownType === "services" &&
                          memoizedServices.map((service, index) => (
                            <Link
                              key={index}
                              to={service.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-800 dark:text-blue-200 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <service.icon className="w-4 h-4" aria-hidden="true" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}

                        {item.dropdownType === "enterprise" && (
                          <>
                            <Link
                              to="/compliance"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-800 dark:text-blue-200 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <HiShieldCheck className="w-4 h-4" aria-hidden="true" />
                              <span className="text-sm">Compliance & Security</span>
                            </Link>
                            <Link
                              to="/innovation-lab"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-800 dark:text-blue-200 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <HiLightningBolt className="w-4 h-4" aria-hidden="true" />
                              <span className="text-sm">Innovation Lab</span>
                            </Link>
                            <Link
                              to="/api-documentation"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-800 dark:text-blue-200 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <HiCode className="w-4 h-4" aria-hidden="true" />
                              <span className="text-sm">API Documentation</span>
                            </Link>
                            <Link
                              to="/roi-calculator"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-800 dark:text-blue-200 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-blue-50 dark:hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <HiCurrencyDollar className="w-4 h-4" aria-hidden="true" />
                              <span className="text-sm">ROI Calculator</span>
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                <Link
                  to="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="mission-critical-button w-full flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Get started with our services"
                >
                  <span>Get Started</span>
                  <HiArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="px-6 py-5 bg-blue-50/50 dark:bg-blue-800/50 border-t border-blue-200 dark:border-blue-700">
              <p className="text-xs text-center text-blue-600 dark:text-blue-400">
                © {new Date().getFullYear()} Limitless Infotech Solution
                <br />
                Where Innovation Meets Execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
