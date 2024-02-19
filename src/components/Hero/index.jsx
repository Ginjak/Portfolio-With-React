import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./hero.css";
function Hero({
  children,
  backgroundUrl,
  title = "",
  subtitle = "",
  btnText = "",
  btnUrl = "",
}) {
  return (
    <>
      <div
        className="hero position-relative"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        {children}
        <div className="container-xxl h-100">
          <div className="row h-100">
            <div className="col-md-8 d-flex flex-column justify-content-center position-relative text-white">
              {title && (
                <h1 className="hero-title text-center text-md-start">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="hero-subtitle text-center text-md-start">
                  {subtitle}
                </p>
              )}
              {btnText && (
                <div className="gap-2 text-center text-md-start d-md-block mt-3">
                  <a href={btnUrl} className="custom-btn">
                    {btnText}
                  </a>
                </div>
              )}
            </div>
            <div className="d-none d-md-flex col-4 d-flex flex-column justify-content-center align-items-start position-relative">
              <div className="hero-profile"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
