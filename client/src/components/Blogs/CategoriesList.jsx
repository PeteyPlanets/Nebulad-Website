import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// Components
import Category from "./Category";
import Card from "../UI/Card";
import Divider from "../UI/Divider";

import styles from "./CategoriesList.module.css";

const CategoriesList = ({ categories }) => {
  const { user, loading } = useUser();
  const navigate = useNavigate();

  const isAdmin = useMemo(() => {
    if (loading) return false;
    return user && user.role === "admin";
  }, [user, loading]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Blog Categories</h2>

          {isAdmin && (
            <button
              className={styles.addNew}
              onClick={(e) => navigate("/blogs/categories/new")}
            >
              Add Category
            </button>
          )}
        </div>
        <Divider />
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category._id} className={styles.item}>
              <Card>
                <Category
                  imageSrc={category.image}
                  title={category.title}
                  description={category.description}
                  id={category._id}
                />
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesList;
