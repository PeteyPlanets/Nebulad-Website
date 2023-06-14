import axios from "axios";

export const updateUserFavorites = async (userId, favorites) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_API_URL}/users/${userId}/favorites`,
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
