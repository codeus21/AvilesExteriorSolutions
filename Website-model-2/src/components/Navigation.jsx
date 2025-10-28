import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return location.pathname.startsWith('/services');
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="logo-icon">🏗️</div>
          <span className="logo-text">Premier Construction Co.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <button 
              className={`nav-link nav-dropdown-toggle ${isServicesActive() ? 'active' : ''}`}
              onClick={toggleServices}
            >
              Services
              <span className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`nav-dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
              <Link 
                to="/services" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                All Services
              </Link>
              <Link 
                to="/services/service-1" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Service 1
              </Link>
              <Link 
                to="/services/service-2" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Service 2
              </Link>
              <Link 
                to="/services/service-3" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Service 3
              </Link>
            </div>
          </div>
          
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link 
            to="/" 
            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          
          {/* Mobile Services Links */}
          <Link 
            to="/services" 
            className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/services/service-1" 
            className={`mobile-nav-link mobile-sub-link ${isActive('/services/service-1') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Service 1
          </Link>
          <Link 
            to="/services/service-2" 
            className={`mobile-nav-link mobile-sub-link ${isActive('/services/service-2') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Service 2
          </Link>
          <Link 
            to="/services/service-3" 
            className={`mobile-nav-link mobile-sub-link ${isActive('/services/service-3') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Service 3
          </Link>
          
          <Link 
            to="/projects" 
            className={`mobile-nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <div className="mobile-cta">
            <Link to="/contact" className="btn btn-primary btn-full" onClick={closeMenu}>
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
