import React, { useState } from "react";
import css from "./ContactUs.module.scss";
import emailjs from "emailjs-com"; // Make sure you have installed EmailJS using npm: `npm install emailjs-com`

const ContactUs = () => {
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

  return (
    <div className={css.contactUsContainer}>
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
    </div>
  );
};

export default ContactUs;
