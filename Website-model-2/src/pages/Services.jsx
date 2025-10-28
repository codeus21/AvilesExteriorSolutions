import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              Comprehensive construction solutions tailored to meet your specific needs. 
              From residential to commercial projects, we deliver excellence in every build.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Service 1</h3>
              <p>Professional construction services designed to meet your specific requirements and exceed your expectations.</p>
              <Link to="/services/service-1" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Service 2</h3>
              <p>Expert solutions for complex projects with attention to detail and commitment to quality craftsmanship.</p>
              <Link to="/services/service-2" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Service 3</h3>
              <p>Innovative approaches to construction challenges, delivering results that stand the test of time.</p>
              <Link to="/services/service-3" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We begin with a detailed consultation to understand your vision and requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Our team creates comprehensive plans and timelines for your project.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>We execute the project with precision, maintaining quality and meeting deadlines.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Final inspection and handover of your completed project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discuss Your Project?</h2>
            <p>Contact us today for a free consultation and detailed quote for your construction needs.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
