
// JavaScript card 

import React from "react"
import  logo from "../../Assets/JS.png"
function JavaScript(){
    return (
       <>
         <div className ="flip-card">
            <div className ="flip-card-inner">
                <div className="flip-card-front">
                    <img src={logo} style ={{height: "180px", width:"200px"}} alt="js"/>
                </div>
                <div className ="flip-card-back">
                   <div>
                      <strong> JavaScript</strong>
                      <p>
                        <ul>
                           <li> Good knowledge in HTML, CSS, JS</li>
                           <li> Solving DSA problems on Leetcode (Solved 45+ and counting)</li>
                        </ul>
                      </p>
                   </div>
                </div>
            </div>
         </div>
       </>
  
 
    )
}

export default JavaScript


