import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// Components
import Loader from "../UI/Loader";
import NotFound from "../../pages/ErrorPage";

// Util
import { showAlert } from "../../util/alerts";

// Styles
import styles from "./CreateBlog.module.css";

const EditCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const fileInput = useRef(null);

  const { user, loading } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && category) {
      setTitle(category.title);
      setDescription(category.description);
      setUploadedFileName(category.image);
      setIsLoading(false);
    }
  }, [loading, category]);

  // Get Category
  useEffect(() => {
    const fetchCategory = async () => {
      if (loading) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/categories/${id}`
        );
        setCategory(response.data.category);
      } catch (error) {
        console.error(error);
        const errorMsg =
          error.response?.data?.message ||
          "An error occured getting the category!";
        showAlert("error", errorMsg);
      }
    };
    fetchCategory();
  }, [id, loading]);

  function handleFileClick() {
    if (fileInput.current) {
      fileInput.current.click();
    }
  }

  async function updateCategory(e) {
    e.preventDefault();

    try {
      const data = new FormData();
      data.set("title", title);
      data.set("description", description);
      data.set("file", files[0]);

      await axios.patch(
        `${import.meta.env.VITE_APP_API_URL}/categories/${category._id}`,
        data,
        { withCredentials: true }
      );

      navigate(`/blogs/categories/${category._id}`);
      showAlert("success", "Category updated successfully!");
    } catch (error) {
      console.log(error);
      const errorMsg =
        error.response?.data?.message ||
        "An error occured Editing your category!";
      showAlert("error", errorMsg);
    }
  }

  if (loading || isLoading) return <Loader />;

  return user && user.role === "admin" ? (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={updateCategory}>
        <h2 className={styles.formTitle}>Edit Category</h2>
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

        <button className={styles.btn}>Update Category</button>
      </form>
    </div>
  ) : (
    <NotFound />
  );
};

export default EditCategory;
