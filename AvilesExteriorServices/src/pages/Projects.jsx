import React, { useState } from 'react';
import CountUpStat from '../components/CountUpStat';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Suburban Lawn Transformation',
      category: 'lawn-mowing',
      image: '🌱',
      description: 'Complete lawn care makeover including mowing, edging, and fertilization for a pristine suburban home.',
      location: 'Suburban District',
      year: '2023',
      size: '0.5 acres',
      gallery: ['🌱', '🌿', '🌾', '🌳', '🌲', '🌴']
    },
    {
      id: 2,
      title: 'Commercial Property Maintenance',
      category: 'lawn-mowing',
      image: '🏢',
      description: 'Regular lawn maintenance and landscaping services for a busy office complex.',
      location: 'Business District',
      year: '2023',
      size: '2.0 acres',
      gallery: ['🏢', '🌱', '🌿', '🌳', '🌲', '🌴']
    },
    {
      id: 3,
      title: 'Hedge Sculpting Project',
      category: 'bush-trimming',
      image: '✂️',
      description: 'Professional bush and hedge trimming service creating beautiful geometric shapes and clean lines.',
      location: 'Downtown Area',
      year: '2023',
      size: '150 ft hedge',
      gallery: ['✂️', '🌳', '🌲', '🌿', '🌱', '🌾']
    },
    {
      id: 4,
      title: 'Shopping Center Landscaping',
      category: 'bush-trimming',
      image: '🛍️',
      description: 'Comprehensive bush trimming and landscaping maintenance for retail shopping center.',
      location: 'Shopping District',
      year: '2022',
      size: '3.0 acres',
      gallery: ['🛍️', '🌳', '🌲', '🌿', '🌱', '🌾']
    },
    {
      id: 5,
      title: 'Luxury Home Exterior Cleaning',
      category: 'house-washing',
      image: '🏰',
      description: 'Complete house washing service including pressure washing, gutter cleaning, and exterior maintenance.',
      location: 'Exclusive Neighborhood',
      year: '2022',
      size: '4,200 sq ft',
      gallery: ['🏰', '💧', '🧽', '🚿', '✨', '🏠']
    },
    {
      id: 6,
      title: 'Residential Pressure Washing',
      category: 'house-washing',
      image: '🏠',
      description: 'Professional house washing and exterior cleaning service for residential property.',
      location: 'Residential Area',
      year: '2022',
      size: '2,500 sq ft',
      gallery: ['🏠', '💧', '🧽', '🚿', '✨', '🏰']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'lawn-mowing', name: 'Lawn Mowing' },
    { id: 'bush-trimming', name: 'Bush Trimming' },
    { id: 'house-washing', name: 'House Washing' }
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
            Showcasing our portfolio of successful exterior service projects
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
                  <button 
                    className="btn btn-outline project-overlay-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </button>
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
              <CountUpStat value="100+" delay={0} />
              <div className="stat-label">Yards Transformed</div>
            </div>
            <div className="stat-item">
              <CountUpStat value="5+" delay={100} />
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <CountUpStat value="100%" delay={200} />
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <CountUpStat value="5.0" delay={300} />
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Outdoor Space?</h2>
            <p>Let us help bring your exterior vision to life with professional lawn care and maintenance services.</p>
            <button className="btn btn-primary btn-large">Get Free Quote</button>
          </div>
        </div>
      </section>

      {/* Project Gallery Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="project-gallery">
                {selectedProject.gallery.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <div className="gallery-image">{image}</div>
                  </div>
                ))}
              </div>
              <div className="project-info">
                <p className="project-description">{selectedProject.description}</p>
                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{selectedProject.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Year:</span>
                    <span className="detail-value">{selectedProject.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Size:</span>
                    <span className="detail-value">{selectedProject.size}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
