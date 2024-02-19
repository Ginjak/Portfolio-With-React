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
      <h1>Portfolio page</h1>
      <div className="container-xxl">
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
                    <h5 className="card-title position-relative text-white">
                      {project.title}
                    </h5>
                    <div className="info-wraper text-white">
                      <div className="languages d-flex">
                        {project.languages.map((value, index) => (
                          <div key={index} className="button">
                            {value}
                          </div>
                        ))}
                      </div>
                      <div className="links">
                        <a
                          href={"https://github.com/Ginjak/" + project.github}
                          target="_blank"
                        >
                          <i class="fa-brands fa-github"></i>
                        </a>
                        <a href={project.link} target="_blank">
                          <i class="fa-solid fa-globe"></i>
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
