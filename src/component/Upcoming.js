import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Style_home.css';

const Upcoming = () => {
  const [workshopsData, setWorkshopsData] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [loading, setLoading] = useState(true);
  const today = new Date();
  const istOptions = { timeZone: "Asia/Kolkata" };
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // Get the date for tomorrow
  const formattedDate = tomorrow.toLocaleDateString("en-IN", istOptions);
  const [selectedDate, setSelectedDate] = useState(formattedDate); // Set the default date to tomorrow
console.log(selectedDate);


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
  // Define the generateWeekDates function
  function generateWeekDates() {
    const weekDates = [];
    // Generate dates for the next 7 days in IST starting from tomorrow
    for (let i = 0; i < 7; i++) {
      const date = new Date(tomorrow);
      date.setDate(tomorrow.getDate() + i);

      // Format the date as "YYYY-MM-DD" in IST
      const formattedDate = date.toLocaleDateString("en-IN", istOptions);

      weekDates.push(formattedDate);
    }

    return weekDates;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend-rho-one.vercel.app/Adan/workshopsdetails/${mongoose.Types.ObjectId.createFromHexString(
            localStorage.getItem('Id')
          )}`
        );

        const filteredData = response.data.filter((item) => {
          const workshops = item.workshops;
          if (workshops) {
            return workshops.some((workshop) => {
              const workshopDate = new Date(workshop.Date);
              const datePortion = workshopDate.toISOString().split("T")[0];
            const date=convertDateFormat(selectedDate);
              return datePortion >= date; // Compare with the selected date
            });
          }
          return false;
        }).map((item) => ({
          _id: item._id,
          workshops: item.workshops.filter((workshop) => {
            const workshopDate = new Date(workshop.Date);
            const date=convertDateFormat(selectedDate);
            return workshopDate.toISOString().split("T")[0] >= date;
          }),
          studentname: item.students.map((student) => student.name),
          studentcollege: item.students.map((student) => student.collegeName),
        }));

        setWorkshopsData(filteredData);
        setFilteredColleges(filteredData);
        setLoading(false);
      } catch (error) {
        console.error('Error in fetching upcoming workshops data', error);
      }
    };

    fetchData();
  }, [selectedDate]); // Add selectedDate as a dependency

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

  const toggleShowAllStudents = () => {
    setShowAllStudents(!showAllStudents);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const renderDateButtons = () => {
    const dates = generateWeekDates();
    return dates.map((date, index) => (
        <div id="week-schedule" className="week-schedule">
      <button
        key={index}
        className={`day ${date === selectedDate ? 'selected' : ''}`}
        onClick={() => handleDateSelect(date)}
      >
        {date}
      </button></div>
    ));
  };

  return (
    <div>
      <div className="container my-4 center">
        {renderDateButtons()}
      </div>
      {loading ? (
        <div className="d-flex justify-content-center space">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{
            backgroundColor: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
            margin: "20px",
          }}
        >
          {filteredColleges.length === 0 ? (
            <div className="container center">
              <h1>No Booking</h1>
            </div>
          ) : (
            filteredColleges.map((workshop) => (
              <div key={workshop._id} className="col">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">{workshop._id}</h1>
                    <hr />
                    <h2 className="card-title">Student's List </h2>
                    <h6 className="card-text">
                      <ol type="1">
                        {showAllStudents
                          ? workshop.studentname.map((booking, i) => (
                              <li key={i}>
                                Name: {booking} - College: {workshop.studentcollege[i]}
                              </li>
                            ))
                          : workshop.studentname.slice(0, 3).map((booking, i) => (
                              <li key={i}>
                                Name: {booking} - College: {workshop.studentcollege[i]}
                              </li>
                            ))}
                      </ol>
                      {workshop.studentname.length > 3 && (
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={toggleShowAllStudents}
                        >
                          {showAllStudents ? 'View Less' : 'View More'}
                        </button>
                      )}
                      <button
                        type="button"
                        className="btn btn-primary btn-theme float-end"
                        onClick={() => downloadStudentList(workshop._id)}
                      >
                        Download Student List (PDF)
                      </button>
                    </h6>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
