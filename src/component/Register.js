import React, { useState } from 'react';
import axios from 'axios'; 

import { useNavigate } from 'react-router-dom';

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    studentId: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault(); 
    
    try {
      const response = await axios.post('https://backend-rho-one.vercel.app/Adan/register', formData); 
      console.log('Registration Response:', response.data);
      navigate('/student'); 
    } catch (error) {
      console.error('Registration Error:', error);
      setError('Registration failed. Please try again.'); 
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Student Registration</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegistration}>
              <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="collegeName"
          placeholder="collegeName"
          value={formData.collegeName}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
              </form>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default StudentRegistration;
