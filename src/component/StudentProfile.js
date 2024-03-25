import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style_home.css';

const StudentProfile = () => {
  const [image, setImage] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentId = localStorage.getItem("Id");
        const response = await axios.get(`http://localhost:4000/Adan/getstudents/${studentId}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };

    fetchStudent();
  }, []);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', image);

      await axios.post(`http://localhost:4000/Adan/submitdata/${student._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  };

  return (
    <div className="space">
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleSubmit}>Upload</button>

      {student && (
        <div className="card space">
          <div className="card-content">
            <h3>Student Name: {student.name}</h3>
            <p>Department: {student.collegeName}</p>
            <img src={student.imageName} alt={student.name} style={{ maxWidth: '160px', height: '250px' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
