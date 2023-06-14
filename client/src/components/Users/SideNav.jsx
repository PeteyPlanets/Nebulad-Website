import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// Components
import Divider from "../UI/Divider";
import Loader from "../UI/Loader";
import ToggleSwitch from "../UI/ToggleSwitch";

import styles from "./SideNav.module.css";

const SideNav = () => {
  const location = useLocation();
  const { user, loading } = useUser();

  if (loading) return <Loader />;

  const getListItemClass = (path) => {
    return location.pathname === path
      ? `${styles.navItem} ${styles.activeListItem}`
      : styles.navItem;
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>User Profile</h2>
        <img
          src={"https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"}
          alt="Nebulad logo"
        />
      </div>

      <Divider />

      <nav>
        <ul className={styles.navList}>
          <li className={getListItemClass("/dashboard/profile")}>
            <NavLink to="/dashboard/profile">
              <i className="fas fa-user"></i>
              <span>User Info</span>
            </NavLink>
          </li>

          <li className={getListItemClass("/dashboard/notifications")}>
            <NavLink to="/dashboard/notifications">
              <i className="fas fa-bell"></i>
              <span>Notifications</span>
            </NavLink>
          </li>
          <li className={getListItemClass("/dashboard/favorites")}>
            <NavLink to="/dashboard/favorites">
              <i className="fas fa-heart"></i>
              <span>Favorites </span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <i className="fas fa-moon"></i>
            <span className={styles.darkModeLabel}>Dark Mode</span>
            <ToggleSwitch />
          </li>
          <li className={getListItemClass("/dashboard/subscription")}>
            <NavLink to="/dashboard/subscription">
              <i className="fas fa-rocket"></i>
              <span>Subscription</span>
            </NavLink>
          </li>
          <li className={getListItemClass("/dashboard/creations")}>
            <NavLink to="/dashboard/creations">
              <i className="fas fa-receipt"></i>
              <span>Creations</span>
            </NavLink>
          </li>
          <li className={getListItemClass("/dashboard/settings")}>
            <NavLink to="/dashboard/settings">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.displayUser}></div>
    </div>
  );
};

export default SideNav;
