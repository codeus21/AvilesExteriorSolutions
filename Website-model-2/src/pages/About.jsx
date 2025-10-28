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
            Building excellence since 2003 - Your trusted construction partner
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
                Founded in 2003, BuildCorp Construction has grown from a small family business 
                into one of the region's most trusted construction companies. What started as 
                a passion for building quality homes has evolved into a comprehensive construction 
                firm serving residential and commercial clients.
              </p>
              <p>
                Our commitment to excellence, integrity, and customer satisfaction has earned us 
                a reputation for delivering projects on time, within budget, and exceeding expectations. 
                We believe that every project is an opportunity to showcase our craftsmanship and 
                dedication to quality.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="construction-icon">👷‍♂️</div>
                <p>Team Photo</p>
              </div>
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
                To deliver exceptional construction services that exceed our clients' expectations 
                while maintaining the highest standards of quality, safety, and professionalism.
              </p>
            </div>
            <div className="values-card">
              <h3>Our Values</h3>
              <ul>
                <li><strong>Quality:</strong> We never compromise on the quality of our work</li>
                <li><strong>Integrity:</strong> Honest communication and transparent business practices</li>
                <li><strong>Safety:</strong> The safety of our team and clients is our top priority</li>
                <li><strong>Innovation:</strong> Embracing new technologies and construction methods</li>
                <li><strong>Community:</strong> Supporting local communities and sustainable practices</li>
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
              <h3>John Smith</h3>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">
                20+ years in construction management. Licensed contractor with expertise in 
                residential and commercial projects.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">👩‍💼</div>
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">Project Manager</p>
              <p className="member-bio">
                Certified project manager specializing in large-scale commercial construction 
                and renovation projects.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍🔧</div>
              </div>
              <h3>Mike Rodriguez</h3>
              <p className="member-role">Lead Architect</p>
              <p className="member-bio">
                Licensed architect with 15 years of experience in residential and commercial 
                design and planning.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">👩‍🔧</div>
              </div>
              <h3>Lisa Chen</h3>
              <p className="member-role">Safety Coordinator</p>
              <p className="member-bio">
                Certified safety professional ensuring all projects meet the highest safety 
                standards and regulations.
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
              <div className="cert-icon">🏆</div>
              <h3>Licensed General Contractor</h3>
              <p>State License #GC-2023-001</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🛡️</div>
              <h3>OSHA Certified</h3>
              <p>Occupational Safety & Health Administration</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">⭐</div>
              <h3>BBB A+ Rating</h3>
              <p>Better Business Bureau Accredited</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🌱</div>
              <h3>Green Building Certified</h3>
              <p>LEED Accredited Professional</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
