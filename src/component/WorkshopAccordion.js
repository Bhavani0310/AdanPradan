import React, { useEffect, useState } from 'react';
import mongoose from "mongoose";

import './Style_home.css';
function WorkshopAccordion() {
  const [workshops, setWorkshops] = useState([]);
  const [showAllWorkshops, setShowAllWorkshops] = useState(false);

  useEffect(() => {
    // Fetch the data from your API endpoint
    fetch(`http://localhost:4000/Adan/workshopsforclg/${mongoose.Types.ObjectId.createFromHexString(
        localStorage.getItem("Id")
      )}`) // Replace with the actual API endpoint
      .then(response => response.json())
      .then(data => setWorkshops(data))
      .catch(error => console.error(error));

     
  }, []);
  const formatDate = (dateString) => {
    // Create a Date object from the input date string
    const date = new Date(dateString);
    
    // Ensure that the date is valid before formatting it
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    
    // Format the date as "dd/mm/yyyy"
    const options = { timeZone: 'Asia/Kolkata' };
    const formattedDate = date.toLocaleDateString('en-IN', options);
    
    return formattedDate;
  };
  

  // Filter workshops for today and future dates
  const filteredWorkshops = workshops.filter(workshop => {
    const workshopDate = new Date(workshop.workshopDate);
    const today = new Date();
    
    return workshopDate >= today;

  });
  //console.log(filteredWorkshops);
  const sortedFilteredWorkshops = filteredWorkshops.sort((a, b) => {
    const dateA = new Date(a.workshopDate);
    const dateB = new Date(b.workshopDate);

    // Compare the dates
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
  return (
    <div className="container-fulid-lg">
      <div className="row" id="feature" style={{ width: "90%" }}>
        <div className="col-md">
          <div id="labs">
            <div className="h">WorkShops</div>
            <hr />
            <div className="accordion" id="labs">
              {showAllWorkshops ? (
                // If showAllWorkshops is true, show all workshops
                sortedFilteredWorkshops.map((workshop, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        <h2>{workshop.workshopTitle}</h2>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>Date: {formatDate(workshop.workshopDate)}</strong>
                        <br />
                        <strong>Total No of Seats: {workshop.workshopSeats}</strong>
                        <br />
                        <strong>Booked: {workshop.Bookingcount}</strong>
                        <br />
                        <strong>Available: {workshop.workshopSeats-workshop.Bookingcount}</strong>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // If showAllWorkshops is false, show only today and future workshops
                sortedFilteredWorkshops
                  .filter((workshop, index) => index < 3) // Show only the first 3 workshops
                  .map((workshop, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`collapse${index}`}
                        >
                          <h2>{workshop.workshopTitle}</h2>
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>Date: {formatDate(workshop.workshopDate)}</strong>
                          <br />
                          <strong>Total No of Seats: {workshop.workshopSeats}</strong>
                          <br />
                          <strong>Booked: {workshop.Bookingcount}</strong>
                        <br />
                        <strong>Available: {workshop.workshopSeats-workshop.Bookingcount}</strong>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
            {filteredWorkshops.length > 3 && (
              <button
                className="btn btn-primary mt-3"
                onClick={() => setShowAllWorkshops(!showAllWorkshops)}
              >
                {showAllWorkshops ? "Show Less" : "View More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopAccordion;
