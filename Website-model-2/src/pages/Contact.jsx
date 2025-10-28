import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch for your next construction project
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="design">Design & Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Office Address</h3>
                    <p>
                      123 Construction Way<br />
                      Building City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone Numbers</h3>
                    <p>
                      Main: (555) 123-4567<br />
                      Mobile: (555) 987-6543<br />
                      Emergency: (555) 911-HELP
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email Addresses</h3>
                    <p>
                      General: info@buildcorp.com<br />
                      Projects: projects@buildcorp.com<br />
                      Support: support@buildcorp.com
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed<br />
                      Emergency: 24/7 Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-placeholder">
                  <div className="map-icon">🗺️</div>
                  <p>Interactive Map</p>
                  <small>123 Construction Way, Building City, BC 12345</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does a typical project take?</h3>
              <p>
                Project timelines vary depending on size and complexity. Residential projects 
                typically take 3-6 months, while commercial projects can take 6-18 months. 
                We provide detailed timelines during the planning phase.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Do you provide free estimates?</h3>
              <p>
                Yes! We offer free, no-obligation estimates for all projects. Our team will 
                visit your site, discuss your needs, and provide a detailed quote within 48 hours.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Are you licensed and insured?</h3>
              <p>
                Absolutely. We are fully licensed general contractors with comprehensive 
                liability insurance and workers' compensation coverage. All certifications 
                are available upon request.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>
                We serve the greater metropolitan area and surrounding counties. Contact us 
                to confirm if we service your specific location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
