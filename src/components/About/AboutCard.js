import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Deekshitha V  </span>
            from <span className="purple"> Karnataka, India.</span>
            <br />I work for Tata Consultancy Services
          
            <br />
            <br />
            <br/>
          <h3> <strong>  Roles and Responsibilities</strong> </h3>
           <p>
            <ul>
           <li> Having 2yrs of Experience in ReactJS development, hard – working webdeveloper with flair for creating elegant solutions in the least amount oftime.
      
           </li>
           <li>
        Worked as part of a team to develop front end Capital market Application which is widely used all over the world (CBK–Kuwait), (TMX-Canada) etc.
         </li>
            </ul>
           </p>

        <br/>
        <br/>
       <h3><story>  What i do other than tech</story></h3>
         
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Reading Books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>
          </p>
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
