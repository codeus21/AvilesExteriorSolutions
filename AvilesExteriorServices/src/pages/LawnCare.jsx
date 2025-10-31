import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Service1.css';

const LawnCare = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Lawn Care",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aviles Exterior Services",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Douglasville",
        "addressRegion": "GA",
        "postalCode": "30135"
      },
      "telephone": "+14705263353"
    },
    "areaServed": ["Douglasville", "Villa Rica", "Hiram", "Lithia Springs"],
    "description": "Professional lawn care services in Douglasville, Villa Rica, Hiram, and Lithia Springs GA. Lawn mowing, fertilizing, weed control, and seasonal maintenance."
  };

  return (
    <>
      <SEO 
        title="Lawn Care Services Douglasville GA | Villa Rica, Hiram, Lithia Springs | Aviles Exterior Services"
        description="Professional lawn care services in Douglasville, Villa Rica, Hiram & Lithia Springs GA. Expert lawn mowing, fertilizing, weed control & seasonal maintenance. Free quotes! Call (470) 526-3353."
        keywords="lawn care Douglasville GA, lawn mowing Villa Rica, lawn maintenance Hiram, lawn service Lithia Springs, lawn care Douglas County GA, professional lawn care Douglasville"
        canonical="https://avilesexteriorservices.com/services/lawn-care"
        structuredData={structuredData}
      />
      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-content">
              <h1 className="service-hero-title">Professional Lawn Care Services in Douglasville, Villa Rica, Hiram & Lithia Springs GA</h1>
              <p className="service-hero-subtitle">
              Expert lawn maintenance designed to keep your grass healthy, 
              green, and beautiful year-round. Serving Douglas County GA with professional care and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="service-content">
            <div className="service-info">
              <h2>Professional Lawn Care in Douglasville & Surrounding Areas</h2>
              <p>
                Our comprehensive lawn care services provide everything your grass needs to thrive throughout Douglas County GA. 
                We combine years of experience with modern techniques to deliver exceptional results for homeowners in Douglasville, 
                Villa Rica, Hiram, and Lithia Springs. Our team understands the unique climate and soil conditions in Georgia, 
                ensuring your lawn receives the proper care it needs.
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

      {/* Service Areas Section */}
      <section className="service-areas" style={{padding: '60px 0', backgroundColor: '#f5f5f5'}}>
        <div className="container">
          <h2 className="section-title">Serving Douglas County Georgia</h2>
          <p style={{textAlign: 'center', marginBottom: '30px', fontSize: '18px'}}>
            Aviles Exterior Services provides professional lawn care services throughout Douglas County, Georgia, including:
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px'}}>
            <div style={{textAlign: 'center', padding: '20px'}}>
              <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Douglasville</h3>
              <p>Professional lawn care and maintenance services in Douglasville GA</p>
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
              <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Villa Rica</h3>
              <p>Expert lawn mowing and fertilization in Villa Rica, Georgia</p>
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
              <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Hiram</h3>
              <p>Quality lawn maintenance and care in Hiram GA</p>
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
              <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Lithia Springs</h3>
              <p>Comprehensive lawn care services in Lithia Springs, Georgia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Lawn in Douglasville, Villa Rica, Hiram, or Lithia Springs?</h2>
            <p>Contact Aviles Exterior Services today to discuss your lawn care needs in Douglas County GA and receive a detailed, free quote.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Free Quote - (470) 526-3353</Link>
              <Link to="/services" className="btn btn-outline btn-large">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default LawnCare;
