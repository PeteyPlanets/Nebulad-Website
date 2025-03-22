import React from "react";
import CountdownTimer from "../../components/UI/CountdownTimer";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <img
        className={styles.heroImg}
        src={"https://nicky-blogs.s3.amazonaws.com/Assets/events-hero.png"}
        alt="Hero image of a superhero"
      />
      <img
        className={styles.cradleImg}
        src={
          "https://nicky-blogs.s3.amazonaws.com/Assets/Cradle-Con-no-tag.png"
        }
        alt="Cradle Con logo"
      />
      <div className={styles.heroTextContainer}>
        <h5>Prepare For</h5>
        <h1>
          Cradle Con <span>2025</span>
        </h1>
        <p>Long Island, Ny - May 17th &amp; 18th</p>

        <div className={styles.btnContainer}>
          <a
            href="https://www.cradlecon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Schedule
          </a>
          <a
            href="https://www.cradleofaviation.org/plan_your_visit/cradle-con.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Tickets
          </a>
        </div>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default HeroSection;
