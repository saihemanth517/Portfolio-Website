import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from 'react-icons/fa';
import { SiPostman, SiApachemaven } from 'react-icons/si';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Hello! My name is <strong>Sai Hemanth</strong>
            </p>
            <p className="about-text">
              I am a self-motivated Java Full Stack Developer with a passion for building
              scalable and interactive web applications. I’ve recently completed a full stack course
              and internship, where I worked with technologies like Java, Spring Boot, React, MySQL, and Bootstrap.
            </p>
            <p className="about-text">
              I'm always eager to learn, explore new tools, and grow as a developer. Apart from coding, I love watching cricket and spending time with tech content.
            </p>

            <h5 className="stack-title">Some of the Stack I Know:</h5>
            <div className="tech-icons">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <FaJsSquare title="JavaScript" />
              <FaReact title="React" />
              <FaJava title="Java" />
              <FaDatabase title="MySQL" />
              <FaBootstrap title="Bootstrap" />
              <FaGitAlt title="Git" />
              <FaGithub title="GitHub" />
              <SiPostman title="Postman" />
              <SiApachemaven title="Maven" />
            </div>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=500&auto=format&fit=crop&q=60"
              alt="Sai Hemanth"
              className="about-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
