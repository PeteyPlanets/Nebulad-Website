import express from "express";
import {
  getAboutMe,
  createAboutMe,
  updateAboutMe,
} from "../controllers/aboutController.js";
import fileUpload from "express-fileupload";
import { protect, restrictTo } from "../controllers/authController.js";

const router = express.Router();

// Public route to fetch About Me
router.get("/", getAboutMe);

// Admin-only route to create About Me (useful for initial setup via Postman)
router.post("/", protect, fileUpload(), createAboutMe);

// Admin-only route to update About Me
router.patch("/", protect, updateAboutMe);

export default router;
