import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import ImageSlider from "../../components/UI/ImageSlider";
import { framesArr, coastersArr } from "../../util/proudctImages";
import styles from "./ProductSection.module.css";

const ProductSection = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]); // For the three .productTextbox components

  const onInViewChange = (inView, index) => {
    if (inView) {
      setIsVisible((prev) => {
        const newIsVisible = [...prev];
        newIsVisible[index] = true;
        return newIsVisible;
      });
    }
  };

  return (
    <>
      <section className={styles.container}>
        <span className={styles.subheading}>Our Products</span>
        <h2 className={styles.headingSecondary}>Handmade Decoupaged Items</h2>
        <div className={styles.processContainer}>
          <div className={styles.productContainer}>
            <InView
              as="div"
              className={`${styles.productTextbox} ${
                isVisible[0] ? styles.scaleAndFadeIn : ""
              }`}
              onChange={(inView) => onInViewChange(inView, 0)}
              threshold={0.5}
            >
              <p className={styles.stepNumber}>01</p>
              <h3 className={styles.headingTertiary}>Superhero Frames</h3>
              <p className={styles.stepDescription}>
                Tell us about your favorite heroes, comics, symbols and more! We
                will personalize any requests for comics, covers, characters,
                phrases, names, etc. Want an entire frame of Silver Age Matter
                Eater Lad? No problem! Any particular panels you absolutely need
                to be included? Just let us know!
              </p>
            </InView>
            <div className={`${styles.imgContainer}`}>
              <ImageSlider
                imageArray={framesArr}
                uniquePhrase="slider"
                delay={0}
              />
            </div>
          </div>

          <div className={styles.productContainer}>
            <div className={`${styles.imgContainer}`}>
              <ImageSlider
                imageArray={coastersArr}
                uniquePhrase="lemon"
                delay={0}
              />
            </div>
            <InView
              as="div"
              className={`${styles.productTextbox} ${
                isVisible[1] ? styles.scaleAndFadeIn : ""
              }`}
              onChange={(inView) => onInViewChange(inView, 1)}
              threshold={0.5}
            >
              <p className={styles.stepNumber}>02</p>
              <h3 className={styles.headingTertiary}>Epic Coasters</h3>
              <p className={styles.stepDescription}>
                Completely unique handmade decoupaged coasters! All coasters are
                made with real authentic comic book panels. They come in sets of
                4, but individual coasters and/or custom orders are available if
                desired.
              </p>
            </InView>
          </div>

          <div className={styles.productContainer}>
            <InView
              as="div"
              className={`${styles.productTextbox} ${
                isVisible[2] ? styles.scaleAndFadeIn : ""
              }`}
              onChange={(inView) => onInViewChange(inView, 2)}
              threshold={0.5}
            >
              <p className={styles.stepNumber}>03</p>
              <h3 className={styles.headingTertiary}>Other Collage Items</h3>
              <p className={styles.stepDescription}>
                We are always working on new products, including fridge magnets,
                coat racks, key racks and more! All products are made from real
                comic book panels, hand chosen and placed in a completely unique
                one-of-one arrangement.
              </p>
            </InView>
            <div className={`${styles.imgContainer}`}>
              <ImageSlider
                imageArray={framesArr}
                uniquePhrase="beast"
                delay={0}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
