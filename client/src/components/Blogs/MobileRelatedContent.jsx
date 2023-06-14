import React from "react";
import { Link } from "react-router-dom";

import styles from "./MobileRelatedContent.module.css";

const MobileRelatedContent = ({ related }) => {
  return (
    <div className={styles.relatedContent}>
      <h3>Mobile Related Content</h3>
      <div className={styles.myDivider}></div>
      <ul className={styles.relatedContentList}>
        {related.map((relatedBlog) => (
          <li key={relatedBlog._id}>
            <Link className={styles.linkEl} to={`/blogs/${relatedBlog._id}`}>
              <img src={relatedBlog.image} alt={relatedBlog.title} />
              <div className={styles.textContainer}>
                <span className={styles.categoryTitle}>
                  {relatedBlog.category.title}
                </span>
                <h4 className={styles.title}>{relatedBlog.title}</h4>

                <p className={styles.date}>
                  <i
                    style={{ marginRight: "6px" }}
                    className="fas fa-clock"
                  ></i>
                  {relatedBlog.date}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileRelatedContent;
