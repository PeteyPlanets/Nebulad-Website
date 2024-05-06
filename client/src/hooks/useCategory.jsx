import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";

const useCategory = (id) => {
  const [category, setCategory] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
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
