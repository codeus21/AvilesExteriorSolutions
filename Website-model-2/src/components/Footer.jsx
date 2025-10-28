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
            <div className="logo-icon">🏗️</div>
            <span className="logo-text">BuildCorp</span>
          </div>
          <p className="footer-description">
            Professional construction services with over 20 years of experience. 
            Building dreams and constructing reality for our valued clients.
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
            <li><a href="#" className="footer-link">Residential Construction</a></li>
            <li><a href="#" className="footer-link">Commercial Construction</a></li>
            <li><a href="#" className="footer-link">Renovation & Remodeling</a></li>
            <li><a href="#" className="footer-link">Design & Planning</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text">
                123 Construction Way<br />
                Building City, BC 12345
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-text">(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-text">info@buildcorp.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <span className="contact-text">
                Mon-Fri: 7AM-6PM<br />
                Sat: 8AM-4PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>&copy; {currentYear} BuildCorp Construction. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
