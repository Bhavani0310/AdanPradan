import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style_home.css";
import { Link } from "react-router-dom";
import Popup from './Popup';
import { logDOM } from "@testing-library/react";

function CollegeList() {
  const [colleges, setColleges] = useState([]);
  const [collegesWithWorkshops, setCollegesWithWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  const [filteredColleges, setFilteredColleges] = useState({});
  const [uniqueWorkshops, setUniqueWorkshops] = useState([]);
  
  const today = new Date();
  const istOptions = { timeZone: "Asia/Kolkata" };
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate()+1 ); // Get the date for tomorrow
  const formattedDate = tomorrow.toLocaleDateString("en-IN", istOptions);
  const [selectedWeekDate, setSelectedWeekDate] = useState(formattedDate);
  const [showNoSeatsPopup, setShowNoSeatsPopup] = useState(false);

  const handleNoSeatsPopup = () => {
    setShowNoSeatsPopup(true);
  };
  // Define the generateWeekDates function
  function generateWeekDates() {
    const weekDates = [];
    // Generate dates for the next 7 days in IST starting from tomorrow
    for (let i = 0; i < 7; i++) {
      const date = new Date(tomorrow);
      date.setDate(tomorrow.getDate() + i);

      // Format the date as "YYYY-MM-DD" in IST
      const formattedDate = date.toLocaleDateString("en-IN", istOptions);
      //console.log(formattedDate);
      weekDates.push(formattedDate);
    }

    return weekDates;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://backend-rho-one.vercel.app/Adan/workshops"
        );
        const currentDateIST = new Date().toLocaleString("en-us", {
          timeZone: "Asia/Kolkata",
        });
        console.log(currentDateIST);
        // console.log(response.data);
        // Filter and select only future workshops
        const futureWorkshops = response.data.filter((workshop) => {
          const workshopDate = new Date(workshop.workshopDate);
          return workshopDate >= new Date(currentDateIST);
        });
       // console.log(futureWorkshops);
        const groupedWorkshops = groupWorkshopsByCollege(futureWorkshops);
        const groupedByDate = groupWorkshopsByCollegeDate(futureWorkshops);
        setColleges(groupedWorkshops);
        setCollegesWithWorkshops(groupedWorkshops);
        //console.log(groupedByDate);
        //console.log(collegesWithWorkshops);
        const uniqueWorkshopSet = new Set();
        response.data.forEach((workshop) => {
          uniqueWorkshopSet.add(workshop.workshopTitle);
        });
        setUniqueWorkshops(Array.from(uniqueWorkshopSet));
        setFilteredColleges(groupedByDate);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const groupWorkshopsByCollege = (workshops) => {
    const grouped = {};

    workshops.forEach((workshop) => {
      const workshopDate = new Date(workshop.workshopDate);
      // console.log(workshopDate.toISOString().split('T')[0]);
      // console.log(tomorrow.toISOString().split('T')[0]);
      // Check if the workshop date is on or after the current date
      if (
        workshopDate.toISOString().split("T")[0] >=
        tomorrow.toISOString().split("T")[0]
      ) {
        if (!grouped[workshop.collegeName]) {
          grouped[workshop.collegeName] = [];
        }
        grouped[workshop.collegeName].push(workshop);
      }
    });

    return grouped;
  };
  const groupWorkshopsByCollegeDate = (workshops) => {
    const groupeddate = {};
    workshops.forEach((workshop) => {
      const workshopDate = new Date(workshop.workshopDate);
      // console.log(workshopDate);
      // console.log(tomorrow.toISOString().split('T')[0]);
      // Check if the workshop date is on or after the current date
      if (
        workshopDate.toISOString().split("T")[0] ===
        tomorrow.toISOString().split("T")[0]
      ) {
        if (!groupeddate[workshop.collegeName]) {
          groupeddate[workshop.collegeName] = [];
        }
        groupeddate[workshop.collegeName].push(workshop);
      }
    });

    return groupeddate;
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredColleges = {};

    Object.keys(collegesWithWorkshops).forEach((collegeName) => {
      const workshops = collegesWithWorkshops[collegeName];

      // Filter workshops by date
      const workshopsOnSelectedDate = workshops.filter((workshop) => {
        const formattedWorkshopDate = workshop.workshopDate.substring(0, 10);
        return formattedWorkshopDate === selectedWeekDate;
      });

      if (
        (collegeName.toLowerCase().includes(searchTerm) ||
          workshopsOnSelectedDate.length > 0) &&
        (selectedWeekDate === "" || workshopsOnSelectedDate.length > 0)
      ) {
        filteredColleges[collegeName] = workshopsOnSelectedDate;
      }
    });
  };
  function getButtonClass(availableSeats,totalSeats) {
    const percentageAvailable = (availableSeats / totalSeats) * 100;
  //console.log(percentageAvailable);
    if (percentageAvailable > 60) {
      return 'btn-primary'; // Green
    } else if (percentageAvailable > 0 && percentageAvailable<60) {
      return 'btn-warning'; // Orange
    } else {
      return 'btn-danger'; // Red
    }
  }
  
  

  const handleWorkshopChange = (event) => {
    const selectedWorkshop = event.target.value;
    setSelectedWorkshop(selectedWorkshop);
    const filteredColleges = {};
    Object.keys(collegesWithWorkshops).forEach((collegeName) => {
      const workshops = collegesWithWorkshops[collegeName];
      if (
        selectedWorkshop === "" ||
        workshops.some(
          (workshop) => workshop.workshopTitle === selectedWorkshop
        )
      ) {
        filteredColleges[collegeName] = workshops;
      }
    });
    setFilteredColleges(filteredColleges);
  };

  function convertDateFormat(inputDate) {
    const dateComponents = inputDate.split("/");

    if (dateComponents.length !== 3) {
      return null; // Invalid date format
    }

    const day = dateComponents[0];
    const month = dateComponents[1];
    const year = dateComponents[2];

    const newDate = new Date(`${year}-${month}-${day}`);
    newDate.setDate(newDate.getDate()+1 );
    if (isNaN(newDate.getTime())) {
      return null; // Invalid date
    }

    const formattedDate = newDate.toISOString().split("T")[0];

    return formattedDate;
  }
  function convertToIST(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Month is zero-based, so add 1.
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Step 4: Modify the handleDateChange function to use selectedWeekDate
  // Step 4: Modify the handleDateChange function to use selectedWeekDate
  const handleDateChange = (date) => {
    const formattedSelectedDate = convertDateFormat(date);
    setSelectedWeekDate(date); // Set the selected date
     console.log('time',formattedSelectedDate);
    // Filter the colleges based on the selected date
    const filteredColleges = {};

    Object.keys(collegesWithWorkshops).forEach((collegeName) => {
      const workshops = collegesWithWorkshops[collegeName];
      const workshopsOnSelectedDate = workshops.filter((workshop) => {
        const formattedWorkshopDate = workshop.workshopDate.split("T")[0];
        return formattedWorkshopDate === formattedSelectedDate;
      });

      if (formattedSelectedDate === "" || workshopsOnSelectedDate.length > 0) {
        filteredColleges[collegeName] = workshopsOnSelectedDate;
      }
    });

    setFilteredColleges(filteredColleges);
  };

  const weekDates = generateWeekDates();

  const handleWeekDateClick = (date) => {
    handleDateChange(date);
    setSelectedWeekDate(date); // Set the selected date
  };

  return (
    <>
    <div className="container space">
      <h1>Workshop List</h1>
      <div className="d-flex mb-3">
        <div className="p-2 filters ">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by College Name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="ms-auto workshop-filter">
          <label htmlFor="workshopSelect">Filter by Workshop:</label>
          <select
            id="workshopSelect"
            value={selectedWorkshop}
            onChange={handleWorkshopChange}
          >
            <option value="">All Workshops</option>
            {uniqueWorkshops.map((workshopTitle, index) => (
              <option key={index} value={workshopTitle}>
                {workshopTitle}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div id="week-schedule" className="week-schedule">
        {weekDates.map((date, index) => (
          <button
            key={index}
            className={`day ${date === selectedWeekDate ? "selected" : ""}`} // Apply the 'selected' class if it's the selected date
            onClick={() => handleWeekDateClick(date)}
          >
            {date}
          </button>
        ))}
      </div>

      {loading ? (
       <div class="d-flex justify-content-center space">
       <div class="spinner-border" role="status">
         <span class="visually-hidden">Loading...</span>
       </div>
     </div>
      ) : (
        <div className="row">
  {Object.keys(filteredColleges).map((collegeName, collegeIndex) => (
    <div key={collegeIndex} className="col-sm-6 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <b>College Name: </b>
            {collegeName}
          </h5>
          <div className="workshop-list">
            {filteredColleges[collegeName].map((workshop, workshopIndex) => (
              <div key={workshopIndex} className="workshop-item">
                <h5 className="card-subtitle mb-2 ">
                  Workshop: <b>{workshop.workshopTitle}</b>
                  <br />
                  Date: {workshop.workshopDate.split("T")[0]}
                 
                </h5>
                {workshop.workshopSeats - workshop.booking > 0 ? (
                  <Link
                    to={`/booking?collegeName=${encodeURIComponent(
                      collegeName
                    )}&workshopTitle=${encodeURIComponent(
                      workshop.workshopTitle
                    )}&workshopDate=${encodeURIComponent(
                      workshop.workshopDate.split("T")[0]
                    )}`}
                  >
                    <button
                      className={`btn ${getButtonClass(
                        workshop.workshopSeats - workshop.booking,
                        workshop.workshopSeats
                      )}`}
                    >
                      Book now
                    </button>
                  </Link>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleNoSeatsPopup(workshopIndex)} // Pass the workshopIndex to identify the specific workshop
                  >
                    Book Now
                  </button>
                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      )}


    </div>
    <Popup
    show={showNoSeatsPopup}
    title="No Seats Available"
    content="Unfortunately, all seats for this workshop have been booked."
    buttonText="OK"
    onClose={() => setShowNoSeatsPopup(false)}
  />
  </>
  );
}

export default CollegeList;
