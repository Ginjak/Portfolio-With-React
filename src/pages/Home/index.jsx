import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
function Home() {
  return (
    <>
      <Header>
        <p>Testingggg</p>
        <Hero
          backgroundUrl="/src/assets/img/barnsley.webp"
          title="Title"
          subtitle="Subtitle"
          btnText="Button"
          btnUrl="https://google.co.uk"
        />
      </Header>
    </>
  );
}

export default Home;
