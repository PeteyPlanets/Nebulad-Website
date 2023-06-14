import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className={styles.slider}></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
