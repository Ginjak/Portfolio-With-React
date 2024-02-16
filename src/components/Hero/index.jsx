import React from "react";

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
        className="hero"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        {children}
        <div className="container-xxl h-100">
          <div className="row h-100">
            <div className="col-12 d-flex flex-column justify-content-center">
              {title && <h1 className="hero-title">{title}</h1>}
              {subtitle && <p className="hero-subtitle">{subtitle}</p>}
              {btnText && (
                <div className="d-grid gap-2 d-md-block">
                  <a href={btnUrl} className="btn btn-primary">
                    {btnText}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
