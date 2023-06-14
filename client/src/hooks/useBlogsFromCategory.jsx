import React, { useState, useEffect } from "react";
import axios from "axios";

const useBlogsFromCategory = (title, categoryId) => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    if (!title) return;

    const fetchBlogs = async () => {
      try {
        const blogsResponse = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/blogs`
        );
        const blogs = blogsResponse.data.blogs.filter(
          (blog) => blog.category._id === categoryId
        );
        const sortedBlogs = blogs.sort((a, b) => {
          return Date.parse(a.date) - Date.parse(b.date);
        });
        setBlogs(sortedBlogs);
        setBlogsLoading(false);
      } catch (error) {
        console.error(error);
        setBlogsLoading(false);
      }
    };
    fetchBlogs();
  }, [title, categoryId]);

  return { blogs, blogsLoading };
};

export default useBlogsFromCategory;
