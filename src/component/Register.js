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
  const [loading, setLoading] = useState(false);
 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    try {
      const response = await axios.post('https://backend-rho-one.vercel.app/Adan/register', formData); 

//     console.log('Registration Response:', response.data);
    // console.log(formData.email);
      navigate(`/Login?email=${formData.email}&password=${formData.password}`); 
    } catch (error) {
      if(error.response && error.response.status == 400){
        setError(error.response.data.message);
      }else if(error.response && error.response.status == 500){
        setError(error.response.data.message);
      }
      else{
         console.error('Registration Error:', error);
      setError(error.message);
      }
      
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <form onSubmit={handleRegistration} className="registration-form">
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      className="form-control"
      name="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      className="form-control"
      name="password"
      placeholder="Enter your password"
      value={formData.password}
      onChange={(e) =>
        setFormData({ ...formData, password: e.target.value })
      }
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      className="form-control"
      name="name"
      placeholder="Enter your Name"
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="collegeName">College Name:</label>
    <input
      type="text"
      id="collegeName"
      className="form-control"
      name="collegeName"
      placeholder="Enter your college name"
      value={formData.collegeName}
      onChange={(e) =>
        setFormData({ ...formData, collegeName: e.target.value })
      }
      required
    />
  </div>
 
 
 
  <button type="submit" className="btn btn-danger" disabled={loading}>
    {loading ? (
      <div className="d-flex align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Registering...</span>
        </div>
        <span className="ml-2">Registering...</span>
      </div>
    ) : (
      'Register'
    )}
  </button>
</form>

             
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      
  );
};

export default StudentRegistration;
