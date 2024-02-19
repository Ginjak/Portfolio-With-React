import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer py-3">
        <div className="container-xxl  d-flex justify-content-center justify-content-md-end">
          <a href="https://github.com/Ginjak" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gintaras-jakimavicius-766a5151/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:development.gjwebdev.co.uk">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="../../src/assets/data/Gintaras_Jakimavicius.pdf"
            download="Gintaras_Jakimavicius.pdf"
          >
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
