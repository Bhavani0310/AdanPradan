import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CollegeStd() {
  const [data, setData] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  useEffect(() => {
    axios.get("https://backend-rho-one.vercel.app/Adan/workshops").then((response) => {
      setData(response.data.data);
      setWorkshops(response.data.data.workshop);
      console.log(JSON.stringify(response.data.data));
    });
  }, []);
  const workshopsByCollege = {};

  data.forEach((clg) => {
    if (!workshopsByCollege[clg.collegeName]) {
      workshopsByCollege[clg.collegeName] = [];
    }

    workshopsByCollege[clg.collegeName].push(clg.workshop);
  });
  return (
    <div className="container my-5 p-5 space">
      <ul
        className="nav nav-tabs justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="college1-tab"
            data-bs-toggle="tab"
            data-bs-target="#college1"
            type="button"
            role="tab"
            aria-controls="college1"
            aria-selected="true"
          >
            <div className="display-3 itemcolor">COLLEGE</div>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="workshop1-tab"
            data-bs-toggle="tab"
            data-bs-target="#workshop1"
            type="button"
            role="tab"
            aria-controls="workshop1"
            aria-selected="false"
          >
            <div className="display-3 itemcolor">WORKSHOP</div>
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="college1"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">College Name</th>
                <th scope="col">WorkShop</th>

                {/* <th scope="col">Link</th> */}
                {/* <th scope="col">IdNo</th> */}
              </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>

                  <td>{row.collegeName}</td>
                  <td>{row.workshop}</td>
                  <td>
                    <Link to="/booking">
                      <button
                        type="button"
                        className="btn btn-primary btn-md "
                        id="register"
                      >
                        {" "}
                        Book a Lab{" "}
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade"
          id="workshop1"
          role="tabpanel"
          aria-labelledby="false"
        >
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Workshop</th>
                <th scope="col">Available Seats</th>
                <th scope="col">College</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>

                  <td>{row.collegeName}</td>
                  <td>{row.workshop}</td>
                  <td>
                    <Link to="/booking">
                      <button
                        type="button"
                        className="btn btn-primary btn-md "
                        id="register"
                      >
                        {" "}
                        Book a Lab{" "}
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default CollegeStd;
