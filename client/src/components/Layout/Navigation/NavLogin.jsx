import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../../../context/UserContext";
import { showAlert } from "../../../util/alerts";

import styles from "./NavLogin.module.css";

function NavLogin() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, loading, setUser } = useUser();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const logout = async (setUser) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setShowDropdown(false);
      setTimeout(() => {
        setUser(null);
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      const errorMsg = error.response?.data?.message;
      // ToDo: Logging for errorMsg
      showAlert("error", "An error occured logging out!");
    }
  };

  const handleNavigation = async (e) => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (e.target.closest("div").classList.contains(styles.loginBtn)) {
      navigate("/dashboard/profile");
    }
  };

  const handleMouseEnter = () => {
    if (!user) return;
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    if (!user) return;
    setShowDropdown(false);
  };

  return (
    <>
      <div
        className={styles.loginBtn}
        onClick={handleNavigation}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={
            user
              ? user.photo
              : "https://nicky-blogs.s3.amazonaws.com/Public/Users/default.jpg"
          }
          alt="User Photo"
          title="View Account"
        />
        <span className={`${styles.loginText}`}>
          {user ? `${user.name}` : "Login"}
          {user && <i className="fas fa-chevron-down"></i>}
        </span>
        <div
          className={`${styles.dropdownMenu} ${
            showDropdown ? styles.showDropdown : ""
          }`}
        >
          <div className={styles.dropdownArrow}></div>
          <Link to="/dashboard/profile" className={styles.dropdownMenuItem}>
            <i className="fas fa-user-edit" title="View Account"></i> Edit
            Profile
          </Link>
          <Link
            to="/dashboard/notifications"
            className={styles.dropdownMenuItem}
          >
            <i className="fas fa-bell"></i> Notifications
          </Link>
          <Link to="/dashboard/favorites" className={styles.dropdownMenuItem}>
            <i className="fas fa-heart"></i> Favorites
          </Link>
          <Link to="/dashboard/settings" className={styles.dropdownMenuItem}>
            <i className="fas fa-cog"></i> Account Settings
          </Link>

          <Link to="/help" className={styles.dropdownMenuItem}>
            <i className="fas fa-question-circle"></i> Help
          </Link>
          <button
            className={`${styles.dropdownMenuItem} ${styles.logoutBtn}`}
            onClick={() => logout(setUser)}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(NavLogin);
