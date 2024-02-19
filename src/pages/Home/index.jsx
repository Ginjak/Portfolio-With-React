import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
function Home() {
  return (
    <>
      <Header>
        <Hero
          backgroundUrl="/src/assets/img/barnsley.webp"
          title="Title"
          subtitle="Subtitle"
          btnText="Button"
          btnUrl="https://google.co.uk"
        />
      </Header>
      <Footer />
    </>
  );
}

export default Home;
