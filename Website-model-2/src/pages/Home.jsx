import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="company-name">Premier Construction Co.</h2>
            <h1 className="hero-title">
              Building Dreams, <span className="highlight">Constructing Reality</span>
            </h1>
            <p className="hero-subtitle">
              Professional construction services with over 20 years of experience. 
              From residential homes to commercial buildings, we deliver excellence in every project.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View Our Projects</button>
              <button className="btn btn-secondary">Get Free Quote</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <div className="construction-icon">🏗️</div>
              <p>Construction Site Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Residential Construction</h3>
              <p>Custom homes, renovations, and residential projects tailored to your vision.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Commercial Construction</h3>
              <p>Office buildings, retail spaces, and commercial developments.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Renovation & Remodeling</h3>
              <p>Transform existing spaces with our expert renovation services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3>Design & Planning</h3>
              <p>Architectural design and project planning services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "Premier Construction Co. exceeded our expectations. They delivered our dream home on time and within budget. The quality of work is outstanding!"
              </p>
              <div className="review-author">
                <div className="author-name">Sarah Johnson</div>
                <div className="author-title">Homeowner</div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "Professional, reliable, and skilled team. They transformed our office space completely. Highly recommend their commercial construction services."
              </p>
              <div className="review-author">
                <div className="author-name">Michael Chen</div>
                <div className="author-title">Business Owner</div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "From planning to completion, the entire process was smooth. Their attention to detail and communication throughout the project was exceptional."
              </p>
              <div className="review-author">
                <div className="author-name">Emily Rodriguez</div>
                <div className="author-title">Property Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and quote.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
