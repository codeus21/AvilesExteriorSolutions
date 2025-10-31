import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/logos/aviles-exterior-services-high-resolution-logo-transparent.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const servicesDropdownRef = useRef(null);
  const mobileServicesDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return location.pathname.startsWith('/services');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close desktop services dropdown
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        isServicesOpen
      ) {
        setIsServicesOpen(false);
      }

      // Close mobile services dropdown
      if (
        mobileServicesDropdownRef.current &&
        !mobileServicesDropdownRef.current.contains(event.target) &&
        isMobileServicesOpen
      ) {
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen, isMobileServicesOpen]);

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu} aria-label="Aviles Exterior Services - Home">
          <img src={logo} alt="Aviles Exterior Services - Professional Lawn Care and Landscaping in Douglasville, Villa Rica, Hiram, and Lithia Springs GA" className="nav-logo-img" />
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
          <div className="nav-dropdown" ref={servicesDropdownRef}>
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
                to="/services/lawn-care" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Lawn Care
              </Link>
              <Link 
                to="/services/landscaping" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Landscaping
              </Link>
              <Link 
                to="/services/trimming" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Bush & Hedge Trimming
              </Link>
              <Link 
                to="/services/tree-trimming" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Tree Trimming
              </Link>
              <Link 
                to="/services/house-washing" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                House Washing
              </Link>
              <Link 
                to="/services/land-clearing" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Land Clearing
              </Link>
              <Link 
                to="/services/yard-maintenance" 
                className="dropdown-link"
                onClick={closeMenu}
              >
                Yard Maintenance
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
          
          {/* Mobile Services Dropdown */}
          <div className="mobile-services-dropdown" ref={mobileServicesDropdownRef}>
            <button 
              className={`mobile-nav-link mobile-dropdown-toggle ${isServicesActive() ? 'active' : ''}`}
              onClick={toggleMobileServices}
            >
              Services
              <span className={`mobile-dropdown-arrow ${isMobileServicesOpen ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`mobile-dropdown-menu ${isMobileServicesOpen ? 'open' : ''}`}>
              <Link 
                to="/services" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                All Services
              </Link>
              <Link 
                to="/services/lawn-care" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                Lawn Care
              </Link>
              <Link 
                to="/services/landscaping" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                Landscaping
              </Link>
              <Link 
                to="/services/trimming" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                Bush & Hedge Trimming
              </Link>
              <Link 
                to="/services/tree-trimming" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                Tree Trimming
              </Link>
              <Link 
                to="/services/house-washing" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                House Washing
              </Link>
              <Link 
                to="/services/land-clearing" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                Land Clearing
              </Link>
              <Link 
                to="/services/yard-maintenance" 
                className="mobile-dropdown-link"
                onClick={closeMenu}
              >
                Yard Maintenance
              </Link>
            </div>
          </div>
          
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
