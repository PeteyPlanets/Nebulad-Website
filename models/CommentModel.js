import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  text: {
    type: String,
  },
  date: {
    type: Date,
  },
  author: {
    type: Tyes.ObjectId,
    ref: "User",
  },
  blog: {
    type: Tyes.ObjectId,
    ref: "Blog",
  },
});

const Comment = model("Comment", commentSchema);

export default Comment;
