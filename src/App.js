import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import { useAuth } from './component/Authcontext';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import CollegeRegistration from './component/RegisterClg';
import FAQ from './component/Faq';
import ContactForm from './component/Contact';
import CollegeUser from './component/CollegeUser';
import User_student from './component/User_student';
import NavbarUser from './component/NavbarUser';
import NavbarClg from './component/NavbarClg';
import CollegeStd from './component/CollegeStd';
import BookingPage from './component/Booking';
import CollegeList from './component/CollegeList';
import Loginclg from './component/Loginclg';
import CollegeProfile from './component/CollegeProfile';
import WorkshopForm from './component/WorkshopForm';
import Workshop from './component/Workshop';
import Loginslider from './component/Loginslider';
import RegistrationTabs from './component/RegistrationTabs';
import LoginTabs from './component/LoginTabs';
import Upcoming from './component/Upcoming';

function App() {
  const { authenticated } = useAuth(); // Access the authenticated status from the context

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></> } />
          <Route path="Login" element={<> <Navbar /><LoginTabs /></>} />
          <Route path="Register" element={<><Navbar /><RegistrationTabs /></>} />
          <Route path="faq" element={<><Navbar/><FAQ /></>} />
          <Route path="contact" element={<ContactForm />} />
          
          {/* Conditionally render the "Student" route based on authentication */}
          {authenticated ? (
            <>
            <Route path="College" element={<><NavbarUser /><CollegeList /></>} />
            <Route path="Student" element={<><NavbarUser /><User_student /></>} />
             <Route path="booking" element={<><NavbarUser /><BookingPage /></>} />
             </>
          ) : (
            // Redirect to the home page if not authenticated
            <Route path="*" element={<> <Navbar /><Login /></>} />
          )}
           {authenticated ? (
            <>
                <Route path="clg" element={<><NavbarClg /><CollegeUser/></>} />
                <Route path="workshops" element={<><NavbarClg /><Workshop/></>} />
             </>
          ) : (
            // Redirect to the home page if not authenticated
            <Route path="*" element={<> <Navbar /><Loginclg /></>} />
          )}
          <Route path="stdfaq" element={<><NavbarUser /><FAQ /></>} />
          <Route path="upcoming" element={<><NavbarClg /><Upcoming /></>} />

          <Route path="sample" element={<><NavbarUser /><WorkshopForm /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
