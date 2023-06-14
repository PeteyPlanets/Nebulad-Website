import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// Components
import Editor from "../UI/Editor";
import Loader from "../UI/Loader";

// Util
import { formatDate } from "../../util/dates";
import { showAlert } from "../../util/alerts";

// Styles
import styles from "./CreateBlog.module.css";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  const { user, loading } = useUser();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(`${new Date().toISOString().slice(0, 10)}`);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const [files, setFiles] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const fileInput = useRef(null);

  const [blogListImageFiles, setBlogListImageFiles] = useState("");
  const [blogListImageFileName, setBlogListImageFileName] = useState("");
  const blogListFileInput = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/categories`
        );
        setCategories(res.data.categories);
      } catch (error) {
        console.log("Error fetching categories: ", error);
        const errorMsg = error.response?.data?.message;
        // ToDo: Log errorMsg when production logging is set up

        showAlert("error", "An Error has occured fetching categories!", 7);
      }
    }

    fetchCategories();
  }, []);

  if (!user || loading) return <Loader />;

  function handleFileClick() {
    if (fileInput.current) {
      fileInput.current.click();
    }
  }
  function handleSecondFileClick() {
    if (blogListFileInput.current) {
      blogListFileInput.current.click();
    }
  }

  async function createBlog(e) {
    e.preventDefault();

    const categoryId = categories.find((cat) => cat.title === category)._id;

    const data = new FormData();
    data.append("title", title);
    if (author.trim() !== "") data.append("author", author);
    data.append("date", formatDate(date));
    data.append("description", description);
    data.append("category", categoryId);
    data.append("content", content);
    data.append("coverPhoto", files);
    data.append("blogListPhoto", blogListImageFiles);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/blogs`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      navigate(`/blogs/${res.data.blog._id}`);
    } catch (error) {
      console.log(error);
      const errorMsg =
        error.response?.data?.message || "An error occured creating your blog!";
      showAlert("error", errorMsg);
    }
  }

  return user && user.role === "admin" ? (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={createBlog}>
        <h2 className={styles.formTitle}>Create New Blog</h2>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="author"
          placeholder={"Author"}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.title}>
              {cat.title}
            </option>
          ))}
        </select>
        <input
          type="date"
          placeholder={"Date"}
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
            setFiles(e.target.files[0]);
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
        <input
          className={styles.fileInput}
          type="file"
          ref={blogListFileInput}
          onChange={(e) => {
            setBlogListImageFiles(e.target.files[0]);
            setBlogListImageFileName(e.target.files[0].name);
          }}
          style={{ display: "none" }}
        />
        <div className={styles.fileUploadContainer}>
          <button
            className={styles.customFileInput}
            type="button"
            onClick={handleSecondFileClick}
          >
            Upload blog list photo <i className="fas fa-upload"></i>
          </button>
          <span className={styles.uploadedFileName}>
            {blogListImageFileName}
          </span>
        </div>

        <Editor
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />

        <button className={styles.btn}>Create Blog</button>
      </form>
    </div>
  ) : (
    <NotFound />
  );
}

export default CreateBlog;
