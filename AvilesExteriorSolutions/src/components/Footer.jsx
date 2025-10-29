import React from 'react';
import './Footer.css';
import facebookLogo from '../assets/logos/facebookLogoBlack.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">Aviles Exterior Services</span>
          </div>
          <p className="footer-description">
            Professional exterior services with over 5 years of experience. 
            Transforming outdoor spaces and maintaining beautiful landscapes for our valued clients.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/projects" className="footer-link">Projects</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><a href="/services/lawn-care" className="footer-link">Lawn Care</a></li>
            <li><a href="/services/landscaping" className="footer-link">Landscaping</a></li>
            <li><a href="/services/trimming" className="footer-link">Bush & Hedge Trimming</a></li>
            <li><a href="/services/house-washing" className="footer-link">House Washing</a></li>
            <li><a href="/services/yard-maintenance" className="footer-link">Yard Maintenance</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text">
                Serving Douglasville, GA<br />
                and surrounding areas
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:4705263353" className="contact-text" style={{textDecoration: 'none', color: 'inherit'}}>(470) 526-3353</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:contact@avileswebsolutions.com" className="contact-text" style={{textDecoration: 'none', color: 'inherit'}}>contact@avileswebsolutions.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <span className="contact-text">
                Monday - Friday: 7AM-7PM<br />
                Saturday: Closed<br />
                Sunday: Closed
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} Aviles Exterior Services. All rights reserved. |{' '}
              <a 
                href="https://avileswebsolutions.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="designer-link"
              >
                Designed by Aviles Web Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
