import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import team from "../../Assets/team.jpg";



function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong>  MY STORY</strong>
            </h1>

            <Aboutcard />


          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={team} alt="teamplayer"  className="img-fluid" />
          </Col>
        </Row>


        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
         
        </h1>
           <p> Dont forget to Hover</p>


        <Techstack />

      
      </Container>
    </Container>
  );
}

export default About;
