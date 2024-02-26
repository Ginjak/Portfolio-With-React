import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../../assets/data/projects.json";
import "./project.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(portfolioData);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Change the URL to /portfolio/project-name when a project is clicked
    const projectSlug = project.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
    window.history.pushState(null, null, `/portfolio/${projectSlug}`);
  };

  const handleReturnClick = () => {
    setSelectedProject(null);
    // Change the URL back to /portfolio when returning to the main portfolio view
    window.history.pushState(null, null, "/portfolio");
  };

  if (selectedProject) {
    // Render single project when clicked on "View Details" button
    return (
      <>
        <div className="project-details projects-wraper  d-flex justify-content-center align-items-center">
          <div className="card single-project my-3">
            <div className="row g-0">
              <img
                src={selectedProject.image}
                className="img-fluid"
                alt="card-image"
              ></img>
              <div className="card-body pb-4">
                <h5 className="card-title  text-white ">
                  {selectedProject.title}
                </h5>
                <div className="text-white d-flex my-3 flex-wrap">
                  {selectedProject.languages.map((value, index) => (
                    <div key={index} className="button-lang me-2 mt-1">
                      {value}
                    </div>
                  ))}
                </div>
                <div className="text-white ">
                  Short description: <p>{selectedProject.description}</p>
                </div>
                <div className="links mb-5">
                  <a
                    className="card-link"
                    href={"https://github.com/Ginjak/" + selectedProject.github}
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    className="card-link"
                    href={selectedProject.link}
                    target="_blank"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
                <Link
                  to="/portfolio"
                  className="custom-btn"
                  onClick={handleReturnClick}
                >
                  Return to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // Render all project on portfolio page
  return (
    <>
      <div className="projects-wraper">
        <div className="container-xxl pb-3 pb-lg-5 ">
          <h1 className="portfolio-title py-3 text-white text-uppercase">
            Recent project
          </h1>
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
                        <h5 className="fs-6">Technologies</h5>
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
                        <button
                          className="custom-btn mt-3"
                          onClick={() => handleProjectClick(project)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
