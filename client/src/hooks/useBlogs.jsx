import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs`);
        setBlogs(response.data.blogs);
        setBlogsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return { blogs, blogsLoading };
};
export default useBlogs;
