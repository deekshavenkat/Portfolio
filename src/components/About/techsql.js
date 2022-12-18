// react 
import React from "react"
import  Sqlogo from "../../Assets/sqlogo.png"
function Sql(){
    return (
       <>
         <div className ="flip-card">
            <div className ="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Sqlogo} style ={{height: "250", width:"200px"}} alt="node.js"/>
                </div>
                <div className ="flip-card-back">
                   <div>
                     <strong> SQL</strong>
                     <ul style={{marginTop:"30px"}}>
                        <li>To maintain all the data in the backend SQL database is well used </li>
                     </ul>
                   </div>
                </div>
            </div>
         </div>
       </>
  
 
    )
}

export default Sql


