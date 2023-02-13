import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import Login from './component/Login'
import Register from './component/Register';
import FAQ from './component/Faq';
import ContactForm from './component/Contact';
import Student_user from './component/Student_user';


function App() {
  return (
     <>
      <Router>

          <Routes>
          <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register/>} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactForm/>} />
        <Route path="Student" element={<Student_user/>} />
          </Routes>
      
        </Router>
        
            
     </>
  );
}

export default App;
