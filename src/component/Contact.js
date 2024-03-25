import React, { useState } from 'react';
import Navbar from './Navbar';
import './Style_home.css';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state to true while submitting
    if (!name || !email || !message) {
      toast.error('Please fill out all fields.');
      return;
    }
    try {
      // Example: Call an API to submit the form data
      await axios.post('http://localhost:4000/Adan/send-email', {
        name,
        email,
        message
      });
      // Reset form fields and loading state after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
      // Show success message
      toast.success('we will get back to you soon', {
        position: "top-center",
        autoClose: 5000,
        });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Set error state and reset loading state if submission fails
      // setError('Error submitting form. Please try again later.');
      toast.error("Error submitting form. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        });
      setLoading(false);
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className='h1-primary space center'> Contact-us</h1>
      </div>
      <div className='container-lg center'>
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
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
                  <label htmlFor="text">Message:</label>
                  <textarea
                    type="text"
                    id="message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
                        <span className="sr-only">Submit...</span>
                      </div>
                      <span className="ml-2">Submit...</span>
                    </div>
                  ) : (
                    "Submit Now"
                  )}
                </button>
              </form>
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
