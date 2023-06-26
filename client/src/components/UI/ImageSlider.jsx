import React, { useState } from "react";
import { InView } from "react-intersection-observer";

import { useUniqueId } from "../../hooks/useUniqueId";

import styles from "./ImageSlider.module.css";

const ImageSlider = ({ imageArray, uniquePhrase }) => {
  const [isVisible, setIsVisible] = useState(false);
  const uniqueId = useUniqueId();

  const isMiddle = (arr, index) => {
    if (index === Math.floor(arr.length / 2)) {
      return true;
    } else {
      return false;
    }
  };
  const onInViewChange = (inView) => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(true);
      }, 0);
    }
  };
  return (
    <InView as="div" onChange={onInViewChange} threshold={0.9}>
      <div className={`${styles.container} ${isVisible ? styles.fadeIn : ""}`}>
        <div className={styles.slider}>
          {imageArray.map((img, index) => {
            const middle = isMiddle(imageArray, index);
            return (
              <input
                key={index}
                className={styles.sliderTarget}
                type="radio"
                id={`${img.uniqueId}-${uniquePhrase}-${index + 1}`}
                name={`${uniquePhrase}-${uniqueId}`}
                defaultChecked={middle}
                onChange={() => {}} // Add a dummy onChange handler to get rid of console warning
              />
            );
          })}
          <div className={styles.sliderViewport}>
            <div className={styles.sliderViewbox}>
              <div className={styles.sliderContainer}>
                {imageArray.map((img, index) => (
                  <div key={index} className={styles.sliderItem}>
                    <div className={styles.sliderItemInner}>
                      <figure className={styles.sliderItemFigure}>
                        <img
                          className={styles.sliderItemFigureImage}
                          src={img.image}
                          alt={img.alt}
                        />
                        <figcaption className={styles.sliderItemFigureCaption}>
                          <a href={img.link} target="_blank">
                            {img.productType}
                          </a>
                          <span>{img.subject}</span>
                        </figcaption>
                      </figure>
                      <label
                        className={styles.sliderItemTrigger}
                        htmlFor={`${img.uniqueId}-${uniquePhrase}-${index + 1}`}
                        title={img.alt}
                      ></label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default ImageSlider;
