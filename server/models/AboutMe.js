import { Schema, model } from "mongoose";

const aboutMeSchema = new Schema({
  content: {
    type: String, // store rich HTML directly from editor
    default: "",
  },
  image: {
    type: String,
    default: "https://nicky-blogs.s3.amazonaws.com/Nicky/Nicky_Ai_Avatar.png",
  },
});

const AboutMe = model("AboutMe", aboutMeSchema);
export default AboutMe;
