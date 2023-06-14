import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";

import Loader from "./Loader";

import styles from "./FeatureCard.module.css";

const FeatureCard = ({ title, description, cta, img, type }) => {
  const { blogs, blogsLoading } = useBlogs();

  const navigate = useNavigate();

  if (blogsLoading) return <Loader />;

  let linkItem1;
  let linkItem2;
  let redirectUrl;

  function getRandomElement(arr) {
    if (arr.length === 0) {
      throw new Error("Array must have at least one element");
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  if (type === "blogs") {
    redirectUrl = "blogs/categories";
    const blog1 = getRandomElement(blogs);
    const blog2 = getRandomElement(blogs);

    linkItem1 = {
      title: blog1.title,
      description: blog1.description,
      img: blog1.blotListImage,
      link: `/blogs/${blog1._id}`,
    };
    linkItem2 = {
      title: blog2.title,
      description: blog2.description,
      img: blog2.blogListImage,
      link: `/blogs/${blog2._id}`,
    };
  }
  if (type === "store") {
    redirectUrl = "https://nebulad.com";
    linkItem1 = {
      title: "Starwars Coasters",
      description:
        "Completely unique handmade decoupaged coasters! All coasters are made with real authentic comic book panels. They come in sets of 4, but individual coasters and/or custom orders are available if desired",
      img: "https://nicky-blogs.s3.amazonaws.com/ImageSlider/Star_Wars_Coasters.jpg",
      link: "https://nebulad.com/collections/super-frames/products/comic-book-coasters-set-of-4",
    };

    linkItem2 = {
      title: "Thor Frame",
      description:
        "Completely unique handmade decoupaged frames! All frames are made with real authentic comic book panels",
      img: "https://nicky-blogs.s3.amazonaws.com/Gallery/CaptainAmerica_front.JPG",
      link: "https://nebulad.com/collections/super-frames/products/thor-frame-small-11-5-x-9-5",
    };
  }
  if (type === "events") {
    redirectUrl = "events";
    linkItem1 = {
      title: "Cradle Con - May 20th & 21st",
      description:
        "Completely unique handmade decoupaged coasters! All coasters are made with real authentic comic book panels",
      img: "https://nicky-blogs.s3.amazonaws.com/Assets/events-hero.png",
      link: "/events",
    };
    linkItem2 = null;
  }

  const handleClick = (el) => {
    return (e) => {
      e.stopPropagation();
      if (el.link.startsWith("http")) {
        window.open(el.link, "_blank");
      } else {
        navigate(el.link);
        window.scrollTo(0, 0);
      }
    };
  };
  const handleCardclick = (e) => {
    if (type === "store") {
      window.open(redirectUrl, "_blank");
    } else {
      navigate(redirectUrl);
      window.scrollTo(0, 0);
    }
  };

  const linkItems = [linkItem1, linkItem2];

  return (
    <div className={styles.featureCard} onClick={handleCardclick} title={title}>
      <div className={styles.textContainer}>
        <span className={styles.smallHeading}>Nebulad</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={redirectUrl} className={styles.cta}>
          {cta} &rarr;
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.cardImg}
          src={img}
          alt="Image related to selected content category"
        />
        <div className={styles.linksContainer}>
          {linkItems.map((el) => {
            if (!el) return;
            return (
              <div
                key={el.title}
                className={styles.linkItem}
                onClick={handleClick(el)}
                title={el.title}
              >
                <img src={el.img} alt={el.title} />
                <div className={styles.linkItemTextContainer}>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
