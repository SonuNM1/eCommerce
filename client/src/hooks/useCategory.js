import { useState, useEffect } from "react";
import axios from "axios";

// Set the base URL from the environment variable

const API_URL = process.env.REACT_APP_API;

export default function useCategory() {

  const [categories, setCategories] = useState([]);

  // Get categories

  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/category/get-category`);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
