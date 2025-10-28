import React from 'react';
import { Link } from 'react-router-dom';
import './Service2.css';

const Service2 = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Service 2</h1>
            <p className="service-hero-subtitle">
              Expert solutions for complex projects with attention to detail and commitment 
              to quality craftsmanship that exceeds industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🏢</div>
                <p>Service 2 Image</p>
              </div>
            </div>
            
            <div className="service-info">
              <h2>What We Offer</h2>
              <p>
                Our Service 2 specializes in delivering innovative solutions for challenging projects. 
                We leverage cutting-edge technology and proven methodologies to ensure success.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Advanced Technology</h4>
                    <p>State-of-the-art tools and equipment for precision work</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Custom Solutions</h4>
                    <p>Tailored approaches for unique project requirements</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Project Management</h4>
                    <p>Comprehensive oversight from start to finish</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Quality Assurance</h4>
                    <p>Rigorous quality control and testing procedures</p>
                  </div>
                </div>
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
                <h3>Project Assessment</h3>
                <p>Comprehensive evaluation of project scope and requirements.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Solution Design</h3>
                <p>Custom solution development based on specific needs.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Implementation</h3>
                <p>Careful execution with continuous monitoring and adjustments.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Quality Review</h3>
                <p>Thorough testing and validation of completed work.</p>
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
            <p>Contact us today to discuss your Service 2 project and receive a detailed quote.</p>
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

export default Service2;
