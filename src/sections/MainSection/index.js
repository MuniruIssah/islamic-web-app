import React from "react";
import "./styles.scss";
import MainDisplay from "./subSections/MainDisplay";
import Profile from "./subSections/Profile";
const MainSection = () => {
  return (
    <section className="mainSection">
      <MainDisplay />
      <Profile />
    </section>
  );
};

export default MainSection;
