import React from 'react'
import Navbar from './Navbar'
import "./Style_home.css"
export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <div className="container-lg space">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-3">Gallery
          </h1>
          <hr/>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/R.jpeg" className="d-block w-100" alt="Pythonlab"/>
              </div>
              <div className="carousel-item">
                <img src="images/chemistrylab.jpg" className="d-block w-100" alt="chemistrylab"/>
              </div>
              <div className="carousel-item">
                <img src="images/laboratories-2.jpg" className="d-block w-100" alt="ADE"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-lg-3 mt-5 pt-5">
          <div className="container">
            <div className="row">

              <br/>
            </div>
            <div className="row">

              <br/>
            </div>
            <div className="row">
              <br/>
            </div>
            <div className="row">
              <div className="col-6">

              </div>
              <div className="col-4">
                <div className="d-grid gap-3">

                  <center> 
                    <a ><button type="button" className="btn btn-danger btn-lg register" >
                        Register </button> </a></center>
                  <center> <a ><button type="button" className="btn btn-primary btn-lg register"
                       >Login</button> </a></center>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
