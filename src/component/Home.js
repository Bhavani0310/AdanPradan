import { getByTitle } from "@testing-library/react";
import React from "react";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "./Style_home.css";

export default function Home() {
  return (
    <>
     <Navbar contact="Contact-us" />
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
                  src="images/sample_1.jpg"
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
            <center>
              {" "}
              <Link to="/Login">
                <button
                  type="button"
                  className="btn btn-primary btn-lg register"
                  href="#"
                >
                  Login
                </button>
              </Link>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          adipisci amet, veritatis repellat quibusdam omnis corporis fuga,
          dolorum ea quam totam beatae, consectetur est expedita. Praesentium
          blanditiis consequatur omnis ex! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus aut vero labore porro sed, a
          beatae corporis vitae magnam nostrum doloremque? Odit nobis quod aut
          necessitatibus esse nostrum ut qui. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fuga similique hic quisquam, dolore
          placeat debitis obcaecati! Consectetur aut odit fugit repellendus,
          minima, temporibus numquam alias enim corrupti, libero eos amet?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          tempore autem repellendus officiis temporibus, incidunt voluptatibus
          nam libero corrupti rerum modi nulla optio maxime, impedit animi
          tempora inventore. Vero, sint!
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
                      <h2>How.....</h2>
                    </button>
                  </h2>
                  <div id="collapsefaq" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <h5><strong>ipsum dolor sit amet, consectetur adipisicing elit</strong> . Atque rem voluptate quas vero consequatur obcaecati quos quia saepe aliquam ex dolore, doloremque dicta dolores animi! Amet eligendi id iusto odio.</h5> 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwofaq" aria-expanded="false" aria-controls="collapseTwofaq">
                      <h2>what.....</h2>
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
