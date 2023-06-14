import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { showAlert } from "../../util/alerts";

import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_APP_API_URL}/users/forgot-password`,
        data: {
          email,
        },
      });
      if (res.status === 200) {
        showAlert("success", "A password reset email has been sent!", 7);
        setTimeout(() => {
          setIsSubmitting(false);
          navigate("/");
        }, 7000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred! Please try again.";
      showAlert("error", errorMessage);
      console.log("error", error);
    }

    setMessage(
      "If the email is associated with an account, a password reset link has been sent."
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Forgot Password?</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className={styles.submitButton}
          >
            {isSubmitting ? "Sending link..." : "Send link"}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
