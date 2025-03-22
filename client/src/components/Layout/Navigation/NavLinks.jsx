import React from "react";
import { NavLink } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";

import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const { categories } = useCategories();

  return (
    <ul className={`${styles.navLinks}`}>
      <li>
        <NavLink
          to="/events"
          title="Great Times!"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Events
        </NavLink>
      </li>
      <li>
        <a
          href="https://nebulad.com"
          title="Shopify Store"
          target="_blank"
          rel="noopener noreferrer"
        >
          Store
        </a>
      </li>
      <li className={styles.dropdown}>
        <NavLink
          to="/blogs/categories"
          className={({ isActive }) =>
            isActive ? `${styles.dropbtn} ${styles.active}` : styles.dropbtn
          }
          title="View All Blogs"
        >
          Blogs
        </NavLink>
        <div className={styles.dropdownContent}>
          <div className={styles.dropdownArrow}></div>
          {categories.map((category) => (
            <NavLink
              key={category._id}
              to={`/blogs/categories/${category._id}`}
              className={({ isActive }) =>
                isActive ? styles.activeDropdownLink : undefined
              }
            >
              <img
                src={category.image}
                alt={`${category.title} avatar`}
                className={styles.avatar}
              />
              {category.title}
            </NavLink>
          ))}
        </div>
      </li>

      <li>
        <NavLink
          to="/about-me"
          title="About the Artist"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          title="Get in touch"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
