import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Services.css';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Exterior Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lawn Care"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Landscaping"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "House Washing"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Yard Maintenance"}}
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Exterior Services in Douglasville GA | Lawn Care, Landscaping, House Washing | Villa Rica, Hiram, Lithia Springs"
        description="Professional exterior services in Douglasville, Villa Rica, Hiram & Lithia Springs GA. Lawn care, landscaping, house washing, tree trimming & yard maintenance. Free quotes! Call (470) 526-3353."
        keywords="exterior services Douglasville, lawn care Villa Rica, landscaping Hiram, house washing Lithia Springs, yard maintenance Douglas County GA"
        canonical="https://avilesexterior.com/services"
        structuredData={structuredData}
      />
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-content">
              <h1 className="services-hero-title">Professional Exterior Services in Douglasville, Villa Rica, Hiram & Lithia Springs GA</h1>
              <p className="services-hero-subtitle">
              Comprehensive exterior solutions tailored to transform your outdoor space throughout Douglas County, Georgia. 
              From lawn care to landscaping, we deliver excellence in every project.
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
              <div className="service-icon">🌱</div>
              <h3>Lawn Care</h3>
              <p>Professional lawn maintenance including mowing, fertilizing, weed control, and seasonal care to keep your grass healthy and beautiful year-round.</p>
              <Link to="/services/lawn-care" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🌳</div>
              <h3>Landscaping</h3>
              <p>Complete landscape design and installation services including plants, trees, flower beds, and outdoor features to create your dream outdoor space.</p>
              <Link to="/services/landscaping" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3>Bush & Hedge Trimming</h3>
              <p>Expert pruning and trimming services to maintain the shape, health, and beauty of your shrubs, bushes, and hedges throughout the seasons.</p>
              <Link to="/services/trimming" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🌲</div>
              <h3>Tree Trimming</h3>
              <p>Safe, professional tree pruning to remove deadwood, shape canopies, and improve safety and health.</p>
              <Link to="/services/tree-trimming" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>House Washing</h3>
              <p>Professional exterior cleaning services to keep your home's siding, windows, gutters, and outdoor surfaces spotless and well-maintained.</p>
              <Link to="/services/house-washing" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🚜</div>
              <h3>Land Clearing</h3>
              <p>Brush and overgrowth removal, small tree removal, and debris haul-off to reclaim your property.</p>
              <Link to="/services/land-clearing" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Yard Maintenance</h3>
              <p>Comprehensive yard care including cleanup, mulching, seasonal preparation, and ongoing maintenance to keep your outdoor space pristine.</p>
              <Link to="/services/yard-maintenance" className="btn btn-outline">Learn More</Link>
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
              <h3>Site Assessment</h3>
              <p>We begin with a detailed assessment of your outdoor space to understand your needs and vision.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Custom Plan</h3>
              <p>Our team creates a customized plan tailored to your specific exterior service requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Professional Service</h3>
              <p>We execute the work with precision, using professional equipment and maintaining the highest quality standards.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Ongoing Care</h3>
              <p>We provide ongoing maintenance and care to keep your outdoor space looking its best year-round.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Outdoor Space in Douglasville, Villa Rica, Hiram, or Lithia Springs?</h2>
            <p>Contact Aviles Exterior Services today for a free consultation and detailed quote for your exterior service needs throughout Douglas County, Georgia.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get Free Quote - (470) 526-3353</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
