import { useState, useEffect } from "react";
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
  HiStar,
  HiSparkles,
} from "react-icons/hi";
import { useApp } from "../context/AppContext";

const Navbar = () => {
  const { theme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setIsMobileSubmenuOpen(null);
  }, [location]);

  const products = [
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
  ];

  const services = [
    { name: "Web Development", icon: HiCode, path: "/services#web" },
    { name: "Mobile Apps", icon: HiDeviceMobile, path: "/services#mobile" },
    { name: "Custom Software", icon: HiCube, path: "/services#software" },
    { name: "CRM Solutions", icon: HiChartBar, path: "/services#crm" },
    {
      name: "Business Automation",
      icon: HiLightningBolt,
      path: "/services#automation",
    },
  ];

  const navItems = [
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
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleDropdownEnter = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (itemName) => {
    setIsMobileSubmenuOpen(isMobileSubmenuOpen === itemName ? null : itemName);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-dark-700/30"
            : "py-5 bg-white/50 dark:bg-dark-900/50 backdrop-blur-lg"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="container-custom px-6 md:px-10 lg:px-20">
          <div className="flex items-center justify-between gap-8">
            {/* Logo - Only */}
            <Link
              to="/"
              className="flex items-center group z-50 relative flex-shrink-0"
            >
              <div className="relative">
                <img
                  src="public\images\logos\Limitlessinfotech Logo - 3D.png"
                  alt="Limitless Infotech Solution"
                  className="h-20 w-20 object-contain transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3 flex-1 justify-end">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleDropdownEnter(item.name)
                  }
                  onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-gradient-primary text-white shadow-lg shadow-primary-500/30"
                        : "text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-dark-800/60 hover:shadow-md"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-3 w-max min-w-[600px] bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-dark-700/50 overflow-hidden animate-fade-in">
                      {item.dropdownType === "products" && (
                        <div className="p-6">
                          <div className="mb-4 pb-4 border-b border-gray-200 dark:border-dark-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                              Our Products
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Enterprise SaaS solutions for modern businesses
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {products.map((product) => (
                              <Link
                                key={product.id}
                                to="/products"
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md"
                              >
                                <div
                                  className={`flex-shrink-0 w-10 h-10 ${product.color} bg-opacity-10 dark:bg-opacity-20 rounded-lg flex items-center justify-center`}
                                >
                                  <product.icon
                                    className={`w-5 h-5 ${product.color}`}
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
                            className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                          >
                            <span>View All Products</span>
                            <HiArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}

                      {item.dropdownType === "services" && (
                        <div className="p-6">
                          <div className="mb-4 pb-4 border-b border-gray-200 dark:border-dark-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                              Our Services
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Comprehensive technology solutions
                            </p>
                          </div>

                          <div className="grid gap-2 mb-4">
                            {services.map((service, index) => (
                              <Link
                                key={index}
                                to={service.path}
                                className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-dark-700/80 transition-all duration-300 hover:shadow-md"
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary opacity-10 rounded-lg flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                                  <service.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                  {service.name}
                                </span>
                                <HiArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                              </Link>
                            ))}
                          </div>

                          <Link
                            to="/services"
                            className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                          >
                            <span>View All Services</span>
                            <HiArrowRight className="w-4 h-4" />
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
                className="ml-4 btn-primary flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get Started</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-white/80 dark:bg-dark-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-700/80 transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-dark-700">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src="/logo.png"
                  alt="Limitless Infotech Solution"
                  className="h-12 w-12 object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                aria-label="Close menu"
              >
                <HiX className="w-7 h-7" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        onClick={() => !item.hasDropdown && setIsOpen(false)}
                        className={`flex-1 flex items-center space-x-3 px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
                          isActive(item.path)
                            ? "bg-gradient-primary text-white shadow-lg"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-xl transition-colors ml-2"
                        >
                          <HiChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isMobileSubmenuOpen === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {item.hasDropdown && isMobileSubmenuOpen === item.name && (
                      <div className="mt-2 ml-4 pl-6 border-l-2 border-gray-200 dark:border-dark-700 space-y-2 animate-fade-in">
                        {item.dropdownType === "products" &&
                          products.map((product) => (
                            <Link
                              key={product.id}
                              to="/products"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800 transition-all duration-300"
                            >
                              <product.icon
                                className={`w-4 h-4 ${product.color}`}
                              />
                              <span className="text-sm">{product.name}</span>
                              {product.popular && (
                                <span className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-full">
                                  Popular
                                </span>
                              )}
                            </Link>
                          ))}

                        {item.dropdownType === "services" &&
                          services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800 transition-all duration-300"
                            >
                              <service.icon className="w-4 h-4" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
                <Link
                  to="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="px-6 py-5 bg-gray-50/50 dark:bg-dark-800/50 border-t border-gray-200 dark:border-dark-700">
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                © 2024 Limitless Infotech Solution
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
