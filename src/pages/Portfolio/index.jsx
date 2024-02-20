import React from "react";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
const Portfolio = () => {
  return (
    <>
      <Header>
        <h1 className="portfolio-title container-xxl py-3">Recent project</h1>
        <Projects />
      </Header>
      <Footer />
    </>
  );
};

export default Portfolio;
