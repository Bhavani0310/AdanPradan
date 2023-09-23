import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import { useAuth } from './component/Authcontext';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import FAQ from './component/Faq';
import ContactForm from './component/Contact';
import CollegeUser from './component/CollegeUser';
import User_student from './component/User_student';
import NavbarUser from './component/NavbarUser';
import NavbarClg from './component/NavbarClg';
import CollegeStd from './component/CollegeStd';
import BookingPage from './component/Booking';

function App() {
  const { authenticated } = useAuth(); // Access the authenticated status from the context

  return (
    <>
      <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<><Home /></> } />
          <Route path="LoginClg" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="College" element={<><NavbarClg /><CollegeUser /></>} />
          {/* Conditionally render the "Student" route based on authentication */}
          {authenticated ? (
            <Route path="Student" element={<><NavbarUser /><User_student /></>} />
          ) : (
            // Redirect to the home page if not authenticated
           null
          )}
          <Route path="stdfaq" element={<><NavbarUser /><FAQ /></>} />
          <Route path="colleges" element={<><NavbarUser /><CollegeStd /></>} />
          <Route path="booking" element={<><NavbarUser /><BookingPage /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
