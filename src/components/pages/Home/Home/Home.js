import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import ReviewSection from "../ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <header>
        <Navigation></Navigation>
        <Banner></Banner>
      </header>
      <main>
        <AboutSection></AboutSection>
        <Featured></Featured>
        <ReviewSection></ReviewSection>
      </main>
    </div>
  );
};

export default Home;
