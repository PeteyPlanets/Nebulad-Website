import React from "react";
import styles from "./ComeSeeUs.module.css";
import EventCard from "./EventCard";

const ComeSeeUs = () => {
  return (
    <section className={styles.container}>
      <h2>Come See Us</h2>
      <span className={styles.divider}></span>
      <div className={styles.cardContainer}>
        <EventCard
          icon="fas fa-map-marker-alt"
          title="Epic Venue"
          text="Immerse yourself in the rich history of aviation, surrounded by awe-inspiring aircraft and interactive exhibits. To infniity, and beyond!"
          delay={100}
        />
        <EventCard
          icon="fas fa-gift"
          title="Giveaways"
          text="Want to win a fully customized item of your choice? Drop by our booth and leave your contact info to participate! Coasters, magnets, key rings and more!"
          delay={300}
        />
        <EventCard
          icon="fas fa-dollar-sign"
          title="Event Pricing"
          text="Get exclusive event only pricing! Up to 40% off on most products, including custom orders. Great gift ideas for any superhero fan, including you! "
          delay={500}
        />
      </div>
    </section>
  );
};

export default ComeSeeUs;
