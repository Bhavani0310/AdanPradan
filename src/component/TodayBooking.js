import React, { useState, useEffect } from "react";
import mongoose from "mongoose";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from "axios"; // Import Axios or your preferred HTTP client.
const TodayBooking = (msg) => {
  const [workshopsData, setWorkshopsData] = useState([]);
  const limit = msg?.no || workshopsData.length;

  const today = new Date();
  const istOptions = { timeZone: "Asia/Kolkata" };
  const formattedDate = today.toLocaleDateString("en-IN", istOptions);
  function convertDateFormat(inputDate) {
    const dateComponents = inputDate.split("/");

    if (dateComponents.length !== 3) {
      return null; // Invalid date format
    }

    const day = dateComponents[0];
    const month = dateComponents[1];
    const year = dateComponents[2];

    const newDate = new Date(`${year}-${month}-${day}`);

    if (isNaN(newDate.getTime())) {
      return null; // Invalid date
    }

    const formattedDate = newDate.toISOString().split("T")[0];

    return formattedDate;
  }
  useEffect(() => {
    const fetchWorkshopData = async () => {
      try {

        const response = await axios.get(
          `https://backend-rho-one.vercel.app/Adan/workshopsdetails/${mongoose.Types.ObjectId.createFromHexString(
            localStorage.getItem("Id")
          )}`
        );
        console.log(response.data);
        const filteredIds = response.data
          .filter((item) => {
            const workshops = item.workshops;
            if (workshops) {
              // Check if any of the workshop dates match the current date
              return workshops.some((workshop) => {
                const workshopDate = new Date(workshop.Date);
                const datePortion = workshopDate.toISOString().split("T")[0];
                const date=convertDateFormat(formattedDate);
                return datePortion === date;
              });
            }
            return false;
          })
          .map((item) => ({
            _id: item._id,
            workshops: item.workshops.filter((workshop) => {
              const workshopDate = new Date(workshop.Date);
              const date=convertDateFormat(formattedDate);
              return (
                workshopDate.toISOString().split("T")[0] ===
                date
              );
            }),
            studentname: item.students.map((student) => student.name),
            studentcollege: item.students.map((student) => student.collegeName),
          }));
          
        
        console.log(filteredIds);
        setWorkshopsData(filteredIds);
      } catch (error) {
        console.error("Error fetching workshop data: ", error);
      }
    };
    fetchWorkshopData();
  }, []);

  const downloadStudentList = (id) => {
    const workshop = workshopsData.find((workshop) => workshop._id === id);

    const doc = new jsPDF();

    doc.text(`Workshop ID: ${workshop._id}`, 10, 10);
    doc.text('Date: ' + new Date(workshop.workshops[0].Date).toDateString(), 10, 20);

    const table = [];
    table.push(['S.No', 'Name', 'College']);
    workshop.studentname.forEach((name, i) => {
      table.push([i + 1, name, workshop.studentcollege[i]]);
    });

    doc.autoTable({
      startY: 30,
      head: [table[0]],
      body: table.slice(1),
      tableLineColor: [0, 0, 0],
      tableLineWidth: 0.2,
    });

    doc.save(`student_list_${workshop._id}.pdf`);
  };
  return (
    <>
     <div>
        
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{
            backgroundColor: "white",
           
            paddingTop: "20px",
            paddingBottom: "20px",
            margin: "20px",
          }}
        >
          {workshopsData.length === 0 ? (
            <div className="container center sapce">
              <h1>No Booking</h1>
            </div>
          ) : (
            workshopsData.map((workshop) => (
              <div key={workshop._id} className="col">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">{workshop._id}</h1>
                    <hr />
                    <h2 className="card-title">Student's List </h2>
                    <h6 className="card-text">
                      <ol type="1">
                        
                        {workshop.studentname.slice(0, 3).map((booking, i) => (
                          <li key={i}>  
                            Name: {booking} - College: {workshop.studentcollege[i]}
                          </li>
                        ))}
                      </ol>
                    </h6>
                     <button
                        type="button"
                        className="btn btn-primary  float-end"
                        onClick={() => downloadStudentList(workshop._id)}
                      >
                        Download List
                      </button>
                  </div>
                  <div className="card-footer text-center">
                 
                      {""}
                    <button
                      type="button"
                      className="btn btn-primary btn-theme float-end"
                      data-bs-toggle="modal"
                      data-bs-target={`#myModal-${workshop._id}`}
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {workshopsData.map((workshop) => (
          <div key={workshop._id} className="modal" id={`myModal-${workshop._id}`}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Today's List</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <ol type="1">
                    {workshop.studentname.map((booking, i) => (
                      <li key={i}>
                        Name: {booking} - College: {workshop.studentcollege[i]}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
    
  );
};

export default TodayBooking;
