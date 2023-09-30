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
    workshops: [
      {
        workshopTitle: "",
        workshopDescription: "",
        workshopSeats: "",
        workshopTiming: "",
      },
    ],
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const workshopsCopy = [...formData.workshops];
    workshopsCopy[index][field] = value;
    setFormData({ ...formData, workshops: workshopsCopy });
  };

  const handleAddWorkshop = () => {
    setFormData({
      ...formData,
      workshops: [
        ...formData.workshops,
        {
          workshopTitle: "",
          workshopDescription: "",
          workshopSeats: "",
          workshopTiming: null,
        },
      ],
    });
  };

  const handleRemoveWorkshop = (index) => {
    const workshopsCopy = [...formData.workshops];
    workshopsCopy.splice(index, 1);
    setFormData({ ...formData, workshops: workshopsCopy });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-rho-one.vercel.app/Adan/registerclg",
        {
          ...formData,
          workshops: formData.workshops.filter((workshop) => workshop.workshopTitle !== ""),
        }
      );

      if (response.status === 200) {
        alert("Registration successful!");
        navigate("/");
      }
      console.log(response.message);
    } catch (error) {
      console.error("Registration Error:", error.message);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">College Registration</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegistration}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <input
                  type="text"
                  name="collegeName"
                  placeholder="collegeName"
                  value={formData.collegeName}
                  onChange={(e) =>
                    setFormData({ ...formData, collegeName: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={formData.Address}
                  onChange={(e) =>
                    setFormData({ ...formData, Address: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="JntuCode"
                  placeholder="JntuCode"
                  value={formData.JntuCode}
                  onChange={(e) =>
                    setFormData({ ...formData, JntuCode: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="website"
                  placeholder="website"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
                {formData.workshops.map((workshop, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      name={`workshopTitle`}
                      placeholder={`Workshop Title ${index + 1}`}
                      value={workshop.workshopTitle}
                      onChange={(e) => handleInputChange(e, index, 'workshopTitle')}
                    />
                    <input
                      type="text"
                      name={`workshopDescription`}
                      placeholder={`Workshop Description ${index + 1}`}
                      value={workshop.workshopDescription}
                      onChange={(e) => handleInputChange(e, index, 'workshopDescription')}
                    />
                    <input
                      type="text"
                      name={`workshopSeats`}
                      placeholder={`Workshop Seats ${index + 1}`}
                      value={workshop.workshopSeats}
                      onChange={(e) => handleInputChange(e, index, 'workshopSeats')}
                    />
                    <input
                      type="time"
                      name={`workshopTiming`}
                      placeholder={`Workshop Timing ${index + 1}`}
                      value={workshop.workshopTiming}
                      onChange={(e) => handleInputChange(e, index, 'workshopTiming')}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveWorkshop(index)}
                    >
                      Remove Workshop
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddWorkshop}>
                  Add Workshop
                </button>
                
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

export default CollegeRegistration;
