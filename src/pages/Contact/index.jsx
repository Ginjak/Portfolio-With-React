import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import ContactDetails from "../../components/ContactDetails";
import "./contact.css";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container-xxl">
          <div className="row gx-0 contact-wraper py-3 d-flex align-items-center position-relative">
            <div className="col-md-6 contact-details mb-3 mb-md-0">
              <ContactDetails />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
