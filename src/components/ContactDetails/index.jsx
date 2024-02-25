import React from "react";
import "./contactDetails.css";
const ContactDetails = () => {
  return (
    <>
      <h2 className="text-white text-center text-md-start">Contact details</h2>
      <h5>Address</h5>
      <div className="address-details-wraper d-flex mb-3">
        <i className="fa-solid fa-house d-block"></i>
        <div className="address ms-2">
          <p className="mb-0">London Road</p>
          <p className="mb-0">London</p>
          <p className="mb-0">Greater London</p>
          <p className="mb-0">W1 1E</p>
        </div>
      </div>
      <h5>Social media</h5>
      <div className="social-media-wraper  mb-3">
        <a href="https://github.com/Ginjak" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gintaras-jakimavicius-766a5151"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="mailto:development@gjwebdev.co.uk" target="_blank">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <h5>Download my CV</h5>
      <a
        href="../../src/assets/data/Gintaras_Jakimavicius.pdf"
        download="Gintaras_Jakimavicius.pdf"
      >
        <i className="fa-solid fa-download download-cv"></i>
      </a>
    </>
  );
};

export default ContactDetails;
