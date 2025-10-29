import React from 'react';
import { Link } from 'react-router-dom';
import './Service1.css';

const LawnCare = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Lawn Care Services</h1>
            <p className="service-hero-subtitle">
              Professional lawn maintenance designed to keep your grass healthy, 
              green, and beautiful year-round with expert care and attention to detail.
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
                Our comprehensive lawn care services provide everything your grass needs to thrive. 
                We combine years of experience with modern techniques to deliver exceptional results.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Regular Mowing</h4>
                    <p>Consistent mowing schedule to maintain optimal grass height</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Fertilization</h4>
                    <p>Seasonal fertilization programs for healthy, green grass</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Weed Control</h4>
                    <p>Professional weed prevention and treatment services</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Seasonal Care</h4>
                    <p>Year-round maintenance including aeration and overseeding</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🌱</div>
                <p>Beautiful Lawn Care</p>
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
                <h3>Lawn Assessment</h3>
                <p>We evaluate your lawn's current condition and identify specific needs.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Custom Plan</h3>
                <p>We create a personalized lawn care schedule tailored to your grass type and climate.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Regular Service</h3>
                <p>Consistent maintenance visits to keep your lawn healthy and beautiful.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Ongoing Care</h3>
                <p>Continuous monitoring and adjustments to ensure optimal lawn health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Lawn?</h2>
            <p>Contact us today to discuss your lawn care needs and receive a detailed quote.</p>
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

export default LawnCare;
