import React from 'react';
import { Link } from 'react-router-dom'
export default function NavbarClg() {
  return (
    <div>
         <nav className="navbar navbar-expand-md fixed-top">
          <div className="container-fluid my-1">
               <a className="navbar-brand" href="#"  id="font"><h2>ADAN PRADAN </h2></a>
               
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
               </button>
        
              <div className="collapse navbar-collapse" id="navbarText">
                   <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                  
                        <li className="nav-item">
                               <a className="nav-link active" aria-current="page" href="#"><h3 className="bar bi bi-house-door"><svg  className="icon"xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="currentColor"  viewBox="0 0 16 20">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                              </svg>Home</h3></a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="#linkfq"><h3 className="bar">Labs</h3></a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#linkfq"><h3 className="bar">Booking </h3></a>
                             </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#linkfq"><h3 className="bar">FAQ</h3></a>
                             </li>
                            
  
                         <li className="nav-item" id="profile">
                              <a className="nav-link" href="#linkus"data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile"><h3 className="bar"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                   <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                 </svg></h3></a>
                         </li>
                         <li className="nav-item">
                              <Link to="/">
                              <button type="button" className="btn btn-danger btn-lg " id="register" >   Log Out </button></Link>
                            </li>
                            
                        
                     </ul>
                
  
                </div>
              
          </div>
     </nav>
    </div>
  )
}
