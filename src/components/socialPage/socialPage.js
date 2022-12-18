import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import Particle from "../Particle";
import SocialData from "./socialData";



function Social() {
    const [data,setData ] = useState(SocialData)
  return (
    <Container fluid className="social-section">
      <Particle />
      <Container className ="social-center">
        <section className ="social-bg">
            <div className="social-text">
               <h1> Lets Connect </h1>
               <br />
               <SocialData />
            </div>
        </section>
           


       

      
      </Container>
    </Container>
  );
}

export default Social;



// lets connect 

// email : email 
// phone :call 

// twitter :user name and url
// Linkedin: user name and url 
// Naukari  :user name and url 

