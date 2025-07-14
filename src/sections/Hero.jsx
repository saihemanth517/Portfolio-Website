import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            {/* subtle welcome text */}
            <h2 className="hero-subtitle fade-in-top">Welcome to my</h2>

            {/* animated headline */}
            <h1 className="hero-title typing-animation">Portfolio!</h1>

            <p className="lead" style={{ maxWidth: '700px' }}>
              I am a passionate Java Full Stack Developer who recently completed a professional training course and internship. I'm skilled in building responsive web applications using technologies like Java, Spring Boot, React, Bootstrap, and MySQL.
            </p>
            <p className="mt-3 text-secondary" style={{ maxWidth: '700px' }}>
              I enjoy developing scalable, clean, and interactive user interfaces and RESTful backend services. I'm actively seeking opportunities to apply my skills in real-world projects and grow in a dynamic team environment.
            </p>

            <div className="mt-4 hero-buttons">
              <Button
                variant="outline-light"
                href="https://drive.google.com/file/d/1x2TbSTinAU8pBhSh3nlVaXwbaNWHjrtj/view?usp=drivesdk"
                className="me-3"
              >
                My Resume
              </Button>
              <Button variant="primary" href="#contact">
                Hire Me
              </Button>
            </div>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://i.ibb.co/9mnf0Cxj/1685286060937.jpg"
              alt="Profile"
              className="hero-image-rect"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
