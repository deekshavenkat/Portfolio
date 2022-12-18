

// Linked in icon put url 
// naukari icom put urlim\

import React from "react"
import Linked from "../../Assets/linkedin.png"
import nauk from "../../Assets/nauk.png"
import hub from "../../Assets/hub2.jpg"
import mail from "../../Assets/mine.jpg"

function SocialData(){
    return (
       <section>
          <div >
            {/* Email */}
            <img style ={{height:"70px", width:"70px", borderRadius:"60px"}} src={mail} alt="" />
            <span style={{marginLeft :"10px"}}> <a className ="anch" 
            href="mailto: deekshithavreddy@gmail.com" alt ="">  Connect </a> </span>
         </div>
        
         <br />
         <div >
            {/* Naukari */}
            <img style ={{height:"70px", width:"70px", borderRadius:"60px"}} src={nauk} alt="" />
            <span style={{marginLeft :"10px"}}> <a className ="anch" 
            href="https://www.naukri.com/mnjuser/profile" alt ="">  Connect </a> </span>
         </div>
         <br />
         <div >
            {/* LinkedIn */}
            <img style ={{height:"70px", width:"70px", borderRadius:"60px"}} src={Linked} alt="" />
            <span style={{marginLeft :"10px"}}> <a className ="anch" 
            href="https://www.linkedin.com/in/deekshithav17/" alt ="">  Connect </a> </span>
         </div>
         <br />
         
         <div >
            {/* Github */}
            <img style ={{height:"70px", width:"70px", borderRadius:"60px"}} src={hub} alt="" />
            <span style={{marginLeft :"10px"}}> <a className ="anch" 
            href="https://github.com/deekshavenkat" alt ="">  Connect </a> </span>
         </div>
       </section>
    )
}

export default SocialData 




// <Row>
//           <Col md={4} className="home-about-social">
//             {/* <h1>FIND ME ON</h1> */}
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://twitter.com/Soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/soumyajit4419/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>