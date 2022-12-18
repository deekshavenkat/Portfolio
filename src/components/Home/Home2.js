import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

function Home2() {
  return (
    <Container fluid className="home-about-section background" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
           
            <p className="home-about-body">
              <h2 style ={{fontSize: "3em", paddingTop:"10px"}}>Deekshitha V </h2>
              <Row md ={12}>
                <Col >
                  <h4 style ={{fontSize: "1em",  paddingLeft: "50px"}} >{`     Developer..... loves creating things,`}</h4>
               </Col>
               </Row>
               <br />
              Two years experience in building complex banking application 
              which servers millions of users using Javascript framework <i>React.js</i> 
              
               <br />
               Technologies that i have explored 
               <ul>
                  <li>
                  Experience in <i>  HTML5,
                  CSS,  javascript</i>
                  </li>
                  <li>
                  Experience and  thorough understanding of <i>NodeJs & React.js(SSR)</i> and its core principles

                  </li>
                  <li>
                   Familiarity with RESTful APIs
                  </li>
                  <li>
                  Backend development  <i> Node.js /Express </i>
                  </li>
                  <li> Good Familiarity with ReactJs in-built and popular third party frameworks and libraries </li>
               </ul>
          <br/>
              I enjoy <Type />
             
            </p>
          </Col>
         
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;

