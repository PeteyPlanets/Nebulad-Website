import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
import { useUser } from "../context/UserContext";
import Editor from "../components/UI/Editor";
import { showAlert } from "../util/alerts";
import Loader from "../components/UI/Loader";

import styles from "./EditAboutMe.module.css";

const EditAboutMe = () => {
  const { user, loading } = useUser();
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const fileInputRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAboutMe() {
      try {
        const res = await axios.get(`${API_BASE_URL}/about`);
        const about = res.data.about;

        if (about) {
          setContent(about.content);
          setImage(about.image);
        } else {
          setContent("");
          setImage(
            "https://nicky-blogs.s3.amazonaws.com/Nicky/Nicky_Ai_Avatar.png"
          );
        }
      } catch (error) {
        console.error("Error fetching About Me:", error);
        showAlert("error", "Could not load About Me content.");
        setImage(
          "https://nicky-blogs.s3.amazonaws.com/Nicky/Nicky_Ai_Avatar.png"
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchAboutMe();
  }, []);

  const handleSubmit = async (e) => {
    console.log("SUBMITTING CONTENT:", content);

    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    console.log("Selected file:", file);

    if (file) formData.append("photo", file);

    try {
      await axios.patch(`${API_BASE_URL}/about`, formData, {
        withCredentials: true,
      });
      showAlert("success", "Updated successfully!");
    } catch (error) {
      showAlert("error", "An error occurred updating About Me.");
    }
  };

  if (loading || isLoading) return <Loader />;

  return user && user.role === "admin" ? (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className={styles.currentImage}>
        <img src={previewUrl || image} alt="About me" />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files[0];
          setFile(file);
          if (file) {
            setPreviewUrl(URL.createObjectURL(file));
          }
        }}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        className={styles.uploadButton}
      >
        Upload Image
      </button>

      <div className={styles.editorWrapper}>
        <Editor
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>

      <button type="submit" className={styles.saveButton}>
        Save Changes
      </button>
    </form>
  ) : (
    <p>Unauthorized</p>
  );
};

export default EditAboutMe;
