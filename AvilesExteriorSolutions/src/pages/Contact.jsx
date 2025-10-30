import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not properly configured. Please check your environment variables.');
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Get recipient email from environment or use default
      const recipientEmail = import.meta.env.VITE_EMAILJS_RECIPIENT || 'contact@avileswebsolutions.com';

      // Send email
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          service_type: formData.projectType || 'Not specified',
          message: formData.message,
          to_email: recipientEmail,
        }
      );

      console.log('Email sent successfully:', result);
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch for your next exterior services project. We're here to help transform your outdoor space.
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
                  <label htmlFor="projectType">Service Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select Service Type</option>
                    <option value="lawn-care">Lawn Care</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="trimming">Bush & Hedge Trimming</option>
                    <option value="tree-trimming">Tree Trimming</option>
                    <option value="house-washing">House Washing</option>
                    <option value="land-clearing">Land Clearing</option>
                    <option value="yard-maintenance">Yard Maintenance</option>
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
                    placeholder="Tell us about your exterior services needs..."
                    required
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="form-message success">
                    ✓ Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-message error">
                    ✗ Failed to send message. Please try again or call us at (470) 526-3353.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    <h3>Service Area</h3>
                    <p>
                      Serving Douglasville, GA<br />
                      and surrounding areas
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:4705263353" style={{color: 'inherit', textDecoration: 'none'}}>(470) 526-3353</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:contact@avileswebsolutions.com" style={{color: 'inherit', textDecoration: 'none'}}>contact@avileswebsolutions.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>
                      Monday - Friday: 7:00 AM - 7:00 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="map-section">
                <h3>Service Area</h3>
                <div className="map-placeholder">
                  <div className="map-icon">🗺️</div>
                  <p>Douglasville, GA</p>
                  <small>We serve Douglasville and surrounding areas</small>
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
              <h3>How long does a typical service take?</h3>
              <p>
                Service times vary depending on the type and size of your project. Regular 
                lawn care typically takes 30-60 minutes, while larger landscaping projects 
                can take a full day or multiple days. We'll provide an estimated timeline 
                during your free consultation.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Do you provide free estimates?</h3>
              <p>
                Yes! We offer free, no-obligation estimates for all services. Our team will 
                visit your property, discuss your needs, and provide a detailed quote. 
                Contact us to schedule your free estimate today.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>What services do you offer?</h3>
              <p>
                We offer comprehensive exterior services including lawn care, landscaping, 
                bush and hedge trimming, house washing, and yard maintenance. We can handle 
                both one-time projects and ongoing maintenance services.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>
                We primarily serve Douglasville, GA and the surrounding areas. Contact us 
                to confirm if we service your specific location, and we'll be happy to 
                discuss your exterior services needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
