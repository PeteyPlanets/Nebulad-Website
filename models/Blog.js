import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    default: "No title",
  },
  content: {
    type: String,
    default: "No content...",
  },
  author: {
    type: String,
    default: "Nebulad",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Please select a category"],
  },
  date: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "https://nicky-blogs.s3.amazonaws.com/Public/Users/default.jpg",
  },
  blogListImage: {
    type: String,
    default: "https://nicky-blogs.s3.amazonaws.com/Public/Users/default.jpg",
  },
  coverPhotoBg: {
    type: String,
    default: "0 100%",
  },
  description: {
    type: String,
    default: "No description...",
  },
  metadata: {
    type: String,
    default: "",
  },
  isMusicBlog: {
    type: Boolean,
    default: false,
  },
});

const Blog = model("Blog", blogSchema);

export default Blog;
