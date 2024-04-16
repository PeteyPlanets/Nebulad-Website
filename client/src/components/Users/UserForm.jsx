import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useUser } from "../../context/UserContext";
import { showAlert } from "../../util/alerts";
import styles from "./UserForm.module.css";
import { API_BASE_URL } from "../../apiConfig";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const fileInput = useRef(null);

  const { user, loading } = useUser();
  const navigate = useNavigate();

  if (loading || !user) return <Loader />;

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setProfilePicture(user.photo);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.set("name", name);
    data.set("email", email);
    data.set("photo", profilePicture[0]);

    try {
      const res = await axios.patch(`${API_BASE_URL}/users/updateMe`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      showAlert("success", "Updated successfully!", 2.5);
      setTimeout(() => {
        navigate(`/dashboard/profile`);
      }, 1500);
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Error!!!";
      // ToDo: Logging for errorMsg
      showAlert("error", "An error occured updating info!");
      console.log("Error in Updating user info: ", errorMsg);
    }
  };

  return (
    user && (
      <div className={styles.container}>
        <h2 className={styles.title}>Profile Settings</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.filePickerContainer}>
              <label className={styles.fileInputLabel} htmlFor="profilePicture">
                Choose new photo
              </label>
              <span className={styles.uploadedFileName}>
                {uploadedFileName}
              </span>
            </div>
            <input
              type="file"
              id="profilePicture"
              onChange={(e) => {
                setProfilePicture(e.target.files);
                setUploadedFileName(e.target.files[0].name);
              }}
              className={styles.fileInput}
              ref={fileInput}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Save Changes
          </button>
        </form>
      </div>
    )
  );
};

export default UserForm;
