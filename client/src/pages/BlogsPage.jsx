import React from "react";
import { useParams } from "react-router-dom";

import BlogList from "../components/Blogs/BlogList";
import Loader from "../components/UI/Loader";
import useBlogsFromCategory from "../hooks/useBlogsFromCategory";
import useCategory from "../hooks/useCategory";

const BlogsPage = () => {
  const { id } = useParams();
  const { category, categoryLoading } = useCategory(id);
  const { blogs, blogsLoading } = useBlogsFromCategory(category.title, id);

  if (blogsLoading || categoryLoading) return <Loader />;

  return (
    <>
      <BlogList category={category} blogs={blogs} query={null} />
    </>
  );
};

export default BlogsPage;
