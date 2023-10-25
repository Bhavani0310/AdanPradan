import React, { useEffect, useState } from 'react';
import './Booking.css';
import axios from 'axios';
import mongoose from 'mongoose';
import { useLocation } from 'react-router-dom';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(''); // Use this state to manage the selected date
  const [Error, setError] = useState('');
  const location = useLocation(); // Use useLocation to access query parameters
  const searchParams = new URLSearchParams(location.search);
  const collegeName = searchParams.get('collegeName');
  const workshopTitle = searchParams.get('workshopTitle');
    const setDate = searchParams.get('workshopDate');
  console.log(setDate);
  const [loading, setLoading] = useState(false);
  // Function to convert a date to IST
  const convertToIST = (dateString) => {
    const date = new Date(dateString);
    // Convert the date to IST by adding 5 hours and 30 minutes (19800000 milliseconds)
    date.setTime(date.getTime() + 19800000);
    return date.toISOString().split('T')[0]; // Convert the date to a string in "yyyy-MM-dd" format
  };

  useEffect(()=>{
   
    setSelectedDate(setDate);
  
})
  const handleDateChange = (event) => {
    // If you want to allow manual date selection, you can use event.target.value
    const newDate = event.target.value;
    const ISTDate = convertToIST(newDate);
    setSelectedDate(ISTDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const BookingClg = event.target.elements.CollegeName.value;
    const Date = searchParams.get('workshopDate');
    const slotTime = event.target.elements.Time.value;
    const user = mongoose.Types.ObjectId.createFromHexString(localStorage.getItem("Id"));

    axios
      .post('https://backend-rho-one.vercel.app/Adan/booking', {
        collegeName: BookingClg,
        workshopTitle,
        Date,
        slotTime,
        user,
      })
      .then((response) => {
        console.log(response);
        alert('Form data saved successfully');
      })
      .catch((error) => {
        if (error.response && error.response.status == 400) {
          setError(error.response.data.message);
        } else if (error.response && error.response.status == 500) {
          setError(error.response.data.message);
        } else {
          console.error("Login Error:", error);
          setError(error.message);
        }
      })
      .finally(()=>{
        setLoading(false);
      })
  };

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
              <option value={collegeName}>{collegeName}</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="selectworkshop">Workshop:</label>
            <select name="Workshop" id="selectworkshop" required>
              <option value={workshopTitle}>{workshopTitle}</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="Date">Date: </label>
            <input type="date" name="Date" id="Date" required onChange={handleDateChange} value={selectedDate} readOnly/>
          </div>
          <div className="form-row">
            <label htmlFor="slot-timings">Slot timings:</label>
            <select name="Time" id="slot-timings" required>
              <option value="9:00 AM-12:00 PM">9:00 AM- 12:00 PM</option>
              <option value="2:00 PM-5:00 PM">2:00 PM- 5:00 PM</option>
            </select>
          </div>
          <div className="form-row">
          <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? (
            <div>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span role="status">Booking...</span>
            </div>
          ) : (
            'Book Now'
          )}
        </button>
          </div>
        </form>
        {Error && <div className="alert alert-danger">{Error}</div>}
      </div>
    </div>
  );
}

export default BookingPage;
