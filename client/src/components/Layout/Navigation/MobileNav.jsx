import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.mobileNav}>
        <Link to="/">
          <img
            src={"https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"}
            alt="Nebulad Logo"
            className={styles.logo}
            title="Go to homepage"
          />
        </Link>
        <i className="fa fa-bars" onClick={toggleNav}></i>
      </div>
      {isOpen && (
        <nav className={styles.sideNav}>
          <i
            className={`${styles.closeNav} fas fa-times`}
            onClick={toggleNav}
          ></i>
          <ul>
            <li>
              <Link to="/blogs/categories" onClick={() => setIsOpen(false)}>
                <i className="fas fa-blog"></i> Blogs
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setIsOpen(false)}>
                <i className="fas fa-calendar"></i> Events
              </Link>
            </li>
            {/* <li>
              <Link to="/superheroes" onClick={() => setIsOpen(false)}>
                <i className="fas fa-mask"></i> Superheroes
              </Link>
            </li> */}
            <li>
              <a
                href="https://nebulad.com"
                title="Shopify Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-store"></i> Store
              </a>
            </li>
            <li>
              <Link to="/about-me" onClick={() => setIsOpen(false)}>
                <i className="fas fa-user"></i> About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <i className="fas fa-envelope"></i> Contact
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" onClick={() => setIsOpen(false)}>
                <i className="fas fa-user-circle"></i> My Account
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={() => setIsOpen(false)}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isOpen && <div className={styles.overlay} onClick={toggleNav}></div>}
    </>
  );
};

export default MobileNav;
