import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        setCategories(response.data.categories);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories: fuck.", error);
      }
    }

    fetchCategories();
  }, []);

  return { categories, isLoading };
};
export default useCategories;
