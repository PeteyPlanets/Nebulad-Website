import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";
import styles from "./Unsubscribe.module.css";

const Unsubscribe = () => {
  const { id: emailId } = useParams();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAlreadyUnsubscribed, setIsAlreadyUnsubscribed] = useState(false);

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/emails/unsubscribe/${emailId}`
      );
      setMessage(response.data);
      setIsAlreadyUnsubscribed(true);
    } catch (error) {
      setMessage(error.response.data);
    } finally {
      setIsLoading(false); // Reset loading state regardless of outcome
    }
  };

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/emails/${emailId}`);
        const isSubscribed = response.data.data.email.unsubscribed;
        setIsAlreadyUnsubscribed(isSubscribed);

        setMessage(
          isSubscribed
            ? "You are already unsubscribed."
            : "Are you sure you want to unsubscribe?"
        );
      } catch (error) {
        setMessage(
          "Failed to check subscription status. Please try again later."
        );
        // Disable the button if user does not exist (id in url not found in DB). could use a new piece of state but why?
        setIsAlreadyUnsubscribed(true);
      }
    };

    checkSubscriptionStatus();
  }, [emailId]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <img
            src="https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"
            alt="Nebulad Logo"
          />
          <p className={styles.text}>{message}</p>
          <button
            className={styles.link}
            onClick={handleUnsubscribe}
            disabled={isLoading || isAlreadyUnsubscribed}
          >
            {isLoading ? "Processing..." : "Unsubscribe"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Unsubscribe;
