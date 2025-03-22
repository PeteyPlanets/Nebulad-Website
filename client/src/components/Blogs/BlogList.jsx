import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useUser } from "../../context/UserContext";

// Components
import BlogCard from "./BlogCard";
import Divider from "../UI/Divider";
import Card from "../UI/Card";
import Loader from "../UI/Loader";

//  Styles
import styles from "./BlogList.module.css";

// Util
import extractTextFromHTML from "../../util/parseHTML";

function BlogList({ category, blogs, query, resetPaginationKey }) {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const { user, loading } = useUser();
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(9);
  const [activePage, setActivePage] = useState(1);

  // Effect A: Always reset to page 1 explicitly on searches or category change
  useEffect(() => {
    setCurrentPage(1);
    setActivePage(1);
    localStorage.setItem("currentPage", 1);
  }, [resetPaginationKey, category, query]);

  // Effect B: Only run on first mount if there's no query or reset key
  useEffect(() => {
    if (!query && !resetPaginationKey) {
      const savedPage = localStorage.getItem("currentPage");
      const page = savedPage ? Number(savedPage) : 1;
      setCurrentPage(page);
      setActivePage(page);
    }
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0; // Scrolling to the top of the window on page change
  }, [currentPage]);

  // Functions to change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
    localStorage.setItem("currentPage", pageNumber);
  };
  const nextPage = () => {
    if (currentPage < Math.ceil(blogs.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
      setActivePage(currentPage + 1);
      localStorage.setItem("currentPage", currentPage);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setActivePage(currentPage - 1);
      localStorage.setItem("currentPage", currentPage);
    }
  };

  const isAdmin = useMemo(() => {
    if (loading) return false;
    return user && user.role === "admin";
  }, [user, loading]);

  if (loading) return <Loader />;

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.avatarHeading}>
          {category && (
            <img
              src={category.image}
              alt={`${category.title} avatar`}
              className={styles.avatar}
            />
          )}
          <h2 className={styles.title}>{!category ? query : category.title}</h2>
        </div>

        {isAdmin && category && (
          <div className={styles.btnContainer}>
            <button
              className={styles.editBtn}
              onClick={() => navigate(`/edit-category/${category._id}`)}
              title="Title / description / image"
            >
              Edit Category
            </button>
            <button
              className={styles.addNew}
              onClick={() => navigate(`/blogs/new`)}
              title="Create new blog"
            >
              Add Blog
            </button>
          </div>
        )}
        {!isAdmin ||
          (isAdmin && query && (
            <div className={styles.pagesVisibleText}>
              ({(currentPage - 1) * blogsPerPage + 1}-
              {Math.min(currentPage * blogsPerPage, blogs.length)} of{" "}
              {blogs.length} blogs)
            </div>
          ))}
      </div>
      <Divider />
      <ul className={styles.list}>
        {currentBlogs.map((blog, index) => (
          <li
            key={blog._id}
            className={styles.item}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card>
              <BlogCard
                id={blog._id}
                imageSrc={blog.blogListImage}
                title={blog.title}
                content={extractTextFromHTML(blog.content)}
                date={blog.date}
                comments={blog.comments}
                className={styles.item}
                categoryId={blog.category._id}
              />
            </Card>
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        <button className={styles.prevBtn} onClick={prevPage}>
          &larr; Prev
        </button>
        {!isMobile &&
          [...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(
            (number) => (
              <button
                key={number + 1}
                className={`${styles.pageBtn} ${
                  number + 1 === activePage ? `${styles.activeButton}` : ""
                }`}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            )
          )}
        <button className={styles.nextBtn} onClick={nextPage}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default BlogList;
