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
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <h1>{project.title}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Projects;
