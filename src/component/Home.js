import { getByTitle } from "@testing-library/react";
import React from "react";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Style_home.css";

export default function Home() {
  return (
    <>
      <div className="container-lg space division">
        <div className="part1 ">
          <h1 className="display-3">Gallery</h1>
          <hr />
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/sample_2.jpg"
                  className="d-block w-100"
                  alt="photo_1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/sample_2.jpg"
                  className="d-block w-100"
                  alt="photo_2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/sample_3.jpg"
                  className="d-block w-100"
                  alt="photo_3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className=" part2 space center">
          <div className="d-grid gap-3">
            <center>
              <Link to="/Register">
                <button
                  type="button"
                  className="btn btn-danger btn-lg register"
                  href="#"
                >
                  Register{" "}
                </button>{" "}
              </Link>
              
            </center>
            <Link to="/RegisterClg">
                <button
                  type="button"
                  className="btn btn-danger btn-lg register"
                  href="#"
                >
                  Register as College{" "}
                </button>{" "}
              </Link>
            <center>
              {" "}
              <Link to="/LoginClg">
                <button
                  type="button"
                  className="btn btn-primary btn-lg register"
                  href="#"
                >
                  Login as Student
                </button>
              </Link>
            </center>
            <center>
              {" "}
              {/* <Link to="/LoginClg">
                <button
                  type="button"
                  className="btn btn-primary btn-lg register"
                  href="#"
                >
                  Login as College
                </button>
              </Link> */}
            </center>
          </div>
        </div>
      </div>
      <div id="read">
      <div className="container-lg">
        <h1 className="display-3">Quick Read</h1><hr/>
      </div>
  
      <div className="container-lg">
         
        <h4>
        <strong>Welcome to AdanPradhan</strong>, your one-stop destination for accessible and enriching workshops. Our mission is to empower students with affordable educational opportunities that propel them toward success in their academic and personal endeavors. <strong>At AdanPradhan</strong>, we prioritize affordability, employing location-based filtering to reduce travel costs and offering a diverse range of workshops spanning technology, arts, business, sciences, and more. Additionally, educational institutions can partner with us to showcase their workshops, connecting with eager learners and contributing to their educational growth.
        </h4>
      </div>
      </div>
      <div className="container-lg code" id="linkfq">
       

            <Link to="/faq"><h2 className="col-5 h faq">Frequently Asked Questions</h2></Link>

            <hr/>
              <div className="accordion" id="faq">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefaq" aria-expanded="true" aria-controls="collapsefaq">
                      <h2>How does AdanPradhan work?</h2>
                    </button>
                  </h2>
                  <div id="collapsefaq" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <h5><strong>AdanPradhan is a workshop booking platform that connects students with affordable workshops. </strong>You can browse and select workshops based on your interests and location. Colleges and institutions can also list their workshops on our platform.</h5> 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwofaq" aria-expanded="false" aria-controls="collapseTwofaq">
                      <h2>How do I book a workshop?</h2>
                    </button>
                  </h2>
                  <div id="collapseTwofaq" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <h5> <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora delectus rem reiciendis quisquam vel vitae aspernatur asperiores. Minima laudantium itaque beatae, praesentium voluptatem reiciendis officiis ipsa reprehenderit perspiciatis voluptas!</h5>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreefaq" aria-expanded="false" aria-controls="collapseThreefaq">
                      <h2>How can we a book a lab?</h2>
                    </button>
                  </h2>
                  <div id="collapseThreefaq" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <h5> <strong>This is the third item's accordion body.</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero reiciendis magni consequatur odio ipsam eum voluptas, omnis eveniet obcaecati quas eos, sit quibusdam ea deleniti perferendis unde. Quia, asperiores eligendi?</h5>
                    </div>
                  </div>
                </div>
              </div>
         
        
      </div>



      <Footer />
    </>
  );
}
