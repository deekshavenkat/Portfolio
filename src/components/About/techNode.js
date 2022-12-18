
//Node.js 

import React from "react"
import  Nodelogo from "../../Assets/NodeLogo.png"
function Node(){
    return (
       <>
         <div className ="flip-card">
            <div className ="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Nodelogo} style ={{height: "180px", width:"200px"}} alt="node.js"/>
                </div>
                <div className ="flip-card-back">
                  <strong> Node and Express </strong>
                      <p>
                        <ul>
                           <li>Made of use of node and express to build MERN Learning App </li>
                           <li> Implemented all the CRUD operations using RSETfull API </li>
                        </ul>
                      </p>
                </div>
            </div>
         </div>
       </>
  
 
    )
}

export default Node


