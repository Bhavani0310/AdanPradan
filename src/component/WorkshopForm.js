import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mongoose from "mongoose";
const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    workshops: [
      {
        college: mongoose.Types.ObjectId.createFromHexString(localStorage.getItem("Id")),
        workshopTitle: "",
        workshopDate: "",
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
          college:mongoose.Types.ObjectId.createFromHexString(localStorage.getItem("Id")),
          workshopTitle: "",
          workshopDate: "",
          workshopSeats: "",
          workshopTiming: "",
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
   console.log(formData.workshops);
    try {
      const response = await axios.post(
        "https://backend-rho-one.vercel.app/Adan/addworkshops",
        {
          workshops: formData.workshops.filter(
            (workshop) => workshop.workshopTitle !== ""
          ),

        },
      );

      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/clg");
      }
      console.log(response.message);
    } catch (error) {
      console.error("Registration Error:", error.message);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container my-6 space">
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Add Workshops</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegistration}>
                {formData.workshops.map((workshop, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      name={`workshopTitle`}
                      placeholder={`Workshop Title ${index + 1}`}
                      value={workshop.workshopTitle}
                      onChange={(e) => handleInputChange(e, index, "workshopTitle")}
                    />
                    <input
                      type="date"
                      name={`workshopDate`}
                      placeholder={`Workshop Date ${index + 1}`}
                      value={workshop.workshopDate}
                      onChange={(e) => handleInputChange(e, index, "workshopDate")}
                    />
                    <input
                      type="text"
                      name={`workshopSeats`}
                      placeholder={`Workshop Seats ${index + 1}`}
                      value={workshop.workshopSeats}
                      onChange={(e) => handleInputChange(e, index, "workshopSeats")}
                    />
                    <input
                      type="time"
                      name={`workshopTiming`}
                      placeholder={`Workshop Timing ${index + 1}`}
                      value={workshop.workshopTiming}
                      onChange={(e) => handleInputChange(e, index, "workshopTiming")}
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

                <button type="submit">save</button>
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

export default WorkshopForm;
