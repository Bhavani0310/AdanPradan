// WorkshopPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Style_home.css"
const CollegeProfile = () => {
  const [workshops, setWorkshops] = useState([]);
  const [workshop, setWorkshop] = useState({ title: '', date: '', time: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkshop({ ...workshop, [name]: value });
  };

  const addWorkshop = async () => {
    try {
      const response = await axios.post("http://localhost:4000/Adan/addworkshops", workshop);
      setWorkshops([...workshops, response.data]);
      setWorkshop({ title: '', date: '', time: '' });
    } catch (error) {
      console.error('Error adding workshop:', error);
    }
  };

  const removeWorkshop = async (id) => {
    try {
      await axios.delete("http:localhost:4000/Adan/workshops/${workshops[id]._id}");
      const updatedWorkshops = [...workshops];
      updatedWorkshops.splice(id, 1);
      setWorkshops(updatedWorkshops);
    } catch (error) {
      console.error('Error removing workshop:', error);
    }
  };

  useEffect(() => {
    // Fetch existing workshops from the server on component mount.
    async function fetchWorkshops() {
      try {
        const response = await axios.get('http://localhost:4000/Adan/getworkshops');
        // Sort workshops by date in ascending order
        response.data.sort((a, b) => (a.date < b.date ? -1 : 1));
        setWorkshops(response.data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    }

    fetchWorkshops();
  }, []);

  return (
    <div>
      <div className="space">
        <h2>Add Workshop</h2>
        <input
          type="text"
          name="title"
          placeholder="Workshop Title"
          value={workshop.title}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={workshop.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={workshop.time}
          onChange={handleInputChange}
        />
        <button onClick={addWorkshop}>Add Workshop</button>
      </div>
      <div>
        <h2>Workshops</h2>
        <ul>
          {workshops.map((workshop, index) => (
            <li key={workshop._id}>
              {workshop.title} - {workshop.date} at {workshop.time}
              <button onClick={() => removeWorkshop(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeProfile;
