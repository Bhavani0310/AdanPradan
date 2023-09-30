import React, { useState } from 'react';
import './Booking.css';
import axios from 'axios';
import { useAuth } from './Authcontext';
import mongoose from 'mongoose';
import { useLocation } from 'react-router-dom';

function BookingPage() {
  const [colleges, setColleges] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [bookingError, setBookingError] = useState('');
  const { user } = useAuth();

  const location = useLocation(); // Use useLocation to access query parameters
  const searchParams = new URLSearchParams(location.search);
  const collegeName = searchParams.get('collegeName');
  const workshopTitle = searchParams.get('workshopTitle');

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setSelectedDate(selectedDate);

    // Calculate the date that is one month in the future
    const oneMonthAheadDate = new Date();
    oneMonthAheadDate.setMonth(oneMonthAheadDate.getMonth() + 1);

    // Compare the selected date with one month ahead
    if (selectedDate > oneMonthAheadDate) {
      setBookingError('Please select a date that is at least one month in the future.');
    } else if (selectedDate < new Date()) {
      setBookingError('Please select a future date, not a past date.');
    } else {
      setBookingError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookingError) {
      // If there's a booking error, do not proceed with the submission
      return;
    }

    const BookingClg = event.target.elements.CollegeName.value;
    const Date = selectedDate.toISOString().split('T')[0];
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
        console.error(error);
        alert('Error saving form data');
      });
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
            <input type="date" name="Date" id="Date" required onChange={handleDateChange} />
            {bookingError && <p className="error" style={{"color":"red"}}>{bookingError}</p>}
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
