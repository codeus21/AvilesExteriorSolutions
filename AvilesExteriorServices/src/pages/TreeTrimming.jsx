import React from 'react';
import { Link } from 'react-router-dom';
import './Service1.css';

const TreeTrimming = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Tree Trimming & Pruning</h1>
            <p className="service-hero-subtitle">
              Safe, professional tree trimming to enhance tree health, appearance, and safety around your property.
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
                Our certified team trims and prunes trees using industry best practices to promote healthy growth,
                reduce hazards, and maintain a clean, polished look throughout your landscape.
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Deadwood Removal</h4>
                    <p>Eliminating diseased or broken branches to improve safety and tree health.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Canopy Thinning</h4>
                    <p>Selective pruning to increase light penetration and reduce wind resistance.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Shaping & Clearance</h4>
                    <p>Maintaining clearance from structures, driveways, and utility lines where appropriate.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Storm Prep & Cleanup</h4>
                    <p>Reducing risk before storms and cleaning up damaged limbs after severe weather.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🌲</div>
                <p>Professional Tree Care</p>
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
                <h3>On-Site Assessment</h3>
                <p>We evaluate tree species, structure, and risk to determine the best approach.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Pruning Plan</h3>
                <p>A tailored plan that prioritizes tree health, appearance, and safety.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Professional Trimming</h3>
                <p>Expert cuts using proper techniques and equipment to protect the tree.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Cleanup & Disposal</h3>
                <p>Thorough site cleanup with responsible debris hauling and disposal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Tree Trimming?</h2>
            <p>Get a safe, professional trim that protects your property and trees.</p>
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

export default TreeTrimming;


