import React from "react";
import Experties from "./components/Experties/Experties";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
const Home = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
    </div>
  );
};

export default Home;
