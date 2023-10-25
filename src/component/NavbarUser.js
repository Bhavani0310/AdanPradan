import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StyleUser.css";
import { useAuth } from './Authcontext';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
export default function NavbarUser() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    navigate("/");
    setShowLogoutModal(false);
    logout()
  };
 

  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid my-0.5">
          <a
            className="navbar-brand"
            id="font"
            onClick={(e) => {
              e.preventDefault();
           
              setShowLogoutModal(true);
            }}
          >
            <h2>ADAN PRADAN </h2>
          </a>

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

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Student"
                >
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
                <Link className="nav-link" to="/college">
                  <h3 className="bar">Colleges</h3>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stdfaq" className="nav-link" href="#linkfq">
                  <h3 className="bar">FAQ </h3>
                </Link>
              </li>

              <li className="nav-item">
              <Link to="/dashboard" className="nav-link" href="#linkfq">
                  <h3 className="bar">Dashboard </h3>
                </Link>
              </li>

              <li className="nav-item">
                {" "}
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg "
                    id="register"
                    onClick={(e) => {
                      e.preventDefault();
                      
                      setShowLogoutModal(true);
                    }}
                  >
                    
                    Log Out{" "}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showLogoutModal && (
        <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to log out? You will be redirected to the home
            page.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowLogoutModal(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
