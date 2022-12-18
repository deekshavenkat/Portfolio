import React from "react";
import { Col, Row } from "react-bootstrap";
import JavaScript from "./techJS";
import Node from "./techNode";
import Reac from "./techReact"
import Sqlogo from "./techsql";
import Logo from "./techGit"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "100px" }} >
      
      <Col xs="auto" md="auto" className ="tech-card">
        <JavaScript />
      </Col>
      <Col xs="auto" md="auto" className ="tech-card ">
        <Node /> 
       </Col>
      <Col xs="auto" md="auto" className ="tech-card">
        <Reac />
       
      </Col>
      <Col xs="auto" md="auto" className ="tech-card ">
        <Sqlogo />
       </Col>
     
      <Col xs="auto" md="auto" className ="tech-card">
        <Logo />
       
      </Col>
    
     
    </Row>
  );
}

export default Techstack;
