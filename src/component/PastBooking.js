import React, { useState, useEffect } from "react";
import mongoose from "mongoose";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from "axios";

const PastBooking = (msg) => {
  const [pastWorkshopsData, setPastWorkshopsData] = useState([]);
  const limit = msg?.no || pastWorkshopsData.length;

  useEffect(() => {
    const fetchPastWorkshopData = async () => {
      try {
        const response = await axios.get(
          `https://backend-rho-one.vercel.app/Adan/workshopsdetails/${mongoose.Types.ObjectId.createFromHexString(
            localStorage.getItem("Id")
          )}`
        );

        const filteredIds = response.data
          .filter((item) => {
            const workshops = item.workshops;
            if (workshops) {
              return workshops.some((workshop) => {
                const workshopDate = new Date(workshop.Date);
                const currentDate = new Date();
                return workshopDate < currentDate;
              });
            }
            return false;
          })
          .map((item) => ({
            _id: item._id,
            workshops: item.workshops.filter((workshop) => {
              const workshopDate = new Date(workshop.Date);
              const currentDate = new Date();
              return workshopDate < currentDate;
            }),
            studentname: item.students.map((student) => student.name),
            studentcollege: item.students.map((student) => student.collegeName),
          }));

        setPastWorkshopsData(filteredIds);
      } catch (error) {
        console.error("Error fetching workshop data: ", error);
      }
    };

    fetchPastWorkshopData();
  }, []);

  const downloadStudentList = (id) => {
    const workshop = pastWorkshopsData.find((workshop) => workshop._id === id);

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
          {pastWorkshopsData.length === 0 ? (
            <div className="container center space">
              <h1>No Past Bookings</h1>
            </div>
          ) : (
            pastWorkshopsData.map((workshop) => (
              <div key={workshop._id} className="col">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">{workshop._id}</h1>
                    <h4>{workshop.workshops[0].Date.split('T')[0]}</h4>
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
                      className="btn btn-primary float-end"
                      onClick={() => downloadStudentList(workshop._id)}
                    >
                      Download List
                    </button>
                  </div>
                  
                </div>
              </div>
            ))
          )}
        </div>
        {pastWorkshopsData.map((workshop) => (
          <div key={workshop._id} className="modal" id={`myModal-${workshop._id}`}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Past Booking List</h4>
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

export default PastBooking;

