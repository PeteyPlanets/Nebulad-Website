import React from "react";
import { Link } from "react-router-dom";

// Components
import EmailCapture from "../UI/EmailCapture";
import SocialLinks from "./Navigation/SocialLinks";

// Styles
import customStyles from "../UI/EmailCaptureFooter.module.css";
import styles from "./MobileFooter.module.css";

const MobileFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.aboutSection}>
          <Link to="/">
            <img
              src={"https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"}
              alt="Nebulad Logo"
              title="Go to homepage"
            />
          </Link>
          <p>
            Unleashing creative superpowers to harmonize the worlds of art,
            design, and storytelling. Join our mailing list to stay updated!
          </p>
          <EmailCapture
            cta={<i className="fa fa-paper-plane"></i>}
            styles={customStyles}
          />
        </div>
        <div className={styles.linksSection}>
          <ul className={styles.navLinks}>
            <li>
              <Link to={"/blogs/categories"}>Blogs</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/superheroes">Superheroes</Link>
            </li>
            <li>
              <Link to="https://nebulad.com">Store</Link>
            </li>
            <li>
              <Link to="/about-me">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.socialLinksSection}>
          <SocialLinks style={{ gap: "1.4rem" }} />
          <div className={styles.copyrightContainer}>
            <span>
              &copy; 2023 Nebulad Inc.{" "}
              <a style={{ color: "#fff" }} href="/">
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
