import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Components
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import SocialLinks from "./SocialLinks";
import NavLogin from "./NavLogin";
import MobileNav from "./MobileNav";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <>
      {isMobile && <MobileNav />}
      {!isMobile && (
        <header className={styles["nav-container"]}>
          <div className={styles["left-side"]}>
            <Link to="/">
              <img
                src="https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"
                alt="Nebulad Logo"
                className={styles.logo}
                title="Go to homepage"
              />
            </Link>
            <NavLinks />
          </div>

          <div className={styles["right-side"]}>
            <SearchBar />
            <div className={styles.socialContainer}>
              <SocialLinks />
            </div>
            <NavLogin />
          </div>
        </header>
      )}
    </>
  );
};

export default NavBar;
