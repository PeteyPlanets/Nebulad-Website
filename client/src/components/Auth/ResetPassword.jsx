import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { showAlert } from "../../util/alerts";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token: resetToken } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios({
        method: "PATCH",
        url: `${
          import.meta.env.VITE_APP_API_URL
        }/users/forgot-password/${resetToken}`,
        data: {
          password,
          confirmPassword,
        },
      });
      console.log("PATCH response = ", res);
      if (res.status === 200) {
        showAlert("success", "Your password settings have been updated!", 3);
        setTimeout(() => {
          setIsSubmitting(false);
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred! Please try again.";
      showAlert("error", errorMessage);
      console.log("error", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reset Your Password</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className={styles.submitButton}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
