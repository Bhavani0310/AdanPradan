import React from "react";
import { Link } from "react-router-dom";
const Navbar_home = ({ scrollToSection }) => {
  return (
    <>
   <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container-fluid my-0.5">
          <Link className="navbar-brand" to="/" id="font">
            <h2>ADAN PRADAN </h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarText"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => scrollToSection('home')} >
                  <h3 className="bar">
                    <svg
                      className="icon bi bi-house-door"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="40"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                    </svg>
                    Home
                  </h3>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/faq" className="nav-link" onClick={() => scrollToSection('faq')}>
                  <h3 className="bar">FAQ</h3>
                </Link>
              </li>
             
             
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                  <h3 className="bar">Contact-Us</h3>
                </Link>
                 
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <h3 className="bar">Login</h3>
                </Link>
                 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar_home;
