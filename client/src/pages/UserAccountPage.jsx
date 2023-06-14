import React from "react";
import { Route, Routes } from "react-router-dom";
import { useUser } from "../context/UserContext";

// Components
import ChangePassword from "../components/Users/ChangePassword";
import FavoriteBlogs from "../components/Users/FavoriteBlogs";
import SideNav from "../components/Users/SideNav";
import UserProfile from "../components/Users/UserProfile";
import Loader from "../components/UI/Loader";
import ErrorPage from "./ErrorPage";

import styles from "./UserAccountPage.module.css";

const UserAccountPage = () => {
  const { user, loading } = useUser();

  if (loading) return <Loader />;
  if (!user) return <ErrorPage />;
  return (
    <div className={styles.container}>
      <SideNav />
      <div className={styles.dashboard}>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<ChangePassword />} />
          <Route path="/favorites" element={<FavoriteBlogs />} />
          {/* <Route path="/notifications" element={<Notifications />} />
          <Route path="/subscription" element={<Subscription />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default UserAccountPage;
