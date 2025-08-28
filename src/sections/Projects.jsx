import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center mb-5">
          Here are some of my projects
        </p>

        {/* Project 1: Image Search App */}
        <div className="project-box mb-5">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://i.ibb.co/S4fjYjxF/Screenshot-108.png"
                alt="Search results for Unsplash app"
                className="project-img img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h4 className="project-title">Image Search App</h4>
              <p className="project-description">
                A responsive image search engine built using JavaScript, HTML, CSS, and the Unsplash API. Users can search for images and load more results with a smooth UI and responsive grid layout.
              </p>
              <div className="project-stack mb-3">
                <strong>Stack:</strong> HTML, CSS, JavaScript, Unsplash API
              </div>
              <div className="project-buttons d-flex gap-3">
                <Button
                  variant="outline-primary"
                  href="https://imagesearchapp-hemanth.netlify.app/"
                  target="_blank"
                >
                  🔗 View Live
                </Button>
                <Button
                  variant="outline-light"
                  href="https://github.com/saihemanth517/ImageSearchApp"
                  target="_blank"
                  className="d-flex align-items-center gap-2"
                >
                  <FaGithub /> GitHub
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Project 2: Travel Planner Web App */}
        <div className="project-box mb-5">
          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://i.ibb.co/PzvsGZFQ/Screenshot-2025-07-11-173513.png"
                alt="Travel Planner Web Application UI"
                className="project-img img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h4 className="project-title">Travel Planner Web App</h4>
              <p className="project-description">
                A full-stack Travel Planner that integrates real-time flight data (Amadeus API) and hotel/venue recommendations (Foursquare API). Backend built with Spring Boot, secured via JWT, and connects to MySQL; frontend built with React + Vite and styled with Bootstrap.
              </p>
              <div className="project-stack mb-3">
                <strong>Stack:</strong> React, Vite, Spring Boot, MySQL, Amadeus API, Foursquare API, Bootstrap, JWT
              </div>
              <div className="project-buttons d-flex gap-3">
                <Button
                  variant="outline-light"
                  href="https://github.com/saihemanth517/Final-Project.git"
                  target="_blank"
                  className="d-flex align-items-center gap-2"
                >
                  <FaGithub /> GitHub
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Project 3: Employee Management System */}
        <div className="project-box mb-5">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://i.ibb.co/tMt1HjdN/Screenshot-2025-07-11-184416.png"
                alt="Employee Management System UI"
                className="project-img img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h4 className="project-title">Employee Management System</h4>
              <p className="project-description">
                A full-stack CRUD application to manage employee records. The backend is built using Spring Boot with a MySQL database and REST APIs, while the frontend uses React + Vite styled with Bootstrap. Features include validations, duplicate email check, and modern responsive UI.
              </p>
              <div className="project-stack mb-3">
                <strong>Stack:</strong> React, Vite, Spring Boot, MySQL, Bootstrap, Axios
              </div>
              <div className="project-buttons d-flex gap-3">
                <Button
                  variant="outline-light"
                  href="https://github.com/saihemanth517/EMS_FULLSTACK.git"
                  target="_blank"
                  className="d-flex align-items-center gap-2"
                >
                  <FaGithub /> GitHub
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Project 4: Food Delivery Application */}
        <div className="project-box mb-5">
          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="https://i.ibb.co/S4ZPPc45/dashboard-food.jpg"
                alt="Food Delivery Application UI"
                className="project-img img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h4 className="project-title">Food Delivery Application</h4>
              <p className="project-description">
                A full-stack Food Delivery platform with modules for customers, restaurants, delivery partners, and admins. Features include real-time order broadcasting via WebSocket, live delivery tracking with Mapbox, and JWT-secured authentication with role-based access. Optimized backend for performance and improved delivery efficiency by 25%.
              </p>
              <div className="project-stack mb-3">
                <strong>Stack:</strong> React, Vite, Tailwind CSS, Spring Boot, MySQL, WebSocket, JWT, Mapbox
              </div>
              <div className="project-buttons d-flex gap-3">
                <Button
                  variant="outline-light"
                  href="https://github.com/saihemanth517/FOOD_DELIVERY_APPLICATION.git"
                  target="_blank"
                  className="d-flex align-items-center gap-2"
                >
                  <FaGithub /> GitHub
                </Button>
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default Projects;
