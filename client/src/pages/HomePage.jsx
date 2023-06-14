import React from "react";
import SpaceBackground from "../components/UI/SpaceBackground";
import FeatureCard from "../components/UI/FeatureCard";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContainer}>
          <SpaceBackground />
          <div className={styles.heroTextContainer}>
            <h1>
              Graphic <span>Design</span>.
            </h1>
            <h1>
              Creative <span>Writing</span>.
            </h1>
            <h1>
              Decoupage <span>Art</span>.
            </h1>
            <p>
              Unleashing creative superpowers to harmonize the worlds of art,
              design, and storytelling. Blending the magic of graphic design,
              decoupage treasures, enthralling stories, and melodious tunes.
            </p>
            <div className={styles.btnContainer}>
              <Link to={`/about-me`}>Learn More</Link>
              <Link to={"/contact"}>Contact Me</Link>
            </div>
          </div>
          <div className={styles.heroImgContainer}>
            <img
              className={styles.heroImg}
              src={
                "https://nicky-blogs.s3.amazonaws.com/Assets/events-hero.png"
              }
              alt="Nebulad hero image"
            />
          </div>
        </div>
      </section>
      <section className={styles.featureSection}>
        <h2>Explore</h2>
        <FeatureCard
          title="Blogs"
          description="These are my blogs...venture into the world of Nebulad's writing prowess."
          cta="Check out my blogs"
          img={"https://nicky-blogs.s3.amazonaws.com/Assets/maneater_540x.jpeg"}
          type="blogs"
        />
        <FeatureCard
          title="Store"
          description="Check out our epic Shopify store!"
          cta="Check out the store"
          img={"https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"}
          type="store"
        />
        <FeatureCard
          title="Events"
          description="Cradle Con is among us!"
          cta="Check out my blogs"
          img={
            "https://nicky-blogs.s3.amazonaws.com/Assets/Cradle-Con-no-tag.png"
          }
          type="events"
        />
      </section>
    </>
  );
};

export default HomePage;
