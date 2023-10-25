import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CollegeRegistration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    collegeName: "",
    JntuCode: "",
    Address: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);
    try {
      const response = await axios.post(
        "https://backend-rho-one.vercel.app/Adan/registerclg",
        {
          formData
        }
      );

      if (response.status === 200) {
        navigate(`/Login?emailclg=${formData.email}&passwordclg=${formData.password}`);
      }
      
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
  <div className="form-group">
    <label htmlFor="Address">Address:</label>
    <input
      type="text"
      id="Address"
      className="form-control"
      name="Address"
      placeholder="Enter your address"
      value={formData.Address}
      onChange={(e) =>
        setFormData({ ...formData, Address: e.target.value })
      }
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="JntuCode">JNTU Code:</label>
    <input
      type="text"
      id="JntuCode"
      className="form-control"
      name="JntuCode"
      placeholder="Enter your JNTU code"
      value={formData.JntuCode}
      onChange={(e) =>
        setFormData({ ...formData, JntuCode: e.target.value })
      }
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="website">Website:</label>
    <input
      type="text"
      id="website"
      className="form-control"
      name="website"
      placeholder="Enter your website (optional)"
      value={formData.website}
      onChange={(e) =>
        setFormData({ ...formData, website: e.target.value })
      }
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

export default CollegeRegistration;
