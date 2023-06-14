import { useState, useEffect } from "react";
import axios from "axios";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/blogs`
        );
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
