import React from "react";
import { useState, useEffect } from "react";
import portfolioData from "../../assets/data/projects.json";
import "./project.css";
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(portfolioData);
  }, []);

  return (
    <>
      <div className="container-xxl py-3">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((project) => {
            return (
              <div className="col project" key={project.id}>
                <div className="card position-relative">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt="card-image"
                  ></img>
                  <div className="card-img-overlay d-flex flex-column justify-content-between">
                    <h5 className="card-title text-center position-relative text-white mt-2 mt-lg-4">
                      {project.title}
                    </h5>
                    <div className="info-wraper text-white pb-0 py-lg-3">
                      <div className="languages d-flex flex-wrap my-2 my-lg-3">
                        {project.languages.map((value, index) => (
                          <div key={index} className="button-lang me-2 mt-1">
                            {value}
                          </div>
                        ))}
                      </div>
                      <div className="links">
                        <a
                          className="card-link"
                          href={"https://github.com/Ginjak/" + project.github}
                          target="_blank"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                          className="card-link"
                          href={project.link}
                          target="_blank"
                        >
                          <i className="fa-solid fa-globe"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
