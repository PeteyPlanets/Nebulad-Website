import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Components
import EmailCapture from "../UI/EmailCapture";
import SocialLinks from "../Layout/Navigation/SocialLinks";
import MobileFooter from "./MobileFooter";
import Loader from "../UI/Loader";

// Styles
import customStyles from "../UI/EmailCaptureFooter.module.css";
import styles from "./Footer.module.css";

const Footer = ({ recentBlogs, randomBlogs, isLoading }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  if (isLoading) return <Loader />;

  return (
    <>
      {isMobile && <MobileFooter />}

      {!isMobile && (
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
              <h6>
                Unleashing creative superpowers to harmonize the worlds of art,
                design, and storytelling. Join our mailing list to stay updated!
              </h6>
              <EmailCapture
                cta={<i className="fa fa-paper-plane"></i>}
                styles={customStyles}
              />
            </div>
            <div className={styles.linksSection}>
              <ul className={styles.navLinks}>
                <div className={styles.headingIconContainer}>
                  <i
                    className={`${styles.socialIcon} ${styles.blogIcon} fas fa-link`}
                  ></i>
                  <h4>Links</h4>
                </div>
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
            <div className={styles.latestSection}>
              <div className={styles.headingIconContainer}>
                <i
                  className={`${styles.socialIcon} ${styles.blogIcon} fas fa-blog`}
                ></i>

                <h4>Random Blogs</h4>
              </div>
              <div className={styles.blogsContainer}>
                {randomBlogs.map((blog) => {
                  return (
                    <Link
                      key={blog._id}
                      className={styles.blogItem}
                      to={`/blogs/${blog._id}`}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                    >
                      <img src={blog.blogListImage} alt={blog.title} />
                      <div className={styles.blogItemTextContainer}>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className={styles.instagramSection}>
              <div className={styles.headingIconContainer}>
                <i
                  className={`${styles.socialIcon} ${styles.ig} fab fa-instagram`}
                ></i>
                <h4>Instagram</h4>
              </div>
              <div className={styles.igGallery}>
                <div className={styles.imgContainer}>
                  <Link
                    to={"https://www.instagram.com/p/CshArltv3WK/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://nicky-blogs.s3.amazonaws.com/Nicky/InstagramGallery/IMG_6689.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.imgContainer}>
                  <Link
                    to={"https://www.instagram.com/p/CseAn3oLUep/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://nicky-blogs.s3.amazonaws.com/Nicky/InstagramGallery/IMG_6691.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.imgContainer}>
                  <Link
                    to={"https://www.instagram.com/p/Cpog6M2s5_k/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://nicky-blogs.s3.amazonaws.com/Nicky/InstagramGallery/IMG_6692.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.imgContainer}>
                  <Link
                    to={"https://www.instagram.com/p/CmcQJF0vM7Z/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://nicky-blogs.s3.amazonaws.com/Nicky/InstagramGallery/IMG_6693.jpg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divider}></div>
          <span className={styles.copyright}>@copyright 2023</span>
          <div className={styles.socialLinks}>
            <h3>Social</h3>
            <SocialLinks />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
