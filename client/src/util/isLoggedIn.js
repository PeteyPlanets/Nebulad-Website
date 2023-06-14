import axios from "axios";

export const isLoggedIn = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/users/isLoggedIn`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
