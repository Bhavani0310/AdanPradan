import React from "react";
import "./Booking.css";
import axios from "axios";

function BookingPage() {
  const [colleges, setColleges] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const BookingClg = event.target.elements.CollegeName.value;
    const Date = event.target.elements.Date.value;
    const slotTime = event.target.elements.Time.value;
    
    axios.post("http://localhost:4000/Adan/clg", {
    BookingClg,
      Date,
      slotTime
    })
    .then((response) => {
      console.log(response);
      alert("Form data saved successfully");
    })
    .catch((error) => {
      console.error(error);
      alert("Error saving form data");
    });
  };

  // React.useEffect(() => {
  //   axios.get("http://localhost:4000/Adan/colleges/list").then((response) => {
  //     setColleges(response.data);
  //   });
  // }, []);
  // React.useEffect(() => {
  //   axios.get("http://localhost:4000/Adan/colleges/list").then((response) => {
  //     console.log(response.data); // Check the data being received
  //     setColleges(response.data);
  //   });
  // }, []);
  
  React.useEffect(() => {
    axios.get("https://backend-rho-one.vercel.app/Adan/colleges/list")
      .then((response) => {
        console.log(response.data.data);
        setColleges(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  return (
    <div className="space">
      <div className="booking-page-container space">
        <h1>
          Get Slot by <span className="booking-page-name">ADAN PRADAN</span>
        </h1>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="selectcollege">College:</label>
            <select name="CollegeName" id="selectcollege" required>
              {colleges.map((college) => (
                <option key={college.collegeName} value={college.collegeName}>
                  {college.collegeName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="Date">Date: </label>
            <input type="date" name="Date" id="Date" required />
          </div>
          <div className="form-row">
            <label htmlFor="slot-timings">Slot timings:</label>
            <select name="Time" id="slot-timings" required>
              <option value="9:00 AM-12:00 PM">9:00 AM- 12:00 PM</option>
              <option value="2:00 PM-5:00 PM">2:00 PM- 5:00 PM</option>
            </select>
          </div>
          <div className="form-row">
            <input type="submit" value="Submit Now" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
