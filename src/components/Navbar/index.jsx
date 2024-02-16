import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ onPageChange }) {
  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-transparent navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => onPageChange("about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => onPageChange("portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link"
                  href="#"
                  onClick={() => onPageChange("contact")}
                >
                  Contact
                </a> */}
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
