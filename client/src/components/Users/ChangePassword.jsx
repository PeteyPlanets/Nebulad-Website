import axios from "axios";
import React, { useState } from "react";
import { showAlert } from "../../util/alerts";
import { API_BASE_URL } from "../../apiConfig";

import styles from "./ChangePassword.module.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`${API_BASE_URL}/users/updateMyPassword`, formData, {
        withCredentials: true,
      });
      showAlert("success", "Password updated successfully");
    } catch (error) {
      console.log(error);
      showAlert("error", "Error updating password!");
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.changePasswordForm}>
      <h2 className={styles.heading}>Change Password</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="oldPassword">Current Password</label>
        <div className={styles.eyeContainer}>
          <input
            type={showPasswords.oldPassword ? "text" : "password"}
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            placeholder="●●●●●●●●"
          />
          <span
            onClick={() => togglePasswordVisibility("oldPassword")}
            style={{ cursor: "pointer" }}
          >
            <i
              className={`fas ${
                showPasswords.oldPassword ? "fa-eye-slash" : "fa-eye"
              }`}
            ></i>
          </span>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="newPassword">New Password</label>
        <div className={styles.eyeContainer}>
          <input
            type={showPasswords.newPassword ? "text" : "password"}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="●●●●●●●●"
          />
          <span
            onClick={() => togglePasswordVisibility("newPassword")}
            style={{ cursor: "pointer" }}
          >
            <i
              className={`fas ${
                showPasswords.newPassword ? "fa-eye-slash" : "fa-eye"
              }`}
            ></i>
          </span>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className={styles.eyeContainer}>
          <input
            type={showPasswords.confirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="●●●●●●●●"
          />
          <span
            onClick={() => togglePasswordVisibility("confirmPassword")}
            style={{ cursor: "pointer" }}
          >
            <i
              className={`fas ${
                showPasswords.confirmPassword ? "fa-eye-slash" : "fa-eye"
              }`}
            ></i>
          </span>
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Update Password
      </button>
    </form>
  );
};

export default ChangePassword;
