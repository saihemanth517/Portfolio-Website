import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        {/* Top Centered Brand + Links Row */}
        <div className="footer-top text-center">
          <div className="footer-inline-group">
            <span className="footer-brand">Sai Hemanth</span>
            <span className="footer-separator">|</span>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Centered Divider */}
        <div className="footer-divider-container">
          <hr className="footer-divider" />
        </div>

        {/* Bottom Row */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-md-start text-center mb-2 mb-md-0">
            <div className="footer-copy">
              © {new Date().getFullYear()} Sai Hemanth. All rights reserved.
            </div>
          </Col>
          <Col xs={12} md={6} className="text-md-end text-center">
            <div className="footer-social">
              <a
                href="https://x.com/517Hemanth68381"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/sonu__143258?igsh=a3JoYjlhZDBxOGpu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
