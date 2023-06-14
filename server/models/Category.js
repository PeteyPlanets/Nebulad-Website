import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: "No description...",
  },
  image: {
    type: String,
    default: "https://nicky-blogs.s3.amazonaws.com/Public/Users/default.jpg",
  },
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

const Category = model("Category", categorySchema);

export default Category;
