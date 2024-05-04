import React from 'react';
  import { Route, BrowserRouter as Router, Routes,useNavigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import { useEffect } from "react";
import { useAuth } from './component/Authcontext';
import Home from './component/Home';
import Login from './component/Login';
import FAQ from './component/Faq';
import Contactform from './component/Contact';
import CollegeUser from './component/CollegeUser';
import User_student from './component/User_student';
import NavbarUser from './component/NavbarUser';
import NavbarClg from './component/NavbarClg';
import CollegeStd from './component/CollegeStd';
import BookingPage from './component/Booking';
import CollegeList from './component/CollegeList';
import Loginclg from './component/Loginclg';
import WorkshopForm from './component/WorkshopForm';
import RegistrationTabs from './component/RegistrationTabs';
import LoginTabs from './component/LoginTabs';
import Upcoming from './component/Upcoming';
import BookingClg from './component/BookingClg';
import StudentProfile from './component/StudentProfile';
import Read from './component/Read';
import Faq_home from './component/Faq_home';
import HeroSection from './component/HeroSection';
import Slider from './component/Slider';
import Callback from './component/Callback';


const AuthChecker = ({ children }) => {
  const { authenticated, checkLoginState } = useAuth(); // From your AuthContext
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    const checkAuthStatus = async () => {
      await checkLoginState(); // Check login state from server
      
      if (authenticated) {
        navigate("/Student"); // Redirect to /Student if authenticated
      } else {
        navigate("/"); // Redirect to login if not authenticated
      }
    };

    checkAuthStatus(); // Perform the check when the component is mounted
  }, [authenticated, checkLoginState, navigate]); // Dependencies include all variables used in the effect

  return null; // This component doesn't render anything directly
};
const LoginAuthChecker = ({ children }) => {
  const { authenticated, checkLoginState } = useAuth(); // From your AuthContext
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    const checkAuthStatus = async () => {
      await checkLoginState(); // Check login state from server
      
      if (authenticated) {
        navigate("/Student"); // Redirect to /Student if authenticated
      } else {
        navigate("/login"); // Redirect to login if not authenticated
      }
    };

    checkAuthStatus(); // Perform the check when the component is mounted
  }, [authenticated, checkLoginState, navigate]); // Dependencies include all variables used in the effect

  return null; // This component doesn't render anything directly
};

const RegisterAuthChecker = ({ children }) => {
  const { authenticated, checkLoginState } = useAuth(); // From your AuthContext
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    const checkAuthStatus = async () => {
      await checkLoginState(); // Check login state from server
      
      if (authenticated) {
        navigate("/Student"); // Redirect to /Student if authenticated
      } else {
        navigate("/Register"); // Redirect to login if not authenticated
      }
    };

    checkAuthStatus(); // Perform the check when the component is mounted
  }, [authenticated, checkLoginState, navigate]); // Dependencies include all variables used in the effect

  return null; // This component doesn't render anything directly
};
function App() {
  const { authenticated } = useAuth(); // Access the authenticated status from the context
   
  return (
    <>
      <Router>
        <Routes>
            
          <Route path="/" element={<><AuthChecker/><HeroSection/></> } />
          <Route path="Login" element={<> <Navbar /><LoginAuthChecker/><LoginTabs /></>} />
          <Route path="Register" element={<><Navbar /><RegisterAuthChecker/><RegistrationTabs /></>} />
          <Route path="faq" element={<><Navbar/><Faq_home/></>} />
          <Route path="contact" element={<><Navbar/><Contactform/></>} />
          <Route path="img" element={<><Slider/></>} />
          <Route path="callback" element={<><Callback/></>} />

          {/* Conditionally render the "Student" route based on authentication */}
          {(authenticated) ? (
            <>
            <Route path="College" element={<><NavbarUser /><CollegeList /></>} />
            <Route path="Student" element={<><NavbarUser /><User_student /></>} />
             <Route path="booking" element={<><NavbarUser /><BookingPage /></>} />
             <Route path="dashboard" element={<><NavbarUser /><StudentProfile /></>} />

             </>
          ) : (
            // Redirect to the home page if not authenticated
            <Route path="*" element={<> <Navbar /><HeroSection/></>} />
          )}
           {authenticated ? (
            <>
                <Route path="clg" element={<><NavbarClg /><CollegeUser/></>} />
                <Route path="workshops" element={<><NavbarClg /><WorkshopForm/></>} />
                <Route path="bookingdata" element={<><NavbarClg /><BookingClg/></>} />
             </>
          ) : (
            // Redirect to the home page if not authenticated
            <Route path="*" element={<> <Navbar /><Loginclg /></>} />
          )}
          <Route path="stdfaq" element={<><NavbarUser /><FAQ /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
