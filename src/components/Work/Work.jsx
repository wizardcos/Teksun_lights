import React from "react";
import { heroImages } from "../../utils/data";
import css from "./Work.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, zoomIn, fadeIn } from "../../utils/motion";

// Stagger animation for each text block
const textStagger = {
  hidden: { opacity: 0, x: -100 },
  show: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

// Parent variant to stagger children
const staggerParent = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger delay between children
    },
  },
};

const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="hero"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* Text Section */}
        <motion.div variants={staggerParent} className={css.textSection}>
          <motion.span
            className={css.primaryText}
            custom={1}
            variants={textStagger}
          >
            Exceptional Services Tailored to Your Needs
          </motion.span>

          <motion.h3
            className={css.primaryTex}
            custom={2}
            variants={textStagger}
          >
            <img src="./dui.png" alt="tick picture" />
            We provide solutions for lighting in different places
          </motion.h3>

          <motion.p
            className={css.secondaryText}
            custom={3}
            variants={textStagger}
          >
            The prospect of converting and upgrading to LED lighting can be a
            daunting one. It is vital to have a firm understanding of the
            existing lighting conditions.
          </motion.p>

          <motion.h3
            className={css.primaryTex}
            custom={4}
            variants={textStagger}
          >
            <img src="./dui.png" alt="tick picture" />
            We can customize a variety of led products
          </motion.h3>

          <motion.p
            className={css.secondaryText}
            custom={5}
            variants={textStagger}
          >
            This involves detailed pre-construction planning crucial to
            successful construction and on-time delivery, and allows the client
            and team a clear pathway to the bidding process.
          </motion.p>
        </motion.div>

        {/* Scrollable Image Section */}
        <motion.div variants={zoomIn(1, 1)} className={css.imageScroller}>
          {heroImages.map((image, i) => (
            <motion.div
              key={i}
              className={css.imageWrapper}
              variants={fadeIn("up", "tween", 0.5, 1)}
            >
              <img
                src={image.img}
                alt={`Slide ${i}`}
                className={css.image}
                style={{ borderRadius: "10px" }} // Curved edges
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
