import React from "react";
import { Link } from "react-router-dom";
import styles from "./SocialLinks.module.css";

function SocialLinks({ style }) {
  return (
    <div className={styles.socialLinks} style={style}>
      <div className={`${styles.socialLinkContainer} ${styles.fb}`}>
        <Link
          to="https://www.facebook.com/nebuladgraphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${styles.socialIcon}  fab fa-facebook`}></i>
        </Link>
      </div>
      <div className={`${styles.socialLinkContainer} ${styles.ig}`}>
        <Link
          to="https://www.instagram.com/nebuladgraphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${styles.socialIcon} fab fa-instagram`}></i>
        </Link>
      </div>

      <div className={`${styles.socialLinkContainer} ${styles.mail}`}>
        <a href="mailto:nebulad@gmail.com">
          <i className={`${styles.socialIcon} fas fa-envelope`}></i>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
