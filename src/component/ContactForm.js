import React, { useState } from "react";
import "./ContactForm.css"; // Import your CSS file for styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactForm = () => {
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Your form submission logic here
    const formData = new FormData(e.target);
  const name = e.target.elements.name.value;
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;
  
    // Check if any of the fields are empty
    if (!name || !email || !message) {
      toast.error('Please fill out all fields.');
      return;
    }
    try {
      // Example: Call an API to submit the form data
      const response = await axios.post(
        "https://backend-rho-one.vercel.app/Adan/send-email",
        formData
      );
      // Show success message
      toast.success('we will get back to you soon', {
        position: "top-center",
        autoClose: 5000,
        });
        setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error message if submission fails
      toast.error("Error submitting form. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        });
        setLoading(false);
    }
  };

  function toggleChatbox() {
    const chatboxContainer = document.getElementById("chatboxContainer");
    chatboxContainer.classList.toggle("active");
    setIsActive(isActive);
  }

  return (
    <div className="formbold-main-wrapper">
      <div className="w-full">
        <div class="chatbox-container" id="chatboxContainer">
          <div className={`formbold-form-wrapper${isActive ? "-active" : ""}`}>
            <div className="formbold-form-header">
              <h3>Let's chat?</h3>
              <button onClick={toggleChatbox}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                  />
                </svg>
              </button>
            </div>
            {isActive && (
              <form onSubmit={handleSubmit} className="formbold-chatbox-form">
                <div class="formbold-mb-5">
                  <label htmlFor="name" class="formbold-form-label">
                    {" "}
                    Your Name{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleChange}
                    class="formbold-form-input"
                  />
                </div>

                <div class="formbold-mb-5">
                  <label htmlFor="email" class="formbold-form-label">
                    {" "}
                    Email Address{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    value={email}
                    onChange={handleChange}
                    class="formbold-form-input"
                  />
                </div>

                <div class="formbold-mb-5">
                  <label htmlFor="message" class="formbold-form-label">
                    {" "}
                    Message{" "}
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Explain you queries"
                    class="formbold-form-input"
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <button type="submit" class="formbold-btn w-full">
                    Submit
                  </button>
                  
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="formbold-action-buttons">
          <button className="formbold-action-btn" onClick={toggleChatbox}>
            <span class="formbold-cross-icon">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                  fill="white"
                />
              </svg>
            </span>
            <span class="formbold-chat-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ContactForm;
