import React from "react";
import { Link } from "react-router-dom";

import styles from "./RelatedContent.module.css";

const RelatedContent = ({ related }) => {
  return (
    <div className={styles.relatedContent}>
      <h3>Related Content</h3>
      <div className={styles.myDivider}></div>
      <ul className={styles.relatedContentList}>
        {related.map((relatedBlog) => (
          <li key={relatedBlog._id}>
            <Link className={styles.linkEl} to={`/blogs/${relatedBlog._id}`}>
              <div className={styles.textContainer}>
                <h4>{relatedBlog.title}</h4>
                <p>{relatedBlog.category.description}</p>
              </div>
              <img src={relatedBlog.image} alt={relatedBlog.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedContent;
