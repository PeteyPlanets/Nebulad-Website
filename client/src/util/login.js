import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_APP_API_URL}/users/login`,
      data: {
        email,
        password,
      },
      withCredentials: true,
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/users/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    if ((res.data.status = "success")) console.log("SUCESS");
  } catch (err) {
    console.log(err);
    showAlert("error", "Error logging out! Try again.");
  }
};

export const signup = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_APP_API_URL}/users/signup`,
      data,
    });

    if (res.data.status === "success") {
      // ToDo: Send email confirmation for account setup
      //

      showAlert("success", "Account created! Please check your email", 2);
      window.setTimeout(() => {
        location.assign("/");
      }, 2500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export async function checkLoggedInStatus(setUser) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/users/isLoggedIn`,
      {
        withCredentials: true,
      }
    );

    if (response.data.status === "success" && response.data.isLoggedIn) {
      setUser(response.data.user);
    }
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      setUser(null);
    } else {
      console.error(
        "Error fetching user data from checkLoggedInStatus:",
        error
      );
    }
  }
}
