import React from 'react';
import { Link } from 'react-router-dom';
import './Service1.css';

const Service3 = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Service 3</h1>
            <p className="service-hero-subtitle">
              Innovative approaches to construction challenges, delivering results that stand 
              the test of time with sustainable and efficient solutions.
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
                Our Service 3 focuses on innovative construction methods and sustainable practices. 
                We combine traditional craftsmanship with modern innovation to create lasting solutions.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Sustainable Practices</h4>
                    <p>Environmentally conscious construction methods and materials</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Innovation Focus</h4>
                    <p>Cutting-edge techniques and modern construction approaches</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Long-term Value</h4>
                    <p>Durable solutions designed for longevity and performance</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Efficiency Optimization</h4>
                    <p>Streamlined processes for faster completion without compromising quality</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🔧</div>
                <p>Service 3 Image</p>
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
                <h3>Innovation Planning</h3>
                <p>Research and development of innovative solutions for your project.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Sustainable Design</h3>
                <p>Eco-friendly design and material selection for optimal sustainability.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Efficient Execution</h3>
                <p>Streamlined implementation using optimized processes and techniques.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Performance Validation</h3>
                <p>Comprehensive testing to ensure long-term performance and durability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your Service 3 project and receive a detailed quote.</p>
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

export default Service3;
