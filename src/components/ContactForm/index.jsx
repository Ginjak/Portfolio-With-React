import React, { useState } from "react";
import "./contactForm.css";
const ContactForm = () => {
  // Store data
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  // Set state for Error Message
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, email, message } = formData;

    // Check if all fields are filled
    if (
      firstName.trim() !== "" &&
      email.trim() !== "" &&
      message.trim() !== ""
    ) {
      console.log("Form submitted:", formData);
      // Reset the form after submission
      setFormData({
        firstName: "",
        email: "",
        message: "",
      });
      setErrorMessage("");
    } else {
      setErrorMessage("Fill up all necessary fields");
    }
  };

  return (
    <div>
      <h2 className="text-white text-center text-md-start">Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder="Your name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        {errorMessage && (
          <p className="error-message text-danger fw-bolder">{errorMessage}</p>
        )}

        <button className="custom-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
