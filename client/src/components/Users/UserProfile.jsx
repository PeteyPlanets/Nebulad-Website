import React from "react";
import { useUser } from "../../context/UserContext";
import Loader from "../UI/Loader";
import UserForm from "./UserForm";

import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const { user, loading } = useUser();

  if (loading) return <Loader />;

  return (
    <>
      <div className={styles.userDisplay}>
        <img
          src={user.photo}
          alt={`${user.name}'s profile picture`}
          title={`${user.name}'s profile picture`}
        />
        <div className={styles.usernameContainer}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <UserForm />
    </>
  );
};

export default UserProfile;
