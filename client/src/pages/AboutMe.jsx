import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const { user, loading } = useUser();
  const navigate = useNavigate();

  const [aboutData, setAboutData] = useState({ content: "", image: "" });

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/about`);
        setAboutData(res.data.about || {});
      } catch (err) {
        console.error("Failed to load About Me content");
      }
    };

    fetchAboutMe();
  }, []);

  const isAdmin = useMemo(() => {
    if (loading) return false;
    return user && user.role === "admin";
  }, [user, loading]);

  const editHandler = () => {
    navigate("/edit-about-me");
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h1>About Me</h1>
            <div dangerouslySetInnerHTML={{ __html: aboutData.content }} />
          </div>
          <div className={styles.heroImg}>
            <img
              src={
                aboutData.image ||
                "https://nicky-blogs.s3.amazonaws.com/Nicky/Nicky_Ai_Avatar.png"
              }
              alt="Picture of me, Nicky Marino"
            />
          </div>
        </div>

        {isAdmin && (
          <button className={styles.editButton} onClick={editHandler}>
            <i className="fas fa-edit"></i> Edit
          </button>
        )}
      </div>

      <div className={styles.timelineContainer}>
        <img
          className={styles.scrollImage}
          src="https://nicky-blogs.s3.amazonaws.com/Nicky/Timeline.png"
          alt=""
        />
        <img
          className={styles.scrollImage}
          src="https://nicky-blogs.s3.amazonaws.com/Nicky/Timeline.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutMe;
