import axios from "axios";
import { API_BASE_URL } from "../apiConfig";

export const isLoggedIn = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/isLoggedIn`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
