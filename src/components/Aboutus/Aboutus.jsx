import React from "react";
import { motion } from "framer-motion";
import css from "./aboutus.module.scss"; // Create a separate CSS file for styling

const AboutUs = () => {
  return (
    <div className={css.about_us_container}>
      <section className={css.company_profile}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={css.company_info}
        >
          <h2>Company Profile And Development</h2>
          <p>
            TEKSUN LIGHT PVT. LTD founded in Dec 2012, specializes in R&D,
            manufacturing, and marketing in the field of LED lighting products.
            It has earned honors such as National Hi-tech Enterprise and is a
            top-branded enterprise in Pakistan. We independently design and
            manufacture LED products ranging from High Power LED Street Light,
            High Power LED Tunnel Light, LED Corn Light, LED High Bay, LED Down
            Light, LED Tube Light to the other LED lights, which qualify us to
            be one of the largest manufacturers, suppliers and exporters of LED
            lighting and solar lights in China, as well as the leading provider
            in energy-saving solutions.
          </p>
          <button className={css.learn_more}>Learn More</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className={css.stats}
        >
          <div className={css.stat_box}>
            <h3>100</h3>
            <p>Employees Worldwide</p>
          </div>
          <div className={css.stat_box}>
            <h3>126</h3>
            <p>Satisfaction Clients On</p>
          </div>
          <div className={css.stat_box}>
            <h3>12</h3>
            <p>Years Experience</p>
          </div>
          <div className={css.stat_box}>
            <h3>50+</h3>
            <p>Projects In 10+ Countries</p>
          </div>
        </motion.div>
      </section>

      <section className={css.certificates}>
        <h2>Our Certificates</h2>
        <motion.div
          className={css.certificate_grid}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src="./showCase1.jpg" alt="Certificate 1" />
          <img src="./showCase1.jpg" alt="Certificate 2" />
          <img src="./showCase1.jpg" alt="Certificate 3" />
        </motion.div>
      </section>

      <section className={css.factory_tour}>
        <h2>Factory Tour</h2>
        <motion.div
          className={css.factory_images}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <img src="./showCase1.jpg" alt="Factory Office" />
          <img src="./showCase1.jpg" alt="Factory Machines" />
        </motion.div>
      </section>
      <section className={css.youtube_video}>
        <h2>Watch Our Factory Operations</h2>
        <div className={css.video_wrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/T2jWqS1dDkk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
