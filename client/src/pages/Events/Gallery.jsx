import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [modal, setModal] = useState({ isOpen: false, index: 0 });
  const images = [
    {
      front: "https://nicky-blogs.s3.amazonaws.com/Gallery/5YL_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/5YL_back.JPG",
      caption: "5 Years Legion",
    },
    {
      front: "https://nicky-blogs.s3.amazonaws.com/Gallery/Batman_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/Batman_back.JPG",
      caption: "Batman",
    },
    {
      front:
        "https://nicky-blogs.s3.amazonaws.com/Gallery/CaptainAmerica_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/CaptainAmerica_back.JPG",
      caption: "Captain America",
    },
    {
      front: "https://nicky-blogs.s3.amazonaws.com/Gallery/Hulk_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/Hulk_back.JPG",
      caption: "The Hulk",
    },
    {
      front:
        "https://nicky-blogs.s3.amazonaws.com/Gallery/Shadow_Lass_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/Shadow_Lass_back.JPG",
      caption: "Shadow Lass",
    },
    {
      front: "https://nicky-blogs.s3.amazonaws.com/Gallery/Spidey_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/Spidey_back.JPG",
      caption: "Spiderman",
    },
    {
      front: "https://nicky-blogs.s3.amazonaws.com/Gallery/Storm_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/Storm_back.JPG",
      caption: "Storm",
    },
    {
      front: "https://nicky-blogs.s3.amazonaws.com/Gallery/Wolverine_front.JPG",
      back: "https://nicky-blogs.s3.amazonaws.com/Gallery/Wolverine_back.JPG",
      caption: "Wolverine",
    },
  ];
  const allImages = images.flatMap((image) => [
    { src: image.front, caption: `${image.caption} - Front` },
    { src: image.back, caption: `${image.caption} - Back` },
  ]);

  const toggleModal = (index) => {
    setModal({ isOpen: !modal.isOpen, index: index * 2 });
  };

  const navigateModal = (direction) => {
    setModal((prevState) => {
      const newIndex =
        (prevState.index + direction + allImages.length) % allImages.length;
      console.log(prevState.index, newIndex);
      return { ...prevState, index: newIndex };
    });
  };

  return (
    <section className={styles.showcase}>
      <span className={styles.subheading}>Previous Commissions</span>
      <h2 className={styles.headingSecondary}>Super Frames Gallery</h2>
      <div className={styles.showcaseContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => toggleModal(index)}
          >
            <img
              src={image.front}
              alt={`${image.caption}`}
              className={styles.showcaseImg}
            />
            <img
              src={image.back}
              alt={`${image.caption}`}
              className={`${styles.showcaseImg} ${styles.hoverImg}`}
            />
          </div>
        ))}
      </div>
      {modal.isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => toggleModal(modal.index)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => toggleModal(modal.index)}
            >
              &times;
            </button>
            <img
              key={modal.index}
              src={allImages[modal.index].src}
              alt={allImages[modal.index].caption}
              className={styles.modalImage}
            />
            <p className={styles.modalCaption}>{`${
              allImages[modal.index].caption
            }`}</p>
            <button
              className={styles.modalNavPrev}
              onClick={() => navigateModal(-1)}
            >
              &#10094;
            </button>
            <button
              className={styles.modalNavNext}
              onClick={() => navigateModal(1)}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
