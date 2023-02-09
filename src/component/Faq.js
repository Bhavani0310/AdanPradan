import {React,useState} from "react";

import "./Style_home.css";

function FAQ(props) {
    
  return (
    <>
    <h1 className=" h1-primary space center">FAQ</h1>
      <div className="carddivision  center">
          
      <div className="card  mb-3 space" style={{ maxWidth: "20rem" ,marginRight:"2cm"}}>
        <div className="card-header">Header{props.title}</div>
        <div className="card-body text-primary">
          <h5 className="card-title"> 
        </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.{props.description}
          </p>
         

          
   
        </div>
      </div>
      <div className="card  mb-3 space" style={{ maxWidth: "18rem", marginRight:"2cm"}}>
        <div className="card-header">Header</div>
        <div className="card-body text-primary">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> <div className="card  mb-3 space" style={{ maxWidth: "18rem" ,marginRight:"2cm" }}>
        <div className="card-header">Header</div>
        <div className="card-body text-primary">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
export default FAQ;
