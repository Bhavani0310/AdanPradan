import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style_home.css";
import { Link } from "react-router-dom";
function CollegeList() {
  const [collegesWithWorkshops, setCollegesWithWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  const [filteredColleges, setFilteredColleges] = useState({});
  const [uniqueWorkshops, setUniqueWorkshops] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://backend-rho-one.vercel.app/Adan/workshops"
        ); // Replace with your server's endpoint
        const groupedWorkshops = groupWorkshopsByCollege(response.data);
        setCollegesWithWorkshops(groupedWorkshops);

        // Extract unique workshops
        const uniqueWorkshopSet = new Set();
        response.data.forEach((workshop) => {
          uniqueWorkshopSet.add(workshop.workshopTitle);
        });
        setUniqueWorkshops(Array.from(uniqueWorkshopSet));

        setFilteredColleges(groupedWorkshops);
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
      if (!grouped[workshop.collegeName]) {
        grouped[workshop.collegeName] = [];
      }
      grouped[workshop.collegeName].push(workshop);
    });
    return grouped;
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredColleges = {};
    Object.keys(collegesWithWorkshops).forEach((collegeName) => {
      if (collegeName.toLowerCase().includes(searchTerm)) {
        filteredColleges[collegeName] = collegesWithWorkshops[collegeName];
      }
    });
    setFilteredColleges(filteredColleges);
  };

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

  return (
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {Object.keys(filteredColleges).map((collegeName, collegeIndex) => (
            <div key={collegeIndex} className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">College Name: {collegeName}</h5>
                  <div className="workshop-list">
                    {filteredColleges[collegeName].map(
                      (workshop, workshopIndex) => (
                        <div key={workshopIndex} className="workshop-item">
                          <h5 className="card-subtitle mb-2 text-muted">
                            Workshop: {workshop.workshopTitle}
                          </h5>
                          <Link
                            to={`/booking?collegeName=${encodeURIComponent(
                              collegeName
                            )}&workshopTitle=${encodeURIComponent(
                              workshop.workshopTitle
                            )}`}
                          >
                            <button className="btn btn-primary">
                              Book now
                            </button>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CollegeList;
