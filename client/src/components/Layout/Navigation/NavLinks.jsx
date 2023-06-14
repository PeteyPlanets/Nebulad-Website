import React from "react";
import { Link } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";

import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const { categories } = useCategories();

  return (
    <ul className={`${styles.navLinks}`}>
      <li className={styles.dropdown}>
        <Link
          to="/blogs/categories"
          className={styles.dropbtn}
          title="View All Blogs"
        >
          Blogs
        </Link>
        <div className={styles.dropdownContent}>
          <div className={styles.dropdownArrow}></div>
          {categories.map((category) => (
            <Link key={category._id} to={`/blogs/categories/${category._id}`}>
              <img
                src={category.image}
                alt={`${category.title} avatar`}
                className={styles.avatar}
              />
              {category.title}
            </Link>
          ))}
        </div>
      </li>
      <li>
        <Link to="/events" title="Great Times!">
          Events
        </Link>
      </li>
      <li>
        <Link to="/superheroes" title="Coming Soon!">
          Superheroes
        </Link>
      </li>
      <li>
        <Link to="https://nebulad.com" title="Shopify Store">
          Store
        </Link>
      </li>
      <li>
        <Link to="/about-me" title="About the Artist">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" title="Get in touch">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
