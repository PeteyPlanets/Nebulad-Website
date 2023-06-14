import React from "react";
import ReactQuill from "react-quill";

import styles from "./Editor.module.css";

export default function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link", "image"],
    ],
  };
  return (
    <ReactQuill
      value={value}
      theme={"snow"}
      className={styles.editor}
      onChange={onChange}
      modules={modules}
    />
  );
}
