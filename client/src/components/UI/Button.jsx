import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ label, onClick, className, disabled }) => {
  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  disabled: false,
};

export default Button;
