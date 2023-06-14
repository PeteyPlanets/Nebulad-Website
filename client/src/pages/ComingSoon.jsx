import React from "react";
import EmailCapture from "../components/UI/EmailCapture";
import styles from "./ComingSoon.module.css";
import customStyles from "../components/UI/EmailCapture.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.smallHeading}>This feature is</span>
        <h1>Coming Soon</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quis
          possimus nihil ex esse vel in tenetur itaque magnam quas cumque,
          numquam odit pariatur asperiores obcaecati ea vero.
        </p>

        <EmailCapture styles={customStyles} />
      </div>
    </div>
  );
};

export default ComingSoon;
