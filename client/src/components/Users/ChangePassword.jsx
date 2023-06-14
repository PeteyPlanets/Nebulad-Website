import axios from "axios";
import React, { useState } from "react";
import { showAlert } from "../../util/alerts";

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
    console.log(formData);

    try {
      await axios.patch(
        `${import.meta.env.VITE_APP_API_URL}/users/updateMyPassword`,
        formData,
        { withCredentials: true }
      );
      showAlert("success", "Password updated successfully");
    } catch (error) {
      console.log(error);
      const errorMsg = error.response?.data?.message;
      // ToDo: Logging for errorMsg
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
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <i
            className={`fas fa-eye${showPasswords.oldPassword ? "-slash" : ""}`}
            onClick={() => togglePasswordVisibility("oldPassword")}
          ></i>
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
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <i
            className={`fas fa-eye${showPasswords.newPassword ? "-slash" : ""}`}
            onClick={() => togglePasswordVisibility("newPassword")}
          ></i>
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
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <i
            className={`fas fa-eye${
              showPasswords.confirmPassword ? "-slash" : ""
            }`}
            onClick={() => togglePasswordVisibility("confirmPassword")}
          ></i>
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Update Password
      </button>
    </form>
  );
};

export default ChangePassword;
