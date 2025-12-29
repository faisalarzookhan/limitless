import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate, Routes, Route, Navigate, useMatch } from 'react-router-dom';
import { SUBDOMAIN_CONFIG, SubdomainHelper } from '../config/subdomainConfig';
import PropTypes from 'prop-types';

/**
 * Subdomain Router Component
 * Handles routing and navigation between different subdomains
 * as per the "Sub-domain Authority Architecture" requirements
 */
const SubdomainRouter = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentSubdomain, setCurrentSubdomain] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Check if running in browser environment before accessing window
      if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
        // Determine current subdomain based on URL
        const subdomain = SubdomainHelper.getCurrentSubdomain();
        setCurrentSubdomain(subdomain);
      } else {
        // Not in browser environment, continue with null subdomain
        setCurrentSubdomain(null);
      }
    } catch (error) {
      console.error('Error detecting subdomain:', error);
      // Continue with null subdomain if there's an error
      setCurrentSubdomain(null);
    } finally {
      setIsLoading(false);
    }
  }, []); // Only run once on mount

  // Apply subdomain-specific styling
  useEffect(() => {
    if (currentSubdomain) {
      document.documentElement.setAttribute('data-subdomain', currentSubdomain);
      
      // Apply subdomain-specific theme colors
      const branding = SUBDOMAIN_CONFIG.branding[currentSubdomain];
      if (branding) {
        document.documentElement.style.setProperty('--primary-color', branding.primaryColor);
        document.documentElement.style.setProperty('--secondary-color', branding.secondaryColor);
      }
    } else {
      document.documentElement.removeAttribute('data-subdomain');
      document.documentElement.style.removeProperty('--primary-color');
      document.documentElement.style.removeProperty('--secondary-color');
    }
  }, [currentSubdomain]);

  // Get subdomain configuration
  const getSubdomainConfig = () => {
    if (currentSubdomain && SUBDOMAIN_CONFIG.subdomains[currentSubdomain]) {
      return SUBDOMAIN_CONFIG.subdomains[currentSubdomain];
    }
    return null;
  };

  // Render subdomain-specific content
  if (isLoading) {
    return (
      <div className="subdomain-router-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className={`subdomain-router ${currentSubdomain ? `subdomain-${currentSubdomain}` : 'main-domain'}`}
      data-subdomain={currentSubdomain}
    >
      {/* Subdomain-specific header */}
      {currentSubdomain && (
        <SubdomainHeader
          currentSubdomain={currentSubdomain}
          config={getSubdomainConfig()}
        />
      )}

      {/* Main content */}
      <main className="subdomain-main-content">{children}</main>

      {/* Subdomain-specific footer */}
      {currentSubdomain && (
        <SubdomainFooter
          currentSubdomain={currentSubdomain}
          config={getSubdomainConfig()}
        />
      )}
    </div>
  );
};

/**
 * Subdomain Header Component
 * Displays header with subdomain-specific branding and navigation
 */
