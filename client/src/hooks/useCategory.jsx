import React, { useState, useEffect } from "react";
import axios from "axios";

const useCategory = (id) => {
  const [category, setCategory] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/categories/${id}`
        );
        setCategory(response.data.category);
        setCategoryLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategory();
  }, [id]);

  return { category, categoryLoading };
};
export default useCategory;
