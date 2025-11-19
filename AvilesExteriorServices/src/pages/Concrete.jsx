import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import heroImage from '../assets/Gallery/concretepath1.jpg';
import './Service1.css';

const Concrete = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Concrete Services",
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
    "description": "Professional concrete installation and repair services in Douglasville, Villa Rica, Hiram, and Lithia Springs GA. Concrete pathways, driveways, patios, and more."
  };

  return (
    <>
      <SEO 
        title="Concrete Services Douglasville GA | Villa Rica, Hiram, Lithia Springs | Aviles Exterior Services"
        description="Professional concrete installation services in Douglasville, Villa Rica, Hiram & Lithia Springs GA. Expert concrete pathways, driveways, patios & more. Free quotes! Call (470) 526-3353."
        keywords="concrete services Douglasville GA, concrete pathways Villa Rica, concrete driveways Hiram, concrete patios Lithia Springs, concrete installation Douglas County GA, professional concrete Douglasville"
        canonical="https://www.avilesexteriorservices.com/services/concrete"
        structuredData={structuredData}
      />
      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-content">
              <h1 className="service-hero-title">Professional Concrete Services in Douglasville, Villa Rica, Hiram & Lithia Springs GA</h1>
              <p className="service-hero-subtitle">
                Expert concrete installation and design services designed to transform your outdoor spaces. 
                Serving Douglas County GA with quality craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="service-details">
          <div className="container">
            <div className="service-content">
              <div className="service-info">
                <h2>Professional Concrete Installation in Douglasville & Surrounding Areas</h2>
                <p>
                  Our comprehensive concrete services provide durable, beautiful solutions for your outdoor spaces throughout Douglas County GA. 
                  We combine years of experience with modern techniques to deliver exceptional results for homeowners in Douglasville, 
                  Villa Rica, Hiram, and Lithia Springs. From decorative pathways to functional driveways, we create concrete features 
                  that enhance both the beauty and value of your property.
                </p>
                
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Pathways & Walkways</h4>
                      <p>Beautiful concrete pathways and walkways to guide guests through your landscape</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Driveways</h4>
                      <p>Durable concrete driveways that withstand heavy use and weather conditions</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Patios & Decks</h4>
                      <p>Expansive concrete patios perfect for outdoor entertaining and relaxation</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Decorative Finishes</h4>
                      <p>Custom texturing, stamping, and coloring options for unique designs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="service-image">
                <img src={heroImage} alt="Beautiful concrete pathway installation" className="service-image-img" />
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
                  <h3>Design Consultation</h3>
                  <p>We meet with you to understand your vision and assess your property's specific needs.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>Site Preparation</h3>
                  <p>Our team prepares the site, ensuring proper grading and foundation for lasting results.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>Professional Installation</h3>
                  <p>We pour and finish the concrete with precision, creating smooth, durable surfaces.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <h3>Final Inspection</h3>
                  <p>Thorough quality checks and final handover of your completed concrete project.</p>
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
              Aviles Exterior Services provides professional concrete services throughout Douglas County, Georgia, including:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px'}}>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Douglasville</h3>
                <p>Professional concrete installation and repair services in Douglasville GA</p>
              </div>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Villa Rica</h3>
                <p>Expert concrete pathways and driveways in Villa Rica, Georgia</p>
              </div>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Hiram</h3>
                <p>Quality concrete patios and installations in Hiram GA</p>
              </div>
              <div style={{textAlign: 'center', padding: '20px'}}>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Lithia Springs</h3>
                <p>Comprehensive concrete services in Lithia Springs, Georgia</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Install Concrete Features in Douglasville, Villa Rica, Hiram, or Lithia Springs?</h2>
              <p>Contact Aviles Exterior Services today to discuss your concrete project needs in Douglas County GA and receive a detailed, free quote.</p>
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

export default Concrete;

