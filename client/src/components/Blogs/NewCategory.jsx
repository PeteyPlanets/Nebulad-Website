import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// Components
import Loader from "../UI/Loader";
import NotFound from "../../pages/ErrorPage";

// Util
import { showAlert } from "../../util/alerts";

// Styles
import styles from "./CreateBlog.module.css";

const NewCategory = () => {
  const { user, loading } = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const fileInput = useRef(null);

  const navigate = useNavigate();

  function handleFileClick() {
    if (fileInput.current) {
      fileInput.current.click();
    }
  }

  async function addCategory(e) {
    e.preventDefault();

    const newCategoryData = {
      title,
      description,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/categories`,
        newCategoryData,
        {
          withCredentials: true,
        }
      );

      const categoryId = res.data.category._id;
      const data = new FormData();
      data.set("file", files[0]);

      await axios.patch(
        `${import.meta.env.VITE_APP_API_URL}/categories/${categoryId}`,
        data,
        { withCredentials: true }
      );

      navigate(`/blogs/categories/${res.data.category._id}`);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "An error occured editing your category!";
      console.log(error);
      showAlert("error", errorMsg);
    }
  }

  if (loading) return <Loader />;

  return user && user.role === "admin" ? (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={addCategory}>
        <h2 className={styles.formTitle}>New Category</h2>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="description"
          placeholder={"Description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className={styles.fileInput}
          type="file"
          ref={fileInput}
          onChange={(e) => {
            setFiles(e.target.files);
            setUploadedFileName(e.target.files[0].name);
          }}
          style={{ display: "none" }}
        />
        <div className={styles.fileUploadContainer}>
          <button
            className={styles.customFileInput}
            type="button"
            onClick={handleFileClick}
          >
            Upload cover photo <i className="fas fa-upload"></i>
          </button>
          <span className={styles.uploadedFileName}>{uploadedFileName}</span>
        </div>

        <button className={styles.btn}>Add Category</button>
      </form>
    </div>
  ) : (
    <NotFound />
  );
};

export default NewCategory;
