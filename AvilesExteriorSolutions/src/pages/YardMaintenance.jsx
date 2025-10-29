import React from 'react';
import { Link } from 'react-router-dom';
import './Service1.css';

const YardMaintenance = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Yard Maintenance Services</h1>
            <p className="service-hero-subtitle">
              Comprehensive yard care including cleanup, mulching, seasonal preparation, 
              and ongoing maintenance to keep your outdoor space pristine year-round.
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
                Our complete yard maintenance services handle all aspects of outdoor care. 
                We keep your yard looking its best with regular attention and seasonal preparation.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Yard Cleanup</h4>
                    <p>Complete removal of debris, leaves, and unwanted materials</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Mulching</h4>
                    <p>Professional mulching to protect plants and improve soil health</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Seasonal Prep</h4>
                    <p>Spring and fall preparation for optimal yard health</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Ongoing Care</h4>
                    <p>Regular maintenance schedules to keep your yard pristine</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🔧</div>
                <p>Well-Maintained Yard</p>
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
                <h3>Yard Assessment</h3>
                <p>We evaluate your yard's current condition and maintenance needs.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Maintenance Plan</h3>
                <p>We create a customized maintenance schedule based on your yard's requirements.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Regular Service</h3>
                <p>Consistent maintenance visits to keep your yard in perfect condition.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Seasonal Updates</h3>
                <p>Adaptation of services based on seasonal needs and weather conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Maintain Your Yard?</h2>
            <p>Contact us today to discuss your yard maintenance needs and receive a detailed quote.</p>
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

export default YardMaintenance;
