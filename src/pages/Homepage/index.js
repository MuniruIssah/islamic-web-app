import React from "react";
import Header from "../../sections/Header";
import MainSection from "../../sections/MainSection";
import Navigation from "../../sections/Navigation";
import "./styles.scss";
const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="navAndMain">
        <Navigation />
        <MainSection />
      </div>
    </div>
  );
};

export default Homepage;
