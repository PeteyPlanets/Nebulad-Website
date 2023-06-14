import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const location = useLocation();
  const state = location.state || {};
  const statusCode = state.statusCode || 500;
  const title = state.title || "An Error Occured!";
  const message =
    state.message ||
    "Oops! Something went wrong. We apologize for any inconvenience caused. Please try again later.";
  const redirect = state.redirect || "/";
  const backToPage = state.backToPage || "Home Page";

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img
          src="https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"
          alt="Nebulad Logo"
        />
        <h1 className={styles.statusCode}>{statusCode}</h1>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{message}</p>
        <Link to={`${redirect}`} className={styles.link}>
          Go back to {backToPage}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
