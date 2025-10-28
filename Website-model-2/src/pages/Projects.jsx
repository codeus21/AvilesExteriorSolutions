import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'residential',
      image: '🏠',
      description: 'Contemporary 3-bedroom home with open floor plan and energy-efficient features.',
      location: 'Suburban District',
      year: '2023',
      size: '2,500 sq ft'
    },
    {
      id: 2,
      title: 'Office Complex',
      category: 'commercial',
      image: '🏢',
      description: 'Multi-story office building with modern amenities and sustainable design.',
      location: 'Business District',
      year: '2023',
      size: '50,000 sq ft'
    },
    {
      id: 3,
      title: 'Kitchen Renovation',
      category: 'renovation',
      image: '🍳',
      description: 'Complete kitchen makeover with custom cabinets and premium appliances.',
      location: 'Downtown Area',
      year: '2023',
      size: '400 sq ft'
    },
    {
      id: 4,
      title: 'Retail Shopping Center',
      category: 'commercial',
      image: '🛍️',
      description: 'Multi-tenant retail center with parking and landscaping.',
      location: 'Shopping District',
      year: '2022',
      size: '75,000 sq ft'
    },
    {
      id: 5,
      title: 'Luxury Villa',
      category: 'residential',
      image: '🏰',
      description: 'Custom-built luxury home with premium finishes and smart home technology.',
      location: 'Exclusive Neighborhood',
      year: '2022',
      size: '4,200 sq ft'
    },
    {
      id: 6,
      title: 'Bathroom Remodel',
      category: 'renovation',
      image: '🛁',
      description: 'Master bathroom renovation with spa-like features and modern fixtures.',
      location: 'Residential Area',
      year: '2022',
      size: '150 sq ft'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'renovation', name: 'Renovation' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1 className="page-title">Our Projects</h1>
          <p className="page-subtitle">
            Showcasing our portfolio of successful construction projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="project-filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <div className="project-icon">{project.image}</div>
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{project.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Year:</span>
                      <span className="detail-value">{project.year}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Size:</span>
                      <span className="detail-value">{project.size}</span>
                    </div>
                  </div>
                  <button className="btn btn-outline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="project-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$50M+</div>
              <div className="stat-label">Total Project Value</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let us help bring your construction vision to life.</p>
            <button className="btn btn-primary btn-large">Get Free Quote</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
