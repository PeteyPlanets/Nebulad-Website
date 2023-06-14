import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import styles from "./EventCard.module.css";

const EventCard = ({ icon, title, text, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onInViewChange = (inView) => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
  };

  return (
    <InView as="div" onChange={onInViewChange} threshold={0.5}>
      <div className={`${styles.card} ${isVisible ? styles.fadeIn : ""}`}>
        <div className={styles.icon}>
          <i className={icon}></i>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </InView>
  );
};

export default EventCard;