const SubdomainHeader = ({ currentSubdomain, config }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!config) return null;

  // Get all available subdomains for navigation
  const availableSubdomains = SubdomainHelper.getAvailableSubdomains();

  const handleSubdomainChange = subdomain => {
    const newUrl = SubdomainHelper.getSubdomainUrl(subdomain);
    if (newUrl) {
      window.location.assign(newUrl);
    }
  };

  return (
    <header className={`subdomain-header subdomain-${currentSubdomain}-header`}>
      <div className="subdomain-header-container">
        {/* Logo with subdomain-specific branding */}
        <div className="subdomain-logo">
          <button
            className="logo-button"
            onClick={() => navigate('/')}
            style={{
              color:
                SUBDOMAIN_CONFIG.branding[currentSubdomain]?.primaryColor ||
                '#1e3a8a',
            }}
          >
            <h1>
              {currentSubdomain.charAt(0).toUpperCase() +
                currentSubdomain.slice(1)}
              <span
                className="logo-accent"
                style={{
                  color:
                    SUBDOMAIN_CONFIG.branding[currentSubdomain]
                      ?.secondaryColor || '#d4af37',
                }}
              >
                .limitlessinfotech.com
              </span>
            </h1>
          </button>
        </div>

        {/* Navigation menu */}
        <nav className="subdomain-navigation">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'menu-open' : ''}`}>
            {config.routes.slice(0, 5).map((route, index) => (
              <li key={index} className="nav-item">
                <a
                  href={SubdomainHelper.getSubdomainUrl(currentSubdomain, route)}
                  className="nav-link"
                  style={{
                    color:
                      SUBDOMAIN_CONFIG.branding[currentSubdomain]
                        ?.primaryColor || '#1e3a8a',
                  }}
                >
                  {route.split('/').pop() || 'Home'}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Subdomain switcher */}
        <div className="subdomain-switcher">
          <select
            value={currentSubdomain}
            onChange={e => handleSubdomainChange(e.target.value)}
            className="subdomain-selector"
            style={{
              backgroundColor:
                SUBDOMAIN_CONFIG.branding[currentSubdomain]?.primaryColor ||
                '#1e3a8a',
              color: 'white',
            }}
          >
            {availableSubdomains.map(subdomain => (
              <option key={subdomain} value={subdomain}>
                {subdomain.charAt(0).toUpperCase() + subdomain.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

/**
 * Subdomain Footer Component
 * Displays footer with subdomain-specific information
 */
const SubdomainFooter = ({ currentSubdomain, config }) => {
  if (!config) return null;

  return (
    <footer className={`subdomain-footer subdomain-${currentSubdomain}-footer`}>
      <div className="subdomain-footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{config.title}</h3>
            <p>{config.description}</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {config.routes.slice(0, 4).map((route, index) => (
                <li key={index}>
                  <a href={SubdomainHelper.getSubdomainUrl(currentSubdomain, route)}>{route.split('/').pop() || 'Home'}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>For {currentSubdomain} inquiries:</p>
            <a href={`mailto:${currentSubdomain}@limitlessinfotech.com`}>
              {currentSubdomain}@limitlessinfotech.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {config.title}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/**
 * Subdomain Link Component
 * Handles navigation between subdomains
 */
const SubdomainLink = ({
  to,
  subdomain = null,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const currentSubdomain = SubdomainHelper.getCurrentSubdomain();
  const targetSubdomain =
    subdomain || SubdomainHelper.getSubdomainByPath(to) || currentSubdomain;

  const handleClick = e => {
    e.preventDefault();

    if (targetSubdomain === currentSubdomain) {
      // Same subdomain, use normal navigation
      if (onClick) onClick(e);
      return;
    }

    // Different subdomain, redirect to new subdomain
    const url = SubdomainHelper.getSubdomainUrl(targetSubdomain, to);
    if (url) {
      // Use window.location.assign to properly redirect to different subdomain
      window.location.assign(url);
    }
  };

  return (
    <a
      href={SubdomainHelper.getSubdomainUrl(targetSubdomain, to) || to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

/**
 * Subdomain Redirect Component
 * Handles redirects between subdomains
 */
const SubdomainRedirect = ({ to, subdomain }) => {
  useEffect(() => {
    const url = SubdomainHelper.getSubdomainUrl(subdomain, to);
    if (url) {
      // Use window.location.assign for proper subdomain redirect
      window.location.assign(url);
    }
  }, [to, subdomain]);

  return (
    <div className="subdomain-redirect">
      <p>Redirecting...</p>
    </div>
  );
};

SubdomainRouter.propTypes = {
  /** Children components to render within the subdomain router */
  children: PropTypes.node.isRequired,
};

SubdomainHeader.propTypes = {
  /** Current subdomain identifier */
  currentSubdomain: PropTypes.string.isRequired,
  /** Configuration for the current subdomain */
  config: PropTypes.object,
};

SubdomainFooter.propTypes = {
  /** Current subdomain identifier */
  currentSubdomain: PropTypes.string.isRequired,
  /** Configuration for the current subdomain */
  config: PropTypes.object,
};

SubdomainLink.propTypes = {
  /** Target path */
  to: PropTypes.string.isRequired,
  /** Target subdomain (optional, auto-detected if not provided) */
  subdomain: PropTypes.string,
  /** Link content */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Click handler */
  onClick: PropTypes.func,
};

SubdomainRedirect.propTypes = {
  /** Target path */
  to: PropTypes.string.isRequired,
  /** Target subdomain */
  subdomain: PropTypes.string.isRequired,
};

export { SubdomainRouter, SubdomainLink, SubdomainRedirect, SubdomainHelper };
export default SubdomainRouter;
