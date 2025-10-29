import React from 'react';
import { Link } from 'react-router-dom';
import './Service1.css';

const Landscaping = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Landscaping Services</h1>
            <p className="service-hero-subtitle">
              Complete landscape design and installation services to transform your outdoor space 
              into a beautiful, functional environment that enhances your property value.
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
                Our comprehensive landscaping services create stunning outdoor environments. 
                From design to installation, we bring your vision to life with quality craftsmanship.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Landscape Design</h4>
                    <p>Custom designs tailored to your space and preferences</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Plant Installation</h4>
                    <p>Professional planting of trees, shrubs, and flowers</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Hardscaping</h4>
                    <p>Patios, walkways, retaining walls, and outdoor features</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Irrigation Systems</h4>
                    <p>Efficient watering systems for healthy plant growth</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🌳</div>
                <p>Beautiful Landscaping</p>
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
                <h3>Site Analysis</h3>
                <p>We assess your property's conditions, soil, and existing features.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Design Creation</h3>
                <p>Custom landscape design plans that match your vision and budget.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Installation</h3>
                <p>Professional installation of all landscape elements and features.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Final Walkthrough</h3>
                <p>Quality inspection and handover of your completed landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Dream Landscape?</h2>
            <p>Contact us today to discuss your landscaping project and receive a detailed quote.</p>
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

export default Landscaping;
