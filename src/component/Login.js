import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Authcontext";
import "./Style_home.css";
import { useLocation } from "react-router-dom";

export default function Login() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const emailParam = queryParams.get("email") || "bhavani123@gmail.com"; // Provide a default email
  const passwordParam = queryParams.get("password") || "123456";
  const [email, setEmail] = useState(emailParam);
  const [password, setPassword] = useState(passwordParam);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://backend-rho-one.vercel.app/Adan/login",
        {
          email: email,
          password: password,
        },
        {
          // Include the token in the "Authorization" header
          headers: {
            Authorization: `Bearer ${token}`, // Add "Bearer " prefix
          },
        }
      );

      // Assuming the JWT token is included in the response as response.data.token
      const newToken = response.data.token;

      await login(newToken);
      localStorage.setItem("token", newToken);
      localStorage.setItem("Id", response.data.user._id);

      // console.log('login Response:', response.data);
      // console.log(JSON.stringify(response.data))
      navigate("/Student");
    } catch (error) {
      if (error.response && error.response.status == 400) {
        setError(error.response.data.message);
      } else if (error.response && error.response.status == 500) {
        setError(error.response.data.message);
      } else {
        console.error("Login Error:", error);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container my-4">
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

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <div className="d-flex align-items-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Login...</span>
                    </div>
                    <span className="ml-2">Login...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
