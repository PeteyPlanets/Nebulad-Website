import axios from "axios";
import React, { useState } from "react";
import { showAlert } from "../../util/alerts";
import { API_BASE_URL } from "../../apiConfig";

const EmailCapture = ({ cta = "Notify Me", styles }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValid(isValid);

    if (isValid) {
      setIsSending(true); // Start sending the email
      try {
        const res = await axios.post(`${API_BASE_URL}/emails`, {
          email,
        });

        if (res.data.status === "success") {
          showAlert("success", "Please check your email", 2);
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message;
        showAlert(
          "error",
          errorMsg || "An error has occured, please try again!"
        );
      }

      setIsSending(false);
      setEmail("");
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
        <button type="submit" className={styles.notifyBtn} disabled={isSending}>
          {isSending ? "..." : cta}
        </button>
      </form>
      {!isValid && (
        <p className={styles.errorText}>Please enter a valid email.</p>
      )}
    </div>
  );
};

export default EmailCapture;
