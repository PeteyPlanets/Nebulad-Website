import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Category.module.css";

const Category = ({ id, imageSrc, title, description }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(`/blogs/categories/${id}`);
  };

  return (
    <div className={styles.category} onClick={clickHandler}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Link className={styles.readMore}>View Blogs &gt;</Link>
      </div>
    </div>
  );
};

export default Category;
