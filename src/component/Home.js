import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Style_home.css";
import Faq from "./Faq";
import Read from "./Read";
import ContactForm from "./ContactForm";
export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
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
                  src="images/sample_2.jpeg"
                  className="d-block w-100"
                  alt="photo_1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/sample_3.jpeg"
                  className="d-block w-100"
                  alt="photo_2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/sample_1.jpeg"
                  className="d-block w-100"
                  alt="photo_3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/sample_4.jpeg"
                  className="d-block w-100"
                  alt="photo_4"
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
                <div>
                  {loading ? (
                    <button className="btn btn-danger" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span role="status">Loading...</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-danger btn-lg register"
                      onClick={handleClick}
                    >
                      Register
                    </button>
                  )}
                </div>
              </Link>
            </center>
            <center>
              {" "}
              <Link to="/Login">
                <div>
                  {loading ? (
                    <button className="btn btn-primary" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span role="status">Loading...</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary btn-lg register"
                      onClick={handleClick}
                    >
                      Login
                    </button>
                  )}
                </div>
              </Link>
            </center>
          </div>
        </div>
      </div>
      <ContactForm/>
      {/* <div id="read">
        <div className="container-lg">
          <h1 className="display-3">Quick Read</h1>
          <hr />
        </div>

        <div className="container-lg">
          <h4>
            <strong>Welcome to AdanPradhan</strong>, your one-stop destination
            for accessible and enriching workshops. Our mission is to empower
            students with affordable educational opportunities that propel them
            toward success in their academic and personal endeavors.{" "}
            <strong>At AdanPradhan</strong>, we prioritize affordability,
            employing location-based filtering to reduce travel costs and
            offering a diverse range of workshops spanning technology, arts,
            business, sciences, and more. Additionally, educational institutions
            can partner with us to showcase their workshops, connecting with
            eager learners and contributing to their educational growth.
          </h4>
        </div>
      </div> */}
      <Read/>
      {/* <div className="container-lg code" id="linkfq">
        <Link to="/faq">
          <h2 className="col-5 h faq">Frequently Asked Questions</h2>
        </Link>

        <hr />
       
      </div> */}
   <Faq/>
     
      <Footer />
      
    </>
  );
}
