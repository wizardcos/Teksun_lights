import React from "react";
import Project from "./components/Projects/Project";
import { cardData } from "./utils/data";
import css from "./styles/App.module.scss";
const Projects = () => {
  return (
    <div className={css.card_container}>
      {cardData.map((card, index) => (
        <Project key={index} {...card} />
      ))}
    </div>
  );
};

export default Projects;
