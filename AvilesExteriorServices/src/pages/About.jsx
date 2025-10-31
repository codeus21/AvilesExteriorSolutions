import React from 'react';
import SEO from '../components/SEO';
import './About.css';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aviles Exterior Services",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "name": "David Aviles"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Douglasville",
      "addressRegion": "GA",
      "postalCode": "30135"
    },
    "telephone": "+14705263353",
    "areaServed": ["Douglasville", "Villa Rica", "Hiram", "Lithia Springs"]
  };

  return (
    <>
      <SEO 
        title="About Aviles Exterior Services - Professional Lawn Care & Landscaping in Douglasville GA"
        description="Learn about Aviles Exterior Services - professional lawn care & landscaping company serving Douglasville, Villa Rica, Hiram & Lithia Springs GA. 5+ years experience transforming outdoor spaces."
        keywords="about Aviles Exterior Services, lawn care company Douglasville, landscaping contractor Douglas County GA, exterior services Villa Rica"
        canonical="https://avilesexteriorservices.com/about"
        structuredData={structuredData}
      />
      <div className="about">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="page-title">About Aviles Exterior Services - Douglasville, GA</h1>
            <p className="page-subtitle">
              Transforming outdoor spaces with professional lawn care, landscaping, and exterior maintenance services throughout Douglas County, Georgia
            </p>
          </div>
        </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for creating beautiful outdoor spaces, Aviles Exterior Services 
                has been serving residential and commercial clients for over 5 years. Based in Douglasville, GA, 
                we started as a small family business with a simple mission: to transform yards and outdoor 
                areas into stunning, well-maintained spaces that property owners can be proud of throughout Douglas County, Georgia.
              </p>
              <p>
                What began as a local lawn care service in Douglasville has grown into a comprehensive exterior solutions 
                company serving Villa Rica, Hiram, Lithia Springs, and surrounding areas. We specialize in lawn care, landscaping, 
                bush and hedge trimming, house washing, and complete yard maintenance. Our commitment to quality workmanship 
                and exceptional customer service has helped us transform over 100 yards throughout Douglas County GA. 
                We understand the unique needs of Georgia homeowners and are dedicated to providing top-quality exterior services 
                that enhance the beauty and value of every property we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values">
        <div className="container">
          <div className="mission-values-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To provide exceptional exterior maintenance and landscaping services that enhance the beauty 
                and value of every property we serve. We strive to exceed our clients' expectations while 
                maintaining the highest standards of quality, professionalism, and environmental responsibility.
              </p>
            </div>
            <div className="values-card">
              <h3>Our Values</h3>
              <ul>
                <li><strong>Quality:</strong> We never compromise on the quality of our lawn care and landscaping work</li>
                <li><strong>Reliability:</strong> Consistent, dependable service you can count on season after season</li>
                <li><strong>Attention to Detail:</strong> Every blade of grass, every hedge, every surface matters</li>
                <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority - 100% guarantee</li>
                <li><strong>Professionalism:</strong> Courteous, respectful service from arrival to completion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍💼</div>
              </div>
              <h3>David Aviles</h3>
              <p className="member-role">Owner & Operator</p>
              <p className="member-bio">
                5+ years of experience in exterior services and yard maintenance throughout Douglas County, Georgia. 
                Expert in lawn care, landscaping design, and property transformation. Hands-on owner committed to 
                delivering exceptional service to every customer in Douglasville, Villa Rica, Hiram, and Lithia Springs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications & Licenses</h2>
          <div className="certifications-grid">
            <div className="cert-item">
              <div className="cert-icon">🛡️</div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed and insured for your protection and peace of mind</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🌱</div>
              <h3>Environmentally Responsible</h3>
              <p>Eco-friendly practices and sustainable lawn care methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="service-areas" style={{padding: '60px 0', backgroundColor: '#f5f5f5'}}>
        <div className="container">
          <h2 className="section-title">Proudly Serving Douglas County, Georgia</h2>
          <p style={{textAlign: 'center', marginBottom: '30px', fontSize: '18px', maxWidth: '800px', margin: '0 auto 30px'}}>
            Aviles Exterior Services is proud to serve homeowners and businesses throughout Douglas County, Georgia. 
            Our professional exterior services are available in the following areas:
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '30px'}}>
            <div style={{textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px'}}>
              <h3 style={{fontSize: '28px', marginBottom: '15px', color: '#2c3e50'}}>Douglasville</h3>
              <p style={{fontSize: '16px'}}>Professional lawn care, landscaping, and exterior services in Douglasville, GA</p>
            </div>
            <div style={{textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px'}}>
              <h3 style={{fontSize: '28px', marginBottom: '15px', color: '#2c3e50'}}>Villa Rica</h3>
              <p style={{fontSize: '16px'}}>Expert exterior services and yard maintenance in Villa Rica, Georgia</p>
            </div>
            <div style={{textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px'}}>
              <h3 style={{fontSize: '28px', marginBottom: '15px', color: '#2c3e50'}}>Hiram</h3>
              <p style={{fontSize: '16px'}}>Quality lawn care and landscaping services in Hiram, GA</p>
            </div>
            <div style={{textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px'}}>
              <h3 style={{fontSize: '28px', marginBottom: '15px', color: '#2c3e50'}}>Lithia Springs</h3>
              <p style={{fontSize: '16px'}}>Comprehensive exterior services in Lithia Springs, Georgia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
