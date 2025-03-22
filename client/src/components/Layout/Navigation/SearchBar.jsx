import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleFocus = () => {
    setIsExpanded(true);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <form onSubmit={handleSearch} className={styles.search}>
      <button type="button" className={styles.searchBtn} onClick={handleFocus}>
        <i className="fa fa-search"></i>
      </button>
      <input
        type="text"
        className={`${styles.searchBox} ${isExpanded ? styles.expanded : ""}`}
        placeholder="Search blogs..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputRef}
      />
    </form>
  );
}

export default SearchBar;
