import React from "react";
import styles from "./CategoryAside.module.css";

const CategoryAside = (props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.categoryTitle}>{props.title}</h3>
      <div className={styles.myDivider}></div>
      <p className={styles.categoryDescription}>{props.description}</p>
    </div>
  );
};

export default CategoryAside;
