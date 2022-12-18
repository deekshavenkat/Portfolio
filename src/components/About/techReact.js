// react 
import React from "react"
import  Reactlogo from "../../Assets/reactlogo.png"
function Reac(){
    return (
       <>
         <div className ="flip-card">
            <div className ="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Reactlogo} style ={{height: "210px", width:"200px"}} alt="node.js"/>
                </div>
                <div className ="flip-card-back">
                   <div>
                   <strong> JS Framework React</strong>
                     <ul >
                        <li>Good conceptual understanding of  Lifecycle methods, Hooks etc  </li>
                        <li>Worked on popular Third party and react inbuilt library's </li>
                     </ul>
                   </div>
                </div>
            </div>
         </div>
       </>
  
 
    )
}

export default Reac


