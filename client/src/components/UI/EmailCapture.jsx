import axios from "axios";
import React, { useState } from "react";
import { showAlert } from "../../util/alerts";

const EmailCapture = ({ cta = "Notify Me", styles }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));

    if (isValid) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_APP_API_URL}/emails`,
          {
            email,
          }
        );

        if (res.data.status === "success") {
          showAlert("success", "Please check your email", 2);
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message;
        // ToDo: Logging for errorMsg
        showAlert(
          "error",
          "An error occured submitting your email, pleas try again!"
        );
      }
    }
  };

  return (
    <div className={styles.emailCaptureContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={`${styles.emailInput} ${!isValid ? styles.invalid : ""}`}
          placeholder="Enter your email"
        />
        <button type="submit" className={styles.notifyBtn}>
          {cta}
        </button>
      </form>
      {!isValid && (
        <p className={styles.errorText}>Please enter a valid email.</p>
      )}
    </div>
  );
};

export default EmailCapture;
