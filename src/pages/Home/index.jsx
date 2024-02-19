import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
function Home() {
  return (
    <>
      <Header>
        <Hero
          backgroundUrl="./src/assets/img/hero_background.jpg"
          title="Hey there! I'm Gintaras Jakimavicius"
          subtitle="Your expert front-end magician, shaping stunning web experiences."
          btnText="Let's connect"
          btnUrl="mailto:development@gjwebdev.co.uk"
        />
      </Header>
      <Footer />
    </>
  );
}

export default Home;
