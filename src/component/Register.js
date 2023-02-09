import React, { useState } from "react";
import Navbar from "./Navbar";
import './Style_home.css';
import {Link} from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Please enter your name.";
        }

        if (!formData.email) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.password) {
            newErrors.password = "Please enter a password.";
        }

        if (formData.password !== formData.password2) {
            newErrors.password2 = "Passwords do not match.";
        }

        setErrors(newErrors);

        if (!Object.keys(newErrors).length) {
            // Submit form data
        }
    };

    return (
        <>
        <Navbar/>
            <div className="container loginform ">
                <div className="space center">
                    <form onSubmit={handleSubmit} style={{width:"1000px"}}>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="name">Enter your Full Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.name}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.email}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.password}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password2 ? "is-invalid" : ""}`}
                                id="password2"
                                name="password2"
                                value={formData.password2}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.password2}</div>
                        </div>
                        <Link to="/Student"><button type="submit" className="btn btn-primary">
                            Submit
                        </button></Link>
                    </form>
                    </div>
            </div>
        </>
    );
};


export default Register;