import React from "react";
import { Link } from "react-router-dom";
import "./StyleUser.css";

export default function UserStudent() {

  return (
    <div>
      <div className="container center space" style={{ height: "200px" }}>
        <div className="display-1 center" id="font">
          Book Your WorkShop
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <center>
                <h1>C++ Lab</h1>
              </center>
              <div className="card-body">
                <h4 className="card-title">KMIT</h4>
                <h4 className="card-title">Narayanguda</h4>
                <p className="card-text">DESCRIPTION...................</p>
                <p className="card-text">......................</p>
                <Link to="/boking" className="btn btn-primary">
                  BOOK A LAB
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <center>
                <h1>Python Lab</h1>
              </center>
              <div className="card-body">
                <h4 className="card-title">NGIT</h4>
                <h4 className="card-title">Uppal</h4>
                <p className="card-text">DESCRIPTION...................</p>
                <p className="card-text">......................</p>
                <Link to="/booking" className="btn btn-primary">
                  BOOK A LAB
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <center>
                <h1>Java Lab</h1>
              </center>
              <div className="card-body">
                <h4 className="card-title">KMIT</h4>
                <h4 className="card-title">Narayanguda</h4>
                <p className="card-text">DESCRIPTION...................</p>
                <p className="card-text">......................</p>
                <Link to="/booking" className="btn btn-primary">
                  BOOK A LAB
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg code" id="linkfq">
        <Link to="/stdfaq">
          <h2 className="col-5 h faq">Frequently Asked Questions</h2>
        </Link>

        <hr />
        <div className="accordion" id="faq">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefaq"
                aria-expanded="true"
                aria-controls="collapsefaq"
              >
                <h2>How.....</h2>
              </button>
            </h2>
            <div
              id="collapsefaq"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h5>
                  <strong>
                    ipsum dolor sit amet, consectetur adipisicing elit
                  </strong>{" "}
                  . Atque rem voluptate quas vero consequatur obcaecati quos
                  quia saepe aliquam ex dolore, doloremque dicta dolores animi!
                  Amet eligendi id iusto odio.
                </h5>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwofaq"
                aria-expanded="false"
                aria-controls="collapseTwofaq"
              >
                <h2>what.....</h2>
              </button>
            </h2>
            <div
              id="collapseTwofaq"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h5>
                  {" "}
                  <strong>
                    This is the second item's accordion body.
                  </strong>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  tempora delectus rem reiciendis quisquam vel vitae aspernatur
                  asperiores. Minima laudantium itaque beatae, praesentium
                  voluptatem reiciendis officiis ipsa reprehenderit perspiciatis
                  voluptas!
                </h5>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThreefaq"
                aria-expanded="false"
                aria-controls="collapseThreefaq"
              >
                <h2>How can we a book a lab?</h2>
              </button>
            </h2>
            <div
              id="collapseThreefaq"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h5>
                  {" "}
                  <strong>This is the third item's accordion body.</strong>{" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero reiciendis magni consequatur odio ipsam eum voluptas,
                  omnis eveniet obcaecati quas eos, sit quibusdam ea deleniti
                  perferendis unde. Quia, asperiores eligendi?
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
