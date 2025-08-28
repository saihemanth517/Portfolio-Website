import React from 'react';
import { Container } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title">My Experience</h2>

        {/* Internship - AI Variant */}
        <div className="experience-box">
          <h4 className="experience-role">Full Stack Developer Intern – Java Stack (Remote)</h4>
          <p className="experience-duration">Feb 2025 – Aug 2025</p>
          <p className="experience-company">AI Variant </p>

          {/* Travel Planner */}
          <p className="experience-description">
            Built a real-time <strong>Travel Planner Web Application</strong> using Java, Spring Boot, and React with Vite. 
            Implemented REST APIs secured with <strong>JWT authentication</strong> and integrated real-time external APIs like the 
            <strong> Amadeus Flight API</strong> for live flight data and the <strong>Amadeus Hotel API</strong> for hotel listings. 
            Also integrated the <strong>Foursquare Places API</strong> for location-based recommendations. 
            Used <strong>MySQL</strong> with <strong>Maven</strong>, styled frontend with Bootstrap, tested with <strong>Postman</strong>, 
            and maintained version control with GitHub. Delivered an end-to-end scalable API-driven web application.
          </p>

          {/* Food Delivery */}
          <p className="experience-description">
            Developed a <strong>Food Delivery Application</strong> with modules for customers, restaurants, and delivery partners. 
            Implemented <strong>JWT-secured authentication</strong> and role-based access. Built <strong>real-time order broadcasting</strong> 
            and live delivery tracking using <strong>WebSocket</strong> and <strong>Mapbox</strong>, reducing delivery delays by 20%. 
            Integrated <strong>Spring Boot</strong> backend with <strong>React + Tailwind</strong> frontend and <strong>MySQL</strong> database. 
            This project improved delivery efficiency by 25% and enhanced customer experience through real-time communication and tracking.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
