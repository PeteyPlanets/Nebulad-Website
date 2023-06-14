import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import styles from "./Vendor.module.css";

const Vendor = ({ vendor, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onInViewChange = (inView) => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
  };
  return (
    <InView as="div" onChange={onInViewChange} threshold={0.3}>
      <div
        className={`${styles.vendorContainer} ${
          isVisible ? styles.fadeIn : ""
        }`}
      >
        <div
          className={styles.circle}
          style={{ backgroundImage: `url(${vendor.image})` }}
        >
          <div className={styles.vendorOverlay}>
            <div className={`${styles.icon} ${styles.ig}`}>
              <a href={`https://instagram.com/${vendor.ig}`} target={"_blank"}>
                <i className={`fab fa-instagram`}></i>
              </a>
            </div>
            <div className={`${styles.icon} ${styles.mail}`}>
              <a href={`mailto:${vendor.email}`}>
                <i className={`fas fa-envelope`}></i>
              </a>
            </div>
            <div className={`${styles.icon} ${styles.globe}`}>
              <a href={vendor.website} target={"_blank"}>
                <i className={`fas fa-globe`}></i>
              </a>
            </div>
          </div>
        </div>
        <h4>{vendor.name}</h4>
        <p>{vendor.description}</p>
      </div>
    </InView>
  );
};

export default Vendor;
