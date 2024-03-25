import React from "react";

import Footer from "./Footer";
import "./Style_home.css";

import WorkshopAccordion from "./WorkshopAccordion";
import TodayBooking from "./TodayBooking";
import ContactForm from "./ContactForm";
const CollegeUser = () => {
 
  return (
    <>
     <div>
      <div>
      <section className="h1-primary">
          <div className="row">
            <div className="col-lg">Today's List</div>
          </div>
        </section>
        <TodayBooking no={3}/>
      </div>
       
        <WorkshopAccordion />
        <hr />
        <ContactForm/>
        <Footer />
      </div>
    </>
    
  );
};

export default CollegeUser;
