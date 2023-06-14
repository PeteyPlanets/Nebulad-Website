import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogList from "../components/Blogs/BlogList";
import Loader from "../components/UI/Loader";
import useBlogs from "../hooks/useBlogs";

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get("query");
  const queryText = `Showing results for "${query}"`;

  const { blogs, blogsLoading } = useBlogs();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (!blogsLoading) {
      const result = blogs.filter((blog) => {
        const lowerCaseQuery = query.toLowerCase();
        return (
          blog.title.toLowerCase().includes(lowerCaseQuery) ||
          blog.description.toLowerCase().includes(lowerCaseQuery) ||
          blog.category.title.toLowerCase().includes(lowerCaseQuery) ||
          blog.content.toLowerCase().includes(lowerCaseQuery) ||
          blog.metadata.toLowerCase().includes(lowerCaseQuery)
        );
      });

      setFilteredBlogs(result);
    }
  }, [blogs, blogsLoading, query]);

  if (blogsLoading) return <Loader />;
  return <BlogList blogs={filteredBlogs} category={null} query={queryText} />;
};

export default SearchPage;
