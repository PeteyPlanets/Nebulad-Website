import React, { useState, useEffect } from "react";
import axios from "axios";

import useCategories from "../hooks/useCategories";
import CategoriesList from "../components/Blogs/CategoriesList";
import Loader from "../components/UI/Loader";

const CategoriesPage = () => {
  const { categories, isLoading } = useCategories();
  return isLoading ? <Loader /> : <CategoriesList categories={categories} />;
};

export default CategoriesPage;
