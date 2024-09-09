import React from "react";
import { heroImages, sliderSetting } from "../../utils/data"; // Assuming data.js has heroImages
import css from "./Hero.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { staggerChildren, textVariant } from "../../utils/motion";

const Hero = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="hero"></a>

      <motion.div
        variants={textVariant}
        className={`innerWidth ${css.container}`}
      >
        <Slider {...sliderSetting} className={css.slider}>
          {heroImages.map((image, i) => (
            <div key={i} className={css.heroSlide}>
              <img src={image.img} alt={`Slide ${i}`} />
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
