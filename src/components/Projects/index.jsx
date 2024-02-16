import React from "react";
import { useState, useEffect } from "react";
import portfolioData from "../../assets/data/projects.json";
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
              <div className="col" key={project.id}>
                <div className="card">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt="card-image"
                  ></img>
                  <div className="card-img-overlay">
                    <h5 className="card-title">{project.title}</h5>
                    <div className="info-wraper">
                      <div className="languages">
                        {project.languages.map((value, index) => (
                          <div key={index} className="button">
                            {value}
                          </div>
                        ))}
                      </div>
                      <div className="links"></div>
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
