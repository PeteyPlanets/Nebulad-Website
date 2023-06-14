import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { showAlert } from "../../util/alerts";
import { updateUserFavorites } from "../../util/updateUserFavorites";
import { useUser } from "../../context/UserContext";
import Loader from "../UI/Loader";

// Styles
import styles from "./BlogCard.module.css";

const BlogCard = ({ id, imageSrc, title, content, date, comments }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, updateUser, loading } = useUser();
  const navigate = useNavigate();

  // Set favorited blogs
  useEffect(() => {
    if (!user || loading) return;

    setIsFavorite(user.favorites.includes(id));
    setIsLoading(false);
  }, [user, loading, id]);

  const clickHandler = () => {
    navigate(`/blogs/${id}`);
  };

  const toggleFavorite = async (e) => {
    e.stopPropagation();

    try {
      const newFavorites = isFavorite
        ? user.favorites.filter((favId) => favId !== id)
        : [...user.favorites, id];
      const updatedUser = await updateUserFavorites(user._id, newFavorites);
      updateUser(updatedUser); // Update the user object in the global context
      showAlert(
        "success",
        isFavorite ? "Removed from favorites!" : "Added to favorites!"
      );
      setIsFavorite(!isFavorite);
      // setIsFavorite((prev) => !prev);
    } catch (error) {
      setError("🚨 Failed to add! 🚨");
      showAlert("error", error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className={styles.blogCard} onClick={clickHandler}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title} title={title}>
          {title}
        </h2>
        <div className={styles.dateContainer}>
          <span className={styles.date}>{date}</span>
          <span>&bull;</span>
          <span className={styles.comments}>{comments || 0} comments</span>
        </div>
        <p className={styles.content}>{content}</p>

        <Link className={styles.readMore}>Read More &gt;</Link>
      </div>
      {user && (
        <>
          {!error && (
            <i
              className={`${styles.favoriteIcon} ${
                isFavorite ? "fas fa-heart" : "far fa-heart"
              } `}
              onClick={toggleFavorite}
              title="Add this blog to your favorites"
            ></i>
          )}
          {isLoading && <Loader />}{" "}
          {error && <div className={styles.errorMessage}>{error}</div>}
        </>
      )}
    </div>
  );
};

export default BlogCard;
