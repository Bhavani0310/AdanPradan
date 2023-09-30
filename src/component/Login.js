import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './Authcontext';
import './Style_home.css';

export default function Login() {   
  const [email, setEmail] = useState('bhavani123@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {

      // Retrieve the token from local storage
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'https://backend-rho-one.vercel.app/Adan/login',
        {
          email: email,
          password: password,
        },
        {
          // Include the token in the "Authorization" header
          headers: {
            'Authorization': `Bearer ${token}`, // Add "Bearer " prefix
          },
        }
      );

      // Assuming the JWT token is included in the response as response.data.token
      const newToken = response.data.token;

      await login(newToken);
      localStorage.setItem('token', newToken);
      localStorage.setItem('Id',response.data.user._id);
      
      // console.log('login Response:', response.data);
      // console.log(JSON.stringify(response.data))
      navigate('/Student');
    } catch (error) {
      setError('Failed to log in');
      console.log(error.message);
    }
  };


  return (
    <>
<div className="container space py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          
    <div className="card ">
      <div className="card-header">
        <h2 className="card-title">Login</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Log in</button>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}
