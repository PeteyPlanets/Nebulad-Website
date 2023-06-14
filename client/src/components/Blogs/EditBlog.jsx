import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import Editor from "../UI/Editor";
import Loader from "../UI/Loader";
import NotFound from "../../pages/ErrorPage";
import RangeSlider from "../UI/RangeSlider";

// Util
import { formatDate } from "../../util/dates";
import { showAlert } from "../../util/alerts";
import { formatHoomans } from "../../util/significantHoomans";

// Hooks/Context
import { useUser } from "../../context/UserContext";
import useCategories from "../../hooks/useCategories";

// Styles
import styles from "./EditBlog.module.css";
import "react-quill/dist/quill.snow.css";

function EditBlog() {
  const { id } = useParams();
  const { user, loading } = useUser();
  const { categories } = useCategories();

  const navigate = useNavigate();

  const [blog, setBlog] = useState();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [significantHoomans, setSignificantHoomans] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [files, setFiles] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const fileInput = useRef(null);

  const [blogListImageFiles, setBlogListImageFiles] = useState("");
  const [blogListImageFileName, setBlogListImageFileName] = useState("");
  const blogListFileInput = useRef(null);

  // Get blog
  useEffect(() => {
    const fetchBlog = async () => {
      if (loading) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/blogs/${id}`
        );

        const fetchedBlog = response.data.blog;
        console.log(fetchedBlog.image);

        setBlog(fetchedBlog);
        setCategory(fetchedBlog.category.title);
        setTitle(fetchedBlog.title);
        setAuthor(fetchedBlog.author);
        setDate(new Date(fetchedBlog.date).toISOString().substr(0, 10));
        setDescription(fetchedBlog.description);
        setContent(fetchedBlog.content);
        setUploadedFileName(fetchedBlog.image);
        setBlogListImageFileName(fetchedBlog.blogListImage);
        setBackgroundPosition(
          +fetchedBlog.coverPhotoBg.split(" ")[1].replace("%", "")
        );
        fetchedBlog.isMusicBlog &&
          setSignificantHoomans(
            JSON.parse(fetchedBlog.metadata).significantHoomans
          );

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id, loading]);

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

  async function updatePost(e) {
    e.preventDefault();

    const categoryId = categories.find((cat) => cat.title === category)._id;

    const data = new FormData();
    data.set("title", title);
    data.set("author", author);
    data.set("category", categoryId);
    data.set("date", formatDate(date));
    data.set("description", description);
    data.set("content", content);

    data.set("coverPhoto", files);
    data.set("blogListPhoto", blogListImageFiles);

    data.set("coverPhotoBg", `0 ${backgroundPosition}%`);

    if (blog.isMusicBlog) {
      const metadata = JSON.parse(blog.metadata);
      metadata.significantHoomans = formatHoomans(significantHoomans);
      data.set("metadata", JSON.stringify(metadata));
    }

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_APP_API_URL}/blogs/${id}`,
        data,
        { withCredentials: true }
      );

      navigate(`/blogs/${blog._id}`);
    } catch (error) {
      console.log("Error in Updating blog: ", error);
      const errorMsg =
        error.response?.data?.message || "An error occured Editing your blog!";
      showAlert("error", errorMsg);
    }
  }

  async function deleteHandler() {
    const userConfirmation = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (userConfirmation) {
      try {
        const res = await axios.delete(
          `${import.meta.env.VITE_APP_API_URL}/blogs/${id}`,
          {
            withCredentials: true,
          }
        );

        if (res.status === 204) {
          showAlert("success", "Successfully deleted!", 2.5);
          setTimeout(() => {
            navigate(`/blogs/categories`);
          }, 3000);
        }
      } catch (error) {
        console.log("Error in Updating blog: ", error);
        const errorMsg =
          error.response?.data?.message ||
          "An error occured Deleting your blog!";
        showAlert("error", errorMsg);
      }
    }
  }

  if (isLoading || loading || !blog) return <Loader />;

  return user && user.role === "admin" ? (
    <>
      <form className={styles.formContainer} onSubmit={updatePost}>
        <div
          className={styles.coverPhotoContainer}
          style={{
            backgroundImage: `url('${blog.image}')`,
            backgroundPosition: `0 ${backgroundPosition}%`,
          }}
        ></div>
        <RangeSlider
          blog={blog}
          backgroundPosition={backgroundPosition}
          setBackgroundPosition={setBackgroundPosition}
        />
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
        <input
          type="significantHoomans"
          placeholder={"Significant Hoomans (Stomps, Petey)"}
          value={significantHoomans}
          onChange={(e) => setSignificantHoomans(e.target.value)}
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
          onChange={(e) => {
            setDate(e.target.value);
          }}
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

        <button type="submit" className={styles.btn}>
          Update Blog
        </button>
        <button
          type="button"
          onClick={deleteHandler}
          className={`${styles.btn} ${styles.deleteBtn}`}
        >
          Delete Blog
        </button>
      </form>
    </>
  ) : (
    <NotFound />
  );
}

export default EditBlog;
