import axios from "axios";
import React, { useState } from "react";
import { showAlert } from "../util/alerts";
import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/emails/send-contact-email`,
        formData
      );

      if (res.data.status === "success") {
        showAlert("success", "Contact sent  successfully", 2);
      }
    } catch (error) {
      console.log("error", error.response.data.message || error);
      showAlert("error", error.response.data.message, 3);
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>Send a message</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength="500"
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>Feel free to reach out via DM or email as well</p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/nebuladgraphics"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fab fa-instagram ${styles.ig}`}></i> Instagram:{" "}
              <span>@NebuladGraphics</span>
            </a>
            <a href="mailto:nebulad@gmail.com">
              <i className={`fas fa-envelope ${styles.mail}`}></i> Email:{" "}
              <span>Nebulad@gmail.com</span>
            </a>
            <a
              href="https://www.facebook.com/NebuladGraphics"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fab fa-facebook ${styles.fb}`}></i> Facebook:{" "}
              <span>@NebuladGraphics</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
