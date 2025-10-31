import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import CountUpStat from '../components/CountUpStat';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aviles Exterior Services",
    "description": "Professional lawn care, landscaping, house washing, and yard maintenance services in Douglasville, Villa Rica, Hiram, and Lithia Springs, Georgia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Douglasville",
      "addressRegion": "GA",
      "postalCode": "30135",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7515,
      "longitude": -84.7477
    },
    "url": "https://avilesexteriorservices.com",
    "telephone": "+14705263353",
    "areaServed": ["Douglasville", "Villa Rica", "Hiram", "Lithia Springs"],
    "serviceType": ["Lawn Care", "Landscaping", "House Washing", "Yard Maintenance", "Tree Trimming"]
  };

  return (
    <>
      <SEO 
        title="Aviles Exterior Services - Top Rated Lawn Care & Landscaping in Douglasville, Villa Rica, Hiram, Lithia Springs GA"
        description="#1 Lawn Care & Landscaping Company in Douglasville GA. Serving Villa Rica, Hiram, Lithia Springs. Professional lawn maintenance, landscaping, house washing, tree trimming & yard maintenance. Call (470) 526-3353 for free quote!"
        keywords="lawn care Douglasville GA, landscaping Douglasville, lawn care Villa Rica, landscaping Hiram GA, lawn care Lithia Springs, bush trimming Douglasville, house washing Douglasville GA, yard maintenance Villa Rica"
        canonical="https://avilesexteriorservices.com/"
        structuredData={structuredData}
      />
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <ScrollAnimation className="fade-in-left">
                <h2 className="company-name">Aviles Exterior Services</h2>
              </ScrollAnimation>
              <ScrollAnimation delay={100}>
                <h1 className="hero-title">
                  Transforming Outdoor Spaces in <span className="highlight">Douglasville, Villa Rica, Hiram & Lithia Springs GA</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <p className="hero-subtitle">
                  Professional exterior services in Douglasville, Villa Rica, Hiram, and Lithia Springs, Georgia. <br/> 
                  From lawn care to house washing, we deliver excellence in every outdoor project.
                </p>
              </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">View Our Projects</Link>
                <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
              </div>
            </ScrollAnimation>
          </div>
            <ScrollAnimation className="fade-in-right" delay={400}>
            <div className="hero-image">
              <div className="hero-placeholder">
                <div className="exterior-icon">🌿</div>
                <p>Beautiful Landscaped Yard</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Our Services</h2>
          </ScrollAnimation>
          <div className="services-grid">
            <ScrollAnimation delay={100}>
              <div className="service-card">
                <div className="service-icon">🌱</div>
                <h3>Lawn Care in Douglasville GA</h3>
                <p>Professional lawn maintenance, mowing, fertilizing, and seasonal care to keep your grass healthy and beautiful. Serving Douglasville, Villa Rica, Hiram, and Lithia Springs.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="service-card">
                <div className="service-icon">🌳</div>
                <h3>Landscaping Services</h3>
                <p>Complete landscape design and installation, including plants, trees, flower beds, and outdoor features. Expert landscaping throughout Douglas County GA.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="service-card">
                <div className="service-icon">✂️</div>
                <h3>Bush & Hedge Trimming</h3>
                <p>Expert pruning and trimming services to maintain the shape and health of your shrubs and hedges. Professional trimming in Douglasville and surrounding areas.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>House Washing</h3>
                <p>Professional exterior cleaning services to keep your home's siding, windows, and outdoor surfaces spotless. House washing in Villa Rica, Hiram, Lithia Springs, and Douglasville.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={500}>
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Yard Maintenance</h3>
                <p>Comprehensive yard care including cleanup, mulching, seasonal preparation, and ongoing maintenance. Reliable yard maintenance services in Douglas County Georgia.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <ScrollAnimation delay={100}>
              <div className="stat-item">
                <CountUpStat value="100+" delay={0} />
                <div className="stat-label">Yards Transformed</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="stat-item">
                <CountUpStat value="5+" delay={0} />
                <div className="stat-label">Years Experience</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="stat-item">
                <CountUpStat value="100%" delay={0} />
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="stat-item">
                <CountUpStat value="5.0" delay={0} />
                <div className="stat-label">Average Rating</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">Featured Projects</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="projects-subtitle">
              Take a look at some of our recent work transforming outdoor spaces
            </p>
          </ScrollAnimation>
          <div className="projects-showcase-grid">
            <ScrollAnimation delay={100}>
              <div className="project-showcase-card">
                <div className="project-showcase-image">
                  <div className="project-icon-large">🌱</div>
                </div>
                <div className="project-showcase-content">
                  <h3>Lawn Mowing</h3>
                  <p>Complete lawn care makeover for a pristine suburban home</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="project-showcase-card">
                <div className="project-showcase-image">
                  <div className="project-icon-large">✂️</div>
                </div>
                <div className="project-showcase-content">
                  <h3>Bush and Hedge Maintenance</h3>
                  <p>Professional bush and hedge trimming creating beautiful geometric shapes</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="project-showcase-card">
                <div className="project-showcase-image">
                  <div className="project-icon-large">🏰</div>
                </div>
                <div className="project-showcase-content">
                  <h3>House Washing</h3>
                  <p>Complete house washing service including pressure washing and maintenance</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="project-showcase-card">
                <div className="project-showcase-image">
                  <div className="project-icon-large">🏢</div>
                </div>
                <div className="project-showcase-content">
                  <h3>Leaf Cleanup</h3>
                  <p>Regular lawn maintenance and landscaping for office complexes</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation delay={500}>
            <div className="projects-cta-wrapper">
              <Link to="/projects" className="btn btn-primary btn-large">View All Projects</Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title">What Our Clients Say</h2>
          </ScrollAnimation>
          <div className="reviews-grid">
            <ScrollAnimation delay={100}>
              <div className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Aviles Exterior Services transformed our backyard into a beautiful oasis. Their landscaping work is absolutely stunning and their lawn care keeps everything looking perfect year-round!"
                </p>
                <div className="review-author">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Homeowner</div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "Professional, reliable, and skilled team. They handle all our commercial landscaping needs and our property always looks immaculate. Highly recommend their services!"
                </p>
                <div className="review-author">
                  <div className="author-name">Michael Chen</div>
                  <div className="author-title">Property Manager</div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">
                  "From lawn care to house washing, they do it all! Their attention to detail and communication throughout every project is exceptional. Our yard has never looked better."
                </p>
                <div className="review-author">
                  <div className="author-name">Emily Rodriguez</div>
                  <div className="author-title">Business Owner</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <ScrollAnimation>
            <div className="cta-content">
              <h2>Ready to Transform Your Outdoor Space in Douglasville, Villa Rica, Hiram, or Lithia Springs?</h2>
              <p>Contact Aviles Exterior Services today for a free consultation and quote on your exterior services needs. Serving Douglas County GA with excellence.</p>
              <Link to="/contact" className="btn btn-primary btn-large">Get Free Quote - (470) 526-3353</Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
