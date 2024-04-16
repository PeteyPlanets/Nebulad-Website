import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
console.log("ATTTTEMMPTING THIS!!!!! -> ", API_BASE_URL);

export const updateUserFavorites = async (userId, favorites) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/users/${userId}/favorites`,
      {
        favorites,
      },
      { withCredentials: true }
    );

    return response.data.data.user;
  } catch (error) {
    throw error;
  }
};
