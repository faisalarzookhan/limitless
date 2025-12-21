import React from 'react';
import { Link } from 'react-router-dom';
import { HiCode, HiDeviceMobile, HiCube, HiChartBar, HiLightningBolt, HiShieldCheck, HiSparkles, HiServer, HiTrendingUp, HiClock, HiUserGroup, HiChevronDown, HiChevronUp, HiStar, HiCheckCircle, HiArrowRight } from 'react-icons/hi';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container-custom px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-dark-800 px-6 py-3 rounded-full shadow-soft mb-8 animate-fade-in-down">
            <HiSparkles className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Where Innovation Meets Execution
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up">
            Empowering Businesses with{" "}
            <span className="text-gradient">Technology</span>
            <br />
            that is{" "}
            <span className="text-gradient-secondary">Secure, Unique,</span>
            <br />
            and <span className="text-gradient-accent">Limitless</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your business with cutting-edge digital solutions. We
            are the architects of transformation, building tomorrow's
            technology today.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/get-started" className="btn-primary">
              Get Started
              <HiArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link to="/products" className="btn-secondary">
              Explore Our Products
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { number: "50+", label: "Products & Solutions" },
              { number: "7", label: "SaaS Products" },
              { number: "10K+", label: "Product Users" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <HiChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
