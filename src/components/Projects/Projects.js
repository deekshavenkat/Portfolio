import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Color from "../../Assets/Projects/colorPicker.png"
import InteriorThings from "../../Assets/Projects/InteriorThings.png";
import LearningApp from "../../Assets/Projects/LearningApp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InteriorThings}
               title="E-Commerce "
              description="
              This is an online furniture shopping web page 
              This project is single page, state management, well-designed and high quality application, developed using technologies like HTML, CSS, Styled components,  JS and React.js  
              Search site, categorize products logically .. etc are implemented to deliver user a smooth navigation 
              "
              ghLink="https://github.com/deekshavenkat/InteriorThings-e-commerce-project"
              demoLink="https://interiorthings.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearningApp}
               title="MERN Learning App"
              description="This Basic MERN stack Application: MongoDB, Express, React, and Node 
               Used basics of Restful web service calls for POST, GET, PATCH and 
              Delete methods to handle backend 
               Frontend is created by HTML, React.js, where user can Enroll, drop and 
              add rating to courses "
              ghLink="https://github.com/deekshavenkat/wings-create-learningapp"
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Color}
              isBlog={false}
              title="Color Picker"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/deekshavenkat/Color-picker/tree/master"
              demoLink="https://color-pic.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
