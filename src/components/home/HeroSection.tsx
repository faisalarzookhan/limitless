import React from 'react';
import { Link } from 'react-router-dom';
import { HiSparkles, HiChevronDown, HiArrowRight } from 'react-icons/hi';
import { AnimatedElement, DuoToneIcon } from '../ui';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 pt-28"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Aligned with container */}
      <div className="absolute inset-0 container-wide px-4 md:px-6 lg:px-8" aria-hidden="true">
        <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      ></div>

      <div className="container-wide px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <AnimatedElement animation="fade-in-down" className="inline-flex items-center space-x-2 bg-white dark:bg-dark-800 px-6 py-3 rounded-full shadow-soft mb-8">
            <HiSparkles className="w-5 h-5 text-primary-600" aria-hidden="true" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Where Innovation Meets Execution
            </span>
          </AnimatedElement>

          {/* Main Heading */}
          <AnimatedElement animation="fade-in-up" delay={0.1} className="mb-6">
            <h1 
              id="hero-heading"
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold"
            >
              Empowering Businesses with{" "}
              <span className="text-gradient">Technology</span>
              <br />
              that is{" "}
              <span className="text-gradient-secondary">Secure, Unique,</span>
              <br />
              and <span className="text-gradient-accent">Limitless</span>
            </h1>
          </AnimatedElement>

          {/* Subheading */}
          <AnimatedElement animation="fade-in-up" delay={0.2} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            <p>
              Transform your business with cutting-edge digital solutions. We
              are the architects of transformation, building tomorrow's
              technology today.
            </p>
          </AnimatedElement>

          {/* CTA Buttons */}
          <AnimatedElement animation="fade-in-up" delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/get-started" 
                className="btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                aria-label="Get started with our services"
              >
                Get Started
                <HiArrowRight className="inline-block ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
              <Link 
                to="/products" 
                className="btn-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                aria-label="Explore our products"
              >
                Explore Our Products
              </Link>
              <Link 
                to="/portfolio" 
                className="btn-outline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                aria-label="View our portfolio"
              >
                View Our Work
              </Link>
            </div>
          </AnimatedElement>

          {/* Stats */}
          <AnimatedElement animation="fade-in-up" delay={0.4} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: "50+", label: "Products & Solutions" },
              { number: "7", label: "SaaS Products" },
              { number: "10K+", label: "Product Users" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <AnimatedElement key={index} animation="fade-in-up" delay={0.5 + index * 0.1} className="text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </AnimatedElement>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-label="Scroll down">
        <HiChevronDown className="w-8 h-8 text-gray-400" aria-hidden="true" />
      </div>
    </section>
  );
};

export default HeroSection;
