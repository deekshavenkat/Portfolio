// react 
import React from "react"
import  logo from "../../Assets/gitlogo.png"
function Logo(){
    return (
       <>
         <div className ="flip-card">
            <div className ="flip-card-inner">
                <div className="flip-card-front">
                    <img src={logo} style ={{height: "200", width:"200px"}} alt="Git"/>
                </div>
                <div className ="flip-card-back">
                   <div>
                      <strong> Git and Github  </strong>
                      <p>
                        <ul style ={{marginTop : "30px"}}>
                           <li>Used Git to control the version in developed Projects </li>
                           
                        </ul>
                      </p>
                   </div>
                </div>
            </div>
         </div>
       </>
  
 
    )
}

export default Logo


