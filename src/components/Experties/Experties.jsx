import React from "react";
import { motion } from "framer-motion";
import css from "./Experties.module.scss"; // Assuming you have your styles in place
import { products } from "../../utils/data";

// Define animation variants for heading and cards
const fromLeft = {
  hidden: { opacity: 0, x: -100 }, // Start hidden and to the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Slide in from left
};

const zoomIn = {
  hidden: { scale: 1, opacity: 0 }, // Start invisible
  hover: { scale: 1.1, transition: { duration: 0.3 } }, // Zoom on hover
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }, // Fade in when visible
};

const Experties = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`innerWidth ${css.container}`}>
        {/* Heading */}
        <motion.h1 variants={fromLeft} className={css.heading}>
          Feature Products
        </motion.h1>

        {/* Products Row */}
        <div className={css.productsGrid}>
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fromLeft} // Use the fromLeft animation for product cards
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // Re-trigger each time products are in view
              whileHover="hover"
              className={css.productCard}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className={css.productImage}
              />
              <div className={css.productInfo}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experties;
