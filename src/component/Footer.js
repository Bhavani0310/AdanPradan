import React from 'react';

import "./Style_home.css"
export default function Footer() {
  return (
    <>
    <div>
    <footer className="text-center text-white wrappingdiv" style={{backgroundColor: "#bbbdc5"}}>
            
            <div className="container-fluid bg-dark " id="linkus">
              <div className="row">
                <div className="col-md-12 contact">
                  <h1 className="display-5" id="font">ADAN PRADAN</h1>
                   <p>Our mission is to empower young Students to be the inventors and creators.</p>
                  <div className="container">
                    <div className="row">
                     
                      <div className="col-md">
                        <div className="About-us">
                    <h1> About Us </h1>
                        <hr/>
                     <h4>Contact:9**99</h4>
                     <h4>Email: <a href="">adanpradhan@gmail.com</a></h4>
                   <h3> follow us on </h3>
                   <a href="#" className="fa fa-instagram" id="us"></a> 
                   <a href="#" className="fa fa-twitter" id="us"></a> 
                   <a href="#" className="fa fa-linkedin" id="us"></a> 
                              </div>
        
                              </div>
                        
                               
                      </div>
                    </div>
                  </div>   
                  
              </div>
            </div>
        
           
            <div
                 className="text-center p-3"
                 style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                 >
               © 2022 Copyright:
              
            </div>
           
          </footer>
    </div>
    </>
  )
}
