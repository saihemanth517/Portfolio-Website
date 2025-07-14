import React from 'react';
import { Container } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title">My Experience</h2>

        <div className="experience-box">
          <h4 className="experience-role">Full Stack Developer Intern – Java Stack(Remote)</h4>
          <p className="experience-duration">Mar 2025 – Jun 2025</p>
          <p className="experience-company">AI Variety Tech</p>

          <p className="experience-description">
  Worked as a full stack developer intern where I built a real-time <strong>Travel Planner Web Application</strong> using Java, Spring Boot, and React with Vite. I implemented REST APIs secured with <strong>JWT authentication</strong> and integrated real-time external APIs like the <strong>Amadeus Flight API</strong> for live flight data and the <strong>Amadeus Hotel API</strong> to retrieve hotel listings by city. Additionally, I used the <strong>Foursquare Places API</strong> for location-based recommendations. The backend used a <strong>MySQL database</strong>, managed with <strong>Maven</strong>, and the frontend was styled with Bootstrap. I tested endpoints using <strong>Postman</strong> and maintained the codebase using Git & GitHub. This internship gave me hands-on, end-to-end experience in developing scalable, API-driven web applications.
</p>

        </div>
      </Container>
    </section>
  );
};

export default Experience;
