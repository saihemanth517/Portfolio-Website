import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Connect.css';

const Connect = () => {
  return (
    <section id="connect" className="connect-section">
      <Container>
        <div className="connect-inline">
          <h2 className="connect-title">Connect With Me:</h2>
          <div className="social-icons-inline">
            <a href="https://www.linkedin.com/in/sai-hemanth-javafullstack/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/saihemanth517" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/sonu__143258?igsh=a3JoYjlhZDBxOGpu" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/517Hemanth68381?t=vPt-hJr_tdHuQG6XnlltKw&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Connect;
