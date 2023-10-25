import React from 'react' 
import Login from './Login'
import WorkshopForm from './WorkshopForm';
import WorkshopAccordion from './WorkshopAccordion';
import TodayBooking from './TodayBooking';
import Upcoming from './Upcoming';
function Workshop() {
  return (
    <div className='container space '>
      <div className="d-flex justify-content-center ">
         
     <nav >
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Past Booking</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Today's Booking</button>
    <button className="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab " aria-controls="nav-contact" aria-selected="true">Upcoming Booking</button>
    
  </div>
  </nav>
  </div>
<div className='container'>
<div className="tab-content" id="nav-tabContent">
  
  <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="1">
  <div className="custom-scrollbar">
              <WorkshopForm />
              <WorkshopForm />
              <WorkshopForm />
              <WorkshopForm />
              <WorkshopForm />
              <WorkshopForm />
            </div>
    </div>
  
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="2">
  <div className="custom-scrollbar">
    <div className="container">
            <TodayBooking/>
            </div>
            </div>
  </div>
  <div className="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
    <div className="custom-scrollbar">
             <Upcoming/>
            </div>
   </div>
  </div>
  
</div>
    </div>
  )
}

export default Workshop
