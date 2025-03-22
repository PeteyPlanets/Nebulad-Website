import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogList from "../components/Blogs/BlogList";
import Loader from "../components/UI/Loader";
import useBlogs from "../hooks/useBlogs";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const queryText = `Showing results for "${query}"`;

  const { blogs, blogsLoading } = useBlogs();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (!blogsLoading) {
      const lowerCaseQuery = query.toLowerCase();
      const result = blogs.filter((blog) => {
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
  }, [blogs, blogsLoading, location.key]); // <-- location.key ensures re-triggering each time!

  if (blogsLoading) return <Loader />;

  return (
    <BlogList
      blogs={filteredBlogs}
      category={null}
      query={queryText}
      resetPaginationKey={location.key}
    />
  );
};

export default SearchPage;
