import { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  // State
  const [currentPage, setCurrentPage] = useState("home");
  // Handle page change

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Hero props
  let heroProps;
  if (currentPage === "home") {
    heroProps = {
      backgroundUrl: "/src/assets/img/barnsley.webp",
      title: "Title",
      subtitle: "Subtitle",
      btnText: "Button",
    };
  } else if (currentPage === "about") {
    heroProps = {
      backgroundUrl: "/src/assets/img/barnsley.webp",
      title: "About title",
      subtitle: "About Subtitle",
    };
  } else if (currentPage === "portfolio") {
    heroProps = {
      backgroundUrl: "/src/assets/img/barnsley.webp",
      title: "Portfolio title",
      subtitle: "Portfolio Subtitle",
    };
  } else if (currentPage === "contact") {
    heroProps = {
      backgroundUrl: "/src/assets/img/barnsley.webp",
      title: "Contact title",
      subtitle: "Contact Subtitle",
    };
  }

  return (
    <>
      <Header>
        <Hero {...heroProps}>
          <Navbar onPageChange={handlePageChange} />
        </Hero>
      </Header>
    </>
  );
}

export default App;
