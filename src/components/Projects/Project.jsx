import React from "react";
import { motion } from "framer-motion";
import css from "./Project.module.scss";

const Project = ({ title, description, imgSrc }) => {
  return (
    <div>
      <motion.div
        className={css.card}
        initial="initial"
        whileHover="hover"
        variants={cardVariants}
      >
        <motion.img
          src={imgSrc}
          alt={title}
          className={css.cardImage}
          variants={imageVariants}
        />
        <motion.div className={css.cardContent} variants={textVariants}>
          <motion.h3>{title}</motion.h3>
          <motion.p>{description}</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const cardVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  initial: { filter: "grayscale(100%)", scale: 1 },
  hover: { filter: "grayscale(0%)", scale: 1.1 },
};

const textVariants = {
  initial: { y: 0, opacity: 1 },
  hover: { y: -20, opacity: 0, transition: { duration: 0.2 } },
};

export default Project;
