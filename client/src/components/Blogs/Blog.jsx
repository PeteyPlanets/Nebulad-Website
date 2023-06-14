import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

// Context
import { useUser } from "../../context/UserContext";

// Components
import CategoryAside from "./CategoryAside";
import RelatedContent from "./RelatedContent";
import MobileRelatedContent from "./MobileRelatedContent";
import YoutubeEmbed from "../UI/YoutubeEmbed";
import Loader from "../UI/Loader";

// Util
import getReleatedContent from "../../util/getRelatedContent";
import sanitizeContent from "../../util/sanitize";
import { getHoomans } from "../../util/significantHoomans";
import { showAlert } from "../../util/alerts";

// Styles
import styles from "./Blog.module.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [relatedContent, setRelatedContent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user, loading } = useUser();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  // Get blog
  useEffect(() => {
    const fetchBlog = async () => {
      if (loading) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/blogs/${id}`
        );

        // Check if blog exists
        if (response.data.blog) {
          setBlog(response.data.blog);
          setIsLoading(false);
        }

        setBlog(response.data.blog);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 404) {
          navigate("/error", {
            state: {
              statusCode: 404,
              message: "Sorry, we couldn't find the blog you were looking for.",
              redirect: "/",
              backToPage: "Home Page",
              title: "Blog Not Found",
            },
          });
        } else {
          // Handle other Errors
          showAlert("error", error.response.data.message);
          navigate("/");
        }
      }
    };
    fetchBlog();
  }, [id, loading]);

  // Get related content
  useEffect(() => {
    if (!blog) return;
    const fetchRelatedContent = async () => {
      try {
        const relatedContent = await getReleatedContent(blog);
        setRelatedContent(relatedContent);
      } catch (error) {
        console.error(error);
      }
    };

    if (blog) {
      fetchRelatedContent();
    }
  }, [blog]);

  const isAdmin = useMemo(() => {
    if (loading) return false;
    return user && user.role === "admin";
  }, [user, loading]);

  const editBtnHandler = () => {
    navigate(`/edit-blog/${blog._id}`);
  };

  const getVideoUrl = () => {
    const metadata = JSON.parse(blog.metadata);
    const songs = metadata.songs;

    const componentArray = songs.map((song) => {
      if (!song.video) return null;
      return <YoutubeEmbed key={song.video} url={song.video} />;
    });

    return <div className={styles.videoWrapper}>{componentArray}</div>;
  };

  const displayHoomans = (blog) => {
    const hoomans = getHoomans(blog);
    if (!hoomans) return;
    return hoomans.map((hooman) => {
      return (
        <div key={hooman.name} className={styles.hoomanContainer}>
          <img
            className={styles.hoomanAvatar}
            src={hooman.image}
            alt={`Image of ${hooman.name}`}
          />
          <p>{hooman.name}</p>
        </div>
      );
    });
  };

  return isLoading || loading || !blog || !relatedContent ? (
    <Loader />
  ) : (
    <article className={styles.blog}>
      <div className={styles.overlay}></div>
      <div
        className={styles.coverPhotoContainer}
        style={{
          backgroundImage: `url('${blog.image}')`,
          backgroundPosition: `${blog.coverPhotoBg}`,
        }}
      ></div>
      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.metaContainer}>
        <div className={styles.meta}>
          <Link to="/about-me" className={styles.profilePicture}>
            <img
              src={
                "https://nicky-blogs.s3.amazonaws.com/Nicky/Nicky_Ai_Avatar_Small.jpg"
              }
              alt="Profile Picture"
            />
          </Link>
          <Link className={styles.author} to="/about-me">
            {blog.author}
          </Link>
          <span className={styles.date}>
            <i style={{ marginRight: "5px" }} className="fas fa-clock"></i>
            {blog.date}
          </span>
        </div>
        {blog.isMusicBlog && (
          <div className={styles.sigHoomans}>
            <h4>Significant Hoomans</h4>
            {displayHoomans(blog)}
          </div>
        )}
      </div>
      {isAdmin && (
        <button className={styles.editButton} onClick={editBtnHandler}>
          <i className="fas fa-edit"></i> Edit
        </button>
      )}

      <div className={styles.mainContainer}>
        <div className={styles.blogContentContainer}>
          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: sanitizeContent(blog.content) }}
          />
          {blog.isMusicBlog && getVideoUrl()}
        </div>
        <aside className={styles.aside}>
          <CategoryAside
            title={`Category: ${blog.category.title}`}
            description={blog.category.description}
          />
          {relatedContent && isMobile ? (
            <MobileRelatedContent related={relatedContent} />
          ) : (
            <RelatedContent related={relatedContent} />
          )}
        </aside>
      </div>
    </article>
  );
};

export default Blog;
