import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './Authcontext';
import { useLocation } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import './Style_home.css'; // Ensure this imports your CSS file

export default function Login() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const emailParam = queryParams.get('email') || 'bhavani123@gmail.com'; // Default email
  const passwordParam = queryParams.get('password') || '123456';
  const [email, setEmail] = useState(emailParam);
  const [password, setPassword] = useState(passwordParam);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Navigate to Google OAuth URL
    const { data: { url } } = await axios.get('https://o-auth-adan.vercel.app/auth/url');
    window.location.assign(url);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Your login logic here
      const response = await axios.post(
        'http://localhost:4000/Adan/login',
        { email, password }
      );
      
      const token = response.data.token;
      await login(token);
      localStorage.setItem('token', token);
      localStorage.setItem('Id', response.data.user._id);

      navigate('/Student');
    } catch (error) {
      if (error.response && error.response.status == 400) {
        setError(error.response.data.message);
      } else if (error.response && error.response.status == 500) {
        setError(error.response.data.message);
      } else {
        console.error("Login Error:", error);
        setError(error.message);
      }
    }  finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {/* Centering the buttons */}
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button
                type="submit"
                className="btn btn-primary mb-3" // Add margin for separation
                disabled={loading}
              >
                {loading ? (
                  <div className="d-flex align-items-center">
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Logging in...</span>
                    </div>
                    <span className="ml-2">Logging in...</span>
                  </div>
                ) : (
                  'Login'
                )}
              </button>

              {/* Google login button */}
              <GoogleButton
                onClick={handleLogin}
                className='google-login-btn'
                type='dark'
                disabled={loading} // Prevent interaction if loading
              />
            </div>
            
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
