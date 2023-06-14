import React from "react";
import styles from "./RangeSlider.module.css";

const RangeSlider = ({ blog, backgroundPosition, setBackgroundPosition }) => {
  function handleCancel() {
    console.log("cancelling...");
  }
  return (
    <>
      <div className={styles.container}>
        <input
          type="range"
          id="background-position-slider"
          min="-50"
          max="200"
          value={backgroundPosition}
          onChange={(e) => setBackgroundPosition(e.target.value)}
        />
      </div>
    </>
  );
};

export default RangeSlider;
