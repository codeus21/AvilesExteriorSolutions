import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Transforming outdoor spaces with professional lawn care, landscaping, and exterior maintenance services
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
                areas into stunning, well-maintained spaces that property owners can be proud of.
              </p>
              <p>
                What began as a local lawn care service has grown into a comprehensive exterior solutions 
                company. We specialize in lawn care, landscaping, bush and hedge trimming, house washing, 
                and complete yard maintenance. Our commitment to quality workmanship and exceptional customer 
                service has helped us transform over 100 yards throughout the region.
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
                5+ years of experience in exterior services and yard maintenance. Expert in lawn care, 
                landscaping design, and property transformation. Hands-on owner committed to delivering 
                exceptional service to every customer.
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
    </div>
  );
};

export default About;
