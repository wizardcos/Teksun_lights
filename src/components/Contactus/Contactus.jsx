import React, { useState } from "react";
import css from "./ContactUs.module.scss";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_xw53s4a", // Service ID
        "template_pb9ujr9", // Template ID
        templateParams,
        "UmvWK7KiJVDv9nrZ_" // Public Key (formerly User ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent!");
          // Clear the form fields
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  // Framer Motion variants for animation
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={css.contactUsContainer}>
      {/* Top sections: About, Contact, Address */}
      <div className={css.topSections}>
        <motion.div
          className={css.infoSection}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={css.about}>
            <h3>About</h3>
            <p>
              We are a premier choice for outdoor illumination. From
              streetlights to fountain lights, we offer durable,
              energy-efficient solutions to brighten up your outdoor spaces with
              style and reliability.
            </p>
          </div>
          <div className={css.contact}>
            <h3>Contact</h3>
            <p>+92 301 4635138</p>
            <p>+92 41 8506092</p>
            <p>+92 300 4765794</p>
            <p>+86 123 17609001</p>
            <p>info@teksunlights.com</p>
            <p>Mon - Sat: 8:00 am - 6:00 pm</p>
          </div>
          <div className={css.address}>
            <h3>Address</h3>
            <p>
              Head Office: Bhagewal Road, Near Wapda Town, Faisalabad, Pakistan
            </p>
            <p>
              China Office: 7F-P20-3, No. 56, Xinxingzhong Road, Guzhentown,
            </p>
            <p>Zhongshan City, China</p>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        className={css.formMapContainer}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className={css.contactForm}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Map Section */}
        <div className={css.map}>
          <h2>Our Location</h2>
          <iframe
            title="Teksun Lights Factory Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.6158624665504!2d73.17008059999999!3d31.479751600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226f0b50785f65%3A0x276e7a3dad72f439!2sTeksun%20Lights%20Factory!5e0!3m2!1sen!2s!4v1726390874425!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default contactus;
