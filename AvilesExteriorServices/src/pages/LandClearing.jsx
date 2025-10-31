import React from 'react';
import { Link } from 'react-router-dom';
import './Service1.css';

const LandClearing = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Land Clearing</h1>
            <p className="service-hero-subtitle">
              Efficient, responsible land clearing for residential lots, overgrowth removal, and site preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="service-content">
            <div className="service-info">
              <h2>What We Offer</h2>
              <p>
                We remove brush, saplings, unwanted trees, and debris to restore access and usability. Our team
                works efficiently with safety top of mind and proper disposal of materials.
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Brush & Overgrowth Removal</h4>
                    <p>Clearing dense areas to reclaim space and improve visibility.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Small Tree Removal</h4>
                    <p>Removal of smaller trees and saplings to open up your property.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Debris Hauling</h4>
                    <p>Responsible hauling and disposal of green waste and materials.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Site Preparation</h4>
                    <p>Rough grading and cleanup to get areas ready for next steps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🚜</div>
                <p>Efficient Land Clearing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Assessment & Scope</h3>
                <p>We walk the site with you to understand goals, access, and constraints.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Clearance Plan</h3>
                <p>We create a plan for clearing, hauling, and site protection measures.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Clearing & Removal</h3>
                <p>Efficient removal of brush and unwanted vegetation with minimal disruption.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Cleanup & Haul-Off</h3>
                <p>Thorough cleanup and hauling to leave the area neat and usable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Clear Your Land?</h2>
            <p>Tell us about your lot or overgrowth—we'll provide a fast, fair quote.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Quote</Link>
              <Link to="/services" className="btn btn-outline btn-large">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandClearing;


