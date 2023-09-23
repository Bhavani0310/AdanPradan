import React from "react";
import FAQ from "./Faq";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import "./Style_home.css";
const CollegeUser = () => {
  return (
    <>
      <div>
        <section className="h1-primary">
          <div className="row">
            <div className="col-lg">Today's List</div>
          </div>
        </section>
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{
            backgroundColor: "#c2e7ff",
            border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            margin: "20px",
          }}
        >
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">C++ Lab</h1>
                <hr />
                <h2 className="card-title">Student's List</h2>
                <h6 className="card-text">
                  <ul>
                    <li>....</li>
                    <li>....</li>
                    <li>...</li>
                    <li>...</li>
                  </ul>
                </h6>
                <div className="card-footer text-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-theme float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    View Deatils
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Today's List</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <h1>.....</h1>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Python Lab</h1>
                <hr />
                <h2 className="card-title">Student's List</h2>
                <h6 className="card-text">
                  <ul>
                    <li>....</li>
                    <li>....</li>
                    <li>...</li>
                    <li>...</li>
                  </ul>
                </h6>
                <div className="card-footer text-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-theme float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal1"
                  >
                    View Deatils
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal" id="myModal1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Today's List</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <h1>.....</h1>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h1
                  className="card-title"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Machine Learing Lab"
                >
                  ML Lab
                </h1>
                <hr />
                <h2 className="card-title">Student's List</h2>
                <h6 className="card-text">
                  <ul>
                    <li>....</li>
                    <li>....</li>
                    <li>...</li>
                    <li>...</li>
                  </ul>
                </h6>

                <div className="card-footer text-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-theme float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal2"
                  >
                    View Deatils
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" id="myModal2">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Today's List</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <h1>.....</h1>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h1
                  className="card-title"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Machine Learing Lab"
                >
                  ML Lab
                </h1>
                <hr />
                <h2 className="card-title">Student's List</h2>
                <h6 className="card-text">
                  <ul>
                    <li>....</li>
                    <li>....</li>
                    <li>...</li>
                    <li>...</li>
                  </ul>
                </h6>

                <div className="card-footer text-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-theme float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal2"
                  >
                    View Deatils
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Today's List</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <h1>.....</h1>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fulid-lg">
          <div className="row" id="feature" style={{ width: "90%" }}>
            <div className="col-md">
              <div id="labs">
                <div className="h">Labs</div>
                <hr />
                <div className="accordion" id="labs">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <h2>C++ Lab</h2>
                      </button>
                      <div className="icon d-flex align-items-center justify-content-center">
                        <i className="fa" aria-hidden="true"></i>
                      </div>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Total No of Seats:</strong>
                        <br />
                        <strong>Booked:</strong>
                        <br />
                        <strong>Available:</strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <h2>C lab</h2>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Total No of Seats:</strong>
                        <br />
                        <strong>Booked:</strong>
                        <br />
                        <strong>Available:</strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <h2>Python</h2>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Total No of Seats:</strong>
                        <br />
                        <strong>Booked:</strong>
                        <br />
                        <strong>Available:</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-theme"
                  id="button"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <Footer />
      </div>
    </>
  );
};

export default CollegeUser;
