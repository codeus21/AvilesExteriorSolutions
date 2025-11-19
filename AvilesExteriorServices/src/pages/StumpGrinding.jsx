import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Service1.css';

const StumpGrinding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Stump Grinding",
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
    "description": "Professional stump grinding services in Douglasville, Villa Rica, Hiram, and Lithia Springs GA. Safe, efficient stump removal for a clean, usable yard."
  };

  return (
    <>
      <SEO 
        title="Stump Grinding Services Douglasville GA | Villa Rica, Hiram, Lithia Springs | Aviles Exterior Services"
        description="Professional stump grinding services in Douglasville, Villa Rica, Hiram & Lithia Springs GA. Expert stump removal for clean, usable yards. Free quotes! Call (470) 526-3353."
        keywords="stump grinding Douglasville GA, stump removal Villa Rica, stump grinding Hiram, stump grinding Lithia Springs, stump removal Douglas County GA, professional stump grinding Douglasville"
        canonical="https://www.avilesexteriorservices.com/services/stump-grinding"
        structuredData={structuredData}
      />
      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-content">
              <h1 className="service-hero-title">Professional Stump Grinding Services in Douglasville, Villa Rica, Hiram & Lithia Springs GA</h1>
              <p className="service-hero-subtitle">
                Expert stump removal services designed to eliminate unsightly tree stumps and restore your yard's beauty. 
                Serving Douglas County GA with professional equipment and safe, efficient techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="service-details">
          <div className="container">
            <div className="service-content">
              <div className="service-info">
                <h2>Professional Stump Grinding in Douglasville & Surrounding Areas</h2>
                <p>
                  Our comprehensive stump grinding services provide safe, efficient solutions for removing tree stumps from your property throughout Douglas County GA. 
                  We combine years of experience with professional-grade equipment to deliver exceptional results for homeowners in Douglasville, 
                  Villa Rica, Hiram, and Lithia Springs. Whether you need a single stump removed or multiple stumps cleared, we'll restore your yard 
                  to a clean, usable space that enhances your property's appearance and value.
                </p>
                
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Complete Stump Removal</h4>
                      <p>Thorough grinding down to below ground level for complete stump elimination</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Safe & Efficient</h4>
                      <p>Professional equipment and techniques to safely remove stumps without damage to surrounding areas</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Debris Cleanup</h4>
                      <p>Complete cleanup of wood chips and debris, leaving your yard ready for landscaping</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>All Stump Sizes</h4>
                      <p>We handle stumps of all sizes, from small ornamental trees to large hardwood stumps</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="service-image">
                <div className="service-placeholder">
                  <div className="service-icon">🪓</div>
                  <p>Stump Grinding Service</p>
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
                  <h3>Site Assessment</h3>
                  <p>We evaluate the stump location, size, and surrounding area to determine the best approach.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>Safety Preparation</h3>
                  <p>Our team clears the area and ensures safety measures are in place before grinding begins.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>Professional Grinding</h3>
                  <p>We use professional-grade stump grinders to efficiently remove the stump below ground level.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <h3>Cleanup & Restoration</h3>
                  <p>Complete removal of wood chips and debris, leaving your yard clean and ready for new landscaping.</p>
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
              Aviles Exterior Services provides professional stump grinding services throughout Douglas County, Georgia, including:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px'}}>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Douglasville</h3>
                <p>Professional stump grinding and removal services in Douglasville GA</p>
              </div>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Villa Rica</h3>
                <p>Expert stump grinding services in Villa Rica, Georgia</p>
              </div>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Hiram</h3>
                <p>Quality stump removal and grinding in Hiram GA</p>
              </div>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Lithia Springs</h3>
                <p>Comprehensive stump grinding services in Lithia Springs, Georgia</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Remove Stumps in Douglasville, Villa Rica, Hiram, or Lithia Springs?</h2>
              <p>Contact Aviles Exterior Services today to discuss your stump grinding needs in Douglas County GA and receive a detailed, free quote.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">Get Free Quote</Link>
                <Link to="/services" className="btn btn-outline btn-large">View All Services</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StumpGrinding;

